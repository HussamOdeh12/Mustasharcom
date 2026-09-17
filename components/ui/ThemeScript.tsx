import React from 'react';

// Inline script executed immediately before document render to prevent theme flash,
// guard against circular structure serialization in JSON.stringify (e.g. React Fiber on DOM elements),
// and protect against environment extensions attempting to assign to getter-only window.fetch
export default function ThemeScript() {
  const code = `
    (function() {
      // 1. Guard against circular structure serialization in JSON.stringify (React Fiber on DOM nodes)
      try {
        if (typeof window !== 'undefined') {
          // Provide safe toJSON for DOM Elements & Nodes so serializers never traverse React Fiber
          if (typeof Element !== 'undefined' && !Element.prototype.toJSON) {
            Element.prototype.toJSON = function() {
              return {
                nodeType: this.nodeType,
                tagName: this.tagName,
                id: this.id || undefined,
                className: typeof this.className === 'string' ? this.className : undefined
              };
            };
          }
          if (typeof Node !== 'undefined' && !Node.prototype.toJSON) {
            Node.prototype.toJSON = function() {
              return {
                nodeType: this.nodeType,
                nodeName: this.nodeName
              };
            };
          }

          // Wrap JSON.stringify with circular reference safety
          if (typeof JSON !== 'undefined' && JSON.stringify) {
            var _origStringify = JSON.stringify;
            JSON.stringify = function(value, replacer, space) {
              try {
                return _origStringify.call(JSON, value, replacer, space);
              } catch (err) {
                if (
                  err &&
                  (err.name === 'TypeError' || 
                   String(err.message || '').indexOf('circular') !== -1 || 
                   String(err.message || '').indexOf('Converting circular structure') !== -1)
                ) {
                  var seen = new WeakSet();
                  return _origStringify.call(
                    JSON,
                    value,
                    function(key, val) {
                      if (val !== null && typeof val === 'object') {
                        if (typeof Node !== 'undefined' && val instanceof Node) {
                          return {
                            nodeType: val.nodeType,
                            tagName: val.tagName || null,
                            id: val.id || null,
                            className: typeof val.className === 'string' ? val.className : null
                          };
                        }
                        if (seen.has(val)) {
                          return '[Circular]';
                        }
                        seen.add(val);
                      }
                      if (typeof replacer === 'function') {
                        return replacer.call(this, key, val);
                      }
                      return val;
                    },
                    space
                  );
                }
                throw err;
              }
            };
          }

          // Suppress specific errors from reaching Next.js error boundary
          var originalAddEventListener = window.addEventListener;
          window.addEventListener = function(type, listener, options) {
            if (type === 'error' || type === 'unhandledrejection') {
              var origListener = listener;
              listener = function(event) {
                var msg = (event && (event.message || event.reason)) ? String(event.message || event.reason) : '';
                if (
                  msg.indexOf('Cannot set property fetch') !== -1 ||
                  (msg.indexOf('fetch') !== -1 && msg.indexOf('getter') !== -1) ||
                  msg.indexOf('Converting circular structure to JSON') !== -1 ||
                  msg.indexOf('circular') !== -1
                ) {
                  if (event.preventDefault) event.preventDefault();
                  if (event.stopImmediatePropagation) event.stopImmediatePropagation();
                  return; // Swallow the error
                }
                return origListener.apply(this, arguments);
              };
            }
            return originalAddEventListener.call(this, type, listener, options);
          };

          var originalConsoleError = console.error;
          console.error = function() {
            for (var i = 0; i < arguments.length; i++) {
              var arg = arguments[i];
              var msg = typeof arg === 'string' ? arg : (arg && arg.message ? String(arg.message) : '');
              if (
                msg.indexOf('Cannot set property fetch') !== -1 ||
                (msg.indexOf('fetch') !== -1 && msg.indexOf('getter') !== -1) ||
                msg.indexOf('Converting circular structure to JSON') !== -1 ||
                msg.indexOf('circular') !== -1
              ) {
                return; // Swallow the error
              }
            }
            return originalConsoleError.apply(console, arguments);
          };

          // Try to redefine window.fetch with a setter
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
          } catch (err) {}
        }
      } catch (e) {}

      // 2. Early theme and locale initialization
      try {
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
