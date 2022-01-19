(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [782],
  {
    5684: function (e, r, n) {
      'use strict';
      n.d(r, {
        qE: function () {
          return E;
        },
      });
      var t = n(1604),
        a = n(5031),
        i = n(7294),
        o = n(7375);
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var n = arguments[r];
              for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, r) {
        if (null == e) return {};
        var n,
          t,
          a = {},
          i = Object.keys(e);
        for (t = 0; t < i.length; t++)
          (n = i[t]), r.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function s(e) {
        var r = e.loading,
          n = e.src,
          t = e.srcSet,
          a = e.onLoad,
          l = e.onError,
          c = e.crossOrigin,
          s = e.sizes,
          u = e.ignoreFallback,
          d = (0, i.useState)('pending'),
          f = d[0],
          m = d[1];
        (0, i.useEffect)(
          function () {
            m(n ? 'loading' : 'pending');
          },
          [n],
        );
        var p = (0, i.useRef)(),
          v = (0, i.useCallback)(
            function () {
              if (n) {
                g();
                var e = new Image();
                (e.src = n),
                  c && (e.crossOrigin = c),
                  t && (e.srcset = t),
                  s && (e.sizes = s),
                  r && (e.loading = r),
                  (e.onload = function (e) {
                    g(), m('loaded'), null == a || a(e);
                  }),
                  (e.onerror = function (e) {
                    g(), m('failed'), null == l || l(e);
                  }),
                  (p.current = e);
              }
            },
            [n, c, t, s, a, l, r],
          ),
          g = function () {
            p.current &&
              ((p.current.onload = null),
              (p.current.onerror = null),
              (p.current = null));
          };
        return (
          (0, o.Gw)(
            function () {
              if (!u)
                return (
                  'loading' === f && v(),
                  function () {
                    g();
                  }
                );
            },
            [f, v, u],
          ),
          u ? 'loaded' : f
        );
      }
      var u = ['htmlWidth', 'htmlHeight', 'alt'],
        d = [
          'fallbackSrc',
          'fallback',
          'src',
          'srcSet',
          'align',
          'fit',
          'loading',
          'ignoreFallback',
          'crossOrigin',
        ],
        f = i.forwardRef(function (e, r) {
          var n = e.htmlWidth,
            t = e.htmlHeight,
            a = e.alt,
            o = c(e, u);
          return i.createElement(
            'img',
            l({ width: n, height: t, ref: r, alt: a }, o),
          );
        }),
        m = (0, t.Gp)(function (e, r) {
          var n = e.fallbackSrc,
            o = e.fallback,
            u = e.src,
            m = e.srcSet,
            p = e.align,
            v = e.fit,
            g = e.loading,
            h = e.ignoreFallback,
            y = e.crossOrigin,
            b = c(e, d),
            x = null != g || h || (void 0 === n && void 0 === o),
            k = s(l({}, e, { ignoreFallback: x })),
            N = l(
              { ref: r, objectFit: v, objectPosition: p },
              x ? b : (0, a.CE)(b, ['onError', 'onLoad']),
            );
          return 'loaded' !== k
            ? o ||
                i.createElement(
                  t.m$.img,
                  l(
                    { as: f, className: 'chakra-image__placeholder', src: n },
                    N,
                  ),
                )
            : i.createElement(
                t.m$.img,
                l(
                  {
                    as: f,
                    src: u,
                    srcSet: m,
                    crossOrigin: y,
                    loading: g,
                    className: 'chakra-image',
                  },
                  N,
                ),
              );
        });
      a.Ts && (m.displayName = 'Image');
      var p = n(6450);
      function v(e, r) {
        if (null == e) return {};
        var n,
          t,
          a = {},
          i = Object.keys(e);
        for (t = 0; t < i.length; t++)
          (n = i[t]), r.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function g() {
        return (g =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var n = arguments[r];
              for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      var h = ['name', 'getInitials'],
        y = [
          'src',
          'name',
          'showBorder',
          'borderRadius',
          'onError',
          'getInitials',
          'icon',
          'iconLabel',
          'loading',
          'children',
          'borderColor',
          'ignoreFallback',
        ],
        b = (0, t.Gp)(function (e, r) {
          var n = g(
            {
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              insetEnd: '0',
              bottom: '0',
            },
            (0, t.yK)().badge,
          );
          return i.createElement(
            t.m$.div,
            g({ ref: r }, e, {
              className: (0, a.cx)('chakra-avatar__badge', e.className),
              __css: n,
            }),
          );
        });
      function x(e) {
        var r = e.split(' '),
          n = r[0],
          t = r[1];
        return n && t ? '' + n.charAt(0) + t.charAt(0) : n.charAt(0);
      }
      a.Ts && (b.displayName = 'AvatarBadge');
      var k = function (e) {
          var r = e.name,
            n = e.getInitials,
            a = v(e, h),
            o = (0, t.yK)();
          return i.createElement(
            t.m$.div,
            g({ role: 'img', 'aria-label': r }, a, { __css: o.label }),
            r ? (null == n ? void 0 : n(r)) : null,
          );
        },
        N = function (e) {
          return i.createElement(
            t.m$.svg,
            g(
              {
                viewBox: '0 0 128 128',
                color: '#fff',
                width: '100%',
                height: '100%',
                className: 'chakra-avatar__svg',
              },
              e,
            ),
            i.createElement('path', {
              fill: 'currentColor',
              d: 'M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z',
            }),
            i.createElement('path', {
              fill: 'currentColor',
              d: 'M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24',
            }),
          );
        },
        _ = {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'medium',
          position: 'relative',
          flexShrink: 0,
        },
        E = (0, t.Gp)(function (e, r) {
          var n = (0, t.jC)('Avatar', e),
            o = (0, t.Lr)(e),
            l = o.src,
            c = o.name,
            s = o.showBorder,
            u = o.borderRadius,
            d = void 0 === u ? 'full' : u,
            f = o.onError,
            m = o.getInitials,
            p = void 0 === m ? x : m,
            h = o.icon,
            b = void 0 === h ? i.createElement(N, null) : h,
            k = o.iconLabel,
            E = void 0 === k ? ' avatar' : k,
            C = o.loading,
            T = o.children,
            L = o.borderColor,
            j = o.ignoreFallback,
            G = v(o, y),
            W = g(
              { borderRadius: d, borderWidth: s ? '2px' : void 0 },
              _,
              n.container,
            );
          return (
            L && (W.borderColor = L),
            i.createElement(
              t.m$.span,
              g({ ref: r }, G, {
                className: (0, a.cx)('chakra-avatar', e.className),
                __css: W,
              }),
              i.createElement(
                t.Fo,
                { value: n },
                i.createElement(w, {
                  src: l,
                  loading: C,
                  onError: f,
                  getInitials: p,
                  name: c,
                  borderRadius: d,
                  icon: b,
                  iconLabel: E,
                  ignoreFallback: j,
                }),
                T,
              ),
            )
          );
        });
      a.Ts && (E.displayName = 'Avatar');
      var w = function (e) {
        var r = e.src,
          n = e.onError,
          a = e.getInitials,
          o = e.name,
          l = e.borderRadius,
          c = e.loading,
          u = e.iconLabel,
          d = e.icon,
          f = void 0 === d ? i.createElement(N, null) : d,
          m = s({ src: r, onError: n, ignoreFallback: e.ignoreFallback });
        return !r || !('loaded' === m)
          ? o
            ? i.createElement(k, {
                className: 'chakra-avatar__initials',
                getInitials: a,
                name: o,
              })
            : i.cloneElement(f, { role: 'img', 'aria-label': u })
          : i.createElement(t.m$.img, {
              src: r,
              alt: o,
              className: 'chakra-avatar__img',
              loading: c,
              __css: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: l,
              },
            });
      };
      a.Ts && (w.displayName = 'AvatarImage');
      var C = ['children', 'borderColor', 'max', 'spacing', 'borderRadius'],
        T = (0, t.Gp)(function (e, r) {
          var n = (0, t.jC)('Avatar', e),
            o = (0, t.Lr)(e),
            l = o.children,
            c = o.borderColor,
            s = o.max,
            u = o.spacing,
            d = void 0 === u ? '-0.75rem' : u,
            f = o.borderRadius,
            m = void 0 === f ? 'full' : f,
            h = v(o, C),
            y = (0, p.WR)(l),
            b = s ? y.slice(0, s) : y,
            x = null != s && y.length - s,
            k = b.reverse().map(function (r, n) {
              var t,
                o = {
                  marginEnd: 0 === n ? 0 : d,
                  size: e.size,
                  borderColor: null != (t = r.props.borderColor) ? t : c,
                  showBorder: !0,
                };
              return i.cloneElement(r, (0, a.YU)(o));
            }),
            N = g({ borderRadius: m, marginStart: d }, _, n.excessLabel);
          return i.createElement(
            t.m$.div,
            g(
              {
                ref: r,
                role: 'group',
                __css: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flexDirection: 'row-reverse',
                },
              },
              h,
              { className: (0, a.cx)('chakra-avatar__group', e.className) },
            ),
            x > 0 &&
              i.createElement(
                t.m$.span,
                { className: 'chakra-avatar__excess', __css: N },
                '+' + x,
              ),
            k,
          );
        });
      a.Ts && (T.displayName = 'AvatarGroup');
    },
    3236: function (e, r, n) {
      'use strict';
      n.d(r, {
        xu: function () {
          return x;
        },
        W2: function () {
          return T;
        },
        kC: function () {
          return O;
        },
        X6: function () {
          return $;
        },
        aV: function () {
          return P;
        },
        HC: function () {
          return X;
        },
        xv: function () {
          return ie;
        },
      });
      var t = n(1604),
        a = n(4244),
        i = n(5031),
        o = n(7294);
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var n = arguments[r];
              for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      var c = [
          'as',
          'viewBox',
          'color',
          'focusable',
          'children',
          'className',
          '__css',
        ],
        s = {
          path: o.createElement(
            'g',
            { stroke: 'currentColor', strokeWidth: '1.5' },
            o.createElement('path', {
              strokeLinecap: 'round',
              fill: 'none',
              d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
            }),
            o.createElement('path', {
              fill: 'currentColor',
              strokeLinecap: 'round',
              d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
            }),
            o.createElement('circle', {
              fill: 'none',
              strokeMiterlimit: '10',
              cx: '12',
              cy: '12',
              r: '11.25',
            }),
          ),
          viewBox: '0 0 24 24',
        },
        u = (0, t.Gp)(function (e, r) {
          var n = e.as,
            a = e.viewBox,
            u = e.color,
            d = void 0 === u ? 'currentColor' : u,
            f = e.focusable,
            m = void 0 !== f && f,
            p = e.children,
            v = e.className,
            g = e.__css,
            h = (function (e, r) {
              if (null == e) return {};
              var n,
                t,
                a = {},
                i = Object.keys(e);
              for (t = 0; t < i.length; t++)
                (n = i[t]), r.indexOf(n) >= 0 || (a[n] = e[n]);
              return a;
            })(e, c),
            y = {
              ref: r,
              focusable: m,
              className: (0, i.cx)('chakra-icon', v),
              __css: l(
                {
                  w: '1em',
                  h: '1em',
                  display: 'inline-block',
                  lineHeight: '1em',
                  flexShrink: 0,
                  color: d,
                },
                g,
              ),
            },
            b = null != a ? a : s.viewBox;
          if (n && 'string' !== typeof n)
            return o.createElement(t.m$.svg, l({ as: n }, y, h));
          var x = null != p ? p : s.path;
          return o.createElement(
            t.m$.svg,
            l({ verticalAlign: 'middle', viewBox: b }, y, h),
            x,
          );
        });
      i.Ts && (u.displayName = 'Icon');
      var d = n(6450);
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var n = arguments[r];
              for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      function m(e, r) {
        if (null == e) return {};
        var n,
          t,
          a = {},
          i = Object.keys(e);
        for (t = 0; t < i.length; t++)
          (n = i[t]), r.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var p = ['ratio', 'children', 'className'],
        v = (0, t.Gp)(function (e, r) {
          var n = e.ratio,
            a = void 0 === n ? 4 / 3 : n,
            l = e.children,
            c = e.className,
            s = m(e, p),
            u = o.Children.only(l),
            d = (0, i.cx)('chakra-aspect-ratio', c);
          return o.createElement(
            t.m$.div,
            f(
              {
                ref: r,
                position: 'relative',
                className: d,
                _before: {
                  height: 0,
                  content: '""',
                  display: 'block',
                  paddingBottom: (0, i.XQ)(a, function (e) {
                    return (1 / e) * 100 + '%';
                  }),
                },
                __css: {
                  '& > *:not(style)': {
                    overflow: 'hidden',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  },
                  '& > img, & > video': { objectFit: 'cover' },
                },
              },
              s,
            ),
            u,
          );
        });
      i.Ts && (v.displayName = 'AspectRatio');
      var g = ['className'],
        h = (0, t.Gp)(function (e, r) {
          var n = (0, t.mq)('Badge', e),
            a = (0, t.Lr)(e);
          a.className;
          var l = m(a, g);
          return o.createElement(
            t.m$.span,
            f(
              { ref: r, className: (0, i.cx)('chakra-badge', e.className) },
              l,
              {
                __css: f(
                  {
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'middle',
                  },
                  n,
                ),
              },
            ),
          );
        });
      i.Ts && (h.displayName = 'Badge');
      var y = ['size', 'centerContent'],
        b = ['size'],
        x = (0, t.m$)('div');
      i.Ts && (x.displayName = 'Box');
      var k = (0, t.Gp)(function (e, r) {
        var n = e.size,
          t = e.centerContent,
          a = void 0 === t || t,
          i = m(e, y),
          l = a
            ? {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
            : {};
        return o.createElement(
          x,
          f(
            {
              ref: r,
              boxSize: n,
              __css: f({}, l, { flexShrink: 0, flexGrow: 0 }),
            },
            i,
          ),
        );
      });
      i.Ts && (k.displayName = 'Square');
      var N = (0, t.Gp)(function (e, r) {
        var n = e.size,
          t = m(e, b);
        return o.createElement(
          k,
          f({ size: n, ref: r, borderRadius: '9999px' }, t),
        );
      });
      i.Ts && (N.displayName = 'Circle');
      var _ = (0, t.m$)('div', {
        baseStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
      i.Ts && (_.displayName = 'Center');
      var E = ['className'],
        w = (0, t.Gp)(function (e, r) {
          var n = (0, t.mq)('Code', e),
            a = (0, t.Lr)(e);
          a.className;
          var l = m(a, E);
          return o.createElement(
            t.m$.code,
            f({ ref: r, className: (0, i.cx)('chakra-code', e.className) }, l, {
              __css: f({ display: 'inline-block' }, n),
            }),
          );
        });
      i.Ts && (w.displayName = 'Code');
      var C = ['className', 'centerContent'],
        T = (0, t.Gp)(function (e, r) {
          var n = (0, t.Lr)(e),
            a = n.className,
            l = n.centerContent,
            c = m(n, C),
            s = (0, t.mq)('Container', e);
          return o.createElement(
            t.m$.div,
            f({ ref: r, className: (0, i.cx)('chakra-container', a) }, c, {
              __css: f(
                {},
                s,
                l && {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              ),
            }),
          );
        });
      i.Ts && (T.displayName = 'Container');
      var L = [
          'borderLeftWidth',
          'borderBottomWidth',
          'borderTopWidth',
          'borderRightWidth',
          'borderWidth',
          'borderStyle',
          'borderColor',
        ],
        j = ['className', 'orientation', '__css'],
        G = (0, t.Gp)(function (e, r) {
          var n = (0, t.mq)('Divider', e),
            a = n.borderLeftWidth,
            l = n.borderBottomWidth,
            c = n.borderTopWidth,
            s = n.borderRightWidth,
            u = n.borderWidth,
            d = n.borderStyle,
            p = n.borderColor,
            v = m(n, L),
            g = (0, t.Lr)(e),
            h = g.className,
            y = g.orientation,
            b = void 0 === y ? 'horizontal' : y,
            x = g.__css,
            k = m(g, j),
            N = {
              vertical: {
                borderLeftWidth: a || s || u || '1px',
                height: '100%',
              },
              horizontal: {
                borderBottomWidth: l || c || u || '1px',
                width: '100%',
              },
            };
          return o.createElement(
            t.m$.hr,
            f({ ref: r, 'aria-orientation': b }, k, {
              __css: f(
                {},
                v,
                { border: '0', borderColor: p, borderStyle: d },
                N[b],
                x,
              ),
              className: (0, i.cx)('chakra-divider', h),
            }),
          );
        });
      i.Ts && (G.displayName = 'Divider');
      var W = [
          'direction',
          'align',
          'justify',
          'wrap',
          'basis',
          'grow',
          'shrink',
        ],
        O = (0, t.Gp)(function (e, r) {
          var n = e.direction,
            a = e.align,
            i = e.justify,
            l = e.wrap,
            c = e.basis,
            s = e.grow,
            u = e.shrink,
            d = m(e, W),
            p = {
              display: 'flex',
              flexDirection: n,
              alignItems: a,
              justifyContent: i,
              flexWrap: l,
              flexBasis: c,
              flexGrow: s,
              flexShrink: u,
            };
          return o.createElement(t.m$.div, f({ ref: r, __css: p }, d));
        });
      i.Ts && (O.displayName = 'Flex');
      var S = [
          'area',
          'templateAreas',
          'gap',
          'rowGap',
          'columnGap',
          'column',
          'row',
          'autoFlow',
          'autoRows',
          'templateRows',
          'autoColumns',
          'templateColumns',
        ],
        I = (0, t.Gp)(function (e, r) {
          var n = e.area,
            a = e.templateAreas,
            i = e.gap,
            l = e.rowGap,
            c = e.columnGap,
            s = e.column,
            u = e.row,
            d = e.autoFlow,
            p = e.autoRows,
            v = e.templateRows,
            g = e.autoColumns,
            h = e.templateColumns,
            y = m(e, S),
            b = {
              display: 'grid',
              gridArea: n,
              gridTemplateAreas: a,
              gridGap: i,
              gridRowGap: l,
              gridColumnGap: c,
              gridAutoColumns: g,
              gridColumn: s,
              gridRow: u,
              gridAutoFlow: d,
              gridAutoRows: p,
              gridTemplateRows: v,
              gridTemplateColumns: h,
            };
          return o.createElement(t.m$.div, f({ ref: r, __css: b }, y));
        });
      i.Ts && (I.displayName = 'Grid');
      var R = ['className'],
        $ = (0, t.Gp)(function (e, r) {
          var n = (0, t.mq)('Heading', e),
            a = (0, t.Lr)(e);
          a.className;
          var l = m(a, R);
          return o.createElement(
            t.m$.h2,
            f(
              { ref: r, className: (0, i.cx)('chakra-heading', e.className) },
              l,
              { __css: n },
            ),
          );
        });
      i.Ts && ($.displayName = 'Heading');
      var A = ['className'],
        B = (0, t.Gp)(function (e, r) {
          var n = (0, t.mq)('Kbd', e),
            a = (0, t.Lr)(e),
            l = a.className,
            c = m(a, A);
          return o.createElement(
            t.m$.kbd,
            f({ ref: r, className: (0, i.cx)('chakra-kbd', l) }, c, {
              __css: f({ fontFamily: 'mono' }, n),
            }),
          );
        });
      i.Ts && (B.displayName = 'Kbd');
      var F = ['className', 'isExternal'],
        M = (0, t.Gp)(function (e, r) {
          var n = (0, t.mq)('Link', e),
            a = (0, t.Lr)(e),
            l = a.className,
            c = a.isExternal,
            s = m(a, F);
          return o.createElement(
            t.m$.a,
            f(
              {
                target: c ? '_blank' : void 0,
                rel: c ? 'noopener noreferrer' : void 0,
                ref: r,
                className: (0, i.cx)('chakra-link', l),
              },
              s,
              { __css: n },
            ),
          );
        });
      i.Ts && (M.displayName = 'Link');
      var q = ['children', 'styleType', 'stylePosition', 'spacing'],
        z = ['as'],
        D = ['as'],
        P = (0, t.Gp)(function (e, r) {
          var n,
            a = (0, t.jC)('List', e),
            i = (0, t.Lr)(e),
            l = i.children,
            c = i.styleType,
            s = void 0 === c ? 'none' : c,
            u = i.stylePosition,
            p = i.spacing,
            v = m(i, q),
            g = (0, d.WR)(l),
            h = p
              ? (((n = {})['& > *:not(style) ~ *:not(style)'] = { mt: p }), n)
              : {};
          return o.createElement(
            t.Fo,
            { value: a },
            o.createElement(
              t.m$.ul,
              f(
                {
                  ref: r,
                  listStyleType: s,
                  listStylePosition: u,
                  role: 'list',
                  __css: f({}, a.container, h),
                },
                v,
              ),
              g,
            ),
          );
        });
      i.Ts && (P.displayName = 'List');
      var H = (0, t.Gp)(function (e, r) {
        e.as;
        var n = m(e, z);
        return o.createElement(
          P,
          f({ ref: r, as: 'ol', styleType: 'decimal', marginStart: '1em' }, n),
        );
      });
      i.Ts && (H.displayName = 'OrderedList');
      var K = (0, t.Gp)(function (e, r) {
        e.as;
        var n = m(e, D);
        return o.createElement(
          P,
          f({ ref: r, as: 'ul', styleType: 'initial', marginStart: '1em' }, n),
        );
      });
      i.Ts && (K.displayName = 'UnorderedList');
      var X = (0, t.Gp)(function (e, r) {
        var n = (0, t.yK)();
        return o.createElement(t.m$.li, f({ ref: r }, e, { __css: n.item }));
      });
      i.Ts && (X.displayName = 'ListItem');
      var Q = (0, t.Gp)(function (e, r) {
        var n = (0, t.yK)();
        return o.createElement(
          u,
          f({ ref: r, role: 'presentation' }, e, { __css: n.icon }),
        );
      });
      i.Ts && (Q.displayName = 'ListIcon');
      var U = ['columns', 'spacingX', 'spacingY', 'spacing', 'minChildWidth'],
        Y = (0, t.Gp)(function (e, r) {
          var n,
            t,
            a = e.columns,
            l = e.spacingX,
            c = e.spacingY,
            s = e.spacing,
            u = e.minChildWidth,
            d = m(e, U),
            p = u
              ? ((t = u),
                (0, i.XQ)(t, function (e) {
                  return (0, i.Ft)(e)
                    ? null
                    : 'repeat(auto-fit, minmax(' +
                        ((r = e), ((0, i.hj)(r) ? r + 'px' : r) + ', 1fr))');
                  var r;
                }))
              : ((n = a),
                (0, i.XQ)(n, function (e) {
                  return (0, i.Ft)(e)
                    ? null
                    : 'repeat(' + e + ', minmax(0, 1fr))';
                }));
          return o.createElement(
            I,
            f(
              { ref: r, gap: s, columnGap: l, rowGap: c, templateColumns: p },
              d,
            ),
          );
        });
      i.Ts && (Y.displayName = 'SimpleGrid');
      var V = (0, t.m$)('div', {
        baseStyle: { flex: 1, justifySelf: 'stretch', alignSelf: 'stretch' },
      });
      i.Ts && (V.displayName = 'Spacer');
      var J = '& > *:not(style) ~ *:not(style)';
      var Z = [
          'isInline',
          'direction',
          'align',
          'justify',
          'spacing',
          'wrap',
          'children',
          'divider',
          'className',
          'shouldWrapChildren',
        ],
        ee = function (e) {
          return o.createElement(
            t.m$.div,
            f({ className: 'chakra-stack__item' }, e, {
              __css: f(
                { display: 'inline-block', flex: '0 0 auto', minWidth: 0 },
                e.__css,
              ),
            }),
          );
        },
        re = (0, t.Gp)(function (e, r) {
          var n,
            a = e.isInline,
            l = e.direction,
            c = e.align,
            s = e.justify,
            u = e.spacing,
            p = void 0 === u ? '0.5rem' : u,
            v = e.wrap,
            g = e.children,
            h = e.divider,
            y = e.className,
            b = e.shouldWrapChildren,
            x = m(e, Z),
            k = a ? 'row' : null != l ? l : 'column',
            N = o.useMemo(
              function () {
                return (function (e) {
                  var r,
                    n = e.spacing,
                    t = e.direction,
                    a = {
                      column: {
                        marginTop: n,
                        marginEnd: 0,
                        marginBottom: 0,
                        marginStart: 0,
                      },
                      row: {
                        marginTop: 0,
                        marginEnd: 0,
                        marginBottom: 0,
                        marginStart: n,
                      },
                      'column-reverse': {
                        marginTop: 0,
                        marginEnd: 0,
                        marginBottom: n,
                        marginStart: 0,
                      },
                      'row-reverse': {
                        marginTop: 0,
                        marginEnd: n,
                        marginBottom: 0,
                        marginStart: 0,
                      },
                    };
                  return (
                    ((r = { flexDirection: t })[J] = (0, i.XQ)(t, function (e) {
                      return a[e];
                    })),
                    r
                  );
                })({ direction: k, spacing: p });
              },
              [k, p],
            ),
            _ = o.useMemo(
              function () {
                return (function (e) {
                  var r = e.spacing,
                    n = e.direction,
                    t = {
                      column: {
                        my: r,
                        mx: 0,
                        borderLeftWidth: 0,
                        borderBottomWidth: '1px',
                      },
                      'column-reverse': {
                        my: r,
                        mx: 0,
                        borderLeftWidth: 0,
                        borderBottomWidth: '1px',
                      },
                      row: {
                        mx: r,
                        my: 0,
                        borderLeftWidth: '1px',
                        borderBottomWidth: 0,
                      },
                      'row-reverse': {
                        mx: r,
                        my: 0,
                        borderLeftWidth: '1px',
                        borderBottomWidth: 0,
                      },
                    };
                  return {
                    '&': (0, i.XQ)(n, function (e) {
                      return t[e];
                    }),
                  };
                })({ spacing: p, direction: k });
              },
              [p, k],
            ),
            E = !!h,
            w = !b && !E,
            C = (0, d.WR)(g),
            T = w
              ? C
              : C.map(function (e, r) {
                  var n = 'undefined' !== typeof e.key ? e.key : r,
                    t = r + 1 === C.length,
                    a = b ? o.createElement(ee, { key: n }, e) : e;
                  if (!E) return a;
                  var i = t ? null : o.cloneElement(h, { __css: _ });
                  return o.createElement(o.Fragment, { key: n }, a, i);
                }),
            L = (0, i.cx)('chakra-stack', y);
          return o.createElement(
            t.m$.div,
            f(
              {
                ref: r,
                display: 'flex',
                alignItems: c,
                justifyContent: s,
                flexDirection: N.flexDirection,
                flexWrap: v,
                className: L,
                __css: E ? {} : ((n = {}), (n[J] = N[J]), n),
              },
              x,
            ),
            T,
          );
        });
      i.Ts && (re.displayName = 'Stack');
      var ne = (0, t.Gp)(function (e, r) {
        return o.createElement(
          re,
          f({ align: 'center' }, e, { direction: 'row', ref: r }),
        );
      });
      i.Ts && (ne.displayName = 'HStack');
      var te = (0, t.Gp)(function (e, r) {
        return o.createElement(
          re,
          f({ align: 'center' }, e, { direction: 'column', ref: r }),
        );
      });
      i.Ts && (te.displayName = 'VStack');
      var ae = ['className', 'align', 'decoration', 'casing'],
        ie = (0, t.Gp)(function (e, r) {
          var n = (0, t.mq)('Text', e),
            a = (0, t.Lr)(e);
          a.className, a.align, a.decoration, a.casing;
          var l = m(a, ae),
            c = (0, i.YU)({
              textAlign: e.align,
              textDecoration: e.decoration,
              textTransform: e.casing,
            });
          return o.createElement(
            t.m$.p,
            f(
              { ref: r, className: (0, i.cx)('chakra-text', e.className) },
              c,
              l,
              { __css: n },
            ),
          );
        });
      i.Ts && (ie.displayName = 'Text');
      var oe = [
          'spacing',
          'children',
          'justify',
          'direction',
          'align',
          'className',
          'shouldWrapChildren',
        ],
        le = ['className'],
        ce = (0, t.Gp)(function (e, r) {
          var n = e.spacing,
            l = void 0 === n ? '0.5rem' : n,
            c = e.children,
            s = e.justify,
            u = e.direction,
            d = e.align,
            p = e.className,
            v = e.shouldWrapChildren,
            g = m(e, oe),
            h = o.useMemo(
              function () {
                return {
                  '--chakra-wrap-spacing': function (e) {
                    return (0, i.XQ)(l, function (r) {
                      return (0, a.fr)('space', r)(e);
                    });
                  },
                  '--wrap-spacing': 'calc(var(--chakra-wrap-spacing) / 2)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: s,
                  alignItems: d,
                  flexDirection: u,
                  listStyleType: 'none',
                  padding: '0',
                  margin: 'calc(var(--wrap-spacing) * -1)',
                  '& > *:not(style)': { margin: 'var(--wrap-spacing)' },
                };
              },
              [l, s, d, u],
            ),
            y = v
              ? o.Children.map(c, function (e, r) {
                  return o.createElement(se, { key: r }, e);
                })
              : c;
          return o.createElement(
            t.m$.div,
            f({ ref: r, className: (0, i.cx)('chakra-wrap', p) }, g),
            o.createElement(
              t.m$.ul,
              { className: 'chakra-wrap__list', __css: h },
              y,
            ),
          );
        });
      i.Ts && (ce.displayName = 'Wrap');
      var se = (0, t.Gp)(function (e, r) {
        var n = e.className,
          a = m(e, le);
        return o.createElement(
          t.m$.li,
          f(
            {
              ref: r,
              __css: { display: 'flex', alignItems: 'flex-start' },
              className: (0, i.cx)('chakra-wrap__listitem', n),
            },
            a,
          ),
        );
      });
      i.Ts && (se.displayName = 'WrapItem');
    },
    2684: function (e, r, n) {
      'use strict';
      n.d(r, {
        Sx: function () {
          return p;
        },
      });
      var t = n(1604),
        a = n(5031),
        i = n(7294),
        o = n(5393);
      a.jU ? i.useLayoutEffect : i.useEffect;
      a.Ts;
      a.Ts;
      function l(e, r) {
        if (null == e) return {};
        var n,
          t,
          a = {},
          i = Object.keys(e);
        for (t = 0; t < i.length; t++)
          (n = i[t]), r.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var n = arguments[r];
              for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      function s(e) {
        return Object.entries(e)
          .sort(function (e, r) {
            return Number.parseInt(e[1], 10) > Number.parseInt(r[1], 10)
              ? 1
              : -1;
          })
          .map(function (e, r, n) {
            var t = e[0],
              a = e[1],
              i = n[r + 1],
              o = i ? i[1] : void 0;
            return {
              minWidth: a,
              maxWidth: o,
              breakpoint: t,
              query: (function (e, r) {
                if (!(parseInt(e, 10) >= 0) && !r) return '';
                var n = '(min-width: ' + d(e) + ')';
                if (!r) return n;
                n && (n += ' and ');
                return (n +=
                  '(max-width: ' +
                  d(
                    (function (e) {
                      return (function (e, r) {
                        if ('number' === typeof e) return '' + (e + r);
                        return e.replace(u, function (e) {
                          return '' + (parseFloat(e) + r);
                        });
                      })(e, e.endsWith('px') ? -1 : -0.01);
                    })(r),
                  ) +
                  ')');
              })(a, o),
            };
          });
      }
      var u = /([0-9]+\.?[0-9]*)/;
      function d(e) {
        return (0, a.hj)(e) ? e + 'px' : e;
      }
      var f = ['query'],
        m = ['query'];
      function p(e, r) {
        var n = (function (e) {
            var r = (0, t.Fg)().breakpoints,
              n = (0, o.O)(),
              a = i.useMemo(
                function () {
                  return s(c({ base: '0px' }, r));
                },
                [r],
              ),
              u = i.useState(function () {
                if (e) {
                  var r = a.find(function (r) {
                    return r.breakpoint === e;
                  });
                  if (r) return r.query, l(r, f);
                }
              }),
              d = u[0],
              p = u[1],
              v = null == d ? void 0 : d.breakpoint,
              g = i.useCallback(
                function (e, r) {
                  e.matches && v !== r.breakpoint && p(r);
                },
                [v],
              );
            return (
              i.useEffect(
                function () {
                  var e = new Set();
                  return (
                    a.forEach(function (r) {
                      var t = r.query,
                        a = l(r, m),
                        i = n.window.matchMedia(t);
                      g(i, a);
                      var o = function () {
                        g(i, a);
                      };
                      return (
                        i.addListener(o),
                        e.add({ mediaQuery: i, handleChange: o }),
                        function () {
                          i.removeListener(o);
                        }
                      );
                    }),
                    function () {
                      e.forEach(function (e) {
                        var r = e.mediaQuery,
                          n = e.handleChange;
                        r.removeListener(n);
                      }),
                        e.clear();
                    }
                  );
                },
                [a, r, g, n.window],
              ),
              v
            );
          })(r),
          u = (0, t.Fg)();
        if (n) {
          var d = Object.keys(u.breakpoints);
          return (function (e, r, n) {
            void 0 === n && (n = a.AV);
            var t = Object.keys(e).indexOf(r);
            if (-1 !== t) return e[r];
            for (var i = n.indexOf(r); i >= 0; ) {
              if (null != e[n[i]]) {
                t = i;
                break;
              }
              i -= 1;
            }
            return -1 !== t ? e[n[t]] : void 0;
          })(
            (0, a.kJ)(e)
              ? (0, a.sq)(
                  Object.entries((0, a.Yq)(e, d)).map(function (e) {
                    return [e[0], e[1]];
                  }),
                )
              : e,
            n,
            d,
          );
        }
      }
    },
    8418: function (e, r, n) {
      'use strict';
      function t(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, r) {
            var n = [],
              t = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var o, l = e[Symbol.iterator]();
                !(t = (o = l.next()).done) &&
                (n.push(o.value), !r || n.length !== r);
                t = !0
              );
            } catch (c) {
              (a = !0), (i = c);
            } finally {
              try {
                t || null == l.return || l.return();
              } finally {
                if (a) throw i;
              }
            }
            return n;
          })(e, r) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance',
            );
          })()
        );
      }
      r.default = void 0;
      var a,
        i = (a = n(7294)) && a.__esModule ? a : { default: a },
        o = n(6273),
        l = n(387),
        c = n(7190);
      var s = {};
      function u(e, r, n, t) {
        if (e && o.isLocalURL(r)) {
          e.prefetch(r, n, t).catch(function (e) {
            0;
          });
          var a =
            t && 'undefined' !== typeof t.locale ? t.locale : e && e.locale;
          s[r + '%' + n + (a ? '%' + a : '')] = !0;
        }
      }
      var d = function (e) {
        var r,
          n = !1 !== e.prefetch,
          a = l.useRouter(),
          d = i.default.useMemo(
            function () {
              var r = t(o.resolveHref(a, e.href, !0), 2),
                n = r[0],
                i = r[1];
              return { href: n, as: e.as ? o.resolveHref(a, e.as) : i || n };
            },
            [a, e.href, e.as],
          ),
          f = d.href,
          m = d.as,
          p = e.children,
          v = e.replace,
          g = e.shallow,
          h = e.scroll,
          y = e.locale;
        'string' === typeof p && (p = i.default.createElement('a', null, p));
        var b =
            (r = i.default.Children.only(p)) && 'object' === typeof r && r.ref,
          x = t(c.useIntersection({ rootMargin: '200px' }), 2),
          k = x[0],
          N = x[1],
          _ = i.default.useCallback(
            function (e) {
              k(e),
                b &&
                  ('function' === typeof b
                    ? b(e)
                    : 'object' === typeof b && (b.current = e));
            },
            [b, k],
          );
        i.default.useEffect(
          function () {
            var e = N && n && o.isLocalURL(f),
              r = 'undefined' !== typeof y ? y : a && a.locale,
              t = s[f + '%' + m + (r ? '%' + r : '')];
            e && !t && u(a, f, m, { locale: r });
          },
          [m, f, N, y, n, a],
        );
        var E = {
          ref: _,
          onClick: function (e) {
            r.props &&
              'function' === typeof r.props.onClick &&
              r.props.onClick(e),
              e.defaultPrevented ||
                (function (e, r, n, t, a, i, l, c) {
                  ('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var r = e.currentTarget.target;
                      return (
                        (r && '_self' !== r) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      o.isLocalURL(n))) &&
                    (e.preventDefault(),
                    null == l && t.indexOf('#') >= 0 && (l = !1),
                    r[a ? 'replace' : 'push'](n, t, {
                      shallow: i,
                      locale: c,
                      scroll: l,
                    }));
                })(e, a, f, m, v, g, h, y);
          },
          onMouseEnter: function (e) {
            r.props &&
              'function' === typeof r.props.onMouseEnter &&
              r.props.onMouseEnter(e),
              o.isLocalURL(f) && u(a, f, m, { priority: !0 });
          },
        };
        if (e.passHref || ('a' === r.type && !('href' in r.props))) {
          var w = 'undefined' !== typeof y ? y : a && a.locale,
            C =
              a &&
              a.isLocaleDomain &&
              o.getDomainLocale(m, w, a && a.locales, a && a.domainLocales);
          E.href = C || o.addBasePath(o.addLocale(m, w, a && a.defaultLocale));
        }
        return i.default.cloneElement(r, E);
      };
      r.default = d;
    },
    7190: function (e, r, n) {
      'use strict';
      function t(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, r) {
            var n = [],
              t = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var o, l = e[Symbol.iterator]();
                !(t = (o = l.next()).done) &&
                (n.push(o.value), !r || n.length !== r);
                t = !0
              );
            } catch (c) {
              (a = !0), (i = c);
            } finally {
              try {
                t || null == l.return || l.return();
              } finally {
                if (a) throw i;
              }
            }
            return n;
          })(e, r) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance',
            );
          })()
        );
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.useIntersection = function (e) {
          var r = e.rootMargin,
            n = e.disabled || !o,
            c = a.useRef(),
            s = t(a.useState(!1), 2),
            u = s[0],
            d = s[1],
            f = a.useCallback(
              function (e) {
                c.current && (c.current(), (c.current = void 0)),
                  n ||
                    u ||
                    (e &&
                      e.tagName &&
                      (c.current = (function (e, r, n) {
                        var t = (function (e) {
                            var r = e.rootMargin || '',
                              n = l.get(r);
                            if (n) return n;
                            var t = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var r = t.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  r && n && r(n);
                                });
                              }, e);
                            return (
                              l.set(
                                r,
                                (n = { id: r, observer: a, elements: t }),
                              ),
                              n
                            );
                          })(n),
                          a = t.id,
                          i = t.observer,
                          o = t.elements;
                        return (
                          o.set(e, r),
                          i.observe(e),
                          function () {
                            o.delete(e),
                              i.unobserve(e),
                              0 === o.size && (i.disconnect(), l.delete(a));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { rootMargin: r },
                      )));
              },
              [n, r, u],
            );
          return (
            a.useEffect(
              function () {
                if (!o && !u) {
                  var e = i.requestIdleCallback(function () {
                    return d(!0);
                  });
                  return function () {
                    return i.cancelIdleCallback(e);
                  };
                }
              },
              [u],
            ),
            [f, u]
          );
        });
      var a = n(7294),
        i = n(9311),
        o = 'undefined' !== typeof IntersectionObserver;
      var l = new Map();
    },
    1664: function (e, r, n) {
      e.exports = n(8418);
    },
  },
]);
