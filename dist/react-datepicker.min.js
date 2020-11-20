!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("moment-hijri"),
        require("react-onclickoutside"),
        require("react-popper")
      )
    : "function" == typeof define && define.amd
    ? define([
        "exports",
        "react",
        "prop-types",
        "classnames",
        "moment-hijri",
        "react-onclickoutside",
        "react-popper"
      ], t)
    : t(
        (e.DatePicker = {}),
        e.React,
        e.PropTypes,
        e.classNames,
        e.moment,
        e.onClickOutside,
        e.ReactPopper
      );
})(this, function(e, u, t, p, c, n, s) {
  "use strict";
  (u = u && u.hasOwnProperty("default") ? u.default : u),
    (t = t && t.hasOwnProperty("default") ? t.default : t),
    (p = p && p.hasOwnProperty("default") ? p.default : p),
    (c = c && c.hasOwnProperty("default") ? c.default : c),
    (n = n && n.hasOwnProperty("default") ? n.default : n);
  var y =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
    a = function(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    r = function(e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    };
  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function i(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var l = function(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  };
  var d,
    h =
      (i(m, (d = u.Component)),
      (m.prototype.render = function() {
        var e = p({
          "react-datepicker__year-dropdown": !0,
          "react-datepicker__year-dropdown--scrollable": this.props
            .scrollableYearDropdown
        });
        return u.createElement("div", { className: e }, this.renderOptions());
      }),
      m);
  function m(e) {
    a(this, m);
    var o = l(this, d.call(this, e));
    return (
      (o.renderOptions = function() {
        var t = o.props.year,
          e = o.state.yearsList.map(function(e) {
            return u.createElement(
              "div",
              {
                className:
                  t === e
                    ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                    : "react-datepicker__year-option",
                key: e,
                onClick: o.onChange.bind(o, e)
              },
              t === e
                ? u.createElement(
                    "span",
                    { className: "react-datepicker__year-option--selected" },
                    "✓"
                  )
                : "",
              e
            );
          }),
          n = o.props.minDate ? o.props.minDate.year() : null,
          r = o.props.maxDate ? o.props.maxDate.year() : null;
        return (
          (r &&
            o.state.yearsList.find(function(e) {
              return e === r;
            })) ||
            e.unshift(
              u.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "upcoming",
                  onClick: o.incrementYears
                },
                u.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                })
              )
            ),
          (n &&
            o.state.yearsList.find(function(e) {
              return e === n;
            })) ||
            e.push(
              u.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "previous",
                  onClick: o.decrementYears
                },
                u.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                })
              )
            ),
          e
        );
      }),
      (o.onChange = function(e) {
        o.props.onChange(e);
      }),
      (o.handleClickOutside = function() {
        o.props.onCancel();
      }),
      (o.shiftYears = function(t) {
        var e = o.state.yearsList.map(function(e) {
          return e + t;
        });
        o.setState({ yearsList: e });
      }),
      (o.incrementYears = function() {
        return o.shiftYears(1);
      }),
      (o.decrementYears = function() {
        return o.shiftYears(-1);
      }),
      (o.state = {
        yearsList: (function(e, t, n, r) {
          for (var o = [], a = 0; a < 2 * t + 1; a++) {
            var s = e + t - a,
              i = !0;
            n && (i = n.year() <= s),
              r && i && (i = r.year() >= s),
              i && o.push(s);
          }
          return o;
        })(
          o.props.year,
          e.yearDropdownItemNumber || (e.scrollableYearDropdown ? 10 : 5),
          o.props.minDate,
          o.props.maxDate
        )
      }),
      o
    );
  }
  h.propTypes = {
    minDate: t.object,
    maxDate: t.object,
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    scrollableYearDropdown: t.bool,
    year: t.number.isRequired,
    yearDropdownItemNumber: t.number
  };
  var f = {
    1: "mon",
    2: "tue",
    3: "wed",
    4: "thu",
    5: "fri",
    6: "sat",
    7: "sun"
  };
  function D(e, t, n) {
    return e.set(t, n);
  }
  function g(e, t, n) {
    return e.add(t, n);
  }
  function b(e, t, n) {
    return e.subtract(t, n);
  }
  function w(e, t) {
    return e.get(t);
  }
  function v(e, t) {
    return e.startOf(t);
  }
  function k(e) {
    return c(e);
  }
  function C(e) {
    return null == e
      ? k()
      : ((e = e),
        c()
          .utc()
          .utcOffset(e));
  }
  function S(e) {
    return e.clone();
  }
  function M(e) {
    return c.isMoment(e);
  }
  function _(e, t) {
    return e.format(t);
  }
  function N(e, t) {
    return e.set({ hour: t.hour, minute: t.minute, second: t.second }), e;
  }
  function O(e, t, n) {
    return "hijri" === (2 < arguments.length && void 0 !== n ? n : "")
      ? e.iMonth(t)
      : D(e, "month", t);
  }
  function T(e, t, n) {
    return "hijri" === (2 < arguments.length && void 0 !== n ? n : "")
      ? e.iYear(t)
      : D(e, "year", t);
  }
  function E(e) {
    return w(e, "minute");
  }
  function x(e) {
    return w(e, "hour");
  }
  function j(e, t) {
    return "hijri" === (1 < arguments.length && void 0 !== t ? t : "")
      ? e.iMonth()
      : w(e, "month");
  }
  function Y(e, t) {
    return "hijri" === (1 < arguments.length && void 0 !== t ? t : "")
      ? e.iYear()
      : w(e, "year");
  }
  function F(e, t) {
    return "hijri" === (1 < arguments.length && void 0 !== t ? t : "")
      ? e.iDate()
      : w(e, "date");
  }
  function R(e, t) {
    return "hijri" === (1 < arguments.length && void 0 !== t ? t : "")
      ? 6 === e.day()
        ? e
        : e.day("-1")
      : v(e, "week");
  }
  function W(e, t) {
    return v(e, re("month", 1 < arguments.length && void 0 !== t ? t : ""));
  }
  function I(e, t) {
    return g(e, t, "minutes");
  }
  function P(e, t) {
    return g(e, t, "days");
  }
  function B(e, t) {
    return g(e, t, "weeks");
  }
  function q(e, t) {
    return g(e, t, "months");
  }
  function L(e, t) {
    return b(e, t, "months");
  }
  function A(e, t) {
    return e.isBefore(t);
  }
  function V(e, t) {
    return e.isAfter(t);
  }
  function H(e, t, n) {
    return e && t
      ? e.isSame(t, re("year", 2 < arguments.length && void 0 !== n ? n : ""))
      : !e && !t;
  }
  function K(e, t, n) {
    return e && t
      ? "hijri" === (2 < arguments.length && void 0 !== n ? n : "")
        ? e.iMonth() === t.iMonth()
        : e.isSame(t, "month")
      : !e && !t;
  }
  function U(e, t) {
    return e && t ? e.isSame(t, "day") : !e && !t;
  }
  function z(e, t, n) {
    (t = t
      .clone()
      .startOf("day")
      .subtract(1, "seconds")),
      (n = n
        .clone()
        .startOf("day")
        .add(1, "seconds"));
    return e
      .clone()
      .startOf("day")
      .isBetween(t, n);
  }
  function G(e, t) {
    return e.clone().locale(t || c.locale());
  }
  function J(t, e) {
    var n = 1 < arguments.length && void 0 !== e ? e : {},
      r = n.minDate,
      o = n.maxDate,
      a = n.excludeDates,
      e = n.includeDates,
      n = n.filterDate;
    return (
      (r && t.isBefore(r, "day")) ||
      (o && t.isAfter(o, "day")) ||
      (a &&
        a.some(function(e) {
          return U(t, e);
        })) ||
      (e &&
        !e.some(function(e) {
          return U(t, e);
        })) ||
      (n && !n(t.clone())) ||
      !1
    );
  }
  function Q(e, t) {
    for (var n = t.length, r = 0; r < n; r++)
      if (
        t[r].get("hours") === e.get("hours") &&
        t[r].get("minutes") === e.get("minutes")
      )
        return 1;
  }
  function X(e, t) {
    var n = t.minTime,
      r = t.maxTime;
    if (!n || !r) throw Error("Both minTime and maxTime props required");
    (t = c()
      .hours(0)
      .minutes(0)
      .seconds(0)),
      (e = t
        .clone()
        .hours(e.get("hours"))
        .minutes(e.get("minutes"))),
      (n = t
        .clone()
        .hours(n.get("hours"))
        .minutes(n.get("minutes"))),
      (r = t
        .clone()
        .hours(r.get("hours"))
        .minutes(r.get("minutes")));
    return !e.isSameOrAfter(n) || !e.isSameOrBefore(r);
  }
  function Z(e) {
    var t = e.minDate,
      e = e.includeDates;
    return e && t
      ? c.min(
          e.filter(function(e) {
            return t.isSameOrBefore(e, "day");
          })
        )
      : e
      ? c.min(e)
      : t;
  }
  function $(e) {
    var t = e.maxDate,
      e = e.includeDates;
    return e && t
      ? c.max(
          e.filter(function(e) {
            return t.isSameOrAfter(e, "day");
          })
        )
      : e
      ? c.max(e)
      : t;
  }
  function ee(e, t) {
    for (
      var n = 0 < arguments.length && void 0 !== e ? e : [],
        r =
          1 < arguments.length && void 0 !== t
            ? t
            : "react-datepicker__day--highlighted",
        o = new Map(),
        a = 0,
        s = n.length;
      a < s;
      a++
    ) {
      var i = n[a];
      if (M(i)) {
        var p = i.format("MM.DD.YYYY"),
          c = o.get(p) || [];
        c.includes(r) || (c.push(r), o.set(p, c));
      } else if ("object" === (void 0 === i ? "undefined" : y(i))) {
        var c = Object.keys(i),
          l = c[0],
          d = i[c[0]];
        if ("string" == typeof l && d.constructor === Array)
          for (var u = 0, h = d.length; u < h; u++) {
            var m = d[u].format("MM.DD.YYYY"),
              f = o.get(m) || [];
            f.includes(l) || (f.push(l), o.set(m, f));
          }
      }
    }
    return o;
  }
  function te(e, t, n, r, o) {
    for (var a = o.length, s = [], i = 0; i < a; i++) {
      var p = I(((p = S(e)), (c = x(o[i])), g(p, c, "hours")), E(o[i])),
        c = I(S(e), (n + 1) * r);
      p.isBetween(t, c) && s.push(o[i]);
    }
    return s;
  }
  var ne = function(e) {
    return e[0].toUpperCase() + e.slice(1);
  };
  function re(e, t) {
    return "hijri" === t ? "i" + ne(e) : e;
  }
  function oe(e, t) {
    var n = this;
    return "hijri" === t
      ? "L" === e || "MM/DD/YYYY" === e
        ? "iYYYY/iMM/iDD"
        : "string" == typeof e
        ? e
            .replace("Y", "iY")
            .replace("M", "iM")
            .replace("D", "iD")
        : Array.isArray(e)
        ? e.map(function(e) {
            return n.formatByCalendar(e, t);
          })
        : void 0
      : e;
  }
  var ae,
    se = n(h),
    ie =
      (i(pe, (ae = u.Component)),
      (pe.prototype.render = function() {
        var e = void 0;
        switch (this.props.dropdownMode) {
          case "scroll":
            e = this.renderScrollMode();
            break;
          case "select":
            e = this.renderSelectMode();
        }
        return u.createElement(
          "div",
          {
            className:
              "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--" +
              this.props.dropdownMode
          },
          e
        );
      }),
      pe);
  function pe() {
    var e, s;
    a(this, pe);
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return (
      ((e = s = l(this, ae.call.apply(ae, [this].concat(n)))).state = {
        dropdownVisible: !1
      }),
      (s.renderSelectOptions = function() {
        for (
          var e,
            t,
            n =
              ((e = s.props.calendar),
              (t = s.props.minDate) ? t[re("year", e)]() : 1900),
            r =
              ((t = s.props.calendar),
              (e = s.props.maxDate) ? e[re("year", t)]() : 2100),
            o = [],
            a = n;
          a <= r;
          a++
        )
          o.push(u.createElement("option", { key: a, value: a }, a));
        return o;
      }),
      (s.onSelectChange = function(e) {
        s.onChange(e.target.value);
      }),
      (s.renderSelectMode = function() {
        return u.createElement(
          "select",
          {
            value: s.props.year,
            className: "react-datepicker__year-select",
            onChange: s.onSelectChange
          },
          s.renderSelectOptions()
        );
      }),
      (s.renderReadView = function(e) {
        return u.createElement(
          "div",
          {
            key: "read",
            style: { visibility: e ? "visible" : "hidden" },
            className: "react-datepicker__year-read-view",
            onClick: function(e) {
              return s.toggleDropdown(e);
            }
          },
          u.createElement("span", {
            className: "react-datepicker__year-read-view--down-arrow"
          }),
          u.createElement(
            "span",
            { className: "react-datepicker__year-read-view--selected-year" },
            s.props.year
          )
        );
      }),
      (s.renderDropdown = function() {
        return u.createElement(se, {
          key: "dropdown",
          year: s.props.year,
          onChange: s.onChange,
          onCancel: s.toggleDropdown,
          minDate: s.props.minDate,
          maxDate: s.props.maxDate,
          scrollableYearDropdown: s.props.scrollableYearDropdown,
          yearDropdownItemNumber: s.props.yearDropdownItemNumber
        });
      }),
      (s.renderScrollMode = function() {
        var e = s.state.dropdownVisible,
          t = [s.renderReadView(!e)];
        return e && t.unshift(s.renderDropdown()), t;
      }),
      (s.onChange = function(e) {
        s.toggleDropdown(), e !== s.props.year && s.props.onChange(e);
      }),
      (s.toggleDropdown = function(e) {
        s.setState({ dropdownVisible: !s.state.dropdownVisible }, function() {
          s.props.adjustDateOnChange && s.handleYearChange(s.props.date, e);
        });
      }),
      (s.handleYearChange = function(e, t) {
        s.onSelect(e, t), s.setOpen();
      }),
      (s.onSelect = function(e, t) {
        s.props.onSelect && s.props.onSelect(e, t);
      }),
      (s.setOpen = function() {
        s.props.setOpen && s.props.setOpen(!0);
      }),
      l(s, e)
    );
  }
  ie.propTypes = {
    adjustDateOnChange: t.bool,
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    maxDate: t.object,
    minDate: t.object,
    onChange: t.func.isRequired,
    scrollableYearDropdown: t.bool,
    year: t.number.isRequired,
    yearDropdownItemNumber: t.number,
    date: t.object,
    onSelect: t.func,
    setOpen: t.func,
    calendar: t.string
  };
  var ce,
    le =
      (i(de, (ce = u.Component)),
      (de.prototype.render = function() {
        return u.createElement(
          "div",
          { className: "react-datepicker__month-dropdown" },
          this.renderOptions()
        );
      }),
      de);
  function de() {
    var e, n;
    a(this, de);
    for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return (
      ((e = n = l(
        this,
        ce.call.apply(ce, [this].concat(r))
      )).renderOptions = function() {
        return n.props.monthNames.map(function(e, t) {
          return u.createElement(
            "div",
            {
              className:
                n.props.month === t
                  ? "react-datepicker__month-option --selected_month"
                  : "react-datepicker__month-option",
              key: e,
              onClick: n.onChange.bind(n, t)
            },
            n.props.month === t
              ? u.createElement(
                  "span",
                  { className: "react-datepicker__month-option--selected" },
                  "✓"
                )
              : "",
            e
          );
        });
      }),
      (n.onChange = function(e) {
        return n.props.onChange(e);
      }),
      (n.handleClickOutside = function() {
        return n.props.onCancel();
      }),
      l(n, e)
    );
  }
  le.propTypes = {
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    month: t.number.isRequired,
    monthNames: t.arrayOf(t.string.isRequired).isRequired
  };
  var ue,
    he = n(le),
    me =
      (i(fe, (ue = u.Component)),
      (fe.prototype.render = function() {
        var t = this,
          n = c.localeData(this.props.locale),
          e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
            this.props.useShortMonthInDropdown
              ? function(e) {
                  return n.monthsShort(k({ M: e }));
                }
              : function(e) {
                  return n.months(k({ M: e }), t.props.dateFormat);
                }
          ),
          r = void 0;
        switch (this.props.dropdownMode) {
          case "scroll":
            r = this.renderScrollMode(e);
            break;
          case "select":
            r = this.renderSelectMode(e);
        }
        return u.createElement(
          "div",
          {
            className:
              "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--" +
              this.props.dropdownMode
          },
          r
        );
      }),
      fe);
  function fe() {
    var e, r;
    a(this, fe);
    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return (
      ((e = r = l(this, ue.call.apply(ue, [this].concat(n)))).state = {
        dropdownVisible: !1
      }),
      (r.renderSelectOptions = function(e) {
        return e.map(function(e, t) {
          return u.createElement("option", { key: t, value: t }, e);
        });
      }),
      (r.renderSelectMode = function(e) {
        return u.createElement(
          "select",
          {
            value: r.props.month,
            className: "react-datepicker__month-select",
            onChange: function(e) {
              return r.onChange(e.target.value);
            }
          },
          r.renderSelectOptions(e)
        );
      }),
      (r.renderReadView = function(e, t) {
        return u.createElement(
          "div",
          {
            key: "read",
            style: { visibility: e ? "visible" : "hidden" },
            className: "react-datepicker__month-read-view",
            onClick: r.toggleDropdown
          },
          u.createElement("span", {
            className: "react-datepicker__month-read-view--down-arrow"
          }),
          u.createElement(
            "span",
            { className: "react-datepicker__month-read-view--selected-month" },
            t[r.props.month]
          )
        );
      }),
      (r.renderDropdown = function(e) {
        return u.createElement(he, {
          key: "dropdown",
          month: r.props.month,
          monthNames: e,
          onChange: r.onChange,
          onCancel: r.toggleDropdown
        });
      }),
      (r.renderScrollMode = function(e) {
        var t = r.state.dropdownVisible,
          n = [r.renderReadView(!t, e)];
        return t && n.unshift(r.renderDropdown(e)), n;
      }),
      (r.onChange = function(e) {
        r.toggleDropdown(), e !== r.props.month && r.props.onChange(e);
      }),
      (r.toggleDropdown = function() {
        return r.setState({ dropdownVisible: !r.state.dropdownVisible });
      }),
      l(r, e)
    );
  }
  me.propTypes = {
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    locale: t.string,
    dateFormat: t.string.isRequired,
    month: t.number.isRequired,
    onChange: t.func.isRequired,
    useShortMonthInDropdown: t.bool
  };
  var ye,
    h =
      (i(De, (ye = u.Component)),
      (De.prototype.render = function() {
        var e = p({
          "react-datepicker__month-year-dropdown": !0,
          "react-datepicker__month-year-dropdown--scrollable": this.props
            .scrollableMonthYearDropdown
        });
        return u.createElement("div", { className: e }, this.renderOptions());
      }),
      De);
  function De(e) {
    a(this, De);
    var r = l(this, ye.call(this, e));
    return (
      (r.renderOptions = function() {
        return r.state.monthYearsList.map(function(e) {
          var t = e.valueOf(),
            n = H(r.props.date, e) && K(r.props.date, e);
          return u.createElement(
            "div",
            {
              className: n
                ? "react-datepicker__month-year-option --selected_month-year"
                : "react-datepicker__month-year-option",
              key: t,
              onClick: r.onChange.bind(r, t)
            },
            n
              ? u.createElement(
                  "span",
                  {
                    className: "react-datepicker__month-year-option--selected"
                  },
                  "✓"
                )
              : "",
            _(e, r.props.dateFormat)
          );
        });
      }),
      (r.onChange = function(e) {
        return r.props.onChange(e);
      }),
      (r.handleClickOutside = function() {
        r.props.onCancel();
      }),
      (r.state = {
        monthYearsList: (function(e, t) {
          for (var n = [], r = W(S(e)), o = W(S(t)); !V(r, o); )
            n.push(S(r)), q(r, 1);
          return n;
        })(r.props.minDate, r.props.maxDate)
      }),
      r
    );
  }
  h.propTypes = {
    minDate: t.object.isRequired,
    maxDate: t.object.isRequired,
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    scrollableMonthYearDropdown: t.bool,
    date: t.object.isRequired,
    dateFormat: t.string.isRequired
  };
  var ge,
    be = n(h),
    we =
      (i(ve, (ge = u.Component)),
      (ve.prototype.render = function() {
        var e = void 0;
        switch (this.props.dropdownMode) {
          case "scroll":
            e = this.renderScrollMode();
            break;
          case "select":
            e = this.renderSelectMode();
        }
        return u.createElement(
          "div",
          {
            className:
              "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--" +
              this.props.dropdownMode
          },
          e
        );
      }),
      ve);
  function ve() {
    var e, o;
    a(this, ve);
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return (
      ((e = o = l(this, ge.call.apply(ge, [this].concat(n)))).state = {
        dropdownVisible: !1
      }),
      (o.renderSelectOptions = function() {
        for (
          var e = W(G(o.props.minDate, o.props.locale)),
            t = W(G(o.props.maxDate, o.props.locale)),
            n = [];
          !V(e, t);

        ) {
          var r = e.valueOf();
          n.push(
            u.createElement(
              "option",
              { key: r, value: r },
              _(e, o.props.dateFormat)
            )
          ),
            q(e, 1);
        }
        return n;
      }),
      (o.onSelectChange = function(e) {
        o.onChange(e.target.value);
      }),
      (o.renderSelectMode = function() {
        return u.createElement(
          "select",
          {
            value: W(o.props.date).valueOf(),
            className: "react-datepicker__month-year-select",
            onChange: o.onSelectChange
          },
          o.renderSelectOptions()
        );
      }),
      (o.renderReadView = function(e) {
        var t = _(G(k(o.props.date), o.props.locale), o.props.dateFormat);
        return u.createElement(
          "div",
          {
            key: "read",
            style: { visibility: e ? "visible" : "hidden" },
            className: "react-datepicker__month-year-read-view",
            onClick: function(e) {
              return o.toggleDropdown(e);
            }
          },
          u.createElement("span", {
            className: "react-datepicker__month-year-read-view--down-arrow"
          }),
          u.createElement(
            "span",
            {
              className:
                "react-datepicker__month-year-read-view--selected-month-year"
            },
            t
          )
        );
      }),
      (o.renderDropdown = function() {
        return u.createElement(be, {
          key: "dropdown",
          date: o.props.date,
          dateFormat: o.props.dateFormat,
          onChange: o.onChange,
          onCancel: o.toggleDropdown,
          minDate: G(o.props.minDate, o.props.locale),
          maxDate: G(o.props.maxDate, o.props.locale),
          scrollableMonthYearDropdown: o.props.scrollableMonthYearDropdown
        });
      }),
      (o.renderScrollMode = function() {
        var e = o.state.dropdownVisible,
          t = [o.renderReadView(!e)];
        return e && t.unshift(o.renderDropdown()), t;
      }),
      (o.onChange = function(e) {
        o.toggleDropdown();
        e = k(parseInt(e));
        (H(o.props.date, e) && K(o.props.date, e)) || o.props.onChange(e);
      }),
      (o.toggleDropdown = function() {
        return o.setState({ dropdownVisible: !o.state.dropdownVisible });
      }),
      l(o, e)
    );
  }
  we.propTypes = {
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    dateFormat: t.string.isRequired,
    locale: t.string,
    maxDate: t.object.isRequired,
    minDate: t.object.isRequired,
    date: t.object.isRequired,
    onChange: t.func.isRequired,
    scrollableMonthYearDropdown: t.bool
  };
  var ke,
    Ce =
      (i(Se, (ke = u.Component)),
      (Se.prototype.render = function() {
        return u.createElement(
          "div",
          {
            className: this.getClassNames(this.props.day),
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            "aria-label": "day-" + F(this.props.day, this.props.calendar),
            role: "option"
          },
          F(this.props.day, this.props.calendar)
        );
      }),
      Se);
  function Se() {
    var e, s;
    a(this, Se);
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return (
      ((e = s = l(
        this,
        ke.call.apply(ke, [this].concat(n))
      )).handleClick = function(e) {
        !s.isDisabled() && s.props.onClick && s.props.onClick(e);
      }),
      (s.handleMouseEnter = function(e) {
        !s.isDisabled() && s.props.onMouseEnter && s.props.onMouseEnter(e);
      }),
      (s.isSameDay = function(e) {
        return U(s.props.day, e);
      }),
      (s.isKeyboardSelected = function() {
        return (
          !s.props.inline &&
          !s.isSameDay(s.props.selected) &&
          s.isSameDay(s.props.preSelection)
        );
      }),
      (s.isDisabled = function() {
        return J(s.props.day, s.props);
      }),
      (s.getHighLightedClass = function(e) {
        var t = s.props,
          n = t.highlightDates;
        if (!n) return !1;
        t = t.day.format("MM.DD.YYYY");
        return n.get(t);
      }),
      (s.isInRange = function() {
        var e = s.props,
          t = e.startDate,
          n = e.endDate;
        return !(!t || !n) && z(e.day, t, n);
      }),
      (s.isInSelectingRange = function() {
        var e = s.props,
          t = e.day,
          n = e.selectsStart,
          r = e.selectsEnd,
          o = e.selectingDate,
          a = e.startDate,
          e = e.endDate;
        return (
          !((!n && !r) || !o || s.isDisabled()) &&
          (n && e && o.isSameOrBefore(e)
            ? z(t, o, e)
            : !!(r && a && o.isSameOrAfter(a)) && z(t, a, o))
        );
      }),
      (s.isSelectingRangeStart = function() {
        if (!s.isInSelectingRange()) return !1;
        var e = s.props,
          t = e.day;
        return U(t, e.selectsStart ? e.selectingDate : e.startDate);
      }),
      (s.isSelectingRangeEnd = function() {
        if (!s.isInSelectingRange()) return !1;
        var e = s.props,
          t = e.day;
        return U(t, e.selectsEnd ? e.selectingDate : e.endDate);
      }),
      (s.isRangeStart = function() {
        var e = s.props,
          t = e.startDate;
        return !(!t || !e.endDate) && U(t, e.day);
      }),
      (s.isRangeEnd = function() {
        var e = s.props,
          t = e.endDate;
        return !(!e.startDate || !t) && U(t, e.day);
      }),
      (s.isWeekend = function() {
        var e = w(s.props.day, "day");
        return 0 === e || 6 === e;
      }),
      (s.isOutsideMonth = function() {
        return (
          void 0 !== s.props.month &&
          s.props.month !== j(s.props.day, s.props.calendar)
        );
      }),
      (s.getClassNames = function(e) {
        e = s.props.dayClassName ? s.props.dayClassName(e) : void 0;
        return p(
          "react-datepicker__day",
          e,
          "react-datepicker__day--" + f[s.props.day.isoWeekday()],
          {
            "react-datepicker__day--disabled": s.isDisabled(),
            "react-datepicker__day--selected": s.isSameDay(s.props.selected),
            "react-datepicker__day--keyboard-selected": s.isKeyboardSelected(),
            "react-datepicker__day--range-start": s.isRangeStart(),
            "react-datepicker__day--range-end": s.isRangeEnd(),
            "react-datepicker__day--in-range": s.isInRange(),
            "react-datepicker__day--in-selecting-range": s.isInSelectingRange(),
            "react-datepicker__day--selecting-range-start": s.isSelectingRangeStart(),
            "react-datepicker__day--selecting-range-end": s.isSelectingRangeEnd(),
            "react-datepicker__day--today": s.isSameDay(C(s.props.utcOffset)),
            "react-datepicker__day--weekend": s.isWeekend(),
            "react-datepicker__day--outside-month": s.isOutsideMonth()
          },
          s.getHighLightedClass("react-datepicker__day--highlighted")
        );
      }),
      l(s, e)
    );
  }
  Ce.propTypes = {
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    highlightDates: t.instanceOf(Map),
    inline: t.bool,
    month: t.number,
    onClick: t.func,
    onMouseEnter: t.func,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    startDate: t.object,
    utcOffset: t.number,
    calendar: t.string
  };
  var Me,
    _e =
      (i(Ne, (Me = u.Component)),
      (Ne.prototype.render = function() {
        return u.createElement(
          "div",
          {
            className: p({
              "react-datepicker__week-number": !0,
              "react-datepicker__week-number--clickable": !!this.props.onClick
            }),
            "aria-label": "week-" + this.props.weekNumber,
            onClick: this.handleClick
          },
          this.props.weekNumber
        );
      }),
      Ne);
  function Ne() {
    var e, t;
    a(this, Ne);
    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return (
      ((e = t = l(
        this,
        Me.call.apply(Me, [this].concat(r))
      )).handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }),
      l(t, e)
    );
  }
  _e.propTypes = { weekNumber: t.number.isRequired, onClick: t.func };
  var Oe,
    Te =
      (i(Ee, (Oe = u.Component)),
      (Ee.prototype.render = function() {
        return u.createElement(
          "div",
          { className: "react-datepicker__week" },
          this.renderDays()
        );
      }),
      Ee);
  function Ee() {
    var e, o;
    a(this, Ee);
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return (
      ((e = o = l(
        this,
        Oe.call.apply(Oe, [this].concat(n))
      )).handleDayClick = function(e, t) {
        o.props.onDayClick && o.props.onDayClick(e, t);
      }),
      (o.handleDayMouseEnter = function(e) {
        o.props.onDayMouseEnter && o.props.onDayMouseEnter(e);
      }),
      (o.handleWeekClick = function(e, t, n) {
        "function" == typeof o.props.onWeekSelect &&
          o.props.onWeekSelect(e, t, n);
      }),
      (o.formatWeekNumber = function(e) {
        return o.props.formatWeekNumber
          ? o.props.formatWeekNumber(e)
          : (function(e, t) {
              return "hijri" === (1 < arguments.length && void 0 !== t ? t : "")
                ? e.iWeek()
                : w(e, "week");
            })(e, o.props.calendar);
      }),
      (o.renderDays = function() {
        var e,
          n = R(S(o.props.day), o.props.calendar),
          t = [],
          r = o.formatWeekNumber(n);
        return (
          o.props.showWeekNumber &&
            ((e = o.props.onWeekSelect
              ? o.handleWeekClick.bind(o, n, r)
              : void 0),
            t.push(
              u.createElement(_e, { key: "W", weekNumber: r, onClick: e })
            )),
          t.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function(e) {
              var t = P(S(n), e);
              return u.createElement(Ce, {
                key: e,
                day: t,
                month: o.props.month,
                onClick: o.handleDayClick.bind(o, t),
                onMouseEnter: o.handleDayMouseEnter.bind(o, t),
                minDate: o.props.minDate,
                maxDate: o.props.maxDate,
                excludeDates: o.props.excludeDates,
                includeDates: o.props.includeDates,
                inline: o.props.inline,
                highlightDates: o.props.highlightDates,
                selectingDate: o.props.selectingDate,
                filterDate: o.props.filterDate,
                preSelection: o.props.preSelection,
                selected: o.props.selected,
                selectsStart: o.props.selectsStart,
                selectsEnd: o.props.selectsEnd,
                startDate: o.props.startDate,
                endDate: o.props.endDate,
                dayClassName: o.props.dayClassName,
                utcOffset: o.props.utcOffset,
                calendar: o.props.calendar
              });
            })
          )
        );
      }),
      l(o, e)
    );
  }
  Te.propTypes = {
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    inline: t.bool,
    maxDate: t.object,
    minDate: t.object,
    month: t.number,
    onDayClick: t.func,
    onDayMouseEnter: t.func,
    onWeekSelect: t.func,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showWeekNumber: t.bool,
    startDate: t.object,
    utcOffset: t.number,
    calendar: t.string
  };
  var xe,
    je = 6,
    Ye =
      (i(Fe, (xe = u.Component)),
      (Fe.prototype.render = function() {
        return u.createElement(
          "div",
          {
            className: this.getClassNames(),
            onMouseLeave: this.handleMouseLeave,
            role: "listbox"
          },
          this.renderWeeks()
        );
      }),
      Fe);
  function Fe() {
    var e, i;
    a(this, Fe);
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return (
      ((e = i = l(
        this,
        xe.call.apply(xe, [this].concat(n))
      )).handleDayClick = function(e, t) {
        i.props.onDayClick && i.props.onDayClick(e, t);
      }),
      (i.handleDayMouseEnter = function(e) {
        i.props.onDayMouseEnter && i.props.onDayMouseEnter(e);
      }),
      (i.handleMouseLeave = function() {
        i.props.onMouseLeave && i.props.onMouseLeave();
      }),
      (i.isWeekInMonth = function(e) {
        var t = i.props.day,
          n = P(S(e), 6);
        return K(e, t, i.props.calendar) || K(n, t, i.props.calendar);
      }),
      (i.renderWeeks = function() {
        for (
          var e = [],
            t = i.props.fixedHeight,
            n = R(W(S(i.props.day), i.props.calendar)),
            r = 0,
            o = !1;
          e.push(
            u.createElement(Te, {
              key: r,
              day: n,
              month: j(i.props.day, i.props.calendar),
              onDayClick: i.handleDayClick,
              onDayMouseEnter: i.handleDayMouseEnter,
              onWeekSelect: i.props.onWeekSelect,
              formatWeekNumber: i.props.formatWeekNumber,
              minDate: i.props.minDate,
              maxDate: i.props.maxDate,
              excludeDates: i.props.excludeDates,
              includeDates: i.props.includeDates,
              inline: i.props.inline,
              highlightDates: i.props.highlightDates,
              selectingDate: i.props.selectingDate,
              filterDate: i.props.filterDate,
              preSelection: i.props.preSelection,
              selected: i.props.selected,
              selectsStart: i.props.selectsStart,
              selectsEnd: i.props.selectsEnd,
              showWeekNumber: i.props.showWeekNumbers,
              startDate: i.props.startDate,
              endDate: i.props.endDate,
              dayClassName: i.props.dayClassName,
              utcOffset: i.props.utcOffset,
              calendar: i.props.calendar
            })
          ),
            !o;

        ) {
          r++, (n = B(S(n), 1));
          var a = t && je <= r,
            s = !t && !i.isWeekInMonth(n);
          if (a || s) {
            if (!i.props.peekNextMonth) break;
            o = !0;
          }
        }
        return e;
      }),
      (i.getClassNames = function() {
        var e = i.props;
        return p("react-datepicker__month", {
          "react-datepicker__month--selecting-range":
            e.selectingDate && (e.selectsStart || e.selectsEnd)
        });
      }),
      l(i, e)
    );
  }
  Ye.propTypes = {
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    inline: t.bool,
    maxDate: t.object,
    minDate: t.object,
    onDayClick: t.func,
    onDayMouseEnter: t.func,
    onMouseLeave: t.func,
    onWeekSelect: t.func,
    peekNextMonth: t.bool,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showWeekNumbers: t.bool,
    startDate: t.object,
    utcOffset: t.number,
    calendar: t.string
  };
  var Re,
    We =
      (i(Ie, (Re = u.Component)),
      (Ie.prototype.componentDidMount = function() {
        var e = 60 / this.props.intervals,
          t = x(this.props.selected || k());
        this.list.scrollTop = e * t * 30;
      }),
      (Ie.prototype.render = function() {
        var t = this,
          e = this.props.monthRef
            ? this.props.monthRef.clientHeight - 39
            : null;
        return u.createElement(
          "div",
          {
            className:
              "react-datepicker__time-container " +
              (this.props.todayButton
                ? "react-datepicker__time-container--with-today-button"
                : "")
          },
          u.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--time"
            },
            u.createElement(
              "div",
              { className: "react-datepicker-time__header" },
              this.props.timeCaption
            )
          ),
          u.createElement(
            "div",
            { className: "react-datepicker__time" },
            u.createElement(
              "div",
              { className: "react-datepicker__time-box" },
              u.createElement(
                "ul",
                {
                  className: "react-datepicker__time-list",
                  ref: function(e) {
                    t.list = e;
                  },
                  style: e ? { height: e } : {}
                },
                this.renderTimes.bind(this)()
              )
            )
          )
        );
      }),
      r(Ie, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              intervals: 30,
              onTimeChange: function() {},
              todayButton: null,
              timeCaption: "Time"
            };
          }
        }
      ]),
      Ie);
  function Ie() {
    var e, d;
    a(this, Ie);
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return (
      ((e = d = l(
        this,
        Re.call.apply(Re, [this].concat(n))
      )).handleClick = function(e) {
        ((d.props.minTime || d.props.maxTime) && X(e, d.props)) ||
          (d.props.excludeTimes && Q(e, d.props.excludeTimes)) ||
          (d.props.includeTimes && !Q(e, d.props.includeTimes)) ||
          d.props.onChange(e);
      }),
      (d.liClasses = function(e, t, n) {
        var r = ["react-datepicker__time-list-item"];
        return (
          t === x(e) &&
            n === E(e) &&
            r.push("react-datepicker__time-list-item--selected"),
          (((d.props.minTime || d.props.maxTime) && X(e, d.props)) ||
            (d.props.excludeTimes && Q(e, d.props.excludeTimes)) ||
            (d.props.includeTimes && !Q(e, d.props.includeTimes))) &&
            r.push("react-datepicker__time-list-item--disabled"),
          d.props.injectTimes &&
            (60 * x(e) + E(e)) % d.props.intervals != 0 &&
            r.push("react-datepicker__time-list-item--injected"),
          r.join(" ")
        );
      }),
      (d.renderTimes = function() {
        for (
          var e = [],
            n = d.props.format || "hh:mm A",
            t = d.props.intervals,
            r = d.props.selected || k(),
            o = x(r),
            a = E(r),
            s = v(k(), "day"),
            i = 1440 / t,
            p =
              d.props.injectTimes &&
              d.props.injectTimes.sort(function(e, t) {
                return e - t;
              }),
            c = 0;
          c < i;
          c++
        ) {
          var l = I(S(s), c * t);
          e.push(l), p && ((l = te(s, l, c, t, p)), (e = e.concat(l)));
        }
        return e.map(function(e, t) {
          return u.createElement(
            "li",
            {
              key: t,
              onClick: d.handleClick.bind(d, e),
              className: d.liClasses(e, o, a)
            },
            _(e, n)
          );
        });
      }),
      l(d, e)
    );
  }
  function Pe(e) {
    var t = e.children;
    return u.createElement(
      "div",
      { className: e.className },
      u.createElement("div", { className: "react-datepicker__triangle" }),
      t
    );
  }
  (We.propTypes = {
    format: t.string,
    includeTimes: t.array,
    intervals: t.number,
    selected: t.object,
    onChange: t.func,
    todayButton: t.string,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    monthRef: t.object,
    timeCaption: t.string,
    injectTimes: t.array
  }),
    (Pe.propTypes = { className: t.string, children: t.node });
  var Be,
    qe = [
      "react-datepicker__year-select",
      "react-datepicker__month-select",
      "react-datepicker__month-year-select"
    ],
    Le = function(e) {
      var t = (
        (0 < arguments.length && void 0 !== e ? e : {}).className || ""
      ).split(/\s+/);
      return qe.some(function(e) {
        return !!~t.indexOf(e);
      });
    },
    le =
      (i(Ae, (Be = u.Component)),
      r(Ae, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              onDropdownFocus: function() {},
              monthsShown: 1,
              forceShowMonthNavigation: !1,
              timeCaption: "Time",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next Month"
            };
          }
        }
      ]),
      (Ae.prototype.componentDidMount = function() {
        var e = this;
        this.props.showTimeSelect &&
          (this.assignMonthContainer = void e.setState({
            monthContainer: e.monthContainer
          }));
      }),
      (Ae.prototype.componentDidUpdate = function(e) {
        this.props.preSelection && !U(this.props.preSelection, e.preSelection)
          ? this.setState({ date: this.localizeDate(this.props.preSelection) })
          : this.props.openToDate &&
            !U(this.props.openToDate, e.openToDate) &&
            this.setState({ date: this.localizeDate(this.props.openToDate) });
      }),
      (Ae.prototype.render = function() {
        return u.createElement(
          this.props.container || Pe,
          {
            className: p("react-datepicker", this.props.className, {
              "react-datepicker--time-only": this.props.showTimeSelectOnly
            })
          },
          this.renderPreviousMonthButton(),
          this.renderNextMonthButton(),
          this.renderMonths(),
          this.renderTodayButton(),
          this.renderTimeSection(),
          this.props.children
        );
      }),
      Ae);
  function Ae(e) {
    a(this, Ae);
    var s = l(this, Be.call(this, e));
    return (
      (s.handleClickOutside = function(e) {
        s.props.onClickOutside(e);
      }),
      (s.handleDropdownFocus = function(e) {
        Le(e.target) && s.props.onDropdownFocus();
      }),
      (s.getDateInView = function() {
        var e = s.props,
          t = e.preSelection,
          n = e.selected,
          r = e.openToDate,
          o = e.utcOffset,
          a = Z(s.props),
          e = $(s.props),
          o = C(o),
          t = r || n || t;
        return t || (a && A(o, a) ? a : e && V(o, e) ? e : o);
      }),
      (s.localizeDate = function(e) {
        return G(e, s.props.locale);
      }),
      (s.increaseMonth = function() {
        s.setState({ date: q(S(s.state.date), 1) }, function() {
          return s.handleMonthChange(s.state.date);
        });
      }),
      (s.decreaseMonth = function() {
        s.setState({ date: L(S(s.state.date), 1) }, function() {
          return s.handleMonthChange(s.state.date);
        });
      }),
      (s.handleDayClick = function(e, t) {
        return s.props.onSelect(e, t);
      }),
      (s.handleDayMouseEnter = function(e) {
        return s.setState({ selectingDate: e });
      }),
      (s.handleMonthMouseLeave = function() {
        return s.setState({ selectingDate: null });
      }),
      (s.handleYearChange = function(e) {
        s.props.onYearChange && s.props.onYearChange(e);
      }),
      (s.handleMonthChange = function(e) {
        s.props.onMonthChange && s.props.onMonthChange(e),
          s.props.adjustDateOnChange &&
            (s.props.onSelect && s.props.onSelect(e),
            s.props.setOpen && s.props.setOpen(!0));
      }),
      (s.handleMonthYearChange = function(e) {
        s.handleYearChange(e), s.handleMonthChange(e);
      }),
      (s.changeYear = function(e) {
        s.setState(
          { date: T(S(s.state.date), e, s.props.calendar) },
          function() {
            return s.handleYearChange(s.state.date);
          }
        );
      }),
      (s.changeMonth = function(e) {
        s.setState(
          { date: O(S(s.state.date), e, s.props.calendar) },
          function() {
            return s.handleMonthChange(s.state.date);
          }
        );
      }),
      (s.changeMonthYear = function(e) {
        s.setState(
          {
            date: T(
              O(S(s.state.date), j(e), s.props.calendar),
              Y(e),
              s.props.calendar
            )
          },
          function() {
            return s.handleMonthYearChange(s.state.date);
          }
        );
      }),
      (s.header = function() {
        var r = R(
            S(
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : s.state.date
            ),
            s.props.calendar
          ),
          e = [];
        return (
          s.props.showWeekNumbers &&
            e.push(
              u.createElement(
                "div",
                { key: "W", className: "react-datepicker__day-name" },
                s.props.weekLabel || "#"
              )
            ),
          e.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function(e) {
              var t = P(S(r), e),
                n = t.localeData(),
                t = s.formatWeekday(n, t);
              return u.createElement(
                "div",
                { key: e, className: "react-datepicker__day-name" },
                t
              );
            })
          )
        );
      }),
      (s.formatWeekday = function(e, t) {
        return s.props.formatWeekDay
          ? (0, s.props.formatWeekDay)(e.weekdays(t))
          : s.props.useWeekdaysShort
          ? e.weekdaysShort(t)
          : e.weekdaysMin(t);
      }),
      (s.renderPreviousMonthButton = function() {
        var e = (function(e, t, n) {
          var n = (r = 2 < arguments.length && void 0 !== n ? n : {}).minDate,
            r = r.includeDates,
            o = e.clone().subtract(1, t);
          return (
            (n && o.isBefore(n, t)) ||
            (r &&
              r.every(function(e) {
                return o.isBefore(e, t);
              })) ||
            !1
          );
        })(s.state.date, "month", s.props);
        if (
          (s.props.forceShowMonthNavigation ||
            s.props.showDisabledMonthNavigation ||
            !e) &&
          !s.props.showTimeSelectOnly
        ) {
          var t = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ],
            n = s.decreaseMonth;
          return (
            e &&
              s.props.showDisabledMonthNavigation &&
              (t.push("react-datepicker__navigation--previous--disabled"),
              (n = null)),
            u.createElement(
              "button",
              { type: "button", className: t.join(" "), onClick: n },
              s.props.previousMonthButtonLabel
            )
          );
        }
      }),
      (s.renderNextMonthButton = function() {
        var e = (function(e, t, n) {
          var n = (r = 2 < arguments.length && void 0 !== n ? n : {}).maxDate,
            r = r.includeDates,
            o = e.clone().add(1, t);
          return (
            (n && o.isAfter(n, t)) ||
            (r &&
              r.every(function(e) {
                return o.isAfter(e, t);
              })) ||
            !1
          );
        })(s.state.date, "month", s.props);
        if (
          (s.props.forceShowMonthNavigation ||
            s.props.showDisabledMonthNavigation ||
            !e) &&
          !s.props.showTimeSelectOnly
        ) {
          var t = [
            "react-datepicker__navigation",
            "react-datepicker__navigation--next"
          ];
          s.props.showTimeSelect &&
            t.push("react-datepicker__navigation--next--with-time"),
            s.props.todayButton &&
              t.push("react-datepicker__navigation--next--with-today-button");
          var n = s.increaseMonth;
          return (
            e &&
              s.props.showDisabledMonthNavigation &&
              (t.push("react-datepicker__navigation--next--disabled"),
              (n = null)),
            u.createElement(
              "button",
              { type: "button", className: t.join(" "), onClick: n },
              s.props.nextMonthButtonLabel
            )
          );
        }
      }),
      (s.renderCurrentMonth = function() {
        var e =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : s.state.date,
          t = ["react-datepicker__current-month"];
        return (
          s.props.showYearDropdown &&
            t.push("react-datepicker__current-month--hasYearDropdown"),
          s.props.showMonthDropdown &&
            t.push("react-datepicker__current-month--hasMonthDropdown"),
          s.props.showMonthYearDropdown &&
            t.push("react-datepicker__current-month--hasMonthYearDropdown"),
          u.createElement(
            "div",
            { className: t.join(" ") },
            _(e, s.props.dateFormat)
          )
        );
      }),
      (s.renderYearDropdown = function() {
        if (
          s.props.showYearDropdown &&
          !(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        )
          return u.createElement(ie, {
            adjustDateOnChange: s.props.adjustDateOnChange,
            date: s.state.date,
            onSelect: s.props.onSelect,
            setOpen: s.props.setOpen,
            dropdownMode: s.props.dropdownMode,
            onChange: s.changeYear,
            minDate: s.props.minDate,
            maxDate: s.props.maxDate,
            year: Y(s.state.date, s.props.calendar),
            scrollableYearDropdown: s.props.scrollableYearDropdown,
            yearDropdownItemNumber: s.props.yearDropdownItemNumber,
            calendar: s.props.calendar
          });
      }),
      (s.renderMonthDropdown = function() {
        if (
          s.props.showMonthDropdown &&
          !(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        )
          return u.createElement(me, {
            dropdownMode: s.props.dropdownMode,
            locale: s.props.locale,
            dateFormat: s.props.dateFormat,
            onChange: s.changeMonth,
            month: j(s.state.date, s.props.calendar),
            useShortMonthInDropdown: s.props.useShortMonthInDropdown,
            calendar: s.props.calendar
          });
      }),
      (s.renderMonthYearDropdown = function() {
        if (
          s.props.showMonthYearDropdown &&
          !(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        )
          return u.createElement(we, {
            dropdownMode: s.props.dropdownMode,
            locale: s.props.locale,
            dateFormat: s.props.dateFormat,
            onChange: s.changeMonthYear,
            minDate: s.props.minDate,
            maxDate: s.props.maxDate,
            date: s.state.date,
            scrollableMonthYearDropdown: s.props.scrollableMonthYearDropdown
          });
      }),
      (s.renderTodayButton = function() {
        if (s.props.todayButton && !s.props.showTimeSelectOnly)
          return u.createElement(
            "div",
            {
              className: "react-datepicker__today-button",
              onClick: function(e) {
                return s.props.onSelect(v(C(s.props.utcOffset), "date"), e);
              }
            },
            s.props.todayButton
          );
      }),
      (s.renderMonths = function() {
        if (!s.props.showTimeSelectOnly) {
          for (var e = [], t = 0; t < s.props.monthsShown; ++t) {
            var n = q(S(s.state.date), t);
            e.push(
              u.createElement(
                "div",
                {
                  key: "month-" + t,
                  ref: function(e) {
                    s.monthContainer = e;
                  },
                  className: "react-datepicker__month-container"
                },
                u.createElement(
                  "div",
                  { className: "react-datepicker__header" },
                  s.renderCurrentMonth(n),
                  u.createElement(
                    "div",
                    {
                      className:
                        "react-datepicker__header__dropdown react-datepicker__header__dropdown--" +
                        s.props.dropdownMode,
                      onFocus: s.handleDropdownFocus
                    },
                    s.renderMonthDropdown(0 !== t),
                    s.renderMonthYearDropdown(0 !== t),
                    s.renderYearDropdown(0 !== t)
                  ),
                  u.createElement(
                    "div",
                    { className: "react-datepicker__day-names" },
                    s.header(n)
                  )
                ),
                u.createElement(Ye, {
                  day: n,
                  dayClassName: s.props.dayClassName,
                  onDayClick: s.handleDayClick,
                  onDayMouseEnter: s.handleDayMouseEnter,
                  onMouseLeave: s.handleMonthMouseLeave,
                  onWeekSelect: s.props.onWeekSelect,
                  formatWeekNumber: s.props.formatWeekNumber,
                  minDate: s.props.minDate,
                  maxDate: s.props.maxDate,
                  excludeDates: s.props.excludeDates,
                  highlightDates: s.props.highlightDates,
                  selectingDate: s.state.selectingDate,
                  includeDates: s.props.includeDates,
                  inline: s.props.inline,
                  fixedHeight: s.props.fixedHeight,
                  filterDate: s.props.filterDate,
                  preSelection: s.props.preSelection,
                  selected: s.props.selected,
                  selectsStart: s.props.selectsStart,
                  selectsEnd: s.props.selectsEnd,
                  showWeekNumbers: s.props.showWeekNumbers,
                  startDate: s.props.startDate,
                  endDate: s.props.endDate,
                  peekNextMonth: s.props.peekNextMonth,
                  utcOffset: s.props.utcOffset,
                  calendar: s.props.calendar
                })
              )
            );
          }
          return e;
        }
      }),
      (s.renderTimeSection = function() {
        if (s.props.showTimeSelect)
          return u.createElement(We, {
            selected: s.props.selected,
            onChange: s.props.onTimeChange,
            format: s.props.timeFormat,
            includeTimes: s.props.includeTimes,
            intervals: s.props.timeIntervals,
            minTime: s.props.minTime,
            maxTime: s.props.maxTime,
            excludeTimes: s.props.excludeTimes,
            timeCaption: s.props.timeCaption,
            todayButton: s.props.todayButton,
            showMonthDropdown: s.props.showMonthDropdown,
            showMonthYearDropdown: s.props.showMonthYearDropdown,
            showYearDropdown: s.props.showYearDropdown,
            withPortal: s.props.withPortal,
            monthRef: s.state.monthContainer,
            injectTimes: s.props.injectTimes
          });
      }),
      (s.state = {
        date: s.localizeDate(s.getDateInView()),
        selectingDate: null,
        monthContainer: s.monthContainer
      }),
      s
    );
  }
  le.propTypes = {
    adjustDateOnChange: t.bool,
    className: t.string,
    children: t.node,
    container: t.func,
    dateFormat: t.oneOfType([t.string, t.array]).isRequired,
    dayClassName: t.func,
    dropdownMode: t.oneOf(["scroll", "select"]),
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    includeTimes: t.array,
    injectTimes: t.array,
    inline: t.bool,
    locale: t.string,
    maxDate: t.object,
    minDate: t.object,
    monthsShown: t.number,
    onClickOutside: t.func.isRequired,
    onMonthChange: t.func,
    onYearChange: t.func,
    forceShowMonthNavigation: t.bool,
    onDropdownFocus: t.func,
    onSelect: t.func.isRequired,
    onWeekSelect: t.func,
    showTimeSelect: t.bool,
    showTimeSelectOnly: t.bool,
    timeFormat: t.string,
    timeIntervals: t.number,
    onTimeChange: t.func,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    timeCaption: t.string,
    openToDate: t.object,
    peekNextMonth: t.bool,
    scrollableYearDropdown: t.bool,
    scrollableMonthYearDropdown: t.bool,
    preSelection: t.object,
    selected: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showMonthDropdown: t.bool,
    showMonthYearDropdown: t.bool,
    showWeekNumbers: t.bool,
    showYearDropdown: t.bool,
    startDate: t.object,
    todayButton: t.string,
    useWeekdaysShort: t.bool,
    formatWeekDay: t.func,
    withPortal: t.bool,
    utcOffset: t.number,
    weekLabel: t.string,
    yearDropdownItemNumber: t.number,
    setOpen: t.func,
    useShortMonthInDropdown: t.bool,
    showDisabledMonthNavigation: t.bool,
    calendar: t.string,
    previousMonthButtonLabel: t.string,
    nextMonthButtonLabel: t.string
  };
  var Ve,
    h = [
      "auto",
      "auto-left",
      "auto-right",
      "bottom",
      "bottom-end",
      "bottom-start",
      "left",
      "left-end",
      "left-start",
      "right",
      "right-end",
      "right-start",
      "top",
      "top-end",
      "top-start"
    ],
    He =
      (i(Ke, (Ve = u.Component)),
      (Ke.prototype.render = function() {
        var e = this.props,
          t = e.popperComponent,
          n = e.popperModifiers,
          r = e.popperPlacement,
          o = e.targetComponent,
          a = void 0;
        return (
          e.hidePopper ||
            ((e = p("react-datepicker-popper", e.className)),
            (a = u.createElement(
              s.Popper,
              { className: e, modifiers: n, placement: r },
              t
            ))),
          this.props.popperContainer &&
            (a = u.createElement(this.props.popperContainer, {}, a)),
          u.createElement(
            s.Manager,
            null,
            u.createElement(
              s.Target,
              { className: "react-datepicker-wrapper" },
              o
            ),
            a
          )
        );
      }),
      r(Ke, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              hidePopper: !0,
              popperModifiers: {
                preventOverflow: {
                  enabled: !0,
                  escapeWithReference: !0,
                  boundariesElement: "viewport"
                }
              },
              popperPlacement: "bottom-start"
            };
          }
        }
      ]),
      Ke);
  function Ke() {
    return a(this, Ke), l(this, Ve.apply(this, arguments));
  }
  He.propTypes = {
    className: t.string,
    hidePopper: t.bool,
    popperComponent: t.element,
    popperModifiers: t.object,
    popperPlacement: t.oneOf(h),
    popperContainer: t.func,
    targetComponent: t.element
  };
  var Ue = "react-datepicker-ignore-onclickoutside",
    ze = n(le);
  var Ge,
    r =
      (i(Je, (Ge = u.Component)),
      r(Je, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              allowSameDay: !1,
              dateFormat: "L",
              dateFormatCalendar: "MMMM YYYY",
              onChange: function() {},
              disabled: !1,
              disabledKeyboardNavigation: !1,
              dropdownMode: "scroll",
              onFocus: function() {},
              onBlur: function() {},
              onKeyDown: function() {},
              onSelect: function() {},
              onClickOutside: function() {},
              onMonthChange: function() {},
              preventOpenOnFocus: !1,
              onYearChange: function() {},
              monthsShown: 1,
              readOnly: !1,
              withPortal: !1,
              shouldCloseOnSelect: !0,
              showTimeSelect: !1,
              timeIntervals: 30,
              timeCaption: "Time",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next month"
            };
          }
        }
      ]),
      (Je.prototype.componentDidUpdate = function(e, t) {
        var n, r;
        e.inline &&
          ((r = this.props.selected),
          (n = e.selected) && r ? j(n) !== j(r) || Y(n) !== Y(r) : n !== r) &&
          this.setPreSelection(this.props.selected),
          e.highlightDates !== this.props.highlightDates &&
            this.setState({ highlightDates: ee(this.props.highlightDates) }),
          !t.focused &&
            ((t = this.props.selected),
            (e = e.selected) && t && !e.isSame(t)) &&
            this.setState({ inputValue: null });
      }),
      (Je.prototype.componentWillUnmount = function() {
        this.clearPreventFocusTimeout();
      }),
      (Je.prototype.render = function() {
        var e = this.renderCalendar();
        return this.props.inline && !this.props.withPortal
          ? e
          : this.props.withPortal
          ? u.createElement(
              "div",
              null,
              this.props.inline
                ? null
                : u.createElement(
                    "div",
                    { className: "react-datepicker__input-container" },
                    this.renderDateInput(),
                    this.renderClearButton()
                  ),
              this.state.open || this.props.inline
                ? u.createElement(
                    "div",
                    { className: "react-datepicker__portal" },
                    e
                  )
                : null
            )
          : u.createElement(He, {
              className: this.props.popperClassName,
              hidePopper:
                !this.state.open || this.props.disabled || this.props.readOnly,
              popperModifiers: this.props.popperModifiers,
              targetComponent: u.createElement(
                "div",
                { className: "react-datepicker__input-container" },
                this.renderDateInput(),
                this.renderClearButton()
              ),
              popperContainer: this.props.popperContainer,
              popperComponent: e,
              popperPlacement: this.props.popperPlacement
            });
      }),
      Je);
  function Je(e) {
    a(this, Je);
    var i = l(this, Ge.call(this, e));
    return (
      (i.getPreSelection = function() {
        return i.props.openToDate
          ? k(i.props.openToDate)
          : i.props.selectsEnd && i.props.startDate
          ? k(i.props.startDate)
          : i.props.selectsStart && i.props.endDate
          ? k(i.props.endDate)
          : C(i.props.utcOffset);
      }),
      (i.calcInitialState = function() {
        var e = i.getPreSelection(),
          t = Z(i.props),
          n = $(i.props),
          e = t && A(e, t) ? t : n && V(e, n) ? n : e;
        return {
          open: i.props.startOpen || !1,
          preventFocus: !1,
          preSelection: i.props.selected ? k(i.props.selected) : e,
          highlightDates: ee(i.props.highlightDates),
          focused: !1
        };
      }),
      (i.clearPreventFocusTimeout = function() {
        i.preventFocusTimeout && clearTimeout(i.preventFocusTimeout);
      }),
      (i.setFocus = function() {
        i.input && i.input.focus && i.input.focus();
      }),
      (i.setOpen = function(e) {
        i.setState({
          open: e,
          preSelection: (e && i.state.open ? i.state : i.calcInitialState())
            .preSelection,
          lastPreSelectChange: Xe
        });
      }),
      (i.handleFocus = function(e) {
        i.state.preventFocus ||
          (i.props.onFocus(e),
          i.props.preventOpenOnFocus || i.props.readOnly || i.setOpen(!0)),
          i.setState({ focused: !0 });
      }),
      (i.cancelFocusInput = function() {
        clearTimeout(i.inputFocusTimeout), (i.inputFocusTimeout = null);
      }),
      (i.deferFocusInput = function() {
        i.cancelFocusInput(),
          (i.inputFocusTimeout = setTimeout(function() {
            return i.setFocus();
          }, 1));
      }),
      (i.handleDropdownFocus = function() {
        i.cancelFocusInput();
      }),
      (i.handleBlur = function(e) {
        i.state.open && !i.props.withPortal
          ? i.deferFocusInput()
          : i.props.onBlur(e),
          i.setState({ focused: !1 });
      }),
      (i.handleCalendarClickOutside = function(e) {
        i.props.inline || i.setOpen(!1),
          i.props.onClickOutside(e),
          i.props.withPortal && e.preventDefault();
      }),
      (i.handleChange = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r,
          o = t[0];
        (i.props.onChangeRaw &&
          (i.props.onChangeRaw.apply(i, t),
          "function" != typeof o.isDefaultPrevented ||
            o.isDefaultPrevented())) ||
          (i.setState({ inputValue: o.target.value, lastPreSelectChange: Qe }),
          (!(r = (r = c(
            o.target.value,
            (r = i.props).dateFormat,
            r.locale || c.locale(),
            !0
          )).isValid()
            ? r
            : null) &&
            o.target.value) ||
            i.setSelected(r, o, !0));
      }),
      (i.handleSelect = function(e, t) {
        i.setState({ preventFocus: !0 }, function() {
          return (
            (i.preventFocusTimeout = setTimeout(function() {
              return i.setState({ preventFocus: !1 });
            }, 50)),
            i.preventFocusTimeout
          );
        }),
          i.setSelected(e, t),
          !i.props.shouldCloseOnSelect || i.props.showTimeSelect
            ? i.setPreSelection(e)
            : i.props.inline || i.setOpen(!1);
      }),
      (i.setSelected = function(e, t, n) {
        var r = e;
        (null !== r && J(r, i.props)) ||
          ((U(i.props.selected, r) && !i.props.allowSameDay) ||
            (null !== r &&
              (i.props.selected &&
                ((e = i.props.selected),
                n && (e = k(r)),
                (r = N(k(r), {
                  hour: x(e),
                  minute: E(e),
                  second: w(e, "second")
                }))),
              i.props.inline || i.setState({ preSelection: r })),
            i.props.onChange(r, t)),
          i.props.onSelect(r, t),
          n || i.setState({ inputValue: null }));
      }),
      (i.setPreSelection = function(e) {
        (void 0 !== i.props.minDate &&
          void 0 !== i.props.maxDate &&
          e &&
          !z(e, i.props.minDate, i.props.maxDate)) ||
          i.setState({ preSelection: e });
      }),
      (i.handleTimeChange = function(e) {
        e = N(S(i.props.selected || i.getPreSelection()), {
          hour: x(e),
          minute: E(e)
        });
        i.setState({ preSelection: e }),
          i.props.onChange(e),
          i.setOpen(!1),
          i.setState({ inputValue: null });
      }),
      (i.onInputClick = function() {
        i.props.disabled || i.props.readOnly || i.setOpen(!0);
      }),
      (i.onInputKeyDown = function(e) {
        i.props.onKeyDown(e);
        var t = e.key;
        if (i.state.open || i.props.inline || i.props.preventOpenOnFocus) {
          var n = k(i.state.preSelection);
          if ("Enter" === t)
            e.preventDefault(),
              (M(i.state.preSelection) || c.isDate(i.state.preSelection)) &&
              i.state.lastPreSelectChange === Xe
                ? (i.handleSelect(n, e),
                  i.props.shouldCloseOnSelect || i.setPreSelection(n))
                : i.setOpen(!1);
          else if ("Escape" === t) e.preventDefault(), i.setOpen(!1);
          else if ("Tab" === t) i.setOpen(!1);
          else if (!i.props.disabledKeyboardNavigation) {
            var r = void 0;
            switch (t) {
              case "ArrowLeft":
                r = b(n, 1, "days");
                break;
              case "ArrowRight":
                r = P(n, 1);
                break;
              case "ArrowUp":
                r = b(n, 1, "weeks");
                break;
              case "ArrowDown":
                r = B(n, 1);
                break;
              case "PageUp":
                r = L(n, 1);
                break;
              case "PageDown":
                r = q(n, 1);
                break;
              case "Home":
                r = b(n, 1, "years");
                break;
              case "End":
                r = g(n, 1, "years");
            }
            r &&
              (e.preventDefault(),
              i.setState({ lastPreSelectChange: Xe }),
              i.props.adjustDateOnChange && i.setSelected(r),
              i.setPreSelection(r));
          }
        } else ("ArrowDown" !== t && "ArrowUp" !== t) || i.onInputClick();
      }),
      (i.onClearClick = function(e) {
        e && e.preventDefault && e.preventDefault(),
          i.props.onChange(null, e),
          i.setState({ inputValue: null });
      }),
      (i.clear = function() {
        i.onClearClick();
      }),
      (i.renderCalendar = function() {
        return i.props.inline ||
          (i.state.open && !i.props.disabled && !i.props.readOnly)
          ? u.createElement(
              ze,
              {
                ref: function(e) {
                  i.calendar = e;
                },
                locale: i.props.locale,
                adjustDateOnChange: i.props.adjustDateOnChange,
                setOpen: i.setOpen,
                dateFormat: oe(i.props.dateFormatCalendar, i.props.calendar),
                useWeekdaysShort: i.props.useWeekdaysShort,
                formatWeekDay: i.props.formatWeekDay,
                dropdownMode: i.props.dropdownMode,
                selected: i.props.selected,
                preSelection: i.state.preSelection,
                onSelect: i.handleSelect,
                onWeekSelect: i.props.onWeekSelect,
                openToDate: i.props.openToDate,
                minDate: i.props.minDate,
                maxDate: i.props.maxDate,
                selectsStart: i.props.selectsStart,
                selectsEnd: i.props.selectsEnd,
                startDate: i.props.startDate,
                endDate: i.props.endDate,
                excludeDates: i.props.excludeDates,
                filterDate: i.props.filterDate,
                onClickOutside: i.handleCalendarClickOutside,
                formatWeekNumber: i.props.formatWeekNumber,
                highlightDates: i.state.highlightDates,
                includeDates: i.props.includeDates,
                includeTimes: i.props.includeTimes,
                injectTimes: i.props.injectTimes,
                inline: i.props.inline,
                peekNextMonth: i.props.peekNextMonth,
                showMonthDropdown: i.props.showMonthDropdown,
                useShortMonthInDropdown: i.props.useShortMonthInDropdown,
                showMonthYearDropdown: i.props.showMonthYearDropdown,
                showWeekNumbers: i.props.showWeekNumbers,
                showYearDropdown: i.props.showYearDropdown,
                withPortal: i.props.withPortal,
                forceShowMonthNavigation: i.props.forceShowMonthNavigation,
                showDisabledMonthNavigation:
                  i.props.showDisabledMonthNavigation,
                scrollableYearDropdown: i.props.scrollableYearDropdown,
                scrollableMonthYearDropdown:
                  i.props.scrollableMonthYearDropdown,
                todayButton: i.props.todayButton,
                weekLabel: i.props.weekLabel,
                utcOffset: i.props.utcOffset,
                outsideClickIgnoreClass: Ue,
                fixedHeight: i.props.fixedHeight,
                monthsShown: i.props.monthsShown,
                onDropdownFocus: i.handleDropdownFocus,
                onMonthChange: i.props.onMonthChange,
                onYearChange: i.props.onYearChange,
                dayClassName: i.props.dayClassName,
                showTimeSelect: i.props.showTimeSelect,
                showTimeSelectOnly: i.props.showTimeSelectOnly,
                onTimeChange: i.handleTimeChange,
                timeFormat: i.props.timeFormat,
                timeIntervals: i.props.timeIntervals,
                minTime: i.props.minTime,
                maxTime: i.props.maxTime,
                excludeTimes: i.props.excludeTimes,
                timeCaption: i.props.timeCaption,
                className: i.props.calendarClassName,
                container: i.props.calendarContainer,
                yearDropdownItemNumber: i.props.yearDropdownItemNumber,
                calendar: i.props.calendar,
                previousMonthButtonLabel: i.props.previousMonthButtonLabel,
                nextMonthButtonLabel: i.props.nextMonthButtonLabel
              },
              i.props.children
            )
          : null;
      }),
      (i.renderDateInput = function() {
        var e,
          t,
          n,
          r,
          o = p(i.props.className, (((e = {})[Ue] = i.state.open), e)),
          a = i.props.customInput || u.createElement("input", { type: "text" }),
          s = i.props.customInputRef || "ref",
          t =
            "string" == typeof i.props.value
              ? i.props.value
              : "string" == typeof i.state.inputValue
              ? i.state.inputValue
              : ((n = (t = i.props).dateFormat),
                (r = t.locale),
                (t = t.calendar),
                ((e = i.props.selected) &&
                  e
                    .clone()
                    .locale(r || c.locale())
                    .format(oe(Array.isArray(n) ? n[0] : n, t))) ||
                  "");
        return u.cloneElement(
          a,
          (((a = {})[s] = function(e) {
            i.input = e;
          }),
          (a.value = t),
          (a.onBlur = i.handleBlur),
          (a.onChange = i.handleChange),
          (a.onClick = i.onInputClick),
          (a.onFocus = i.handleFocus),
          (a.onKeyDown = i.onInputKeyDown),
          (a.id = i.props.id),
          (a.name = i.props.name),
          (a.autoFocus = i.props.autoFocus),
          (a.placeholder = i.props.placeholderText),
          (a.disabled = i.props.disabled),
          (a.autoComplete = i.props.autoComplete),
          (a.className = o),
          (a.title = i.props.title),
          (a.readOnly = i.props.readOnly),
          (a.required = i.props.required),
          (a.tabIndex = i.props.tabIndex),
          a)
        );
      }),
      (i.renderClearButton = function() {
        return i.props.isClearable && null != i.props.selected
          ? u.createElement("button", {
              type: "button",
              className: "react-datepicker__close-icon",
              onClick: i.onClearClick,
              title: i.props.clearButtonTitle,
              tabIndex: -1
            })
          : null;
      }),
      (i.state = i.calcInitialState()),
      i
    );
  }
  r.propTypes = {
    adjustDateOnChange: t.bool,
    allowSameDay: t.bool,
    autoComplete: t.string,
    autoFocus: t.bool,
    calendarClassName: t.string,
    calendarContainer: t.func,
    children: t.node,
    className: t.string,
    customInput: t.element,
    customInputRef: t.string,
    dateFormat: t.oneOfType([t.string, t.array]),
    dateFormatCalendar: t.string,
    dayClassName: t.func,
    disabled: t.bool,
    disabledKeyboardNavigation: t.bool,
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.array,
    id: t.string,
    includeDates: t.array,
    includeTimes: t.array,
    injectTimes: t.array,
    inline: t.bool,
    isClearable: t.bool,
    locale: t.string,
    maxDate: t.object,
    minDate: t.object,
    monthsShown: t.number,
    name: t.string,
    onBlur: t.func,
    onChange: t.func.isRequired,
    onSelect: t.func,
    onWeekSelect: t.func,
    onClickOutside: t.func,
    onChangeRaw: t.func,
    onFocus: t.func,
    onKeyDown: t.func,
    onMonthChange: t.func,
    onYearChange: t.func,
    openToDate: t.object,
    peekNextMonth: t.bool,
    placeholderText: t.string,
    popperContainer: t.func,
    popperClassName: t.string,
    popperModifiers: t.object,
    popperPlacement: t.oneOf(h),
    preventOpenOnFocus: t.bool,
    readOnly: t.bool,
    required: t.bool,
    scrollableYearDropdown: t.bool,
    scrollableMonthYearDropdown: t.bool,
    selected: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showMonthDropdown: t.bool,
    showMonthYearDropdown: t.bool,
    showWeekNumbers: t.bool,
    showYearDropdown: t.bool,
    forceShowMonthNavigation: t.bool,
    showDisabledMonthNavigation: t.bool,
    startDate: t.object,
    startOpen: t.bool,
    tabIndex: t.number,
    timeCaption: t.string,
    title: t.string,
    todayButton: t.string,
    useWeekdaysShort: t.bool,
    formatWeekDay: t.func,
    utcOffset: t.number,
    value: t.string,
    weekLabel: t.string,
    withPortal: t.bool,
    yearDropdownItemNumber: t.number,
    shouldCloseOnSelect: t.bool,
    showTimeSelect: t.bool,
    showTimeSelectOnly: t.bool,
    timeFormat: t.string,
    timeIntervals: t.number,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    useShortMonthInDropdown: t.bool,
    clearButtonTitle: t.string,
    calendar: t.string,
    previousMonthButtonLabel: t.string,
    nextMonthButtonLabel: t.string
  };
  var Qe = "input",
    Xe = "navigate";
  (e.default = r),
    (e.CalendarContainer = Pe),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
