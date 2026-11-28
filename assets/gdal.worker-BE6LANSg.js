(function() {
	var t = Object.create, e = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, a = Object.getPrototypeOf, o = Object.prototype.hasOwnProperty, i = (i, s, c) => (c = null != i ? t(a(i)) : {}, ((t, a, i, s) => {
		if (a && "object" == typeof a || "function" == typeof a) for (var c, u = n(a), l = 0, f = u.length; l < f; l++) c = u[l], o.call(t, c) || void 0 === c || e(t, c, {
			get: ((t) => a[t]).bind(null, c),
			enumerable: !(s = r(a, c)) || s.enumerable
		});
		return t;
	})(!s && i && i.__esModule && o.call(i, "default") ? c : e(c, "default", {
		value: i,
		enumerable: !0
	}), i)), c = i(((t, e) => () => (e || (t((e = { exports: {} }).exports, e, e.exports), t = null), e.exports))((t, e, r) => {
		var n = r, a = function() {
			"use strict";
			function t(t, e) {
				var r, n = Object.keys(t);
				return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable;
				})), n.push.apply(n, r)), n;
			}
			function e(e) {
				for (var r = 1; r < arguments.length; r++) {
					var n = null != arguments[r] ? arguments[r] : {};
					r % 2 ? t(Object(n), !0).forEach(function(t) {
						var r = e, a = n[t];
						(t = s(t)) in r ? Object.defineProperty(r, t, {
							value: a,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : r[t] = a;
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
					});
				}
				return e;
			}
			function r(t) {
				return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t;
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
				})(t);
			}
			function n(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t;
				}(t) || function(t, e) {
					var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null != r) {
						var n, a, o, i, s = [], c = !0, u = !1;
						try {
							if (o = (r = r.call(t)).next, 0 === e) {
								if (Object(r) !== r) return;
								c = !1;
							} else for (; !(c = (n = o.call(r)).done) && (s.push(n.value), s.length !== e); c = !0);
						} catch (t) {
							u = !0, a = t;
						} finally {
							try {
								if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return;
							} finally {
								if (u) throw a;
							}
						}
						return s;
					}
				}(t, e) || o(t, e) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}();
			}
			function a(t) {
				return function(t) {
					if (Array.isArray(t)) return i(t);
				}(t) || function(t) {
					if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
				}(t) || o(t) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}();
			}
			function o(t, e) {
				var r;
				if (t) return "string" == typeof t ? i(t, e) : "Map" === (r = "Object" === (r = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : r) || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(t, e) : void 0;
			}
			function i(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
				return n;
			}
			function s(t) {
				return t = function(t) {
					if ("object" != typeof t || null === t) return t;
					var e = t[Symbol.toPrimitive];
					if (void 0 === e) return String(t);
					if ("object" != typeof (e = e.call(t, "string"))) return e;
					throw new TypeError("@@toPrimitive must return a primitive value.");
				}(t), "symbol" == typeof t ? t : String(t);
			}
			function c(t) {
				return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
			}
			function u(t) {
				var e, r;
				return t.__esModule ? t : ("function" == typeof (e = t.default) ? (r = function t() {
					return this instanceof t ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
				}).prototype = e.prototype : r = {}, Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(e) {
					var n = Object.getOwnPropertyDescriptor(t, e);
					Object.defineProperty(r, e, n.get ? n : {
						enumerable: !0,
						get: function() {
							return t[e];
						}
					});
				}), r);
			}
			var l, f = u(Object.freeze({
				__proto__: null,
				default: {}
			})), d = "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0), h = { exports: {} }, m = u(Object.freeze({
				__proto__: null,
				default: {}
			})), p = u(Object.freeze({
				__proto__: null,
				default: {}
			})), g = h;
			l = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, "undefined" != typeof __filename && (l = l || __filename), g.exports = function() {
				var t, e, n, a, o, i, s, c, u, d, h = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, g = h;
				function y() {
					function t(t, e) {
						if (!t) throw e + (/* @__PURE__ */ new Error()).stack;
					}
					function e(t, e, r) {
						this.start = t, this.end = e, this.audio = r;
					}
					g.FS_createPath("/", "usr", !0, !0), g.FS_createPath("/usr", "share", !0, !0), g.FS_createPath("/usr/share", "gdal", !0, !0), g.FS_createPath("/usr/share", "proj", !0, !0), e.prototype = {
						requests: {},
						open: function(t, e) {
							this.name = e, this.requests[e] = this, g.addRunDependency("fp ".concat(this.name));
						},
						send: function() {},
						onload: function() {
							var t = this.byteArray.subarray(this.start, this.end);
							this.finish(t);
						},
						finish: function(t) {
							g.FS_createDataFile(this.name, null, t, !0, !0, !0), g.removeRunDependency("fp ".concat(this.name)), this.requests[this.name] = null;
						}
					};
					for (var r = n.files, a = 0; a < r.length; ++a) new e(r[a].start, r[a].end, r[a].audio || 0).open("GET", r[a].filename);
					function o(r) {
						t(r, "Loading data file failed."), t(r.constructor.name === ArrayBuffer.name, "bad input to processPackageData"), r = new Uint8Array(r);
						for (var a = (e.prototype.byteArray = r, n.files), o = 0; o < a.length; ++o) e.prototype.requests[a[o].filename].onload();
						g.removeRunDependency("datafile_/home/bugra/Documents/MiniProject/gdal3.js/build/package/gdal3WebAssembly.data");
					}
					g.addRunDependency("datafile_/home/bugra/Documents/MiniProject/gdal3.js/build/package/gdal3WebAssembly.data"), g.preloadResults || (g.preloadResults = {}), g.preloadResults["/home/bugra/Documents/MiniProject/gdal3.js/build/package/gdal3WebAssembly.data"] = { fromCache: !1 }, d ? (o(d), d = null) : u = o;
				}
				g.ready = new Promise(function(r, n) {
					t = r, e = n;
				}), g.expectedDataFileDownloads || (g.expectedDataFileDownloads = 0), g.expectedDataFileDownloads++, g.ENVIRONMENT_IS_PTHREAD || g.$ww || (n = {
					files: [
						{
							filename: "/usr/share/gdal/GDALLogoBW.svg",
							start: 0,
							end: 13022
						},
						{
							filename: "/usr/share/gdal/GDALLogoColor.svg",
							start: 13022,
							end: 25327
						},
						{
							filename: "/usr/share/gdal/GDALLogoGS.svg",
							start: 25327,
							end: 37632
						},
						{
							filename: "/usr/share/gdal/LICENSE.TXT",
							start: 37632,
							end: 59473
						},
						{
							filename: "/usr/share/gdal/bag_template.xml",
							start: 59473,
							end: 68493
						},
						{
							filename: "/usr/share/gdal/cubewerx_extra.wkt",
							start: 68493,
							end: 80470
						},
						{
							filename: "/usr/share/gdal/default.rsc",
							start: 80470,
							end: 544102
						},
						{
							filename: "/usr/share/gdal/ecw_cs.wkt",
							start: 544102,
							end: 908134
						},
						{
							filename: "/usr/share/gdal/eedaconf.json",
							start: 908134,
							end: 908545
						},
						{
							filename: "/usr/share/gdal/epsg.wkt",
							start: 908545,
							end: 908572
						},
						{
							filename: "/usr/share/gdal/esri_StatePlane_extra.wkt",
							start: 908572,
							end: 1241118
						},
						{
							filename: "/usr/share/gdal/gdalicon.png",
							start: 1241118,
							end: 1243139
						},
						{
							filename: "/usr/share/gdal/gdalinfo_output.schema.json",
							start: 1243139,
							end: 1251130
						},
						{
							filename: "/usr/share/gdal/gdalmdiminfo_output.schema.json",
							start: 1251130,
							end: 1257673
						},
						{
							filename: "/usr/share/gdal/gdalvrt.xsd",
							start: 1257673,
							end: 1291600
						},
						{
							filename: "/usr/share/gdal/gfs.xsd",
							start: 1291600,
							end: 1308069
						},
						{
							filename: "/usr/share/gdal/gml_registry.xml",
							start: 1308069,
							end: 1314712
						},
						{
							filename: "/usr/share/gdal/gml_registry.xsd",
							start: 1314712,
							end: 1321174
						},
						{
							filename: "/usr/share/gdal/gmlasconf.xml",
							start: 1321174,
							end: 1328606
						},
						{
							filename: "/usr/share/gdal/gmlasconf.xsd",
							start: 1328606,
							end: 1377260
						},
						{
							filename: "/usr/share/gdal/grib2_center.csv",
							start: 1377260,
							end: 1381431
						},
						{
							filename: "/usr/share/gdal/grib2_process.csv",
							start: 1381431,
							end: 1386357
						},
						{
							filename: "/usr/share/gdal/grib2_subcenter.csv",
							start: 1386357,
							end: 1388685
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_0.csv",
							start: 1388685,
							end: 1399048
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_1.csv",
							start: 1399048,
							end: 1415553
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_13.csv",
							start: 1415553,
							end: 1425149
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_14.csv",
							start: 1425149,
							end: 1434700
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_15.csv",
							start: 1434700,
							end: 1444546
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_16.csv",
							start: 1444546,
							end: 1454217
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_17.csv",
							start: 1454217,
							end: 1455140
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_18.csv",
							start: 1455140,
							end: 1465364
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_19.csv",
							start: 1465364,
							end: 1477238
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_190.csv",
							start: 1477238,
							end: 1486745
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_191.csv",
							start: 1486745,
							end: 1496365
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_2.csv",
							start: 1496365,
							end: 1507257
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_20.csv",
							start: 1507257,
							end: 1519548
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_21.csv",
							start: 1519548,
							end: 1529810
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_3.csv",
							start: 1529810,
							end: 1540368
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_4.csv",
							start: 1540368,
							end: 1550679
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_5.csv",
							start: 1550679,
							end: 1560505
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_6.csv",
							start: 1560505,
							end: 1572147
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_0_7.csv",
							start: 1572147,
							end: 1582639
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_10_0.csv",
							start: 1582639,
							end: 1594461
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_10_1.csv",
							start: 1594461,
							end: 1604086
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_10_191.csv",
							start: 1604086,
							end: 1613720
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_10_2.csv",
							start: 1613720,
							end: 1623832
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_10_3.csv",
							start: 1623832,
							end: 1633821
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_10_4.csv",
							start: 1633821,
							end: 1644637
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_1_0.csv",
							start: 1644637,
							end: 1654779
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_1_1.csv",
							start: 1654779,
							end: 1664434
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_1_2.csv",
							start: 1664434,
							end: 1674232
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_20_0.csv",
							start: 1674232,
							end: 1683875
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_20_1.csv",
							start: 1683875,
							end: 1693726
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_20_2.csv",
							start: 1693726,
							end: 1703232
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_2_0.csv",
							start: 1703232,
							end: 1715898
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_2_3.csv",
							start: 1715898,
							end: 1726532
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_2_4.csv",
							start: 1726532,
							end: 1737760
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_2_5.csv",
							start: 1737760,
							end: 1747273
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_2_6.csv",
							start: 1747273,
							end: 1756872
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_3_0.csv",
							start: 1756872,
							end: 1767823
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_3_1.csv",
							start: 1767823,
							end: 1778486
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_3_2.csv",
							start: 1778486,
							end: 1782319
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_3_3.csv",
							start: 1782319,
							end: 1783103
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_3_4.csv",
							start: 1783103,
							end: 1784154
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_3_5.csv",
							start: 1784154,
							end: 1785074
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_3_6.csv",
							start: 1785074,
							end: 1785893
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_0.csv",
							start: 1785893,
							end: 1795446
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_1.csv",
							start: 1795446,
							end: 1805132
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_10.csv",
							start: 1805132,
							end: 1814833
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_2.csv",
							start: 1814833,
							end: 1824493
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_3.csv",
							start: 1824493,
							end: 1834215
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_4.csv",
							start: 1834215,
							end: 1843905
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_5.csv",
							start: 1843905,
							end: 1853400
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_6.csv",
							start: 1853400,
							end: 1863033
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_7.csv",
							start: 1863033,
							end: 1872589
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_8.csv",
							start: 1872589,
							end: 1882275
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_4_9.csv",
							start: 1882275,
							end: 1891811
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_local_Canada.csv",
							start: 1891811,
							end: 1892144
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_local_HPC.csv",
							start: 1892144,
							end: 1892231
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_local_MRMS.csv",
							start: 1892231,
							end: 1907818
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_local_NCEP.csv",
							start: 1907818,
							end: 1935795
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_local_NDFD.csv",
							start: 1935795,
							end: 1938454
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_2_local_index.csv",
							start: 1938454,
							end: 1938705
						},
						{
							filename: "/usr/share/gdal/grib2_table_4_5.csv",
							start: 1938705,
							end: 1948718
						},
						{
							filename: "/usr/share/gdal/grib2_table_versions.csv",
							start: 1948718,
							end: 1948756
						},
						{
							filename: "/usr/share/gdal/gt_datum.csv",
							start: 1948756,
							end: 1964560
						},
						{
							filename: "/usr/share/gdal/gt_ellips.csv",
							start: 1964560,
							end: 1966279
						},
						{
							filename: "/usr/share/gdal/header.dxf",
							start: 1966279,
							end: 1972851
						},
						{
							filename: "/usr/share/gdal/inspire_cp_BasicPropertyUnit.gfs",
							start: 1972851,
							end: 1974591
						},
						{
							filename: "/usr/share/gdal/inspire_cp_CadastralBoundary.gfs",
							start: 1974591,
							end: 1976241
						},
						{
							filename: "/usr/share/gdal/inspire_cp_CadastralParcel.gfs",
							start: 1976241,
							end: 1978691
						},
						{
							filename: "/usr/share/gdal/inspire_cp_CadastralZoning.gfs",
							start: 1978691,
							end: 1983503
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_AdmArea.gfs",
							start: 1983503,
							end: 1985143
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_AdmBdry.gfs",
							start: 1985143,
							end: 1986525
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_AdmPt.gfs",
							start: 1986525,
							end: 1988158
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_BldA.gfs",
							start: 1988158,
							end: 1989659
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_BldL.gfs",
							start: 1989659,
							end: 1991162
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_Cntr.gfs",
							start: 1991162,
							end: 1992663
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_CommBdry.gfs",
							start: 1992663,
							end: 1994047
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_CommPt.gfs",
							start: 1994047,
							end: 1995682
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_Cstline.gfs",
							start: 1995682,
							end: 1997191
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_ElevPt.gfs",
							start: 1997191,
							end: 1998691
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_GCP.gfs",
							start: 1998691,
							end: 2001214
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_LeveeEdge.gfs",
							start: 2001214,
							end: 2002600
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_RailCL.gfs",
							start: 2002600,
							end: 2004107
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_RdASL.gfs",
							start: 2004107,
							end: 2005358
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_RdArea.gfs",
							start: 2005358,
							end: 2006873
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_RdCompt.gfs",
							start: 2006873,
							end: 2008519
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_RdEdg.gfs",
							start: 2008519,
							end: 2010161
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_RdMgtBdry.gfs",
							start: 2010161,
							end: 2011547
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_RdSgmtA.gfs",
							start: 2011547,
							end: 2013191
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_RvrMgtBdry.gfs",
							start: 2013191,
							end: 2014579
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_SBAPt.gfs",
							start: 2014579,
							end: 2015954
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_SBArea.gfs",
							start: 2015954,
							end: 2017461
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_SBBdry.gfs",
							start: 2017461,
							end: 2018714
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_WA.gfs",
							start: 2018714,
							end: 2020211
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_WL.gfs",
							start: 2020211,
							end: 2021710
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_WStrA.gfs",
							start: 2021710,
							end: 2023213
						},
						{
							filename: "/usr/share/gdal/jpfgdgml_WStrL.gfs",
							start: 2023213,
							end: 2024718
						},
						{
							filename: "/usr/share/gdal/netcdf_config.xsd",
							start: 2024718,
							end: 2032209
						},
						{
							filename: "/usr/share/gdal/nitf_spec.xml",
							start: 2032209,
							end: 2219654
						},
						{
							filename: "/usr/share/gdal/nitf_spec.xsd",
							start: 2219654,
							end: 2228162
						},
						{
							filename: "/usr/share/gdal/ogrinfo_output.schema.json",
							start: 2228162,
							end: 2239289
						},
						{
							filename: "/usr/share/gdal/ogrvrt.xsd",
							start: 2239289,
							end: 2265210
						},
						{
							filename: "/usr/share/gdal/osmconf.ini",
							start: 2265210,
							end: 2270610
						},
						{
							filename: "/usr/share/gdal/ozi_datum.csv",
							start: 2270610,
							end: 2279092
						},
						{
							filename: "/usr/share/gdal/ozi_ellips.csv",
							start: 2279092,
							end: 2280441
						},
						{
							filename: "/usr/share/gdal/pci_datum.txt",
							start: 2280441,
							end: 2315535
						},
						{
							filename: "/usr/share/gdal/pci_ellips.txt",
							start: 2315535,
							end: 2319050
						},
						{
							filename: "/usr/share/gdal/pdfcomposition.xsd",
							start: 2319050,
							end: 2353384
						},
						{
							filename: "/usr/share/gdal/pds4_template.xml",
							start: 2353384,
							end: 2356817
						},
						{
							filename: "/usr/share/gdal/plscenesconf.json",
							start: 2356817,
							end: 2398189
						},
						{
							filename: "/usr/share/gdal/ruian_vf_ob_v1.gfs",
							start: 2398189,
							end: 2444924
						},
						{
							filename: "/usr/share/gdal/ruian_vf_st_uvoh_v1.gfs",
							start: 2444924,
							end: 2447520
						},
						{
							filename: "/usr/share/gdal/ruian_vf_st_v1.gfs",
							start: 2447520,
							end: 2493420
						},
						{
							filename: "/usr/share/gdal/ruian_vf_v1.gfs",
							start: 2493420,
							end: 2560672
						},
						{
							filename: "/usr/share/gdal/s57agencies.csv",
							start: 2560672,
							end: 2573976
						},
						{
							filename: "/usr/share/gdal/s57attributes.csv",
							start: 2573976,
							end: 2593977
						},
						{
							filename: "/usr/share/gdal/s57expectedinput.csv",
							start: 2593977,
							end: 2614862
						},
						{
							filename: "/usr/share/gdal/s57objectclasses.csv",
							start: 2614862,
							end: 2668287
						},
						{
							filename: "/usr/share/gdal/seed_2d.dgn",
							start: 2668287,
							end: 2677503
						},
						{
							filename: "/usr/share/gdal/seed_3d.dgn",
							start: 2677503,
							end: 2679551
						},
						{
							filename: "/usr/share/gdal/stateplane.csv",
							start: 2679551,
							end: 2689911
						},
						{
							filename: "/usr/share/gdal/template_tiles.mapml",
							start: 2689911,
							end: 2691858
						},
						{
							filename: "/usr/share/gdal/tms_LINZAntarticaMapTileGrid.json",
							start: 2691858,
							end: 2695973
						},
						{
							filename: "/usr/share/gdal/tms_MapML_APSTILE.json",
							start: 2695973,
							end: 2702246
						},
						{
							filename: "/usr/share/gdal/tms_MapML_CBMTILE.json",
							start: 2702246,
							end: 2710038
						},
						{
							filename: "/usr/share/gdal/tms_NZTM2000.json",
							start: 2710038,
							end: 2715303
						},
						{
							filename: "/usr/share/gdal/trailer.dxf",
							start: 2715303,
							end: 2717578
						},
						{
							filename: "/usr/share/gdal/vdv452.xml",
							start: 2717578,
							end: 2743394
						},
						{
							filename: "/usr/share/gdal/vdv452.xsd",
							start: 2743394,
							end: 2746248
						},
						{
							filename: "/usr/share/gdal/vicar.json",
							start: 2746248,
							end: 2749858
						},
						{
							filename: "/usr/share/proj/CH",
							start: 2749858,
							end: 2750955
						},
						{
							filename: "/usr/share/proj/GL27",
							start: 2750955,
							end: 2751683
						},
						{
							filename: "/usr/share/proj/ITRF2000",
							start: 2751683,
							end: 2753782
						},
						{
							filename: "/usr/share/proj/ITRF2008",
							start: 2753782,
							end: 2759464
						},
						{
							filename: "/usr/share/proj/ITRF2014",
							start: 2759464,
							end: 2762953
						},
						{
							filename: "/usr/share/proj/deformation_model.schema.json",
							start: 2762953,
							end: 2780624
						},
						{
							filename: "/usr/share/proj/nad.lst",
							start: 2780624,
							end: 2787009
						},
						{
							filename: "/usr/share/proj/nad27",
							start: 2787009,
							end: 2806544
						},
						{
							filename: "/usr/share/proj/nad83",
							start: 2806544,
							end: 2823137
						},
						{
							filename: "/usr/share/proj/other.extra",
							start: 2823137,
							end: 2827052
						},
						{
							filename: "/usr/share/proj/proj.db",
							start: 2827052,
							end: 11539244
						},
						{
							filename: "/usr/share/proj/proj.ini",
							start: 11539244,
							end: 11541351
						},
						{
							filename: "/usr/share/proj/projjson.schema.json",
							start: 11541351,
							end: 11579663
						},
						{
							filename: "/usr/share/proj/triangulation.schema.json",
							start: 11579663,
							end: 11588066
						},
						{
							filename: "/usr/share/proj/world",
							start: 11588066,
							end: 11595145
						}
					],
					remote_package_size: 11595145
				}, "object" === ("undefined" == typeof window ? "undefined" : r(window)) ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" == typeof process && "undefined" != typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/"), D = "gdal3WebAssembly.data", "function" != typeof g.locateFilePackage || g.locateFile || (g.locateFile = g.locateFilePackage, B("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")), D = g.locateFile ? g.locateFile(D, "") : D, S = n.remote_package_size, u = null, (d = g.getPreloadedPackage ? g.getPreloadedPackage(D, S) : null) || (a = D, o = S, i = function(t) {
					u ? (u(t), u = null) : d = t;
				}, s = function(t) {
					console.error("package error:", t);
				}, "object" === ("undefined" == typeof process ? "undefined" : r(process)) && "object" === r(process.versions) && "string" == typeof process.versions.node ? f.readFile(a, function(t, e) {
					t ? s(t) : i(e.buffer);
				}) : ((c = new XMLHttpRequest()).open("GET", a, !0), c.responseType = "arraybuffer", c.onprogress = function(t) {
					var e = a, r = o;
					if (t.total && (r = t.total), t.loaded) {
						c.addedTotal ? g.dataFileDownloads[e].loaded = t.loaded : (c.addedTotal = !0, g.dataFileDownloads || (g.dataFileDownloads = {}), g.dataFileDownloads[e] = {
							loaded: t.loaded,
							total: r
						});
						var n, i = 0, s = 0, u = 0;
						for (n in g.dataFileDownloads) {
							var l = g.dataFileDownloads[n];
							i += l.total, s += l.loaded, u++;
						}
						i = Math.ceil(i * g.expectedDataFileDownloads / u), g.setStatus && g.setStatus("Downloading data... (".concat(s, "/").concat(i, ")"));
					} else g.dataFileDownloads || g.setStatus && g.setStatus("Downloading data...");
				}, c.onerror = function(t) {
					throw new Error("NetworkError for: " + a);
				}, c.onload = function(t) {
					if (!(200 == c.status || 304 == c.status || 206 == c.status || 0 == c.status && c.response)) throw new Error(c.statusText + " : " + c.responseURL);
					var e = c.response;
					i(e);
				}, c.send(null))), g.calledRun ? y() : (g.preRun || (g.preRun = []), g.preRun.push(y)));
				var _, w, E, v, b, D = Object.assign({}, g), A = "./this.program", T = function(t, e) {
					throw e;
				}, L = "object" == ("undefined" == typeof window ? "undefined" : r(window)), G = "function" == typeof importScripts, O = "object" == ("undefined" == typeof process ? "undefined" : r(process)) && "object" == r(process.versions) && "string" == typeof process.versions.node, S = "";
				O ? (_ = f, w = m, S = G ? w.dirname(S) + "/" : __dirname + "/", E = function(t, e) {
					return t = rt(t) ? new URL(t) : w.normalize(t), _.readFileSync(t, e ? void 0 : "utf8");
				}, v = function(t) {
					return (t = E(t, !0)).buffer ? t : new Uint8Array(t);
				}, b = function(t, e, r) {
					var n = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
					t = rt(t) ? new URL(t) : w.normalize(t), _.readFile(t, n ? void 0 : "utf8", function(t, a) {
						t ? r(t) : e(n ? a.buffer : a);
					});
				}, !g.thisProgram && 1 < process.argv.length && (A = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), T = function(t, e) {
					throw process.exitCode = t, e;
				}, g.inspect = function() {
					return "[Emscripten Module object]";
				}) : (L || G) && (G ? S = self.location.href : "undefined" != typeof document && document.currentScript && (S = document.currentScript.src), S = 0 !== (S = l || S).indexOf("blob:") ? S.substr(0, S.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", E = function(t) {
					var e = new XMLHttpRequest();
					return e.open("GET", t, !1), e.send(null), e.responseText;
				}, G && (v = function(t) {
					var e = new XMLHttpRequest();
					return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response);
				}), b = function(t, e, r) {
					var n = new XMLHttpRequest();
					n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function() {
						200 == n.status || 0 == n.status && n.response ? e(n.response) : r();
					}, n.onerror = r, n.send(null);
				});
				var C, F, N, j, P, R, k, M, I, x = g.print || console.log.bind(console), B = g.printErr || console.error.bind(console), U = (Object.assign(g, D), g.arguments && g.arguments, g.thisProgram && (A = g.thisProgram), g.quit && (T = g.quit), g.wasmBinary && (C = g.wasmBinary), "object" != ("undefined" == typeof WebAssembly ? "undefined" : r(WebAssembly)) && Q("no native wasm support detected"), !1);
				function K(t, e) {
					t || Q(e);
				}
				function z() {
					var t = F.buffer;
					g.HEAP8 = N = new Int8Array(t), g.HEAP16 = P = new Int16Array(t), g.HEAPU8 = j = new Uint8Array(t), g.HEAPU16 = new Uint16Array(t), g.HEAP32 = R = new Int32Array(t), g.HEAPU32 = k = new Uint32Array(t), g.HEAPF32 = M = new Float32Array(t), g.HEAPF64 = I = new Float64Array(t);
				}
				var W = [], V = [], Y = [], H = 0, q = null;
				function X(t) {
					var e;
					H++, null != (e = g.monitorRunDependencies) && e.call(g, H);
				}
				function $(t) {
					var e;
					H--, null != (e = g.monitorRunDependencies) && e.call(g, H), 0 == H && q && (e = q, q = null, e());
				}
				function Q(t) {
					null != (r = g.onAbort) && r.call(g, t), B(t = "Aborted(" + t + ")"), U = !0, t += ". Build with -sASSERTIONS for more info.";
					var r = new WebAssembly.RuntimeError(t);
					throw e(r), r;
				}
				var J, Z, tt, et = function(t) {
					return t.startsWith("data:application/octet-stream;base64,");
				}, rt = function(t) {
					return t.startsWith("file://");
				};
				function nt(t) {
					if (t == J && C) return new Uint8Array(C);
					if (v) return v(t);
					throw "both async and sync fetching of the wasm failed";
				}
				function at(t, e, r) {
					return function(t) {
						if (!C && (L || G)) {
							if ("function" == typeof fetch && !rt(t)) return fetch(t, { credentials: "same-origin" }).then(function(e) {
								if (e.ok) return e.arrayBuffer();
								throw "failed to load wasm binary file at '" + t + "'";
							}).catch(function() {
								return nt(t);
							});
							if (b) return new Promise(function(e, r) {
								b(t, function(t) {
									return e(new Uint8Array(t));
								}, r);
							});
						}
						return Promise.resolve().then(function() {
							return nt(t);
						});
					}(t).then(function(t) {
						return WebAssembly.instantiate(t, e);
					}).then(function(t) {
						return t;
					}).then(r, function(t) {
						B("failed to asynchronously prepare wasm: ".concat(t)), Q(t);
					});
				}
				function ot(t) {
					this.name = "ExitStatus", this.message = "Program terminated with exit(".concat(t, ")"), this.status = t;
				}
				function it(t) {
					for (; 0 < t.length;) t.shift()(g);
				}
				et(J = "gdal3WebAssembly.wasm") || (qt = J, J = g.locateFile ? g.locateFile(qt, S) : S + qt);
				var st = g.noExitRuntime || !0;
				function ct(t, e, r) {
					for (var n = e + r, a = e; t[a] && !(n <= a);) ++a;
					if (16 < a - e && t.buffer && dt) return dt.decode(t.subarray(e, a));
					for (var o = ""; e < a;) {
						var i, s, c = t[e++];
						128 & c ? (s = 63 & t[e++], 192 == (224 & c) ? o += String.fromCharCode((31 & c) << 6 | s) : (i = 63 & t[e++], (c = 224 == (240 & c) ? (15 & c) << 12 | s << 6 | i : (7 & c) << 18 | s << 12 | i << 6 | 63 & t[e++]) < 65536 ? o += String.fromCharCode(c) : (s = c - 65536, o += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s)))) : o += String.fromCharCode(c);
					}
					return o;
				}
				function ut(t, e) {
					return t ? ct(j, t, e) : "";
				}
				function lt(t) {
					var e = ht[t];
					return e || (t >= ht.length && (ht.length = t + 1), ht[t] = e = ft.get(t)), e;
				}
				var ft, dt = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, ht = [], mt = [], pt = 0, gt = 0;
				function yt(t) {
					this.excPtr = t, this.ptr = t - 24, this.set_type = function(t) {
						k[this.ptr + 4 >> 2] = t;
					}, this.get_type = function() {
						return k[this.ptr + 4 >> 2];
					}, this.set_destructor = function(t) {
						k[this.ptr + 8 >> 2] = t;
					}, this.get_destructor = function() {
						return k[this.ptr + 8 >> 2];
					}, this.set_caught = function(t) {
						N[this.ptr + 12 | 0] = t = t ? 1 : 0;
					}, this.get_caught = function() {
						return 0 != N[this.ptr + 12 | 0];
					}, this.set_rethrown = function(t) {
						N[this.ptr + 13 | 0] = t = t ? 1 : 0;
					}, this.get_rethrown = function() {
						return 0 != N[this.ptr + 13 | 0];
					}, this.init = function(t, e) {
						this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(e);
					}, this.set_adjusted_ptr = function(t) {
						k[this.ptr + 16 >> 2] = t;
					}, this.get_adjusted_ptr = function() {
						return k[this.ptr + 16 >> 2];
					}, this.get_exception_ptr = function() {
						var t;
						return Te(this.get_type()) ? k[this.excPtr >> 2] : 0 !== (t = this.get_adjusted_ptr()) ? t : this.excPtr;
					};
				}
				function _t(t) {
					var e = gt;
					if (!e) return _e(0), 0;
					var r = new yt(e), n = (r.set_adjusted_ptr(e), r.get_type());
					if (n) {
						for (var a in t) {
							if (0 === (a = t[a]) || a === n) break;
							var o = r.ptr + 16;
							if (Ae(a, n, o)) return _e(a), e;
						}
						_e(n);
					} else _e(0);
					return e;
				}
				var wt = {
					isAbs: function(t) {
						return "/" === t.charAt(0);
					},
					splitPath: function(t) {
						return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(t).slice(1);
					},
					normalizeArray: function(t, e) {
						for (var r = 0, n = t.length - 1; 0 <= n; n--) {
							var a = t[n];
							"." === a ? t.splice(n, 1) : ".." === a ? (t.splice(n, 1), r++) : r && (t.splice(n, 1), r--);
						}
						if (e) for (; r; r--) t.unshift("..");
						return t;
					},
					normalize: function(t) {
						var e = wt.isAbs(t), r = "/" === t.substr(-1);
						return (t = (t = wt.normalizeArray(t.split("/").filter(function(t) {
							return !!t;
						}), !e).join("/")) || e ? t : ".") && r && (t += "/"), (e ? "/" : "") + t;
					},
					dirname: function(t) {
						var e = (t = wt.splitPath(t))[0];
						return t = t[1], e || t ? e + (t = t && t.substr(0, t.length - 1)) : ".";
					},
					basename: function(t) {
						var e;
						return "/" === t ? "/" : -1 === (e = (t = (t = wt.normalize(t)).replace(/\/$/, "")).lastIndexOf("/")) ? t : t.substr(e + 1);
					},
					join: function() {
						var t = Array.prototype.slice.call(arguments);
						return wt.normalize(t.join("/"));
					},
					join2: function(t, e) {
						return wt.normalize(t + "/" + e);
					}
				}, Et = function(t) {
					return (Et = function() {
						if ("object" == ("undefined" == typeof crypto ? "undefined" : r(crypto)) && "function" == typeof crypto.getRandomValues) return function(t) {
							return crypto.getRandomValues(t);
						};
						if (O) try {
							var e, n = p;
							return n.randomFillSync ? function(t) {
								return n.randomFillSync(t);
							} : (e = n.randomBytes, function(t) {
								return t.set(e(t.byteLength)), t;
							});
						} catch (t) {}
						Q("initRandomDevice");
					}())(t);
				}, vt = {
					resolve: function() {
						for (var t = "", e = !1, r = arguments.length - 1; -1 <= r && !e; r--) {
							var n = 0 <= r ? arguments[r] : Pt.cwd();
							if ("string" != typeof n) throw new TypeError("Arguments to path.resolve must be strings");
							if (!n) return "";
							t = n + "/" + t, e = wt.isAbs(n);
						}
						return (e ? "/" : "") + (t = wt.normalizeArray(t.split("/").filter(function(t) {
							return !!t;
						}), !e).join("/")) || ".";
					},
					relative: function(t, e) {
						function r(t) {
							for (var e = 0; e < t.length && "" === t[e]; e++);
							for (var r = t.length - 1; 0 <= r && "" === t[r]; r--);
							return r < e ? [] : t.slice(e, r - e + 1);
						}
						t = vt.resolve(t).substr(1), e = vt.resolve(e).substr(1);
						for (var n = r(t.split("/")), a = r(e.split("/")), o = Math.min(n.length, a.length), i = o, s = 0; s < o; s++) if (n[s] !== a[s]) {
							i = s;
							break;
						}
						var c = [];
						for (s = i; s < n.length; s++) c.push("..");
						return (c = c.concat(a.slice(i))).join("/");
					}
				}, bt = [], Dt = function(t) {
					for (var e = 0, r = 0; r < t.length; ++r) {
						var n = t.charCodeAt(r);
						n <= 127 ? e++ : n <= 2047 ? e += 2 : 55296 <= n && n <= 57343 ? (e += 4, ++r) : e += 3;
					}
					return e;
				}, At = function(t, e, r, n) {
					if (!(0 < n)) return 0;
					for (var a = r, o = r + n - 1, i = 0; i < t.length; ++i) {
						var s = t.charCodeAt(i);
						if ((s = 55296 <= s && s <= 57343 ? 65536 + ((1023 & s) << 10) | 1023 & t.charCodeAt(++i) : s) <= 127) {
							if (o <= r) break;
							e[r++] = s;
						} else {
							if (s <= 2047) {
								if (o <= r + 1) break;
								e[r++] = 192 | s >> 6;
							} else {
								if (s <= 65535) {
									if (o <= r + 2) break;
									e[r++] = 224 | s >> 12;
								} else {
									if (o <= r + 3) break;
									e[r++] = 240 | s >> 18, e[r++] = 128 | s >> 12 & 63;
								}
								e[r++] = 128 | s >> 6 & 63;
							}
							e[r++] = 128 | 63 & s;
						}
					}
					return e[r] = 0, r - a;
				};
				function Tt(t, e, r) {
					return r = 0 < r ? r : Dt(t) + 1, r = new Array(r), t = At(t, r, 0, r.length), e && (r.length = t), r;
				}
				function Lt(t) {
					r = t, e = 65536, t = Math.ceil(r / e) * e;
					var e, r = ge(65536, t);
					return r ? (e = r, r = t, j.fill(0, e, e + r), e) : 0;
				}
				function Gt(t, e) {
					var r = 0;
					return t && (r |= 365), e && (r |= 146), r;
				}
				var Ot = {
					ttys: [],
					init: function() {},
					shutdown: function() {},
					register: function(t, e) {
						Ot.ttys[t] = {
							input: [],
							output: [],
							ops: e
						}, Pt.registerDevice(t, Ot.stream_ops);
					},
					stream_ops: {
						open: function(t) {
							var e = Ot.ttys[t.node.rdev];
							if (!e) throw new Pt.ErrnoError(43);
							t.tty = e, t.seekable = !1;
						},
						close: function(t) {
							t.tty.ops.fsync(t.tty);
						},
						fsync: function(t) {
							t.tty.ops.fsync(t.tty);
						},
						read: function(t, e, r, n, a) {
							if (!t.tty || !t.tty.ops.get_char) throw new Pt.ErrnoError(60);
							for (var o, i = 0, s = 0; s < n; s++) {
								try {
									o = t.tty.ops.get_char(t.tty);
								} catch (t) {
									throw new Pt.ErrnoError(29);
								}
								if (void 0 === o && 0 === i) throw new Pt.ErrnoError(6);
								if (null == o) break;
								i++, e[r + s] = o;
							}
							return i && (t.node.timestamp = Date.now()), i;
						},
						write: function(t, e, r, n, a) {
							if (!t.tty || !t.tty.ops.put_char) throw new Pt.ErrnoError(60);
							try {
								for (var o = 0; o < n; o++) t.tty.ops.put_char(t.tty, e[r + o]);
							} catch (t) {
								throw new Pt.ErrnoError(29);
							}
							return n && (t.node.timestamp = Date.now()), o;
						}
					},
					default_tty_ops: {
						get_char: function(t) {
							if (!bt.length) {
								var e = null;
								if (O) {
									var r = Buffer.alloc(256), n = 0, a = process.stdin.fd;
									try {
										n = _.readSync(a, r);
									} catch (t) {
										if (!t.toString().includes("EOF")) throw t;
										n = 0;
									}
									e = 0 < n ? r.slice(0, n).toString("utf-8") : null;
								} else "undefined" != typeof window && "function" == typeof window.prompt ? null !== (e = window.prompt("Input: ")) && (e += "\n") : "function" == typeof readline && null !== (e = readline()) && (e += "\n");
								if (!e) return null;
								bt = Tt(e, !0);
							}
							return bt.shift();
						},
						put_char: function(t, e) {
							null === e || 10 === e ? (x(ct(t.output, 0)), t.output = []) : 0 != e && t.output.push(e);
						},
						fsync: function(t) {
							t.output && 0 < t.output.length && (x(ct(t.output, 0)), t.output = []);
						},
						ioctl_tcgets: function(t) {
							return {
								c_iflag: 25856,
								c_oflag: 5,
								c_cflag: 191,
								c_lflag: 35387,
								c_cc: [
									3,
									28,
									127,
									21,
									4,
									0,
									1,
									0,
									17,
									19,
									26,
									0,
									18,
									15,
									23,
									22,
									0,
									0,
									0,
									0,
									0,
									0,
									0,
									0,
									0,
									0,
									0,
									0,
									0,
									0,
									0,
									0
								]
							};
						},
						ioctl_tcsets: function(t, e, r) {
							return 0;
						},
						ioctl_tiocgwinsz: function(t) {
							return [24, 80];
						}
					},
					default_tty1_ops: {
						put_char: function(t, e) {
							null === e || 10 === e ? (B(ct(t.output, 0)), t.output = []) : 0 != e && t.output.push(e);
						},
						fsync: function(t) {
							t.output && 0 < t.output.length && (B(ct(t.output, 0)), t.output = []);
						}
					}
				}, St = {
					ops_table: null,
					mount: function(t) {
						return St.createNode(null, "/", 16895, 0);
					},
					createNode: function(t, e, r, n) {
						if (Pt.isBlkdev(r) || Pt.isFIFO(r)) throw new Pt.ErrnoError(63);
						return St.ops_table || (St.ops_table = {
							dir: {
								node: {
									getattr: St.node_ops.getattr,
									setattr: St.node_ops.setattr,
									lookup: St.node_ops.lookup,
									mknod: St.node_ops.mknod,
									rename: St.node_ops.rename,
									unlink: St.node_ops.unlink,
									rmdir: St.node_ops.rmdir,
									readdir: St.node_ops.readdir,
									symlink: St.node_ops.symlink
								},
								stream: { llseek: St.stream_ops.llseek }
							},
							file: {
								node: {
									getattr: St.node_ops.getattr,
									setattr: St.node_ops.setattr
								},
								stream: {
									llseek: St.stream_ops.llseek,
									read: St.stream_ops.read,
									write: St.stream_ops.write,
									allocate: St.stream_ops.allocate,
									mmap: St.stream_ops.mmap,
									msync: St.stream_ops.msync
								}
							},
							link: {
								node: {
									getattr: St.node_ops.getattr,
									setattr: St.node_ops.setattr,
									readlink: St.node_ops.readlink
								},
								stream: {}
							},
							chrdev: {
								node: {
									getattr: St.node_ops.getattr,
									setattr: St.node_ops.setattr
								},
								stream: Pt.chrdev_stream_ops
							}
						}), r = Pt.createNode(t, e, r, n), Pt.isDir(r.mode) ? (r.node_ops = St.ops_table.dir.node, r.stream_ops = St.ops_table.dir.stream, r.contents = {}) : Pt.isFile(r.mode) ? (r.node_ops = St.ops_table.file.node, r.stream_ops = St.ops_table.file.stream, r.usedBytes = 0, r.contents = null) : Pt.isLink(r.mode) ? (r.node_ops = St.ops_table.link.node, r.stream_ops = St.ops_table.link.stream) : Pt.isChrdev(r.mode) && (r.node_ops = St.ops_table.chrdev.node, r.stream_ops = St.ops_table.chrdev.stream), r.timestamp = Date.now(), t && (t.contents[e] = r, t.timestamp = r.timestamp), r;
					},
					getFileDataAsTypedArray: function(t) {
						return t.contents ? t.contents.subarray ? t.contents.subarray(0, t.usedBytes) : new Uint8Array(t.contents) : /* @__PURE__ */ new Uint8Array(0);
					},
					expandFileStorage: function(t, e) {
						var r = t.contents ? t.contents.length : 0;
						e <= r || (e = Math.max(e, r * (r < 1048576 ? 2 : 1.125) >>> 0), 0 != r && (e = Math.max(e, 256)), r = t.contents, t.contents = new Uint8Array(e), 0 < t.usedBytes && t.contents.set(r.subarray(0, t.usedBytes), 0));
					},
					resizeFileStorage: function(t, e) {
						var r;
						t.usedBytes != e && (0 == e ? (t.contents = null, t.usedBytes = 0) : (r = t.contents, t.contents = new Uint8Array(e), r && t.contents.set(r.subarray(0, Math.min(e, t.usedBytes))), t.usedBytes = e));
					},
					node_ops: {
						getattr: function(t) {
							var e = {};
							return e.dev = Pt.isChrdev(t.mode) ? t.id : 1, e.ino = t.id, e.mode = t.mode, e.nlink = 1, e.uid = 0, e.gid = 0, e.rdev = t.rdev, Pt.isDir(t.mode) ? e.size = 4096 : Pt.isFile(t.mode) ? e.size = t.usedBytes : Pt.isLink(t.mode) ? e.size = t.link.length : e.size = 0, e.atime = new Date(t.timestamp), e.mtime = new Date(t.timestamp), e.ctime = new Date(t.timestamp), e.blksize = 4096, e.blocks = Math.ceil(e.size / e.blksize), e;
						},
						setattr: function(t, e) {
							void 0 !== e.mode && (t.mode = e.mode), void 0 !== e.timestamp && (t.timestamp = e.timestamp), void 0 !== e.size && St.resizeFileStorage(t, e.size);
						},
						lookup: function(t, e) {
							throw Pt.genericErrors[44];
						},
						mknod: function(t, e, r, n) {
							return St.createNode(t, e, r, n);
						},
						rename: function(t, e, r) {
							if (Pt.isDir(t.mode)) {
								var n;
								try {
									n = Pt.lookupNode(e, r);
								} catch (t) {}
								if (n) for (var a in n.contents) throw new Pt.ErrnoError(55);
							}
							delete t.parent.contents[t.name], t.parent.timestamp = Date.now(), t.name = r, e.contents[r] = t, e.timestamp = t.parent.timestamp, t.parent = e;
						},
						unlink: function(t, e) {
							delete t.contents[e], t.timestamp = Date.now();
						},
						rmdir: function(t, e) {
							for (var r in Pt.lookupNode(t, e).contents) throw new Pt.ErrnoError(55);
							delete t.contents[e], t.timestamp = Date.now();
						},
						readdir: function(t) {
							for (var e = [".", ".."], r = 0, n = Object.keys(t.contents); r < n.length; r++) {
								var a = n[r];
								e.push(a);
							}
							return e;
						},
						symlink: function(t, e, r) {
							return (t = St.createNode(t, e, 41471, 0)).link = r, t;
						},
						readlink: function(t) {
							if (Pt.isLink(t.mode)) return t.link;
							throw new Pt.ErrnoError(28);
						}
					},
					stream_ops: {
						read: function(t, e, r, n, a) {
							var o = t.node.contents;
							if (a >= t.node.usedBytes) return 0;
							var i = Math.min(t.node.usedBytes - a, n);
							if (8 < i && o.subarray) e.set(o.subarray(a, a + i), r);
							else for (var s = 0; s < i; s++) e[r + s] = o[a + s];
							return i;
						},
						write: function(t, e, r, n, a, o) {
							if (e.buffer === N.buffer && (o = !1), !n) return 0;
							var i = t.node;
							if (i.timestamp = Date.now(), e.subarray && (!i.contents || i.contents.subarray)) {
								if (o) return i.contents = e.subarray(r, r + n), i.usedBytes = n;
								if (0 === i.usedBytes && 0 === a) return i.contents = e.slice(r, r + n), i.usedBytes = n;
								if (a + n <= i.usedBytes) return i.contents.set(e.subarray(r, r + n), a), n;
							}
							if (St.expandFileStorage(i, a + n), i.contents.subarray && e.subarray) i.contents.set(e.subarray(r, r + n), a);
							else for (var s = 0; s < n; s++) i.contents[a + s] = e[r + s];
							return i.usedBytes = Math.max(i.usedBytes, a + n), n;
						},
						llseek: function(t, e, r) {
							if (1 === r ? e += t.position : 2 === r && Pt.isFile(t.node.mode) && (e += t.node.usedBytes), e < 0) throw new Pt.ErrnoError(28);
							return e;
						},
						allocate: function(t, e, r) {
							St.expandFileStorage(t.node, e + r), t.node.usedBytes = Math.max(t.node.usedBytes, e + r);
						},
						mmap: function(t, e, r, n, a) {
							if (!Pt.isFile(t.node.mode)) throw new Pt.ErrnoError(43);
							var o, i;
							if (t = t.node.contents, 2 & a || t.buffer !== N.buffer) {
								if ((0 < r || r + e < t.length) && (t = t.subarray ? t.subarray(r, r + e) : Array.prototype.slice.call(t, r, r + e)), i = !0, !(o = Lt(e))) throw new Pt.ErrnoError(48);
								N.set(t, o);
							} else i = !1, o = t.byteOffset;
							return {
								ptr: o,
								allocated: i
							};
						},
						msync: function(t, e, r, n, a) {
							return St.stream_ops.write(t, e, 0, n, r, !1), 0;
						}
					}
				}, Ct = g.preloadPlugins || [], Ft = {
					EPERM: 63,
					ENOENT: 44,
					ESRCH: 71,
					EINTR: 27,
					EIO: 29,
					ENXIO: 60,
					E2BIG: 1,
					ENOEXEC: 45,
					EBADF: 8,
					ECHILD: 12,
					EAGAIN: 6,
					EWOULDBLOCK: 6,
					ENOMEM: 48,
					EACCES: 2,
					EFAULT: 21,
					ENOTBLK: 105,
					EBUSY: 10,
					EEXIST: 20,
					EXDEV: 75,
					ENODEV: 43,
					ENOTDIR: 54,
					EISDIR: 31,
					EINVAL: 28,
					ENFILE: 41,
					EMFILE: 33,
					ENOTTY: 59,
					ETXTBSY: 74,
					EFBIG: 22,
					ENOSPC: 51,
					ESPIPE: 70,
					EROFS: 69,
					EMLINK: 34,
					EPIPE: 64,
					EDOM: 18,
					ERANGE: 68,
					ENOMSG: 49,
					EIDRM: 24,
					ECHRNG: 106,
					EL2NSYNC: 156,
					EL3HLT: 107,
					EL3RST: 108,
					ELNRNG: 109,
					EUNATCH: 110,
					ENOCSI: 111,
					EL2HLT: 112,
					EDEADLK: 16,
					ENOLCK: 46,
					EBADE: 113,
					EBADR: 114,
					EXFULL: 115,
					ENOANO: 104,
					EBADRQC: 103,
					EBADSLT: 102,
					EDEADLOCK: 16,
					EBFONT: 101,
					ENOSTR: 100,
					ENODATA: 116,
					ETIME: 117,
					ENOSR: 118,
					ENONET: 119,
					ENOPKG: 120,
					EREMOTE: 121,
					ENOLINK: 47,
					EADV: 122,
					ESRMNT: 123,
					ECOMM: 124,
					EPROTO: 65,
					EMULTIHOP: 36,
					EDOTDOT: 125,
					EBADMSG: 9,
					ENOTUNIQ: 126,
					EBADFD: 127,
					EREMCHG: 128,
					ELIBACC: 129,
					ELIBBAD: 130,
					ELIBSCN: 131,
					ELIBMAX: 132,
					ELIBEXEC: 133,
					ENOSYS: 52,
					ENOTEMPTY: 55,
					ENAMETOOLONG: 37,
					ELOOP: 32,
					EOPNOTSUPP: 138,
					EPFNOSUPPORT: 139,
					ECONNRESET: 15,
					ENOBUFS: 42,
					EAFNOSUPPORT: 5,
					EPROTOTYPE: 67,
					ENOTSOCK: 57,
					ENOPROTOOPT: 50,
					ESHUTDOWN: 140,
					ECONNREFUSED: 14,
					EADDRINUSE: 3,
					ECONNABORTED: 13,
					ENETUNREACH: 40,
					ENETDOWN: 38,
					ETIMEDOUT: 73,
					EHOSTDOWN: 142,
					EHOSTUNREACH: 23,
					EINPROGRESS: 26,
					EALREADY: 7,
					EDESTADDRREQ: 17,
					EMSGSIZE: 35,
					EPROTONOSUPPORT: 66,
					ESOCKTNOSUPPORT: 137,
					EADDRNOTAVAIL: 4,
					ENETRESET: 39,
					EISCONN: 30,
					ENOTCONN: 53,
					ETOOMANYREFS: 141,
					EUSERS: 136,
					EDQUOT: 19,
					ESTALE: 72,
					ENOTSUP: 138,
					ENOMEDIUM: 148,
					EILSEQ: 25,
					EOVERFLOW: 61,
					ECANCELED: 11,
					ENOTRECOVERABLE: 56,
					EOWNERDEAD: 62,
					ESTRPIPE: 135
				}, Nt = {
					isWindows: !1,
					staticInit: function() {
						Nt.isWindows = !!process.platform.match(/^win/);
						var t = process.binding("constants");
						t.fs && (t = t.fs), Nt.flagsForNodeMap = {
							1024: t.O_APPEND,
							64: t.O_CREAT,
							128: t.O_EXCL,
							256: t.O_NOCTTY,
							0: t.O_RDONLY,
							2: t.O_RDWR,
							4096: t.O_SYNC,
							512: t.O_TRUNC,
							1: t.O_WRONLY,
							131072: t.O_NOFOLLOW
						};
					},
					convertNodeCode: function(t) {
						return t = t.code, Ft[t];
					},
					mount: function(t) {
						return Nt.createNode(null, "/", Nt.getMode(t.opts.root), 0);
					},
					createNode: function(t, e, r, n) {
						if (Pt.isDir(r) || Pt.isFile(r) || Pt.isLink(r)) return (t = Pt.createNode(t, e, r)).node_ops = Nt.node_ops, t.stream_ops = Nt.stream_ops, t;
						throw new Pt.ErrnoError(28);
					},
					getMode: function(t) {
						var e;
						try {
							e = _.lstatSync(t), Nt.isWindows && (e.mode = e.mode | (292 & e.mode) >> 2);
						} catch (t) {
							if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
							throw t;
						}
						return e.mode;
					},
					realPath: function(t) {
						for (var e = []; t.parent !== t;) e.push(t.name), t = t.parent;
						return e.push(t.mount.opts.root), e.reverse(), wt.join.apply(null, e);
					},
					flagsForNode: function(t) {
						t &= -2721793;
						var e, r = 0;
						for (e in Nt.flagsForNodeMap) t & e && (r |= Nt.flagsForNodeMap[e], t ^= e);
						if (t) throw new Pt.ErrnoError(28);
						return r;
					},
					node_ops: {
						getattr: function(t) {
							var e;
							t = Nt.realPath(t);
							try {
								e = _.lstatSync(t);
							} catch (t) {
								if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
								throw t;
							}
							return Nt.isWindows && !e.blksize && (e.blksize = 4096), Nt.isWindows && !e.blocks && (e.blocks = (e.size + e.blksize - 1) / e.blksize | 0), {
								dev: e.dev,
								ino: e.ino,
								mode: e.mode,
								nlink: e.nlink,
								uid: e.uid,
								gid: e.gid,
								rdev: e.rdev,
								size: e.size,
								atime: e.atime,
								mtime: e.mtime,
								ctime: e.ctime,
								blksize: e.blksize,
								blocks: e.blocks
							};
						},
						setattr: function(t, e) {
							var r, n = Nt.realPath(t);
							try {
								void 0 !== e.mode && (_.chmodSync(n, e.mode), t.mode = e.mode), void 0 !== e.timestamp && (r = new Date(e.timestamp), _.utimesSync(n, r, r)), void 0 !== e.size && _.truncateSync(n, e.size);
							} catch (t) {
								if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
								throw t;
							}
						},
						lookup: function(t, e) {
							var r = wt.join2(Nt.realPath(t), e);
							return r = Nt.getMode(r), Nt.createNode(t, e, r);
						},
						mknod: function(t, e, r, n) {
							t = Nt.createNode(t, e, r, n), e = Nt.realPath(t);
							try {
								Pt.isDir(t.mode) ? _.mkdirSync(e, t.mode) : _.writeFileSync(e, "", { mode: t.mode });
							} catch (t) {
								if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
								throw t;
							}
							return t;
						},
						rename: function(t, e, r) {
							var n = Nt.realPath(t);
							e = wt.join2(Nt.realPath(e), r);
							try {
								_.renameSync(n, e);
							} catch (t) {
								if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
								throw t;
							}
							t.name = r;
						},
						unlink: function(t, e) {
							t = wt.join2(Nt.realPath(t), e);
							try {
								_.unlinkSync(t);
							} catch (t) {
								if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
								throw t;
							}
						},
						rmdir: function(t, e) {
							t = wt.join2(Nt.realPath(t), e);
							try {
								_.rmdirSync(t);
							} catch (t) {
								if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
								throw t;
							}
						},
						readdir: function(t) {
							t = Nt.realPath(t);
							try {
								return _.readdirSync(t);
							} catch (t) {
								if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
								throw t;
							}
						},
						symlink: function(t, e, r) {
							t = wt.join2(Nt.realPath(t), e);
							try {
								_.symlinkSync(r, t);
							} catch (t) {
								if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
								throw t;
							}
						},
						readlink: function(t) {
							var e = Nt.realPath(t);
							try {
								return e = _.readlinkSync(e), w.relative(w.resolve(t.mount.opts.root), e);
							} catch (t) {
								if (!t.code) throw t;
								if ("UNKNOWN" === t.code) throw new Pt.ErrnoError(28);
								throw new Pt.ErrnoError(Nt.convertNodeCode(t));
							}
						}
					},
					stream_ops: {
						open: function(t) {
							var e = Nt.realPath(t.node);
							try {
								Pt.isFile(t.node.mode) && (t.nfd = _.openSync(e, Nt.flagsForNode(t.flags)));
							} catch (t) {
								if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
								throw t;
							}
						},
						close: function(t) {
							try {
								Pt.isFile(t.node.mode) && t.nfd && _.closeSync(t.nfd);
							} catch (t) {
								if (t.code) throw new Pt.ErrnoError(Nt.convertNodeCode(t));
								throw t;
							}
						},
						read: function(t, e, r, n, a) {
							if (0 === n) return 0;
							try {
								return _.readSync(t.nfd, new Int8Array(e.buffer, r, n), { position: a });
							} catch (t) {
								throw new Pt.ErrnoError(Nt.convertNodeCode(t));
							}
						},
						write: function(t, e, r, n, a) {
							try {
								return _.writeSync(t.nfd, new Int8Array(e.buffer, r, n), { position: a });
							} catch (t) {
								throw new Pt.ErrnoError(Nt.convertNodeCode(t));
							}
						},
						llseek: function(t, e, r) {
							if (1 === r) e += t.position;
							else if (2 === r && Pt.isFile(t.node.mode)) try {
								e += _.fstatSync(t.nfd).size;
							} catch (t) {
								throw new Pt.ErrnoError(Nt.convertNodeCode(t));
							}
							if (e < 0) throw new Pt.ErrnoError(28);
							return e;
						},
						mmap: function(t, e, r, n, a) {
							var o;
							if (Pt.isFile(t.node.mode)) return o = Lt(e), Nt.stream_ops.read(t, N, o, e, r), {
								ptr: o,
								allocated: !0
							};
							throw new Pt.ErrnoError(43);
						},
						msync: function(t, e, r, n, a) {
							return Nt.stream_ops.write(t, e, 0, n, r, !1), 0;
						}
					}
				}, jt = {
					DIR_MODE: 16895,
					FILE_MODE: 33279,
					reader: null,
					mount: function(t) {
						K(G), jt.reader || (jt.reader = new FileReaderSync());
						var e = jt.createNode(null, "/", jt.DIR_MODE, 0), r = {};
						function n(t) {
							for (var n = t.split("/"), a = e, o = 0; o < n.length - 1; o++) {
								var i, s = n.slice(0, o + 1).join("/");
								r[i = s] || (r[i] = jt.createNode(a, n[o], jt.DIR_MODE, 0)), a = r[s];
							}
							return a;
						}
						function a(t) {
							return (t = t.split("/"))[t.length - 1];
						}
						return Array.prototype.forEach.call(t.opts.files || [], function(t) {
							jt.createNode(n(t.name), a(t.name), jt.FILE_MODE, 0, t, t.lastModifiedDate);
						}), (t.opts.blobs || []).forEach(function(t) {
							jt.createNode(n(t.name), a(t.name), jt.FILE_MODE, 0, t.data);
						}), (t.opts.packages || []).forEach(function(t) {
							t.metadata.files.forEach(function(e) {
								var r = e.filename.substr(1);
								jt.createNode(n(r), a(r), jt.FILE_MODE, 0, t.blob.slice(e.start, e.end));
							});
						}), e;
					},
					createNode: function(t, e, r, n, a, o) {
						var i = Pt.createNode(t, e, r);
						return i.mode = r, i.node_ops = jt.node_ops, i.stream_ops = jt.stream_ops, i.timestamp = (o || /* @__PURE__ */ new Date()).getTime(), K(jt.FILE_MODE !== jt.DIR_MODE), r === jt.FILE_MODE ? (i.size = a.size, i.contents = a) : (i.size = 4096, i.contents = {}), t && (t.contents[e] = i), i;
					},
					node_ops: {
						getattr: function(t) {
							return {
								dev: 1,
								ino: t.id,
								mode: t.mode,
								nlink: 1,
								uid: 0,
								gid: 0,
								rdev: 0,
								size: t.size,
								atime: new Date(t.timestamp),
								mtime: new Date(t.timestamp),
								ctime: new Date(t.timestamp),
								blksize: 4096,
								blocks: Math.ceil(t.size / 4096)
							};
						},
						setattr: function(t, e) {
							void 0 !== e.mode && (t.mode = e.mode), void 0 !== e.timestamp && (t.timestamp = e.timestamp);
						},
						lookup: function(t, e) {
							throw new Pt.ErrnoError(44);
						},
						mknod: function(t, e, r, n) {
							throw new Pt.ErrnoError(63);
						},
						rename: function(t, e, r) {
							throw new Pt.ErrnoError(63);
						},
						unlink: function(t, e) {
							throw new Pt.ErrnoError(63);
						},
						rmdir: function(t, e) {
							throw new Pt.ErrnoError(63);
						},
						readdir: function(t) {
							for (var e = [".", ".."], r = 0, n = Object.keys(t.contents); r < n.length; r++) {
								var a = n[r];
								e.push(a);
							}
							return e;
						},
						symlink: function(t, e, r) {
							throw new Pt.ErrnoError(63);
						}
					},
					stream_ops: {
						read: function(t, e, r, n, a) {
							return a >= t.node.size ? 0 : (t = t.node.contents.slice(a, a + n), a = jt.reader.readAsArrayBuffer(t), e.set(new Uint8Array(a), r), t.size);
						},
						write: function(t, e, r, n, a) {
							throw new Pt.ErrnoError(29);
						},
						llseek: function(t, e, r) {
							if (1 === r ? e += t.position : 2 === r && Pt.isFile(t.node.mode) && (e += t.node.size), e < 0) throw new Pt.ErrnoError(28);
							return e;
						}
					}
				}, Pt = {
					root: null,
					mounts: [],
					devices: {},
					streams: [],
					nextInode: 1,
					nameTable: null,
					currentPath: "/",
					initialized: !1,
					ignorePermissions: !0,
					ErrnoError: null,
					genericErrors: {},
					filesystems: null,
					syncFSRequests: 0,
					lookupPath: function(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
						if (!(t = vt.resolve(t))) return {
							path: "",
							node: null
						};
						if (8 < (e = Object.assign({
							follow_mount: !0,
							recurse_count: 0
						}, e)).recurse_count) throw new Pt.ErrnoError(32);
						for (var r = t.split("/").filter(function(t) {
							return !!t;
						}), n = Pt.root, a = "/", o = 0; o < r.length; o++) {
							var i = o === r.length - 1;
							if (i && e.parent) break;
							if (n = Pt.lookupNode(n, r[o]), a = wt.join2(a, r[o]), !Pt.isMountpoint(n) || i && !e.follow_mount || (n = n.mounted.root), !i || e.follow) for (var s = 0; Pt.isLink(n.mode);) {
								var c = Pt.readlink(a);
								if (a = vt.resolve(wt.dirname(a), c), n = Pt.lookupPath(a, { recurse_count: e.recurse_count + 1 }).node, 40 < s++) throw new Pt.ErrnoError(32);
							}
						}
						return {
							path: a,
							node: n
						};
					},
					getPath: function(t) {
						for (var e, r;;) {
							if (Pt.isRoot(t)) return r = t.mount.mountpoint, e ? "/" !== r[r.length - 1] ? "".concat(r, "/").concat(e) : r + e : r;
							e = e ? "".concat(t.name, "/").concat(e) : t.name, t = t.parent;
						}
					},
					hashName: function(t, e) {
						for (var r = 0, n = 0; n < e.length; n++) r = (r << 5) - r + e.charCodeAt(n) | 0;
						return (t + r >>> 0) % Pt.nameTable.length;
					},
					hashAddNode: function(t) {
						var e = Pt.hashName(t.parent.id, t.name);
						t.name_next = Pt.nameTable[e], Pt.nameTable[e] = t;
					},
					hashRemoveNode: function(t) {
						var e = Pt.hashName(t.parent.id, t.name);
						if (Pt.nameTable[e] === t) Pt.nameTable[e] = t.name_next;
						else for (var r = Pt.nameTable[e]; r;) {
							if (r.name_next === t) {
								r.name_next = t.name_next;
								break;
							}
							r = r.name_next;
						}
					},
					lookupNode: function(t, e) {
						if (r = Pt.mayLookup(t)) throw new Pt.ErrnoError(r, t);
						for (var r = Pt.hashName(t.id, e), n = Pt.nameTable[r]; n; n = n.name_next) {
							var a = n.name;
							if (n.parent.id === t.id && a === e) return n;
						}
						return Pt.lookup(t, e);
					},
					createNode: function(t, e, r, n) {
						return t = new Pt.FSNode(t, e, r, n), Pt.hashAddNode(t), t;
					},
					destroyNode: function(t) {
						Pt.hashRemoveNode(t);
					},
					isRoot: function(t) {
						return t === t.parent;
					},
					isMountpoint: function(t) {
						return !!t.mounted;
					},
					isFile: function(t) {
						return 32768 == (61440 & t);
					},
					isDir: function(t) {
						return 16384 == (61440 & t);
					},
					isLink: function(t) {
						return 40960 == (61440 & t);
					},
					isChrdev: function(t) {
						return 8192 == (61440 & t);
					},
					isBlkdev: function(t) {
						return 24576 == (61440 & t);
					},
					isFIFO: function(t) {
						return 4096 == (61440 & t);
					},
					isSocket: function(t) {
						return !(49152 & ~t);
					},
					flagsToPermissionString: function(t) {
						var e = [
							"r",
							"w",
							"rw"
						][3 & t];
						return 512 & t && (e += "w"), e;
					},
					nodePermissions: function(t, e) {
						return Pt.ignorePermissions || (!e.includes("r") || 292 & t.mode) && (!e.includes("w") || 146 & t.mode) && (!e.includes("x") || 73 & t.mode) ? 0 : 2;
					},
					mayLookup: function(t) {
						return Pt.nodePermissions(t, "x") || (t.node_ops.lookup ? 0 : 2);
					},
					mayCreate: function(t, e) {
						try {
							return Pt.lookupNode(t, e), 20;
						} catch (t) {}
						return Pt.nodePermissions(t, "wx");
					},
					mayDelete: function(t, e, r) {
						var n;
						try {
							n = Pt.lookupNode(t, e);
						} catch (t) {
							return t.errno;
						}
						if (e = Pt.nodePermissions(t, "wx")) return e;
						if (r) {
							if (!Pt.isDir(n.mode)) return 54;
							if (Pt.isRoot(n) || Pt.getPath(n) === Pt.cwd()) return 10;
						} else if (Pt.isDir(n.mode)) return 31;
						return 0;
					},
					mayOpen: function(t, e) {
						return t ? Pt.isLink(t.mode) ? 32 : Pt.isDir(t.mode) && ("r" !== Pt.flagsToPermissionString(e) || 512 & e) ? 31 : Pt.nodePermissions(t, Pt.flagsToPermissionString(e)) : 44;
					},
					MAX_OPEN_FDS: 4096,
					nextfd: function() {
						for (var t = 0; t <= Pt.MAX_OPEN_FDS; t++) if (!Pt.streams[t]) return t;
						throw new Pt.ErrnoError(33);
					},
					getStreamChecked: function(t) {
						if (t = Pt.getStream(t)) return t;
						throw new Pt.ErrnoError(8);
					},
					getStream: function(t) {
						return Pt.streams[t];
					},
					createStream: function(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1;
						return Pt.FSStream || (Pt.FSStream = function() {
							this.shared = {};
						}, Pt.FSStream.prototype = {}, Object.defineProperties(Pt.FSStream.prototype, {
							object: {
								get: function() {
									return this.node;
								},
								set: function(t) {
									this.node = t;
								}
							},
							isRead: { get: function() {
								return 1 != (2097155 & this.flags);
							} },
							isWrite: { get: function() {
								return !!(2097155 & this.flags);
							} },
							isAppend: { get: function() {
								return 1024 & this.flags;
							} },
							flags: {
								get: function() {
									return this.shared.flags;
								},
								set: function(t) {
									this.shared.flags = t;
								}
							},
							position: {
								get: function() {
									return this.shared.position;
								},
								set: function(t) {
									this.shared.position = t;
								}
							}
						})), t = Object.assign(new Pt.FSStream(), t), -1 == e && (e = Pt.nextfd()), t.fd = e, Pt.streams[e] = t;
					},
					closeStream: function(t) {
						Pt.streams[t] = null;
					},
					chrdev_stream_ops: {
						open: function(t) {
							var e, r = Pt.getDevice(t.node.rdev);
							t.stream_ops = r.stream_ops, null != (e = (r = t.stream_ops).open) && e.call(r, t);
						},
						llseek: function() {
							throw new Pt.ErrnoError(70);
						}
					},
					major: function(t) {
						return t >> 8;
					},
					minor: function(t) {
						return 255 & t;
					},
					makedev: function(t, e) {
						return t << 8 | e;
					},
					registerDevice: function(t, e) {
						Pt.devices[t] = { stream_ops: e };
					},
					getDevice: function(t) {
						return Pt.devices[t];
					},
					getMounts: function(t) {
						for (var e = [], r = [t]; r.length;) {
							var n = r.pop();
							e.push(n), r.push.apply(r, n.mounts);
						}
						return e;
					},
					syncfs: function(t, e) {
						"function" == typeof t && (e = t, t = !1), Pt.syncFSRequests++, 1 < Pt.syncFSRequests && B("warning: ".concat(Pt.syncFSRequests, " FS.syncfs operations in flight at once, probably just doing extra work"));
						var r = Pt.getMounts(Pt.root.mount), n = 0;
						function a(t) {
							return Pt.syncFSRequests--, e(t);
						}
						function o(t) {
							if (t) return o.errored ? void 0 : (o.errored = !0, a(t));
							++n >= r.length && a(null);
						}
						r.forEach(function(e) {
							if (!e.type.syncfs) return o(null);
							e.type.syncfs(e, t, o);
						});
					},
					mount: function(t, e, r) {
						var n, a = "/" === r, o = !r;
						if (a && Pt.root) throw new Pt.ErrnoError(10);
						if (!a && !o) {
							if (r = (o = Pt.lookupPath(r, { follow_mount: !1 })).path, n = o.node, Pt.isMountpoint(n)) throw new Pt.ErrnoError(10);
							if (!Pt.isDir(n.mode)) throw new Pt.ErrnoError(54);
						}
						return o = {
							type: t,
							opts: e,
							mountpoint: r,
							mounts: []
						}, ((e = t.mount(o)).mount = o).root = e, a ? Pt.root = e : n && (n.mounted = o, n.mount) && n.mount.mounts.push(o), e;
					},
					unmount: function(t) {
						if (t = Pt.lookupPath(t, { follow_mount: !1 }), !Pt.isMountpoint(t.node)) throw new Pt.ErrnoError(28);
						var e = (t = t.node).mounted, r = Pt.getMounts(e);
						Object.keys(Pt.nameTable).forEach(function(t) {
							for (var e = Pt.nameTable[t]; e;) {
								var n = e.name_next;
								r.includes(e.mount) && Pt.destroyNode(e), e = n;
							}
						}), t.mounted = null, e = t.mount.mounts.indexOf(e), t.mount.mounts.splice(e, 1);
					},
					lookup: function(t, e) {
						return t.node_ops.lookup(t, e);
					},
					mknod: function(t, e, r) {
						var n = Pt.lookupPath(t, { parent: !0 }).node;
						if (!(t = wt.basename(t)) || "." === t || ".." === t) throw new Pt.ErrnoError(28);
						var a = Pt.mayCreate(n, t);
						if (a) throw new Pt.ErrnoError(a);
						if (n.node_ops.mknod) return n.node_ops.mknod(n, t, e, r);
						throw new Pt.ErrnoError(63);
					},
					create: function(t, e) {
						return Pt.mknod(t, e = 4095 & (e = void 0 !== e ? e : 438) | 32768, 0);
					},
					mkdir: function(t, e) {
						return Pt.mknod(t, e = 1023 & (e = void 0 !== e ? e : 511) | 16384, 0);
					},
					mkdirTree: function(t, e) {
						for (var r = t.split("/"), n = "", a = 0; a < r.length; ++a) if (r[a]) {
							n += "/" + r[a];
							try {
								Pt.mkdir(n, e);
							} catch (t) {
								if (20 != t.errno) throw t;
							}
						}
					},
					mkdev: function(t, e, r) {
						return void 0 === r && (r = e, e = 438), Pt.mknod(t, e |= 8192, r);
					},
					symlink: function(t, e) {
						if (!vt.resolve(t)) throw new Pt.ErrnoError(44);
						var r = Pt.lookupPath(e, { parent: !0 }).node;
						if (!r) throw new Pt.ErrnoError(44);
						e = wt.basename(e);
						var n = Pt.mayCreate(r, e);
						if (n) throw new Pt.ErrnoError(n);
						if (r.node_ops.symlink) return r.node_ops.symlink(r, e, t);
						throw new Pt.ErrnoError(63);
					},
					rename: function(t, e) {
						var r = wt.dirname(t), n = wt.dirname(e), a = wt.basename(t), o = wt.basename(e), i = (i = Pt.lookupPath(t, { parent: !0 })).node, s = Pt.lookupPath(e, { parent: !0 }).node;
						if (!i || !s) throw new Pt.ErrnoError(44);
						if (i.mount !== s.mount) throw new Pt.ErrnoError(75);
						var c, u = Pt.lookupNode(i, a);
						if ("." !== (t = vt.relative(t, n)).charAt(0)) throw new Pt.ErrnoError(28);
						if ("." !== (t = vt.relative(e, r)).charAt(0)) throw new Pt.ErrnoError(55);
						try {
							c = Pt.lookupNode(s, o);
						} catch (t) {}
						if (u !== c) {
							if (n = Pt.isDir(u.mode), e = Pt.mayDelete(i, a, n)) throw new Pt.ErrnoError(e);
							if (e = c ? Pt.mayDelete(s, o, n) : Pt.mayCreate(s, o)) throw new Pt.ErrnoError(e);
							if (!i.node_ops.rename) throw new Pt.ErrnoError(63);
							if (Pt.isMountpoint(u) || c && Pt.isMountpoint(c)) throw new Pt.ErrnoError(10);
							if (s !== i && (e = Pt.nodePermissions(i, "w"))) throw new Pt.ErrnoError(e);
							Pt.hashRemoveNode(u);
							try {
								i.node_ops.rename(u, s, o);
							} catch (t) {
								throw t;
							} finally {
								Pt.hashAddNode(u);
							}
						}
					},
					rmdir: function(t) {
						var e = Pt.lookupPath(t, { parent: !0 }).node, r = (t = wt.basename(t), Pt.lookupNode(e, t)), n = Pt.mayDelete(e, t, !0);
						if (n) throw new Pt.ErrnoError(n);
						if (!e.node_ops.rmdir) throw new Pt.ErrnoError(63);
						if (Pt.isMountpoint(r)) throw new Pt.ErrnoError(10);
						e.node_ops.rmdir(e, t), Pt.destroyNode(r);
					},
					readdir: function(t) {
						if ((t = Pt.lookupPath(t, { follow: !0 }).node).node_ops.readdir) return t.node_ops.readdir(t);
						throw new Pt.ErrnoError(54);
					},
					unlink: function(t) {
						var e = Pt.lookupPath(t, { parent: !0 }).node;
						if (!e) throw new Pt.ErrnoError(44);
						t = wt.basename(t);
						var r = Pt.lookupNode(e, t), n = Pt.mayDelete(e, t, !1);
						if (n) throw new Pt.ErrnoError(n);
						if (!e.node_ops.unlink) throw new Pt.ErrnoError(63);
						if (Pt.isMountpoint(r)) throw new Pt.ErrnoError(10);
						e.node_ops.unlink(e, t), Pt.destroyNode(r);
					},
					readlink: function(t) {
						if (!(t = Pt.lookupPath(t).node)) throw new Pt.ErrnoError(44);
						if (t.node_ops.readlink) return vt.resolve(Pt.getPath(t.parent), t.node_ops.readlink(t));
						throw new Pt.ErrnoError(28);
					},
					stat: function(t, e) {
						if (!(t = Pt.lookupPath(t, { follow: !e }).node)) throw new Pt.ErrnoError(44);
						if (t.node_ops.getattr) return t.node_ops.getattr(t);
						throw new Pt.ErrnoError(63);
					},
					lstat: function(t) {
						return Pt.stat(t, !0);
					},
					chmod: function(t, e, r) {
						if (!(r = "string" == typeof t ? Pt.lookupPath(t, { follow: !r }).node : t).node_ops.setattr) throw new Pt.ErrnoError(63);
						r.node_ops.setattr(r, {
							mode: 4095 & e | -4096 & r.mode,
							timestamp: Date.now()
						});
					},
					lchmod: function(t, e) {
						Pt.chmod(t, e, !0);
					},
					fchmod: function(t, e) {
						t = Pt.getStreamChecked(t), Pt.chmod(t.node, e);
					},
					chown: function(t, e, r, n) {
						if (!(n = "string" == typeof t ? Pt.lookupPath(t, { follow: !n }).node : t).node_ops.setattr) throw new Pt.ErrnoError(63);
						n.node_ops.setattr(n, { timestamp: Date.now() });
					},
					lchown: function(t, e, r) {
						Pt.chown(t, e, r, !0);
					},
					fchown: function(t, e, r) {
						t = Pt.getStreamChecked(t), Pt.chown(t.node, e, r);
					},
					truncate: function(t, e) {
						if (e < 0) throw new Pt.ErrnoError(28);
						if (!(t = "string" == typeof t ? Pt.lookupPath(t, { follow: !0 }).node : t).node_ops.setattr) throw new Pt.ErrnoError(63);
						if (Pt.isDir(t.mode)) throw new Pt.ErrnoError(31);
						if (!Pt.isFile(t.mode)) throw new Pt.ErrnoError(28);
						var r = Pt.nodePermissions(t, "w");
						if (r) throw new Pt.ErrnoError(r);
						t.node_ops.setattr(t, {
							size: e,
							timestamp: Date.now()
						});
					},
					ftruncate: function(t, e) {
						if (!(2097155 & (t = Pt.getStreamChecked(t)).flags)) throw new Pt.ErrnoError(28);
						Pt.truncate(t.node, e);
					},
					utime: function(t, e, r) {
						(t = Pt.lookupPath(t, { follow: !0 }).node).node_ops.setattr(t, { timestamp: Math.max(e, r) });
					},
					open: function(t, e, n) {
						if ("" === t) throw new Pt.ErrnoError(44);
						if (n = void 0 === n ? 438 : n, n = 64 & (e = "string" == typeof e ? function(t) {
							var e = {
								r: 0,
								"r+": 2,
								w: 577,
								"w+": 578,
								a: 1089,
								"a+": 1090
							}[t];
							if (void 0 === e) throw new Error("Unknown file open mode: ".concat(t));
							return e;
						}(e) : e) ? 4095 & n | 32768 : 0, "object" == r(t)) a = t;
						else {
							t = wt.normalize(t);
							try {
								var a = Pt.lookupPath(t, { follow: !(131072 & e) }).node;
							} catch (t) {}
						}
						var o = !1;
						if (64 & e) if (a) {
							if (128 & e) throw new Pt.ErrnoError(20);
						} else a = Pt.mknod(t, n, 0), o = !0;
						if (!a) throw new Pt.ErrnoError(44);
						if (Pt.isChrdev(a.mode) && (e &= -513), 65536 & e && !Pt.isDir(a.mode)) throw new Pt.ErrnoError(54);
						if (!o && (n = Pt.mayOpen(a, e))) throw new Pt.ErrnoError(n);
						return 512 & e && !o && Pt.truncate(a, 0), e &= -131713, (n = Pt.createStream({
							node: a,
							path: Pt.getPath(a),
							flags: e,
							seekable: !0,
							position: 0,
							stream_ops: a.stream_ops,
							ungotten: [],
							error: !1
						})).stream_ops.open && n.stream_ops.open(n), !g.logReadFiles || 1 & e || (Pt.readFiles || (Pt.readFiles = {}), t in Pt.readFiles) || (Pt.readFiles[t] = 1), n;
					},
					close: function(t) {
						if (Pt.isClosed(t)) throw new Pt.ErrnoError(8);
						t.getdents && (t.getdents = null);
						try {
							t.stream_ops.close && t.stream_ops.close(t);
						} catch (t) {
							throw t;
						} finally {
							Pt.closeStream(t.fd);
						}
						t.fd = null;
					},
					isClosed: function(t) {
						return null === t.fd;
					},
					llseek: function(t, e, r) {
						if (Pt.isClosed(t)) throw new Pt.ErrnoError(8);
						if (!t.seekable || !t.stream_ops.llseek) throw new Pt.ErrnoError(70);
						if (0 != r && 1 != r && 2 != r) throw new Pt.ErrnoError(28);
						return t.position = t.stream_ops.llseek(t, e, r), t.ungotten = [], t.position;
					},
					read: function(t, e, r, n, a) {
						if (n < 0 || a < 0) throw new Pt.ErrnoError(28);
						if (Pt.isClosed(t)) throw new Pt.ErrnoError(8);
						if (1 == (2097155 & t.flags)) throw new Pt.ErrnoError(8);
						if (Pt.isDir(t.node.mode)) throw new Pt.ErrnoError(31);
						if (!t.stream_ops.read) throw new Pt.ErrnoError(28);
						var o = void 0 !== a;
						if (o) {
							if (!t.seekable) throw new Pt.ErrnoError(70);
						} else a = t.position;
						return e = t.stream_ops.read(t, e, r, n, a), o || (t.position += e), e;
					},
					write: function(t, e, r, n, a, o) {
						if (n < 0 || a < 0) throw new Pt.ErrnoError(28);
						if (Pt.isClosed(t)) throw new Pt.ErrnoError(8);
						if (!(2097155 & t.flags)) throw new Pt.ErrnoError(8);
						if (Pt.isDir(t.node.mode)) throw new Pt.ErrnoError(31);
						if (!t.stream_ops.write) throw new Pt.ErrnoError(28);
						t.seekable && 1024 & t.flags && Pt.llseek(t, 0, 2);
						var i = void 0 !== a;
						if (i) {
							if (!t.seekable) throw new Pt.ErrnoError(70);
						} else a = t.position;
						return e = t.stream_ops.write(t, e, r, n, a, o), i || (t.position += e), e;
					},
					allocate: function(t, e, r) {
						if (Pt.isClosed(t)) throw new Pt.ErrnoError(8);
						if (e < 0 || r <= 0) throw new Pt.ErrnoError(28);
						if (!(2097155 & t.flags)) throw new Pt.ErrnoError(8);
						if (!Pt.isFile(t.node.mode) && !Pt.isDir(t.node.mode)) throw new Pt.ErrnoError(43);
						if (!t.stream_ops.allocate) throw new Pt.ErrnoError(138);
						t.stream_ops.allocate(t, e, r);
					},
					mmap: function(t, e, r, n, a) {
						if (2 & n && !(2 & a) && 2 != (2097155 & t.flags)) throw new Pt.ErrnoError(2);
						if (1 == (2097155 & t.flags)) throw new Pt.ErrnoError(2);
						if (t.stream_ops.mmap) return t.stream_ops.mmap(t, e, r, n, a);
						throw new Pt.ErrnoError(43);
					},
					msync: function(t, e, r, n, a) {
						return t.stream_ops.msync ? t.stream_ops.msync(t, e, r, n, a) : 0;
					},
					munmap: function(t) {
						return 0;
					},
					ioctl: function(t, e, r) {
						if (t.stream_ops.ioctl) return t.stream_ops.ioctl(t, e, r);
						throw new Pt.ErrnoError(59);
					},
					readFile: function(t) {
						var e, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
						if (r.flags = r.flags || 0, r.encoding = r.encoding || "binary", "utf8" !== r.encoding && "binary" !== r.encoding) throw new Error("Invalid encoding type \"".concat(r.encoding, "\""));
						var n = Pt.open(t, r.flags), a = (t = Pt.stat(t).size, new Uint8Array(t));
						return Pt.read(n, a, 0, t, 0), "utf8" === r.encoding ? e = ct(a, 0) : "binary" === r.encoding && (e = a), Pt.close(n), e;
					},
					writeFile: function(t, e) {
						var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
						if (r.flags = r.flags || 577, t = Pt.open(t, r.flags, r.mode), "string" == typeof e) {
							var n = new Uint8Array(Dt(e) + 1), a = At(e, n, 0, n.length);
							Pt.write(t, n, 0, a, void 0, r.canOwn);
						} else {
							if (!ArrayBuffer.isView(e)) throw new Error("Unsupported data type");
							Pt.write(t, e, 0, e.byteLength, void 0, r.canOwn);
						}
						Pt.close(t);
					},
					cwd: function() {
						return Pt.currentPath;
					},
					chdir: function(t) {
						if (null === (t = Pt.lookupPath(t, { follow: !0 })).node) throw new Pt.ErrnoError(44);
						if (!Pt.isDir(t.node.mode)) throw new Pt.ErrnoError(54);
						var e = Pt.nodePermissions(t.node, "x");
						if (e) throw new Pt.ErrnoError(e);
						Pt.currentPath = t.path;
					},
					createDefaultDirectories: function() {
						Pt.mkdir("/tmp"), Pt.mkdir("/home"), Pt.mkdir("/home/web_user");
					},
					createDefaultDevices: function() {
						function t() {
							return 0 === r && (r = Et(e).byteLength), e[--r];
						}
						Pt.mkdir("/dev"), Pt.registerDevice(Pt.makedev(1, 3), {
							read: function() {
								return 0;
							},
							write: function(t, e, r, n, a) {
								return n;
							}
						}), Pt.mkdev("/dev/null", Pt.makedev(1, 3)), Ot.register(Pt.makedev(5, 0), Ot.default_tty_ops), Ot.register(Pt.makedev(6, 0), Ot.default_tty1_ops), Pt.mkdev("/dev/tty", Pt.makedev(5, 0)), Pt.mkdev("/dev/tty1", Pt.makedev(6, 0));
						var e = /* @__PURE__ */ new Uint8Array(1024), r = 0;
						Pt.createDevice("/dev", "random", t), Pt.createDevice("/dev", "urandom", t), Pt.mkdir("/dev/shm"), Pt.mkdir("/dev/shm/tmp");
					},
					createSpecialDirectories: function() {
						Pt.mkdir("/proc");
						var t = Pt.mkdir("/proc/self");
						Pt.mkdir("/proc/self/fd"), Pt.mount({ mount: function() {
							var e = Pt.createNode(t, "fd", 16895, 73);
							return e.node_ops = { lookup: function(t, e) {
								var r = Pt.getStreamChecked(+e);
								return (e = {
									parent: null,
									mount: { mountpoint: "fake" },
									node_ops: { readlink: function() {
										return r.path;
									} }
								}).parent = e;
							} }, e;
						} }, {}, "/proc/self/fd");
					},
					createStandardStreams: function() {
						g.stdin ? Pt.createDevice("/dev", "stdin", g.stdin) : Pt.symlink("/dev/tty", "/dev/stdin"), g.stdout ? Pt.createDevice("/dev", "stdout", null, g.stdout) : Pt.symlink("/dev/tty", "/dev/stdout"), g.stderr ? Pt.createDevice("/dev", "stderr", null, g.stderr) : Pt.symlink("/dev/tty1", "/dev/stderr"), Pt.open("/dev/stdin", 0), Pt.open("/dev/stdout", 1), Pt.open("/dev/stderr", 1);
					},
					ensureErrnoError: function() {
						Pt.ErrnoError || (Pt.ErrnoError = function(t, e) {
							this.name = "ErrnoError", this.node = e, this.setErrno = function(t) {
								this.errno = t;
							}, this.setErrno(t), this.message = "FS error";
						}, Pt.ErrnoError.prototype = /* @__PURE__ */ new Error(), Pt.ErrnoError.prototype.constructor = Pt.ErrnoError, [44].forEach(function(t) {
							Pt.genericErrors[t] = new Pt.ErrnoError(t), Pt.genericErrors[t].stack = "<generic error, no stack>";
						}));
					},
					staticInit: function() {
						Pt.ensureErrnoError(), Pt.nameTable = new Array(4096), Pt.mount(St, {}, "/"), Pt.createDefaultDirectories(), Pt.createDefaultDevices(), Pt.createSpecialDirectories(), Pt.filesystems = {
							MEMFS: St,
							NODEFS: Nt,
							WORKERFS: jt
						};
					},
					init: function(t, e, r) {
						Pt.init.initialized = !0, Pt.ensureErrnoError(), g.stdin = t || g.stdin, g.stdout = e || g.stdout, g.stderr = r || g.stderr, Pt.createStandardStreams();
					},
					quit: function() {
						Pt.init.initialized = !1;
						for (var t = 0; t < Pt.streams.length; t++) {
							var e = Pt.streams[t];
							e && Pt.close(e);
						}
					},
					findObject: function(t, e) {
						return (t = Pt.analyzePath(t, e)).exists ? t.object : null;
					},
					analyzePath: function(t, e) {
						try {
							t = (n = Pt.lookupPath(t, { follow: !e })).path;
						} catch (t) {}
						var r = {
							isRoot: !1,
							exists: !1,
							error: 0,
							name: null,
							path: null,
							object: null,
							parentExists: !1,
							parentPath: null,
							parentObject: null
						};
						try {
							var n = Pt.lookupPath(t, { parent: !0 });
							r.parentExists = !0, r.parentPath = n.path, r.parentObject = n.node, r.name = wt.basename(t), n = Pt.lookupPath(t, { follow: !e }), r.exists = !0, r.path = n.path, r.object = n.node, r.name = n.node.name, r.isRoot = "/" === n.path;
						} catch (t) {
							r.error = t.errno;
						}
						return r;
					},
					createPath: function(t, e, r, n) {
						t = "string" == typeof t ? t : Pt.getPath(t);
						for (var a = e.split("/").reverse(); a.length;) {
							var o = a.pop();
							if (o) {
								var i = wt.join2(t, o);
								try {
									Pt.mkdir(i);
								} catch (t) {}
								t = i;
							}
						}
						return i;
					},
					createFile: function(t, e, r, n, a) {
						return t = wt.join2("string" == typeof t ? t : Pt.getPath(t), e), e = Gt(n, a), Pt.create(t, e);
					},
					createDataFile: function(t, e, r, n, a, o) {
						var i = e;
						if (t && (t = "string" == typeof t ? t : Pt.getPath(t), i = e ? wt.join2(t, e) : t), e = Gt(n, a), t = Pt.create(i, e), r) {
							if ("string" == typeof r) {
								for (var s = new Array(r.length), c = 0, u = r.length; c < u; ++c) s[c] = r.charCodeAt(c);
								r = s;
							}
							Pt.chmod(t, 146 | e), n = Pt.open(t, 577), Pt.write(n, r, 0, r.length, 0, o), Pt.close(n), Pt.chmod(t, e);
						}
					},
					createDevice: function(t, e, r, n) {
						t = wt.join2("string" == typeof t ? t : Pt.getPath(t), e), e = Gt(!!r, !!n);
						var a = (Pt.createDevice.major || (Pt.createDevice.major = 64), Pt.makedev(Pt.createDevice.major++, 0));
						return Pt.registerDevice(a, {
							open: function(t) {
								t.seekable = !1;
							},
							close: function(t) {
								var e;
								null != n && null != (e = n.buffer) && e.length && n(10);
							},
							read: function(t, e, n, a, o) {
								for (var i, s = 0, c = 0; c < a; c++) {
									try {
										i = r();
									} catch (t) {
										throw new Pt.ErrnoError(29);
									}
									if (void 0 === i && 0 === s) throw new Pt.ErrnoError(6);
									if (null == i) break;
									s++, e[n + c] = i;
								}
								return s && (t.node.timestamp = Date.now()), s;
							},
							write: function(t, e, r, a, o) {
								for (var i = 0; i < a; i++) try {
									n(e[r + i]);
								} catch (t) {
									throw new Pt.ErrnoError(29);
								}
								return a && (t.node.timestamp = Date.now()), i;
							}
						}), Pt.mkdev(t, e, a);
					},
					forceLoadFile: function(t) {
						if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
						if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
						if (!E) throw new Error("Cannot load without read() or XMLHttpRequest.");
						try {
							t.contents = Tt(E(t.url), !0), t.usedBytes = t.contents.length;
						} catch (t) {
							throw new Pt.ErrnoError(29);
						}
					},
					createLazyFile: function(t, e, r, n, a) {
						function o() {
							this.lengthKnown = !1, this.chunks = [];
						}
						if (o.prototype.get = function(t) {
							var e;
							if (!(t > this.length - 1 || t < 0)) return e = t % this.chunkSize, t = t / this.chunkSize | 0, this.getter(t)[e];
						}, o.prototype.setDataGetter = function(t) {
							this.getter = t;
						}, o.prototype.cacheLength = function() {
							if ((a = new XMLHttpRequest()).open("HEAD", r, !1), a.send(null), !(200 <= a.status && a.status < 300 || 304 === a.status)) throw new Error("Couldn't load " + r + ". Status: " + a.status);
							var t, e = Number(a.getResponseHeader("Content-length")), n = (t = a.getResponseHeader("Accept-Ranges")) && "bytes" === t, a = (t = a.getResponseHeader("Content-Encoding")) && "gzip" === t, o = 1048576, i = (n || (o = e), this);
							i.setDataGetter(function(t) {
								var n = t * o, a = (t + 1) * o - 1;
								if (a = Math.min(a, e - 1), void 0 === i.chunks[t] && (i.chunks[t] = function(t, n) {
									if (n < t) throw new Error("invalid range (" + t + ", " + n + ") or no bytes requested!");
									if (e - 1 < n) throw new Error("only " + e + " bytes available! programmer error!");
									var a = new XMLHttpRequest();
									if (a.open("GET", r, !1), e !== o && a.setRequestHeader("Range", "bytes=" + t + "-" + n), a.responseType = "arraybuffer", a.overrideMimeType && a.overrideMimeType("text/plain; charset=x-user-defined"), a.send(null), 200 <= a.status && a.status < 300 || 304 === a.status) return void 0 !== a.response ? new Uint8Array(a.response || []) : Tt(a.responseText || "", !0);
									throw new Error("Couldn't load " + r + ". Status: " + a.status);
								}(n, a)), void 0 === i.chunks[t]) throw new Error("doXHR failed!");
								return i.chunks[t];
							}), !a && e || (o = e = 1, e = this.getter(0).length, o = e, x("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = e, this._chunkSize = o, this.lengthKnown = !0;
						}, "undefined" != typeof XMLHttpRequest) {
							if (!G) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
							var i = new o();
							Object.defineProperties(i, {
								length: { get: function() {
									return this.lengthKnown || this.cacheLength(), this._length;
								} },
								chunkSize: { get: function() {
									return this.lengthKnown || this.cacheLength(), this._chunkSize;
								} }
							}), i = {
								isDevice: !1,
								contents: i
							};
						} else i = {
							isDevice: !1,
							url: r
						};
						var s = Pt.createFile(t, e, i, n, a), c = (i.contents ? s.contents = i.contents : i.url && (s.contents = null, s.url = i.url), Object.defineProperties(s, { usedBytes: { get: function() {
							return this.contents.length;
						} } }), {});
						function u(t, e, r, n, a) {
							var o = t.node.contents;
							if (a >= o.length) return 0;
							var i = Math.min(o.length - a, n);
							if (o.slice) for (var s = 0; s < i; s++) e[r + s] = o[a + s];
							else for (s = 0; s < i; s++) e[r + s] = o.get(a + s);
							return i;
						}
						return Object.keys(s.stream_ops).forEach(function(t) {
							var e = s.stream_ops[t];
							c[t] = function() {
								return Pt.forceLoadFile(s), e.apply(null, arguments);
							};
						}), c.read = function(t, e, r, n, a) {
							return Pt.forceLoadFile(s), u(t, e, r, n, a);
						}, c.mmap = function(t, e, r, n, a) {
							Pt.forceLoadFile(s);
							var o = Lt(e);
							if (o) return u(t, N, o, e, r), {
								ptr: o,
								allocated: !0
							};
							throw new Pt.ErrnoError(48);
						}, s.stream_ops = c, s;
					}
				}, Rt = {
					DEFAULT_POLLMASK: 5,
					calculateAt: function(t, e, r) {
						if (wt.isAbs(e)) return e;
						if (t = -100 === t ? Pt.cwd() : Rt.getStreamFromFD(t).path, 0 != e.length) return wt.join2(t, e);
						if (r) return t;
						throw new Pt.ErrnoError(44);
					},
					doStat: function(t, e, r) {
						try {
							var n = t(e);
						} catch (t) {
							if (t && t.node && wt.normalize(e) !== wt.normalize(Pt.getPath(t.node))) return -54;
							throw t;
						}
						R[r >> 2] = n.dev, R[r + 4 >> 2] = n.mode, k[r + 8 >> 2] = n.nlink, R[r + 12 >> 2] = n.uid, R[r + 16 >> 2] = n.gid, R[r + 20 >> 2] = n.rdev, tt = [n.size >>> 0, (Z = n.size, 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)], R[r + 24 >> 2] = tt[0], R[r + 28 >> 2] = tt[1], R[r + 32 >> 2] = 4096, R[r + 36 >> 2] = n.blocks, t = n.atime.getTime(), e = n.mtime.getTime();
						var a = n.ctime.getTime();
						return tt = [Math.floor(t / 1e3) >>> 0, (Z = Math.floor(t / 1e3), 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)], R[r + 40 >> 2] = tt[0], R[r + 44 >> 2] = tt[1], k[r + 48 >> 2] = t % 1e3 * 1e3, tt = [Math.floor(e / 1e3) >>> 0, (Z = Math.floor(e / 1e3), 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)], R[r + 56 >> 2] = tt[0], R[r + 60 >> 2] = tt[1], k[r + 64 >> 2] = e % 1e3 * 1e3, tt = [Math.floor(a / 1e3) >>> 0, (Z = Math.floor(a / 1e3), 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)], R[r + 72 >> 2] = tt[0], R[r + 76 >> 2] = tt[1], k[r + 80 >> 2] = a % 1e3 * 1e3, tt = [n.ino >>> 0, (Z = n.ino, 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)], R[r + 88 >> 2] = tt[0], R[r + 92 >> 2] = tt[1], 0;
					},
					doMsync: function(t, e, r, n, a) {
						if (!Pt.isFile(e.node.mode)) throw new Pt.ErrnoError(43);
						if (2 & n) return 0;
						t = j.slice(t, t + r), Pt.msync(e, t, a, r, n);
					},
					varargs: void 0,
					get: function() {
						var t = R[+Rt.varargs >> 2];
						return Rt.varargs += 4, t;
					},
					getp: function() {
						return Rt.get();
					},
					getStr: function(t) {
						return ut(t);
					},
					getStreamFromFD: function(t) {
						return Pt.getStreamChecked(t);
					}
				};
				function kt(t, e) {
					return e + 2097152 >>> 0 < 4194305 - !!t ? (t >>> 0) + 4294967296 * e : NaN;
				}
				function Mt(t) {
					R[me() >> 2] = t;
				}
				var It = function(t, e, r) {
					return At(t, j, e, r);
				}, xt = {
					BUCKET_BUFFER_SIZE: 8192,
					mount: function(t) {
						return Pt.createNode(null, "/", 16895, 0);
					},
					createPipe: function() {
						var t = ((a = {
							buckets: [],
							refcnt: 2
						}).buckets.push({
							buffer: new Uint8Array(xt.BUCKET_BUFFER_SIZE),
							offset: 0,
							roffset: 0
						}), xt.nextname()), e = xt.nextname(), r = Pt.createNode(xt.root, t, 4096, 0), n = Pt.createNode(xt.root, e, 4096, 0), a = (r.pipe = a, n.pipe = a, Pt.createStream({
							path: t,
							node: r,
							flags: 0,
							seekable: !1,
							stream_ops: xt.stream_ops
						}));
						return r.stream = a, t = Pt.createStream({
							path: e,
							node: n,
							flags: 1,
							seekable: !1,
							stream_ops: xt.stream_ops
						}), n.stream = t, {
							readable_fd: a.fd,
							writable_fd: t.fd
						};
					},
					stream_ops: {
						poll: function(t) {
							var e = t.node.pipe;
							if (1 == (2097155 & t.flags)) return 260;
							if (0 < e.buckets.length) for (var r = 0; r < e.buckets.length; r++) {
								var n = e.buckets[r];
								if (0 < n.offset - n.roffset) return 65;
							}
							return 0;
						},
						ioctl: function(t, e, r) {
							return 28;
						},
						fsync: function(t) {
							return 28;
						},
						read: function(t, e, r, n, a) {
							for (var o = t.node.pipe, i = 0, s = 0; s < o.buckets.length; s++) {
								var c = o.buckets[s];
								i += c.offset - c.roffset;
							}
							var u = e.subarray(r, r + n);
							if (n <= 0) return 0;
							if (0 == i) throw new Pt.ErrnoError(6);
							var l = Math.min(i, n), f = (t = l, 0);
							for (s = 0; s < o.buckets.length; s++) {
								var d = o.buckets[s], h = d.offset - d.roffset;
								if (l <= h) {
									var m = d.buffer.subarray(d.roffset, d.offset);
									l < h ? (m = m.subarray(0, l), d.roffset += l) : f++, u.set(m);
									break;
								}
								m = d.buffer.subarray(d.roffset, d.offset), u.set(m), u = u.subarray(m.byteLength), l -= m.byteLength, f++;
							}
							return f && f == o.buckets.length && (o.buckets[--f].offset = 0, o.buckets[f].roffset = 0), o.buckets.splice(0, f), t;
						},
						write: function(t, e, r, n, a) {
							var o = t.node.pipe, i = e.subarray(r, r + n);
							if ((t = i.byteLength) <= 0) return 0;
							if (e = null, 0 == o.buckets.length ? (e = {
								buffer: new Uint8Array(xt.BUCKET_BUFFER_SIZE),
								offset: 0,
								roffset: 0
							}, o.buckets.push(e)) : e = o.buckets[o.buckets.length - 1], K(e.offset <= xt.BUCKET_BUFFER_SIZE), t <= (r = xt.BUCKET_BUFFER_SIZE - e.offset)) e.buffer.set(i, e.offset), e.offset += t;
							else {
								0 < r && (e.buffer.set(i.subarray(0, r), e.offset), e.offset += r, i = i.subarray(r, i.byteLength));
								for (var s = i.byteLength / xt.BUCKET_BUFFER_SIZE | 0, c = (n = i.byteLength % xt.BUCKET_BUFFER_SIZE, 0); c < s; c++) {
									var u = {
										buffer: new Uint8Array(xt.BUCKET_BUFFER_SIZE),
										offset: xt.BUCKET_BUFFER_SIZE,
										roffset: 0
									};
									o.buckets.push(u), u.buffer.set(i.subarray(0, xt.BUCKET_BUFFER_SIZE)), i = i.subarray(xt.BUCKET_BUFFER_SIZE, i.byteLength);
								}
								0 < n && (u = {
									buffer: new Uint8Array(xt.BUCKET_BUFFER_SIZE),
									offset: i.byteLength,
									roffset: 0
								}, o.buckets.push(u), u.buffer.set(i));
							}
							return t;
						},
						close: function(t) {
							(t = t.node.pipe).refcnt--, 0 === t.refcnt && (t.buckets = null);
						}
					},
					nextname: function() {
						return xt.nextname.current || (xt.nextname.current = 0), "pipe[" + xt.nextname.current++ + "]";
					}
				};
				function Bt(t) {
					return k[t >> 2] + 4294967296 * R[t + 4 >> 2];
				}
				function Ut(t) {
					return (Kt(t.getFullYear()) ? zt : Wt)[t.getMonth()] + t.getDate() - 1;
				}
				var Kt = function(t) {
					return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
				}, zt = [
					0,
					31,
					60,
					91,
					121,
					152,
					182,
					213,
					244,
					274,
					305,
					335
				], Wt = [
					0,
					31,
					59,
					90,
					120,
					151,
					181,
					212,
					243,
					273,
					304,
					334
				];
				function Vt(t) {
					var e = Dt(t) + 1, r = pe(e);
					return r && It(t, r, e), r;
				}
				function Yt() {
					if (!Yt.strings) {
						var t = {
							USER: "web_user",
							LOGNAME: "web_user",
							PATH: "/",
							PWD: "/",
							HOME: "/home/web_user",
							LANG: ("object" == ("undefined" == typeof navigator ? "undefined" : r(navigator)) && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
							_: $t()
						};
						for (e in Xt) void 0 === Xt[e] ? delete t[e] : t[e] = Xt[e];
						var e, n = [];
						for (e in t) n.push("".concat(e, "=").concat(t[e]));
						Yt.strings = n;
					}
					return Yt.strings;
				}
				function Ht(t) {
					var e;
					Jt() || (null != (e = g.onExit) && e.call(g, t), U = !0), T(t, new ot(t));
				}
				var qt = function() {
					return 2147483648;
				}, Xt = {}, $t = function() {
					return A || "./this.program";
				}, Qt = 0, Jt = function() {
					return st || 0 < Qt;
				};
				function Zt(t, e, r, n) {
					for (var a = 0, o = 0; o < r; o++) {
						var i = k[e >> 2], s = k[e + 4 >> 2];
						if (e += 8, (i = Pt.read(t, N, i, s, n)) < 0) return -1;
						if (a += i, i < s) break;
						void 0 !== n && (n += i);
					}
					return a;
				}
				function te(t, e) {
					N.set(t, e);
				}
				function ee(t, e, r, n) {
					var a = k[n + 40 >> 2], o = {
						tm_sec: R[n >> 2],
						tm_min: R[n + 4 >> 2],
						tm_hour: R[n + 8 >> 2],
						tm_mday: R[n + 12 >> 2],
						tm_mon: R[n + 16 >> 2],
						tm_year: R[n + 20 >> 2],
						tm_wday: R[n + 24 >> 2],
						tm_yday: R[n + 28 >> 2],
						tm_isdst: R[n + 32 >> 2],
						tm_gmtoff: R[n + 36 >> 2],
						tm_zone: a ? ut(a) : ""
					}, i = ut(r), s = {
						"%c": "%a %b %d %H:%M:%S %Y",
						"%D": "%m/%d/%y",
						"%F": "%Y-%m-%d",
						"%h": "%b",
						"%r": "%I:%M:%S %p",
						"%R": "%H:%M",
						"%T": "%H:%M:%S",
						"%x": "%m/%d/%y",
						"%X": "%H:%M:%S",
						"%Ec": "%c",
						"%EC": "%C",
						"%Ex": "%m/%d/%y",
						"%EX": "%H:%M:%S",
						"%Ey": "%y",
						"%EY": "%Y",
						"%Od": "%d",
						"%Oe": "%e",
						"%OH": "%H",
						"%OI": "%I",
						"%Om": "%m",
						"%OM": "%M",
						"%OS": "%S",
						"%Ou": "%u",
						"%OU": "%U",
						"%OV": "%V",
						"%Ow": "%w",
						"%OW": "%W",
						"%Oy": "%y"
					};
					for (p in s) i = i.replace(new RegExp(p, "g"), s[p]);
					var c = [
						"Sunday",
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday"
					], u = [
						"January",
						"February",
						"March",
						"April",
						"May",
						"June",
						"July",
						"August",
						"September",
						"October",
						"November",
						"December"
					];
					function l(t, e, r) {
						for (var n = "number" == typeof t ? t.toString() : t || ""; n.length < e;) n = r[0] + n;
						return n;
					}
					function f(t, e) {
						return l(t, e, "0");
					}
					function d(t, e) {
						function r(t) {
							return t < 0 ? -1 : 0 < t ? 1 : 0;
						}
						var n;
						return 0 === (n = r(t.getFullYear() - e.getFullYear())) && 0 === (n = r(t.getMonth() - e.getMonth())) ? r(t.getDate() - e.getDate()) : n;
					}
					function h(t) {
						switch (t.getDay()) {
							case 0: return new Date(t.getFullYear() - 1, 11, 29);
							case 1: return t;
							case 2: return new Date(t.getFullYear(), 0, 3);
							case 3: return new Date(t.getFullYear(), 0, 2);
							case 4: return new Date(t.getFullYear(), 0, 1);
							case 5: return new Date(t.getFullYear() - 1, 11, 31);
							case 6: return new Date(t.getFullYear() - 1, 11, 30);
						}
					}
					function m(t) {
						t = function(t, e) {
							for (var r = new Date(t.getTime()); 0 < e;) {
								var n = Kt(r.getFullYear()), a = r.getMonth();
								if (!(e > (n = (n ? ce : ue)[a]) - r.getDate())) return r.setDate(r.getDate() + e), r;
								e -= n - r.getDate() + 1, r.setDate(1), a < 11 ? r.setMonth(a + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
							}
							return r;
						}(new Date(t.tm_year + 1900, 0, 1), t.tm_yday);
						var e = new Date(t.getFullYear(), 0, 4), r = new Date(t.getFullYear() + 1, 0, 4);
						return e = h(e), r = h(r), d(e, t) <= 0 ? d(r, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear() : t.getFullYear() - 1;
					}
					var p, g = {
						"%a": function(t) {
							return c[t.tm_wday].substring(0, 3);
						},
						"%A": function(t) {
							return c[t.tm_wday];
						},
						"%b": function(t) {
							return u[t.tm_mon].substring(0, 3);
						},
						"%B": function(t) {
							return u[t.tm_mon];
						},
						"%C": function(t) {
							return f((t.tm_year + 1900) / 100 | 0, 2);
						},
						"%d": function(t) {
							return f(t.tm_mday, 2);
						},
						"%e": function(t) {
							return l(t.tm_mday, 2, " ");
						},
						"%g": function(t) {
							return m(t).toString().substring(2);
						},
						"%G": m,
						"%H": function(t) {
							return f(t.tm_hour, 2);
						},
						"%I": function(t) {
							return 0 == (t = t.tm_hour) ? t = 12 : 12 < t && (t -= 12), f(t, 2);
						},
						"%j": function(t) {
							return f(t.tm_mday + function(t, e) {
								for (var r = 0, n = 0; n <= e; r += t[n++]);
								return r;
							}(Kt(t.tm_year + 1900) ? ce : ue, t.tm_mon - 1), 3);
						},
						"%m": function(t) {
							return f(t.tm_mon + 1, 2);
						},
						"%M": function(t) {
							return f(t.tm_min, 2);
						},
						"%n": function() {
							return "\n";
						},
						"%p": function(t) {
							return 0 <= t.tm_hour && t.tm_hour < 12 ? "AM" : "PM";
						},
						"%S": function(t) {
							return f(t.tm_sec, 2);
						},
						"%t": function() {
							return "	";
						},
						"%u": function(t) {
							return t.tm_wday || 7;
						},
						"%U": function(t) {
							return t = t.tm_yday + 7 - t.tm_wday, f(Math.floor(t / 7), 2);
						},
						"%V": function(t) {
							var e, r = Math.floor((t.tm_yday + 7 - (t.tm_wday + 6) % 7) / 7);
							return (t.tm_wday + 371 - t.tm_yday - 2) % 7 <= 2 && r++, r ? 53 != r || 4 == (e = (t.tm_wday + 371 - t.tm_yday) % 7) || 3 == e && Kt(t.tm_year) || (r = 1) : (r = 52, (4 == (e = (t.tm_wday + 7 - t.tm_yday - 1) % 7) || 5 == e && Kt(t.tm_year % 400 - 1)) && r++), f(r, 2);
						},
						"%w": function(t) {
							return t.tm_wday;
						},
						"%W": function(t) {
							return t = t.tm_yday + 7 - (t.tm_wday + 6) % 7, f(Math.floor(t / 7), 2);
						},
						"%y": function(t) {
							return (t.tm_year + 1900).toString().substring(2);
						},
						"%Y": function(t) {
							return t.tm_year + 1900;
						},
						"%z": function(t) {
							var e = 0 <= (t = t.tm_gmtoff);
							return t = Math.abs(t) / 60, (e ? "+" : "-") + String("0000" + (t / 60 * 100 + t % 60)).slice(-4);
						},
						"%Z": function(t) {
							return t.tm_zone;
						},
						"%%": function() {
							return "%";
						}
					};
					for (p in i = i.replace(/%%/g, "\0\0"), g) i.includes(p) && (i = i.replace(new RegExp(p, "g"), g[p](o)));
					return (n = Tt(i = i.replace(/\0\0/g, "%"), !1)).length > e ? 0 : (te(n, t), n.length - 1);
				}
				function re(t) {
					return g["_" + t];
				}
				function ne(t, e, r, n, a) {
					var o = {
						string: function(t) {
							var e, r, n = 0;
							return null != t && 0 !== t && (e = Dt(t) + 1, r = ve(e), It(t, r, e), n = r), n;
						},
						array: function(t) {
							var e = ve(t.length);
							return te(t, e), e;
						}
					}, i = (t = re(t), []), s = 0;
					if (n) for (var c = 0; c < n.length; c++) {
						var u = o[r[c]];
						u ? (0 === s && (s = we()), i[c] = u(n[c])) : i[c] = n[c];
					}
					return t = t = t.apply(null, i), 0 !== s && Ee(s), "string" === e ? ut(t) : "boolean" === e ? Boolean(t) : t;
				}
				function ae(t, e) {
					ft.set(t, e), ht[t] = ft.get(t);
				}
				function oe(t, e, r, n) {
					this.parent = t = t || this, this.mount = t.mount, this.mounted = null, this.id = Pt.nextInode++, this.name = e, this.mode = r, this.node_ops = {}, this.stream_ops = {}, this.rdev = n;
				}
				var ie, se, ce = [
					31,
					29,
					31,
					30,
					31,
					30,
					31,
					31,
					30,
					31,
					30,
					31
				], ue = [
					31,
					28,
					31,
					30,
					31,
					30,
					31,
					31,
					30,
					31,
					30,
					31
				], le = function(t, e) {
					t < 128 ? e.push(t) : e.push(t % 128 | 128, t >> 7);
				}, fe = [], de = (Object.defineProperties(oe.prototype, {
					read: {
						get: function() {
							return !(365 & ~this.mode);
						},
						set: function(t) {
							t ? this.mode |= 365 : this.mode &= -366;
						}
					},
					write: {
						get: function() {
							return !(146 & ~this.mode);
						},
						set: function(t) {
							t ? this.mode |= 146 : this.mode &= -147;
						}
					},
					isFolder: { get: function() {
						return Pt.isDir(this.mode);
					} },
					isDevice: { get: function() {
						return Pt.isChrdev(this.mode);
					} }
				}), Pt.FSNode = oe, Pt.createPreloadedFile = function(t, e, r, n, a, o, i, s, c, u) {
					var l, f, d, h, m = e ? vt.resolve(wt.join2(t, e)) : t;
					function p(r) {
						function l(r) {
							u?.(), s || Pt.createDataFile(t, e, r, n, a, c), o?.(), $();
						}
						var f, d = r, h = m, p = l, g = function() {
							i?.(), $();
						};
						"undefined" != typeof Browser && Browser.init(), f = !1, Ct.forEach(function(t) {
							f || t.canHandle(h) && (t.handle(d, h, p, g), f = !0);
						}), f || l(r);
					}
					X(), "string" == typeof r ? (f = function(t) {
						p(t);
					}, d = i, h = "al ".concat(l = r), b(l, function(t) {
						K(t, "Loading data file \"".concat(l, "\" failed (no arrayBuffer).")), f(new Uint8Array(t)), h && $();
					}, function(t) {
						if (!d) throw "Loading data file \"".concat(l, "\" failed.");
						d();
					}), h && X()) : p(r);
				}, Pt.staticInit(), g.FS_createPath = Pt.createPath, g.FS_createDataFile = Pt.createDataFile, g.FS_createPreloadedFile = Pt.createPreloadedFile, g.FS_unlink = Pt.unlink, g.FS_createLazyFile = Pt.createLazyFile, g.FS_createDevice = Pt.createDevice, O && Nt.staticInit(), {
					y: function(t, e, r, n) {
						Q("Assertion failed: ".concat(ut(t), ", at: ") + [
							e ? ut(e) : "unknown filename",
							r,
							n ? ut(n) : "unknown function"
						]);
					},
					Ke: function(t, e) {
						return lt(t)(e);
					},
					p: function(t) {
						return (t = new yt(t)).get_caught() || (t.set_caught(!0), pt--), t.set_rethrown(!1), mt.push(t), be(t.excPtr), t.get_exception_ptr();
					},
					v: function() {
						ye(0, 0);
						var t = mt.pop();
						De(t.excPtr), gt = 0;
					},
					a: function() {
						return _t([]);
					},
					i: function(t) {
						return _t([t]);
					},
					x: function(t, e) {
						return _t([t, e]);
					},
					Ab: function() {
						var t = mt.pop(), e = (t || Q("no exception to throw"), t.excPtr);
						throw t.get_rethrown() || (mt.push(t), t.set_rethrown(!0), t.set_caught(!1), pt++), gt = e;
					},
					B: function(t, e, r) {
						throw new yt(t).init(e, r), pt++, gt = t;
					},
					xc: function() {
						return pt;
					},
					e: function(t) {
						throw gt = gt || t;
					},
					ic: function(t, e) {
						try {
							return t = Rt.getStr(t), Pt.chmod(t, e), 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					af: function(t, e, r) {
						try {
							var n, a = Rt.getStreamFromFD(t);
							return a.fd === e ? -28 : ((n = Pt.getStream(e)) && Pt.close(n), Pt.createStream(a, e).fd);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					qc: function(t, e, r, n) {
						try {
							var a, o;
							return e = Rt.getStr(e), e = Rt.calculateAt(t, e), -8 & r ? -28 : (a = Pt.lookupPath(e, { follow: !0 }).node) ? (o = "", 4 & r && (o += "r"), 2 & r && (o += "w"), 1 & r && (o += "x"), o && Pt.nodePermissions(a, o) ? -2 : 0) : -44;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					Rd: function(t, e, r, n, a, o) {
						var i;
						r = kt(r, n), n = kt(a, o);
						try {
							return isNaN(r) ? 61 : (i = Rt.getStreamFromFD(t), Pt.allocate(i, r, n), 0);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					jc: function(t, e) {
						try {
							return Pt.fchmod(t, e), 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					hc: function(t, e, r) {
						try {
							return Pt.fchown(t, e, r), 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					ua: function(t, e, r) {
						Rt.varargs = r;
						try {
							var n = Rt.getStreamFromFD(t);
							switch (e) {
								case 0:
									if ((a = Rt.get()) < 0) return -28;
									for (; Pt.streams[a];) a++;
									return Pt.createStream(n, a).fd;
								case 1:
								case 2:
								case 6:
								case 7: return 0;
								case 3: return n.flags;
								case 4:
									var a = Rt.get();
									return n.flags |= a, 0;
								case 5: return a = Rt.getp(), P[a + 0 >> 1] = 2, 0;
								case 16:
								case 8:
								default: return -28;
								case 9: return Mt(28), -1;
							}
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					lc: function(t) {
						try {
							return Rt.getStreamFromFD(t), 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					je: function(t, e) {
						try {
							var r = Rt.getStreamFromFD(t);
							return Rt.doStat(Pt.stat, r.path, e);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					be: function(t, e, r) {
						e = kt(e, r);
						try {
							return isNaN(e) ? 61 : (Pt.ftruncate(t, e), 0);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					yc: function(t, e) {
						try {
							var r, n;
							return 0 === e ? -28 : (r = Pt.cwd(), e < (n = Dt(r) + 1) ? -68 : (It(r, t, e), n));
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					sc: function(t, e, r) {
						try {
							for (var n = Rt.getStreamFromFD(t), a = (n.getdents || (n.getdents = Pt.readdir(n.path)), 0), o = Pt.llseek(n, 0, 1), i = Math.floor(o / 280); i < n.getdents.length && a + 280 <= r;) {
								var s, c, u, l = n.getdents[i];
								c = "." === l ? (s = n.node.id, 4) : ".." === l ? (s = Pt.lookupPath(n.path, { parent: !0 }).node.id, 4) : (s = (u = Pt.lookupNode(n.node, l)).id, Pt.isChrdev(u.mode) ? 2 : Pt.isDir(u.mode) ? 4 : Pt.isLink(u.mode) ? 10 : 8), tt = [s >>> 0, (Z = s, 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)], R[e + a >> 2] = tt[0], R[e + a + 4 >> 2] = tt[1], tt = [280 * (i + 1) >>> 0, (Z = 280 * (i + 1), 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)], R[e + a + 8 >> 2] = tt[0], R[e + a + 12 >> 2] = tt[1], P[e + a + 16 >> 1] = 280, N[e + a + 18 | 0] = c, It(l, e + a + 19, 256), a += 280, i += 1;
							}
							return Pt.llseek(n, 280 * i, 0), a;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					ue: function(t, e, r) {
						Rt.varargs = r;
						try {
							var n, a = Rt.getStreamFromFD(t);
							switch (e) {
								case 21509:
								case 21510:
								case 21511:
								case 21512:
								case 21524:
								case 21515: return a.tty ? 0 : -59;
								case 21505:
									if (!a.tty) return -59;
									if (a.tty.ops.ioctl_tcgets) {
										var o = a.tty.ops.ioctl_tcgets(a), i = Rt.getp();
										R[i >> 2] = o.c_iflag || 0, R[i + 4 >> 2] = o.c_oflag || 0, R[i + 8 >> 2] = o.c_cflag || 0, R[i + 12 >> 2] = o.c_lflag || 0;
										for (var s = 0; s < 32; s++) N[i + s + 17 | 0] = o.c_cc[s] || 0;
									}
									return 0;
								case 21506:
								case 21507:
								case 21508:
									if (!a.tty) return -59;
									if (a.tty.ops.ioctl_tcsets) {
										i = Rt.getp();
										var c = R[i >> 2], u = R[i + 4 >> 2], l = R[i + 8 >> 2], f = R[i + 12 >> 2], d = [];
										for (s = 0; s < 32; s++) d.push(N[i + s + 17 | 0]);
										return a.tty.ops.ioctl_tcsets(a.tty, e, {
											c_iflag: c,
											c_oflag: u,
											c_cflag: l,
											c_lflag: f,
											c_cc: d
										});
									}
									return 0;
								case 21519: return a.tty ? (i = Rt.getp(), R[i >> 2] = 0) : -59;
								case 21520: return a.tty ? -28 : -59;
								case 21531: return i = Rt.getp(), Pt.ioctl(a, e, i);
								case 21523: return a.tty ? (a.tty.ops.ioctl_tiocgwinsz && (n = a.tty.ops.ioctl_tiocgwinsz(a.tty), i = Rt.getp(), P[i >> 1] = n[0], P[i + 2 >> 1] = n[1]), 0) : -59;
								default: return -28;
							}
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					Fd: function(t, e) {
						try {
							return t = Rt.getStr(t), Rt.doStat(Pt.lstat, t, e);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					uc: function(t, e, r) {
						try {
							return e = Rt.getStr(e), e = Rt.calculateAt(t, e), "/" === (e = wt.normalize(e))[e.length - 1] && (e = e.substr(0, e.length - 1)), Pt.mkdir(e, r, 0), 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					Qd: function(t, e, r, n) {
						try {
							e = Rt.getStr(e);
							var a = 256 & n, o = 4096 & n;
							return n &= -6401, e = Rt.calculateAt(t, e, o), Rt.doStat(a ? Pt.lstat : Pt.stat, e, r);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					Sb: function(t, e, r, n) {
						Rt.varargs = n;
						try {
							e = Rt.getStr(e), e = Rt.calculateAt(t, e);
							var a = n ? Rt.get() : 0;
							return Pt.open(e, r, a).fd;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					bf: function(t) {
						try {
							if (0 == t) throw new Pt.ErrnoError(21);
							var e = xt.createPipe();
							return R[t >> 2] = e.readable_fd, R[t + 4 >> 2] = e.writable_fd, 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					gc: function(t, e, r, n) {
						try {
							var a, o, i;
							return e = Rt.getStr(e), e = Rt.calculateAt(t, e), n <= 0 ? -28 : (a = Pt.readlink(e), o = Math.min(n, Dt(a)), i = N[r + o], It(a, r, n + 1), N[r + o] = i, o);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					vc: function(t, e, r, n) {
						try {
							return e = Rt.getStr(e), n = Rt.getStr(n), e = Rt.calculateAt(t, e), n = Rt.calculateAt(r, n), Pt.rename(e, n), 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					tc: function(t) {
						try {
							return t = Rt.getStr(t), Pt.rmdir(t), 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					$d: function(t, e) {
						try {
							return t = Rt.getStr(t), Rt.doStat(Pt.stat, t, e);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					rc: function(t, e, r) {
						try {
							return t = Rt.getStr(t), R[r + 4 >> 2] = 4096, R[r + 40 >> 2] = 4096, R[r + 8 >> 2] = 1e6, R[r + 12 >> 2] = 5e5, R[r + 16 >> 2] = 5e5, R[r + 20 >> 2] = Pt.nextInode, R[r + 24 >> 2] = 1e6, R[r + 28 >> 2] = 42, R[r + 44 >> 2] = 2, R[r + 36 >> 2] = 255, 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					wc: function(t, e, r) {
						try {
							return e = Rt.getStr(e), e = Rt.calculateAt(t, e), 0 === r ? Pt.unlink(e) : 512 === r ? Pt.rmdir(e) : Q("Invalid flags passed to unlinkat"), 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					kc: function(t, e, r, n) {
						try {
							var a, o;
							return e = Rt.getStr(e), e = Rt.calculateAt(t, e, !0), o = r ? (a = 1e3 * Bt(r) + R[r + 8 >> 2] / 1e6, 1e3 * Bt(r += 16) + R[r + 8 >> 2] / 1e6) : a = Date.now(), Pt.utime(e, a, o), 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					Ie: function() {
						return 1;
					},
					Le: function() {
						st = !1, Qt = 0;
					},
					Ue: function() {
						throw 1 / 0;
					},
					ge: function(t, e, r) {
						t = kt(t, e), e = /* @__PURE__ */ new Date(1e3 * t), R[r >> 2] = e.getSeconds(), R[r + 4 >> 2] = e.getMinutes(), R[r + 8 >> 2] = e.getHours(), R[r + 12 >> 2] = e.getDate(), R[r + 16 >> 2] = e.getMonth(), R[r + 20 >> 2] = e.getFullYear() - 1900, R[r + 24 >> 2] = e.getDay(), t = 0 | Ut(e), R[r + 28 >> 2] = t, R[r + 36 >> 2] = -60 * e.getTimezoneOffset(), t = new Date(e.getFullYear(), 0, 1);
						var n = new Date(e.getFullYear(), 6, 1).getTimezoneOffset();
						e = 0 | (n != (t = t.getTimezoneOffset()) && e.getTimezoneOffset() == Math.min(t, n)), R[r + 32 >> 2] = e;
					},
					he: function(t) {
						e = new Date(R[t + 20 >> 2] + 1900, R[t + 16 >> 2], R[t + 12 >> 2], R[t + 8 >> 2], R[t + 4 >> 2], R[t >> 2], 0), r = R[t + 32 >> 2], n = e.getTimezoneOffset(), i = new Date(e.getFullYear(), 0, 1), a = new Date(e.getFullYear(), 6, 1).getTimezoneOffset(), i = i.getTimezoneOffset(), o = Math.min(i, a), r < 0 ? R[t + 32 >> 2] = Number(a != i && o == n) : 0 < r != (o == n) && (i = Math.max(i, a), a = 0 < r ? o : i, e.setTime(e.getTime() + 6e4 * (a - n))), R[t + 24 >> 2] = e.getDay(), r = 0 | Ut(e), R[t + 28 >> 2] = r, R[t >> 2] = e.getSeconds(), R[t + 4 >> 2] = e.getMinutes(), R[t + 8 >> 2] = e.getHours(), R[t + 12 >> 2] = e.getDate(), R[t + 16 >> 2] = e.getMonth(), R[t + 20 >> 2] = e.getYear(), o = e.getTime();
						var e, r, n, a, o, i = isNaN(o) ? (Mt(61), -1) : o / 1e3;
						return _e((Z = i, 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)), i >>> 0;
					},
					Od: function(t, e, r, n, a, o, i, s) {
						var c, u, l;
						a = kt(a, o);
						try {
							return isNaN(a) ? 61 : (c = Rt.getStreamFromFD(n), l = (u = Pt.mmap(c, t, a, e, r)).ptr, R[i >> 2] = u.allocated, k[s >> 2] = l, 0);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					Pd: function(t, e, r, n, a, o, i) {
						o = kt(o, i);
						try {
							if (isNaN(o)) return 61;
							var s = Rt.getStreamFromFD(a);
							2 & r && Rt.doMsync(t, s, e, n, o), Pt.munmap(s);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return -t.errno;
						}
					},
					ud: function(t, e, r) {
						var n = (/* @__PURE__ */ new Date()).getFullYear(), a = new Date(n, 0, 1), o = (n = new Date(n, 6, 1), a.getTimezoneOffset()), i = n.getTimezoneOffset(), s = Math.max(o, i);
						function c(t) {
							return (t = t.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? t[1] : "GMT";
						}
						k[t >> 2] = 60 * s, R[e >> 2] = Number(o != i), t = c(a), s = c(n), e = Vt(t), a = Vt(s), i < o ? (k[r >> 2] = e, k[r + 4 >> 2] = a) : (k[r >> 2] = a, k[r + 4 >> 2] = e);
					},
					_: function() {
						Q("");
					},
					$a: function() {
						return Date.now();
					},
					Oe: qt,
					ob: function() {
						return performance.now();
					},
					De: function(t, e, r) {
						return j.copyWithin(t, e, e + r);
					},
					ff: function(t) {
						var e = j.length, r = (t >>>= 0, 2147483648);
						if (!(r < t)) for (var n = 1; n <= 4; n *= 2) {
							var a = e * (1 + .2 / n);
							if (a = Math.min(a, t + 100663296), function(t) {
								t = (t - F.buffer.byteLength + 65535) / 65536;
								try {
									return F.grow(t), z(), 1;
								} catch (t) {}
							}(Math.min(r, (a = Math.max(t, a)) + (65536 - a % 65536) % 65536))) return !0;
						}
						return !1;
					},
					nc: function(t, e) {
						var r = 0;
						return Yt().forEach(function(n, a) {
							for (var o = e + r, i = (k[t + 4 * a >> 2] = o, n), s = o, c = 0; c < i.length; ++c) N[0 | s++] = i.charCodeAt(c);
							N[0 | s] = 0, r += n.length + 1;
						}), 0;
					},
					oc: function(t, e) {
						var r = Yt(), n = (k[t >> 2] = r.length, 0);
						return r.forEach(function(t) {
							return n += t.length + 1;
						}), k[e >> 2] = n, 0;
					},
					wa: function(t, e) {
						Ht(t);
					},
					Sa: function(t) {
						try {
							var e = Rt.getStreamFromFD(t);
							return Pt.close(e), 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return t.errno;
						}
					},
					Yb: function(t, e) {
						try {
							var r = Rt.getStreamFromFD(t), n = r.tty ? 2 : Pt.isDir(r.mode) ? 3 : Pt.isLink(r.mode) ? 7 : 4;
							return N[0 | e] = n, P[e + 2 >> 1] = 0, tt = [0, (Z = 0, 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)], R[e + 8 >> 2] = tt[0], R[e + 12 >> 2] = tt[1], tt = [0, (Z = 0, 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)], R[e + 16 >> 2] = tt[0], R[e + 20 >> 2] = tt[1], 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return t.errno;
						}
					},
					ae: function(t, e, r, n, a, o) {
						var i;
						n = kt(n, a);
						try {
							return isNaN(n) ? 61 : (i = Zt(Rt.getStreamFromFD(t), e, r, n), k[o >> 2] = i, 0);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return t.errno;
						}
					},
					Gb: function(t, e, r, n) {
						try {
							var a = Zt(Rt.getStreamFromFD(t), e, r);
							return k[n >> 2] = a, 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return t.errno;
						}
					},
					ie: function(t, e, r, n, a) {
						var o;
						e = kt(e, r);
						try {
							return isNaN(e) ? 61 : (o = Rt.getStreamFromFD(t), Pt.llseek(o, e, n), tt = [o.position >>> 0, (Z = o.position, 1 <= +Math.abs(Z) ? 0 < Z ? +Math.floor(Z / 4294967296) >>> 0 : ~~+Math.ceil((Z - (~~Z >>> 0)) / 4294967296) >>> 0 : 0)], R[a >> 2] = tt[0], R[a + 4 >> 2] = tt[1], o.getdents && 0 === e && 0 === n && (o.getdents = null), 0);
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return t.errno;
						}
					},
					sb: function(t, e, r, n) {
						try {
							var a = function(t, e, r, n) {
								for (var a = 0, o = 0; o < r; o++) {
									var i = k[e >> 2], s = k[e + 4 >> 2];
									if (e += 8, (i = Pt.write(t, N, i, s, n)) < 0) return -1;
									a += i, void 0 !== n && (n += i);
								}
								return a;
							}(Rt.getStreamFromFD(t), e, r);
							return k[n >> 2] = a, 0;
						} catch (t) {
							if (void 0 === Pt || "ErrnoError" !== t.name) throw t;
							return t.errno;
						}
					},
					df: function(t, e) {
						return Et(j.subarray(t, t + e)), 0;
					},
					ac: function(t, e) {
						var r = we();
						try {
							return lt(t)(e);
						} catch (t) {
							if (Ee(r), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					cb: function(t, e, r) {
						var n = we();
						try {
							return lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					rb: function(t, e, r) {
						var n = we();
						try {
							return lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					We: function(t, e, r, n) {
						var a = we();
						try {
							return lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					m: function(t, e) {
						var r = we();
						try {
							return lt(t)(e);
						} catch (t) {
							if (Ee(r), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					X: function(t, e, r) {
						var n = we();
						try {
							return lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					u: function(t, e, r) {
						var n = we();
						try {
							return lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Aa: function(t, e, r, n) {
						var a = we();
						try {
							return lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					A: function(t, e, r, n, a) {
						var o = we();
						try {
							return lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					D: function(t, e, r, n) {
						var a = we();
						try {
							return lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ja: function(t, e, r, n, a) {
						var o = we();
						try {
							return lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					qa: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Zb: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Hb: function(t, e, r) {
						var n = we();
						try {
							return lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ua: function(t, e, r, n) {
						var a = we();
						try {
							return lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ma: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					t: function(t) {
						var e = we();
						try {
							return lt(t)();
						} catch (t) {
							if (Ee(e), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ia: function(t, e) {
						var r = we();
						try {
							return lt(t)(e);
						} catch (t) {
							if (Ee(r), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					xe: function(t, e, r) {
						var n = we();
						try {
							return lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ha: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ma: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ve: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w, E, v, b, D, A) {
						var T = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w, E, v, b, D, A);
						} catch (t) {
							if (Ee(T), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ha: function(t, e, r, n, a) {
						var o = we();
						try {
							return lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					L: function(t, e, r) {
						var n = we();
						try {
							return lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					T: function(t, e, r, n) {
						var a = we();
						try {
							return lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					b: function(t, e) {
						var r = we();
						try {
							return lt(t)(e);
						} catch (t) {
							if (Ee(r), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					z: function(t, e, r) {
						var n = we();
						try {
							return lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Q: function(t, e, r, n) {
						var a = we();
						try {
							return lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					S: function(t, e, r, n, a) {
						var o = we();
						try {
							return lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					O: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Z: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ca: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							return lt(t)(e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ra: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ya: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ge: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m) {
						var p = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m);
						} catch (t) {
							if (Ee(p), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					tb: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Te: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Me: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w, E) {
						var v = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w, E);
						} catch (t) {
							if (Ee(v), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					$b: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					_a: function(t, e, r, n, a) {
						var o = we();
						try {
							return lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Da: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ya: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Wb: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					w: function(t, e, r, n) {
						var a = we();
						try {
							return lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ee: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					c: function(t, e, r) {
						var n = we();
						try {
							return lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					E: function(t, e, r, n) {
						var a = we();
						try {
							return lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Vb: function(t, e, r, n, a) {
						var o = we();
						try {
							return lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					fa: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ea: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					La: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					jb: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ze: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m) {
						var p = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m);
						} catch (t) {
							if (Ee(p), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Xb: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					hb: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y) {
						var _ = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y);
						} catch (t) {
							if (Ee(_), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ob: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Rb: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ub: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					md: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return lr(t, e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Xe: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Tb: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ce: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							return lt(t)(e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					pa: function(t, e, r, n, a) {
						var o = we();
						try {
							return lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Qa: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					V: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ab: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Pb: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					_b: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					d: function(t, e, r, n) {
						var a = we();
						try {
							return lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Y: function(t, e, r, n, a) {
						var o = we();
						try {
							return lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					re: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					mb: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Za: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p) {
						var g = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p);
						} catch (t) {
							if (Ee(g), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ia: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h) {
						var m = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h);
						} catch (t) {
							if (Ee(m), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Mb: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m) {
						var p = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m);
						} catch (t) {
							if (Ee(p), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Nb: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ne: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Fa: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					pb: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					k: function(t, e, r, n, a) {
						var o = we();
						try {
							return lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ba: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Se: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							return lt(t)(e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ib: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					pe: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Lb: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					aa: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ef: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ub: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					n: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Wa: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Fb: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ae: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y) {
						var _ = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y);
						} catch (t) {
							if (Ee(_), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Be: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p) {
						var g = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p);
						} catch (t) {
							if (Ee(g), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					_e: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					se: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ka: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Pa: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					s: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Fe: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ze: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					le: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h) {
						var m = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h);
						} catch (t) {
							if (Ee(m), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Re: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g) {
						var y = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g);
						} catch (t) {
							if (Ee(y), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					te: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ve: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					F: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							return lt(t)(e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					oe: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Va: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Cb: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g) {
						var y = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g);
						} catch (t) {
							if (Ee(y), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					we: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					H: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Pe: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m) {
						var p = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m);
						} catch (t) {
							if (Ee(p), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Je: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Kb: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					M: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ba: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					za: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h) {
						var m = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h);
						} catch (t) {
							if (Ee(m), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ea: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					va: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					la: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ke: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h) {
						var m = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h);
						} catch (t) {
							if (Ee(m), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ca: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h) {
						var m = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h);
						} catch (t) {
							if (Ee(m), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					gb: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m) {
						var p = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m);
						} catch (t) {
							if (Ee(p), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Oa: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p) {
						var g = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p);
						} catch (t) {
							if (Ee(g), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					pc: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _) {
						var w = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _);
						} catch (t) {
							if (Ee(w), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					qe: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w) {
						var E = we();
						try {
							return lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w);
						} catch (t) {
							if (Ee(E), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					zc: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y) {
						var _ = we();
						try {
							return Jr(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y);
						} catch (t) {
							if (Ee(_), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					hd: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _) {
						var w = we();
						try {
							return yr(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _);
						} catch (t) {
							if (Ee(w), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					yd: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w) {
						var E = we();
						try {
							return ar(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w);
						} catch (t) {
							if (Ee(E), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					zd: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p) {
						var g = we();
						try {
							return or(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p);
						} catch (t) {
							if (Ee(g), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Fc: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g) {
						var y = we();
						try {
							return qr(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g);
						} catch (t) {
							if (Ee(y), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Oc: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return Br(t, e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Xc: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							return Fr(t, e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Yc: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m) {
						var p = we();
						try {
							return Cr(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m);
						} catch (t) {
							if (Ee(p), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Qc: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return Ir(t, e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					wd: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return hr(t, e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Uc: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return Pr(t, e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					sd: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							return We(t, e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					vd: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return fr(t, e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Gc: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return Ue(t, e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Cd: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return pr(t, e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Sd: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return Be(t, e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Kd: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							return Ze(t, e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Nc: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return Ur(t, e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Bd: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return ir(t, e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Rc: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return Rr(t, e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Vc: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return jr(t, e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					qd: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return Ne(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ld: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return Ye(t, e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					gd: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return _r(t, e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					td: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return Xe(t, e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Xd: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return Ie(t, e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Yd: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return Re(t, e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Wd: function(t, e, r, n, a) {
						var o = we();
						try {
							return ke(t, e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					rd: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return je(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Dc: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return Xr(t, e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					pd: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							return cr(t, e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ad: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return Tr(t, e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Hd: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							return Gr(t, e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Jd: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return er(t, e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ad: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							return sr(t, e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					_c: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return Lr(t, e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					cd: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							return Dr(t, e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Wc: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							return Nr(t, e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					id: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return gr(t, e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Zd: function(t, e, r, n) {
						var a = we();
						try {
							return Ce(t, e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Pc: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							return xr(t, e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					_d: function(t, e, r, n, a) {
						var o = we();
						try {
							return Oe(t, e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					nd: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return ze(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Vd: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							return Me(t, e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Bb: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return wr(t, e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ac: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return Fe(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Jc: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							return Vr(t, e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Dd: function(t, e, r) {
						var n = we();
						try {
							return He(t, e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ud: function(t, e, r, n) {
						var a = we();
						try {
							return Pe(t, e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Td: function(t) {
						var e = we();
						try {
							return xe(t);
						} catch (t) {
							if (Ee(e), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					de: function(t, e) {
						var r = we();
						try {
							return Se(t, e);
						} catch (t) {
							if (Ee(r), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ce: function(t, e, r) {
						var n = we();
						try {
							return Ge(t, e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Md: function(t, e, r, n) {
						var a = we();
						try {
							return Qe(t, e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Kc: function(t, e, r, n, a) {
						var o = we();
						try {
							return Hr(t, e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					fe: function(t, e, r, n, a) {
						var o = we();
						try {
							return Le(t, e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					od: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w, E, v, b, D, A, T) {
						var L = we();
						try {
							return ur(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w, E, v, b, D, A, T);
						} catch (t) {
							if (Ee(L), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					bd: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return Or(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					$c: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							return Sr(t, e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ic: function(t, e, r, n) {
						var a = we();
						try {
							return rr(t, e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Mc: function(t, e, r, n, a, o) {
						var i = we();
						try {
							return Wr(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Cc: function(t, e, r, n) {
						var a = we();
						try {
							return $r(t, e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					l: function(t) {
						var e = we();
						try {
							lt(t)();
						} catch (t) {
							if (Ee(e), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ja: function(t, e) {
						var r = we();
						try {
							lt(t)(e);
						} catch (t) {
							if (Ee(r), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ne: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Db: function(t, e, r, n, a) {
						var o = we();
						try {
							lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					g: function(t, e) {
						var r = we();
						try {
							lt(t)(e);
						} catch (t) {
							if (Ee(r), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					R: function(t, e, r) {
						var n = we();
						try {
							lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					I: function(t, e, r, n) {
						var a = we();
						try {
							lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					W: function(t, e, r, n, a) {
						var o = we();
						try {
							lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					da: function(t, e, r, n, a, o) {
						var i = we();
						try {
							lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					vb: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ye: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							lt(t)(e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					fb: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					kb: function(t, e, r, n, a, o) {
						var i = we();
						try {
							lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					sa: function(t, e, r, n, a) {
						var o = we();
						try {
							lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					N: function(t, e, r, n) {
						var a = we();
						try {
							lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					lb: function(t, e, r, n, a) {
						var o = we();
						try {
							lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					$: function(t, e, r, n, a, o) {
						var i = we();
						try {
							lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Eb: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					h: function(t, e, r) {
						var n = we();
						try {
							lt(t)(e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					C: function(t, e, r, n) {
						var a = we();
						try {
							lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					J: function(t, e, r, n, a) {
						var o = we();
						try {
							lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ga: function(t, e, r, n, a, o) {
						var i = we();
						try {
							lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ta: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Xa: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ye: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					nb: function(t, e, r, n, a, o) {
						var i = we();
						try {
							lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					bc: function(t, e, r, n, a) {
						var o = we();
						try {
							lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					K: function(t, e, r, n, a, o) {
						var i = we();
						try {
							lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					eb: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					f: function(t, e, r, n) {
						var a = we();
						try {
							lt(t)(e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ka: function(t, e, r, n, a) {
						var o = we();
						try {
							lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					bb: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					cf: function(t, e, r, n, a, o) {
						var i = we();
						try {
							lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					j: function(t, e, r, n, a) {
						var o = we();
						try {
							lt(t)(e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ra: function(t, e, r, n, a, o) {
						var i = we();
						try {
							lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					xa: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							lt(t)(e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					db: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ec: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ib: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					wb: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ta: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Na: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Qb: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					o: function(t, e, r, n, a, o) {
						var i = we();
						try {
							lt(t)(e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					fc: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w, E, v) {
						var b = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y, _, w, E, v);
						} catch (t) {
							if (Ee(b), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					zb: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h) {
						var m = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h);
						} catch (t) {
							if (Ee(m), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					yb: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Jb: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m) {
						var p = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m);
						} catch (t) {
							if (Ee(p), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					q: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							lt(t)(e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					G: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							lt(t)(e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					me: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					U: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					He: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Qe: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m) {
						var p = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m);
						} catch (t) {
							if (Ee(p), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					P: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					na: function(t, e, r, n, a, o, i, s, c, u, l) {
						var f = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l);
						} catch (t) {
							if (Ee(f), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					qb: function(t, e, r, n, a, o, i, s, c, u, l, f) {
						var d = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f);
						} catch (t) {
							if (Ee(d), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					dc: function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
						var h = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f, d);
						} catch (t) {
							if (Ee(h), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					xb: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m) {
						var p = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m);
						} catch (t) {
							if (Ee(p), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ga: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p) {
						var g = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p);
						} catch (t) {
							if (Ee(g), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					cc: function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y) {
						var _ = we();
						try {
							lt(t)(e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, g, y);
						} catch (t) {
							if (Ee(_), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					xd: function(t, e, r, n, a, o, i, s, c) {
						var u = we();
						try {
							dr(t, e, r, n, a, o, i, s, c);
						} catch (t) {
							if (Ee(u), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ld: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							Je(t, e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Bc: function(t, e, r, n, a, o) {
						var i = we();
						try {
							Qr(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Id: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							tr(t, e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					dd: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							Ar(t, e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Gd: function(t, e, r, n, a) {
						var o = we();
						try {
							$e(t, e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ec: function(t, e, r, n, a, o) {
						var i = we();
						try {
							qe(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ee: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							Er(t, e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					jd: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							zr(t, e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Zc: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							br(t, e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Nd: function(t, e, r, n) {
						var a = we();
						try {
							Ve(t, e, r, n);
						} catch (t) {
							if (Ee(a), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Hc: function(t, e, r, n, a) {
						var o = we();
						try {
							Kr(t, e, r, n, a);
						} catch (t) {
							if (Ee(o), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Sc: function(t, e, r, n, a, o) {
						var i = we();
						try {
							Mr(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					fd: function(t, e, r, n, a, o) {
						var i = we();
						try {
							Ke(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Lc: function(t, e, r, n, a, o, i, s, c, u) {
						var l = we();
						try {
							Yr(t, e, r, n, a, o, i, s, c, u);
						} catch (t) {
							if (Ee(l), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Tc: function(t, e, r, n, a, o, i) {
						var s = we();
						try {
							kr(t, e, r, n, a, o, i);
						} catch (t) {
							if (Ee(s), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					kd: function(t, e, r, n, a, o) {
						var i = we();
						try {
							mr(t, e, r, n, a, o);
						} catch (t) {
							if (Ee(i), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					ed: function(t, e, r, n, a, o, i, s) {
						var c = we();
						try {
							vr(t, e, r, n, a, o, i, s);
						} catch (t) {
							if (Ee(c), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					Ed: function(t, e, r) {
						var n = we();
						try {
							nr(t, e, r);
						} catch (t) {
							if (Ee(n), t !== t + 0) throw t;
							ye(1, 0);
						}
					},
					r: function(t) {
						return t;
					},
					$e: Ht,
					oa: ee,
					mc: function(t, e, r, n, a) {
						return ee(t, e, r, n);
					}
				}), he = function() {
					var t, r, n, a = { a: de };
					function o(t, e) {
						return he = t.exports, F = he.gf, z(), ft = he.hh, t = he.hf, V.unshift(t), $(), he;
					}
					if (X(), g.instantiateWasm) try {
						return g.instantiateWasm(a, o);
					} catch (a) {
						B("Module.instantiateWasm callback failed with error: ".concat(a)), e(a);
					}
					return t = J, r = a, n = function(t) {
						o(t.instance);
					}, (C || "function" != typeof WebAssembly.instantiateStreaming || et(t) || rt(t) || O || "function" != typeof fetch ? at(t, r, n) : fetch(t, { credentials: "same-origin" }).then(function(e) {
						return WebAssembly.instantiateStreaming(e, r).then(n, function(e) {
							return B("wasm streaming compile failed: ".concat(e)), B("falling back to ArrayBuffer instantiation"), at(t, r, n);
						});
					})).catch(e), {};
				}(), me = (g._CPLSetConfigOption = function(t, e) {
					return (g._CPLSetConfigOption = he.jf)(t, e);
				}, g._CPLSetThreadLocalConfigOption = function(t, e) {
					return (g._CPLSetThreadLocalConfigOption = he.kf)(t, e);
				}, g._CPLError = function(t, e, r, n) {
					return (g._CPLError = he.lf)(t, e, r, n);
				}, g._CPLErrorReset = function() {
					return (g._CPLErrorReset = he.mf)();
				}, g._CPLGetLastErrorNo = function() {
					return (g._CPLGetLastErrorNo = he.nf)();
				}, g._CPLGetLastErrorType = function() {
					return (g._CPLGetLastErrorType = he.of)();
				}, g._CPLGetLastErrorMsg = function() {
					return (g._CPLGetLastErrorMsg = he.pf)();
				}, g._CPLQuietErrorHandler = function(t, e, r) {
					return (g._CPLQuietErrorHandler = he.qf)(t, e, r);
				}, g._CPLSetErrorHandler = function(t) {
					return (g._CPLSetErrorHandler = he.rf)(t);
				}, g._CSLCount = function(t) {
					return (g._CSLCount = he.sf)(t);
				}, g._CPLAtof = function(t) {
					return (g._CPLAtof = he.tf)(t);
				}, g._GDALSuggestedWarpOutput = function(t, e, r, n, a, o) {
					return (g._GDALSuggestedWarpOutput = he.uf)(t, e, r, n, a, o);
				}, g._GDALGenImgProjTransform = function(t, e, r, n, a, o, i) {
					return (g._GDALGenImgProjTransform = he.vf)(t, e, r, n, a, o, i);
				}, g._GDALCreateGenImgProjTransformer = function(t, e, r, n, a, o, i) {
					return (g._GDALCreateGenImgProjTransformer = he.wf)(t, e, r, n, a, o, i);
				}, g._GDALCreateGenImgProjTransformer2 = function(t, e, r) {
					return (g._GDALCreateGenImgProjTransformer2 = he.xf)(t, e, r);
				}, g._GDALDestroyGenImgProjTransformer = function(t) {
					return (g._GDALDestroyGenImgProjTransformer = he.yf)(t);
				}, g._GDALInvGeoTransform = function(t, e) {
					return (g._GDALInvGeoTransform = he.zf)(t, e);
				}, g._GDALReprojectImage = function(t, e, r, n, a, o, i, s, c, u) {
					return (g._GDALReprojectImage = he.Af)(t, e, r, n, a, o, i, s, c, u);
				}, g._OSRNewSpatialReference = function(t) {
					return (g._OSRNewSpatialReference = he.Bf)(t);
				}, g._OSRDestroySpatialReference = function(t) {
					return (g._OSRDestroySpatialReference = he.Cf)(t);
				}, g._OSRExportToWkt = function(t, e) {
					return (g._OSRExportToWkt = he.Df)(t, e);
				}, g._OSRSetFromUserInput = function(t, e) {
					return (g._OSRSetFromUserInput = he.Ef)(t, e);
				}, g._OSRImportFromEPSG = function(t, e) {
					return (g._OSRImportFromEPSG = he.Ff)(t, e);
				}, g._OSRSetAxisMappingStrategy = function(t, e) {
					return (g._OSRSetAxisMappingStrategy = he.Gf)(t, e);
				}, g._OCTDestroyCoordinateTransformation = function(t) {
					return (g._OCTDestroyCoordinateTransformation = he.Hf)(t);
				}, g._OCTNewCoordinateTransformation = function(t, e) {
					return (g._OCTNewCoordinateTransformation = he.If)(t, e);
				}, g._OCTTransform = function(t, e, r, n, a) {
					return (g._OCTTransform = he.Jf)(t, e, r, n, a);
				}, g._GDALAllRegister = function() {
					return (g._GDALAllRegister = he.Kf)();
				}, g._OGRGetDriverCount = function() {
					return (g._OGRGetDriverCount = he.Lf)();
				}, g._OGRGetDriver = function(t) {
					return (g._OGRGetDriver = he.Mf)(t);
				}, g._OGR_L_GetFeatureCount = function(t, e) {
					return (g._OGR_L_GetFeatureCount = he.Nf)(t, e);
				}, g._OGR_L_GetName = function(t) {
					return (g._OGR_L_GetName = he.Of)(t);
				}, g._OGR_DS_GetLayerCount = function(t) {
					return (g._OGR_DS_GetLayerCount = he.Pf)(t);
				}, g._OGR_DS_GetLayer = function(t, e) {
					return (g._OGR_DS_GetLayer = he.Qf)(t, e);
				}, g._OGR_DS_GetName = function(t) {
					return (g._OGR_DS_GetName = he.Rf)(t);
				}, g._OGR_DS_GetDriver = function(t) {
					return (g._OGR_DS_GetDriver = he.Sf)(t);
				}, g._OGR_Dr_GetName = function(t) {
					return (g._OGR_Dr_GetName = he.Tf)(t);
				}, g._GDALCreate = function(t, e, r, n, a, o, i) {
					return (g._GDALCreate = he.Uf)(t, e, r, n, a, o, i);
				}, g._GDALCreateCopy = function(t, e, r, n, a, o, i) {
					return (g._GDALCreateCopy = he.Vf)(t, e, r, n, a, o, i);
				}, g._GDALGetDriverShortName = function(t) {
					return (g._GDALGetDriverShortName = he.Wf)(t);
				}, g._GDALGetDriverLongName = function(t) {
					return (g._GDALGetDriverLongName = he.Xf)(t);
				}, g._GDALGetDriverCount = function() {
					return (g._GDALGetDriverCount = he.Yf)();
				}, g._GDALGetDriver = function(t) {
					return (g._GDALGetDriver = he.Zf)(t);
				}, g._GDALGetDriverByName = function(t) {
					return (g._GDALGetDriverByName = he._f)(t);
				}, g._GDALGetRasterXSize = function(t) {
					return (g._GDALGetRasterXSize = he.$f)(t);
				}, g._GDALGetRasterYSize = function(t) {
					return (g._GDALGetRasterYSize = he.ag)(t);
				}, g._GDALGetRasterBand = function(t, e) {
					return (g._GDALGetRasterBand = he.bg)(t, e);
				}, g._GDALGetRasterCount = function(t) {
					return (g._GDALGetRasterCount = he.cg)(t);
				}, g._GDALGetSpatialRef = function(t) {
					return (g._GDALGetSpatialRef = he.dg)(t);
				}, g._GDALGetProjectionRef = function(t) {
					return (g._GDALGetProjectionRef = he.eg)(t);
				}, g._GDALSetProjection = function(t, e) {
					return (g._GDALSetProjection = he.fg)(t, e);
				}, g._GDALGetGeoTransform = function(t, e) {
					return (g._GDALGetGeoTransform = he.gg)(t, e);
				}, g._GDALSetGeoTransform = function(t, e) {
					return (g._GDALSetGeoTransform = he.hg)(t, e);
				}, g._GDALGetDatasetDriver = function(t) {
					return (g._GDALGetDatasetDriver = he.ig)(t);
				}, g._GDALGetFileList = function(t) {
					return (g._GDALGetFileList = he.jg)(t);
				}, g._GDALOpen = function(t, e) {
					return (g._GDALOpen = he.kg)(t, e);
				}, g._GDALOpenEx = function(t, e, r, n, a) {
					return (g._GDALOpenEx = he.lg)(t, e, r, n, a);
				}, g._GDALClose = function(t) {
					return (g._GDALClose = he.mg)(t);
				}, g._GDALDatasetGetLayerCount = function(t) {
					return (g._GDALDatasetGetLayerCount = he.ng)(t);
				}, g._GDALDatasetGetLayer = function(t, e) {
					return (g._GDALDatasetGetLayer = he.og)(t, e);
				}, g._GDALGetRasterDataType = function(t) {
					return (g._GDALGetRasterDataType = he.pg)(t);
				}, g._GDALGetRasterNoDataValue = function(t, e) {
					return (g._GDALGetRasterNoDataValue = he.qg)(t, e);
				}, g._GDALGetRasterMaximum = function(t, e) {
					return (g._GDALGetRasterMaximum = he.rg)(t, e);
				}, g._GDALGetRasterMinimum = function(t, e) {
					return (g._GDALGetRasterMinimum = he.sg)(t, e);
				}, g._GDALGetRasterStatistics = function(t, e, r, n, a, o, i) {
					return (g._GDALGetRasterStatistics = he.tg)(t, e, r, n, a, o, i);
				}, g._GDALSetCacheMax = function(t) {
					return (g._GDALSetCacheMax = he.ug)(t);
				}, g._GDALGetDescription = function(t) {
					return (g._GDALGetDescription = he.vg)(t);
				}, g._GDALGetMetadataItem = function(t, e, r) {
					return (g._GDALGetMetadataItem = he.wg)(t, e, r);
				}, g._GDALInfo = function(t, e) {
					return (g._GDALInfo = he.xg)(t, e);
				}, g._GDALInfoOptionsNew = function(t, e) {
					return (g._GDALInfoOptionsNew = he.yg)(t, e);
				}, g._GDALInfoOptionsFree = function(t) {
					return (g._GDALInfoOptionsFree = he.zg)(t);
				}, g._GDALBuildVRT = function(t, e, r, n, a, o) {
					return (g._GDALBuildVRT = he.Ag)(t, e, r, n, a, o);
				}, g._GDALBuildVRTOptionsFree = function(t) {
					return (g._GDALBuildVRTOptionsFree = he.Bg)(t);
				}, g._GDALBuildVRTOptionsNew = function(t, e) {
					return (g._GDALBuildVRTOptionsNew = he.Cg)(t, e);
				}, g._GDALTranslate = function(t, e, r, n) {
					return (g._GDALTranslate = he.Dg)(t, e, r, n);
				}, g._GDALTranslateOptionsNew = function(t, e) {
					return (g._GDALTranslateOptionsNew = he.Eg)(t, e);
				}, g._GDALTranslateOptionsFree = function(t) {
					return (g._GDALTranslateOptionsFree = he.Fg)(t);
				}, g._GDALRasterize = function(t, e, r, n, a) {
					return (g._GDALRasterize = he.Gg)(t, e, r, n, a);
				}, g._GDALRasterizeOptionsNew = function(t, e) {
					return (g._GDALRasterizeOptionsNew = he.Hg)(t, e);
				}, g._GDALRasterizeOptionsFree = function(t) {
					return (g._GDALRasterizeOptionsFree = he.Ig)(t);
				}, g._GDALWarp = function(t, e, r, n, a, o) {
					return (g._GDALWarp = he.Jg)(t, e, r, n, a, o);
				}, g._GDALWarpAppOptionsNew = function(t, e) {
					return (g._GDALWarpAppOptionsNew = he.Kg)(t, e);
				}, g._GDALWarpAppOptionsFree = function(t) {
					return (g._GDALWarpAppOptionsFree = he.Lg)(t);
				}, g._GDALWarpAppOptionsSetProgress = function(t, e, r) {
					return (g._GDALWarpAppOptionsSetProgress = he.Mg)(t, e, r);
				}, g._GDALVectorInfoOptionsFree = function(t) {
					return (g._GDALVectorInfoOptionsFree = he.Ng)(t);
				}, g._GDALVectorInfo = function(t, e) {
					return (g._GDALVectorInfo = he.Og)(t, e);
				}, g._GDALVectorInfoOptionsNew = function(t, e) {
					return (g._GDALVectorInfoOptionsNew = he.Pg)(t, e);
				}, g._GDALVectorTranslate = function(t, e, r, n, a, o) {
					return (g._GDALVectorTranslate = he.Qg)(t, e, r, n, a, o);
				}, g._GDALVectorTranslateOptionsNew = function(t, e) {
					return (g._GDALVectorTranslateOptionsNew = he.Rg)(t, e);
				}, g._GDALVectorTranslateOptionsFree = function(t) {
					return (g._GDALVectorTranslateOptionsFree = he.Sg)(t);
				}, g._GDALDEMProcessing = function(t, e, r, n, a, o) {
					return (g._GDALDEMProcessing = he.Tg)(t, e, r, n, a, o);
				}, g._GDALDEMProcessingOptionsNew = function(t, e) {
					return (g._GDALDEMProcessingOptionsNew = he.Ug)(t, e);
				}, g._GDALDEMProcessingOptionsFree = function(t) {
					return (g._GDALDEMProcessingOptionsFree = he.Vg)(t);
				}, function() {
					return (me = he.Wg)();
				}), pe = g._malloc = function(t) {
					return (pe = g._malloc = he.Xg)(t);
				}, ge = (g._free = function(t) {
					return (g._free = he.Yg)(t);
				}, function(t, e) {
					return (ge = he.Zg)(t, e);
				}), ye = function(t, e) {
					return (ye = he._g)(t, e);
				}, _e = function(t) {
					return (_e = he.$g)(t);
				}, we = function() {
					return (we = he.ah)();
				}, Ee = function(t) {
					return (Ee = he.bh)(t);
				}, ve = function(t) {
					return (ve = he.ch)(t);
				}, be = function(t) {
					return (be = he.dh)(t);
				}, De = function(t) {
					return (De = he.eh)(t);
				}, Ae = function(t, e, r) {
					return (Ae = he.fh)(t, e, r);
				}, Te = function(t) {
					return (Te = he.gh)(t);
				}, Le = g.dynCall_jiiii = function(t, e, r, n, a) {
					return (Le = g.dynCall_jiiii = he.ih)(t, e, r, n, a);
				}, Ge = g.dynCall_jii = function(t, e, r) {
					return (Ge = g.dynCall_jii = he.jh)(t, e, r);
				}, Oe = g.dynCall_iiji = function(t, e, r, n, a) {
					return (Oe = g.dynCall_iiji = he.kh)(t, e, r, n, a);
				}, Se = g.dynCall_ji = function(t, e) {
					return (Se = g.dynCall_ji = he.lh)(t, e);
				}, Ce = g.dynCall_iij = function(t, e, r, n) {
					return (Ce = g.dynCall_iij = he.mh)(t, e, r, n);
				}, Fe = g.dynCall_iijj = function(t, e, r, n, a, o) {
					return (Fe = g.dynCall_iijj = he.nh)(t, e, r, n, a, o);
				}, Ne = g.dynCall_iiiij = function(t, e, r, n, a, o) {
					return (Ne = g.dynCall_iiiij = he.oh)(t, e, r, n, a, o);
				}, je = g.dynCall_iiiji = function(t, e, r, n, a, o) {
					return (je = g.dynCall_iiiji = he.ph)(t, e, r, n, a, o);
				}, Pe = g.dynCall_iji = function(t, e, r, n) {
					return (Pe = g.dynCall_iji = he.qh)(t, e, r, n);
				}, Re = g.dynCall_iiiijjjii = function(t, e, r, n, a, o, i, s, c, u, l, f) {
					return (Re = g.dynCall_iiiijjjii = he.rh)(t, e, r, n, a, o, i, s, c, u, l, f);
				}, ke = g.dynCall_iiij = function(t, e, r, n, a) {
					return (ke = g.dynCall_iiij = he.sh)(t, e, r, n, a);
				}, Me = g.dynCall_iijiiii = function(t, e, r, n, a, o, i, s) {
					return (Me = g.dynCall_iijiiii = he.th)(t, e, r, n, a, o, i, s);
				}, Ie = g.dynCall_iiiijjji = function(t, e, r, n, a, o, i, s, c, u, l) {
					return (Ie = g.dynCall_iiiijjji = he.uh)(t, e, r, n, a, o, i, s, c, u, l);
				}, xe = g.dynCall_j = function(t) {
					return (xe = g.dynCall_j = he.vh)(t);
				}, Be = g.dynCall_iiiiij = function(t, e, r, n, a, o, i) {
					return (Be = g.dynCall_iiiiij = he.wh)(t, e, r, n, a, o, i);
				}, Ue = g.dynCall_iiiiiijj = function(t, e, r, n, a, o, i, s, c, u) {
					return (Ue = g.dynCall_iiiiiijj = he.xh)(t, e, r, n, a, o, i, s, c, u);
				}, Ke = g.dynCall_vijii = function(t, e, r, n, a, o) {
					return (Ke = g.dynCall_vijii = he.yh)(t, e, r, n, a, o);
				}, ze = g.dynCall_iijii = function(t, e, r, n, a, o) {
					return (ze = g.dynCall_iijii = he.zh)(t, e, r, n, a, o);
				}, We = g.dynCall_iiiiiij = function(t, e, r, n, a, o, i, s) {
					return (We = g.dynCall_iiiiiij = he.Ah)(t, e, r, n, a, o, i, s);
				}, Ve = g.dynCall_vij = function(t, e, r, n) {
					return (Ve = g.dynCall_vij = he.Bh)(t, e, r, n);
				}, Ye = g.dynCall_iiiiji = function(t, e, r, n, a, o, i) {
					return (Ye = g.dynCall_iiiiji = he.Ch)(t, e, r, n, a, o, i);
				}, He = g.dynCall_ij = function(t, e, r) {
					return (He = g.dynCall_ij = he.Dh)(t, e, r);
				}, qe = g.dynCall_viiji = function(t, e, r, n, a, o) {
					return (qe = g.dynCall_viiji = he.Eh)(t, e, r, n, a, o);
				}, Xe = g.dynCall_iiiijji = function(t, e, r, n, a, o, i, s, c) {
					return (Xe = g.dynCall_iiiijji = he.Fh)(t, e, r, n, a, o, i, s, c);
				}, $e = g.dynCall_viij = function(t, e, r, n, a) {
					return ($e = g.dynCall_viij = he.Gh)(t, e, r, n, a);
				}, Qe = g.dynCall_jiii = function(t, e, r, n) {
					return (Qe = g.dynCall_jiii = he.Hh)(t, e, r, n);
				}, Je = g.dynCall_viiiij = function(t, e, r, n, a, o, i) {
					return (Je = g.dynCall_viiiij = he.Ih)(t, e, r, n, a, o, i);
				}, Ze = g.dynCall_iiiiiji = function(t, e, r, n, a, o, i, s) {
					return (Ze = g.dynCall_iiiiiji = he.Jh)(t, e, r, n, a, o, i, s);
				}, tr = g.dynCall_viiiji = function(t, e, r, n, a, o, i) {
					return (tr = g.dynCall_viiiji = he.Kh)(t, e, r, n, a, o, i);
				}, er = g.dynCall_iiijiiiiii = function(t, e, r, n, a, o, i, s, c, u, l) {
					return (er = g.dynCall_iiijiiiiii = he.Lh)(t, e, r, n, a, o, i, s, c, u, l);
				}, rr = g.dynCall_jij = function(t, e, r, n) {
					return (rr = g.dynCall_jij = he.Mh)(t, e, r, n);
				}, nr = g.dynCall_vj = function(t, e, r) {
					return (nr = g.dynCall_vj = he.Nh)(t, e, r);
				}, ar = g.dynCall_iiiiiiiiiiiiijjji = function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, y, _, w, E) {
					return (ar = g.dynCall_iiiiiiiiiiiiijjji = he.Oh)(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, y, _, w, E);
				}, or = g.dynCall_iiiiiiiiiiijji = function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p) {
					return (or = g.dynCall_iiiiiiiiiiijji = he.Ph)(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p);
				}, ir = g.dynCall_iiiiijiiiii = function(t, e, r, n, a, o, i, s, c, u, l, f) {
					return (ir = g.dynCall_iiiiijiiiii = he.Qh)(t, e, r, n, a, o, i, s, c, u, l, f);
				}, sr = g.dynCall_iiijiiiiiii = function(t, e, r, n, a, o, i, s, c, u, l, f) {
					return (sr = g.dynCall_iiijiiiiiii = he.Rh)(t, e, r, n, a, o, i, s, c, u, l, f);
				}, cr = g.dynCall_iiijiii = function(t, e, r, n, a, o, i, s) {
					return (cr = g.dynCall_iiijiii = he.Sh)(t, e, r, n, a, o, i, s);
				}, ur = g.dynCall_jiiiiiiiiiiiiiiiiiiiiiiiii = function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, y, _, w, E, v, b, D, A, T, L) {
					return (ur = g.dynCall_jiiiiiiiiiiiiiiiiiiiiiiiii = he.Th)(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, y, _, w, E, v, b, D, A, T, L);
				}, lr = g.dynCall_iiiddddji = function(t, e, r, n, a, o, i, s, c, u) {
					return (lr = g.dynCall_iiiddddji = he.Uh)(t, e, r, n, a, o, i, s, c, u);
				}, fr = g.dynCall_iiiiiijii = function(t, e, r, n, a, o, i, s, c, u) {
					return (fr = g.dynCall_iiiiiijii = he.Vh)(t, e, r, n, a, o, i, s, c, u);
				}, dr = g.dynCall_viiiiiji = function(t, e, r, n, a, o, i, s, c) {
					return (dr = g.dynCall_viiiiiji = he.Wh)(t, e, r, n, a, o, i, s, c);
				}, hr = g.dynCall_iiiiiiijiii = function(t, e, r, n, a, o, i, s, c, u, l, f) {
					return (hr = g.dynCall_iiiiiiijiii = he.Xh)(t, e, r, n, a, o, i, s, c, u, l, f);
				}, mr = g.dynCall_vijj = function(t, e, r, n, a, o) {
					return (mr = g.dynCall_vijj = he.Yh)(t, e, r, n, a, o);
				}, pr = g.dynCall_iiiiiijjii = function(t, e, r, n, a, o, i, s, c, u, l, f) {
					return (pr = g.dynCall_iiiiiijjii = he.Zh)(t, e, r, n, a, o, i, s, c, u, l, f);
				}, gr = g.dynCall_iiijjiji = function(t, e, r, n, a, o, i, s, c, u, l) {
					return (gr = g.dynCall_iiijjiji = he._h)(t, e, r, n, a, o, i, s, c, u, l);
				}, yr = g.dynCall_iiiiiiiiiiiiijjii = function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, y, _, w) {
					return (yr = g.dynCall_iiiiiiiiiiiiijjii = he.$h)(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, y, _, w);
				}, _r = g.dynCall_iiiijiiiii = function(t, e, r, n, a, o, i, s, c, u, l) {
					return (_r = g.dynCall_iiiijiiiii = he.ai)(t, e, r, n, a, o, i, s, c, u, l);
				}, wr = g.dynCall_iijiiiiiii = function(t, e, r, n, a, o, i, s, c, u, l) {
					return (wr = g.dynCall_iijiiiiiii = he.bi)(t, e, r, n, a, o, i, s, c, u, l);
				}, Er = g.dynCall_viijj = function(t, e, r, n, a, o, i) {
					return (Er = g.dynCall_viijj = he.ci)(t, e, r, n, a, o, i);
				}, vr = g.dynCall_vijjj = function(t, e, r, n, a, o, i, s) {
					return (vr = g.dynCall_vijjj = he.di)(t, e, r, n, a, o, i, s);
				}, br = g.dynCall_viijjji = function(t, e, r, n, a, o, i, s, c, u) {
					return (br = g.dynCall_viijjji = he.ei)(t, e, r, n, a, o, i, s, c, u);
				}, Dr = g.dynCall_iiijj = function(t, e, r, n, a, o, i) {
					return (Dr = g.dynCall_iiijj = he.fi)(t, e, r, n, a, o, i);
				}, Ar = g.dynCall_viiijj = function(t, e, r, n, a, o, i, s) {
					return (Ar = g.dynCall_viiijj = he.gi)(t, e, r, n, a, o, i, s);
				}, Tr = g.dynCall_iiijiiii = function(t, e, r, n, a, o, i, s, c) {
					return (Tr = g.dynCall_iiijiiii = he.hi)(t, e, r, n, a, o, i, s, c);
				}, Lr = g.dynCall_iiijiiiji = function(t, e, r, n, a, o, i, s, c, u, l) {
					return (Lr = g.dynCall_iiijiiiji = he.ii)(t, e, r, n, a, o, i, s, c, u, l);
				}, Gr = g.dynCall_iiijiiiii = function(t, e, r, n, a, o, i, s, c, u) {
					return (Gr = g.dynCall_iiijiiiii = he.ji)(t, e, r, n, a, o, i, s, c, u);
				}, Or = g.dynCall_jiiji = function(t, e, r, n, a, o) {
					return (Or = g.dynCall_jiiji = he.ki)(t, e, r, n, a, o);
				}, Sr = g.dynCall_jiijji = function(t, e, r, n, a, o, i, s) {
					return (Sr = g.dynCall_jiijji = he.li)(t, e, r, n, a, o, i, s);
				}, Cr = g.dynCall_iiiiiiiijjji = function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m) {
					return (Cr = g.dynCall_iiiiiiiijjji = he.mi)(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m);
				}, Fr = g.dynCall_iiiiiiiijiii = function(t, e, r, n, a, o, i, s, c, u, l, f, d) {
					return (Fr = g.dynCall_iiiiiiiijiii = he.ni)(t, e, r, n, a, o, i, s, c, u, l, f, d);
				}, Nr = g.dynCall_iiijjii = function(t, e, r, n, a, o, i, s, c) {
					return (Nr = g.dynCall_iiijjii = he.oi)(t, e, r, n, a, o, i, s, c);
				}, jr = g.dynCall_iiiiijjii = function(t, e, r, n, a, o, i, s, c, u, l) {
					return (jr = g.dynCall_iiiiijjii = he.pi)(t, e, r, n, a, o, i, s, c, u, l);
				}, Pr = g.dynCall_iiiiiiijji = function(t, e, r, n, a, o, i, s, c, u, l, f) {
					return (Pr = g.dynCall_iiiiiiijji = he.qi)(t, e, r, n, a, o, i, s, c, u, l, f);
				}, Rr = g.dynCall_iiiiijji = function(t, e, r, n, a, o, i, s, c, u) {
					return (Rr = g.dynCall_iiiiijji = he.ri)(t, e, r, n, a, o, i, s, c, u);
				}, kr = g.dynCall_vijiii = function(t, e, r, n, a, o, i) {
					return (kr = g.dynCall_vijiii = he.si)(t, e, r, n, a, o, i);
				}, Mr = g.dynCall_vijid = function(t, e, r, n, a, o) {
					return (Mr = g.dynCall_vijid = he.ti)(t, e, r, n, a, o);
				}, Ir = g.dynCall_iiiiiiij = function(t, e, r, n, a, o, i, s, c) {
					return (Ir = g.dynCall_iiiiiiij = he.ui)(t, e, r, n, a, o, i, s, c);
				}, xr = g.dynCall_iijdddd = function(t, e, r, n, a, o, i, s) {
					return (xr = g.dynCall_iijdddd = he.vi)(t, e, r, n, a, o, i, s);
				}, Br = g.dynCall_iiiiiiiijii = function(t, e, r, n, a, o, i, s, c, u, l, f) {
					return (Br = g.dynCall_iiiiiiiijii = he.wi)(t, e, r, n, a, o, i, s, c, u, l, f);
				}, Ur = g.dynCall_iiiiijiiii = function(t, e, r, n, a, o, i, s, c, u, l) {
					return (Ur = g.dynCall_iiiiijiiii = he.xi)(t, e, r, n, a, o, i, s, c, u, l);
				}, Kr = g.dynCall_viji = function(t, e, r, n, a) {
					return (Kr = g.dynCall_viji = he.yi)(t, e, r, n, a);
				}, zr = g.dynCall_viijji = function(t, e, r, n, a, o, i, s) {
					return (zr = g.dynCall_viijji = he.zi)(t, e, r, n, a, o, i, s);
				}, Wr = g.dynCall_jijj = function(t, e, r, n, a, o) {
					return (Wr = g.dynCall_jijj = he.Ai)(t, e, r, n, a, o);
				}, Vr = g.dynCall_iijjjddi = function(t, e, r, n, a, o, i, s, c, u, l) {
					return (Vr = g.dynCall_iijjjddi = he.Bi)(t, e, r, n, a, o, i, s, c, u, l);
				}, Yr = g.dynCall_vijiidddi = function(t, e, r, n, a, o, i, s, c, u) {
					return (Yr = g.dynCall_vijiidddi = he.Ci)(t, e, r, n, a, o, i, s, c, u);
				}, Hr = g.dynCall_jiiid = function(t, e, r, n, a) {
					return (Hr = g.dynCall_jiiid = he.Di)(t, e, r, n, a);
				}, qr = g.dynCall_iiiiiiiiiijiiiii = function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, y) {
					return (qr = g.dynCall_iiiiiiiiiijiiiii = he.Ei)(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, y);
				}, Xr = g.dynCall_iiijii = function(t, e, r, n, a, o, i) {
					return (Xr = g.dynCall_iiijii = he.Fi)(t, e, r, n, a, o, i);
				}, $r = g.dynCall_jji = function(t, e, r, n) {
					return ($r = g.dynCall_jji = he.Gi)(t, e, r, n);
				}, Qr = g.dynCall_viiij = function(t, e, r, n, a, o) {
					return (Qr = g.dynCall_viiij = he.Hi)(t, e, r, n, a, o);
				}, Jr = g.dynCall_iiiiiiiiiiiiiijj = function(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, y, _) {
					return (Jr = g.dynCall_iiiiiiiiiiiiiijj = he.Ii)(t, e, r, n, a, o, i, s, c, u, l, f, d, h, m, p, y, _);
				};
				function Zr() {
					function e() {
						se || (se = !0, g.calledRun = !0, U) || (g.noFSInit || Pt.init.initialized || Pt.init(), Pt.ignorePermissions = !1, xt.root = Pt.mount(xt, {}, null), it(V), t(g), g.onRuntimeInitialized && g.onRuntimeInitialized(), function() {
							if (g.postRun) for ("function" == typeof g.postRun && (g.postRun = [g.postRun]); g.postRun.length;) t = g.postRun.shift(), Y.unshift(t);
							var t;
							it(Y);
						}());
					}
					0 < H || (function() {
						if (g.preRun) for ("function" == typeof g.preRun && (g.preRun = [g.preRun]); g.preRun.length;) t = g.preRun.shift(), W.unshift(t);
						var t;
						it(W);
					}(), 0 < H) || (g.setStatus ? (g.setStatus("Running..."), setTimeout(function() {
						setTimeout(function() {
							g.setStatus("");
						}, 1), e();
					}, 1)) : e());
				}
				if (g.addRunDependency = X, g.removeRunDependency = $, g.FS_createPath = Pt.createPath, g.FS_createLazyFile = Pt.createLazyFile, g.FS_createDevice = Pt.createDevice, g.ENV = Xt, g.ccall = ne, g.cwrap = function(t, e, r, n) {
					var a = !r || r.every(function(t) {
						return "number" === t || "boolean" === t;
					});
					return "string" !== e && a && !n ? re(t) : function() {
						return ne(t, e, r, arguments);
					};
				}, g.addFunction = function(t, e) {
					if (n = t, ie || (ie = /* @__PURE__ */ new WeakMap(), function(t, e) {
						if (ie) for (var r = 0; r < 0 + e; r++) {
							var n = lt(r);
							n && ie.set(n, r);
						}
					}(0, ft.length)), n = ie.get(n) || 0) return n;
					var r, n = function() {
						if (fe.length) return fe.pop();
						try {
							ft.grow(1);
						} catch (D) {
							if (D instanceof RangeError) throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
							throw D;
						}
						return ft.length - 1;
					}();
					try {
						ae(n, t);
					} catch (D) {
						if (!(D instanceof TypeError)) throw D;
						r = t;
						var a = "function" == typeof WebAssembly.Function ? new WebAssembly.Function(function(t) {
							for (var e = {
								i: "i32",
								j: "i64",
								f: "f32",
								d: "f64",
								e: "externref",
								p: "i32"
							}, r = {
								parameters: [],
								results: "v" == t[0] ? [] : [e[t[0]]]
							}, n = 1; n < t.length; ++n) r.parameters.push(e[t[n]]);
							return r;
						}(e), r) : (function(t, e) {
							var r = t.slice(0, 1), n = t.slice(1), a = {
								i: 127,
								p: 127,
								j: 126,
								f: 125,
								d: 124,
								e: 111
							};
							e.push(96), le(n.length, e);
							for (var o = 0; o < n.length; ++o) e.push(a[n[o]]);
							"v" == r ? e.push(0) : e.push(1, a[r]);
						}(e, e = [1]), le(e.length, a = [
							0,
							97,
							115,
							109,
							1,
							0,
							0,
							0,
							1
						]), a.push.apply(a, e), a.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0), e = new WebAssembly.Module(new Uint8Array(a)), new WebAssembly.Instance(e, { e: { f: r } }).exports.f);
						ae(n, a);
					}
					return ie.set(t, n), n;
				}, g.setValue = function(t, e) {
					var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "i8";
					switch (r = r.endsWith("*") ? "*" : r) {
						case "i1":
						case "i8":
							N[0 | t] = e;
							break;
						case "i16":
							P[t >> 1] = e;
							break;
						case "i32":
							R[t >> 2] = e;
							break;
						case "i64": Q("to do setValue(i64) use WASM_BIGINT");
						case "float":
							M[t >> 2] = e;
							break;
						case "double":
							I[t >> 3] = e;
							break;
						case "*":
							k[t >> 2] = e;
							break;
						default: Q("invalid type for setValue: ".concat(r));
					}
				}, g.getValue = function(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "i8";
					switch (e = e.endsWith("*") ? "*" : e) {
						case "i1":
						case "i8": return N[0 | t];
						case "i16": return P[t >> 1];
						case "i32": return R[t >> 2];
						case "i64": Q("to do getValue(i64) use WASM_BIGINT");
						case "float": return M[t >> 2];
						case "double": return I[t >> 3];
						case "*": return k[t >> 2];
						default: Q("invalid type for getValue: ".concat(e));
					}
				}, g.UTF8ToString = ut, g.stringToUTF8 = It, g.lengthBytesUTF8 = Dt, g.FS_createPreloadedFile = Pt.createPreloadedFile, g.FS = Pt, g.FS_createDataFile = Pt.createDataFile, g.FS_unlink = Pt.unlink, g.MEMFS = St, g.WORKERFS = jt, g.NODEFS = Nt, q = function t() {
					se || Zr(), se || (q = t);
				}, g.preInit) for ("function" == typeof g.preInit && (g.preInit = [g.preInit]); 0 < g.preInit.length;) g.preInit.pop()();
				return Zr(), h.ready;
			};
			var y = c(h.exports), _ = { Module: {} };
			function w() {
				var t = _.CPLGetLastErrorMsg(), e = _.CPLGetLastErrorNo();
				return _.CPLErrorReset(), {
					no: e,
					message: t
				};
			}
			function E(t) {
				for (var e = [], r = {}, n = 0; n < t.length; n += 1) {
					var a = t[n];
					"--config" === a ? (r[t[n + 1]] = t[n + 2], n += 2) : e.push(a);
				}
				var o = e.map(function(t) {
					return _.Module._malloc(_.Module.lengthBytesUTF8(t) + 1);
				}), i = (o.push(0), Uint32Array.from(o)), s = (e.forEach(function(t, e) {
					_.Module.stringToUTF8(t, i[e], _.Module.lengthBytesUTF8(t) + 1);
				}), _.Module._malloc(i.length * i.BYTES_PER_ELEMENT));
				return _.Module.HEAPU32.set(i, s / i.BYTES_PER_ELEMENT), {
					ptr: s,
					ptrArray: o,
					config: r
				};
			}
			function v(t) {
				_.Module._free(t.ptr), t.ptrArray.forEach(function(t) {
					_.Module._free(t);
				});
			}
			var b = "/input", D = "/output", A = D, T = (g = {}, h = u(Object.freeze({
				__proto__: null,
				default: {}
			})), u(Object.freeze({
				__proto__: null,
				default: {}
			}))), L = g, G = (L.parser = function(t, e) {
				return new O(t, e);
			}, L.SAXParser = O, L.SAXStream = F, L.createStream = function(t, e) {
				return new F(t, e);
			}, L.MAX_BUFFER_LENGTH = 65536, [
				"comment",
				"sgmlDecl",
				"textNode",
				"tagName",
				"doctype",
				"procInstName",
				"procInstBody",
				"entity",
				"attribName",
				"attribValue",
				"cdata",
				"script"
			]);
			function O(t, e) {
				if (!(this instanceof O)) return new O(t, e);
				for (var r = this, n = r, a = 0, o = G.length; a < o; a++) n[G[a]] = "";
				r.q = r.c = "", r.bufferCheckPosition = L.MAX_BUFFER_LENGTH, r.opt = e || {}, r.opt.lowercase = r.opt.lowercase || r.opt.lowercasetags, r.looseCase = r.opt.lowercase ? "toLowerCase" : "toUpperCase", r.tags = [], r.closed = r.closedRoot = r.sawRoot = !1, r.tag = r.error = null, r.strict = !!t, r.noscript = !(!t && !r.opt.noscript), r.state = H.BEGIN, r.strictEntities = r.opt.strictEntities, r.ENTITIES = r.strictEntities ? Object.create(L.XML_ENTITIES) : Object.create(L.ENTITIES), r.attribList = [], r.opt.xmlns && (r.ns = Object.create(k)), r.trackPosition = !1 !== r.opt.position, r.trackPosition && (r.position = r.line = r.column = 0), q(r, "onready");
			}
			L.EVENTS = [
				"text",
				"processinginstruction",
				"sgmldeclaration",
				"doctype",
				"comment",
				"opentagstart",
				"attribute",
				"opentag",
				"closetag",
				"opencdata",
				"cdata",
				"closecdata",
				"error",
				"end",
				"ready",
				"script",
				"opennamespace",
				"closenamespace"
			], Object.create || (Object.create = function(t) {
				function e() {}
				return e.prototype = t, new e();
			}), Object.keys || (Object.keys = function(t) {
				var e, r = [];
				for (e in t) t.hasOwnProperty(e) && r.push(e);
				return r;
			}), O.prototype = {
				end: function() {
					Z(this);
				},
				write: function(t) {
					var e = this;
					if (this.error) throw this.error;
					if (e.closed) return J(e, "Cannot write after close. Assign an onready handler.");
					if (null === t) return Z(e);
					"object" == typeof t && (t = t.toString());
					for (var r, n, a = 0, o = ""; o = st(t, a++), e.c = o;) switch (e.trackPosition && (e.position++, "\n" === o ? (e.line++, e.column = 0) : e.column++), e.state) {
						case H.BEGIN:
							if (e.state = H.BEGIN_WHITESPACE, "﻿" === o) continue;
							it(e, o);
							continue;
						case H.BEGIN_WHITESPACE:
							it(e, o);
							continue;
						case H.TEXT:
							if (e.sawRoot && !e.closedRoot) {
								for (var i = a - 1; o && "<" !== o && "&" !== o;) (o = st(t, a++)) && e.trackPosition && (e.position++, "\n" === o ? (e.line++, e.column = 0) : e.column++);
								e.textNode += t.substring(i, a - 1);
							}
							"<" !== o || e.sawRoot && e.closedRoot && !e.strict ? (U(o) || e.sawRoot && !e.closedRoot || tt(e, "Text data outside of root node."), "&" === o ? e.state = H.TEXT_ENTITY : e.textNode += o) : (e.state = H.OPEN_WAKA, e.startTagPosition = e.position);
							continue;
						case H.SCRIPT:
							"<" === o ? e.state = H.SCRIPT_ENDING : e.script += o;
							continue;
						case H.SCRIPT_ENDING:
							"/" === o ? e.state = H.CLOSE_TAG : (e.script += "<" + o, e.state = H.SCRIPT);
							continue;
						case H.OPEN_WAKA:
							"!" === o ? (e.state = H.SGML_DECL, e.sgmlDecl = "") : U(o) || (z(M, o) ? (e.state = H.OPEN_TAG, e.tagName = o) : "/" === o ? (e.state = H.CLOSE_TAG, e.tagName = "") : "?" === o ? (e.state = H.PROC_INST, e.procInstName = e.procInstBody = "") : (tt(e, "Unencoded <"), e.startTagPosition + 1 < e.position && (i = e.position - e.startTagPosition, o = new Array(i).join(" ") + o), e.textNode += "<" + o, e.state = H.TEXT));
							continue;
						case H.SGML_DECL:
							(e.sgmlDecl + o).toUpperCase() === N ? (X(e, "onopencdata"), e.state = H.CDATA, e.sgmlDecl = "", e.cdata = "") : e.sgmlDecl + o === "--" ? (e.state = H.COMMENT, e.comment = "", e.sgmlDecl = "") : (e.sgmlDecl + o).toUpperCase() === j ? (e.state = H.DOCTYPE, (e.doctype || e.sawRoot) && tt(e, "Inappropriately located doctype declaration"), e.doctype = "", e.sgmlDecl = "") : ">" === o ? (X(e, "onsgmldeclaration", e.sgmlDecl), e.sgmlDecl = "", e.state = H.TEXT) : (K(o) && (e.state = H.SGML_DECL_QUOTED), e.sgmlDecl += o);
							continue;
						case H.SGML_DECL_QUOTED:
							o === e.q && (e.state = H.SGML_DECL, e.q = ""), e.sgmlDecl += o;
							continue;
						case H.DOCTYPE:
							">" === o ? (e.state = H.TEXT, X(e, "ondoctype", e.doctype), e.doctype = !0) : (e.doctype += o, "[" === o ? e.state = H.DOCTYPE_DTD : K(o) && (e.state = H.DOCTYPE_QUOTED, e.q = o));
							continue;
						case H.DOCTYPE_QUOTED:
							e.doctype += o, o === e.q && (e.q = "", e.state = H.DOCTYPE);
							continue;
						case H.DOCTYPE_DTD:
							e.doctype += o, "]" === o ? e.state = H.DOCTYPE : K(o) && (e.state = H.DOCTYPE_DTD_QUOTED, e.q = o);
							continue;
						case H.DOCTYPE_DTD_QUOTED:
							e.doctype += o, o === e.q && (e.state = H.DOCTYPE_DTD, e.q = "");
							continue;
						case H.COMMENT:
							"-" === o ? e.state = H.COMMENT_ENDING : e.comment += o;
							continue;
						case H.COMMENT_ENDING:
							"-" === o ? (e.state = H.COMMENT_ENDED, e.comment = Q(e.opt, e.comment), e.comment && X(e, "oncomment", e.comment), e.comment = "") : (e.comment += "-" + o, e.state = H.COMMENT);
							continue;
						case H.COMMENT_ENDED:
							">" !== o ? (tt(e, "Malformed comment"), e.comment += "--" + o, e.state = H.COMMENT) : e.state = H.TEXT;
							continue;
						case H.CDATA:
							"]" === o ? e.state = H.CDATA_ENDING : e.cdata += o;
							continue;
						case H.CDATA_ENDING:
							"]" === o ? e.state = H.CDATA_ENDING_2 : (e.cdata += "]" + o, e.state = H.CDATA);
							continue;
						case H.CDATA_ENDING_2:
							">" === o ? (e.cdata && X(e, "oncdata", e.cdata), X(e, "onclosecdata"), e.cdata = "", e.state = H.TEXT) : "]" === o ? e.cdata += "]" : (e.cdata += "]]" + o, e.state = H.CDATA);
							continue;
						case H.PROC_INST:
							"?" === o ? e.state = H.PROC_INST_ENDING : U(o) ? e.state = H.PROC_INST_BODY : e.procInstName += o;
							continue;
						case H.PROC_INST_BODY:
							if (!e.procInstBody && U(o)) continue;
							"?" === o ? e.state = H.PROC_INST_ENDING : e.procInstBody += o;
							continue;
						case H.PROC_INST_ENDING:
							">" === o ? (X(e, "onprocessinginstruction", {
								name: e.procInstName,
								body: e.procInstBody
							}), e.procInstName = e.procInstBody = "", e.state = H.TEXT) : (e.procInstBody += "?" + o, e.state = H.PROC_INST_BODY);
							continue;
						case H.OPEN_TAG:
							z(I, o) ? e.tagName += o : (function(t) {
								t.strict || (t.tagName = t.tagName[t.looseCase]());
								var e = t.tags[t.tags.length - 1] || t, r = t.tag = {
									name: t.tagName,
									attributes: {}
								};
								t.opt.xmlns && (r.ns = e.ns), t.attribList.length = 0, X(t, "onopentagstart", r);
							}(e), ">" === o ? nt(e) : "/" === o ? e.state = H.OPEN_TAG_SLASH : (U(o) || tt(e, "Invalid character in tag name"), e.state = H.ATTRIB));
							continue;
						case H.OPEN_TAG_SLASH:
							">" === o ? (nt(e, !0), at(e)) : (tt(e, "Forward-slash in opening tag not followed by >"), e.state = H.ATTRIB);
							continue;
						case H.ATTRIB:
							if (U(o)) continue;
							">" === o ? nt(e) : "/" === o ? e.state = H.OPEN_TAG_SLASH : z(M, o) ? (e.attribName = o, e.attribValue = "", e.state = H.ATTRIB_NAME) : tt(e, "Invalid attribute name");
							continue;
						case H.ATTRIB_NAME:
							"=" === o ? e.state = H.ATTRIB_VALUE : ">" === o ? (tt(e, "Attribute without value"), e.attribValue = e.attribName, rt(e), nt(e)) : U(o) ? e.state = H.ATTRIB_NAME_SAW_WHITE : z(I, o) ? e.attribName += o : tt(e, "Invalid attribute name");
							continue;
						case H.ATTRIB_NAME_SAW_WHITE:
							if ("=" === o) e.state = H.ATTRIB_VALUE;
							else {
								if (U(o)) continue;
								tt(e, "Attribute without value"), e.tag.attributes[e.attribName] = "", e.attribValue = "", X(e, "onattribute", {
									name: e.attribName,
									value: ""
								}), e.attribName = "", ">" === o ? nt(e) : z(M, o) ? (e.attribName = o, e.state = H.ATTRIB_NAME) : (tt(e, "Invalid attribute name"), e.state = H.ATTRIB);
							}
							continue;
						case H.ATTRIB_VALUE:
							if (U(o)) continue;
							K(o) ? (e.q = o, e.state = H.ATTRIB_VALUE_QUOTED) : (tt(e, "Unquoted attribute value"), e.state = H.ATTRIB_VALUE_UNQUOTED, e.attribValue = o);
							continue;
						case H.ATTRIB_VALUE_QUOTED:
							if (o !== e.q) {
								"&" === o ? e.state = H.ATTRIB_VALUE_ENTITY_Q : e.attribValue += o;
								continue;
							}
							rt(e), e.q = "", e.state = H.ATTRIB_VALUE_CLOSED;
							continue;
						case H.ATTRIB_VALUE_CLOSED:
							U(o) ? e.state = H.ATTRIB : ">" === o ? nt(e) : "/" === o ? e.state = H.OPEN_TAG_SLASH : z(M, o) ? (tt(e, "No whitespace between attributes"), e.attribName = o, e.attribValue = "", e.state = H.ATTRIB_NAME) : tt(e, "Invalid attribute name");
							continue;
						case H.ATTRIB_VALUE_UNQUOTED:
							if (!function(t) {
								return ">" === t || U(t);
							}(o)) {
								"&" === o ? e.state = H.ATTRIB_VALUE_ENTITY_U : e.attribValue += o;
								continue;
							}
							rt(e), ">" === o ? nt(e) : e.state = H.ATTRIB;
							continue;
						case H.CLOSE_TAG:
							if (e.tagName) ">" === o ? at(e) : z(I, o) ? e.tagName += o : e.script ? (e.script += "</" + e.tagName, e.tagName = "", e.state = H.SCRIPT) : (U(o) || tt(e, "Invalid tagname in closing tag"), e.state = H.CLOSE_TAG_SAW_WHITE);
							else {
								if (U(o)) continue;
								!function(t, e) {
									return !z(t, e);
								}(M, o) ? e.tagName = o : e.script ? (e.script += "</" + o, e.state = H.SCRIPT) : tt(e, "Invalid tagname in closing tag.");
							}
							continue;
						case H.CLOSE_TAG_SAW_WHITE:
							if (U(o)) continue;
							">" === o ? at(e) : tt(e, "Invalid characters in closing tag");
							continue;
						case H.TEXT_ENTITY:
						case H.ATTRIB_VALUE_ENTITY_Q:
						case H.ATTRIB_VALUE_ENTITY_U:
							switch (e.state) {
								case H.TEXT_ENTITY:
									r = H.TEXT, n = "textNode";
									break;
								case H.ATTRIB_VALUE_ENTITY_Q:
									r = H.ATTRIB_VALUE_QUOTED, n = "attribValue";
									break;
								case H.ATTRIB_VALUE_ENTITY_U: r = H.ATTRIB_VALUE_UNQUOTED, n = "attribValue";
							}
							var s;
							";" === o ? e.opt.unparsedEntities ? (s = ot(e), e.entity = "", e.state = r, e.write(s)) : (e[n] += ot(e), e.entity = "", e.state = r) : z(e.entity.length ? B : x, o) ? e.entity += o : (tt(e, "Invalid character in entity name"), e[n] += "&" + e.entity + o, e.entity = "", e.state = r);
							continue;
						default: throw new Error(e, "Unknown state: " + e.state);
					}
					return e.position >= e.bufferCheckPosition && function(t) {
						for (var e = Math.max(L.MAX_BUFFER_LENGTH, 10), r = 0, n = 0, a = G.length; n < a; n++) {
							var o = t[G[n]].length;
							if (e < o) switch (G[n]) {
								case "textNode":
									$(t);
									break;
								case "cdata":
									X(t, "oncdata", t.cdata), t.cdata = "";
									break;
								case "script":
									X(t, "onscript", t.script), t.script = "";
									break;
								default: J(t, "Max buffer length exceeded: " + G[n]);
							}
							r = Math.max(r, o);
						}
						t.bufferCheckPosition = L.MAX_BUFFER_LENGTH - r + t.position;
					}(e), e;
				},
				resume: function() {
					return this.error = null, this;
				},
				close: function() {
					return this.write(null);
				},
				flush: function() {
					var t;
					$(t = this), "" !== t.cdata && (X(t, "oncdata", t.cdata), t.cdata = ""), "" !== t.script && (X(t, "onscript", t.script), t.script = "");
				}
			};
			try {
				S = h.Stream;
			} catch (u) {
				S = function() {};
			}
			var S = S || function() {}, C = L.EVENTS.filter(function(t) {
				return "error" !== t && "end" !== t;
			});
			function F(t, e) {
				if (!(this instanceof F)) return new F(t, e);
				S.apply(this), this._parser = new O(t, e), this.writable = !0, this.readable = !0;
				var r = this;
				this._parser.onend = function() {
					r.emit("end");
				}, this._parser.onerror = function(t) {
					r.emit("error", t), r._parser.error = null;
				}, this._decoder = null, C.forEach(function(t) {
					Object.defineProperty(r, "on" + t, {
						get: function() {
							return r._parser["on" + t];
						},
						set: function(e) {
							if (!e) return r.removeAllListeners(t), r._parser["on" + t] = e;
							r.on(t, e);
						},
						enumerable: !0,
						configurable: !1
					});
				});
			}
			(F.prototype = Object.create(S.prototype, { constructor: { value: F } })).write = function(t) {
				var e;
				return "function" == typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(t) && (this._decoder || (e = T.StringDecoder, this._decoder = new e("utf8")), t = this._decoder.write(t)), this._parser.write(t.toString()), this.emit("data", t), !0;
			}, F.prototype.end = function(t) {
				return t && t.length && this.write(t), this._parser.end(), !0;
			}, F.prototype.on = function(t, e) {
				var r = this;
				return r._parser["on" + t] || -1 === C.indexOf(t) || (r._parser["on" + t] = function() {
					var e = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
					e.splice(0, 0, t), r.emit.apply(r, e);
				}), S.prototype.on.call(r, t, e);
			};
			var N = "[CDATA[", j = "DOCTYPE", P = "http://www.w3.org/XML/1998/namespace", R = "http://www.w3.org/2000/xmlns/", k = {
				xml: P,
				xmlns: R
			}, M = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, I = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, x = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, B = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
			function U(t) {
				return " " === t || "\n" === t || "\r" === t || "	" === t;
			}
			function K(t) {
				return "\"" === t || "'" === t;
			}
			function z(t, e) {
				return t.test(e);
			}
			var W, V, Y, H = 0;
			for (W in L.STATE = {
				BEGIN: H++,
				BEGIN_WHITESPACE: H++,
				TEXT: H++,
				TEXT_ENTITY: H++,
				OPEN_WAKA: H++,
				SGML_DECL: H++,
				SGML_DECL_QUOTED: H++,
				DOCTYPE: H++,
				DOCTYPE_QUOTED: H++,
				DOCTYPE_DTD: H++,
				DOCTYPE_DTD_QUOTED: H++,
				COMMENT_STARTING: H++,
				COMMENT: H++,
				COMMENT_ENDING: H++,
				COMMENT_ENDED: H++,
				CDATA: H++,
				CDATA_ENDING: H++,
				CDATA_ENDING_2: H++,
				PROC_INST: H++,
				PROC_INST_BODY: H++,
				PROC_INST_ENDING: H++,
				OPEN_TAG: H++,
				OPEN_TAG_SLASH: H++,
				ATTRIB: H++,
				ATTRIB_NAME: H++,
				ATTRIB_NAME_SAW_WHITE: H++,
				ATTRIB_VALUE: H++,
				ATTRIB_VALUE_QUOTED: H++,
				ATTRIB_VALUE_CLOSED: H++,
				ATTRIB_VALUE_UNQUOTED: H++,
				ATTRIB_VALUE_ENTITY_Q: H++,
				ATTRIB_VALUE_ENTITY_U: H++,
				CLOSE_TAG: H++,
				CLOSE_TAG_SAW_WHITE: H++,
				SCRIPT: H++,
				SCRIPT_ENDING: H++
			}, L.XML_ENTITIES = {
				amp: "&",
				gt: ">",
				lt: "<",
				quot: "\"",
				apos: "'"
			}, L.ENTITIES = {
				amp: "&",
				gt: ">",
				lt: "<",
				quot: "\"",
				apos: "'",
				AElig: 198,
				Aacute: 193,
				Acirc: 194,
				Agrave: 192,
				Aring: 197,
				Atilde: 195,
				Auml: 196,
				Ccedil: 199,
				ETH: 208,
				Eacute: 201,
				Ecirc: 202,
				Egrave: 200,
				Euml: 203,
				Iacute: 205,
				Icirc: 206,
				Igrave: 204,
				Iuml: 207,
				Ntilde: 209,
				Oacute: 211,
				Ocirc: 212,
				Ograve: 210,
				Oslash: 216,
				Otilde: 213,
				Ouml: 214,
				THORN: 222,
				Uacute: 218,
				Ucirc: 219,
				Ugrave: 217,
				Uuml: 220,
				Yacute: 221,
				aacute: 225,
				acirc: 226,
				aelig: 230,
				agrave: 224,
				aring: 229,
				atilde: 227,
				auml: 228,
				ccedil: 231,
				eacute: 233,
				ecirc: 234,
				egrave: 232,
				eth: 240,
				euml: 235,
				iacute: 237,
				icirc: 238,
				igrave: 236,
				iuml: 239,
				ntilde: 241,
				oacute: 243,
				ocirc: 244,
				ograve: 242,
				oslash: 248,
				otilde: 245,
				ouml: 246,
				szlig: 223,
				thorn: 254,
				uacute: 250,
				ucirc: 251,
				ugrave: 249,
				uuml: 252,
				yacute: 253,
				yuml: 255,
				copy: 169,
				reg: 174,
				nbsp: 160,
				iexcl: 161,
				cent: 162,
				pound: 163,
				curren: 164,
				yen: 165,
				brvbar: 166,
				sect: 167,
				uml: 168,
				ordf: 170,
				laquo: 171,
				not: 172,
				shy: 173,
				macr: 175,
				deg: 176,
				plusmn: 177,
				sup1: 185,
				sup2: 178,
				sup3: 179,
				acute: 180,
				micro: 181,
				para: 182,
				middot: 183,
				cedil: 184,
				ordm: 186,
				raquo: 187,
				frac14: 188,
				frac12: 189,
				frac34: 190,
				iquest: 191,
				times: 215,
				divide: 247,
				OElig: 338,
				oelig: 339,
				Scaron: 352,
				scaron: 353,
				Yuml: 376,
				fnof: 402,
				circ: 710,
				tilde: 732,
				Alpha: 913,
				Beta: 914,
				Gamma: 915,
				Delta: 916,
				Epsilon: 917,
				Zeta: 918,
				Eta: 919,
				Theta: 920,
				Iota: 921,
				Kappa: 922,
				Lambda: 923,
				Mu: 924,
				Nu: 925,
				Xi: 926,
				Omicron: 927,
				Pi: 928,
				Rho: 929,
				Sigma: 931,
				Tau: 932,
				Upsilon: 933,
				Phi: 934,
				Chi: 935,
				Psi: 936,
				Omega: 937,
				alpha: 945,
				beta: 946,
				gamma: 947,
				delta: 948,
				epsilon: 949,
				zeta: 950,
				eta: 951,
				theta: 952,
				iota: 953,
				kappa: 954,
				lambda: 955,
				mu: 956,
				nu: 957,
				xi: 958,
				omicron: 959,
				pi: 960,
				rho: 961,
				sigmaf: 962,
				sigma: 963,
				tau: 964,
				upsilon: 965,
				phi: 966,
				chi: 967,
				psi: 968,
				omega: 969,
				thetasym: 977,
				upsih: 978,
				piv: 982,
				ensp: 8194,
				emsp: 8195,
				thinsp: 8201,
				zwnj: 8204,
				zwj: 8205,
				lrm: 8206,
				rlm: 8207,
				ndash: 8211,
				mdash: 8212,
				lsquo: 8216,
				rsquo: 8217,
				sbquo: 8218,
				ldquo: 8220,
				rdquo: 8221,
				bdquo: 8222,
				dagger: 8224,
				Dagger: 8225,
				bull: 8226,
				hellip: 8230,
				permil: 8240,
				prime: 8242,
				Prime: 8243,
				lsaquo: 8249,
				rsaquo: 8250,
				oline: 8254,
				frasl: 8260,
				euro: 8364,
				image: 8465,
				weierp: 8472,
				real: 8476,
				trade: 8482,
				alefsym: 8501,
				larr: 8592,
				uarr: 8593,
				rarr: 8594,
				darr: 8595,
				harr: 8596,
				crarr: 8629,
				lArr: 8656,
				uArr: 8657,
				rArr: 8658,
				dArr: 8659,
				hArr: 8660,
				forall: 8704,
				part: 8706,
				exist: 8707,
				empty: 8709,
				nabla: 8711,
				isin: 8712,
				notin: 8713,
				ni: 8715,
				prod: 8719,
				sum: 8721,
				minus: 8722,
				lowast: 8727,
				radic: 8730,
				prop: 8733,
				infin: 8734,
				ang: 8736,
				and: 8743,
				or: 8744,
				cap: 8745,
				cup: 8746,
				int: 8747,
				there4: 8756,
				sim: 8764,
				cong: 8773,
				asymp: 8776,
				ne: 8800,
				equiv: 8801,
				le: 8804,
				ge: 8805,
				sub: 8834,
				sup: 8835,
				nsub: 8836,
				sube: 8838,
				supe: 8839,
				oplus: 8853,
				otimes: 8855,
				perp: 8869,
				sdot: 8901,
				lceil: 8968,
				rceil: 8969,
				lfloor: 8970,
				rfloor: 8971,
				lang: 9001,
				rang: 9002,
				loz: 9674,
				spades: 9824,
				clubs: 9827,
				hearts: 9829,
				diams: 9830
			}, Object.keys(L.ENTITIES).forEach(function(t) {
				var e = "number" == typeof (e = L.ENTITIES[t]) ? String.fromCharCode(e) : e;
				L.ENTITIES[t] = e;
			}), L.STATE) L.STATE[L.STATE[W]] = W;
			function q(t, e, r) {
				t[e] && t[e](r);
			}
			function X(t, e, r) {
				t.textNode && $(t), q(t, e, r);
			}
			function $(t) {
				t.textNode = Q(t.opt, t.textNode), t.textNode && q(t, "ontext", t.textNode), t.textNode = "";
			}
			function Q(t, e) {
				return t.trim && (e = e.trim()), t.normalize ? e.replace(/\s+/g, " ") : e;
			}
			function J(t, e) {
				return $(t), t.trackPosition && (e += "\nLine: " + t.line + "\nColumn: " + t.column + "\nChar: " + t.c), e = new Error(e), t.error = e, q(t, "onerror", e), t;
			}
			function Z(t) {
				return t.sawRoot && !t.closedRoot && tt(t, "Unclosed root tag"), t.state !== H.BEGIN && t.state !== H.BEGIN_WHITESPACE && t.state !== H.TEXT && J(t, "Unexpected end"), $(t), t.c = "", t.closed = !0, q(t, "onend"), O.call(t, t.strict, t.opt), t;
			}
			function tt(t, e) {
				if ("object" != typeof t || !(t instanceof O)) throw new Error("bad call to strictFail");
				t.strict && J(t, e);
			}
			function et(t, e) {
				var r = (n = t.indexOf(":") < 0 ? ["", t] : t.split(":"))[0], n = n[1];
				return e && "xmlns" === t && (r = "xmlns", n = ""), {
					prefix: r,
					local: n
				};
			}
			function rt(t) {
				var e, r, n;
				t.strict || (t.attribName = t.attribName[t.looseCase]()), -1 !== t.attribList.indexOf(t.attribName) || t.tag.attributes.hasOwnProperty(t.attribName) || (t.opt.xmlns ? (r = (e = et(t.attribName, !0)).prefix, e = e.local, "xmlns" === r && ("xml" === e && t.attribValue !== P ? tt(t, "xml: prefix must be bound to " + P + "\nActual: " + t.attribValue) : "xmlns" === e && t.attribValue !== R ? tt(t, "xmlns: prefix must be bound to " + R + "\nActual: " + t.attribValue) : (r = t.tag, n = t.tags[t.tags.length - 1] || t, r.ns === n.ns && (r.ns = Object.create(n.ns)), r.ns[e] = t.attribValue)), t.attribList.push([t.attribName, t.attribValue])) : (t.tag.attributes[t.attribName] = t.attribValue, X(t, "onattribute", {
					name: t.attribName,
					value: t.attribValue
				}))), t.attribName = t.attribValue = "";
			}
			function nt(t, e) {
				if (t.opt.xmlns) {
					var r = t.tag, n = et(t.tagName);
					r.prefix = n.prefix, r.local = n.local, r.uri = r.ns[n.prefix] || "", r.prefix && !r.uri && (tt(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName)), r.uri = n.prefix), n = t.tags[t.tags.length - 1] || t, r.ns && n.ns !== r.ns && Object.keys(r.ns).forEach(function(e) {
						X(t, "onopennamespace", {
							prefix: e,
							uri: r.ns[e]
						});
					});
					for (var a = 0, o = t.attribList.length; a < o; a++) {
						var i = (s = t.attribList[a])[0], s = s[1], c = (u = et(i, !0)).prefix, u = u.local, l = "" !== c && r.ns[c] || "";
						s = {
							name: i,
							value: s,
							prefix: c,
							local: u,
							uri: l
						}, c && "xmlns" !== c && !l && (tt(t, "Unbound namespace prefix: " + JSON.stringify(c)), s.uri = c), t.tag.attributes[i] = s, X(t, "onattribute", s);
					}
					t.attribList.length = 0;
				}
				t.tag.isSelfClosing = !!e, t.sawRoot = !0, t.tags.push(t.tag), X(t, "onopentag", t.tag), e || (t.noscript || "script" !== t.tagName.toLowerCase() ? t.state = H.TEXT : t.state = H.SCRIPT, t.tag = null, t.tagName = ""), t.attribName = t.attribValue = "", t.attribList.length = 0;
			}
			function at(t) {
				if (t.tagName) {
					if (t.script) {
						if ("script" !== t.tagName) return t.script += "</" + t.tagName + ">", t.tagName = "", void (t.state = H.SCRIPT);
						X(t, "onscript", t.script), t.script = "";
					}
					for (var e = t.tags.length, r = t.tagName, n = r = t.strict ? r : r[t.looseCase](); e-- && t.tags[e].name !== n;) tt(t, "Unexpected close tag");
					if (e < 0) tt(t, "Unmatched closing tag: " + t.tagName), t.textNode += "</" + t.tagName + ">";
					else {
						t.tagName = r;
						for (var a = t.tags.length; a-- > e;) {
							var o, i = t.tag = t.tags.pop();
							for (o in t.tagName = t.tag.name, X(t, "onclosetag", t.tagName), i.ns) i.ns[o];
							var s = t.tags[t.tags.length - 1] || t;
							t.opt.xmlns && i.ns !== s.ns && Object.keys(i.ns).forEach(function(e) {
								var r = i.ns[e];
								X(t, "onclosenamespace", {
									prefix: e,
									uri: r
								});
							});
						}
						0 === e && (t.closedRoot = !0), t.tagName = t.attribValue = t.attribName = "", t.attribList.length = 0;
					}
				} else tt(t, "Weird empty close tag."), t.textNode += "</>";
				t.state = H.TEXT;
			}
			function ot(t) {
				var e, r = t.entity, n = r.toLowerCase(), a = "";
				return t.ENTITIES[r] || t.ENTITIES[n] || ("#" === (r = n).charAt(0) && (a = "x" === r.charAt(1) ? (r = r.slice(2), (e = parseInt(r, 16)).toString(16)) : (r = r.slice(1), (e = parseInt(r, 10)).toString(10))), r = r.replace(/^0+/, ""), isNaN(e) || a.toLowerCase() !== r ? (tt(t, "Invalid character entity"), "&" + t.entity + ";") : String.fromCodePoint(e));
			}
			function it(t, e) {
				"<" === e ? (t.state = H.OPEN_WAKA, t.startTagPosition = t.position) : U(e) || (tt(t, "Non-whitespace before first tag."), t.textNode = e, t.state = H.TEXT);
			}
			function st(t, e) {
				return e < t.length ? t.charAt(e) : "";
			}
			function ct() {
				var t = [], e = -1, r = arguments.length;
				if (!r) return "";
				for (var n = ""; ++e < r;) {
					var a = Number(arguments[e]);
					if (!isFinite(a) || a < 0 || 1114111 < a || Y(a) !== a) throw RangeError("Invalid code point: " + a);
					a <= 65535 ? t.push(a) : t.push(55296 + ((a -= 65536) >> 10), a % 1024 + 56320), (e + 1 === r || 16384 < t.length) && (n += V.apply(null, t), t.length = 0);
				}
				return n;
			}
			H = L.STATE, String.fromCodePoint || (V = String.fromCharCode, Y = Math.floor, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
				value: ct,
				configurable: !0,
				writable: !0
			}) : String.fromCodePoint = ct), h = function(t) {
				return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t);
			};
			var ut, lt, ft = h, dt = {
				copyOptions: function(t) {
					var e, r = {};
					for (e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
					return r;
				},
				ensureFlagExists: function(t, e) {
					t in e && "boolean" == typeof e[t] || (e[t] = !1);
				},
				ensureSpacesExists: function(t) {
					"spaces" in t && ("number" == typeof t.spaces || "string" == typeof t.spaces) || (t.spaces = 0);
				},
				ensureAlwaysArrayExists: function(t) {
					"alwaysArray" in t && ("boolean" == typeof t.alwaysArray || ft(t.alwaysArray)) || (t.alwaysArray = !1);
				},
				ensureKeyExists: function(t, e) {
					t + "Key" in e && "string" == typeof e[t + "Key"] || (e[t + "Key"] = e.compact ? "_" + t : t);
				},
				checkFnExists: function(t, e) {
					return t + "Fn" in e;
				}
			}, ht = g, mt = dt, pt = h;
			function gt(t) {
				var e, r = Number(t);
				return isNaN(r) ? "true" === (e = t.toLowerCase()) || "false" !== e && t : r;
			}
			function yt(t, e) {
				var r, n;
				if (ut.compact) {
					if (!lt[ut[t + "Key"]] && (pt(ut.alwaysArray) ? -1 !== ut.alwaysArray.indexOf(ut[t + "Key"]) : ut.alwaysArray) && (lt[ut[t + "Key"]] = []), lt[ut[t + "Key"]] && !pt(lt[ut[t + "Key"]]) && (lt[ut[t + "Key"]] = [lt[ut[t + "Key"]]]), t + "Fn" in ut && "string" == typeof e && (e = ut[t + "Fn"](e, lt)), "instruction" === t && ("instructionFn" in ut || "instructionNameFn" in ut)) for (r in e) e.hasOwnProperty(r) && ("instructionFn" in ut ? e[r] = ut.instructionFn(e[r], r, lt) : (n = e[r], delete e[r], e[ut.instructionNameFn(r, n, lt)] = n));
					pt(lt[ut[t + "Key"]]) ? lt[ut[t + "Key"]].push(e) : lt[ut[t + "Key"]] = e;
				} else {
					lt[ut.elementsKey] || (lt[ut.elementsKey] = []);
					var a = {};
					if ("instruction" === (a[ut.typeKey] = t)) {
						for (r in e) if (e.hasOwnProperty(r)) break;
						a[ut.nameKey] = "instructionNameFn" in ut ? ut.instructionNameFn(r, e, lt) : r, ut.instructionHasAttributes ? (a[ut.attributesKey] = e[r][ut.attributesKey], "instructionFn" in ut && (a[ut.attributesKey] = ut.instructionFn(a[ut.attributesKey], r, lt))) : ("instructionFn" in ut && (e[r] = ut.instructionFn(e[r], r, lt)), a[ut.instructionKey] = e[r]);
					} else t + "Fn" in ut && (e = ut[t + "Fn"](e, lt)), a[ut[t + "Key"]] = e;
					ut.addParent && (a[ut.parentKey] = lt), lt[ut.elementsKey].push(a);
				}
			}
			function _t(t) {
				var e, r;
				if ("attributesFn" in ut && (t = t && ut.attributesFn(t, lt)), (ut.trim || "attributeValueFn" in ut || "attributeNameFn" in ut || ut.nativeTypeAttributes) && t) for (e in t) t.hasOwnProperty(e) && (ut.trim && (t[e] = t[e].trim()), ut.nativeTypeAttributes && (t[e] = gt(t[e])), "attributeValueFn" in ut && (t[e] = ut.attributeValueFn(t[e], e, lt)), "attributeNameFn" in ut) && (r = t[e], delete t[e], t[ut.attributeNameFn(e, t[e], lt)] = r);
				return t;
			}
			function wt(t) {
				var e, r = {};
				if (t.body && ("xml" === t.name.toLowerCase() || ut.instructionHasAttributes)) {
					for (var n, a = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g; null !== (n = a.exec(t.body));) r[n[1]] = n[2] || n[3] || n[4];
					r = _t(r);
				}
				"xml" === t.name.toLowerCase() ? ut.ignoreDeclaration || (lt[ut.declarationKey] = {}, Object.keys(r).length && (lt[ut.declarationKey][ut.attributesKey] = r), ut.addParent && (lt[ut.declarationKey][ut.parentKey] = lt)) : ut.ignoreInstruction || (ut.trim && (t.body = t.body.trim()), e = {}, ut.instructionHasAttributes && Object.keys(r).length ? (e[t.name] = {}, e[t.name][ut.attributesKey] = r) : e[t.name] = t.body, yt("instruction", e));
			}
			function Et(t, e) {
				if ("object" == typeof t && (e = t.attributes, t = t.name), e = _t(e), "elementNameFn" in ut && (t = ut.elementNameFn(t, lt)), ut.compact) {
					var r, n = {};
					if (!ut.ignoreAttributes && e && Object.keys(e).length) for (r in n[ut.attributesKey] = {}, e) e.hasOwnProperty(r) && (n[ut.attributesKey][r] = e[r]);
					t in lt || (pt(ut.alwaysArray) ? -1 === ut.alwaysArray.indexOf(t) : !ut.alwaysArray) || (lt[t] = []), lt[t] && !pt(lt[t]) && (lt[t] = [lt[t]]), pt(lt[t]) ? lt[t].push(n) : lt[t] = n;
				} else lt[ut.elementsKey] || (lt[ut.elementsKey] = []), (n = {})[ut.typeKey] = "element", n[ut.nameKey] = t, !ut.ignoreAttributes && e && Object.keys(e).length && (n[ut.attributesKey] = e), ut.alwaysChildren && (n[ut.elementsKey] = []), lt[ut.elementsKey].push(n);
				n[ut.parentKey] = lt, lt = n;
			}
			function vt(t) {
				ut.ignoreText || (t.trim() || ut.captureSpacesBetweenElements) && (ut.trim && (t = t.trim()), ut.nativeType && (t = gt(t)), yt("text", t = ut.sanitize ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : t));
			}
			function bt(t) {
				ut.ignoreComment || yt("comment", t = ut.trim ? t.trim() : t);
			}
			function Dt(t) {
				var e = lt[ut.parentKey];
				ut.addParent || delete lt[ut.parentKey], lt = e;
			}
			function At(t) {
				ut.ignoreCdata || yt("cdata", t = ut.trim ? t.trim() : t);
			}
			function Tt(t) {
				ut.ignoreDoctype || (t = t.replace(/^ /, ""), yt("doctype", t = ut.trim ? t.trim() : t));
			}
			function Lt(t) {
				t.note = t;
			}
			function Gt(t, e) {
				var r = ht.parser(!0, {}), n = {};
				return lt = n, ut = mt.copyOptions(e), mt.ensureFlagExists("ignoreDeclaration", ut), mt.ensureFlagExists("ignoreInstruction", ut), mt.ensureFlagExists("ignoreAttributes", ut), mt.ensureFlagExists("ignoreText", ut), mt.ensureFlagExists("ignoreComment", ut), mt.ensureFlagExists("ignoreCdata", ut), mt.ensureFlagExists("ignoreDoctype", ut), mt.ensureFlagExists("compact", ut), mt.ensureFlagExists("alwaysChildren", ut), mt.ensureFlagExists("addParent", ut), mt.ensureFlagExists("trim", ut), mt.ensureFlagExists("nativeType", ut), mt.ensureFlagExists("nativeTypeAttributes", ut), mt.ensureFlagExists("sanitize", ut), mt.ensureFlagExists("instructionHasAttributes", ut), mt.ensureFlagExists("captureSpacesBetweenElements", ut), mt.ensureAlwaysArrayExists(ut), mt.ensureKeyExists("declaration", ut), mt.ensureKeyExists("instruction", ut), mt.ensureKeyExists("attributes", ut), mt.ensureKeyExists("text", ut), mt.ensureKeyExists("comment", ut), mt.ensureKeyExists("cdata", ut), mt.ensureKeyExists("doctype", ut), mt.ensureKeyExists("type", ut), mt.ensureKeyExists("name", ut), mt.ensureKeyExists("elements", ut), mt.ensureKeyExists("parent", ut), mt.checkFnExists("doctype", ut), mt.checkFnExists("instruction", ut), mt.checkFnExists("cdata", ut), mt.checkFnExists("comment", ut), mt.checkFnExists("text", ut), mt.checkFnExists("instructionName", ut), mt.checkFnExists("elementName", ut), mt.checkFnExists("attributeName", ut), mt.checkFnExists("attributeValue", ut), mt.checkFnExists("attributes", ut), r.opt = { strictEntities: !0 }, r.onopentag = Et, r.ontext = vt, r.oncomment = bt, r.onclosetag = Dt, r.onerror = Lt, r.oncdata = At, r.ondoctype = Tt, r.onprocessinginstruction = wt, r.write(t).close(), n[ut.elementsKey] && (e = n[ut.elementsKey], delete n[ut.elementsKey], n[ut.elementsKey] = e, delete n.text), n;
			}
			var Ot, St, Ct = dt, Ft = Gt, Nt = dt, jt = h;
			function Pt(t, e, r) {
				return (!r && t.spaces ? "\n" : "") + Array(e + 1).join(t.spaces);
			}
			function Rt(t, e, r) {
				if (e.ignoreAttributes) return "";
				var n, a, o, i, s = [];
				for (n in t = "attributesFn" in e ? e.attributesFn(t, St, Ot) : t) t.hasOwnProperty(n) && null !== t[n] && void 0 !== t[n] && (i = e.noQuotesForNativeAttributes && "string" != typeof t[n] ? "" : "\"", a = (a = "" + t[n]).replace(/"/g, "&quot;"), o = "attributeNameFn" in e ? e.attributeNameFn(n, a, St, Ot) : n, s.push(e.spaces && e.indentAttributes ? Pt(e, r + 1, !1) : " "), s.push(o + "=" + i + ("attributeValueFn" in e ? e.attributeValueFn(a, n, St, Ot) : a) + i));
				return t && Object.keys(t).length && e.spaces && e.indentAttributes && s.push(Pt(e, r, !1)), s.join("");
			}
			function kt(t, e, r) {
				return Ot = t, St = "xml", e.ignoreDeclaration ? "" : "<?xml" + Rt(t[e.attributesKey], e, r) + "?>";
			}
			function Mt(t, e, r) {
				if (e.ignoreInstruction) return "";
				for (var n in t) if (t.hasOwnProperty(n)) break;
				var a = "instructionNameFn" in e ? e.instructionNameFn(n, t[n], St, Ot) : n;
				return "object" == typeof t[n] ? "<?" + (St = a) + Rt((Ot = t)[n][e.attributesKey], e, r) + "?>" : (r = t[n] || "", "<?" + a + ((r = "instructionFn" in e ? e.instructionFn(r, n, St, Ot) : r) ? " " + r : "") + "?>");
			}
			function It(t, e) {
				return e.ignoreComment ? "" : "<!--" + ("commentFn" in e ? e.commentFn(t, St, Ot) : t) + "-->";
			}
			function xt(t, e) {
				return e.ignoreCdata ? "" : "<![CDATA[" + ("cdataFn" in e ? e.cdataFn(t, St, Ot) : t.replace("]]>", "]]]]><![CDATA[>")) + "]]>";
			}
			function Bt(t, e) {
				return e.ignoreDoctype ? "" : "<!DOCTYPE " + ("doctypeFn" in e ? e.doctypeFn(t, St, Ot) : t) + ">";
			}
			function Ut(t, e) {
				return e.ignoreText ? "" : (t = (t = (t = "" + t).replace(/&amp;/g, "&")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "textFn" in e ? e.textFn(t, St, Ot) : t);
			}
			function Kt(t, e, r, n) {
				return t.reduce(function(t, a) {
					var o = Pt(e, r, n && !t);
					switch (a.type) {
						case "element": return t + o + function(t, e, r) {
							St = (Ot = t).name;
							var n = [], a = "elementNameFn" in e ? e.elementNameFn(t.name, t) : t.name, o = (n.push("<" + a), t[e.attributesKey] && n.push(Rt(t[e.attributesKey], e, r)), t[e.elementsKey] && t[e.elementsKey].length || t[e.attributesKey] && "preserve" === t[e.attributesKey]["xml:space"]);
							return (o = o || ("fullTagEmptyElementFn" in e ? e.fullTagEmptyElementFn(t.name, t) : e.fullTagEmptyElement)) ? (n.push(">"), t[e.elementsKey] && t[e.elementsKey].length && (n.push(Kt(t[e.elementsKey], e, r + 1)), St = (Ot = t).name), n.push(e.spaces && function(t, e) {
								var r;
								if (t.elements && t.elements.length) for (r = 0; r < t.elements.length; ++r) switch (t.elements[r][e.typeKey]) {
									case "text":
										if (e.indentText) return 1;
										break;
									case "cdata":
										if (e.indentCdata) return 1;
										break;
									case "instruction":
										if (e.indentInstruction) return 1;
										break;
									default: return 1;
								}
							}(t, e) ? "\n" + Array(r + 1).join(e.spaces) : ""), n.push("</" + a + ">")) : n.push("/>"), n.join("");
						}(a, e, r);
						case "comment": return t + o + It(a[e.commentKey], e);
						case "doctype": return t + o + Bt(a[e.doctypeKey], e);
						case "cdata": return t + (e.indentCdata ? o : "") + xt(a[e.cdataKey], e);
						case "text": return t + (e.indentText ? o : "") + Ut(a[e.textKey], e);
						case "instruction":
							var i = {};
							return i[a[e.nameKey]] = a[e.attributesKey] ? a : a[e.instructionKey], t + (e.indentInstruction ? o : "") + Mt(i, e, r);
					}
				}, "");
			}
			function zt(t, e, r) {
				for (var n in t) if (t.hasOwnProperty(n)) switch (n) {
					case e.parentKey:
					case e.attributesKey: break;
					case e.textKey:
						if (e.indentText || r) return !0;
						break;
					case e.cdataKey:
						if (e.indentCdata || r) return !0;
						break;
					case e.instructionKey:
						if (e.indentInstruction || r) return !0;
						break;
					case e.doctypeKey:
					case e.commentKey:
					default: return !0;
				}
				return !1;
			}
			function Wt(t, e, r, n) {
				var a, o, i, s = [];
				for (o in t) if (t.hasOwnProperty(o)) for (i = jt(t[o]) ? t[o] : [t[o]], a = 0; a < i.length; ++a) {
					switch (o) {
						case e.declarationKey:
							s.push(kt(i[a], e, r));
							break;
						case e.instructionKey:
							s.push((e.indentInstruction ? Pt(e, r, n) : "") + Mt(i[a], e, r));
							break;
						case e.attributesKey:
						case e.parentKey: break;
						case e.textKey:
							s.push((e.indentText ? Pt(e, r, n) : "") + Ut(i[a], e));
							break;
						case e.cdataKey:
							s.push((e.indentCdata ? Pt(e, r, n) : "") + xt(i[a], e));
							break;
						case e.doctypeKey:
							s.push(Pt(e, r, n) + Bt(i[a], e));
							break;
						case e.commentKey:
							s.push(Pt(e, r, n) + It(i[a], e));
							break;
						default: s.push(Pt(e, r, n) + function(t, e, r, n, a) {
							Ot = t, St = e;
							var o = "elementNameFn" in r ? r.elementNameFn(e, t) : e;
							if (null == t || "" === t) return "fullTagEmptyElementFn" in r && r.fullTagEmptyElementFn(e, t) || r.fullTagEmptyElement ? "<" + o + "></" + o + ">" : "<" + o + "/>";
							var i = [];
							if (e) {
								if (i.push("<" + o), "object" != typeof t) return i.push(">" + Ut(t, r) + "</" + o + ">"), i.join("");
								t[r.attributesKey] && i.push(Rt(t[r.attributesKey], r, n));
								var s = zt(t, r, !0) || t[r.attributesKey] && "preserve" === t[r.attributesKey]["xml:space"];
								if (!(s = s || ("fullTagEmptyElementFn" in r ? r.fullTagEmptyElementFn(e, t) : r.fullTagEmptyElement))) return i.push("/>"), i.join("");
								i.push(">");
							}
							return i.push(Wt(t, r, n + 1, !1)), Ot = t, (St = e) && i.push((a ? Pt(r, n, !1) : "") + "</" + o + ">"), i.join("");
						}(i[a], o, e, r, zt(i[a], e)));
					}
					n = n && !s.length;
				}
				return s.join("");
			}
			function Vt(t, e) {
				r = e, r = Nt.copyOptions(r), Nt.ensureFlagExists("ignoreDeclaration", r), Nt.ensureFlagExists("ignoreInstruction", r), Nt.ensureFlagExists("ignoreAttributes", r), Nt.ensureFlagExists("ignoreText", r), Nt.ensureFlagExists("ignoreComment", r), Nt.ensureFlagExists("ignoreCdata", r), Nt.ensureFlagExists("ignoreDoctype", r), Nt.ensureFlagExists("compact", r), Nt.ensureFlagExists("indentText", r), Nt.ensureFlagExists("indentCdata", r), Nt.ensureFlagExists("indentAttributes", r), Nt.ensureFlagExists("indentInstruction", r), Nt.ensureFlagExists("fullTagEmptyElement", r), Nt.ensureFlagExists("noQuotesForNativeAttributes", r), Nt.ensureSpacesExists(r), "number" == typeof r.spaces && (r.spaces = Array(r.spaces + 1).join(" ")), Nt.ensureKeyExists("declaration", r), Nt.ensureKeyExists("instruction", r), Nt.ensureKeyExists("attributes", r), Nt.ensureKeyExists("text", r), Nt.ensureKeyExists("comment", r), Nt.ensureKeyExists("cdata", r), Nt.ensureKeyExists("doctype", r), Nt.ensureKeyExists("type", r), Nt.ensureKeyExists("name", r), Nt.ensureKeyExists("elements", r), Nt.checkFnExists("doctype", r), Nt.checkFnExists("instruction", r), Nt.checkFnExists("cdata", r), Nt.checkFnExists("comment", r), Nt.checkFnExists("text", r), Nt.checkFnExists("instructionName", r), Nt.checkFnExists("elementName", r), Nt.checkFnExists("attributeName", r), Nt.checkFnExists("attributeValue", r), Nt.checkFnExists("attributes", r), Nt.checkFnExists("fullTagEmptyElement", r);
				var r, n = [];
				return Ot = t, St = "_root_", (e = r).compact ? n.push(Wt(t, e, 0, !0)) : (t[e.declarationKey] && n.push(kt(t[e.declarationKey], e, 0)), t[e.elementsKey] && t[e.elementsKey].length && n.push(Kt(t[e.elementsKey], e, 0, !n.length))), n.join("");
			}
			var Yt, Ht = Vt, qt = c({
				xml2js: Gt,
				xml2json: function(t, e) {
					var r;
					return e = Ct.copyOptions(e), Ct.ensureSpacesExists(e), e = Ft(t, t = e), r = "compact" in t && t.compact ? "_parent" : "parent", ("addParent" in t && t.addParent ? JSON.stringify(e, function(t, e) {
						return t === r ? "_" : e;
					}, t.spaces) : JSON.stringify(e, null, t.spaces)).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
				},
				js2xml: Vt,
				json2xml: function(t, e) {
					var r = null;
					if ("string" == typeof (t = t instanceof Buffer ? t.toString() : t)) try {
						r = JSON.parse(t);
					} catch (t) {
						throw new Error("The JSON structure is invalid");
					}
					else r = t;
					return Ht(r, e);
				}
			}), Xt = {
				raster: {},
				vector: {}
			};
			function $t(t) {
				return t && (t = qt.xml2js(t)).elements && 0 < t.elements.length && (1 !== t.elements.length && console.warn("invalid xml!"), t.elements[0]) && t.elements[0].elements ? t.elements[0].elements.map(function(t) {
					var e = t.attributes;
					return t.elements && 0 < t.elements.length && (e.options = t.elements.map(function(t) {
						return t.elements[0].text;
					})), e;
				}) : null;
			}
			function Qt(t) {
				var e = _.GDALGetFileList(t);
				if (!e) return [];
				for (var r = [], n = 0; n < 100; n += 1) {
					var a = _.Module.HEAP32[e + 4 * n >> 2];
					if (0 === a) break;
					a = _.Module.UTF8ToString(a), r.push(a);
				}
				return r;
			}
			function Jt(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
				return new Promise(function(r, o) {
					var i = E(["-json"].concat(a(e))), s = i.config, c = (Object.entries(s).forEach(function(t) {
						var e = (t = n(t, 2))[0];
						t = t[1], _.CPLSetConfigOption(e, t);
					}), s = _.GDALInfoOptionsNew(i.ptr, null), _.GDALInfo(t.pointer, s));
					_.GDALInfoOptionsFree(s), v(i), 3 <= _.CPLGetLastErrorNo() ? o(w()) : r(JSON.parse(c));
				});
			}
			function Zt(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
				return new Promise(function(r, o) {
					var i = E(["-json"].concat(a(e))), s = i.config, c = (Object.entries(s).forEach(function(t) {
						var e = (t = n(t, 2))[0];
						t = t[1], _.CPLSetConfigOption(e, t);
					}), s = _.GDALVectorInfoOptionsNew(i.ptr, null), _.GDALVectorInfo(t.pointer, s));
					_.GDALVectorInfoOptionsFree(s), v(i), 3 <= _.CPLGetLastErrorNo() ? o(w()) : r(JSON.parse(c));
				});
			}
			function te() {
				!d && "function" != typeof importScripts || _.Module.FS.unmount(b);
			}
			var ee, re = {
				ogr2ogr: function(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					return new Promise(function(a, o) {
						var i = E(e), s = i.config, c = (Object.entries(s).forEach(function(t) {
							var e = (t = n(t, 2))[0];
							t = t[1], _.CPLSetConfigOption(e, t);
						}), s = _.GDALVectorTranslateOptionsNew(i.ptr, null), _.Module._malloc(4)), u = "unknown", l = (0 !== (_.Module.setValue(c, t.pointer, "*"), l = e.indexOf("-f") + 1) && (l = e[l], f = Xt.vector[l]) && (u = "MapInfo File" === l && -1 !== e.indexOf("FORMAT=MIF") ? "mif" : f.extension), r || t.path.split(".", 1)[0]), f = "".concat(D, "/").concat(l, ".").concat(u), d = Qt(c = _.GDALVectorTranslate(f, null, 1, c, s, null));
						_.GDALVectorTranslateOptionsFree(s), v(i), _.GDALClose(c), 3 <= _.CPLGetLastErrorNo() ? o(w()) : a({
							local: f,
							real: "".concat(A, "/").concat(l, ".").concat(u),
							all: d.map(function(t) {
								return {
									local: t,
									real: t.replace("".concat(D, "/"), "".concat(A, "/"))
								};
							})
						});
					});
				},
				gdal_translate: function(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					return new Promise(function(a, o) {
						var i = E(e), s = i.config, c = (Object.entries(s).forEach(function(t) {
							var e = (t = n(t, 2))[0];
							t = t[1], _.CPLSetConfigOption(e, t);
						}), s = _.GDALTranslateOptionsNew(i.ptr, null), "unknown"), u = (0 !== (u = e.indexOf("-of") + 1) && (u = e[u], u = Xt.raster[u]) && (c = u.extension), r || t.path.split(".", 1)[0]), l = "".concat(D, "/").concat(u, ".").concat(c), f = _.GDALTranslate(l, t.pointer, s, null), d = Qt(f);
						_.GDALTranslateOptionsFree(s), v(i), _.GDALClose(f), 3 <= _.CPLGetLastErrorNo() ? o(w()) : a({
							local: l,
							real: "".concat(A, "/").concat(u, ".").concat(c),
							all: d.map(function(t) {
								return {
									local: t,
									real: t.replace("".concat(D, "/"), "".concat(A, "/"))
								};
							})
						});
					});
				},
				gdal_rasterize: function(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					return new Promise(function(a, o) {
						var i = E(e), s = i.config, c = (Object.entries(s).forEach(function(t) {
							var e = (t = n(t, 2))[0];
							t = t[1], _.CPLSetConfigOption(e, t);
						}), s = _.GDALRasterizeOptionsNew(i.ptr, null), "tif"), u = (0 !== (u = e.indexOf("-of") + 1) && (u = e[u], u = Xt.raster[u]) && (c = u.extension), r || t.path.split(".", 1)[0]), l = "".concat(D, "/").concat(u, ".").concat(c), f = _.GDALRasterize(l, null, t.pointer, s, null), d = Qt(f);
						_.GDALRasterizeOptionsFree(s), v(i), _.GDALClose(f), 3 <= _.CPLGetLastErrorNo() ? o(w()) : a({
							local: l,
							real: "".concat(A, "/").concat(u, ".").concat(c),
							all: d.map(function(t) {
								return {
									local: t,
									real: t.replace("".concat(D, "/"), "".concat(A, "/"))
								};
							})
						});
					});
				},
				gdalwarp: function(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					return new Promise(function(a, o) {
						var i = E(e), s = i.config, c = (Object.entries(s).forEach(function(t) {
							var e = (t = n(t, 2))[0];
							t = t[1], _.CPLSetConfigOption(e, t);
						}), s = _.GDALWarpAppOptionsNew(i.ptr, null), _.Module._malloc(4)), u = "unknown", l = (0 !== (_.Module.setValue(c, t.pointer, "*"), l = e.indexOf("-of") + 1) && (l = e[l], l = Xt.raster[l]) && (u = l.extension), r || t.path.split(".", 1)[0]), f = "".concat(D, "/").concat(l, ".").concat(u), d = Qt(c = _.GDALWarp(f, null, 1, c, s, null));
						_.GDALWarpAppOptionsFree(s), v(i), _.GDALClose(c), 3 <= _.CPLGetLastErrorNo() ? o(w()) : a({
							local: f,
							real: "".concat(A, "/").concat(l, ".").concat(u),
							all: d.map(function(t) {
								return {
									local: t,
									real: t.replace("".concat(D, "/"), "".concat(A, "/"))
								};
							})
						});
					});
				},
				gdaltransform: function(t, e) {
					return new Promise(function(r) {
						for (var n = new Float64Array(t.map(function(t) {
							return t[0];
						})), a = new Float64Array(t.map(function(t) {
							return t[1];
						})), o = new Float64Array(t.map(function(t) {
							return t[2] || 0;
						})), i = _.Module._malloc(n.length * n.BYTES_PER_ELEMENT), s = _.Module._malloc(a.length * a.BYTES_PER_ELEMENT), c = _.Module._malloc(o.length * o.BYTES_PER_ELEMENT), u = (_.Module.HEAPF64.set(n, i / n.BYTES_PER_ELEMENT), _.Module.HEAPF64.set(a, s / a.BYTES_PER_ELEMENT), _.Module.HEAPF64.set(o, c / o.BYTES_PER_ELEMENT), !1), l = !1, f = [], d = 0; d < e.length; d += 1) switch (e[d]) {
							case "-s_srs":
								f.push("SRC_SRS=".concat(e[d += 1]));
								break;
							case "-t_srs":
								f.push("DST_SRS=".concat(e[d += 1]));
								break;
							case "-ct":
								f.push("COORDINATE_OPERATION=".concat(e[d += 1]));
								break;
							case "-order":
								f.push("MAX_GCP_ORDER=".concat(e[d += 1]));
								break;
							case "-tps":
								f.push("METHOD=GCP_TPS");
								break;
							case "-rpc":
								f.push("METHOD=RPC");
								break;
							case "-geoloc":
								f.push("METHOD=GEOLOC_ARRAY");
								break;
							case "-i":
								u = !0;
								break;
							case "-to":
								f.push("".concat(e[d += 1]));
								break;
							case "-output_xy": l = !0;
						}
						for (var h = E(f), m = _.GDALCreateGenImgProjTransformer2(null, null, h.ptr), p = (_.GDALGenImgProjTransform(m, u, t.length, i, s, c, null), [
							Array.from(_.Module.HEAPF64.subarray(i / n.BYTES_PER_ELEMENT, i / n.BYTES_PER_ELEMENT + n.length)),
							Array.from(_.Module.HEAPF64.subarray(s / a.BYTES_PER_ELEMENT, s / a.BYTES_PER_ELEMENT + a.length)),
							Array.from(_.Module.HEAPF64.subarray(c / o.BYTES_PER_ELEMENT, c / o.BYTES_PER_ELEMENT + o.length))
						]), g = [], y = 0; y < p[0].length; y += 1) g.push(l ? [p[0][y], p[1][y]] : [
							p[0][y],
							p[1][y],
							p[2][y]
						]);
						_.Module._free(i), _.Module._free(s), _.Module._free(c), v(h), _.GDALDestroyGenImgProjTransformer(m), r(g);
					});
				},
				gdal_location_info: function(t, e) {
					return new Promise(function(r, n) {
						var a = _.OSRNewSpatialReference("GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137,298.257223563]],PRIMEM[\"Greenwich\",0],UNIT[\"Degree\",0.017453292519943295]]"), o = (_.OSRSetAxisMappingStrategy(a, 0), _.GDALGetSpatialRef(t.pointer)), i = (a = _.OCTNewCoordinateTransformation(a, o), o = _.CPLAtof(String(e[0])), _.CPLAtof(String(e[1]))), s = _.Module._malloc(8);
						_.Module.setValue(s, o, "double"), o = _.Module._malloc(8), _.Module.setValue(o, i, "double"), _.OCTTransform(a, 1, o, s, null) || n(/* @__PURE__ */ new Error("Failed to perform OCTTransform")), i = _.Module.getValue(o, "double"), a = _.Module.getValue(s, "double"), o = _.Module._malloc(6 * Float64Array.BYTES_PER_ELEMENT), _.GDALGetGeoTransform(t.pointer, o), s = _.Module._malloc(6 * Float64Array.BYTES_PER_ELEMENT), _.GDALInvGeoTransform(o, s) || n(/* @__PURE__ */ new Error("Failed to invert transform")), o = _.Module.HEAPF64.subarray(s / Float64Array.BYTES_PER_ELEMENT, s / Float64Array.BYTES_PER_ELEMENT + 6), r({
							pixel: Math.floor(o[0] + o[1] * i + o[2] * a),
							line: Math.floor(o[3] + o[4] * i + o[5] * a)
						});
					});
				},
				gdalinfo: Jt,
				ogrinfo: Zt,
				open: function(t) {
					var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [], r = t, n = E(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []);
					return Array.isArray(r) || "function" == typeof FileList && r instanceof FileList || (r = [r]), new Promise(function(t, o) {
						var i, s = [], c = [];
						a(r).forEach(function(t) {
							!("string" == typeof t || t instanceof String) || t.substring(0, 7) !== "".concat(b, "/") && t.substring(0, 8) !== "".concat(D, "/") ? c.push(t) : s.push({
								name: t.substring(t.indexOf("/", 1) + 1),
								internal: !0,
								prefix: t.substring(0, t.indexOf("/", 1))
							});
						}), i = c, new Promise(function(t) {
							var e, r;
							0 === i.length ? t([]) : d ? (e = [], i.forEach(function(t) {
								var r = (t = t.split("/")).pop();
								t = t.join("/") || ".", Yt !== t && (Yt && te(), Yt = t, _.Module.FS.mount(_.Module.NODEFS, { root: t }, b)), e.push({ name: r });
							}), t(e)) : "function" == typeof importScripts ? (Yt && te(), _.Module.FS.mount(_.Module.WORKERFS, { files: i }, b), Yt = !0, t(i)) : (r = [], i.forEach(function(t) {
								r.push(t.arrayBuffer());
							}), Promise.all(r).then(function(e) {
								e.forEach(function(t, e) {
									t = new Uint8Array(t), _.Module.FS.writeFile("".concat(b, "/").concat(i[e].name), t);
								}), t(i);
							}));
						}).then(function(r) {
							for (var i = [].concat(a(r), s), c = [], u = (_.CPLErrorReset(), {}), l = [], f = function() {
								var t = i[d].name, r = t.split(".", 1)[0];
								if (u[r] || (u[r] = {}), u[r].pointer) return 0;
								u[r].path = t;
								var a = e && e.length ? "/".concat(e.join("/"), "/") : "", o = "".concat(a).concat(b, "/").concat(t), s = (i[d].internal && (o = "".concat(a).concat(i[d].prefix, "/").concat(t)), _.GDALOpenEx(o, null, null, n.ptr, null));
								if (0 === s) return a = w(), c.push(a), delete u[r], 0;
								function f() {
									var t = _.GDALGetRasterCount(s), e = _.GDALDatasetGetLayerCount(s);
									u[r].type = 0 < t && 0 === e ? "raster" : "vector";
								}
								u[r].pointer = s, t = Jt(u[r]).then(function(t) {
									if (t && t.bands) {
										var e = t.size && 2 <= t.size.length && (0 < t.size[0] || 0 < t.size[1]);
										if (u[r].type = 0 < t.bands.length && e ? "raster" : "vector", "vector" === u[r].type) return Zt(u[r]).then(function(t) {
											u[r].info = t;
										});
										u[r].info = t;
									} else f();
									return !0;
								}).catch(f), l.push(t);
							}, d = 0; d < i.length; d += 1) f();
							v(n), Promise.allSettled(l).then(function() {
								var e = Object.values(u);
								0 < e.length || 0 === c.length ? t({
									datasets: e,
									errors: c
								}) : o(c);
							});
						});
					});
				},
				close: function(t) {
					return new Promise(function(e) {
						_.GDALClose(t.pointer), e();
					});
				},
				getInfo: function(t) {
					return new Promise(function(e) {
						var r = _.GDALGetRasterCount(t.pointer), n = _.GDALDatasetGetLayerCount(t.pointer);
						if (0 < r && 0 === n) {
							var a = _.GDALGetRasterXSize(t.pointer), o = _.GDALGetRasterYSize(t.pointer), i = _.GDALGetProjectionRef(t.pointer), s = _.Module._malloc(6 * Float64Array.BYTES_PER_ELEMENT), c = (_.GDALGetGeoTransform(t.pointer, s), _.Module.HEAPF64.subarray(s / Float64Array.BYTES_PER_ELEMENT, s / Float64Array.BYTES_PER_ELEMENT + 6)), u = (s = [
								[0, 0],
								[a, 0],
								[a, o],
								[0, o]
							].map(function(t) {
								var e = t[0];
								return t = t[1], [c[0] + c[1] * e + c[2] * t, c[3] + c[4] * e + c[5] * t];
							}), _.GDALGetDatasetDriver(t.pointer)), l = (u = _.GDALGetDriverLongName(u), _.OGR_DS_GetName(t.pointer));
							e(JSON.parse(JSON.stringify({
								type: "raster",
								bandCount: r,
								width: a,
								height: o,
								projectionWkt: i,
								coordinateTransform: c,
								corners: s,
								driverName: u,
								dsName: l
							})));
						} else {
							for (var f = [], d = 0; d < n; d += 1) {
								var h = _.OGR_DS_GetLayer(t.pointer, d), m = _.OGR_L_GetName(h);
								h = _.OGR_L_GetFeatureCount(h, 1), f.push({
									name: m,
									featureCount: h
								});
							}
							r = f.reduce(function(t, e) {
								return t + e.featureCount;
							}, 0), a = _.OGR_DS_GetName(t.pointer), o = _.GDALGetDatasetDriver(t.pointer), e({
								type: "vector",
								layerCount: n,
								featureCount: r,
								layers: f,
								dsName: a,
								driverName: _.GDALGetDriverLongName(o)
							});
						}
					});
				},
				getOutputFiles: function() {
					return new Promise(function(t) {
						t(function t(e) {
							var r = 0 < arguments.length && void 0 !== e ? e : D.substr(1), n = r.split("/").reduce(function(t, e) {
								return t.contents[e];
							}, _.Module.FS.root).contents, o = [];
							return Object.keys(n).forEach(function(e) {
								var i = n[e];
								i.usedBytes ? o.push({
									path: "/".concat(r, "/").concat(e),
									size: i.usedBytes
								}) : i.contents && o.push.apply(o, a(t("".concat(r, "/").concat(e))));
							}), o;
						}());
					});
				},
				getFileBytes: function(t) {
					return new Promise(function(e) {
						var r;
						t ? (r = t.local || t, e(_.Module.FS.readFile(r, { encoding: "binary" }))) : e(/* @__PURE__ */ new Uint8Array());
					});
				},
				drivers: Xt,
				Module: _.Module
			}, ne = {
				gdalWorkerWrapper: null,
				drivers: null
			}, ae = (g = function() {
				function t(e, r, n) {
					var a = this;
					if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function");
					this.promises = { onload: {
						resolve: n,
						reject: console.error
					} }, this.gdalWorker = new Worker(e), this.gdalWorker.onmessage = function(t) {
						t.data && t.data.id && a.promises[t.data.id] && (t.data.success ? a.promises[t.data.id].resolve(t.data.data) : a.promises[t.data.id].reject(t.data.data));
					}, this.gdalWorker.postMessage({
						func: "constructor",
						params: { config: r }
					});
				}
				var e, r = t;
				return (e = [{
					key: "call",
					value: function(t) {
						var e = this;
						return new Promise(function(r, n) {
							t.id = Math.floor(1e5 * Math.random()), e.promises[t.id] = {
								resolve: r,
								reject: n
							}, e.gdalWorker.postMessage(t);
						});
					}
				}, {
					key: "terminate",
					value: function() {
						this.gdalWorker.terminate(), delete this.gdalWorker, delete this.promises;
					}
				}]) && function(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, s(n.key), n);
					}
				}(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), t;
			}(), dt = new Proxy({}, { get: function(t, e) {
				return "then" === e || "catch" === e ? t : "drivers" === e ? ne.drivers : function() {
					for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
					return new Promise(function(t, n) {
						ne.gdalWorkerWrapper.call({
							func: e,
							params: r
						}).then(function(e) {
							t(e);
						}).catch(function(t) {
							return n(t);
						});
					});
				};
			} }), {
				variables: ne,
				WorkerWrapper: g,
				gdalProxy: dt
			});
			function oe() {
				var t, r, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
				return ee = ee || (d || !1 === a.useWorker ? new Promise(function(t, r) {
					var o = _.Module, i = o.onAbort;
					o.onAbort = function(t) {
						r(new Error(t)), i && i(t);
					}, o.print = function(t) {
						a.logHandler ? a.logHandler(t, "stdout") : console.debug("gdal stdout: ".concat(t));
					}, o.printErr = function(t) {
						a.errorHandler ? a.errorHandler(t, "stderr") : console.error("gdal stderr: ".concat(t));
					}, o.preRun = [function(t) {
						var e = t.ENV;
						e.PROJ_LIB = "/usr/share/proj", e.GDAL_DATA = "/usr/share/gdal", e.DXF_FEATURE_LIMIT_PER_BLOCK = "-1", e.GDAL_NUM_THREADS = "0", e.GDAL_ENABLE_DEPRECATED_DRIVER_GTM = "YES", e.CPL_LOG_ERRORS = "ON", a.env && Object.entries(a.env).forEach(function(t) {
							var r = (t = n(t, 2))[0];
							t = t[1], e[r] = t;
						});
					}], o.onRuntimeInitialized = function() {
						var t, r;
						_.GDALOpen || ((r = _.Module).ccall("GDALAllRegister", null, [], []), _.GDALOpen = r.cwrap("GDALOpen", "number", ["string"]), _.GDALOpenEx = r.cwrap("GDALOpenEx", "number", [
							"string",
							"number",
							"number",
							"number",
							"number"
						]), _.GDALClose = r.cwrap("GDALClose", null, ["number"]), _.CPLErrorReset = r.cwrap("CPLErrorReset", null, []), _.CPLSetErrorHandler = r.cwrap("CPLSetErrorHandler", "number", ["number"]), _.CPLQuietErrorHandler = r.cwrap("CPLQuietErrorHandler", null, [
							"number",
							"number",
							"string"
						]), _.CPLGetLastErrorNo = r.cwrap("CPLGetLastErrorNo", "number", []), _.CPLGetLastErrorMsg = r.cwrap("CPLGetLastErrorMsg", "string", []), _.CPLGetLastErrorType = r.cwrap("CPLGetLastErrorType", "number", []), _.CPLSetConfigOption = r.cwrap("CPLSetConfigOption", null, ["string", "string"]), _.CPLSetThreadLocalConfigOption = r.cwrap("CPLSetThreadLocalConfigOption", null, ["string", "string"]), _.GDALGetRasterCount = r.cwrap("GDALGetRasterCount", "number", ["number"]), _.GDALGetRasterXSize = r.cwrap("GDALGetRasterXSize", "number", ["number"]), _.GDALGetRasterYSize = r.cwrap("GDALGetRasterYSize", "number", ["number"]), _.GDALGetProjectionRef = r.cwrap("GDALGetProjectionRef", "string", ["number"]), _.GDALGetGeoTransform = r.cwrap("GDALGetGeoTransform", "number", ["number", "number"]), _.GDALInvGeoTransform = r.cwrap("GDALInvGeoTransform", "number", ["number", "number"]), _.GDALVectorTranslate = r.cwrap("GDALVectorTranslate", "number", [
							"string",
							"number",
							"number",
							"number",
							"number",
							"number"
						]), _.GDALVectorTranslateOptionsNew = r.cwrap("GDALVectorTranslateOptionsNew", "number", ["number", "number"]), _.GDALVectorTranslateOptionsFree = r.cwrap("GDALVectorTranslateOptionsFree", "number", ["number"]), _.GDALDatasetGetLayerCount = r.cwrap("GDALDatasetGetLayerCount", "number", ["number"]), _.GDALDatasetGetLayer = r.cwrap("GDALDatasetGetLayer", "number", ["number", "number"]), _.OGR_DS_GetLayerCount = r.cwrap("OGR_DS_GetLayerCount", "number", ["number"]), _.OGR_DS_GetName = r.cwrap("OGR_DS_GetName", "string", ["number"]), _.OGR_DS_GetLayer = r.cwrap("OGR_DS_GetLayer", "number", ["number", "number"]), _.OGR_L_GetName = r.cwrap("OGR_L_GetName", "string", ["number"]), _.OGR_DS_GetDriver = r.cwrap("OGR_DS_GetDriver", "number", ["number"]), _.OGR_Dr_GetName = r.cwrap("OGR_Dr_GetName", "string", ["number"]), _.GDALGetDatasetDriver = r.cwrap("GDALGetDatasetDriver", "number", ["number"]), _.GDALGetDriverLongName = r.cwrap("GDALGetDriverLongName", "string", ["number"]), _.GDALGetDriverShortName = r.cwrap("GDALGetDriverShortName", "string", ["number"]), _.GDALTranslate = r.cwrap("GDALTranslate", "number", [
							"string",
							"number",
							"number",
							"number"
						]), _.GDALTranslateOptionsNew = r.cwrap("GDALTranslateOptionsNew", "number", ["number", "number"]), _.GDALTranslateOptionsFree = r.cwrap("GDALTranslateOptionsFree", "number", ["number"]), _.GDALRasterize = r.cwrap("GDALRasterize", "number", [
							"string",
							"number",
							"number",
							"number",
							"number"
						]), _.GDALRasterizeOptionsNew = r.cwrap("GDALRasterizeOptionsNew", "number", ["number", "number"]), _.GDALRasterizeOptionsFree = r.cwrap("GDALRasterizeOptionsFree", "number", ["number"]), _.GDALWarp = r.cwrap("GDALWarp", "number", [
							"string",
							"number",
							"number",
							"number",
							"number",
							"number"
						]), _.GDALWarpAppOptionsNew = r.cwrap("GDALWarpAppOptionsNew", "number", ["number", "number"]), _.GDALWarpAppOptionsSetProgress = r.cwrap("GDALWarpAppOptionsSetProgress", "number", [
							"number",
							"number",
							"number"
						]), _.GDALWarpAppOptionsFree = r.cwrap("GDALWarpAppOptionsFree", "number", ["number"]), _.OSRNewSpatialReference = r.cwrap("OSRNewSpatialReference", "number", ["string"]), _.OSRDestroySpatialReference = r.cwrap("OSRDestroySpatialReference", "number", ["number"]), _.OCTNewCoordinateTransformation = r.cwrap("OCTNewCoordinateTransformation", "number", ["number", "number"]), _.OCTDestroyCoordinateTransformation = r.cwrap("OCTDestroyCoordinateTransformation", "number", ["number"]), _.OCTTransform = r.cwrap("OCTTransform", "number", [
							"number",
							"number",
							"number",
							"number",
							"number"
						]), _.GDALGetDriverCount = r.cwrap("GDALGetDriverCount", "number", []), _.OGRGetDriverCount = r.cwrap("OGRGetDriverCount", "number", []), _.GDALGetDriver = r.cwrap("GDALGetDriver", "number", ["number"]), _.OGRGetDriver = r.cwrap("OGRGetDriver", "number", ["number"]), _.GDALGetMetadataItem = r.cwrap("GDALGetMetadataItem", "string", [
							"number",
							"string",
							"string"
						]), _.GDALGetDescription = r.cwrap("GDALGetDescription", "string", ["number"]), _.OGR_L_GetFeatureCount = r.cwrap("OGR_L_GetFeatureCount", "number", ["number", "number"]), _.GDALGenImgProjTransform = r.cwrap("GDALGenImgProjTransform", "number", [
							"number",
							"number",
							"number",
							"number",
							"number",
							"number",
							"number"
						]), _.GDALCreateGenImgProjTransformer2 = r.cwrap("GDALCreateGenImgProjTransformer2", "number", [
							"number",
							"number",
							"number"
						]), _.GDALDestroyGenImgProjTransformer = r.cwrap("GDALDestroyGenImgProjTransformer", null, ["number"]), _.OSRSetFromUserInput = r.cwrap("OSRSetFromUserInput", "number", ["number", "string"]), _.OSRExportToWkt = r.cwrap("OSRExportToWkt", "number", ["number", "number"]), _.GDALGetSpatialRef = r.cwrap("GDALGetSpatialRef", "number", ["number"]), _.CPLAtof = r.cwrap("CPLAtof", "number", ["string"]), _.OSRSetAxisMappingStrategy = r.cwrap("OSRSetAxisMappingStrategy", null, ["number", "number"]), _.GDALInfo = r.cwrap("GDALInfo", "string", ["number", "number"]), _.GDALInfoOptionsNew = r.cwrap("GDALInfoOptionsNew", "number", ["number", "number"]), _.GDALInfoOptionsFree = r.cwrap("GDALInfoOptionsFree", null, ["number"]), _.GDALVectorInfo = r.cwrap("GDALVectorInfo", "string", ["number", "number"]), _.GDALVectorInfoOptionsNew = r.cwrap("GDALVectorInfoOptionsNew", "number", ["number", "number"]), _.GDALVectorInfoOptionsFree = r.cwrap("GDALVectorInfoOptionsFree", null, ["number"]), _.GDALGetFileList = r.cwrap("GDALGetFileList", "number", ["number"])), o.FS.mkdir(b), o.FS.mkdir(D), a.dest && (r = a.dest, A = r, t = a.dest, d) && _.Module.FS.mount(_.Module.NODEFS, { root: t }, D), function() {
							for (var t, r, n = _.GDALGetDriverCount(), a = 0; a < n; a += 1) {
								var o = _.GDALGetDriver(a), i = (i = t = void 0, t = _.GDALGetMetadataItem(o, "DMD_EXTENSIONS", null), "" !== (i = "" === (i = _.GDALGetMetadataItem(o, "DMD_EXTENSION", null)) && "" !== t ? t.split(" ")[0] : i) && (i = i.replace(".", "").replace("/", "")), "GeoJSON" === (r = _.GDALGetDescription(o)) && (i = "geojson"), {
									extension: i,
									extensions: t,
									shortName: r,
									longName: _.GDALGetMetadataItem(o, "DMD_LONGNAME", null),
									isReadable: "YES" === _.GDALGetMetadataItem(o, "DCAP_OPEN", null),
									isWritable: "YES" === _.GDALGetMetadataItem(o, "DCAP_CREATE", null) || "YES" === _.GDALGetMetadataItem(o, "DCAP_CREATECOPY", null),
									isRaster: "YES" === _.GDALGetMetadataItem(o, "DCAP_RASTER", null),
									isVector: "YES" === _.GDALGetMetadataItem(o, "DCAP_VECTOR", null),
									openOptionsList: $t(_.GDALGetMetadataItem(o, "DMD_OPENOPTIONLIST", null)),
									creationOptionList: $t(_.GDALGetMetadataItem(o, "DMD_CREATIONOPTIONLIST", null)),
									layerCreationOptionList: $t(_.GDALGetMetadataItem(o, "DS_LAYER_CREATIONOPTIONLIST", null)),
									helpUrl: _.GDALGetMetadataItem(o, "DMD_HELPTOPIC", null)
								});
								i.isRaster && (Xt.raster[i.shortName] = e(e({ index: a }, i), {}, { type: "raster" })), i.isVector && (Xt.vector[i.shortName] = e(e({ index: a }, i), {}, { type: "vector" }));
							}
						}();
					}, o.locateFile = function(t) {
						var e = t;
						return a.paths && a.paths.wasm && "wasm" === t.split(".").pop() ? e = a.paths.wasm : a.paths && a.paths.data && "data" === t.split(".").pop() && (e = a.paths.data), t = "", a.path ? "/" !== (t = a.path).slice(-1) && (t += "/") : d && (t = "node_modules/gdal3.js/dist/package/"), t += e, d || "http" === t.substring(0, 4) || "/" === t[0] ? t : "/".concat(t);
					}, d && (o.getPreloadedPackage = function(t) {
						return f.readFileSync("./".concat(t), { flag: "r" }).buffer;
					}), y(_.Module).then(function() {
						t(re);
					});
				}) : (t = a.paths && a.paths.js || "gdal3.js", r = "", a.path && "/" !== (r = a.path).slice(-1) && (r += "/"), new Promise(function(e) {
					ae.variables.gdalWorkerWrapper = new ae.WorkerWrapper("".concat(r).concat(t), a, function(t) {
						ae.variables.drivers = t, e(ae.gdalProxy);
					});
				})));
			}
			return d && (global.location = { pathname: "./" }), "undefined" != typeof window && (window.initGdalJs = oe), "function" == typeof importScripts && function(t) {
				var r;
				onmessage = function(n) {
					var o;
					return n.data && "constructor" === n.data.func ? (o = { useWorker: !1 }, n.data.params && n.data.params.config && (o = e(e({}, n.data.params.config), o)), (r = t(o)).then(function(t) {
						return t = t.drivers, postMessage({
							success: !0,
							id: "onload",
							data: t
						});
					}).catch(function(t) {
						return postMessage({
							success: !1,
							id: "onload",
							data: t
						});
					}), null) : r.then(function(t) {
						var e = this;
						this.data && this.data.func && t[this.data.func] ? t[this.data.func].apply(t, a(this.data.params)).then(function(t) {
							postMessage({
								success: !0,
								id: e.data.id,
								data: t
							});
						}).catch(function(t) {
							postMessage({
								success: !1,
								id: e.data.id,
								data: { message: t.message }
							});
						}) : console.error("undefined function", this.data);
					}.bind(n)).catch(function(t) {
						postMessage({
							success: !1,
							id: this.id,
							data: {
								no: -1,
								message: t.message
							}
						});
					}.bind(n));
				};
			}(oe), oe;
		};
		"object" == typeof t && void 0 !== e ? e.exports = a() : "function" == typeof define && define.amd ? define(a) : (n = "undefined" != typeof globalThis ? globalThis : n || self).initGdalJs = a();
	})(), 1);
	function u(t, e, r) {
		try {
			t.unlink(e);
		} catch (n) {
			console.warn(`GDAL: falha ao apagar ${r} da memória do WebAssembly:`, n);
		}
	}
	function l(t) {
		return "string" == typeof t && t ? t : t && "string" == typeof t.message && t.message ? t.message : "O GDAL falhou ao gerar o PDF.";
	}
	const f = "/input", d = "/output", h = "ebgeo-vetor", m = Object.freeze({
		String: { type: "String" },
		Integer: { type: "Integer" },
		Integer64: { type: "Integer64" },
		Real: { type: "Real" },
		Boolean: {
			type: "Integer",
			subtype: "Boolean"
		},
		JSON: {
			type: "String",
			subtype: "JSON"
		},
		DateTime: { type: "DateTime" },
		Date: { type: "Date" }
	}), p = Object.freeze({
		Point: "wkbPoint",
		LineString: "wkbLineString",
		Polygon: "wkbPolygon",
		MultiPoint: "wkbMultiPoint",
		MultiLineString: "wkbMultiLineString",
		MultiPolygon: "wkbMultiPolygon",
		GeometryCollection: "wkbGeometryCollection"
	});
	function g(t, e, r = {}) {
		return Object.assign(new Error(e), { codigo: t }, r);
	}
	function y(t, e = "O GDAL falhou ao ler ou escrever o arquivo.") {
		return "string" == typeof t && t ? t : t && "string" == typeof t.message && t.message ? t.message : Array.isArray(t) && t[0]?.message ? String(t[0].message) : e;
	}
	function _(t, e) {
		try {
			t.unlink(e);
		} catch {}
	}
	function w(t, e) {
		if (!((t) => "string" != typeof t && !(t instanceof String))(e)) return;
		const r = t?.Module?.FS;
		if (r) {
			try {
				const t = r.lookupPath(f, { follow_mount: !1 }).node;
				if (r.isMountpoint(t)) return r.unmount(f), void r.mount(r.filesystems.MEMFS, {}, f);
			} catch (n) {
				console.warn("GDAL: falha ao devolver a pasta de entrada à escrita:", n);
				return;
			}
			"string" == typeof e?.name && _(r, `${f}/${e.name}`);
		}
	}
	async function E(t, e) {
		let r;
		try {
			r = await t.open(e);
		} catch (a) {
			throw g("nao-abriu", y(a, "O GDAL não abriu o arquivo."));
		}
		const n = r?.datasets?.[0];
		if (!n) throw g("nao-abriu", r?.errors?.[0]?.message || "O GDAL não abriu o arquivo.");
		return n;
	}
	async function v(t, e) {
		if (e) try {
			await t.close(e);
		} catch (r) {
			console.warn("GDAL: falha ao fechar o arquivo vetorial:", r);
		}
	}
	function b(t) {
		const e = t?.coordinateSystem?.projjson, r = e?.id;
		if (r?.authority && void 0 !== r?.code) return `${r.authority}:${r.code}`;
		if ("string" == typeof e?.name && e.name) return e.name;
		const n = t?.coordinateSystem?.wkt;
		return "string" == typeof n && n.trim() ? n.trim().split("[")[0] : null;
	}
	const D = Object.freeze([63e5, 64e5]);
	function A(t) {
		if (!t || "object" != typeof t) return null;
		if (t.ellipsoid && "object" == typeof t.ellipsoid) {
			const e = t.ellipsoid, r = e.semi_major_axis ?? e.radius, n = "object" == typeof r && null !== r ? r.value : r;
			if (Number.isFinite(n)) return n;
		}
		for (const e of Object.values(t)) {
			const t = A(e);
			if (null !== t) return t;
		}
		return null;
	}
	function T(t) {
		const e = t?.coordinateSystem?.projjson;
		if (!e) return !1;
		if ("string" == typeof e.id?.authority && /^IAU/i.test(e.id.authority)) return !0;
		const r = A(e);
		return null !== r && (r < D[0] || r > D[1]);
	}
	async function L(t, e) {
		return "vector" === e?.type && Array.isArray(e?.info?.layers) ? e.info : t.ogrinfo(e, ["-so", "-al"]);
	}
	async function G(t, e) {
		let r = null;
		try {
			let a;
			r = await E(t, e);
			try {
				a = await L(t, r);
			} catch (n) {
				if ("raster" === r.type) return {
					driver: null,
					soRaster: !0,
					camadas: []
				};
				throw g("nao-abriu", y(n, "O GDAL não leu as camadas do arquivo."));
			}
			const o = (Array.isArray(a?.layers) ? a.layers : []).map((t) => {
				const e = (Array.isArray(t.geometryFields) ? t.geometryFields : []).filter((t) => t && t.type && "None" !== t.type);
				return {
					nome: String(t.name),
					temGeometria: e.length > 0,
					geometria: e[0]?.type ?? null,
					sistema: e.length > 0 ? b(e[0]) : null,
					outroCorpo: e.length > 0 && T(e[0]),
					contagem: Number.isFinite(t.featureCount) && t.featureCount >= 0 ? t.featureCount : null,
					campos: Array.isArray(t.fields) ? t.fields.length : 0
				};
			});
			return {
				driver: a?.driverShortName ?? null,
				soRaster: 0 === o.length && "raster" === r.type,
				camadas: o
			};
		} finally {
			await v(t, r), w(t, e);
		}
	}
	function O(t) {
		return t.startsWith("-") ? ["-sql", `SELECT * FROM "${t.replace(/"/g, "\"\"")}"`] : [t];
	}
	function S(t) {
		return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
	}
	let C = null, F = Promise.resolve();
	function N(t) {
		return 0 === t.byteOffset && t.byteLength === t.buffer.byteLength ? t : t.slice();
	}
	function j() {
		if (!C) throw new Error("O GDAL não foi iniciado neste worker.");
		return C;
	}
	async function P(t) {
		const { id: e, tipo: r } = t ?? {};
		try {
			if ("iniciar" === r) return C || (C = (0, c.default)({
				paths: t.paths,
				useWorker: !1
			})), self.onmessage = R, await C, void self.postMessage({
				id: e,
				ok: !0
			});
			if ("pngParaPdf" === r) {
				const r = N(await async function(t, e, r) {
					const n = t?.Module?.FS;
					if (!n?.writeFile || !n?.unlink) throw new Error("O GDAL não expôs o sistema de arquivos do WebAssembly.");
					const a = `/input/${function(t) {
						const e = String(t?.name || "folha.png").replace(/[\\/]/g, "_");
						return e.includes(".") ? e : `${e}.png`;
					}(e)}`;
					let o = !1, i = null, s = null;
					try {
						n.writeFile(a, new Uint8Array(await e.arrayBuffer()), { canOwn: !0 }), o = !0;
						const c = await t.open(a);
						if (i = c?.datasets?.[0] ?? null, !i) throw new Error(c?.errors?.[0]?.message || "O GDAL não abriu a imagem da folha.");
						return s = await t.gdal_translate(i, r), await t.getFileBytes(s);
					} finally {
						if (i) try {
							await t.close(i);
						} catch (c) {
							console.warn("GDAL: falha ao fechar o dataset da folha:", c);
						}
						o && u(n, a, "o PNG"), "string" == typeof s?.local && u(n, s.local, "o PDF");
					}
				}(await j(), t.png, t.opcoes));
				self.postMessage({
					id: e,
					ok: !0,
					bytes: r
				}, [r.buffer]);
				return;
			}
			if ("listarCamadas" === r) return void self.postMessage({
				id: e,
				ok: !0,
				resultado: await G(await j(), t.arquivo)
			});
			if ("lerCamada" === r) {
				const r = await async function(t, e, r, { teto: n } = {}) {
					const a = t?.Module?.FS;
					let o = null, i = null;
					try {
						let c;
						o = await E(t, e);
						try {
							c = await L(t, o);
						} catch (s) {
							throw g("nao-abriu", y(s, "O GDAL não leu as camadas do arquivo."));
						}
						const u = (c?.layers ?? []).find((t) => String(t.name) === String(r));
						if (!u) throw g("camada-inexistente", `O arquivo não tem a camada "${r}".`);
						const l = (u.geometryFields ?? []).find((t) => t && t.type && "None" !== t.type);
						if (l && !b(l)) throw g("sistema-indefinido", `A camada "${r}" não declara o sistema de referência.`);
						if (l && T(l)) throw g("sistema-incompativel", `A camada "${r}" está num sistema de referência de outro corpo celeste.`);
						const f = `${h}-camada`;
						_(a, `${d}/${f}.geojson`);
						const m = l ? ["-t_srs", "EPSG:4326"] : [], p = ["-lco", "AUTODETECT_JSON_STRINGS=NO"];
						try {
							i = await t.ogr2ogr(o, [
								"-f",
								"GeoJSON",
								...p,
								...m,
								"-skipfailures",
								...O(String(r))
							], f);
						} catch (s) {
							const t = y(s, "O GDAL não converteu a camada.");
							if (/transform|coordinate operation|reproject/i.test(t)) throw g("sistema-incompativel", t);
							throw g("nao-abriu", t);
						}
						const w = await t.getFileBytes(i);
						if (Number.isFinite(n) && w.length > n) throw g("acima-do-teto", `A camada "${r}" passa do tamanho que o navegador converte.`, { tamanho: w.length });
						const v = JSON.parse(new TextDecoder().decode(w));
						if (0 === (v?.features?.length ?? 0) && u.featureCount > 0) throw g("nada-convertido", `Nenhuma feição da camada "${r}" foi convertida.`);
						return {
							geojson: v,
							tamanho: w.length
						};
					} finally {
						await v(t, o), a && "string" == typeof i?.local && _(a, i.local), w(t, e);
					}
				}(await j(), t.arquivo, t.camada, t.opcoes);
				self.postMessage({
					id: e,
					ok: !0,
					resultado: r
				});
				return;
			}
			if ("escreverGeoPackage" === r) {
				const r = N(await async function(t, e) {
					const r = t?.Module?.FS;
					if (!r?.writeFile || !r?.unlink) throw new Error("O GDAL não expôs o sistema de arquivos do WebAssembly.");
					(function(t) {
						if (!Array.isArray(t) || 0 === t.length) throw new Error("Nenhuma camada para escrever no GeoPackage.");
						const e = /* @__PURE__ */ new Set();
						for (const r of t) {
							const t = "string" == typeof r?.nome ? r.nome.trim() : "";
							if (!t) throw new Error("Camada sem nome para o GeoPackage.");
							if (e.has(t.toLowerCase())) throw new Error(`Duas camadas com o nome "${t}" no GeoPackage.`);
							if (e.add(t.toLowerCase()), null !== r.geometria && !Object.hasOwn(p, r.geometria)) throw new Error(`Tipo de geometria desconhecido para "${t}": ${r.geometria}`);
							if (!Array.isArray(r.geojson?.features)) throw new Error(`A camada "${t}" não é um FeatureCollection.`);
							const n = /* @__PURE__ */ new Set();
							for (const e of r.campos ?? []) {
								if (!Object.hasOwn(m, e?.tipo)) throw new Error(`Tipo de coluna desconhecido: ${e?.tipo}`);
								const r = String(e.nome).toLowerCase();
								if (!r || n.has(r)) throw new Error(`Coluna repetida ou sem nome em "${t}": ${e.nome}`);
								n.add(r);
							}
						}
					})(e);
					const n = [], a = e.map((t, e) => `${d}/${h}-entrada-${e}.geojson`), o = `${d}/${h}-entrada.vrt`, i = `${h}-saida`, s = `${d}/${i}.gpkg`, c = new TextEncoder();
					let u = null;
					try {
						e.forEach((t, e) => {
							const o = JSON.stringify({
								type: "FeatureCollection",
								features: t.geojson.features
							});
							r.writeFile(a[e], c.encode(o), { canOwn: !0 }), n.push(a[e]);
						}), r.writeFile(o, c.encode(function(t, e) {
							const r = ["<OGRVRTDataSource>"];
							return t.forEach((t, n) => {
								const a = e[n].split("/").pop().replace(/\.geojson$/i, "");
								if (r.push(`<OGRVRTLayer name="${S(t.nome)}">`), r.push(`<SrcDataSource>${S(e[n])}</SrcDataSource>`), r.push("<OpenOptions><OOI key=\"DATE_AS_STRING\">YES</OOI></OpenOptions>"), r.push(`<SrcLayer>${S(a)}</SrcLayer>`), t.geometria) {
									const e = p[t.geometria];
									r.push(`<GeometryType>${e}${t.z ? "25D" : ""}</GeometryType>`), r.push("<LayerSRS>EPSG:4326</LayerSRS>");
								} else r.push("<GeometryType>wkbNone</GeometryType>");
								for (const e of t.campos ?? []) {
									const { type: t, subtype: n } = m[e.tipo], a = [`name="${S(e.nome)}"`, `type="${t}"`];
									n && a.push(`subtype="${n}"`), a.push(`src="${S(e.nome)}"`), "string" == typeof e.apelido && e.apelido && a.push(`alternativeName="${S(e.apelido)}"`), r.push(`<Field ${a.join(" ")}/>`);
								}
								r.push("</OGRVRTLayer>");
							}), r.push("</OGRVRTDataSource>"), r.join("\n");
						}(e, a)), { canOwn: !0 }), n.push(o);
						for (const t of [
							"",
							"-journal",
							"-wal",
							"-shm"
						]) _(r, `${s}${t}`);
						u = await E(t, o);
						try {
							await t.ogr2ogr(u, ["-f", "GPKG"], i);
						} catch (l) {
							throw g("escrita", y(l, "O GDAL não escreveu o GeoPackage."));
						}
						return await t.getFileBytes(s);
					} finally {
						await v(t, u);
						for (const t of n) _(r, t);
						for (const t of [
							"",
							"-journal",
							"-wal",
							"-shm"
						]) _(r, `${s}${t}`);
					}
				}(await j(), t.camadas));
				self.postMessage({
					id: e,
					ok: !0,
					bytes: r
				}, [r.buffer]);
				return;
			}
			throw new Error(`Pedido desconhecido ao worker do GDAL: ${r}`);
		} catch (n) {
			const t = {
				id: e,
				ok: !1,
				mensagem: "pngParaPdf" === r || "iniciar" === r ? l(n) : y(n)
			};
			"string" == typeof n?.codigo && (t.codigo = n.codigo), Number.isFinite(n?.tamanho) && (t.tamanho = n.tamanho), self.postMessage(t);
		}
	}
	function R(t) {
		F = F.then(() => P(t.data));
	}
	self.onmessage = R;
})();
