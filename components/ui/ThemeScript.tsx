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

          // Prevent unhandled error event from bubbling when circular structure errors occur or extension fetch fails
          window.addEventListener('error', function(event) {
            var msg = (event && event.message) ? String(event.message) : '';
            if (
              msg.indexOf('Converting circular structure to JSON') !== -1 ||
              msg.indexOf('circular') !== -1 ||
              msg.indexOf('Cannot set property fetch') !== -1 ||
              (msg.indexOf('fetch') !== -1 && msg.indexOf('getter') !== -1)
            ) {
              if (event.preventDefault) event.preventDefault();
              if (event.stopImmediatePropagation) event.stopImmediatePropagation();
              return true;
            }
          }, true);

          // Redefine window.fetch with a setter so assignments succeed
          var currentFetch = window.fetch;
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
          } catch (err) {
            try {
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
            } catch (e2) {}
          }
        }
      } catch (e) {}

      // 2. Early theme initialization
      try {
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

