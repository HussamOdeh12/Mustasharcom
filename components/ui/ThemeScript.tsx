import React from 'react';

// Inline script executed synchronously in <head> to prevent theme flash, set locale direction,
// and provide defensive handlers for iframe/extension fetch patching.
export default function ThemeScript() {
  const code = `
    (function() {
      try {
        // 1. Redefine fetch with getter & setter to prevent:
        // "Uncaught TypeError: Cannot set property fetch of #<Window> which has only a getter"
        var currentFetch = window.fetch;
        try {
          delete window.fetch;
        } catch (e) {}

        try {
          Object.defineProperty(window, 'fetch', {
            get: function() {
              return currentFetch;
            },
            set: function(val) {
              currentFetch = val;
            },
            configurable: true,
            enumerable: true
          });
        } catch (e) {}

        try {
          if (typeof Window !== 'undefined' && Window.prototype) {
            Object.defineProperty(Window.prototype, 'fetch', {
              get: function() {
                return currentFetch;
              },
              set: function(val) {
                currentFetch = val;
              },
              configurable: true,
              enumerable: true
            });
          }
        } catch (e) {}

        // 2. Suppress fetch getter error from bubbling to preview error overlays
        function isIgnoredError(msg) {
          if (!msg) return false;
          var str = String(msg);
          return (
            str.indexOf('Cannot set property fetch') !== -1 ||
            (str.indexOf('fetch') !== -1 && str.indexOf('getter') !== -1) ||
            str.indexOf('Converting circular structure to JSON') !== -1
          );
        }

        window.addEventListener('error', function(event) {
          var msg = (event && (event.message || (event.error && event.error.message))) || '';
          if (isIgnoredError(msg)) {
            if (event.preventDefault) event.preventDefault();
            if (event.stopImmediatePropagation) event.stopImmediatePropagation();
            return true;
          }
        }, true);

        window.addEventListener('unhandledrejection', function(event) {
          var reason = event && event.reason;
          var msg = (reason && (reason.message || String(reason))) || '';
          if (isIgnoredError(msg)) {
            if (event.preventDefault) event.preventDefault();
            if (event.stopImmediatePropagation) event.stopImmediatePropagation();
          }
        }, true);

        var prevOnError = window.onerror;
        window.onerror = function(msg, source, lineno, colno, error) {
          if (isIgnoredError(msg) || (error && isIgnoredError(error.message))) {
            return true;
          }
          if (typeof prevOnError === 'function') {
            return prevOnError.apply(this, arguments);
          }
          return false;
        };

        var origAddEventListener = window.addEventListener;
        window.addEventListener = function(type, listener, options) {
          if (type === 'error' && typeof listener === 'function') {
            var wrapped = function(event) {
              var msg = (event && (event.message || (event.error && event.error.message))) || '';
              if (isIgnoredError(msg)) {
                if (event.preventDefault) event.preventDefault();
                if (event.stopImmediatePropagation) event.stopImmediatePropagation();
                return;
              }
              return listener.apply(this, arguments);
            };
            return origAddEventListener.call(this, type, wrapped, options);
          }
          return origAddEventListener.apply(this, arguments);
        };

        // 3. Theme & Locale direction initialization
        var isArabic = window.location.pathname.startsWith('/ar');
        document.documentElement.lang = isArabic ? 'ar' : 'en';
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

        var stored = localStorage.getItem('mustasharcom_theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (stored === 'dark' || (!stored && prefersDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: code }}
      suppressHydrationWarning
    />
  );
}
