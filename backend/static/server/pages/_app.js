(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, pageProps);
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

/***/ }),

/***/ "./pages/_app/index.tsx":
/*!******************************!*\
  !*** ./pages/_app/index.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/swiper.scss */ "./node_modules/swiper/swiper.scss");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Definitions_Styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Definitions/Styled */ "./src/Definitions/Styled/index.ts");
/* harmony import */ var _Redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Redux */ "./src/Redux/index.ts");
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/Layout */ "./src/Components/Layout/index.ts");
/* harmony import */ var _Services_API_DateFormat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Services/API/DateFormat */ "./src/Services/API/DateFormat/index.ts");
/* harmony import */ var _Static_css_main_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Static/css/main.scss */ "./public/static/css/main.scss");
/* harmony import */ var _Static_css_main_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Static_css_main_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "C:\\github\\priceView\\frontend\\pages\\_app\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Import Swiper styles


// #region Global Imports




 // #endregion Global Imports
// #region Local Imports

 // import { appWithTranslation } from "@Server/i18n";






 // #endregion Local Imports

class WebApp extends (next_app__WEBPACK_IMPORTED_MODULE_5___default()) {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleRouteChange", url => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        nextPathname: url.split("?")[0]
      }));
    });

    this.state = {
      nextPathname: this.props.router.pathname
    };
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      pageProps: pageProps
    };
  }

  componentDidMount() {
    this.props.router.events.on("routeChangeStart", this.handleRouteChange);
  }

  componentWillUnmount() {
    this.props.router.events.off("routeChangeStart", this.handleRouteChange);
  }

  render() {
    const {
      Component,
      pageProps,
      router,
      app
    } = this.props;
    const {
      nextPathname
    } = this.state;
    const AppLayout = _Components_Layout__WEBPACK_IMPORTED_MODULE_10__.default[(pageProps === null || pageProps === void 0 ? void 0 : pageProps.layout) || _Components_Layout__WEBPACK_IMPORTED_MODULE_10__.LayoutCode.Default];
    const theme = _Definitions_Styled__WEBPACK_IMPORTED_MODULE_8__.ThemeObj[_Definitions_Styled__WEBPACK_IMPORTED_MODULE_8__.ThemeType[app.sel_theme] || _Definitions_Styled__WEBPACK_IMPORTED_MODULE_8__.ThemeType.WHITE];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_7__.TransitionGroup, {
        style: {
          overflow: "hidden",
          position: "relative",
          width: "100%",
          height: "100%",
          perspective: "500px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_7__.CSSTransition, {
          appear: true,
          // url 로 적용하기
          timeout: 300 // classNames="item"
          ,
          classNames: (pageProps === null || pageProps === void 0 ? void 0 : pageProps.transition) || "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "l_transition " + nextPathname,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__.PersistGate, {
              persistor: _Redux__WEBPACK_IMPORTED_MODULE_9__.persistor,
              loading: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Loading"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 73
              }, this),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppLayout, _objectSpread(_objectSpread({}, pageProps), {}, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 37
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this)
        }, router.pathname, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this);
  }

}

const mapStateToProps = state => ({
  app: state.app
}); // export default wrapper.withRedux(withRouter(WebApp))
// export default withRedux(makeStore)(appWithTranslation(WebApp));


/* harmony default export */ __webpack_exports__["default"] = (_Redux__WEBPACK_IMPORTED_MODULE_9__.wrapper.withRedux((0,react_redux__WEBPACK_IMPORTED_MODULE_13__.connect)(mapStateToProps)((0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(WebApp))));

/***/ }),

/***/ "./src/Actions/AppActions/index.ts":
/*!*****************************************!*\
  !*** ./src/Actions/AppActions/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppActions": function() { return /* binding */ AppActions; }
/* harmony export */ });
/* harmony import */ var _Definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Definitions */ "./src/Definitions/index.ts");
// #region Global Imports
// #endregion Global Imports
// #region Local Imports
 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
const AppActions = {
  // Map: (payload: {}) => ({
  //     payload,
  //     type: ActionConsts.App.SetReducer,
  // }),
  Reset: () => ({
    type: _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.App.ResetReducer
  }),
  SetSelCate: payload => async dispatch => {
    dispatch({
      payload: payload,
      type: _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.App.SetSelCateReducer
    });
  }
};

/***/ }),

/***/ "./src/Actions/StarActions/index.ts":
/*!******************************************!*\
  !*** ./src/Actions/StarActions/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarActions": function() { return /* binding */ StarActions; }
/* harmony export */ });
/* harmony import */ var _Definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Definitions */ "./src/Definitions/index.ts");
// #region Global Imports
// #endregion Global Imports
// #region Local Imports
 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
const StarActions = {
  // Map: (payload: {}) => ({
  //     payload,
  //     type: ActionConsts.Star.SetReducer,
  // }),
  Reset: () => ({
    type: _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.Star.ResetReducer
  }),
  AddStar: payload => async dispatch => {
    dispatch({
      payload: {
        seq: payload.seq
      },
      type: _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.Star.AddReducer
    });
  },
  RemoveStar: payload => async dispatch => {
    dispatch({
      payload: {
        seq: payload.seq
      },
      type: _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.Star.RemoveReducer
    });
  }
};

/***/ }),

/***/ "./src/Actions/index.ts":
/*!******************************!*\
  !*** ./src/Actions/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppActions */ "./src/Actions/AppActions/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppActions__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _AppActions__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _StarActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarActions */ "./src/Actions/StarActions/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _StarActions__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _StarActions__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./src/Components/Atom/Atom.d.ts":
/*!***************************************!*\
  !*** ./src/Components/Atom/Atom.d.ts ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "./src/Components/Atom/Button/index.tsx":
/*!**********************************************!*\
  !*** ./src/Components/Atom/Button/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_3__.StyledButton; },
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/Components/Atom/Button/styled.ts");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Atom\\Button\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports

 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports



const Button = props => {
  const {
    href
  } = props;

  if (href !== undefined) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: href,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.StyledButton, _objectSpread({
        as: "a"
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.StyledButton, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }, undefined);
};

Button.defaultProps = {
  type: "button"
};


/***/ }),

/***/ "./src/Components/Atom/Button/styled.ts":
/*!**********************************************!*\
  !*** ./src/Components/Atom/Button/styled.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": function() { return /* binding */ StyledButton; }
/* harmony export */ });
/* harmony import */ var _Components_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/styles */ "./src/Components/styles.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-1hke0oh-0"
})(["display:inline-flex;justify-content:center;align-items:center;width:fit-content;border:1px solid;border-radius:2px;", " ", " ", " ", " ", ""], _Components_styles__WEBPACK_IMPORTED_MODULE_0__.SizeStyle, _Components_styles__WEBPACK_IMPORTED_MODULE_0__.CoverStyle, _Components_styles__WEBPACK_IMPORTED_MODULE_0__.PaddingStyle, _Components_styles__WEBPACK_IMPORTED_MODULE_0__.DisabledStyle, _Components_styles__WEBPACK_IMPORTED_MODULE_0__.ShowStyle);

/***/ }),

/***/ "./src/Components/Atom/Select/index.tsx":
/*!**********************************************!*\
  !*** ./src/Components/Atom/Select/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledSelect": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_2__.StyledSelect; },
/* harmony export */   "Select": function() { return /* binding */ Select; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Components/Atom/Select/styled.tsx");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Atom\\Select\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports
 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports



const Select = props => {
  const {
    value,
    setValue
  } = props;
  const onChangeSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.StyledSelect, _objectSpread(_objectSpread({}, props), {}, {
    onChange: onChangeSelect
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 12
  }, undefined);
};



/***/ }),

/***/ "./src/Components/Atom/Select/styled.tsx":
/*!***********************************************!*\
  !*** ./src/Components/Atom/Select/styled.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledSelect": function() { return /* binding */ StyledSelect; }
/* harmony export */ });
/* harmony import */ var _Components_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/styles */ "./src/Components/styles.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


// wrapped styled-component and re-typed it works as expected
const StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_1___default().select.withConfig({
  displayName: "styled__StyledSelect",
  componentId: "sc-1a1s51z-0"
})(["display:inline-flex;justify-content:center;align-items:center;width:fit-content;border:1px solid;border-radius:2px;", " ", " ", " ", " ", ""], _Components_styles__WEBPACK_IMPORTED_MODULE_0__.SizeStyle, _Components_styles__WEBPACK_IMPORTED_MODULE_0__.CoverStyle, _Components_styles__WEBPACK_IMPORTED_MODULE_0__.PaddingStyle, _Components_styles__WEBPACK_IMPORTED_MODULE_0__.DisabledStyle, _Components_styles__WEBPACK_IMPORTED_MODULE_0__.ShowStyle);

/***/ }),

/***/ "./src/Components/Atom/Title/index.tsx":
/*!*********************************************!*\
  !*** ./src/Components/Atom/Title/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTitle": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_2__.StyledTitle; },
/* harmony export */   "Title": function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Components/Atom/Title/styled.ts");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Atom\\Title\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports
 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports



const Title = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.StyledTitle, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, undefined);
};

Title.defaultProps = {
  as: "h1"
};


/***/ }),

/***/ "./src/Components/Atom/Title/styled.ts":
/*!*********************************************!*\
  !*** ./src/Components/Atom/Title/styled.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTitle": function() { return /* binding */ StyledTitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const TitleSizeStyle = ({
  as
}) => {
  switch (as) {
    case "h1":
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-weight:700;font-size:26px;"]);
      }

    case "h2":
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-weight:500;font-size:22px;"]);
      }

    case "h3":
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:18px;"]);
      }

    case "h4":
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:16px;"]);
      }

    case "h5":
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:16px;"]);
      }

    case "h6":
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:16px;"]);
      }
  }
};

const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "styled__StyledTitle",
  componentId: "sc-1oqck5l-0"
})(["line-height:1;", ""], TitleSizeStyle);

/***/ }),

/***/ "./src/Components/Atom/index.ts":
/*!**************************************!*\
  !*** ./src/Components/Atom/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Components/Atom/Button/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Button__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Button__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select */ "./src/Components/Atom/Select/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Select__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Select__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./src/Components/Atom/Title/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Title__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Title__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Atom_d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Atom.d */ "./src/Components/Atom/Atom.d.ts");
/* harmony import */ var _Atom_d__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Atom_d__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Atom_d__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Atom_d__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





/***/ }),

/***/ "./src/Components/Components.ts":
/*!**************************************!*\
  !*** ./src/Components/Components.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SizeCode": function() { return /* binding */ SizeCode; }
/* harmony export */ });
const SizeCode = {
  small: 101,
  normal: 102,
  large: 103,
  icon: 104,
  profile: 105
};

/***/ }),

/***/ "./src/Components/Layout/Default/index.tsx":
/*!*************************************************!*\
  !*** ./src/Components/Layout/Default/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": function() { return /* binding */ Default; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/Components/Layout/Default/styled.ts");


var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Layout\\Default\\index.tsx";
// #region Global Imports

// #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports

const Default = function ({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.StyledWrap, {
      className: "l_wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_2__.Header, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_2__.Title, {
          children: "\uB85C\uACE0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          href: "/setting",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "xi-cog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "ir",
            children: "\uC124\uC815"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/Components/Layout/Default/styled.ts":
/*!*************************************************!*\
  !*** ./src/Components/Layout/Default/styled.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledWrap": function() { return /* binding */ StyledWrap; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__StyledWrap",
  componentId: "sc-1mmlvo5-0"
})(["display:grid;grid-template-rows:60px 1fr;grid-template-areas:\"header\" \"main\";"]);

/***/ }),

/***/ "./src/Components/Layout/Info/index.tsx":
/*!**********************************************!*\
  !*** ./src/Components/Layout/Info/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Info": function() { return /* binding */ Info; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Actions */ "./src/Actions/index.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./src/Components/Layout/Info/styled.ts");


var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Layout\\Info\\index.tsx";
// #region Global Imports


 // #endregion Global Imports
// #region Local Imports



 // #endregion Local Imports

const Info = function ({
  children,
  cate_info
}) {
  const star = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.star);

  const getIsStar = () => star.list.find(seq => seq === (cate_info === null || cate_info === void 0 ? void 0 : cate_info.seq)) !== undefined;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_6__.StyledWrap, {
      className: "l_wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_4__.Header, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_4__.Button, {
          onClick: () => router.back(),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "xi-angle-left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "ir",
            children: "\uB4A4\uB85C\uAC00\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_4__.Title, {
          children: cate_info === null || cate_info === void 0 ? void 0 : cate_info.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_4__.Button, {
          show: !getIsStar(),
          onClick: () => {
            if (cate_info === undefined) return;
            dispatch(_Actions__WEBPACK_IMPORTED_MODULE_5__.StarActions.AddStar({
              seq: cate_info.seq
            }));
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "xi-star-o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "ir",
            children: "\uC990\uACA8\uCC3E\uAE30 \uCD94\uAC00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_4__.Button, {
          show: getIsStar(),
          onClick: () => {
            if (cate_info === undefined) return;
            dispatch(_Actions__WEBPACK_IMPORTED_MODULE_5__.StarActions.RemoveStar({
              seq: cate_info.seq
            }));
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "xi-star"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "ir",
            children: "\uC990\uACA8\uCC3E\uAE30 \uC0AD\uC81C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/Components/Layout/Info/styled.ts":
/*!**********************************************!*\
  !*** ./src/Components/Layout/Info/styled.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledWrap": function() { return /* binding */ StyledWrap; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__StyledWrap",
  componentId: "sc-wqqud9-0"
})(["display:grid;grid-template-rows:60px 1fr;grid-template-areas:\"header\" \"main\";"]);

/***/ }),

/***/ "./src/Components/Layout/Setting/index.tsx":
/*!*************************************************!*\
  !*** ./src/Components/Layout/Setting/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Setting": function() { return /* binding */ Setting; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/Components/Layout/Setting/styled.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Layout\\Setting\\index.tsx";
// #region Global Imports

// #endregion Global Imports
// #region Local Imports


 // #endregion Local Imports

const Setting = function ({
  children
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.StyledWrap, {
      className: "l_wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_2__.Header, {
        centerTitle: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: () => router.back(),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "xi-angle-left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "ir",
            children: "\uB4A4\uB85C\uAC00\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_2__.Title, {
          as: "h1",
          children: "\uC124\uC815"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/Components/Layout/Setting/styled.ts":
/*!*************************************************!*\
  !*** ./src/Components/Layout/Setting/styled.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledWrap": function() { return /* binding */ StyledWrap; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__StyledWrap",
  componentId: "sc-1wtkrdt-0"
})(["display:grid;grid-template-rows:60px 1fr;grid-template-areas:\"header\" \"main\";"]);

/***/ }),

/***/ "./src/Components/Layout/index.ts":
/*!****************************************!*\
  !*** ./src/Components/Layout/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutCode": function() { return /* binding */ LayoutCode; }
/* harmony export */ });
/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default */ "./src/Components/Layout/Default/index.tsx");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info */ "./src/Components/Layout/Info/index.tsx");
/* harmony import */ var _Setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Setting */ "./src/Components/Layout/Setting/index.tsx");



let LayoutCode;

(function (LayoutCode) {
  LayoutCode[LayoutCode["Default"] = 0] = "Default";
  LayoutCode[LayoutCode["Info"] = 1] = "Info";
  LayoutCode[LayoutCode["Setting"] = 2] = "Setting";
})(LayoutCode || (LayoutCode = {}));

const TheLayout = {
  [LayoutCode.Default]: _Default__WEBPACK_IMPORTED_MODULE_0__.Default,
  [LayoutCode.Info]: _Info__WEBPACK_IMPORTED_MODULE_1__.Info,
  [LayoutCode.Setting]: _Setting__WEBPACK_IMPORTED_MODULE_2__.Setting
};
/* harmony default export */ __webpack_exports__["default"] = (TheLayout);

/***/ }),

/***/ "./src/Components/Molecules/Chart/index.tsx":
/*!**************************************************!*\
  !*** ./src/Components/Molecules/Chart/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chart": function() { return /* binding */ Chart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_c3js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-c3js */ "react-c3js");
/* harmony import */ var react_c3js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_c3js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var c3_c3_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! c3/c3.css */ "./node_modules/c3/c3.css");
/* harmony import */ var c3_c3_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(c3_c3_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/Components/Molecules/Chart/styled.ts");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Molecules\\Chart\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports


 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports

const formatComma = function (v) {
  return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Chart = props => {
  const {
    data
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Container, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_c3js__WEBPACK_IMPORTED_MODULE_2___default()), {
      padding: {
        right: 40
      },
      data: {
        x: "Dates",
        // xFormat: "%Y-%m-%d",
        // columns: [
        //     ["Dates", "2020-07-01", "2020-08-01", "2020-09-01", "2020-10-01", "2020-11-01", "2020-12-01"],
        //     ["쇠고기", 2985, 2997, 3267, 3227, 3202, 3302],
        // ],
        columns: data,
        labels: {
          format: function (v) {
            return formatComma(v) + "원";
          }
        }
      },
      tooltip: {
        format: {
          // title: function (d) { return 'Data ' + d; },
          value: function (value) {
            return formatComma(value) + "원";
          } //            value: d3.format(',') // apply this format to both y and y2

        }
      },
      line: {
        connect_null: false
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m"
          }
        },
        y: {
          padding: {
            top: 200,
            bottom: 200
          }
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/Components/Molecules/Chart/styled.ts":
/*!**************************************************!*\
  !*** ./src/Components/Molecules/Chart/styled.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1ybtyd-0"
})(["margin-bottom:20px;display:flex;width:100%;&>.c3>svg>defs:first-child>clipPath:first-child>rect{width:3000px;transform:translate(-50%,0);}"]);

/***/ }),

/***/ "./src/Components/Molecules/ContentsBar/index.tsx":
/*!********************************************************!*\
  !*** ./src/Components/Molecules/ContentsBar/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentsBar": function() { return /* binding */ ContentsBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Components/Molecules/ContentsBar/styled.ts");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Molecules\\ContentsBar\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports
 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports

const ContentsBar = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Container, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 12
  }, undefined);
};



/***/ }),

/***/ "./src/Components/Molecules/ContentsBar/styled.ts":
/*!********************************************************!*\
  !*** ./src/Components/Molecules/ContentsBar/styled.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var _Components_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/styles */ "./src/Components/styles.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-leh18z-0"
})(["margin-bottom:20px;", " padding:0 10px;", " display:flex;width:100%;", ""], _Components_styles__WEBPACK_IMPORTED_MODULE_0__.MarginStyle, _Components_styles__WEBPACK_IMPORTED_MODULE_0__.PaddingStyle, _Components_styles__WEBPACK_IMPORTED_MODULE_0__.ShowStyle);

/***/ }),

/***/ "./src/Components/Molecules/IconList/index.tsx":
/*!*****************************************************!*\
  !*** ./src/Components/Molecules/IconList/index.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconListInner": function() { return /* binding */ IconListInner; },
/* harmony export */   "IconListCon": function() { return /* binding */ IconListCon; },
/* harmony export */   "IconList": function() { return /* binding */ IconList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Components/Molecules/IconList/styled.ts");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Definitions */ "./src/Definitions/index.ts");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Molecules\\IconList\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports
 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports
// Import Swiper React components



const IconListInner = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.ContainerInner, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 12
  }, undefined);
};
const IconListCon = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Container, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }, undefined);
};
const IconList = props => {
  const {
    children,
    setSwiper,
    onChange,
    selTab
  } = props;
  const initIdx = Object.entries(_Definitions__WEBPACK_IMPORTED_MODULE_4__.CATEGORY_TYPE_STR).findIndex(([key, value]) => selTab === Number(key));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Wraper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
      initialSlide: initIdx,
      onSlideChange: onChange,
      onSwiper: swiper => setSwiper(swiper),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/Components/Molecules/IconList/styled.ts":
/*!*****************************************************!*\
  !*** ./src/Components/Molecules/IconList/styled.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wraper": function() { return /* binding */ Wraper; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "ContainerInner": function() { return /* binding */ ContainerInner; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");


const Wraper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__Wraper",
  componentId: "sc-1oakjox-0"
})(["width:100%;flex:1;& > .swiper-container{height:100%;}"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1oakjox-1"
})(["padding:0 20px;display:grid;width:100%;height:100%;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,1fr);grid-gap:20px;"]);
const ContainerInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__ContainerInner",
  componentId: "sc-1oakjox-2"
})(["flex:1;width:100%;& > ", "{width:100%;height:100%;border-radius:10px;}"], _Components__WEBPACK_IMPORTED_MODULE_1__.StyledButton);

/***/ }),

/***/ "./src/Components/Molecules/Modal/index.tsx":
/*!**************************************************!*\
  !*** ./src/Components/Molecules/Modal/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": function() { return /* binding */ Modal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Atom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/Atom */ "./src/Components/Atom/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/Components/Molecules/Modal/styled.ts");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Molecules\\Modal\\index.tsx";
// #region Global Imports

 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports

const Modal = props => {
  const {
    show,
    title,
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.StyledModalWrap, {
    show: show,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.StyledModal, {
      children: [title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.StyledModalHeader, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atom__WEBPACK_IMPORTED_MODULE_1__.Title, {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/Components/Molecules/Modal/styled.ts":
/*!**************************************************!*\
  !*** ./src/Components/Molecules/Modal/styled.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledModalWrap": function() { return /* binding */ StyledModalWrap; },
/* harmony export */   "StyledModal": function() { return /* binding */ StyledModal; },
/* harmony export */   "StyledModalHeader": function() { return /* binding */ StyledModalHeader; }
/* harmony export */ });
/* harmony import */ var _Components_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/styles */ "./src/Components/styles.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledModalWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "styled__StyledModalWrap",
  componentId: "sc-bduuf7-0"
})(["position:fixed;top:0;left:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%;background:rgba(0,0,0,0.5);", ""], _Components_styles__WEBPACK_IMPORTED_MODULE_0__.ShowStyle);
const StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styled__StyledModal",
  componentId: "sc-bduuf7-1"
})(["display:flex;flex-direction:column;align-items:center;background:#fff;border:1px solid;"]);
const StyledModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default().header.withConfig({
  displayName: "styled__StyledModalHeader",
  componentId: "sc-bduuf7-2"
})(["height:40px;display:flex;justify-content:center;align-items:center;width:100%;border-bottom:1px solid;"]);

/***/ }),

/***/ "./src/Components/Molecules/Molecules.d.ts":
/*!*************************************************!*\
  !*** ./src/Components/Molecules/Molecules.d.ts ***!
  \*************************************************/
/***/ (function() {



/***/ }),

/***/ "./src/Components/Molecules/SettingList/index.tsx":
/*!********************************************************!*\
  !*** ./src/Components/Molecules/SettingList/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingListInner": function() { return /* binding */ SettingListInner; },
/* harmony export */   "SettingList": function() { return /* binding */ SettingList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Components/Molecules/SettingList/styled.ts");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Molecules\\SettingList\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports
 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports

const SettingListInner = props => {
  const {
    children,
    onClick
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.ContainerInner, {
    onClick: onClick,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 12
  }, undefined);
};
const SettingList = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Container, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./src/Components/Molecules/SettingList/styled.ts":
/*!********************************************************!*\
  !*** ./src/Components/Molecules/SettingList/styled.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "ContainerInner": function() { return /* binding */ ContainerInner; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "styled__Container",
  componentId: "sc-4fgook-0"
})(["width:100%;&:last-of-type{border-bottom:1px solid;}"]);
const ContainerInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "styled__ContainerInner",
  componentId: "sc-4fgook-1"
})(["padding:0 20px;display:flex;align-items:center;width:100%;height:50px;border-bottom:1px solid;&:last-child{border-bottom:0;}& > ", "{margin-right:auto;}"], _Components__WEBPACK_IMPORTED_MODULE_1__.StyledTitle);

/***/ }),

/***/ "./src/Components/Molecules/SettingTitle/index.tsx":
/*!*********************************************************!*\
  !*** ./src/Components/Molecules/SettingTitle/index.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingTitle": function() { return /* binding */ SettingTitle; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Components/Molecules/SettingTitle/styled.ts");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Molecules\\SettingTitle\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports
 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports

const SettingTitle = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Container, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, undefined);
};



/***/ }),

/***/ "./src/Components/Molecules/SettingTitle/styled.ts":
/*!*********************************************************!*\
  !*** ./src/Components/Molecules/SettingTitle/styled.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var _Components_Atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/Atom */ "./src/Components/Atom/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-cqrbqa-0"
})(["padding:0 10px;display:flex;align-items:center;height:30px;width:100%;border-top:2px solid;border-bottom:2px solid;&>", "{font-size:16px;}"], _Components_Atom__WEBPACK_IMPORTED_MODULE_0__.StyledTitle);

/***/ }),

/***/ "./src/Components/Molecules/Tab/index.tsx":
/*!************************************************!*\
  !*** ./src/Components/Molecules/Tab/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabInner": function() { return /* binding */ TabInner; },
/* harmony export */   "Tab": function() { return /* binding */ Tab; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Components/Molecules/Tab/styled.ts");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Molecules\\Tab\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports
 // #endregion Global Imports
// #region Local Imports


// #endregion Local Imports
const TabInner = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.ContainerInner, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 12
  }, undefined);
};
const Tab = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Container, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./src/Components/Molecules/Tab/styled.ts":
/*!************************************************!*\
  !*** ./src/Components/Molecules/Tab/styled.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerInner": function() { return /* binding */ ContainerInner; },
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "styled__ContainerInner",
  componentId: "sc-16zbroz-0"
})([""]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "styled__Container",
  componentId: "sc-16zbroz-1"
})(["margin-bottom:20px;padding:0 10px;display:flex;width:100%;"]);

/***/ }),

/***/ "./src/Components/Molecules/index.ts":
/*!*******************************************!*\
  !*** ./src/Components/Molecules/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./src/Components/Molecules/Tab/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tab__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Tab__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart */ "./src/Components/Molecules/Chart/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Chart__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Chart__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/Components/Molecules/Modal/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Modal__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Modal__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _IconList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconList */ "./src/Components/Molecules/IconList/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IconList__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _IconList__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _SettingList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingList */ "./src/Components/Molecules/SettingList/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SettingList__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _SettingList__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _SettingTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SettingTitle */ "./src/Components/Molecules/SettingTitle/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SettingTitle__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _SettingTitle__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ContentsBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentsBar */ "./src/Components/Molecules/ContentsBar/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ContentsBar__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _ContentsBar__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Molecules_d__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Molecules.d */ "./src/Components/Molecules/Molecules.d.ts");
/* harmony import */ var _Molecules_d__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Molecules_d__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Molecules_d__WEBPACK_IMPORTED_MODULE_7__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Molecules_d__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);









/***/ }),

/***/ "./src/Components/Organisms/AlertModal/index.tsx":
/*!*******************************************************!*\
  !*** ./src/Components/Organisms/AlertModal/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModal": function() { return /* binding */ AlertModal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Components/Organisms/AlertModal/styled.ts");


var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Organisms\\AlertModal\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// #region Global Imports
 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports

const AlertModal = function (props) {
  const {
    children,
    onClick
  } = props,
        rest = _objectWithoutProperties(props, ["children", "onClick"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_1__.Modal, _objectSpread(_objectSpread({}, rest), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.StyledAlertCon, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_1__.ContentsBar, {
        noPadding: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          cover: true,
          onClick: onClick,
          children: "\uD655\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false);
};

/***/ }),

/***/ "./src/Components/Organisms/AlertModal/styled.ts":
/*!*******************************************************!*\
  !*** ./src/Components/Organisms/AlertModal/styled.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledAlertCon": function() { return /* binding */ StyledAlertCon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledAlertCon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__StyledAlertCon",
  componentId: "sc-1u6qe3s-0"
})(["padding:30px;"]);

/***/ }),

/***/ "./src/Components/Organisms/Header/index.tsx":
/*!***************************************************!*\
  !*** ./src/Components/Organisms/Header/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/Components/Organisms/Header/styled.ts");


var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Organisms\\Header\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports
// #endregion Global Imports
// #region Local Imports
 // #endregion Local Imports

const Header = function (props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledHeader, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false);
};

/***/ }),

/***/ "./src/Components/Organisms/Header/styled.ts":
/*!***************************************************!*\
  !*** ./src/Components/Organisms/Header/styled.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledHeader": function() { return /* binding */ StyledHeader; }
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default().header.withConfig({
  displayName: "styled__StyledHeader",
  componentId: "sc-9lkjiv-0"
})(["padding:0 10px;display:flex;justify-content:space-between;align-items:center;&>", "{height:100%;border:0;font-size:36px;}", ""], _Components__WEBPACK_IMPORTED_MODULE_0__.StyledButton, ({
  centerTitle
}) => centerTitle && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["&>", "{position:absolute;left:50%;transform:translate(-50%,0);}"], _Components__WEBPACK_IMPORTED_MODULE_0__.StyledTitle));

/***/ }),

/***/ "./src/Components/Organisms/InfoNav/index.tsx":
/*!****************************************************!*\
  !*** ./src/Components/Organisms/InfoNav/index.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoNav": function() { return /* binding */ InfoNav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/Components/Organisms/InfoNav/styled.ts");

var _jsxFileName = "C:\\github\\priceView\\frontend\\src\\Components\\Organisms\\InfoNav\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports

 // #endregion Global Imports
// #region Local Imports


 // #endregion Local Imports

const InfoNav = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    nav_info
  } = props;
  const {
    next,
    prev
  } = nav_info || {};
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Container, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      show: prev !== null,
      onClick: () => {
        router.replace({
          pathname: "/info",
          query: {
            seq: prev === null || prev === void 0 ? void 0 : prev.seq
          }
        });
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "xi-angle-left-min"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "ir",
        children: prev === null || prev === void 0 ? void 0 : prev.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      show: next !== null,
      onClick: () => {
        router.replace({
          pathname: "/info",
          query: {
            seq: next === null || next === void 0 ? void 0 : next.seq
          }
        });
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "xi-angle-right-min"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "ir",
        children: next === null || next === void 0 ? void 0 : next.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/Components/Organisms/InfoNav/styled.ts":
/*!****************************************************!*\
  !*** ./src/Components/Organisms/InfoNav/styled.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var _Components_Atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/Atom */ "./src/Components/Atom/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-suza7k-0"
})(["pointer-events:none;position:fixed;top:0;left:0;display:flex;justify-content:space-between;align-items:center;width:100%;height:100%;&>", "{pointer-events:auto;border:0;}"], _Components_Atom__WEBPACK_IMPORTED_MODULE_0__.StyledButton);

/***/ }),

/***/ "./src/Components/Organisms/index.ts":
/*!*******************************************!*\
  !*** ./src/Components/Organisms/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/Components/Organisms/Header/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Header__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Header__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _AlertModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertModal */ "./src/Components/Organisms/AlertModal/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AlertModal__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _AlertModal__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _InfoNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoNav */ "./src/Components/Organisms/InfoNav/index.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _InfoNav__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _InfoNav__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




/***/ }),

/***/ "./src/Components/index.ts":
/*!*********************************!*\
  !*** ./src/Components/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/Atom */ "./src/Components/Atom/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Components_Atom__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Components_Atom__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Components_Molecules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/Molecules */ "./src/Components/Molecules/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Components_Molecules__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Components_Molecules__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Components_Organisms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/Organisms */ "./src/Components/Organisms/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Components_Organisms__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Components_Organisms__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/Layout */ "./src/Components/Layout/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Components_Layout__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Components_Layout__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Components_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/styles */ "./src/Components/styles.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Components_styles__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Components_styles__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Components_Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/Components */ "./src/Components/Components.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Components_Components__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Components_Components__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);







/***/ }),

/***/ "./src/Components/styles.ts":
/*!**********************************!*\
  !*** ./src/Components/styles.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbsCenterStyle": function() { return /* binding */ AbsCenterStyle; },
/* harmony export */   "SizeStyle": function() { return /* binding */ SizeStyle; },
/* harmony export */   "PaddingStyle": function() { return /* binding */ PaddingStyle; },
/* harmony export */   "CoverStyle": function() { return /* binding */ CoverStyle; },
/* harmony export */   "MarginStyle": function() { return /* binding */ MarginStyle; },
/* harmony export */   "RightStyle": function() { return /* binding */ RightStyle; },
/* harmony export */   "ShowStyle": function() { return /* binding */ ShowStyle; },
/* harmony export */   "DisabledStyle": function() { return /* binding */ DisabledStyle; },
/* harmony export */   "ReadOnlyStyle": function() { return /* binding */ ReadOnlyStyle; },
/* harmony export */   "centerStyle": function() { return /* binding */ centerStyle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components */ "./src/Components/Components.ts");


const AbsCenterStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]);
const SizeStyle = ({
  sizeVal
}) => {
  switch (sizeVal) {
    case _Components__WEBPACK_IMPORTED_MODULE_1__.SizeCode.small:
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["height:20px;font-size:12px;"]);
      }

    case _Components__WEBPACK_IMPORTED_MODULE_1__.SizeCode.large:
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["height:40px;font-size:18px;"]);
      }

    case _Components__WEBPACK_IMPORTED_MODULE_1__.SizeCode.icon:
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:30px;height:30px;& > i{font-size:24px;}"]);
      }

    case _Components__WEBPACK_IMPORTED_MODULE_1__.SizeCode.profile:
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:40px;height:40px;border-radius:100%;"]);
      }

    default:
      {
        //normal
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["height:30px;font-size:16px;"]);
      }
  }
};
const PaddingStyle = ({
  sizeVal,
  noPadding
}) => {
  if (noPadding === true) return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:0;"]);

  switch (sizeVal) {
    case _Components__WEBPACK_IMPORTED_MODULE_1__.SizeCode.small:
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:0 5px;"]);
      }

    case _Components__WEBPACK_IMPORTED_MODULE_1__.SizeCode.large:
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:0 15px;"]);
      }

    default:
      {
        return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:0 10px;"]);
      }
  }
};
const CoverStyle = ({
  cover
}) => {
  if (cover) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["flex:1;"]);
  }
};
const MarginStyle = ({
  noMargin
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " &:last-child{margin-right:0;margin-bottom:0;}"], noMargin && `margin:0;`);
const RightStyle = ({
  right
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ""], right && `margin-left:auto;`);
const ShowStyle = ({
  show
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ""], show === false && "display: none;");
const DisabledStyle = ({
  isDisabled
}) => {
  if (isDisabled === true) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:gray;"]);
  }
};
const ReadOnlyStyle = ({
  readOnly
}) => {
  if (readOnly === true) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:gray;"]);
  }
};
const centerStyle = ({
  center
}) => {
  if (center === true) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["justify-content:center;"]);
  }
};

/***/ }),

/***/ "./src/Definitions/ActionConsts/ActionConsts.ts":
/*!******************************************************!*\
  !*** ./src/Definitions/ActionConsts/ActionConsts.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionConsts": function() { return /* binding */ ActionConsts; }
/* harmony export */ });
const ActionConsts = {
  App: {
    ResetReducer: "App_ResetReducer",
    SetSelCateReducer: "App_SetSelCateReducer",
    SetSelThemeReducer: "App_SetSelThemeReducer"
  },
  Home: {
    ResetReducer: "Home_ResetReducer",
    SetReducer: "Home_SetReducer"
  },
  Star: {
    ResetReducer: "Star_ResetReducer",
    AddReducer: "Star_AddReducer",
    RemoveReducer: "Star_RemoveReducer"
  }
};

/***/ }),

/***/ "./src/Definitions/ActionConsts/index.ts":
/*!***********************************************!*\
  !*** ./src/Definitions/ActionConsts/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionConsts": function() { return /* reexport safe */ _ActionConsts__WEBPACK_IMPORTED_MODULE_0__.ActionConsts; }
/* harmony export */ });
/* harmony import */ var _ActionConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionConsts */ "./src/Definitions/ActionConsts/ActionConsts.ts");


/***/ }),

/***/ "./src/Definitions/MainConsts/MainConsts.ts":
/*!**************************************************!*\
  !*** ./src/Definitions/MainConsts/MainConsts.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY_TYPE": function() { return /* binding */ CATEGORY_TYPE; },
/* harmony export */   "CATEGORY_TYPE_STR": function() { return /* binding */ CATEGORY_TYPE_STR; },
/* harmony export */   "M_TYPE": function() { return /* binding */ M_TYPE; },
/* harmony export */   "M_GU": function() { return /* binding */ M_GU; },
/* harmony export */   "CATEGORY_LIST": function() { return /* binding */ CATEGORY_LIST; },
/* harmony export */   "NAME_OBJ": function() { return /* binding */ NAME_OBJ; }
/* harmony export */ });
const CATEGORY_TYPE = {
  STAR: 0,
  MEAT: 1,
  FISH: 2,
  VEGETABLE: 3
};
const CATEGORY_TYPE_STR = {
  [CATEGORY_TYPE.STAR]: "즐겨찾기",
  [CATEGORY_TYPE.MEAT]: "고기",
  [CATEGORY_TYPE.FISH]: "생선",
  [CATEGORY_TYPE.VEGETABLE]: "야채"
};
const M_TYPE = {
  "": "",
  "001": "전통시장",
  "002": "대형마트"
};
const M_GU = {
  "": "",
  "680000": "강남구",
  "440000": "마포구",
  "305000": "강북구",
  "650000": "서초구",
  "710000": "송파구",
  "380000": "은평구",
  "290000": "성북구",
  "590000": "동작구",
  "350000": "노원구",
  "470000": "양천구",
  "170000": "용산구",
  "320000": "도봉구",
  "740000": "강동구",
  "410000": "서대문구",
  "215000": "광진구",
  "545000": "금천구",
  "620000": "관악구",
  "110000": "종로구",
  "140000": "중구",
  "200000": "성동구",
  "500000": "강서구",
  "530000": "구로구",
  "560000": "영등포구",
  "260000": "중랑구",
  "230000": "동대문구"
};
const CATEGORY_LIST = [{
  seq: 1,
  name: "돼지고기",
  type: CATEGORY_TYPE.MEAT,
  seq_list: [285, 52, 99]
}, {
  seq: 2,
  name: "쇠고기",
  type: CATEGORY_TYPE.MEAT,
  seq_list: [278, 58, 82, 131, 106]
}, {
  seq: 3,
  name: "닭고기",
  type: CATEGORY_TYPE.MEAT,
  seq_list: [18, 275, 283, 138]
}, {
  seq: 4,
  name: "달걀",
  type: CATEGORY_TYPE.MEAT,
  seq_list: [171, 321, 320, 134, 181]
}, {
  seq: 5,
  name: "고등어",
  type: CATEGORY_TYPE.FISH,
  seq_list: [13, 266, 267, 268, 269, 316, 318]
}, {
  seq: 6,
  name: "조기",
  type: CATEGORY_TYPE.FISH,
  seq_list: [303, 136, 144, 258, 259, 261, 260, 135, 313, 314]
}, {
  seq: 7,
  name: "명태",
  type: CATEGORY_TYPE.FISH,
  seq_list: [302, 262, 263, 264, 265, 184, 152, 315]
}, {
  seq: 8,
  name: "동태",
  type: CATEGORY_TYPE.FISH,
  seq_list: [288]
}, {
  seq: 9,
  name: "오징어",
  type: CATEGORY_TYPE.FISH,
  seq_list: [253, 54, 254, 256, 255, 257]
}, {
  seq: 10,
  name: "배추",
  type: CATEGORY_TYPE.VEGETABLE,
  seq_list: [26, 125, 271, 307]
}, {
  seq: 11,
  name: "상추",
  type: CATEGORY_TYPE.VEGETABLE,
  seq_list: [23, 310]
}, {
  seq: 12,
  name: "무",
  type: CATEGORY_TYPE.VEGETABLE,
  seq_list: [25, 133, 282, 274, 308]
}, {
  seq: 13,
  name: "양파",
  type: CATEGORY_TYPE.VEGETABLE,
  seq_list: [24, 272, 309]
}, {
  seq: 14,
  name: "오이",
  type: CATEGORY_TYPE.VEGETABLE,
  seq_list: [22, 311]
}, {
  seq: 15,
  name: "배",
  type: CATEGORY_TYPE.VEGETABLE,
  seq_list: [27, 284, 276, 248, 306]
}, {
  seq: 16,
  name: "사과",
  type: CATEGORY_TYPE.VEGETABLE,
  seq_list: [28, 50, 305, 270, 244, 279]
}, {
  seq: 17,
  name: "호박",
  type: CATEGORY_TYPE.VEGETABLE,
  seq_list: [277, 119, 118]
}, {
  seq: 18,
  name: "애호박",
  type: CATEGORY_TYPE.VEGETABLE,
  seq_list: [312]
}];
const NAME_OBJ = {
  285: {
    A_NAME: "돼지고기",
    A_UNIT: ["600g", "1근"]
  },
  52: {
    A_NAME: "돼지고기(삼겹살)",
    A_UNIT: ["600g", "1근"]
  },
  99: {
    A_NAME: "돼지고기(생삼겹살)",
    A_UNIT: ["600g", "1근"]
  },
  278: {
    A_NAME: "쇠고기",
    A_UNIT: ["600g", "1근"]
  },
  58: {
    A_NAME: "쇠고기(한우,불고기)",
    A_UNIT: ["600g", "1근"]
  },
  82: {
    A_NAME: "쇠고기(육우,불고기)",
    A_UNIT: ["600g", "1근"]
  },
  131: {
    A_NAME: "쇠고기(한우1등급)",
    A_UNIT: ["600g", "1근"]
  },
  106: {
    A_NAME: "쇠고기(한우2등급)",
    A_UNIT: ["600g", "1근"]
  },
  18: {
    A_NAME: "닭고기",
    A_UNIT: ["1마리"]
  },
  275: {
    A_NAME: "닭고기(중간)",
    A_UNIT: ["1마리", "1kg"]
  },
  283: {
    A_NAME: "닭고기(육계)",
    A_UNIT: ["1마리", "1kg"]
  },
  138: {
    A_NAME: "닭고기(토종닭)",
    A_UNIT: ["1마리"]
  },
  171: {
    A_NAME: "달걀(10개)",
    A_UNIT: ["10개"]
  },
  321: {
    A_NAME: "달걀(15개)",
    A_UNIT: ["15개", "특란"]
  },
  320: {
    A_NAME: "달걀(30개)",
    A_UNIT: ["30개", "특란"]
  },
  134: {
    A_NAME: "달걀(왕란)",
    A_UNIT: ["30개"]
  },
  181: {
    A_NAME: "달걀(왕란)",
    A_UNIT: ["30개"]
  },
  13: {
    A_NAME: "고등어",
    A_UNIT: ["1마리"]
  },
  266: {
    A_NAME: "고등어(생물,국산)",
    A_UNIT: ["1마리"]
  },
  267: {
    A_NAME: "고등어(생물,수입산)",
    A_UNIT: ["1마리"]
  },
  268: {
    A_NAME: "고등어(냉동,국산)",
    A_UNIT: ["1마리"]
  },
  269: {
    A_NAME: "고등어(냉동,수입산)",
    A_UNIT: ["1마리"]
  },
  316: {
    A_NAME: "고등어(30cm,국산)",
    A_UNIT: ["1마리"]
  },
  318: {
    A_NAME: "고등어(30cm,수입산)",
    A_UNIT: ["1마리"]
  },
  303: {
    A_NAME: "조기",
    A_UNIT: ["1마리"]
  },
  136: {
    A_NAME: "조기(국산,생물)",
    A_UNIT: ["1마리"]
  },
  144: {
    A_NAME: "조기(국산,냉동)",
    A_UNIT: ["1마리"]
  },
  258: {
    A_NAME: "조기(생물,국산)",
    A_UNIT: ["1마리"]
  },
  259: {
    A_NAME: "조기(냉동,국산)",
    A_UNIT: ["1마리"]
  },
  261: {
    A_NAME: "조기(생물,수입산)",
    A_UNIT: ["1마리"]
  },
  260: {
    A_NAME: "조기(냉동,수입산)",
    A_UNIT: ["1마리"]
  },
  135: {
    A_NAME: "조기(중국산,생물)",
    A_UNIT: ["1마리"]
  },
  314: {
    A_NAME: "냉동참조기(20cm,국산)",
    A_UNIT: ["1마리"]
  },
  313: {
    A_NAME: "냉동참조기(20cm,수입)",
    A_UNIT: ["1마리"]
  },
  302: {
    A_NAME: "명태",
    A_UNIT: ["1마리"]
  },
  262: {
    A_NAME: "명태(생물,국산)",
    A_UNIT: ["1마리"]
  },
  263: {
    A_NAME: "명태(냉동,국산)",
    A_UNIT: ["1마리"]
  },
  264: {
    A_NAME: "명태(냉동,수입산)",
    A_UNIT: ["1마리"]
  },
  265: {
    A_NAME: "명태(생물,수입산)",
    A_UNIT: ["1마리"]
  },
  184: {
    A_NAME: "명태(일본산,냉동)",
    A_UNIT: ["500g"]
  },
  152: {
    A_NAME: "명태(러시아,냉동)",
    A_UNIT: ["1마리"]
  },
  315: {
    A_NAME: "명태(45cm,수입산)",
    A_UNIT: ["1마리"]
  },
  288: {
    A_NAME: "동태",
    A_UNIT: ["1마리"]
  },
  253: {
    A_NAME: "오징어",
    A_UNIT: ["1마리"]
  },
  54: {
    A_NAME: "오징어(냉동)",
    A_UNIT: ["1마리"]
  },
  254: {
    A_NAME: "오징어(생물,국산)",
    A_UNIT: ["1마리"]
  },
  256: {
    A_NAME: "오징어(냉동,국산)",
    A_UNIT: ["1마리"]
  },
  255: {
    A_NAME: "오징어(생물,수입산)",
    A_UNIT: ["1마리"]
  },
  257: {
    A_NAME: "오징어(냉동,수입산)",
    A_UNIT: ["1마리"]
  },
  26: {
    A_NAME: "배추",
    A_UNIT: ["1포기"]
  },
  125: {
    A_NAME: "배추(국산)",
    A_UNIT: ["1포기"]
  },
  271: {
    A_NAME: "배추(중간)",
    A_UNIT: ["1포기"]
  },
  307: {
    A_NAME: "배추(2.5~3kg)",
    A_UNIT: ["1포기", "1개"]
  },
  23: {
    A_NAME: "상추",
    A_UNIT: ["100g"]
  },
  310: {
    A_NAME: "상추(100g)",
    A_UNIT: ["100g", "1봉지"]
  },
  25: {
    A_NAME: "무",
    A_UNIT: ["1개"]
  },
  133: {
    A_NAME: "무(세척무)",
    A_UNIT: ["1개"]
  },
  282: {
    A_NAME: "무(세척무)",
    A_UNIT: ["1개"]
  },
  274: {
    A_NAME: "무(세척무, 중)",
    A_UNIT: ["1개"]
  },
  308: {
    A_NAME: "무(1kg)",
    A_UNIT: ["1개", "1kg"]
  },
  24: {
    A_NAME: "양파",
    A_UNIT: ["1.5kg"]
  },
  272: {
    A_NAME: "양파(작은망)",
    A_UNIT: ["1망", "1.5kg"]
  },
  309: {
    A_NAME: "양파(1.5kg망)",
    A_UNIT: ["1망", "1.5kg"]
  },
  22: {
    A_NAME: "오이",
    A_UNIT: ["1개"]
  },
  311: {
    A_NAME: "오이(다다기)",
    A_UNIT: ["1개", "1 개"]
  },
  27: {
    A_NAME: "배",
    A_UNIT: ["1개"]
  },
  284: {
    A_NAME: "배(중품)",
    A_UNIT: ["1개"]
  },
  276: {
    A_NAME: "배(신고)",
    A_UNIT: ["1개"]
  },
  248: {
    A_NAME: "배(신고),중급(대)",
    A_UNIT: ["1개", "1 개"]
  },
  306: {
    A_NAME: "배(신고, 600g)",
    A_UNIT: ["1개", "600g"]
  },
  28: {
    A_NAME: "사과",
    A_UNIT: ["1개"]
  },
  50: {
    A_NAME: "사과(부사)",
    A_UNIT: ["1개"]
  },
  305: {
    A_NAME: "사과(부사, 300g)",
    A_UNIT: ["1개", "300g"]
  },
  270: {
    A_NAME: "사과(부사),중급(중)",
    A_UNIT: ["1개"]
  },
  244: {
    A_NAME: "사과(부사),중급(대)",
    A_UNIT: ["1개", "1 개"]
  },
  279: {
    A_NAME: "사과(중품)",
    A_UNIT: ["1개"]
  },
  277: {
    A_NAME: "호박",
    A_UNIT: ["1개"]
  },
  119: {
    A_NAME: "호박(인큐베이터)",
    A_UNIT: ["1개"]
  },
  118: {
    A_NAME: "호박(인큐베이터),중간",
    A_UNIT: ["1개"]
  },
  312: {
    A_NAME: "애호박",
    A_UNIT: ["1개", "1 개"]
  }
};

/***/ }),

/***/ "./src/Definitions/MainConsts/index.ts":
/*!*********************************************!*\
  !*** ./src/Definitions/MainConsts/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainConsts */ "./src/Definitions/MainConsts/MainConsts.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MainConsts__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _MainConsts__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Definitions/Styled/index.ts":
/*!*****************************************!*\
  !*** ./src/Definitions/Styled/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/Definitions/Styled/theme.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _theme__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _theme__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/Definitions/Styled/theme.ts":
/*!*****************************************!*\
  !*** ./src/Definitions/Styled/theme.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeType": function() { return /* binding */ ThemeType; },
/* harmony export */   "ThemeObj": function() { return /* binding */ ThemeObj; }
/* harmony export */ });
// #region Global Imports
// #endregion Global Imports
const ThemeType = {
  WHITE: 0,
  DARK: 1
};
const theme = {
  colors: {
    primary: "#2c3e50"
  }
};
const ThemeObj = {
  [ThemeType.WHITE]: theme,
  [ThemeType.DARK]: theme
};

/***/ }),

/***/ "./src/Definitions/index.ts":
/*!**********************************!*\
  !*** ./src/Definitions/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionConsts": function() { return /* reexport safe */ _ActionConsts__WEBPACK_IMPORTED_MODULE_1__.ActionConsts; }
/* harmony export */ });
/* harmony import */ var _MainConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainConsts */ "./src/Definitions/MainConsts/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MainConsts__WEBPACK_IMPORTED_MODULE_0__) if(["default","ActionConsts"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _MainConsts__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ActionConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionConsts */ "./src/Definitions/ActionConsts/index.ts");



/***/ }),

/***/ "./src/Redux/Reducers/app/index.ts":
/*!*****************************************!*\
  !*** ./src/Redux/Reducers/app/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppReducer": function() { return /* binding */ AppReducer; }
/* harmony export */ });
/* harmony import */ var _Definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Definitions */ "./src/Definitions/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Local Imports
 // #endregion Local Imports
// #region Interface Imports

const INITIAL_STATE = {
  sel_cate: null,
  sel_theme: null
};
const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.App.SetSelCateReducer:
      return _objectSpread(_objectSpread({}, state), {}, {
        sel_cate: action.payload
      });

    case _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.App.SetSelThemeReducer:
      return _objectSpread(_objectSpread({}, state), {}, {
        sel_theme: action.payload
      });

    case _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.App.ResetReducer:
      return INITIAL_STATE;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/Redux/Reducers/home/index.ts":
/*!******************************************!*\
  !*** ./src/Redux/Reducers/home/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeReducer": function() { return /* binding */ HomeReducer; }
/* harmony export */ });
/* harmony import */ var _Definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Definitions */ "./src/Definitions/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Local Imports
 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
const INITIAL_STATE = {
  home: {
    version: 1
  },
  image: {
    url: ""
  }
};
const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.Home.SetReducer:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.Home.ResetReducer:
      return INITIAL_STATE;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/Redux/Reducers/index.ts":
/*!*************************************!*\
  !*** ./src/Redux/Reducers/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reducers": function() { return /* binding */ Reducers; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/Redux/Reducers/app/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/Redux/Reducers/home/index.ts");
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star */ "./src/Redux/Reducers/star/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app__WEBPACK_IMPORTED_MODULE_1__) if(["default","Reducers"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _app__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _star__WEBPACK_IMPORTED_MODULE_3__) if(["default","Reducers"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _star__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// #region Global Imports

// 추가
// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["star"],
// }
// #endregion Global Imports
// #region Local Imports


 // #endregion Local Imports



const Reducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  app: _app__WEBPACK_IMPORTED_MODULE_1__.AppReducer,
  home: _home__WEBPACK_IMPORTED_MODULE_2__.HomeReducer,
  star: _star__WEBPACK_IMPORTED_MODULE_3__.StarReducer
}); // const persistedReducer = persistReducer(persistConfig, rootReducer)
// export default persistedReducer

/***/ }),

/***/ "./src/Redux/Reducers/star/index.ts":
/*!******************************************!*\
  !*** ./src/Redux/Reducers/star/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarReducer": function() { return /* binding */ StarReducer; }
/* harmony export */ });
/* harmony import */ var _Definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Definitions */ "./src/Definitions/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Local Imports
 // #endregion Local Imports
// #region Interface Imports

const INITIAL_STATE = {
  list: []
};
const StarReducer = (state = INITIAL_STATE, action) => {
  var _action$payload;

  const payloadSeq = ((_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.seq) || null;
  const newStar = {
    list: state.list.slice()
  };

  switch (action.type) {
    case _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.Star.AddReducer:
      if (payloadSeq && !state.list.find(seq => seq === payloadSeq)) {
        newStar.list.push(payloadSeq);
      }

      return _objectSpread(_objectSpread({}, state), newStar);

    case _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.Star.RemoveReducer:
      if (payloadSeq && state.list.find(seq => seq === payloadSeq)) {
        const idx = state.list.indexOf(payloadSeq);
        newStar.list.splice(idx, 1);
      }

      return _objectSpread(_objectSpread({}, state), newStar);

    case _Definitions__WEBPACK_IMPORTED_MODULE_0__.ActionConsts.Star.ResetReducer:
      return INITIAL_STATE;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/Redux/index.ts":
/*!****************************!*\
  !*** ./src/Redux/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/Redux/store.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _store__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _store__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reducers */ "./src/Redux/Reducers/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Reducers__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Reducers__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./src/Redux/store.ts":
/*!****************************!*\
  !*** ./src/Redux/store.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistor": function() { return /* binding */ persistor; },
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reducers */ "./src/Redux/Reducers/index.ts");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
// #region Global Imports

 // eslint-disable-next-line import/no-extraneous-dependencies

// #region Local Imports


 // #endregion Local Imports

const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware));
  }

  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware);
};

const makeConfiguredStore = reducer => (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, bindMiddleware([(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())]));

const makeStore = () => {
  const isServer = true;

  if (isServer) {
    return makeConfiguredStore(_Reducers__WEBPACK_IMPORTED_MODULE_2__.Reducers);
  } else {
    // we need it only on client side
    const {
      persistReducer
    } = __webpack_require__(/*! redux-persist */ "redux-persist");

    const storage = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      whitelist: ["app", "star"],
      // make sure it does not clash with server keys
      storage
    };
    const persistedReducer = persistReducer(persistConfig, _Reducers__WEBPACK_IMPORTED_MODULE_2__.Reducers);
    const store = makeConfiguredStore(persistedReducer);
    return store;
  }
};

const temp_store = makeStore();
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistStore)(temp_store);
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore, {
  debug: true
});

/***/ }),

/***/ "./src/Services/API/DateFormat/index.ts":
/*!**********************************************!*\
  !*** ./src/Services/API/DateFormat/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (Date.prototype.format = function (f) {
  if (!this.valueOf()) return " ";
  var weekKorName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];
  var weekEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var d = this;
  return f.replace(/(yyyy|yy|MM|dd|KS|WN|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case "yyyy":
        return d.getFullYear();
      // 년 (4자리)

      case "yy":
        return (d.getFullYear() % 1000).zf(2);
      // 년 (2자리)

      case "MM":
        return (d.getMonth() + 1).zf(2);
      // 월 (2자리)

      case "dd":
        return d.getDate().zf(2);
      // 일 (2자리)

      case "KS":
        return weekKorShortName[d.getDay()];
      // 요일 (짧은 한글)

      case "KL":
        return weekKorName[d.getDay()];
      // 요일 (긴 한글)

      case "ES":
        return weekEngShortName[d.getDay()];
      // 요일 (짧은 영어)

      case "EL":
        return weekEngName[d.getDay()];
      // 요일 (긴 영어)

      case "HH":
        return d.getHours().zf(2);
      // 시간 (24시간 기준, 2자리)

      case "mhh":
        return (0 !== d.getHours() % 12 ? d.getHours() : 12).zf(2);
      // 시간 (12시간 기준, 2자리)

      case "hh":
        return d.getHours().zf(2);
      // 시간 (24시간 기준, 2자리)

      case "mm":
        return d.getMinutes().zf(2);
      // 분 (2자리)

      case "ss":
        return d.getSeconds().zf(2);
      // 초 (2자리)

      case "a/p":
        return d.getHours() < 12 ? "오전" : "오후";
      // 오전/오후 구분

      default:
        return $1;
    }
  });
});

String.prototype.string = function (len) {
  var s = "",
      i = 0;

  while (i++ < len) {
    s += this;
  }

  return s;
};

String.prototype.zf = function (len) {
  return "0".string(len - this.length) + this;
};

Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

/***/ }),

/***/ "./node_modules/c3/c3.css":
/*!********************************!*\
  !*** ./node_modules/c3/c3.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/swiper/swiper.scss":
/*!*****************************************!*\
  !*** ./node_modules/swiper/swiper.scss ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./public/static/css/main.scss":
/*!*************************************!*\
  !*** ./public/static/css/main.scss ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-c3js":
/*!*****************************!*\
  !*** external "react-c3js" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-c3js");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/integration/react");;

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("swiper/react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL19hcHAvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0FjdGlvbnMvQXBwQWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9BY3Rpb25zL1N0YXJBY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9BdG9tL0J1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9BdG9tL0J1dHRvbi9zdHlsZWQudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9BdG9tL1NlbGVjdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9BdG9tL1NlbGVjdC9zdHlsZWQudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvQXRvbS9UaXRsZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9BdG9tL1RpdGxlL3N0eWxlZC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db21wb25lbnRzL0F0b20vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnRzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTGF5b3V0L0RlZmF1bHQvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTGF5b3V0L0RlZmF1bHQvc3R5bGVkLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTGF5b3V0L0luZm8vaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTGF5b3V0L0luZm8vc3R5bGVkLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTGF5b3V0L1NldHRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTGF5b3V0L1NldHRpbmcvc3R5bGVkLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTW9sZWN1bGVzL0NoYXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db21wb25lbnRzL01vbGVjdWxlcy9DaGFydC9zdHlsZWQudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9Nb2xlY3VsZXMvQ29udGVudHNCYXIvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTW9sZWN1bGVzL0NvbnRlbnRzQmFyL3N0eWxlZC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db21wb25lbnRzL01vbGVjdWxlcy9JY29uTGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9Nb2xlY3VsZXMvSWNvbkxpc3Qvc3R5bGVkLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTW9sZWN1bGVzL01vZGFsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db21wb25lbnRzL01vbGVjdWxlcy9Nb2RhbC9zdHlsZWQudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9Nb2xlY3VsZXMvU2V0dGluZ0xpc3QvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTW9sZWN1bGVzL1NldHRpbmdMaXN0L3N0eWxlZC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db21wb25lbnRzL01vbGVjdWxlcy9TZXR0aW5nVGl0bGUvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTW9sZWN1bGVzL1NldHRpbmdUaXRsZS9zdHlsZWQudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9Nb2xlY3VsZXMvVGFiL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db21wb25lbnRzL01vbGVjdWxlcy9UYWIvc3R5bGVkLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvTW9sZWN1bGVzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvT3JnYW5pc21zL0FsZXJ0TW9kYWwvaW5kZXgudHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvT3JnYW5pc21zL0FsZXJ0TW9kYWwvc3R5bGVkLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvT3JnYW5pc21zL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvQ29tcG9uZW50cy9PcmdhbmlzbXMvSGVhZGVyL3N0eWxlZC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db21wb25lbnRzL09yZ2FuaXNtcy9JbmZvTmF2L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db21wb25lbnRzL09yZ2FuaXNtcy9JbmZvTmF2L3N0eWxlZC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db21wb25lbnRzL09yZ2FuaXNtcy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9Db21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0NvbXBvbmVudHMvc3R5bGVzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0RlZmluaXRpb25zL0FjdGlvbkNvbnN0cy9BY3Rpb25Db25zdHMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvRGVmaW5pdGlvbnMvTWFpbkNvbnN0cy9NYWluQ29uc3RzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL0RlZmluaXRpb25zL1N0eWxlZC90aGVtZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9EZWZpbml0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9SZWR1eC9SZWR1Y2Vycy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvUmVkdXgvUmVkdWNlcnMvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9SZWR1eC9SZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9SZWR1eC9SZWR1Y2Vycy9zdGFyL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL1JlZHV4L2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL1JlZHV4L3N0b3JlLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL1NlcnZpY2VzL0FQSS9EYXRlRm9ybWF0L2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWMzanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInN3aXBlci9yZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2lnbm9yZWR8QzpcXGdpdGh1YlxccHJpY2VWaWV3XFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJfdXNlSW50ZXJzZWN0aW9uIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0IiwidXNlUmVmIiwiY3VycmVudCIsImNvbnNvbGUiLCJ3YXJuIiwicCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsIm1hcCIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwidmFsdWUiLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibGVuZ3RoIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ4IiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJyZW5kZXIiLCJXZWJBcHAiLCJzZXRTdGF0ZSIsIm5leHRQYXRobmFtZSIsImNvbXBvbmVudERpZE1vdW50IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImFwcCIsIkFwcExheW91dCIsIlRoZUxheW91dCIsImxheW91dCIsIkxheW91dENvZGUiLCJ0aGVtZSIsIlRoZW1lT2JqIiwiVGhlbWVUeXBlIiwic2VsX3RoZW1lIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJ0cmFuc2l0aW9uIiwicGVyc2lzdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwid3JhcHBlciIsImNvbm5lY3QiLCJBcHBBY3Rpb25zIiwiUmVzZXQiLCJBY3Rpb25Db25zdHMiLCJSZXNldFJlZHVjZXIiLCJTZXRTZWxDYXRlIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiU2V0U2VsQ2F0ZVJlZHVjZXIiLCJTdGFyQWN0aW9ucyIsIkFkZFN0YXIiLCJzZXEiLCJBZGRSZWR1Y2VyIiwiUmVtb3ZlU3RhciIsIlJlbW92ZVJlZHVjZXIiLCJCdXR0b24iLCJkZWZhdWx0UHJvcHMiLCJTdHlsZWRCdXR0b24iLCJzdHlsZWQiLCJTaXplU3R5bGUiLCJDb3ZlclN0eWxlIiwiUGFkZGluZ1N0eWxlIiwiRGlzYWJsZWRTdHlsZSIsIlNob3dTdHlsZSIsIlNlbGVjdCIsInNldFZhbHVlIiwib25DaGFuZ2VTZWxlY3QiLCJTdHlsZWRTZWxlY3QiLCJUaXRsZSIsIlRpdGxlU2l6ZVN0eWxlIiwiU3R5bGVkVGl0bGUiLCJTaXplQ29kZSIsInNtYWxsIiwibm9ybWFsIiwibGFyZ2UiLCJpY29uIiwicHJvZmlsZSIsIkRlZmF1bHQiLCJTdHlsZWRXcmFwIiwiSW5mbyIsImNhdGVfaW5mbyIsInN0YXIiLCJ1c2VTZWxlY3RvciIsImdldElzU3RhciIsImxpc3QiLCJmaW5kIiwidXNlRGlzcGF0Y2giLCJTZXR0aW5nIiwiZm9ybWF0Q29tbWEiLCJ0b1N0cmluZyIsIkNoYXJ0IiwicmlnaHQiLCJjb2x1bW5zIiwibGFiZWxzIiwiZm9ybWF0IiwiY29ubmVjdF9udWxsIiwidGljayIsInBhZGRpbmciLCJ0b3AiLCJib3R0b20iLCJDb250YWluZXIiLCJDb250ZW50c0JhciIsIk1hcmdpblN0eWxlIiwiSWNvbkxpc3RJbm5lciIsIkljb25MaXN0Q29uIiwiSWNvbkxpc3QiLCJzZXRTd2lwZXIiLCJvbkNoYW5nZSIsInNlbFRhYiIsImluaXRJZHgiLCJDQVRFR09SWV9UWVBFX1NUUiIsImZpbmRJbmRleCIsIk51bWJlciIsInN3aXBlciIsIldyYXBlciIsIkNvbnRhaW5lcklubmVyIiwiTW9kYWwiLCJzaG93IiwidGl0bGUiLCJTdHlsZWRNb2RhbFdyYXAiLCJTdHlsZWRNb2RhbCIsIlN0eWxlZE1vZGFsSGVhZGVyIiwiU2V0dGluZ0xpc3RJbm5lciIsIlNldHRpbmdMaXN0IiwiU2V0dGluZ1RpdGxlIiwiVGFiSW5uZXIiLCJUYWIiLCJBbGVydE1vZGFsIiwicmVzdCIsIlN0eWxlZEFsZXJ0Q29uIiwiSGVhZGVyIiwiU3R5bGVkSGVhZGVyIiwiY2VudGVyVGl0bGUiLCJJbmZvTmF2IiwibmF2X2luZm8iLCJwcmV2IiwiQWJzQ2VudGVyU3R5bGUiLCJzaXplVmFsIiwibm9QYWRkaW5nIiwiY292ZXIiLCJub01hcmdpbiIsIlJpZ2h0U3R5bGUiLCJSZWFkT25seVN0eWxlIiwicmVhZE9ubHkiLCJjZW50ZXJTdHlsZSIsImNlbnRlciIsIlNldFNlbFRoZW1lUmVkdWNlciIsIkhvbWUiLCJTZXRSZWR1Y2VyIiwiU3RhciIsIkNBVEVHT1JZX1RZUEUiLCJTVEFSIiwiTUVBVCIsIkZJU0giLCJWRUdFVEFCTEUiLCJNX1RZUEUiLCJNX0dVIiwiQ0FURUdPUllfTElTVCIsInNlcV9saXN0IiwiTkFNRV9PQkoiLCJBX05BTUUiLCJBX1VOSVQiLCJXSElURSIsIkRBUksiLCJjb2xvcnMiLCJwcmltYXJ5IiwiSU5JVElBTF9TVEFURSIsInNlbF9jYXRlIiwiQXBwUmVkdWNlciIsImFjdGlvbiIsImhvbWUiLCJ2ZXJzaW9uIiwiaW1hZ2UiLCJIb21lUmVkdWNlciIsIlJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwiU3RhclJlZHVjZXIiLCJwYXlsb2FkU2VxIiwibmV3U3RhciIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJtYWtlQ29uZmlndXJlZFN0b3JlIiwicmVkdWNlciIsImNyZWF0ZVN0b3JlIiwidGh1bmtNaWRkbGV3YXJlIiwibWFrZVN0b3JlIiwiaXNTZXJ2ZXIiLCJwZXJzaXN0UmVkdWNlciIsInN0b3JhZ2UiLCJwZXJzaXN0Q29uZmlnIiwid2hpdGVsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsInN0b3JlIiwidGVtcF9zdG9yZSIsInBlcnNpc3RTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImYiLCJ2YWx1ZU9mIiwid2Vla0tvck5hbWUiLCJ3ZWVrS29yU2hvcnROYW1lIiwid2Vla0VuZ05hbWUiLCJ3ZWVrRW5nU2hvcnROYW1lIiwiZCIsIiQxIiwiZ2V0RnVsbFllYXIiLCJ6ZiIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldERheSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJzdHJpbmciLCJsZW4iLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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UDtBQUNILENBUEQ7O0FBU0FuUSxNQUFNLENBQUNYLFNBQVAsQ0FBaUJxUSxFQUFqQixHQUFzQixVQUFVUSxHQUFWLEVBQXVCO0FBQ3pDLFNBQU8sSUFBSUQsTUFBSixDQUFXQyxHQUFHLEdBQUcsS0FBS25kLE1BQXRCLElBQWdDLElBQXZDO0FBQ0gsQ0FGRDs7QUFJQTJXLE1BQU0sQ0FBQ3JLLFNBQVAsQ0FBaUJxUSxFQUFqQixHQUFzQixVQUFVUSxHQUFWLEVBQXVCO0FBQ3pDLFNBQU8sS0FBSy9ILFFBQUwsR0FBZ0J1SCxFQUFoQixDQUFtQlEsR0FBbkIsQ0FBUDtBQUNILENBRkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZhLGtCQUFrQixNQUFNLHdCQUF3QixrQkFBa0IsMkJBQTJCLHFCQUFxQixnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7OztBQ0RBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDLGdEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wcztleHBvcnRzLk5leHRXZWJWaXRhbHNNZXRyaWM9X3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LGN0eH0pe2NvbnN0IHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e3JlbmRlcigpe2NvbnN0e0NvbXBvbmVudCxwYWdlUHJvcHN9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LHBhZ2VQcm9wcyk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIiwiaW1wb3J0IFwiL3N0eWxlcy9nbG9iYWxzLmNzc1wiXHJcbi8vIEltcG9ydCBTd2lwZXIgc3R5bGVzXHJcbmltcG9ydCBcInN3aXBlci9zd2lwZXIuc2Nzc1wiXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIlxyXG5cclxuLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IEFwcCwgeyBBcHBJbml0aWFsUHJvcHMsIEFwcENvbnRleHQgfSBmcm9tIFwibmV4dC9hcHBcIlxyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiwgU3dpdGNoVHJhbnNpdGlvbiwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIlxyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgVGhlbWVPYmosIFRoZW1lVHlwZSB9IGZyb20gXCJARGVmaW5pdGlvbnMvU3R5bGVkXCJcclxuLy8gaW1wb3J0IHsgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIkBTZXJ2ZXIvaTE4blwiO1xyXG5pbXBvcnQgeyBBcHBXaXRoU3RvcmUsIElTdG9yZSB9IGZyb20gXCJASW50ZXJmYWNlc1wiXHJcbmltcG9ydCB7IHdyYXBwZXIsIHBlcnNpc3RvciB9IGZyb20gXCJAUmVkdXhcIlxyXG5pbXBvcnQgVGhlTGF5b3V0LCB7IExheW91dENvZGUgfSBmcm9tIFwiQENvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IFwiQFNlcnZpY2VzL0FQSS9EYXRlRm9ybWF0XCJcclxuXHJcbmltcG9ydCBcIkBTdGF0aWMvY3NzL21haW4uc2Nzc1wiXHJcbmltcG9ydCB7IGNvbm5lY3QsIFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiXHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuY2xhc3MgV2ViQXBwIGV4dGVuZHMgQXBwPEFwcFdpdGhTdG9yZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5leHRQYXRobmFtZTogdGhpcy5wcm9wcy5yb3V0ZXIucGF0aG5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fVxyXG5cclxuICAgICAgICByZXR1cm4geyBwYWdlUHJvcHM6IHBhZ2VQcm9wcyB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBuZXh0UGF0aG5hbWU6IHVybC5zcGxpdChcIj9cIilbMF0sXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgdGhpcy5oYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHRoaXMuaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyLCBhcHAgfTogYW55ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgbmV4dFBhdGhuYW1lIH06IGFueSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBjb25zdCBBcHBMYXlvdXQgPSBUaGVMYXlvdXRbcGFnZVByb3BzPy5sYXlvdXQgfHwgTGF5b3V0Q29kZS5EZWZhdWx0XVxyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gVGhlbWVPYmpbVGhlbWVUeXBlW2FwcC5zZWxfdGhlbWVdIHx8IFRoZW1lVHlwZS5XSElURV1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zaXRpb25Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlYXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cm91dGVyLnBhdGhuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1cmwg66GcIOyggeyaqe2VmOq4sFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZXM9XCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcz17cGFnZVByb3BzPy50cmFuc2l0aW9uIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJsX3RyYW5zaXRpb24gXCIgKyBuZXh0UGF0aG5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNpc3RHYXRlIHBlcnNpc3Rvcj17cGVyc2lzdG9yfSBsb2FkaW5nPXs8ZGl2PkxvYWRpbmc8L2Rpdj59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBMYXlvdXQgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0b3JlKSA9PiAoe1xyXG4gICAgYXBwOiBzdGF0ZS5hcHAsXHJcbn0pXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUm91dGVyKFdlYkFwcCkpXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUpKGFwcFdpdGhUcmFuc2xhdGlvbihXZWJBcHApKTtcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHdpdGhSb3V0ZXIoV2ViQXBwKSkpXHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXhcIlxyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgQWN0aW9uQ29uc3RzIH0gZnJvbSBcIkBEZWZpbml0aW9uc1wiXHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5pbXBvcnQgeyBJQXBwUGFnZSB9IGZyb20gXCJAUmVkdWNlcnNcIlxyXG4vLyAjZW5kcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcblxyXG5leHBvcnQgY29uc3QgQXBwQWN0aW9ucyA9IHtcclxuICAgIC8vIE1hcDogKHBheWxvYWQ6IHt9KSA9PiAoe1xyXG4gICAgLy8gICAgIHBheWxvYWQsXHJcbiAgICAvLyAgICAgdHlwZTogQWN0aW9uQ29uc3RzLkFwcC5TZXRSZWR1Y2VyLFxyXG4gICAgLy8gfSksXHJcblxyXG4gICAgUmVzZXQ6ICgpID0+ICh7XHJcbiAgICAgICAgdHlwZTogQWN0aW9uQ29uc3RzLkFwcC5SZXNldFJlZHVjZXIsXHJcbiAgICB9KSxcclxuXHJcbiAgICBTZXRTZWxDYXRlOiAocGF5bG9hZDogSUFwcFBhZ2UuQWN0aW9ucy5JU2V0U2VsQ2F0ZVBheWxvYWQpID0+IGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvbkNvbnN0cy5BcHAuU2V0U2VsQ2F0ZVJlZHVjZXIsXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbn1cclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiXHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBBY3Rpb25Db25zdHMgfSBmcm9tIFwiQERlZmluaXRpb25zXCJcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IElTdGFyUGFnZSB9IGZyb20gXCJAUmVkdWNlcnNcIlxyXG4vLyAjZW5kcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcblxyXG5leHBvcnQgY29uc3QgU3RhckFjdGlvbnMgPSB7XHJcbiAgICAvLyBNYXA6IChwYXlsb2FkOiB7fSkgPT4gKHtcclxuICAgIC8vICAgICBwYXlsb2FkLFxyXG4gICAgLy8gICAgIHR5cGU6IEFjdGlvbkNvbnN0cy5TdGFyLlNldFJlZHVjZXIsXHJcbiAgICAvLyB9KSxcclxuXHJcbiAgICBSZXNldDogKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25Db25zdHMuU3Rhci5SZXNldFJlZHVjZXIsXHJcbiAgICB9KSxcclxuXHJcbiAgICBBZGRTdGFyOiAocGF5bG9hZDogSVN0YXJQYWdlLkFjdGlvbnMuSUFkZFN0YXJQYXlsb2FkKSA9PiBhc3luYyAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBzZXE6IHBheWxvYWQuc2VxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25Db25zdHMuU3Rhci5BZGRSZWR1Y2VyLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIFJlbW92ZVN0YXI6IChwYXlsb2FkOiBJU3RhclBhZ2UuQWN0aW9ucy5JUmVtb3ZlU3RhclBheWxvYWQpID0+IGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIHNlcTogcGF5bG9hZC5zZXEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvbkNvbnN0cy5TdGFyLlJlbW92ZVJlZHVjZXIsXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vQXBwQWN0aW9uc1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1N0YXJBY3Rpb25zXCJcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBJQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCJcclxuaW1wb3J0IHsgU3R5bGVkQnV0dG9uIH0gZnJvbSBcIi4vc3R5bGVkXCJcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmV4cG9ydCB7IFN0eWxlZEJ1dHRvbiB9XHJcblxyXG5jb25zdCBCdXR0b246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElCdXR0b24uSVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBocmVmIH0gPSBwcm9wc1xyXG4gICAgaWYgKGhyZWYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZEJ1dHRvbiBhcz17XCJhXCJ9IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiA8U3R5bGVkQnV0dG9uIHsuLi5wcm9wc30gLz5cclxufVxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdHlwZTogXCJidXR0b25cIixcclxufVxyXG5cclxuZXhwb3J0IHsgQnV0dG9uIH1cclxuIiwiaW1wb3J0IHsgTWFyZ2luU3R5bGUsIFJpZ2h0U3R5bGUsIFNpemVTdHlsZSwgQ292ZXJTdHlsZSwgUGFkZGluZ1N0eWxlLCBTaG93U3R5bGUsIERpc2FibGVkU3R5bGUgfSBmcm9tIFwiQENvbXBvbmVudHMvc3R5bGVzXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBJQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCJcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uPElCdXR0b24uSVByb3BzPmBcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAke1NpemVTdHlsZX1cclxuICAgICR7Q292ZXJTdHlsZX1cclxuICAgICR7UGFkZGluZ1N0eWxlfVxyXG4gICAgJHtEaXNhYmxlZFN0eWxlfVxyXG4gICAgJHtTaG93U3R5bGV9XHJcbmBcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIlxyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgSVNlbGVjdCB9IGZyb20gXCIuL1NlbGVjdFwiXHJcbmltcG9ydCB7IFN0eWxlZFNlbGVjdCB9IGZyb20gXCIuL3N0eWxlZFwiXHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5leHBvcnQgeyBTdHlsZWRTZWxlY3QgfVxyXG5cclxuY29uc3QgU2VsZWN0ID0gKHByb3BzOiBJU2VsZWN0LklQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgc2V0VmFsdWUgfSA9IHByb3BzXHJcbiAgICBjb25zdCBvbkNoYW5nZVNlbGVjdCA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIDxTdHlsZWRTZWxlY3Qgey4uLnByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VTZWxlY3R9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNlbGVjdCB9XHJcbiIsImltcG9ydCB7IE1hcmdpblN0eWxlLCBSaWdodFN0eWxlLCBTaXplU3R5bGUsIENvdmVyU3R5bGUsIFBhZGRpbmdTdHlsZSwgU2hvd1N0eWxlLCBEaXNhYmxlZFN0eWxlIH0gZnJvbSBcIkBDb21wb25lbnRzL3N0eWxlc1wiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgSVNlbGVjdCB9IGZyb20gXCIuL1NlbGVjdFwiXHJcblxyXG4vLyB3cmFwcGVkIHN0eWxlZC1jb21wb25lbnQgYW5kIHJlLXR5cGVkIGl0IHdvcmtzIGFzIGV4cGVjdGVkXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRTZWxlY3QgPSBzdHlsZWQuc2VsZWN0PElTZWxlY3QuSVByb3BzPmBcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAke1NpemVTdHlsZX1cclxuICAgICR7Q292ZXJTdHlsZX1cclxuICAgICR7UGFkZGluZ1N0eWxlfVxyXG4gICAgJHtEaXNhYmxlZFN0eWxlfVxyXG4gICAgJHtTaG93U3R5bGV9XHJcbmBcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IElUaXRsZSB9IGZyb20gXCIuL1RpdGxlXCJcclxuaW1wb3J0IHsgU3R5bGVkVGl0bGUgfSBmcm9tIFwiLi9zdHlsZWRcIlxyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuZXhwb3J0IHsgU3R5bGVkVGl0bGUgfVxyXG5cclxuY29uc3QgVGl0bGU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElUaXRsZS5JUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPFN0eWxlZFRpdGxlIHsuLi5wcm9wc30gLz5cclxufVxyXG5UaXRsZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBhczogXCJoMVwiLFxyXG59XHJcblxyXG5leHBvcnQgeyBUaXRsZSB9XHJcbiIsImltcG9ydCB7IE1hcmdpblN0eWxlIH0gZnJvbSBcIkBDb21wb25lbnRzXCJcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBJVGl0bGUgfSBmcm9tIFwiLi9UaXRsZVwiXHJcbmNvbnN0IFRpdGxlU2l6ZVN0eWxlID0gKHsgYXMgfTogeyBhcz86IElUaXRsZS5JVGFncyB9KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFzKSB7XHJcbiAgICAgICAgY2FzZSBcImgxXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImgyXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImgzXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiaDRcIjoge1xyXG4gICAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJoNVwiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImg2XCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLmgxPElUaXRsZS5JUHJvcHM+YFxyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAke1RpdGxlU2l6ZVN0eWxlfVxyXG5gXHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0J1dHRvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9TZWxlY3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vVGl0bGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vQXRvbS5kXCI7IiwiZXhwb3J0IGNvbnN0IFNpemVDb2RlID0ge1xyXG4gICAgc21hbGw6IDEwMSxcclxuICAgIG5vcm1hbDogMTAyLFxyXG4gICAgbGFyZ2U6IDEwMyxcclxuICAgIGljb246IDEwNCxcclxuICAgIHByb2ZpbGU6IDEwNSxcclxufSBhcyBjb25zdFxyXG5leHBvcnQgdHlwZSBTaXplQ29kZSA9IHR5cGVvZiBTaXplQ29kZVtrZXlvZiB0eXBlb2YgU2l6ZUNvZGVdXHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IEhlYWRlciwgQnV0dG9uLCBUaXRsZSwgU2l6ZUNvZGUgfSBmcm9tIFwiQENvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBJTGF5b3V0IH0gZnJvbSBcIi4uL0xheW91dFwiXHJcbmltcG9ydCB7IFN0eWxlZFdyYXAgfSBmcm9tIFwiLi9zdHlsZWRcIlxyXG5cclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IGZ1bmN0aW9uICh7IGNoaWxkcmVuIH06IElMYXlvdXQuSVByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0veGVpY29uQDIuMy4zL3hlaWNvbi5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxTdHlsZWRXcmFwIGNsYXNzTmFtZT1cImxfd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+66Gc6rOgPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e1wiL3NldHRpbmdcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInhpLWNvZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXJcIj7shKTsoJU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9TdHlsZWRXcmFwPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcImhlYWRlclwiXHJcbiAgICBcIm1haW5cIjtcclxuYDsiLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgU2l6ZUNvZGUsIEhlYWRlciwgQnV0dG9uLCBUaXRsZSB9IGZyb20gXCJAQ29tcG9uZW50c1wiXHJcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gXCJASW50ZXJmYWNlc1wiXHJcbmltcG9ydCB7IFN0YXJBY3Rpb25zIH0gZnJvbSBcIkBBY3Rpb25zXCJcclxuaW1wb3J0IHsgSUxheW91dCB9IGZyb20gXCIuLi9MYXlvdXRcIlxyXG5pbXBvcnQgeyBTdHlsZWRXcmFwIH0gZnJvbSBcIi4vc3R5bGVkXCJcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG5leHBvcnQgY29uc3QgSW5mbyA9IGZ1bmN0aW9uICh7IGNoaWxkcmVuLCBjYXRlX2luZm8gfTogSUxheW91dC5JUHJvcHMpIHtcclxuICAgIGNvbnN0IHN0YXIgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElTdG9yZSkgPT4gc3RhdGUuc3RhcilcclxuICAgIGNvbnN0IGdldElzU3RhciA9ICgpID0+IHN0YXIubGlzdC5maW5kKChzZXE6IG51bWJlcikgPT4gc2VxID09PSBjYXRlX2luZm8/LnNlcSkgIT09IHVuZGVmaW5lZFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3hlaWNvbkAyLjMuMy94ZWljb24ubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8U3R5bGVkV3JhcCBjbGFzc05hbWU9XCJsX3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwieGktYW5nbGUtbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXJcIj7rkqTroZzqsIDquLA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPntjYXRlX2luZm8/Lm5hbWV9PC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9eyFnZXRJc1N0YXIoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVfaW5mbyA9PT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJBY3Rpb25zLkFkZFN0YXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXE6IGNhdGVfaW5mby5zZXEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ4aS1zdGFyLW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlyXCI+7KaQ6rKo7LC+6riwIOy2lOqwgDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e2dldElzU3RhcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZV9pbmZvID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhckFjdGlvbnMuUmVtb3ZlU3Rhcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcTogY2F0ZV9pbmZvLnNlcSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInhpLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlyXCI+7KaQ6rKo7LC+6riwIOyCreygnDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L1N0eWxlZFdyYXA+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiaGVhZGVyXCJcclxuICAgIFwibWFpblwiO1xyXG5gOyIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IEhlYWRlciwgQnV0dG9uLCBUaXRsZSwgU2l6ZUNvZGUgfSBmcm9tIFwiQENvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBJTGF5b3V0IH0gZnJvbSBcIi4uL0xheW91dFwiXHJcbmltcG9ydCB7IFN0eWxlZFdyYXAgfSBmcm9tIFwiLi9zdHlsZWRcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG5leHBvcnQgY29uc3QgU2V0dGluZyA9IGZ1bmN0aW9uICh7IGNoaWxkcmVuIH06IElMYXlvdXQuSVByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3hlaWNvbkAyLjMuMy94ZWljb24ubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8U3R5bGVkV3JhcCBjbGFzc05hbWU9XCJsX3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgY2VudGVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwieGktYW5nbGUtbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXJcIj7rkqTroZzqsIDquLA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGFzPVwiaDFcIj7shKTsoJU8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvU3R5bGVkV3JhcD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFdyYXAgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJoZWFkZXJcIlxyXG4gICAgXCJtYWluXCI7XHJcbmA7IiwiaW1wb3J0IHsgRGVmYXVsdCB9IGZyb20gXCIuL0RlZmF1bHRcIlxyXG5pbXBvcnQgeyBJbmZvIH0gZnJvbSBcIi4vSW5mb1wiXHJcbmltcG9ydCB7IFNldHRpbmcgfSBmcm9tIFwiLi9TZXR0aW5nXCJcclxuaW1wb3J0IHsgSUxheW91dCB9IGZyb20gXCIuL0xheW91dFwiXHJcbmV4cG9ydCBlbnVtIExheW91dENvZGUge1xyXG4gICAgXCJEZWZhdWx0XCIsXHJcbiAgICBcIkluZm9cIixcclxuICAgIFwiU2V0dGluZ1wiLFxyXG59XHJcbmNvbnN0IFRoZUxheW91dDoge1xyXG4gICAgW2tleTogbnVtYmVyXTogKHsgY2hpbGRyZW4sIGNhdGVfaW5mbyB9OiBJTGF5b3V0LklQcm9wcykgPT4gSlNYLkVsZW1lbnRcclxufSA9IHtcclxuICAgIFtMYXlvdXRDb2RlLkRlZmF1bHRdOiBEZWZhdWx0LFxyXG4gICAgW0xheW91dENvZGUuSW5mb106IEluZm8sXHJcbiAgICBbTGF5b3V0Q29kZS5TZXR0aW5nXTogU2V0dGluZyxcclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRoZUxheW91dFxyXG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQzNDaGFydCBmcm9tIFwicmVhY3QtYzNqc1wiXHJcbmltcG9ydCBcImMzL2MzLmNzc1wiXHJcblxyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgSUNoYXJ0IH0gZnJvbSBcIi4vQ2hhcnRcIlxyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi9zdHlsZWRcIlxyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbmNvbnN0IGZvcm1hdENvbW1hID0gZnVuY3Rpb24gKHY6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHYudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYXJ0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJQ2hhcnQuSVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBwcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxDM0NoYXJ0XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGRhdGE9e3tcclxuICAgICAgICAgICAgICAgICAgICB4OiBcIkRhdGVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8geEZvcm1hdDogXCIlWS0lbS0lZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgW1wiRGF0ZXNcIiwgXCIyMDIwLTA3LTAxXCIsIFwiMjAyMC0wOC0wMVwiLCBcIjIwMjAtMDktMDFcIiwgXCIyMDIwLTEwLTAxXCIsIFwiMjAyMC0xMS0wMVwiLCBcIjIwMjAtMTItMDFcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFtcIuyHoOqzoOq4sFwiLCAyOTg1LCAyOTk3LCAzMjY3LCAzMjI3LCAzMjAyLCAzMzAyXSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24gKHY6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdENvbW1hKHYpICsgXCLsm5BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZTogZnVuY3Rpb24gKGQpIHsgcmV0dXJuICdEYXRhICcgKyBkOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXRDb21tYSh2YWx1ZSkgKyBcIuybkFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgdmFsdWU6IGQzLmZvcm1hdCgnLCcpIC8vIGFwcGx5IHRoaXMgZm9ybWF0IHRvIGJvdGggeSBhbmQgeTJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGxpbmU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0X251bGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGF4aXM9e3tcclxuICAgICAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGltZXNlcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiJVktJW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogeyB0b3A6IDIwMCwgYm90dG9tOiAyMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG4iLCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBJQ2hhcnQgfSBmcm9tIFwiLi9DaGFydFwiXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxJQ2hhcnQuSVByb3BzPmBcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJj4uYzM+c3ZnPmRlZnM6Zmlyc3QtY2hpbGQ+Y2xpcFBhdGg6Zmlyc3QtY2hpbGQ+cmVjdHt3aWR0aDozMDAwcHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAwKTt9XHJcbmBcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IElDb250ZW50c0JhciB9IGZyb20gXCIuL0NvbnRlbnRzQmFyXCJcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVkXCJcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG5jb25zdCBDb250ZW50c0JhcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUNvbnRlbnRzQmFyLklQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8Q29udGFpbmVyIHsuLi5wcm9wc30gLz5cclxufVxyXG5leHBvcnQgeyBDb250ZW50c0JhciB9XHJcbiIsImltcG9ydCB7IE1hcmdpblN0eWxlLCBQYWRkaW5nU3R5bGUsIFNob3dTdHlsZSB9IGZyb20gXCJAQ29tcG9uZW50cy9zdHlsZXNcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IElDb250ZW50c0JhciB9IGZyb20gXCIuL0NvbnRlbnRzQmFyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PElDb250ZW50c0Jhci5JUHJvcHM+YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICR7TWFyZ2luU3R5bGV9XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAke1BhZGRpbmdTdHlsZX1cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICR7U2hvd1N0eWxlfVxyXG5gXHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBJSWNvbkxpc3QgfSBmcm9tIFwiLi9JY29uTGlzdFwiXHJcbmltcG9ydCB7IFdyYXBlciwgQ29udGFpbmVyLCBDb250YWluZXJJbm5lciB9IGZyb20gXCIuL3N0eWxlZFwiXHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuLy8gSW1wb3J0IFN3aXBlciBSZWFjdCBjb21wb25lbnRzXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCJcclxuaW1wb3J0IHsgQ0FURUdPUllfVFlQRV9TVFIgfSBmcm9tIFwiQERlZmluaXRpb25zXCJcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uTGlzdElubmVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJSWNvbkxpc3QuSVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHNcclxuICAgIHJldHVybiA8Q29udGFpbmVySW5uZXI+e2NoaWxkcmVufTwvQ29udGFpbmVySW5uZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJY29uTGlzdENvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUljb25MaXN0LklQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzXHJcbiAgICByZXR1cm4gPENvbnRhaW5lciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0NvbnRhaW5lcj5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEljb25MaXN0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJSWNvbkxpc3QuSVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc2V0U3dpcGVyLCBvbkNoYW5nZSwgc2VsVGFiIH0gPSBwcm9wc1xyXG4gICAgY29uc3QgaW5pdElkeCA9IE9iamVjdC5lbnRyaWVzKENBVEVHT1JZX1RZUEVfU1RSKS5maW5kSW5kZXgoKFtrZXksIHZhbHVlXSkgPT4gc2VsVGFiID09PSBOdW1iZXIoa2V5KSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdyYXBlcj5cclxuICAgICAgICAgICAgPFN3aXBlciBpbml0aWFsU2xpZGU9e2luaXRJZHh9IG9uU2xpZGVDaGFuZ2U9e29uQ2hhbmdlfSBvblN3aXBlcj17KHN3aXBlcikgPT4gc2V0U3dpcGVyKHN3aXBlcil9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICA8L1dyYXBlcj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IElJY29uTGlzdCB9IGZyb20gXCIuL0ljb25MaXN0XCJcclxuaW1wb3J0IHsgU3R5bGVkQnV0dG9uIH0gZnJvbSBcIkBDb21wb25lbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwZXIgPSBzdHlsZWQuZGl2PElJY29uTGlzdC5JUHJvcHM+YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgJiA+IC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8SUljb25MaXN0LklQcm9wcz5gXHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVySW5uZXIgPSBzdHlsZWQuZGl2PElJY29uTGlzdC5JUHJvcHM+YFxyXG4gICAgZmxleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJiA+ICR7U3R5bGVkQnV0dG9ufSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbmBcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCJAQ29tcG9uZW50cy9BdG9tXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgSU1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIlxyXG5pbXBvcnQgeyBTdHlsZWRNb2RhbFdyYXAsIFN0eWxlZE1vZGFsLCBTdHlsZWRNb2RhbEhlYWRlciB9IGZyb20gXCIuL3N0eWxlZFwiXHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5leHBvcnQgdHlwZSB7IElNb2RhbCB9XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWw6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElNb2RhbC5JUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHNob3csIHRpdGxlLCBjaGlsZHJlbiB9ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZE1vZGFsV3JhcCBzaG93PXtzaG93fT5cclxuICAgICAgICAgICAgPFN0eWxlZE1vZGFsPlxyXG4gICAgICAgICAgICAgICAge3RpdGxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZE1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9TdHlsZWRNb2RhbD5cclxuICAgICAgICA8L1N0eWxlZE1vZGFsV3JhcD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBTaG93U3R5bGUgfSBmcm9tIFwiQENvbXBvbmVudHMvc3R5bGVzXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBJTW9kYWwgfSBmcm9tIFwiLi9Nb2RhbFwiXHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTW9kYWxXcmFwID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgJHtTaG93U3R5bGV9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFN0eWxlZE1vZGFsID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuYFxyXG5leHBvcnQgY29uc3QgU3R5bGVkTW9kYWxIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG5gXHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBJU2V0dGluZ0xpc3QgfSBmcm9tIFwiLi9TZXR0aW5nTGlzdFwiXHJcbmltcG9ydCB7IENvbnRhaW5lciwgQ29udGFpbmVySW5uZXIgfSBmcm9tIFwiLi9zdHlsZWRcIlxyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbmV4cG9ydCBjb25zdCBTZXR0aW5nTGlzdElubmVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJU2V0dGluZ0xpc3QuSVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgb25DbGljayB9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4gPENvbnRhaW5lcklubmVyIG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L0NvbnRhaW5lcklubmVyPlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2V0dGluZ0xpc3Q6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElTZXR0aW5nTGlzdC5JUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wc1xyXG4gICAgcmV0dXJuIDxDb250YWluZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBJU2V0dGluZ0xpc3QgfSBmcm9tIFwiLi9TZXR0aW5nTGlzdFwiXHJcbmltcG9ydCB7IFN0eWxlZEJ1dHRvbiwgU3R5bGVkVGl0bGUgfSBmcm9tIFwiQENvbXBvbmVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC51bDxJU2V0dGluZ0xpc3QuSVByb3BzPmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJJbm5lciA9IHN0eWxlZC5saTxJU2V0dGluZ0xpc3QuSVByb3BzPmBcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAmID4gJHtTdHlsZWRUaXRsZX0ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuYFxyXG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIkBDb21wb25lbnRzXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBJU2V0dGluZ1RpdGxlIH0gZnJvbSBcIi4vU2V0dGluZ1RpdGxlXCJcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVkXCJcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG5jb25zdCBTZXR0aW5nVGl0bGU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElTZXR0aW5nVGl0bGUuSVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxDb250YWluZXIgey4uLnByb3BzfT48L0NvbnRhaW5lcj5cclxufVxyXG5leHBvcnQgeyBTZXR0aW5nVGl0bGUgfVxyXG4iLCJpbXBvcnQgeyBTdHlsZWRUaXRsZSB9IGZyb20gXCJAQ29tcG9uZW50cy9BdG9tXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBJU2V0dGluZ1RpdGxlIH0gZnJvbSBcIi4vU2V0dGluZ1RpdGxlXCJcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PElTZXR0aW5nVGl0bGUuSVByb3BzPmBcclxuICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wOjJweCBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkO1xyXG4gICAgJj4ke1N0eWxlZFRpdGxlfXtcclxuICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgIH1cclxuYFxyXG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgSVRhYiB9IGZyb20gXCIuL1RhYlwiXHJcbmltcG9ydCB7IENvbnRhaW5lciwgQ29udGFpbmVySW5uZXIgfSBmcm9tIFwiLi9zdHlsZWRcIlxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQENvbXBvbmVudHMvQXRvbVwiXHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhYklubmVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJVGFiLklQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzXHJcbiAgICByZXR1cm4gPENvbnRhaW5lcklubmVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQ29udGFpbmVySW5uZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElUYWIuSVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHNcclxuICAgIHJldHVybiA8Q29udGFpbmVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgSVRhYiB9IGZyb20gXCIuL1RhYlwiXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVySW5uZXIgPSBzdHlsZWQubGk8SVRhYi5JUHJvcHM+YFxyXG4gICAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQudWw8SVRhYi5JUHJvcHM+YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuYFxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9UYWJcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9DaGFydFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL01vZGFsXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vSWNvbkxpc3RcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5nTGlzdFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdUaXRsZVwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbnRlbnRzQmFyXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vTW9sZWN1bGVzLmRcIlxyXG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIENvbnRlbnRzQmFyIH0gZnJvbSBcIkBDb21wb25lbnRzXCJcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IElBbGVydE1vZGFsIH0gZnJvbSBcIi4vQWxlcnRNb2RhbFwiXHJcbmltcG9ydCB7IFN0eWxlZEFsZXJ0Q29uIH0gZnJvbSBcIi4vc3R5bGVkXCJcclxuXHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuZXhwb3J0IGNvbnN0IEFsZXJ0TW9kYWwgPSBmdW5jdGlvbiAocHJvcHM6IElBbGVydE1vZGFsLklQcm9wcykge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgb25DbGljaywgLi4ucmVzdCB9ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsIHsuLi5yZXN0fT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRBbGVydENvbj57Y2hpbGRyZW59PC9TdHlsZWRBbGVydENvbj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50c0JhciBub1BhZGRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb3ZlciBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7ZmV7J24XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRzQmFyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IFN0eWxlZEJ1dHRvbiwgU3R5bGVkVGl0bGUgfSBmcm9tIFwiQENvbXBvbmVudHNcIlxyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IElBbGVydE1vZGFsIH0gZnJvbSBcIi4vQWxlcnRNb2RhbFwiXHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQWxlcnRDb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzozMHB4O1xyXG5gXHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IElIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIlxyXG5pbXBvcnQgeyBTdHlsZWRIZWFkZXIgfSBmcm9tIFwiLi9zdHlsZWRcIlxyXG5cclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gZnVuY3Rpb24gKHByb3BzOiBJSGVhZGVyLklQcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3R5bGVkSGVhZGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBTdHlsZWRCdXR0b24sIFN0eWxlZFRpdGxlIH0gZnJvbSBcIkBDb21wb25lbnRzXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IElIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyPElIZWFkZXIuSVByb3BzPmBcclxuICBwYWRkaW5nOjAgMTBweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICY+JHtTdHlsZWRCdXR0b259e1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIGZvbnQtc2l6ZTozNnB4O1xyXG4gIH1cclxuICAkeyh7Y2VudGVyVGl0bGV9OklIZWFkZXIuSVByb3BzKT0+KGNlbnRlclRpdGxlICYmY3NzYFxyXG4gICAgJj4ke1N0eWxlZFRpdGxlfXtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6NTAlO1xyXG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsMCk7XHJcbiAgICB9XHJcbiAgYCl9XHJcbiAgXHJcbmA7IiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAQ29tcG9uZW50c1wiXHJcbmltcG9ydCB7IElJbmZvTmF2IH0gZnJvbSBcIi4vSW5mb05hdlwiXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlZFwiXHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9OYXY6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElJbmZvTmF2LklQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IG5hdl9pbmZvIH0gPSBwcm9wc1xyXG4gICAgY29uc3QgeyBuZXh0LCBwcmV2IH0gPSBuYXZfaW5mbyB8fCB7fVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNob3c9e3ByZXYgIT09IG51bGx9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoeyBwYXRobmFtZTogXCIvaW5mb1wiLCBxdWVyeTogeyBzZXE6IHByZXY/LnNlcSB9IH0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ4aS1hbmdsZS1sZWZ0LW1pblwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlyXCI+e3ByZXY/Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc2hvdz17bmV4dCAhPT0gbnVsbH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSh7IHBhdGhuYW1lOiBcIi9pbmZvXCIsIHF1ZXJ5OiB7IHNlcTogbmV4dD8uc2VxIH0gfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInhpLWFuZ2xlLXJpZ2h0LW1pblwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlyXCI+e25leHQ/Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG4iLCJcclxuaW1wb3J0IHsgU3R5bGVkQnV0dG9uIH0gZnJvbSBcIkBDb21wb25lbnRzL0F0b21cIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IElJbmZvTmF2IH0gZnJvbSBcIi4vSW5mb05hdlwiXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxJSW5mb05hdi5JUHJvcHM+YFxyXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgICY+JHtTdHlsZWRCdXR0b259e1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOmF1dG87XHJcbiAgICAgICAgYm9yZGVyOjA7XHJcbiAgICB9XHJcbmBcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vSGVhZGVyXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vQWxlcnRNb2RhbFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL0luZm9OYXZcIlxyXG4iLCJleHBvcnQgKiBmcm9tIFwiQENvbXBvbmVudHMvQXRvbVwiXHJcbmV4cG9ydCAqIGZyb20gXCJAQ29tcG9uZW50cy9Nb2xlY3VsZXNcIlxyXG5leHBvcnQgKiBmcm9tIFwiQENvbXBvbmVudHMvT3JnYW5pc21zXCJcclxuZXhwb3J0ICogZnJvbSBcIkBDb21wb25lbnRzL0xheW91dFwiXHJcbmV4cG9ydCAqIGZyb20gXCJAQ29tcG9uZW50cy9zdHlsZXNcIlxyXG5leHBvcnQgKiBmcm9tIFwiQENvbXBvbmVudHMvQ29tcG9uZW50c1wiXHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFNpemVDb2RlIH0gZnJvbSBcIi4vQ29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgQWJzQ2VudGVyU3R5bGUgPSBjc3NgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBTaXplU3R5bGUgPSAoeyBzaXplVmFsIH06IHsgc2l6ZVZhbD86IFNpemVDb2RlIH0pID0+IHtcclxuICAgIHN3aXRjaCAoc2l6ZVZhbCkge1xyXG4gICAgICAgIGNhc2UgU2l6ZUNvZGUuc21hbGw6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNpemVDb2RlLmxhcmdlOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTaXplQ29kZS5pY29uOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICYgPiBpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTaXplQ29kZS5wcm9maWxlOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAvL25vcm1hbFxyXG4gICAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGFkZGluZ1N0eWxlID0gKHsgc2l6ZVZhbCwgbm9QYWRkaW5nIH06IHsgc2l6ZVZhbD86IFNpemVDb2RlLCBub1BhZGRpbmc/OiBib29sZWFuIH0pID0+IHtcclxuICAgIGlmKG5vUGFkZGluZyA9PT0gdHJ1ZSlyZXR1cm4gY3NzYFxyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICBgXHJcbiAgICBzd2l0Y2ggKHNpemVWYWwpIHtcclxuICAgICAgICBjYXNlIFNpemVDb2RlLnNtYWxsOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNpemVDb2RlLmxhcmdlOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ292ZXJTdHlsZSA9ICh7IGNvdmVyIH06IHsgY292ZXI/OiBib29sZWFuIH0pID0+IHtcclxuICAgIGlmIChjb3Zlcikge1xyXG4gICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFyZ2luU3R5bGUgPSAoeyBub01hcmdpbiB9OiB7IG5vTWFyZ2luPzogYm9vbGVhbiB9KSA9PiBjc3NgXHJcbiAgICAke25vTWFyZ2luICYmIGBtYXJnaW46MDtgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuYFxyXG5leHBvcnQgY29uc3QgUmlnaHRTdHlsZSA9ICh7IHJpZ2h0IH06IHsgcmlnaHQ/OiBib29sZWFuIH0pID0+IGNzc2BcclxuICAgICR7cmlnaHQgJiYgYG1hcmdpbi1sZWZ0OmF1dG87YH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dTdHlsZSA9ICh7IHNob3cgfTogeyBzaG93PzogYm9vbGVhbiB9KSA9PiBjc3NgXHJcbiAgICAke3Nob3cgPT09IGZhbHNlICYmIFwiZGlzcGxheTogbm9uZTtcIn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IERpc2FibGVkU3R5bGUgPSAoeyBpc0Rpc2FibGVkIH06IHsgaXNEaXNhYmxlZD86IGJvb2xlYW4gfSkgPT4ge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgIGBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlYWRPbmx5U3R5bGUgPSAoeyByZWFkT25seSB9OiB7IHJlYWRPbmx5PzogYm9vbGVhbiB9KSA9PiB7XHJcbiAgICBpZiAocmVhZE9ubHkgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgIGBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNlbnRlclN0eWxlID0gKHsgY2VudGVyIH06IHsgY2VudGVyPzogYm9vbGVhbiB9KSA9PiB7XHJcbiAgICBpZiAoY2VudGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBBY3Rpb25Db25zdHMgPSB7XHJcbiAgICBBcHA6IHtcclxuICAgICAgICBSZXNldFJlZHVjZXI6IFwiQXBwX1Jlc2V0UmVkdWNlclwiLFxyXG4gICAgICAgIFNldFNlbENhdGVSZWR1Y2VyOiBcIkFwcF9TZXRTZWxDYXRlUmVkdWNlclwiLFxyXG4gICAgICAgIFNldFNlbFRoZW1lUmVkdWNlcjogXCJBcHBfU2V0U2VsVGhlbWVSZWR1Y2VyXCIsXHJcbiAgICB9LFxyXG4gICAgSG9tZToge1xyXG4gICAgICAgIFJlc2V0UmVkdWNlcjogXCJIb21lX1Jlc2V0UmVkdWNlclwiLFxyXG4gICAgICAgIFNldFJlZHVjZXI6IFwiSG9tZV9TZXRSZWR1Y2VyXCIsXHJcbiAgICB9LFxyXG4gICAgU3Rhcjoge1xyXG4gICAgICAgIFJlc2V0UmVkdWNlcjogXCJTdGFyX1Jlc2V0UmVkdWNlclwiLFxyXG4gICAgICAgIEFkZFJlZHVjZXI6IFwiU3Rhcl9BZGRSZWR1Y2VyXCIsXHJcbiAgICAgICAgUmVtb3ZlUmVkdWNlcjogXCJTdGFyX1JlbW92ZVJlZHVjZXJcIixcclxuICAgIH0sXHJcbn0gYXMgY29uc3RcclxuIiwiaW1wb3J0IHsgQ2F0ZWdvcnksIFByaWNlR3JvdXAgfSBmcm9tIFwiQEludGVyZmFjZXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX1RZUEUgPSB7XHJcbiAgICBTVEFSOiAwLFxyXG4gICAgTUVBVDogMSxcclxuICAgIEZJU0g6IDIsXHJcbiAgICBWRUdFVEFCTEU6IDMsXHJcbn0gYXMgY29uc3RcclxuZXhwb3J0IHR5cGUgQ0FURUdPUllfVFlQRSA9IHR5cGVvZiBDQVRFR09SWV9UWVBFW2tleW9mIHR5cGVvZiBDQVRFR09SWV9UWVBFXVxyXG5cclxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX1RZUEVfU1RSOiB7IFt4OiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcclxuICAgIFtDQVRFR09SWV9UWVBFLlNUQVJdOiBcIuymkOqyqOywvuq4sFwiLFxyXG4gICAgW0NBVEVHT1JZX1RZUEUuTUVBVF06IFwi6rOg6riwXCIsXHJcbiAgICBbQ0FURUdPUllfVFlQRS5GSVNIXTogXCLsg53shKBcIixcclxuICAgIFtDQVRFR09SWV9UWVBFLlZFR0VUQUJMRV06IFwi7JW87LGEXCIsXHJcbn0gYXMgY29uc3RcclxuZXhwb3J0IHR5cGUgQ0FURUdPUllfVFlQRV9TVFIgPSB0eXBlb2YgQ0FURUdPUllfVFlQRV9TVFJba2V5b2YgdHlwZW9mIENBVEVHT1JZX1RZUEVfU1RSXVxyXG5cclxuZXhwb3J0IGNvbnN0IE1fVFlQRSA9IHtcclxuICAgIFwiXCI6IFwiXCIsXHJcbiAgICBcIjAwMVwiOiBcIuyghO2GteyLnOyepVwiLFxyXG4gICAgXCIwMDJcIjogXCLrjIDtmJXrp4jtirhcIixcclxufSBhcyBjb25zdFxyXG5leHBvcnQgdHlwZSBNX1RZUEUgPSB0eXBlb2YgTV9UWVBFW2tleW9mIHR5cGVvZiBNX1RZUEVdXHJcblxyXG5leHBvcnQgY29uc3QgTV9HVSA9IHtcclxuICAgIFwiXCI6IFwiXCIsXHJcbiAgICBcIjY4MDAwMFwiOiBcIuqwleuCqOq1rFwiLFxyXG4gICAgXCI0NDAwMDBcIjogXCLrp4jtj6zqtaxcIixcclxuICAgIFwiMzA1MDAwXCI6IFwi6rCV67aB6rWsXCIsXHJcbiAgICBcIjY1MDAwMFwiOiBcIuyEnOy0iOq1rFwiLFxyXG4gICAgXCI3MTAwMDBcIjogXCLshqHtjIzqtaxcIixcclxuICAgIFwiMzgwMDAwXCI6IFwi7J2A7Y+J6rWsXCIsXHJcbiAgICBcIjI5MDAwMFwiOiBcIuyEseu2geq1rFwiLFxyXG4gICAgXCI1OTAwMDBcIjogXCLrj5nsnpHqtaxcIixcclxuICAgIFwiMzUwMDAwXCI6IFwi64W47JuQ6rWsXCIsXHJcbiAgICBcIjQ3MDAwMFwiOiBcIuyWkeyynOq1rFwiLFxyXG4gICAgXCIxNzAwMDBcIjogXCLsmqnsgrDqtaxcIixcclxuICAgIFwiMzIwMDAwXCI6IFwi64+E67SJ6rWsXCIsXHJcbiAgICBcIjc0MDAwMFwiOiBcIuqwleuPmeq1rFwiLFxyXG4gICAgXCI0MTAwMDBcIjogXCLshJzrjIDrrLjqtaxcIixcclxuICAgIFwiMjE1MDAwXCI6IFwi6rSR7KeE6rWsXCIsXHJcbiAgICBcIjU0NTAwMFwiOiBcIuq4iOyynOq1rFwiLFxyXG4gICAgXCI2MjAwMDBcIjogXCLqtIDslYXqtaxcIixcclxuICAgIFwiMTEwMDAwXCI6IFwi7KKF66Gc6rWsXCIsXHJcbiAgICBcIjE0MDAwMFwiOiBcIuykkeq1rFwiLFxyXG4gICAgXCIyMDAwMDBcIjogXCLshLHrj5nqtaxcIixcclxuICAgIFwiNTAwMDAwXCI6IFwi6rCV7ISc6rWsXCIsXHJcbiAgICBcIjUzMDAwMFwiOiBcIuq1rOuhnOq1rFwiLFxyXG4gICAgXCI1NjAwMDBcIjogXCLsmIHrk7Htj6zqtaxcIixcclxuICAgIFwiMjYwMDAwXCI6IFwi7KSR656R6rWsXCIsXHJcbiAgICBcIjIzMDAwMFwiOiBcIuuPmeuMgOusuOq1rFwiLFxyXG59IGFzIGNvbnN0XHJcbmV4cG9ydCB0eXBlIE1fR1UgPSB0eXBlb2YgTV9HVVtrZXlvZiB0eXBlb2YgTV9HVV1cclxuXHJcbmV4cG9ydCBjb25zdCBDQVRFR09SWV9MSVNUOiBDYXRlZ29yeVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNlcTogMSxcclxuICAgICAgICBuYW1lOiBcIuuPvOyngOqzoOq4sFwiLFxyXG4gICAgICAgIHR5cGU6IENBVEVHT1JZX1RZUEUuTUVBVCxcclxuICAgICAgICBzZXFfbGlzdDogWzI4NSwgNTIsIDk5XSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VxOiAyLFxyXG4gICAgICAgIG5hbWU6IFwi7Ieg6rOg6riwXCIsXHJcbiAgICAgICAgdHlwZTogQ0FURUdPUllfVFlQRS5NRUFULFxyXG4gICAgICAgIHNlcV9saXN0OiBbMjc4LCA1OCwgODIsIDEzMSwgMTA2XSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VxOiAzLFxyXG4gICAgICAgIG5hbWU6IFwi64ut6rOg6riwXCIsXHJcbiAgICAgICAgdHlwZTogQ0FURUdPUllfVFlQRS5NRUFULFxyXG4gICAgICAgIHNlcV9saXN0OiBbMTgsIDI3NSwgMjgzLCAxMzhdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZXE6IDQsXHJcbiAgICAgICAgbmFtZTogXCLri6zqsYBcIixcclxuICAgICAgICB0eXBlOiBDQVRFR09SWV9UWVBFLk1FQVQsXHJcbiAgICAgICAgc2VxX2xpc3Q6IFsxNzEsIDMyMSwgMzIwLCAxMzQsIDE4MV0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNlcTogNSxcclxuICAgICAgICBuYW1lOiBcIuqzoOuTseyWtFwiLFxyXG4gICAgICAgIHR5cGU6IENBVEVHT1JZX1RZUEUuRklTSCxcclxuICAgICAgICBzZXFfbGlzdDogWzEzLCAyNjYsIDI2NywgMjY4LCAyNjksIDMxNiwgMzE4XSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VxOiA2LFxyXG4gICAgICAgIG5hbWU6IFwi7KGw6riwXCIsXHJcbiAgICAgICAgdHlwZTogQ0FURUdPUllfVFlQRS5GSVNILFxyXG4gICAgICAgIHNlcV9saXN0OiBbMzAzLCAxMzYsIDE0NCwgMjU4LCAyNTksIDI2MSwgMjYwLCAxMzUsIDMxMywgMzE0XSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VxOiA3LFxyXG4gICAgICAgIG5hbWU6IFwi66qF7YOcXCIsXHJcbiAgICAgICAgdHlwZTogQ0FURUdPUllfVFlQRS5GSVNILFxyXG4gICAgICAgIHNlcV9saXN0OiBbMzAyLCAyNjIsIDI2MywgMjY0LCAyNjUsIDE4NCwgMTUyLCAzMTVdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZXE6IDgsXHJcbiAgICAgICAgbmFtZTogXCLrj5ntg5xcIixcclxuICAgICAgICB0eXBlOiBDQVRFR09SWV9UWVBFLkZJU0gsXHJcbiAgICAgICAgc2VxX2xpc3Q6IFsyODhdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZXE6IDksXHJcbiAgICAgICAgbmFtZTogXCLsmKTsp5XslrRcIixcclxuICAgICAgICB0eXBlOiBDQVRFR09SWV9UWVBFLkZJU0gsXHJcbiAgICAgICAgc2VxX2xpc3Q6IFsyNTMsIDU0LCAyNTQsIDI1NiwgMjU1LCAyNTddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZXE6IDEwLFxyXG4gICAgICAgIG5hbWU6IFwi67Cw7LaUXCIsXHJcbiAgICAgICAgdHlwZTogQ0FURUdPUllfVFlQRS5WRUdFVEFCTEUsXHJcbiAgICAgICAgc2VxX2xpc3Q6IFsyNiwgMTI1LCAyNzEsIDMwN10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNlcTogMTEsXHJcbiAgICAgICAgbmFtZTogXCLsg4HstpRcIixcclxuICAgICAgICB0eXBlOiBDQVRFR09SWV9UWVBFLlZFR0VUQUJMRSxcclxuICAgICAgICBzZXFfbGlzdDogWzIzLCAzMTBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZXE6IDEyLFxyXG4gICAgICAgIG5hbWU6IFwi66y0XCIsXHJcbiAgICAgICAgdHlwZTogQ0FURUdPUllfVFlQRS5WRUdFVEFCTEUsXHJcbiAgICAgICAgc2VxX2xpc3Q6IFsyNSwgMTMzLCAyODIsIDI3NCwgMzA4XSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VxOiAxMyxcclxuICAgICAgICBuYW1lOiBcIuyWke2MjFwiLFxyXG4gICAgICAgIHR5cGU6IENBVEVHT1JZX1RZUEUuVkVHRVRBQkxFLFxyXG4gICAgICAgIHNlcV9saXN0OiBbMjQsIDI3MiwgMzA5XSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2VxOiAxNCxcclxuICAgICAgICBuYW1lOiBcIuyYpOydtFwiLFxyXG4gICAgICAgIHR5cGU6IENBVEVHT1JZX1RZUEUuVkVHRVRBQkxFLFxyXG4gICAgICAgIHNlcV9saXN0OiBbMjIsIDMxMV0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNlcTogMTUsXHJcbiAgICAgICAgbmFtZTogXCLrsLBcIixcclxuICAgICAgICB0eXBlOiBDQVRFR09SWV9UWVBFLlZFR0VUQUJMRSxcclxuICAgICAgICBzZXFfbGlzdDogWzI3LCAyODQsIDI3NiwgMjQ4LCAzMDZdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZXE6IDE2LFxyXG4gICAgICAgIG5hbWU6IFwi7IKs6rO8XCIsXHJcbiAgICAgICAgdHlwZTogQ0FURUdPUllfVFlQRS5WRUdFVEFCTEUsXHJcbiAgICAgICAgc2VxX2xpc3Q6IFsyOCwgNTAsIDMwNSwgMjcwLCAyNDQsIDI3OV0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNlcTogMTcsXHJcbiAgICAgICAgbmFtZTogXCLtmLjrsJVcIixcclxuICAgICAgICB0eXBlOiBDQVRFR09SWV9UWVBFLlZFR0VUQUJMRSxcclxuICAgICAgICBzZXFfbGlzdDogWzI3NywgMTE5LCAxMThdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzZXE6IDE4LFxyXG4gICAgICAgIG5hbWU6IFwi7JWg7Zi467CVXCIsXHJcbiAgICAgICAgdHlwZTogQ0FURUdPUllfVFlQRS5WRUdFVEFCTEUsXHJcbiAgICAgICAgc2VxX2xpc3Q6IFszMTJdLFxyXG4gICAgfSxcclxuXVxyXG5leHBvcnQgY29uc3QgTkFNRV9PQko6IHsgW3g6IG51bWJlcl06IFByaWNlR3JvdXAgfSA9IHtcclxuICAgIDI4NTogeyBBX05BTUU6IFwi64+87KeA6rOg6riwXCIsIEFfVU5JVDogW1wiNjAwZ1wiLCBcIjHqt7xcIl0gfSxcclxuICAgIDUyOiB7IEFfTkFNRTogXCLrj7zsp4Dqs6DquLAo7IK86rK57IK0KVwiLCBBX1VOSVQ6IFtcIjYwMGdcIiwgXCIx6re8XCJdIH0sXHJcbiAgICA5OTogeyBBX05BTUU6IFwi64+87KeA6rOg6riwKOyDneyCvOqyueyCtClcIiwgQV9VTklUOiBbXCI2MDBnXCIsIFwiMeq3vFwiXSB9LFxyXG4gICAgMjc4OiB7IEFfTkFNRTogXCLsh6Dqs6DquLBcIiwgQV9VTklUOiBbXCI2MDBnXCIsIFwiMeq3vFwiXSB9LFxyXG4gICAgNTg6IHsgQV9OQU1FOiBcIuyHoOqzoOq4sCjtlZzsmrAs67aI6rOg6riwKVwiLCBBX1VOSVQ6IFtcIjYwMGdcIiwgXCIx6re8XCJdIH0sXHJcbiAgICA4MjogeyBBX05BTUU6IFwi7Ieg6rOg6riwKOycoeyasCzrtojqs6DquLApXCIsIEFfVU5JVDogW1wiNjAwZ1wiLCBcIjHqt7xcIl0gfSxcclxuICAgIDEzMTogeyBBX05BTUU6IFwi7Ieg6rOg6riwKO2VnOyasDHrk7HquIkpXCIsIEFfVU5JVDogW1wiNjAwZ1wiLCBcIjHqt7xcIl0gfSxcclxuICAgIDEwNjogeyBBX05BTUU6IFwi7Ieg6rOg6riwKO2VnOyasDLrk7HquIkpXCIsIEFfVU5JVDogW1wiNjAwZ1wiLCBcIjHqt7xcIl0gfSxcclxuICAgIDE4OiB7IEFfTkFNRTogXCLri63qs6DquLBcIiwgQV9VTklUOiBbXCIx66eI66asXCJdIH0sXHJcbiAgICAyNzU6IHsgQV9OQU1FOiBcIuuLreqzoOq4sCjspJHqsIQpXCIsIEFfVU5JVDogW1wiMeuniOumrFwiLCBcIjFrZ1wiXSB9LFxyXG4gICAgMjgzOiB7IEFfTkFNRTogXCLri63qs6DquLAo7Jyh6rOEKVwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIiwgXCIxa2dcIl0gfSxcclxuICAgIDEzODogeyBBX05BTUU6IFwi64ut6rOg6riwKO2GoOyiheuLrSlcIiwgQV9VTklUOiBbXCIx66eI66asXCJdIH0sXHJcbiAgICAxNzE6IHsgQV9OQU1FOiBcIuuLrOqxgCgxMOqwnClcIiwgQV9VTklUOiBbXCIxMOqwnFwiXSB9LFxyXG4gICAgMzIxOiB7IEFfTkFNRTogXCLri6zqsYAoMTXqsJwpXCIsIEFfVU5JVDogW1wiMTXqsJxcIiwgXCLtirnrnoBcIl0gfSxcclxuICAgIDMyMDogeyBBX05BTUU6IFwi64us6rGAKDMw6rCcKVwiLCBBX1VOSVQ6IFtcIjMw6rCcXCIsIFwi7Yq5656AXCJdIH0sXHJcbiAgICAxMzQ6IHsgQV9OQU1FOiBcIuuLrOqxgCjsmZXrnoApXCIsIEFfVU5JVDogW1wiMzDqsJxcIl0gfSxcclxuICAgIDE4MTogeyBBX05BTUU6IFwi64us6rGAKOyZleuegClcIiwgQV9VTklUOiBbXCIzMOqwnFwiXSB9LFxyXG4gICAgMTM6IHsgQV9OQU1FOiBcIuqzoOuTseyWtFwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDI2NjogeyBBX05BTUU6IFwi6rOg65Ox7Ja0KOyDneusvCzqta3sgrApXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMjY3OiB7IEFfTkFNRTogXCLqs6Drk7HslrQo7IOd66y8LOyImOyeheyCsClcIiwgQV9VTklUOiBbXCIx66eI66asXCJdIH0sXHJcbiAgICAyNjg6IHsgQV9OQU1FOiBcIuqzoOuTseyWtCjrg4nrj5ks6rWt7IKwKVwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDI2OTogeyBBX05BTUU6IFwi6rOg65Ox7Ja0KOuDieuPmSzsiJjsnoXsgrApXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMzE2OiB7IEFfTkFNRTogXCLqs6Drk7HslrQoMzBjbSzqta3sgrApXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMzE4OiB7IEFfTkFNRTogXCLqs6Drk7HslrQoMzBjbSzsiJjsnoXsgrApXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMzAzOiB7IEFfTkFNRTogXCLsobDquLBcIiwgQV9VTklUOiBbXCIx66eI66asXCJdIH0sXHJcbiAgICAxMzY6IHsgQV9OQU1FOiBcIuyhsOq4sCjqta3sgrAs7IOd66y8KVwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDE0NDogeyBBX05BTUU6IFwi7KGw6riwKOq1reyCsCzrg4nrj5kpXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMjU4OiB7IEFfTkFNRTogXCLsobDquLAo7IOd66y8LOq1reyCsClcIiwgQV9VTklUOiBbXCIx66eI66asXCJdIH0sXHJcbiAgICAyNTk6IHsgQV9OQU1FOiBcIuyhsOq4sCjrg4nrj5ks6rWt7IKwKVwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDI2MTogeyBBX05BTUU6IFwi7KGw6riwKOyDneusvCzsiJjsnoXsgrApXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMjYwOiB7IEFfTkFNRTogXCLsobDquLAo64OJ64+ZLOyImOyeheyCsClcIiwgQV9VTklUOiBbXCIx66eI66asXCJdIH0sXHJcbiAgICAxMzU6IHsgQV9OQU1FOiBcIuyhsOq4sCjspJHqta3sgrAs7IOd66y8KVwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDMxNDogeyBBX05BTUU6IFwi64OJ64+Z7LC47KGw6riwKDIwY20s6rWt7IKwKVwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDMxMzogeyBBX05BTUU6IFwi64OJ64+Z7LC47KGw6riwKDIwY20s7IiY7J6FKVwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDMwMjogeyBBX05BTUU6IFwi66qF7YOcXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMjYyOiB7IEFfTkFNRTogXCLrqoXtg5wo7IOd66y8LOq1reyCsClcIiwgQV9VTklUOiBbXCIx66eI66asXCJdIH0sXHJcbiAgICAyNjM6IHsgQV9OQU1FOiBcIuuqhe2DnCjrg4nrj5ks6rWt7IKwKVwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDI2NDogeyBBX05BTUU6IFwi66qF7YOcKOuDieuPmSzsiJjsnoXsgrApXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMjY1OiB7IEFfTkFNRTogXCLrqoXtg5wo7IOd66y8LOyImOyeheyCsClcIiwgQV9VTklUOiBbXCIx66eI66asXCJdIH0sXHJcbiAgICAxODQ6IHsgQV9OQU1FOiBcIuuqhe2DnCjsnbzrs7jsgrAs64OJ64+ZKVwiLCBBX1VOSVQ6IFtcIjUwMGdcIl0gfSxcclxuICAgIDE1MjogeyBBX05BTUU6IFwi66qF7YOcKOufrOyLnOyVhCzrg4nrj5kpXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMzE1OiB7IEFfTkFNRTogXCLrqoXtg5woNDVjbSzsiJjsnoXsgrApXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMjg4OiB7IEFfTkFNRTogXCLrj5ntg5xcIiwgQV9VTklUOiBbXCIx66eI66asXCJdIH0sXHJcbiAgICAyNTM6IHsgQV9OQU1FOiBcIuyYpOynleyWtFwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDU0OiB7IEFfTkFNRTogXCLsmKTsp5XslrQo64OJ64+ZKVwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDI1NDogeyBBX05BTUU6IFwi7Jik7KeV7Ja0KOyDneusvCzqta3sgrApXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMjU2OiB7IEFfTkFNRTogXCLsmKTsp5XslrQo64OJ64+ZLOq1reyCsClcIiwgQV9VTklUOiBbXCIx66eI66asXCJdIH0sXHJcbiAgICAyNTU6IHsgQV9OQU1FOiBcIuyYpOynleyWtCjsg53rrLws7IiY7J6F7IKwKVwiLCBBX1VOSVQ6IFtcIjHrp4jrpqxcIl0gfSxcclxuICAgIDI1NzogeyBBX05BTUU6IFwi7Jik7KeV7Ja0KOuDieuPmSzsiJjsnoXsgrApXCIsIEFfVU5JVDogW1wiMeuniOumrFwiXSB9LFxyXG4gICAgMjY6IHsgQV9OQU1FOiBcIuuwsOy2lFwiLCBBX1VOSVQ6IFtcIjHtj6zquLBcIl0gfSxcclxuICAgIDEyNTogeyBBX05BTUU6IFwi67Cw7LaUKOq1reyCsClcIiwgQV9VTklUOiBbXCIx7Y+s6riwXCJdIH0sXHJcbiAgICAyNzE6IHsgQV9OQU1FOiBcIuuwsOy2lCjspJHqsIQpXCIsIEFfVU5JVDogW1wiMe2PrOq4sFwiXSB9LFxyXG4gICAgMzA3OiB7IEFfTkFNRTogXCLrsLDstpQoMi41fjNrZylcIiwgQV9VTklUOiBbXCIx7Y+s6riwXCIsIFwiMeqwnFwiXSB9LFxyXG4gICAgMjM6IHsgQV9OQU1FOiBcIuyDgey2lFwiLCBBX1VOSVQ6IFtcIjEwMGdcIl0gfSxcclxuICAgIDMxMDogeyBBX05BTUU6IFwi7IOB7LaUKDEwMGcpXCIsIEFfVU5JVDogW1wiMTAwZ1wiLCBcIjHrtInsp4BcIl0gfSxcclxuICAgIDI1OiB7IEFfTkFNRTogXCLrrLRcIiwgQV9VTklUOiBbXCIx6rCcXCJdIH0sXHJcbiAgICAxMzM6IHsgQV9OQU1FOiBcIuustCjshLjsspnrrLQpXCIsIEFfVU5JVDogW1wiMeqwnFwiXSB9LFxyXG4gICAgMjgyOiB7IEFfTkFNRTogXCLrrLQo7IS47LKZ66y0KVwiLCBBX1VOSVQ6IFtcIjHqsJxcIl0gfSxcclxuICAgIDI3NDogeyBBX05BTUU6IFwi66y0KOyEuOyymeustCwg7KSRKVwiLCBBX1VOSVQ6IFtcIjHqsJxcIl0gfSxcclxuICAgIDMwODogeyBBX05BTUU6IFwi66y0KDFrZylcIiwgQV9VTklUOiBbXCIx6rCcXCIsIFwiMWtnXCJdIH0sXHJcbiAgICAyNDogeyBBX05BTUU6IFwi7JaR7YyMXCIsIEFfVU5JVDogW1wiMS41a2dcIl0gfSxcclxuICAgIDI3MjogeyBBX05BTUU6IFwi7JaR7YyMKOyekeydgOunnSlcIiwgQV9VTklUOiBbXCIx66edXCIsIFwiMS41a2dcIl0gfSxcclxuICAgIDMwOTogeyBBX05BTUU6IFwi7JaR7YyMKDEuNWtn66edKVwiLCBBX1VOSVQ6IFtcIjHrp51cIiwgXCIxLjVrZ1wiXSB9LFxyXG4gICAgMjI6IHsgQV9OQU1FOiBcIuyYpOydtFwiLCBBX1VOSVQ6IFtcIjHqsJxcIl0gfSxcclxuICAgIDMxMTogeyBBX05BTUU6IFwi7Jik7J20KOuLpOuLpOq4sClcIiwgQV9VTklUOiBbXCIx6rCcXCIsIFwiMSDqsJxcIl0gfSxcclxuICAgIDI3OiB7IEFfTkFNRTogXCLrsLBcIiwgQV9VTklUOiBbXCIx6rCcXCJdIH0sXHJcbiAgICAyODQ6IHsgQV9OQU1FOiBcIuuwsCjspJHtkogpXCIsIEFfVU5JVDogW1wiMeqwnFwiXSB9LFxyXG4gICAgMjc2OiB7IEFfTkFNRTogXCLrsLAo7Iug6rOgKVwiLCBBX1VOSVQ6IFtcIjHqsJxcIl0gfSxcclxuICAgIDI0ODogeyBBX05BTUU6IFwi67CwKOyLoOqzoCks7KSR6riJKOuMgClcIiwgQV9VTklUOiBbXCIx6rCcXCIsIFwiMSDqsJxcIl0gfSxcclxuICAgIDMwNjogeyBBX05BTUU6IFwi67CwKOyLoOqzoCwgNjAwZylcIiwgQV9VTklUOiBbXCIx6rCcXCIsIFwiNjAwZ1wiXSB9LFxyXG4gICAgMjg6IHsgQV9OQU1FOiBcIuyCrOqzvFwiLCBBX1VOSVQ6IFtcIjHqsJxcIl0gfSxcclxuICAgIDUwOiB7IEFfTkFNRTogXCLsgqzqs7wo67aA7IKsKVwiLCBBX1VOSVQ6IFtcIjHqsJxcIl0gfSxcclxuICAgIDMwNTogeyBBX05BTUU6IFwi7IKs6rO8KOu2gOyCrCwgMzAwZylcIiwgQV9VTklUOiBbXCIx6rCcXCIsIFwiMzAwZ1wiXSB9LFxyXG4gICAgMjcwOiB7IEFfTkFNRTogXCLsgqzqs7wo67aA7IKsKSzspJHquIko7KSRKVwiLCBBX1VOSVQ6IFtcIjHqsJxcIl0gfSxcclxuICAgIDI0NDogeyBBX05BTUU6IFwi7IKs6rO8KOu2gOyCrCks7KSR6riJKOuMgClcIiwgQV9VTklUOiBbXCIx6rCcXCIsIFwiMSDqsJxcIl0gfSxcclxuICAgIDI3OTogeyBBX05BTUU6IFwi7IKs6rO8KOykke2SiClcIiwgQV9VTklUOiBbXCIx6rCcXCJdIH0sXHJcbiAgICAyNzc6IHsgQV9OQU1FOiBcIu2YuOuwlVwiLCBBX1VOSVQ6IFtcIjHqsJxcIl0gfSxcclxuICAgIDExOTogeyBBX05BTUU6IFwi7Zi467CVKOyduO2BkOuyoOydtO2EsClcIiwgQV9VTklUOiBbXCIx6rCcXCJdIH0sXHJcbiAgICAxMTg6IHsgQV9OQU1FOiBcIu2YuOuwlSjsnbjtgZDrsqDsnbTthLApLOykkeqwhFwiLCBBX1VOSVQ6IFtcIjHqsJxcIl0gfSxcclxuICAgIDMxMjogeyBBX05BTUU6IFwi7JWg7Zi467CVXCIsIEFfVU5JVDogW1wiMeqwnFwiLCBcIjEg6rCcXCJdIH0sXHJcbn1cclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBEZWZhdWx0VGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVUeXBlOiB7IFt4OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcclxuICAgIFdISVRFOiAwLFxyXG4gICAgREFSSzogMSxcclxufSBhcyBjb25zdFxyXG5leHBvcnQgdHlwZSBUaGVtZVR5cGUgPSB0eXBlb2YgVGhlbWVUeXBlW2tleW9mIHR5cGVvZiBUaGVtZVR5cGVdXHJcblxyXG5jb25zdCB0aGVtZTogRGVmYXVsdFRoZW1lID0ge1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgcHJpbWFyeTogXCIjMmMzZTUwXCIsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVPYmo6IHsgW3g6IG51bWJlcl06IGFueSB9ID0ge1xyXG4gICAgW1RoZW1lVHlwZS5XSElURV06IHRoZW1lLFxyXG4gICAgW1RoZW1lVHlwZS5EQVJLXTogdGhlbWUsXHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vTWFpbkNvbnN0c1wiO1xyXG5leHBvcnQgeyBBY3Rpb25Db25zdHMgfSBmcm9tIFwiLi9BY3Rpb25Db25zdHNcIjsiLCIvLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgQWN0aW9uQ29uc3RzIH0gZnJvbSBcIkBEZWZpbml0aW9uc1wiXHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5pbXBvcnQgeyBJQWN0aW9uIH0gZnJvbSBcIkBJbnRlcmZhY2VzXCJcclxuaW1wb3J0IHsgSUFwcFBhZ2UgfSBmcm9tIFwiLi9BcHBcIlxyXG4vLyAjZW5kcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcblxyXG5leHBvcnQgdHlwZSB7IElBcHBQYWdlIH1cclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEU6IElBcHBQYWdlLklTdGF0ZVByb3BzID0ge1xyXG4gICAgc2VsX2NhdGU6IG51bGwsXHJcbiAgICBzZWxfdGhlbWU6IG51bGwsXHJcbn1cclxuXHJcbnR5cGUgSVNldFNlbENhdGVQYXlsb2FkID0gSUFwcFBhZ2UuQWN0aW9ucy5JU2V0U2VsQ2F0ZVBheWxvYWRcclxudHlwZSBJU2V0U2VsVGhlbWVQYXlsb2FkID0gSUFwcFBhZ2UuQWN0aW9ucy5JU2V0U2VsVGhlbWVQYXlsb2FkXHJcblxyXG5leHBvcnQgY29uc3QgQXBwUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbjogSUFjdGlvbjxJU2V0U2VsQ2F0ZVBheWxvYWQgfCBJU2V0U2VsVGhlbWVQYXlsb2FkPikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWN0aW9uQ29uc3RzLkFwcC5TZXRTZWxDYXRlUmVkdWNlcjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2VsX2NhdGU6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBY3Rpb25Db25zdHMuQXBwLlNldFNlbFRoZW1lUmVkdWNlcjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2VsX3RoZW1lOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQWN0aW9uQ29uc3RzLkFwcC5SZXNldFJlZHVjZXI6XHJcbiAgICAgICAgICAgIHJldHVybiBJTklUSUFMX1NUQVRFXHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcbiIsIi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBBY3Rpb25Db25zdHMgfSBmcm9tIFwiQERlZmluaXRpb25zXCI7XHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5pbXBvcnQgeyBJQWN0aW9uLCBJSG9tZVBhZ2UgfSBmcm9tIFwiQEludGVyZmFjZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURTogSUhvbWVQYWdlLklTdGF0ZVByb3BzID0ge1xyXG4gICAgaG9tZToge1xyXG4gICAgICAgIHZlcnNpb246IDEsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICB9LFxyXG59O1xyXG5cclxudHlwZSBJTWFwUGF5bG9hZCA9IElIb21lUGFnZS5BY3Rpb25zLklNYXBQYXlsb2FkO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVSZWR1Y2VyID0gKFxyXG4gICAgc3RhdGUgPSBJTklUSUFMX1NUQVRFLFxyXG4gICAgYWN0aW9uOiBJQWN0aW9uPElNYXBQYXlsb2FkPlxyXG4pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFjdGlvbkNvbnN0cy5Ib21lLlNldFJlZHVjZXI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIEFjdGlvbkNvbnN0cy5Ib21lLlJlc2V0UmVkdWNlcjpcclxuICAgICAgICAgICAgcmV0dXJuIElOSVRJQUxfU1RBVEU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTsiLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiXHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIiAvLyDstpTqsIBcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiAvLyDstpTqsIBcclxuXHJcbi8vIGNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbi8vICAgICBrZXk6IFwicm9vdFwiLFxyXG4vLyAgICAgc3RvcmFnZSxcclxuLy8gICAgIHdoaXRlbGlzdDogW1wic3RhclwiXSxcclxuLy8gfVxyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgQXBwUmVkdWNlciB9IGZyb20gXCIuL2FwcFwiXHJcbmltcG9ydCB7IEhvbWVSZWR1Y2VyIH0gZnJvbSBcIi4vaG9tZVwiXHJcbmltcG9ydCB7IFN0YXJSZWR1Y2VyIH0gZnJvbSBcIi4vc3RhclwiXHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vYXBwXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RhclwiXHJcblxyXG5leHBvcnQgY29uc3QgUmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgYXBwOiBBcHBSZWR1Y2VyLFxyXG4gICAgaG9tZTogSG9tZVJlZHVjZXIsXHJcbiAgICBzdGFyOiBTdGFyUmVkdWNlcixcclxufSlcclxuLy8gY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKVxyXG4vLyBleHBvcnQgZGVmYXVsdCBwZXJzaXN0ZWRSZWR1Y2VyXHJcbiIsIi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBBY3Rpb25Db25zdHMgfSBmcm9tIFwiQERlZmluaXRpb25zXCJcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiQEludGVyZmFjZXNcIlxyXG5pbXBvcnQgeyBJU3RhclBhZ2UgfSBmcm9tIFwiLi9TdGFyXCJcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuZXhwb3J0IHR5cGUgeyBJU3RhclBhZ2UgfVxyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURTogSVN0YXJQYWdlLklTdGF0ZVByb3BzID0ge1xyXG4gICAgbGlzdDogW10sXHJcbn1cclxuXHJcbnR5cGUgSU1hcFBheWxvYWQgPSBJU3RhclBhZ2UuQWN0aW9ucy5JTWFwUGF5bG9hZFxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXJSZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uOiBJQWN0aW9uPElNYXBQYXlsb2FkPikgPT4ge1xyXG4gICAgY29uc3QgcGF5bG9hZFNlcSA9IGFjdGlvbi5wYXlsb2FkPy5zZXEgfHwgbnVsbFxyXG4gICAgY29uc3QgbmV3U3RhciA9IHtcclxuICAgICAgICBsaXN0OiBzdGF0ZS5saXN0LnNsaWNlKCksXHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25Db25zdHMuU3Rhci5BZGRSZWR1Y2VyOlxyXG4gICAgICAgICAgICBpZiAocGF5bG9hZFNlcSAmJiAhc3RhdGUubGlzdC5maW5kKChzZXEpID0+IHNlcSA9PT0gcGF5bG9hZFNlcSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXIubGlzdC5wdXNoKHBheWxvYWRTZXEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ubmV3U3RhcixcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFjdGlvbkNvbnN0cy5TdGFyLlJlbW92ZVJlZHVjZXI6XHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkU2VxICYmIHN0YXRlLmxpc3QuZmluZCgoc2VxKSA9PiBzZXEgPT09IHBheWxvYWRTZXEpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBzdGF0ZS5saXN0LmluZGV4T2YocGF5bG9hZFNlcSlcclxuICAgICAgICAgICAgICAgIG5ld1N0YXIubGlzdC5zcGxpY2UoaWR4LCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLm5ld1N0YXIsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25Db25zdHMuU3Rhci5SZXNldFJlZHVjZXI6XHJcbiAgICAgICAgICAgIHJldHVybiBJTklUSUFMX1NUQVRFXHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL3N0b3JlXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vUmVkdWNlcnNcIlxyXG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCB7IEVtcHR5T2JqZWN0LCBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBTdG9yZSwgTWlkZGxld2FyZSwgU3RvcmVFbmhhbmNlciB9IGZyb20gXCJyZWR1eFwiXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCJcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi9kZXZlbG9wbWVudE9ubHlcIlxyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHt9XHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgUmVkdWNlcnMgfSBmcm9tIFwiLi9SZWR1Y2Vyc1wiXHJcbmltcG9ydCB7IENvbnRleHQsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCJcclxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSBcIi4vSVN0b3JlXCJcclxuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFBlcnNpc3RQYXJ0aWFsIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvZXMvcGVyc2lzdFJlZHVjZXJcIlxyXG5pbXBvcnQgeyBJQWN0aW9uIH0gZnJvbSBcIkBJbnRlcmZhY2VzXCJcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIlxyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmU6IE1pZGRsZXdhcmVbXSk6IFN0b3JlRW5oYW5jZXIgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKVxyXG4gICAgICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcclxuICAgIH1cclxuICAgIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcclxufVxyXG5cclxuY29uc3QgbWFrZUNvbmZpZ3VyZWRTdG9yZSA9IChyZWR1Y2VyOiBSZWR1Y2VyPGFueSwgYW55PikgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgYmluZE1pZGRsZXdhcmUoW3RodW5rTWlkZGxld2FyZV0pKVxyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiXHJcbiAgICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgICAgICByZXR1cm4gbWFrZUNvbmZpZ3VyZWRTdG9yZShSZWR1Y2VycylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gd2UgbmVlZCBpdCBvbmx5IG9uIGNsaWVudCBzaWRlXHJcbiAgICAgICAgY29uc3QgeyAgcGVyc2lzdFJlZHVjZXIgfSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpXHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpLmRlZmF1bHRcclxuXHJcbiAgICAgICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgICAgICAgICAga2V5OiBcIm5leHRqc1wiLFxyXG4gICAgICAgICAgICB3aGl0ZWxpc3Q6IFtcImFwcFwiLCBcInN0YXJcIl0sIC8vIG1ha2Ugc3VyZSBpdCBkb2VzIG5vdCBjbGFzaCB3aXRoIHNlcnZlciBrZXlzXHJcbiAgICAgICAgICAgIHN0b3JhZ2UsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgUmVkdWNlcnMpXHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBtYWtlQ29uZmlndXJlZFN0b3JlKHBlcnNpc3RlZFJlZHVjZXIpXHJcblxyXG4gICAgICAgIHJldHVybiBzdG9yZVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHRlbXBfc3RvcmUgPSBtYWtlU3RvcmUoKVxyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiB0ZW1wX3N0b3JlLmRpc3BhdGNoXHJcbmV4cG9ydCBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUodGVtcF9zdG9yZSlcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSlcclxuIiwiZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIERhdGUge1xyXG4gICAgICAgIGZvcm1hdDogYW55XHJcbiAgICB9XHJcbiAgICBpbnRlcmZhY2UgU3RyaW5nIHtcclxuICAgICAgICBzdHJpbmc6IGFueVxyXG4gICAgICAgIHpmOiBhbnlcclxuICAgIH1cclxuICAgIGludGVyZmFjZSBOdW1iZXIge1xyXG4gICAgICAgIHpmOiBhbnlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYXRlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoZjogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWVPZigpKSByZXR1cm4gXCIgXCJcclxuXHJcbiAgICB2YXIgd2Vla0tvck5hbWUgPSBbXCLsnbzsmpTsnbxcIiwgXCLsm5TsmpTsnbxcIiwgXCLtmZTsmpTsnbxcIiwgXCLsiJjsmpTsnbxcIiwgXCLrqqnsmpTsnbxcIiwgXCLquIjsmpTsnbxcIiwgXCLthqDsmpTsnbxcIl1cclxuXHJcbiAgICB2YXIgd2Vla0tvclNob3J0TmFtZSA9IFtcIuydvFwiLCBcIuyblFwiLCBcIu2ZlFwiLCBcIuyImFwiLCBcIuuqqVwiLCBcIuq4iFwiLCBcIu2GoFwiXVxyXG5cclxuICAgIHZhciB3ZWVrRW5nTmFtZSA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdXHJcblxyXG4gICAgdmFyIHdlZWtFbmdTaG9ydE5hbWUgPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl1cclxuXHJcbiAgICB2YXIgZCA9IHRoaXNcclxuXHJcbiAgICByZXR1cm4gZi5yZXBsYWNlKC8oeXl5eXx5eXxNTXxkZHxLU3xXTnxLTHxFU3xFTHxISHxoaHxtbXxzc3xhXFwvcCkvZ2ksIGZ1bmN0aW9uICgkMTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICgkMSkge1xyXG4gICAgICAgICAgICBjYXNlIFwieXl5eVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQuZ2V0RnVsbFllYXIoKSAvLyDrhYQgKDTsnpDrpqwpXHJcblxyXG4gICAgICAgICAgICBjYXNlIFwieXlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoZC5nZXRGdWxsWWVhcigpICUgMTAwMCkuemYoMikgLy8g64WEICgy7J6Q66asKVxyXG5cclxuICAgICAgICAgICAgY2FzZSBcIk1NXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGQuZ2V0TW9udGgoKSArIDEpLnpmKDIpIC8vIOyblCAoMuyekOumrClcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJkZFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQuZ2V0RGF0ZSgpLnpmKDIpIC8vIOydvCAoMuyekOumrClcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJLU1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtLb3JTaG9ydE5hbWVbZC5nZXREYXkoKV0gLy8g7JqU7J28ICjsp6fsnYAg7ZWc6riAKVxyXG5cclxuICAgICAgICAgICAgY2FzZSBcIktMXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla0tvck5hbWVbZC5nZXREYXkoKV0gLy8g7JqU7J28ICjquLQg7ZWc6riAKVxyXG5cclxuICAgICAgICAgICAgY2FzZSBcIkVTXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla0VuZ1Nob3J0TmFtZVtkLmdldERheSgpXSAvLyDsmpTsnbwgKOynp+ydgCDsmIHslrQpXHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiRUxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrRW5nTmFtZVtkLmdldERheSgpXSAvLyDsmpTsnbwgKOq4tCDsmIHslrQpXHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiSEhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBkLmdldEhvdXJzKCkuemYoMikgLy8g7Iuc6rCEICgyNOyLnOqwhCDquLDspIAsIDLsnpDrpqwpXHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibWhoXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAgIT09IGQuZ2V0SG91cnMoKSAlIDEyID8gZC5nZXRIb3VycygpIDogMTIpLnpmKDIpIC8vIOyLnOqwhCAoMTLsi5zqsIQg6riw7KSALCAy7J6Q66asKVxyXG5cclxuICAgICAgICAgICAgY2FzZSBcImhoXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5nZXRIb3VycygpLnpmKDIpIC8vIOyLnOqwhCAoMjTsi5zqsIQg6riw7KSALCAy7J6Q66asKVxyXG5cclxuICAgICAgICAgICAgY2FzZSBcIm1tXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5nZXRNaW51dGVzKCkuemYoMikgLy8g67aEICgy7J6Q66asKVxyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5nZXRTZWNvbmRzKCkuemYoMikgLy8g7LSIICgy7J6Q66asKVxyXG5cclxuICAgICAgICAgICAgY2FzZSBcImEvcFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQuZ2V0SG91cnMoKSA8IDEyID8gXCLsmKTsoIRcIiA6IFwi7Jik7ZuEXCIgLy8g7Jik7KCEL+yYpO2bhCDqtazrtoRcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJDFcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLnN0cmluZyA9IGZ1bmN0aW9uIChsZW46IG51bWJlcikge1xyXG4gICAgdmFyIHMgPSBcIlwiLFxyXG4gICAgICAgIGkgPSAwXHJcbiAgICB3aGlsZSAoaSsrIDwgbGVuKSB7XHJcbiAgICAgICAgcyArPSB0aGlzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc1xyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLnpmID0gZnVuY3Rpb24gKGxlbjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gXCIwXCIuc3RyaW5nKGxlbiAtIHRoaXMubGVuZ3RoKSArIHRoaXNcclxufVxyXG5cclxuTnVtYmVyLnByb3RvdHlwZS56ZiA9IGZ1bmN0aW9uIChsZW46IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS56ZihsZW4pXHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYzNqc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyL3JlYWN0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9