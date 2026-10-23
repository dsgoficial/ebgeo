(function() {
	var e, t, r, i, n = Object.create, a = Object.defineProperty, s = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, l = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, h = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), c = (e, t, r, i) => {
		if (t && "object" == typeof t || "function" == typeof t) for (var n, l = o(t), h = 0, c = l.length; h < c; h++) n = l[h], !u.call(e, n) && n !== r && a(e, n, {
			get: ((e) => t[e]).bind(null, n),
			enumerable: !(i = s(t, n)) || i.enumerable
		});
		return e;
	}, p = (e, t, r) => (r = null == e ? {} : n(l(e)), c(!t && e && e.__esModule && u.call(e, "default") ? r : a(r, "default", {
		value: e,
		enumerable: !0
	}), e));
	function f(e, t) {
		this.x = e, this.y = t;
	}
	let d, y;
	f.prototype = {
		clone() {
			return new f(this.x, this.y);
		},
		add(e) {
			return this.clone()._add(e);
		},
		sub(e) {
			return this.clone()._sub(e);
		},
		multByPoint(e) {
			return this.clone()._multByPoint(e);
		},
		divByPoint(e) {
			return this.clone()._divByPoint(e);
		},
		mult(e) {
			return this.clone()._mult(e);
		},
		div(e) {
			return this.clone()._div(e);
		},
		rotate(e) {
			return this.clone()._rotate(e);
		},
		rotateAround(e, t) {
			return this.clone()._rotateAround(e, t);
		},
		matMult(e) {
			return this.clone()._matMult(e);
		},
		unit() {
			return this.clone()._unit();
		},
		perp() {
			return this.clone()._perp();
		},
		round() {
			return this.clone()._round();
		},
		mag() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		},
		equals(e) {
			return this.x === e.x && this.y === e.y;
		},
		dist(e) {
			return Math.sqrt(this.distSqr(e));
		},
		distSqr(e) {
			let t = e.x - this.x, r = e.y - this.y;
			return t * t + r * r;
		},
		angle() {
			return Math.atan2(this.y, this.x);
		},
		angleTo(e) {
			return Math.atan2(this.y - e.y, this.x - e.x);
		},
		angleWith(e) {
			return this.angleWithSep(e.x, e.y);
		},
		angleWithSep(e, t) {
			return Math.atan2(this.x * t - this.y * e, this.x * e + this.y * t);
		},
		_matMult(e) {
			let t = e[0] * this.x + e[1] * this.y, r = e[2] * this.x + e[3] * this.y;
			return this.x = t, this.y = r, this;
		},
		_add(e) {
			return this.x += e.x, this.y += e.y, this;
		},
		_sub(e) {
			return this.x -= e.x, this.y -= e.y, this;
		},
		_mult(e) {
			return this.x *= e, this.y *= e, this;
		},
		_div(e) {
			return this.x /= e, this.y /= e, this;
		},
		_multByPoint(e) {
			return this.x *= e.x, this.y *= e.y, this;
		},
		_divByPoint(e) {
			return this.x /= e.x, this.y /= e.y, this;
		},
		_unit() {
			return this._div(this.mag()), this;
		},
		_perp() {
			let e = this.y;
			return this.y = this.x, this.x = -e, this;
		},
		_rotate(e) {
			let t = Math.cos(e), r = Math.sin(e), i = t * this.x - r * this.y, n = r * this.x + t * this.y;
			return this.x = i, this.y = n, this;
		},
		_rotateAround(e, t) {
			let r = Math.cos(e), i = Math.sin(e), n = t.x + r * (this.x - t.x) - i * (this.y - t.y), a = t.y + i * (this.x - t.x) + r * (this.y - t.y);
			return this.x = n, this.y = a, this;
		},
		_round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
		},
		constructor: f
	}, f.convert = function(e) {
		if (e instanceof f) return e;
		if (Array.isArray(e)) return new f(+e[0], +e[1]);
		if (void 0 !== e.x && void 0 !== e.y) return new f(+e.x, +e.y);
		throw Error("Expected [x, y] or {x, y} point format");
	};
	var m = typeof Float32Array < "u" ? Float32Array : Array;
	function g(e, t, r) {
		var i = t[0], n = t[1], a = t[2], s = t[3];
		return e[0] = r[0] * i + r[4] * n + r[8] * a + r[12] * s, e[1] = r[1] * i + r[5] * n + r[9] * a + r[13] * s, e[2] = r[2] * i + r[6] * n + r[10] * a + r[14] * s, e[3] = r[3] * i + r[7] * n + r[11] * a + r[15] * s, e;
	}
	(function() {
		var e = new m(4);
		m != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0);
	})();
	const x = 8192;
	function v(e) {
		return e instanceof Error ? e : Error("string" == typeof e ? e : String(e));
	}
	function b(e, t, r) {
		return Math.min(r, Math.max(t, e));
	}
	function w(e, ...t) {
		for (let r of t) for (let t in r) e[t] = r[t];
		return e;
	}
	function _(e, t, r) {
		let i = {};
		for (let n in e) i[n] = t.call(r || this, e[n], n, e);
		return i;
	}
	function D(e, t) {
		if (Array.isArray(e)) {
			if (!Array.isArray(t) || e.length !== t.length) return !1;
			for (let r = 0; r < e.length; r++) if (!D(e[r], t[r])) return !1;
			return !0;
		}
		if ("object" == typeof e && e && null !== t) {
			if ("object" != typeof t || Object.keys(e).length !== Object.keys(t).length) return !1;
			for (let r in e) if (!D(e[r], t[r])) return !1;
			return !0;
		}
		return e === t;
	}
	function S(e) {
		return Array.isArray(e) ? e.map(S) : "object" == typeof e && e ? _(e, S) : e;
	}
	const A = {};
	function E(e) {
		A[e] || (typeof console < "u" && console.warn(e), A[e] = !0);
	}
	function F(e, t, r) {
		return (r.y - e.y) * (t.x - e.x) > (t.y - e.y) * (r.x - e.x);
	}
	function k(e) {
		return typeof WorkerGlobalScope < "u" && void 0 !== e && e instanceof WorkerGlobalScope;
	}
	function I(e) {
		return typeof ImageBitmap < "u" && e instanceof ImageBitmap;
	}
	let T, C;
	async function B(e, t, r, i, n) {
		if (function() {
			if (null == y && (y = !1, d ?? (d = typeof OffscreenCanvas < "u" && !!new OffscreenCanvas(1, 1).getContext("2d") && "function" == typeof createImageBitmap), d)) {
				let e = new OffscreenCanvas(5, 5).getContext("2d", { willReadFrequently: !0 });
				if (e) {
					for (let r = 0; r < 25; r++) {
						let t = 4 * r;
						e.fillStyle = `rgb(${t},${t + 1},${t + 2})`, e.fillRect(r % 5, Math.floor(r / 5), 1, 1);
					}
					let t = e.getImageData(0, 0, 5, 5).data;
					for (let e = 0; e < 100; e++) if (e % 4 != 3 && t[e] !== e) {
						y = !0;
						break;
					}
				}
			}
			return y || !1;
		}()) try {
			return await async function(e, t, r, i, n) {
				if (typeof VideoFrame > "u") throw Error("VideoFrame not supported");
				let a = new VideoFrame(e, { timestamp: 0 });
				try {
					let s = a?.format;
					if (!s || !s.startsWith("BGR") && !s.startsWith("RGB")) throw Error(`Unrecognized format ${s}`);
					let o = s.startsWith("BGR"), l = new Uint8ClampedArray(i * n * 4);
					if (await a.copyTo(l, function(e, t, r, i, n) {
						let a = 4 * Math.max(-t, 0), s = (Math.max(0, r) - r) * i * 4 + a, o = 4 * i, l = Math.max(0, t), u = Math.max(0, r);
						return {
							rect: {
								x: l,
								y: u,
								width: Math.min(e.width, t + i) - l,
								height: Math.min(e.height, r + n) - u
							},
							layout: [{
								offset: s,
								stride: o
							}]
						};
					}(e, t, r, i, n)), o) for (let e = 0; e < l.length; e += 4) {
						let t = l[e];
						l[e] = l[e + 2], l[e + 2] = t;
					}
					return l;
				} finally {
					a.close();
				}
			}(e, t, r, i, n);
		} catch {}
		return function(e, t, r, i, n) {
			let a = e.width, s = e.height;
			(!T || !C) && (T = new OffscreenCanvas(a, s), C = T.getContext("2d", { willReadFrequently: !0 })), T.width = a, T.height = s, C.drawImage(e, 0, 0, a, s);
			let o = C.getImageData(t, r, i, n);
			return C.clearRect(0, 0, a, s), o.data;
		}(e, t, r, i, n);
	}
	function M(e, t, r, i) {
		return e.addEventListener(t, r, i), { unsubscribe: () => {
			e.removeEventListener(t, r, i);
		} };
	}
	function P(e) {
		return e * Math.PI / 180;
	}
	const z = "AbortError";
	var L = class extends Error {
		constructor(e = z) {
			super(e instanceof Error ? e.message : e), this.name = z, e instanceof Error && e.stack && (this.stack = e.stack);
		}
	};
	function V(e) {
		return e instanceof Error && "AbortError" === e.name;
	}
	var O = class e {
		constructor(e, t, r) {
			let i = this.cells = [];
			if (e instanceof ArrayBuffer) {
				this.arrayBuffer = e;
				let n = new Int32Array(this.arrayBuffer);
				e = n[0], t = n[1], r = n[2], this.d = t + 2 * r;
				for (let e = 0; e < this.d * this.d; e++) {
					let t = n[3 + e], r = n[3 + e + 1];
					i.push(t === r ? null : n.subarray(t, r));
				}
				let a = n[3 + i.length], s = n[3 + i.length + 1];
				this.keys = n.subarray(a, s), this.bboxes = n.subarray(s), this.insert = this._insertReadonly;
			} else {
				this.d = t + 2 * r;
				for (let e = 0; e < this.d * this.d; e++) i.push([]);
				this.keys = [], this.bboxes = [];
			}
			this.n = t, this.extent = e, this.padding = r, this.scale = t / e, this.uid = 0;
			let n = r / t * e;
			this.min = -n, this.max = e + n;
		}
		insert(e, t, r, i, n) {
			this._forEachCell(t, r, i, n, this._insertCell, this.uid++, void 0, void 0), this.keys.push(e), this.bboxes.push(t), this.bboxes.push(r), this.bboxes.push(i), this.bboxes.push(n);
		}
		_insertReadonly() {
			throw Error("Cannot insert into a GridIndex created from an ArrayBuffer.");
		}
		_insertCell(e, t, r, i, n, a) {
			this.cells[n].push(a);
		}
		query(e, t, r, i, n) {
			let a = this.min, s = this.max;
			if (e <= a && t <= a && s <= r && s <= i && !n) return [...this.keys];
			{
				let a = [];
				return this._forEachCell(e, t, r, i, this._queryCell, a, {}, n), a;
			}
		}
		_queryCell(e, t, r, i, n, a, s, o) {
			let l = this.cells[n];
			if (null !== l) {
				let n = this.keys, u = this.bboxes;
				for (let h of l) if (void 0 === s[h]) {
					let l = 4 * h;
					(o ? o(u[l + 0], u[l + 1], u[l + 2], u[l + 3]) : e <= u[l + 2] && t <= u[l + 3] && r >= u[l + 0] && i >= u[l + 1]) ? (s[h] = !0, a.push(n[h])) : s[h] = !1;
				}
			}
		}
		_forEachCell(e, t, r, i, n, a, s, o) {
			let l = this._convertToCellCoord(e), u = this._convertToCellCoord(t), h = this._convertToCellCoord(r), c = this._convertToCellCoord(i);
			for (let p = l; p <= h; p++) for (let l = u; l <= c; l++) {
				let u = this.d * l + p;
				if ((!o || o(this._convertFromCellCoord(p), this._convertFromCellCoord(l), this._convertFromCellCoord(p + 1), this._convertFromCellCoord(l + 1))) && n.call(this, e, t, r, i, u, a, s, o)) return;
			}
		}
		_convertFromCellCoord(e) {
			return (e - this.padding) / this.scale;
		}
		_convertToCellCoord(e) {
			return Math.max(0, Math.min(this.d - 1, Math.floor(e * this.scale) + this.padding));
		}
		toArrayBuffer() {
			if (this.arrayBuffer) return this.arrayBuffer;
			let e = this.cells, t = 3 + this.cells.length + 1 + 1, r = 0;
			for (let a of this.cells) r += a.length;
			let i = new Int32Array(t + r + this.keys.length + this.bboxes.length);
			i[0] = this.extent, i[1] = this.n, i[2] = this.padding;
			let n = t;
			for (let a = 0; a < e.length; a++) {
				let t = e[a];
				i[3 + a] = n, i.set(t, n), n += t.length;
			}
			return i[3 + e.length] = n, i.set(this.keys, n), n += this.keys.length, i[3 + e.length + 1] = n, i.set(this.bboxes, n), n += this.bboxes.length, i.buffer;
		}
		static serialize(e, t) {
			let r = e.toArrayBuffer();
			return t && t.push(r), { buffer: r };
		}
		static deserialize(t) {
			return new e(t.buffer);
		}
	}, R = {
		$version: 8,
		$root: {
			version: {
				required: !0,
				type: "enum",
				values: [8]
			},
			name: { type: "string" },
			metadata: { type: "*" },
			center: {
				type: "array",
				value: "number",
				length: 2
			},
			centerAltitude: { type: "number" },
			zoom: { type: "number" },
			bearing: {
				type: "number",
				default: 0,
				period: 360,
				units: "degrees"
			},
			pitch: {
				type: "number",
				default: 0,
				units: "degrees"
			},
			roll: {
				type: "number",
				default: 0,
				units: "degrees"
			},
			state: {
				type: "state",
				default: {}
			},
			light: { type: "light" },
			sky: { type: "sky" },
			projection: { type: "projection" },
			terrain: { type: "terrain" },
			sources: {
				required: !0,
				type: "sources"
			},
			sprite: { type: "sprite" },
			glyphs: { type: "string" },
			"font-faces": { type: "fontFaces" },
			transition: { type: "transition" },
			layers: {
				required: !0,
				type: "array",
				value: "layer"
			}
		},
		sources: { "*": { type: "source" } },
		source: [
			"source_vector",
			"source_raster",
			"source_raster_dem",
			"source_geojson",
			"source_video",
			"source_image"
		],
		source_vector: {
			type: {
				required: !0,
				type: "enum",
				values: { vector: {} }
			},
			url: { type: "string" },
			tiles: {
				type: "array",
				value: "string"
			},
			bounds: {
				type: "array",
				value: "number",
				length: 4,
				default: [
					-180,
					-85.051129,
					180,
					85.051129
				]
			},
			scheme: {
				type: "enum",
				values: {
					xyz: {},
					tms: {}
				},
				default: "xyz"
			},
			minzoom: {
				type: "number",
				default: 0
			},
			maxzoom: {
				type: "number",
				default: 22
			},
			attribution: { type: "string" },
			promoteId: { type: "promoteId" },
			volatile: {
				type: "boolean",
				default: !1
			},
			encoding: {
				type: "enum",
				values: {
					mvt: {},
					mlt: {}
				},
				default: "mvt"
			},
			"*": { type: "*" }
		},
		source_raster: {
			type: {
				required: !0,
				type: "enum",
				values: { raster: {} }
			},
			url: { type: "string" },
			tiles: {
				type: "array",
				value: "string"
			},
			bounds: {
				type: "array",
				value: "number",
				length: 4,
				default: [
					-180,
					-85.051129,
					180,
					85.051129
				]
			},
			minzoom: {
				type: "number",
				default: 0
			},
			maxzoom: {
				type: "number",
				default: 22
			},
			tileSize: {
				type: "number",
				default: 512,
				units: "pixels"
			},
			scheme: {
				type: "enum",
				values: {
					xyz: {},
					tms: {}
				},
				default: "xyz"
			},
			attribution: { type: "string" },
			volatile: {
				type: "boolean",
				default: !1
			},
			"*": { type: "*" }
		},
		source_raster_dem: {
			type: {
				required: !0,
				type: "enum",
				values: { "raster-dem": {} }
			},
			url: { type: "string" },
			tiles: {
				type: "array",
				value: "string"
			},
			bounds: {
				type: "array",
				value: "number",
				length: 4,
				default: [
					-180,
					-85.051129,
					180,
					85.051129
				]
			},
			minzoom: {
				type: "number",
				default: 0
			},
			maxzoom: {
				type: "number",
				default: 22
			},
			tileSize: {
				type: "number",
				default: 512,
				units: "pixels"
			},
			attribution: { type: "string" },
			encoding: {
				type: "enum",
				values: {
					terrarium: {},
					mapbox: {},
					custom: {}
				},
				default: "mapbox"
			},
			redFactor: {
				type: "number",
				default: 1
			},
			blueFactor: {
				type: "number",
				default: 1
			},
			greenFactor: {
				type: "number",
				default: 1
			},
			baseShift: {
				type: "number",
				default: 0
			},
			volatile: {
				type: "boolean",
				default: !1
			},
			"*": { type: "*" }
		},
		source_geojson: {
			type: {
				required: !0,
				type: "enum",
				values: { geojson: {} }
			},
			data: {
				required: !0,
				type: "*"
			},
			maxzoom: {
				type: "number",
				default: 18
			},
			attribution: { type: "string" },
			buffer: {
				type: "number",
				default: 128,
				maximum: 512,
				minimum: 0
			},
			filter: { type: "filter" },
			tolerance: {
				type: "number",
				default: .375
			},
			cluster: {
				type: "boolean",
				default: !1
			},
			clusterRadius: {
				type: "number",
				default: 50,
				minimum: 0
			},
			clusterMaxZoom: { type: "number" },
			clusterMinPoints: { type: "number" },
			clusterProperties: { type: "*" },
			lineMetrics: {
				type: "boolean",
				default: !1
			},
			generateId: {
				type: "boolean",
				default: !1
			},
			promoteId: { type: "promoteId" }
		},
		source_video: {
			type: {
				required: !0,
				type: "enum",
				values: { video: {} }
			},
			urls: {
				required: !0,
				type: "array",
				value: "string"
			},
			coordinates: {
				required: !0,
				type: "array",
				length: 4,
				value: {
					type: "array",
					length: 2,
					value: "number"
				}
			}
		},
		source_image: {
			type: {
				required: !0,
				type: "enum",
				values: { image: {} }
			},
			url: { type: "string" },
			coordinates: {
				required: !0,
				type: "array",
				length: 4,
				value: {
					type: "array",
					length: 2,
					value: "number"
				}
			}
		},
		layer: {
			id: {
				type: "string",
				required: !0
			},
			type: {
				type: "enum",
				values: {
					fill: {},
					line: {},
					symbol: {},
					circle: {},
					heatmap: {},
					"fill-extrusion": {},
					raster: {},
					hillshade: {},
					"color-relief": {},
					background: {}
				},
				required: !0
			},
			metadata: { type: "*" },
			source: { type: "string" },
			"source-layer": { type: "string" },
			minzoom: {
				type: "number",
				minimum: 0,
				maximum: 24
			},
			maxzoom: {
				type: "number",
				minimum: 0,
				maximum: 24
			},
			filter: { type: "filter" },
			layout: { type: "layout" },
			paint: { type: "paint" }
		},
		layout: [
			"layout_fill",
			"layout_line",
			"layout_circle",
			"layout_heatmap",
			"layout_fill-extrusion",
			"layout_symbol",
			"layout_raster",
			"layout_hillshade",
			"layout_color-relief",
			"layout_background"
		],
		layout_background: { visibility: {
			type: "enum",
			values: {
				visible: {},
				none: {}
			},
			default: "visible",
			expression: {
				interpolated: !1,
				parameters: ["global-state"]
			},
			"property-type": "data-constant"
		} },
		layout_fill: {
			"fill-sort-key": {
				type: "number",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				expression: {
					interpolated: !1,
					parameters: ["global-state"]
				},
				"property-type": "data-constant"
			}
		},
		layout_circle: {
			"circle-sort-key": {
				type: "number",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				expression: {
					interpolated: !1,
					parameters: ["global-state"]
				},
				"property-type": "data-constant"
			}
		},
		layout_heatmap: { visibility: {
			type: "enum",
			values: {
				visible: {},
				none: {}
			},
			default: "visible",
			expression: {
				interpolated: !1,
				parameters: ["global-state"]
			},
			"property-type": "data-constant"
		} },
		"layout_fill-extrusion": {
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				expression: {
					interpolated: !1,
					parameters: ["global-state"]
				},
				"property-type": "data-constant"
			},
			"fill-extrusion-rounded-corner-distance": {
				type: "number",
				default: 0,
				minimum: 0,
				units: "meters",
				"property-type": "constant"
			}
		},
		layout_line: {
			"line-cap": {
				type: "enum",
				values: {
					butt: {},
					round: {},
					square: {}
				},
				default: "butt",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"line-join": {
				type: "enum",
				values: {
					bevel: {},
					round: {},
					miter: {}
				},
				default: "miter",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"line-miter-limit": {
				type: "number",
				default: 2,
				requires: [{ "line-join": "miter" }],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"line-round-limit": {
				type: "number",
				default: 1.05,
				requires: [{ "line-join": "round" }],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"line-sort-key": {
				type: "number",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				expression: {
					interpolated: !1,
					parameters: ["global-state"]
				},
				"property-type": "data-constant"
			}
		},
		layout_symbol: {
			"symbol-placement": {
				type: "enum",
				values: {
					point: {},
					line: {},
					"line-center": {}
				},
				default: "point",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"symbol-spacing": {
				type: "number",
				default: 250,
				minimum: 1,
				units: "pixels",
				requires: [{ "symbol-placement": "line" }],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"symbol-avoid-edges": {
				type: "boolean",
				default: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"symbol-sort-key": {
				type: "number",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"symbol-z-order": {
				type: "enum",
				values: {
					auto: {},
					"viewport-y": {},
					source: {}
				},
				default: "auto",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-allow-overlap": {
				type: "boolean",
				default: !1,
				requires: ["icon-image", { "!": "icon-overlap" }],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-overlap": {
				type: "enum",
				values: {
					never: {},
					always: {},
					cooperative: {}
				},
				requires: ["icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-ignore-placement": {
				type: "boolean",
				default: !1,
				requires: ["icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-optional": {
				type: "boolean",
				default: !1,
				requires: ["icon-image", "text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-rotation-alignment": {
				type: "enum",
				values: {
					map: {},
					viewport: {},
					auto: {}
				},
				default: "auto",
				requires: ["icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-size": {
				type: "number",
				default: 1,
				minimum: 0,
				units: "factor of the original icon size",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-text-fit": {
				type: "enum",
				values: {
					none: {},
					width: {},
					height: {},
					both: {}
				},
				default: "none",
				requires: ["icon-image", "text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-text-fit-padding": {
				type: "array",
				value: "number",
				length: 4,
				default: [
					0,
					0,
					0,
					0
				],
				units: "pixels",
				requires: [
					"icon-image",
					"text-field",
					{ "icon-text-fit": [
						"both",
						"width",
						"height"
					] }
				],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-image": {
				type: "resolvedImage",
				tokens: !0,
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-rotate": {
				type: "number",
				default: 0,
				period: 360,
				units: "degrees",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-padding": {
				type: "padding",
				default: [2],
				units: "pixels",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-keep-upright": {
				type: "boolean",
				default: !1,
				requires: [
					"icon-image",
					{ "icon-rotation-alignment": "map" },
					{ "symbol-placement": ["line", "line-center"] }
				],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-offset": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-anchor": {
				type: "enum",
				values: {
					center: {},
					left: {},
					right: {},
					top: {},
					bottom: {},
					"top-left": {},
					"top-right": {},
					"bottom-left": {},
					"bottom-right": {}
				},
				default: "center",
				requires: ["icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-pitch-alignment": {
				type: "enum",
				values: {
					map: {},
					viewport: {},
					auto: {}
				},
				default: "auto",
				requires: ["icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-pitch-alignment": {
				type: "enum",
				values: {
					map: {},
					viewport: {},
					auto: {}
				},
				default: "auto",
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-rotation-alignment": {
				type: "enum",
				values: {
					map: {},
					viewport: {},
					"viewport-glyph": {},
					auto: {}
				},
				default: "auto",
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-field": {
				type: "formatted",
				default: "",
				tokens: !0,
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-font": {
				type: "array",
				value: "string",
				default: ["Open Sans Regular", "Arial Unicode MS Regular"],
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-size": {
				type: "number",
				default: 16,
				minimum: 0,
				units: "pixels",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-max-width": {
				type: "number",
				default: 10,
				minimum: 0,
				units: "ems",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-line-height": {
				type: "number",
				default: 1.2,
				units: "ems",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-letter-spacing": {
				type: "number",
				default: 0,
				units: "ems",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-justify": {
				type: "enum",
				values: {
					auto: {},
					left: {},
					center: {},
					right: {}
				},
				default: "center",
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-radial-offset": {
				type: "number",
				units: "ems",
				default: 0,
				requires: ["text-field"],
				"property-type": "data-driven",
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				}
			},
			"text-variable-anchor": {
				type: "array",
				value: "enum",
				values: {
					center: {},
					left: {},
					right: {},
					top: {},
					bottom: {},
					"top-left": {},
					"top-right": {},
					"bottom-left": {},
					"bottom-right": {}
				},
				requires: ["text-field", { "symbol-placement": ["point"] }],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-variable-anchor-offset": {
				type: "variableAnchorOffsetCollection",
				requires: ["text-field", { "symbol-placement": ["point"] }],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-anchor": {
				type: "enum",
				values: {
					center: {},
					left: {},
					right: {},
					top: {},
					bottom: {},
					"top-left": {},
					"top-right": {},
					"bottom-left": {},
					"bottom-right": {}
				},
				default: "center",
				requires: ["text-field", { "!": "text-variable-anchor" }],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-max-angle": {
				type: "number",
				default: 45,
				units: "degrees",
				requires: ["text-field", { "symbol-placement": ["line", "line-center"] }],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-writing-mode": {
				type: "array",
				value: "enum",
				values: {
					horizontal: {},
					vertical: {}
				},
				requires: ["text-field", { "symbol-placement": ["point"] }],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-rotate": {
				type: "number",
				default: 0,
				period: 360,
				units: "degrees",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-padding": {
				type: "number",
				default: 2,
				minimum: 0,
				units: "pixels",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-keep-upright": {
				type: "boolean",
				default: !0,
				requires: [
					"text-field",
					{ "text-rotation-alignment": "map" },
					{ "symbol-placement": ["line", "line-center"] }
				],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-transform": {
				type: "enum",
				values: {
					none: {},
					uppercase: {},
					lowercase: {}
				},
				default: "none",
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-offset": {
				type: "array",
				value: "number",
				units: "ems",
				length: 2,
				default: [0, 0],
				requires: ["text-field", { "!": "text-radial-offset" }],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-allow-overlap": {
				type: "boolean",
				default: !1,
				requires: ["text-field", { "!": "text-overlap" }],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-overlap": {
				type: "enum",
				values: {
					never: {},
					always: {},
					cooperative: {}
				},
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-ignore-placement": {
				type: "boolean",
				default: !1,
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-optional": {
				type: "boolean",
				default: !1,
				requires: ["text-field", "icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"symbol-height-offset": {
				type: "number",
				default: 0,
				units: "meters",
				requires: [{ "symbol-placement": ["point"] }],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"symbol-height-anchor": {
				type: "enum",
				values: {
					ground: {},
					absolute: {}
				},
				default: "ground",
				requires: ["symbol-height-offset"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				expression: {
					interpolated: !1,
					parameters: ["global-state"]
				},
				"property-type": "data-constant"
			}
		},
		layout_raster: { visibility: {
			type: "enum",
			values: {
				visible: {},
				none: {}
			},
			default: "visible",
			expression: {
				interpolated: !1,
				parameters: ["global-state"]
			},
			"property-type": "data-constant"
		} },
		layout_hillshade: { visibility: {
			type: "enum",
			values: {
				visible: {},
				none: {}
			},
			default: "visible",
			expression: {
				interpolated: !1,
				parameters: ["global-state"]
			},
			"property-type": "data-constant"
		} },
		"layout_color-relief": { visibility: {
			type: "enum",
			values: {
				visible: {},
				none: {}
			},
			default: "visible",
			expression: {
				interpolated: !1,
				parameters: ["global-state"]
			},
			"property-type": "data-constant"
		} },
		filter: {
			type: "boolean",
			expression: {
				interpolated: !1,
				parameters: ["zoom", "feature"]
			},
			"property-type": "data-driven"
		},
		filter_operator: {
			type: "enum",
			values: {
				"==": {},
				"!=": {},
				">": {},
				">=": {},
				"<": {},
				"<=": {},
				in: {},
				"!in": {},
				all: {},
				any: {},
				none: {},
				has: {},
				"!has": {}
			}
		},
		geometry_type: {
			type: "enum",
			values: {
				Point: {},
				LineString: {},
				Polygon: {}
			}
		},
		function: {
			expression: { type: "expression" },
			stops: {
				type: "array",
				value: "function_stop"
			},
			base: {
				type: "number",
				default: 1,
				minimum: 0
			},
			property: {
				type: "string",
				default: "$zoom"
			},
			type: {
				type: "enum",
				values: {
					identity: {},
					exponential: {},
					interval: {},
					categorical: {}
				},
				default: "exponential"
			},
			colorSpace: {
				type: "enum",
				values: {
					rgb: {},
					lab: {},
					hcl: {}
				},
				default: "rgb"
			},
			default: {
				type: "*",
				required: !1
			}
		},
		function_stop: {
			type: "array",
			minimum: 0,
			maximum: 24,
			value: ["number", "color"],
			length: 2
		},
		expression: {
			type: "array",
			value: "expression_name",
			minimum: 1
		},
		light: {
			anchor: {
				type: "enum",
				default: "viewport",
				values: {
					map: {},
					viewport: {}
				},
				"property-type": "data-constant",
				transition: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				}
			},
			position: {
				type: "array",
				default: [
					1.15,
					210,
					30
				],
				length: 3,
				value: "number",
				"property-type": "data-constant",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				}
			},
			color: {
				type: "color",
				"property-type": "data-constant",
				default: "#ffffff",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			intensity: {
				type: "number",
				"property-type": "data-constant",
				default: .5,
				minimum: 0,
				maximum: 1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			}
		},
		sky: {
			"sky-color": {
				type: "color",
				"property-type": "data-constant",
				default: "#88C6FC",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"horizon-color": {
				type: "color",
				"property-type": "data-constant",
				default: "#ffffff",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"fog-color": {
				type: "color",
				"property-type": "data-constant",
				default: "#ffffff",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"fog-ground-blend": {
				type: "number",
				"property-type": "data-constant",
				default: .5,
				minimum: 0,
				maximum: 1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"horizon-fog-blend": {
				type: "number",
				"property-type": "data-constant",
				default: .8,
				minimum: 0,
				maximum: 1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"sky-horizon-blend": {
				type: "number",
				"property-type": "data-constant",
				default: .8,
				minimum: 0,
				maximum: 1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"atmosphere-blend": {
				type: "number",
				"property-type": "data-constant",
				default: .8,
				minimum: 0,
				maximum: 1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			}
		},
		terrain: {
			source: {
				type: "string",
				required: !0
			},
			exaggeration: {
				type: "number",
				minimum: 0,
				default: 1
			}
		},
		projection: { type: {
			type: "projectionDefinition",
			default: "mercator",
			"property-type": "data-constant",
			transition: !1,
			expression: {
				interpolated: !0,
				parameters: ["zoom"]
			}
		} },
		paint: [
			"paint_fill",
			"paint_line",
			"paint_circle",
			"paint_heatmap",
			"paint_fill-extrusion",
			"paint_symbol",
			"paint_raster",
			"paint_hillshade",
			"paint_color-relief",
			"paint_background"
		],
		paint_fill: {
			"fill-antialias": {
				type: "boolean",
				default: !0,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"fill-layer-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "global-state"]
				},
				"property-type": "data-constant"
			},
			"fill-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"fill-outline-color": {
				type: "color",
				transition: !0,
				requires: [{ "!": "fill-pattern" }, { "fill-antialias": !0 }],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"fill-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["fill-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-pattern": {
				type: "resolvedImage",
				transition: !0,
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "cross-faded-data-driven"
			}
		},
		"paint_fill-extrusion": {
			"fill-extrusion-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-extrusion-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				requires: [{ "!": "fill-extrusion-pattern" }],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"fill-extrusion-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-extrusion-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["fill-extrusion-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-extrusion-pattern": {
				type: "resolvedImage",
				transition: !0,
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "cross-faded-data-driven"
			},
			"fill-extrusion-height": {
				type: "number",
				default: 0,
				units: "meters",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"fill-extrusion-base": {
				type: "number",
				default: 0,
				units: "meters",
				transition: !0,
				requires: ["fill-extrusion-height"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"fill-extrusion-vertical-gradient": {
				type: "boolean",
				default: !0,
				transition: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		paint_line: {
			"line-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"line-layer-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "global-state"]
				},
				"property-type": "data-constant"
			},
			"line-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				requires: [{ "!": "line-pattern" }],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"line-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"line-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["line-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"line-width": {
				type: "number",
				default: 1,
				minimum: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"line-gap-width": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"line-offset": {
				type: "number",
				default: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"line-blur": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"line-dasharray": {
				type: "array",
				value: "number",
				minimum: 0,
				transition: !0,
				units: "line widths",
				requires: [{ "!": "line-pattern" }],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "cross-faded-data-driven"
			},
			"line-pattern": {
				type: "resolvedImage",
				transition: !0,
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "cross-faded-data-driven"
			},
			"line-gradient": {
				type: "color",
				transition: !1,
				requires: [
					{ "!": "line-dasharray" },
					{ "!": "line-pattern" },
					{
						source: "geojson",
						has: { lineMetrics: !0 }
					}
				],
				expression: {
					interpolated: !0,
					parameters: ["line-progress"]
				},
				"property-type": "color-ramp"
			}
		},
		paint_circle: {
			"circle-radius": {
				type: "number",
				default: 5,
				minimum: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"circle-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"circle-blur": {
				type: "number",
				default: 0,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"circle-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"circle-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"circle-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["circle-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"circle-pitch-scale": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"circle-pitch-alignment": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "viewport",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"circle-stroke-width": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"circle-stroke-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"circle-stroke-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			}
		},
		paint_heatmap: {
			"heatmap-radius": {
				type: "number",
				default: 30,
				minimum: 1,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"heatmap-weight": {
				type: "number",
				default: 1,
				minimum: 0,
				transition: !1,
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"heatmap-intensity": {
				type: "number",
				default: 1,
				minimum: 0,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"heatmap-color": {
				type: "color",
				default: [
					"interpolate",
					["linear"],
					["heatmap-density"],
					0,
					"rgba(0, 0, 255, 0)",
					.1,
					"royalblue",
					.3,
					"cyan",
					.5,
					"lime",
					.7,
					"yellow",
					1,
					"red"
				],
				transition: !1,
				expression: {
					interpolated: !0,
					parameters: ["heatmap-density"]
				},
				"property-type": "color-ramp"
			},
			"heatmap-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		paint_symbol: {
			"icon-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"icon-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"icon-halo-color": {
				type: "color",
				default: "rgba(0, 0, 0, 0)",
				transition: !0,
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"icon-halo-width": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"icon-halo-blur": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"icon-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["icon-image", "icon-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"text-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				overridable: !0,
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"text-halo-color": {
				type: "color",
				default: "rgba(0, 0, 0, 0)",
				transition: !0,
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"text-halo-width": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"text-halo-blur": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: [
						"zoom",
						"feature",
						"feature-state"
					]
				},
				"property-type": "data-driven"
			},
			"text-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["text-field", "text-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		paint_raster: {
			"raster-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-hue-rotate": {
				type: "number",
				default: 0,
				period: 360,
				transition: !0,
				units: "degrees",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-brightness-min": {
				type: "number",
				default: 0,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-brightness-max": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-saturation": {
				type: "number",
				default: 0,
				minimum: -1,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-contrast": {
				type: "number",
				default: 0,
				minimum: -1,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			resampling: {
				type: "enum",
				values: {
					linear: {},
					nearest: {}
				},
				default: "linear",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-resampling": {
				type: "enum",
				values: {
					linear: {},
					nearest: {}
				},
				default: "linear",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-fade-duration": {
				type: "number",
				default: 300,
				minimum: 0,
				transition: !1,
				units: "milliseconds",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		paint_hillshade: {
			"hillshade-illumination-direction": {
				type: "numberArray",
				default: 335,
				minimum: 0,
				maximum: 359,
				transition: !1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-illumination-altitude": {
				type: "numberArray",
				default: 45,
				minimum: 0,
				maximum: 90,
				transition: !1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-illumination-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "viewport",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-exaggeration": {
				type: "number",
				default: .5,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-shadow-color": {
				type: "colorArray",
				default: "#000000",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-highlight-color": {
				type: "colorArray",
				default: "#FFFFFF",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-accent-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-method": {
				type: "enum",
				values: {
					standard: {},
					basic: {},
					combined: {},
					igor: {},
					multidirectional: {}
				},
				default: "standard",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			resampling: {
				type: "enum",
				values: {
					linear: {},
					nearest: {}
				},
				default: "linear",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		"paint_color-relief": {
			"color-relief-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"color-relief-color": {
				type: "color",
				transition: !1,
				expression: {
					interpolated: !0,
					parameters: ["elevation"]
				},
				"property-type": "color-ramp"
			},
			resampling: {
				type: "enum",
				values: {
					linear: {},
					nearest: {}
				},
				default: "linear",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		paint_background: {
			"background-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				requires: [{ "!": "background-pattern" }],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"background-pattern": {
				type: "resolvedImage",
				transition: !0,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "cross-faded"
			},
			"background-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		transition: {
			duration: {
				type: "number",
				default: 300,
				minimum: 0,
				units: "milliseconds"
			},
			delay: {
				type: "number",
				default: 0,
				minimum: 0,
				units: "milliseconds"
			}
		},
		"property-type": {
			"data-driven": { type: "property-type" },
			"cross-faded": { type: "property-type" },
			"cross-faded-data-driven": { type: "property-type" },
			"color-ramp": { type: "property-type" },
			"data-constant": { type: "property-type" },
			constant: { type: "property-type" }
		},
		promoteId: { "*": { type: "string" } },
		interpolation: {
			type: "array",
			value: "interpolation_name",
			minimum: 1
		},
		interpolation_name: {
			type: "enum",
			values: {
				linear: { syntax: {
					overloads: [{
						parameters: [],
						"output-type": "interpolation"
					}],
					parameters: []
				} },
				exponential: { syntax: {
					overloads: [{
						parameters: ["base"],
						"output-type": "interpolation"
					}],
					parameters: [{
						name: "base",
						type: "number literal"
					}]
				} },
				"cubic-bezier": { syntax: {
					overloads: [{
						parameters: [
							"x1",
							"y1",
							"x2",
							"y2"
						],
						"output-type": "interpolation"
					}],
					parameters: [
						{
							name: "x1",
							type: "number literal"
						},
						{
							name: "y1",
							type: "number literal"
						},
						{
							name: "x2",
							type: "number literal"
						},
						{
							name: "y2",
							type: "number literal"
						}
					]
				} }
			}
		}
	};
	const $ = R, N = [
		"type",
		"source",
		"source-layer",
		"minzoom",
		"maxzoom",
		"filter",
		"layout"
	];
	var U = class {
		constructor(e, t, r, i, n = "error") {
			this.message = (e ? `${e}: ` : "") + r, i && (this.identifier = i), this.severity = n, null != t && t.__line__ && (this.line = t.__line__);
		}
	};
	const j = { kind: "null" }, q = { kind: "number" }, G = { kind: "string" }, X = { kind: "boolean" }, Y = { kind: "color" }, W = { kind: "projectionDefinition" }, Z = { kind: "object" }, H = { kind: "value" }, K = { kind: "collator" }, J = { kind: "formatted" }, Q = { kind: "padding" }, ee = { kind: "colorArray" }, te = { kind: "numberArray" }, re = { kind: "resolvedImage" }, ie = { kind: "variableAnchorOffsetCollection" };
	function ne(e, t) {
		return {
			kind: "array",
			itemType: e,
			N: t
		};
	}
	function ae(e) {
		if ("array" === e.kind) {
			let t = ae(e.itemType);
			return "number" == typeof e.N ? `array<${t}, ${e.N}>` : "value" === e.itemType.kind ? "array" : `array<${t}>`;
		}
		return e.kind;
	}
	const se = [
		j,
		q,
		G,
		X,
		Y,
		W,
		J,
		Z,
		ne(H),
		Q,
		te,
		ee,
		re,
		ie
	];
	function oe(e, t) {
		if ("error" === t.kind) return null;
		if ("array" === e.kind) {
			if ("array" === t.kind && (0 === t.N && "value" === t.itemType.kind || !oe(e.itemType, t.itemType)) && ("number" != typeof e.N || e.N === t.N)) return null;
		} else {
			if (e.kind === t.kind) return null;
			if ("value" === e.kind) {
				for (let e of se) if (!oe(e, t)) return null;
			}
		}
		return `Expected ${ae(e)} but found ${ae(t)} instead.`;
	}
	function le(e, t) {
		return t.some((t) => t.kind === e.kind);
	}
	function ue(e, t) {
		return t.some((t) => "null" === t ? null === e : "array" === t ? Array.isArray(e) : "object" === t ? e && !Array.isArray(e) && "object" == typeof e : t === typeof e);
	}
	function he(e, t) {
		return "array" === e.kind && "array" === t.kind ? e.itemType.kind === t.itemType.kind && "number" == typeof e.N : e.kind === t.kind;
	}
	const ce = .96422, pe = .82521, fe = 4 / 29, de = 6 / 29, ye = 3 * de * de, me = Math.PI / 180, ge = 180 / Math.PI;
	function xe(e) {
		return (e %= 360) < 0 && (e += 360), e;
	}
	function ve([e, t, r, i]) {
		let n, a, s = we((.2225045 * (e = be(e)) + .7168786 * (t = be(t)) + .0606169 * (r = be(r))) / 1);
		e === t && t === r ? n = a = s : (n = we((.4360747 * e + .3850649 * t + .1430804 * r) / ce), a = we((.0139322 * e + .0971045 * t + .7141733 * r) / pe));
		let o = 116 * s - 16;
		return [
			o < 0 ? 0 : o,
			500 * (n - s),
			200 * (s - a),
			i
		];
	}
	function be(e) {
		return e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
	}
	function we(e) {
		return e > .008856451679035631 ? e ** (1 / 3) : e / ye + fe;
	}
	function _e([e, t, r, i]) {
		let n = (e + 16) / 116, a = isNaN(t) ? n : n + t / 500, s = isNaN(r) ? n : n - r / 200;
		return n = 1 * Se(n), a = ce * Se(a), s = pe * Se(s), [
			De(3.1338561 * a - 1.6168667 * n - .4906146 * s),
			De(-.9787684 * a + 1.9161415 * n + .033454 * s),
			De(.0719453 * a - .2289914 * n + 1.4052427 * s),
			i
		];
	}
	function De(e) {
		return (e = e <= .00304 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055) < 0 ? 0 : e > 1 ? 1 : e;
	}
	function Se(e) {
		return e > de ? e * e * e : ye * (e - fe);
	}
	const Ae = Object.hasOwn || function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	};
	function Ee(e, t) {
		return Ae(e, t) ? e[t] : void 0;
	}
	function Fe(e) {
		return parseInt(e.padEnd(2, e), 16) / 255;
	}
	function ke(e, t) {
		return Ie(t ? e / 100 : e, 0, 1);
	}
	function Ie(e, t, r) {
		return Math.min(Math.max(t, e), r);
	}
	function Te(e) {
		return !e.some(Number.isNaN);
	}
	const Ce = {
		aliceblue: [
			240,
			248,
			255
		],
		antiquewhite: [
			250,
			235,
			215
		],
		aqua: [
			0,
			255,
			255
		],
		aquamarine: [
			127,
			255,
			212
		],
		azure: [
			240,
			255,
			255
		],
		beige: [
			245,
			245,
			220
		],
		bisque: [
			255,
			228,
			196
		],
		black: [
			0,
			0,
			0
		],
		blanchedalmond: [
			255,
			235,
			205
		],
		blue: [
			0,
			0,
			255
		],
		blueviolet: [
			138,
			43,
			226
		],
		brown: [
			165,
			42,
			42
		],
		burlywood: [
			222,
			184,
			135
		],
		cadetblue: [
			95,
			158,
			160
		],
		chartreuse: [
			127,
			255,
			0
		],
		chocolate: [
			210,
			105,
			30
		],
		coral: [
			255,
			127,
			80
		],
		cornflowerblue: [
			100,
			149,
			237
		],
		cornsilk: [
			255,
			248,
			220
		],
		crimson: [
			220,
			20,
			60
		],
		cyan: [
			0,
			255,
			255
		],
		darkblue: [
			0,
			0,
			139
		],
		darkcyan: [
			0,
			139,
			139
		],
		darkgoldenrod: [
			184,
			134,
			11
		],
		darkgray: [
			169,
			169,
			169
		],
		darkgreen: [
			0,
			100,
			0
		],
		darkgrey: [
			169,
			169,
			169
		],
		darkkhaki: [
			189,
			183,
			107
		],
		darkmagenta: [
			139,
			0,
			139
		],
		darkolivegreen: [
			85,
			107,
			47
		],
		darkorange: [
			255,
			140,
			0
		],
		darkorchid: [
			153,
			50,
			204
		],
		darkred: [
			139,
			0,
			0
		],
		darksalmon: [
			233,
			150,
			122
		],
		darkseagreen: [
			143,
			188,
			143
		],
		darkslateblue: [
			72,
			61,
			139
		],
		darkslategray: [
			47,
			79,
			79
		],
		darkslategrey: [
			47,
			79,
			79
		],
		darkturquoise: [
			0,
			206,
			209
		],
		darkviolet: [
			148,
			0,
			211
		],
		deeppink: [
			255,
			20,
			147
		],
		deepskyblue: [
			0,
			191,
			255
		],
		dimgray: [
			105,
			105,
			105
		],
		dimgrey: [
			105,
			105,
			105
		],
		dodgerblue: [
			30,
			144,
			255
		],
		firebrick: [
			178,
			34,
			34
		],
		floralwhite: [
			255,
			250,
			240
		],
		forestgreen: [
			34,
			139,
			34
		],
		fuchsia: [
			255,
			0,
			255
		],
		gainsboro: [
			220,
			220,
			220
		],
		ghostwhite: [
			248,
			248,
			255
		],
		gold: [
			255,
			215,
			0
		],
		goldenrod: [
			218,
			165,
			32
		],
		gray: [
			128,
			128,
			128
		],
		green: [
			0,
			128,
			0
		],
		greenyellow: [
			173,
			255,
			47
		],
		grey: [
			128,
			128,
			128
		],
		honeydew: [
			240,
			255,
			240
		],
		hotpink: [
			255,
			105,
			180
		],
		indianred: [
			205,
			92,
			92
		],
		indigo: [
			75,
			0,
			130
		],
		ivory: [
			255,
			255,
			240
		],
		khaki: [
			240,
			230,
			140
		],
		lavender: [
			230,
			230,
			250
		],
		lavenderblush: [
			255,
			240,
			245
		],
		lawngreen: [
			124,
			252,
			0
		],
		lemonchiffon: [
			255,
			250,
			205
		],
		lightblue: [
			173,
			216,
			230
		],
		lightcoral: [
			240,
			128,
			128
		],
		lightcyan: [
			224,
			255,
			255
		],
		lightgoldenrodyellow: [
			250,
			250,
			210
		],
		lightgray: [
			211,
			211,
			211
		],
		lightgreen: [
			144,
			238,
			144
		],
		lightgrey: [
			211,
			211,
			211
		],
		lightpink: [
			255,
			182,
			193
		],
		lightsalmon: [
			255,
			160,
			122
		],
		lightseagreen: [
			32,
			178,
			170
		],
		lightskyblue: [
			135,
			206,
			250
		],
		lightslategray: [
			119,
			136,
			153
		],
		lightslategrey: [
			119,
			136,
			153
		],
		lightsteelblue: [
			176,
			196,
			222
		],
		lightyellow: [
			255,
			255,
			224
		],
		lime: [
			0,
			255,
			0
		],
		limegreen: [
			50,
			205,
			50
		],
		linen: [
			250,
			240,
			230
		],
		magenta: [
			255,
			0,
			255
		],
		maroon: [
			128,
			0,
			0
		],
		mediumaquamarine: [
			102,
			205,
			170
		],
		mediumblue: [
			0,
			0,
			205
		],
		mediumorchid: [
			186,
			85,
			211
		],
		mediumpurple: [
			147,
			112,
			219
		],
		mediumseagreen: [
			60,
			179,
			113
		],
		mediumslateblue: [
			123,
			104,
			238
		],
		mediumspringgreen: [
			0,
			250,
			154
		],
		mediumturquoise: [
			72,
			209,
			204
		],
		mediumvioletred: [
			199,
			21,
			133
		],
		midnightblue: [
			25,
			25,
			112
		],
		mintcream: [
			245,
			255,
			250
		],
		mistyrose: [
			255,
			228,
			225
		],
		moccasin: [
			255,
			228,
			181
		],
		navajowhite: [
			255,
			222,
			173
		],
		navy: [
			0,
			0,
			128
		],
		oldlace: [
			253,
			245,
			230
		],
		olive: [
			128,
			128,
			0
		],
		olivedrab: [
			107,
			142,
			35
		],
		orange: [
			255,
			165,
			0
		],
		orangered: [
			255,
			69,
			0
		],
		orchid: [
			218,
			112,
			214
		],
		palegoldenrod: [
			238,
			232,
			170
		],
		palegreen: [
			152,
			251,
			152
		],
		paleturquoise: [
			175,
			238,
			238
		],
		palevioletred: [
			219,
			112,
			147
		],
		papayawhip: [
			255,
			239,
			213
		],
		peachpuff: [
			255,
			218,
			185
		],
		peru: [
			205,
			133,
			63
		],
		pink: [
			255,
			192,
			203
		],
		plum: [
			221,
			160,
			221
		],
		powderblue: [
			176,
			224,
			230
		],
		purple: [
			128,
			0,
			128
		],
		rebeccapurple: [
			102,
			51,
			153
		],
		red: [
			255,
			0,
			0
		],
		rosybrown: [
			188,
			143,
			143
		],
		royalblue: [
			65,
			105,
			225
		],
		saddlebrown: [
			139,
			69,
			19
		],
		salmon: [
			250,
			128,
			114
		],
		sandybrown: [
			244,
			164,
			96
		],
		seagreen: [
			46,
			139,
			87
		],
		seashell: [
			255,
			245,
			238
		],
		sienna: [
			160,
			82,
			45
		],
		silver: [
			192,
			192,
			192
		],
		skyblue: [
			135,
			206,
			235
		],
		slateblue: [
			106,
			90,
			205
		],
		slategray: [
			112,
			128,
			144
		],
		slategrey: [
			112,
			128,
			144
		],
		snow: [
			255,
			250,
			250
		],
		springgreen: [
			0,
			255,
			127
		],
		steelblue: [
			70,
			130,
			180
		],
		tan: [
			210,
			180,
			140
		],
		teal: [
			0,
			128,
			128
		],
		thistle: [
			216,
			191,
			216
		],
		tomato: [
			255,
			99,
			71
		],
		turquoise: [
			64,
			224,
			208
		],
		violet: [
			238,
			130,
			238
		],
		wheat: [
			245,
			222,
			179
		],
		white: [
			255,
			255,
			255
		],
		whitesmoke: [
			245,
			245,
			245
		],
		yellow: [
			255,
			255,
			0
		],
		yellowgreen: [
			154,
			205,
			50
		]
	};
	function Be(e, t, r) {
		return e + r * (t - e);
	}
	function Me(e, t, r) {
		return e.map((e, i) => Be(e, t[i], r));
	}
	var Pe = (e = class e {
		constructor(e, t, r, i = 1, n = !0) {
			this.r = e, this.g = t, this.b = r, this.a = i, n || (this.r *= i, this.g *= i, this.b *= i, i || this.overwriteGetter("rgb", [
				e,
				t,
				r,
				i
			]));
		}
		static parse(t) {
			if (t instanceof e) return t;
			if ("string" != typeof t) return;
			let r = function(e) {
				if ("transparent" === (e = e.toLowerCase().trim())) return [
					0,
					0,
					0,
					0
				];
				let t = Ee(Ce, e);
				if (t) {
					let [e, r, i] = t;
					return [
						e / 255,
						r / 255,
						i / 255,
						1
					];
				}
				if (e.startsWith("#") && /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.test(e)) {
					let t = e.length < 6 ? 1 : 2, r = 1;
					return [
						Fe(e.slice(r, r += t)),
						Fe(e.slice(r, r += t)),
						Fe(e.slice(r, r += t)),
						Fe(e.slice(r, r + t) || "ff")
					];
				}
				if (e.startsWith("rgb")) {
					let t = e.match(/^rgba?\(\s*([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/);
					if (t) {
						let [e, r, i, n, a, s, o, l, u, h, c, p] = t, f = [
							n || " ",
							o || " ",
							h
						].join("");
						if ("  " === f || "  /" === f || ",," === f || ",,," === f) {
							let e = [
								i,
								s,
								u
							].join(""), t = "%%%" === e ? 100 : "" === e ? 255 : 0;
							if (t) {
								let e = [
									Ie(+r / t, 0, 1),
									Ie(+a / t, 0, 1),
									Ie(+l / t, 0, 1),
									c ? ke(+c, p) : 1
								];
								if (Te(e)) return e;
							}
						}
						return;
					}
				}
				let r = e.match(/^hsla?\(\s*([\de.+-]+)(?:deg)?(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/);
				if (r) {
					let [e, t, i, n, a, s, o, l, u] = r, h = [
						i || " ",
						a || " ",
						o
					].join("");
					if ("  " === h || "  /" === h || ",," === h || ",,," === h) {
						let e = [
							+t,
							Ie(+n, 0, 100),
							Ie(+s, 0, 100),
							l ? ke(+l, u) : 1
						];
						if (Te(e)) return function([e, t, r, i]) {
							function n(i) {
								let n = (i + e / 30) % 12, a = t * Math.min(r, 1 - r);
								return r - a * Math.max(-1, Math.min(n - 3, 9 - n, 1));
							}
							return e = xe(e), t /= 100, r /= 100, [
								n(0),
								n(8),
								n(4),
								i
							];
						}(e);
					}
				}
			}(t);
			return r ? new e(...r, !1) : void 0;
		}
		get rgb() {
			let { r: e, g: t, b: r, a: i } = this, n = i || Infinity;
			return this.overwriteGetter("rgb", [
				e / n,
				t / n,
				r / n,
				i
			]);
		}
		get hcl() {
			return this.overwriteGetter("hcl", function(e) {
				let [t, r, i, n] = ve(e), a = Math.sqrt(r * r + i * i);
				return [
					Math.round(1e4 * a) ? xe(Math.atan2(i, r) * ge) : NaN,
					a,
					t,
					n
				];
			}(this.rgb));
		}
		get lab() {
			return this.overwriteGetter("lab", ve(this.rgb));
		}
		overwriteGetter(e, t) {
			return Object.defineProperty(this, e, { value: t }), t;
		}
		toString() {
			let [e, t, r, i] = this.rgb;
			return `rgba(${[
				e,
				t,
				r
			].map((e) => Math.round(255 * e)).join(",")},${i})`;
		}
		static interpolate(t, r, i, n = "rgb") {
			switch (n) {
				case "rgb": {
					let [n, a, s, o] = Me(t.rgb, r.rgb, i);
					return new e(n, a, s, o, !1);
				}
				case "hcl": {
					let n, a, [s, o, l, u] = t.hcl, [h, c, p, f] = r.hcl;
					if (isNaN(s) || isNaN(h)) isNaN(s) ? isNaN(h) ? n = NaN : (n = h, (1 === l || 0 === l) && (a = c)) : (n = s, (1 === p || 0 === p) && (a = o));
					else {
						let e = h - s;
						h > s && e > 180 ? e -= 360 : h < s && s - h > 180 && (e += 360), n = s + i * e;
					}
					let [d, y, m, g] = function([e, t, r, i]) {
						return e = isNaN(e) ? 0 : e * me, _e([
							r,
							Math.cos(e) * t,
							Math.sin(e) * t,
							i
						]);
					}([
						n,
						a ?? Be(o, c, i),
						Be(l, p, i),
						Be(u, f, i)
					]);
					return new e(d, y, m, g, !1);
				}
				case "lab": {
					let [n, a, s, o] = _e(Me(t.lab, r.lab, i));
					return new e(n, a, s, o, !1);
				}
			}
		}
	}, e.black = new e(0, 0, 0, 1), e.white = new e(1, 1, 1, 1), e.transparent = new e(0, 0, 0, 0), e.red = new e(1, 0, 0, 1), e);
	const ze = [
		"bottom",
		"center",
		"top"
	];
	var Le = class {
		constructor(e, t, r, i, n, a) {
			this.text = e, this.image = t, this.scale = r, this.fontStack = i, this.textColor = n, this.verticalAlign = a;
		}
	}, Ve = class e {
		constructor(e) {
			this.sections = e;
		}
		static fromString(t) {
			return new e([new Le(t, null, null, null, null, null)]);
		}
		isEmpty() {
			return 0 === this.sections.length || !this.sections.some((e) => 0 !== e.text.length || e.image && 0 !== e.image.name.length);
		}
		static factory(t) {
			return t instanceof e ? t : e.fromString(t);
		}
		toString() {
			return 0 === this.sections.length ? "" : this.sections.map((e) => e.text).join("");
		}
	}, Oe = class e {
		constructor(e) {
			this.values = e.slice();
		}
		static parse(t) {
			if (t instanceof e) return t;
			if ("number" == typeof t) return new e([
				t,
				t,
				t,
				t
			]);
			if (Array.isArray(t) && !(t.length < 1 || t.length > 4)) {
				for (let e of t) if ("number" != typeof e) return;
				switch (t.length) {
					case 1:
						t = [
							t[0],
							t[0],
							t[0],
							t[0]
						];
						break;
					case 2:
						t = [
							t[0],
							t[1],
							t[0],
							t[1]
						];
						break;
					case 3: t = [
						t[0],
						t[1],
						t[2],
						t[1]
					];
				}
				return new e(t);
			}
		}
		toString() {
			return JSON.stringify(this.values);
		}
		static interpolate(t, r, i) {
			return new e(Me(t.values, r.values, i));
		}
	}, Re = class e {
		constructor(e) {
			this.values = e.slice();
		}
		static parse(t) {
			if (t instanceof e) return t;
			if ("number" == typeof t) return new e([t]);
			if (Array.isArray(t)) {
				for (let e of t) if ("number" != typeof e) return;
				return new e(t);
			}
		}
		toString() {
			return JSON.stringify(this.values);
		}
		static interpolate(t, r, i) {
			return new e(Me(t.values, r.values, i));
		}
	}, $e = class e {
		constructor(e) {
			this.values = e.slice();
		}
		static parse(t) {
			if (t instanceof e) return t;
			if ("string" == typeof t) {
				let r = Pe.parse(t);
				return r ? new e([r]) : void 0;
			}
			if (!Array.isArray(t)) return;
			let r = [];
			for (let e of t) {
				if ("string" != typeof e) return;
				let t = Pe.parse(e);
				if (!t) return;
				r.push(t);
			}
			return new e(r);
		}
		toString() {
			return JSON.stringify(this.values);
		}
		static interpolate(t, r, i, n = "rgb") {
			let a = [];
			if (t.values.length != r.values.length) throw Error(`colorArray: Arrays have mismatched length (${t.values.length} vs. ${r.values.length}), cannot interpolate.`);
			for (let e = 0; e < t.values.length; e++) a.push(Pe.interpolate(t.values[e], r.values[e], i, n));
			return new e(a);
		}
	}, Ne = class extends Error {
		constructor(e, t) {
			super(e), this.name = "RuntimeError", this.path = t;
		}
		toJSON() {
			return this.message;
		}
	};
	const Ue = /* @__PURE__ */ new Set([
		"center",
		"left",
		"right",
		"top",
		"bottom",
		"top-left",
		"top-right",
		"bottom-left",
		"bottom-right"
	]);
	var je = class e {
		constructor(e) {
			this.values = e.slice();
		}
		static parse(t) {
			if (t instanceof e) return t;
			if (Array.isArray(t) && !(t.length < 1) && t.length % 2 == 0) {
				for (let e = 0; e < t.length; e += 2) {
					let r = t[e], i = t[e + 1];
					if ("string" != typeof r || !Ue.has(r) || !Array.isArray(i) || 2 !== i.length || "number" != typeof i[0] || "number" != typeof i[1]) return;
				}
				return new e(t);
			}
		}
		toString() {
			return JSON.stringify(this.values);
		}
		static interpolate(t, r, i, n) {
			let a = t.values, s = r.values;
			if (a.length !== s.length) throw new Ne(`Cannot interpolate values of different length. from: ${t.toString()}, to: ${r.toString()}`, n);
			let o = [];
			for (let e = 0; e < a.length; e += 2) {
				if (a[e] !== s[e]) throw new Ne(`Cannot interpolate values containing mismatched anchors. from[${e}]: ${a[e]}, to[${e}]: ${s[e]}`, n);
				o.push(a[e]);
				let [t, r] = a[e + 1], [l, u] = s[e + 1];
				o.push([Be(t, l, i), Be(r, u, i)]);
			}
			return new e(o);
		}
	}, qe = class e {
		constructor(e) {
			this.name = e.name, this.available = e.available;
		}
		toString() {
			return this.name;
		}
		static fromString(t) {
			return t ? new e({
				name: t,
				available: !1
			}) : null;
		}
	}, Ge = class e {
		constructor(e, t, r) {
			this.from = e, this.to = t, this.transition = r;
		}
		toString() {
			return this.from === this.to && 1 === this.transition ? this.from : JSON.stringify([
				this.from,
				this.to,
				this.transition
			]);
		}
		static interpolate(t, r, i) {
			return new e(t, r, i);
		}
		static parse(t) {
			return t instanceof e ? t : Array.isArray(t) && 3 === t.length && "string" == typeof t[0] && "string" == typeof t[1] && "number" == typeof t[2] ? new e(t[0], t[1], t[2]) : "object" == typeof t && "string" == typeof t.from && "string" == typeof t.to && "number" == typeof t.transition ? new e(t.from, t.to, t.transition) : "string" == typeof t ? new e(t, t, 1) : void 0;
		}
	}, Xe = class {
		constructor(e, t, r) {
			this.sensitivity = e ? t ? "variant" : "case" : t ? "accent" : "base", this.locale = r, this.collator = new Intl.Collator(this.locale ? this.locale : [], {
				sensitivity: this.sensitivity,
				usage: "search"
			});
		}
		compare(e, t) {
			return this.collator.compare(e, t);
		}
		resolvedLocale() {
			return new Intl.Collator(this.locale ? this.locale : []).resolvedOptions().locale;
		}
	};
	function Ye(e, t, r, i) {
		return "number" == typeof e && e >= 0 && e <= 255 && "number" == typeof t && t >= 0 && t <= 255 && "number" == typeof r && r >= 0 && r <= 255 ? void 0 === i || "number" == typeof i && i >= 0 && i <= 1 ? null : `Invalid rgba value [${[
			e,
			t,
			r,
			i
		].join(", ")}]: 'a' must be between 0 and 1.` : `Invalid rgba value [${("number" == typeof i ? [
			e,
			t,
			r,
			i
		] : [
			e,
			t,
			r
		]).join(", ")}]: 'r', 'g', and 'b' must be between 0 and 255.`;
	}
	function We(e) {
		if (null === e || "string" == typeof e || "boolean" == typeof e || "number" == typeof e || e instanceof Ge || e instanceof Pe || e instanceof Xe || e instanceof Ve || e instanceof Oe || e instanceof Re || e instanceof $e || e instanceof je || e instanceof qe) return !0;
		if (Array.isArray(e)) {
			for (let t of e) if (!We(t)) return !1;
			return !0;
		}
		if ("object" == typeof e) {
			for (let t in e) if (!We(e[t])) return !1;
			return !0;
		}
		return !1;
	}
	function Ze(e) {
		if (null === e) return j;
		if ("string" == typeof e) return G;
		if ("boolean" == typeof e) return X;
		if ("number" == typeof e) return q;
		if (e instanceof Pe) return Y;
		if (e instanceof Ge) return W;
		if (e instanceof Xe) return K;
		if (e instanceof Ve) return J;
		if (e instanceof Oe) return Q;
		if (e instanceof Re) return te;
		if (e instanceof $e) return ee;
		if (e instanceof je) return ie;
		if (e instanceof qe) return re;
		if (Array.isArray(e)) {
			let t, r = e.length;
			for (let i of e) {
				let e = Ze(i);
				if (t) {
					if (t === e) continue;
					t = H;
					break;
				}
				t = e;
			}
			return ne(t || H, r);
		}
		return Z;
	}
	function He(e) {
		let t = typeof e;
		return null === e ? "" : "string" === t || "number" === t || "boolean" === t ? String(e) : e instanceof Pe || e instanceof Ge || e instanceof Ve || e instanceof Oe || e instanceof Re || e instanceof $e || e instanceof je || e instanceof qe ? e.toString() : JSON.stringify(e);
	}
	var Ke = class e {
		constructor(e, t) {
			this.type = e, this.value = t;
		}
		static parse(t, r) {
			if (2 !== t.length) return r.error(`'literal' expression requires exactly one argument, but found ${t.length - 1} instead.`);
			if (!We(t[1])) return r.error(`invalid value of type "${typeof t[1]}"`);
			let i = t[1], n = Ze(i), a = r.expectedType;
			return "array" === n.kind && 0 === n.N && a && "array" === a.kind && ("number" != typeof a.N || 0 === a.N) && (n = a), new e(n, i);
		}
		evaluate() {
			return this.value;
		}
		eachChild() {}
		outputDefined() {
			return !0;
		}
	};
	const Je = [
		"Unknown",
		"Point",
		"LineString",
		"Polygon"
	];
	var Qe = class {
		constructor() {
			this.globals = null, this.feature = null, this.featureState = null, this.formattedSection = null, this._parseColorCache = /* @__PURE__ */ new Map(), this.availableImages = null, this.canonical = null;
		}
		id() {
			return this.feature && "id" in this.feature ? this.feature.id : null;
		}
		geometryType() {
			return this.feature ? "number" == typeof this.feature.type ? Je[this.feature.type] : this.feature.type : null;
		}
		geometry() {
			return this.feature && "geometry" in this.feature ? this.feature.geometry : null;
		}
		canonicalID() {
			return this.canonical;
		}
		properties() {
			return this.feature && this.feature.properties || {};
		}
		parseColor(e) {
			let t = this._parseColorCache.get(e);
			return t || (t = Pe.parse(e), this._parseColorCache.set(e, t)), t;
		}
	};
	function et(e, t, r) {
		let i, n, a = e.length - 1, s = 0, o = a, l = 0;
		for (; s <= o;) if (l = Math.floor((s + o) / 2), i = e[l], n = e[l + 1], i <= t) {
			if (l === a || t < n) return l;
			s = l + 1;
		} else {
			if (!(i > t)) throw new Ne("Input is not a number.", r);
			o = l - 1;
		}
		return 0;
	}
	var tt = class e {
		constructor(e, t, r, i) {
			this.type = e, this.input = t, this.key = i, this.labels = [], this.outputs = [];
			for (let [n, a] of r) this.labels.push(n), this.outputs.push(a);
		}
		static parse(t, r) {
			if (t.length - 1 < 4) return r.error(`Expected at least 4 arguments, but found only ${t.length - 1}.`);
			if ((t.length - 1) % 2 != 0) return r.error("Expected an even number of arguments.");
			let i = r.parse(t[1], 1, q);
			if (!i) return null;
			let n = [], a = null;
			r.expectedType && "value" !== r.expectedType.kind && (a = r.expectedType);
			for (let e = 1; e < t.length; e += 2) {
				let i = 1 === e ? -Infinity : t[e], s = t[e + 1], o = e, l = e + 1;
				if ("number" != typeof i) return r.error("Input/output pairs for \"step\" expressions must be defined using literal numeric values (not computed expressions) for the input values.", o);
				if (n.length && n[n.length - 1][0] >= i) return r.error("Input/output pairs for \"step\" expressions must be arranged with input values in strictly ascending order.", o);
				let u = r.parse(s, l, a);
				if (!u) return null;
				a || (a = u.type), n.push([i, u]);
			}
			return new e(a, i, n, r.key);
		}
		evaluate(e) {
			let t = this.labels, r = this.outputs;
			if (1 === t.length) return r[0].evaluate(e);
			let i = this.input.evaluate(e);
			if (i <= t[0]) return r[0].evaluate(e);
			let n = t.length;
			return i >= t[n - 1] ? r[n - 1].evaluate(e) : r[et(t, i, this.key)].evaluate(e);
		}
		eachChild(e) {
			e(this.input);
			for (let t of this.outputs) e(t);
		}
		outputDefined() {
			return this.outputs.every((e) => e.outputDefined());
		}
	}, rt = class e {
		constructor(e, t, r, i, n, a) {
			this.type = e, this.operator = t, this.interpolation = r, this.input = i, this.key = a, this.labels = [], this.outputs = [];
			for (let [s, o] of n) this.labels.push(s), this.outputs.push(o);
		}
		static interpolationFactor(e, t, r, i) {
			let n = 0;
			if ("exponential" === e.name) n = it(t, e.base, r, i);
			else if ("linear" === e.name) n = it(t, 1, r, i);
			else if ("cubic-bezier" === e.name) {
				let a = e.controlPoints;
				n = function(e, t, r, i) {
					let n = 3 * e, a = 3 * (r - e) - n, s = 1 - n - a, o = 3 * t, l = 3 * (i - t) - o, u = 1 - o - l;
					return function(e, t = 1e-6) {
						if (e <= 0) return 0;
						if (e >= 1) return 1;
						let r = e;
						for (let c = 0; c < 8; c++) {
							let i = ((s * r + a) * r + n) * r - e;
							if (Math.abs(i) < t) return ((u * r + l) * r + o) * r;
							let h = (3 * s * r + 2 * a) * r + n;
							if (Math.abs(h) < 1e-6) break;
							r -= i / h;
						}
						let i = 0, h = 1;
						r = e;
						for (let o = 0; o < 20; o++) {
							let o = ((s * r + a) * r + n) * r;
							if (Math.abs(o - e) < t) break;
							e > o ? i = r : h = r, r = .5 * (i + h);
						}
						return ((u * r + l) * r + o) * r;
					};
				}(a[0], a[1], a[2], a[3])(it(t, 1, r, i));
			}
			return n;
		}
		static parse(t, r) {
			let [i, n, a, ...s] = t;
			if (!Array.isArray(n) || 0 === n.length) return r.error("Expected an interpolation type expression.", 1);
			if ("linear" === n[0]) n = { name: "linear" };
			else if ("exponential" === n[0]) {
				let e = n[1];
				if ("number" != typeof e) return r.error("Exponential interpolation requires a numeric base.", 1, 1);
				n = {
					name: "exponential",
					base: e
				};
			} else {
				if ("cubic-bezier" !== n[0]) return r.error(`Unknown interpolation type ${String(n[0])}`, 1, 0);
				{
					let e = n.slice(1);
					if (4 !== e.length || e.some((e) => "number" != typeof e || e < 0 || e > 1)) return r.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.", 1);
					n = {
						name: "cubic-bezier",
						controlPoints: e
					};
				}
			}
			if (t.length - 1 < 4) return r.error(`Expected at least 4 arguments, but found only ${t.length - 1}.`);
			if ((t.length - 1) % 2 != 0) return r.error("Expected an even number of arguments.");
			if (a = r.parse(a, 2, q), !a) return null;
			let o = [], l = null;
			"interpolate-hcl" !== i && "interpolate-lab" !== i || r.expectedType == ee ? r.expectedType && "value" !== r.expectedType.kind && (l = r.expectedType) : l = Y;
			for (let e = 0; e < s.length; e += 2) {
				let t = s[e], i = s[e + 1], n = e + 3, a = e + 4;
				if ("number" != typeof t) return r.error("Input/output pairs for \"interpolate\" expressions must be defined using literal numeric values (not computed expressions) for the input values.", n);
				if (o.length && o[o.length - 1][0] >= t) return r.error("Input/output pairs for \"interpolate\" expressions must be arranged with input values in strictly ascending order.", n);
				let u = r.parse(i, a, l);
				if (!u) return null;
				l || (l = u.type), o.push([t, u]);
			}
			return he(l, q) || he(l, W) || he(l, Y) || he(l, Q) || he(l, te) || he(l, ee) || he(l, ie) || he(l, ne(q)) ? new e(l, i, n, a, o, r.key) : r.error(`Type ${ae(l)} is not interpolatable.`);
		}
		evaluate(t) {
			let r = this.labels, i = this.outputs;
			if (1 === r.length) return i[0].evaluate(t);
			let n = this.input.evaluate(t);
			if (n <= r[0]) return i[0].evaluate(t);
			let a = r.length;
			if (n >= r[a - 1]) return i[a - 1].evaluate(t);
			let s = et(r, n, this.key), o = r[s], l = r[s + 1], u = e.interpolationFactor(this.interpolation, n, o, l), h = i[s].evaluate(t), c = i[s + 1].evaluate(t);
			switch (this.operator) {
				case "interpolate": switch (this.type.kind) {
					case "number": return Be(h, c, u);
					case "color": return Pe.interpolate(h, c, u);
					case "padding": return Oe.interpolate(h, c, u);
					case "colorArray": return $e.interpolate(h, c, u);
					case "numberArray": return Re.interpolate(h, c, u);
					case "variableAnchorOffsetCollection": return je.interpolate(h, c, u, this.key);
					case "array": return Me(h, c, u);
					case "projectionDefinition": return Ge.interpolate(h, c, u);
				}
				case "interpolate-hcl": switch (this.type.kind) {
					case "color": return Pe.interpolate(h, c, u, "hcl");
					case "colorArray": return $e.interpolate(h, c, u, "hcl");
				}
				case "interpolate-lab": switch (this.type.kind) {
					case "color": return Pe.interpolate(h, c, u, "lab");
					case "colorArray": return $e.interpolate(h, c, u, "lab");
				}
			}
		}
		eachChild(e) {
			e(this.input);
			for (let t of this.outputs) e(t);
		}
		outputDefined() {
			return this.outputs.every((e) => e.outputDefined());
		}
	};
	function it(e, t, r, i) {
		let n = i - r, a = e - r;
		return 0 === n ? 0 : 1 === t ? a / n : (t ** +a - 1) / (t ** +n - 1);
	}
	const nt = {
		color: Pe.interpolate,
		number: Be,
		padding: Oe.interpolate,
		numberArray: Re.interpolate,
		colorArray: $e.interpolate,
		variableAnchorOffsetCollection: je.interpolate,
		array: Me
	};
	var at = class e {
		constructor(e) {
			this.type = J, this.sections = e;
		}
		static parse(t, r) {
			if (t.length < 2) return r.error("Expected at least one argument.");
			let i = t[1];
			if (!Array.isArray(i) && "object" == typeof i) return r.error("First argument must be an image or text section.");
			let n = [], a = !1;
			for (let e = 1; e <= t.length - 1; ++e) {
				let i = t[e];
				if (a && "object" == typeof i && !Array.isArray(i)) {
					a = !1;
					let e = null;
					if (i["font-scale"] && (e = r.parse(i["font-scale"], 1, q), !e)) return null;
					let t = null;
					if (i["text-font"] && (t = r.parse(i["text-font"], 1, ne(G)), !t)) return null;
					let s = null;
					if (i["text-color"] && (s = r.parse(i["text-color"], 1, Y), !s)) return null;
					let o = null;
					if (i["vertical-align"]) {
						if ("string" == typeof i["vertical-align"] && !ze.includes(i["vertical-align"])) return r.error(`'vertical-align' must be one of: 'bottom', 'center', 'top' but found '${i["vertical-align"]}' instead.`);
						if (o = r.parse(i["vertical-align"], 1, G), !o) return null;
					}
					let l = n[n.length - 1];
					l.scale = e, l.font = t, l.textColor = s, l.verticalAlign = o;
				} else {
					let i = r.parse(t[e], 1, H);
					if (!i) return null;
					let s = i.type.kind;
					if ("string" !== s && "value" !== s && "null" !== s && "resolvedImage" !== s) return r.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");
					a = !0, n.push({
						content: i,
						scale: null,
						font: null,
						textColor: null,
						verticalAlign: null
					});
				}
			}
			return new e(n);
		}
		evaluate(e) {
			return new Ve(this.sections.map((t) => {
				let r = t.content.evaluate(e);
				return Ze(r) === re ? new Le("", r, null, null, null, t.verticalAlign ? t.verticalAlign.evaluate(e) : null) : new Le(He(r), null, t.scale ? t.scale.evaluate(e) : null, t.font ? t.font.evaluate(e).join(",") : null, t.textColor ? t.textColor.evaluate(e) : null, t.verticalAlign ? t.verticalAlign.evaluate(e) : null);
			}));
		}
		eachChild(e) {
			for (let t of this.sections) e(t.content), t.scale && e(t.scale), t.font && e(t.font), t.textColor && e(t.textColor), t.verticalAlign && e(t.verticalAlign);
		}
		outputDefined() {
			return !1;
		}
	};
	function st(e, t, r = 0, i = e.length - 1, n = lt) {
		for (; i > r;) {
			if (i - r > 600) {
				let a = i - r + 1, s = t - r + 1, o = Math.log(a), l = .5 * Math.exp(2 * o / 3), u = .5 * Math.sqrt(o * l * (a - l) / a) * (s - a / 2 < 0 ? -1 : 1);
				st(e, t, Math.max(r, Math.floor(t - s * l / a + u)), Math.min(i, Math.floor(t + (a - s) * l / a + u)), n);
			}
			let a = e[t], s = r, o = i;
			for (ot(e, r, t), n(e[i], a) > 0 && ot(e, r, i); s < o;) {
				for (ot(e, s, o), s++, o--; n(e[s], a) < 0;) s++;
				for (; n(e[o], a) > 0;) o--;
			}
			0 === n(e[r], a) ? ot(e, r, o) : (o++, ot(e, o, i)), o <= t && (r = o + 1), t <= o && (i = o - 1);
		}
	}
	function ot(e, t, r) {
		let i = e[t];
		e[t] = e[r], e[r] = i;
	}
	function lt(e, t) {
		return e < t ? -1 : +(e > t);
	}
	function ut(e, t) {
		if (e.length <= 1) return [e];
		let r, i, n = [];
		for (let a of e) {
			let e = ct(a);
			0 !== e && (a.area = Math.abs(e), void 0 === i && (i = e < 0), i === e < 0 ? (r && n.push(r), r = [a]) : r.push(a));
		}
		if (r && n.push(r), t > 1) for (let a = 0; a < n.length; a++) n[a].length <= t || (st(n[a], t, 1, n[a].length - 1, ht), n[a] = n[a].slice(0, t));
		return n;
	}
	function ht(e, t) {
		return t.area - e.area;
	}
	function ct(e) {
		let t = 0;
		for (let r, i, n = 0, a = e.length, s = a - 1; n < a; s = n++) r = e[n], i = e[s], t += (i.x - r.x) * (r.y + i.y);
		return t;
	}
	const pt = {
		string: G,
		number: q,
		boolean: X,
		object: Z
	};
	var ft = class e {
		constructor(e, t, r) {
			this.type = e, this.args = t, this.key = r;
		}
		static parse(t, r) {
			if (t.length < 2) return r.error("Expected at least one argument.");
			let i, n = 1, a = t[0];
			if ("array" === a) {
				let e, a;
				if (t.length > 2) {
					let i = t[1];
					if ("string" != typeof i || !(i in pt) || "object" === i) return r.error("The item type argument of \"array\" must be one of string, number, boolean", 1);
					e = pt[i], n++;
				} else e = H;
				if (t.length > 3) {
					if (null !== t[2] && ("number" != typeof t[2] || t[2] < 0 || t[2] !== Math.floor(t[2]))) return r.error("The length argument to \"array\" must be a positive integer literal", 2);
					a = t[2], n++;
				}
				i = ne(e, a);
			} else {
				if (!pt[a]) throw Error(`Types doesn't contain name = ${a}`);
				i = pt[a];
			}
			let s = [];
			for (; n < t.length; n++) {
				let e = r.parse(t[n], n, H);
				if (!e) return null;
				s.push(e);
			}
			return new e(i, s, r.key);
		}
		evaluate(e) {
			for (let t = 0; t < this.args.length; t++) {
				let r = this.args[t].evaluate(e);
				if (!oe(this.type, Ze(r))) return r;
				if (t === this.args.length - 1) throw new Ne(`Expected value to be of type ${ae(this.type)}, but found ${ae(Ze(r))} instead.`, this.key);
			}
			throw Error();
		}
		eachChild(e) {
			this.args.forEach(e);
		}
		outputDefined() {
			return this.args.every((e) => e.outputDefined());
		}
	};
	const dt = {
		"to-boolean": X,
		"to-color": Y,
		"to-number": q,
		"to-string": G
	};
	var yt = class e {
		constructor(e, t, r) {
			this.type = e, this.args = t, this.key = r;
		}
		static parse(t, r) {
			if (t.length < 2) return r.error("Expected at least one argument.");
			let i = t[0];
			if (!dt[i]) throw Error(`Can't parse ${i} as it is not part of the known types`);
			if (("to-boolean" === i || "to-string" === i) && 2 !== t.length) return r.error("Expected one argument.");
			let n = dt[i], a = [];
			for (let e = 1; e < t.length; e++) {
				let i = r.parse(t[e], e, H);
				if (!i) return null;
				a.push(i);
			}
			return new e(n, a, r.key);
		}
		evaluate(e) {
			switch (this.type.kind) {
				case "boolean": return !!this.args[0].evaluate(e);
				case "color": {
					let t, r;
					for (let i of this.args) {
						if (t = i.evaluate(e), r = null, t instanceof Pe) return t;
						if ("string" == typeof t) {
							let r = e.parseColor(t);
							if (r) return r;
						} else if (Array.isArray(t) && (r = t.length < 3 || t.length > 4 ? `Invalid rgba value ${JSON.stringify(t)}: expected an array containing either three or four numeric values.` : Ye(t[0], t[1], t[2], t[3]), !r)) return new Pe(t[0] / 255, t[1] / 255, t[2] / 255, t[3]);
					}
					throw new Ne(r || `Could not parse color from value '${"string" == typeof t ? t : JSON.stringify(t)}'`, this.key);
				}
				case "padding": {
					let t;
					for (let r of this.args) {
						t = r.evaluate(e);
						let i = Oe.parse(t);
						if (i) return i;
					}
					throw new Ne(`Could not parse padding from value '${"string" == typeof t ? t : JSON.stringify(t)}'`, this.key);
				}
				case "numberArray": {
					let t;
					for (let r of this.args) {
						t = r.evaluate(e);
						let i = Re.parse(t);
						if (i) return i;
					}
					throw new Ne(`Could not parse numberArray from value '${"string" == typeof t ? t : JSON.stringify(t)}'`, this.key);
				}
				case "colorArray": {
					let t;
					for (let r of this.args) {
						t = r.evaluate(e);
						let i = $e.parse(t);
						if (i) return i;
					}
					throw new Ne(`Could not parse colorArray from value '${"string" == typeof t ? t : JSON.stringify(t)}'`, this.key);
				}
				case "variableAnchorOffsetCollection": {
					let t;
					for (let r of this.args) {
						t = r.evaluate(e);
						let i = je.parse(t);
						if (i) return i;
					}
					throw new Ne(`Could not parse variableAnchorOffsetCollection from value '${"string" == typeof t ? t : JSON.stringify(t)}'`, this.key);
				}
				case "number": {
					let t = null;
					for (let r of this.args) {
						if (t = r.evaluate(e), null === t) return 0;
						let i = Number(t);
						if (!isNaN(i)) return i;
					}
					throw new Ne(`Could not convert ${JSON.stringify(t)} to number.`, this.key);
				}
				case "formatted": return Ve.fromString(He(this.args[0].evaluate(e)));
				case "resolvedImage": return qe.fromString(He(this.args[0].evaluate(e)));
				case "projectionDefinition": {
					let t = this.args[0].evaluate(e);
					if (Ge.parse(t)) return t;
					throw new Ne(`Could not parse projectionDefinition from value '${"string" == typeof t ? t : JSON.stringify(t)}'`, this.key);
				}
				default: return He(this.args[0].evaluate(e));
			}
		}
		eachChild(e) {
			this.args.forEach(e);
		}
		outputDefined() {
			return this.args.every((e) => e.outputDefined());
		}
	}, mt = class e {
		constructor(e, t) {
			this.type = t.type, this.bindings = [].concat(e), this.result = t;
		}
		evaluate(e) {
			return this.result.evaluate(e);
		}
		eachChild(e) {
			for (let t of this.bindings) e(t[1]);
			e(this.result);
		}
		static parse(t, r) {
			if (t.length < 4) return r.error(`Expected at least 3 arguments, but found ${t.length - 1} instead.`);
			let i = [];
			for (let e = 1; e < t.length - 1; e += 2) {
				let n = t[e];
				if ("string" != typeof n) return r.error(`Expected string, but found ${typeof n} instead.`, e);
				if (/[^a-zA-Z0-9_]/.test(n)) return r.error("Variable names must contain only alphanumeric characters or '_'.", e);
				let a = r.parse(t[e + 1], e + 1);
				if (!a) return null;
				i.push([n, a]);
			}
			let n = r.parse(t[t.length - 1], t.length - 1, r.expectedType, i);
			return n ? new e(i, n) : null;
		}
		outputDefined() {
			return this.result.outputDefined();
		}
	}, gt = class e {
		constructor(e, t) {
			this.type = t.type, this.name = e, this.boundExpression = t;
		}
		static parse(t, r) {
			if (2 !== t.length || "string" != typeof t[1]) return r.error("'var' expression requires exactly one string literal argument.");
			let i = t[1];
			return r.scope.has(i) ? new e(i, r.scope.get(i)) : r.error(`Unknown variable "${i}". Make sure "${i}" has been bound in an enclosing "let" expression before using it.`, 1);
		}
		evaluate(e) {
			return this.boundExpression.evaluate(e);
		}
		eachChild() {}
		outputDefined() {
			return !1;
		}
	}, xt = class e {
		constructor(e, t) {
			this.type = e, this.args = t;
		}
		static parse(t, r) {
			if (t.length < 2) return r.error("Expected at least one argument.");
			let i = null, n = r.expectedType;
			n && "value" !== n.kind && (i = n);
			let a = [];
			for (let e of t.slice(1)) {
				let t = r.parse(e, 1 + a.length, i, void 0, { typeAnnotation: "omit" });
				if (!t) return null;
				i || (i = t.type), a.push(t);
			}
			if (!i) throw Error("No output type");
			return n && a.some((e) => oe(n, e.type)) ? new e(H, a) : new e(i, a);
		}
		evaluate(e) {
			let t, r = null, i = 0;
			for (let n of this.args) if (i++, r = n.evaluate(e), r && r instanceof qe && !r.available && (t || (t = r.name), r = null, i === this.args.length && (r = t)), null !== r) break;
			return r;
		}
		eachChild(e) {
			this.args.forEach(e);
		}
		outputDefined() {
			return this.args.every((e) => e.outputDefined());
		}
	};
	function vt(e, t) {
		return "==" === e || "!=" === e ? "boolean" === t.kind || "string" === t.kind || "number" === t.kind || "null" === t.kind || "value" === t.kind : "string" === t.kind || "number" === t.kind || "value" === t.kind;
	}
	function bt(e, t, r, i) {
		return 0 === i.compare(t, r);
	}
	function wt(e, t, r) {
		let i = "==" !== e && "!=" !== e;
		return class n {
			constructor(e, t, r, i) {
				this.lhs = e, this.rhs = t, this.key = r, this.collator = i, this.type = X, this.hasUntypedArgument = "value" === e.type.kind || "value" === t.type.kind;
			}
			static parse(e, t) {
				if (3 !== e.length && 4 !== e.length) return t.error("Expected two or three arguments.");
				let r = e[0], a = t.parse(e[1], 1, H);
				if (!a) return null;
				if (!vt(r, a.type)) return t.concat(1).error(`"${r}" comparisons are not supported for type '${ae(a.type)}'.`);
				let s = t.parse(e[2], 2, H);
				if (!s) return null;
				if (!vt(r, s.type)) return t.concat(2).error(`"${r}" comparisons are not supported for type '${ae(s.type)}'.`);
				if (a.type.kind !== s.type.kind && "value" !== a.type.kind && "value" !== s.type.kind) return t.error(`Cannot compare types '${ae(a.type)}' and '${ae(s.type)}'.`);
				i && ("value" === a.type.kind && "value" !== s.type.kind ? a = new ft(s.type, [a], t.key) : "value" !== a.type.kind && "value" === s.type.kind && (s = new ft(a.type, [s], t.key)));
				let o = null;
				if (4 === e.length) {
					if ("string" !== a.type.kind && "string" !== s.type.kind && "value" !== a.type.kind && "value" !== s.type.kind) return t.error("Cannot use collator to compare non-string types.");
					if (o = t.parse(e[3], 3, K), !o) return null;
				}
				return new n(a, s, t.key, o);
			}
			evaluate(n) {
				let a = this.lhs.evaluate(n), s = this.rhs.evaluate(n);
				if (i && this.hasUntypedArgument) {
					let t = Ze(a), r = Ze(s);
					if (t.kind !== r.kind || "string" !== t.kind && "number" !== t.kind) throw new Ne(`Expected arguments for "${e}" to be (string, string) or (number, number), but found (${t.kind}, ${r.kind}) instead.`, this.key);
				}
				if (this.collator && !i && this.hasUntypedArgument) {
					let e = Ze(a), r = Ze(s);
					if ("string" !== e.kind || "string" !== r.kind) return t(n, a, s);
				}
				return this.collator ? r(n, a, s, this.collator.evaluate(n)) : t(n, a, s);
			}
			eachChild(e) {
				e(this.lhs), e(this.rhs), this.collator && e(this.collator);
			}
			outputDefined() {
				return !0;
			}
		};
	}
	const _t = wt("==", function(e, t, r) {
		return t === r;
	}, bt), Dt = wt("!=", function(e, t, r) {
		return t !== r;
	}, function(e, t, r, i) {
		return !bt(0, t, r, i);
	}), St = wt("<", function(e, t, r) {
		return t < r;
	}, function(e, t, r, i) {
		return i.compare(t, r) < 0;
	}), At = wt(">", function(e, t, r) {
		return t > r;
	}, function(e, t, r, i) {
		return i.compare(t, r) > 0;
	}), Et = wt("<=", function(e, t, r) {
		return t <= r;
	}, function(e, t, r, i) {
		return i.compare(t, r) <= 0;
	}), Ft = wt(">=", function(e, t, r) {
		return t >= r;
	}, function(e, t, r, i) {
		return i.compare(t, r) >= 0;
	});
	var kt = class e {
		constructor(e, t, r) {
			this.type = K, this.locale = r, this.caseSensitive = e, this.diacriticSensitive = t;
		}
		static parse(t, r) {
			if (2 !== t.length) return r.error("Expected one argument.");
			let i = t[1];
			if ("object" != typeof i || Array.isArray(i)) return r.error("Collator options argument must be an object.");
			let n = r.parse(void 0 !== i["case-sensitive"] && i["case-sensitive"], 1, X);
			if (!n) return null;
			let a = r.parse(void 0 !== i["diacritic-sensitive"] && i["diacritic-sensitive"], 1, X);
			if (!a) return null;
			let s = null;
			return i.locale && (s = r.parse(i.locale, 1, G), !s) ? null : new e(n, a, s);
		}
		evaluate(e) {
			return new Xe(this.caseSensitive.evaluate(e), this.diacriticSensitive.evaluate(e), this.locale ? this.locale.evaluate(e) : null);
		}
		eachChild(e) {
			e(this.caseSensitive), e(this.diacriticSensitive), this.locale && e(this.locale);
		}
		outputDefined() {
			return !1;
		}
	};
	const It = 8192;
	function Tt(e, t) {
		let r = function(e) {
			return (180 + e) / 360;
		}(e[0]), i = function(e) {
			return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + e * Math.PI / 360))) / 360;
		}(e[1]), n = 2 ** t.z;
		return [Math.round(r * n * It), Math.round(i * n * It)];
	}
	function Ct(e, t) {
		let r = 2 ** t.z, i = (e[0] / It + t.x) / r, n = (e[1] / It + t.y) / r;
		return [Bt(i), Mt(n)];
	}
	function Bt(e) {
		return 360 * e - 180;
	}
	function Mt(e) {
		return 360 / Math.PI * Math.atan(Math.exp((180 - 360 * e) * Math.PI / 180)) - 90;
	}
	function Pt(e, t) {
		e[0] = Math.min(e[0], t[0]), e[1] = Math.min(e[1], t[1]), e[2] = Math.max(e[2], t[0]), e[3] = Math.max(e[3], t[1]);
	}
	function zt(e, t) {
		return !(e[0] <= t[0] || e[2] >= t[2] || e[1] <= t[1] || e[3] >= t[3]);
	}
	function Lt(e, t, r) {
		return t[1] > e[1] != r[1] > e[1] && e[0] < (r[0] - t[0]) * (e[1] - t[1]) / (r[1] - t[1]) + t[0];
	}
	function Vt(e, t, r) {
		let i = e[0] - t[0], n = e[1] - t[1], a = e[0] - r[0], s = e[1] - r[1];
		return i * s - a * n === 0 && i * a <= 0 && n * s <= 0;
	}
	function Ot(e, t, r, i) {
		let n = [t[0] - e[0], t[1] - e[1]];
		return 0 !== function(e, t) {
			return e[0] * t[1] - e[1] * t[0];
		}([i[0] - r[0], i[1] - r[1]], n) && !(!qt(e, t, r, i) || !qt(r, i, e, t));
	}
	function Rt(e, t, r) {
		for (let i of r) for (let r = 0; r < i.length - 1; ++r) if (Ot(e, t, i[r], i[r + 1])) return !0;
		return !1;
	}
	function $t(e, t, r = !1) {
		let i = !1;
		for (let n of t) for (let t = 0; t < n.length - 1; t++) {
			if (Vt(e, n[t], n[t + 1])) return r;
			Lt(e, n[t], n[t + 1]) && (i = !i);
		}
		return i;
	}
	function Nt(e, t) {
		for (let r of t) if ($t(e, r)) return !0;
		return !1;
	}
	function Ut(e, t) {
		for (let r of e) if (!$t(r, t)) return !1;
		for (let r = 0; r < e.length - 1; ++r) if (Rt(e[r], e[r + 1], t)) return !1;
		return !0;
	}
	function jt(e, t) {
		for (let r of t) if (Ut(e, r)) return !0;
		return !1;
	}
	function qt(e, t, r, i) {
		let n = e[0] - r[0], a = e[1] - r[1], s = t[0] - r[0], o = t[1] - r[1], l = i[0] - r[0], u = i[1] - r[1], h = n * u - l * a, c = s * u - l * o;
		return h > 0 && c < 0 || h < 0 && c > 0;
	}
	function Gt(e, t, r) {
		let i = [];
		for (let n = 0; n < e.length; n++) {
			let a = [];
			for (let i = 0; i < e[n].length; i++) {
				let s = Tt(e[n][i], r);
				Pt(t, s), a.push(s);
			}
			i.push(a);
		}
		return i;
	}
	function Xt(e, t, r) {
		let i = [];
		for (let n = 0; n < e.length; n++) {
			let a = Gt(e[n], t, r);
			i.push(a);
		}
		return i;
	}
	function Yt(e, t, r, i) {
		if (e[0] < r[0] || e[0] > r[2]) {
			let t = .5 * i, n = e[0] - r[0] > t ? -i : r[0] - e[0] > t ? i : 0;
			0 === n && (n = e[0] - r[2] > t ? -i : r[2] - e[0] > t ? i : 0), e[0] += n;
		}
		Pt(t, e);
	}
	function Wt(e, t, r, i) {
		let n = 2 ** i.z * It, a = [i.x * It, i.y * It], s = [];
		for (let o of e) for (let e of o) {
			let i = [e.x + a[0], e.y + a[1]];
			Yt(i, t, r, n), s.push(i);
		}
		return s;
	}
	function Zt(e, t, r, i) {
		let n = 2 ** i.z * It, a = [i.x * It, i.y * It], s = [];
		for (let o of e) {
			let e = [];
			for (let r of o) {
				let i = [r.x + a[0], r.y + a[1]];
				Pt(t, i), e.push(i);
			}
			s.push(e);
		}
		if (t[2] - t[0] <= n / 2) {
			(function(e) {
				e[0] = e[1] = Infinity, e[2] = e[3] = -Infinity;
			})(t);
			for (let e of s) for (let i of e) Yt(i, t, r, n);
		}
		return s;
	}
	var Ht = class e {
		constructor(e, t) {
			this.type = X, this.geojson = e, this.geometries = t;
		}
		static parse(t, r) {
			if (2 !== t.length) return r.error(`'within' expression requires exactly one argument, but found ${t.length - 1} instead.`);
			if (We(t[1])) {
				let r = t[1];
				if ("FeatureCollection" === r.type) {
					let t = [];
					for (let e of r.features) {
						let { type: r, coordinates: i } = e.geometry;
						"Polygon" === r && t.push(i), "MultiPolygon" === r && t.push(...i);
					}
					if (t.length) return new e(r, {
						type: "MultiPolygon",
						coordinates: t
					});
				} else if ("Feature" === r.type) {
					let t = r.geometry.type;
					if ("Polygon" === t || "MultiPolygon" === t) return new e(r, r.geometry);
				} else if ("Polygon" === r.type || "MultiPolygon" === r.type) return new e(r, r);
			}
			return r.error("'within' expression requires valid geojson object that contains polygon geometry type.");
		}
		evaluate(e) {
			if (null != e.geometry() && null != e.canonicalID()) {
				if ("Point" === e.geometryType()) return function(e, t) {
					let r = [
						Infinity,
						Infinity,
						-Infinity,
						-Infinity
					], i = [
						Infinity,
						Infinity,
						-Infinity,
						-Infinity
					], n = e.canonicalID();
					if ("Polygon" === t.type) {
						let a = Gt(t.coordinates, i, n), s = Wt(e.geometry(), r, i, n);
						if (!zt(r, i)) return !1;
						for (let e of s) if (!$t(e, a)) return !1;
					}
					if ("MultiPolygon" === t.type) {
						let a = Xt(t.coordinates, i, n), s = Wt(e.geometry(), r, i, n);
						if (!zt(r, i)) return !1;
						for (let e of s) if (!Nt(e, a)) return !1;
					}
					return !0;
				}(e, this.geometries);
				if ("LineString" === e.geometryType()) return function(e, t) {
					let r = [
						Infinity,
						Infinity,
						-Infinity,
						-Infinity
					], i = [
						Infinity,
						Infinity,
						-Infinity,
						-Infinity
					], n = e.canonicalID();
					if ("Polygon" === t.type) {
						let a = Gt(t.coordinates, i, n), s = Zt(e.geometry(), r, i, n);
						if (!zt(r, i)) return !1;
						for (let e of s) if (!Ut(e, a)) return !1;
					}
					if ("MultiPolygon" === t.type) {
						let a = Xt(t.coordinates, i, n), s = Zt(e.geometry(), r, i, n);
						if (!zt(r, i)) return !1;
						for (let e of s) if (!jt(e, a)) return !1;
					}
					return !0;
				}(e, this.geometries);
			}
			return !1;
		}
		eachChild() {}
		outputDefined() {
			return !0;
		}
	}, Kt = class {
		constructor(e = [], t = (e, t) => e < t ? -1 : +(e > t)) {
			if (this.data = e, this.length = this.data.length, this.compare = t, this.length > 0) for (let r = (this.length >> 1) - 1; r >= 0; r--) this._down(r);
		}
		push(e) {
			this.data.push(e), this._up(this.length++);
		}
		pop() {
			if (0 === this.length) return;
			let e = this.data[0], t = this.data.pop();
			return --this.length > 0 && (this.data[0] = t, this._down(0)), e;
		}
		peek() {
			return this.data[0];
		}
		_up(e) {
			let { data: t, compare: r } = this, i = t[e];
			for (; e > 0;) {
				let n = e - 1 >> 1, a = t[n];
				if (r(i, a) >= 0) break;
				t[e] = a, e = n;
			}
			t[e] = i;
		}
		_down(e) {
			let { data: t, compare: r } = this, i = this.length >> 1, n = t[e];
			for (; e < i;) {
				let i = 1 + (e << 1), a = i + 1;
				if (a < this.length && r(t[a], t[i]) < 0 && (i = a), r(t[i], n) >= 0) break;
				t[e] = t[i], e = i;
			}
			t[e] = n;
		}
	};
	const Jt = Math.PI / 180;
	var Qt = class {
		constructor(e) {
			let t = 6378.137 * Jt * 1e3, r = Math.cos(e * Jt), i = 1 / (1 - .0066943799901413165 * (1 - r * r)), n = Math.sqrt(i);
			this.kx = t * n * r, this.ky = t * n * i * .9933056200098587;
		}
		distance(e, t) {
			let r = this.wrap(e[0] - t[0]) * this.kx, i = (e[1] - t[1]) * this.ky;
			return Math.sqrt(r * r + i * i);
		}
		pointOnLine(e, t) {
			let r, i, n, a, s = Infinity;
			for (let o = 0; o < e.length - 1; o++) {
				let l = e[o][0], u = e[o][1], h = this.wrap(e[o + 1][0] - l) * this.kx, c = (e[o + 1][1] - u) * this.ky, p = 0;
				(0 !== h || 0 !== c) && (p = (this.wrap(t[0] - l) * this.kx * h + (t[1] - u) * this.ky * c) / (h * h + c * c), p > 1 ? (l = e[o + 1][0], u = e[o + 1][1]) : p > 0 && (l += h / this.kx * p, u += c / this.ky * p)), h = this.wrap(t[0] - l) * this.kx, c = (t[1] - u) * this.ky;
				let f = h * h + c * c;
				f < s && (s = f, r = l, i = u, n = o, a = p);
			}
			return {
				point: [r, i],
				index: n,
				t: Math.max(0, Math.min(1, a))
			};
		}
		wrap(e) {
			for (; e < -180;) e += 360;
			for (; e > 180;) e -= 360;
			return e;
		}
	};
	function er(e, t) {
		return t[0] - e[0];
	}
	function tr(e) {
		return e[1] - e[0] + 1;
	}
	function rr(e, t) {
		return e[1] >= e[0] && e[1] < t;
	}
	function ir(e, t) {
		if (e[0] > e[1]) return [null, null];
		let r = tr(e);
		if (t) {
			if (2 === r) return [e, null];
			let t = Math.floor(r / 2);
			return [[e[0], e[0] + t], [e[0] + t, e[1]]];
		}
		if (1 === r) return [e, null];
		let i = Math.floor(r / 2) - 1;
		return [[e[0], e[0] + i], [e[0] + i + 1, e[1]]];
	}
	function nr(e, t) {
		if (!rr(t, e.length)) return [
			Infinity,
			Infinity,
			-Infinity,
			-Infinity
		];
		let r = [
			Infinity,
			Infinity,
			-Infinity,
			-Infinity
		];
		for (let i = t[0]; i <= t[1]; ++i) Pt(r, e[i]);
		return r;
	}
	function ar(e) {
		let t = [
			Infinity,
			Infinity,
			-Infinity,
			-Infinity
		];
		for (let r of e) for (let e of r) Pt(t, e);
		return t;
	}
	function sr(e) {
		return e[0] !== -Infinity && e[1] !== -Infinity && e[2] !== Infinity && e[3] !== Infinity;
	}
	function or(e, t, r) {
		if (!sr(e) || !sr(t)) return NaN;
		let i = 0, n = 0;
		return e[2] < t[0] && (i = t[0] - e[2]), e[0] > t[2] && (i = e[0] - t[2]), e[1] > t[3] && (n = e[1] - t[3]), e[3] < t[1] && (n = t[1] - e[3]), r.distance([0, 0], [i, n]);
	}
	function lr(e, t, r) {
		let i = r.pointOnLine(t, e);
		return r.distance(e, i.point);
	}
	function ur(e, t, r, i, n) {
		let a = Math.min(lr(e, [r, i], n), lr(t, [r, i], n)), s = Math.min(lr(r, [e, t], n), lr(i, [e, t], n));
		return Math.min(a, s);
	}
	function hr(e, t, r, i, n) {
		if (!rr(t, e.length) || !rr(i, r.length)) return Infinity;
		let a = Infinity;
		for (let s = t[0]; s < t[1]; ++s) {
			let t = e[s], o = e[s + 1];
			for (let e = i[0]; e < i[1]; ++e) {
				let i = r[e], s = r[e + 1];
				if (Ot(t, o, i, s)) return 0;
				a = Math.min(a, ur(t, o, i, s, n));
			}
		}
		return a;
	}
	function cr(e, t, r, i, n) {
		if (!rr(t, e.length) || !rr(i, r.length)) return NaN;
		let a = Infinity;
		for (let s = t[0]; s <= t[1]; ++s) for (let t = i[0]; t <= i[1]; ++t) if (a = Math.min(a, n.distance(e[s], r[t])), 0 === a) return a;
		return a;
	}
	function pr(e, t, r) {
		if ($t(e, t, !0)) return 0;
		let i = Infinity;
		for (let n of t) {
			let t = n[0], a = n[n.length - 1];
			if (t !== a && (i = Math.min(i, lr(e, [a, t], r)), 0 === i)) return i;
			let s = r.pointOnLine(n, e);
			if (i = Math.min(i, r.distance(e, s.point)), 0 === i) return i;
		}
		return i;
	}
	function fr(e, t, r, i) {
		if (!rr(t, e.length)) return NaN;
		for (let a = t[0]; a <= t[1]; ++a) if ($t(e[a], r, !0)) return 0;
		let n = Infinity;
		for (let a = t[0]; a < t[1]; ++a) {
			let t = e[a], s = e[a + 1];
			for (let e of r) for (let r = 0, a = e.length, o = a - 1; r < a; o = r++) {
				let a = e[o], l = e[r];
				if (Ot(t, s, a, l)) return 0;
				n = Math.min(n, ur(t, s, a, l, i));
			}
		}
		return n;
	}
	function dr(e, t) {
		for (let r of e) for (let e of r) if ($t(e, t, !0)) return !0;
		return !1;
	}
	function yr(e, t, r, i = Infinity) {
		let n = ar(e), a = ar(t);
		if (i !== Infinity && or(n, a, r) >= i) return i;
		if (zt(n, a)) {
			if (dr(e, t)) return 0;
		} else if (dr(t, e)) return 0;
		let s = Infinity;
		for (let o of e) for (let e = 0, i = o.length, n = i - 1; e < i; n = e++) {
			let i = o[n], a = o[e];
			for (let e of t) for (let t = 0, n = e.length, o = n - 1; t < n; o = t++) {
				let n = e[o], l = e[t];
				if (Ot(i, a, n, l)) return 0;
				s = Math.min(s, ur(i, a, n, l, r));
			}
		}
		return s;
	}
	function mr(e, t, r, i, n, a) {
		if (!a) return;
		let s = or(nr(i, a), n, r);
		s < t && e.push([
			s,
			a,
			[0, 0]
		]);
	}
	function gr(e, t, r, i, n, a, s) {
		if (!a || !s) return;
		let o = or(nr(i, a), nr(n, s), r);
		o < t && e.push([
			o,
			a,
			s
		]);
	}
	function xr(e, t, r, i, n = Infinity) {
		let a = Math.min(i.distance(e[0], r[0][0]), n);
		if (0 === a) return a;
		let s = new Kt([[
			0,
			[0, e.length - 1],
			[0, 0]
		]], er), o = ar(r);
		for (; s.length > 0;) {
			let n = s.pop();
			if (n[0] >= a) continue;
			let l = n[1], u = t ? 50 : 100;
			if (tr(l) <= u) {
				if (!rr(l, e.length)) return NaN;
				if (t) {
					let t = fr(e, l, r, i);
					if (isNaN(t) || 0 === t) return t;
					a = Math.min(a, t);
				} else for (let t = l[0]; t <= l[1]; ++t) {
					let n = pr(e[t], r, i);
					if (a = Math.min(a, n), 0 === a) return 0;
				}
			} else {
				let r = ir(l, t);
				mr(s, a, i, e, o, r[0]), mr(s, a, i, e, o, r[1]);
			}
		}
		return a;
	}
	function vr(e, t, r, i, n, a = Infinity) {
		let s = Math.min(a, n.distance(e[0], r[0]));
		if (0 === s) return s;
		let o = new Kt([[
			0,
			[0, e.length - 1],
			[0, r.length - 1]
		]], er);
		for (; o.length > 0;) {
			let a = o.pop();
			if (a[0] >= s) continue;
			let l = a[1], u = a[2], h = t ? 50 : 100, c = i ? 50 : 100;
			if (tr(l) <= h && tr(u) <= c) {
				if (!rr(l, e.length) && rr(u, r.length)) return NaN;
				let a;
				if (t && i) a = hr(e, l, r, u, n), s = Math.min(s, a);
				else if (t && !i) {
					let t = e.slice(l[0], l[1] + 1);
					for (let e = u[0]; e <= u[1]; ++e) if (a = lr(r[e], t, n), s = Math.min(s, a), 0 === s) return s;
				} else if (!t && i) {
					let t = r.slice(u[0], u[1] + 1);
					for (let r = l[0]; r <= l[1]; ++r) if (a = lr(e[r], t, n), s = Math.min(s, a), 0 === s) return s;
				} else a = cr(e, l, r, u, n), s = Math.min(s, a);
			} else {
				let a = ir(l, t), h = ir(u, i);
				gr(o, s, n, e, r, a[0], h[0]), gr(o, s, n, e, r, a[0], h[1]), gr(o, s, n, e, r, a[1], h[0]), gr(o, s, n, e, r, a[1], h[1]);
			}
		}
		return s;
	}
	function br(e) {
		return "MultiPolygon" === e.type ? e.coordinates.map((e) => ({
			type: "Polygon",
			coordinates: e
		})) : "MultiLineString" === e.type ? e.coordinates.map((e) => ({
			type: "LineString",
			coordinates: e
		})) : "MultiPoint" === e.type ? e.coordinates.map((e) => ({
			type: "Point",
			coordinates: e
		})) : [e];
	}
	var wr = class e {
		constructor(e, t) {
			this.type = q, this.geojson = e, this.geometries = t;
		}
		static parse(t, r) {
			if (2 !== t.length) return r.error(`'distance' expression requires exactly one argument, but found ${t.length - 1} instead.`);
			if (We(t[1])) {
				let r = t[1];
				if ("FeatureCollection" === r.type) return new e(r, r.features.map((e) => br(e.geometry)).flat());
				if ("Feature" === r.type) return new e(r, br(r.geometry));
				if ("type" in r && "coordinates" in r) return new e(r, br(r));
			}
			return r.error("'distance' expression requires valid geojson object that contains polygon geometry type.");
		}
		evaluate(e) {
			if (null != e.geometry() && null != e.canonicalID()) {
				if ("Point" === e.geometryType()) return function(e, t) {
					let r = e.geometry(), i = r.flat().map((t) => Ct([t.x, t.y], e.canonical));
					if (0 === r.length) return NaN;
					let n = new Qt(i[0][1]), a = Infinity;
					for (let s of t) {
						switch (s.type) {
							case "Point":
								a = Math.min(a, vr(i, !1, [s.coordinates], !1, n, a));
								break;
							case "LineString":
								a = Math.min(a, vr(i, !1, s.coordinates, !0, n, a));
								break;
							case "Polygon": a = Math.min(a, xr(i, !1, s.coordinates, n, a));
						}
						if (0 === a) return a;
					}
					return a;
				}(e, this.geometries);
				if ("LineString" === e.geometryType()) return function(e, t) {
					let r = e.geometry(), i = r.flat().map((t) => Ct([t.x, t.y], e.canonical));
					if (0 === r.length) return NaN;
					let n = new Qt(i[0][1]), a = Infinity;
					for (let s of t) {
						switch (s.type) {
							case "Point":
								a = Math.min(a, vr(i, !0, [s.coordinates], !1, n, a));
								break;
							case "LineString":
								a = Math.min(a, vr(i, !0, s.coordinates, !0, n, a));
								break;
							case "Polygon": a = Math.min(a, xr(i, !0, s.coordinates, n, a));
						}
						if (0 === a) return a;
					}
					return a;
				}(e, this.geometries);
				if ("Polygon" === e.geometryType()) return function(e, t) {
					let r = e.geometry();
					if (0 === r.length || 0 === r[0].length) return NaN;
					let i = ut(r, 0).map((t) => t.map((t) => t.map((t) => Ct([t.x, t.y], e.canonical)))), n = new Qt(i[0][0][0][1]), a = Infinity;
					for (let s of t) for (let e of i) {
						switch (s.type) {
							case "Point":
								a = Math.min(a, xr([s.coordinates], !1, e, n, a));
								break;
							case "LineString":
								a = Math.min(a, xr(s.coordinates, !0, e, n, a));
								break;
							case "Polygon": a = Math.min(a, yr(e, s.coordinates, n, a));
						}
						if (0 === a) return a;
					}
					return a;
				}(e, this.geometries);
			}
			return NaN;
		}
		eachChild() {}
		outputDefined() {
			return !0;
		}
	}, _r = class e {
		constructor(e) {
			this.key = e, this.type = H;
		}
		static parse(t, r) {
			if (2 !== t.length) return r.error(`Expected 1 argument, but found ${t.length - 1} instead.`);
			let i = t[1];
			return null == i ? r.error("Global state property must be defined.") : "string" == typeof i ? new e(i) : r.error(`Global state property must be string, but found ${typeof t[1]} instead.`);
		}
		evaluate(e) {
			let t = e.globals?.globalState;
			return t && 0 !== Object.keys(t).length ? Ee(t, this.key) ?? null : null;
		}
		eachChild() {}
		outputDefined() {
			return !1;
		}
	};
	const Dr = {
		"==": _t,
		"!=": Dt,
		">": At,
		"<": St,
		">=": Ft,
		"<=": Et,
		array: ft,
		at: class e {
			constructor(e, t, r, i) {
				this.type = e, this.index = t, this.input = r, this.key = i;
			}
			static parse(t, r) {
				if (3 !== t.length) return r.error(`Expected 2 arguments, but found ${t.length - 1} instead.`);
				let i = r.parse(t[1], 1, q), n = r.parse(t[2], 2, ne(r.expectedType || H));
				if (!i || !n) return null;
				let a = n.type;
				return new e(a.itemType, i, n, r.key);
			}
			evaluate(e) {
				let t = this.index.evaluate(e), r = this.input.evaluate(e);
				if (t < 0) throw new Ne(`Array index out of bounds: ${t} < 0.`, this.key);
				if (t >= r.length) throw new Ne(`Array index out of bounds: ${t} > ${r.length - 1}.`, this.key);
				if (t !== Math.floor(t)) throw new Ne(`Array index must be an integer, but found ${t} instead.`, this.key);
				return r[t];
			}
			eachChild(e) {
				e(this.index), e(this.input);
			}
			outputDefined() {
				return !1;
			}
		},
		boolean: ft,
		case: class e {
			constructor(e, t, r) {
				this.type = e, this.branches = t, this.otherwise = r;
			}
			static parse(t, r) {
				if (t.length < 4) return r.error(`Expected at least 3 arguments, but found only ${t.length - 1}.`);
				if (t.length % 2 != 0) return r.error("Expected an odd number of arguments.");
				let i;
				r.expectedType && "value" !== r.expectedType.kind && (i = r.expectedType);
				let n = [];
				for (let e = 1; e < t.length - 1; e += 2) {
					let a = r.parse(t[e], e, X);
					if (!a) return null;
					let s = r.parse(t[e + 1], e + 1, i);
					if (!s) return null;
					n.push([a, s]), i || (i = s.type);
				}
				let a = r.parse(t[t.length - 1], t.length - 1, i);
				if (!a) return null;
				if (!i) throw Error("Can't infer output type");
				return new e(i, n, a);
			}
			evaluate(e) {
				for (let [t, r] of this.branches) if (t.evaluate(e)) return r.evaluate(e);
				return this.otherwise.evaluate(e);
			}
			eachChild(e) {
				for (let [t, r] of this.branches) e(t), e(r);
				e(this.otherwise);
			}
			outputDefined() {
				return this.branches.every(([e, t]) => t.outputDefined()) && this.otherwise.outputDefined();
			}
		},
		coalesce: xt,
		collator: kt,
		format: at,
		image: class e {
			constructor(e) {
				this.type = re, this.input = e;
			}
			static parse(t, r) {
				if (2 !== t.length) return r.error("Expected two arguments.");
				let i = r.parse(t[1], 1, G);
				return i ? new e(i) : r.error("No image name provided.");
			}
			evaluate(e) {
				let t = this.input.evaluate(e), r = qe.fromString(t);
				return r && e.availableImages && (r.available = e.availableImages.indexOf(t) > -1), r;
			}
			eachChild(e) {
				e(this.input);
			}
			outputDefined() {
				return !1;
			}
		},
		in: class e {
			constructor(e, t, r) {
				this.needle = e, this.haystack = t, this.key = r, this.type = X;
			}
			static parse(t, r) {
				if (3 !== t.length) return r.error(`Expected 2 arguments, but found ${t.length - 1} instead.`);
				let i = r.parse(t[1], 1, H), n = r.parse(t[2], 2, H);
				return i && n ? le(i.type, [
					X,
					G,
					q,
					j,
					H
				]) ? new e(i, n, r.key) : r.error(`Expected first argument to be of type boolean, string, number or null, but found ${ae(i.type)} instead`) : null;
			}
			evaluate(e) {
				let t = this.needle.evaluate(e), r = this.haystack.evaluate(e);
				if (!r) return !1;
				if (!ue(t, [
					"boolean",
					"string",
					"number",
					"null"
				])) throw new Ne(`Expected first argument to be of type boolean, string, number or null, but found ${ae(Ze(t))} instead.`, this.key);
				if (!ue(r, ["string", "array"])) throw new Ne(`Expected second argument to be of type array or string, but found ${ae(Ze(r))} instead.`, this.key);
				return r.indexOf(t) >= 0;
			}
			eachChild(e) {
				e(this.needle), e(this.haystack);
			}
			outputDefined() {
				return !0;
			}
		},
		"index-of": class e {
			constructor(e, t, r, i) {
				this.needle = e, this.haystack = t, this.key = r, this.fromIndex = i, this.type = q;
			}
			static parse(t, r) {
				if (t.length <= 2 || t.length >= 5) return r.error(`Expected 2 or 3 arguments, but found ${t.length - 1} instead.`);
				let i = r.parse(t[1], 1, H), n = r.parse(t[2], 2, H);
				if (!i || !n) return null;
				if (!le(i.type, [
					X,
					G,
					q,
					j,
					H
				])) return r.error(`Expected first argument to be of type boolean, string, number or null, but found ${ae(i.type)} instead`);
				if (4 === t.length) {
					let a = r.parse(t[3], 3, q);
					return a ? new e(i, n, r.key, a) : null;
				}
				return new e(i, n, r.key);
			}
			evaluate(e) {
				let t, r = this.needle.evaluate(e), i = this.haystack.evaluate(e);
				if (!ue(r, [
					"boolean",
					"string",
					"number",
					"null"
				])) throw new Ne(`Expected first argument to be of type boolean, string, number or null, but found ${ae(Ze(r))} instead.`, this.key);
				if (this.fromIndex && (t = this.fromIndex.evaluate(e)), ue(i, ["string"])) {
					let e = i.indexOf(r, t);
					return -1 === e ? -1 : [...i.slice(0, e)].length;
				}
				if (ue(i, ["array"])) return i.indexOf(r, t);
				throw new Ne(`Expected second argument to be of type array or string, but found ${ae(Ze(i))} instead.`, this.key);
			}
			eachChild(e) {
				e(this.needle), e(this.haystack), this.fromIndex && e(this.fromIndex);
			}
			outputDefined() {
				return !1;
			}
		},
		interpolate: rt,
		"interpolate-hcl": rt,
		"interpolate-lab": rt,
		length: class e {
			constructor(e, t) {
				this.input = e, this.key = t, this.type = q;
			}
			static parse(t, r) {
				if (2 !== t.length) return r.error(`Expected 1 argument, but found ${t.length - 1} instead.`);
				let i = r.parse(t[1], 1);
				return i ? "array" !== i.type.kind && "string" !== i.type.kind && "value" !== i.type.kind ? r.error(`Expected argument of type string or array, but found ${ae(i.type)} instead.`) : new e(i, r.key) : null;
			}
			evaluate(e) {
				let t = this.input.evaluate(e);
				if ("string" == typeof t) return [...t].length;
				if (Array.isArray(t)) return t.length;
				throw new Ne(`Expected value to be of type string or array, but found ${ae(Ze(t))} instead.`, this.key);
			}
			eachChild(e) {
				e(this.input);
			}
			outputDefined() {
				return !1;
			}
		},
		let: mt,
		literal: Ke,
		match: class e {
			constructor(e, t, r, i, n, a) {
				this.inputType = e, this.type = t, this.input = r, this.cases = i, this.outputs = n, this.otherwise = a;
			}
			static parse(t, r) {
				if (t.length < 5) return r.error(`Expected at least 4 arguments, but found only ${t.length - 1}.`);
				if (t.length % 2 != 1) return r.error("Expected an even number of arguments.");
				let i, n;
				r.expectedType && "value" !== r.expectedType.kind && (n = r.expectedType);
				let a = {}, s = [];
				for (let e = 2; e < t.length - 1; e += 2) {
					let o = t[e], l = t[e + 1];
					Array.isArray(o) || (o = [o]);
					let u = r.concat(e);
					if (0 === o.length) return u.error("Expected at least one branch label.");
					for (let e of o) {
						if ("number" != typeof e && "string" != typeof e) return u.error("Branch labels must be numbers or strings.");
						if ("number" == typeof e && Math.abs(e) > 2 ** 53 - 1) return u.error(`Branch labels must be integers no larger than ${2 ** 53 - 1}.`);
						if ("number" == typeof e && Math.floor(e) !== e) return u.error("Numeric branch labels must be integer values.");
						if (i) {
							if (u.checkSubtype(i, Ze(e))) return null;
						} else i = Ze(e);
						if (void 0 !== a[String(e)]) return u.error("Branch labels must be unique.");
						a[String(e)] = s.length;
					}
					let h = r.parse(l, e, n);
					if (!h) return null;
					n || (n = h.type), s.push(h);
				}
				let o = r.parse(t[1], 1, H);
				if (!o) return null;
				let l = r.parse(t[t.length - 1], t.length - 1, n);
				return !l || "value" !== o.type.kind && r.concat(1).checkSubtype(i, o.type) ? null : new e(i, n, o, a, s, l);
			}
			evaluate(e) {
				let t = this.input.evaluate(e);
				return (Ze(t) === this.inputType && this.outputs[this.cases[t]] || this.otherwise).evaluate(e);
			}
			eachChild(e) {
				e(this.input), this.outputs.forEach(e), e(this.otherwise);
			}
			outputDefined() {
				return this.outputs.every((e) => e.outputDefined()) && this.otherwise.outputDefined();
			}
		},
		number: ft,
		"number-format": class e {
			constructor(e, t, r, i, n, a) {
				this.type = G, this.number = e, this.locale = t, this.currency = r, this.unit = i, this.minFractionDigits = n, this.maxFractionDigits = a;
			}
			static parse(t, r) {
				if (3 !== t.length) return r.error("Expected two arguments.");
				let i = r.parse(t[1], 1, q);
				if (!i) return null;
				let n = t[2];
				if ("object" != typeof n || Array.isArray(n)) return r.error("NumberFormat options argument must be an object.");
				let a = null;
				if (n.locale && (a = r.parse(n.locale, 1, G), !a)) return null;
				let s = null;
				if (n.currency && (s = r.parse(n.currency, 1, G), !s)) return null;
				let o = null;
				if (n.unit && (o = r.parse(n.unit, 1, G), !o)) return null;
				if (s && o) return r.error("NumberFormat options `currency` and `unit` are mutually exclusive");
				let l = null;
				if (n["min-fraction-digits"] && (l = r.parse(n["min-fraction-digits"], 1, q), !l)) return null;
				let u = null;
				return n["max-fraction-digits"] && (u = r.parse(n["max-fraction-digits"], 1, q), !u) ? null : new e(i, a, s, o, l, u);
			}
			evaluate(e) {
				return new Intl.NumberFormat(this.locale ? this.locale.evaluate(e) : [], {
					style: this.currency ? "currency" : this.unit ? "unit" : "decimal",
					currency: this.currency ? this.currency.evaluate(e) : void 0,
					unit: this.unit ? this.unit.evaluate(e) : void 0,
					minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits.evaluate(e) : void 0,
					maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits.evaluate(e) : void 0
				}).format(this.number.evaluate(e));
			}
			eachChild(e) {
				e(this.number), this.locale && e(this.locale), this.currency && e(this.currency), this.unit && e(this.unit), this.minFractionDigits && e(this.minFractionDigits), this.maxFractionDigits && e(this.maxFractionDigits);
			}
			outputDefined() {
				return !1;
			}
		},
		object: ft,
		semiliteral: class e {
			constructor(e) {
				let t = null;
				for (let r of e) {
					if (t) {
						if (t === r.type) continue;
						t = H;
						break;
					}
					t = r.type;
				}
				this.type = ne(t ?? H, e.length), this.arr = e;
			}
			static parse(t, r) {
				if (2 !== t.length) return r.error(`'semiliteral' expression requires exactly one argument, but found ${t.length - 1} instead.`);
				if (!We(t[1])) return r.error(`invalid value of type "${typeof t[1]}"`);
				let i = t[1], n = Ze(i);
				if ("array" === n.kind) {
					let t = i, n = r.concat(1), a = [];
					for (let e = 0; e < t.length; e++) {
						let r = n.parse(t[e], e, H);
						if (!r) return null;
						a.push(r);
					}
					return new e(a);
				}
				return new Ke(n, i);
			}
			evaluate(e) {
				return this.arr.map((t) => t.evaluate(e));
			}
			eachChild(e) {
				this.arr.forEach(e);
			}
			outputDefined() {
				return this.arr.every((e) => e.outputDefined());
			}
		},
		slice: class e {
			constructor(e, t, r, i, n) {
				this.type = e, this.input = t, this.beginIndex = r, this.key = i, this.endIndex = n;
			}
			static parse(t, r) {
				if (t.length <= 2 || t.length >= 5) return r.error(`Expected 2 or 3 arguments, but found ${t.length - 1} instead.`);
				let i = r.parse(t[1], 1, H), n = r.parse(t[2], 2, q);
				if (!i || !n) return null;
				if (!le(i.type, [
					ne(H),
					G,
					H
				])) return r.error(`Expected first argument to be of type array or string, but found ${ae(i.type)} instead`);
				if (4 === t.length) {
					let a = r.parse(t[3], 3, q);
					return a ? new e(i.type, i, n, r.key, a) : null;
				}
				return new e(i.type, i, n, r.key);
			}
			evaluate(e) {
				let t, r = this.input.evaluate(e), i = this.beginIndex.evaluate(e);
				if (this.endIndex && (t = this.endIndex.evaluate(e)), ue(r, ["string"])) return [...r].slice(i, t).join("");
				if (ue(r, ["array"])) return r.slice(i, t);
				throw new Ne(`Expected first argument to be of type array or string, but found ${ae(Ze(r))} instead.`, this.key);
			}
			eachChild(e) {
				e(this.input), e(this.beginIndex), this.endIndex && e(this.endIndex);
			}
			outputDefined() {
				return !1;
			}
		},
		step: tt,
		string: ft,
		"to-boolean": yt,
		"to-color": yt,
		"to-number": yt,
		"to-string": yt,
		var: gt,
		within: Ht,
		distance: wr,
		"global-state": _r
	};
	var Sr = class extends Error {
		constructor(e, t) {
			super(t), this.message = t, this.key = e;
		}
	}, Ar = class e {
		constructor(e, t = []) {
			this.parent = e, this.bindings = {};
			for (let [r, i] of t) this.bindings[r] = i;
		}
		concat(t) {
			return new e(this, t);
		}
		get(e) {
			if (this.bindings[e]) return this.bindings[e];
			if (this.parent) return this.parent.get(e);
			throw Error(`${e} not found in scope.`);
		}
		has(e) {
			return !!this.bindings[e] || !!this.parent && this.parent.has(e);
		}
	}, Er = class e {
		constructor(e, t, r = [], i, n = new Ar(), a = []) {
			this.registry = e, this.path = r, this.key = r.map((e) => `[${e}]`).join(""), this.scope = n, this.errors = a, this.expectedType = i, this._isConstant = t;
		}
		parse(e, t, r, i, n = {}) {
			return null == t ? this._parse(e, n) : this.concat(t, r, i)._parse(e, n);
		}
		_parse(e, t) {
			(null === e || "string" == typeof e || "boolean" == typeof e || "number" == typeof e) && (e = ["literal", e]);
			let r = this.key;
			function i(e, t, i) {
				return "assert" === i ? new ft(t, [e], r) : "coerce" === i ? new yt(t, [e], r) : e;
			}
			if (Array.isArray(e)) {
				if (0 === e.length) return this.error("Expected an array with at least one element. If you wanted a literal array, use [\"literal\", []].");
				let r = e[0];
				if ("string" != typeof r) return this.error(`Expression name must be a string, but found ${typeof r} instead. If you wanted a literal array, use ["literal", [...]].`, 0), null;
				let n = this.registry[r];
				if (n) {
					let r = n.parse(e, this);
					if (!r) return null;
					if (this.expectedType) {
						let e = this.expectedType, n = r.type;
						if ("string" !== e.kind && "number" !== e.kind && "boolean" !== e.kind && "object" !== e.kind && "array" !== e.kind || "value" !== n.kind) {
							if ("projectionDefinition" === e.kind && [
								"string",
								"array",
								"value"
							].includes(n.kind) || [
								"color",
								"formatted",
								"resolvedImage"
							].includes(e.kind) && ["value", "string"].includes(n.kind) || ["padding", "numberArray"].includes(e.kind) && [
								"value",
								"number",
								"array"
							].includes(n.kind) || "colorArray" === e.kind && [
								"value",
								"string",
								"array"
							].includes(n.kind) || "variableAnchorOffsetCollection" === e.kind && ["value", "array"].includes(n.kind)) r = i(r, e, t.typeAnnotation || "coerce");
							else if (this.checkSubtype(e, n)) return null;
						} else r = i(r, e, t.typeAnnotation || "assert");
					}
					if (!(r instanceof Ke) && "resolvedImage" !== r.type.kind && this._isConstant(r)) {
						let t = new Qe();
						try {
							r = new Ke(r.type, r.evaluate(t));
						} catch (e) {
							return this.error(e.message), null;
						}
					}
					return r;
				}
				return this.error(`Unknown expression "${r}". If you wanted a literal array, use ["literal", [...]].`, 0);
			}
			return void 0 === e ? this.error("'undefined' value invalid. Use null instead.") : "object" == typeof e ? this.error("Bare objects invalid. Use [\"literal\", {...}] instead.") : this.error(`Expected an array, but found ${typeof e} instead.`);
		}
		concat(t, r, i) {
			let n = "number" == typeof t ? this.path.concat(t) : this.path, a = i ? this.scope.concat(i) : this.scope;
			return new e(this.registry, this._isConstant, n, r || null, a, this.errors);
		}
		error(e, ...t) {
			let r = `${this.key}${t.map((e) => `[${e}]`).join("")}`;
			this.errors.push(new Sr(r, e));
		}
		checkSubtype(e, t) {
			let r = oe(e, t);
			return r && this.error(r), r;
		}
	}, Fr = class e {
		constructor(e, t, r, i, n) {
			this.name = e, this.type = t, this._evaluate = r, this.args = i, this.key = n;
		}
		evaluate(e) {
			return this._evaluate(e, this.args, this.key);
		}
		eachChild(e) {
			this.args.forEach(e);
		}
		outputDefined() {
			return !1;
		}
		static parse(t, r) {
			let i = t[0], n = e.definitions[i];
			if (!n) return r.error(`Unknown expression "${i}". If you wanted a literal array, use ["literal", [...]].`, 0);
			let a = Array.isArray(n) ? n[0] : n.type, s = Array.isArray(n) ? [[n[1], n[2]]] : n.overloads, o = s.filter(([e]) => !Array.isArray(e) || e.length === t.length - 1), l = null;
			for (let [u, h] of o) {
				l = new Er(r.registry, Br, r.path, null, r.scope);
				let n = [], s = !1;
				for (let e = 1; e < t.length; e++) {
					let r = t[e], i = Array.isArray(u) ? u[e - 1] : u.type, a = l.parse(r, 1 + n.length, i);
					if (!a) {
						s = !0;
						break;
					}
					n.push(a);
				}
				if (!s) if (Array.isArray(u) && u.length !== n.length) l.error(`Expected ${u.length} arguments, but found ${n.length} instead.`);
				else {
					for (let e = 0; e < n.length; e++) {
						let t = Array.isArray(u) ? u[e] : u.type, r = n[e];
						l.concat(e + 1).checkSubtype(t, r.type);
					}
					if (0 === l.errors.length) return new e(i, a, h, n, r.key);
				}
			}
			if (1 === o.length) r.errors.push(...l.errors);
			else {
				let e = (o.length ? o : s).map(([e]) => function(e) {
					return Array.isArray(e) ? `(${e.map(ae).join(", ")})` : `(${ae(e.type)}...)`;
				}(e)).join(" | "), i = [];
				for (let n = 1; n < t.length; n++) {
					let e = r.parse(t[n], 1 + i.length);
					if (!e) return null;
					i.push(ae(e.type));
				}
				r.error(`Expected arguments of type ${e}, but found (${i.join(", ")}) instead.`);
			}
			return null;
		}
		static register(t, r) {
			e.definitions = r;
			for (let i in r) t[i] = e;
		}
	};
	function kr(e, [t, r, i, n], a) {
		t = t.evaluate(e), r = r.evaluate(e), i = i.evaluate(e);
		let s = n ? n.evaluate(e) : 1, o = Ye(t, r, i, s);
		if (o) throw new Ne(o, a);
		return new Pe(t / 255, r / 255, i / 255, s, !1);
	}
	function Ir(e, t) {
		return e in t && void 0 !== t[e];
	}
	function Tr(e, t) {
		let r = t[e];
		return void 0 === r ? null : r;
	}
	function Cr(e) {
		return { type: e };
	}
	function Br(e) {
		if (e instanceof gt) return Br(e.boundExpression);
		if (e instanceof Fr && "error" === e.name || e instanceof kt || e instanceof Ht || e instanceof wr || e instanceof _r) return !1;
		let t = e instanceof yt || e instanceof ft, r = !0;
		return e.eachChild((e) => {
			r && (r = t ? Br(e) : e instanceof Ke);
		}), !!r && Mr(e) && zr(e, [
			"zoom",
			"heatmap-density",
			"elevation",
			"line-progress",
			"accumulated",
			"is-supported-script"
		]);
	}
	function Mr(e) {
		if (e instanceof Fr && ("get" === e.name && 1 === e.args.length || "feature-state" === e.name || "has" === e.name && 1 === e.args.length || "properties" === e.name || "geometry-type" === e.name || "id" === e.name || /^filter-/.test(e.name)) || e instanceof Ht || e instanceof wr) return !1;
		let t = !0;
		return e.eachChild((e) => {
			t && !Mr(e) && (t = !1);
		}), t;
	}
	function Pr(e) {
		if (e instanceof Fr && "feature-state" === e.name) return !1;
		let t = !0;
		return e.eachChild((e) => {
			t && !Pr(e) && (t = !1);
		}), t;
	}
	function zr(e, t) {
		if (e instanceof Fr && t.indexOf(e.name) >= 0) return !1;
		let r = !0;
		return e.eachChild((e) => {
			r && !zr(e, t) && (r = !1);
		}), r;
	}
	function Lr(e) {
		return "data-driven" === e["property-type"] || "cross-faded-data-driven" === e["property-type"];
	}
	function Vr(e) {
		return !!e.expression && e.expression.parameters.indexOf("zoom") > -1;
	}
	function Or(e) {
		return !!e.expression && e.expression.interpolated;
	}
	Fr.register(Dr, {
		error: [
			{ kind: "error" },
			[G],
			(e, [t], r) => {
				throw new Ne(t.evaluate(e), r);
			}
		],
		typeof: [
			G,
			[H],
			(e, [t]) => ae(Ze(t.evaluate(e)))
		],
		"to-rgba": [
			ne(q, 4),
			[Y],
			(e, [t]) => {
				let [r, i, n, a] = t.evaluate(e).rgb;
				return [
					255 * r,
					255 * i,
					255 * n,
					a
				];
			}
		],
		rgb: [
			Y,
			[
				q,
				q,
				q
			],
			kr
		],
		rgba: [
			Y,
			[
				q,
				q,
				q,
				q
			],
			kr
		],
		has: {
			type: X,
			overloads: [[[G], (e, [t]) => Ir(t.evaluate(e), e.properties())], [[G, Z], (e, [t, r]) => Ir(t.evaluate(e), r.evaluate(e))]]
		},
		get: {
			type: H,
			overloads: [[[G], (e, [t]) => Tr(t.evaluate(e), e.properties())], [[G, Z], (e, [t, r]) => Tr(t.evaluate(e), r.evaluate(e))]]
		},
		"feature-state": [
			H,
			[G],
			(e, [t]) => Tr(t.evaluate(e), e.featureState || {})
		],
		properties: [
			Z,
			[],
			(e) => e.properties()
		],
		"geometry-type": [
			G,
			[],
			(e) => e.geometryType()
		],
		id: [
			H,
			[],
			(e) => e.id()
		],
		zoom: [
			q,
			[],
			(e) => e.globals.zoom
		],
		"heatmap-density": [
			q,
			[],
			(e) => e.globals.heatmapDensity || 0
		],
		elevation: [
			q,
			[],
			(e) => e.globals.elevation || 0
		],
		"line-progress": [
			q,
			[],
			(e) => e.globals.lineProgress || 0
		],
		accumulated: [
			H,
			[],
			(e) => void 0 === e.globals.accumulated ? null : e.globals.accumulated
		],
		"+": [
			q,
			Cr(q),
			(e, t) => {
				let r = 0;
				for (let i of t) r += i.evaluate(e);
				return r;
			}
		],
		"*": [
			q,
			Cr(q),
			(e, t) => {
				let r = 1;
				for (let i of t) r *= i.evaluate(e);
				return r;
			}
		],
		"-": {
			type: q,
			overloads: [[[q, q], (e, [t, r]) => t.evaluate(e) - r.evaluate(e)], [[q], (e, [t]) => -t.evaluate(e)]]
		},
		"/": [
			q,
			[q, q],
			(e, [t, r]) => t.evaluate(e) / r.evaluate(e)
		],
		"%": [
			q,
			[q, q],
			(e, [t, r]) => t.evaluate(e) % r.evaluate(e)
		],
		ln2: [
			q,
			[],
			() => Math.LN2
		],
		pi: [
			q,
			[],
			() => Math.PI
		],
		e: [
			q,
			[],
			() => Math.E
		],
		"^": [
			q,
			[q, q],
			(e, [t, r]) => t.evaluate(e) ** +r.evaluate(e)
		],
		sqrt: [
			q,
			[q],
			(e, [t]) => Math.sqrt(t.evaluate(e))
		],
		log10: [
			q,
			[q],
			(e, [t]) => Math.log(t.evaluate(e)) / Math.LN10
		],
		ln: [
			q,
			[q],
			(e, [t]) => Math.log(t.evaluate(e))
		],
		log2: [
			q,
			[q],
			(e, [t]) => Math.log(t.evaluate(e)) / Math.LN2
		],
		sin: [
			q,
			[q],
			(e, [t]) => Math.sin(t.evaluate(e))
		],
		cos: [
			q,
			[q],
			(e, [t]) => Math.cos(t.evaluate(e))
		],
		tan: [
			q,
			[q],
			(e, [t]) => Math.tan(t.evaluate(e))
		],
		asin: [
			q,
			[q],
			(e, [t]) => Math.asin(t.evaluate(e))
		],
		acos: [
			q,
			[q],
			(e, [t]) => Math.acos(t.evaluate(e))
		],
		atan: [
			q,
			[q],
			(e, [t]) => Math.atan(t.evaluate(e))
		],
		min: [
			q,
			Cr(q),
			(e, t) => Math.min(...t.map((t) => t.evaluate(e)))
		],
		max: [
			q,
			Cr(q),
			(e, t) => Math.max(...t.map((t) => t.evaluate(e)))
		],
		abs: [
			q,
			[q],
			(e, [t]) => Math.abs(t.evaluate(e))
		],
		round: [
			q,
			[q],
			(e, [t]) => {
				let r = t.evaluate(e);
				return r < 0 ? -Math.round(-r) : Math.round(r);
			}
		],
		floor: [
			q,
			[q],
			(e, [t]) => Math.floor(t.evaluate(e))
		],
		ceil: [
			q,
			[q],
			(e, [t]) => Math.ceil(t.evaluate(e))
		],
		"filter-==": [
			X,
			[G, H],
			(e, [t, r]) => e.properties()[t.value] === r.value
		],
		"filter-id-==": [
			X,
			[H],
			(e, [t]) => e.id() === t.value
		],
		"filter-type-==": [
			X,
			[G],
			(e, [t]) => e.geometryType() === t.value
		],
		"filter-<": [
			X,
			[G, H],
			(e, [t, r]) => {
				let i = e.properties()[t.value], n = r.value;
				return typeof i == typeof n && i < n;
			}
		],
		"filter-id-<": [
			X,
			[H],
			(e, [t]) => {
				let r = e.id(), i = t.value;
				return typeof r == typeof i && r < i;
			}
		],
		"filter->": [
			X,
			[G, H],
			(e, [t, r]) => {
				let i = e.properties()[t.value], n = r.value;
				return typeof i == typeof n && i > n;
			}
		],
		"filter-id->": [
			X,
			[H],
			(e, [t]) => {
				let r = e.id(), i = t.value;
				return typeof r == typeof i && r > i;
			}
		],
		"filter-<=": [
			X,
			[G, H],
			(e, [t, r]) => {
				let i = e.properties()[t.value], n = r.value;
				return typeof i == typeof n && i <= n;
			}
		],
		"filter-id-<=": [
			X,
			[H],
			(e, [t]) => {
				let r = e.id(), i = t.value;
				return typeof r == typeof i && r <= i;
			}
		],
		"filter->=": [
			X,
			[G, H],
			(e, [t, r]) => {
				let i = e.properties()[t.value], n = r.value;
				return typeof i == typeof n && i >= n;
			}
		],
		"filter-id->=": [
			X,
			[H],
			(e, [t]) => {
				let r = e.id(), i = t.value;
				return typeof r == typeof i && r >= i;
			}
		],
		"filter-has": [
			X,
			[H],
			(e, [t]) => {
				let r = t.value, i = e.properties();
				return r in i && void 0 !== i[r];
			}
		],
		"filter-has-id": [
			X,
			[],
			(e) => null !== e.id() && void 0 !== e.id()
		],
		"filter-type-in": [
			X,
			[ne(G)],
			(e, [t]) => t.value.indexOf(e.geometryType()) >= 0
		],
		"filter-id-in": [
			X,
			[ne(H)],
			(e, [t]) => t.value.indexOf(e.id()) >= 0
		],
		"filter-in-small": [
			X,
			[G, ne(H)],
			(e, [t, r]) => r.value.indexOf(e.properties()[t.value]) >= 0
		],
		"filter-in-large": [
			X,
			[G, ne(H)],
			(e, [t, r]) => function(e, t, r, i) {
				for (; r <= i;) {
					let n = r + i >> 1;
					if (t[n] === e) return !0;
					t[n] > e ? i = n - 1 : r = n + 1;
				}
				return !1;
			}(e.properties()[t.value], r.value, 0, r.value.length - 1)
		],
		all: {
			type: X,
			overloads: [[[X, X], (e, [t, r]) => t.evaluate(e) && r.evaluate(e)], [Cr(X), (e, t) => {
				for (let r of t) if (!r.evaluate(e)) return !1;
				return !0;
			}]]
		},
		any: {
			type: X,
			overloads: [[[X, X], (e, [t, r]) => t.evaluate(e) || r.evaluate(e)], [Cr(X), (e, t) => {
				for (let r of t) if (r.evaluate(e)) return !0;
				return !1;
			}]]
		},
		"!": [
			X,
			[X],
			(e, [t]) => !t.evaluate(e)
		],
		"is-supported-script": [
			X,
			[G],
			(e, [t]) => {
				let r = e.globals && e.globals.isSupportedScript;
				return !r || r(t.evaluate(e));
			}
		],
		upcase: [
			G,
			[G],
			(e, [t]) => t.evaluate(e).toUpperCase()
		],
		downcase: [
			G,
			[G],
			(e, [t]) => t.evaluate(e).toLowerCase()
		],
		concat: [
			G,
			Cr(H),
			(e, t) => t.map((t) => He(t.evaluate(e))).join("")
		],
		split: [
			ne(G),
			[G, G],
			(e, [t, r]) => t.evaluate(e).split(r.evaluate(e))
		],
		join: [
			G,
			[ne(G), G],
			(e, [t, r]) => t.evaluate(e).join(r.evaluate(e))
		],
		"resolved-locale": [
			G,
			[K],
			(e, [t]) => t.evaluate(e).resolvedLocale()
		]
	});
	const Rr = /^(.*)-transition$/;
	function $r(e, ...t) {
		for (let r of t) for (let t in r) e[t] = r[t];
		return e;
	}
	function Nr(e) {
		return e instanceof Number ? "number" : e instanceof String ? "string" : e instanceof Boolean ? "boolean" : Array.isArray(e) ? "array" : null === e ? "null" : typeof e;
	}
	function Ur(e) {
		return "object" == typeof e && !!e && !Array.isArray(e) && Ze(e) === Z;
	}
	function jr(e) {
		return e;
	}
	function qr(e, t) {
		let r = e.stops && "object" == typeof e.stops[0][0], i = r || void 0 !== e.property, n = r || !i, a = e.type || (Or(t) ? "exponential" : "interval"), s = function(e) {
			switch (e.type) {
				case "color": return Pe.parse;
				case "padding": return Oe.parse;
				case "numberArray": return Re.parse;
				case "colorArray": return $e.parse;
				default: return null;
			}
		}(t);
		if (s && ((e = $r({}, e)).stops && (e.stops = e.stops.map((e) => [e[0], s(e[1])])), e.default ? e.default = s(e.default) : e.default = s(t.default)), e.colorSpace && !function(e) {
			return "rgb" === e || "hcl" === e || "lab" === e;
		}(e.colorSpace)) throw Error(`Unknown color space: "${e.colorSpace}"`);
		let o, l, u = function(e) {
			switch (e) {
				case "exponential": return Wr;
				case "interval": return Yr;
				case "categorical": return Xr;
				case "identity": return Zr;
				default: throw Error(`Unknown function type "${e}"`);
			}
		}(a);
		if ("categorical" === a) {
			o = Object.create(null);
			for (let t of e.stops) o[t[0]] = t[1];
			l = typeof e.stops[0][0];
		}
		if (r) {
			let r = {}, i = [];
			for (let t = 0; t < e.stops.length; t++) {
				let n = e.stops[t], a = n[0].zoom;
				void 0 === r[a] && (r[a] = {
					zoom: a,
					type: e.type,
					property: e.property,
					default: e.default,
					stops: []
				}, i.push(a)), r[a].stops.push([n[0].value, n[1]]);
			}
			let n = [];
			for (let e of i) n.push([r[e].zoom, qr(r[e], t)]);
			let a = { name: "linear" };
			return {
				kind: "composite",
				interpolationType: a,
				interpolationFactor: rt.interpolationFactor.bind(void 0, a),
				zoomStops: n.map((e) => e[0]),
				evaluate: ({ zoom: r }, i) => Wr({
					stops: n,
					base: e.base
				}, t, r).evaluate(r, i)
			};
		}
		if (n) {
			let r = "exponential" === a ? {
				name: "exponential",
				base: void 0 === e.base ? 1 : e.base
			} : null;
			return {
				kind: "camera",
				interpolationType: r,
				interpolationFactor: rt.interpolationFactor.bind(void 0, r),
				zoomStops: e.stops.map((e) => e[0]),
				evaluate: ({ zoom: r }) => u(e, t, r, o, l)
			};
		}
		return {
			kind: "source",
			evaluate(r, i) {
				let n = i && i.properties ? i.properties[e.property] : void 0;
				return void 0 === n ? Gr(e.default, t.default) : u(e, t, n, o, l);
			}
		};
	}
	function Gr(e, t, r) {
		return void 0 !== e ? e : void 0 !== t ? t : void 0 !== r ? r : void 0;
	}
	function Xr(e, t, r, i, n) {
		return Gr(typeof r === n ? i[r] : void 0, e.default, t.default);
	}
	function Yr(e, t, r) {
		if ("number" !== Nr(r)) return Gr(e.default, t.default);
		let i = e.stops.length;
		if (1 === i || r <= e.stops[0][0]) return e.stops[0][1];
		if (r >= e.stops[i - 1][0]) return e.stops[i - 1][1];
		let n = et(e.stops.map((e) => e[0]), r, "");
		return e.stops[n][1];
	}
	function Wr(e, t, r) {
		let i = void 0 === e.base ? 1 : e.base;
		if ("number" !== Nr(r)) return Gr(e.default, t.default);
		let n = e.stops.length;
		if (1 === n || r <= e.stops[0][0]) return e.stops[0][1];
		if (r >= e.stops[n - 1][0]) return e.stops[n - 1][1];
		let a = et(e.stops.map((e) => e[0]), r, ""), s = function(e, t, r, i) {
			let n = i - r, a = e - r;
			return 0 === n ? 0 : 1 === t ? a / n : (t ** +a - 1) / (t ** +n - 1);
		}(r, i, e.stops[a][0], e.stops[a + 1][0]), o = e.stops[a][1], l = e.stops[a + 1][1], u = nt[t.type] || jr;
		return "function" == typeof o.evaluate ? { evaluate(...t) {
			let r = o.evaluate.apply(void 0, t), i = l.evaluate.apply(void 0, t);
			if (void 0 !== r && void 0 !== i) return u(r, i, s, e.colorSpace);
		} } : u(o, l, s, e.colorSpace);
	}
	function Zr(e, t, r) {
		switch (t.type) {
			case "color":
				r = Pe.parse(r);
				break;
			case "formatted":
				r = Ve.fromString(r.toString());
				break;
			case "resolvedImage":
				r = qe.fromString(r.toString());
				break;
			case "padding":
				r = Oe.parse(r);
				break;
			case "colorArray":
				r = $e.parse(r);
				break;
			case "numberArray":
				r = Re.parse(r);
				break;
			default: Nr(r) !== t.type && ("enum" !== t.type || !t.values[r]) && (r = void 0);
		}
		return Gr(r, e.default, t.default);
	}
	function Hr(e) {
		return {
			result: "success",
			value: e
		};
	}
	function Kr(e) {
		return {
			result: "error",
			value: e
		};
	}
	var Jr = class {
		constructor(e, t, r, i) {
			this.expression = e, this._warningHistory = {}, this._evaluator = new Qe(), this._defaultValue = r ? ui(r) : null, this._enumValues = r && "enum" === r.type ? r.values : null, this._globalState = i, this._rootKey = t;
		}
		evaluateWithoutErrorHandling(e, t, r, i, n, a) {
			return this._globalState && (e = hi(e, this._globalState)), this._evaluator.globals = e, this._evaluator.feature = t, this._evaluator.featureState = r, this._evaluator.canonical = i, this._evaluator.availableImages = n || null, this._evaluator.formattedSection = a, this.expression.evaluate(this._evaluator);
		}
		evaluate(e, t, r, i, n, a) {
			this._globalState && (e = hi(e, this._globalState)), this._evaluator.globals = e, this._evaluator.feature = t || null, this._evaluator.featureState = r || null, this._evaluator.canonical = i, this._evaluator.availableImages = n || null, this._evaluator.formattedSection = a || null;
			try {
				let e = this.expression.evaluate(this._evaluator);
				if (null == e || "number" == typeof e && e != e) return this._defaultValue;
				if (this._enumValues && !(e in this._enumValues)) throw new Ne(`Expected value to be one of ${Object.keys(this._enumValues).map((e) => JSON.stringify(e)).join(", ")}, but found ${JSON.stringify(e)} instead.`, "");
				return e;
			} catch (e) {
				let t = e instanceof Ne ? e.path : "", r = `${t}|${e.message}`;
				return this._warningHistory[r] || (this._warningHistory[r] = !0, typeof console < "u" && console.warn(Qr(this._rootKey, t, e.message, this._defaultValue))), this._defaultValue;
			}
		}
	};
	function Qr(e, t, r, i) {
		return `${e}${t}: ${r}${null == i ? "" : ` Falling back to ${String(i)}.`}`;
	}
	function ei(e) {
		if (!e) throw Error("rootKey must identify the location of the expression in the style JSON, e.g. \"layers[3].paint.line-width\".");
	}
	function ti(e) {
		return Array.isArray(e) && e.length > 0 && "string" == typeof e[0] && e[0] in Dr;
	}
	function ri(e, t, r, i) {
		ei(t);
		let n = new Er(Dr, Br, [], r ? function(e) {
			let t = {
				color: Y,
				string: G,
				number: q,
				enum: G,
				boolean: X,
				formatted: J,
				padding: Q,
				numberArray: te,
				colorArray: ee,
				projectionDefinition: W,
				resolvedImage: re,
				variableAnchorOffsetCollection: ie
			};
			return "array" === e.type ? ne(t[e.value] || H, e.length) : t[e.type];
		}(r) : void 0), a = n.parse(e, void 0, void 0, void 0, r && "string" === r.type ? { typeAnnotation: "coerce" } : void 0);
		return a ? Hr(new Jr(a, t, r, i)) : Kr(n.errors);
	}
	var ii = class {
		constructor(e, t, r) {
			this.kind = e, this._styleExpression = t, this.isStateDependent = "constant" !== e && !Pr(t.expression), this.globalStateRefs = li(t.expression), this._globalState = r;
		}
		evaluateWithoutErrorHandling(e, t, r, i, n, a) {
			return this._globalState && (e = hi(e, this._globalState)), this._styleExpression.evaluateWithoutErrorHandling(e, t, r, i, n, a);
		}
		evaluate(e, t, r, i, n, a) {
			return this._globalState && (e = hi(e, this._globalState)), this._styleExpression.evaluate(e, t, r, i, n, a);
		}
	}, ni = class {
		constructor(e, t, r, i, n) {
			this.kind = e, this.zoomStops = r, this._styleExpression = t, this.isStateDependent = "camera" !== e && !Pr(t.expression), this.globalStateRefs = li(t.expression), this.interpolationType = i, this._globalState = n;
		}
		evaluateWithoutErrorHandling(e, t, r, i, n, a) {
			return this._globalState && (e = hi(e, this._globalState)), this._styleExpression.evaluateWithoutErrorHandling(e, t, r, i, n, a);
		}
		evaluate(e, t, r, i, n, a) {
			return this._globalState && (e = hi(e, this._globalState)), this._styleExpression.evaluate(e, t, r, i, n, a);
		}
		interpolationFactor(e, t, r) {
			return this.interpolationType ? rt.interpolationFactor(this.interpolationType, e, t, r) : 0;
		}
	};
	function ai(e, t, r, i) {
		let n = ri(e, t, r, i);
		if ("error" === n.result) return n;
		let a = n.value.expression, s = Mr(a);
		if (!s && !Lr(r)) return Kr([new Sr("", "data expressions not supported")]);
		let o = zr(a, ["zoom"]);
		if (!o && !Vr(r)) return Kr([new Sr("", "zoom expressions not supported")]);
		let l = oi(a);
		if (!l && !o) return Kr([new Sr("", "\"zoom\" expression may only be used as input to a top-level \"step\" or \"interpolate\" expression.")]);
		if (l instanceof Sr) return Kr([l]);
		if (l instanceof rt && !Or(r)) return Kr([new Sr("", "\"interpolate\" expressions cannot be used with this property")]);
		if (!l) return Hr(new ii(s ? "constant" : "source", n.value, i));
		let u = l instanceof rt ? l.interpolation : void 0;
		return Hr(new ni(s ? "camera" : "composite", n.value, l.labels, u, i));
	}
	var si = class e {
		constructor(e, t, r) {
			this.isStateDependent = !1, this.globalStateRefs = /* @__PURE__ */ new Set(), this._globalState = null, ei(t), this._parameters = e, this._specification = r, this._rootKey = t, this._defaultValue = ui(r), this._warningHistory = {};
			let i = qr(this._parameters, this._specification);
			this.kind = i.kind, this.interpolationFactor = i.interpolationFactor, this.zoomStops = i.zoomStops, this.interpolationType = i.interpolationType, this._innerEvaluate = i.evaluate;
		}
		evaluate(e, t) {
			try {
				return this._innerEvaluate(e, t);
			} catch (e) {
				let t = e instanceof Error ? e.message : String(e), r = `|${t}`;
				return this._warningHistory[r] || (this._warningHistory[r] = !0, typeof console < "u" && console.warn(Qr(this._rootKey, "", t, this._defaultValue))), this._defaultValue;
			}
		}
		static deserialize(t) {
			return new e(t._parameters, t._rootKey, t._specification);
		}
		static serialize(e) {
			return {
				_parameters: e._parameters,
				_specification: e._specification,
				_rootKey: e._rootKey
			};
		}
	};
	function oi(e) {
		let t = null;
		if (e instanceof mt) t = oi(e.result);
		else if (e instanceof xt) {
			for (let r of e.args) if (t = oi(r), t) break;
		} else (e instanceof tt || e instanceof rt) && e.input instanceof Fr && "zoom" === e.input.name && (t = e);
		return t instanceof Sr || e.eachChild((e) => {
			let r = oi(e);
			r instanceof Sr ? t = r : !t && r ? t = new Sr("", "\"zoom\" expression may only be used as input to a top-level \"step\" or \"interpolate\" expression.") : t && r && t !== r && (t = new Sr("", "Only one zoom-based \"step\" or \"interpolate\" subexpression may be used in an expression."));
		}), t;
	}
	function li(e, t = /* @__PURE__ */ new Set()) {
		return e instanceof _r && t.add(e.key), e.eachChild((e) => {
			li(e, t);
		}), t;
	}
	function ui(e) {
		if ("color" === e.type && Ur(e.default)) return new Pe(0, 0, 0, 0);
		switch (e.type) {
			case "color": return Pe.parse(e.default) || null;
			case "padding": return Oe.parse(e.default) || null;
			case "numberArray": return Re.parse(e.default) || null;
			case "colorArray": return $e.parse(e.default) || null;
			case "variableAnchorOffsetCollection": return je.parse(e.default) || null;
			case "projectionDefinition": return Ge.parse(e.default) || null;
			default: return void 0 === e.default ? null : e.default;
		}
	}
	function hi(e, t) {
		let { zoom: r, heatmapDensity: i, elevation: n, lineProgress: a, isSupportedScript: s, accumulated: o } = e ?? {};
		return {
			zoom: r,
			heatmapDensity: i,
			elevation: n,
			lineProgress: a,
			isSupportedScript: s,
			accumulated: o,
			globalState: t
		};
	}
	function ci(e) {
		if ("boolean" == typeof e) return "neutral";
		if (!Array.isArray(e) || 0 === e.length) return "legacy";
		switch (e[0]) {
			case "has": return e.length < 2 || "$id" === e[1] || "$type" === e[1] ? "legacy" : 2 === e.length ? "neutral" : "expression";
			case "in": return e.length >= 3 && ("string" != typeof e[1] || Array.isArray(e[2])) ? "expression" : "legacy";
			case "!in":
			case "!has":
			case "none": return "legacy";
			case "==":
			case "!=":
			case ">":
			case ">=":
			case "<":
			case "<=": return 3 !== e.length || Array.isArray(e[1]) || Array.isArray(e[2]) ? "expression" : "legacy";
			case "any":
			case "all": return function(e) {
				let t = !1;
				for (let r of e) {
					let e = ci(r);
					if ("expression" === e) return "expression";
					"legacy" === e && (t = !0);
				}
				return t ? "legacy" : "neutral";
			}(e.slice(1));
			default: return "expression";
		}
	}
	function pi(e) {
		return "legacy" !== ci(e);
	}
	function fi(e) {
		return "$type" === e ? ["geometry-type"] : "$id" === e ? ["id"] : ["get", e];
	}
	function di(e) {
		if (("<" === e[0] || "<=" === e[0] || ">" === e[0] || ">=" === e[0]) && "$type" === e[1]) return `"$type" cannot be use with operator "${e[0]}"`;
		let t = function(e) {
			switch (e[0]) {
				case "==":
				case "!=":
				case "<":
				case "<=":
				case ">":
				case ">=": return 3 !== e.length || "string" != typeof e[1] ? null : [
					e[0],
					fi(e[1]),
					e[2]
				];
				case "in":
				case "!in": {
					if (e.length < 2 || "string" != typeof e[1]) return null;
					let t = [
						"in",
						fi(e[1]),
						["literal", e.slice(2)]
					];
					return "!in" === e[0] ? ["!", t] : t;
				}
				case "has":
				case "!has": {
					if (2 !== e.length || "string" != typeof e[1] || "$type" === e[1] || "$id" === e[1]) return null;
					let t = ["has", e[1]];
					return "!has" === e[0] ? ["!", t] : t;
				}
				default: return null;
			}
		}(e);
		return t ? `Mixing deprecated filter syntax with expression syntax is not supported. Replace ${JSON.stringify(e)} with ${JSON.stringify(t)}.` : `Mixing deprecated filter syntax with expression syntax is not supported. Convert ${JSON.stringify(e)} to expression syntax.`;
	}
	function yi(e, t, r) {
		let i = r[e];
		return Array.isArray(i) ? pi(i) ? mi(i, t.concat(e)) : {
			path: t.concat(e),
			legacyFilter: i
		} : null;
	}
	function mi(e, t = []) {
		if (!Array.isArray(e) || e.length < 1) return null;
		switch (e[0]) {
			case "all":
			case "any":
			case "none":
				for (let r = 1; r < e.length; r++) {
					let i = yi(r, t, e);
					if (i) return i;
				}
				break;
			case "!": {
				let r = yi(1, t, e);
				if (r) return r;
				break;
			}
			case "case": for (let r = 1; r < e.length - 1; r += 2) {
				let i = yi(r, t, e);
				if (i) return i;
			}
		}
		return null;
	}
	const gi = {
		type: "boolean",
		default: !1,
		transition: !1,
		"property-type": "data-driven",
		expression: {
			interpolated: !1,
			parameters: ["zoom", "feature"]
		}
	};
	function xi(e, t, r) {
		if (null == e) return {
			filter: () => !0,
			needGeometry: !1,
			getGlobalStateRefs: () => /* @__PURE__ */ new Set()
		};
		pi(e) ? function(e, t) {
			let r = mi(e);
			if (!r || typeof console > "u") return;
			let i = r.path.map((e) => `[${e}]`).join("");
			console.warn(`${t}${i}: ${di(r.legacyFilter)}`);
		}(e, t) : e = wi(e);
		let i = ri(e, t, gi, r);
		if ("error" === i.result) throw Error(i.value.map((e) => `${e.key}: ${e.message}`).join(", "));
		return {
			filter: (e, t, r) => i.value.evaluate(e, t, {}, r),
			needGeometry: bi(e),
			getGlobalStateRefs: () => li(i.value.expression)
		};
	}
	function vi(e, t) {
		return e < t ? -1 : +(e > t);
	}
	function bi(e) {
		if (!Array.isArray(e)) return !1;
		if ("within" === e[0] || "distance" === e[0]) return !0;
		for (let t = 1; t < e.length; t++) if (bi(e[t])) return !0;
		return !1;
	}
	function wi(e) {
		if (!e) return !0;
		let t = e[0];
		return e.length <= 1 ? "any" !== t : "==" === t ? _i(e[1], e[2], "==") : "!=" === t ? Ai(_i(e[1], e[2], "==")) : "<" === t || ">" === t || "<=" === t || ">=" === t ? _i(e[1], e[2], t) : "any" === t ? function(e) {
			return ["any"].concat(e.map(wi));
		}(e.slice(1)) : "all" === t ? ["all"].concat(e.slice(1).map(wi)) : "none" === t ? ["all"].concat(e.slice(1).map(wi).map(Ai)) : "in" === t ? Di(e[1], e.slice(2)) : "!in" === t ? Ai(Di(e[1], e.slice(2))) : "has" === t ? Si(e[1]) : "!has" !== t || Ai(Si(e[1]));
	}
	function _i(e, t, r) {
		switch (e) {
			case "$type": return [`filter-type-${r}`, t];
			case "$id": return [`filter-id-${r}`, t];
			default: return [
				`filter-${r}`,
				e,
				t
			];
		}
	}
	function Di(e, t) {
		if (0 === t.length) return !1;
		switch (e) {
			case "$type": return ["filter-type-in", ["literal", t]];
			case "$id": return ["filter-id-in", ["literal", t]];
			default: return t.length > 200 && !t.some((e) => typeof e != typeof t[0]) ? [
				"filter-in-large",
				e,
				["literal", t.sort(vi)]
			] : [
				"filter-in-small",
				e,
				["literal", t]
			];
		}
	}
	function Si(e) {
		switch (e) {
			case "$type": return !0;
			case "$id": return ["filter-has-id"];
			default: return ["filter-has", e];
		}
	}
	function Ai(e) {
		return ["!", e];
	}
	function Ei(e) {
		let t = typeof e;
		if ("number" === t || "boolean" === t || "string" === t || null == e) return JSON.stringify(e);
		if (Array.isArray(e)) {
			let t = "[";
			for (let r of e) t += `${Ei(r)},`;
			return `${t}]`;
		}
		let r = Object.keys(e).sort(), i = "{";
		for (let n = 0; n < r.length; n++) i += `${JSON.stringify(r[n])}:${Ei(e[r[n]])},`;
		return `${i}}`;
	}
	function Fi(e) {
		let t = "";
		for (let r of N) t += `/${Ei(e[r])}`;
		return t;
	}
	function ki(e) {
		let t = e.key, r = e.value;
		return r ? [new U(t, r, "constants have been deprecated as of v8")] : [];
	}
	function Ii(e) {
		return e instanceof Number || e instanceof String || e instanceof Boolean ? e.valueOf() : e;
	}
	function Ti(e) {
		if (Array.isArray(e)) return e.map(Ti);
		if (e instanceof Object && !(e instanceof Number || e instanceof String || e instanceof Boolean)) {
			let t = {};
			for (let r in e) t[r] = Ti(e[r]);
			return t;
		}
		return Ii(e);
	}
	function Ci(e) {
		let t = e.key, r = e.value, i = e.valueSpec || {}, n = e.objectElementValidators || {}, a = e.style, s = e.styleSpec, o = e.validateSpec, l = [], u = Nr(r);
		if ("object" !== u) return [new U(t, r, `object expected, ${u} found`)];
		for (let h in r) {
			let e, u = h.split(".")[0], c = Ee(i, u) || i["*"];
			if (Ee(n, u)) e = n[u];
			else if (Ee(i, u)) {
				if (void 0 === r[h]) continue;
				e = o;
			} else if (n["*"]) e = n["*"];
			else {
				if (!i["*"]) {
					l.push(new U(t, r[h], `unknown property "${h}"`));
					continue;
				}
				e = o;
			}
			l = l.concat(e({
				key: (t && `${t}.`) + h,
				value: r[h],
				valueSpec: c,
				style: a,
				styleSpec: s,
				object: r,
				objectKey: h,
				validateSpec: o
			}, r));
		}
		for (let h in i) n[h] || i[h].required && void 0 === i[h].default && void 0 === r[h] && l.push(new U(t, r, `missing required property "${h}"`));
		return l;
	}
	function Bi(e) {
		let t = e.value, r = e.valueSpec, i = e.validateSpec, n = e.style, a = e.styleSpec, s = e.key, o = e.arrayElementValidator || i;
		if ("array" !== Nr(t)) return [new U(s, t, `array expected, ${Nr(t)} found`)];
		if (r.length && t.length !== r.length) return [new U(s, t, `array length ${r.length} expected, length ${t.length} found`)];
		let l = {
			type: r.value,
			values: r.values
		};
		a.$version < 7 && (l.function = r.function), "object" === Nr(r.value) && (l = r.value);
		let u = [];
		for (let h = 0; h < t.length; h++) u = u.concat(o({
			array: t,
			arrayIndex: h,
			value: t[h],
			valueSpec: l,
			validateSpec: e.validateSpec,
			style: n,
			styleSpec: a,
			key: `${s}[${h}]`
		}));
		return u;
	}
	function Mi(e) {
		let t = e.key, r = e.value, i = e.valueSpec, n = Nr(r);
		return "number" === n && r != r && (n = "NaN"), "number" === n ? "minimum" in i && r < i.minimum ? [new U(t, r, `${r} is less than the minimum value ${i.minimum}`)] : "maximum" in i && r > i.maximum ? [new U(t, r, `${r} is greater than the maximum value ${i.maximum}`)] : [] : [new U(t, r, `number expected, ${n} found`)];
	}
	function Pi(e) {
		let t, r, i, n = e.valueSpec, a = Ii(e.value.type), s = {}, o = "categorical" !== a && void 0 === e.value.property, l = !o, u = "array" === Nr(e.value.stops) && "array" === Nr(e.value.stops[0]) && "object" === Nr(e.value.stops[0][0]), h = Ci({
			key: e.key,
			value: e.value,
			valueSpec: e.styleSpec.function,
			validateSpec: e.validateSpec,
			style: e.style,
			styleSpec: e.styleSpec,
			objectElementValidators: {
				stops: function(e) {
					if ("identity" === a) return [new U(e.key, e.value, "identity function may not have a \"stops\" property")];
					let t = [], r = e.value;
					return t = t.concat(Bi({
						key: e.key,
						value: r,
						valueSpec: e.valueSpec,
						validateSpec: e.validateSpec,
						style: e.style,
						styleSpec: e.styleSpec,
						arrayElementValidator: c
					})), "array" === Nr(r) && 0 === r.length && t.push(new U(e.key, r, "array must have at least one stop")), t;
				},
				default: function(e) {
					return e.validateSpec({
						key: e.key,
						value: e.value,
						valueSpec: n,
						validateSpec: e.validateSpec,
						style: e.style,
						styleSpec: e.styleSpec
					});
				}
			}
		});
		return "identity" === a && o && h.push(new U(e.key, e.value, "missing required property \"property\"")), "identity" !== a && !e.value.stops && h.push(new U(e.key, e.value, "missing required property \"stops\"")), "exponential" === a && e.valueSpec.expression && !Or(e.valueSpec) && h.push(new U(e.key, e.value, "exponential functions not supported")), e.styleSpec.$version >= 8 && (l && !Lr(e.valueSpec) ? h.push(new U(e.key, e.value, "property functions not supported")) : o && !Vr(e.valueSpec) && h.push(new U(e.key, e.value, "zoom functions not supported"))), ("categorical" === a || u) && void 0 === e.value.property && h.push(new U(e.key, e.value, "\"property\" property is required")), h;
		function c(e) {
			let t = [], a = e.value, o = e.key;
			if ("array" !== Nr(a)) return [new U(o, a, `array expected, ${Nr(a)} found`)];
			if (2 !== a.length) return [new U(o, a, `array length 2 expected, length ${a.length} found`)];
			if (u) {
				if ("object" !== Nr(a[0])) return [new U(o, a, `object expected, ${Nr(a[0])} found`)];
				if (void 0 === a[0].zoom) return [new U(o, a, "object stop key must have zoom")];
				if (void 0 === a[0].value) return [new U(o, a, "object stop key must have value")];
				if (i && i > Ii(a[0].zoom)) return [new U(o, a[0].zoom, "stop zoom values must appear in ascending order")];
				Ii(a[0].zoom) !== i && (i = Ii(a[0].zoom), r = void 0, s = {}), t = t.concat(Ci({
					key: `${o}[0]`,
					value: a[0],
					valueSpec: { zoom: {} },
					validateSpec: e.validateSpec,
					style: e.style,
					styleSpec: e.styleSpec,
					objectElementValidators: {
						zoom: Mi,
						value: p
					}
				}));
			} else t = t.concat(p({
				key: `${o}[0]`,
				value: a[0],
				valueSpec: {},
				validateSpec: e.validateSpec,
				style: e.style,
				styleSpec: e.styleSpec
			}, a));
			return ti(Ti(a[1])) ? t.concat([new U(`${o}[1]`, a[1], "expressions are not allowed in function stops.")]) : t.concat(e.validateSpec({
				key: `${o}[1]`,
				value: a[1],
				valueSpec: n,
				validateSpec: e.validateSpec,
				style: e.style,
				styleSpec: e.styleSpec
			}));
		}
		function p(e, i) {
			let o = Nr(e.value), l = Ii(e.value), u = null === e.value ? i : e.value;
			if (t) {
				if (o !== t) return [new U(e.key, u, `${o} stop domain type must match previous stop domain type ${t}`)];
			} else t = o;
			if ("number" !== o && "string" !== o && "boolean" !== o) return [new U(e.key, u, "stop domain value must be a number, string, or boolean")];
			if ("number" !== o && "categorical" !== a) {
				let t = `number expected, ${o} found`;
				return Lr(n) && void 0 === a && (t += "\nIf you intended to use a categorical function, specify `\"type\": \"categorical\"`."), [new U(e.key, u, t)];
			}
			return "categorical" !== a || "number" !== o || isFinite(l) && Math.floor(l) === l ? "categorical" !== a && "number" === o && void 0 !== r && l < r ? [new U(e.key, u, "stop domain values must appear in ascending order")] : (r = l, "categorical" === a && l in s ? [new U(e.key, u, "stop domain values must be unique")] : (s[l] = !0, [])) : [new U(e.key, u, `integer expected, found ${l}`)];
		}
	}
	function zi(e) {
		let t = ("property" === e.expressionContext ? ai : ri)(Ti(e.value), e.key, e.valueSpec);
		if ("error" === t.result) return t.value.map((t) => new U(`${e.key}${t.key}`, e.value, t.message));
		let r = t.value.expression || t.value._styleExpression.expression;
		if ("property" === e.expressionContext && "text-font" === e.propertyKey && !r.outputDefined()) return [new U(e.key, e.value, `Invalid data expression for "${e.propertyKey}". Output values must be contained as literals within the expression.`)];
		if ("property" === e.expressionContext && "layout" === e.propertyType && !Pr(r)) return [new U(e.key, e.value, "\"feature-state\" data expressions are not supported with layout properties.")];
		if ("filter" === e.expressionContext && !Pr(r)) return [new U(e.key, e.value, "\"feature-state\" data expressions are not supported with filters.")];
		if (e.expressionContext && 0 === e.expressionContext.indexOf("cluster")) {
			if (!zr(r, ["zoom", "feature-state"])) return [new U(e.key, e.value, "\"zoom\" and \"feature-state\" expressions are not supported with cluster properties.")];
			if ("cluster-initial" === e.expressionContext && !Mr(r)) return [new U(e.key, e.value, "Feature data expressions are not supported with initial expression part of cluster properties.")];
		}
		return [];
	}
	function Li(e) {
		let t = e.key, r = e.value, i = Nr(r);
		return "string" === i ? Pe.parse(String(r)) ? [] : [new U(t, r, `color expected, "${r}" found`)] : [new U(t, r, `color expected, ${i} found`)];
	}
	function Vi(e) {
		let t = e.key, r = e.value, i = e.valueSpec, n = [];
		return Array.isArray(i.values) ? -1 === i.values.indexOf(Ii(r)) && n.push(new U(t, r, `expected one of [${i.values.join(", ")}], ${JSON.stringify(r)} found`)) : -1 === Object.keys(i.values).indexOf(Ii(r)) && n.push(new U(t, r, `expected one of [${Object.keys(i.values).join(", ")}], ${JSON.stringify(r)} found`)), n;
	}
	function Oi(e, t) {
		let r = e;
		for (let i of t) r = r[i];
		return r;
	}
	function Ri(e, t) {
		let r = mi(t);
		return r ? [new U(`${e.key}${r.path.map((e) => `[${e}]`).join("")}`, Oi(e.value, r.path), di(r.legacyFilter), null, "warning")] : [];
	}
	function $i(e) {
		let t = Ti(e.value);
		return pi(t) ? [...Ri(e, t), ...zi($r({}, e, {
			expressionContext: "filter",
			valueSpec: { value: "boolean" }
		}))] : Ni(e);
	}
	function Ni(e) {
		let t = e.value, r = e.key;
		if ("array" !== Nr(t)) return [new U(r, t, `array expected, ${Nr(t)} found`)];
		let i, n = e.styleSpec, a = [];
		if (t.length < 1) return [new U(r, t, "filter array must have at least 1 element")];
		switch (a = a.concat(Vi({
			key: `${r}[0]`,
			value: t[0],
			valueSpec: n.filter_operator,
			style: e.style,
			styleSpec: e.styleSpec
		})), Ii(t[0])) {
			case "<":
			case "<=":
			case ">":
			case ">=": t.length >= 2 && "$type" === Ii(t[1]) && a.push(new U(r, t, `"$type" cannot be use with operator "${t[0]}"`));
			case "==":
			case "!=": 3 !== t.length && a.push(new U(r, t, `filter array for operator "${t[0]}" must have 3 elements`));
			case "in":
			case "!in":
				t.length >= 2 && (i = Nr(t[1]), "string" !== i && a.push(new U(`${r}[1]`, t[1], `string expected, ${i} found`)));
				for (let s = 2; s < t.length; s++) i = Nr(t[s]), "$type" === Ii(t[1]) ? a = a.concat(Vi({
					key: `${r}[${s}]`,
					value: t[s],
					valueSpec: n.geometry_type,
					style: e.style,
					styleSpec: e.styleSpec
				})) : "string" !== i && "number" !== i && "boolean" !== i && a.push(new U(`${r}[${s}]`, t[s], `string, number, or boolean expected, ${i} found`));
				break;
			case "any":
			case "all":
			case "none":
				for (let i = 1; i < t.length; i++) a = a.concat(Ni({
					key: `${r}[${i}]`,
					value: t[i],
					style: e.style,
					styleSpec: e.styleSpec
				}));
				break;
			case "has":
			case "!has": i = Nr(t[1]), 2 === t.length ? "string" !== i && a.push(new U(`${r}[1]`, t[1], `string expected, ${i} found`)) : a.push(new U(r, t, `filter array for "${t[0]}" operator must have 2 elements`));
		}
		return a;
	}
	function Ui(e, t) {
		let r = e.key, i = e.validateSpec, n = e.style, a = e.styleSpec, s = e.value, o = e.objectKey, l = a[`${t}_${e.layerType}`];
		if (!l) return [];
		let u = o.match(Rr);
		if ("paint" === t && u && l[u[1]] && l[u[1]].transition) return i({
			key: r,
			value: s,
			valueSpec: a.transition,
			style: n,
			styleSpec: a
		});
		let h, c = e.valueSpec || l[o];
		if (!c) return [new U(r, s, `unknown property "${o}"`)];
		if ("string" === Nr(s) && Lr(c) && !c.tokens && (h = /^{([^}]+)}$/.exec(s))) return [new U(r, s, `"${o}" does not support interpolation syntax\nUse an identity property function instead: \`{ "type": "identity", "property": ${JSON.stringify(h[1])} }\`.`)];
		let p = [];
		return "symbol" === e.layerType && "text-font" === o && Ur(Ti(s)) && "identity" === Ii(s.type) && p.push(new U(r, s, "\"text-font\" does not support identity functions")), p.concat(i({
			key: e.key,
			value: s,
			valueSpec: c,
			style: n,
			styleSpec: a,
			expressionContext: "property",
			propertyType: t,
			propertyKey: o
		}));
	}
	function ji(e) {
		return Ui(e, "paint");
	}
	function qi(e) {
		return Ui(e, "layout");
	}
	function Gi(e) {
		let t = [], r = e.value, i = e.key, n = e.style, a = e.styleSpec;
		if ("object" !== Nr(r)) return [new U(i, r, `object expected, ${Nr(r)} found`)];
		!r.type && !r.ref && t.push(new U(i, r, "either \"type\" or \"ref\" is required"));
		let s = Ii(r.type), o = Ii(r.ref);
		if (r.id) {
			let a = Ii(r.id);
			for (let s = 0; s < e.arrayIndex; s++) {
				let e = n.layers[s];
				Ii(e.id) === a && t.push(new U(i, r.id, `duplicate layer id "${r.id}", previously used at line ${e.id.__line__}`));
			}
		}
		if ("ref" in r) {
			let e;
			[
				"type",
				"source",
				"source-layer",
				"filter",
				"layout"
			].forEach((e) => {
				e in r && t.push(new U(i, r[e], `"${e}" is prohibited for ref layers`));
			}), n.layers.forEach((t) => {
				Ii(t.id) === o && (e = t);
			}), e ? e.ref ? t.push(new U(i, r.ref, "ref cannot reference another ref layer")) : s = Ii(e.type) : t.push(new U(i, r.ref, `ref layer "${o}" not found`));
		} else if ("background" !== s) if (r.source) {
			let e = n.sources && n.sources[r.source], a = e && Ii(e.type);
			e ? "vector" === a && "raster" === s ? t.push(new U(i, r.source, `layer "${r.id}" requires a raster source`)) : "raster-dem" !== a && "hillshade" === s || "raster-dem" !== a && "color-relief" === s ? t.push(new U(i, r.source, `layer "${r.id}" requires a raster-dem source`)) : "raster" === a && "raster" !== s ? t.push(new U(i, r.source, `layer "${r.id}" requires a vector source`)) : "vector" !== a || r["source-layer"] ? "raster-dem" === a && "hillshade" !== s && "color-relief" !== s ? t.push(new U(i, r.source, "raster-dem source can only be used with layer type 'hillshade' or 'color-relief'.")) : "line" === s && r.paint && r.paint["line-gradient"] && ("geojson" !== a || !e.lineMetrics) && t.push(new U(i, r, `layer "${r.id}" specifies a line-gradient, which requires a GeoJSON source with \`lineMetrics\` enabled.`)) : t.push(new U(i, r, `layer "${r.id}" must specify a "source-layer"`)) : t.push(new U(i, r.source, `source "${r.source}" not found`));
		} else t.push(new U(i, r, "missing required property \"source\""));
		return "raster" === s && r.paint?.resampling && r.paint?.["raster-resampling"] && t.push(new U(i, r.paint, `layer "${r.id}" redundantly specifies "resampling" and "raster-resampling" paint properties, but only one is allowed. It is advised to use "resampling".`)), t = t.concat(Ci({
			key: i,
			value: r,
			valueSpec: a.layer,
			style: e.style,
			styleSpec: e.styleSpec,
			validateSpec: e.validateSpec,
			objectElementValidators: {
				"*": () => [],
				type: () => e.validateSpec({
					key: `${i}.type`,
					value: r.type,
					valueSpec: a.layer.type,
					style: e.style,
					styleSpec: e.styleSpec,
					validateSpec: e.validateSpec,
					object: r,
					objectKey: "type"
				}),
				filter: $i,
				layout: (e) => Ci({
					layer: r,
					key: e.key,
					value: e.value,
					style: e.style,
					styleSpec: e.styleSpec,
					validateSpec: e.validateSpec,
					objectElementValidators: { "*": (e) => qi($r({ layerType: s }, e)) }
				}),
				paint: (e) => Ci({
					layer: r,
					key: e.key,
					value: e.value,
					style: e.style,
					styleSpec: e.styleSpec,
					validateSpec: e.validateSpec,
					objectElementValidators: { "*": (e) => ji($r({ layerType: s }, e)) }
				})
			}
		})), t;
	}
	function Xi(e) {
		let t = e.value, r = e.key, i = Nr(t);
		return "string" === i ? [] : [new U(r, t, `string expected, ${i} found`)];
	}
	const Yi = { promoteId: function({ key: e, value: t }) {
		if ("string" === Nr(t)) return Xi({
			key: e,
			value: t
		});
		{
			let r = [];
			for (let i in t) r.push(...Xi({
				key: `${e}.${i}`,
				value: t[i]
			}));
			return r;
		}
	} };
	function Wi(e) {
		let t = e.value, r = e.key, i = e.styleSpec, n = e.style, a = e.validateSpec;
		if (!t.type) return [new U(r, t, "\"type\" is required")];
		let s, o = Ii(t.type);
		switch (o) {
			case "vector":
			case "raster": return s = Ci({
				key: r,
				value: t,
				valueSpec: i[`source_${o.replace("-", "_")}`],
				style: e.style,
				styleSpec: i,
				objectElementValidators: Yi,
				validateSpec: a
			}), s;
			case "raster-dem": return s = function(e) {
				let t = e.sourceName ?? "", r = e.value, i = e.styleSpec, n = i.source_raster_dem, a = e.style, s = [], o = Nr(r);
				if (void 0 === r) return s;
				if ("object" !== o) return s.push(new U("source_raster_dem", r, `object expected, ${o} found`)), s;
				let l = "custom" === Ii(r.encoding), u = [
					"redFactor",
					"greenFactor",
					"blueFactor",
					"baseShift"
				], h = e.value.encoding ? `"${e.value.encoding}"` : "Default";
				for (let c in r) !l && u.includes(c) ? s.push(new U(c, r[c], `In "${t}": "${c}" is only valid when "encoding" is set to "custom". ${h} encoding found`)) : n[c] ? s = s.concat(e.validateSpec({
					key: c,
					value: r[c],
					valueSpec: n[c],
					validateSpec: e.validateSpec,
					style: a,
					styleSpec: i
				})) : s.push(new U(c, r[c], `unknown property "${c}"`));
				return s;
			}({
				sourceName: r,
				value: t,
				style: e.style,
				styleSpec: i,
				validateSpec: a
			}), s;
			case "geojson":
				if (s = Ci({
					key: r,
					value: t,
					valueSpec: i.source_geojson,
					style: n,
					styleSpec: i,
					validateSpec: a,
					objectElementValidators: Yi
				}), t.cluster) for (let e in t.clusterProperties) {
					let [i, n] = t.clusterProperties[e], o = "string" == typeof i ? [
						i,
						["accumulated"],
						["get", e]
					] : i;
					s.push(...zi({
						key: `${r}.${e}.map`,
						value: n,
						validateSpec: a,
						expressionContext: "cluster-map"
					})), s.push(...zi({
						key: `${r}.${e}.reduce`,
						value: o,
						validateSpec: a,
						expressionContext: "cluster-reduce"
					}));
				}
				return s;
			case "video": return Ci({
				key: r,
				value: t,
				valueSpec: i.source_video,
				style: n,
				validateSpec: a,
				styleSpec: i
			});
			case "image": return Ci({
				key: r,
				value: t,
				valueSpec: i.source_image,
				style: n,
				validateSpec: a,
				styleSpec: i
			});
			case "canvas": return [new U(r, null, "Please use runtime APIs to add canvas sources, rather than including them in stylesheets.", "source.canvas")];
			default: return Vi({
				key: `${r}.type`,
				value: t.type,
				valueSpec: { values: [
					"vector",
					"raster",
					"raster-dem",
					"geojson",
					"video",
					"image"
				] },
				style: n,
				validateSpec: a,
				styleSpec: i
			});
		}
	}
	function Zi(e) {
		let t = e.value, r = e.styleSpec, i = r.light, n = e.style, a = [], s = Nr(t);
		if (void 0 === t) return a;
		if ("object" !== s) return a = a.concat([new U("light", t, `object expected, ${s} found`)]), a;
		for (let o in t) {
			let s = o.match(Rr);
			a = s && i[s[1]] && i[s[1]].transition ? a.concat(e.validateSpec({
				key: o,
				value: t[o],
				valueSpec: r.transition,
				validateSpec: e.validateSpec,
				style: n,
				styleSpec: r
			})) : i[o] ? a.concat(e.validateSpec({
				key: o,
				value: t[o],
				valueSpec: i[o],
				validateSpec: e.validateSpec,
				style: n,
				styleSpec: r
			})) : a.concat([new U(o, t[o], `unknown property "${o}"`)]);
		}
		return a;
	}
	function Hi(e) {
		let t = e.value, r = e.styleSpec, i = r.sky, n = e.style, a = Nr(t);
		if (void 0 === t) return [];
		if ("object" !== a) return [new U("sky", t, `object expected, ${a} found`)];
		let s = [];
		for (let o in t) {
			let a = o.match(Rr);
			s = a && i[a[1]] && i[a[1]].transition ? s.concat(e.validateSpec({
				key: o,
				value: t[o],
				valueSpec: r.transition,
				style: n,
				styleSpec: r
			})) : i[o] ? s.concat(e.validateSpec({
				key: o,
				value: t[o],
				valueSpec: i[o],
				style: n,
				styleSpec: r
			})) : s.concat([new U(o, t[o], `unknown property "${o}"`)]);
		}
		return s;
	}
	function Ki(e) {
		let t = e.value, r = e.styleSpec, i = r.terrain, n = e.style, a = [], s = Nr(t);
		if (void 0 === t) return a;
		if ("object" !== s) return a = a.concat([new U("terrain", t, `object expected, ${s} found`)]), a;
		for (let o in t) a = i[o] ? a.concat(e.validateSpec({
			key: o,
			value: t[o],
			valueSpec: i[o],
			validateSpec: e.validateSpec,
			style: n,
			styleSpec: r
		})) : a.concat([new U(o, t[o], `unknown property "${o}"`)]);
		return a;
	}
	function Ji(e) {
		let t = [], r = e.value, i = e.key;
		if (Array.isArray(r)) {
			let n = [], a = [];
			for (let s in r) r[s].id && n.includes(r[s].id) && t.push(new U(i, r, `all the sprites' ids must be unique, but ${r[s].id} is duplicated`)), n.push(r[s].id), r[s].url && a.includes(r[s].url) && t.push(new U(i, r, `all the sprites' URLs must be unique, but ${r[s].url} is duplicated`)), a.push(r[s].url), t = t.concat(Ci({
				key: `${i}[${s}]`,
				value: r[s],
				valueSpec: {
					id: {
						type: "string",
						required: !0
					},
					url: {
						type: "string",
						required: !0
					}
				},
				validateSpec: e.validateSpec
			}));
			return t;
		}
		return Xi({
			key: i,
			value: r
		});
	}
	function Qi(e) {
		return !!e && e.constructor === Object;
	}
	function en(e) {
		return Qi(e.value) ? [] : [new U(e.key, e.value, `object expected, ${Nr(e.value)} found`)];
	}
	const tn = 1114111, rn = /^u\+(?:([0-9a-f]{1,6})(?:-([0-9a-f]{1,6}))?|([0-9a-f]{0,5}\?{1,6}))$/i;
	function nn(e, t) {
		if ("string" !== Nr(t)) return [];
		let r = `${t}`, i = () => [new U(e, t, "invalid unicode range, expected a value such as \"U+26\", \"U+0-10FFFF\" or \"U+4??\"")], n = r.match(rn);
		if (!n) return i();
		let [, a, s, o] = n;
		if (void 0 !== o) return o.length > 6 ? i() : [];
		let l = parseInt(a, 16), u = void 0 === s ? l : parseInt(s, 16);
		return l > tn || u > tn ? [new U(e, t, "unicode range is out of bounds, the maximum code point is U+10FFFF")] : l > u ? [new U(e, t, `unicode range start must not be greater than its end, but ${r} is`)] : [];
	}
	function an(e) {
		let t = e.key ?? "font-faces", r = e.value, i = e.validateSpec, n = e.styleSpec ?? R, a = e.style;
		if (!Qi(r)) return [new U(t, r, `object expected, ${Nr(r)} found`)];
		let s = [];
		for (let o in r) {
			let e = r[o], l = Nr(e);
			if ("string" === l) s.push(...Xi({
				key: `${t}.${o}`,
				value: e
			}));
			else if ("array" === l) {
				let r = {
					url: {
						type: "string",
						required: !0
					},
					"unicode-range": {
						type: "array",
						value: "string"
					}
				};
				for (let [l, u] of e.entries()) {
					let e = `${t}.${o}[${l}]`;
					s.push(...Ci({
						key: e,
						value: u,
						valueSpec: r,
						styleSpec: n,
						style: a,
						validateSpec: i
					}));
					let h = Qi(u) ? u["unicode-range"] : void 0;
					if ("array" === Nr(h)) for (let [t, r] of h.entries()) s.push(...nn(`${e}.unicode-range[${t}]`, r));
				}
			} else s.push(new U(`${t}.${o}`, e, `string or array expected, ${l} found`));
		}
		return s;
	}
	const sn = {
		"*": () => [],
		array: Bi,
		boolean: function(e) {
			let t = e.value, r = e.key, i = Nr(t);
			return "boolean" === i ? [] : [new U(r, t, `boolean expected, ${i} found`)];
		},
		number: Mi,
		color: Li,
		constants: ki,
		enum: Vi,
		filter: $i,
		function: Pi,
		layer: Gi,
		object: Ci,
		source: Wi,
		light: Zi,
		sky: Hi,
		terrain: Ki,
		projection: function(e) {
			let t = e.value, r = e.styleSpec, i = r.projection, n = e.style, a = Nr(t);
			if (void 0 === t) return [];
			if ("object" !== a) return [new U("projection", t, `object expected, ${a} found`)];
			let s = [];
			for (let o in t) s = i[o] ? s.concat(e.validateSpec({
				key: o,
				value: t[o],
				valueSpec: i[o],
				style: n,
				styleSpec: r
			})) : s.concat([new U(o, t[o], `unknown property "${o}"`)]);
			return s;
		},
		projectionDefinition: function(e) {
			let t = e.key, r = e.value;
			r = r instanceof String ? r.valueOf() : r;
			let i = Nr(r);
			return "array" !== i || function(e) {
				return Array.isArray(e) && 3 === e.length && "string" == typeof e[0] && "string" == typeof e[1] && "number" == typeof e[2];
			}(r) || function(e) {
				return !![
					"interpolate",
					"step",
					"literal"
				].includes(e[0]);
			}(r) ? ["array", "string"].includes(i) ? [] : [new U(t, r, `projection expected, invalid type "${i}" found`)] : [new U(t, r, `projection expected, invalid array ${JSON.stringify(r)} found`)];
		},
		string: Xi,
		formatted: function(e) {
			return 0 === Xi(e).length ? [] : zi(e);
		},
		resolvedImage: function(e) {
			return 0 === Xi(e).length ? [] : zi(e);
		},
		padding: function(e) {
			let t = e.key, r = e.value;
			if ("array" === Nr(r)) {
				if (r.length < 1 || r.length > 4) return [new U(t, r, `padding requires 1 to 4 values; ${r.length} values found`)];
				let i = { type: "number" }, n = [];
				for (let a = 0; a < r.length; a++) n = n.concat(e.validateSpec({
					key: `${t}[${a}]`,
					value: r[a],
					validateSpec: e.validateSpec,
					valueSpec: i
				}));
				return n;
			}
			return Mi({
				key: t,
				value: r,
				valueSpec: {}
			});
		},
		numberArray: function(e) {
			let t = e.key, r = e.value;
			if ("array" === Nr(r)) {
				let i = { type: "number" };
				if (r.length < 1) return [new U(t, r, "array length at least 1 expected, length 0 found")];
				let n = [];
				for (let a = 0; a < r.length; a++) n = n.concat(e.validateSpec({
					key: `${t}[${a}]`,
					value: r[a],
					validateSpec: e.validateSpec,
					valueSpec: i
				}));
				return n;
			}
			return Mi({
				key: t,
				value: r,
				valueSpec: {}
			});
		},
		colorArray: function(e) {
			let t = e.key, r = e.value;
			if ("array" === Nr(r)) {
				if (r.length < 1) return [new U(t, r, "array length at least 1 expected, length 0 found")];
				let e = [];
				for (let i = 0; i < r.length; i++) e = e.concat(Li({
					key: `${t}[${i}]`,
					value: r[i],
					valueSpec: {}
				}));
				return e;
			}
			return Li({
				key: t,
				value: r,
				valueSpec: {}
			});
		},
		variableAnchorOffsetCollection: function(e) {
			let t = e.key, r = e.value, i = Nr(r), n = e.styleSpec;
			if ("array" !== i || r.length < 1 || r.length % 2 != 0) return [new U(t, r, "variableAnchorOffsetCollection requires a non-empty array of even length")];
			let a = [];
			for (let s = 0; s < r.length; s += 2) a = a.concat(Vi({
				key: `${t}[${s}]`,
				value: r[s],
				valueSpec: n.layout_symbol["text-anchor"]
			})), a = a.concat(Bi({
				key: `${t}[${s + 1}]`,
				value: r[s + 1],
				valueSpec: {
					length: 2,
					value: "number"
				},
				validateSpec: e.validateSpec,
				style: e.style,
				styleSpec: n
			}));
			return a;
		},
		sprite: Ji,
		state: en,
		fontFaces: an
	};
	function on(e) {
		let t = e.value, r = e.valueSpec, i = e.styleSpec;
		return e.validateSpec = on, r.expression && Ur(Ii(t)) ? Pi(e) : r.expression && ti(Ti(t)) ? zi(e) : r.type && sn[r.type] ? sn[r.type](e) : Ci($r({}, e, { valueSpec: r.type ? i[r.type] : r }));
	}
	function ln(e) {
		let t = e.value, r = e.key, i = Xi(e);
		return i.length || (-1 === t.indexOf("{fontstack}") && i.push(new U(r, t, "\"glyphs\" url must include a \"{fontstack}\" token")), -1 === t.indexOf("{range}") && i.push(new U(r, t, "\"glyphs\" url must include a \"{range}\" token"))), i;
	}
	function un(e, t = $) {
		let r = [];
		return r = r.concat(on({
			key: "",
			value: e,
			valueSpec: t.$root,
			styleSpec: t,
			style: e,
			validateSpec: on,
			objectElementValidators: {
				glyphs: ln,
				"*": () => []
			}
		})), e.constants && (r = r.concat(ki({
			key: "constants",
			value: e.constants,
			style: e,
			styleSpec: t,
			validateSpec: on
		}))), cn(r);
	}
	function hn(e) {
		return function(t) {
			return e(Object.assign({}, t, { validateSpec: on }));
		};
	}
	function cn(e) {
		return [].concat(e).sort((e, t) => e.line - t.line);
	}
	function pn(e) {
		return function(...t) {
			return cn(e.apply(this, t));
		};
	}
	un.source = pn(hn(Wi)), un.sprite = pn(hn(Ji)), un.glyphs = pn(hn(ln)), un.fontFaces = pn(hn(an)), un.light = pn(hn(Zi)), un.sky = pn(hn(Hi)), un.terrain = pn(hn(Ki)), un.state = pn(hn(en)), un.layer = pn(hn(Gi)), un.filter = pn(hn($i)), un.paintProperty = pn(hn(ji)), un.layoutProperty = pn(hn(qi));
	const fn = {
		type: "enum",
		"property-type": "data-constant",
		expression: {
			interpolated: !1,
			parameters: ["global-state"]
		},
		values: {
			visible: {},
			none: {}
		},
		transition: !1,
		default: "visible"
	};
	var dn = class {
		constructor(e, t, r) {
			this._rootKey = t, this._globalState = r, this.setValue(e);
		}
		evaluate() {
			return this._literalValue ?? this._compiledValue.evaluate({});
		}
		setValue(e) {
			if (null == e || "visible" === e || "none" === e) return this._literalValue = "none" === e ? "none" : "visible", this._compiledValue = void 0, void (this._globalStateRefs = /* @__PURE__ */ new Set());
			let t = ri(e, this._rootKey, fn, this._globalState);
			if ("error" === t.result) throw this._literalValue = "visible", this._compiledValue = void 0, Error(t.value.map((e) => `${e.key}: ${e.message}`).join(", "));
			this._literalValue = void 0, this._compiledValue = t.value, this._globalStateRefs = li(t.value.expression);
		}
		getGlobalStateRefs() {
			return this._globalStateRefs;
		}
	};
	const yn = {
		MAX_PARALLEL_IMAGE_REQUESTS: 16,
		MAX_PARALLEL_IMAGE_REQUESTS_PER_FRAME: 8,
		MAX_TILE_CACHE_ZOOM_LEVELS: 5,
		REGISTERED_PROTOCOLS: {},
		WORKER_URL: ""
	};
	function mn(e, t) {
		yn.REGISTERED_PROTOCOLS[e] = t;
	}
	function gn(e) {
		delete yn.REGISTERED_PROTOCOLS[e];
	}
	const xn = "global-dispatcher";
	var vn = class extends Error {
		constructor(e, t, r, i) {
			super(`AJAXError: ${t} (${e}): ${r}`), this.status = e, this.statusText = t, this.url = r, this.body = i;
		}
	};
	function bn() {
		if (k(self)) return self.worker?.referrer;
		if ("blob:" === window.location.protocol) try {
			return window.parent.location.href;
		} catch {}
		return window.location.href;
	}
	const wn = async function(e, t) {
		if (e.url.includes("://") && !/^https?:|^file:/.test(e.url)) {
			let r = function(e) {
				return yn.REGISTERED_PROTOCOLS[e.substring(0, e.indexOf("://"))];
			}(e.url);
			if (r) {
				let i = await r(e, t);
				return i.data || "arrayBuffer" !== e.type ? i : w(i, { data: /* @__PURE__ */ new ArrayBuffer(0) });
			}
			if (k(self) && self.worker?.actor) return self.worker.actor.sendAsync({
				type: "GR",
				data: e,
				targetMapId: xn
			}, t);
		}
		if (!((e) => e.startsWith("file:") || bn()?.startsWith("file:") && !/^\w+:/.test(e))(e.url)) {
			if (fetch && Request && AbortController && Object.hasOwn(Request.prototype, "signal")) return async function(e, t) {
				let r, i, n = new Request(e.url, {
					method: e.method || "GET",
					body: e.body,
					credentials: e.credentials,
					headers: e.headers,
					cache: e.cache,
					referrer: bn(),
					referrerPolicy: e.referrerPolicy,
					signal: t.signal
				});
				"json" === e.type && !n.headers.has("Accept") && n.headers.set("Accept", "application/json");
				try {
					r = await fetch(n);
				} catch (t) {
					throw V(t) ? t : new vn(0, v(t).message, e.url, new Blob());
				}
				if (!r.ok) {
					let t = await r.blob();
					throw new vn(r.status, r.statusText, e.url, t);
				}
				i = "arrayBuffer" === e.type || "image" === e.type ? r.arrayBuffer() : "json" === e.type ? r.json() : r.text();
				let a = await i;
				return function(e) {
					if (e.aborted) throw new L(e.reason);
				}(t.signal), {
					data: a,
					cacheControl: r.headers.get("Cache-Control"),
					expires: r.headers.get("Expires"),
					etag: r.headers.get("ETag")
				};
			}(e, t);
			if (k(self) && self.worker?.actor) return self.worker.actor.sendAsync({
				type: "GR",
				data: e,
				mustQueue: !0,
				targetMapId: xn
			}, t);
		}
		return function(e, t) {
			return new Promise((r, i) => {
				let n = new XMLHttpRequest();
				n.open(e.method || "GET", e.url, !0), ("arrayBuffer" === e.type || "image" === e.type) && (n.responseType = "arraybuffer");
				for (let t in e.headers) n.setRequestHeader(t, e.headers[t]);
				"json" === e.type && (n.responseType = "text", e.headers?.Accept || n.setRequestHeader("Accept", "application/json")), n.withCredentials = "include" === e.credentials, n.onerror = () => {
					i(Error(n.statusText));
				}, n.onload = () => {
					if (!t.signal.aborted) if ((n.status >= 200 && n.status < 300 || 0 === n.status) && null !== n.response) {
						let t = n.response;
						if ("json" === e.type) try {
							t = JSON.parse(n.response);
						} catch (e) {
							i(e);
							return;
						}
						r({
							data: t,
							cacheControl: n.getResponseHeader("Cache-Control"),
							expires: n.getResponseHeader("Expires"),
							etag: n.getResponseHeader("ETag")
						});
					} else {
						let t = new Blob([n.response], { type: n.getResponseHeader("Content-Type") });
						i(new vn(n.status, n.statusText, e.url, t));
					}
				}, t.signal.addEventListener("abort", () => {
					n.abort(), i(new L(t.signal.reason));
				}), n.send(e.body);
			});
		}(e, t);
	}, _n = {};
	function Dn(e, t, r = {}) {
		if (_n[e]) throw Error(`${e} is already registered.`);
		Object.defineProperty(t, "_classRegistryKey", {
			value: e,
			writeable: !1
		}), _n[e] = {
			klass: t,
			omit: r.omit || [],
			shallow: r.shallow || []
		};
	}
	Dn("Object", Object), Dn("Set", Set), Dn("TransferableGridIndex", O), Dn("Color", Pe), Dn("Error", Error), Dn("AJAXError", vn), Dn("ResolvedImage", qe), Dn("StylePropertyFunction", si), Dn("StyleExpression", Jr, { omit: ["_evaluator"] }), Dn("ZoomDependentExpression", ni), Dn("ZoomConstantExpression", ii), Dn("CompoundExpression", Fr, { omit: ["_evaluate"] });
	for (let bg in Dr) Dr[bg]._classRegistryKey || Dn(`Expression_${bg}`, Dr[bg]);
	function Sn(e) {
		return e && typeof ArrayBuffer < "u" && (e instanceof ArrayBuffer || "ArrayBuffer" === e.constructor?.name);
	}
	function An(e) {
		let t = e.constructor;
		return e.$name || t._classRegistryKey;
	}
	function En(e) {
		return !function(e) {
			if ("object" != typeof e || !e) return !1;
			let t = An(e);
			return t && "Object" !== t;
		}(e) && (null == e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || e instanceof Boolean || e instanceof Number || e instanceof String || e instanceof Date || e instanceof RegExp || e instanceof Blob || e instanceof Error || Sn(e) || I(e) || ArrayBuffer.isView(e) || e instanceof ImageData);
	}
	function Fn(e, t) {
		if (En(e)) return (Sn(e) || I(e)) && t && t.push(e), ArrayBuffer.isView(e) && t && t.push(e.buffer), e instanceof ImageData && t && t.push(e.data.buffer), e;
		if (Array.isArray(e)) {
			let r = [];
			for (let i of e) r.push(Fn(i, t));
			return r;
		}
		if ("object" != typeof e) throw Error("can't serialize object of type " + typeof e);
		let r = An(e);
		if (!r) throw Error(`can't serialize object of unregistered class ${e.constructor.name}`);
		if (!_n[r]) throw Error(`${r} is not registered.`);
		let { klass: i } = _n[r], n = i.serialize ? i.serialize(e, t) : {};
		if (i.serialize) {
			if (n === t?.[t.length - 1]) throw Error("statically serialized object won't survive transfer of $name property");
		} else {
			for (let i in e) {
				if (!e.hasOwnProperty(i) || _n[r].omit.includes(i)) continue;
				let a = e[i];
				void 0 !== a && (n[i] = _n[r].shallow.includes(i) ? a : Fn(a, t));
			}
			e instanceof Error && (n.message = e.message);
		}
		if (n.$name) throw Error("$name property is reserved for worker serialization logic.");
		return "Object" !== r && (n.$name = r), n;
	}
	function kn(e) {
		if (En(e)) return e;
		if (Array.isArray(e)) return e.map(kn);
		if ("object" != typeof e) throw Error("can't deserialize object of type " + typeof e);
		let t = An(e) || "Object";
		if (!_n[t]) throw Error(`can't deserialize unregistered class ${t}`);
		let { klass: r } = _n[t];
		if (!r) throw Error(`can't deserialize unregistered class ${t}`);
		if (r.deserialize) return r.deserialize(e);
		let i = Object.create(r.prototype);
		for (let n of Object.keys(e)) {
			if ("$name" === n) continue;
			let r = e[n];
			i[n] = _n[t].shallow.includes(n) ? r : kn(r);
		}
		return i;
	}
	var In = class {
		constructor(e) {
			this._methodToThrottle = e, this._triggered = !1, this._channel = new MessageChannel(), this._channel.port2.onmessage = () => this._invoke();
		}
		trigger() {
			this._triggered || (this._triggered = !0, this._channel?.port1.postMessage(!0), setTimeout(() => this._invoke(), 0));
		}
		_invoke() {
			this._triggered && (this._triggered = !1, this._methodToThrottle());
		}
		remove() {
			delete this._channel, this._methodToThrottle = () => {};
		}
	};
	const Tn = { once: !0 };
	var Cn = class {
		constructor(e, t) {
			this.target = e, this.mapId = t, this.resolveRejects = {}, this.tasks = {}, this.taskQueue = [], this.abortControllers = {}, this.messageHandlers = {}, this.invoker = new In(() => this.process()), this.subscription = M(this.target, "message", (e) => this.receive(e), !1), this.globalScope = k(self) ? e : window;
		}
		registerMessageHandler(e, t) {
			this.messageHandlers[e] = t;
		}
		unregisterMessageHandler(e) {
			delete this.messageHandlers[e];
		}
		sendAsync(e, t) {
			return new Promise((r, i) => {
				let n = Math.round(0xde0b6b3a7640000 * Math.random()).toString(36).substring(0, 10), a = t ? M(t.signal, "abort", () => {
					a?.unsubscribe(), delete this.resolveRejects[n];
					let r = {
						id: n,
						type: "<cancel>",
						origin: location.origin,
						targetMapId: e.targetMapId,
						sourceMapId: this.mapId
					};
					this.target.postMessage(r), i(new L(t.signal.reason));
				}, Tn) : null;
				this.resolveRejects[n] = {
					resolve: (e) => {
						a?.unsubscribe(), r(e);
					},
					reject: (e) => {
						a?.unsubscribe(), i(e);
					}
				};
				let s = [], o = {
					...e,
					id: n,
					sourceMapId: this.mapId,
					origin: location.origin,
					data: Fn(e.data, s)
				};
				this.target.postMessage(o, { transfer: s });
			});
		}
		receive(e) {
			let t = e.data, r = t.id, i = [
				"file://",
				"resource://android",
				"null"
			], n = [t.origin, location.origin], a = t.origin === location.origin, s = n.some((e) => i.includes(e));
			if ((a || s) && (!t.targetMapId || this.mapId === t.targetMapId)) if ("<cancel>" === t.type) {
				delete this.tasks[r];
				let e = this.abortControllers[r];
				delete this.abortControllers[r], e && e.abort();
			} else k(self) || t.mustQueue ? (this.tasks[r] = t, this.taskQueue.push(r), this.invoker.trigger()) : this.processTask(r, t);
		}
		process() {
			if (0 === this.taskQueue.length) return;
			let e = this.taskQueue.shift(), t = this.tasks[e];
			delete this.tasks[e], this.taskQueue.length > 0 && this.invoker.trigger(), t && this.processTask(e, t);
		}
		async processTask(e, t) {
			if ("<response>" === t.type) {
				let r = this.resolveRejects[e];
				if (delete this.resolveRejects[e], !r) return;
				t.error ? r.reject(v(kn(t.error))) : r.resolve(kn(t.data));
				return;
			}
			if (!this.messageHandlers[t.type]) return void this.completeTask(e, null, null);
			let r = kn(t.data), i = new AbortController();
			this.abortControllers[e] = i;
			try {
				let n = await this.messageHandlers[t.type](t.sourceMapId, r, i);
				this.completeTask(e, null, n);
			} catch (t) {
				this.completeTask(e, v(t));
			}
		}
		completeTask(e, t, r) {
			let i = [];
			delete this.abortControllers[e];
			let n = {
				id: e,
				type: "<response>",
				sourceMapId: this.mapId,
				origin: location.origin,
				error: t ? Fn(t) : null,
				data: Fn(r, i)
			};
			this.target.postMessage(n, { transfer: i });
		}
		remove() {
			this.invoker.remove(), this.subscription.unsubscribe();
		}
	};
	function Bn(e, t, r) {
		r[e]?.includes(t) || (r[e] || (r[e] = []), r[e].push(t));
	}
	function Mn(e, t, r) {
		if (r?.[e]) {
			let i = r[e].indexOf(t);
			-1 !== i && r[e].splice(i, 1);
		}
	}
	var Pn = class {
		constructor(e, t = {}) {
			w(this, t), this.type = e;
		}
	}, zn = class extends Pn {
		constructor(e, t = {}) {
			super("error", w({ error: e }, t));
		}
	}, Ln = class {
		on(e, t) {
			return this._listeners || (this._listeners = {}), Bn(e, t, this._listeners), { unsubscribe: () => {
				this.off(e, t);
			} };
		}
		off(e, t) {
			return Mn(e, t, this._listeners), Mn(e, t, this._oneTimeListeners), this;
		}
		once(e, t) {
			return t ? (this._oneTimeListeners || (this._oneTimeListeners = {}), Bn(e, t, this._oneTimeListeners), this) : new Promise((t) => this.once(e, t));
		}
		fire(e, t) {
			let r = "string" == typeof e ? new Pn(e, t || {}) : e, i = r.type;
			if (this.listens(i)) {
				r.target = this;
				let e = this._listeners?.[i]?.slice() ?? [];
				for (let i of e) i.call(this, r);
				let t = this._oneTimeListeners?.[i]?.slice() ?? [];
				for (let a of t) Mn(i, a, this._oneTimeListeners), a.call(this, r);
				let n = this._eventedParent;
				n && (w(r, "function" == typeof this._eventedParentData ? this._eventedParentData() : this._eventedParentData), n.fire(r));
			} else r instanceof zn && console.error(r.error);
			return this;
		}
		listens(e) {
			return !!(this._listeners?.[e]?.length || this._oneTimeListeners?.[e]?.length || this._eventedParent?.listens(e));
		}
		setEventedParent(e, t) {
			return this._eventedParent = e, this._eventedParentData = t, this;
		}
	};
	const Vn = un;
	new Set(Object.keys($).filter((e) => e.startsWith("source_")).map((e) => e.slice(7).replaceAll("_", "-")));
	var On = class {
		constructor() {
			this.first = !0;
		}
		update(e, t) {
			let r = Math.floor(e);
			return this.first ? (this.first = !1, this.lastIntegerZoom = r, this.lastIntegerZoomTime = 0, this.lastZoom = e, this.lastFloorZoom = r, !0) : (this.lastFloorZoom > r ? (this.lastIntegerZoom = r + 1, this.lastIntegerZoomTime = t) : this.lastFloorZoom < r && (this.lastIntegerZoom = r, this.lastIntegerZoomTime = t), e !== this.lastZoom && (this.lastZoom = e, this.lastFloorZoom = r, !0));
		}
	}, Rn = class {
		constructor(e, t) {
			this.zoom = e, t ? (this.now = t.now || 0, this.fadeDuration = t.fadeDuration || 0, this.zoomHistory = t.zoomHistory || new On(), this.transition = t.transition || {}) : (this.now = 0, this.fadeDuration = 0, this.zoomHistory = new On(), this.transition = {});
		}
		crossFadingFactor() {
			return 0 === this.fadeDuration ? 1 : Math.min((this.now - this.zoomHistory.lastIntegerZoomTime) / this.fadeDuration, 1);
		}
		getCrossfadeParameters() {
			let e = this.zoom, t = e - Math.floor(e), r = this.crossFadingFactor();
			return e > this.zoomHistory.lastIntegerZoom ? {
				fromScale: 2,
				toScale: 1,
				t: t + (1 - t) * r
			} : {
				fromScale: .5,
				toScale: 1,
				t: 1 - (1 - r) * t
			};
		}
	}, $n = class {
		constructor(e, t, r, i) {
			this.property = e, this.value = t, this.expression = function(e, t, r, i) {
				if (Ur(e)) return new si(e, t, r);
				if (ti(e)) {
					let n = ai(e, t, r, i);
					if ("error" === n.result) throw Error(n.value.map((e) => `${e.key}: ${e.message}`).join(", "));
					return n.value;
				}
				{
					let t = e;
					return "color" === r.type && "string" == typeof e ? t = Pe.parse(e) : "padding" !== r.type || "number" != typeof e && !Array.isArray(e) ? "numberArray" !== r.type || "number" != typeof e && !Array.isArray(e) ? "colorArray" !== r.type || "string" != typeof e && !Array.isArray(e) ? "variableAnchorOffsetCollection" === r.type && Array.isArray(e) ? t = je.parse(e) : "projectionDefinition" === r.type && "string" == typeof e && (t = Ge.parse(e)) : t = $e.parse(e) : t = Re.parse(e) : t = Oe.parse(e), {
						globalStateRefs: /* @__PURE__ */ new Set(),
						_globalState: null,
						kind: "constant",
						evaluate: () => t
					};
				}
			}(void 0 === t ? e.specification.default : t, r, e.specification, i);
		}
		isDataDriven() {
			return "source" === this.expression.kind || "composite" === this.expression.kind;
		}
		getGlobalStateRefs() {
			return this.expression.globalStateRefs || /* @__PURE__ */ new Set();
		}
		readsGlobalState(e) {
			let t = this.getGlobalStateRefs();
			return e.some((e) => t.has(e));
		}
		possiblyEvaluate(e, t, r) {
			return this.property.possiblyEvaluate(this, e, t, r);
		}
	}, Nn = class {
		constructor(e, t, r) {
			this.property = e, this.value = new $n(e, void 0, t, r);
		}
		transitioned(e, t) {
			return t.value === this.value ? t : new jn(this.property, this.value, t, w({}, e.transition, this.transition), e.now);
		}
		untransitioned() {
			return new jn(this.property, this.value, null, {}, 0);
		}
	}, Un = class {
		constructor(e, t, r) {
			this._properties = e, this._values = Object.create(e.defaultTransitionablePropertyValues), this._globalState = r, this._rootKey = t;
		}
		_propertyRootKey(e) {
			return `${this._rootKey}.${String(e)}`;
		}
		hasProperty(e) {
			return e in this._properties.defaultTransitionablePropertyValues;
		}
		getValue(e) {
			return S(this._values[e].value.value);
		}
		setValue(e, t) {
			Object.hasOwn(this._values, e) || (this._values[e] = new Nn(this._values[e].property, this._propertyRootKey(e), this._globalState)), this._values[e].value = new $n(this._values[e].property, null === t ? void 0 : S(t), this._propertyRootKey(e), this._globalState);
		}
		setValues(e) {
			for (let t in e) {
				let r = e[t];
				t.endsWith("-transition") ? this.setTransition(t.slice(0, -11), r) : D(this._values[t].value.value, r) || this.setValue(t, r);
			}
		}
		getTransition(e) {
			return S(this._values[e].transition);
		}
		setTransition(e, t) {
			Object.hasOwn(this._values, e) || (this._values[e] = new Nn(this._values[e].property, this._propertyRootKey(e), this._globalState)), this._values[e].transition = S(t) || void 0;
		}
		retainPriorGlobalState(e, t, r) {
			for (let i of Object.keys(r._values)) for (let n = r._values[i]; n; n = n.prior) {
				let { value: r } = n;
				r.property.specification.transition && !r.isDataDriven() && r.expression._globalState === this._globalState && r.readsGlobalState(e) && (n.value = new $n(r.property, r.value, this._propertyRootKey(i), t));
			}
		}
		applyGlobalStateChange(e, t, r, i) {
			this.retainPriorGlobalState(e, t, r);
			let n = !1;
			for (let a of Object.keys(this._values)) {
				let { value: t } = this._values[a];
				t.readsGlobalState(e) && (this.setValue(a, t.value), n = !0);
			}
			return n ? this.transitioned(i, r) : r;
		}
		serialize() {
			let e = {};
			for (let t of Object.keys(this._values)) {
				let r = this.getValue(t);
				void 0 !== r && (e[t] = r);
				let i = this.getTransition(t);
				void 0 !== i && (e[`${t}-transition`] = i);
			}
			return e;
		}
		transitioned(e, t) {
			let r = new qn(this._properties);
			for (let i of Object.keys(this._values)) r._values[i] = this._values[i].transitioned(e, t._values[i]);
			return r;
		}
		untransitioned() {
			let e = new qn(this._properties);
			for (let t of Object.keys(this._values)) e._values[t] = this._values[t].untransitioned();
			return e;
		}
	}, jn = class {
		constructor(e, t, r, i, n) {
			this.property = e, this.value = t, this.begin = n + i.delay || 0, this.end = this.begin + i.duration || 0, e.specification.transition && (i.delay || i.duration) && (this.prior = r);
		}
		possiblyEvaluate(e, t, r) {
			let i = e.now || 0, n = this.value.possiblyEvaluate(e, t, r), a = this.prior;
			if (!a) return n;
			if (i > this.end || this.value.isDataDriven()) return this.prior = null, n;
			if (i < this.begin) return a.possiblyEvaluate(e, t, r);
			{
				let s = (i - this.begin) / (this.end - this.begin);
				return this.property.interpolate(a.possiblyEvaluate(e, t, r), n, function(e) {
					if (e <= 0) return 0;
					if (e >= 1) return 1;
					let t = e * e, r = t * e;
					return 4 * (e < .5 ? r : 3 * (e - t) + r - .75);
				}(s));
			}
		}
	}, qn = class {
		constructor(e) {
			this._properties = e, this._values = Object.create(e.defaultTransitioningPropertyValues);
		}
		possiblyEvaluate(e, t, r) {
			let i = new Yn(this._properties);
			for (let n of Object.keys(this._values)) i._values[n] = this._values[n].possiblyEvaluate(e, t, r);
			return i;
		}
		hasTransition() {
			for (let e of Object.keys(this._values)) if (this._values[e].prior) return !0;
			return !1;
		}
	}, Gn = class {
		constructor(e, t, r) {
			this._properties = e, this._values = Object.create(e.defaultPropertyValues), this._globalState = r, this._rootKey = t;
		}
		_propertyRootKey(e) {
			return `${this._rootKey}.${String(e)}`;
		}
		hasValue(e) {
			return void 0 !== this._values[e].value;
		}
		hasProperty(e) {
			return e in this._properties.defaultPropertyValues;
		}
		getValue(e) {
			return S(this._values[e].value);
		}
		setValue(e, t) {
			this._values[e] = new $n(this._values[e].property, null === t ? void 0 : S(t), this._propertyRootKey(e), this._globalState);
		}
		serialize() {
			let e = {};
			for (let t of Object.keys(this._values)) {
				let r = this.getValue(t);
				void 0 !== r && (e[t] = r);
			}
			return e;
		}
		possiblyEvaluate(e, t, r) {
			let i = new Yn(this._properties);
			for (let n of Object.keys(this._values)) i._values[n] = this._values[n].possiblyEvaluate(e, t, r);
			return i;
		}
	}, Xn = class {
		constructor(e, t, r) {
			this.property = e, this.value = t, this.parameters = r;
		}
		isConstant() {
			return "constant" === this.value.kind;
		}
		constantOr(e) {
			return "constant" === this.value.kind ? this.value.value : e;
		}
		evaluate(e, t, r, i) {
			return this.property.evaluate(this.value, this.parameters, e, t, r, i);
		}
	}, Yn = class {
		constructor(e) {
			this._properties = e, this._values = Object.create(e.defaultPossiblyEvaluatedValues);
		}
		get(e) {
			return this._values[e];
		}
	};
	function Wn(e) {
		if (Array.isArray(e)) return e.length;
		let t = e?.values;
		return Array.isArray(t) ? t.length : void 0;
	}
	function Zn(e, t) {
		let r = Wn(e), i = Wn(t);
		return void 0 !== r && void 0 !== i && r !== i;
	}
	var Hn = class {
		constructor(e, t) {
			this.specification = e, this.name = t;
		}
		possiblyEvaluate(e, t) {
			if (e.isDataDriven()) throw Error("Value should not be data driven");
			return e.expression.evaluate(t);
		}
		interpolate(e, t, r) {
			if (Zn(e, t)) return E(`Property "${this.name}" is trying to interpolate arrays of different lengths. Rendering may 'jump'.`), t;
			let i = this.specification.type, n = nt[i];
			return n ? n(e, t, r) : e;
		}
	}, Kn = class {
		constructor(e, t, r) {
			this.specification = e, this.name = t, this.overrides = r;
		}
		possiblyEvaluate(e, t, r, i) {
			return "constant" === e.expression.kind || "camera" === e.expression.kind ? new Xn(this, {
				kind: "constant",
				value: e.expression.evaluate(t, null, {}, r, i)
			}, t) : new Xn(this, e.expression, t);
		}
		interpolate(e, t, r) {
			if ("constant" !== e.value.kind || "constant" !== t.value.kind) return e;
			if (void 0 === e.value.value || void 0 === t.value.value) return new Xn(this, {
				kind: "constant",
				value: void 0
			}, e.parameters);
			if (Zn(e.value.value, t.value.value)) return E(`Property "${this.name}" is trying to interpolate arrays of different lengths. Rendering may 'jump'.`), t;
			let i = this.specification.type, n = nt[i];
			if (n) {
				let i = n(e.value.value, t.value.value, r);
				return new Xn(this, {
					kind: "constant",
					value: i
				}, e.parameters);
			}
			return e;
		}
		evaluate(e, t, r, i, n, a) {
			return "constant" === e.kind ? e.value : e.evaluate(t, r, i, n, a);
		}
	}, Jn = class extends Kn {
		possiblyEvaluate(e, t, r, i) {
			if (void 0 === e.value) return new Xn(this, {
				kind: "constant",
				value: void 0
			}, t);
			if ("constant" === e.expression.kind) {
				let n = e.expression.evaluate(t, null, {}, r, i), a = "resolvedImage" === e.property.specification.type && "string" != typeof n ? n.name : n, s = this._calculate(a, a, a, t);
				return new Xn(this, {
					kind: "constant",
					value: s
				}, t);
			}
			if ("camera" === e.expression.kind) {
				let r = this._calculate(e.expression.evaluate({ zoom: t.zoom - 1 }), e.expression.evaluate({ zoom: t.zoom }), e.expression.evaluate({ zoom: t.zoom + 1 }), t);
				return new Xn(this, {
					kind: "constant",
					value: r
				}, t);
			}
			return new Xn(this, e.expression, t);
		}
		evaluate(e, t, r, i, n, a) {
			if ("source" === e.kind) {
				let s = e.evaluate(t, r, i, n, a);
				return this._calculate(s, s, s, t);
			}
			return "composite" === e.kind ? this._calculate(e.evaluate({ zoom: Math.floor(t.zoom) - 1 }, r, i), e.evaluate({ zoom: Math.floor(t.zoom) }, r, i), e.evaluate({ zoom: Math.floor(t.zoom) + 1 }, r, i), t) : e.value;
		}
		_calculate(e, t, r, i) {
			return i.zoom > i.zoomHistory.lastIntegerZoom ? {
				from: e,
				to: t
			} : {
				from: r,
				to: t
			};
		}
		interpolate(e) {
			return e;
		}
	}, Qn = class {
		constructor(e, t) {
			this.specification = e, this.name = t;
		}
		possiblyEvaluate(e, t, r, i) {
			if (void 0 !== e.value) {
				if ("constant" === e.expression.kind) {
					let n = e.expression.evaluate(t, null, {}, r, i);
					return this._calculate(n, n, n, t);
				}
				return this._calculate(e.expression.evaluate(new Rn(Math.floor(t.zoom - 1), t)), e.expression.evaluate(new Rn(Math.floor(t.zoom), t)), e.expression.evaluate(new Rn(Math.floor(t.zoom + 1), t)), t);
			}
		}
		_calculate(e, t, r, i) {
			return i.zoom > i.zoomHistory.lastIntegerZoom ? {
				from: e,
				to: t
			} : {
				from: r,
				to: t
			};
		}
		interpolate(e) {
			return e;
		}
	}, ea = class {
		constructor(e, t) {
			this.specification = e, this.name = t;
		}
		possiblyEvaluate(e, t, r, i) {
			return !!e.expression.evaluate(t, null, {}, r, i);
		}
		interpolate() {
			return !1;
		}
	}, ta = class {
		constructor(e) {
			this.properties = e, this.defaultPropertyValues = {}, this.defaultTransitionablePropertyValues = {}, this.defaultTransitioningPropertyValues = {}, this.defaultPossiblyEvaluatedValues = {}, this.overridableProperties = [];
			for (let t in e) {
				let r = e[t];
				r.specification.overridable && this.overridableProperties.push(t);
				let i = this.defaultPropertyValues[t] = new $n(r, void 0, r.name, void 0), n = this.defaultTransitionablePropertyValues[t] = new Nn(r, r.name, void 0);
				this.defaultTransitioningPropertyValues[t] = n.untransitioned(), this.defaultPossiblyEvaluatedValues[t] = i.possiblyEvaluate({});
			}
		}
	};
	Dn("DataDrivenProperty", Kn), Dn("DataConstantProperty", Hn), Dn("CrossFadedDataDrivenProperty", Jn), Dn("CrossFadedProperty", Qn), Dn("ColorRampProperty", ea);
	const ra = " is a PAINT property not a LAYOUT property. Use get/setPaintProperty instead?", ia = " is a LAYOUT property not a PAINT property. Use get/setLayoutProperty instead?";
	var na = class extends Ln {
		constructor(e, t, r) {
			if (super(), this.id = e.id, this.type = e.type, this._globalState = r, this._featureFilter = {
				filter: () => !0,
				needGeometry: !1,
				getGlobalStateRefs: () => /* @__PURE__ */ new Set()
			}, this._visibilityExpression = function(e, t, r) {
				return new dn(e, t, r);
			}(this.visibility, `layers[${this.id}].layout.visibility`, r), "custom" !== e.type && (this.metadata = e.metadata, this.minzoom = e.minzoom, this.maxzoom = e.maxzoom, "background" !== e.type && (this.source = e.source, this.sourceLayer = e["source-layer"], this.filter = e.filter, this._featureFilter = xi(e.filter, `layers[${this.id}].filter`, r)), t.layout && (this._unevaluatedLayout = new Gn(t.layout, `layers[${this.id}].layout`, r)), t.paint)) {
				this._transitionablePaint = new Un(t.paint, `layers[${this.id}].paint`, r);
				for (let t in e.paint) this.setPaintProperty(t, e.paint[t], { validate: !1 });
				for (let t in e.layout) this.setLayoutProperty(t, e.layout[t], { validate: !1 });
				this._transitioningPaint = this._transitionablePaint.untransitioned(), this.paint = new Yn(t.paint);
			}
		}
		setFilter(e) {
			this.filter = e, this._featureFilter = xi(e, `layers[${this.id}].filter`, this._globalState);
		}
		getCrossfadeParameters() {
			return this._crossfadeParameters;
		}
		getLayoutProperty(e) {
			if ("visibility" === e) return this.visibility;
			if (this._transitionablePaint?.hasProperty(e)) throw Error(e + ra);
			if (!this._unevaluatedLayout) throw Error(`Cannot get layout property "${e}" on layer type "${this.type}" which has no layout properties.`);
			return this._unevaluatedLayout.getValue(e);
		}
		getLayoutAffectingGlobalStateRefs() {
			let e = /* @__PURE__ */ new Set();
			for (let t of this._visibilityExpression.getGlobalStateRefs()) e.add(t);
			if (this._unevaluatedLayout) for (let t in this._unevaluatedLayout._values) {
				let r = this._unevaluatedLayout._values[t];
				for (let t of r.getGlobalStateRefs()) e.add(t);
			}
			for (let t of this._featureFilter.getGlobalStateRefs()) e.add(t);
			return e;
		}
		getPaintAffectingGlobalStateRefs() {
			let e = new globalThis.Map();
			if (this._transitionablePaint) for (let t in this._transitionablePaint._values) {
				let r = this._transitionablePaint._values[t].value;
				for (let i of r.getGlobalStateRefs()) {
					let n = e.get(i) ?? [];
					n.push({
						name: t,
						value: r.value
					}), e.set(i, n);
				}
			}
			return e;
		}
		getVisibilityAffectingGlobalStateRefs() {
			return this._visibilityExpression.getGlobalStateRefs();
		}
		setLayoutProperty(e, t, r = {}) {
			"visibility" === e ? (this.visibility = t, this._visibilityExpression.setValue(t), this.recalculateVisibility()) : this._transitionablePaint?.hasProperty(e) ? this.fire(new zn(Error(e + ra))) : null != t && this._validate(Vn.layoutProperty, `layers.${this.id}.layout.${e}`, e, t, r) || this._unevaluatedLayout.setValue(e, t);
		}
		getPaintProperty(e) {
			if (e.endsWith("-transition")) {
				let t = e.slice(0, -11);
				if ("visibility" === t || this._unevaluatedLayout?.hasProperty(t)) throw Error(e + ia);
				return this._transitionablePaint.getTransition(t);
			}
			if ("visibility" === e || this._unevaluatedLayout?.hasProperty(e)) throw Error(e + ia);
			return this._transitionablePaint.getValue(e);
		}
		setPaintProperty(e, t, r = {}) {
			if ("visibility" === e || this._unevaluatedLayout?.hasProperty(e)) return this.fire(new zn(Error(e + ia))), !1;
			if (null != t && this._validate(Vn.paintProperty, `layers.${this.id}.paint.${e}`, e, t, r)) return !1;
			if (e.endsWith("-transition")) return this._transitionablePaint.setTransition(e.slice(0, -11), t || void 0), !1;
			{
				let r = this._transitionablePaint._values[e], i = "cross-faded-data-driven" === r.property.specification["property-type"], n = r.value.isDataDriven(), a = r.value;
				this._transitionablePaint.setValue(e, t), this._handleSpecialPaintPropertyUpdate(e);
				let s = this._transitionablePaint._values[e].value;
				return s.isDataDriven() || n || i || this._handleOverridablePaintPropertyUpdate(e, a, s);
			}
		}
		_handleSpecialPaintPropertyUpdate(e) {}
		_handleOverridablePaintPropertyUpdate(e, t, r) {
			return !1;
		}
		isHidden(e = this.minzoom, t = !1) {
			return !!(this.minzoom && e < (t ? Math.floor(this.minzoom) : this.minzoom) || this.maxzoom && e >= this.maxzoom) || "none" === this._evaluatedVisibility;
		}
		updateTransitions(e) {
			this._transitioningPaint = this._transitionablePaint.transitioned(e, this._transitioningPaint);
		}
		retainPriorGlobalState(e, t) {
			this._transitionablePaint?.retainPriorGlobalState(e, t, this._transitioningPaint);
		}
		hasTransition() {
			return this._transitioningPaint.hasTransition();
		}
		recalculateVisibility() {
			this._evaluatedVisibility = this._visibilityExpression.evaluate();
		}
		recalculate(e, t) {
			e.getCrossfadeParameters && (this._crossfadeParameters = e.getCrossfadeParameters()), this._unevaluatedLayout && (this.layout = this._unevaluatedLayout.possiblyEvaluate(e, void 0, t)), this.paint = this._transitioningPaint.possiblyEvaluate(e, void 0, t);
		}
		serialize() {
			let e = {
				id: this.id,
				type: this.type,
				source: this.source,
				"source-layer": this.sourceLayer,
				metadata: this.metadata,
				minzoom: this.minzoom,
				maxzoom: this.maxzoom,
				filter: this.filter,
				layout: this._unevaluatedLayout?.serialize(),
				paint: this._transitionablePaint?.serialize()
			};
			return this.visibility && (e.layout || (e.layout = {}), e.layout.visibility = this.visibility), function(e, t) {
				let r = {};
				for (let i in e) t.call(this, e[i], i, e) && (r[i] = e[i]);
				return r;
			}(e, (e, t) => !(void 0 === e || "layout" === t && !Object.keys(e).length || "paint" === t && !Object.keys(e).length));
		}
		_validate(e, t, r, i, n = {}) {
			return function(e, t, r, i) {
				return !1 !== i?.validate && function(e, t) {
					let r = !1;
					for (let i of t) "warning" === i.severity ? E(i.message) : (e.fire(new zn(Error(i.message))), r = !0);
					return r;
				}(e, t({
					styleSpec: $,
					...r
				}));
			}(this, e, {
				key: t,
				layerType: this.type,
				objectKey: r,
				value: i
			}, n);
		}
		is3D() {
			return !1;
		}
		isTileClipped() {
			return !1;
		}
		hasOffscreenPass() {
			return !1;
		}
		resize() {}
		isStateDependent() {
			for (let e in this.paint._values) {
				let t = this.paint.get(e);
				if (t instanceof Xn && Lr(t.property.specification) && ("source" === t.value.kind || "composite" === t.value.kind) && t.value.isStateDependent) return !0;
			}
			return !1;
		}
	};
	const aa = {
		Int8: Int8Array,
		Uint8: Uint8Array,
		Int16: Int16Array,
		Uint16: Uint16Array,
		Int32: Int32Array,
		Uint32: Uint32Array,
		Float32: Float32Array
	};
	var sa = class {
		constructor(e, t) {
			this._structArray = e, this._pos1 = t * this.size, this._pos2 = this._pos1 / 2, this._pos4 = this._pos1 / 4, this._pos8 = this._pos1 / 8;
		}
	}, oa = class {
		constructor() {
			this.isTransferred = !1, this.capacity = -1, this.resize(0);
		}
		static serialize(e, t) {
			return e._trim(), t && (e.isTransferred = !0, t.push(e.arrayBuffer)), {
				length: e.length,
				arrayBuffer: e.arrayBuffer
			};
		}
		static deserialize(e) {
			let t = Object.create(this.prototype);
			return t.arrayBuffer = e.arrayBuffer, t.length = e.length, t.capacity = e.arrayBuffer.byteLength / t.bytesPerElement, t._refreshViews(), t;
		}
		_trim() {
			this.length !== this.capacity && (this.capacity = this.length, this.arrayBuffer = this.arrayBuffer.slice(0, this.length * this.bytesPerElement), this._refreshViews());
		}
		clear() {
			this.length = 0;
		}
		resize(e) {
			this.reserve(e), this.length = e;
		}
		reserve(e) {
			if (e > this.capacity) {
				this.capacity = Math.max(e, Math.floor(5 * this.capacity), 128), this.arrayBuffer = new ArrayBuffer(this.capacity * this.bytesPerElement);
				let t = this.uint8;
				this._refreshViews(), t && this.uint8.set(t);
			}
		}
		_refreshViews() {
			throw Error("_refreshViews() must be implemented by each concrete StructArray layout");
		}
		freeBufferAfterUpload() {
			this.arrayBuffer = /* @__PURE__ */ new ArrayBuffer(0), this._refreshViews();
		}
	};
	function la(e, t = 1) {
		let r = 0, i = 0;
		return {
			members: e.map((e) => {
				let n = function(e) {
					return aa[e].BYTES_PER_ELEMENT;
				}(e.type), a = r = ua(r, Math.max(t, n)), s = e.components || 1;
				return i = Math.max(i, n), r += n * s, {
					name: e.name,
					type: e.type,
					components: s,
					offset: a
				};
			}),
			size: ua(r, Math.max(i, t)),
			alignment: t
		};
	}
	function ua(e, t) {
		return Math.ceil(e / t) * t;
	}
	var ha = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
		}
		emplaceBack(e, t) {
			let r = this.length;
			return this.resize(r + 1), this.emplace(r, e, t);
		}
		emplace(e, t, r) {
			let i = 2 * e;
			return this.int16[i + 0] = t, this.int16[i + 1] = r, e;
		}
	};
	ha.prototype.bytesPerElement = 4, Dn("StructArrayLayout2i4", ha);
	var ca = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r) {
			let i = this.length;
			return this.resize(i + 1), this.emplace(i, e, t, r);
		}
		emplace(e, t, r, i) {
			let n = 3 * e;
			return this.int16[n + 0] = t, this.int16[n + 1] = r, this.int16[n + 2] = i, e;
		}
	};
	ca.prototype.bytesPerElement = 6, Dn("StructArrayLayout3i6", ca);
	var pa = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i) {
			let n = this.length;
			return this.resize(n + 1), this.emplace(n, e, t, r, i);
		}
		emplace(e, t, r, i, n) {
			let a = 4 * e;
			return this.int16[a + 0] = t, this.int16[a + 1] = r, this.int16[a + 2] = i, this.int16[a + 3] = n, e;
		}
	};
	pa.prototype.bytesPerElement = 8, Dn("StructArrayLayout4i8", pa);
	var fa = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n, a) {
			let s = this.length;
			return this.resize(s + 1), this.emplace(s, e, t, r, i, n, a);
		}
		emplace(e, t, r, i, n, a, s) {
			let o = 6 * e;
			return this.int16[o + 0] = t, this.int16[o + 1] = r, this.int16[o + 2] = i, this.int16[o + 3] = n, this.int16[o + 4] = a, this.int16[o + 5] = s, e;
		}
	};
	fa.prototype.bytesPerElement = 12, Dn("StructArrayLayout2i4i12", fa);
	var da = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.int8 = new Int8Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n, a, s, o) {
			let l = this.length;
			return this.resize(l + 1), this.emplace(l, e, t, r, i, n, a, s, o);
		}
		emplace(e, t, r, i, n, a, s, o, l) {
			let u = 5 * e, h = 10 * e;
			return this.int16[u + 0] = t, this.int16[u + 1] = r, this.uint8[h + 4] = i, this.uint8[h + 5] = n, this.uint8[h + 6] = a, this.uint8[h + 7] = s, this.int8[h + 8] = o, this.int8[h + 9] = l, e;
		}
	};
	da.prototype.bytesPerElement = 10, Dn("StructArrayLayout2i4ub2b10", da);
	var ya = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
		}
		emplaceBack(e, t) {
			let r = this.length;
			return this.resize(r + 1), this.emplace(r, e, t);
		}
		emplace(e, t, r) {
			let i = 2 * e;
			return this.float32[i + 0] = t, this.float32[i + 1] = r, e;
		}
	};
	ya.prototype.bytesPerElement = 8, Dn("StructArrayLayout2f8", ya);
	var ma = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n, a, s, o, l, u) {
			let h = this.length;
			return this.resize(h + 1), this.emplace(h, e, t, r, i, n, a, s, o, l, u);
		}
		emplace(e, t, r, i, n, a, s, o, l, u, h) {
			let c = 10 * e;
			return this.uint16[c + 0] = t, this.uint16[c + 1] = r, this.uint16[c + 2] = i, this.uint16[c + 3] = n, this.uint16[c + 4] = a, this.uint16[c + 5] = s, this.uint16[c + 6] = o, this.uint16[c + 7] = l, this.uint16[c + 8] = u, this.uint16[c + 9] = h, e;
		}
	};
	ma.prototype.bytesPerElement = 20, Dn("StructArrayLayout10ui20", ma);
	var ga = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n, a, s, o) {
			let l = this.length;
			return this.resize(l + 1), this.emplace(l, e, t, r, i, n, a, s, o);
		}
		emplace(e, t, r, i, n, a, s, o, l) {
			let u = 8 * e;
			return this.uint16[u + 0] = t, this.uint16[u + 1] = r, this.uint16[u + 2] = i, this.uint16[u + 3] = n, this.uint16[u + 4] = a, this.uint16[u + 5] = s, this.uint16[u + 6] = o, this.uint16[u + 7] = l, e;
		}
	};
	ga.prototype.bytesPerElement = 16, Dn("StructArrayLayout8ui16", ga);
	var xa = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n, a, s, o, l, u, h, c, p) {
			let f = this.length;
			return this.resize(f + 1), this.emplace(f, e, t, r, i, n, a, s, o, l, u, h, c, p);
		}
		emplace(e, t, r, i, n, a, s, o, l, u, h, c, p, f) {
			let d = 14 * e, y = 7 * e;
			return this.int16[d + 0] = t, this.int16[d + 1] = r, this.int16[d + 2] = i, this.int16[d + 3] = n, this.uint16[d + 4] = a, this.uint16[d + 5] = s, this.uint16[d + 6] = o, this.uint16[d + 7] = l, this.int16[d + 8] = u, this.int16[d + 9] = h, this.int16[d + 10] = c, this.int16[d + 11] = p, this.float32[y + 6] = f, e;
		}
	};
	xa.prototype.bytesPerElement = 28, Dn("StructArrayLayout4i4ui4i1f28", xa);
	var va = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r) {
			let i = this.length;
			return this.resize(i + 1), this.emplace(i, e, t, r);
		}
		emplace(e, t, r, i) {
			let n = 3 * e;
			return this.float32[n + 0] = t, this.float32[n + 1] = r, this.float32[n + 2] = i, e;
		}
	};
	va.prototype.bytesPerElement = 12, Dn("StructArrayLayout3f12", va);
	var ba = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer);
		}
		emplaceBack(e) {
			let t = this.length;
			return this.resize(t + 1), this.emplace(t, e);
		}
		emplace(e, t) {
			let r = 1 * e;
			return this.uint32[r + 0] = t, e;
		}
	};
	ba.prototype.bytesPerElement = 4, Dn("StructArrayLayout1ul4", ba);
	var wa = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n, a, s, o, l) {
			let u = this.length;
			return this.resize(u + 1), this.emplace(u, e, t, r, i, n, a, s, o, l);
		}
		emplace(e, t, r, i, n, a, s, o, l, u) {
			let h = 10 * e, c = 5 * e;
			return this.int16[h + 0] = t, this.int16[h + 1] = r, this.int16[h + 2] = i, this.int16[h + 3] = n, this.int16[h + 4] = a, this.int16[h + 5] = s, this.uint32[c + 3] = o, this.uint16[h + 8] = l, this.uint16[h + 9] = u, e;
		}
	};
	wa.prototype.bytesPerElement = 20, Dn("StructArrayLayout6i1ul2ui20", wa);
	var _a = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n, a) {
			let s = this.length;
			return this.resize(s + 1), this.emplace(s, e, t, r, i, n, a);
		}
		emplace(e, t, r, i, n, a, s) {
			let o = 6 * e;
			return this.int16[o + 0] = t, this.int16[o + 1] = r, this.int16[o + 2] = i, this.int16[o + 3] = n, this.int16[o + 4] = a, this.int16[o + 5] = s, e;
		}
	};
	_a.prototype.bytesPerElement = 12, Dn("StructArrayLayout2i2i2i12", _a);
	var Da = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n) {
			let a = this.length;
			return this.resize(a + 1), this.emplace(a, e, t, r, i, n);
		}
		emplace(e, t, r, i, n, a) {
			let s = 4 * e, o = 8 * e;
			return this.float32[s + 0] = t, this.float32[s + 1] = r, this.float32[s + 2] = i, this.int16[o + 6] = n, this.int16[o + 7] = a, e;
		}
	};
	Da.prototype.bytesPerElement = 16, Dn("StructArrayLayout2f1f2i16", Da);
	var Sa = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n, a) {
			let s = this.length;
			return this.resize(s + 1), this.emplace(s, e, t, r, i, n, a);
		}
		emplace(e, t, r, i, n, a, s) {
			let o = 16 * e, l = 4 * e, u = 8 * e;
			return this.uint8[o + 0] = t, this.uint8[o + 1] = r, this.float32[l + 1] = i, this.float32[l + 2] = n, this.int16[u + 6] = a, this.int16[u + 7] = s, e;
		}
	};
	Sa.prototype.bytesPerElement = 16, Dn("StructArrayLayout2ub2f2i16", Sa);
	var Aa = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r) {
			let i = this.length;
			return this.resize(i + 1), this.emplace(i, e, t, r);
		}
		emplace(e, t, r, i) {
			let n = 3 * e;
			return this.uint16[n + 0] = t, this.uint16[n + 1] = r, this.uint16[n + 2] = i, e;
		}
	};
	Aa.prototype.bytesPerElement = 6, Dn("StructArrayLayout3ui6", Aa);
	var Ea = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n, a, s, o, l, u, h, c, p, f, d, y, m, g) {
			let x = this.length;
			return this.resize(x + 1), this.emplace(x, e, t, r, i, n, a, s, o, l, u, h, c, p, f, d, y, m, g);
		}
		emplace(e, t, r, i, n, a, s, o, l, u, h, c, p, f, d, y, m, g, x) {
			let v = 26 * e, b = 13 * e, w = 52 * e;
			return this.int16[v + 0] = t, this.int16[v + 1] = r, this.uint16[v + 2] = i, this.uint16[v + 3] = n, this.uint32[b + 2] = a, this.uint32[b + 3] = s, this.uint32[b + 4] = o, this.uint16[v + 10] = l, this.uint16[v + 11] = u, this.uint16[v + 12] = h, this.float32[b + 7] = c, this.float32[b + 8] = p, this.uint8[w + 36] = f, this.uint8[w + 37] = d, this.uint8[w + 38] = y, this.uint32[b + 10] = m, this.int16[v + 22] = g, this.float32[b + 12] = x, e;
		}
	};
	Ea.prototype.bytesPerElement = 52, Dn("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i1f52", Ea);
	var Fa = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i, n, a, s, o, l, u, h, c, p, f, d, y, m, g, x, v, b, w, _, D, S, A, E, F, k) {
			let I = this.length;
			return this.resize(I + 1), this.emplace(I, e, t, r, i, n, a, s, o, l, u, h, c, p, f, d, y, m, g, x, v, b, w, _, D, S, A, E, F, k);
		}
		emplace(e, t, r, i, n, a, s, o, l, u, h, c, p, f, d, y, m, g, x, v, b, w, _, D, S, A, E, F, k, I) {
			let T = 34 * e, C = 17 * e;
			return this.int16[T + 0] = t, this.int16[T + 1] = r, this.int16[T + 2] = i, this.int16[T + 3] = n, this.int16[T + 4] = a, this.int16[T + 5] = s, this.int16[T + 6] = o, this.int16[T + 7] = l, this.uint16[T + 8] = u, this.uint16[T + 9] = h, this.uint16[T + 10] = c, this.uint16[T + 11] = p, this.uint16[T + 12] = f, this.uint16[T + 13] = d, this.uint16[T + 14] = y, this.uint16[T + 15] = m, this.uint16[T + 16] = g, this.uint16[T + 17] = x, this.uint16[T + 18] = v, this.uint16[T + 19] = b, this.uint16[T + 20] = w, this.uint16[T + 21] = _, this.uint16[T + 22] = D, this.uint32[C + 12] = S, this.float32[C + 13] = A, this.float32[C + 14] = E, this.uint16[T + 30] = F, this.uint16[T + 31] = k, this.float32[C + 16] = I, e;
		}
	};
	Fa.prototype.bytesPerElement = 68, Dn("StructArrayLayout8i15ui1ul2f2ui1f68", Fa);
	var ka = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
		}
		emplaceBack(e) {
			let t = this.length;
			return this.resize(t + 1), this.emplace(t, e);
		}
		emplace(e, t) {
			let r = 1 * e;
			return this.float32[r + 0] = t, e;
		}
	};
	ka.prototype.bytesPerElement = 4, Dn("StructArrayLayout1f4", ka);
	var Ia = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r) {
			let i = this.length;
			return this.resize(i + 1), this.emplace(i, e, t, r);
		}
		emplace(e, t, r, i) {
			let n = 6 * e, a = 3 * e;
			return this.uint16[n + 0] = t, this.float32[a + 1] = r, this.float32[a + 2] = i, e;
		}
	};
	Ia.prototype.bytesPerElement = 12, Dn("StructArrayLayout1ui2f12", Ia);
	var Ta = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r) {
			let i = this.length;
			return this.resize(i + 1), this.emplace(i, e, t, r);
		}
		emplace(e, t, r, i) {
			let n = 2 * e, a = 4 * e;
			return this.uint32[n + 0] = t, this.uint16[a + 2] = r, this.uint16[a + 3] = i, e;
		}
	};
	Ta.prototype.bytesPerElement = 8, Dn("StructArrayLayout1ul2ui8", Ta);
	var Ca = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
		}
		emplaceBack(e, t) {
			let r = this.length;
			return this.resize(r + 1), this.emplace(r, e, t);
		}
		emplace(e, t, r) {
			let i = 2 * e;
			return this.uint16[i + 0] = t, this.uint16[i + 1] = r, e;
		}
	};
	Ca.prototype.bytesPerElement = 4, Dn("StructArrayLayout2ui4", Ca);
	var Ba = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
		}
		emplaceBack(e) {
			let t = this.length;
			return this.resize(t + 1), this.emplace(t, e);
		}
		emplace(e, t) {
			let r = 1 * e;
			return this.uint16[r + 0] = t, e;
		}
	};
	Ba.prototype.bytesPerElement = 2, Dn("StructArrayLayout1ui2", Ba);
	var Ma = class extends oa {
		_refreshViews() {
			this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
		}
		emplaceBack(e, t, r, i) {
			let n = this.length;
			return this.resize(n + 1), this.emplace(n, e, t, r, i);
		}
		emplace(e, t, r, i, n) {
			let a = 4 * e;
			return this.float32[a + 0] = t, this.float32[a + 1] = r, this.float32[a + 2] = i, this.float32[a + 3] = n, e;
		}
	};
	Ma.prototype.bytesPerElement = 16, Dn("StructArrayLayout4f16", Ma);
	var Pa = class extends sa {
		get anchorPointX() {
			return this._structArray.int16[this._pos2 + 0];
		}
		get anchorPointY() {
			return this._structArray.int16[this._pos2 + 1];
		}
		get x1() {
			return this._structArray.int16[this._pos2 + 2];
		}
		get y1() {
			return this._structArray.int16[this._pos2 + 3];
		}
		get x2() {
			return this._structArray.int16[this._pos2 + 4];
		}
		get y2() {
			return this._structArray.int16[this._pos2 + 5];
		}
		get featureIndex() {
			return this._structArray.uint32[this._pos4 + 3];
		}
		get sourceLayerIndex() {
			return this._structArray.uint16[this._pos2 + 8];
		}
		get bucketIndex() {
			return this._structArray.uint16[this._pos2 + 9];
		}
		get anchorPoint() {
			return new f(this.anchorPointX, this.anchorPointY);
		}
	};
	Pa.prototype.size = 20;
	var za = class extends wa {
		get(e) {
			return new Pa(this, e);
		}
	};
	Dn("CollisionBoxArray", za);
	var La = class extends sa {
		get anchorX() {
			return this._structArray.int16[this._pos2 + 0];
		}
		get anchorY() {
			return this._structArray.int16[this._pos2 + 1];
		}
		get glyphStartIndex() {
			return this._structArray.uint16[this._pos2 + 2];
		}
		get numGlyphs() {
			return this._structArray.uint16[this._pos2 + 3];
		}
		get vertexStartIndex() {
			return this._structArray.uint32[this._pos4 + 2];
		}
		get lineStartIndex() {
			return this._structArray.uint32[this._pos4 + 3];
		}
		get lineLength() {
			return this._structArray.uint32[this._pos4 + 4];
		}
		get segment() {
			return this._structArray.uint16[this._pos2 + 10];
		}
		get lowerSize() {
			return this._structArray.uint16[this._pos2 + 11];
		}
		get upperSize() {
			return this._structArray.uint16[this._pos2 + 12];
		}
		get lineOffsetX() {
			return this._structArray.float32[this._pos4 + 7];
		}
		get lineOffsetY() {
			return this._structArray.float32[this._pos4 + 8];
		}
		get writingMode() {
			return this._structArray.uint8[this._pos1 + 36];
		}
		get placedOrientation() {
			return this._structArray.uint8[this._pos1 + 37];
		}
		set placedOrientation(e) {
			this._structArray.uint8[this._pos1 + 37] = e;
		}
		get hidden() {
			return this._structArray.uint8[this._pos1 + 38];
		}
		set hidden(e) {
			this._structArray.uint8[this._pos1 + 38] = e;
		}
		get crossTileID() {
			return this._structArray.uint32[this._pos4 + 10];
		}
		set crossTileID(e) {
			this._structArray.uint32[this._pos4 + 10] = e;
		}
		get associatedIconIndex() {
			return this._structArray.int16[this._pos2 + 22];
		}
		get heightOffset() {
			return this._structArray.float32[this._pos4 + 12];
		}
	};
	La.prototype.size = 52;
	var Va = class extends Ea {
		get(e) {
			return new La(this, e);
		}
	};
	Dn("PlacedSymbolArray", Va);
	var Oa = class extends sa {
		get anchorX() {
			return this._structArray.int16[this._pos2 + 0];
		}
		get anchorY() {
			return this._structArray.int16[this._pos2 + 1];
		}
		get rightJustifiedTextSymbolIndex() {
			return this._structArray.int16[this._pos2 + 2];
		}
		get centerJustifiedTextSymbolIndex() {
			return this._structArray.int16[this._pos2 + 3];
		}
		get leftJustifiedTextSymbolIndex() {
			return this._structArray.int16[this._pos2 + 4];
		}
		get verticalPlacedTextSymbolIndex() {
			return this._structArray.int16[this._pos2 + 5];
		}
		get placedIconSymbolIndex() {
			return this._structArray.int16[this._pos2 + 6];
		}
		get verticalPlacedIconSymbolIndex() {
			return this._structArray.int16[this._pos2 + 7];
		}
		get key() {
			return this._structArray.uint16[this._pos2 + 8];
		}
		get textBoxStartIndex() {
			return this._structArray.uint16[this._pos2 + 9];
		}
		get textBoxEndIndex() {
			return this._structArray.uint16[this._pos2 + 10];
		}
		get verticalTextBoxStartIndex() {
			return this._structArray.uint16[this._pos2 + 11];
		}
		get verticalTextBoxEndIndex() {
			return this._structArray.uint16[this._pos2 + 12];
		}
		get iconBoxStartIndex() {
			return this._structArray.uint16[this._pos2 + 13];
		}
		get iconBoxEndIndex() {
			return this._structArray.uint16[this._pos2 + 14];
		}
		get verticalIconBoxStartIndex() {
			return this._structArray.uint16[this._pos2 + 15];
		}
		get verticalIconBoxEndIndex() {
			return this._structArray.uint16[this._pos2 + 16];
		}
		get featureIndex() {
			return this._structArray.uint16[this._pos2 + 17];
		}
		get numHorizontalGlyphVertices() {
			return this._structArray.uint16[this._pos2 + 18];
		}
		get numVerticalGlyphVertices() {
			return this._structArray.uint16[this._pos2 + 19];
		}
		get numIconVertices() {
			return this._structArray.uint16[this._pos2 + 20];
		}
		get numVerticalIconVertices() {
			return this._structArray.uint16[this._pos2 + 21];
		}
		get useRuntimeCollisionCircles() {
			return this._structArray.uint16[this._pos2 + 22];
		}
		get crossTileID() {
			return this._structArray.uint32[this._pos4 + 12];
		}
		set crossTileID(e) {
			this._structArray.uint32[this._pos4 + 12] = e;
		}
		get textBoxScale() {
			return this._structArray.float32[this._pos4 + 13];
		}
		get collisionCircleDiameter() {
			return this._structArray.float32[this._pos4 + 14];
		}
		get textAnchorOffsetStartIndex() {
			return this._structArray.uint16[this._pos2 + 30];
		}
		get textAnchorOffsetEndIndex() {
			return this._structArray.uint16[this._pos2 + 31];
		}
		get heightOffset() {
			return this._structArray.float32[this._pos4 + 16];
		}
	};
	Oa.prototype.size = 68;
	var Ra = class extends Fa {
		get(e) {
			return new Oa(this, e);
		}
	};
	Dn("SymbolInstanceArray", Ra);
	var $a = class extends ka {
		getoffsetX(e) {
			return this.float32[1 * e + 0];
		}
	};
	Dn("GlyphOffsetArray", $a);
	var Na = class extends ca {
		getx(e) {
			return this.int16[3 * e + 0];
		}
		gety(e) {
			return this.int16[3 * e + 1];
		}
		gettileUnitDistanceFromAnchor(e) {
			return this.int16[3 * e + 2];
		}
	};
	Dn("SymbolLineVertexArray", Na);
	var Ua = class extends sa {
		get textAnchor() {
			return this._structArray.uint16[this._pos2 + 0];
		}
		get textOffset0() {
			return this._structArray.float32[this._pos4 + 1];
		}
		get textOffset1() {
			return this._structArray.float32[this._pos4 + 2];
		}
	};
	Ua.prototype.size = 12;
	var ja = class extends Ia {
		get(e) {
			return new Ua(this, e);
		}
	};
	Dn("TextAnchorOffsetArray", ja);
	var qa = class extends sa {
		get featureIndex() {
			return this._structArray.uint32[this._pos4 + 0];
		}
		get sourceLayerIndex() {
			return this._structArray.uint16[this._pos2 + 2];
		}
		get bucketIndex() {
			return this._structArray.uint16[this._pos2 + 3];
		}
	};
	qa.prototype.size = 8;
	var Ga = class extends Ta {
		get(e) {
			return new qa(this, e);
		}
	};
	Dn("FeatureIndexArray", Ga);
	var Xa = class extends ha {}, Ya = class extends ha {}, Wa = class extends ha {}, Za = class extends fa {}, Ha = class extends da {}, Ka = class extends ya {}, Ja = class extends ma {}, Qa = class extends ga {}, es = class extends xa {}, ts = class extends va {}, rs = class extends ba {}, is = class extends _a {}, ns = class extends Sa {}, as = class extends Aa {}, ss = class extends Ca {};
	const os = la([{
		name: "a_pos",
		components: 2,
		type: "Int16"
	}], 4), ls = os.members;
	os.size, os.alignment;
	var us = class e {
		constructor(e = []) {
			this._forceNewSegmentOnNextPrepare = !1, this.segments = e;
		}
		prepareSegment(t, r, i, n) {
			let a = this.segments[this.segments.length - 1];
			return t > e.MAX_VERTEX_ARRAY_LENGTH && E(`Max vertices per segment is ${e.MAX_VERTEX_ARRAY_LENGTH}: bucket requested ${t}. Consider using the \`fillLargeMeshArrays\` function if you require meshes with more than ${e.MAX_VERTEX_ARRAY_LENGTH} vertices.`), this._forceNewSegmentOnNextPrepare || !a || a.vertexLength + t > e.MAX_VERTEX_ARRAY_LENGTH || a.sortKey !== n ? this.createNewSegment(r, i, n) : a;
		}
		createNewSegment(e, t, r) {
			let i = {
				vertexOffset: e.length,
				primitiveOffset: t.length,
				vertexLength: 0,
				primitiveLength: 0,
				vaos: {}
			};
			return void 0 !== r && (i.sortKey = r), this._forceNewSegmentOnNextPrepare = !1, this.segments.push(i), i;
		}
		getOrCreateLatestSegment(e, t, r) {
			return this.prepareSegment(0, e, t, r);
		}
		forceNewSegmentOnNextPrepare() {
			this._forceNewSegmentOnNextPrepare = !0;
		}
		get() {
			return this.segments;
		}
		destroy() {
			for (let e of this.segments) for (let t in e.vaos) e.vaos[t].destroy();
		}
		static simpleSegment(t, r, i, n) {
			return new e([{
				vertexOffset: t,
				primitiveOffset: r,
				vertexLength: i,
				primitiveLength: n,
				vaos: {},
				sortKey: 0
			}]);
		}
	};
	function hs(e, t) {
		return 256 * (e = b(Math.floor(e), 0, 255)) + b(Math.floor(t), 0, 255);
	}
	us.MAX_VERTEX_ARRAY_LENGTH = 65535, Dn("SegmentVector", us);
	const cs = la([
		{
			name: "a_pattern_from",
			components: 4,
			type: "Uint16"
		},
		{
			name: "a_pattern_to",
			components: 4,
			type: "Uint16"
		},
		{
			name: "a_pixel_ratio_from",
			components: 1,
			type: "Uint16"
		},
		{
			name: "a_pixel_ratio_to",
			components: 1,
			type: "Uint16"
		}
	]), ps = la([{
		name: "a_dasharray_from",
		components: 4,
		type: "Uint16"
	}, {
		name: "a_dasharray_to",
		components: 4,
		type: "Uint16"
	}]);
	var fs = h((e, t) => {
		void 0 !== t && (t.exports = function(e, t) {
			for (var r, i, n = 3 & e.length, a = e.length - n, s = t, o = 3432918353, l = 461845907, u = 0; u < a;) i = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24, ++u, s = 27492 + (65535 & (r = 5 * (65535 & (s = (s ^= i = (65535 & (i = (i = (65535 & i) * o + (((i >>> 16) * o & 65535) << 16) | 0) << 15 | i >>> 17)) * l + (((i >>> 16) * l & 65535) << 16) | 0) << 13 | s >>> 19)) + ((5 * (s >>> 16) & 65535) << 16) | 0)) + (((r >>> 16) + 58964 & 65535) << 16);
			switch (i = 0, n) {
				case 3: i ^= (255 & e.charCodeAt(u + 2)) << 16;
				case 2: i ^= (255 & e.charCodeAt(u + 1)) << 8;
				case 1: s ^= i = (65535 & (i = (i = (65535 & (i ^= 255 & e.charCodeAt(u))) * o + (((i >>> 16) * o & 65535) << 16) | 0) << 15 | i >>> 17)) * l + (((i >>> 16) * l & 65535) << 16) | 0;
			}
			return s ^= e.length, s = 2246822507 * (65535 & (s ^= s >>> 16)) + ((2246822507 * (s >>> 16) & 65535) << 16) | 0, s = 3266489909 * (65535 & (s ^= s >>> 13)) + ((3266489909 * (s >>> 16) & 65535) << 16) | 0, (s ^= s >>> 16) >>> 0;
		});
	}), ds = h((e, t) => {
		t.exports = function(e, t) {
			for (var r, i = e.length, n = t ^ i, a = 0; i >= 4;) r = 1540483477 * (65535 & (r = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24)) + ((1540483477 * (r >>> 16) & 65535) << 16), n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16) ^ (r = 1540483477 * (65535 & (r ^= r >>> 24)) + ((1540483477 * (r >>> 16) & 65535) << 16)), i -= 4, ++a;
			switch (i) {
				case 3: n ^= (255 & e.charCodeAt(a + 2)) << 16;
				case 2: n ^= (255 & e.charCodeAt(a + 1)) << 8;
				case 1: n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(a))) + ((1540483477 * (n >>> 16) & 65535) << 16);
			}
			return n = 1540483477 * (65535 & (n ^= n >>> 13)) + ((1540483477 * (n >>> 16) & 65535) << 16), (n ^= n >>> 15) >>> 0;
		};
	}), ys = p(h((e, t) => {
		var r = fs(), i = ds();
		t.exports = r, t.exports.murmur3 = r, t.exports.murmur2 = i;
	})(), 1), ms = class e {
		constructor() {
			this.ids = [], this.positions = [], this.indexed = !1;
		}
		add(e, t, r, i) {
			this.ids.push(gs(e)), this.positions.push(t, r, i);
		}
		getPositions(e) {
			if (!this.indexed) throw Error("Trying to get index, but feature positions are not indexed");
			let t = gs(e), r = 0, i = this.ids.length - 1;
			for (; r < i;) {
				let e = r + i >> 1;
				this.ids[e] >= t ? i = e : r = e + 1;
			}
			let n = [];
			for (; this.ids[r] === t;) {
				let e = this.positions[3 * r], t = this.positions[3 * r + 1], i = this.positions[3 * r + 2];
				n.push({
					index: e,
					start: t,
					end: i
				}), r++;
			}
			return n;
		}
		static serialize(e, t) {
			let r = new Float64Array(e.ids), i = new Uint32Array(e.positions);
			return xs(r, i, 0, r.length - 1), t && t.push(r.buffer, i.buffer), {
				ids: r,
				positions: i
			};
		}
		static deserialize(t) {
			let r = new e();
			return r.ids = t.ids, r.positions = t.positions, r.indexed = !0, r;
		}
	};
	function gs(e) {
		let t = +e;
		return !isNaN(t) && t <= 2 ** 53 - 1 ? t : (0, ys.default)(String(e));
	}
	function xs(e, t, r, i) {
		for (; r < i;) {
			let n = e[r + i >> 1], a = r - 1, s = i + 1;
			for (;;) {
				do
					a++;
				while (e[a] < n);
				do
					s--;
				while (e[s] > n);
				if (a >= s) break;
				vs(e, a, s), vs(t, 3 * a, 3 * s), vs(t, 3 * a + 1, 3 * s + 1), vs(t, 3 * a + 2, 3 * s + 2);
			}
			s - r < i - s ? (xs(e, t, r, s), r = s + 1) : (xs(e, t, s + 1, i), i = s);
		}
	}
	function vs(e, t, r) {
		let i = e[t];
		e[t] = e[r], e[r] = i;
	}
	Dn("FeaturePositionMap", ms);
	var bs = class {
		constructor(e, t) {
			this.gl = e.gl, this.location = t;
		}
	}, ws = class extends bs {
		constructor(e, t) {
			super(e, t), this.current = 0;
		}
		set(e) {
			this.current !== e && (this.current = e, this.gl.uniform1f(this.location, e));
		}
	}, _s = class extends bs {
		constructor(e, t) {
			super(e, t), this.current = [
				0,
				0,
				0,
				0
			];
		}
		set(e) {
			(e[0] !== this.current[0] || e[1] !== this.current[1] || e[2] !== this.current[2] || e[3] !== this.current[3]) && (this.current = e, this.gl.uniform4f(this.location, e[0], e[1], e[2], e[3]));
		}
	}, Ds = class extends bs {
		constructor(e, t) {
			super(e, t), this.current = Pe.transparent;
		}
		set(e) {
			(e.r !== this.current.r || e.g !== this.current.g || e.b !== this.current.b || e.a !== this.current.a) && (this.current = e, this.gl.uniform4f(this.location, e.r, e.g, e.b, e.a));
		}
	};
	function Ss(e) {
		return [hs(255 * e.r, 255 * e.g), hs(255 * e.b, 255 * e.a)];
	}
	var As = class {
		constructor(e, t, r) {
			this.value = e, this.uniformNames = t.map((e) => `u_${e}`), this.type = r;
		}
		setUniform(e, t, r) {
			e.set(r.constantOr(this.value));
		}
		getBinding(e, t, r) {
			return "color" === this.type ? new Ds(e, t) : new ws(e, t);
		}
	}, Es = class {
		constructor(e, t) {
			this.uniformNames = t.map((e) => `u_${e}`), this.patternFrom = null, this.patternTo = null, this.pixelRatioFrom = 1, this.pixelRatioTo = 1;
		}
		setConstantPatternPositions(e, t) {
			this.pixelRatioFrom = t.pixelRatio, this.pixelRatioTo = e.pixelRatio, this.patternFrom = t.tlbr, this.patternTo = e.tlbr;
		}
		setConstantDashPositions(e, t) {
			this.dashTo = [
				0,
				e.y,
				e.height,
				e.width
			], this.dashFrom = [
				0,
				t.y,
				t.height,
				t.width
			];
		}
		setUniform(e, t, r, i) {
			let n = null;
			"u_pattern_to" === i ? n = this.patternTo : "u_pattern_from" === i ? n = this.patternFrom : "u_dasharray_to" === i ? n = this.dashTo : "u_dasharray_from" === i ? n = this.dashFrom : "u_pixel_ratio_to" === i ? n = this.pixelRatioTo : "u_pixel_ratio_from" === i && (n = this.pixelRatioFrom), null !== n && e.set(n);
		}
		getBinding(e, t, r) {
			return r.startsWith("u_pattern") || r.startsWith("u_dasharray_") ? new _s(e, t) : new ws(e, t);
		}
	}, Fs = class {
		constructor(e, t, r, i) {
			this.expression = e, this.type = r, this.maxValue = 0, this.paintVertexAttributes = t.map((e) => ({
				name: `a_${e}`,
				type: "Float32",
				components: "color" === r ? 2 : 1,
				offset: 0
			})), this.paintVertexArray = new i();
		}
		populatePaintArray(e, t, r) {
			let i = this.paintVertexArray.length, n = this.expression.evaluate(new Rn(0, r), t, {}, r.canonical, [], r.formattedSection);
			this.paintVertexArray.resize(e), this._setPaintValue(i, e, n);
		}
		updatePaintArray(e, t, r, i, n) {
			let a = this.expression.evaluate(new Rn(0, n), r, i);
			this._setPaintValue(e, t, a);
		}
		_setPaintValue(e, t, r) {
			if ("color" === this.type) {
				let i = Ss(r);
				for (let r = e; r < t; r++) this.paintVertexArray.emplace(r, i[0], i[1]);
			} else {
				for (let i = e; i < t; i++) this.paintVertexArray.emplace(i, r);
				this.maxValue = Math.max(this.maxValue, Math.abs(r));
			}
		}
		upload(e) {
			this.paintVertexArray?.arrayBuffer.byteLength && (this.paintVertexBuffer?.buffer ? this.paintVertexBuffer.updateData(this.paintVertexArray) : this.paintVertexBuffer = e.createVertexBuffer(this.paintVertexArray, this.paintVertexAttributes, this.expression.isStateDependent));
		}
		destroy() {
			this.paintVertexBuffer && this.paintVertexBuffer.destroy();
		}
	}, ks = class {
		constructor(e, t, r, i, n, a) {
			this.expression = e, this.uniformNames = t.map((e) => `u_${e}_t`), this.type = r, this.useIntegerZoom = i, this.zoom = n, this.maxValue = 0, this.paintVertexAttributes = t.map((e) => ({
				name: `a_${e}`,
				type: "Float32",
				components: "color" === r ? 4 : 2,
				offset: 0
			})), this.paintVertexArray = new a();
		}
		populatePaintArray(e, t, r) {
			let i = this.expression.evaluate(new Rn(this.zoom, r), t, {}, r.canonical, [], r.formattedSection), n = this.expression.evaluate(new Rn(this.zoom + 1, r), t, {}, r.canonical, [], r.formattedSection), a = this.paintVertexArray.length;
			this.paintVertexArray.resize(e), this._setPaintValue(a, e, i, n);
		}
		updatePaintArray(e, t, r, i, n) {
			let a = this.expression.evaluate(new Rn(this.zoom, n), r, i), s = this.expression.evaluate(new Rn(this.zoom + 1, n), r, i);
			this._setPaintValue(e, t, a, s);
		}
		_setPaintValue(e, t, r, i) {
			if ("color" === this.type) {
				let n = Ss(r), a = Ss(i);
				for (let r = e; r < t; r++) this.paintVertexArray.emplace(r, n[0], n[1], a[0], a[1]);
			} else {
				for (let n = e; n < t; n++) this.paintVertexArray.emplace(n, r, i);
				this.maxValue = Math.max(this.maxValue, Math.abs(r), Math.abs(i));
			}
		}
		upload(e) {
			this.paintVertexArray?.arrayBuffer.byteLength && (this.paintVertexBuffer?.buffer ? this.paintVertexBuffer.updateData(this.paintVertexArray) : this.paintVertexBuffer = e.createVertexBuffer(this.paintVertexArray, this.paintVertexAttributes, this.expression.isStateDependent));
		}
		destroy() {
			this.paintVertexBuffer && this.paintVertexBuffer.destroy();
		}
		setUniform(e, t) {
			let r = this.useIntegerZoom ? Math.floor(t.zoom) : t.zoom, i = b(this.expression.interpolationFactor(r, this.zoom, this.zoom + 1), 0, 1);
			e.set(i);
		}
		getBinding(e, t, r) {
			return new ws(e, t);
		}
	}, Is = class {
		constructor(e, t, r, i, n, a) {
			this.expression = e, this.type = t, this.useIntegerZoom = r, this.zoom = i, this.layerId = a, this.zoomInPaintVertexArray = new n(), this.zoomOutPaintVertexArray = new n();
		}
		populatePaintArray(e, t, r) {
			let i = this.zoomInPaintVertexArray.length;
			this.zoomInPaintVertexArray.resize(e), this.zoomOutPaintVertexArray.resize(e), this._setPaintValues(i, e, this.getPositionIds(t), r);
		}
		updatePaintArray(e, t, r, i, n) {
			this._setPaintValues(e, t, this.getPositionIds(r), n);
		}
		_setPaintValues(e, t, r, i) {
			let n = this.getPositions(i);
			if (!n || !r) return;
			let a = n[r.min], s = n[r.mid], o = n[r.max];
			if (a && s && o) for (let l = e; l < t; l++) this.emplace(this.zoomInPaintVertexArray, l, a, s), this.emplace(this.zoomOutPaintVertexArray, l, o, s);
		}
		upload(e) {
			if (this.zoomInPaintVertexArray?.arrayBuffer.byteLength && this.zoomOutPaintVertexArray?.arrayBuffer.byteLength) {
				let t = this.getVertexAttributes();
				this.zoomInPaintVertexBuffer = e.createVertexBuffer(this.zoomInPaintVertexArray, t, this.expression.isStateDependent), this.zoomOutPaintVertexBuffer = e.createVertexBuffer(this.zoomOutPaintVertexArray, t, this.expression.isStateDependent);
			}
		}
		destroy() {
			this.zoomOutPaintVertexBuffer && this.zoomOutPaintVertexBuffer.destroy(), this.zoomInPaintVertexBuffer && this.zoomInPaintVertexBuffer.destroy();
		}
	}, Ts = class extends Is {
		getPositions(e) {
			return e.imagePositions;
		}
		getPositionIds(e) {
			return e.patterns?.[this.layerId];
		}
		getVertexAttributes() {
			return cs.members;
		}
		emplace(e, t, r, i) {
			e.emplace(t, r.tlbr[0], r.tlbr[1], r.tlbr[2], r.tlbr[3], i.tlbr[0], i.tlbr[1], i.tlbr[2], i.tlbr[3], r.pixelRatio, i.pixelRatio);
		}
	}, Cs = class extends Is {
		getPositions(e) {
			return e.dashPositions;
		}
		getPositionIds(e) {
			return e.dashes?.[this.layerId];
		}
		getVertexAttributes() {
			return ps.members;
		}
		emplace(e, t, r, i) {
			e.emplace(t, 0, r.y, r.height, r.width, 0, i.y, i.height, i.width);
		}
	}, Bs = class {
		constructor(e, t, r) {
			this.binders = {}, this._buffers = [];
			let i = [];
			for (let n in e.paint._values) {
				if (!r(n)) continue;
				let a = e.paint.get(n);
				if (!(a instanceof Xn && Lr(a.property.specification))) continue;
				let s = Ps(n, e.type), o = a.value, l = a.property.specification.type, u = a.property.useIntegerZoom, h = a.property.specification["property-type"], c = "cross-faded" === h || "cross-faded-data-driven" === h;
				if ("constant" === o.kind) this.binders[n] = c ? new Es(o.value, s) : new As(o.value, s, l), i.push(`/u_${n}`);
				else if ("source" === o.kind || c) {
					let r = zs(n, l, "source");
					this.binders[n] = c ? "line-dasharray" === n ? new Cs(o, l, u, t, r, e.id) : new Ts(o, l, u, t, r, e.id) : new Fs(o, s, l, r), i.push(`/a_${n}`);
				} else {
					let e = zs(n, l, "composite");
					this.binders[n] = new ks(o, s, l, u, t, e), i.push(`/z_${n}`);
				}
			}
			this.cacheKey = i.sort().join("");
		}
		getMaxValue(e) {
			let t = this.binders[e];
			return t instanceof Fs || t instanceof ks ? t.maxValue : 0;
		}
		populatePaintArrays(e, t, r) {
			for (let i in this.binders) {
				let n = this.binders[i];
				(n instanceof Fs || n instanceof ks || n instanceof Is) && n.populatePaintArray(e, t, r);
			}
		}
		setConstantPatternPositions(e, t) {
			for (let r in this.binders) {
				let i = this.binders[r];
				i instanceof Es && i.setConstantPatternPositions(e, t);
			}
		}
		setConstantDashPositions(e, t) {
			for (let r in this.binders) {
				let i = this.binders[r];
				i instanceof Es && i.setConstantDashPositions(e, t);
			}
		}
		updatePaintArrays(e, t, r, i, n) {
			let a = !1;
			for (let s of e) {
				let e = t.getPositions(s.id);
				for (let t of e) {
					let e = r.feature(t.index);
					for (let r in this.binders) {
						let o = this.binders[r];
						(o instanceof Fs || o instanceof ks || o instanceof Is) && !0 === o.expression.isStateDependent && (o.expression = i.paint.get(r).value, o.updatePaintArray(t.start, t.end, e, s.state, n), a = !0);
					}
				}
			}
			return a;
		}
		defines() {
			let e = [];
			for (let t in this.binders) {
				let r = this.binders[t];
				(r instanceof As || r instanceof Es) && e.push(...r.uniformNames.map((e) => `#define HAS_UNIFORM_${e}`));
			}
			return e;
		}
		getBinderAttributes() {
			let e = [];
			for (let t in this.binders) {
				let r = this.binders[t];
				if (r instanceof Fs || r instanceof ks) for (let t of r.paintVertexAttributes) e.push(t.name);
				else if (r instanceof Is) {
					let t = r.getVertexAttributes();
					for (let r of t) e.push(r.name);
				}
			}
			return e;
		}
		getBinderUniforms() {
			let e = [];
			for (let t in this.binders) {
				let r = this.binders[t];
				if (r instanceof As || r instanceof Es || r instanceof ks) for (let t of r.uniformNames) e.push(t);
			}
			return e;
		}
		getPaintVertexBuffers() {
			return this._buffers;
		}
		getUniforms(e, t) {
			let r = [];
			for (let i in this.binders) {
				let n = this.binders[i];
				if (n instanceof As || n instanceof Es || n instanceof ks) {
					for (let a of n.uniformNames) if (t[a]) {
						let s = n.getBinding(e, t[a], a);
						r.push({
							name: a,
							property: i,
							binding: s
						});
					}
				}
			}
			return r;
		}
		setUniforms(e, t, r, i) {
			for (let { name: n, property: a, binding: s } of t) this.binders[a].setUniform(s, i, r.get(a), n);
		}
		updatePaintBuffers(e) {
			this._buffers = [];
			for (let t in this.binders) {
				let r = this.binders[t];
				if (e && r instanceof Is) {
					let t = 2 === e.fromScale ? r.zoomInPaintVertexBuffer : r.zoomOutPaintVertexBuffer;
					t && this._buffers.push(t);
				} else (r instanceof Fs || r instanceof ks) && r.paintVertexBuffer && this._buffers.push(r.paintVertexBuffer);
			}
		}
		upload(e) {
			for (let t in this.binders) {
				let r = this.binders[t];
				(r instanceof Fs || r instanceof ks || r instanceof Is) && r.upload(e);
			}
			this.updatePaintBuffers();
		}
		destroy() {
			for (let e in this.binders) {
				let t = this.binders[e];
				(t instanceof Fs || t instanceof ks || t instanceof Is) && t.destroy();
			}
		}
	}, Ms = class {
		constructor(e, t, r = () => !0) {
			this.programConfigurations = {};
			for (let i of e) this.programConfigurations[i.id] = new Bs(i, t, r);
			this.needsUpload = !1, this._featureMap = new ms(), this._bufferOffset = 0;
		}
		populatePaintArrays(e, t, r, i) {
			for (let n in this.programConfigurations) this.programConfigurations[n].populatePaintArrays(e, t, i);
			void 0 !== t.id && this._featureMap.add(t.id, r, this._bufferOffset, e), this._bufferOffset = e, this.needsUpload = !0;
		}
		updatePaintArrays(e, t, r, i) {
			for (let n of r) this.needsUpload = this.programConfigurations[n.id].updatePaintArrays(e, this._featureMap, t, n, i) || this.needsUpload;
		}
		get(e) {
			return this.programConfigurations[e];
		}
		upload(e) {
			if (this.needsUpload) {
				for (let t in this.programConfigurations) this.programConfigurations[t].upload(e);
				this.needsUpload = !1;
			}
		}
		destroy() {
			for (let e in this.programConfigurations) this.programConfigurations[e].destroy();
		}
	};
	function Ps(e, t) {
		return {
			"text-opacity": ["opacity"],
			"icon-opacity": ["opacity"],
			"text-color": ["fill_color"],
			"icon-color": ["fill_color"],
			"text-halo-color": ["halo_color"],
			"icon-halo-color": ["halo_color"],
			"text-halo-blur": ["halo_blur"],
			"icon-halo-blur": ["halo_blur"],
			"text-halo-width": ["halo_width"],
			"icon-halo-width": ["halo_width"],
			"line-gap-width": ["gapwidth"],
			"line-dasharray": ["dasharray_to", "dasharray_from"],
			"line-pattern": [
				"pattern_to",
				"pattern_from",
				"pixel_ratio_to",
				"pixel_ratio_from"
			],
			"fill-pattern": [
				"pattern_to",
				"pattern_from",
				"pixel_ratio_to",
				"pixel_ratio_from"
			],
			"fill-extrusion-pattern": [
				"pattern_to",
				"pattern_from",
				"pixel_ratio_to",
				"pixel_ratio_from"
			]
		}[e] || [e.replace(`${t}-`, "").replace(/-/g, "_")];
	}
	function zs(e, t, r) {
		let i = {
			color: {
				source: ya,
				composite: Ma
			},
			number: {
				source: ka,
				composite: ya
			}
		};
		return function(e) {
			return {
				"line-pattern": {
					source: Ja,
					composite: Ja
				},
				"fill-pattern": {
					source: Ja,
					composite: Ja
				},
				"fill-extrusion-pattern": {
					source: Ja,
					composite: Ja
				},
				"line-dasharray": {
					source: Qa,
					composite: Qa
				}
			}[e];
		}(e)?.[r] || i[t][r];
	}
	Dn("ConstantBinder", As), Dn("CrossFadedConstantBinder", Es), Dn("SourceExpressionBinder", Fs), Dn("CrossFadedPatternBinder", Ts), Dn("CrossFadedDasharrayBinder", Cs), Dn("CompositeExpressionBinder", ks), Dn("ProgramConfiguration", Bs, { omit: ["_buffers"] }), Dn("ProgramConfigurationSet", Ms);
	const Ls = 16383, Vs = -16384;
	function Os(e) {
		let t = x / e.extent, r = e.loadGeometry();
		for (let i of r) for (let e of i) {
			let r = Math.round(e.x * t), i = Math.round(e.y * t);
			e.x = b(r, Vs, Ls), e.y = b(i, Vs, Ls), (r < e.x || r > e.x + 1 || i < e.y || i > e.y + 1) && E("Geometry exceeds allowed extent, reduce your vector tile buffer size");
		}
		return r;
	}
	function Rs(e, t) {
		return {
			type: e.type,
			id: e.id,
			properties: e.properties,
			geometry: t ? Os(e) : []
		};
	}
	var $s = class e {
		constructor() {
			this.minX = Infinity, this.maxX = -Infinity, this.minY = Infinity, this.maxY = -Infinity;
		}
		extend(e) {
			return this.minX = Math.min(this.minX, e.x), this.minY = Math.min(this.minY, e.y), this.maxX = Math.max(this.maxX, e.x), this.maxY = Math.max(this.maxY, e.y), this;
		}
		expandBy(e) {
			return this.minX -= e, this.minY -= e, this.maxX += e, this.maxY += e, (this.minX > this.maxX || this.minY > this.maxY) && (this.minX = Infinity, this.maxX = -Infinity, this.minY = Infinity, this.maxY = -Infinity), this;
		}
		shrinkBy(e) {
			return this.expandBy(-e);
		}
		map(t) {
			let r = new e();
			return r.extend(t(new f(this.minX, this.minY))), r.extend(t(new f(this.maxX, this.minY))), r.extend(t(new f(this.minX, this.maxY))), r.extend(t(new f(this.maxX, this.maxY))), r;
		}
		static fromPoints(t) {
			let r = new e();
			for (let e of t) r.extend(e);
			return r;
		}
		contains(e) {
			return e.x >= this.minX && e.x <= this.maxX && e.y >= this.minY && e.y <= this.maxY;
		}
		empty() {
			return this.minX > this.maxX;
		}
		width() {
			return this.maxX - this.minX;
		}
		height() {
			return this.maxY - this.minY;
		}
		covers(e) {
			return !this.empty() && !e.empty() && e.minX >= this.minX && e.maxX <= this.maxX && e.minY >= this.minY && e.maxY <= this.maxY;
		}
		intersects(e) {
			return !this.empty() && !e.empty() && e.minX <= this.maxX && e.maxX >= this.minX && e.minY <= this.maxY && e.maxY >= this.minY;
		}
	};
	function Ns(e, t) {
		return e.x === t.x && (e.x < 0 || e.x > 8192) || e.y === t.y && (e.y < 0 || e.y > 8192);
	}
	function Us(e) {
		return e.every((e) => e.x < 0) || e.every((e) => e.x > 8192) || e.every((e) => e.y < 0) || e.every((e) => e.y > 8192);
	}
	function js(e) {
		return e.x < 0 || e.x >= 8192 || e.y < 0 || e.y >= 8192;
	}
	$s.fromPoints([new f(0, 0), new f(x, x)]);
	const qs = -32768;
	function Gs(e, t, r, i, n) {
		e.emplaceBack(qs + 8 * t + i, qs + 8 * r + n);
	}
	var Xs = class {
		constructor(e) {
			this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.layerIds = this.layers.map((e) => e.id), this.index = e.index, this.hasDependencies = !1, this.layoutVertexArray = new Ya(), this.indexArray = new as(), this.segments = new us(), this.programConfigurations = new Ms(e.layers, e.zoom), this.stateDependentLayerIds = this.layers.filter((e) => e.isStateDependent()).map((e) => e.id);
		}
		populate(e, t, r) {
			let i = this.layers[0], n = [], a = null, s = !1, o = "heatmap" === i.type;
			if ("circle" === i.type) {
				let e = i;
				a = e.layout.get("circle-sort-key"), s = !a.isConstant(), o || (o = "map" === e.paint.get("circle-pitch-alignment"));
			}
			let l = o ? t.subdivisionGranularity.circle : 1, u = new Rn(this.zoom), h = this.layers[0]._featureFilter.needGeometry;
			for (let { feature: c, id: p, index: f, sourceLayerIndex: d } of e) {
				let e = Rs(c, h);
				if (!this.layers[0]._featureFilter.filter(u, e, r)) continue;
				let t = s ? a.evaluate(e, {}, r) : void 0, i = {
					id: p,
					properties: c.properties,
					type: c.type,
					sourceLayerIndex: d,
					index: f,
					geometry: h ? e.geometry : Os(c),
					patterns: {},
					sortKey: t
				};
				n.push(i);
			}
			s && n.sort((e, t) => e.sortKey - t.sortKey);
			for (let c of n) {
				let { geometry: i, index: n, sourceLayerIndex: a } = c, s = e[n].feature;
				this.addFeature(c, i, n, r, l), t.featureIndex.insert(s, i, n, a, this.index);
			}
		}
		update(e, t, r) {
			this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e, t, this.stateDependentLayers, { imagePositions: r });
		}
		addFeatures(e) {}
		isEmpty() {
			return 0 === this.layoutVertexArray.length;
		}
		uploadPending() {
			return !this.uploaded || this.programConfigurations.needsUpload;
		}
		upload(e) {
			this.uploaded || (this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, ls), this.indexBuffer = e.createIndexBuffer(this.indexArray)), this.programConfigurations.upload(e), this.uploaded = !0;
		}
		destroy() {
			this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy());
		}
		addFeature(e, t, r, i, n = 1) {
			let a;
			switch (n) {
				case 1:
					a = [0, 7];
					break;
				case 3:
					a = [
						0,
						2,
						5,
						7
					];
					break;
				case 5:
					a = [
						0,
						1,
						3,
						4,
						6,
						7
					];
					break;
				case 7:
					a = [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7
					];
					break;
				default: throw Error(`Invalid circle bucket granularity: ${n}; valid values are 1, 3, 5, 7.`);
			}
			let s = a.length;
			for (let o of t) for (let t of o) {
				let r = t.x, i = t.y;
				if (js(t)) continue;
				let n = this.segments.prepareSegment(s * s, this.layoutVertexArray, this.indexArray, e.sortKey), o = n.vertexLength;
				for (let e = 0; e < s; e++) for (let t = 0; t < s; t++) Gs(this.layoutVertexArray, r, i, a[t], a[e]);
				for (let e = 0; e < s - 1; e++) for (let t = 0; t < s - 1; t++) {
					let r = o + e * s + t, i = o + (e + 1) * s + t;
					this.indexArray.emplaceBack(r, i + 1, r + 1), this.indexArray.emplaceBack(r, i, i + 1);
				}
				n.vertexLength += s * s, n.primitiveLength += (s - 1) * (s - 1) * 2;
			}
			this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e, r, {
				imagePositions: {},
				canonical: i
			});
		}
	};
	function Ys(e, t) {
		for (let r of e) if (ro(t, r)) return !0;
		for (let r of t) if (ro(e, r)) return !0;
		return Ks(e, t);
	}
	function Ws(e, t, r) {
		return !!ro(e, t) || Qs(t, e, r);
	}
	function Zs(e, t) {
		if (1 === e.length) return to(t, e[0]);
		for (let r of t) for (let t of r) if (ro(e, t)) return !0;
		for (let r of e) if (to(t, r)) return !0;
		for (let r of t) if (Ks(e, r)) return !0;
		return !1;
	}
	function Hs(e, t, r) {
		if (e.length > 1) {
			if (Ks(e, t)) return !0;
			for (let i of t) if (Qs(i, e, r)) return !0;
		}
		for (let i of e) if (Qs(i, t, r)) return !0;
		return !1;
	}
	function Ks(e, t) {
		if (0 === e.length || 0 === t.length) return !1;
		for (let r = 0; r < e.length - 1; r++) {
			let i = e[r], n = e[r + 1];
			for (let e = 0; e < t.length - 1; e++) if (Js(i, n, t[e], t[e + 1])) return !0;
		}
		return !1;
	}
	function Js(e, t, r, i) {
		return F(e, r, i) !== F(t, r, i) && F(e, t, r) !== F(e, t, i);
	}
	function Qs(e, t, r) {
		let i = r * r;
		if (1 === t.length) return e.distSqr(t[0]) < i;
		for (let n = 1; n < t.length; n++) if (eo(e, t[n - 1], t[n]) < i) return !0;
		return !1;
	}
	function eo(e, t, r) {
		let i = t.distSqr(r);
		if (0 === i) return e.distSqr(t);
		let n = ((e.x - t.x) * (r.x - t.x) + (e.y - t.y) * (r.y - t.y)) / i;
		return n < 0 ? e.distSqr(t) : n > 1 ? e.distSqr(r) : e.distSqr(r.sub(t)._mult(n)._add(t));
	}
	function to(e, t) {
		let r, i, n, a = !1;
		for (let s of e) {
			r = s;
			for (let e = 0, s = r.length - 1; e < r.length; s = e++) i = r[e], n = r[s], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (a = !a);
		}
		return a;
	}
	function ro(e, t) {
		let r = !1;
		for (let i = 0, n = e.length - 1; i < e.length; n = i++) {
			let a = e[i], s = e[n];
			a.y > t.y != s.y > t.y && t.x < (s.x - a.x) * (t.y - a.y) / (s.y - a.y) + a.x && (r = !r);
		}
		return r;
	}
	function io(e, t, r, i, n) {
		for (let s of e) if (t <= s.x && r <= s.y && i >= s.x && n >= s.y) return !0;
		let a = [
			new f(t, r),
			new f(t, n),
			new f(i, n),
			new f(i, r)
		];
		if (e.length > 2) {
			for (let s of a) if (ro(e, s)) return !0;
		}
		for (let s = 0; s < e.length - 1; s++) if (no(e[s], e[s + 1], a)) return !0;
		return !1;
	}
	function no(e, t, r) {
		let i = r[0], n = r[2];
		if (e.x < i.x && t.x < i.x || e.x > n.x && t.x > n.x || e.y < i.y && t.y < i.y || e.y > n.y && t.y > n.y) return !1;
		let a = F(e, t, r[0]);
		return a !== F(e, t, r[1]) || a !== F(e, t, r[2]) || a !== F(e, t, r[3]);
	}
	function ao(e, t, r) {
		let i = t.paint.get(e).value;
		return "constant" === i.kind ? i.value : r.programConfigurations.get(t.id).getMaxValue(e);
	}
	function so(e) {
		return Math.sqrt(e[0] * e[0] + e[1] * e[1]);
	}
	function oo(e, t, r, i, n) {
		if (!t[0] && !t[1]) return e;
		let a = f.convert(t)._mult(n);
		"viewport" === r && a._rotate(-i);
		let s = [];
		for (let o of e) s.push(o.sub(a));
		return s;
	}
	function lo(e) {
		let t = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], n = t.at(-1);
			(0 === r || n && !i.equals(n)) && t.push(i);
		}
		return t;
	}
	function uo({ queryGeometry: e, size: t }, r) {
		return Ws(e, r, t);
	}
	function ho({ queryGeometry: e, size: t, transform: r, unwrappedTileID: i, getElevation: n }, a) {
		return Ws(e, a, t * (r.projectTileCoordinates(a.x, a.y, i, n?.(a.x, a.y)).signedDistanceFromCamera / r.cameraToCenterDistance));
	}
	function co({ queryGeometry: e, size: t, transform: r, unwrappedTileID: i, getElevation: n }, a) {
		let s = r.projectTileCoordinates(a.x, a.y, i, n?.(a.x, a.y)).signedDistanceFromCamera, o = t * (r.cameraToCenterDistance / s);
		return Ws(e, yo(a, r, i, n), o);
	}
	function po({ queryGeometry: e, size: t, transform: r, unwrappedTileID: i, getElevation: n }, a) {
		return Ws(e, yo(a, r, i, n), t);
	}
	function fo({ queryGeometry: e, size: t, transform: r, unwrappedTileID: i, getElevation: n, pitchAlignment: a = "map", pitchScale: s = "map" }, o) {
		let l = "map" === a ? "map" === s ? uo : ho : "map" === s ? co : po, u = {
			queryGeometry: e,
			size: t,
			transform: r,
			unwrappedTileID: i,
			getElevation: n
		};
		for (let h of o) for (let e of h) if (l(u, e)) return !0;
		return !1;
	}
	function yo(e, t, r, i) {
		let n = t.projectTileCoordinates(e.x, e.y, r, i?.(e.x, e.y)).point;
		return new f((.5 * n.x + .5) * t.width, (.5 * -n.y + .5) * t.height);
	}
	let mo, go;
	Dn("CircleBucket", Xs, { omit: ["layers"] });
	var xo = {
		get paint() {
			return go || (go = new ta({
				"circle-radius": new Kn($.paint_circle["circle-radius"], "circle-radius"),
				"circle-color": new Kn($.paint_circle["circle-color"], "circle-color"),
				"circle-blur": new Kn($.paint_circle["circle-blur"], "circle-blur"),
				"circle-opacity": new Kn($.paint_circle["circle-opacity"], "circle-opacity"),
				"circle-translate": new Hn($.paint_circle["circle-translate"], "circle-translate"),
				"circle-translate-anchor": new Hn($.paint_circle["circle-translate-anchor"], "circle-translate-anchor"),
				"circle-pitch-scale": new Hn($.paint_circle["circle-pitch-scale"], "circle-pitch-scale"),
				"circle-pitch-alignment": new Hn($.paint_circle["circle-pitch-alignment"], "circle-pitch-alignment"),
				"circle-stroke-width": new Kn($.paint_circle["circle-stroke-width"], "circle-stroke-width"),
				"circle-stroke-color": new Kn($.paint_circle["circle-stroke-color"], "circle-stroke-color"),
				"circle-stroke-opacity": new Kn($.paint_circle["circle-stroke-opacity"], "circle-stroke-opacity")
			}));
		},
		get layout() {
			return mo || (mo = new ta({ "circle-sort-key": new Kn($.layout_circle["circle-sort-key"], "circle-sort-key") }));
		}
	}, vo = class extends na {
		constructor(e, t) {
			super(e, xo, t);
		}
		createBucket(e) {
			return new Xs(e);
		}
		queryRadius(e) {
			let t = e;
			return ao("circle-radius", this, t) + ao("circle-stroke-width", this, t) + so(this.paint.get("circle-translate"));
		}
		queryIntersectsFeature({ queryGeometry: e, feature: t, featureState: r, geometry: i, transform: n, pixelsToTileUnits: a, unwrappedTileID: s, getElevation: o }) {
			let l, u, h = oo(e, this.paint.get("circle-translate"), this.paint.get("circle-translate-anchor"), -n.bearingInRadians, a), c = this.paint.get("circle-radius").evaluate(t, r) + this.paint.get("circle-stroke-width").evaluate(t, r), p = this.paint.get("circle-pitch-scale"), f = this.paint.get("circle-pitch-alignment");
			return "map" === f ? (l = h, u = c * a) : (l = function(e, t, r, i) {
				return e.map((e) => yo(e, t, r, i));
			}(h, n, s, o), u = c), fo({
				queryGeometry: l,
				size: u,
				transform: n,
				unwrappedTileID: s,
				getElevation: o,
				pitchAlignment: f,
				pitchScale: p
			}, i);
		}
	}, bo = class extends Xs {};
	let wo;
	Dn("HeatmapBucket", bo, { omit: ["layers"] });
	var _o = { get paint() {
		return wo || (wo = new ta({
			"heatmap-radius": new Kn($.paint_heatmap["heatmap-radius"], "heatmap-radius"),
			"heatmap-weight": new Kn($.paint_heatmap["heatmap-weight"], "heatmap-weight"),
			"heatmap-intensity": new Hn($.paint_heatmap["heatmap-intensity"], "heatmap-intensity"),
			"heatmap-color": new ea($.paint_heatmap["heatmap-color"], "heatmap-color"),
			"heatmap-opacity": new Hn($.paint_heatmap["heatmap-opacity"], "heatmap-opacity")
		}));
	} };
	function Do(e, { width: t, height: r }, i, n) {
		if (n) {
			if (n instanceof Uint8ClampedArray) n = new Uint8Array(n.buffer);
			else if (n.length !== t * r * i) throw RangeError(`mismatched image size. expected: ${n.length} but got: ${t * r * i}`);
		} else n = new Uint8Array(t * r * i);
		return e.width = t, e.height = r, e.data = n, e;
	}
	function So(e, { width: t, height: r }, i) {
		if (t === e.width && r === e.height) return;
		let n = Do({}, {
			width: t,
			height: r
		}, i);
		Ao(e, n, {
			x: 0,
			y: 0
		}, {
			x: 0,
			y: 0
		}, {
			width: Math.min(e.width, t),
			height: Math.min(e.height, r)
		}, i), e.width = t, e.height = r, e.data = n.data;
	}
	function Ao(e, t, r, i, n, a) {
		if (0 === n.width || 0 === n.height) return t;
		if (n.width > e.width || n.height > e.height || r.x > e.width - n.width || r.y > e.height - n.height) throw RangeError("out of range source coordinates for image copy");
		if (n.width > t.width || n.height > t.height || i.x > t.width - n.width || i.y > t.height - n.height) throw RangeError("out of range destination coordinates for image copy");
		let s = e.data, o = t.data;
		if (s === o) throw Error("srcData equals dstData, so image is already copied");
		for (let l = 0; l < n.height; l++) {
			let u = ((r.y + l) * e.width + r.x) * a, h = ((i.y + l) * t.width + i.x) * a;
			for (let e = 0; e < n.width * a; e++) o[h + e] = s[u + e];
		}
		return t;
	}
	var Eo = class e {
		constructor(e, t) {
			Do(this, e, 1, t);
		}
		resize(e) {
			So(this, e, 1);
		}
		clone() {
			return new e({
				width: this.width,
				height: this.height
			}, new Uint8Array(this.data));
		}
		static copy(e, t, r, i, n) {
			Ao(e, t, r, i, n, 1);
		}
	}, Fo = class e {
		constructor(e, t) {
			Do(this, e, 4, t);
		}
		resize(e) {
			So(this, e, 4);
		}
		replace(e, t) {
			t ? this.data.set(e) : this.data = e instanceof Uint8ClampedArray ? new Uint8Array(e.buffer) : e;
		}
		clone() {
			return new e({
				width: this.width,
				height: this.height
			}, new Uint8Array(this.data));
		}
		static copy(e, t, r, i, n) {
			Ao(e, t, r, i, n, 4);
		}
		setPixel(e, t, r) {
			let i = 4 * (e * this.width + t);
			this.data[i + 0] = Math.round(255 * r.r / r.a), this.data[i + 1] = Math.round(255 * r.g / r.a), this.data[i + 2] = Math.round(255 * r.b / r.a), this.data[i + 3] = Math.round(255 * r.a);
		}
	};
	function ko(e) {
		let t = new Uint8Array(e.length);
		for (let r = 0; r < e.length; r += 4) {
			let i = e[r + 3];
			t[r + 0] = Math.round(e[r + 0] * i / 255), t[r + 1] = Math.round(e[r + 1] * i / 255), t[r + 2] = Math.round(e[r + 2] * i / 255), t[r + 3] = i;
		}
		return t;
	}
	Dn("AlphaImage", Eo), Dn("RGBAImage", Fo);
	var Io = class extends na {
		createBucket(e) {
			return new bo(e);
		}
		constructor(e, t) {
			super(e, _o, t), this.heatmapFbos = /* @__PURE__ */ new Map(), this._updateColorRamp();
		}
		_handleSpecialPaintPropertyUpdate(e) {
			"heatmap-color" === e && this._updateColorRamp();
		}
		_updateColorRamp() {
			let e = this._transitionablePaint._values["heatmap-color"].value.expression;
			this.colorRamp = function(e) {
				let t = {}, r = e.resolution || 256, i = e.clips ? e.clips.length : 1, n = e.image || new Fo({
					width: r,
					height: i
				});
				if (!function(e) {
					return Math.log(e) / Math.LN2 % 1 == 0;
				}(r)) throw Error(`width is not a power of 2 - ${r}`);
				let a = (i, a, s) => {
					t[e.evaluationKey] = s;
					let o = e.expression.evaluate(t);
					n.setPixel(i / 4 / r, a / 4, o);
				};
				if (e.clips) for (let s = 0, o = 0; s < i; ++s, o += 4 * r) for (let t = 0, i = 0; t < r; t++, i += 4) {
					let n = t / (r - 1), { start: l, end: u } = e.clips[s];
					a(o, i, l * (1 - n) + u * n);
				}
				else for (let s = 0, o = 0; s < r; s++, o += 4) a(0, o, s / (r - 1));
				return n;
			}({
				expression: e,
				evaluationKey: "heatmapDensity",
				image: this.colorRamp
			}), this.colorRampTexture = null;
		}
		resize() {
			this.heatmapFbos.has("big-fb") && this.heatmapFbos.delete("big-fb");
		}
		queryRadius(e) {
			return ao("heatmap-radius", this, e);
		}
		queryIntersectsFeature({ queryGeometry: e, feature: t, featureState: r, geometry: i, transform: n, pixelsToTileUnits: a, unwrappedTileID: s, getElevation: o }) {
			return fo({
				queryGeometry: e,
				size: this.paint.get("heatmap-radius").evaluate(t, r) * a,
				transform: n,
				unwrappedTileID: s,
				getElevation: o
			}, i);
		}
		hasOffscreenPass() {
			return 0 !== this.paint.get("heatmap-opacity") && !this.isHidden();
		}
	};
	let To;
	var Co = { get paint() {
		return To || (To = new ta({
			"hillshade-illumination-direction": new Hn($.paint_hillshade["hillshade-illumination-direction"], "hillshade-illumination-direction"),
			"hillshade-illumination-altitude": new Hn($.paint_hillshade["hillshade-illumination-altitude"], "hillshade-illumination-altitude"),
			"hillshade-illumination-anchor": new Hn($.paint_hillshade["hillshade-illumination-anchor"], "hillshade-illumination-anchor"),
			"hillshade-exaggeration": new Hn($.paint_hillshade["hillshade-exaggeration"], "hillshade-exaggeration"),
			"hillshade-shadow-color": new Hn($.paint_hillshade["hillshade-shadow-color"], "hillshade-shadow-color"),
			"hillshade-highlight-color": new Hn($.paint_hillshade["hillshade-highlight-color"], "hillshade-highlight-color"),
			"hillshade-accent-color": new Hn($.paint_hillshade["hillshade-accent-color"], "hillshade-accent-color"),
			"hillshade-method": new Hn($.paint_hillshade["hillshade-method"], "hillshade-method"),
			resampling: new Hn($.paint_hillshade.resampling, "resampling")
		}));
	} }, Bo = class extends na {
		constructor(e, t) {
			super(e, Co, t), this.recalculate({
				zoom: 0,
				zoomHistory: {}
			}, void 0);
		}
		getIlluminationProperties() {
			let e = this.paint.get("hillshade-illumination-direction").values, t = this.paint.get("hillshade-illumination-altitude").values, r = this.paint.get("hillshade-highlight-color").values, i = this.paint.get("hillshade-shadow-color").values, n = Math.max(e.length, t.length, r.length, i.length);
			e = e.concat(Array(n - e.length).fill(e.at(-1))), t = t.concat(Array(n - t.length).fill(t.at(-1))), r = r.concat(Array(n - r.length).fill(r.at(-1))), i = i.concat(Array(n - i.length).fill(i.at(-1)));
			let a = t.map(P);
			return {
				directionRadians: e.map(P),
				altitudeRadians: a,
				shadowColor: i,
				highlightColor: r
			};
		}
		hasOffscreenPass() {
			return 0 !== this.paint.get("hillshade-exaggeration") && !this.isHidden();
		}
	};
	let Mo;
	var Po = { get paint() {
		return Mo || (Mo = new ta({
			"color-relief-opacity": new Hn($["paint_color-relief"]["color-relief-opacity"], "color-relief-opacity"),
			"color-relief-color": new ea($["paint_color-relief"]["color-relief-color"], "color-relief-color"),
			resampling: new Hn($["paint_color-relief"].resampling, "resampling")
		}));
	} };
	function zo(e) {
		return "data" in e;
	}
	var Lo = class {
		constructor(e, t, r, i) {
			this.context = e, this.format = r, this.texture = e.gl.createTexture(), this._ownedHandle = this.texture, this.update(t, i);
		}
		update(e, t, r) {
			let { width: i, height: n } = e, a = (this.size?.[0] !== i || this.size[1] !== n) && !r, { context: s } = this, { gl: o } = s;
			this.useMipmap = !!t?.useMipmap, a && this.size && this.format === o.RGBA && (o.deleteTexture(this.texture), this.texture = o.createTexture(), this._ownedHandle = this.texture, this.magFilter = void 0, this.minFilter = void 0, this.wrap = void 0), o.bindTexture(o.TEXTURE_2D, this.texture), s.pixelStoreUnpackFlipY.set(!1), s.pixelStoreUnpack.set(1);
			let l = this.format === o.RGBA && !1 !== t?.premultiply;
			if (a) if (this.size = [i, n], this.format === o.RGBA && i > 0 && n > 0) {
				let t = this.useMipmap ? Math.floor(Math.log2(Math.max(i, n))) + 1 : 1;
				if (o.texStorage2D(o.TEXTURE_2D, t, o.RGBA8, i, n), zo(e)) {
					s.pixelStoreUnpackPremultiplyAlpha.set(!1);
					let { data: t } = e;
					l && t && (t = ko(t)), t && o.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, i, n, o.RGBA, o.UNSIGNED_BYTE, t);
				} else s.pixelStoreUnpackPremultiplyAlpha.set(l), o.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, o.RGBA, o.UNSIGNED_BYTE, e);
			} else zo(e) ? (s.pixelStoreUnpackPremultiplyAlpha.set(!1), this._uploadRawData(e, l, i, n, o)) : (s.pixelStoreUnpackPremultiplyAlpha.set(l), this._uploadDomImage(e, o));
			else {
				let { x: t, y: a } = r || {
					x: 0,
					y: 0
				};
				zo(e) ? (s.pixelStoreUnpackPremultiplyAlpha.set(!1), this._updateRawData(e, l, t, a, i, n, o)) : (s.pixelStoreUnpackPremultiplyAlpha.set(l), this._updateDomImage(e, t, a, o));
			}
			this.useMipmap && !(zo(e) && null === e.data) && o.generateMipmap(o.TEXTURE_2D), s.pixelStoreUnpackFlipY.setDefault(), s.pixelStoreUnpack.setDefault(), s.pixelStoreUnpackPremultiplyAlpha.setDefault();
		}
		_uploadDomImage(e, t) {
			t.texImage2D(t.TEXTURE_2D, 0, this.format, this.format, t.UNSIGNED_BYTE, e);
		}
		_uploadRawData(e, t, r, i, n) {
			let { data: a } = e;
			t && a && (a = ko(a)), n.texImage2D(n.TEXTURE_2D, 0, this.format, r, i, 0, this.format, n.UNSIGNED_BYTE, a);
		}
		_updateDomImage(e, t, r, i) {
			i.texSubImage2D(i.TEXTURE_2D, 0, t, r, i.RGBA, i.UNSIGNED_BYTE, e);
		}
		_updateRawData(e, t, r, i, n, a, s) {
			let { data: o } = e;
			t && o && (o = ko(o)), s.texSubImage2D(s.TEXTURE_2D, 0, r, i, n, a, s.RGBA, s.UNSIGNED_BYTE, o);
		}
		bind(e, t, r) {
			let { context: i } = this, { gl: n } = i;
			this.texture !== this._ownedHandle && (this.texture = this._ownedHandle), n.bindTexture(n.TEXTURE_2D, this.texture), (r === n.LINEAR_MIPMAP_NEAREST || r === n.LINEAR_MIPMAP_LINEAR) && !this.useMipmap && (r = n.LINEAR);
			let a = r || e;
			e !== this.magFilter && (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, e), this.magFilter = e), a !== this.minFilter && (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, a), this.minFilter = a), t !== this.wrap && (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, t), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, t), this.wrap = t);
		}
		generateMipmap() {
			if (!this.useMipmap) return;
			let { gl: e } = this.context;
			e.bindTexture(e.TEXTURE_2D, this.texture), e.generateMipmap(e.TEXTURE_2D);
		}
		destroy() {
			let { gl: e } = this.context;
			e.deleteTexture(this.texture), this.texture = null, this._ownedHandle = null;
		}
	}, Vo = (t = class e {
		constructor(t, r, i, n = 1, a = 1, s = 1, o = 0) {
			if (this.uid = t, r.height !== r.width) throw RangeError("DEM tiles must be square");
			if (i && ![
				"mapbox",
				"terrarium",
				"custom"
			].includes(i)) return void E(`"${i}" is not a valid encoding type. Valid types include "mapbox", "terrarium" and "custom".`);
			this.stride = r.height;
			let l = this.dim = r.height - 4;
			switch (this.data = new Uint32Array(r.data.buffer), e.byteViewCache.set(this, new Uint8Array(this.data.buffer)), i) {
				case "terrarium":
					this.redFactor = 256, this.greenFactor = 1, this.blueFactor = 1 / 256, this.baseShift = 32768;
					break;
				case "custom":
					this.redFactor = n, this.greenFactor = a, this.blueFactor = s, this.baseShift = o;
					break;
				default: this.redFactor = 6553.6, this.greenFactor = 25.6, this.blueFactor = .1, this.baseShift = 1e4;
			}
			for (let e = -2; e < l + 2; e++) {
				let t = this._idx(0, Math.max(0, Math.min(l - 1, e)));
				(e < 0 || e >= l) && this.data.copyWithin(this._idx(0, e), t, t + l), this.data.fill(this.data[t], this._idx(-2, e), this._idx(0, e)), this.data.fill(this.data[t + l - 1], this._idx(l, e), this._idx(l + 1, e) + 1);
			}
			let u = this._getByteView();
			this.min = 2 ** 53 - 1, this.max = -(2 ** 53 - 1);
			for (let e = 0; e < l; e++) for (let t = 0; t < l; t++) {
				let r = 4 * this._idx(e, t), i = this._unpackAtIndex(u, r);
				i > this.max && (this.max = i), i < this.min && (this.min = i);
			}
		}
		get(e, t) {
			let r = this._getByteView(), i = 4 * this._idx(e, t);
			return this._unpackAtIndex(r, i);
		}
		sampleBilinear(e, t) {
			let r = Math.floor(e), i = Math.floor(t);
			if (r < -1 || r >= this.dim || i < -1 || i >= this.dim) throw RangeError(`Out of range source coordinates for DEM data. x: ${e}, y: ${t}, dim: ${this.dim}`);
			let n = this._getByteView(), a = 4 * ((i + 2) * this.stride + r + 2), s = 4 * this.stride, o = e - r, l = t - i;
			return this._unpackAtIndex(n, a) * (1 - o) * (1 - l) + this._unpackAtIndex(n, a + 4) * o * (1 - l) + this._unpackAtIndex(n, a + s) * (1 - o) * l + this._unpackAtIndex(n, a + s + 4) * o * l;
		}
		getUnpackVector() {
			return [
				this.redFactor,
				this.greenFactor,
				this.blueFactor,
				this.baseShift
			];
		}
		_idx(e, t) {
			if (e < -2 || e >= this.dim + 2 || t < -2 || t >= this.dim + 2) throw RangeError(`Out of range source coordinates for DEM data. x: ${e}, y: ${t}, dim: ${this.dim}`);
			return (t + 2) * this.stride + (e + 2);
		}
		unpack(e, t, r) {
			return e * this.redFactor + t * this.greenFactor + r * this.blueFactor - this.baseShift;
		}
		pack(e) {
			return Oo(e, this.getUnpackVector());
		}
		getPixels() {
			return new Fo({
				width: this.stride,
				height: this.stride
			}, this._getByteView());
		}
		backfillBorder(e, t, r) {
			if (this.dim !== e.dim) throw Error("dem dimension mismatch");
			let i = t * this.dim, n = t * this.dim + this.dim, a = r * this.dim, s = r * this.dim + this.dim;
			switch (t) {
				case -1:
					i = n - 2;
					break;
				case 1: n = i + 2;
			}
			switch (r) {
				case -1:
					a = s - 2;
					break;
				case 1: s = a + 2;
			}
			let o = -t * this.dim, l = -r * this.dim;
			for (let u = a; u < s; u++) for (let t = i; t < n; t++) this.data[this._idx(t, u)] = e.data[this._idx(t + o, u + l)];
		}
		_getByteView() {
			let t = e.byteViewCache.get(this);
			return t?.buffer !== this.data.buffer && (t = new Uint8Array(this.data.buffer), e.byteViewCache.set(this, t)), t;
		}
		_unpackAtIndex(e, t) {
			return this.unpack(e[t], e[t + 1], e[t + 2]);
		}
	}, t.byteViewCache = /* @__PURE__ */ new WeakMap(), t);
	function Oo(e, t) {
		let r = t[0], i = t[1], n = t[2], a = t[3], s = [
			r,
			i,
			n
		].filter((e) => 0 !== e);
		if (0 === s.length) return {
			r: 0,
			g: 0,
			b: 0
		};
		let o = Math.min(...s), l = Math.round((e + a) / o), u = (e) => 0 === e ? 0 : Math.floor(l * o / e) % 256;
		return {
			r: u(r),
			g: u(i),
			b: u(n)
		};
	}
	Dn("DEMData", Vo);
	var Ro = class extends na {
		constructor(e, t) {
			super(e, Po, t);
		}
		_createColorRamp(e) {
			let t = {
				elevationStops: [],
				colorStops: []
			}, r = this._transitionablePaint._values["color-relief-color"].value.expression;
			if (r instanceof ii && r._styleExpression.expression instanceof rt) {
				this.colorRampExpression = r;
				let e = r._styleExpression.expression;
				t.elevationStops = e.labels, t.colorStops = [];
				for (let r of t.elevationStops) t.colorStops.push(e.evaluate({ globals: { elevation: r } }));
			}
			if (t.elevationStops.length < 1 && (t.elevationStops = [0], t.colorStops = [Pe.transparent]), t.elevationStops.length < 2 && (t.elevationStops.push(t.elevationStops[0] + 1), t.colorStops.push(t.colorStops[0])), t.elevationStops.length <= e) return t;
			let i = {
				elevationStops: [],
				colorStops: []
			}, n = (t.elevationStops.length - 1) / (e - 1);
			for (let a = 0; a < t.elevationStops.length - .5; a += n) i.elevationStops.push(t.elevationStops[Math.round(a)]), i.colorStops.push(t.colorStops[Math.round(a)]);
			return E(`Too many colors in specification of ${this.id} color-relief layer, may not render properly. Max possible colors: ${e}, provided: ${t.elevationStops.length}`), i;
		}
		_colorRampChanged() {
			return this.colorRampExpression != this._transitionablePaint._values["color-relief-color"].value.expression;
		}
		getColorRampTextures(e, t, r) {
			if (this.colorRampTextures && !this._colorRampChanged()) return this.colorRampTextures;
			let i = this._createColorRamp(t), n = new Fo({
				width: i.colorStops.length,
				height: 1
			}), a = new Fo({
				width: i.colorStops.length,
				height: 1
			});
			for (let s = 0; s < i.elevationStops.length; s++) {
				let e = Oo(i.elevationStops[s], r);
				a.setPixel(0, s, new Pe(e.r / 255, e.g / 255, e.b / 255, 1)), n.setPixel(0, s, i.colorStops[s]);
			}
			return this.colorRampTextures = {
				elevationTexture: new Lo(e, a, e.gl.RGBA),
				colorTexture: new Lo(e, n, e.gl.RGBA)
			}, this.colorRampTextures;
		}
		hasOffscreenPass() {
			return !this.isHidden() && !!this.colorRampTextures;
		}
	};
	const $o = la([{
		name: "a_pos",
		components: 2,
		type: "Int16"
	}], 4), No = $o.members;
	function Uo(e, t, r) {
		let i = r.patternDependencies, n = !1;
		for (let a of t) {
			let t = a.paint.get(`${e}-pattern`);
			t.isConstant() || (n = !0);
			let r = t.constantOr(null);
			r && (n = !0, i[r.to] = !0, i[r.from] = !0);
		}
		return n;
	}
	function jo(e, t, r, i, n) {
		let { zoom: a } = i, s = n.patternDependencies;
		for (let o of t) {
			let t = o.paint.get(`${e}-pattern`).value;
			if ("constant" !== t.kind) {
				let e = t.evaluate({ zoom: a - 1 }, r, {}, n.availableImages), i = t.evaluate({ zoom: a }, r, {}, n.availableImages), l = t.evaluate({ zoom: a + 1 }, r, {}, n.availableImages);
				e = e?.name ? e.name : e, i = i?.name ? i.name : i, l = l?.name ? l.name : l, s[e] = !0, s[i] = !0, s[l] = !0, r.patterns[o.id] = {
					min: e,
					mid: i,
					max: l
				};
			}
		}
		return r;
	}
	$o.size, $o.alignment;
	const qo = /* @__PURE__ */ new Set();
	let Go = !1;
	function Xo(e, t, r, i, n) {
		let a = null;
		if (n === function(e, t, r, i) {
			let n = 0;
			for (let a = t, s = r - i; a < r; a += i) n += (e[s] - e[a]) * (e[a + 1] + e[s + 1]), s = a;
			return n;
		}(e, t, r, i) > 0) for (let s = t; s < r; s += i) a = El(s / i | 0, e[s], e[s + 1], a);
		else for (let s = r - i; s >= t; s -= i) a = El(s / i | 0, e[s], e[s + 1], a);
		return a && wl(a, a.next) && (Fl(a), a = a.next), a;
	}
	function Yo(e, t = e) {
		let r, i = t === e, n = e;
		do
			r = !1, n === n.next || 0 !== qo.size && qo.has(n) || !wl(n, n.next) && 0 !== bl(n.prev, n, n.next) ? (i || n !== t) && (n = n.next, r = !i) : ((i || n === t) && (t = n.prev), Go = !0, Fl(n), n = n.prev, r = !0);
		while (r || n !== t);
		return t;
	}
	function Wo(e, t, r, i, n) {
		n && function(e, t, r, i) {
			let n = e, a = 0;
			do
				n.z = ml(n.x, n.y, t, r, i), hl[a++] = n, n = n.next;
			while (n !== e);
			(function(e) {
				if (e <= 32) for (let t = 1; t < e; t++) {
					let e = hl[t], r = e.z, i = t - 1;
					for (; i >= 0 && hl[i].z > r;) hl[i + 1] = hl[i], i--;
					hl[i + 1] = e;
				}
				else {
					pl.length < e && (pl = new Uint32Array(e), fl = new Uint32Array(e), cl = Array(e));
					for (let t = 0; t < e; t++) pl[t] = hl[t].z;
					yl(e, hl, pl, cl, fl, 0), yl(e, cl, fl, hl, pl, 8), yl(e, hl, pl, cl, fl, 16), yl(e, cl, fl, hl, pl, 24);
				}
			})(a);
			let s = null;
			for (let o = 0; o < a; o++) {
				let e = hl[o];
				e.prevZ = s, s && (s.nextZ = e), s = e;
			}
			s.nextZ = null, hl.fill(null, 0, a), cl.fill(null, 0, a);
		}(e, r, i, n);
		let a = e, s = !1;
		for (; e.prev !== e.next;) {
			let o = e.prev, l = e.next;
			if (bl(o, e, l) < 0 && (n ? Ho(e, r, i, n) : Zo(e))) t.push(o.i, e.i, l.i), Fl(e), e = l, a = l;
			else if ((e = l) === a) {
				if (Go = !1, e = Yo(e), Go) {
					a = e;
					continue;
				}
				if (!s) {
					a = e = Ko(e, t), s = !0;
					continue;
				}
				Jo(e, t, r, i, n);
				break;
			}
		}
	}
	function Zo(e) {
		let t = e.prev, r = e, i = e.next, n = t.x, a = r.x, s = i.x, o = t.y, l = r.y, u = i.y, h = Math.min(n, a, s), c = Math.min(o, l, u), p = Math.max(n, a, s), f = Math.max(o, l, u), d = i.next;
		for (; d !== t;) {
			if (d.x >= h && d.x <= p && d.y >= c && d.y <= f && (n !== d.x || o !== d.y) && xl(n, o, a, l, s, u, d.x, d.y) && bl(d.prev, d, d.next) >= 0) return !1;
			d = d.next;
		}
		return !0;
	}
	function Ho(e, t, r, i) {
		let n = e.prev, a = e, s = e.next, o = n.x, l = a.x, u = s.x, h = n.y, c = a.y, p = s.y, f = Math.min(o, l, u), d = Math.min(h, c, p), y = Math.max(o, l, u), m = Math.max(h, c, p), g = ml(f, d, t, r, i), x = ml(y, m, t, r, i), v = e.prevZ;
		for (; v && v.z >= g;) {
			if (v.x >= f && v.x <= y && v.y >= d && v.y <= m && v !== s && (o !== v.x || h !== v.y) && xl(o, h, l, c, u, p, v.x, v.y) && bl(v.prev, v, v.next) >= 0) return !1;
			v = v.prevZ;
		}
		let b = e.nextZ;
		for (; b && b.z <= x;) {
			if (b.x >= f && b.x <= y && b.y >= d && b.y <= m && b !== s && (o !== b.x || h !== b.y) && xl(o, h, l, c, u, p, b.x, b.y) && bl(b.prev, b, b.next) >= 0) return !1;
			b = b.nextZ;
		}
		return !0;
	}
	function Ko(e, t) {
		let r = e, i = !1;
		do {
			let n = r.prev, a = r.next.next;
			_l(n, r, r.next, a, !1) && Sl(n, a) && Sl(a, n) && (t.push(n.i, r.i, a.i), Fl(r), Fl(r.next), r = e = a, i = !0), r = r.next;
		} while (r !== e);
		return i ? Yo(r) : r;
	}
	function Jo(e, t, r, i, n) {
		let a = e;
		do {
			let e = a.next.next;
			for (; e !== a.prev;) {
				if (a.i !== e.i && vl(a, e)) {
					let s = Al(a, e);
					a = Yo(a, a.next), s = Yo(s, s.next), Wo(a, t, r, i, n), Wo(s, t, r, i, n);
					return;
				}
				e = e.next;
			}
			a = a.next;
		} while (a !== e);
	}
	let Qo = !1;
	function el(e, t) {
		return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
	}
	function tl(e, t) {
		let r = function(e, t) {
			let r, i = t, n = e.x, a = e.y, s = -Infinity;
			if (wl(e, i)) return i;
			for (let p = 0, f = 0; p < il; p++, f += 4) {
				if (a < rl[f + 1] || a > rl[f + 3] || rl[f] > n || rl[f + 2] <= s) continue;
				let t = ol(p);
				i = ll(p);
				do {
					if (i.prev.next === i) {
						if (wl(e, i.next)) return i.next;
						if (a <= i.y && a >= i.next.y && i.next.y !== i.y) {
							let e = i.x + (a - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
							if (e <= n && e > s && (s = e, r = i.x < i.next.x ? i : i.next, e === n)) return r;
						}
					}
					i = i.next;
				} while (i !== t);
			}
			if (!r) return null;
			let o = r.x, l = r.y, u = Math.min(a, l), h = Math.max(a, l), c = Infinity;
			for (let p = 0, f = 0; p < il; p++, f += 4) {
				if (rl[f + 2] < o || rl[f] > n || rl[f + 3] < u || rl[f + 1] > h) continue;
				let t = ol(p);
				i = ll(p);
				do {
					if (i.prev.next === i && n >= i.x && i.x >= o && n !== i.x && xl(a < l ? n : s, a, o, l, a < l ? s : n, a, i.x, i.y)) {
						let t = Math.abs(a - i.y) / (n - i.x);
						(Sl(i, e) || i.y === a && i.next.y === a && i.next.x > n) && (t < c || t === c && (i.x > r.x || i.x === r.x && ul(r, i))) && (r = i, c = t);
					}
					i = i.next;
				} while (i !== t);
			}
			return r;
		}(e, t);
		if (!r) return t;
		let i = Al(r, e);
		return sl(r, i.next.next), Yo(i, i.next), Yo(r, r.next);
	}
	let rl = /* @__PURE__ */ new Float64Array(), il = 0;
	const nl = [], al = [];
	function sl(e, t) {
		let r = e;
		do {
			let e = il++;
			nl[e] = r;
			let i = r.x, n = r.y, a = r.x, s = r.y, o = 0;
			do {
				let t = r.next;
				r.z = e, t.x < i && (i = t.x), t.x > a && (a = t.x), t.y < n && (n = t.y), t.y > s && (s = t.y), r = t;
			} while (++o < 16 && r !== t);
			al[e] = r;
			let l = 4 * e;
			rl[l] = i, rl[l + 1] = n, rl[l + 2] = a, rl[l + 3] = s;
		} while (r !== t);
	}
	function ol(e) {
		let t = al[e];
		for (; t.prev.next !== t;) t = t.next;
		return al[e] = t, t;
	}
	function ll(e) {
		let t = nl[e];
		for (; t.prev.next !== t;) t = t.next;
		return nl[e] = t, t;
	}
	function ul(e, t) {
		return bl(e.prev, e, t.prev) < 0 && bl(t.next, e, e.next) < 0;
	}
	const hl = [];
	let cl = [], pl = /* @__PURE__ */ new Uint32Array(), fl = /* @__PURE__ */ new Uint32Array();
	const dl = /* @__PURE__ */ new Uint32Array(256);
	function yl(e, t, r, i, n, a) {
		dl.fill(0);
		for (let o = 0; o < e; o++) dl[r[o] >>> a & 255]++;
		let s = 0;
		for (let o = 0; o < 256; o++) {
			let e = dl[o];
			dl[o] = s, s += e;
		}
		for (let o = 0; o < e; o++) {
			let e = r[o], s = dl[e >>> a & 255]++;
			i[s] = t[o], n[s] = e;
		}
	}
	function ml(e, t, r, i, n) {
		return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - r) * n | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - i) * n | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1;
	}
	function gl(e) {
		let t = e, r = e;
		do
			(t.x < r.x || t.x === r.x && t.y < r.y) && (r = t), t = t.next;
		while (t !== e);
		return r;
	}
	function xl(e, t, r, i, n, a, s, o) {
		return (n - s) * (t - o) >= (e - s) * (a - o) && (e - s) * (i - o) >= (r - s) * (t - o) && (r - s) * (a - o) >= (n - s) * (i - o);
	}
	function vl(e, t) {
		let r = wl(e, t) && bl(e.prev, e, e.next) > 0 && bl(t.prev, t, t.next) > 0;
		return e.next.i !== t.i && (r || Sl(e, t) && Sl(t, e) && (0 !== bl(e.prev, e, t.prev) || 0 !== bl(e, t.prev, t))) && !function(e, t) {
			let r = Math.min(e.x, t.x), i = Math.max(e.x, t.x), n = Math.min(e.y, t.y), a = Math.max(e.y, t.y), s = e;
			do {
				let o = s.next;
				if (s.x > i && o.x > i || s.x < r && o.x < r || s.y > a && o.y > a || s.y < n && o.y < n) s = o;
				else {
					if (s.i !== e.i && o.i !== e.i && s.i !== t.i && o.i !== t.i && _l(s, o, e, t)) return !0;
					s = o;
				}
			} while (s !== e);
			return !1;
		}(e, t) && (r || function(e, t) {
			let r = e, i = !1, n = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
			do {
				let e = r.next;
				r.y > a != e.y > a && n < (e.x - r.x) * (a - r.y) / (e.y - r.y) + r.x && (i = !i), r = e;
			} while (r !== e);
			return i;
		}(e, t));
	}
	function bl(e, t, r) {
		return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y);
	}
	function wl(e, t) {
		return e.x === t.x && e.y === t.y;
	}
	function _l(e, t, r, i, n = !0) {
		let a = bl(e, t, r), s = bl(e, t, i), o = bl(r, i, e), l = bl(r, i, t);
		return (a > 0 && s < 0 || a < 0 && s > 0) && (o > 0 && l < 0 || o < 0 && l > 0) || !!n && !!(0 === a && Dl(e, r, t) || 0 === s && Dl(e, i, t) || 0 === o && Dl(r, e, i) || 0 === l && Dl(r, t, i));
	}
	function Dl(e, t, r) {
		return t.x <= Math.max(e.x, r.x) && t.x >= Math.min(e.x, r.x) && t.y <= Math.max(e.y, r.y) && t.y >= Math.min(e.y, r.y);
	}
	function Sl(e, t) {
		return bl(e.prev, e, e.next) < 0 ? bl(e, t, e.next) >= 0 && bl(e, e.prev, t) >= 0 : bl(e, t, e.prev) < 0 || bl(e, e.next, t) < 0;
	}
	function Al(e, t) {
		let r = kl(e.i, e.x, e.y), i = kl(t.i, t.x, t.y), n = e.next, a = t.prev;
		return e.next = t, t.prev = e, r.next = n, n.prev = r, i.next = r, r.prev = i, a.next = i, i.prev = a, i;
	}
	function El(e, t, r, i) {
		let n = kl(e, t, r);
		return i ? (n.next = i.next, n.prev = i, i.next.prev = n, i.next = n) : (n.prev = n, n.next = n), n;
	}
	function Fl(e) {
		e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), Qo && function(e, t) {
			let r = 4 * e.z;
			t.x < rl[r] && (rl[r] = t.x), t.y < rl[r + 1] && (rl[r + 1] = t.y), t.x > rl[r + 2] && (rl[r + 2] = t.x), t.y > rl[r + 3] && (rl[r + 3] = t.y);
		}(e.prev, e.next);
	}
	function kl(e, t, r) {
		return {
			i: e,
			x: t,
			y: r,
			prev: null,
			next: null,
			z: 0,
			prevZ: null,
			nextZ: null
		};
	}
	var Il = class {
		constructor(e, t) {
			if (t > e) throw Error("Min granularity must not be greater than base granularity.");
			this._baseZoomGranularity = e, this._minGranularity = t;
		}
		getGranularityForZoomLevel(e) {
			let t = 1 << e;
			return Math.max(Math.floor(this._baseZoomGranularity / t), this._minGranularity, 1);
		}
	}, Tl = (r = class {
		constructor(e) {
			this.fill = e.fill, this.line = e.line, this.tile = e.tile, this.stencil = e.stencil, this.circle = e.circle;
		}
	}, r.noSubdivision = new r({
		fill: new Il(0, 0),
		line: new Il(0, 0),
		tile: new Il(0, 0),
		stencil: new Il(0, 0),
		circle: 1
	}), r);
	Dn("SubdivisionGranularityExpression", Il), Dn("SubdivisionGranularitySetting", Tl);
	const Cl = -32768, Bl = 32767;
	var Ml = class {
		constructor(e, t) {
			this._vertexBuffer = [], this._vertexDictionary = /* @__PURE__ */ new Map(), this._used = !1, this._granularity = e, this._granularityCellSize = x / e, this._canonical = t;
		}
		_getKey(e, t) {
			return (e += 32768) << 16 | t + 32768;
		}
		_vertexToIndex(e, t) {
			if (e < -32768 || t < -32768 || e > 32767 || t > 32767) throw Error("Vertex coordinates are out of signed 16 bit integer range.");
			let r = 0 | Math.round(e), i = 0 | Math.round(t), n = this._getKey(r, i), a = this._vertexDictionary.get(n);
			if (void 0 !== a) return a;
			let s = this._vertexBuffer.length / 2;
			return this._vertexDictionary.set(n, s), this._vertexBuffer.push(r, i), s;
		}
		_subdivideTrianglesScanline(e, t) {
			if (this._granularity < 2) return function(e, t) {
				let r = [];
				for (let i = 0; i < t.length; i += 3) {
					let n = t[i], a = t[i + 1], s = t[i + 2], o = e[2 * n], l = e[2 * n + 1], u = e[2 * a], h = e[2 * a + 1], c = e[2 * s];
					(u - o) * (e[2 * s + 1] - l) - (h - l) * (c - o) > 0 ? (r.push(n), r.push(s), r.push(a)) : (r.push(n), r.push(a), r.push(s));
				}
				return r;
			}(this._vertexBuffer, function(e, t) {
				let r = Array(e.length);
				for (let i = 0; i < e.length; i++) r[i] = t[e[i]];
				return r;
			}(e, t));
			let r = [], i = e.length;
			for (let n = 0; n < i; n += 3) {
				let i = [
					t[e[n + 0]],
					t[e[n + 1]],
					t[e[n + 2]]
				], a = [
					this._vertexBuffer[2 * i[0] + 0],
					this._vertexBuffer[2 * i[0] + 1],
					this._vertexBuffer[2 * i[1] + 0],
					this._vertexBuffer[2 * i[1] + 1],
					this._vertexBuffer[2 * i[2] + 0],
					this._vertexBuffer[2 * i[2] + 1]
				], s = Infinity, o = Infinity, l = -Infinity, u = -Infinity;
				for (let e = 0; e < 3; e++) {
					let t = a[2 * e], r = a[2 * e + 1];
					s = Math.min(s, t), l = Math.max(l, t), o = Math.min(o, r), u = Math.max(u, r);
				}
				if (s === l || o === u) continue;
				let h = Math.floor(s / this._granularityCellSize), c = Math.ceil(l / this._granularityCellSize), p = Math.floor(o / this._granularityCellSize), f = Math.ceil(u / this._granularityCellSize);
				if (h === c && p === f) r.push(...i);
				else for (let e = p; e < f; e++) {
					let t = this._scanlineGenerateVertexRingForCellRow(e, a, i);
					Vl(this._vertexBuffer, t, r);
				}
			}
			return r;
		}
		_scanlineGenerateVertexRingForCellRow(e, t, r) {
			let i = e * this._granularityCellSize, n = i + this._granularityCellSize, a = [];
			for (let s = 0; s < 3; s++) {
				let e = t[2 * s], o = t[2 * s + 1], l = t[2 * (s + 1) % 6], u = t[(2 * (s + 1) + 1) % 6], h = t[2 * (s + 2) % 6], c = t[(2 * (s + 2) + 1) % 6], p = l - e, f = u - o, d = 0 === p, y = 0 === f, m = (i - o) / f, g = (n - o) / f, x = Math.min(m, g), v = Math.max(m, g);
				if (!y && (x >= 1 || v <= 0) || y && (o < i || o > n)) {
					u >= i && u <= n && a.push(r[(s + 1) % 3]);
					continue;
				}
				if (!y && x > 0) {
					let t = e + p * x, r = o + f * x;
					a.push(this._vertexToIndex(t, r));
				}
				let b = e + p * Math.max(x, 0), w = e + p * Math.min(v, 1);
				if (d || this._generateIntraEdgeVertices(a, e, o, l, u, b, w), !y && v < 1) {
					let t = e + p * v, r = o + f * v;
					a.push(this._vertexToIndex(t, r));
				}
				(y || u >= i && u <= n) && a.push(r[(s + 1) % 3]), !y && (u <= i || u >= n) && this._generateInterEdgeVertices(a, e, o, l, u, h, c, w, i, n);
			}
			return a;
		}
		_generateIntraEdgeVertices(e, t, r, i, n, a, s) {
			let o = i - t, l = n - r, u = 0 === l, h = u ? Math.min(t, i) : Math.min(a, s), c = u ? Math.max(t, i) : Math.max(a, s), p = Math.floor(h / this._granularityCellSize) + 1, f = Math.ceil(c / this._granularityCellSize) - 1;
			if (u ? t < i : a < s) for (let d = p; d <= f; d++) {
				let i = d * this._granularityCellSize, n = r + l * (i - t) / o;
				e.push(this._vertexToIndex(i, n));
			}
			else for (let d = f; d >= p; d--) {
				let i = d * this._granularityCellSize, n = r + l * (i - t) / o;
				e.push(this._vertexToIndex(i, n));
			}
		}
		_generateInterEdgeVertices(e, t, r, i, n, a, s, o, l, u) {
			let h = n - r, c = a - i, p = s - n, f = (l - n) / p, d = (u - n) / p, y = Math.min(f, d), m = Math.max(f, d), g = i + c * y, x = Math.floor(Math.min(g, o) / this._granularityCellSize) + 1, v = Math.ceil(Math.max(g, o) / this._granularityCellSize) - 1, b = o < g, w = 0 === p;
			if (w && (s === l || s === u)) return;
			if (w || y >= 1 || m <= 0) {
				let e = r - s, i = (l - s) / e, n = (u - s) / e, h = a + (t - a) * Math.min(i, n);
				x = Math.floor(Math.min(h, o) / this._granularityCellSize) + 1, v = Math.ceil(Math.max(h, o) / this._granularityCellSize) - 1, b = o < h;
			}
			let _ = h > 0 ? u : l;
			if (b) for (let D = x; D <= v; D++) {
				let t = D * this._granularityCellSize;
				e.push(this._vertexToIndex(t, _));
			}
			else for (let D = v; D >= x; D--) {
				let t = D * this._granularityCellSize;
				e.push(this._vertexToIndex(t, _));
			}
		}
		_generateOutline(e, t) {
			let r = [], i = 0;
			for (let n of e) {
				let e = this._granularity < 2 ? this._ringPathIndices(n, i, t) : this._pointArrayToIndices(zl(n, this._granularity, !0));
				i += n.length;
				let a = [];
				for (let t = 1; t < e.length; t++) a.push(e[t - 1]), a.push(e[t]);
				r.push(a);
			}
			return r;
		}
		_ringPathIndices(e, t, r) {
			let i = r.slice(t, t + e.length);
			return i.length >= 2 && Ll(e) && i.push(i[0]), i;
		}
		_handlePoles(e) {
			let t = !1, r = !1;
			this._canonical && (0 === this._canonical.y && (t = !0), this._canonical.y === (1 << this._canonical.z) - 1 && (r = !0)), (t || r) && this._fillPoles(e, t, r);
		}
		_ensureNoPoleVertices() {
			let e = this._vertexBuffer;
			for (let t = 0; t < e.length; t += 2) {
				let r = e[t + 1];
				-32768 === r && (e[t + 1] = -32767), 32767 === r && (e[t + 1] = 32766);
			}
		}
		_generatePoleQuad(e, t, r, i, n, a) {
			i > n == (-32768 === a) ? (e.push(r), e.push(t), e.push(this._vertexToIndex(i, a)), e.push(this._vertexToIndex(n, a)), e.push(r), e.push(this._vertexToIndex(i, a))) : (e.push(t), e.push(r), e.push(this._vertexToIndex(i, a)), e.push(r), e.push(this._vertexToIndex(n, a)), e.push(this._vertexToIndex(i, a)));
		}
		_fillPoles(e, t, r) {
			let i = this._vertexBuffer, n = x, a = e.length;
			for (let s = 2; s < a; s += 3) {
				let a = e[s - 2], o = e[s - 1], l = e[s], u = i[2 * a], h = i[2 * a + 1], c = i[2 * o], p = i[2 * o + 1], f = i[2 * l], d = i[2 * l + 1];
				t && (0 === h && 0 === p && this._generatePoleQuad(e, a, o, u, c, Cl), 0 === p && 0 === d && this._generatePoleQuad(e, o, l, c, f, Cl), 0 === d && 0 === h && this._generatePoleQuad(e, l, a, f, u, Cl)), r && (h === n && p === n && this._generatePoleQuad(e, a, o, u, c, Bl), p === n && d === n && this._generatePoleQuad(e, o, l, c, f, Bl), d === n && h === n && this._generatePoleQuad(e, l, a, f, u, Bl));
			}
		}
		_initializeVertices(e) {
			let t = [];
			for (let r = 0; r < e.length; r += 2) t.push(this._vertexToIndex(e[r], e[r + 1]));
			return t;
		}
		subdividePolygonInternal(e, t) {
			if (this._used) throw Error("Subdivision: multiple use not allowed.");
			this._used = !0;
			let r, { flattened: i, holeIndices: n } = function(e) {
				let t = [], r = [];
				for (let i of e) if (0 !== i.length) {
					i !== e[0] && t.push(r.length / 2);
					for (let e of i) r.push(e.x), r.push(e.y);
				}
				return {
					flattened: r,
					holeIndices: t
				};
			}(e), a = this._initializeVertices(i);
			try {
				let e = function(e, t, r = 2) {
					let i = t && t.length, n = i ? t[0] * r : e.length;
					qo.size && qo.clear();
					let a = Xo(e, 0, n, r, !0), s = [];
					if (!a || a.next === a.prev) return s;
					let o = 0, l = 0, u = 0;
					if (i && (a = function(e, t, r, i) {
						let n = [];
						for (let a = 0, s = t.length; a < s; a++) {
							let r = Xo(e, t[a] * i, a < s - 1 ? t[a + 1] * i : e.length, i, !1);
							r === r.next && qo.add(r), n.push(gl(r));
						}
						n.sort(el), function(e, t) {
							let r = Math.ceil((e + 2 * t) / 16) + t + 2;
							rl.length < 4 * r && (rl = new Float64Array(4 * r)), il = 0;
						}(e.length / i, t.length), sl(r, r), Qo = !0;
						for (let a = 0; a < n.length; a++) r = tl(n[a], r);
						return Qo = !1, Yo(r);
					}(e, t, a, r)), e.length > 80 * r) {
						o = e[0], l = e[1];
						let t = o, i = l;
						for (let a = r; a < n; a += r) {
							let r = e[a], n = e[a + 1];
							r < o && (o = r), n < l && (l = n), r > t && (t = r), n > i && (i = n);
						}
						u = Math.max(t - o, i - l), u = 0 === u ? 0 : 32767 / u;
					}
					return Wo(a, s, o, l, u), s;
				}(i, n);
				r = this._subdivideTrianglesScanline(e, a);
			} catch (e) {
				console.error(e);
			}
			let s = [];
			return t && (s = this._generateOutline(e, a)), this._ensureNoPoleVertices(), this._handlePoles(r), this._granularity >= 2 && 0 === this._canonical?.z && (r = this._removeTrianglesOutsideTileX(r), s = s.map((e) => this._removeLinesOutsideTileX(e))), {
				verticesFlattened: this._vertexBuffer,
				indicesTriangles: r,
				indicesLineList: s
			};
		}
		_vertexOutsideTileX(e) {
			let t = this._vertexBuffer[2 * e];
			return t < 0 || t > 8192;
		}
		_removeTrianglesOutsideTileX(e) {
			let t = [];
			for (let r = 0; r < e.length; r += 3) this._vertexOutsideTileX(e[r]) || this._vertexOutsideTileX(e[r + 1]) || this._vertexOutsideTileX(e[r + 2]) || t.push(e[r], e[r + 1], e[r + 2]);
			return t;
		}
		_removeLinesOutsideTileX(e) {
			let t = [];
			for (let r = 0; r < e.length; r += 2) this._vertexOutsideTileX(e[r]) || this._vertexOutsideTileX(e[r + 1]) || t.push(e[r], e[r + 1]);
			return t;
		}
		_pointArrayToIndices(e) {
			let t = [];
			for (let r of e) t.push(this._vertexToIndex(r.x, r.y));
			return t;
		}
	};
	function Pl(e, t, r, i = !0) {
		return new Ml(r, t).subdividePolygonInternal(e, i);
	}
	function zl(e, t, r = !1) {
		if (!e || e.length < 1 || e.length < 2) return [];
		let i = r && Ll(e);
		if (t < 2) return i ? [...e, e[0]] : [...e];
		let n = Math.floor(x / t), a = [];
		a.push(new f(e[0].x, e[0].y));
		let s = e.length, o = i ? s : s - 1;
		for (let l = 0; l < o; l++) {
			let t = e[l], r = l < s - 1 ? e[l + 1] : e[0], i = t.x, o = t.y, u = r.x, h = r.y, c = i !== u, p = o !== h;
			if (!c && !p) continue;
			let d = u - i, y = h - o, m = Math.abs(d), g = Math.abs(y), x = i, v = o;
			for (;;) {
				let e = d > 0 ? (Math.floor(x / n) + 1) * n : (Math.ceil(x / n) - 1) * n, t = y > 0 ? (Math.floor(v / n) + 1) * n : (Math.ceil(v / n) - 1) * n, r = Math.abs(x - e), i = Math.abs(v - t), s = Math.abs(x - u), o = Math.abs(v - h), l = c ? r / m : Infinity, b = p ? i / g : Infinity;
				if ((s <= r || !c) && (o <= i || !p)) break;
				if (l < b && c || !p) {
					x = e, v += y * l;
					let t = new f(x, Math.round(v));
					(a[a.length - 1].x !== t.x || a[a.length - 1].y !== t.y) && a.push(t);
				} else {
					x += d * b, v = t;
					let e = new f(Math.round(x), v);
					(a[a.length - 1].x !== e.x || a[a.length - 1].y !== e.y) && a.push(e);
				}
			}
			let b = new f(u, h);
			(a[a.length - 1].x !== b.x || a[a.length - 1].y !== b.y) && a.push(b);
		}
		return a;
	}
	function Ll(e) {
		return !e[0].equals(e[e.length - 1]);
	}
	function Vl(e, t, r) {
		if (0 === t.length) throw Error("Subdivision vertex ring is empty.");
		let i = 0, n = e[2 * t[0]];
		for (let l = 1; l < t.length; l++) {
			let r = e[2 * t[l]];
			r < n && (n = r, i = l);
		}
		let a = t.length, s = i, o = (s + 1) % a;
		for (;;) {
			let i = s - 1 >= 0 ? s - 1 : a - 1, n = (o + 1) % a, l = e[2 * t[i]], u = e[2 * t[i] + 1], h = e[2 * t[n]], c = e[2 * t[n] + 1], p = e[2 * t[s]], f = e[2 * t[s] + 1], d = e[2 * t[o]], y = e[2 * t[o] + 1], m = !1;
			if (l < h) m = !0;
			else if (l > h) m = !1;
			else {
				let e = y - f, t = -(d - p), r = f < y ? 1 : -1;
				((l - p) * e + (u - f) * t) * r > ((h - p) * e + (c - f) * t) * r && (m = !0);
			}
			if (m) {
				let e = t[i], n = t[s], l = t[o];
				e !== n && e !== l && n !== l && r.push(l, n, e), s--, s < 0 && (s = a - 1);
			} else {
				let e = t[n], i = t[s], l = t[o];
				e !== i && e !== l && i !== l && r.push(l, i, e), o++, o >= a && (o = 0);
			}
			if (i === n) break;
		}
	}
	function Ol(e, t, r, i, n, a, s, o, l) {
		let u = n.length / 2, h = s && o && l;
		if (u < us.MAX_VERTEX_ARRAY_LENGTH) {
			let c, p, f = t.prepareSegment(u, r, i), d = f.vertexLength;
			for (let e = 0; e < a.length; e += 3) i.emplaceBack(d + a[e], d + a[e + 1], d + a[e + 2]);
			f.vertexLength += u, f.primitiveLength += a.length / 3, h && (p = s.prepareSegment(u, r, o), c = p.vertexLength, p.vertexLength += u);
			for (let t = 0; t < n.length; t += 2) e(n[t], n[t + 1]);
			if (h) for (let e of l) {
				for (let t = 1; t < e.length; t += 2) o.emplaceBack(c + e[t - 1], c + e[t]);
				p.primitiveLength += e.length / 2;
			}
		} else (function(e, t, r, i, n, a) {
			let s = [];
			for (let c = 0; c < i.length / 2; c++) s.push(-1);
			let o = { count: 0 }, l = 0, u = e.getOrCreateLatestSegment(t, r), h = u.vertexLength;
			for (let c = 2; c < n.length; c += 3) {
				let p = n[c - 2], f = n[c - 1], d = n[c], y = s[p] < l, m = s[f] < l, g = s[d] < l, x = +!!y + +!!m + +!!g;
				u.vertexLength + x > us.MAX_VERTEX_ARRAY_LENGTH && (u = e.createNewSegment(t, r), l = o.count, y = !0, m = !0, g = !0, h = 0);
				let v = Rl(s, i, a, o, p, y, u), b = Rl(s, i, a, o, f, m, u), w = Rl(s, i, a, o, d, g, u);
				r.emplaceBack(h + v - l, h + b - l, h + w - l), u.primitiveLength++;
			}
		})(t, r, i, n, a, e), h && function(e, t, r, i, n, a) {
			let s = [];
			for (let c = 0; c < i.length / 2; c++) s.push(-1);
			let o = { count: 0 }, l = 0, u = e.getOrCreateLatestSegment(t, r), h = u.vertexLength;
			for (let c of n) for (let n = 1; n < c.length; n += 2) {
				let p = c[n - 1], f = c[n], d = s[p] < l, y = s[f] < l, m = +!!d + +!!y;
				u.vertexLength + m > us.MAX_VERTEX_ARRAY_LENGTH && (u = e.createNewSegment(t, r), l = o.count, d = !0, y = !0, h = 0);
				let g = Rl(s, i, a, o, p, d, u), x = Rl(s, i, a, o, f, y, u);
				r.emplaceBack(h + g - l, h + x - l), u.primitiveLength++;
			}
		}(s, r, o, n, l, e), t.forceNewSegmentOnNextPrepare(), s?.forceNewSegmentOnNextPrepare();
	}
	function Rl(e, t, r, i, n, a, s) {
		if (a) {
			let a = i.count;
			return r(t[2 * n], t[2 * n + 1]), e[n] = i.count, i.count++, s.vertexLength++, a;
		}
		return e[n];
	}
	var $l = class {
		constructor(e) {
			this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.layerIds = this.layers.map((e) => e.id), this.index = e.index, this.hasDependencies = !1, this.sdfPatterns = {}, this.patternFeatures = [], this.layoutVertexArray = new Wa(), this.indexArray = new as(), this.indexArray2 = new ss(), this.programConfigurations = new Ms(e.layers, e.zoom), this.segments = new us(), this.segments2 = new us(), this.stateDependentLayerIds = this.layers.filter((e) => e.isStateDependent()).map((e) => e.id);
		}
		populate(e, t, r) {
			this.hasDependencies = Uo("fill", this.layers, t);
			let i = this.layers[0].layout.get("fill-sort-key"), n = !i.isConstant(), a = [], s = new Rn(this.zoom), o = this.layers[0]._featureFilter.needGeometry;
			for (let { feature: l, id: u, index: h, sourceLayerIndex: c } of e) {
				let e = Rs(l, o);
				if (!this.layers[0]._featureFilter.filter(s, e, r)) continue;
				let p = n ? i.evaluate(e, {}, r, t.availableImages) : void 0, f = {
					id: u,
					properties: l.properties,
					type: l.type,
					sourceLayerIndex: c,
					index: h,
					geometry: o ? e.geometry : Os(l),
					patterns: {},
					sortKey: p
				};
				a.push(f);
			}
			n && a.sort((e, t) => e.sortKey - t.sortKey);
			for (let l of a) {
				let { geometry: i, index: n, sourceLayerIndex: a } = l;
				if (this.hasDependencies) {
					let e = jo("fill", this.layers, l, { zoom: this.zoom }, t);
					this.patternFeatures.push(e);
				} else this.addFeature(l, i, n, r, {}, t.subdivisionGranularity);
				let s = e[n].feature;
				t.featureIndex.insert(s, i, n, a, this.index);
			}
		}
		update(e, t, r) {
			this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e, t, this.stateDependentLayers, { imagePositions: r });
		}
		addFeatures({ options: e, canonical: t, patternPositions: r, patternMap: i }) {
			this.detectSdfPatterns(i);
			for (let n of this.patternFeatures) this.addFeature(n, n.geometry, n.index, t, r, e.subdivisionGranularity);
		}
		detectSdfPatterns(e) {
			for (let t of this.patternFeatures) for (let r in t.patterns) {
				let i = t.patterns[r];
				this.recordSdfPattern(r, e[i.min]), this.recordSdfPattern(r, e[i.mid]), this.recordSdfPattern(r, e[i.max]);
			}
			for (let t of this.layers) {
				let r = t.paint.get("fill-pattern").constantOr(null);
				r && (this.recordSdfPattern(t.id, e[r.from.toString()]), this.recordSdfPattern(t.id, e[r.to.toString()]));
			}
		}
		recordSdfPattern(e, t) {
			if (!t) return;
			let r = !0 === t.sdf, i = this.sdfPatterns[e];
			void 0 === i ? this.sdfPatterns[e] = r : i !== r && E(`Style sheet warning: Cannot mix SDF and non-SDF fill patterns in layer "${e}"`);
		}
		isEmpty() {
			return 0 === this.layoutVertexArray.length;
		}
		uploadPending() {
			return !this.uploaded || this.programConfigurations.needsUpload;
		}
		upload(e) {
			this.uploaded || (this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, No), this.indexBuffer = e.createIndexBuffer(this.indexArray), this.indexBuffer2 = e.createIndexBuffer(this.indexArray2)), this.programConfigurations.upload(e), this.uploaded = !0;
		}
		destroy() {
			this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.indexBuffer2.destroy(), this.programConfigurations.destroy(), this.segments.destroy(), this.segments2.destroy());
		}
		addFeature(e, t, r, i, n, a) {
			for (let s of ut(t, 500)) {
				let e = Pl(s, i, a.fill.getGranularityForZoomLevel(i.z)), t = this.layoutVertexArray;
				Ol((e, r) => {
					t.emplaceBack(e, r);
				}, this.segments, this.layoutVertexArray, this.indexArray, e.verticesFlattened, e.indicesTriangles, this.segments2, this.indexArray2, e.indicesLineList);
			}
			this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e, r, {
				imagePositions: n,
				canonical: i
			});
		}
	};
	let Nl, Ul;
	Dn("FillBucket", $l, { omit: ["layers", "patternFeatures"] });
	var jl = {
		get paint() {
			return Ul || (Ul = new ta({
				"fill-antialias": new Hn($.paint_fill["fill-antialias"], "fill-antialias"),
				"fill-opacity": new Kn($.paint_fill["fill-opacity"], "fill-opacity"),
				"fill-layer-opacity": new Hn($.paint_fill["fill-layer-opacity"], "fill-layer-opacity"),
				"fill-color": new Kn($.paint_fill["fill-color"], "fill-color"),
				"fill-outline-color": new Kn($.paint_fill["fill-outline-color"], "fill-outline-color"),
				"fill-translate": new Hn($.paint_fill["fill-translate"], "fill-translate"),
				"fill-translate-anchor": new Hn($.paint_fill["fill-translate-anchor"], "fill-translate-anchor"),
				"fill-pattern": new Jn($.paint_fill["fill-pattern"], "fill-pattern")
			}));
		},
		get layout() {
			return Nl || (Nl = new ta({ "fill-sort-key": new Kn($.layout_fill["fill-sort-key"], "fill-sort-key") }));
		}
	}, ql = class extends na {
		constructor(e, t) {
			super(e, jl, t);
		}
		recalculate(e, t) {
			super.recalculate(e, t);
			let r = this.paint._values["fill-outline-color"];
			"constant" === r.value.kind && void 0 === r.value.value && (this.paint._values["fill-outline-color"] = this.paint._values["fill-color"]);
		}
		createBucket(e) {
			return new $l(e);
		}
		queryRadius() {
			return so(this.paint.get("fill-translate"));
		}
		queryIntersectsFeature({ queryGeometry: e, geometry: t, transform: r, pixelsToTileUnits: i }) {
			return Zs(oo(e, this.paint.get("fill-translate"), this.paint.get("fill-translate-anchor"), -r.bearingInRadians, i), t);
		}
		isTileClipped() {
			return !0;
		}
	};
	const Gl = la([{
		name: "a_pos",
		components: 2,
		type: "Int16"
	}, {
		name: "a_normal_ed",
		components: 4,
		type: "Int16"
	}], 4), Xl = la([{
		name: "a_centroid",
		components: 2,
		type: "Int16"
	}], 4), Yl = Gl.members;
	Gl.size, Gl.alignment;
	var Wl = class {
		constructor(e, t, r, i, n) {
			for (this.properties = Object.create(null), this.extent = r, this.type = 0, this.id = void 0, this._pbf = e, this._geometry = -1, this._keys = i, this._values = n; e.pos < t;) {
				let t = e.readVarint();
				if (8 === t) this.id = e.readVarint();
				else if (18 === t) {
					let t = e.readVarint() + e.pos;
					for (; e.pos < t;) {
						let t = i[e.readVarint()], r = n[e.readVarint()];
						this.properties[t] = r;
					}
				} else 24 === t ? this.type = e.readVarint() : (34 === t && (this._geometry = e.pos), e.skip(t));
			}
		}
		loadGeometry() {
			if (this._geometry < 0) throw Error("feature has no geometry");
			let e = this._pbf;
			e.pos = this._geometry;
			let t, r = e.readVarint() + e.pos, i = [], n = 1, a = 0, s = 0, o = 0;
			for (; e.pos < r;) {
				if (a <= 0) {
					let t = e.readVarint();
					if (n = 7 & t, a = t >> 3, 0 === a) continue;
				}
				if (a--, 1 === n) s += e.readSVarint(), o += e.readSVarint(), t && i.push(t), t = [new f(s, o)];
				else if (2 === n) s += e.readSVarint(), o += e.readSVarint(), t && t.push(new f(s, o));
				else {
					if (7 !== n) throw Error(`unknown command ${n}`);
					t && t.push(t[0].clone());
				}
			}
			return t && i.push(t), i;
		}
		bbox() {
			if (this._geometry < 0) throw Error("feature has no geometry");
			let e = this._pbf;
			e.pos = this._geometry;
			let t = e.readVarint() + e.pos, r = 1, i = 0, n = 0, a = 0, s = Infinity, o = -Infinity, l = Infinity, u = -Infinity;
			for (; e.pos < t;) {
				if (i <= 0) {
					let t = e.readVarint();
					if (r = 7 & t, i = t >> 3, 0 === i) continue;
				}
				if (i--, 1 === r || 2 === r) n += e.readSVarint(), a += e.readSVarint(), n < s && (s = n), n > o && (o = n), a < l && (l = a), a > u && (u = a);
				else if (7 !== r) throw Error(`unknown command ${r}`);
			}
			return [
				s,
				l,
				o,
				u
			];
		}
		toGeoJSON(e, t, r) {
			let i, n = this.extent * 2 ** r, a = this.extent * e, s = this.extent * t, o = this.loadGeometry();
			function l(e) {
				return [360 * (e.x + a) / n - 180, 360 / Math.PI * Math.atan(Math.exp((1 - 2 * (e.y + s) / n) * Math.PI)) - 90];
			}
			function u(e) {
				return e.map(l);
			}
			if (1 === this.type) {
				let e = [];
				for (let r of o) e.push(r[0]);
				let t = u(e);
				i = 1 === e.length ? {
					type: "Point",
					coordinates: t[0]
				} : {
					type: "MultiPoint",
					coordinates: t
				};
			} else if (2 === this.type) {
				let e = o.map(u);
				i = 1 === e.length ? {
					type: "LineString",
					coordinates: e[0]
				} : {
					type: "MultiLineString",
					coordinates: e
				};
			} else {
				if (3 !== this.type) throw Error("unknown feature type");
				{
					let e = Zl(o), t = [];
					for (let r of e) t.push(r.map(u));
					i = 1 === t.length ? {
						type: "Polygon",
						coordinates: t[0]
					} : {
						type: "MultiPolygon",
						coordinates: t
					};
				}
			}
			let h = {
				type: "Feature",
				geometry: i,
				properties: this.properties
			};
			return null != this.id && (h.id = this.id), h;
		}
	};
	function Zl(e) {
		let t = e.length;
		if (t <= 1) return [e];
		let r, i, n = [];
		for (let a = 0; a < t; a++) {
			let t = Hl(e[a]);
			0 !== t && (void 0 === i && (i = t < 0), i === t < 0 ? (r && n.push(r), r = [e[a]]) : r && r.push(e[a]));
		}
		return r && n.push(r), n;
	}
	function Hl(e) {
		let t = 0;
		for (let r, i, n = 0, a = e.length, s = a - 1; n < a; s = n++) r = e[n], i = e[s], t += (i.x - r.x) * (r.y + i.y);
		return t;
	}
	Wl.types = [
		"Unknown",
		"Point",
		"LineString",
		"Polygon"
	];
	var Kl = class {
		constructor(e, t) {
			for (this.version = 1, this.name = "", this.extent = 4096, this.length = 0, this._pbf = e, this._keys = [], this._values = [], this._features = [], void 0 === t && (t = e.length); e.pos < t;) {
				let t = e.readVarint();
				10 === t ? this.name = e.readString() : 18 === t ? (this._features.push(e.pos), e.skip(t)) : 26 === t ? this._keys.push(e.readString()) : 34 === t ? this._values.push(Jl(e)) : 40 === t ? this.extent = e.readVarint() : 120 === t ? this.version = e.readVarint() : e.skip(t);
			}
			this.length = this._features.length;
		}
		feature(e) {
			if (e < 0 || e >= this._features.length) throw Error("feature index out of bounds");
			this._pbf.pos = this._features[e];
			let t = this._pbf.readVarint() + this._pbf.pos;
			return new Wl(this._pbf, t, this.extent, this._keys, this._values);
		}
	};
	function Jl(e) {
		let t = null, r = e.readVarint() + e.pos;
		for (; e.pos < r;) {
			let r = e.readVarint();
			t = 10 === r ? e.readString() : 21 === r ? e.readFloat() : 25 === r ? e.readDouble() : 32 === r ? e.readVarint(!0) : 40 === r ? e.readVarint() : 48 === r ? e.readSVarint() : 56 === r ? e.readBoolean() : (e.skip(r), null);
		}
		if (null == t) throw Error("unknown feature value");
		return t;
	}
	var Ql = class {
		constructor(e, t = e.length) {
			let r = Object.create(null);
			for (; e.pos < t;) {
				let t = e.readVarint();
				if (26 === t) {
					let t = new Kl(e, e.readVarint() + e.pos);
					t.length && (r[t.name] = t);
				} else e.skip(t);
			}
			this.layers = r;
		}
	};
	const eu = 6371008.8;
	var tu = class e {
		constructor(e, t) {
			if (isNaN(e) || isNaN(t)) throw Error(`Invalid LngLat object: (${e}, ${t})`);
			if (this.lng = +e, this.lat = +t, this.lat > 90 || this.lat < -90) throw Error("Invalid LngLat latitude value: must be between -90 and 90");
		}
		wrap() {
			return new e(function(e, t) {
				let r = ((e - t) % 360 + 360) % 360 + t;
				return r === t ? 180 : r;
			}(this.lng, -180), this.lat);
		}
		toArray() {
			return [this.lng, this.lat];
		}
		toString() {
			return `LngLat(${this.lng}, ${this.lat})`;
		}
		distanceTo(e) {
			let t = Math.PI / 180, r = this.lat * t, i = e.lat * t, n = Math.sin(r) * Math.sin(i) + Math.cos(r) * Math.cos(i) * Math.cos((e.lng - this.lng) * t);
			return eu * Math.acos(Math.min(n, 1));
		}
		static convert(t) {
			if (t instanceof e) return t;
			if (Array.isArray(t) && (2 === t.length || 3 === t.length)) return new e(Number(t[0]), Number(t[1]));
			if (!Array.isArray(t) && "object" == typeof t && t) return new e(Number("lng" in t ? t.lng : t.lon), Number(t.lat));
			throw Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]");
		}
	};
	const ru = 6378137, iu = {
		origin: [-Math.PI * ru, Math.PI * ru],
		extentAtZoom0: 2 * Math.PI * ru
	}, nu = 2 * Math.PI * eu;
	function au(e) {
		return nu * Math.cos(e * Math.PI / 180);
	}
	function su(e) {
		return (180 + e) / 360;
	}
	function ou(e) {
		return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + e * Math.PI / 360))) / 360;
	}
	function lu(e, t) {
		return e / au(t);
	}
	function uu(e) {
		return 360 * e - 180;
	}
	function hu(e) {
		let t = 180 - 360 * e;
		return 360 / Math.PI * Math.atan(Math.exp(t * Math.PI / 180)) - 90;
	}
	function cu(e) {
		return 1 / Math.cos(e * Math.PI / 180);
	}
	var pu = class e {
		constructor(e, t, r = 0) {
			this.x = +e, this.y = +t, this.z = +r;
		}
		static fromLngLat(t, r = 0) {
			let i = tu.convert(t);
			return new e(su(i.lng), ou(i.lat), lu(r, i.lat));
		}
		toLngLat() {
			return new tu(uu(this.x), hu(this.y));
		}
		toAltitude() {
			return function(e, t) {
				return e * au(hu(t));
			}(this.z, this.y);
		}
		meterInMercatorCoordinateUnits() {
			return 1 / nu * cu(hu(this.y));
		}
	};
	const fu = new class {
		constructor() {
			this.name = "mercator", this.wraps = !0, this.tileMatrixSet = iu;
		}
		worldFromLngLat(e, t, r) {
			return new pu(su(e), ou(t), void 0 === r ? 0 : lu(r, t));
		}
		lngLatFromWorld(e, t) {
			return new tu(uu(e), hu(t));
		}
		hasLngLat(e, t) {
			return !0;
		}
		metersPerWorldUnit(e, t) {
			return 1 / (1 / nu * cu(hu(t)));
		}
		worldZFromAltitude(e, t) {
			return lu(e, t.lat);
		}
	}();
	function du(e, t) {
		return t <= 0 || !e || 0 === e.length ? e : e.map((e) => function(e, t) {
			if (!e || e.length < 3) return e;
			let r = e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y, i = r ? e.length - 1 : e.length;
			if (i < 3) return e;
			let n = [], a = Ns(e[i - 1], e[0]);
			for (let o = 0; o < i; o++) {
				let r = e[(o - 1 + i) % i], s = e[o], l = e[(o + 1) % i], u = Ns(s, l);
				a || u ? n.push(s.clone()) : gu(n, r, s, l, t), a = u;
			}
			let s = function(e) {
				let t = [];
				for (let r of e) {
					let e = r.round(), i = t[t.length - 1];
					(i?.x !== e.x || i?.y !== e.y) && t.push(e);
				}
				for (; t.length > 1 && t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y;) t.pop();
				return t;
			}(n);
			return s.length < 3 ? e : (r && s.push(s[0].clone()), s);
		}(e, t));
	}
	const yu = Math.cos(35 * Math.PI / 180);
	function mu(e, t) {
		if (!t) return e.unit();
		let r = e.mag(), i = t.mag();
		return e.x * t.x + e.y * t.y < yu * r * i || r >= 2 * i ? e.unit() : i >= 2 * r ? t.unit() : e.add(t)._unit();
	}
	function gu(e, t, r, i, n) {
		let a = t.sub(r), s = i.sub(r), o = a.mag(), l = s.mag();
		if (o < 1e-6 || l < 1e-6) return void e.push(r.clone());
		a._div(o), s._div(l);
		let u = a.x * s.x + a.y * s.y;
		if (Math.abs(u) > Math.cos(5 * Math.PI / 180)) return void e.push(r.clone());
		let h = Math.min(n, .2 * o, .2 * l), c = r.add(a.mult(h)), p = r.add(s.mult(h)), f = Math.sqrt((1 + u) / 2), d = r.add(a.add(s)._unit()._mult(h / f)), y = c.sub(d).angleWith(p.sub(d)), m = Math.max(2, Math.ceil(Math.abs(y) / (Math.PI / 6) - 1e-6));
		for (let g = 0; g <= m; g++) e.push(c.rotateAround(g / m * y, d));
	}
	const xu = 8192;
	function vu(e, t, r, i, n, a, s, o) {
		e.emplaceBack(t, r, 2 * Math.floor(i * xu) + s, n * xu * 2, a * xu * 2, Math.round(o));
	}
	var bu = class {
		constructor(e) {
			this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.layerIds = this.layers.map((e) => e.id), this.index = e.index, this.hasDependencies = !1, this.layoutVertexArray = new Za(), this.centroidVertexArray = new Xa(), this.indexArray = new as(), this.programConfigurations = new Ms(e.layers, e.zoom), this.segments = new us(), this.stateDependentLayerIds = this.layers.filter((e) => e.isStateDependent()).map((e) => e.id);
		}
		populate(e, t, r) {
			this.features = [], this.hasDependencies = Uo("fill-extrusion", this.layers, t);
			let i = new Rn(this.zoom), n = this.layers[0], a = n.layout.get("fill-extrusion-rounded-corner-distance"), s = a > 0 ? function(e, t) {
				let r = function(e, t, r) {
					return function(e, t, r) {
						let i = 1 / (1 << r.z);
						return new pu(e / x * i + r.x * i, t / x * i + r.y * i);
					}(e, t, r).toLngLat();
				}(x / 2, x / 2, t);
				return e * pu.fromLngLat(r).meterInMercatorCoordinateUnits() * ((1 << t.z) * x);
			}(a, r) : 0, o = n._featureFilter.needGeometry;
			for (let { feature: l, id: u, index: h, sourceLayerIndex: c } of e) {
				let e = Rs(l, o);
				if (!n._featureFilter.filter(i, e, r)) continue;
				let a = {
					id: u,
					sourceLayerIndex: c,
					index: h,
					geometry: du(o ? e.geometry : Os(l), s),
					properties: l.properties,
					type: l.type,
					patterns: {}
				};
				this.hasDependencies ? this.features.push(jo("fill-extrusion", this.layers, a, { zoom: this.zoom }, t)) : this.addFeature(a, a.geometry, h, r, {}, t.subdivisionGranularity), t.featureIndex.insert(l, a.geometry, h, c, this.index, !0);
			}
		}
		addFeatures({ options: e, canonical: t, patternPositions: r }) {
			for (let i of this.features) {
				let { geometry: n } = i;
				this.addFeature(i, n, i.index, t, r, e.subdivisionGranularity);
			}
		}
		update(e, t, r) {
			this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e, t, this.stateDependentLayers, { imagePositions: r });
		}
		isEmpty() {
			return 0 === this.layoutVertexArray.length && 0 === this.centroidVertexArray.length;
		}
		uploadPending() {
			return !this.uploaded || this.programConfigurations.needsUpload;
		}
		upload(e) {
			this.uploaded || (this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, Yl), this.centroidVertexBuffer = e.createVertexBuffer(this.centroidVertexArray, Xl.members, !0), this.indexBuffer = e.createIndexBuffer(this.indexArray)), this.programConfigurations.upload(e), this.uploaded = !0;
		}
		destroy() {
			this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy(), this.centroidVertexBuffer.destroy());
		}
		addFeature(e, t, r, i, n, a) {
			for (let s of ut(t, 500)) {
				let t = {
					x: 0,
					y: 0,
					sampleCount: 0
				}, r = this.layoutVertexArray.length;
				this.processPolygon(t, i, e, s, a);
				let n = this.layoutVertexArray.length - r, o = Math.floor(t.x / t.sampleCount), l = Math.floor(t.y / t.sampleCount);
				for (let e = 0; e < n; e++) this.centroidVertexArray.emplaceBack(o, l);
			}
			this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e, r, {
				imagePositions: n,
				canonical: i
			});
		}
		processPolygon(e, t, r, i, n) {
			if (i.length < 1 || Us(i[0])) return;
			for (let h of i) 0 !== h.length && wu(e, h);
			let a = { segment: this.segments.prepareSegment(4, this.layoutVertexArray, this.indexArray) }, s = n.fill.getGranularityForZoomLevel(t.z), o = "Polygon" === Wl.types[r.type];
			for (let h of i) {
				if (0 === h.length || Us(h)) continue;
				let e = zl(h, s, o);
				this._generateSideFaces(e, a);
			}
			if (!o) return;
			let l = Pl(i, t, s, !1), u = this.layoutVertexArray;
			Ol((e, t) => {
				vu(u, e, t, 0, 0, 1, 1, 0);
			}, this.segments, this.layoutVertexArray, this.indexArray, l.verticesFlattened, l.indicesTriangles);
		}
		_generateSideFaces(e, t) {
			let r = 0, i = this.layers[0].layout.get("fill-extrusion-rounded-corner-distance") > 0 ? function(e) {
				let t = [null];
				for (let a = 1; a < e.length; a++) {
					let r = e[a].sub(e[a - 1]), i = !Ns(e[a], e[a - 1]) && r.mag() > 0;
					t.push(i ? r._perp() : null);
				}
				let r = e.length - 1, i = r > 1 && e[0].equals(e[r]), n = [null];
				for (let a = 1; a <= r; a++) {
					let e = t[a];
					if (!e) {
						n.push(null);
						continue;
					}
					let s = i && 1 === a ? t[r] : t[a - 1], o = i && a === r ? t[1] : t[a + 1];
					n.push({
						start: mu(e, s),
						end: mu(e, o)
					});
				}
				return n;
			}(e) : null;
			for (let n = 1; n < e.length; n++) {
				let a = e[n], s = e[n - 1];
				if (Ns(a, s) || i && !i[n]) continue;
				t.segment.vertexLength + 4 > us.MAX_VERTEX_ARRAY_LENGTH && (t.segment = this.segments.prepareSegment(4, this.layoutVertexArray, this.indexArray));
				let o = a.sub(s)._perp()._unit(), { start: l, end: u } = i ? i[n] : {
					start: o,
					end: o
				}, h = s.dist(a);
				r + h > 32768 && (r = 0), vu(this.layoutVertexArray, a.x, a.y, u.x, u.y, 0, 0, r), vu(this.layoutVertexArray, a.x, a.y, u.x, u.y, 0, 1, r), r += h, vu(this.layoutVertexArray, s.x, s.y, l.x, l.y, 0, 0, r), vu(this.layoutVertexArray, s.x, s.y, l.x, l.y, 0, 1, r);
				let c = t.segment.vertexLength;
				this.indexArray.emplaceBack(c, c + 2, c + 1), this.indexArray.emplaceBack(c + 1, c + 2, c + 3), t.segment.vertexLength += 4, t.segment.primitiveLength += 2;
			}
		}
	};
	function wu(e, t) {
		for (let r = 0; r < t.length; r++) {
			let i = t[r];
			(r !== t.length - 1 || t[0].x !== i.x || t[0].y !== i.y) && (e.x += i.x, e.y += i.y, e.sampleCount++);
		}
	}
	let _u, Du;
	Dn("FillExtrusionBucket", bu, { omit: ["layers", "features"] });
	var Su = {
		get paint() {
			return Du || (Du = new ta({
				"fill-extrusion-opacity": new Hn($["paint_fill-extrusion"]["fill-extrusion-opacity"], "fill-extrusion-opacity"),
				"fill-extrusion-color": new Kn($["paint_fill-extrusion"]["fill-extrusion-color"], "fill-extrusion-color"),
				"fill-extrusion-translate": new Hn($["paint_fill-extrusion"]["fill-extrusion-translate"], "fill-extrusion-translate"),
				"fill-extrusion-translate-anchor": new Hn($["paint_fill-extrusion"]["fill-extrusion-translate-anchor"], "fill-extrusion-translate-anchor"),
				"fill-extrusion-pattern": new Jn($["paint_fill-extrusion"]["fill-extrusion-pattern"], "fill-extrusion-pattern"),
				"fill-extrusion-height": new Kn($["paint_fill-extrusion"]["fill-extrusion-height"], "fill-extrusion-height"),
				"fill-extrusion-base": new Kn($["paint_fill-extrusion"]["fill-extrusion-base"], "fill-extrusion-base"),
				"fill-extrusion-vertical-gradient": new Hn($["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"], "fill-extrusion-vertical-gradient")
			}));
		},
		get layout() {
			return _u || (_u = new ta({ "fill-extrusion-rounded-corner-distance": new Hn($["layout_fill-extrusion"]["fill-extrusion-rounded-corner-distance"], "fill-extrusion-rounded-corner-distance") }));
		}
	}, Au = class extends na {
		constructor(e, t) {
			super(e, Su, t);
		}
		createBucket(e) {
			return new bu(e);
		}
		queryRadius() {
			return so(this.paint.get("fill-extrusion-translate"));
		}
		is3D() {
			return !0;
		}
		queryIntersectsFeature({ queryGeometry: e, feature: t, featureState: r, geometry: i, transform: n, pixelsToTileUnits: a, pixelPosMatrix: s }) {
			let o = oo(e, this.paint.get("fill-extrusion-translate"), this.paint.get("fill-extrusion-translate-anchor"), -n.bearingInRadians, a), l = this.paint.get("fill-extrusion-height").evaluate(t, r), u = this.paint.get("fill-extrusion-base").evaluate(t, r), h = Iu(o, s, 0), c = ku(i, u, l, s);
			return function(e, t, r) {
				let i = Infinity;
				Zs(r, t) && (i = Fu(r, t[0]));
				for (let n = 0; n < t.length; n++) {
					let a = t[n], s = e[n];
					for (let e = 0; e < a.length - 1; e++) {
						let t = a[e], n = a[e + 1], o = s[e], l = [
							t,
							n,
							s[e + 1],
							o,
							t
						];
						Ys(r, l) && (i = Math.min(i, Fu(r, l)));
					}
				}
				return i !== Infinity && i;
			}(c[0], c[1], h);
		}
	};
	function Eu(e, t) {
		return e.x * t.x + e.y * t.y;
	}
	function Fu(e, t) {
		if (1 === e.length) {
			let r, i = 0, n = t[i++];
			for (; !r || n.equals(r);) if (r = t[i++], !r) return Infinity;
			for (; i < t.length; i++) {
				let a = t[i], s = e[0], o = r.sub(n), l = a.sub(n), u = s.sub(n), h = Eu(o, o), c = Eu(o, l), p = Eu(l, l), f = Eu(u, o), d = Eu(u, l), y = h * p - c * c, m = (p * f - c * d) / y, g = (h * d - c * f) / y, x = 1 - m - g, v = n.z * x + r.z * m + a.z * g;
				if (isFinite(v)) return v;
			}
			return Infinity;
		}
		{
			let e = Infinity;
			for (let r of t) e = Math.min(e, r.z);
			return e;
		}
	}
	function ku(e, t, r, i) {
		let n = [], a = [], s = i[8] * t, o = i[9] * t, l = i[10] * t, u = i[11] * t, h = i[8] * r, c = i[9] * r, p = i[10] * r, d = i[11] * r;
		for (let y of e) {
			let e = [], t = [];
			for (let r of y) {
				let n = r.x, a = r.y, y = i[0] * n + i[4] * a + i[12], m = i[1] * n + i[5] * a + i[13], g = i[2] * n + i[6] * a + i[14], x = i[3] * n + i[7] * a + i[15], v = g + l, b = x + u, w = y + h, _ = m + c, D = g + p, S = x + d, A = new f((y + s) / b, (m + o) / b);
				A.z = v / b, e.push(A);
				let E = new f(w / S, _ / S);
				E.z = D / S, t.push(E);
			}
			n.push(e), a.push(t);
		}
		return [n, a];
	}
	function Iu(e, t, r) {
		let i = [];
		for (let n of e) {
			let e = [
				n.x,
				n.y,
				r,
				1
			];
			g(e, e, t), i.push(new f(e[0] / e[3], e[1] / e[3]));
		}
		return i;
	}
	function Tu(e, t, r, i, n) {
		let a, s = i, o = t + (r - t >> 1), l = r - t, u = e[t], h = e[t + 1], c = e[r], p = e[r + 1];
		for (let f = t + 3; f < r; f += 3) {
			let t = Cu(e[f], e[f + 1], u, h, c, p);
			if (t > s) a = f, s = t;
			else if (t === s) {
				let e = Math.abs(f - o);
				e < l && (a = f, l = e);
			}
		}
		s > i && (e[a + 2] = s, a - t > 3 && n.push(t, a), r - a > 3 && n.push(a, r));
	}
	function Cu(e, t, r, i, n, a) {
		let s = n - r, o = a - i;
		if (0 !== s || 0 !== o) {
			let l = ((e - r) * s + (t - i) * o) / (s * s + o * o);
			l > 1 ? (r = n, i = a) : l > 0 && (r += s * l, i += o * l);
		}
		return s = e - r, o = t - i, s * s + o * o;
	}
	function Bu(e, t, r, i) {
		let n = {
			type: t,
			geom: r
		}, a = {
			id: e ?? null,
			type: n.type,
			geometry: n.geom,
			tags: i,
			minX: Infinity,
			minY: Infinity,
			maxX: -Infinity,
			maxY: -Infinity
		};
		switch (n.type) {
			case "Point":
			case "MultiPoint":
				Pu(a, n.geom);
				break;
			case "LineString":
				Pu(a, n.geom.points);
				break;
			case "Polygon":
				Pu(a, n.geom[0].points);
				break;
			case "MultiLineString":
				for (let e of n.geom) Pu(a, e.points);
				break;
			case "MultiPolygon": for (let e of n.geom) Pu(a, e[0].points);
		}
		return a;
	}
	function Mu(e) {
		let t = e;
		e.points.length > 64 && (t.points = new Float64Array(e.points));
	}
	function Pu(e, t) {
		for (let r = 0; r < t.length; r += 3) e.minX = Math.min(e.minX, t[r]), e.minY = Math.min(e.minY, t[r + 1]), e.maxX = Math.max(e.maxX, t[r]), e.maxY = Math.max(e.maxY, t[r + 1]);
	}
	const zu = new class {
		projectX(e) {
			return e / 360 + .5;
		}
		projectY(e) {
			let t = Math.sin(e * Math.PI / 180), r = .5 - .25 * Math.log((1 + t) / (1 - t)) / Math.PI;
			return r < 0 ? 0 : r > 1 ? 1 : r;
		}
		unprojectX(e) {
			return 360 * (e - .5);
		}
		unprojectY(e) {
			let t = (180 - 360 * e) * Math.PI / 180;
			return 360 * Math.atan(Math.exp(t)) / Math.PI - 90;
		}
	}(), Lu = new class {
		projectX(e) {
			return e;
		}
		projectY(e) {
			return e;
		}
		unprojectX(e) {
			return e;
		}
		unprojectY(e) {
			return e;
		}
	}();
	function Vu(e) {
		return "unitSquare" === e ? Lu : zu;
	}
	function Ou(e, t, r) {
		let i = [];
		switch (e.type) {
			case "FeatureCollection":
				for (let n = 0; n < e.features.length; n++) Ru(i, e.features[n], t, r, n);
				break;
			case "Feature":
				Ru(i, e, t, r);
				break;
			default: Ru(i, {
				type: "Feature",
				geometry: e,
				properties: void 0
			}, t, r);
		}
		return i;
	}
	function Ru(e, t, r, i, n) {
		let a = e.length;
		if ($u(e, t, r, n), !i) return;
		let s = Nu(t, r, n);
		null != s && (e.length > a ? i.delete(s) : i.set(s, {
			...t,
			id: s
		}));
	}
	function $u(e, t, r, i, n = 0) {
		if (!t.geometry) return;
		if (n > 1024) throw Error("GeometryCollection nesting exceeds supported depth: 1024");
		if ("GeometryCollection" === t.geometry.type) return void function(e, t, r, i, n, a = 0) {
			for (let s of r.geometries) $u(e, {
				id: t.id,
				type: "Feature",
				geometry: s,
				properties: t.properties
			}, i, n, a);
		}(e, t, t.geometry, r, i, n + 1);
		if (!t.geometry.coordinates?.length) return;
		let a = Nu(t, r, i), s = (r.tolerance / ((1 << r.maxZoom) * r.extent)) ** 2, o = Vu(r.coordinates);
		switch (t.geometry.type) {
			case "Point":
				(function(e, t, r, i, n) {
					let a = [];
					a.push(i.projectX(r.coordinates[0]), i.projectY(r.coordinates[1]), 0), e.push(Bu(t, "Point", a, n));
				})(e, a, t.geometry, o, t.properties);
				return;
			case "MultiPoint":
				(function(e, t, r, i, n) {
					let a = [];
					for (let s of r.coordinates) a.push(i.projectX(s[0]), i.projectY(s[1]), 0);
					e.push(Bu(t, "MultiPoint", a, n));
				})(e, a, t.geometry, o, t.properties);
				return;
			case "LineString":
				(function(e, t, r, i, n, a) {
					let s = { points: [] };
					Uu(r.coordinates, s, i, !1, n), e.push(Bu(t, "LineString", s, a));
				})(e, a, t.geometry, s, o, t.properties);
				return;
			case "MultiLineString":
				(function(e, t, r, i, n, a, s) {
					if (a.lineMetrics) for (let o of r.coordinates) {
						let r = { points: [] };
						Uu(o, r, i, !1, n), e.push(Bu(t, "LineString", r, s));
					}
					else {
						let a = [];
						ju(r.coordinates, a, i, !1, n), e.push(Bu(t, "MultiLineString", a, s));
					}
				})(e, a, t.geometry, s, o, r, t.properties);
				return;
			case "Polygon":
				(function(e, t, r, i, n, a) {
					let s = [];
					ju(r.coordinates, s, i, !0, n), e.push(Bu(t, "Polygon", s, a));
				})(e, a, t.geometry, s, o, t.properties);
				return;
			case "MultiPolygon":
				(function(e, t, r, i, n, a) {
					let s = [];
					for (let o of r.coordinates) {
						let e = [];
						ju(o, e, i, !0, n), e.length && s.push(e);
					}
					s.length && e.push(Bu(t, "MultiPolygon", s, a));
				})(e, a, t.geometry, s, o, t.properties);
				return;
			default: throw Error("Input data is not a valid GeoJSON object.");
		}
	}
	function Nu(e, t, r) {
		return t.promoteId ? e.properties?.[t.promoteId] : t.generateId ? r || 0 : e.id;
	}
	function Uu(e, t, r, i, n) {
		let a, s, o = 0;
		for (let u = 0; u < e.length; u++) {
			let r = n.projectX(e[u][0]), l = n.projectY(e[u][1]);
			t.points.push(r, l, 0), u > 0 && (o += i ? (a * l - r * s) / 2 : Math.sqrt((r - a) ** 2 + (l - s) ** 2)), a = r, s = l;
		}
		let l = t.points.length - 3;
		t.points[2] = 1, r > 0 && function(e, t, r, i) {
			let n = [t, r];
			for (; n.length;) r = n.pop(), Tu(e, t = n.pop(), r, i, n);
		}(t.points, 0, l, r), t.points[l + 2] = 1, Mu(t), t.size = Math.abs(o), t.start = 0, t.end = t.size;
	}
	function ju(e, t, r, i, n) {
		for (let a = 0; a < e.length; a++) {
			let s = { points: [] };
			Uu(e[a], s, r, i, n), t.push(s);
		}
	}
	function qu(e, t = zu) {
		let r = {
			type: "Feature",
			geometry: Gu(e, t),
			properties: e.tags
		};
		return null != e.id && (r.id = e.id), r;
	}
	function Gu(e, t) {
		let { type: r, geometry: i } = e;
		switch (r) {
			case "Point": return {
				type: r,
				coordinates: Yu(i[0], i[1], t)
			};
			case "MultiPoint": return {
				type: r,
				coordinates: Xu(i, t)
			};
			case "LineString": return {
				type: r,
				coordinates: Xu(i.points, t)
			};
			case "MultiLineString":
			case "Polygon": return {
				type: r,
				coordinates: i.map((e) => Xu(e.points, t))
			};
			case "MultiPolygon": return {
				type: r,
				coordinates: i.map((e) => e.map((e) => Xu(e.points, t)))
			};
		}
	}
	function Xu(e, t = zu) {
		let r = [];
		for (let i = 0; i < e.length; i += 3) r.push(Yu(e[i], e[i + 1], t));
		return r;
	}
	function Yu(e, t, r) {
		return [r.unprojectX(e), r.unprojectY(t)];
	}
	function Wu(e, t, r, i, n, a, s, o) {
		if (i /= t, a >= (r /= t) && s < i) return e;
		if (s < r || a >= i) return null;
		let l = [];
		for (let u of e) {
			let e = 0 === n ? u.minX : u.minY, t = 0 === n ? u.maxX : u.maxY;
			if (e >= r && t < i) l.push(u);
			else if (!(t < r || e >= i)) switch (u.type) {
				case "Point":
				case "MultiPoint":
					Zu(u, l, r, i, n);
					continue;
				case "LineString":
					Hu(u, l, r, i, n, o);
					continue;
				case "MultiLineString":
					Ku(u, l, r, i, n);
					continue;
				case "Polygon":
					Ju(u, l, r, i, n);
					continue;
				case "MultiPolygon":
					Qu(u, l, r, i, n);
					continue;
			}
		}
		return l.length ? l : null;
	}
	function Zu(e, t, r, i, n) {
		let a = [];
		if (function(e, t, r, i, n) {
			for (let a = 0; a < e.length; a += 3) {
				let s = e[a + n];
				s >= r && s <= i && ih(t, e[a], e[a + 1], e[a + 2]);
			}
		}(e.geometry, a, r, i, n), !a.length) return;
		let s = 3 === a.length ? "Point" : "MultiPoint";
		t.push(Bu(e.id, s, a, e.tags));
	}
	function Hu(e, t, r, i, n, a) {
		let s = [];
		if (eh(e.geometry, s, r, i, n, !1, a.lineMetrics), s.length) if (a.lineMetrics) for (let o of s) t.push(Bu(e.id, "LineString", o, e.tags));
		else s.length > 1 ? t.push(Bu(e.id, "MultiLineString", s, e.tags)) : t.push(Bu(e.id, "LineString", s[0], e.tags));
	}
	function Ku(e, t, r, i, n) {
		let a = [];
		rh(e.geometry, a, r, i, n, !1), a.length && (1 === a.length ? t.push(Bu(e.id, "LineString", a[0], e.tags)) : t.push(Bu(e.id, "MultiLineString", a, e.tags)));
	}
	function Ju(e, t, r, i, n) {
		let a = [];
		rh(e.geometry, a, r, i, n, !0), a.length && t.push(Bu(e.id, "Polygon", a, e.tags));
	}
	function Qu(e, t, r, i, n) {
		let a = [];
		for (let s of e.geometry) {
			let e = [];
			rh(s, e, r, i, n, !0), e.length && a.push(e);
		}
		a.length && t.push(Bu(e.id, "MultiPolygon", a, e.tags));
	}
	function eh(e, t, r, i, n, a, s) {
		let o, l, u = th(e), h = 0 === n ? nh : ah, c = e.start;
		for (let g = 0; g < e.points.length - 3; g += 3) {
			let p = e.points[g], f = e.points[g + 1], d = e.points[g + 2], y = e.points[g + 3], m = e.points[g + 4], x = 0 === n ? p : f, v = 0 === n ? y : m, b = !1;
			s && (o = Math.sqrt((p - y) ** 2 + (f - m) ** 2)), x < r ? v >= r && (l = h(u, p, f, y, m, r), s && (u.start = c + o * l)) : x > i ? v <= i && (l = h(u, p, f, y, m, i), s && (u.start = c + o * l)) : ih(u.points, p, f, d), v < r && x >= r && (l = h(u, p, f, y, m, r), b = !0), v > i && x <= i && (l = h(u, p, f, y, m, i), b = !0), !a && b && (s && (u.end = c + o * l), t.push(u), u = th(e)), s && (c += o);
		}
		let p = e.points.length - 3, f = e.points[p], d = e.points[p + 1], y = e.points[p + 2], m = 0 === n ? f : d;
		m >= r && m <= i && ih(u.points, f, d, y), p = u.points.length - 3, a && p >= 3 && (u.points[p] !== u.points[0] || u.points[p + 1] !== u.points[1]) && ih(u.points, u.points[0], u.points[1], u.points[2]), u.points.length && (Mu(u), t.push(u));
	}
	function th(e) {
		return {
			points: [],
			size: e.size,
			start: e.start,
			end: e.end
		};
	}
	function rh(e, t, r, i, n, a) {
		for (let s of e) eh(s, t, r, i, n, a, !1);
	}
	function ih(e, t, r, i) {
		e.push(t, r, i);
	}
	function nh(e, t, r, i, n, a) {
		let s = (a - t) / (i - t);
		return ih(e.points, a, r + (n - r) * s, 1), s;
	}
	function ah(e, t, r, i, n, a) {
		let s = (a - r) / (n - r);
		return ih(e.points, t + (i - t) * s, a, 1), s;
	}
	function sh(e, t) {
		if (!t.wrap) return e;
		let r = t.buffer / t.extent, i = e, n = Wu(e, 1, -1 - r, r, 0, -1, 2, t), a = Wu(e, 1, 1 - r, 2 + r, 0, -1, 2, t);
		return !n && !a || (i = Wu(e, 1, -r, 1 + r, 0, -1, 2, t) || [], n && (i = oh(n, 1).concat(i)), a && (i = i.concat(oh(a, -1)))), i;
	}
	function oh(e, t) {
		let r = [];
		for (let i of e) switch (i.type) {
			case "Point":
			case "MultiPoint": {
				let e = lh(i.geometry, t);
				r.push(Bu(i.id, i.type, e, i.tags));
				continue;
			}
			case "LineString": {
				let e = uh(i.geometry, t);
				r.push(Bu(i.id, i.type, e, i.tags));
				continue;
			}
			case "MultiLineString":
			case "Polygon": {
				let e = [];
				for (let r of i.geometry) e.push(uh(r, t));
				r.push(Bu(i.id, i.type, e, i.tags));
				continue;
			}
			case "MultiPolygon": {
				let e = [];
				for (let r of i.geometry) {
					let i = [];
					for (let e of r) i.push(uh(e, t));
					e.push(i);
				}
				r.push(Bu(i.id, i.type, e, i.tags));
				continue;
			}
		}
		return r;
	}
	function lh(e, t) {
		let r = [];
		for (let i = 0; i < e.length; i += 3) r.push(e[i] + t, e[i + 1], e[i + 2]);
		return r;
	}
	function uh(e, t) {
		let r = {
			points: [],
			size: e.size
		};
		void 0 !== e.start && (r.start = e.start, r.end = e.end);
		for (let i = 0; i < e.points.length; i += 3) r.points.push(e.points[i] + t, e.points[i + 1], e.points[i + 2]);
		return Mu(r), r;
	}
	function hh(e, t, r, i) {
		let n = !!t.newGeometry, a = fh(t);
		if (n) {
			let n = e[0], s = a ? dh(n.tags, t) : n.tags;
			return ph(n.id, t.newGeometry, s, r, i);
		}
		if (a) {
			let r = [];
			for (let i of e) {
				let e = { ...i };
				e.tags = dh(e.tags, t), r.push(e);
			}
			return r;
		}
		return e;
	}
	function ch(e, t, r, i) {
		let n = i.get(e), a = fh(t) ? dh(n.properties, t) : n.properties;
		return t.newGeometry ? ph(e, t.newGeometry, a, r, i) : (i.set(e, {
			...n,
			properties: a
		}), []);
	}
	function ph(e, t, r, i, n) {
		return sh(Ou({
			type: "FeatureCollection",
			features: [{
				type: "Feature",
				id: e,
				geometry: t,
				properties: r
			}]
		}, {
			...i,
			promoteId: void 0,
			generateId: !1
		}, n), i);
	}
	function fh(e) {
		return e.removeAllProperties || e.removeProperties?.length > 0 || e.addOrUpdateProperties?.length > 0;
	}
	function dh(e, t) {
		if (t.removeAllProperties) return {};
		let r = { ...e || {} };
		if (t.removeProperties) for (let i of t.removeProperties) delete r[i];
		if (t.addOrUpdateProperties) for (let { key: i, value: n } of t.addOrUpdateProperties) r[i] = n;
		return r;
	}
	const yh = [
		Int8Array,
		Uint8Array,
		Uint8ClampedArray,
		Int16Array,
		Uint16Array,
		Int32Array,
		Uint32Array,
		Float32Array,
		Float64Array
	], mh = /* @__PURE__ */ new Uint32Array(96);
	var gh = class e {
		static from(t) {
			if (!t || void 0 === t.byteLength || t.buffer) throw Error("Data must be an instance of ArrayBuffer or SharedArrayBuffer.");
			let [r, i] = new Uint8Array(t, 0, 2);
			if (219 !== r) throw Error("Data does not appear to be in a KDBush format.");
			let n = i >> 4;
			if (1 !== n) throw Error(`Got v${n} data when expected v1.`);
			let a = yh[15 & i];
			if (!a) throw Error("Unrecognized array type.");
			let [s] = new Uint16Array(t, 2, 1), [o] = new Uint32Array(t, 4, 1);
			return new e(o, s, a, void 0, t);
		}
		constructor(e, t = 64, r = Float64Array, i = ArrayBuffer, n) {
			if (isNaN(e) || e < 0) throw Error(`Unexpected numItems value: ${e}.`);
			this.numItems = +e, this.nodeSize = Math.min(Math.max(+t, 2), 65535), this.ArrayType = r, this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
			let a = yh.indexOf(this.ArrayType), s = 2 * e * this.ArrayType.BYTES_PER_ELEMENT, o = e * this.IndexArrayType.BYTES_PER_ELEMENT, l = (8 - o % 8) % 8;
			if (a < 0) throw Error(`Unexpected typed array class: ${r}.`);
			if (n) this.data = n, this.ids = new this.IndexArrayType(n, 8, e), this.coords = new r(n, 8 + o + l, 2 * e), this._pos = 2 * e, this._finished = !0;
			else {
				let n = this.data = new i(8 + s + o + l);
				this.ids = new this.IndexArrayType(n, 8, e), this.coords = new r(n, 8 + o + l, 2 * e), this._pos = 0, this._finished = !1, new Uint8Array(n, 0, 2).set([219, 16 + a]), new Uint16Array(n, 2, 1)[0] = t, new Uint32Array(n, 4, 1)[0] = e;
			}
		}
		add(e, t) {
			let r = this._pos >> 1;
			return this.ids[r] = r, this.coords[this._pos++] = e, this.coords[this._pos++] = t, r;
		}
		finish() {
			let e = this._pos >> 1;
			if (e !== this.numItems) throw Error(`Added ${e} items when expected ${this.numItems}.`);
			return xh(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
		}
		range(e, t, r, i) {
			if (!this._finished) throw Error("Data not yet indexed - call index.finish().");
			let { ids: n, coords: a, nodeSize: s } = this;
			mh[0] = 0, mh[1] = n.length - 1, mh[2] = 0;
			let o = 3, l = [];
			for (; o > 0;) {
				let u = mh[--o], h = mh[--o], c = mh[--o];
				if (h - c <= s) {
					for (let s = c; s <= h; s++) {
						let o = a[2 * s], u = a[2 * s + 1];
						o >= e && o <= r && u >= t && u <= i && l.push(n[s]);
					}
					continue;
				}
				let p = c + h >> 1, f = a[2 * p], d = a[2 * p + 1];
				f >= e && f <= r && d >= t && d <= i && l.push(n[p]), (0 === u ? e <= f : t <= d) && (mh[o++] = c, mh[o++] = p - 1, mh[o++] = 1 - u), (0 === u ? r >= f : i >= d) && (mh[o++] = p + 1, mh[o++] = h, mh[o++] = 1 - u);
			}
			return l;
		}
		within(e, t, r) {
			let i = [];
			return this.withinInto(e, t, r, i), i;
		}
		withinInto(e, t, r, i) {
			if (!this._finished) throw Error("Data not yet indexed - call index.finish().");
			let { ids: n, coords: a, nodeSize: s } = this;
			mh[0] = 0, mh[1] = n.length - 1, mh[2] = 0;
			let o = 3, l = 0, u = r * r;
			for (; o > 0;) {
				let h = mh[--o], c = mh[--o], p = mh[--o];
				if (c - p <= s) {
					for (let r = p; r <= c; r++) _h(a[2 * r], a[2 * r + 1], e, t) <= u && (i[l++] = n[r]);
					continue;
				}
				let f = p + c >> 1, d = a[2 * f], y = a[2 * f + 1];
				_h(d, y, e, t) <= u && (i[l++] = n[f]), (0 === h ? e - r <= d : t - r <= y) && (mh[o++] = p, mh[o++] = f - 1, mh[o++] = 1 - h), (0 === h ? e + r >= d : t + r >= y) && (mh[o++] = f + 1, mh[o++] = c, mh[o++] = 1 - h);
			}
			return l;
		}
	};
	function xh(e, t, r, i, n, a) {
		if (n - i <= r) return;
		let s = i + n >> 1;
		vh(e, t, s, i, n, a), xh(e, t, r, i, s - 1, 1 - a), xh(e, t, r, s + 1, n, 1 - a);
	}
	function vh(e, t, r, i, n, a) {
		for (; n > i;) {
			if (n - i > 600) {
				let s = n - i + 1, o = r - i + 1, l = Math.log(s), u = .5 * Math.exp(2 * l / 3), h = .5 * Math.sqrt(l * u * (s - u) / s) * (o - s / 2 < 0 ? -1 : 1);
				vh(e, t, r, Math.max(i, Math.floor(r - o * u / s + h)), Math.min(n, Math.floor(r + (s - o) * u / s + h)), a);
			}
			let s = t[2 * r + a], o = i, l = n;
			for (bh(e, t, i, r), t[2 * n + a] > s && bh(e, t, i, n); o < l;) {
				for (bh(e, t, o, l), o++, l--; t[2 * o + a] < s;) o++;
				for (; t[2 * l + a] > s;) l--;
			}
			t[2 * i + a] === s ? bh(e, t, i, l) : (l++, bh(e, t, l, n)), l <= r && (i = l + 1), r <= l && (n = l - 1);
		}
	}
	function bh(e, t, r, i) {
		wh(e, r, i), wh(t, 2 * r, 2 * i), wh(t, 2 * r + 1, 2 * i + 1);
	}
	function wh(e, t, r) {
		let i = e[t];
		e[t] = e[r], e[r] = i;
	}
	function _h(e, t, r, i) {
		let n = e - r, a = t - i;
		return n * n + a * a;
	}
	const Dh = {
		minZoom: 0,
		maxZoom: 16,
		minPoints: 2,
		radius: 40,
		extent: 512,
		nodeSize: 64,
		log: !1,
		generateId: !1,
		reduce: null,
		map: (e) => e,
		coordinates: "lngLat",
		wrap: !0
	}, Sh = 1073741824;
	function Ah(e) {
		return (e - .5) * Sh;
	}
	function Eh(e) {
		return e / Sh + .5;
	}
	function Fh(e) {
		return Math.abs(Ah(e)) < 2147483647;
	}
	var kh = class {
		constructor(e) {
			this.options = Ih(e), this.worldCoordinateHelper = Vu(this.options.coordinates), this.trees = Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 5 : 4, this.clusterProps = [], this.points = [];
		}
		load(e) {
			let t = [];
			for (let r of e) {
				if (!r.geometry) continue;
				let e = "MultiPoint" === r.geometry.type ? r.geometry.coordinates : [r.geometry.coordinates];
				for (let [i, n] of e) {
					let [e, a] = [this.worldCoordinateHelper.projectX(i), this.worldCoordinateHelper.projectY(n)];
					if (!this.options.wrap && !Mh([e, a])) continue;
					let s = {
						id: r.id,
						type: "Point",
						geometry: [e, a],
						tags: r.properties
					};
					t.push(s);
				}
			}
			this.createIndex(t);
		}
		initialize(e) {
			let t = [];
			for (let r of e) if ("Point" === r.type) {
				if (!this.options.wrap && !Mh(r.geometry)) continue;
				t.push(r);
			} else if ("MultiPoint" === r.type) for (let e = 0; e < r.geometry.length; e += 3) {
				let i = [r.geometry[e], r.geometry[e + 1]];
				(this.options.wrap || Mh(i)) && t.push({
					id: r.id,
					type: "Point",
					geometry: i,
					tags: r.tags
				});
			}
			this.createIndex(t);
		}
		updateIndex(e, t, r) {
			this.options = Ih({
				...r.clusterOptions,
				coordinates: this.options.coordinates,
				wrap: this.options.wrap
			}), this.initialize(e);
		}
		createIndex(e) {
			let { log: t, minZoom: r, maxZoom: i } = this.options;
			this.trees = Array(i + 1), this.stride = this.options.reduce ? 5 : 4, this.clusterProps = [], t && console.time("total time");
			let n = `prepare ${e.length} points`;
			t && console.time(n), this.points = e;
			let a = this.stride, s = i + 1, o = new Int32Array(2 * e.length), l = new Int32Array(e.length * a), u = 0;
			for (let f = 0; f < e.length; f++) {
				let t = e[f];
				if (!t?.geometry || !Fh(t.geometry[0]) || !Fh(t.geometry[1])) continue;
				o[2 * u] = Math.round(Ah(t.geometry[0])), o[2 * u + 1] = Math.round(Ah(t.geometry[1]));
				let r = u * a;
				l[r + 0] = s, l[r + 1] = f, l[r + 2] = -1, l[r + 3] = 1, u++;
			}
			let h = this.trees[i + 1] = this.createTree(o, l, u);
			t && console.timeEnd(n);
			let c = new Int32Array(2 * u), p = new Int32Array(u * a);
			for (let f = i; f >= r; f--) {
				let e = Date.now(), r = this.cluster(h, f, c, p);
				this.isSameAsTree(h, p, r) || (h = this.createTree(c.slice(0, 2 * r), p.slice(0, r * a), r)), this.trees[f] = h, t && console.log("z%d: %d clusters in %dms", f, h.numItems, Date.now() - e);
			}
			t && console.timeEnd("total time");
		}
		getClusters(e, t) {
			return (this.options.wrap ? "unitSquare" === this.options.coordinates ? this.getClustersAcrossEdge(e, t) : this.getClustersInternal(e, t) : this.getClustersInWorld(e, t)).map((e) => qu(e, this.worldCoordinateHelper));
		}
		getClustersInWorld(e, t) {
			let r = "unitSquare" !== this.options.coordinates, i = this.worldCoordinateHelper.projectY(r ? Math.max(-90, Math.min(90, e[1])) : e[1]), n = this.worldCoordinateHelper.projectY(r ? Math.max(-90, Math.min(90, e[3])) : e[3]), a = Math.max(0, this.worldCoordinateHelper.projectX(e[0])), s = Math.min(1, this.worldCoordinateHelper.projectX(e[2]));
			return a > s ? [] : this.getClustersInRange([
				a,
				Math.min(i, n),
				s,
				Math.max(i, n)
			], t);
		}
		getClustersAcrossEdge([e, t, r, i], n) {
			if (r < e && (r += 1), r - e >= 1) return this.getClustersInRange([
				0,
				t,
				1,
				i
			], n);
			let a = Math.floor(e), s = e - a, o = r - a;
			return o <= 1 ? this.getClustersInRange([
				s,
				t,
				o,
				i
			], n) : this.getClustersInRange([
				s,
				t,
				1,
				i
			], n).concat(this.getClustersInRange([
				0,
				t,
				o - 1,
				i
			], n));
		}
		getClustersInternal(e, t) {
			let r = ((e[0] + 180) % 360 + 360) % 360 - 180, i = Math.max(-90, Math.min(90, e[1])), n = 180 === e[2] ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180, a = Math.max(-90, Math.min(90, e[3]));
			if (e[2] - e[0] >= 360) r = -180, n = 180;
			else if (r > n) {
				let e = this.getClustersInternal([
					r,
					i,
					180,
					a
				], t), s = this.getClustersInternal([
					-180,
					i,
					n,
					a
				], t);
				return e.concat(s);
			}
			return this.getClustersInRange([
				this.worldCoordinateHelper.projectX(r),
				this.worldCoordinateHelper.projectY(a),
				this.worldCoordinateHelper.projectX(n),
				this.worldCoordinateHelper.projectY(i)
			], t);
		}
		getClustersInRange([e, t, r, i], n) {
			let a = this.trees[this.limitZoom(n)], s = a.range(Ah(e), Ah(t), Ah(r), Ah(i)), o = a.flatCoords, l = a.flatData, u = [];
			for (let h of s) {
				let e = this.stride * h;
				u.push(l[e + 3] > 1 ? Th(o, h, l, e, this.clusterProps) : this.points[l[e + 1]]);
			}
			return u;
		}
		getChildren(e) {
			let t = this.getOriginId(e), r = this.getOriginZoom(e), i = Error("No cluster with the specified id: " + e), n = this.trees[r];
			if (!n) throw i;
			let a = n.flatCoords, s = n.flatData;
			if (t >= n.numItems) throw i;
			let o = this.options.radius / (this.options.extent * 2 ** (r - 1)) * Sh, l = a[2 * t], u = a[2 * t + 1], h = n.within(l, u, o), c = [];
			for (let p of h) {
				let t = p * this.stride;
				s[t + 2] === e && c.push(s[t + 3] > 1 ? Ch(a, p, s, t, this.clusterProps, this.worldCoordinateHelper) : qu(this.points[s[t + 1]], this.worldCoordinateHelper));
			}
			if (0 === c.length) throw i;
			return c;
		}
		getLeaves(e, t, r) {
			t || (t = 10), r || (r = 0);
			let i = [];
			return this.appendLeaves(i, e, t, r, 0), i;
		}
		getTile(e, t, r) {
			let i = this.trees[this.limitZoom(e)];
			if (!i) return null;
			let n = 2 ** e;
			if (!this.options.wrap && (t < 0 || t >= n || r < 0 || r >= n)) return null;
			let { extent: a, radius: s } = this.options, o = s / a, l = Ah((r - o) / n), u = Ah((r + 1 + o) / n), h = {
				transformed: !0,
				features: [],
				source: null,
				x: t,
				y: r,
				z: e
			};
			return this.addTileFeatures(i.range(Ah((t - o) / n), l, Ah((t + 1 + o) / n), u), i, t, r, n, h), this.options.wrap && 0 === t && this.addTileFeatures(i.range(Ah(1 - o / n), l, Ah(1), u), i, n, r, n, h), this.options.wrap && t === n - 1 && this.addTileFeatures(i.range(Ah(0), l, Ah(o / n), u), i, -1, r, n, h), h;
		}
		getClusterExpansionZoom(e) {
			return this.getOriginZoom(e);
		}
		appendLeaves(e, t, r, i, n) {
			let a = this.getChildren(t);
			for (let s of a) {
				let t = s.properties;
				if (t?.cluster ? n + t.point_count <= i ? n += t.point_count : n = this.appendLeaves(e, t.cluster_id, r, i, n) : n < i ? n++ : e.push(s), e.length === r) break;
			}
			return n;
		}
		createTree(e, t, r) {
			let i = new gh(r, this.options.nodeSize, Int32Array);
			for (let n = 0; n < r; n++) i.add(e[2 * n], e[2 * n + 1]);
			return i.finish(), i.flatCoords = e, i.flatData = t, i.data = null, i;
		}
		isSameAsTree(e, t, r) {
			if (r !== e.numItems) return !1;
			let i = e.flatData;
			for (let n = 1; n < r * this.stride; n += this.stride) if (t[n] !== i[n]) return !1;
			return !0;
		}
		addTileFeatures(e, t, r, i, n, a) {
			let s = t.flatCoords, o = t.flatData;
			for (let l of e) {
				let e, t, u, h = l * this.stride, c = o[h + 3] > 1;
				if (c) e = Bh(o, h, this.clusterProps), t = Eh(s[2 * l]), u = Eh(s[2 * l + 1]);
				else {
					let r = this.points[o[h + 1]];
					e = r.tags, [t, u] = r.geometry;
				}
				let p, f = {
					type: 1,
					geometry: [[Math.round(this.options.extent * (t * n - r)), Math.round(this.options.extent * (u * n - i))]],
					tags: e
				};
				p = c || this.options.generateId ? o[h + 1] : this.points[o[h + 1]].id, void 0 !== p && (f.id = p), a.features.push(f);
			}
		}
		limitZoom(e) {
			return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1));
		}
		cluster(e, t, r, i) {
			let { radius: n, extent: a, reduce: s, minPoints: o, maxZoom: l } = this.options, u = n / (a * 2 ** t) * Sh, h = l + 1, c = e.flatCoords, p = e.flatData, f = this.stride, d = new Uint32Array(e.numItems), y = 0;
			for (let m = 0; m < e.numItems; m++) {
				let n = m * f;
				if (p[n + 0] <= t) continue;
				p[n + 0] = t;
				let a = c[2 * m], l = c[2 * m + 1], g = e.withinInto(a, l, u, d), x = p[n + 3], v = x;
				for (let e = 0; e < g; e++) {
					let r = d[e] * f;
					p[r + 0] > t && (v += p[r + 3]);
				}
				if (v > x && v >= o) {
					let e, o = a * x, u = l * x, b = -1, w = (m << 5) + (t + 1) + this.points.length;
					for (let r = 0; r < g; r++) {
						let i = d[r], a = i * f;
						if (p[a + 0] <= t) continue;
						p[a + 0] = t;
						let l = p[a + 3];
						o += c[2 * i] * l, u += c[2 * i + 1] * l, p[a + 2] = w, s && (e || (e = this.map(p, n, !0), b = this.clusterProps.length, this.clusterProps.push(e)), s(e, this.map(p, a)));
					}
					p[n + 2] = w, r[2 * y] = Math.round(o / v), r[2 * y + 1] = Math.round(u / v);
					let _ = y * f;
					i[_ + 0] = h, i[_ + 1] = w, i[_ + 2] = -1, i[_ + 3] = v, s && (i[_ + 4] = b), y++;
				} else {
					r[2 * y] = a, r[2 * y + 1] = l;
					for (let e = 0; e < f; e++) i[y * f + e] = p[n + e];
					if (y++, v > 1) for (let e = 0; e < g; e++) {
						let n = d[e], a = n * f;
						if (!(p[a + 0] <= t)) {
							p[a + 0] = t, r[2 * y] = c[2 * n], r[2 * y + 1] = c[2 * n + 1];
							for (let e = 0; e < f; e++) i[y * f + e] = p[a + e];
							y++;
						}
					}
				}
			}
			return y;
		}
		getOriginId(e) {
			return e - this.points.length >> 5;
		}
		getOriginZoom(e) {
			return (e - this.points.length) % 32;
		}
		map(e, t, r) {
			if (e[t + 3] > 1) {
				let i = this.clusterProps[e[t + 4]];
				return r ? Object.assign({}, i) : i;
			}
			let i = this.points[e[t + 1]].tags, n = this.options.map(i);
			return r && n === i ? Object.assign({}, n) : n;
		}
	};
	function Ih(e) {
		let t = Object.assign(Object.create(Dh), e);
		return t.minZoom = Math.min(t.minZoom, 30), t.maxZoom = Math.min(t.maxZoom, 30), t;
	}
	function Th(e, t, r, i, n) {
		return {
			id: r[i + 1],
			type: "Point",
			tags: Bh(r, i, n),
			geometry: [Eh(e[2 * t]), Eh(e[2 * t + 1])]
		};
	}
	function Ch(e, t, r, i, n, a) {
		return {
			type: "Feature",
			id: r[i + 1],
			properties: Bh(r, i, n),
			geometry: {
				type: "Point",
				coordinates: [a.unprojectX(Eh(e[2 * t])), a.unprojectY(Eh(e[2 * t + 1]))]
			}
		};
	}
	function Bh(e, t, r) {
		let i = e[t + 3], n = i >= 1e4 ? `${Math.round(i / 1e3)}k` : i >= 1e3 ? Math.round(i / 100) / 10 + "k" : i, a = e[t + 4], s = -1 === a ? {} : Object.assign({}, r[a]);
		return Object.assign(s, {
			cluster: !0,
			cluster_id: e[t + 1],
			point_count: i,
			point_count_abbreviated: n
		});
	}
	function Mh(e) {
		return e[0] >= 0 && e[0] <= 1 && e[1] >= 0 && e[1] <= 1;
	}
	const Ph = "geojsonvt_clip_start", zh = "geojsonvt_clip_end";
	function Lh(e, t, r, i, n) {
		let a = t === n.maxZoom ? 0 : n.tolerance / ((1 << t) * n.extent), s = {
			transformed: !1,
			features: [],
			source: null,
			x: r,
			y: i,
			z: t,
			minX: 2,
			minY: 1,
			maxX: -1,
			maxY: 0,
			numPoints: 0,
			numSimplified: 0,
			numFeatures: e.length
		};
		for (let o of e) Vh(s, o, a, n);
		return s;
	}
	function Vh(e, t, r, i) {
		switch (e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), t.type) {
			case "Point":
			case "MultiPoint":
				(function(e, t) {
					let r = [];
					for (let n = 0; n < t.geometry.length; n += 3) r.push(t.geometry[n], t.geometry[n + 1]), e.numPoints++, e.numSimplified++;
					if (!r.length) return;
					let i = {
						type: 1,
						tags: t.tags || null,
						geometry: r
					};
					null !== t.id && (i.id = t.id), e.features.push(i);
				})(e, t);
				return;
			case "LineString":
				(function(e, t, r, i) {
					let n = [];
					if (Oh(n, t.geometry, e, r, !1, !1), !n.length) return;
					let a = t.tags || null;
					if (i.lineMetrics) {
						a = {};
						for (let e in t.tags) a[e] = t.tags[e];
						a[Ph] = t.geometry.start / t.geometry.size, a[zh] = t.geometry.end / t.geometry.size;
					}
					let s = {
						type: 2,
						tags: a,
						geometry: n
					};
					null !== t.id && (s.id = t.id), e.features.push(s);
				})(e, t, r, i);
				return;
			case "MultiLineString":
			case "Polygon":
				(function(e, t, r) {
					let i = [];
					for (let a = 0; a < t.geometry.length; a++) Oh(i, t.geometry[a], e, r, "Polygon" === t.type, 0 === a);
					if (!i.length) return;
					let n = {
						type: "Polygon" === t.type ? 3 : 2,
						tags: t.tags || null,
						geometry: i
					};
					null !== t.id && (n.id = t.id), e.features.push(n);
				})(e, t, r);
				return;
			case "MultiPolygon":
				(function(e, t, r) {
					let i = [];
					for (let a = 0; a < t.geometry.length; a++) {
						let n = t.geometry[a];
						for (let t = 0; t < n.length; t++) Oh(i, n[t], e, r, !0, 0 === t);
					}
					if (!i.length) return;
					let n = {
						type: 3,
						tags: t.tags || null,
						geometry: i
					};
					null !== t.id && (n.id = t.id), e.features.push(n);
				})(e, t, r);
				return;
		}
	}
	function Oh(e, t, r, i, n, a) {
		let s = i * i;
		if (i > 0 && t.size < (n ? s : i)) return void (r.numPoints += t.points.length / 3);
		let o = [];
		for (let l = 0; l < t.points.length; l += 3) (0 === i || t.points[l + 2] > s) && (r.numSimplified++, o.push(t.points[l], t.points[l + 1])), r.numPoints++;
		n && function(e, t) {
			let r = 0;
			for (let i = 0, n = e.length, a = n - 2; i < n; a = i, i += 2) r += (e[i] - e[a]) * (e[i + 1] + e[a + 1]);
			if (r > 0 === t) for (let i = 0, n = e.length; i < n / 2; i += 2) {
				let t = e[i], r = e[i + 1];
				e[i] = e[n - 2 - i], e[i + 1] = e[n - 1 - i], e[n - 2 - i] = t, e[n - 1 - i] = r;
			}
		}(o, a), e.push(o);
	}
	function Rh(e, t) {
		if (e.transformed) return e;
		let r = 1 << e.z, i = e.x, n = e.y;
		for (let a of e.features) 1 === a.type ? $h(a, t, r, i, n) : Nh(a, t, r, i, n);
		return e.transformed = !0, e;
	}
	function $h(e, t, r, i, n) {
		let a = e, s = e.geometry, o = [];
		for (let l = 0; l < s.length; l += 2) o.push(Uh(s[l], s[l + 1], t, r, i, n));
		return a.geometry = o, a;
	}
	function Nh(e, t, r, i, n) {
		let a = e, s = e.geometry, o = [];
		for (let l of s) {
			let e = [];
			for (let a = 0; a < l.length; a += 2) e.push(Uh(l[a], l[a + 1], t, r, i, n));
			o.push(e);
		}
		return a.geometry = o, a;
	}
	function Uh(e, t, r, i, n, a) {
		return [Math.round(r * (e * i - n)), Math.round(r * (t * i - a))];
	}
	var jh = class {
		constructor(e) {
			this.options = e, this.total = 0, this.stats = {}, this.tiles = {}, this.tileCoords = [], this.stats = {}, this.total = 0;
		}
		initialize(e) {
			this.splitTile(this.clipToWorld(e), 0, 0, 0), this.options.debug && (e.length && console.log("features: %d, points: %d", this.tiles[0].numFeatures, this.tiles[0].numPoints), console.timeEnd("generate tiles"), console.log("tiles generated:", this.total, JSON.stringify(this.stats)));
		}
		updateIndex(e, t, r) {
			r.debug > 1 && (console.log("invalidating tiles"), console.time("invalidating")), this.invalidateTiles(t), r.debug > 1 && console.timeEnd("invalidating");
			let [i, n, a] = [
				0,
				0,
				0
			], s = this.clipToWorld(e), o = Lh(s, i, n, a, r);
			o.source = s;
			let l = qh(i, n, a);
			if (this.tiles[l] = o, this.tileCoords.push({
				z: i,
				x: n,
				y: a,
				id: l
			}), r.debug) {
				let e = `z${i}`;
				this.stats[e] = (this.stats[e] || 0) + 1, this.total++;
			}
		}
		getClusterExpansionZoom(e) {
			return null;
		}
		getChildren(e) {
			return null;
		}
		getLeaves(e, t, r) {
			return null;
		}
		getTile(e, t, r) {
			let { extent: i, debug: n } = this.options, a = 1 << e;
			if (!this.options.wrap && (t < 0 || t >= a)) return null;
			let s = qh(e, t = t + a & a - 1, r);
			if (this.tiles[s]) return Rh(this.tiles[s], i);
			n > 1 && console.log("drilling down to z%d-%d-%d", e, t, r);
			let o, l = e, u = t, h = r;
			for (; !o && l > 0;) l--, u >>= 1, h >>= 1, o = this.tiles[qh(l, u, h)];
			return o?.source && (n > 1 && (console.log("found parent tile z%d-%d-%d", l, u, h), console.time("drilling down")), this.splitTile(o.source, l, u, h, e, t, r), n > 1 && console.timeEnd("drilling down"), this.tiles[s]) ? Rh(this.tiles[s], i) : null;
		}
		clipToWorld(e) {
			let { wrap: t, coordinates: r } = this.options;
			if (t && "unitSquare" !== r) return e;
			let i = this.options.buffer / this.options.extent;
			return Wu(t ? e : Wu(e, 1, -i, 1 + i, 0, -Infinity, Infinity, this.options) || [], 1, -i, 1 + i, 1, -Infinity, Infinity, this.options) || [];
		}
		splitTile(e, t, r, i, n, a, s) {
			let o = [
				e,
				t,
				r,
				i
			], l = this.options, u = l.debug;
			for (; o.length;) {
				i = o.pop(), r = o.pop(), t = o.pop(), e = o.pop();
				let h = 1 << t, c = qh(t, r, i), p = this.tiles[c];
				if (!p && (u > 1 && console.time("creation"), p = this.tiles[c] = Lh(e, t, r, i, l), this.tileCoords.push({
					z: t,
					x: r,
					y: i,
					id: c
				}), u)) {
					u > 1 && (console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)", t, r, i, p.numFeatures, p.numPoints, p.numSimplified), console.timeEnd("creation"));
					let e = `z${t}`;
					this.stats[e] = (this.stats[e] || 0) + 1, this.total++;
				}
				if (p.source = e, null == n) {
					if (t === l.indexMaxZoom || p.numPoints <= l.indexMaxPoints) continue;
				} else {
					if (t === l.maxZoom || t === n) continue;
					if (null != n) {
						let e = n - t;
						if (r !== a >> e || i !== s >> e) continue;
					}
				}
				if (p.source = null, !e.length) continue;
				u > 1 && console.time("clipping");
				let f = .5 * l.buffer / l.extent, d = .5 - f, y = .5 + f, m = 1 + f, g = null, x = null, v = null, b = null, w = Wu(e, h, r - f, r + y, 0, p.minX, p.maxX, l), _ = Wu(e, h, r + d, r + m, 0, p.minX, p.maxX, l);
				w && (g = Wu(w, h, i - f, i + y, 1, p.minY, p.maxY, l), x = Wu(w, h, i + d, i + m, 1, p.minY, p.maxY, l)), _ && (v = Wu(_, h, i - f, i + y, 1, p.minY, p.maxY, l), b = Wu(_, h, i + d, i + m, 1, p.minY, p.maxY, l)), u > 1 && console.timeEnd("clipping"), o.push(g || [], t + 1, 2 * r, 2 * i), o.push(x || [], t + 1, 2 * r, 2 * i + 1), o.push(v || [], t + 1, 2 * r + 1, 2 * i), o.push(b || [], t + 1, 2 * r + 1, 2 * i + 1);
			}
		}
		invalidateTiles(e) {
			if (!e.length) return;
			let t = this.options, { debug: r } = t, i = Infinity, n = -Infinity, a = Infinity, s = -Infinity;
			for (let u of e) i = Math.min(i, u.minX), n = Math.max(n, u.maxX), a = Math.min(a, u.minY), s = Math.max(s, u.maxY);
			let o = t.buffer / t.extent, l = /* @__PURE__ */ new Set();
			for (let u in this.tiles) {
				let t = this.tiles[u], h = 1 << t.z, c = (t.x - o) / h, p = (t.x + 1 + o) / h, f = (t.y - o) / h, d = (t.y + 1 + o) / h;
				if (n < c || i >= p || s < f || a >= d) continue;
				let y = !1;
				for (let r of e) if (r.maxX >= c && r.minX < p && r.maxY >= f && r.minY < d) {
					y = !0;
					break;
				}
				if (y) {
					if (r) {
						r > 1 && console.log("invalidate tile z%d-%d-%d (features: %d, points: %d, simplified: %d)", t.z, t.x, t.y, t.numFeatures, t.numPoints, t.numSimplified);
						let e = `z${t.z}`;
						this.stats[e] = (this.stats[e] || 0) - 1, this.total--;
					}
					delete this.tiles[u], l.add(u);
				}
			}
			l.size && (this.tileCoords = this.tileCoords.filter((e) => !l.has(e.id)));
		}
	};
	function qh(e, t, r) {
		return 32 * ((1 << e) * r + t) + e;
	}
	const Gh = {
		maxZoom: 14,
		indexMaxZoom: 5,
		indexMaxPoints: 1e5,
		tolerance: 3,
		extent: 4096,
		buffer: 64,
		lineMetrics: !1,
		promoteId: null,
		generateId: !1,
		updateable: !1,
		cluster: !1,
		clusterOptions: Dh,
		debug: 0,
		coordinates: "lngLat",
		wrap: !0
	};
	var Xh = class {
		constructor(e, t) {
			t = this.options = Object.assign({}, Gh, t), this.worldCoordinateHelper = Vu(t.coordinates);
			let r = t.debug;
			if (r && console.time("preprocess data"), t.maxZoom < 0 || t.maxZoom > 24) throw Error("maxZoom should be in the 0-24 range");
			if (t.promoteId && t.generateId) throw Error("promoteId and generateId cannot be used together.");
			t.updateable && (this.unlocated = /* @__PURE__ */ new Map());
			let i = Ou(e, t, this.unlocated);
			r && (console.timeEnd("preprocess data"), console.log("index: maxZoom: %d, maxPoints: %d", t.indexMaxZoom, t.indexMaxPoints), console.time("generate tiles")), i = sh(i, t), t.updateable && (this.source = i), this.initializeIndex(i, t);
		}
		initializeIndex(e, t) {
			this.tileIndex = t.cluster ? new kh({
				...t.clusterOptions,
				coordinates: t.coordinates,
				wrap: t.wrap
			}) : new jh(t), e.length && this.tileIndex.initialize(e);
		}
		getTile(e, t, r) {
			return t = +t, r = +r, (e = +e) < 0 || e > 24 ? null : this.tileIndex.getTile(e, t, r);
		}
		updateData(e, t) {
			let r = this.options;
			if (!r.updateable) throw Error("to update tile geojson `updateable` option must be set to true");
			let { affected: i, source: n } = function(e, t, r, i) {
				let n = function(e, t) {
					return e ? {
						removeAll: e.removeAll,
						remove: new Set(e.remove || []),
						add: new Map(e.add?.map((e) => [t.promoteId ? e.properties?.[t.promoteId] : e.id, e])),
						update: new Map(e.update?.map((e) => [e.id, e]))
					} : {
						remove: /* @__PURE__ */ new Set(),
						add: /* @__PURE__ */ new Map(),
						update: /* @__PURE__ */ new Map()
					};
				}(t, r), a = [];
				if (n.removeAll && (a = e, e = [], i?.clear()), n.remove.size || n.add.size) {
					for (let e of n.remove) i?.delete(e);
					let t = [];
					for (let r of e) (n.remove.has(r.id) || n.add.has(r.id)) && t.push(r);
					if (t.length) {
						a = a.concat(t);
						let r = new Set(t.map((e) => e.id));
						e = e.filter((e) => !r.has(e.id));
					}
					if (n.add.size) {
						let t = Ou({
							type: "FeatureCollection",
							features: Array.from(n.add.values())
						}, r, i);
						t = sh(t, r), a = a.concat(t), e = e.concat(t);
					}
				}
				if (n.update.size) {
					let t = /* @__PURE__ */ new Map(), s = [];
					for (let r of e) n.update.has(r.id) ? t.set(r.id, [...t.get(r.id) || [], r]) : s.push(r);
					for (let [e, o] of n.update) {
						let n = t.get(e);
						if (!n || 0 === n.length) {
							if (!i?.has(e)) continue;
							let t = ch(e, o, r, i);
							a = a.concat(t), s = s.concat(t);
							continue;
						}
						let l = hh(n, o, r, i);
						a = a.concat(n, l), s = s.concat(l);
					}
					e = s;
				}
				return {
					affected: a,
					source: e
				};
			}(this.source, e, r, this.unlocated);
			t && ({affected: i, source: n} = this.filterUpdate(n, i, t)), i.length && (this.source = n, this.tileIndex.updateIndex(n, i, r));
		}
		filterUpdate(e, t, r) {
			let i = /* @__PURE__ */ new Set();
			for (let n of e) null != n.id && (r(qu(n, this.worldCoordinateHelper)) || (t.push(n), i.add(n.id)));
			e = e.filter((e) => !i.has(e.id));
			for (let [n, a] of this.unlocated ?? []) a.geometry && !r(a) && this.unlocated.delete(n);
			return {
				affected: t,
				source: e
			};
		}
		getData() {
			if (!this.options.updateable) throw Error("to retrieve data the `updateable` option must be set to true");
			return function(e, t = zu) {
				return {
					type: "FeatureCollection",
					features: e.map((e) => qu(e, t))
				};
			}(this.source, this.worldCoordinateHelper);
		}
		updateClusterOptions(e, t) {
			let r = this.options.cluster;
			this.options.cluster = e, this.options.clusterOptions = t, r == e ? this.tileIndex.updateIndex(this.source, [], this.options) : this.initializeIndex(this.source, this.options);
		}
		getClusterExpansionZoom(e) {
			return this.tileIndex.getClusterExpansionZoom(e);
		}
		getClusterChildren(e) {
			return this.tileIndex.getChildren(e);
		}
		getClusterLeaves(e, t, r) {
			return this.tileIndex.getLeaves(e, t, r);
		}
	};
	const Yh = la([
		{
			name: "a_pos_normal",
			components: 2,
			type: "Int16"
		},
		{
			name: "a_data",
			components: 4,
			type: "Uint8"
		},
		{
			name: "a_offset_normal",
			components: 2,
			type: "Int8"
		}
	], 2), Wh = Yh.members;
	Yh.size, Yh.alignment;
	const Zh = la([{
		name: "a_uv_x",
		components: 1,
		type: "Float32"
	}, {
		name: "a_split_index",
		components: 1,
		type: "Float32"
	}]), Hh = Zh.members;
	Zh.size, Zh.alignment;
	const Kh = Math.cos(Math.PI / 180 * 37.5);
	var Jh = class {
		constructor(e) {
			this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.layerIds = this.layers.map((e) => e.id), this.index = e.index, this.hasDependencies = !1, this.patternFeatures = [], this.lineClipsArray = [], this.gradients = {};
			for (let t of this.layers) this.gradients[t.id] = {};
			this.layoutVertexArray = new Ha(), this.layoutVertexArray2 = new Ka(), this.indexArray = new as(), this.programConfigurations = new Ms(e.layers, e.zoom), this.segments = new us(), this.maxLineLength = 0, this.stateDependentLayerIds = this.layers.filter((e) => e.isStateDependent()).map((e) => e.id);
		}
		populate(e, t, r) {
			this.hasDependencies = Uo("line", this.layers, t) || this.hasLineDasharray(this.layers);
			let i = this.layers[0].layout.get("line-sort-key"), n = !i.isConstant(), a = [], s = new Rn(this.zoom), o = this.layers[0]._featureFilter.needGeometry;
			for (let { feature: l, id: u, index: h, sourceLayerIndex: c } of e) {
				let e = Rs(l, o);
				if (!this.layers[0]._featureFilter.filter(s, e, r)) continue;
				let t = n ? i.evaluate(e, {}, r) : void 0, p = {
					id: u,
					properties: l.properties,
					type: l.type,
					sourceLayerIndex: c,
					index: h,
					geometry: o ? e.geometry : Os(l),
					patterns: {},
					dashes: {},
					sortKey: t
				};
				a.push(p);
			}
			n && a.sort((e, t) => e.sortKey - t.sortKey);
			for (let l of a) {
				let { geometry: i, index: n, sourceLayerIndex: a } = l;
				this.hasDependencies ? (Uo("line", this.layers, t) ? jo("line", this.layers, l, { zoom: this.zoom }, t) : this.hasLineDasharray(this.layers) && this.addLineDashDependencies(this.layers, l, this.zoom, t), this.patternFeatures.push(l)) : this.addFeature(l, i, n, r, {}, {}, t.subdivisionGranularity);
				let s = e[n].feature;
				t.featureIndex.insert(s, i, n, a, this.index);
			}
		}
		update(e, t, r, i) {
			this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e, t, this.stateDependentLayers, {
				imagePositions: r,
				dashPositions: i
			});
		}
		addFeatures({ options: e, canonical: t, patternPositions: r, dashPositions: i }) {
			for (let n of this.patternFeatures) this.addFeature(n, n.geometry, n.index, t, r, i, e.subdivisionGranularity);
		}
		isEmpty() {
			return 0 === this.layoutVertexArray.length;
		}
		uploadPending() {
			return !this.uploaded || this.programConfigurations.needsUpload;
		}
		upload(e) {
			this.uploaded || (0 !== this.layoutVertexArray2.length && (this.layoutVertexBuffer2 = e.createVertexBuffer(this.layoutVertexArray2, Hh)), this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, Wh), this.indexBuffer = e.createIndexBuffer(this.indexArray)), this.programConfigurations.upload(e), this.uploaded = !0;
		}
		destroy() {
			this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy());
		}
		lineFeatureClips(e) {
			if (e.properties && Object.hasOwn(e.properties, "geojsonvt_clip_start") && Object.hasOwn(e.properties, "geojsonvt_clip_end")) return {
				start: +e.properties[Ph],
				end: +e.properties[zh]
			};
		}
		addFeature(e, t, r, i, n, a, s) {
			let o = this.layers[0].layout, l = o.get("line-join").evaluate(e, {}), u = o.get("line-cap").evaluate(e, {}), h = o.get("line-miter-limit").evaluate(e, {}), c = o.get("line-round-limit").evaluate(e, {});
			this.lineClips = this.lineFeatureClips(e);
			for (let p of t) this.addLine(p, e, l, u, h, c, i, s);
			this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e, r, {
				imagePositions: n,
				dashPositions: a,
				canonical: i
			});
		}
		addLine(e, t, r, i, n, a, s, o) {
			if (this.distance = 0, this.scaledDistance = 0, this.totalDistance = 0, e = zl(e, s ? o.line.getGranularityForZoomLevel(s.z) : 1), this.lineClips) {
				this.lineClipsArray.push(this.lineClips);
				for (let t = 0; t < e.length - 1; t++) this.totalDistance += e[t].dist(e[t + 1]);
				this.updateScaledDistance(), this.maxLineLength = Math.max(this.maxLineLength, this.totalDistance);
			}
			let l = "Polygon" === Wl.types[t.type], u = e.length;
			for (; u >= 2 && e[u - 1].equals(e[u - 2]);) u--;
			let h = 0;
			for (; h < u - 1 && e[h].equals(e[h + 1]);) h++;
			if (u - h < (l ? 3 : 2)) return;
			"bevel" === r && (n = 1.05);
			let c, p, f, d, y, m = this.overscaling <= 16 ? 15 * x / (512 * this.overscaling) : 0, g = this.segments.prepareSegment(10 * u, this.layoutVertexArray, this.indexArray);
			this.e1 = this.e2 = -1, l && (c = e[u - 2], y = e[h].sub(c)._unit()._perp());
			for (let x = h; x < u; x++) {
				if (f = x === u - 1 ? l ? e[h + 1] : void 0 : e[x + 1], f && e[x].equals(f)) continue;
				y && (d = y), c && (p = c), c = e[x], y = f ? f.sub(c)._unit()._perp() : d, d || (d = y);
				let t = d.add(y);
				(0 !== t.x || 0 !== t.y) && t._unit();
				let s = d.x * y.x + d.y * y.y, o = t.x * y.x + t.y * y.y, v = 0 === o ? Infinity : 1 / o, w = 2 * Math.sqrt(2 - 2 * o), _ = o < Kh && p && f, D = d.x * y.y - d.y * y.x > 0, S = t.mult(Math.min(v, 2)), A = b((v - 3) / 5, 0, 1);
				if (_ && x > h) {
					let e = c.dist(p);
					if (e > 2 * m) {
						let t = c.sub(c.sub(p)._mult(m / e)._round());
						this.updateDistance(p, t), this.addCurrentVertex(t, d, 0, 0, g), p = t;
					}
				}
				let E = p && f, F = E ? r : l ? "butt" : i;
				if (E && "round" === F && (v < a ? F = "miter" : v <= 2 && (F = "fakeround")), "miter" === F && v > n && (F = "bevel"), "bevel" === F && (v > 2 && (F = "flipbevel"), v < n && (F = "miter")), p && this.updateDistance(p, c), "miter" === F) t._mult(v), this.addCurrentVertex(c, t, 0, 0, g, !1, S);
				else if ("flipbevel" === F) {
					if (v > 100) t = y.mult(-1);
					else {
						let e = v * d.add(y).mag() / d.sub(y).mag();
						t._perp()._mult(e * (D ? -1 : 1));
					}
					this.addCurrentVertex(c, t, 0, 0, g, !1, S, A), this.addCurrentVertex(c, t.mult(-1), 0, 0, g, !1, S, A);
				} else if ("bevel" === F || "fakeround" === F) {
					let e = -Math.sqrt(v * v - 1), t = D ? e : 0, r = D ? 0 : e;
					if (p && this.addCurrentVertex(c, d, t, r, g, !1, S), "fakeround" === F) {
						let e = Math.round(180 * w / Math.PI / 20);
						for (let t = 1; t < e; t++) {
							let r = t / e;
							if (.5 !== r) {
								let e = r - .5;
								r += r * e * (r - 1) * ((1.0904 + s * (s * (3.55645 - 1.43519 * s) - 3.2452)) * e * e + (.848013 + s * (.215638 * s - 1.06021)));
							}
							let i = y.sub(d)._mult(r)._add(d)._unit()._mult(D ? -1 : 1);
							this.addHalfVertex(c, i.x, i.y, D ? -S.x : S.x, D ? -S.y : S.y, !1, D, g);
						}
					}
					f && this.addCurrentVertex(c, y, -t, -r, g, !1, S);
				} else if ("butt" === F) this.addCurrentVertex(c, t, 0, 0, g, !1, S);
				else if ("square" === F) {
					let e = p ? 1 : -1;
					this.addCurrentVertex(c, t, e, e, g, !1, S);
				} else "round" === F && (p && (this.addCurrentVertex(c, d, 0, 0, g, !1, S, A), this.addCurrentVertex(c, d, 1, 1, g, !0, S, A)), f && (this.addCurrentVertex(c, y, -1, -1, g, !0, S, A), this.addCurrentVertex(c, y, 0, 0, g, !1, S, A)));
				if (_ && x < u - 1) {
					let e = c.dist(f);
					if (e > 2 * m) {
						let t = c.add(f.sub(c)._mult(m / e)._round());
						this.updateDistance(c, t), this.addCurrentVertex(t, y, 0, 0, g), c = t;
					}
				}
			}
		}
		addCurrentVertex(e, t, r, i, n, a = !1, s = t, o = 0) {
			let l = t.x + t.y * r, u = t.y - t.x * r, h = -t.x + t.y * i, c = -t.y - t.x * i, p = s.x + (t.x - s.x) * o, f = s.y + (t.y - s.y) * o;
			this.addHalfVertex(e, l, u, p, f, a, !1, n), this.addHalfVertex(e, h, c, -p, -f, a, !0, n), this.distance > 16384 && 0 === this.totalDistance && (this.distance = 0, this.updateScaledDistance(), this.addCurrentVertex(e, t, r, i, n, a, s, o));
		}
		addHalfVertex({ x: e, y: t }, r, i, n, a, s, o, l) {
			let u = .5 * (this.lineClips ? 32767 * this.scaledDistance : this.scaledDistance);
			if (this.layoutVertexArray.emplaceBack(+!!s + (e << 1), +!!o + (t << 1), Math.round(63 * r) + 128, Math.round(63 * i) + 128, (63 & u) << 2, u >> 6, Math.round(63 * n), Math.round(63 * a)), this.lineClips) {
				let e = (this.scaledDistance - this.lineClips.start) / (this.lineClips.end - this.lineClips.start);
				this.layoutVertexArray2.emplaceBack(e, this.lineClipsArray.length);
			}
			let h = l.vertexLength++;
			this.e1 >= 0 && this.e2 >= 0 && (this.indexArray.emplaceBack(this.e1, h, this.e2), l.primitiveLength++), o ? this.e2 = h : this.e1 = h;
		}
		updateScaledDistance() {
			this.scaledDistance = this.lineClips ? this.lineClips.start + (this.lineClips.end - this.lineClips.start) * this.distance / this.totalDistance : this.distance;
		}
		updateDistance(e, t) {
			this.distance += e.dist(t), this.updateScaledDistance();
		}
		hasLineDasharray(e) {
			for (let t of e) {
				let e = t.paint.get("line-dasharray");
				if (e && !e.isConstant()) return !0;
			}
			return !1;
		}
		addLineDashDependencies(e, t, r, i) {
			for (let n of e) {
				let e = n.paint.get("line-dasharray");
				if (!e || "constant" === e.value.kind) continue;
				let a = "round" === n.layout.get("line-cap").evaluate(t, {}), s = {
					dasharray: e.value.evaluate({ zoom: r - 1 }, t, {}),
					round: a
				}, o = {
					dasharray: e.value.evaluate({ zoom: r }, t, {}),
					round: a
				}, l = {
					dasharray: e.value.evaluate({ zoom: r + 1 }, t, {}),
					round: a
				}, u = `${s.dasharray.join(",")},${s.round}`, h = `${o.dasharray.join(",")},${o.round}`, c = `${l.dasharray.join(",")},${l.round}`;
				i.dashDependencies[u] = s, i.dashDependencies[h] = o, i.dashDependencies[c] = l, t.dashes[n.id] = {
					min: u,
					mid: h,
					max: c
				};
			}
		}
	};
	let Qh, ec;
	Dn("LineBucket", Jh, { omit: ["layers", "patternFeatures"] });
	var tc = {
		get paint() {
			return ec || (ec = new ta({
				"line-opacity": new Kn($.paint_line["line-opacity"], "line-opacity"),
				"line-layer-opacity": new Hn($.paint_line["line-layer-opacity"], "line-layer-opacity"),
				"line-color": new Kn($.paint_line["line-color"], "line-color"),
				"line-translate": new Hn($.paint_line["line-translate"], "line-translate"),
				"line-translate-anchor": new Hn($.paint_line["line-translate-anchor"], "line-translate-anchor"),
				"line-width": new Kn($.paint_line["line-width"], "line-width"),
				"line-gap-width": new Kn($.paint_line["line-gap-width"], "line-gap-width"),
				"line-offset": new Kn($.paint_line["line-offset"], "line-offset"),
				"line-blur": new Kn($.paint_line["line-blur"], "line-blur"),
				"line-dasharray": new Jn($.paint_line["line-dasharray"], "line-dasharray"),
				"line-pattern": new Jn($.paint_line["line-pattern"], "line-pattern"),
				"line-gradient": new ea($.paint_line["line-gradient"], "line-gradient")
			}));
		},
		get layout() {
			return Qh || (Qh = new ta({
				"line-cap": new Kn($.layout_line["line-cap"], "line-cap"),
				"line-join": new Kn($.layout_line["line-join"], "line-join"),
				"line-miter-limit": new Kn($.layout_line["line-miter-limit"], "line-miter-limit"),
				"line-round-limit": new Kn($.layout_line["line-round-limit"], "line-round-limit"),
				"line-sort-key": new Kn($.layout_line["line-sort-key"], "line-sort-key")
			}));
		}
	}, rc = class extends Kn {
		possiblyEvaluate(e, t) {
			return t = new Rn(Math.floor(t.zoom), {
				now: t.now,
				fadeDuration: t.fadeDuration,
				zoomHistory: t.zoomHistory,
				transition: t.transition
			}), super.possiblyEvaluate(e, t);
		}
		evaluate(e, t, r, i) {
			return t = w({}, t, { zoom: Math.floor(t.zoom) }), super.evaluate(e, t, r, i);
		}
	};
	let ic;
	var nc = class extends na {
		constructor(e, t) {
			super(e, tc, t), this.gradientVersion = 0, ic || (ic = new rc(tc.paint.properties["line-width"].specification, "line-floorwidth"), ic.useIntegerZoom = !0);
		}
		_handleSpecialPaintPropertyUpdate(e) {
			if ("line-gradient" === e) {
				let e = this.gradientExpression();
				this.stepInterpolant = !!function(e) {
					return void 0 !== e._styleExpression;
				}(e) && e._styleExpression.expression instanceof tt, this.gradientVersion = (this.gradientVersion + 1) % (2 ** 53 - 1);
			}
		}
		gradientExpression() {
			return this._transitionablePaint._values["line-gradient"].value.expression;
		}
		recalculate(e, t) {
			super.recalculate(e, t), this.paint._values["line-floorwidth"] = ic.possiblyEvaluate(this._transitioningPaint._values["line-width"].value, e);
		}
		createBucket(e) {
			return new Jh(e);
		}
		queryRadius(e) {
			let t = e, r = ac(ao("line-width", this, t), ao("line-gap-width", this, t)), i = ao("line-offset", this, t);
			return r / 2 + Math.abs(i) + so(this.paint.get("line-translate"));
		}
		queryIntersectsFeature({ queryGeometry: e, feature: t, featureState: r, geometry: i, transform: n, pixelsToTileUnits: a }) {
			let s = oo(e, this.paint.get("line-translate"), this.paint.get("line-translate-anchor"), -n.bearingInRadians, a), o = a / 2 * ac(this.paint.get("line-width").evaluate(t, r), this.paint.get("line-gap-width").evaluate(t, r)), l = this.paint.get("line-offset").evaluate(t, r);
			return l && (i = function(e, t) {
				let r = [];
				for (let i of e) {
					let e = lo(i), n = [];
					for (let r = 0; r < e.length; r++) {
						let i = e[r], a = e[r - 1], s = e[r + 1], o = 0 === r ? new f(0, 0) : i.sub(a)._unit()._perp(), l = r === e.length - 1 ? new f(0, 0) : s.sub(i)._unit()._perp(), u = o._add(l)._unit(), h = u.x * l.x + u.y * l.y;
						0 !== h && u._mult(1 / h), n.push(u._mult(t)._add(i));
					}
					r.push(n);
				}
				return r;
			}(i, l * a)), function(e, t, r) {
				for (let i of t) {
					if (e.length >= 3) {
						for (let t of i) if (ro(e, t)) return !0;
					}
					if (Hs(e, i, r)) return !0;
				}
				return !1;
			}(s, i, o);
		}
		isTileClipped() {
			return !0;
		}
	};
	function ac(e, t) {
		return t > 0 ? t + 2 * e : e;
	}
	const sc = la([
		{
			name: "a_pos_offset",
			components: 4,
			type: "Int16"
		},
		{
			name: "a_data",
			components: 4,
			type: "Uint16"
		},
		{
			name: "a_pixeloffset",
			components: 4,
			type: "Int16"
		},
		{
			name: "a_height_offset",
			components: 1,
			type: "Float32"
		}
	], 4), oc = la([{
		name: "a_projected_pos",
		components: 3,
		type: "Float32"
	}], 4);
	la([{
		name: "a_fade_opacity",
		components: 1,
		type: "Uint32"
	}], 4);
	const lc = la([
		{
			name: "a_placed",
			components: 2,
			type: "Uint8"
		},
		{
			name: "a_shift",
			components: 2,
			type: "Float32"
		},
		{
			name: "a_box_real",
			components: 2,
			type: "Int16"
		}
	]);
	la([
		{
			type: "Int16",
			name: "anchorPointX"
		},
		{
			type: "Int16",
			name: "anchorPointY"
		},
		{
			type: "Int16",
			name: "x1"
		},
		{
			type: "Int16",
			name: "y1"
		},
		{
			type: "Int16",
			name: "x2"
		},
		{
			type: "Int16",
			name: "y2"
		},
		{
			type: "Uint32",
			name: "featureIndex"
		},
		{
			type: "Uint16",
			name: "sourceLayerIndex"
		},
		{
			type: "Uint16",
			name: "bucketIndex"
		}
	]);
	const uc = la([
		{
			name: "a_pos",
			components: 2,
			type: "Int16"
		},
		{
			name: "a_anchor_pos",
			components: 2,
			type: "Int16"
		},
		{
			name: "a_extrude",
			components: 2,
			type: "Int16"
		}
	], 4);
	la([
		{
			name: "a_pos",
			components: 2,
			type: "Float32"
		},
		{
			name: "a_radius",
			components: 1,
			type: "Float32"
		},
		{
			name: "a_flags",
			components: 2,
			type: "Int16"
		}
	], 4), la([{
		name: "triangle",
		components: 3,
		type: "Uint16"
	}]), la([
		{
			type: "Int16",
			name: "anchorX"
		},
		{
			type: "Int16",
			name: "anchorY"
		},
		{
			type: "Uint16",
			name: "glyphStartIndex"
		},
		{
			type: "Uint16",
			name: "numGlyphs"
		},
		{
			type: "Uint32",
			name: "vertexStartIndex"
		},
		{
			type: "Uint32",
			name: "lineStartIndex"
		},
		{
			type: "Uint32",
			name: "lineLength"
		},
		{
			type: "Uint16",
			name: "segment"
		},
		{
			type: "Uint16",
			name: "lowerSize"
		},
		{
			type: "Uint16",
			name: "upperSize"
		},
		{
			type: "Float32",
			name: "lineOffsetX"
		},
		{
			type: "Float32",
			name: "lineOffsetY"
		},
		{
			type: "Uint8",
			name: "writingMode"
		},
		{
			type: "Uint8",
			name: "placedOrientation"
		},
		{
			type: "Uint8",
			name: "hidden"
		},
		{
			type: "Uint32",
			name: "crossTileID"
		},
		{
			type: "Int16",
			name: "associatedIconIndex"
		},
		{
			type: "Float32",
			name: "heightOffset"
		}
	]), la([
		{
			type: "Int16",
			name: "anchorX"
		},
		{
			type: "Int16",
			name: "anchorY"
		},
		{
			type: "Int16",
			name: "rightJustifiedTextSymbolIndex"
		},
		{
			type: "Int16",
			name: "centerJustifiedTextSymbolIndex"
		},
		{
			type: "Int16",
			name: "leftJustifiedTextSymbolIndex"
		},
		{
			type: "Int16",
			name: "verticalPlacedTextSymbolIndex"
		},
		{
			type: "Int16",
			name: "placedIconSymbolIndex"
		},
		{
			type: "Int16",
			name: "verticalPlacedIconSymbolIndex"
		},
		{
			type: "Uint16",
			name: "key"
		},
		{
			type: "Uint16",
			name: "textBoxStartIndex"
		},
		{
			type: "Uint16",
			name: "textBoxEndIndex"
		},
		{
			type: "Uint16",
			name: "verticalTextBoxStartIndex"
		},
		{
			type: "Uint16",
			name: "verticalTextBoxEndIndex"
		},
		{
			type: "Uint16",
			name: "iconBoxStartIndex"
		},
		{
			type: "Uint16",
			name: "iconBoxEndIndex"
		},
		{
			type: "Uint16",
			name: "verticalIconBoxStartIndex"
		},
		{
			type: "Uint16",
			name: "verticalIconBoxEndIndex"
		},
		{
			type: "Uint16",
			name: "featureIndex"
		},
		{
			type: "Uint16",
			name: "numHorizontalGlyphVertices"
		},
		{
			type: "Uint16",
			name: "numVerticalGlyphVertices"
		},
		{
			type: "Uint16",
			name: "numIconVertices"
		},
		{
			type: "Uint16",
			name: "numVerticalIconVertices"
		},
		{
			type: "Uint16",
			name: "useRuntimeCollisionCircles"
		},
		{
			type: "Uint32",
			name: "crossTileID"
		},
		{
			type: "Float32",
			name: "textBoxScale"
		},
		{
			type: "Float32",
			name: "collisionCircleDiameter"
		},
		{
			type: "Uint16",
			name: "textAnchorOffsetStartIndex"
		},
		{
			type: "Uint16",
			name: "textAnchorOffsetEndIndex"
		},
		{
			type: "Float32",
			name: "heightOffset"
		}
	]), la([{
		type: "Float32",
		name: "offsetX"
	}]), la([
		{
			type: "Int16",
			name: "x"
		},
		{
			type: "Int16",
			name: "y"
		},
		{
			type: "Int16",
			name: "tileUnitDistanceFromAnchor"
		}
	]), la([{
		type: "Uint16",
		name: "textAnchor"
	}, {
		type: "Float32",
		components: 2,
		name: "textOffset"
	}]);
	const hc = new class {
		constructor() {
			this.TIMEOUT = 5e3, this.applyArabicShaping = null, this.processBidirectionalText = null, this.processStyledBidirectionalText = null, this.pluginStatus = "unavailable", this.pluginURL = null, this.loadScriptResolve = () => {};
		}
		setState(e) {
			this.pluginStatus = e.pluginStatus, this.pluginURL = e.pluginURL;
		}
		getState() {
			return {
				pluginStatus: this.pluginStatus,
				pluginURL: this.pluginURL
			};
		}
		setMethods(e) {
			if (hc.isParsed()) throw Error("RTL text plugin already registered.");
			this.applyArabicShaping = e.applyArabicShaping, this.processBidirectionalText = e.processBidirectionalText, this.processStyledBidirectionalText = e.processStyledBidirectionalText, this.loadScriptResolve();
		}
		isParsed() {
			return null != this.applyArabicShaping && null != this.processBidirectionalText && null != this.processStyledBidirectionalText;
		}
		getRTLTextPluginStatus() {
			return this.pluginStatus;
		}
		async syncState(e, t) {
			if (this.isParsed()) return this.getState();
			if ("loading" !== e.pluginStatus) return this.setState(e), e;
			let r = e.pluginURL, i = new Promise((e) => {
				this.loadScriptResolve = e;
			}), n = new Promise((e) => setTimeout(() => e(), this.TIMEOUT));
			if (await t(r), await Promise.race([i, n]), this.isParsed()) {
				let e = {
					pluginStatus: "loaded",
					pluginURL: r
				};
				return this.setState(e), e;
			}
			throw this.setState({
				pluginStatus: "error",
				pluginURL: ""
			}), Error(`RTL Text Plugin failed to import scripts from ${r}`);
		}
	}();
	function cc(e) {
		return /[\u02EA\u02EB\u2E80-\u2FDF\u2FF0-\u303F\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FD-\u30FF\u3105-\u312F\u31A0-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uF900-\uFA6D\uFA70-\uFAD9\uFE10-\uFE1F\uFE30-\uFE4F\uFF00-\uFFEF]|\uD81B[\uDFE0-\uDFFF]|[\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFFF]|\uD82C[\uDC00-\uDEFB]|\uD83C[\uDE00-\uDEFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]/gim.test(String.fromCodePoint(e));
	}
	function pc(e) {
		return /[\u02EA\u02EB\u1100-\u11FF\u1401-\u167F\u18B0-\u18FF\u2065\u20DD-\u20E0\u20E2-\u20E4\u2B97\u2BF0-\u2BFF\u2E50\u2E51\u2E80-\u3007\u3012\u3013\u3020-\u302F\u3031-\u30FB\u30FD-\uA4CF\uA960-\uA97F\uAC00-\uD7FF\uF900-\uFAFF\uFE10-\uFE1F\uFE30-\uFE48\uFE50-\uFE57\uFE5F-\uFE62\uFE67-\uFE6F\uFF00-\uFF07\uFF0A-\uFF0C\uFF0E-\uFF19\uFF1F-\uFF3A\uFF3C\uFF3E\uFF40-\uFF5A\uFFE0-\uFFE2\uFFE4-\uFFE7\uFFF0-\uFFF8]|\uD802[\uDD80-\uDD9F]|\uD805[\uDD80-\uDDFF]|\uD806[\uDE00-\uDEBF]|[\uD80C-\uD810\uD81C-\uD822\uD83C\uD83D\uD840-\uD87E\uD880-\uD8BE][\uDC00-\uDFFF]|\uD811[\uDC00-\uDE7F]|\uD81B[\uDFE0-\uDFFF]|\uD823[\uDC00-\uDDFF]|\uD82B[\uDFF0-\uDFFF]|\uD82C[\uDC00-\uDEFF]|\uD833[\uDEC0-\uDFCF]|\uD834[\uDC00-\uDDFF\uDEE0-\uDF7F]|\uD836[\uDC00-\uDEAF]|\uD83E[\uDD00-\uDEFF]|[\uD87F\uD8BF][\uDC00-\uDFFD]/gim.test(String.fromCodePoint(e));
	}
	function fc(e) {
		return /[\u0E01-\u0E3A\u0E40-\u0E4E\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0EDC-\u0EDF\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA\u1000-\u103F\u1050-\u108F\u109A-\u109F\u1780-\u17D3\u17D7\u17DC\u17DD\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19DE\u19DF\u1A20-\u1A5E\u1A60-\u1A7C\u1AA0-\u1AAD\u1B00-\u1B4C\u1B4E-\u1B7F\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE-\uA9EF\uA9FA-\uA9FE\uAA60-\uAAC2\uAADB-\uAADF]|\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF3A\uDF3B\uDF3F-\uDF46]/gim.test(String.fromCodePoint(e));
	}
	function dc(e, t) {
		return /(?:[\u1039\u17D2\u1A60\u1BAB\u200D\uAAF6]|\uD802\uDE3F|\uD804[\uDD33\uDFD0]|\uD806[\uDD3E\uDE47\uDE99]|\uD807[\uDD45\uDD97\uDF42])$/.test(e) || /^\p{gc=Mc}/u.test(t);
	}
	const yc = {
		C: "18g,1;g2,3;4nb,1",
		D: "17k,1;5,1;1,1;1,5;4,d;1,7;1,2;z,2;8,g;i,12;1,2;9,1;1,1;1,2;14,3;2,1;28,9;3,f;2,4;1,1;2,3;2,6;7a,1;2,5;1,1;g,a;5,2;2,6;1,f",
		R: "17m,4;1,1;1,1;5,4;l,1;14,3;1,3;g,i;12,1;2,9;1,1;1,1;2,2;1,1;o,2;2x,3;f,2;4,1;1,2;3,2;6u,j;b,1;r,3;1,1;2,2;6,1",
		T: "174,b;1,1;1a,l;g,1;2t,7;2,6;2,2;1,4;bt,9;16,o;1,t;1clb,1"
	}, mc = {
		1569: [
			65152,
			0,
			0,
			0
		],
		1570: [
			65153,
			65154,
			0,
			0
		],
		1571: [
			65155,
			65156,
			0,
			0
		],
		1572: [
			65157,
			65158,
			0,
			0
		],
		1573: [
			65159,
			65160,
			0,
			0
		],
		1574: [
			65161,
			65162,
			65163,
			65164
		],
		1575: [
			65165,
			65166,
			0,
			0
		],
		1576: [
			65167,
			65168,
			65169,
			65170
		],
		1577: [
			65171,
			65172,
			0,
			0
		],
		1578: [
			65173,
			65174,
			65175,
			65176
		],
		1579: [
			65177,
			65178,
			65179,
			65180
		],
		1580: [
			65181,
			65182,
			65183,
			65184
		],
		1581: [
			65185,
			65186,
			65187,
			65188
		],
		1582: [
			65189,
			65190,
			65191,
			65192
		],
		1583: [
			65193,
			65194,
			0,
			0
		],
		1584: [
			65195,
			65196,
			0,
			0
		],
		1585: [
			65197,
			65198,
			0,
			0
		],
		1586: [
			65199,
			65200,
			0,
			0
		],
		1587: [
			65201,
			65202,
			65203,
			65204
		],
		1588: [
			65205,
			65206,
			65207,
			65208
		],
		1589: [
			65209,
			65210,
			65211,
			65212
		],
		1590: [
			65213,
			65214,
			65215,
			65216
		],
		1591: [
			65217,
			65218,
			65219,
			65220
		],
		1592: [
			65221,
			65222,
			65223,
			65224
		],
		1593: [
			65225,
			65226,
			65227,
			65228
		],
		1594: [
			65229,
			65230,
			65231,
			65232
		],
		1601: [
			65233,
			65234,
			65235,
			65236
		],
		1602: [
			65237,
			65238,
			65239,
			65240
		],
		1603: [
			65241,
			65242,
			65243,
			65244
		],
		1604: [
			65245,
			65246,
			65247,
			65248
		],
		1605: [
			65249,
			65250,
			65251,
			65252
		],
		1606: [
			65253,
			65254,
			65255,
			65256
		],
		1607: [
			65257,
			65258,
			65259,
			65260
		],
		1608: [
			65261,
			65262,
			0,
			0
		],
		1609: [
			65263,
			65264,
			64488,
			64489
		],
		1610: [
			65265,
			65266,
			65267,
			65268
		],
		1611: [
			65136,
			0,
			0,
			65137
		],
		1612: [
			65138,
			0,
			0,
			0
		],
		1613: [
			65140,
			0,
			0,
			0
		],
		1614: [
			65142,
			0,
			0,
			65143
		],
		1615: [
			65144,
			0,
			0,
			65145
		],
		1616: [
			65146,
			0,
			0,
			65147
		],
		1617: [
			65148,
			0,
			0,
			65149
		],
		1618: [
			65150,
			0,
			0,
			65151
		],
		1649: [
			64336,
			64337,
			0,
			0
		],
		1655: [
			64477,
			0,
			0,
			0
		],
		1657: [
			64358,
			64359,
			64360,
			64361
		],
		1658: [
			64350,
			64351,
			64352,
			64353
		],
		1659: [
			64338,
			64339,
			64340,
			64341
		],
		1662: [
			64342,
			64343,
			64344,
			64345
		],
		1663: [
			64354,
			64355,
			64356,
			64357
		],
		1664: [
			64346,
			64347,
			64348,
			64349
		],
		1667: [
			64374,
			64375,
			64376,
			64377
		],
		1668: [
			64370,
			64371,
			64372,
			64373
		],
		1670: [
			64378,
			64379,
			64380,
			64381
		],
		1671: [
			64382,
			64383,
			64384,
			64385
		],
		1672: [
			64392,
			64393,
			0,
			0
		],
		1676: [
			64388,
			64389,
			0,
			0
		],
		1677: [
			64386,
			64387,
			0,
			0
		],
		1678: [
			64390,
			64391,
			0,
			0
		],
		1681: [
			64396,
			64397,
			0,
			0
		],
		1688: [
			64394,
			64395,
			0,
			0
		],
		1700: [
			64362,
			64363,
			64364,
			64365
		],
		1702: [
			64366,
			64367,
			64368,
			64369
		],
		1705: [
			64398,
			64399,
			64400,
			64401
		],
		1709: [
			64467,
			64468,
			64469,
			64470
		],
		1711: [
			64402,
			64403,
			64404,
			64405
		],
		1713: [
			64410,
			64411,
			64412,
			64413
		],
		1715: [
			64406,
			64407,
			64408,
			64409
		],
		1722: [
			64414,
			64415,
			0,
			0
		],
		1723: [
			64416,
			64417,
			64418,
			64419
		],
		1726: [
			64426,
			64427,
			64428,
			64429
		],
		1728: [
			64420,
			64421,
			0,
			0
		],
		1729: [
			64422,
			64423,
			64424,
			64425
		],
		1733: [
			64480,
			64481,
			0,
			0
		],
		1734: [
			64473,
			64474,
			0,
			0
		],
		1735: [
			64471,
			64472,
			0,
			0
		],
		1736: [
			64475,
			64476,
			0,
			0
		],
		1737: [
			64482,
			64483,
			0,
			0
		],
		1739: [
			64478,
			64479,
			0,
			0
		],
		1740: [
			64508,
			64509,
			64510,
			64511
		],
		1744: [
			64484,
			64485,
			64486,
			64487
		],
		1746: [
			64430,
			64431,
			0,
			0
		],
		1747: [
			64432,
			64433,
			0,
			0
		]
	}, gc = {
		"لآ": [65269, 65270],
		"لأ": [65271, 65272],
		"لإ": [65273, 65274],
		"لا": [65275, 65276]
	}, xc = /[\u0600-\u06ff\u0750-\u077f\u0870-\u089f\u08a0-\u08ff\ufb50-\ufdff\ufe70-\ufeff]/;
	function vc(e, t, r) {
		let i = 0;
		for (let n of e.split(";")) {
			let [e, a] = n.split(",").map((e) => parseInt(e, 36)), s = i + e;
			for (let i = s; i < s + a; i++) r.set(i, t);
			i = s + a;
		}
	}
	const bc = /* @__PURE__ */ new Map();
	for (let [bg, wg] of Object.entries(yc)) vc(wg, bg, bc);
	function wc(e) {
		return bc.get(e) ?? "U";
	}
	function _c(e) {
		return "D" === e || "L" === e || "C" === e;
	}
	function Dc(e) {
		return "D" === e || "R" === e || "C" === e;
	}
	function Sc(e, t, r) {
		return "D" === e ? t && r ? 3 : t ? 1 : r ? 2 : 0 : "R" === e ? +!!t : "L" === e ? r ? 2 : 0 : null;
	}
	function Ac(e) {
		if (!xc.test(e)) return e;
		let t = function(e) {
			return [...e].map((e) => {
				let t = e.codePointAt(0);
				return {
					codePoint: t,
					type: wc(t),
					form: null
				};
			});
		}(e);
		return function(e) {
			let t = e.filter((e) => "T" !== e.type);
			for (let r = 0; r < t.length; r++) {
				let e = t[r], i = r > 0 && _c(t[r - 1].type), n = r + 1 < t.length && Dc(t[r + 1].type);
				e.form = Sc(e.type, i, n);
			}
		}(t), function(e) {
			let t = !1;
			for (let r of e) "T" === r.type ? r.form = t ? 3 : 0 : t = 2 === r.form || 3 === r.form;
		}(t), function(e) {
			let t = [];
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (1604 !== i.codePoint) {
					t.push(i);
					continue;
				}
				let n = r + 1;
				for (; n < e.length && "T" === e[n].type;) n++;
				let a = e[n], s = a && gc[String.fromCodePoint(1604, a.codePoint)];
				if (!s) {
					t.push(i);
					continue;
				}
				let o = 3 === i.form || 1 === i.form;
				t.push({
					codePoint: s[+!!o],
					type: "R",
					form: 0
				}), t.push(...e.slice(r + 1, n)), r = n;
			}
			return t;
		}(t).map((e) => String.fromCodePoint(function(e) {
			if (null === e.form) return e.codePoint;
			let t = mc[e.codePoint];
			return t && (t[e.form] || t[0]) || e.codePoint;
		}(e))).join("");
	}
	function Ec(e, t, r) {
		let i = t.layout.get("text-transform").evaluate(r, {});
		return "uppercase" === i ? e = e.toLocaleUpperCase() : "lowercase" === i && (e = e.toLocaleLowerCase()), (hc.applyArabicShaping ?? Ac)(e);
	}
	function Fc(e, t, r) {
		for (let i of e.sections) i.text = Ec(i.text, t, r);
		return e;
	}
	function kc(e, t, r) {
		let i = r ? t.last.points : t.first.points, n = r ? i[i.length - 1] : i[0];
		return `${e}:${n.x}:${n.y}`;
	}
	function Ic(e) {
		let t = e.first.points, r = t.length;
		for (let a = e.first.next; a; a = a.next) r += a.points.length - 1;
		let i = Array(r);
		for (let a = 0; a < t.length; a++) i[a] = t[a];
		let n = t.length;
		for (let a = e.first.next; a; a = a.next) {
			let e = a.points;
			for (let t = 1; t < e.length; t++) i[n++] = e[t];
		}
		return i;
	}
	function Tc(e, t, r, i, n) {
		let a = t[r];
		delete t[r], t[i] = a;
		let s = e[a];
		return s.last.next = n.first, s.last = n.last, a;
	}
	function Cc(e, t, r, i, n) {
		let a = t[i];
		delete t[i], t[r] = a;
		let s = e[a];
		return n.last.next = s.first, s.first = n.first, a;
	}
	const Bc = typeof Intl < "u" && "Segmenter" in Intl;
	let Mc, Pc;
	function zc(e) {
		if (!Bc || !function(e) {
			return /[\r\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0600-\u0605\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DD\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u070F\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0890\u0891\u0897-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E33-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB3-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1037\u1039-\u103E\u1056-\u1059\u105E-\u1060\u1071-\u1074\u1082\u1084-\u1086\u108D\u109D\u1100-\u11FF\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60\u1A62\u1A65-\u1A7C\u1A7F\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA960-\uA97C\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFA-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCBD\uDCC2\uDCCD\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC2\uDDC3\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDE41\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74\uDFB8-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFCA\uDFCC-\uDFD2\uDFE1\uDFE2]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF1F\uDF22-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE84-\uDE99\uDF60-\uDF67]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6\uDF00-\uDF03\uDF34-\uDF3A\uDF3E-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDD63\uDD67-\uDD6A\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDDE6-\uDDFF\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF]/.test(e);
		}(e)) return [...e];
		Mc ?? (Mc = new Intl.Segmenter(void 0, { granularity: "grapheme" }));
		let t = [];
		for (let { segment: r } of Mc.segment(e)) {
			let e = t.length - 1;
			e >= 0 && dc(t[e], r) ? t[e] += r : t.push(r);
		}
		return t;
	}
	function Lc(e) {
		let t = /* @__PURE__ */ new Set();
		if (Bc) {
			Pc ?? (Pc = new Intl.Segmenter(void 0, { granularity: "word" }));
			for (let { index: r } of Pc.segment(e)) t.add(r);
			return t;
		}
		let r = 0;
		for (let i of e.split(/\b|(?=\p{Ideo})/u)) t.add(r), r += i.length;
		return t;
	}
	function Vc(e) {
		let t = e.codePointAt(0);
		return e.length > (t > 65535 ? 2 : 1);
	}
	function Oc(e) {
		return /\s/u.test(String.fromCodePoint(e));
	}
	function Rc(e) {
		return /[\p{P}\p{S}]/u.test(String.fromCodePoint(e));
	}
	function $c(e) {
		for (let t of e) if (pc(t.codePointAt(0))) return !0;
		return !1;
	}
	function Nc(e) {
		for (let t of e) if (!Uc(t.codePointAt(0))) return !1;
		return !0;
	}
	function Uc(e) {
		return !function(e) {
			return /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u070D\u070F-\u074A\u074D-\u077F\u07C0-\u07FA\u07FD-\u07FF\u0840-\u085B\u085E\u0860-\u086A\u0870-\u0891\u0897-\u08E1\u08E3-\u08FF\u1800\u1801\u1804\u1806-\u1819\u1820-\u1878\u1880-\u18AA\uA840-\uA877\uFB50-\uFD3D\uFD40-\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]|\uD803[\uDD00-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDEC2-\uDEC7\uDED0-\uDED8\uDEFA-\uDEFF\uDF30-\uDF59\uDF70-\uDF89\uDFB0-\uDFCB]|\uD805[\uDE60-\uDE6C]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]|\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/gim.test(String.fromCodePoint(e));
		}(e);
	}
	function jc(e) {
		return !(pc(e) || function(e) {
			return /[\xA7\xA9\xAE\xB1\xBC-\xBE\xD7\xF7\u2016\u2020\u2021\u2030\u2031\u203B\u203C\u2042\u2047-\u2049\u2051\u2100-\u218F\u221E\u2234\u2235\u2300-\u2307\u230C-\u231F\u2324-\u2328\u232B\u237D-\u239A\u23BE-\u23CD\u23CF\u23D1-\u23DB\u23E2-\u2422\u2424-\u24FF\u25A0-\u2619\u2620-\u2767\u2776-\u2793\u2B12-\u2B2F\u2B50-\u2B59\u2BB8-\u2BEB\u3000-\u303F\u30A0-\u30FF\uE000-\uF8FF\uFE30-\uFE6F\uFF00-\uFFEF\uFFFC\uFFFD]|[\uDB80-\uDBFF][\uDC00-\uDFFF]/gim.test(String.fromCodePoint(e));
		}(e));
	}
	function qc(e) {
		return /\p{sc=Arab}/u.test(String.fromCodePoint(e));
	}
	function Gc(e) {
		return function(e) {
			return /[\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u070D\u070F-\u074A\u074D-\u07B1\u07C0-\u07FA\u07FD-\u082D\u0830-\u083E\u0840-\u085B\u085E\u0860-\u086A\u0870-\u0891\u0897-\u08E1\u08E3-\u08FF\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFD3D\uFD40-\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC57-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD1F-\uDD39\uDD3F-\uDD59\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58\uDE60-\uDE9F\uDEC0-\uDEE6\uDEEB-\uDEF6\uDF00-\uDF35\uDF39-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDD40-\uDD65\uDD69-\uDD85\uDD8E\uDD8F\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1\uDEC2-\uDEC7\uDED0-\uDED8\uDEFA-\uDF27\uDF30-\uDF59\uDF70-\uDF89\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/gim.test(String.fromCodePoint(e));
		}(e);
	}
	function Xc(e) {
		for (let t of e) if (Gc(t.codePointAt(0))) return !0;
		return !1;
	}
	const Yc = {
		"!": "︕",
		"#": "＃",
		$: "＄",
		"%": "％",
		"&": "＆",
		"(": "︵",
		")": "︶",
		"*": "＊",
		"+": "＋",
		",": "︐",
		"-": "︲",
		".": "・",
		"/": "／",
		":": "︓",
		";": "︔",
		"<": "︿",
		"=": "＝",
		">": "﹀",
		"?": "︖",
		"@": "＠",
		"[": "﹇",
		"\\": "＼",
		"]": "﹈",
		"^": "＾",
		_: "︳",
		"`": "｀",
		"{": "︷",
		"|": "―",
		"}": "︸",
		"~": "～",
		"¢": "￠",
		"£": "￡",
		"¥": "￥",
		"¦": "￤",
		"¬": "￢",
		"¯": "￣",
		"–": "︲",
		"—": "︱",
		"‘": "﹃",
		"’": "﹄",
		"“": "﹁",
		"”": "﹂",
		"…": "︙",
		"⋯": "︙",
		"‧": "・",
		"₩": "￦",
		"、": "︑",
		"。": "︒",
		"〈": "︿",
		"〉": "﹀",
		"《": "︽",
		"》": "︾",
		"「": "﹁",
		"」": "﹂",
		"『": "﹃",
		"』": "﹄",
		"【": "︻",
		"】": "︼",
		"〔": "︹",
		"〕": "︺",
		"〖": "︗",
		"〗": "︘",
		"！": "︕",
		"（": "︵",
		"）": "︶",
		"，": "︐",
		"－": "︲",
		"．": "・",
		"：": "︓",
		"；": "︔",
		"＜": "︿",
		"＞": "﹀",
		"？": "︖",
		"［": "﹇",
		"］": "﹈",
		"＿": "︳",
		"｛": "︷",
		"｜": "―",
		"｝": "︸",
		"｟": "︵",
		"｠": "︶",
		"｡": "︒",
		"｢": "﹁",
		"｣": "﹂"
	}, Wc = {
		10: !0,
		13: !0,
		32: !0,
		38: !0,
		41: !0,
		43: !0,
		45: !0,
		47: !0,
		173: !0,
		183: !0,
		8203: !0,
		8208: !0,
		8211: !0,
		8231: !0
	}, Zc = { 40: !0 };
	function Hc(e, t, r, i, n, a) {
		if ("fontStack" in t) {
			let i = r[t.fontStack]?.default, a = i?.[e];
			if (a) return a.metrics.advance * t.scale + n;
			let s = 0;
			for (let r of e) {
				let e = i?.[r];
				e && (s += e.metrics.advance * t.scale + n);
			}
			return s;
		}
		{
			let e = i[t.imageName];
			return e ? e.displaySize[0] * t.scale * 24 / a + n : 0;
		}
	}
	function Kc(e, t, r, i) {
		let n = (e - t) ** 2;
		return i ? e < t ? n / 2 : 2 * n : n + Math.abs(r) * r;
	}
	function Jc(e) {
		return /^\s+$/u.test(e);
	}
	function Qc(e, t, r) {
		let i = 0;
		return (10 === e || 13 === e) && (i -= 1e4), r && (i += 150), (40 === e || 65288 === e) && (i += 50), (41 === t || 65289 === t) && (i += 50), i;
	}
	function ep(e, t, r, i, n, a) {
		let s = null, o = Kc(t, r, n, a);
		for (let l of i) {
			let e = Kc(t - l.x, r, n, a) + l.badness;
			e <= o && (s = l, o = e);
		}
		return {
			index: e,
			x: t,
			priorBreak: s,
			badness: o
		};
	}
	function tp(e) {
		return e ? tp(e.priorBreak).concat(e.index) : [];
	}
	var rp = class e {
		constructor(e = "", t = [], r = []) {
			this.text = e, this.sections = t, this.sectionIndex = r, this.imageSectionID = null, this.cachedGraphemes = null;
		}
		graphemes() {
			return this.cachedGraphemes ?? (this.cachedGraphemes = zc(this.text)), this.cachedGraphemes;
		}
		static fromFeature(t, r, i, n) {
			let a = new e();
			for (let e of t.sections) e.image ? a.addImageSection(e) : a.addTextSection(e, r);
			return i && a.verticalizePunctuation(n), a;
		}
		length() {
			return this.graphemes().length;
		}
		getSection(e) {
			return this.sections[this.sectionIndex[e]];
		}
		getSectionIndex(e) {
			return this.sectionIndex[e];
		}
		verticalizePunctuation(e = {}, t) {
			let r = function(e) {
				let t = "", r = {
					premature: !0,
					value: void 0
				}, i = e[Symbol.iterator](), n = i.next(), a = e[Symbol.iterator]();
				a.next();
				let s = a.next();
				for (; !n.done;) !s.done && jc(s.value.codePointAt(0)) && !Yc[s.value] || !r.premature && jc(r.value.codePointAt(0)) && !Yc[r.value] || !Yc[n.value] ? t += n.value : t += Yc[n.value], r = {
					value: n.value,
					premature: !1
				}, n = i.next(), s = a.next();
				return t;
			}(this.text), i = 0;
			this.cachedGraphemes = this.graphemes().map((n, a) => {
				let s = r.slice(i, i + n.length);
				i += n.length;
				let o = this.getSection(a);
				return !1 !== t?.[a] && "fontStack" in o && e[o.fontStack]?.vertical?.[n] ? n : s;
			}), this.text = this.cachedGraphemes.join("");
		}
		hasZeroWidthSpaces() {
			return this.text.includes("​");
		}
		trim() {
			let e = this.graphemes(), t = 0;
			for (; t < e.length && Jc(e[t]);) t++;
			let r = e.length;
			for (; r > t && Jc(e[r - 1]);) r--;
			this.text = e.slice(t, r).join(""), this.sectionIndex = this.sectionIndex.slice(t, r), this.cachedGraphemes = null;
		}
		substring(t, r) {
			let i = this.graphemes().slice(t, r).join(""), n = this.sectionIndex.slice(t, r);
			return new e(i, this.sections, n);
		}
		toCodeUnitIndex(e) {
			return this.graphemes().slice(0, e).join("").length;
		}
		toString() {
			return this.text;
		}
		getMaxScale() {
			return this.sectionIndex.reduce((e, t) => Math.max(e, this.sections[t].scale), 0);
		}
		getMaxImageSize(e) {
			let t = 0, r = 0;
			for (let i = 0; i < this.length(); i++) {
				let n = this.getSection(i);
				if ("imageName" in n) {
					let i = e[n.imageName];
					if (!i) continue;
					let a = i.displaySize;
					t = Math.max(t, a[0]), r = Math.max(r, a[1]);
				}
			}
			return {
				maxImageWidth: t,
				maxImageHeight: r
			};
		}
		_appendSection(e, t) {
			let r = this.graphemes(), i = r.length > 0 ? r[r.length - 1] : "", n = zc(i + e);
			this.text += e, this.cachedGraphemes = r.slice(0, i ? -1 : void 0).concat(n);
			let a = n.length - +!!i;
			for (let s = 0; s < a; s++) this.sectionIndex.push(t);
		}
		addTextSection(e, t) {
			this.sections.push({
				scale: e.scale || 1,
				verticalAlign: e.verticalAlign || "bottom",
				fontStack: e.fontStack || t
			}), this._appendSection(e.text, this.sections.length - 1);
		}
		addImageSection(e) {
			let t = e.image ? e.image.name : "";
			if (0 === t.length) return void E("Can't add FormattedSection with an empty image.");
			let r = this.getNextImageSectionCharCode();
			r ? (this.sections.push({
				scale: 1,
				verticalAlign: e.verticalAlign || "bottom",
				imageName: t
			}), this._appendSection(String.fromCharCode(r), this.sections.length - 1)) : E("Reached maximum number of images 6401");
		}
		getNextImageSectionCharCode() {
			return this.imageSectionID ? this.imageSectionID >= 63743 ? null : ++this.imageSectionID : (this.imageSectionID = 57344, this.imageSectionID);
		}
		determineLineBreaks(e, t, r, i, n) {
			let a = this.determineTotalWidth(e, r, i, n);
			if (e >= 0 && a > 0 && a <= t && !/[\n\r]/.test(this.text)) return [this.length()];
			let s = [], o = a / Math.max(1, Math.ceil(a / t)), l = this.hasZeroWidthSpaces(), u = this.graphemes(), h = null, c = 0, p = 0;
			for (let f = 0; f < u.length; f++) {
				let t = u[f];
				if (f > 0) {
					let e = u[f - 1].codePointAt(0), r = t.codePointAt(0), i = cc(e), n = fc(e) && fc(r);
					(Wc[e] || i || "imageName" in this.getSection(f - 1) || void 0 !== u[f + 1] && Zc[r] || n && (h ?? (h = Lc(this.text))).has(p)) && s.push(ep(f, c, o, s, Qc(e, r, i && l), !1));
				}
				Oc(t.codePointAt(0)) || (c += Hc(t, this.getSection(f), r, i, e, n)), p += t.length;
			}
			return tp(ep(this.length(), c, o, s, 0, !0));
		}
		determineTotalWidth(e, t, r, i) {
			let n = 0, a = 0;
			for (let s of this.graphemes()) n += Hc(s, this.getSection(a), t, r, e, i), a++;
			return n;
		}
	};
	const ip = function(e) {
		var t = {
			R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
			EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
			ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
			ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
			AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
			CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
			B: "a,3,f+2,2v,690",
			S: "9,2,k",
			WS: "c,k,4f4,1vk+a,u,1j,335",
			ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
			BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
			NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
			AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
			LRO: "6ct",
			RLO: "6cu",
			LRE: "6cq",
			RLE: "6cr",
			PDF: "6cs",
			LRI: "6ee",
			RLI: "6ef",
			FSI: "6eg",
			PDI: "6eh"
		}, r = {}, i = {};
		r.L = 1, i[1] = "L", Object.keys(t).forEach(function(e, t) {
			r[e] = 1 << t + 1, i[r[e]] = e;
		}), Object.freeze(r);
		var n = r.LRI | r.RLI | r.FSI, a = r.L | r.R | r.AL, s = r.B | r.S | r.WS | r.ON | r.FSI | r.LRI | r.RLI | r.PDI, o = r.BN | r.RLE | r.LRE | r.RLO | r.LRO | r.PDF, l = r.S | r.WS | r.B | n | r.PDI | o, u = null;
		function h(e) {
			return function() {
				if (!u) {
					u = /* @__PURE__ */ new Map();
					var e = 0;
					for (var i in t) if (t.hasOwnProperty(i)) for (var n = t[i], a = "", s = void 0, o = !1, l = 0, h = 0; h <= n.length + 1; h += 1) {
						var c = n[h];
						if ("," !== c && h !== n.length) "+" === c ? (o = !0, l = e = l + parseInt(a, 36), a = "") : a += c;
						else {
							o ? s = e + parseInt(a, 36) : (l = e = l + parseInt(a, 36), s = e), o = !1, a = "", l = s;
							for (var p = e; p < s + 1; p += 1) u.set(p, r[i]);
						}
					}
				}
			}(), u.get(e.codePointAt(0)) || r.L;
		}
		var c, p, f, d = "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1", y = "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye";
		function m(e, t) {
			var r, i = 0, n = /* @__PURE__ */ new Map(), a = t && /* @__PURE__ */ new Map();
			return e.split(",").forEach(function e(s) {
				if (-1 !== s.indexOf("+")) for (var o = +s; o--;) e(r);
				else {
					r = s;
					var l = s.split(">"), u = l[0], h = l[1];
					u = String.fromCodePoint(i += parseInt(u, 36)), h = String.fromCodePoint(i += parseInt(h, 36)), n.set(u, h), t && a.set(h, u);
				}
			}), {
				map: n,
				reverseMap: a
			};
		}
		function g() {
			if (!c) {
				var e = m(d, !0), t = e.map, r = e.reverseMap;
				c = t, p = r, f = m(y, !1).map;
			}
		}
		function x(e) {
			return g(), c.get(e) || null;
		}
		function v(e) {
			return g(), p.get(e) || null;
		}
		function b(e) {
			return g(), f.get(e) || null;
		}
		var w, _ = r.L, D = r.R, S = r.EN, A = r.ES, E = r.ET, F = r.AN, k = r.CS, I = r.B, T = r.S, C = r.ON, B = r.BN, M = r.NSM, P = r.AL, z = r.LRO, L = r.RLO, V = r.LRE, O = r.RLE, R = r.PDF, $ = r.LRI, N = r.RLI, U = r.FSI, j = r.PDI;
		function q(e) {
			return function() {
				if (!w) {
					var e = m("14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", !0), t = e.map;
					e.reverseMap.forEach(function(e, r) {
						t.set(r, e);
					}), w = t;
				}
			}(), w.get(e) || null;
		}
		function G(e, t, r, i) {
			var n = e.length;
			r = Math.max(0, null == r ? 0 : +r), i = Math.min(n - 1, null == i ? n - 1 : +i);
			var a = [];
			return t.paragraphs.forEach(function(n) {
				var s = Math.max(r, n.start), o = Math.min(i, n.end);
				if (s < o) {
					for (var u = t.levels.slice(s, o + 1), c = o; c >= s && h(e[c]) & l; c--) u[c] = n.level;
					for (var p = n.level, f = Infinity, d = 0; d < u.length; d++) {
						var y = u[d];
						y > p && (p = y), y < f && (f = 1 | y);
					}
					for (var m = p; m >= f; m--) for (var g = 0; g < u.length; g++) if (u[g] >= m) {
						for (var x = g; g + 1 < u.length && u[g + 1] >= m;) g++;
						g > x && a.push([x + s, g + s]);
					}
				}
			}), a;
		}
		function X(e, t, r, i) {
			for (var n = G(e, t, r, i), a = [], s = 0; s < e.length; s++) a[s] = s;
			return n.forEach(function(e) {
				for (var t = e[0], r = e[1], i = a.slice(t, r + 1), n = i.length; n--;) a[r - n] = i[n];
			}), a;
		}
		return e.closingToOpeningBracket = v, e.getBidiCharType = h, e.getBidiCharTypeName = function(e) {
			return i[h(e)];
		}, e.getCanonicalBracket = b, e.getEmbeddingLevels = function(e, t) {
			for (var r = new Uint32Array(e.length), i = 0; i < e.length; i++) r[i] = h(e[i]);
			var u = /* @__PURE__ */ new Map();
			function c(e, t) {
				var i = r[e];
				r[e] = t, u.set(i, u.get(i) - 1), i & s && u.set(s, u.get(s) - 1), u.set(t, (u.get(t) || 0) + 1), t & s && u.set(s, (u.get(s) || 0) + 1);
			}
			for (var p = new Uint8Array(e.length), f = /* @__PURE__ */ new Map(), d = [], y = null, m = 0; m < e.length; m++) y || d.push(y = {
				start: m,
				end: e.length - 1,
				level: "rtl" === t ? 1 : "ltr" === t ? 0 : $t(m, !1)
			}), r[m] & I && (y.end = m, y = null);
			for (var g = O | V | L | z | n | j | R | I, w = function(e) {
				return e + (1 & e ? 1 : 2);
			}, q = function(e) {
				return e + (1 & e ? 2 : 1);
			}, G = 0; G < d.length; G++) {
				var X = [{
					_level: (y = d[G]).level,
					_override: 0,
					_isolate: 0
				}], Y = void 0, W = 0, Z = 0, H = 0;
				u.clear();
				for (var K = y.start; K <= y.end; K++) {
					var J = r[K];
					if (Y = X[X.length - 1], u.set(J, (u.get(J) || 0) + 1), J & s && u.set(s, (u.get(s) || 0) + 1), J & g) if (J & (O | V)) {
						p[K] = Y._level;
						var Q = (J === O ? q : w)(Y._level);
						Q <= 125 && !W && !Z ? X.push({
							_level: Q,
							_override: 0,
							_isolate: 0
						}) : W || Z++;
					} else if (J & (L | z)) {
						p[K] = Y._level;
						var ee = (J === L ? q : w)(Y._level);
						ee <= 125 && !W && !Z ? X.push({
							_level: ee,
							_override: J & L ? D : _,
							_isolate: 0
						}) : W || Z++;
					} else if (J & n) {
						J & U && (J = 1 === $t(K + 1, !0) ? N : $), p[K] = Y._level, Y._override && c(K, Y._override);
						var te = (J === N ? q : w)(Y._level);
						te <= 125 && 0 === W && 0 === Z ? (H++, X.push({
							_level: te,
							_override: 0,
							_isolate: 1,
							_isolInitIndex: K
						})) : W++;
					} else if (J & j) {
						if (W > 0) W--;
						else if (H > 0) {
							for (Z = 0; !X[X.length - 1]._isolate;) X.pop();
							var re = X[X.length - 1]._isolInitIndex;
							null != re && (f.set(re, K), f.set(K, re)), X.pop(), H--;
						}
						Y = X[X.length - 1], p[K] = Y._level, Y._override && c(K, Y._override);
					} else J & R ? (0 === W && (Z > 0 ? Z-- : !Y._isolate && X.length > 1 && (X.pop(), Y = X[X.length - 1])), p[K] = Y._level) : J & I && (p[K] = y.level);
					else p[K] = Y._level, Y._override && J !== B && c(K, Y._override);
				}
				for (var ie = [], ne = null, ae = y.start; ae <= y.end; ae++) {
					var se = r[ae];
					if (!(se & o)) {
						var oe = p[ae], le = se & n, ue = se === j;
						ne && oe === ne._level ? (ne._end = ae, ne._endsWithIsolInit = le) : ie.push(ne = {
							_start: ae,
							_end: ae,
							_level: oe,
							_startsWithPDI: ue,
							_endsWithIsolInit: le
						});
					}
				}
				for (var he = [], ce = 0; ce < ie.length; ce++) {
					var pe = ie[ce];
					if (!pe._startsWithPDI || pe._startsWithPDI && !f.has(pe._start)) {
						for (var fe = [ne = pe], de = void 0; ne && ne._endsWithIsolInit && null != (de = f.get(ne._end));) for (var ye = ce + 1; ye < ie.length; ye++) if (ie[ye]._start === de) {
							fe.push(ne = ie[ye]);
							break;
						}
						for (var me = [], ge = 0; ge < fe.length; ge++) for (var xe = fe[ge], ve = xe._start; ve <= xe._end; ve++) me.push(ve);
						for (var be = p[me[0]], we = y.level, _e = me[0] - 1; _e >= 0; _e--) if (!(r[_e] & o)) {
							we = p[_e];
							break;
						}
						var De = me[me.length - 1], Se = p[De], Ae = y.level;
						if (!(r[De] & n)) {
							for (var Ee = De + 1; Ee <= y.end; Ee++) if (!(r[Ee] & o)) {
								Ae = p[Ee];
								break;
							}
						}
						he.push({
							_seqIndices: me,
							_sosType: Math.max(we, be) % 2 ? D : _,
							_eosType: Math.max(Ae, Se) % 2 ? D : _
						});
					}
				}
				for (var Fe = 0; Fe < he.length; Fe++) {
					var ke = he[Fe], Ie = ke._seqIndices, Te = ke._sosType, Ce = ke._eosType, Be = 1 & p[Ie[0]] ? D : _;
					if (u.get(M)) for (var Me = 0; Me < Ie.length; Me++) {
						var Pe = Ie[Me];
						if (r[Pe] & M) {
							for (var ze = Te, Le = Me - 1; Le >= 0; Le--) if (!(r[Ie[Le]] & o)) {
								ze = r[Ie[Le]];
								break;
							}
							c(Pe, ze & (n | j) ? C : ze);
						}
					}
					if (u.get(S)) for (var Ve = 0; Ve < Ie.length; Ve++) {
						var Oe = Ie[Ve];
						if (r[Oe] & S) for (var Re = Ve - 1; Re >= -1; Re--) {
							var $e = -1 === Re ? Te : r[Ie[Re]];
							if ($e & a) {
								$e === P && c(Oe, F);
								break;
							}
						}
					}
					if (u.get(P)) for (var Ne = 0; Ne < Ie.length; Ne++) {
						var Ue = Ie[Ne];
						r[Ue] & P && c(Ue, D);
					}
					if (u.get(A) || u.get(k)) for (var je = 1; je < Ie.length - 1; je++) {
						var qe = Ie[je];
						if (r[qe] & (A | k)) {
							for (var Ge = 0, Xe = 0, Ye = je - 1; Ye >= 0 && (Ge = r[Ie[Ye]]) & o; Ye--);
							for (var We = je + 1; We < Ie.length && (Xe = r[Ie[We]]) & o; We++);
							Ge === Xe && (r[qe] === A ? Ge === S : Ge & (S | F)) && c(qe, Ge);
						}
					}
					if (u.get(S)) {
						for (var Ze = 0; Ze < Ie.length; Ze++) if (r[Ie[Ze]] & S) {
							for (var He = Ze - 1; He >= 0 && r[Ie[He]] & (E | o); He--) c(Ie[He], S);
							for (Ze++; Ze < Ie.length && r[Ie[Ze]] & (E | o | S); Ze++) r[Ie[Ze]] !== S && c(Ie[Ze], S);
						}
					}
					if (u.get(E) || u.get(A) || u.get(k)) for (var Ke = 0; Ke < Ie.length; Ke++) {
						var Je = Ie[Ke];
						if (r[Je] & (E | A | k)) {
							c(Je, C);
							for (var Qe = Ke - 1; Qe >= 0 && r[Ie[Qe]] & o; Qe--) c(Ie[Qe], C);
							for (var et = Ke + 1; et < Ie.length && r[Ie[et]] & o; et++) c(Ie[et], C);
						}
					}
					if (u.get(S)) for (var tt = 0, rt = Te; tt < Ie.length; tt++) {
						var it = Ie[tt], nt = r[it];
						nt & S ? rt === _ && c(it, _) : nt & a && (rt = nt);
					}
					if (u.get(s)) {
						for (var at = D | S | F, st = at | _, ot = [], lt = [], ut = 0; ut < Ie.length; ut++) if (r[Ie[ut]] & s) {
							var ht = e[Ie[ut]], ct = void 0;
							if (null !== x(ht)) {
								if (!(lt.length < 63)) break;
								lt.push({
									char: ht,
									seqIndex: ut
								});
							} else if (null !== (ct = v(ht))) for (var pt = lt.length - 1; pt >= 0; pt--) {
								var ft = lt[pt].char;
								if (ft === ct || ft === v(b(ht)) || x(b(ft)) === ht) {
									ot.push([lt[pt].seqIndex, ut]), lt.length = pt;
									break;
								}
							}
						}
						ot.sort(function(e, t) {
							return e[0] - t[0];
						});
						for (var dt = 0; dt < ot.length; dt++) {
							for (var yt = ot[dt], mt = yt[0], gt = yt[1], xt = !1, vt = 0, bt = mt + 1; bt < gt; bt++) {
								var wt = Ie[bt];
								if (r[wt] & st) {
									xt = !0;
									var _t = r[wt] & at ? D : _;
									if (_t === Be) {
										vt = _t;
										break;
									}
								}
							}
							if (xt && !vt) {
								vt = Te;
								for (var Dt = mt - 1; Dt >= 0; Dt--) {
									var St = Ie[Dt];
									if (r[St] & st) {
										var At = r[St] & at ? D : _;
										vt = At === Be ? Be : At;
										break;
									}
								}
							}
							if (vt) {
								if (r[Ie[mt]] = r[Ie[gt]] = vt, vt !== Be) {
									for (var Et = mt + 1; Et < Ie.length; Et++) if (!(r[Ie[Et]] & o)) {
										h(e[Ie[Et]]) & M && (r[Ie[Et]] = vt);
										break;
									}
								}
								if (vt !== Be) {
									for (var Ft = gt + 1; Ft < Ie.length; Ft++) if (!(r[Ie[Ft]] & o)) {
										h(e[Ie[Ft]]) & M && (r[Ie[Ft]] = vt);
										break;
									}
								}
							}
						}
						for (var kt = 0; kt < Ie.length; kt++) if (r[Ie[kt]] & s) {
							for (var It = kt, Tt = kt, Ct = Te, Bt = kt - 1; Bt >= 0; Bt--) {
								if (!(r[Ie[Bt]] & o)) {
									Ct = r[Ie[Bt]] & at ? D : _;
									break;
								}
								It = Bt;
							}
							for (var Mt = Ce, Pt = kt + 1; Pt < Ie.length; Pt++) {
								if (!(r[Ie[Pt]] & (s | o))) {
									Mt = r[Ie[Pt]] & at ? D : _;
									break;
								}
								Tt = Pt;
							}
							for (var zt = It; zt <= Tt; zt++) r[Ie[zt]] = Ct === Mt ? Ct : Be;
							kt = Tt;
						}
					}
				}
				for (var Lt = y.start; Lt <= y.end; Lt++) {
					var Vt = p[Lt], Ot = r[Lt];
					if (1 & Vt ? Ot & (_ | S | F) && p[Lt]++ : Ot & D ? p[Lt]++ : Ot & (F | S) && (p[Lt] += 2), Ot & o && (p[Lt] = 0 === Lt ? y.level : p[Lt - 1]), Lt === y.end || h(e[Lt]) & (T | I)) for (var Rt = Lt; Rt >= 0 && h(e[Rt]) & l; Rt--) p[Rt] = y.level;
				}
			}
			return {
				levels: p,
				paragraphs: d
			};
			function $t(t, i) {
				for (var a = t; a < e.length; a++) {
					var s = r[a];
					if (s & (D | P)) return 1;
					if (s & (I | _) || i && s === j) return 0;
					if (s & n) {
						var o = Nt(a);
						a = -1 === o ? e.length : o;
					}
				}
				return 0;
			}
			function Nt(t) {
				for (var i = 1, a = t + 1; a < e.length; a++) {
					var s = r[a];
					if (s & I) break;
					if (s & j) {
						if (0 === --i) return a;
					} else s & n && i++;
				}
				return -1;
			}
		}, e.getMirroredCharacter = q, e.getMirroredCharactersMap = function(e, t, r, i) {
			var n = e.length;
			r = Math.max(0, null == r ? 0 : +r), i = Math.min(n - 1, null == i ? n - 1 : +i);
			for (var a = /* @__PURE__ */ new Map(), s = r; s <= i; s++) if (1 & t[s]) {
				var o = q(e[s]);
				null !== o && a.set(s, o);
			}
			return a;
		}, e.getReorderSegments = G, e.getReorderedIndices = X, e.getReorderedString = function(e, t, r, i) {
			var n = X(e, t, r, i), a = [].concat(e);
			return n.forEach(function(r, i) {
				a[i] = (1 & t.levels[r] ? q(e[r]) : null) || e[r];
			}), a.join("");
		}, e.openingToClosingBracket = x, Object.defineProperty(e, "__esModule", { value: !0 }), e;
	}({}), np = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/, ap = /* @__PURE__ */ new Set([
		"WS",
		"FSI",
		"LRI",
		"RLI",
		"PDI"
	]), sp = /* @__PURE__ */ new Set(["S", "B"]);
	function op(e) {
		return e.level % 2 == 0 ? e.text : ip.getMirroredCharacter(e.text) ?? e.text;
	}
	function lp(e, t) {
		let { levels: r, paragraphs: i } = ip.getEmbeddingLevels(e);
		return function(e, t) {
			let r = t.filter((t) => t > 0 && t < e.length), i = [.../* @__PURE__ */ new Set([
				0,
				...r,
				e.length
			])].sort((e, t) => e - t), n = [];
			for (let a = 0; a + 1 < i.length; a++) n.push([i[a], i[a + 1]]);
			return n;
		}(e, t.concat(i.map((e) => e.start))).map(([t, n]) => function(e, t, r, i, n) {
			let a = function(e, t, r, i) {
				let n = [], a = r;
				for (let s of zc(e.slice(r, i))) n.push({
					index: a,
					text: s,
					level: t[a]
				}), a += s.length;
				return n;
			}(e, t, i, n);
			(function(e, t) {
				let r = !0;
				for (let i = e.length - 1; i >= 0; i--) {
					let n = ip.getBidiCharTypeName(e[i].text[0]);
					sp.has(n) ? (e[i].level = t, r = !0) : r && ap.has(n) ? e[i].level = t : r = !1;
				}
			})(a, r);
			let s = "", o = [];
			for (let l of function(e, t) {
				let r = t, i = Infinity;
				for (let { level: a } of e) a > r && (r = a), (1 | a) < i && (i = 1 | a);
				let n = e.slice();
				for (let a = r; a >= i; a--) for (let e = 0; e < n.length; e++) {
					if (n[e].level < a) continue;
					let t = e;
					for (; t + 1 < n.length && n[t + 1].level >= a;) t++;
					for (let r = e, i = t; r < i; r++, i--) [n[r], n[i]] = [n[i], n[r]];
					e = t;
				}
				return n;
			}(a, r)) {
				if (np.test(l.text)) continue;
				let e = op(l);
				s += e, o.push(...Array(e.length).fill(l.index));
			}
			return {
				text: s,
				sourceIndices: o
			};
		}(e, r, function(e, t) {
			return e.find((e) => t >= e.start && t <= e.end)?.level ?? 0;
		}(i, t), t, n));
	}
	const up = 4294967296, hp = 1 / up, cp = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8");
	var pp = class {
		constructor(e) {
			this.buf = ArrayBuffer.isView(e) ? e : new Uint8Array(e), this.dataView = new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.pos = 0, this.type = 0, this._valueStart = -1, this.length = this.buf.length;
		}
		readFields(e, t, r = this.length) {
			let i;
			for (; i = this.nextField(r);) e(i, t, this);
			return t;
		}
		readMessage(e, t) {
			return this.readFields(e, t, this.readVarint() + this.pos);
		}
		readFixed32() {
			let e = this.dataView.getUint32(this.pos, !0);
			return this.pos += 4, e;
		}
		readSFixed32() {
			let e = this.dataView.getInt32(this.pos, !0);
			return this.pos += 4, e;
		}
		readFixed64() {
			let e = this.dataView.getUint32(this.pos, !0) + this.dataView.getUint32(this.pos + 4, !0) * up;
			return this.pos += 8, e;
		}
		readSFixed64() {
			let e = this.dataView.getUint32(this.pos, !0) + this.dataView.getInt32(this.pos + 4, !0) * up;
			return this.pos += 8, e;
		}
		readFloat() {
			let e = this.dataView.getFloat32(this.pos, !0);
			return this.pos += 4, e;
		}
		readDouble() {
			let e = this.dataView.getFloat64(this.pos, !0);
			return this.pos += 8, e;
		}
		readVarint(e) {
			let t = this.buf, r = t[this.pos++];
			if (r < 128) return r;
			let i, n = 127 & r;
			return i = t[this.pos++], n |= (127 & i) << 7, i < 128 || (i = t[this.pos++], n |= (127 & i) << 14, i < 128) || (i = t[this.pos++], n |= (127 & i) << 21, i < 128) ? n : (i = t[this.pos], n |= (15 & i) << 28, function(e, t, r) {
				let i, n, a = r.buf;
				if (n = a[r.pos++], i = (112 & n) >> 4, n < 128 || (n = a[r.pos++], i |= (127 & n) << 3, n < 128) || (n = a[r.pos++], i |= (127 & n) << 10, n < 128) || (n = a[r.pos++], i |= (127 & n) << 17, n < 128) || (n = a[r.pos++], i |= (127 & n) << 24, n < 128) || (n = a[r.pos++], i |= (1 & n) << 31, n < 128)) return function(e, t, r) {
					return r ? 4294967296 * t + (e >>> 0) : 4294967296 * (t >>> 0) + (e >>> 0);
				}(e, i, t);
				throw Error("Expected varint not more than 10 bytes");
			}(n, e, this));
		}
		readSVarint() {
			let e = this.readVarint();
			return e % 2 == 1 ? (e + 1) / -2 : e / 2;
		}
		readBoolean() {
			return !!this.readVarint();
		}
		readString() {
			let e = this.readVarint() + this.pos, t = this.pos;
			return this.pos = e, e - t >= 12 && cp ? cp.decode(this.buf.subarray(t, e)) : function(e, t, r) {
				let i = "", n = t;
				for (; n < r;) {
					let t, a, s, o = e[n], l = null, u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
					if (n + u > r) break;
					1 === u ? o < 128 && (l = o) : 2 === u ? (t = e[n + 1], 128 == (192 & t) && (l = (31 & o) << 6 | 63 & t, l <= 127 && (l = null))) : 3 === u ? (t = e[n + 1], a = e[n + 2], 128 == (192 & t) && 128 == (192 & a) && (l = (15 & o) << 12 | (63 & t) << 6 | 63 & a, (l <= 2047 || l >= 55296 && l <= 57343) && (l = null))) : 4 === u && (t = e[n + 1], a = e[n + 2], s = e[n + 3], 128 == (192 & t) && 128 == (192 & a) && 128 == (192 & s) && (l = (15 & o) << 18 | (63 & t) << 12 | (63 & a) << 6 | 63 & s, (l <= 65535 || l >= 1114112) && (l = null))), null === l ? (l = 65533, u = 1) : l > 65535 && (l -= 65536, i += String.fromCharCode(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), i += String.fromCharCode(l), n += u;
				}
				return i;
			}(this.buf, t, e);
		}
		readBytes() {
			let e = this.readVarint() + this.pos, t = this.buf.subarray(this.pos, e);
			return this.pos = e, t;
		}
		readPackedVarint(e = [], t) {
			let r = this.readPackedEnd();
			for (; this.pos < r;) e.push(this.readVarint(t));
			return e;
		}
		readPackedSVarint(e = []) {
			let t = this.readPackedEnd();
			for (; this.pos < t;) e.push(this.readSVarint());
			return e;
		}
		readPackedBoolean(e = []) {
			let t = this.readPackedEnd();
			for (; this.pos < t;) e.push(this.readBoolean());
			return e;
		}
		readPackedFloat(e = []) {
			let t = this.readPackedEnd();
			for (; this.pos < t;) e.push(this.readFloat());
			return e;
		}
		readPackedDouble(e = []) {
			let t = this.readPackedEnd();
			for (; this.pos < t;) e.push(this.readDouble());
			return e;
		}
		readPackedFixed32(e = []) {
			let t = this.readPackedEnd();
			for (; this.pos < t;) e.push(this.readFixed32());
			return e;
		}
		readPackedSFixed32(e = []) {
			let t = this.readPackedEnd();
			for (; this.pos < t;) e.push(this.readSFixed32());
			return e;
		}
		readPackedFixed64(e = []) {
			let t = this.readPackedEnd();
			for (; this.pos < t;) e.push(this.readFixed64());
			return e;
		}
		readPackedSFixed64(e = []) {
			let t = this.readPackedEnd();
			for (; this.pos < t;) e.push(this.readSFixed64());
			return e;
		}
		readPackedEnd() {
			return 2 === this.type ? this.readVarint() + this.pos : this.pos + 1;
		}
		nextField(e = this.length) {
			if (this.pos === this._valueStart && this.skip(this.type), this.pos >= e) return 0;
			let t = this.readVarint();
			return this.type = 7 & t, this._valueStart = this.pos, t >>> 3;
		}
		skip(e) {
			let t = 7 & e;
			if (0 === t) for (; this.buf[this.pos++] > 127;);
			else if (2 === t) this.pos = this.readVarint() + this.pos;
			else if (5 === t) this.pos += 4;
			else {
				if (1 !== t) throw Error(`Unimplemented type: ${t}`);
				this.pos += 8;
			}
		}
	}, fp = class {
		constructor(e = /* @__PURE__ */ new Uint8Array(16)) {
			this.buf = ArrayBuffer.isView(e) ? e : new Uint8Array(e), this.dataView = new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.pos = 0, this.length = this.buf.length;
		}
		writeTag(e, t) {
			this.writeVarint(e << 3 | t);
		}
		realloc(e) {
			let t = this.length || 16;
			for (; t < this.pos + e;) t *= 2;
			if (t !== this.length) {
				let e = new Uint8Array(t);
				e.set(this.buf), this.buf = e, this.dataView = new DataView(e.buffer), this.length = t;
			}
		}
		finish() {
			return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length);
		}
		writeFixed32(e) {
			this.realloc(4), this.dataView.setInt32(this.pos, e, !0), this.pos += 4;
		}
		writeSFixed32(e) {
			this.realloc(4), this.dataView.setInt32(this.pos, e, !0), this.pos += 4;
		}
		writeFixed64(e) {
			this.realloc(8), this.dataView.setInt32(this.pos, -1 & e, !0), this.dataView.setInt32(this.pos + 4, Math.floor(e * hp), !0), this.pos += 8;
		}
		writeSFixed64(e) {
			this.realloc(8), this.dataView.setInt32(this.pos, -1 & e, !0), this.dataView.setInt32(this.pos + 4, Math.floor(e * hp), !0), this.pos += 8;
		}
		writeVarint(e) {
			(e = +e || 0) >= 0 && e < 128 ? (this.pos >= this.length && this.realloc(1), this.buf[this.pos++] = e) : e > 268435455 || e < 0 ? function(e, t) {
				let r, i;
				if (e >= 0 ? (r = e % 4294967296 | 0, i = e / 4294967296 | 0) : (r = ~(-e % 4294967296), i = ~(-e / 4294967296), 4294967295 ^ r ? r = r + 1 | 0 : (r = 0, i = i + 1 | 0)), e >= 0x10000000000000000 || e < -0x10000000000000000) throw Error("Given varint doesn't fit into 10 bytes");
				t.realloc(10), function(e, t, r) {
					r.buf[r.pos++] = 127 & e | 128, e >>>= 7, r.buf[r.pos++] = 127 & e | 128, e >>>= 7, r.buf[r.pos++] = 127 & e | 128, e >>>= 7, r.buf[r.pos++] = 127 & e | 128, e >>>= 7, r.buf[r.pos] = 127 & e;
				}(r, 0, t), function(e, t) {
					let r = (7 & e) << 4;
					t.buf[t.pos++] |= r | ((e >>>= 3) ? 128 : 0), e && (t.buf[t.pos++] = 127 & e | ((e >>>= 7) ? 128 : 0), e && (t.buf[t.pos++] = 127 & e | ((e >>>= 7) ? 128 : 0), e && (t.buf[t.pos++] = 127 & e | ((e >>>= 7) ? 128 : 0), e && (t.buf[t.pos++] = 127 & e | ((e >>>= 7) ? 128 : 0), e && (t.buf[t.pos++] = 127 & e)))));
				}(i, t);
			}(e, this) : (this.realloc(4), this.buf[this.pos++] = 127 & e | (e > 127 ? 128 : 0), !(e <= 127) && (this.buf[this.pos++] = 127 & (e >>>= 7) | (e > 127 ? 128 : 0), !(e <= 127) && (this.buf[this.pos++] = 127 & (e >>>= 7) | (e > 127 ? 128 : 0), !(e <= 127) && (this.buf[this.pos++] = e >>> 7 & 127))));
		}
		writeSVarint(e) {
			this.writeVarint(e < 0 ? 2 * -e - 1 : 2 * e);
		}
		writeBoolean(e) {
			this.writeVarint(+e);
		}
		writeString(e) {
			e = String(e), this.realloc(4 * e.length), this.pos++;
			let t = this.pos;
			this.pos = function(e, t, r) {
				for (let i, n, a = 0; a < t.length; a++) {
					if (i = t.charCodeAt(a), i > 55295 && i < 57344) {
						if (!n) {
							i > 56319 || a + 1 === t.length ? (e[r++] = 239, e[r++] = 191, e[r++] = 189) : n = i;
							continue;
						}
						if (i < 56320) {
							e[r++] = 239, e[r++] = 191, e[r++] = 189, n = i;
							continue;
						}
						i = n - 55296 << 10 | i - 56320 | 65536, n = null;
					} else n && (e[r++] = 239, e[r++] = 191, e[r++] = 189, n = null);
					i < 128 ? e[r++] = i : (i < 2048 ? e[r++] = i >> 6 | 192 : (i < 65536 ? e[r++] = i >> 12 | 224 : (e[r++] = i >> 18 | 240, e[r++] = i >> 12 & 63 | 128), e[r++] = i >> 6 & 63 | 128), e[r++] = 63 & i | 128);
				}
				return r;
			}(this.buf, e, this.pos);
			let r = this.pos - t;
			r >= 128 && dp(t, r, this), this.pos = t - 1, this.writeVarint(r), this.pos += r;
		}
		writeFloat(e) {
			this.realloc(4), this.dataView.setFloat32(this.pos, e, !0), this.pos += 4;
		}
		writeDouble(e) {
			this.realloc(8), this.dataView.setFloat64(this.pos, e, !0), this.pos += 8;
		}
		writeBytes(e) {
			let t = e.length;
			this.writeVarint(t), this.realloc(t), this.buf.set(e, this.pos), this.pos += t;
		}
		writeRawMessage(e, t) {
			this.pos++;
			let r = this.pos;
			e(t, this);
			let i = this.pos - r;
			i >= 128 && dp(r, i, this), this.pos = r - 1, this.writeVarint(i), this.pos += i;
		}
		writeMessage(e, t, r) {
			this.writeTag(e, 2), this.writeRawMessage(t, r);
		}
		writePackedVarint(e, t) {
			t.length && this.writeMessage(e, yp, t);
		}
		writePackedSVarint(e, t) {
			t.length && this.writeMessage(e, mp, t);
		}
		writePackedBoolean(e, t) {
			t.length && this.writeMessage(e, vp, t);
		}
		writePackedFloat(e, t) {
			t.length && this.writeMessage(e, gp, t);
		}
		writePackedDouble(e, t) {
			t.length && this.writeMessage(e, xp, t);
		}
		writePackedFixed32(e, t) {
			t.length && this.writeMessage(e, bp, t);
		}
		writePackedSFixed32(e, t) {
			t.length && this.writeMessage(e, wp, t);
		}
		writePackedFixed64(e, t) {
			t.length && this.writeMessage(e, _p, t);
		}
		writePackedSFixed64(e, t) {
			t.length && this.writeMessage(e, Dp, t);
		}
		writeBytesField(e, t) {
			this.writeTag(e, 2), this.writeBytes(t);
		}
		writeFixed32Field(e, t) {
			this.writeTag(e, 5), this.writeFixed32(t);
		}
		writeSFixed32Field(e, t) {
			this.writeTag(e, 5), this.writeSFixed32(t);
		}
		writeFixed64Field(e, t) {
			this.writeTag(e, 1), this.writeFixed64(t);
		}
		writeSFixed64Field(e, t) {
			this.writeTag(e, 1), this.writeSFixed64(t);
		}
		writeVarintField(e, t) {
			this.writeTag(e, 0), this.writeVarint(t);
		}
		writeSVarintField(e, t) {
			this.writeTag(e, 0), this.writeSVarint(t);
		}
		writeStringField(e, t) {
			this.writeTag(e, 2), this.writeString(t);
		}
		writeFloatField(e, t) {
			this.writeTag(e, 5), this.writeFloat(t);
		}
		writeDoubleField(e, t) {
			this.writeTag(e, 1), this.writeDouble(t);
		}
		writeBooleanField(e, t) {
			this.writeVarintField(e, +t);
		}
	};
	function dp(e, t, r) {
		let i = t <= 16383 ? 1 : t <= 2097151 ? 2 : t <= 268435455 ? 3 : Math.floor(Math.log(t) / (7 * Math.LN2));
		r.realloc(i), r.buf.copyWithin(e + i, e, r.pos);
	}
	function yp(e, t) {
		let r = e.length, i = t.buf, n = t.pos, a = t.length;
		for (let s = 0; s < r; s++) {
			let r = e[s];
			if (r < 0 || n + 10 > a) t.pos = n, t.writeVarint(r), i = t.buf, n = t.pos, a = t.length;
			else {
				for (; r > 127;) i[n++] = r % 128 | 128, r = Math.floor(r / 128);
				i[n++] = r;
			}
		}
		t.pos = n;
	}
	function mp(e, t) {
		for (let r = 0; r < e.length; r++) t.writeSVarint(e[r]);
	}
	function gp(e, t) {
		for (let r = 0; r < e.length; r++) t.writeFloat(e[r]);
	}
	function xp(e, t) {
		for (let r = 0; r < e.length; r++) t.writeDouble(e[r]);
	}
	function vp(e, t) {
		for (let r = 0; r < e.length; r++) t.writeBoolean(e[r]);
	}
	function bp(e, t) {
		for (let r = 0; r < e.length; r++) t.writeFixed32(e[r]);
	}
	function wp(e, t) {
		for (let r = 0; r < e.length; r++) t.writeSFixed32(e[r]);
	}
	function _p(e, t) {
		for (let r = 0; r < e.length; r++) t.writeFixed64(e[r]);
	}
	function Dp(e, t) {
		for (let r = 0; r < e.length; r++) t.writeSFixed64(e[r]);
	}
	function Sp(e) {
		let t = 0, r = 0;
		for (let s of e) t += s.w * s.h, r = Math.max(r, s.w);
		e.sort((e, t) => t.h - e.h);
		let i = [{
			x: 0,
			y: 0,
			w: Math.max(Math.ceil(Math.sqrt(t / .95)), r),
			h: Infinity
		}], n = 0, a = 0;
		for (let s of e) for (let e = i.length - 1; e >= 0; e--) {
			let t = i[e];
			if (!(s.w > t.w || s.h > t.h)) {
				if (s.x = t.x, s.y = t.y, a = Math.max(a, s.y + s.h), n = Math.max(n, s.x + s.w), s.w === t.w && s.h === t.h) {
					let t = i.pop();
					t && e < i.length && (i[e] = t);
				} else s.h === t.h ? (t.x += s.w, t.w -= s.w) : s.w === t.w ? (t.y += s.h, t.h -= s.h) : (i.push({
					x: t.x + s.w,
					y: t.y,
					w: t.w - s.w,
					h: s.h
				}), t.y += s.h, t.h -= s.h);
				break;
			}
		}
		return {
			w: n,
			h: a,
			fill: t / (n * a) || 0
		};
	}
	var Ap = class {
		constructor(e, { pixelRatio: t, version: r, isWebGLImage: i = !1, stretchX: n, stretchY: a, content: s, textFitWidth: o, textFitHeight: l }) {
			this.paddedRect = e, this.pixelRatio = t, this.stretchX = n, this.stretchY = a, this.content = s, this.version = r, this.needsFirstWebGLRender = i, this.textFitWidth = o, this.textFitHeight = l;
		}
		get tl() {
			return [this.paddedRect.x + 1, this.paddedRect.y + 1];
		}
		get br() {
			return [this.paddedRect.x + this.paddedRect.w - 1, this.paddedRect.y + this.paddedRect.h - 1];
		}
		get tlbr() {
			return this.tl.concat(this.br);
		}
		get displaySize() {
			return [(this.paddedRect.w - 2) / this.pixelRatio, (this.paddedRect.h - 2) / this.pixelRatio];
		}
	}, Ep = class {
		constructor(e, t) {
			let r = {}, i = {};
			this.haveRenderCallbacks = [], this.patchedUpdateVersion = -1;
			let n = [];
			this.addImages(e, r, n), this.addImages(t, i, n);
			let { w: a, h: s } = Sp(n), o = new Fo({
				width: a || 1,
				height: s || 1
			});
			for (let l in e) {
				let t = e[l];
				if (t.isWebGLImage) continue;
				let i = r[l].paddedRect;
				Fo.copy(t.data, o, {
					x: 0,
					y: 0
				}, {
					x: i.x + 1,
					y: i.y + 1
				}, t.data);
			}
			for (let l in t) {
				let e = t[l], r = i[l].paddedRect, n = r.x + 1, a = r.y + 1, s = e.data.width, u = e.data.height;
				Fo.copy(e.data, o, {
					x: 0,
					y: 0
				}, {
					x: n,
					y: a
				}, e.data), Fo.copy(e.data, o, {
					x: 0,
					y: u - 1
				}, {
					x: n,
					y: a - 1
				}, {
					width: s,
					height: 1
				}), Fo.copy(e.data, o, {
					x: 0,
					y: 0
				}, {
					x: n,
					y: a + u
				}, {
					width: s,
					height: 1
				}), Fo.copy(e.data, o, {
					x: s - 1,
					y: 0
				}, {
					x: n - 1,
					y: a
				}, {
					width: 1,
					height: u
				}), Fo.copy(e.data, o, {
					x: 0,
					y: 0
				}, {
					x: n + s,
					y: a
				}, {
					width: 1,
					height: u
				});
			}
			this.image = o, this.iconPositions = r, this.patternPositions = i;
		}
		addImages(e, t, r) {
			for (let i in e) {
				let n = e[i], a = {
					x: 0,
					y: 0,
					w: n.data.width + 2,
					h: n.data.height + 2
				};
				r.push(a), t[i] = new Ap(a, n), n.hasRenderCallback && this.haveRenderCallbacks.push(i);
			}
		}
		patchUpdatedImages(e, t) {
			if (e.dispatchRenderCallbacks(this.haveRenderCallbacks), this.patchedUpdateVersion !== e.updateVersion) {
				this.patchedUpdateVersion = e.updateVersion;
				for (let r in this.iconPositions) this.patchUpdatedImage(this.iconPositions[r], e.getImage(r), t);
				for (let r in this.patternPositions) this.patchUpdatedImage(this.patternPositions[r], e.getImage(r), t);
			}
		}
		patchUpdatedImage(e, t, r) {
			if (!e || !t || !e.needsFirstWebGLRender && e.version === t.version) return;
			e.needsFirstWebGLRender = !1, e.version = t.version;
			let [i, n] = e.tl, a = t.userImage?.data;
			if (!function(e) {
				return "function" == typeof e?.renderWithWebGL;
			}(a)) return void r.update(t.data, void 0, {
				x: i,
				y: n
			});
			let { width: s, height: o } = t.data;
			r.context.setCustomLayerDefaults(), a.renderWithWebGL({
				gl: r.context.gl,
				texture: r.texture,
				x: i,
				y: n,
				width: s,
				height: o
			}), r.context.setDirty();
		}
	};
	Dn("ImagePosition", Ap), Dn("ImageAtlas", Ep);
	var Fp = function(e) {
		return e[e.none = 0] = "none", e[e.horizontal = 1] = "horizontal", e[e.vertical = 2] = "vertical", e[e.horizontalOnly = 3] = "horizontalOnly", e;
	}(Fp || {});
	const kp = /^\p{gc=M}$/u;
	function Ip(e, t, r) {
		let i = new rp(e.join(""), t, []), n = 0;
		for (let a of i.graphemes()) i.sectionIndex.push(r[n] ?? 0), n += [...a].length;
		return i;
	}
	function Tp(e) {
		let t = [], r = 0;
		for (let i of e) t.push(r), r += i.length;
		return t;
	}
	function Cp(e, t, r) {
		let i = [...e], n = Tp(i), a = function(e) {
			let t = [], r = 0;
			for (; r < e.length;) {
				if (!kp.test(e[r])) {
					t.push(r), r++;
					continue;
				}
				let i = r;
				for (; i < e.length && kp.test(e[i]);) i++;
				let n = e[i];
				if (void 0 !== n && Gc(n.codePointAt(0))) {
					t.push(i);
					for (let e = i - 1; e >= r; e--) t.push(e);
					r = i + 1;
				} else {
					for (let e = r; e < i; e++) t.push(e);
					r = i;
				}
			}
			return t;
		}(i);
		return Ip(a.map((e) => i[e]), t, a.map((e) => r[n[e]] ?? 0));
	}
	function Bp(e, t, r, i, n, a, s, o, l, u, h, c, p, f, d) {
		let y = rp.fromFeature(e, n, 2 === c, t), m = y.determineLineBreaks(u, a, t, i, f), g = Xc(y.text) ? function(e, t) {
			let r = t.map((t) => e.toCodeUnitIndex(t)), i = hc.isParsed() ? hc : null;
			if (1 === e.sections.length) return i ? i.processBidirectionalText(e.toString(), r).map((t) => Cp(t, e.sections, [...t].map(() => 0))) : function(e, t) {
				return lp(e, t).map((e) => e.text);
			}(e.toString(), r).map((t) => Ip([...t], e.sections, [...t].map(() => 0)));
			let n = function(e) {
				let t = [], r = 0;
				for (let i of e.graphemes()) t.push(...Array(i.length).fill(e.sectionIndex[r])), r++;
				return t;
			}(e);
			return i ? i.processStyledBidirectionalText(e.text, n, r).map(([t, r]) => Cp(t, e.sections, r)) : function(e, t, r) {
				return lp(e, r).map((e) => [e.text, e.sourceIndices.map((e) => t[e] ?? 0)]);
			}(e.text, n, r).map(([t, r]) => {
				let i = [...t];
				return Ip(i, e.sections, Tp(i).map((e) => r[e] ?? 0));
			});
		}(y, m) : function(e, t) {
			let r = [], i = 0;
			for (let n of t) r.push(e.substring(i, n)), i = n;
			return i < e.length() && r.push(e.substring(i, e.length())), r;
		}(y, m), x = [], v = {
			positionedLines: x,
			text: y.toString(),
			top: h[1],
			bottom: h[1],
			left: h[0],
			right: h[0],
			writingMode: c,
			iconsInText: !1,
			verticalizable: !1
		};
		return function(e, t, r, i, n, a, s, o, l, u, h, c) {
			let p = 0, f = 0, d = 0, y = 0, m = "right" === o ? 1 : "left" === o ? 0 : .5, g = 24 / c, x = 0;
			for (let w of n) {
				w.trim();
				let n = w.getMaxScale(), s = {
					positionedGlyphs: [],
					lineOffset: 0
				};
				e.positionedLines[x] = s;
				let o = s.positionedGlyphs, c = 0;
				if (!w.length()) {
					f += a, ++x;
					continue;
				}
				let v = Pp(i, w, g), b = 2 !== l || h ? null : jp(w, t), _ = w.graphemes();
				for (let a = 0; a < _.length; a++) {
					let s = w.getSection(a), d = _[a], y = d.codePointAt(0), m = b ? b[a] : Lp(l, h, y), x = "fontStack" in s && Vc(d) && !t[s.fontStack]?.default?.[d] ? [...d] : [d];
					for (let l of x) {
						let h, d = {
							glyph: l.codePointAt(0),
							grapheme: l,
							imageName: null,
							x: p,
							y: f + -17,
							vertical: m,
							scale: 1,
							fontStack: "",
							sectionIndex: w.getSectionIndex(a),
							metrics: null,
							rect: null
						};
						if ("fontStack" in s) {
							if (h = qp(s, l, m, v, t, r), !h) continue;
							d.fontStack = s.fontStack;
						} else {
							if (e.iconsInText = !0, s.scale *= g, h = Gp(s, m, n, v, i), !h) continue;
							c = Math.max(c, h.imageOffset), d.imageName = s.imageName;
						}
						let { rect: y, metrics: x, baselineOffset: b } = h;
						d.y += b, d.scale = s.scale, d.metrics = x, d.rect = y, o.push(d), m ? (e.verticalizable = !0, p += ("imageName" in s ? x.advance : 24) * s.scale + u) : p += x.advance * s.scale + u;
					}
				}
				if (0 !== o.length) {
					let e = p - u;
					d = Math.max(e, d), Xp(o, 0, o.length - 1, m);
				}
				p = 0;
				let D = 24 * (n - 1);
				s.lineOffset = Math.max(c, D);
				let S = a * n + c;
				f += S, y = Math.max(S, y), ++x;
			}
			let { horizontalAlign: v, verticalAlign: b } = Mp(s);
			(function(e, t, r, i, n, a, s, o, l) {
				let u = (t - r) * n, h = 0;
				h = a === s ? -i * l * s + .5 * s : -o * i - -17;
				for (let c of e) for (let e of c.positionedGlyphs) e.x += u, e.y += h;
			})(e.positionedLines, m, v, b, d, y, a, f, n.length), e.top += -b * f, e.bottom = e.top + f, e.left += -v * d, e.right = e.left + d;
		}(v, t, r, i, g, s, o, l, c, u, p, d), !function(e) {
			for (let t of e) if (0 !== t.positionedGlyphs.length) return !1;
			return !0;
		}(x) && v;
	}
	function Mp(e) {
		let t = .5, r = .5;
		switch (e) {
			case "right":
			case "top-right":
			case "bottom-right":
				t = 1;
				break;
			case "left":
			case "top-left":
			case "bottom-left": t = 0;
		}
		switch (e) {
			case "bottom":
			case "bottom-right":
			case "bottom-left":
				r = 1;
				break;
			case "top":
			case "top-right":
			case "top-left": r = 0;
		}
		return {
			horizontalAlign: t,
			verticalAlign: r
		};
	}
	function Pp(e, t, r) {
		let i = 24 * t.getMaxScale(), { maxImageWidth: n, maxImageHeight: a } = t.getMaxImageSize(e), s = Math.max(i, a * r);
		return {
			verticalLineContentWidth: Math.max(i, n * r),
			horizontalLineContentHeight: s
		};
	}
	function zp(e) {
		switch (e) {
			case "top": return 0;
			case "center": return .5;
			default: return 1;
		}
	}
	function Lp(e, t, r) {
		return !(1 === e || !t && !pc(r) || t && (Oc(r) || qc(r)));
	}
	function Vp(e) {
		return /\p{Nd}/u.test(String.fromCodePoint(e));
	}
	function Op(e) {
		return /\p{Lu}/u.test(String.fromCodePoint(e));
	}
	function Rp(e) {
		let t = e.some(Vp) && e.every((e) => Vp(e) || Rc(e)), r = e.length <= 3 && e.every((e) => Op(e) || Vp(e));
		return t || r;
	}
	function $p(e) {
		return (Vp(e) || Op(e)) && !qc(e);
	}
	function Np(e, t) {
		return t ? Lp(2, !0, e) : !jc(e) || $p(e) || Rc(e);
	}
	function Up(e, t, r) {
		for (; t >= 0 && t < e.length && Oc(e[t]);) t += r;
		let i = [];
		for (; t >= 0 && t < e.length && !pc(e[t]) && !Oc(e[t]);) i.push(e[t]), t += r;
		return !Rp(i) && !i.every(Rc) && i.some(jc);
	}
	function jp(e, t) {
		let r = e.graphemes().slice(), i = r.map((e) => e.codePointAt(0)), n = r.map((r, i) => {
			let n = e.getSection(i);
			return "fontStack" in n && !!t[n.fontStack]?.vertical?.[r];
		}), a = i.map(pc), s = (t) => !a[t] && !Oc(i[t]) && !("imageName" in e.getSection(t));
		for (let o = 0; o < i.length; o++) {
			if (!s(o)) continue;
			let e = o;
			for (; e + 1 < i.length && s(e + 1);) e++;
			let t = i.slice(o, e + 1), r = Rp(t), l = t.every(Rc), u = l && (Up(i, o - 1, -1) || Up(i, e + 1, 1)), h = !r && t.some(jc);
			for (let s = o; s <= e; s++) a[s] = r && $p(i[s]) || n[s] && !u && (l || !h && !jc(i[s]));
			o = e;
		}
		if (n.some((e, t) => e && !a[t])) {
			let r = e.text;
			if (e.verticalizePunctuation(t, a), e.text !== r) return jp(e, t);
		}
		return function(e, t, r) {
			let i = !1;
			for (let n = 0; n < e.length; n++) {
				if (t[n]) continue;
				let a = Yc[e[n]];
				if (a && (0 === n || t[n - 1]) && (n === e.length - 1 || t[n + 1])) {
					if (t[n] = !0, r[n]) continue;
					e[n] = a, i = !0;
				}
			}
			return i;
		}(r, a, n) && (e.text = r.join(""), e.cachedGraphemes = r), a;
	}
	function qp(e, t, r, i, n, a) {
		let s, o = r && n[e.fontStack]?.vertical?.[t] ? "vertical" : "default", h = function(e, t) {
			return e?.rect ? e : t ? {
				rect: null,
				metrics: t.metrics
			} : null;
		}(a[e.fontStack]?.[o]?.[t], n[e.fontStack]?.[o]?.[t]);
		if (null === h) return null;
		if (r) s = i.verticalLineContentWidth - 24 * e.scale;
		else {
			let t = zp(e.verticalAlign);
			s = (i.horizontalLineContentHeight - 24 * e.scale) * t;
		}
		return {
			rect: h.rect,
			metrics: h.metrics,
			baselineOffset: s
		};
	}
	function Gp(e, t, r, i, n) {
		let a = n[e.imageName];
		if (!a) return null;
		let s, o = a.paddedRect, l = a.displaySize, u = {
			width: l[0],
			height: l[1],
			left: 1,
			top: -3,
			advance: t ? l[1] : l[0]
		};
		if (t) s = i.verticalLineContentWidth - l[1] * e.scale;
		else {
			let t = zp(e.verticalAlign);
			s = (i.horizontalLineContentHeight - l[1] * e.scale) * t;
		}
		return {
			rect: o,
			metrics: u,
			baselineOffset: s,
			imageOffset: (t ? l[0] : l[1]) * e.scale - 24 * r
		};
	}
	function Xp(e, t, r, i) {
		if (0 === i) return;
		let n = e[r], a = n.metrics.advance * n.scale, s = (e[r].x + a) * i;
		for (let o = t; o <= r; o++) e[o].x -= s;
	}
	function Yp(e, t, r) {
		let { horizontalAlign: i, verticalAlign: n } = Mp(r), a = t[0], s = t[1], o = a - e.displaySize[0] * i, l = o + e.displaySize[0], u = s - e.displaySize[1] * n;
		return {
			image: e,
			top: u,
			bottom: u + e.displaySize[1],
			left: o,
			right: l
		};
	}
	function Wp(e) {
		let t = e.left, r = e.top, i = e.right - t, n = e.bottom - r, a = e.image.content[2] - e.image.content[0], s = e.image.content[3] - e.image.content[1], o = e.image.textFitWidth ?? "stretchOrShrink", l = e.image.textFitHeight ?? "stretchOrShrink", u = a / s;
		if ("proportional" === l) {
			if ("stretchOnly" === o && i / n < u || "proportional" === o) {
				let e = Math.ceil(n * u);
				t *= e / i, i = e;
			}
		} else if ("proportional" === o && "stretchOnly" === l && 0 !== u && i / n > u) {
			let e = Math.ceil(i / u);
			r *= e / n, n = e;
		}
		return {
			x1: t,
			y1: r,
			x2: t + i,
			y2: r + n
		};
	}
	function Zp(e, t, r, i, n, a) {
		let s, o = e.image;
		if (o.content) {
			let e = o.content, t = o.pixelRatio || 1;
			s = [
				e[0] / t,
				e[1] / t,
				o.displaySize[0] - e[2] / t,
				o.displaySize[1] - e[3] / t
			];
		}
		let l, u, h, c, p = t.left * a, f = t.right * a;
		"width" === r || "both" === r ? (c = n[0] + p - i[3], u = n[0] + f + i[1]) : (c = n[0] + (p + f - o.displaySize[0]) / 2, u = c + o.displaySize[0]);
		let d = t.top * a, y = t.bottom * a;
		return "height" === r || "both" === r ? (l = n[1] + d - i[0], h = n[1] + y + i[2]) : (l = n[1] + (d + y - o.displaySize[1]) / 2, h = l + o.displaySize[1]), {
			image: o,
			top: l,
			right: u,
			bottom: h,
			left: c,
			collisionPadding: s
		};
	}
	function Hp(e, t) {
		let { expression: r } = t;
		if ("constant" === r.kind) return {
			kind: "constant",
			layoutSize: r.evaluate(new Rn(e + 1))
		};
		if ("source" === r.kind) return { kind: "source" };
		if ("composite" === r.kind) {
			let { minZoom: t, maxZoom: i } = function(e, t) {
				let r = 0;
				for (; r < e.length && e[r] <= t;) r++;
				r = Math.max(0, r - 1);
				let i = r;
				for (; i < e.length && e[i] < t + 1;) i++;
				return i = Math.min(e.length - 1, i), {
					minZoom: e[r],
					maxZoom: e[i]
				};
			}(r.zoomStops, e);
			return {
				kind: "composite",
				minZoom: t,
				maxZoom: i,
				interpolationType: r.interpolationType
			};
		}
		{
			let t = function(e) {
				return e.zoomStops.map((t) => e.evaluate(new Rn(t === -Infinity ? e.zoomStops[1] - 1 : t)));
			}(r), i = r.evaluate(new Rn(e + 1));
			return {
				kind: "camera",
				zoomStops: r.zoomStops,
				sizes: t,
				layoutSize: i,
				interpolationType: r.interpolationType
			};
		}
	}
	var Kp = class e extends f {
		constructor(e, t, r, i) {
			super(e, t), this.angle = r, void 0 !== i && (this.segment = i);
		}
		clone() {
			return new e(this.x, this.y, this.angle, this.segment);
		}
	};
	function Jp(e, t, r, i, n) {
		if (void 0 === t.segment || 0 === r) return !0;
		let a = t, s = t.segment + 1, o = 0;
		for (; o > -r / 2;) {
			if (s--, s < 0) return !1;
			o -= e[s].dist(a), a = e[s];
		}
		o += e[s].dist(e[s + 1]), s++;
		let l = [], u = 0;
		for (; o < r / 2;) {
			let t = e[s - 1], r = e[s], a = e[s + 1];
			if (!a) return !1;
			let h = t.angleTo(r) - r.angleTo(a);
			for (h = Math.abs((h + 3 * Math.PI) % (2 * Math.PI) - Math.PI), l.push({
				distance: o,
				angleDelta: h
			}), u += h; o - l[0].distance > i;) u -= l.shift().angleDelta;
			if (u > n) return !1;
			s++, o += r.dist(a);
		}
		return !0;
	}
	function Qp(e) {
		let t = 0;
		for (let r = 0; r < e.length - 1; r++) t += e[r].dist(e[r + 1]);
		return t;
	}
	function ef(e, t, r) {
		return e ? .6 * t * r : 0;
	}
	function tf(e, t) {
		return Math.max(e ? e.right - e.left : 0, t ? t.right - t.left : 0);
	}
	function rf(e, t, r, i, n, a) {
		let s = ef(r, n, a), o = tf(r, i) * a, l = 0, u = Qp(e) / 2;
		for (let h = 0; h < e.length - 1; h++) {
			let r = e[h], i = e[h + 1], n = r.dist(i);
			if (l + n > u) {
				let a = (u - l) / n, c = new Kp(nt.number(r.x, i.x, a), nt.number(r.y, i.y, a), i.angleTo(r), h);
				return c._round(), !s || Jp(e, c, o, s, t) ? c : void 0;
			}
			l += n;
		}
	}
	function nf(e, t, r, i, n, a, s, o, l) {
		let u = ef(i, a, s), h = tf(i, n), c = h * s, p = 0 === e[0].x || e[0].x === l || 0 === e[0].y || e[0].y === l;
		return t - c < t / 4 && (t = c + t / 4), af(e, p ? t / 2 * o % t : (h / 2 + 2 * a) * s * o % t, t, u, r, c, p, !1, l);
	}
	function af(e, t, r, i, n, a, s, o, l) {
		let u = a / 2, h = Qp(e), c = 0, p = t - r, f = [];
		for (let d = 0; d < e.length - 1; d++) {
			let t = e[d], s = e[d + 1], o = t.dist(s), y = s.angleTo(t);
			for (; p + r < c + o;) {
				p += r;
				let m = (p - c) / o, g = nt.number(t.x, s.x, m), x = nt.number(t.y, s.y, m);
				if (g >= 0 && g < l && x >= 0 && x < l && p - u >= 0 && p + u <= h) {
					let t = new Kp(g, x, y, d);
					t._round(), (!i || Jp(e, t, a, i, n)) && f.push(t);
				}
			}
			c += o;
		}
		return !o && !f.length && !s && (f = af(e, c / 2, r, i, n, a, s, !0, l)), f;
	}
	function sf(e, t, r, i, n) {
		let a = [];
		for (let s of e) {
			let e;
			for (let o = 0; o < s.length - 1; o++) {
				let l = s[o], u = s[o + 1];
				l.x < t && u.x < t || (l.x < t ? l = new f(t, l.y + (u.y - l.y) * ((t - l.x) / (u.x - l.x)))._round() : u.x < t && (u = new f(t, l.y + (u.y - l.y) * ((t - l.x) / (u.x - l.x)))._round()), !(l.y < r && u.y < r) && (l.y < r ? l = new f(l.x + (u.x - l.x) * ((r - l.y) / (u.y - l.y)), r)._round() : u.y < r && (u = new f(l.x + (u.x - l.x) * ((r - l.y) / (u.y - l.y)), r)._round()), !(l.x >= i && u.x >= i) && (l.x >= i ? l = new f(i, l.y + (u.y - l.y) * ((i - l.x) / (u.x - l.x)))._round() : u.x >= i && (u = new f(i, l.y + (u.y - l.y) * ((i - l.x) / (u.x - l.x)))._round()), !(l.y >= n && u.y >= n) && (l.y >= n ? l = new f(l.x + (u.x - l.x) * ((n - l.y) / (u.y - l.y)), n)._round() : u.y >= n && (u = new f(l.x + (u.x - l.x) * ((n - l.y) / (u.y - l.y)), n)._round()), (!e || !l.equals(e[e.length - 1])) && (e = [l], a.push(e)), e.push(u)))));
			}
		}
		return a;
	}
	function of(e, t, r, i, n, a) {
		let s = lf(e, t, r, n, 0);
		return s = lf(s, t, i, a, 1), s;
	}
	function lf(e, t, r, i, n) {
		switch (t) {
			case 1: return function(e, t, r, i) {
				let n = [];
				for (let a of e) for (let e of a) {
					let a = 0 === i ? e.x : e.y;
					a >= t && a <= r && n.push([e]);
				}
				return n;
			}(e, r, i, n);
			case 2: return hf(e, r, i, n, !1);
			case 3: return hf(e, r, i, n, !0);
		}
		return [];
	}
	function uf(e, t, r, i, n) {
		let a = 0 === i ? cf : pf, s = [], o = [];
		for (let h = 0; h < e.length - 1; h++) {
			let l = e[h], u = e[h + 1], c = 0 === i ? l.x : l.y, p = 0 === i ? u.x : u.y, f = !1;
			c < t ? p > t && s.push(a(l, u, t)) : c > r ? p < r && s.push(a(l, u, r)) : s.push(l), p < t && c >= t && (s.push(a(l, u, t)), f = !0), p > r && c <= r && (s.push(a(l, u, r)), f = !0), !n && f && (o.push(s), s = []);
		}
		let l = e.length - 1, u = 0 === i ? e[l].x : e[l].y;
		return u >= t && u <= r && s.push(e[l]), n && s.length > 0 && !s[0].equals(s[s.length - 1]) && s.push(new f(s[0].x, s[0].y)), s.length > 0 && o.push(s), o;
	}
	function hf(e, t, r, i, n) {
		let a = [];
		for (let s of e) {
			let e = uf(s, t, r, i, n);
			e.length > 0 && a.push(...e);
		}
		return a;
	}
	function cf(e, t, r) {
		let i = (r - e.x) / (t.x - e.x);
		return new f(r, e.y + (t.y - e.y) * i);
	}
	function pf(e, t, r) {
		let i = (r - e.y) / (t.y - e.y);
		return new f(e.x + (t.x - e.x) * i, r);
	}
	function ff(e, t, r, i) {
		let n = [], a = e.image, s = a.pixelRatio, o = a.paddedRect.w - 2, l = a.paddedRect.h - 2, u = {
			x1: e.left,
			y1: e.top,
			x2: e.right,
			y2: e.bottom
		}, h = a.stretchX || [[0, o]], c = a.stretchY || [[0, l]], p = (e, t) => e + t[1] - t[0], d = h.reduce(p, 0), y = c.reduce(p, 0), m = o - d, g = l - y, x = 0, v = d, b = 0, w = y, _ = 0, D = m, S = 0, A = g;
		if (a.content && i) {
			let t = a.content, r = t[2] - t[0], i = t[3] - t[1];
			(a.textFitWidth || a.textFitHeight) && (u = Wp(e)), x = df(h, 0, t[0]), b = df(c, 0, t[1]), v = df(h, t[0], t[2]), w = df(c, t[1], t[3]), _ = t[0] - x, S = t[1] - b, D = r - v, A = i - w;
		}
		let E = u.x1, F = u.y1, k = u.x2 - E, I = u.y2 - F, T = (e, i, n, o) => {
			let l = mf(e.stretch - x, v, k, E), u = gf(e.fixed - _, D, e.stretch, d), h = mf(i.stretch - b, w, I, F), c = gf(i.fixed - S, A, i.stretch, y), p = mf(n.stretch - x, v, k, E), m = gf(n.fixed - _, D, n.stretch, d), g = mf(o.stretch - b, w, I, F), T = gf(o.fixed - S, A, o.stretch, y), C = new f(l, h), B = new f(p, h), M = new f(p, g), P = new f(l, g), z = new f(u / s, c / s), L = new f(m / s, T / s), V = t * Math.PI / 180;
			if (V) {
				let e = Math.sin(V), t = Math.cos(V), r = [
					t,
					-e,
					e,
					t
				];
				C._matMult(r), B._matMult(r), P._matMult(r), M._matMult(r);
			}
			let O = e.stretch + e.fixed, R = n.stretch + n.fixed, $ = i.stretch + i.fixed, N = o.stretch + o.fixed;
			return {
				tl: C,
				tr: B,
				bl: P,
				br: M,
				tex: {
					x: a.paddedRect.x + 1 + O,
					y: a.paddedRect.y + 1 + $,
					w: R - O,
					h: N - $
				},
				writingMode: void 0,
				glyphOffset: [0, 0],
				sectionIndex: 0,
				pixelOffsetTL: z,
				pixelOffsetBR: L,
				minFontScaleX: D / s / k,
				minFontScaleY: A / s / I,
				isSDF: r
			};
		};
		if (i && (a.stretchX || a.stretchY)) {
			let e = yf(h, m, d), t = yf(c, g, y);
			for (let r = 0; r < e.length - 1; r++) {
				let i = e[r], a = e[r + 1];
				for (let e = 0; e < t.length - 1; e++) {
					let r = t[e], s = t[e + 1];
					n.push(T(i, r, a, s));
				}
			}
		} else n.push(T({
			fixed: 0,
			stretch: -1
		}, {
			fixed: 0,
			stretch: -1
		}, {
			fixed: 0,
			stretch: o + 1
		}, {
			fixed: 0,
			stretch: l + 1
		}));
		return n;
	}
	function df(e, t, r) {
		let i = 0;
		for (let n of e) i += Math.max(t, Math.min(r, n[1])) - Math.max(t, Math.min(r, n[0]));
		return i;
	}
	function yf(e, t, r) {
		let i = [{
			fixed: -1,
			stretch: 0
		}];
		for (let [n, a] of e) {
			let e = i[i.length - 1];
			i.push({
				fixed: n - e.stretch,
				stretch: e.stretch
			}), i.push({
				fixed: n - e.stretch,
				stretch: e.stretch + (a - n)
			});
		}
		return i.push({
			fixed: t + 1,
			stretch: r
		}), i;
	}
	function mf(e, t, r, i) {
		return e / t * r + i;
	}
	function gf(e, t, r, i) {
		return e - t * r / i;
	}
	function xf(e, t, r, i, n, a, s, o) {
		let l = i.layout.get("text-rotate").evaluate(a, {}) * Math.PI / 180, u = [];
		for (let h of t.positionedLines) for (let e of h.positionedGlyphs) {
			if (!e.rect) continue;
			let i = e.rect || {}, a = 4, c = !0, p = 1, d = 0, y = (n || o) && e.vertical, m = e.metrics.advance * e.scale / 2;
			if (o && t.verticalizable) {
				let t = 24 * (e.scale - 1), r = (24 - e.metrics.width * e.scale) / 2;
				d = h.lineOffset / 2 - (e.imageName ? -r : t);
			}
			if (e.imageName) {
				let t = s[e.imageName];
				c = t.sdf, p = t.pixelRatio, a = 1 / p;
			}
			let g = n ? [e.x + m, e.y] : [0, 0], x = n ? [0, 0] : [e.x + m + r[0], e.y + r[1] - d], v = [0, 0];
			y && (v = x, x = [0, 0]);
			let b = e.metrics.isDoubleResolution ? 2 : 1, w = (e.metrics.left - a) * e.scale - m + x[0], _ = (-e.metrics.top - a) * e.scale + x[1], D = w + i.w / b * e.scale / p, S = _ + i.h / b * e.scale / p, A = new f(w, _), E = new f(D, _), F = new f(w, S), k = new f(D, S);
			if (y) {
				let t = new f(-m, m - -17), r = -Math.PI / 2, i = 12 - m, n = new f(22 - i, -(e.imageName ? i : 0)), a = new f(...v);
				A._rotateAround(r, t)._add(n)._add(a), E._rotateAround(r, t)._add(n)._add(a), F._rotateAround(r, t)._add(n)._add(a), k._rotateAround(r, t)._add(n)._add(a);
			}
			if (l) {
				let e = Math.sin(l), t = Math.cos(l), r = [
					t,
					-e,
					e,
					t
				];
				A._matMult(r), E._matMult(r), F._matMult(r), k._matMult(r);
			}
			let I = new f(0, 0), T = new f(0, 0);
			u.push({
				tl: A,
				tr: E,
				bl: F,
				br: k,
				tex: i,
				writingMode: t.writingMode,
				glyphOffset: g,
				sectionIndex: e.sectionIndex,
				isSDF: c,
				pixelOffsetTL: I,
				pixelOffsetBR: T,
				minFontScaleX: 0,
				minFontScaleY: 0
			});
		}
		return u;
	}
	Dn("Anchor", Kp);
	var vf = class {
		constructor(e, t, r, i, n, a, s, o, l, u) {
			if (this.boxStartIndex = e.length, l) {
				let e = a.top, t = a.bottom, r = a.collisionPadding;
				r && (e -= r[1], t += r[3]);
				let i = t - e;
				i > 0 && (i = Math.max(10, i), this.circleDiameter = i);
			} else {
				let l = a.image?.content && (a.image.textFitWidth || a.image.textFitHeight) ? Wp(a) : {
					x1: a.left,
					y1: a.top,
					x2: a.right,
					y2: a.bottom
				};
				l.y1 = l.y1 * s - o[0], l.y2 = l.y2 * s + o[2], l.x1 = l.x1 * s - o[3], l.x2 = l.x2 * s + o[1];
				let h = a.collisionPadding;
				if (h && (l.x1 -= h[0] * s, l.y1 -= h[1] * s, l.x2 += h[2] * s, l.y2 += h[3] * s), u) {
					let e = new f(l.x1, l.y1), t = new f(l.x2, l.y1), r = new f(l.x1, l.y2), i = new f(l.x2, l.y2), n = u * Math.PI / 180;
					e._rotate(n), t._rotate(n), r._rotate(n), i._rotate(n), l.x1 = Math.min(e.x, t.x, r.x, i.x), l.x2 = Math.max(e.x, t.x, r.x, i.x), l.y1 = Math.min(e.y, t.y, r.y, i.y), l.y2 = Math.max(e.y, t.y, r.y, i.y);
				}
				e.emplaceBack(t.x, t.y, l.x1, l.y1, l.x2, l.y2, r, i, n);
			}
			this.boxEndIndex = e.length;
		}
	}, bf = class {
		constructor(e = [], t = (e, t) => e < t ? -1 : +(e > t)) {
			if (this.data = e, this.length = this.data.length, this.compare = t, this.length > 0) for (let r = (this.length >> 1) - 1; r >= 0; r--) this._down(r);
		}
		push(e) {
			this.data.push(e), this._up(this.length++);
		}
		pop() {
			if (0 === this.length) return;
			let e = this.data[0], t = this.data.pop();
			return --this.length > 0 && (this.data[0] = t, this._down(0)), e;
		}
		peek() {
			return this.data[0];
		}
		_up(e) {
			let { data: t, compare: r } = this, i = t[e];
			for (; e > 0;) {
				let n = e - 1 >> 1, a = t[n];
				if (r(i, a) >= 0) break;
				t[e] = a, e = n;
			}
			t[e] = i;
		}
		_down(e) {
			let { data: t, compare: r } = this, i = this.length >> 1, n = t[e];
			for (; e < i;) {
				let i = 1 + (e << 1), a = i + 1;
				if (a < this.length && r(t[a], t[i]) < 0 && (i = a), r(t[i], n) >= 0) break;
				t[e] = t[i], e = i;
			}
			t[e] = n;
		}
	};
	function wf(e, t = 1) {
		let r = $s.fromPoints(e[0]), i = Math.min(r.width(), r.height()), n = i / 2, a = new bf([], _f), { minX: s, minY: o, maxX: l, maxY: u } = r;
		if (0 === i) return new f(s, o);
		for (let p = s; p < l; p += i) for (let t = o; t < u; t += i) a.push(new Df(p + n, t + n, n, e));
		let h = function(e) {
			let t = 0, r = 0, i = 0, n = e[0];
			for (let a = 0, s = n.length, o = s - 1; a < s; o = a++) {
				let e = n[a], s = n[o], l = e.x * s.y - s.x * e.y;
				r += (e.x + s.x) * l, i += (e.y + s.y) * l, t += 3 * l;
			}
			return new Df(r / t, i / t, 0, e);
		}(e), c = h;
		for (; a.length;) {
			let r = a.pop();
			(r.d > c.d || !c.d) && (c = r), !(r.max - c.d <= t) && (n = r.h / 2, a.push(new Df(r.p.x - n, r.p.y - n, n, e)), a.push(new Df(r.p.x + n, r.p.y - n, n, e)), a.push(new Df(r.p.x - n, r.p.y + n, n, e)), a.push(new Df(r.p.x + n, r.p.y + n, n, e)));
		}
		return h.d > 0 && c.d - h.d <= t ? h.p : c.p;
	}
	function _f(e, t) {
		return t.max - e.max;
	}
	var Df = class {
		constructor(e, t, r, i) {
			this.p = new f(e, t), this.h = r, this.d = function(e, t) {
				let r = !1, i = Infinity;
				for (let n of t) for (let t = 0, a = n.length, s = a - 1; t < a; s = t++) {
					let a = n[t], o = n[s];
					a.y > e.y != o.y > e.y && e.x < (o.x - a.x) * (e.y - a.y) / (o.y - a.y) + a.x && (r = !r), i = Math.min(i, eo(e, a, o));
				}
				return (r ? 1 : -1) * Math.sqrt(i);
			}(this.p, i), this.max = this.d + this.h * Math.SQRT2;
		}
	};
	let Sf = function(e) {
		return e[e.center = 1] = "center", e[e.left = 2] = "left", e[e.right = 3] = "right", e[e.top = 4] = "top", e[e.bottom = 5] = "bottom", e[e["top-left"] = 6] = "top-left", e[e["top-right"] = 7] = "top-right", e[e["bottom-left"] = 8] = "bottom-left", e[e["bottom-right"] = 9] = "bottom-right", e;
	}({});
	const Af = Infinity;
	function Ef(e, t) {
		return t[1] === Af ? function(e, t) {
			let r = 0, i = 0;
			t < 0 && (t = 0);
			let n = t / Math.SQRT2;
			switch (e) {
				case "top-right":
				case "top-left":
					i = n - 7;
					break;
				case "bottom-right":
				case "bottom-left":
					i = 7 - n;
					break;
				case "bottom":
					i = 7 - t;
					break;
				case "top": i = t - 7;
			}
			switch (e) {
				case "top-right":
				case "bottom-right":
					r = -n;
					break;
				case "top-left":
				case "bottom-left":
					r = n;
					break;
				case "left":
					r = t;
					break;
				case "right": r = -t;
			}
			return [r, i];
		}(e, t[0]) : function(e, t, r) {
			let i = 0, n = 0;
			switch (t = Math.abs(t), r = Math.abs(r), e) {
				case "top-right":
				case "top-left":
				case "top":
					n = r - 7;
					break;
				case "bottom-right":
				case "bottom-left":
				case "bottom": n = 7 - r;
			}
			switch (e) {
				case "top-right":
				case "bottom-right":
				case "right":
					i = -t;
					break;
				case "top-left":
				case "bottom-left":
				case "left": i = t;
			}
			return [i, n];
		}(e, t[0], t[1]);
	}
	function Ff(e, t, r) {
		let i = e.layout, n = i.get("text-variable-anchor-offset")?.evaluate(t, {}, r);
		if (n) {
			let e = n.values, t = [];
			for (let r = 0; r < e.length; r += 2) {
				let i = t[r] = e[r], n = e[r + 1].map((e) => 24 * e);
				i.startsWith("top") ? n[1] -= 7 : i.startsWith("bottom") && (n[1] += 7), t[r + 1] = n;
			}
			return new je(t);
		}
		let a = i.get("text-variable-anchor");
		if (a) {
			let n;
			n = void 0 === e._unevaluatedLayout.getValue("text-radial-offset") ? i.get("text-offset").evaluate(t, {}, r).map((e) => 24 * e) : [24 * i.get("text-radial-offset").evaluate(t, {}, r), Af];
			let s = [];
			for (let e of a) s.push(e, Ef(e, n));
			return new je(s);
		}
		return null;
	}
	function kf(e) {
		switch (e) {
			case "right":
			case "top-right":
			case "bottom-right": return "right";
			case "left":
			case "top-left":
			case "bottom-left": return "left";
		}
		return "center";
	}
	function If(e, t, r, i, n, a, s, o, l, u, h, c, p) {
		let f = a.textMaxSize.evaluate(t, {});
		void 0 === f && (f = s);
		let d, y = e.layers[0].layout, m = y.get("icon-offset").evaluate(t, {}, h), g = Cf(r.horizontal), v = s / 24, b = e.tilePixelRatio * v, w = e.tilePixelRatio * f / 24, _ = e.tilePixelRatio * o, D = e.tilePixelRatio * y.get("symbol-spacing"), S = y.get("text-padding") * e.tilePixelRatio, A = function(e, t, r, i = 1) {
			let n = e.get("icon-padding").evaluate(t, {}, r)?.values;
			return [
				n[0] * i,
				n[1] * i,
				n[2] * i,
				n[3] * i
			];
		}(y, t, h, e.tilePixelRatio), E = y.get("text-max-angle") / 180 * Math.PI, F = "viewport" !== y.get("text-rotation-alignment") && "point" !== y.get("symbol-placement"), k = "map" === y.get("icon-rotation-alignment").constantOr("viewport") && "point" !== y.get("symbol-placement"), I = y.get("symbol-placement"), T = D / 2, C = y.get("icon-text-fit");
		i && "none" !== C && (e.allowVerticalPlacement && r.vertical && (d = Zp(i, r.vertical, C, y.get("icon-text-fit-padding"), m, v)), g && (i = Zp(i, g, C, y.get("icon-text-fit-padding"), m, v)));
		let B = h ? c.line.getGranularityForZoomLevel(h.z) : 1, M = (o, c) => {
			js(c) || Bf(e, c, o, r, i, n, d, e.layers[0], e.collisionBoxArray, t.index, t.sourceLayerIndex, e.index, b, [
				S,
				S,
				S,
				S
			], F, l, _, A, k, m, t, a, u, h, s, p);
		};
		if ("line" === I) for (let P of sf(t.geometry, 0, 0, x, x)) {
			let t = zl(P, B), n = nf(t, D, E, r.vertical || g, i, 24, w, e.overscaling, x);
			for (let r of n) (!g || !Mf(e, g.text, T, r)) && M(t, r);
		}
		else if ("line-center" === I) {
			for (let x of t.geometry) if (x.length > 1) {
				let e = zl(x, B), t = rf(e, E, r.vertical || g, i, 24, w);
				t && M(e, t);
			}
		} else if ("Polygon" === t.type) for (let x of ut(t.geometry, 0)) {
			let e = wf(x, 16);
			M(zl(x[0], B, !0), new Kp(e.x, e.y, 0));
		}
		else if ("LineString" === t.type) for (let x of t.geometry) {
			let e = zl(x, B);
			M(e, new Kp(e[0].x, e[0].y, 0));
		}
		else if ("Point" === t.type) for (let x of t.geometry) for (let e of x) M([e], new Kp(e.x, e.y, 0));
	}
	function Tf(e, t, r, i, n, a, s, o, l, u, h, c, p, f, d, y) {
		let m = xf(0, r, o, n, a, s, i, e.allowVerticalPlacement), g = e.textSizeData, x = null;
		"source" === g.kind ? (x = [128 * n.layout.get("text-size").evaluate(s, {})], x[0] > 32640 && E(`${e.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)) : "composite" === g.kind && (x = [128 * d.compositeTextSizes[0].evaluate(s, {}, y), 128 * d.compositeTextSizes[1].evaluate(s, {}, y)], (x[0] > 32640 || x[1] > 32640) && E(`${e.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)), e.addSymbols(e.text, m, x, o, a, s, h, t, u.lineStartIndex, u.lineLength, f, y, l);
		for (let v of c) p[v] = e.text.placedSymbolArray.length - 1;
		return 4 * m.length;
	}
	function Cf(e) {
		for (let t in e) return e[t];
		return null;
	}
	function Bf(e, t, r, i, n, a, s, o, l, u, h, c, p, f, d, y, m, g, x, v, b, w, _, D, S, A) {
		let F = e.addToLineVertexArray(t, r), k = o.layout.get("symbol-height-offset").evaluate(b, {}, D);
		k > e.maxHeightOffset && (e.maxHeightOffset = k);
		let I, T, C, B, M = 0, P = 0, z = 0, L = 0, V = -1, O = -1, R = {}, $ = (0, ys.default)("");
		if (e.allowVerticalPlacement && i.vertical) {
			let e = o.layout.get("text-rotate").evaluate(b, {}, D) + 90, r = i.vertical;
			C = new vf(l, t, u, h, c, r, p, f, d, e), s && (B = new vf(l, t, u, h, c, s, m, g, d, e));
		}
		if (n) {
			let r = o.layout.get("icon-rotate").evaluate(b, {}), i = "none" !== o.layout.get("icon-text-fit"), a = ff(n, r, _, i), p = s ? ff(s, r, _, i) : void 0;
			T = new vf(l, t, u, h, c, n, m, g, !1, r), M = 4 * a.length;
			let f = e.iconSizeData, d = null;
			"source" === f.kind ? (d = [128 * o.layout.get("icon-size").evaluate(b, {})], d[0] > 32640 && E(`${e.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)) : "composite" === f.kind && (d = [128 * w.compositeIconSizes[0].evaluate(b, {}, D), 128 * w.compositeIconSizes[1].evaluate(b, {}, D)], (d[0] > 32640 || d[1] > 32640) && E(`${e.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)), e.addSymbols(e.icon, a, d, v, x, b, 0, t, F.lineStartIndex, F.lineLength, -1, D, k), V = e.icon.placedSymbolArray.length - 1, p && (P = 4 * p.length, e.addSymbols(e.icon, p, d, v, x, b, 2, t, F.lineStartIndex, F.lineLength, -1, D, k), O = e.icon.placedSymbolArray.length - 1);
		}
		let N = Object.keys(i.horizontal);
		for (let E of N) {
			let r = i.horizontal[E];
			I || ($ = (0, ys.default)(r.text), I = new vf(l, t, u, h, c, r, p, f, d, o.layout.get("text-rotate").evaluate(b, {}, D)));
			let n = 1 === r.positionedLines.length;
			if (z += Tf(e, t, r, a, o, d, b, y, k, F, i.vertical ? 1 : 3, n ? N : [E], R, V, w, D), n) break;
		}
		i.vertical && (L += Tf(e, t, i.vertical, a, o, d, b, y, k, F, 2, ["vertical"], R, O, w, D));
		let U = I ? I.boxStartIndex : e.collisionBoxArray.length, j = I ? I.boxEndIndex : e.collisionBoxArray.length, q = C ? C.boxStartIndex : e.collisionBoxArray.length, G = C ? C.boxEndIndex : e.collisionBoxArray.length, X = T ? T.boxStartIndex : e.collisionBoxArray.length, Y = T ? T.boxEndIndex : e.collisionBoxArray.length, W = B ? B.boxStartIndex : e.collisionBoxArray.length, Z = B ? B.boxEndIndex : e.collisionBoxArray.length, H = -1, K = (e, t) => e?.circleDiameter ? Math.max(e.circleDiameter, t) : t;
		H = K(I, H), H = K(C, H), H = K(T, H), H = K(B, H);
		let J = +(H > -1);
		J && (H *= S / 24), e.glyphOffsetArray.length >= e.maxGlyphs && E("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"), void 0 !== b.sortKey && e.addToSortKeyRanges(e.symbolInstances.length, b.sortKey);
		let Q = Ff(o, b, D), [ee, te] = function(e, t) {
			let r = e.length, i = t?.values;
			if (i?.length > 0) for (let n = 0; n < i.length; n += 2) {
				let t = Sf[i[n]], r = i[n + 1];
				e.emplaceBack(t, r[0], r[1]);
			}
			return [r, e.length];
		}(e.textAnchorOffsets, Q);
		A && ($ = function(e, t) {
			return null == t.id || t.properties?.cluster ? e : (0, ys.default)(String(t.id), e);
		}($, b)), e.symbolInstances.emplaceBack(t.x, t.y, R.right >= 0 ? R.right : -1, R.center >= 0 ? R.center : -1, R.left >= 0 ? R.left : -1, R.vertical || -1, V, O, $, U, j, q, G, X, Y, W, Z, u, z, L, M, P, J, 0, p, H, ee, te, k);
	}
	function Mf(e, t, r, i) {
		let n = e.compareText;
		if (t in n) {
			let e = n[t];
			for (let t = e.length - 1; t >= 0; t--) if (i.dist(e[t]) < r) return !0;
		} else n[t] = [];
		return n[t].push(i), !1;
	}
	function Pf(e, t, r) {
		let i = "never", n = e.get(t);
		return n ? i = n : e.get(r) && (i = "always"), i;
	}
	const zf = [{
		name: "a_fade_opacity",
		components: 1,
		type: "Uint8",
		offset: 0
	}];
	function Lf(e, t, r, i, n, a, s, o, l, u, h, c, p, f) {
		let d = o ? Math.min(32640, Math.round(o[0])) : 0, y = o ? Math.min(32640, Math.round(o[1])) : 0;
		e.emplaceBack(t, r, Math.round(32 * i), Math.round(32 * n), a, s, +!!l + (d << 1), y, 16 * u, 16 * h, 256 * c, 256 * p, f);
	}
	function Vf(e, t, r) {
		e.emplaceBack(t.x, t.y, r), e.emplaceBack(t.x, t.y, r), e.emplaceBack(t.x, t.y, r), e.emplaceBack(t.x, t.y, r);
	}
	function Of(e) {
		for (let t of e.sections) if (Xc(t.text)) return !0;
		return !1;
	}
	var Rf = class {
		constructor(e) {
			this.layoutVertexArray = new es(), this.indexArray = new as(), this.programConfigurations = e, this.segments = new us(), this.dynamicLayoutVertexArray = new ts(), this.opacityVertexArray = new rs(), this.hasVisibleVertices = !1, this.placedSymbolArray = new Va();
		}
		isEmpty() {
			return 0 === this.layoutVertexArray.length && 0 === this.indexArray.length && 0 === this.dynamicLayoutVertexArray.length && 0 === this.opacityVertexArray.length;
		}
		upload(e, t, r, i) {
			this.isEmpty() || (r && (this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, sc.members), this.indexBuffer = e.createIndexBuffer(this.indexArray, t), this.dynamicLayoutVertexBuffer = e.createVertexBuffer(this.dynamicLayoutVertexArray, oc.members, !0), this.opacityVertexBuffer = e.createVertexBuffer(this.opacityVertexArray, zf, !0), this.opacityVertexBuffer.itemSize = 1), (r || i) && this.programConfigurations.upload(e));
		}
		destroy() {
			this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy(), this.dynamicLayoutVertexBuffer.destroy(), this.opacityVertexBuffer.destroy());
		}
	};
	Dn("SymbolBuffers", Rf);
	var $f = class {
		constructor(e, t, r) {
			this.layoutVertexArray = new e(), this.layoutAttributes = t, this.indexArray = new r(), this.segments = new us(), this.collisionVertexArray = new ns();
		}
		upload(e) {
			this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, this.layoutAttributes), this.indexBuffer = e.createIndexBuffer(this.indexArray), this.collisionVertexBuffer = e.createVertexBuffer(this.collisionVertexArray, lc.members, !0);
		}
		destroy() {
			this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.segments.destroy(), this.collisionVertexBuffer.destroy());
		}
	};
	Dn("CollisionBuffers", $f);
	var Nf = class {
		constructor(e) {
			this.collisionBoxArray = e.collisionBoxArray, this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.layerIds = this.layers.map((e) => e.id), this.index = e.index, this.pixelRatio = e.pixelRatio, this.sourceLayerIndex = e.sourceLayerIndex, this.hasDependencies = !0, this.hasRTLText = !1, this.maxHeightOffset = 0, this.sortKeyRanges = [], this.collisionCircleArray = [], this.maxGlyphs = 65535;
			let t = this.layers[0]._unevaluatedLayout._values;
			this.textSizeData = Hp(this.zoom, t["text-size"]), this.iconSizeData = Hp(this.zoom, t["icon-size"]);
			let r = this.layers[0].layout, i = r.get("symbol-sort-key"), n = r.get("symbol-z-order");
			this.canOverlap = "never" !== Pf(r, "text-overlap", "text-allow-overlap") || "never" !== Pf(r, "icon-overlap", "icon-allow-overlap") || r.get("text-ignore-placement") || r.get("icon-ignore-placement"), this.sortFeaturesByKey = "viewport-y" !== n && !i.isConstant();
			let a = "viewport-y" === n || "auto" === n && !this.sortFeaturesByKey;
			this.sortFeaturesByY = a && this.canOverlap, "point" === r.get("symbol-placement") && (this.writingModes = r.get("text-writing-mode").map((e) => Fp[e])), this.stateDependentLayerIds = this.layers.filter((e) => e.isStateDependent()).map((e) => e.id), this.sourceID = e.sourceID;
		}
		createArrays() {
			this.text = new Rf(new Ms(this.layers, this.zoom, (e) => e.startsWith("text"))), this.icon = new Rf(new Ms(this.layers, this.zoom, (e) => e.startsWith("icon"))), this.glyphOffsetArray = new $a(), this.lineVertexArray = new Na(), this.symbolInstances = new Ra(), this.textAnchorOffsets = new ja();
		}
		calculateGlyphDependencies(e, t, r, i) {
			let n = rp.fromFeature(e, r, !1), a = n.graphemes();
			for (let o = 0; o < a.length; o++) {
				var s;
				let e = n.getSection(o);
				if ("imageName" in e) continue;
				t[s = e.fontStack] || (t[s] = {
					default: {},
					vertical: {}
				});
				let r = t[e.fontStack], l = a[o], u = i && Np(l.codePointAt(0), this.allowVerticalPlacement);
				Vc(l) && (r.default[l] = !0), u && (r.vertical[l] = !0);
				for (let t of l) {
					if (r.default[t] = !0, !i) continue;
					u && Vc(l) && (r.vertical[t] = !0);
					let e = Yc[t];
					e && (r.default[e] = !0);
				}
			}
		}
		populate(e, t, r) {
			let i = this.layers[0], n = i.layout, a = n.get("text-font"), s = n.get("text-field"), o = n.get("icon-image"), l = ("constant" !== s.value.kind || s.value.value instanceof Ve && !s.value.value.isEmpty() || s.value.value.toString().length > 0) && ("constant" !== a.value.kind || a.value.value.length > 0), u = "constant" !== o.value.kind || !!o.value.value || Object.keys(o.parameters).length > 0, h = n.get("symbol-sort-key"), c = "point" === n.get("symbol-placement");
			if (this.features = [], !l && !u) return;
			let p = t.iconDependencies, f = t.glyphDependencies, d = t.availableImages, y = new Rn(this.zoom), m = n.get("text-keep-upright");
			for (let { feature: g, id: x, index: v, sourceLayerIndex: b } of e) {
				let e, t, s = i._featureFilter.needGeometry, o = Rs(g, s);
				if (!i._featureFilter.filter(y, o, r) || (s || (o.geometry = Os(g)), c && 1 === g.type && Uf(o.geometry))) continue;
				if (l) {
					let t = i.getValueAndResolveTokens("text-field", o, r, d), n = Ve.factory(t);
					this.hasRTLText || (this.hasRTLText = Of(n)), e = Fc(n, i, o);
				}
				if (u) {
					let e = i.getValueAndResolveTokens("icon-image", o, r, d);
					t = e instanceof qe ? e : qe.fromString(e);
				}
				if (!e && !t) continue;
				let w = this.sortFeaturesByKey ? h.evaluate(o, {}, r) : void 0, _ = {
					id: x,
					text: e,
					icon: t,
					index: v,
					sourceLayerIndex: b,
					geometry: o.geometry,
					properties: g.properties,
					type: Wl.types[g.type],
					sortKey: w
				};
				if (this.features.push(_), t && (p[t.name] = !0), e) {
					let t = a.evaluate(o, {}, r).join(","), i = "viewport" !== n.get("text-rotation-alignment") && "point" !== n.get("symbol-placement");
					this.allowVerticalPlacement = this.writingModes?.includes(2);
					let s = (i && m || this.allowVerticalPlacement) && $c(e.toString());
					this.calculateGlyphDependencies(e, f, t, s);
					for (let r of e.sections) r.image && (p[r.image.name] = !0);
				}
			}
			"line" === n.get("symbol-placement") && (this.features = function(e) {
				let t = {}, r = {}, i = [];
				for (let a of e) {
					let e = a.text ? a.text.toString() : null, n = {
						points: a.geometry[0],
						next: null
					}, s = {
						feature: a,
						first: n,
						last: n
					};
					if (!e) {
						i.push(s);
						continue;
					}
					let o = kc(e, s), l = kc(e, s, !0);
					if (o in r && l in t && r[o] !== t[l]) {
						let n = Cc(i, t, o, l, s), a = Tc(i, r, o, l, i[n]);
						delete t[o], delete r[l], r[kc(e, i[a], !0)] = a, i[n].feature.geometry = null;
					} else if (o in r) Tc(i, r, o, l, s);
					else if (l in t) Cc(i, t, o, l, s);
					else {
						let e = i.push(s) - 1;
						t[o] = e, r[l] = e;
					}
				}
				let n = [];
				for (let a of i) {
					let e = a.feature;
					e.geometry && (a.first.next && (e.geometry[0] = Ic(a)), n.push(e));
				}
				return n;
			}(this.features)), this.sortFeaturesByKey && this.features.sort((e, t) => e.sortKey - t.sortKey);
		}
		update(e, t, r) {
			this.stateDependentLayers.length && (this.text.programConfigurations.updatePaintArrays(e, t, this.layers, { imagePositions: r }), this.icon.programConfigurations.updatePaintArrays(e, t, this.layers, { imagePositions: r }));
		}
		addFeatures({ options: e, canonical: t, glyphMap: r, glyphPositions: i, iconMap: n, iconPositions: a, showCollisionBoxes: s }) {
			(function(e) {
				e.bucket.createArrays();
				let t = 512 * e.bucket.overscaling;
				e.bucket.tilePixelRatio = x / t, e.bucket.compareText = {}, e.bucket.iconsNeedLinear = !1;
				let r = e.bucket.layers[0], i = r.layout, n = r._unevaluatedLayout._values, a = {
					layoutIconSize: n["icon-size"].possiblyEvaluate(new Rn(e.bucket.zoom + 1), e.canonical),
					layoutTextSize: n["text-size"].possiblyEvaluate(new Rn(e.bucket.zoom + 1), e.canonical),
					textMaxSize: n["text-size"].possiblyEvaluate(new Rn(18))
				};
				if ("composite" === e.bucket.textSizeData.kind) {
					let { minZoom: t, maxZoom: r } = e.bucket.textSizeData;
					a.compositeTextSizes = [n["text-size"].possiblyEvaluate(new Rn(t), e.canonical), n["text-size"].possiblyEvaluate(new Rn(r), e.canonical)];
				}
				if ("composite" === e.bucket.iconSizeData.kind) {
					let { minZoom: t, maxZoom: r } = e.bucket.iconSizeData;
					a.compositeIconSizes = [n["icon-size"].possiblyEvaluate(new Rn(t), e.canonical), n["icon-size"].possiblyEvaluate(new Rn(r), e.canonical)];
				}
				let s = 24 * i.get("text-line-height"), o = "viewport" !== i.get("text-rotation-alignment") && "point" !== i.get("symbol-placement"), l = i.get("text-keep-upright"), u = i.get("text-size");
				for (let c of e.bucket.features) {
					var h;
					let t = i.get("text-font").evaluate(c, {}, e.canonical).join(","), n = u.evaluate(c, {}, e.canonical), p = a.layoutTextSize.evaluate(c, {}, e.canonical), f = a.layoutIconSize.evaluate(c, {}, e.canonical), d = {
						horizontal: {},
						vertical: void 0
					}, y = c.text, m = [0, 0];
					if (y) {
						let a = y.toString(), u = 24 * i.get("text-letter-spacing").evaluate(c, {}, e.canonical), h = Nc(a) ? u : 0, f = i.get("text-anchor").evaluate(c, {}, e.canonical), g = Ff(r, c, e.canonical);
						if (!g) {
							let t = i.get("text-radial-offset").evaluate(c, {}, e.canonical);
							m = t ? Ef(f, [24 * t, Af]) : i.get("text-offset").evaluate(c, {}, e.canonical).map((e) => 24 * e);
						}
						let x = o ? "center" : i.get("text-justify").evaluate(c, {}, e.canonical), v = "point" === i.get("symbol-placement") ? 24 * i.get("text-max-width").evaluate(c, {}, e.canonical) : Infinity, b = () => {
							e.bucket.allowVerticalPlacement && $c(a) && (d.vertical = Bp(y, e.glyphMap, e.glyphPositions, e.imagePositions, t, v, s, f, "left", h, m, 2, !0, p, n));
						};
						if (!o && g) {
							let r = /* @__PURE__ */ new Set();
							if ("auto" === x) for (let e = 0; e < g.values.length; e += 2) r.add(kf(g.values[e]));
							else r.add(x);
							let i = !1;
							for (let a of r) if (!d.horizontal[a]) if (i) d.horizontal[a] = d.horizontal[0];
							else {
								let r = Bp(y, e.glyphMap, e.glyphPositions, e.imagePositions, t, v, s, "center", a, h, m, 1, !1, p, n);
								r && (d.horizontal[a] = r, i = 1 === r.positionedLines.length);
							}
							b();
						} else {
							"auto" === x && (x = kf(f));
							let r = Bp(y, e.glyphMap, e.glyphPositions, e.imagePositions, t, v, s, f, x, h, m, 1, !1, p, n);
							r && (d.horizontal[x] = r), b(), $c(a) && o && l && (d.vertical = Bp(y, e.glyphMap, e.glyphPositions, e.imagePositions, t, v, s, f, x, h, m, 2, !1, p, n));
						}
					}
					let g, x = !1;
					if (c.icon?.name) {
						let t = e.imageMap[c.icon.name];
						t && (g = Yp(e.imagePositions[c.icon.name], i.get("icon-offset").evaluate(c, {}, e.canonical), i.get("icon-anchor").evaluate(c, {}, e.canonical)), x = !!t.sdf, void 0 === e.bucket.sdfIcons ? e.bucket.sdfIcons = x : e.bucket.sdfIcons !== x && E("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"), t.pixelRatio === e.bucket.pixelRatio ? 0 !== i.get("icon-rotate").constantOr(1) && (e.bucket.iconsNeedLinear = !0) : e.bucket.iconsNeedLinear = !0);
					}
					let v = Cf(d.horizontal) || d.vertical;
					(h = e.bucket).iconsInText || (h.iconsInText = !!v && v.iconsInText), (v || g) && If(e.bucket, c, d, g, e.imageMap, a, p, f, m, x, e.canonical, e.subdivisionGranularity, e.hasPromoteId);
				}
				e.showCollisionBoxes && e.bucket.generateCollisionDebugBuffers();
			})({
				bucket: this,
				glyphMap: r,
				glyphPositions: i,
				imageMap: n,
				imagePositions: a,
				showCollisionBoxes: s,
				canonical: t,
				subdivisionGranularity: e.subdivisionGranularity,
				hasPromoteId: null != e.featureIndex.promoteId
			});
		}
		isEmpty() {
			return 0 === this.symbolInstances.length;
		}
		uploadPending() {
			return !this.uploaded || this.text.programConfigurations.needsUpload || this.icon.programConfigurations.needsUpload;
		}
		upload(e) {
			!this.uploaded && this.hasDebugData() && (this.textCollisionBox.upload(e), this.iconCollisionBox.upload(e)), this.text.upload(e, this.sortFeaturesByY, !this.uploaded, this.text.programConfigurations.needsUpload), this.icon.upload(e, this.sortFeaturesByY, !this.uploaded, this.icon.programConfigurations.needsUpload), this.uploaded = !0;
		}
		destroyDebugData() {
			this.textCollisionBox.destroy(), this.iconCollisionBox.destroy();
		}
		destroy() {
			this.text.destroy(), this.icon.destroy(), this.hasDebugData() && this.destroyDebugData();
		}
		addToLineVertexArray(e, t) {
			let r = this.lineVertexArray.length;
			if (void 0 !== e.segment) {
				let r = e.dist(t[e.segment + 1]), i = e.dist(t[e.segment]), n = {};
				for (let a = e.segment + 1; a < t.length; a++) n[a] = {
					x: t[a].x,
					y: t[a].y,
					tileUnitDistanceFromAnchor: r
				}, a < t.length - 1 && (r += t[a + 1].dist(t[a]));
				for (let a = e.segment || 0; a >= 0; a--) n[a] = {
					x: t[a].x,
					y: t[a].y,
					tileUnitDistanceFromAnchor: i
				}, a > 0 && (i += t[a - 1].dist(t[a]));
				for (let e = 0; e < t.length; e++) {
					let t = n[e];
					this.lineVertexArray.emplaceBack(t.x, t.y, t.tileUnitDistanceFromAnchor);
				}
			}
			return {
				lineStartIndex: r,
				lineLength: this.lineVertexArray.length - r
			};
		}
		addSymbols(e, t, r, i, n, a, s, o, l, u, h, c, p) {
			let f = e.indexArray, d = e.layoutVertexArray, y = e.segments.prepareSegment(4 * t.length, d, f, this.canOverlap ? a.sortKey : void 0), m = this.glyphOffsetArray.length, g = y.vertexLength, x = this.allowVerticalPlacement && 2 === s ? Math.PI / 2 : 0, v = a.text && a.text.sections;
			for (let b = 0; b < t.length; b++) {
				let { tl: i, tr: n, bl: s, br: l, tex: u, pixelOffsetTL: h, pixelOffsetBR: m, minFontScaleX: g, minFontScaleY: w, glyphOffset: _, isSDF: D, sectionIndex: S } = t[b], A = y.vertexLength, E = _[1];
				Lf(d, o.x, o.y, i.x, E + i.y, u.x, u.y, r, D, h.x, h.y, g, w, p), Lf(d, o.x, o.y, n.x, E + n.y, u.x + u.w, u.y, r, D, m.x, h.y, g, w, p), Lf(d, o.x, o.y, s.x, E + s.y, u.x, u.y + u.h, r, D, h.x, m.y, g, w, p), Lf(d, o.x, o.y, l.x, E + l.y, u.x + u.w, u.y + u.h, r, D, m.x, m.y, g, w, p), Vf(e.dynamicLayoutVertexArray, o, x), f.emplaceBack(A, A + 2, A + 1), f.emplaceBack(A + 1, A + 2, A + 3), y.vertexLength += 4, y.primitiveLength += 2, this.glyphOffsetArray.emplaceBack(_[0]), (b === t.length - 1 || S !== t[b + 1].sectionIndex) && e.programConfigurations.populatePaintArrays(d.length, a, a.index, {
					imagePositions: {},
					canonical: c,
					formattedSection: v?.[S]
				});
			}
			e.placedSymbolArray.emplaceBack(o.x, o.y, m, this.glyphOffsetArray.length - m, g, l, u, o.segment, r ? r[0] : 0, r ? r[1] : 0, i[0], i[1], s, 0, !1, 0, h, p);
		}
		_addCollisionDebugVertex(e, t, r, i, n, a) {
			return t.emplaceBack(0, 0), e.emplaceBack(r.x, r.y, i, n, Math.round(a.x), Math.round(a.y));
		}
		addCollisionDebugVertices(e, t, r, i, n, a, s) {
			let o = n.segments.prepareSegment(4, n.layoutVertexArray, n.indexArray), l = o.vertexLength, u = n.layoutVertexArray, h = n.collisionVertexArray, c = s.anchorX, p = s.anchorY;
			this._addCollisionDebugVertex(u, h, a, c, p, new f(e, t)), this._addCollisionDebugVertex(u, h, a, c, p, new f(r, t)), this._addCollisionDebugVertex(u, h, a, c, p, new f(r, i)), this._addCollisionDebugVertex(u, h, a, c, p, new f(e, i)), o.vertexLength += 4;
			let d = n.indexArray;
			d.emplaceBack(l, l + 1), d.emplaceBack(l + 1, l + 2), d.emplaceBack(l + 2, l + 3), d.emplaceBack(l + 3, l), o.primitiveLength += 4;
		}
		addDebugCollisionBoxes(e, t, r, i) {
			for (let n = e; n < t; n++) {
				let e = this.collisionBoxArray.get(n), t = e.x1, a = e.y1, s = e.x2, o = e.y2;
				this.addCollisionDebugVertices(t, a, s, o, i ? this.textCollisionBox : this.iconCollisionBox, e.anchorPoint, r);
			}
		}
		generateCollisionDebugBuffers() {
			this.hasDebugData() && this.destroyDebugData(), this.textCollisionBox = new $f(is, uc.members, ss), this.iconCollisionBox = new $f(is, uc.members, ss);
			for (let e = 0; e < this.symbolInstances.length; e++) {
				let t = this.symbolInstances.get(e);
				this.addDebugCollisionBoxes(t.textBoxStartIndex, t.textBoxEndIndex, t, !0), this.addDebugCollisionBoxes(t.verticalTextBoxStartIndex, t.verticalTextBoxEndIndex, t, !0), this.addDebugCollisionBoxes(t.iconBoxStartIndex, t.iconBoxEndIndex, t, !1), this.addDebugCollisionBoxes(t.verticalIconBoxStartIndex, t.verticalIconBoxEndIndex, t, !1);
			}
		}
		_deserializeCollisionBoxesForSymbol(e, t, r, i, n, a, s, o, l) {
			let u = {};
			for (let h = t; h < r; h++) {
				let t = e.get(h);
				u.textBox = {
					x1: t.x1,
					y1: t.y1,
					x2: t.x2,
					y2: t.y2,
					anchorPointX: t.anchorPointX,
					anchorPointY: t.anchorPointY
				}, u.textFeatureIndex = t.featureIndex;
				break;
			}
			for (let h = i; h < n; h++) {
				let t = e.get(h);
				u.verticalTextBox = {
					x1: t.x1,
					y1: t.y1,
					x2: t.x2,
					y2: t.y2,
					anchorPointX: t.anchorPointX,
					anchorPointY: t.anchorPointY
				}, u.verticalTextFeatureIndex = t.featureIndex;
				break;
			}
			for (let h = a; h < s; h++) {
				let t = e.get(h);
				u.iconBox = {
					x1: t.x1,
					y1: t.y1,
					x2: t.x2,
					y2: t.y2,
					anchorPointX: t.anchorPointX,
					anchorPointY: t.anchorPointY
				}, u.iconFeatureIndex = t.featureIndex;
				break;
			}
			for (let h = o; h < l; h++) {
				let t = e.get(h);
				u.verticalIconBox = {
					x1: t.x1,
					y1: t.y1,
					x2: t.x2,
					y2: t.y2,
					anchorPointX: t.anchorPointX,
					anchorPointY: t.anchorPointY
				}, u.verticalIconFeatureIndex = t.featureIndex;
				break;
			}
			return u;
		}
		deserializeCollisionBoxes(e) {
			this.collisionArrays = [];
			for (let t = 0; t < this.symbolInstances.length; t++) {
				let r = this.symbolInstances.get(t);
				this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(e, r.textBoxStartIndex, r.textBoxEndIndex, r.verticalTextBoxStartIndex, r.verticalTextBoxEndIndex, r.iconBoxStartIndex, r.iconBoxEndIndex, r.verticalIconBoxStartIndex, r.verticalIconBoxEndIndex));
			}
		}
		hasTextData() {
			return this.text.segments.get().length > 0;
		}
		hasIconData() {
			return this.icon.segments.get().length > 0;
		}
		hasDebugData() {
			return this.textCollisionBox && this.iconCollisionBox;
		}
		hasTextCollisionBoxData() {
			return this.hasDebugData() && this.textCollisionBox.segments.get().length > 0;
		}
		hasIconCollisionBoxData() {
			return this.hasDebugData() && this.iconCollisionBox.segments.get().length > 0;
		}
		addIndicesForPlacedSymbol(e, t) {
			let r = e.placedSymbolArray.get(t), i = r.vertexStartIndex + 4 * r.numGlyphs;
			for (let n = r.vertexStartIndex; n < i; n += 4) e.indexArray.emplaceBack(n, n + 2, n + 1), e.indexArray.emplaceBack(n + 1, n + 2, n + 3);
		}
		getSortedSymbolIndexes(e) {
			if (this.sortedAngle === e && void 0 !== this.symbolInstanceIndexes) return this.symbolInstanceIndexes;
			let t = Math.sin(e), r = Math.cos(e), i = [], n = [], a = [];
			for (let s = 0; s < this.symbolInstances.length; ++s) {
				a.push(s);
				let e = this.symbolInstances.get(s);
				i.push(0 | Math.round(t * e.anchorX + r * e.anchorY)), n.push(e.featureIndex);
			}
			return a.sort((e, t) => i[e] - i[t] || n[t] - n[e]), a;
		}
		addToSortKeyRanges(e, t) {
			let r = this.sortKeyRanges[this.sortKeyRanges.length - 1];
			r?.sortKey === t ? r.symbolInstanceEnd = e + 1 : this.sortKeyRanges.push({
				sortKey: t,
				symbolInstanceStart: e,
				symbolInstanceEnd: e + 1
			});
		}
		sortFeatures(e) {
			if (this.sortFeaturesByY && this.sortedAngle !== e && !(this.text.segments.get().length > 1 || this.icon.segments.get().length > 1)) {
				this.symbolInstanceIndexes = this.getSortedSymbolIndexes(e), this.sortedAngle = e, this.text.indexArray.clear(), this.icon.indexArray.clear(), this.featureSortOrder = [];
				for (let e of this.symbolInstanceIndexes) {
					let t = this.symbolInstances.get(e);
					this.featureSortOrder.push(t.featureIndex);
					let r = [
						t.rightJustifiedTextSymbolIndex,
						t.centerJustifiedTextSymbolIndex,
						t.leftJustifiedTextSymbolIndex
					];
					for (let e = 0; e < r.length; e++) {
						let t = r[e];
						t >= 0 && r.indexOf(t) === e && this.addIndicesForPlacedSymbol(this.text, t);
					}
					t.verticalPlacedTextSymbolIndex >= 0 && this.addIndicesForPlacedSymbol(this.text, t.verticalPlacedTextSymbolIndex), t.placedIconSymbolIndex >= 0 && this.addIndicesForPlacedSymbol(this.icon, t.placedIconSymbolIndex), t.verticalPlacedIconSymbolIndex >= 0 && this.addIndicesForPlacedSymbol(this.icon, t.verticalPlacedIconSymbolIndex);
				}
				this.text.indexBuffer && this.text.indexBuffer.updateData(this.text.indexArray), this.icon.indexBuffer && this.icon.indexBuffer.updateData(this.icon.indexArray);
			}
		}
	};
	function Uf(e) {
		return e.every((e) => e.every(js));
	}
	let jf, qf;
	Dn("SymbolBucket", Nf, { omit: [
		"layers",
		"collisionBoxArray",
		"features",
		"compareText"
	] });
	var Gf = {
		get paint() {
			return qf || (qf = new ta({
				"icon-opacity": new Kn($.paint_symbol["icon-opacity"], "icon-opacity"),
				"icon-color": new Kn($.paint_symbol["icon-color"], "icon-color"),
				"icon-halo-color": new Kn($.paint_symbol["icon-halo-color"], "icon-halo-color"),
				"icon-halo-width": new Kn($.paint_symbol["icon-halo-width"], "icon-halo-width"),
				"icon-halo-blur": new Kn($.paint_symbol["icon-halo-blur"], "icon-halo-blur"),
				"icon-translate": new Hn($.paint_symbol["icon-translate"], "icon-translate"),
				"icon-translate-anchor": new Hn($.paint_symbol["icon-translate-anchor"], "icon-translate-anchor"),
				"text-opacity": new Kn($.paint_symbol["text-opacity"], "text-opacity"),
				"text-color": new Kn($.paint_symbol["text-color"], "text-color", {
					runtimeType: Y,
					getOverride: (e) => e.textColor,
					hasOverride: (e) => !!e.textColor
				}),
				"text-halo-color": new Kn($.paint_symbol["text-halo-color"], "text-halo-color"),
				"text-halo-width": new Kn($.paint_symbol["text-halo-width"], "text-halo-width"),
				"text-halo-blur": new Kn($.paint_symbol["text-halo-blur"], "text-halo-blur"),
				"text-translate": new Hn($.paint_symbol["text-translate"], "text-translate"),
				"text-translate-anchor": new Hn($.paint_symbol["text-translate-anchor"], "text-translate-anchor")
			}));
		},
		get layout() {
			return jf || (jf = new ta({
				"symbol-placement": new Hn($.layout_symbol["symbol-placement"], "symbol-placement"),
				"symbol-spacing": new Hn($.layout_symbol["symbol-spacing"], "symbol-spacing"),
				"symbol-avoid-edges": new Hn($.layout_symbol["symbol-avoid-edges"], "symbol-avoid-edges"),
				"symbol-sort-key": new Kn($.layout_symbol["symbol-sort-key"], "symbol-sort-key"),
				"symbol-z-order": new Hn($.layout_symbol["symbol-z-order"], "symbol-z-order"),
				"icon-allow-overlap": new Hn($.layout_symbol["icon-allow-overlap"], "icon-allow-overlap"),
				"icon-overlap": new Hn($.layout_symbol["icon-overlap"], "icon-overlap"),
				"icon-ignore-placement": new Hn($.layout_symbol["icon-ignore-placement"], "icon-ignore-placement"),
				"icon-optional": new Hn($.layout_symbol["icon-optional"], "icon-optional"),
				"icon-rotation-alignment": new Kn($.layout_symbol["icon-rotation-alignment"], "icon-rotation-alignment"),
				"icon-size": new Kn($.layout_symbol["icon-size"], "icon-size"),
				"icon-text-fit": new Hn($.layout_symbol["icon-text-fit"], "icon-text-fit"),
				"icon-text-fit-padding": new Hn($.layout_symbol["icon-text-fit-padding"], "icon-text-fit-padding"),
				"icon-image": new Kn($.layout_symbol["icon-image"], "icon-image"),
				"icon-rotate": new Kn($.layout_symbol["icon-rotate"], "icon-rotate"),
				"icon-padding": new Kn($.layout_symbol["icon-padding"], "icon-padding"),
				"icon-keep-upright": new Hn($.layout_symbol["icon-keep-upright"], "icon-keep-upright"),
				"icon-offset": new Kn($.layout_symbol["icon-offset"], "icon-offset"),
				"icon-anchor": new Kn($.layout_symbol["icon-anchor"], "icon-anchor"),
				"icon-pitch-alignment": new Hn($.layout_symbol["icon-pitch-alignment"], "icon-pitch-alignment"),
				"text-pitch-alignment": new Hn($.layout_symbol["text-pitch-alignment"], "text-pitch-alignment"),
				"text-rotation-alignment": new Hn($.layout_symbol["text-rotation-alignment"], "text-rotation-alignment"),
				"text-field": new Kn($.layout_symbol["text-field"], "text-field"),
				"text-font": new Kn($.layout_symbol["text-font"], "text-font"),
				"text-size": new Kn($.layout_symbol["text-size"], "text-size"),
				"text-max-width": new Kn($.layout_symbol["text-max-width"], "text-max-width"),
				"text-line-height": new Hn($.layout_symbol["text-line-height"], "text-line-height"),
				"text-letter-spacing": new Kn($.layout_symbol["text-letter-spacing"], "text-letter-spacing"),
				"text-justify": new Kn($.layout_symbol["text-justify"], "text-justify"),
				"text-radial-offset": new Kn($.layout_symbol["text-radial-offset"], "text-radial-offset"),
				"text-variable-anchor": new Hn($.layout_symbol["text-variable-anchor"], "text-variable-anchor"),
				"text-variable-anchor-offset": new Kn($.layout_symbol["text-variable-anchor-offset"], "text-variable-anchor-offset"),
				"text-anchor": new Kn($.layout_symbol["text-anchor"], "text-anchor"),
				"text-max-angle": new Hn($.layout_symbol["text-max-angle"], "text-max-angle"),
				"text-writing-mode": new Hn($.layout_symbol["text-writing-mode"], "text-writing-mode"),
				"text-rotate": new Kn($.layout_symbol["text-rotate"], "text-rotate"),
				"text-padding": new Hn($.layout_symbol["text-padding"], "text-padding"),
				"text-keep-upright": new Hn($.layout_symbol["text-keep-upright"], "text-keep-upright"),
				"text-transform": new Kn($.layout_symbol["text-transform"], "text-transform"),
				"text-offset": new Kn($.layout_symbol["text-offset"], "text-offset"),
				"text-allow-overlap": new Hn($.layout_symbol["text-allow-overlap"], "text-allow-overlap"),
				"text-overlap": new Hn($.layout_symbol["text-overlap"], "text-overlap"),
				"text-ignore-placement": new Hn($.layout_symbol["text-ignore-placement"], "text-ignore-placement"),
				"text-optional": new Hn($.layout_symbol["text-optional"], "text-optional"),
				"symbol-height-offset": new Kn($.layout_symbol["symbol-height-offset"], "symbol-height-offset"),
				"symbol-height-anchor": new Hn($.layout_symbol["symbol-height-anchor"], "symbol-height-anchor")
			}));
		}
	}, Xf = class {
		constructor(e) {
			if (void 0 === e.property.overrides) throw Error("overrides must be provided to instantiate FormatSectionOverride class");
			this.type = e.property.overrides ? e.property.overrides.runtimeType : j, this.defaultValue = e;
		}
		evaluate(e) {
			if (e.formattedSection) {
				let t = this.defaultValue.property.overrides;
				if (t?.hasOverride(e.formattedSection)) return t.getOverride(e.formattedSection);
			}
			return e.feature && e.featureState ? this.defaultValue.evaluate(e.feature, e.featureState) : this.defaultValue.property.specification.default;
		}
		eachChild(e) {
			this.defaultValue.isConstant() || e(this.defaultValue.value._styleExpression.expression);
		}
		outputDefined() {
			return !1;
		}
		serialize() {
			return null;
		}
	};
	Dn("FormatSectionOverride", Xf, { omit: ["defaultValue"] });
	var Yf = class e extends na {
		constructor(e, t) {
			super(e, Gf, t);
		}
		recalculate(e, t) {
			super.recalculate(e, t);
			let r = this.layout.get("icon-rotation-alignment");
			if (("constant" !== r.value.kind || "auto" === r.value.value) && (this.layout._values["icon-rotation-alignment"] = new Xn(r.property, {
				kind: "constant",
				value: "point" === this.layout.get("symbol-placement") ? "viewport" : "map"
			}, r.parameters)), "auto" === this.layout.get("text-rotation-alignment") && ("point" === this.layout.get("symbol-placement") ? this.layout._values["text-rotation-alignment"] = "viewport" : this.layout._values["text-rotation-alignment"] = "map"), "auto" === this.layout.get("text-pitch-alignment") && (this.layout._values["text-pitch-alignment"] = "map" === this.layout.get("text-rotation-alignment") ? "map" : "viewport"), "auto" === this.layout.get("icon-pitch-alignment") && (this.layout._values["icon-pitch-alignment"] = this.layout.get("icon-rotation-alignment").constantOr("viewport")), "point" === this.layout.get("symbol-placement")) {
				let e = this.layout.get("text-writing-mode");
				if (e) {
					let t = [];
					for (let r of e) t.includes(r) || t.push(r);
					this.layout._values["text-writing-mode"] = t;
				} else this.layout._values["text-writing-mode"] = ["horizontal"];
			}
			this._setPaintOverrides();
		}
		getValueAndResolveTokens(e, t, r, i) {
			let n = this.layout.get(e).evaluate(t, {}, r, i), a = this._unevaluatedLayout._values[e];
			return a.isDataDriven() || ti(a.value) || !n ? n : function(e, t) {
				return t.replace(/{([^{}]+)}/g, (t, r) => e && r in e ? String(e[r]) : "");
			}(t.properties, n);
		}
		createBucket(e) {
			return new Nf(e);
		}
		queryRadius() {
			return 0;
		}
		queryIntersectsFeature() {
			throw Error("Should take a different path in FeatureIndex");
		}
		_setPaintOverrides() {
			for (let t of Gf.paint.overridableProperties) {
				if (!e.hasPaintOverride(this.layout, t)) continue;
				let r = this.paint.get(t), i = new Jr(new Xf(r), `layers[${this.id}].paint.${r.property.name}`, r.property.specification), n = null;
				n = "constant" === r.value.kind || "source" === r.value.kind ? new ii("source", i) : new ni("composite", i, r.value.zoomStops), this.paint._values[t] = new Xn(r.property, n, r.parameters);
			}
		}
		_handleOverridablePaintPropertyUpdate(t, r, i) {
			return !(!this.layout || r.isDataDriven() || i.isDataDriven()) && e.hasPaintOverride(this.layout, t);
		}
		static hasPaintOverride(e, t) {
			let r = e.get("text-field"), i = Gf.paint.properties[t], n = !1, a = (e) => {
				for (let t of e) if (i.overrides?.hasOverride(t)) return void (n = !0);
			};
			if ("constant" === r.value.kind && r.value.value instanceof Ve) a(r.value.value.sections);
			else if ("source" === r.value.kind || "composite" === r.value.kind) {
				let e = (t) => {
					if (!n) if (t instanceof Ke && Ze(t.value) === J) {
						let e = t.value;
						a(e.sections);
					} else t instanceof at ? a(t.sections) : t.eachChild(e);
				}, t = r.value;
				t._styleExpression && e(t._styleExpression.expression);
			}
			return n;
		}
	};
	let Wf;
	var Zf = { get paint() {
		return Wf || (Wf = new ta({
			"background-color": new Hn($.paint_background["background-color"], "background-color"),
			"background-pattern": new Qn($.paint_background["background-pattern"], "background-pattern"),
			"background-opacity": new Hn($.paint_background["background-opacity"], "background-opacity")
		}));
	} }, Hf = class extends na {
		constructor(e, t) {
			super(e, Zf, t);
		}
	};
	let Kf;
	var Jf = { get paint() {
		return Kf || (Kf = new ta({
			"raster-opacity": new Hn($.paint_raster["raster-opacity"], "raster-opacity"),
			"raster-hue-rotate": new Hn($.paint_raster["raster-hue-rotate"], "raster-hue-rotate"),
			"raster-brightness-min": new Hn($.paint_raster["raster-brightness-min"], "raster-brightness-min"),
			"raster-brightness-max": new Hn($.paint_raster["raster-brightness-max"], "raster-brightness-max"),
			"raster-saturation": new Hn($.paint_raster["raster-saturation"], "raster-saturation"),
			"raster-contrast": new Hn($.paint_raster["raster-contrast"], "raster-contrast"),
			resampling: new Hn($.paint_raster.resampling, "resampling"),
			"raster-resampling": new Hn($.paint_raster["raster-resampling"], "raster-resampling"),
			"raster-fade-duration": new Hn($.paint_raster["raster-fade-duration"], "raster-fade-duration")
		}));
	} }, Qf = class extends na {
		constructor(e, t) {
			super(e, Jf, t);
		}
	}, ed = class extends na {
		constructor(e, t) {
			super(e, {}, t), this.onAdd = (e) => {
				this.implementation.onAdd && this.implementation.onAdd(e, e.painter.context.gl);
			}, this.onRemove = (e) => {
				this.implementation.onRemove && this.implementation.onRemove(e, e.painter.context.gl);
			}, this.implementation = e;
		}
		is3D() {
			return "3d" === this.implementation.renderingMode;
		}
		hasOffscreenPass() {
			return void 0 !== this.implementation.prerender;
		}
		recalculate() {}
		updateTransitions() {}
		hasTransition() {
			return !1;
		}
		serialize() {
			throw Error("Custom layers cannot be serialized");
		}
	};
	function td(e, t) {
		if ("custom" === e.type) return new ed(e, t);
		switch (e.type) {
			case "background": return new Hf(e, t);
			case "circle": return new vo(e, t);
			case "color-relief": return new Ro(e, t);
			case "fill": return new ql(e, t);
			case "fill-extrusion": return new Au(e, t);
			case "heatmap": return new Io(e, t);
			case "hillshade": return new Bo(e, t);
			case "line": return new nc(e, t);
			case "raster": return new Qf(e, t);
			case "symbol": return new Yf(e, t);
		}
	}
	var rd = class {
		constructor(e, t) {
			this.feature = e, this.type = e.type, this.properties = e.tags ? e.tags : {}, this.extent = t, "id" in e && ("string" == typeof e.id ? this.id = parseInt(e.id, 10) : "number" == typeof e.id && !isNaN(e.id) && (this.id = e.id));
		}
		loadGeometry() {
			let e = [], t = 1 === this.feature.type ? [this.feature.geometry] : this.feature.geometry;
			for (let r of t) {
				let t = [];
				for (let e of r) t.push(new f(e[0], e[1]));
				e.push(t);
			}
			return e;
		}
	};
	const id = "_geojsonTileLayer";
	var nd = class {
		constructor(e, t) {
			this.layers = { [id]: this }, this.name = id, this.version = t ? t.version : 1, this.extent = t ? t.extent : 4096, this.length = e.length, this.features = e;
		}
		feature(e) {
			return new rd(this.features[e], this.extent);
		}
	};
	function ad(e, t = "") {
		let r = new fp();
		return function(e, t, r = "") {
			for (let i in e.layers) t.writeMessage(3, (e, t) => sd(e, t, r), e.layers[i]);
		}(e, r, t), r.finish();
	}
	function sd(e, t, r = "") {
		t.writeVarintField(15, e.version || 1), t.writeStringField(1, e.name || ""), t.writeVarintField(5, e.extent || 4096);
		let i = {
			jsonPrefix: r,
			keys: [],
			values: [],
			keycache: {},
			valuecache: {}
		};
		for (let s = 0; s < e.length; s++) i.feature = e.feature(s), t.writeMessage(2, od, i);
		let n = i.keys;
		for (let s of n) t.writeStringField(3, s);
		let a = i.values;
		for (let s of a) t.writeMessage(4, pd, s);
	}
	function od(e, t) {
		if (!e.feature) return;
		let r = e.feature;
		void 0 !== r.id && t.writeVarintField(1, r.id), t.writeMessage(2, ld, e), t.writeVarintField(3, r.type), t.writeMessage(4, cd, r);
	}
	function ld(e, t) {
		for (let r in e.feature?.properties) {
			let i = e.feature.properties[r], n = e.keycache[r];
			if (null == i) continue;
			void 0 === n && (e.keys.push(r), n = e.keys.length - 1, e.keycache[r] = n), t.writeVarint(n), "string" != typeof i && "boolean" != typeof i && "number" != typeof i && (i = e.jsonPrefix + JSON.stringify(i));
			let a = typeof i + ":" + i, s = e.valuecache[a];
			void 0 === s && (e.values.push(i), s = e.values.length - 1, e.valuecache[a] = s), t.writeVarint(s);
		}
	}
	function ud(e, t) {
		return (t << 3) + (7 & e);
	}
	function hd(e) {
		return e << 1 ^ e >> 31;
	}
	function cd(e, t) {
		let r = e.loadGeometry(), i = e.type, n = 0, a = 0;
		for (let s of r) {
			let r = 1;
			1 === i && (r = s.length), t.writeVarint(ud(1, r));
			let o = 3 === i ? s.length - 1 : s.length;
			for (let e = 0; e < o; e++) {
				1 === e && 1 !== i && t.writeVarint(ud(2, o - 1));
				let r = s[e].x - n, l = s[e].y - a;
				t.writeVarint(hd(r)), t.writeVarint(hd(l)), n += r, a += l;
			}
			3 === e.type && t.writeVarint(ud(7, 1));
		}
	}
	function pd(e, t) {
		let r = typeof e;
		"string" === r ? t.writeStringField(1, e) : "boolean" === r ? t.writeBooleanField(7, e) : "number" === r && (e % 1 == 0 ? e < 0 ? t.writeSVarintField(6, e) : t.writeVarintField(5, e) : t.writeDoubleField(3, e));
	}
	var fd = class {
		constructor(e) {
			this._stringToNumber = {}, this._numberToString = [];
			for (let t = 0; t < e.length; t++) {
				let r = e[t];
				this._stringToNumber[r] = t, this._numberToString[t] = r;
			}
		}
		encode(e) {
			return this._stringToNumber[e];
		}
		decode(e) {
			if (e >= this._numberToString.length) throw Error(`Out of bounds. Index requested n=${e} can't be >= this._numberToString.length ${this._numberToString.length}`);
			return this._numberToString[e];
		}
	}, dd = (i = class e {
		constructor(t, r, i, n, a, s) {
			this.type = "Feature", this._vectorTileFeature = t, this._x = i, this._y = n, this._z = r, s !== fu && e.worldCoordinateHelpers.set(this, s);
			for (let e in t.properties) "string" == typeof t.properties[e] && t.properties[e].startsWith("__$json__:") && (t.properties[e] = JSON.parse(t.properties[e].slice(10)));
			this.properties = t.properties, this.id = a;
		}
		projectPoint(e, t, r, i, n) {
			if (n) {
				let a = n.lngLatFromWorld((e.x + t) / i, (e.y + r) / i);
				return [a.lng, a.lat];
			}
			return [360 * (e.x + t) / i - 180, 360 / Math.PI * Math.atan(Math.exp((1 - 2 * (e.y + r) / i) * Math.PI)) - 90];
		}
		projectLine(e, t, r, i, n) {
			return e.map((e) => this.projectPoint(e, t, r, i, n));
		}
		get geometry() {
			if (this._geometry) return this._geometry;
			let t = this._vectorTileFeature, r = e.worldCoordinateHelpers.get(this), i = t.extent * 2 ** this._z, n = t.extent * this._x, a = t.extent * this._y, s = t.loadGeometry();
			switch (t.type) {
				case 1: {
					let e = [];
					for (let r of s) e.push(r[0]);
					let t = this.projectLine(e, n, a, i, r);
					this._geometry = 1 === e.length ? {
						type: "Point",
						coordinates: t[0]
					} : {
						type: "MultiPoint",
						coordinates: t
					};
					break;
				}
				case 2: {
					let e = s.map((e) => this.projectLine(e, n, a, i, r));
					this._geometry = 1 === e.length ? {
						type: "LineString",
						coordinates: e[0]
					} : {
						type: "MultiLineString",
						coordinates: e
					};
					break;
				}
				case 3: {
					let e = Zl(s), t = [];
					for (let s of e) t.push(s.map((e) => this.projectLine(e, n, a, i, r)));
					this._geometry = 1 === t.length ? {
						type: "Polygon",
						coordinates: t[0]
					} : {
						type: "MultiPolygon",
						coordinates: t
					};
					break;
				}
				default: throw Error(`unknown feature type: ${t.type}`);
			}
			return this._geometry;
		}
		set geometry(e) {
			this._geometry = e;
		}
		toJSON() {
			let e = { geometry: this.geometry };
			for (let t in this) "_geometry" !== t && "_vectorTileFeature" !== t && "_x" !== t && "_y" !== t && "_z" !== t && (e[t] = this[t]);
			return e;
		}
	}, i.worldCoordinateHelpers = /* @__PURE__ */ new WeakMap(), i), yd = class {
		constructor(e, t, r) {
			this._name = e, this.dataBuffer = t, "number" == typeof r ? this._size = r : (this.nullabilityBuffer = r, this._size = r.size());
		}
		getValue(e) {
			return this.nullabilityBuffer && !this.nullabilityBuffer.get(e) ? null : this.getValueFromBuffer(e);
		}
		has(e) {
			return this.nullabilityBuffer?.get(e) || !this.nullabilityBuffer;
		}
		get name() {
			return this._name;
		}
		get size() {
			return this._size;
		}
	}, md = class extends yd {}, gd = class extends md {
		getValueFromBuffer(e) {
			return this.dataBuffer[e];
		}
	}, xd = class extends md {
		getValueFromBuffer(e) {
			return this.dataBuffer[e];
		}
	}, vd = class extends yd {
		constructor(e, t, r, i) {
			super(e, t, i), this.delta = r;
		}
	}, bd = class extends vd {
		constructor(e, t, r, i, n) {
			super(e, n ? Int32Array.of(t) : Uint32Array.of(t), r, i);
		}
		getValueFromBuffer(e) {
			return this.dataBuffer[0] + e * this.delta;
		}
	}, wd = class extends yd {
		constructor(e, t, r, i) {
			super(e, i ? Int32Array.of(t) : Uint32Array.of(t), r);
		}
		getValueFromBuffer(e) {
			return this.dataBuffer[0];
		}
	}, _d = class {
		constructor(e, t, r, i, n = 4096) {
			if (this._name = e, this._geometryVector = t, this._idVector = r, this._propertyVectors = i, this._extent = n, 0 === e.length) throw Error("Missing layer name");
		}
		get name() {
			return this._name;
		}
		get idVector() {
			return this._idVector;
		}
		get geometryVector() {
			return this._geometryVector;
		}
		get propertyVectors() {
			return this._propertyVectors ?? [];
		}
		getPropertyVector(e) {
			return this.propertyVectorsMap || (this.propertyVectorsMap = new Map(this.propertyVectors.map((e) => [e.name, e]))), this.propertyVectorsMap.get(e);
		}
		get numFeatures() {
			return this.geometryVector.numGeometries;
		}
		get extent() {
			return this._extent;
		}
		getFeatures() {
			let e = [], t = this.geometryVector.getGeometries();
			for (let r = 0; r < this.numFeatures; r++) {
				let i;
				if (this.idVector) {
					let e = this.idVector.getValue(r);
					null !== e && (i = this.containsMaxSafeIntegerValues(this.idVector) ? Number(e) : e);
				}
				let n = {
					coordinates: t[r],
					type: this.geometryVector.geometryType(r)
				}, a = {};
				for (let e of this.propertyVectors) {
					if (!e) continue;
					let t = e.name, i = e.getValue(r);
					null !== i && (a[t] = i);
				}
				e.push({
					id: i,
					geometry: n,
					properties: a
				});
			}
			return e;
		}
		containsMaxSafeIntegerValues(e) {
			return e instanceof gd || e instanceof wd || e instanceof bd || e instanceof xd;
		}
	};
	var Dd, Sd, Ad = class {
		constructor(e) {
			this.value = e;
		}
		get() {
			return this.value;
		}
		set(e) {
			this.value = e;
		}
		increment() {
			return this.value++;
		}
		add(e) {
			this.value += e;
		}
	};
	(function(e) {
		e.NONE = "NONE", e.DELTA = "DELTA", e.COMPONENTWISE_DELTA = "COMPONENTWISE_DELTA", e.RLE = "RLE", e.MORTON = "MORTON";
	})(Dd || (Dd = {})), function(e) {
		e.NONE = "NONE", e.FAST_PFOR = "FAST_PFOR", e.VARINT = "VARINT";
	}(Sd || (Sd = {}));
	const Ed = /* @__PURE__ */ new Uint32Array(33);
	Ed[0] = 0;
	for (let bg = 1; bg <= 32; bg++) Ed[bg] = 32 === bg ? 4294967295 : 4294967295 >>> 32 - bg;
	const Fd = Ed, kd = 65536;
	function Id(e, t) {
		return e - e % t;
	}
	function Td(e) {
		return Id(e + 31, 32);
	}
	function Cd(e) {
		if (!Number.isFinite(e) || e <= 0) return kd;
		let t = Id(Math.floor(e), 256);
		return 0 === t ? 256 : t;
	}
	function Bd(e) {
		let t = e >>> 0;
		return ((255 & t) << 24 | (65280 & t) << 8 | t >>> 8 & 65280 | t >>> 24 & 255) >>> 0;
	}
	const Md = Cd(kd), Pd = 3 * Md / 256 + Md | 0;
	function zd() {
		let e = new Uint8Array(Pd);
		return {
			dataToBePacked: Array(33),
			dataPointers: /* @__PURE__ */ new Int32Array(33),
			byteContainer: e,
			byteContainerI32: new Int32Array(e.buffer, e.byteOffset, e.byteLength >>> 2),
			exceptionSizes: /* @__PURE__ */ new Int32Array(33)
		};
	}
	function Ld(e, t, r, i, n) {
		switch (n) {
			case 1:
				(function(e, t, r, i) {
					let n = i, a = t;
					for (let s = 0; s < 8; s++) {
						let t = e[a++] >>> 0;
						r[n++] = t >>> 0 & 1, r[n++] = t >>> 1 & 1, r[n++] = t >>> 2 & 1, r[n++] = t >>> 3 & 1, r[n++] = t >>> 4 & 1, r[n++] = t >>> 5 & 1, r[n++] = t >>> 6 & 1, r[n++] = t >>> 7 & 1, r[n++] = t >>> 8 & 1, r[n++] = t >>> 9 & 1, r[n++] = t >>> 10 & 1, r[n++] = t >>> 11 & 1, r[n++] = t >>> 12 & 1, r[n++] = t >>> 13 & 1, r[n++] = t >>> 14 & 1, r[n++] = t >>> 15 & 1, r[n++] = t >>> 16 & 1, r[n++] = t >>> 17 & 1, r[n++] = t >>> 18 & 1, r[n++] = t >>> 19 & 1, r[n++] = t >>> 20 & 1, r[n++] = t >>> 21 & 1, r[n++] = t >>> 22 & 1, r[n++] = t >>> 23 & 1, r[n++] = t >>> 24 & 1, r[n++] = t >>> 25 & 1, r[n++] = t >>> 26 & 1, r[n++] = t >>> 27 & 1, r[n++] = t >>> 28 & 1, r[n++] = t >>> 29 & 1, r[n++] = t >>> 30 & 1, r[n++] = t >>> 31 & 1;
					}
				})(e, t, r, i);
				break;
			case 2:
				(function(e, t, r, i) {
					let n = i, a = t;
					for (let s = 0; s < 8; s++) {
						let t = e[a++] >>> 0, i = e[a++] >>> 0;
						r[n++] = t >>> 0 & 3, r[n++] = t >>> 2 & 3, r[n++] = t >>> 4 & 3, r[n++] = t >>> 6 & 3, r[n++] = t >>> 8 & 3, r[n++] = t >>> 10 & 3, r[n++] = t >>> 12 & 3, r[n++] = t >>> 14 & 3, r[n++] = t >>> 16 & 3, r[n++] = t >>> 18 & 3, r[n++] = t >>> 20 & 3, r[n++] = t >>> 22 & 3, r[n++] = t >>> 24 & 3, r[n++] = t >>> 26 & 3, r[n++] = t >>> 28 & 3, r[n++] = t >>> 30 & 3, r[n++] = i >>> 0 & 3, r[n++] = i >>> 2 & 3, r[n++] = i >>> 4 & 3, r[n++] = i >>> 6 & 3, r[n++] = i >>> 8 & 3, r[n++] = i >>> 10 & 3, r[n++] = i >>> 12 & 3, r[n++] = i >>> 14 & 3, r[n++] = i >>> 16 & 3, r[n++] = i >>> 18 & 3, r[n++] = i >>> 20 & 3, r[n++] = i >>> 22 & 3, r[n++] = i >>> 24 & 3, r[n++] = i >>> 26 & 3, r[n++] = i >>> 28 & 3, r[n++] = i >>> 30 & 3;
					}
				})(e, t, r, i);
				break;
			case 3:
				(function(e, t, r, i) {
					let n = i, a = t;
					for (let s = 0; s < 8; s++) {
						let t = e[a++] >>> 0, i = e[a++] >>> 0, s = e[a++] >>> 0;
						r[n++] = t >>> 0 & 7, r[n++] = t >>> 3 & 7, r[n++] = t >>> 6 & 7, r[n++] = t >>> 9 & 7, r[n++] = t >>> 12 & 7, r[n++] = t >>> 15 & 7, r[n++] = t >>> 18 & 7, r[n++] = t >>> 21 & 7, r[n++] = t >>> 24 & 7, r[n++] = t >>> 27 & 7, r[n++] = 7 & (t >>> 30 | (1 & i) << 2), r[n++] = i >>> 1 & 7, r[n++] = i >>> 4 & 7, r[n++] = i >>> 7 & 7, r[n++] = i >>> 10 & 7, r[n++] = i >>> 13 & 7, r[n++] = i >>> 16 & 7, r[n++] = i >>> 19 & 7, r[n++] = i >>> 22 & 7, r[n++] = i >>> 25 & 7, r[n++] = i >>> 28 & 7, r[n++] = 7 & (i >>> 31 | (3 & s) << 1), r[n++] = s >>> 2 & 7, r[n++] = s >>> 5 & 7, r[n++] = s >>> 8 & 7, r[n++] = s >>> 11 & 7, r[n++] = s >>> 14 & 7, r[n++] = s >>> 17 & 7, r[n++] = s >>> 20 & 7, r[n++] = s >>> 23 & 7, r[n++] = s >>> 26 & 7, r[n++] = s >>> 29 & 7;
					}
				})(e, t, r, i);
				break;
			case 4:
				(function(e, t, r, i) {
					let n = i, a = t;
					for (let s = 0; s < 8; s++) {
						let t = e[a++] >>> 0, i = e[a++] >>> 0, s = e[a++] >>> 0, o = e[a++] >>> 0;
						r[n++] = t >>> 0 & 15, r[n++] = t >>> 4 & 15, r[n++] = t >>> 8 & 15, r[n++] = t >>> 12 & 15, r[n++] = t >>> 16 & 15, r[n++] = t >>> 20 & 15, r[n++] = t >>> 24 & 15, r[n++] = t >>> 28 & 15, r[n++] = i >>> 0 & 15, r[n++] = i >>> 4 & 15, r[n++] = i >>> 8 & 15, r[n++] = i >>> 12 & 15, r[n++] = i >>> 16 & 15, r[n++] = i >>> 20 & 15, r[n++] = i >>> 24 & 15, r[n++] = i >>> 28 & 15, r[n++] = s >>> 0 & 15, r[n++] = s >>> 4 & 15, r[n++] = s >>> 8 & 15, r[n++] = s >>> 12 & 15, r[n++] = s >>> 16 & 15, r[n++] = s >>> 20 & 15, r[n++] = s >>> 24 & 15, r[n++] = s >>> 28 & 15, r[n++] = o >>> 0 & 15, r[n++] = o >>> 4 & 15, r[n++] = o >>> 8 & 15, r[n++] = o >>> 12 & 15, r[n++] = o >>> 16 & 15, r[n++] = o >>> 20 & 15, r[n++] = o >>> 24 & 15, r[n++] = o >>> 28 & 15;
					}
				})(e, t, r, i);
				break;
			case 5:
				(function(e, t, r, i) {
					let n = i, a = t;
					for (let s = 0; s < 8; s++) {
						let t = e[a++] >>> 0, i = e[a++] >>> 0, s = e[a++] >>> 0, o = e[a++] >>> 0, l = e[a++] >>> 0;
						r[n++] = t >>> 0 & 31, r[n++] = t >>> 5 & 31, r[n++] = t >>> 10 & 31, r[n++] = t >>> 15 & 31, r[n++] = t >>> 20 & 31, r[n++] = t >>> 25 & 31, r[n++] = 31 & (t >>> 30 | (7 & i) << 2), r[n++] = i >>> 3 & 31, r[n++] = i >>> 8 & 31, r[n++] = i >>> 13 & 31, r[n++] = i >>> 18 & 31, r[n++] = i >>> 23 & 31, r[n++] = 31 & (i >>> 28 | (1 & s) << 4), r[n++] = s >>> 1 & 31, r[n++] = s >>> 6 & 31, r[n++] = s >>> 11 & 31, r[n++] = s >>> 16 & 31, r[n++] = s >>> 21 & 31, r[n++] = s >>> 26 & 31, r[n++] = 31 & (s >>> 31 | (15 & o) << 1), r[n++] = o >>> 4 & 31, r[n++] = o >>> 9 & 31, r[n++] = o >>> 14 & 31, r[n++] = o >>> 19 & 31, r[n++] = o >>> 24 & 31, r[n++] = 31 & (o >>> 29 | (3 & l) << 3), r[n++] = l >>> 2 & 31, r[n++] = l >>> 7 & 31, r[n++] = l >>> 12 & 31, r[n++] = l >>> 17 & 31, r[n++] = l >>> 22 & 31, r[n++] = l >>> 27 & 31;
					}
				})(e, t, r, i);
				break;
			case 6:
				(function(e, t, r, i) {
					let n = i, a = t;
					for (let s = 0; s < 8; s++) {
						let t = e[a++] >>> 0, i = e[a++] >>> 0, s = e[a++] >>> 0, o = e[a++] >>> 0, l = e[a++] >>> 0, u = e[a++] >>> 0;
						r[n++] = t >>> 0 & 63, r[n++] = t >>> 6 & 63, r[n++] = t >>> 12 & 63, r[n++] = t >>> 18 & 63, r[n++] = t >>> 24 & 63, r[n++] = 63 & (t >>> 30 | (15 & i) << 2), r[n++] = i >>> 4 & 63, r[n++] = i >>> 10 & 63, r[n++] = i >>> 16 & 63, r[n++] = i >>> 22 & 63, r[n++] = 63 & (i >>> 28 | (3 & s) << 4), r[n++] = s >>> 2 & 63, r[n++] = s >>> 8 & 63, r[n++] = s >>> 14 & 63, r[n++] = s >>> 20 & 63, r[n++] = s >>> 26 & 63, r[n++] = o >>> 0 & 63, r[n++] = o >>> 6 & 63, r[n++] = o >>> 12 & 63, r[n++] = o >>> 18 & 63, r[n++] = o >>> 24 & 63, r[n++] = 63 & (o >>> 30 | (15 & l) << 2), r[n++] = l >>> 4 & 63, r[n++] = l >>> 10 & 63, r[n++] = l >>> 16 & 63, r[n++] = l >>> 22 & 63, r[n++] = 63 & (l >>> 28 | (3 & u) << 4), r[n++] = u >>> 2 & 63, r[n++] = u >>> 8 & 63, r[n++] = u >>> 14 & 63, r[n++] = u >>> 20 & 63, r[n++] = u >>> 26 & 63;
					}
				})(e, t, r, i);
				break;
			case 7:
				(function(e, t, r, i) {
					let n = i, a = t;
					for (let s = 0; s < 8; s++) {
						let t = e[a++] >>> 0, i = e[a++] >>> 0, s = e[a++] >>> 0, o = e[a++] >>> 0, l = e[a++] >>> 0, u = e[a++] >>> 0, h = e[a++] >>> 0;
						r[n++] = t >>> 0 & 127, r[n++] = t >>> 7 & 127, r[n++] = t >>> 14 & 127, r[n++] = t >>> 21 & 127, r[n++] = 127 & (t >>> 28 | (7 & i) << 4), r[n++] = i >>> 3 & 127, r[n++] = i >>> 10 & 127, r[n++] = i >>> 17 & 127, r[n++] = i >>> 24 & 127, r[n++] = 127 & (i >>> 31 | (63 & s) << 1), r[n++] = s >>> 6 & 127, r[n++] = s >>> 13 & 127, r[n++] = s >>> 20 & 127, r[n++] = 127 & (s >>> 27 | (3 & o) << 5), r[n++] = o >>> 2 & 127, r[n++] = o >>> 9 & 127, r[n++] = o >>> 16 & 127, r[n++] = o >>> 23 & 127, r[n++] = 127 & (o >>> 30 | (31 & l) << 2), r[n++] = l >>> 5 & 127, r[n++] = l >>> 12 & 127, r[n++] = l >>> 19 & 127, r[n++] = 127 & (l >>> 26 | (1 & u) << 6), r[n++] = u >>> 1 & 127, r[n++] = u >>> 8 & 127, r[n++] = u >>> 15 & 127, r[n++] = u >>> 22 & 127, r[n++] = 127 & (u >>> 29 | (15 & h) << 3), r[n++] = h >>> 4 & 127, r[n++] = h >>> 11 & 127, r[n++] = h >>> 18 & 127, r[n++] = h >>> 25 & 127;
					}
				})(e, t, r, i);
				break;
			case 8:
				(function(e, t, r, i) {
					let n = i, a = t;
					for (let s = 0; s < 8; s++) {
						let t = e[a++] >>> 0, i = e[a++] >>> 0, s = e[a++] >>> 0, o = e[a++] >>> 0, l = e[a++] >>> 0, u = e[a++] >>> 0, h = e[a++] >>> 0, c = e[a++] >>> 0;
						r[n++] = t >>> 0 & 255, r[n++] = t >>> 8 & 255, r[n++] = t >>> 16 & 255, r[n++] = t >>> 24 & 255, r[n++] = i >>> 0 & 255, r[n++] = i >>> 8 & 255, r[n++] = i >>> 16 & 255, r[n++] = i >>> 24 & 255, r[n++] = s >>> 0 & 255, r[n++] = s >>> 8 & 255, r[n++] = s >>> 16 & 255, r[n++] = s >>> 24 & 255, r[n++] = o >>> 0 & 255, r[n++] = o >>> 8 & 255, r[n++] = o >>> 16 & 255, r[n++] = o >>> 24 & 255, r[n++] = l >>> 0 & 255, r[n++] = l >>> 8 & 255, r[n++] = l >>> 16 & 255, r[n++] = l >>> 24 & 255, r[n++] = u >>> 0 & 255, r[n++] = u >>> 8 & 255, r[n++] = u >>> 16 & 255, r[n++] = u >>> 24 & 255, r[n++] = h >>> 0 & 255, r[n++] = h >>> 8 & 255, r[n++] = h >>> 16 & 255, r[n++] = h >>> 24 & 255, r[n++] = c >>> 0 & 255, r[n++] = c >>> 8 & 255, r[n++] = c >>> 16 & 255, r[n++] = c >>> 24 & 255;
					}
				})(e, t, r, i);
				break;
			case 16:
				(function(e, t, r, i) {
					let n = i, a = t;
					for (let s = 0; s < 128; s++) {
						let t = e[a++] >>> 0;
						r[n++] = 65535 & t, r[n++] = t >>> 16 & 65535;
					}
				})(e, t, r, i);
				break;
			default: (function(e, t, r, i, n) {
				let a = Fd[n] >>> 0, s = t, o = 0, l = e[s] >>> 0, u = i;
				for (let h = 0; h < 8; h++) {
					for (let t = 0; t < 32; t++) if (o + n <= 32) {
						let i = l >>> o & a;
						r[u + t] = 0 | i, o += n, 32 === o && (o = 0, s++, 31 !== t && (l = e[s] >>> 0));
					} else {
						let i = 32 - o, h = l >>> o;
						s++, l = e[s] >>> 0;
						let c = n - i, p = (h | (l & -1 >>> 32 - c >>> 0) << i) & a;
						r[u + t] = 0 | p, o = c;
					}
					u += 32, o = 0, h < 7 && (l = e[s] >>> 0);
				}
			})(e, t, r, i, n);
		}
		return t + (n << 3) | 0;
	}
	function Vd(e, t, r, i) {
		if (r + 2 > t) throw Error(`FastPFOR decode: byteContainer underflow at block=${i} (need 2 bytes for [bitWidth, exceptionCount], bytePos=${r}, byteSize=${t})`);
		let n = e[r++], a = e[r++];
		if (n > 32) throw Error(`FastPFOR decode: invalid bitWidth=${n} at block=${i} (expected 0..32). This likely indicates corrupted or truncated input.`);
		return {
			bitWidth: n,
			exceptionCount: a,
			bytePosIn: r
		};
	}
	function Od(e, t, r, i, n, a, s, o, l) {
		let { maxBits: u, exceptionBitWidth: h, bytePosIn: c } = function(e, t, r, i, n, a) {
			if (r + 1 > t) throw Error(`FastPFOR decode: exception header underflow at block=${a} (need 1 byte for maxBits, bytePos=${r}, byteSize=${t})`);
			let s = e[r++];
			if (s < i || s > 32) throw Error(`FastPFOR decode: invalid maxBits=${s} at block=${a} (bitWidth=${i}, expected ${i}..32)`);
			let o = s - i | 0;
			if (o < 1 || o > 32) throw Error(`FastPFOR decode: invalid exceptionBitWidth=${o} at block=${a} (bitWidth=${i}, maxBits=${s})`);
			if (r + n > t) throw Error(`FastPFOR decode: exception positions underflow at block=${a} (need=${n}, have=${t - r})`);
			return {
				maxBits: s,
				exceptionBitWidth: o,
				bytePosIn: r
			};
		}(n, a, s, r, i, l);
		if (s = c, 1 === h) {
			let a = 1 << r;
			for (let r = 0; r < i; r = r + 1 | 0) e[n[s++] + t | 0] |= a;
			return s;
		}
		let p = o.dataToBePacked[h];
		if (!p) throw Error(`FastPFOR decode: missing exception stream for exceptionBitWidth=${h} (bitWidth=${r}, maxBits=${u}) at block ${l}`);
		let f = o.dataPointers, d = 0 | f[h], y = 0 | o.exceptionSizes[h];
		if (d + i > y) throw Error(`FastPFOR decode: exception stream overflow for exceptionBitWidth=${h} (ptr=${d}, need ${i}, size=${y}) at block ${l}`);
		for (let m = 0; m < i; m = m + 1 | 0) {
			let i = n[s++], a = 0 | p[d++];
			e[i + t | 0] |= a << r;
		}
		return f[h] = d, s;
	}
	function Rd(e, t, r, i, n, a) {
		let s = 0 | r, o = 0 | e[s];
		if (o <= 0 || s + o > e.length - 1) throw Error(`FastPFOR decode: invalid whereMeta=${o} at pageStart=${s} (expected > 0 and pageStart+whereMeta < encoded.length=${e.length})`);
		let l = s + 1 | 0, u = s + o | 0, h = e[u] >>> 0, c = h + 3 >>> 2, p = u + 1, f = p + c;
		if (f >= e.length) throw Error(`FastPFOR decode: invalid byteSize=${h} (metaInts=${c}, pageStart=${s}, packedEnd=${u}, byteContainerStart=${p}) causes bitmapPos=${f} out of bounds (encoded.length=${e.length})`);
		let d = function(e, t, r, i) {
			i.byteContainer.length < r && (i.byteContainer = new Uint8Array(2 * r), i.byteContainerI32 = void 0);
			let n = i.byteContainer, a = r >>> 2;
			if (3 & n.byteOffset) for (let o = 0; o < a; o = o + 1 | 0) {
				let r = 0 | e[t + o | 0], i = o << 2;
				n[i] = 255 & r, n[i + 1 | 0] = r >>> 8 & 255, n[i + 2 | 0] = r >>> 16 & 255, n[i + 3 | 0] = r >>> 24 & 255;
			}
			else {
				let r = i.byteContainerI32;
				(!r || r.buffer !== n.buffer || r.byteOffset !== n.byteOffset || r.length < a) && (r = i.byteContainerI32 = new Int32Array(n.buffer, n.byteOffset, n.byteLength >>> 2)), r.set(e.subarray(t, t + a));
			}
			let s = 3 & r;
			if (s > 0) {
				let r = 0 | e[t + a | 0], i = a << 2;
				for (let e = 0; e < s; e = e + 1 | 0) n[i + e | 0] = r >>> (e << 3) & 255;
			}
			return n;
		}(e, p, h, a), y = h, m = function(e, t, r) {
			let i = 0 | e[t++], n = r.dataToBePacked;
			for (let a = 2; a <= 32; a = a + 1 | 0) {
				if (!(i >>> a - 1 & 1)) continue;
				if (t >= e.length) throw Error(`FastPFOR decode: truncated exception stream header (bitWidth=${a}, streamWordIndex=${t}, needWords=1, availableWords=${e.length - t}, encodedWords=${e.length})`);
				let s = e[t++] >>> 0, o = Td(s), l = s * a + 31 >>> 5;
				if (t + l > e.length) throw Error(`FastPFOR decode: truncated exception stream (bitWidth=${a}, size=${s}, streamWordIndex=${t}, needWords=${l}, availableWords=${e.length - t}, encodedWords=${e.length})`);
				let u = n[a];
				(!u || u.length < o) && (u = n[a] = new Uint32Array(o));
				let h = 0;
				for (; h < s; h = h + 32 | 0) $d(e, t, u, h, a), t = t + a | 0;
				t = t - ((h - s | 0) * a >>> 5) | 0, r.exceptionSizes[a] = s;
			}
			return t;
		}(e, f, a);
		return a.dataPointers.fill(0), function(e, t, r, i, n, a, s, o, l, u) {
			let h = 0 | r, c = 0;
			for (let p = 0; p < s; p = p + 1 | 0) {
				let t = Vd(o, l, c, p);
				c = t.bytePosIn;
				let r = t.bitWidth, i = t.exceptionCount, s = a + 256 * p | 0;
				switch (r) {
					case 0:
						n.fill(0, s, s + 256);
						break;
					case 32:
						for (let t = 0; t < 256; t = t + 1 | 0) n[s + t | 0] = 0 | e[h + t | 0];
						h = h + 256 | 0;
						break;
					default: h = Ld(e, h, n, s, r);
				}
				i > 0 && (c = Od(n, s, r, i, o, l, c, u, p));
			}
			if (h !== i) throw Error(`FastPFOR decode: packed region mismatch (pageStart=${t}, packedStart=${r}, consumedPackedEnd=${h}, expectedPackedEnd=${i}, packedWords=${i - r}, encoded.length=${e.length})`);
		}(e, s, l, u, t, 0 | i, n / 256 | 0, d, y, a), m;
	}
	function $d(e, t, r, i, n) {
		switch (n) {
			case 2:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0;
					r[n++] = a >>> 0 & 3, r[n++] = a >>> 2 & 3, r[n++] = a >>> 4 & 3, r[n++] = a >>> 6 & 3, r[n++] = a >>> 8 & 3, r[n++] = a >>> 10 & 3, r[n++] = a >>> 12 & 3, r[n++] = a >>> 14 & 3, r[n++] = a >>> 16 & 3, r[n++] = a >>> 18 & 3, r[n++] = a >>> 20 & 3, r[n++] = a >>> 22 & 3, r[n++] = a >>> 24 & 3, r[n++] = a >>> 26 & 3, r[n++] = a >>> 28 & 3, r[n++] = a >>> 30 & 3, r[n++] = s >>> 0 & 3, r[n++] = s >>> 2 & 3, r[n++] = s >>> 4 & 3, r[n++] = s >>> 6 & 3, r[n++] = s >>> 8 & 3, r[n++] = s >>> 10 & 3, r[n++] = s >>> 12 & 3, r[n++] = s >>> 14 & 3, r[n++] = s >>> 16 & 3, r[n++] = s >>> 18 & 3, r[n++] = s >>> 20 & 3, r[n++] = s >>> 22 & 3, r[n++] = s >>> 24 & 3, r[n++] = s >>> 26 & 3, r[n++] = s >>> 28 & 3, r[n] = s >>> 30 & 3;
				})(e, t, r, i);
				return;
			case 3:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0;
					r[n++] = a >>> 0 & 7, r[n++] = a >>> 3 & 7, r[n++] = a >>> 6 & 7, r[n++] = a >>> 9 & 7, r[n++] = a >>> 12 & 7, r[n++] = a >>> 15 & 7, r[n++] = a >>> 18 & 7, r[n++] = a >>> 21 & 7, r[n++] = a >>> 24 & 7, r[n++] = a >>> 27 & 7, r[n++] = 7 & (a >>> 30 | (1 & s) << 2), r[n++] = s >>> 1 & 7, r[n++] = s >>> 4 & 7, r[n++] = s >>> 7 & 7, r[n++] = s >>> 10 & 7, r[n++] = s >>> 13 & 7, r[n++] = s >>> 16 & 7, r[n++] = s >>> 19 & 7, r[n++] = s >>> 22 & 7, r[n++] = s >>> 25 & 7, r[n++] = s >>> 28 & 7, r[n++] = 7 & (s >>> 31 | (3 & o) << 1), r[n++] = o >>> 2 & 7, r[n++] = o >>> 5 & 7, r[n++] = o >>> 8 & 7, r[n++] = o >>> 11 & 7, r[n++] = o >>> 14 & 7, r[n++] = o >>> 17 & 7, r[n++] = o >>> 20 & 7, r[n++] = o >>> 23 & 7, r[n++] = o >>> 26 & 7, r[n] = o >>> 29 & 7;
				})(e, t, r, i);
				return;
			case 4:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0, l = e[t + 3] >>> 0;
					r[n++] = a >>> 0 & 15, r[n++] = a >>> 4 & 15, r[n++] = a >>> 8 & 15, r[n++] = a >>> 12 & 15, r[n++] = a >>> 16 & 15, r[n++] = a >>> 20 & 15, r[n++] = a >>> 24 & 15, r[n++] = a >>> 28 & 15, r[n++] = s >>> 0 & 15, r[n++] = s >>> 4 & 15, r[n++] = s >>> 8 & 15, r[n++] = s >>> 12 & 15, r[n++] = s >>> 16 & 15, r[n++] = s >>> 20 & 15, r[n++] = s >>> 24 & 15, r[n++] = s >>> 28 & 15, r[n++] = o >>> 0 & 15, r[n++] = o >>> 4 & 15, r[n++] = o >>> 8 & 15, r[n++] = o >>> 12 & 15, r[n++] = o >>> 16 & 15, r[n++] = o >>> 20 & 15, r[n++] = o >>> 24 & 15, r[n++] = o >>> 28 & 15, r[n++] = l >>> 0 & 15, r[n++] = l >>> 4 & 15, r[n++] = l >>> 8 & 15, r[n++] = l >>> 12 & 15, r[n++] = l >>> 16 & 15, r[n++] = l >>> 20 & 15, r[n++] = l >>> 24 & 15, r[n] = l >>> 28 & 15;
				})(e, t, r, i);
				return;
			case 5:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0, l = e[t + 3] >>> 0, u = e[t + 4] >>> 0;
					r[n++] = a >>> 0 & 31, r[n++] = a >>> 5 & 31, r[n++] = a >>> 10 & 31, r[n++] = a >>> 15 & 31, r[n++] = a >>> 20 & 31, r[n++] = a >>> 25 & 31, r[n++] = 31 & (a >>> 30 | (7 & s) << 2), r[n++] = s >>> 3 & 31, r[n++] = s >>> 8 & 31, r[n++] = s >>> 13 & 31, r[n++] = s >>> 18 & 31, r[n++] = s >>> 23 & 31, r[n++] = 31 & (s >>> 28 | (1 & o) << 4), r[n++] = o >>> 1 & 31, r[n++] = o >>> 6 & 31, r[n++] = o >>> 11 & 31, r[n++] = o >>> 16 & 31, r[n++] = o >>> 21 & 31, r[n++] = o >>> 26 & 31, r[n++] = 31 & (o >>> 31 | (15 & l) << 1), r[n++] = l >>> 4 & 31, r[n++] = l >>> 9 & 31, r[n++] = l >>> 14 & 31, r[n++] = l >>> 19 & 31, r[n++] = l >>> 24 & 31, r[n++] = 31 & (l >>> 29 | (3 & u) << 3), r[n++] = u >>> 2 & 31, r[n++] = u >>> 7 & 31, r[n++] = u >>> 12 & 31, r[n++] = u >>> 17 & 31, r[n++] = u >>> 22 & 31, r[n] = u >>> 27 & 31;
				})(e, t, r, i);
				return;
			case 6:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0, l = e[t + 3] >>> 0, u = e[t + 4] >>> 0, h = e[t + 5] >>> 0;
					r[n++] = a >>> 0 & 63, r[n++] = a >>> 6 & 63, r[n++] = a >>> 12 & 63, r[n++] = a >>> 18 & 63, r[n++] = a >>> 24 & 63, r[n++] = 63 & (a >>> 30 | (15 & s) << 2), r[n++] = s >>> 4 & 63, r[n++] = s >>> 10 & 63, r[n++] = s >>> 16 & 63, r[n++] = s >>> 22 & 63, r[n++] = 63 & (s >>> 28 | (3 & o) << 4), r[n++] = o >>> 2 & 63, r[n++] = o >>> 8 & 63, r[n++] = o >>> 14 & 63, r[n++] = o >>> 20 & 63, r[n++] = o >>> 26 & 63, r[n++] = l >>> 0 & 63, r[n++] = l >>> 6 & 63, r[n++] = l >>> 12 & 63, r[n++] = l >>> 18 & 63, r[n++] = l >>> 24 & 63, r[n++] = 63 & (l >>> 30 | (15 & u) << 2), r[n++] = u >>> 4 & 63, r[n++] = u >>> 10 & 63, r[n++] = u >>> 16 & 63, r[n++] = u >>> 22 & 63, r[n++] = 63 & (u >>> 28 | (3 & h) << 4), r[n++] = h >>> 2 & 63, r[n++] = h >>> 8 & 63, r[n++] = h >>> 14 & 63, r[n++] = h >>> 20 & 63, r[n] = h >>> 26 & 63;
				})(e, t, r, i);
				return;
			case 7:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0, l = e[t + 3] >>> 0, u = e[t + 4] >>> 0, h = e[t + 5] >>> 0, c = e[t + 6] >>> 0;
					r[n++] = a >>> 0 & 127, r[n++] = a >>> 7 & 127, r[n++] = a >>> 14 & 127, r[n++] = a >>> 21 & 127, r[n++] = 127 & (a >>> 28 | (7 & s) << 4), r[n++] = s >>> 3 & 127, r[n++] = s >>> 10 & 127, r[n++] = s >>> 17 & 127, r[n++] = s >>> 24 & 127, r[n++] = 127 & (s >>> 31 | (63 & o) << 1), r[n++] = o >>> 6 & 127, r[n++] = o >>> 13 & 127, r[n++] = o >>> 20 & 127, r[n++] = 127 & (o >>> 27 | (3 & l) << 5), r[n++] = l >>> 2 & 127, r[n++] = l >>> 9 & 127, r[n++] = l >>> 16 & 127, r[n++] = l >>> 23 & 127, r[n++] = 127 & (l >>> 30 | (31 & u) << 2), r[n++] = u >>> 5 & 127, r[n++] = u >>> 12 & 127, r[n++] = u >>> 19 & 127, r[n++] = 127 & (u >>> 26 | (1 & h) << 6), r[n++] = h >>> 1 & 127, r[n++] = h >>> 8 & 127, r[n++] = h >>> 15 & 127, r[n++] = h >>> 22 & 127, r[n++] = 127 & (h >>> 29 | (15 & c) << 3), r[n++] = c >>> 4 & 127, r[n++] = c >>> 11 & 127, r[n++] = c >>> 18 & 127, r[n] = c >>> 25 & 127;
				})(e, t, r, i);
				return;
			case 8:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0, l = e[t + 3] >>> 0, u = e[t + 4] >>> 0, h = e[t + 5] >>> 0, c = e[t + 6] >>> 0, p = e[t + 7] >>> 0;
					r[n++] = a >>> 0 & 255, r[n++] = a >>> 8 & 255, r[n++] = a >>> 16 & 255, r[n++] = a >>> 24 & 255, r[n++] = s >>> 0 & 255, r[n++] = s >>> 8 & 255, r[n++] = s >>> 16 & 255, r[n++] = s >>> 24 & 255, r[n++] = o >>> 0 & 255, r[n++] = o >>> 8 & 255, r[n++] = o >>> 16 & 255, r[n++] = o >>> 24 & 255, r[n++] = l >>> 0 & 255, r[n++] = l >>> 8 & 255, r[n++] = l >>> 16 & 255, r[n++] = l >>> 24 & 255, r[n++] = u >>> 0 & 255, r[n++] = u >>> 8 & 255, r[n++] = u >>> 16 & 255, r[n++] = u >>> 24 & 255, r[n++] = h >>> 0 & 255, r[n++] = h >>> 8 & 255, r[n++] = h >>> 16 & 255, r[n++] = h >>> 24 & 255, r[n++] = c >>> 0 & 255, r[n++] = c >>> 8 & 255, r[n++] = c >>> 16 & 255, r[n++] = c >>> 24 & 255, r[n++] = p >>> 0 & 255, r[n++] = p >>> 8 & 255, r[n++] = p >>> 16 & 255, r[n] = p >>> 24 & 255;
				})(e, t, r, i);
				return;
			case 9:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0, l = e[t + 3] >>> 0, u = e[t + 4] >>> 0, h = e[t + 5] >>> 0, c = e[t + 6] >>> 0, p = e[t + 7] >>> 0, f = e[t + 8] >>> 0;
					r[n++] = a >>> 0 & 511, r[n++] = a >>> 9 & 511, r[n++] = a >>> 18 & 511, r[n++] = 511 & (a >>> 27 | (15 & s) << 5), r[n++] = s >>> 4 & 511, r[n++] = s >>> 13 & 511, r[n++] = s >>> 22 & 511, r[n++] = 511 & (s >>> 31 | (255 & o) << 1), r[n++] = o >>> 8 & 511, r[n++] = o >>> 17 & 511, r[n++] = 511 & (o >>> 26 | (7 & l) << 6), r[n++] = l >>> 3 & 511, r[n++] = l >>> 12 & 511, r[n++] = l >>> 21 & 511, r[n++] = 511 & (l >>> 30 | (127 & u) << 2), r[n++] = u >>> 7 & 511, r[n++] = u >>> 16 & 511, r[n++] = 511 & (u >>> 25 | (3 & h) << 7), r[n++] = h >>> 2 & 511, r[n++] = h >>> 11 & 511, r[n++] = h >>> 20 & 511, r[n++] = 511 & (h >>> 29 | (63 & c) << 3), r[n++] = c >>> 6 & 511, r[n++] = c >>> 15 & 511, r[n++] = 511 & (c >>> 24 | (1 & p) << 8), r[n++] = p >>> 1 & 511, r[n++] = p >>> 10 & 511, r[n++] = p >>> 19 & 511, r[n++] = 511 & (p >>> 28 | (31 & f) << 4), r[n++] = f >>> 5 & 511, r[n++] = f >>> 14 & 511, r[n] = f >>> 23 & 511;
				})(e, t, r, i);
				return;
			case 10:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0, l = e[t + 3] >>> 0, u = e[t + 4] >>> 0, h = e[t + 5] >>> 0, c = e[t + 6] >>> 0, p = e[t + 7] >>> 0, f = e[t + 8] >>> 0, d = e[t + 9] >>> 0;
					r[n++] = a >>> 0 & 1023, r[n++] = a >>> 10 & 1023, r[n++] = a >>> 20 & 1023, r[n++] = 1023 & (a >>> 30 | (255 & s) << 2), r[n++] = s >>> 8 & 1023, r[n++] = s >>> 18 & 1023, r[n++] = 1023 & (s >>> 28 | (63 & o) << 4), r[n++] = o >>> 6 & 1023, r[n++] = o >>> 16 & 1023, r[n++] = 1023 & (o >>> 26 | (15 & l) << 6), r[n++] = l >>> 4 & 1023, r[n++] = l >>> 14 & 1023, r[n++] = 1023 & (l >>> 24 | (3 & u) << 8), r[n++] = u >>> 2 & 1023, r[n++] = u >>> 12 & 1023, r[n++] = u >>> 22 & 1023, r[n++] = h >>> 0 & 1023, r[n++] = h >>> 10 & 1023, r[n++] = h >>> 20 & 1023, r[n++] = 1023 & (h >>> 30 | (255 & c) << 2), r[n++] = c >>> 8 & 1023, r[n++] = c >>> 18 & 1023, r[n++] = 1023 & (c >>> 28 | (63 & p) << 4), r[n++] = p >>> 6 & 1023, r[n++] = p >>> 16 & 1023, r[n++] = 1023 & (p >>> 26 | (15 & f) << 6), r[n++] = f >>> 4 & 1023, r[n++] = f >>> 14 & 1023, r[n++] = 1023 & (f >>> 24 | (3 & d) << 8), r[n++] = d >>> 2 & 1023, r[n++] = d >>> 12 & 1023, r[n] = d >>> 22 & 1023;
				})(e, t, r, i);
				return;
			case 11:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0, l = e[t + 3] >>> 0, u = e[t + 4] >>> 0, h = e[t + 5] >>> 0, c = e[t + 6] >>> 0, p = e[t + 7] >>> 0, f = e[t + 8] >>> 0, d = e[t + 9] >>> 0, y = e[t + 10] >>> 0;
					r[n++] = a >>> 0 & 2047, r[n++] = a >>> 11 & 2047, r[n++] = 2047 & (a >>> 22 | (1 & s) << 10), r[n++] = s >>> 1 & 2047, r[n++] = s >>> 12 & 2047, r[n++] = 2047 & (s >>> 23 | (3 & o) << 9), r[n++] = o >>> 2 & 2047, r[n++] = o >>> 13 & 2047, r[n++] = 2047 & (o >>> 24 | (7 & l) << 8), r[n++] = l >>> 3 & 2047, r[n++] = l >>> 14 & 2047, r[n++] = 2047 & (l >>> 25 | (15 & u) << 7), r[n++] = u >>> 4 & 2047, r[n++] = u >>> 15 & 2047, r[n++] = 2047 & (u >>> 26 | (31 & h) << 6), r[n++] = h >>> 5 & 2047, r[n++] = h >>> 16 & 2047, r[n++] = 2047 & (h >>> 27 | (63 & c) << 5), r[n++] = c >>> 6 & 2047, r[n++] = c >>> 17 & 2047, r[n++] = 2047 & (c >>> 28 | (127 & p) << 4), r[n++] = p >>> 7 & 2047, r[n++] = p >>> 18 & 2047, r[n++] = 2047 & (p >>> 29 | (255 & f) << 3), r[n++] = f >>> 8 & 2047, r[n++] = f >>> 19 & 2047, r[n++] = 2047 & (f >>> 30 | (511 & d) << 2), r[n++] = d >>> 9 & 2047, r[n++] = d >>> 20 & 2047, r[n++] = 2047 & (d >>> 31 | (1023 & y) << 1), r[n++] = y >>> 10 & 2047, r[n] = y >>> 21 & 2047;
				})(e, t, r, i);
				return;
			case 12:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0, l = e[t + 3] >>> 0, u = e[t + 4] >>> 0, h = e[t + 5] >>> 0, c = e[t + 6] >>> 0, p = e[t + 7] >>> 0, f = e[t + 8] >>> 0, d = e[t + 9] >>> 0, y = e[t + 10] >>> 0, m = e[t + 11] >>> 0;
					r[n++] = a >>> 0 & 4095, r[n++] = a >>> 12 & 4095, r[n++] = 4095 & (a >>> 24 | (15 & s) << 8), r[n++] = s >>> 4 & 4095, r[n++] = s >>> 16 & 4095, r[n++] = 4095 & (s >>> 28 | (255 & o) << 4), r[n++] = o >>> 8 & 4095, r[n++] = o >>> 20 & 4095, r[n++] = l >>> 0 & 4095, r[n++] = l >>> 12 & 4095, r[n++] = 4095 & (l >>> 24 | (15 & u) << 8), r[n++] = u >>> 4 & 4095, r[n++] = u >>> 16 & 4095, r[n++] = 4095 & (u >>> 28 | (255 & h) << 4), r[n++] = h >>> 8 & 4095, r[n++] = h >>> 20 & 4095, r[n++] = c >>> 0 & 4095, r[n++] = c >>> 12 & 4095, r[n++] = 4095 & (c >>> 24 | (15 & p) << 8), r[n++] = p >>> 4 & 4095, r[n++] = p >>> 16 & 4095, r[n++] = 4095 & (p >>> 28 | (255 & f) << 4), r[n++] = f >>> 8 & 4095, r[n++] = f >>> 20 & 4095, r[n++] = d >>> 0 & 4095, r[n++] = d >>> 12 & 4095, r[n++] = 4095 & (d >>> 24 | (15 & y) << 8), r[n++] = y >>> 4 & 4095, r[n++] = y >>> 16 & 4095, r[n++] = 4095 & (y >>> 28 | (255 & m) << 4), r[n++] = m >>> 8 & 4095, r[n] = m >>> 20 & 4095;
				})(e, t, r, i);
				return;
			case 16:
				(function(e, t, r, i) {
					let n = i, a = e[t] >>> 0, s = e[t + 1] >>> 0, o = e[t + 2] >>> 0, l = e[t + 3] >>> 0, u = e[t + 4] >>> 0, h = e[t + 5] >>> 0, c = e[t + 6] >>> 0, p = e[t + 7] >>> 0, f = e[t + 8] >>> 0, d = e[t + 9] >>> 0, y = e[t + 10] >>> 0, m = e[t + 11] >>> 0, g = e[t + 12] >>> 0, x = e[t + 13] >>> 0, v = e[t + 14] >>> 0, b = e[t + 15] >>> 0;
					r[n++] = a >>> 0 & 65535, r[n++] = a >>> 16 & 65535, r[n++] = s >>> 0 & 65535, r[n++] = s >>> 16 & 65535, r[n++] = o >>> 0 & 65535, r[n++] = o >>> 16 & 65535, r[n++] = l >>> 0 & 65535, r[n++] = l >>> 16 & 65535, r[n++] = u >>> 0 & 65535, r[n++] = u >>> 16 & 65535, r[n++] = h >>> 0 & 65535, r[n++] = h >>> 16 & 65535, r[n++] = c >>> 0 & 65535, r[n++] = c >>> 16 & 65535, r[n++] = p >>> 0 & 65535, r[n++] = p >>> 16 & 65535, r[n++] = f >>> 0 & 65535, r[n++] = f >>> 16 & 65535, r[n++] = d >>> 0 & 65535, r[n++] = d >>> 16 & 65535, r[n++] = y >>> 0 & 65535, r[n++] = y >>> 16 & 65535, r[n++] = m >>> 0 & 65535, r[n++] = m >>> 16 & 65535, r[n++] = g >>> 0 & 65535, r[n++] = g >>> 16 & 65535, r[n++] = x >>> 0 & 65535, r[n++] = x >>> 16 & 65535, r[n++] = v >>> 0 & 65535, r[n++] = v >>> 16 & 65535, r[n++] = b >>> 0 & 65535, r[n] = b >>> 16 & 65535;
				})(e, t, r, i);
				return;
			case 32:
				for (let n = 0; n < 32; n = n + 1 | 0) r[i + n | 0] = 0 | e[t + n | 0];
				return;
		}
		let a = Fd[n] >>> 0, s = t, o = 0, l = e[s] >>> 0;
		for (let u = 0; u < 32; u++) if (o + n <= 32) {
			let t = l >>> o & a;
			r[i + u] = 0 | t, o += n, 32 === o && (o = 0, s++, 31 !== u && (l = e[s] >>> 0));
		} else {
			let t = 32 - o, h = l >>> o;
			s++, l = e[s] >>> 0;
			let c = (h | (l & Fd[n - t] >>> 0) << t) & a;
			r[i + u] = 0 | c, o = n - t;
		}
	}
	function Nd(e, t, r) {
		let i = new Uint32Array(r), n = 0, a = t.get();
		for (let s = 0; s < i.length; s++) {
			let t = e[a++], r = 127 & t;
			t < 128 || (t = e[a++], r |= (127 & t) << 7, t < 128 || (t = e[a++], r |= (127 & t) << 14, t < 128 || (t = e[a++], r |= (127 & t) << 21, t < 128 || (t = e[a++], r |= (15 & t) << 28)))), i[n++] = r;
		}
		return t.set(a), i;
	}
	function Ud(e, t, r) {
		let i = new BigUint64Array(r);
		for (let n = 0; n < i.length; n++) i[n] = jd(e, t);
		return i;
	}
	function jd(e, t) {
		let r = 0n, i = 0, n = t.get();
		for (; n < e.length;) {
			let t = e[n++];
			if (r |= BigInt(127 & t) << BigInt(i), !(128 & t)) break;
			if (i += 7, i >= 64) throw Error("Varint too long");
		}
		return t.set(n), r;
	}
	function qd(e, t) {
		let r, i;
		return i = e[t.get()], t.increment(), r = 127 & i, i < 128 || (i = e[t.get()], t.increment(), r |= (127 & i) << 7, i < 128) || (i = e[t.get()], t.increment(), r |= (127 & i) << 14, i < 128) || (i = e[t.get()], t.increment(), r |= (127 & i) << 21, i < 128) ? r : (i = e[t.get()], r |= (15 & i) << 28, function(e, t, r) {
			let i, n;
			if (n = t[r.get()], r.increment(), i = (112 & n) >> 4, n < 128 || (n = t[r.get()], r.increment(), i |= (127 & n) << 3, n < 128) || (n = t[r.get()], r.increment(), i |= (127 & n) << 10, n < 128) || (n = t[r.get()], r.increment(), i |= (127 & n) << 17, n < 128) || (n = t[r.get()], r.increment(), i |= (127 & n) << 24, n < 128) || (n = t[r.get()], r.increment(), i |= (1 & n) << 31, n < 128)) return 4294967296 * i + (e >>> 0);
			throw Error("Expected varint not more than 10 bytes");
		}(r, e, t));
	}
	function Gd(e, t, r, i) {
		return function(e, t, r, i, n) {
			let a = i.get();
			if (3 & r) throw Error(`FastPFOR: invalid encodedByteLength=${r} at offset=${a} (encodedBytes.length=${e.length}; expected a multiple of 4 bytes for an int32 big-endian word stream)`);
			let s = r >>> 2, o = function(e, t) {
				if (t <= e.encodedWords.length) return e.encodedWords;
				let r = new Uint32Array(Math.max(16, 2 * t));
				return e.encodedWords = r, r;
			}(n, s);
			(function(e, t, r, i) {
				if (t < 0 || r < 0 || t + r > e.length) throw RangeError(`decodeBigEndianInt32sInto: out of bounds (offset=${t}, byteLength=${r}, bytes.length=${e.length})`);
				let n = Math.floor(r / 4), a = r % 4 != 0, s = a ? n + 1 : n;
				if (i.length < s) throw RangeError(`decodeBigEndianInt32sInto: out.length=${i.length} < ${s}`);
				if (n > 0) {
					let r = e.byteOffset + t;
					if (3 & r) for (let a = 0; a < n; a++) {
						let r = t + 4 * a;
						i[a] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
					}
					else {
						let t = new Uint32Array(e.buffer, r, n);
						for (let e = 0; e < n; e++) i[e] = 0 | Bd(t[e]);
					}
				}
				if (a) {
					let a = t + 4 * n, s = r - 4 * n, o = 0;
					for (let t = 0; t < s; t++) o |= e[a + t] << 24 - 8 * t;
					i[n] = 0 | o;
				}
			})(e, a, r, o);
			let l = function(e, t, r) {
				let i = 0, n = 0, a = new Uint32Array(t), s = r ?? zd();
				if (e.length > 0) {
					let t = 0 | e[i];
					if (i = i + 1 | 0, 255 & t) throw Error(`FastPFOR decode: invalid alignedLength=${t} (expected multiple of 256)`);
					if (n + t > a.length) throw Error(`FastPFOR decode: output buffer too small (outPos=${n}, alignedLength=${t}, out.length=${a.length})`);
					i = function(e, t, r, i, n, a) {
						let s = i + Id(n, 256), o = i, l = r;
						for (; o !== s;) {
							let r = Math.min(Md, s - o);
							l = Rd(e, t, l, o, r, a), o = o + r | 0;
						}
						return l;
					}(e, a, i, n, t, s), n = n + t | 0;
				}
				return function(e, t, r, i, n, a) {
					if (0 === a) return t;
					let s = 0, o = t, l = t + r, u = n, h = n, c = n + a, p = 0, f = 0;
					for (; o < l && h < c;) {
						let t = e[o] >>> s & 255;
						if (s += 8, o += s >>> 5, s &= 31, p |= (127 & t) << f, 128 & t) i[h++] = 0 | p, p = 0, f = 0;
						else if (f += 7, f > 28) throw Error(`FastPFOR VByte: unterminated value (expected MSB=1 terminator within 5 bytes; shift=${f}, partial=${p}, decoded=${h - u}/${a}, inPos=${o}, inEnd=${l})`);
					}
					if (h !== c) throw Error(`FastPFOR VByte: truncated stream (decoded=${h - u}, expected=${a}, consumedWords=${o - t}/${r}, vbyteStart=${t}, vbyteEnd=${l})`);
				}(e, i, e.length - i | 0, a, n, t - n | 0), a;
			}(o.subarray(0, s), t, n.decoderWorkspace);
			return i.add(r), l;
		}(e, t, r, i, function(e = 16) {
			if (e < 0) throw RangeError(`initialEncodedWordCapacity must be >= 0, got ${e}`);
			let t = Math.max(16, 0 | e);
			return {
				encodedWords: new Uint32Array(t),
				decoderWorkspace: zd()
			};
		}(r >>> 2));
	}
	function Xd(e) {
		return e >>> 1 ^ -(1 & e);
	}
	function Yd(e) {
		return e >> 1n ^ -(1n & e);
	}
	function Wd(e) {
		return e % 2 == 1 ? (e + 1) / -2 : e / 2;
	}
	function Zd(e, t, r) {
		if (void 0 === r) {
			r = 0;
			for (let i = 0; i < t; i++) r += e[i];
		}
		let i = new Uint32Array(r), n = 0;
		for (let a = 0; a < t; a++) {
			let r = e[a], s = e[a + t];
			i.fill(s, n, n + r), n += r;
		}
		return i;
	}
	function Hd(e, t, r) {
		if (void 0 === r) {
			r = 0;
			for (let i = 0; i < t; i++) r += Number(e[i]);
		}
		let i = new BigUint64Array(r), n = 0;
		for (let a = 0; a < t; a++) {
			let r = Number(e[a]), s = e[a + t];
			i.fill(s, n, n + r), n += r;
		}
		return i;
	}
	function Kd(e, t, r) {
		let i = new Float64Array(r), n = 0;
		for (let a = 0; a < t; a++) {
			let r = e[a], s = e[a + t];
			i.fill(s, n, n + r), n += r;
		}
		return i;
	}
	function Jd(e) {
		let t = new Int32Array(e.length);
		t[0] = Xd(e[0]);
		let r = e.length / 4 * 4, i = 1;
		if (r >= 4) for (; i < r - 4; i += 4) {
			let r = e[i], n = e[i + 1], a = e[i + 2], s = e[i + 3];
			t[i] = Xd(r) + t[i - 1], t[i + 1] = Xd(n) + t[i], t[i + 2] = Xd(a) + t[i + 1], t[i + 3] = Xd(s) + t[i + 2];
		}
		for (; i !== e.length; ++i) t[i] = Xd(e[i]) + t[i - 1];
		return t;
	}
	function Qd(e) {
		let t = new BigInt64Array(e.length);
		t[0] = Yd(e[0]);
		let r = e.length / 4 * 4, i = 1;
		if (r >= 4) for (; i < r - 4; i += 4) {
			let r = e[i], n = e[i + 1], a = e[i + 2], s = e[i + 3];
			t[i] = Yd(r) + t[i - 1], t[i + 1] = Yd(n) + t[i], t[i + 2] = Yd(a) + t[i + 1], t[i + 3] = Yd(s) + t[i + 2];
		}
		for (; i !== t.length; ++i) t[i] = Yd(e[i]) + t[i - 1];
		return t;
	}
	function ey(e) {
		let t = e.length / 4 * 4, r = 1;
		if (t >= 4) for (let i = e[0]; r < t - 4; r += 4) i = e[r] += i, i = e[r + 1] += i, i = e[r + 2] += i, i = e[r + 3] += i;
		for (; r !== e.length;) e[r] += e[r - 1], ++r;
	}
	function ty(e, t, r, i) {
		if (e.length < 2) return new Int32Array(e);
		let n = new Int32Array(e.length), a = Xd(e[0]), s = Xd(e[1]);
		n[0] = ry(Math.round(a * t), r, i), n[1] = ry(Math.round(s * t), r, i);
		let o = e.length / 16, l = 2;
		if (o >= 4) for (; l < o - 4; l += 4) {
			let o = e[l], u = e[l + 1], h = Xd(o) + a, c = Xd(u) + s;
			n[l] = ry(Math.round(h * t), r, i), n[l + 1] = ry(Math.round(c * t), r, i);
			let p = e[l + 2], f = e[l + 3];
			a = Xd(p) + h, s = Xd(f) + c, n[l + 2] = ry(Math.round(a * t), r, i), n[l + 3] = ry(Math.round(s * t), r, i);
		}
		for (; l !== e.length; l += 2) a += Xd(e[l]), s += Xd(e[l + 1]), n[l] = ry(Math.round(a * t), r, i), n[l + 1] = ry(Math.round(s * t), r, i);
		return n;
	}
	function ry(e, t, r) {
		return Math.min(r, Math.max(t, e));
	}
	function iy(e) {
		let t = new Uint32Array(e.length);
		t[0] = Xd(e[0]) >>> 0;
		for (let r = 1; r < e.length; r++) t[r] = t[r - 1] + Xd(e[r]) >>> 0;
		return t;
	}
	function ny(e) {
		let t = new BigUint64Array(e.length);
		t[0] = BigInt.asUintN(64, Yd(e[0]));
		for (let r = 1; r < e.length; r++) t[r] = BigInt.asUintN(64, t[r - 1] + Yd(e[r]));
		return t;
	}
	var ay, sy, oy, ly;
	(function(e) {
		e.PRESENT = "PRESENT", e.DATA = "DATA", e.OFFSET = "OFFSET", e.LENGTH = "LENGTH";
	})(ay || (ay = {})), function(e) {
		e.NONE = "NONE", e.SINGLE = "SINGLE", e.SHARED = "SHARED", e.VERTEX = "VERTEX", e.MORTON = "MORTON", e.FSST = "FSST";
	}(sy || (sy = {})), function(e) {
		e.VERTEX = "VERTEX", e.INDEX = "INDEX", e.STRING = "STRING", e.KEY = "KEY";
	}(oy || (oy = {})), function(e) {
		e.VAR_BINARY = "VAR_BINARY", e.GEOMETRIES = "GEOMETRIES", e.PARTS = "PARTS", e.RINGS = "RINGS", e.TRIANGLES = "TRIANGLES", e.SYMBOL = "SYMBOL", e.DICTIONARY = "DICTIONARY";
	}(ly || (ly = {}));
	const uy = [
		ay.PRESENT,
		ay.DATA,
		ay.OFFSET,
		ay.LENGTH
	], hy = [
		Dd.NONE,
		Dd.DELTA,
		Dd.COMPONENTWISE_DELTA,
		Dd.RLE,
		Dd.MORTON
	], cy = [
		Sd.NONE,
		Sd.FAST_PFOR,
		Sd.VARINT
	], py = [
		sy.NONE,
		sy.SINGLE,
		sy.SHARED,
		sy.VERTEX,
		sy.MORTON,
		sy.FSST
	], fy = [
		oy.VERTEX,
		oy.INDEX,
		oy.STRING,
		oy.KEY
	], dy = [
		ly.VAR_BINARY,
		ly.GEOMETRIES,
		ly.PARTS,
		ly.RINGS,
		ly.TRIANGLES,
		ly.SYMBOL,
		ly.DICTIONARY
	];
	function yy(e, t) {
		let r = function(e, t) {
			let r = e[t.get()], i = uy[r >> 4], n = {};
			switch (i) {
				case ay.DATA:
					n = { dictionaryType: py[15 & r] };
					break;
				case ay.OFFSET:
					n = { offsetType: fy[15 & r] };
					break;
				case ay.LENGTH: n = { lengthType: dy[15 & r] };
			}
			t.increment();
			let a = e[t.get()], s = hy[a >> 5], o = hy[a >> 2 & 7], l = cy[3 & a];
			t.increment();
			let u = Nd(e, t, 2), h = u[0];
			return {
				physicalStreamType: i,
				logicalStreamType: n,
				logicalLevelTechnique1: s,
				logicalLevelTechnique2: o,
				physicalLevelTechnique: l,
				numValues: h,
				byteLength: u[1],
				decompressedCount: h
			};
		}(e, t);
		return r.logicalLevelTechnique1 === Dd.MORTON ? function(e, t, r) {
			let i = Nd(t, r, 2);
			return {
				physicalStreamType: e.physicalStreamType,
				logicalStreamType: e.logicalStreamType,
				logicalLevelTechnique1: e.logicalLevelTechnique1,
				logicalLevelTechnique2: e.logicalLevelTechnique2,
				physicalLevelTechnique: e.physicalLevelTechnique,
				numValues: e.numValues,
				byteLength: e.byteLength,
				decompressedCount: e.decompressedCount,
				numBits: i[0],
				coordinateShift: i[1]
			};
		}(r, e, t) : Dd.RLE !== r.logicalLevelTechnique1 && Dd.RLE !== r.logicalLevelTechnique2 || Sd.NONE === r.physicalLevelTechnique ? r : function(e, t, r) {
			let i = Nd(t, r, 2);
			return {
				physicalStreamType: e.physicalStreamType,
				logicalStreamType: e.logicalStreamType,
				logicalLevelTechnique1: e.logicalLevelTechnique1,
				logicalLevelTechnique2: e.logicalLevelTechnique2,
				physicalLevelTechnique: e.physicalLevelTechnique,
				numValues: e.numValues,
				byteLength: e.byteLength,
				decompressedCount: i[1],
				runs: i[0],
				numRleValues: i[1]
			};
		}(r, e, t);
	}
	var my;
	(function(e) {
		e[e.FLAT = 0] = "FLAT", e[e.CONST = 1] = "CONST", e[e.SEQUENCE = 2] = "SEQUENCE", e[e.DICTIONARY = 3] = "DICTIONARY", e[e.FSST_DICTIONARY = 4] = "FSST_DICTIONARY";
	})(my || (my = {}));
	var gy = class {
		constructor(e, t) {
			this.values = e, this._size = t;
		}
		get(e) {
			let t = Math.floor(e / 8), r = e % 8;
			return 1 == (this.values[t] >> r & 1);
		}
		set(e, t) {
			let r = Math.floor(e / 8), i = e % 8;
			this.values[r] = this.values[r] | +!!t << i;
		}
		getInt(e) {
			let t = Math.floor(e / 8), r = e % 8;
			return this.values[t] >> r & 1;
		}
		size() {
			return this._size;
		}
		getBuffer() {
			return this.values;
		}
	};
	function xy(e, t, r) {
		if (!t) return e;
		let i = t.size(), n = new e.constructor(i), a = 0;
		for (let s = 0; s < i; s++) n[s] = t.get(s) ? e[a++] : r;
		return n;
	}
	function vy(e, t, r) {
		for (let i = 0; i < e; i++) {
			let e = yy(t, r);
			r.add(e.byteLength);
		}
	}
	function by(e, t, r, i, n) {
		let a = function(e, t, r, i) {
			let n = new Uint8Array(t), a = 0, s = i.get() + r;
			for (; a < t && !(i.get() >= s);) {
				let r = e[i.increment()];
				if (r <= 127) {
					let s = r + 3, o = e[i.increment()], l = Math.min(a + s, t);
					n.fill(o, a, l), a = l;
				} else {
					let s = 256 - r;
					for (let r = 0; r < s && a < t; r++) n[a++] = e[i.increment()];
				}
			}
			return i.set(s), n;
		}(e, Math.ceil(t / 8), r, i);
		return n ? function(e, t, r) {
			if (!r) return e;
			let i = r.size(), n = new gy(e, t), a = new gy(new Uint8Array(Math.ceil(i / 8)), i), s = 0;
			for (let o = 0; o < i; o++) {
				let e = !!r.get(o) && n.get(s++);
				a.set(o, e);
			}
			return a.getBuffer();
		}(a, t, n) : a;
	}
	function wy(e, t, r, i) {
		let n = t.get(), a = n + r * Float32Array.BYTES_PER_ELEMENT, s = new Uint8Array(e.subarray(n, a)).buffer, o = new Float32Array(s);
		return t.set(a), i ? xy(o, i, 0) : o;
	}
	function _y(e, t, r, i) {
		let n = t.get(), a = n + r * Float64Array.BYTES_PER_ELEMENT, s = new Uint8Array(e.subarray(n, a)).buffer, o = new Float64Array(s);
		return t.set(a), i ? xy(o, i, 0) : o;
	}
	const Dy = new TextDecoder();
	function Sy(e, t, r) {
		return r - t >= 12 ? Dy.decode(e.subarray(t, r)) : function(e, t, r) {
			let i = "", n = t;
			for (; n < r;) {
				let t, a, s, o = e[n], l = null, u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
				if (n + u > r) break;
				1 === u ? o < 128 && (l = o) : 2 === u ? (t = e[n + 1], 128 == (192 & t) && (l = (31 & o) << 6 | 63 & t, l <= 127 && (l = null))) : 3 === u ? (t = e[n + 1], a = e[n + 2], 128 == (192 & t) && 128 == (192 & a) && (l = (15 & o) << 12 | (63 & t) << 6 | 63 & a, (l <= 2047 || l >= 55296 && l <= 57343) && (l = null))) : 4 === u && (t = e[n + 1], a = e[n + 2], s = e[n + 3], 128 == (192 & t) && 128 == (192 & a) && 128 == (192 & s) && (l = (15 & o) << 18 | (63 & t) << 12 | (63 & a) << 6 | 63 & s, (l <= 65535 || l >= 1114112) && (l = null))), null === l ? (l = 65533, u = 1) : l > 65535 && (l -= 65536, i += String.fromCharCode(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), i += String.fromCharCode(l), n += u;
			}
			return i;
		}(e, t, r);
	}
	function Ay(e, t, r, i, n) {
		return function(e, t, r, i) {
			let n;
			switch (t.logicalLevelTechnique1) {
				case Dd.DELTA:
					if (t.logicalLevelTechnique2 === Dd.RLE) {
						let r = t;
						if (!i) return function(e, t, r) {
							let i = new Int32Array(r), n = 0, a = 0;
							for (let s = 0; s < t; s++) {
								let r = e[s], o = Xd(e[s + t]);
								for (let e = 0; e < r; e++) a += o, i[n++] = a;
							}
							return i;
						}(e, r.runs, r.numRleValues);
						n = Jd(e = Zd(e, r.runs, r.numRleValues));
					} else n = Jd(e);
					break;
				case Dd.RLE:
					n = function(e, t, r) {
						if (void 0 === r) {
							r = 0;
							for (let i = 0; i < t; i++) r += e[i];
						}
						let i = new Int32Array(r), n = 0;
						for (let a = 0; a < t; a++) {
							let r = e[a], s = e[a + t];
							s = Xd(s), i.fill(s, n, n + r), n += r;
						}
						return i;
					}(e, t.runs, t.numRleValues);
					break;
				case Dd.MORTON:
					ey(e), n = new Int32Array(e);
					break;
				case Dd.COMPONENTWISE_DELTA:
					if (r && !i) return ty(e, r.scale, r.min, r.max);
					n = function(e) {
						if (e.length < 2) return new Int32Array(e);
						let t = new Int32Array(e.length);
						t[0] = Xd(e[0]), t[1] = Xd(e[1]);
						let r = e.length / 4 * 4, i = 2;
						if (r >= 4) for (; i < r - 4; i += 4) {
							let r = e[i], n = e[i + 1], a = e[i + 2], s = e[i + 3];
							t[i] = Xd(r) + t[i - 2], t[i + 1] = Xd(n) + t[i - 1], t[i + 2] = Xd(a) + t[i], t[i + 3] = Xd(s) + t[i + 1];
						}
						for (; i !== e.length; i += 2) t[i] = Xd(e[i]) + t[i - 2], t[i + 1] = Xd(e[i + 1]) + t[i - 1];
						return t;
					}(e);
					break;
				case Dd.NONE:
					n = function(e) {
						let t = new Int32Array(e.length);
						for (let r = 0; r < e.length; r++) t[r] = Xd(e[r]);
						return t;
					}(e);
					break;
				default: throw Error(`The specified Logical level technique is not supported: ${t.logicalLevelTechnique1}`);
			}
			return i ? xy(n, i, 0) : n;
		}(ky(e, t, r), r, i, n);
	}
	function Ey(e, t, r, i, n) {
		return function(e, t, r, i) {
			let n;
			switch (t.logicalLevelTechnique1) {
				case Dd.DELTA:
					if (t.logicalLevelTechnique2 === Dd.RLE) {
						let r = t;
						n = iy(Zd(e, r.runs, r.numRleValues));
					} else n = iy(e);
					break;
				case Dd.RLE:
					n = Zd(e, t.runs, t.numRleValues);
					break;
				case Dd.MORTON:
					ey(e), n = e;
					break;
				case Dd.COMPONENTWISE_DELTA:
					n = r && !i ? function(e, t, r, i) {
						let n = ty(e, t, r, i);
						return new Uint32Array(n);
					}(e, r.scale, r.min, r.max) : function(e) {
						if (e.length < 2) return new Uint32Array(e);
						let t = new Uint32Array(e.length);
						t[0] = Xd(e[0]) >>> 0, t[1] = Xd(e[1]) >>> 0;
						for (let r = 2; r < e.length; r += 2) t[r] = t[r - 2] + Xd(e[r]) >>> 0, t[r + 1] = t[r - 1] + Xd(e[r + 1]) >>> 0;
						return t;
					}(e);
					break;
				case Dd.NONE:
					n = e;
					break;
				default: throw Error(`The specified Logical level technique is not supported: ${t.logicalLevelTechnique1}`);
			}
			return i ? xy(n, i, 0) : n;
		}(ky(e, t, r), r, i, n);
	}
	function Fy(e, t, r) {
		return function(e, t) {
			if (t.logicalLevelTechnique1 === Dd.DELTA && t.logicalLevelTechnique2 === Dd.NONE) return function(e) {
				let t = new Int32Array(e.length + 1);
				t[0] = 0, t[1] = Xd(e[0]);
				let r = t[1];
				for (let i = 2; i !== t.length; ++i) r += Xd(e[i - 1]), t[i] = t[i - 1] + r;
				return new Uint32Array(t);
			}(e);
			if (t.logicalLevelTechnique1 === Dd.RLE && t.logicalLevelTechnique2 === Dd.NONE) {
				let r = t;
				return function(e, t, r) {
					let i = new Uint32Array(r + 1);
					i[0] = 0;
					let n = 1, a = i[0];
					for (let s = 0; s < t; s++) {
						let r = e[s], o = e[s + t];
						for (let e = n; e < n + r; e++) i[e] = o + a, a = i[e];
						n += r;
					}
					return i;
				}(e, r.runs, r.numRleValues);
			}
			if (t.logicalLevelTechnique1 === Dd.NONE && t.logicalLevelTechnique2 === Dd.NONE) {
				(function(e) {
					let t = 0;
					for (let r = 0; r < e.length; r++) e[r] += t, t = e[r];
				})(e);
				let r = new Uint32Array(t.numValues + 1);
				return r[0] = 0, r.set(e, 1), r;
			}
			if (t.logicalLevelTechnique1 === Dd.DELTA && t.logicalLevelTechnique2 === Dd.RLE) {
				let r = t, i = function(e, t, r) {
					let i = new Int32Array(r + 1);
					i[0] = 0;
					let n = 1, a = i[0];
					for (let s = 0; s < t; s++) {
						let r = e[s], o = e[s + t];
						o = Xd(o);
						for (let e = n; e < n + r; e++) i[e] = o + a, a = i[e];
						n += r;
					}
					return i;
				}(e, r.runs, r.numRleValues);
				return ey(i), new Uint32Array(i);
			}
			throw Error("Only delta encoding is supported for transforming length to offset streams yet.");
		}(ky(e, t, r), r);
	}
	function ky(e, t, r) {
		let i = r.physicalLevelTechnique;
		switch (i) {
			case Sd.FAST_PFOR: return Gd(e, r.numValues, r.byteLength, t);
			case Sd.VARINT: return Nd(e, t, r.numValues);
			case Sd.NONE: return function(e, t, r) {
				let i = t.get(), n = r * Uint32Array.BYTES_PER_ELEMENT, a = new DataView(e.buffer, e.byteOffset, e.byteLength), s = new Uint32Array(r);
				for (let o = 0; o < r; o++) s[o] = a.getUint32(i + o * Uint32Array.BYTES_PER_ELEMENT, !0);
				return t.add(n), s;
			}(e, t, r.numValues);
			default: throw Error(`Specified physicalLevelTechnique ${i} is not supported (yet).`);
		}
	}
	function Iy(e, t, r) {
		let i = r.physicalLevelTechnique;
		switch (i) {
			case Sd.VARINT: return Ud(e, t, r.numValues);
			case Sd.NONE: return function(e, t, r) {
				let i = t.get(), n = r * BigUint64Array.BYTES_PER_ELEMENT, a = new DataView(e.buffer, e.byteOffset, e.byteLength), s = new BigUint64Array(r);
				for (let o = 0; o < r; o++) s[o] = a.getBigUint64(i + o * BigUint64Array.BYTES_PER_ELEMENT, !0);
				return t.add(n), s;
			}(e, t, r.numValues);
			default: throw Error(`Specified physicalLevelTechnique ${i} is not supported (yet).`);
		}
	}
	function Ty(e, t, r) {
		let i = ky(e, t, r);
		return 1 === i.length ? r.logicalLevelTechnique1 === Dd.DELTA ? Xd(i[0]) : i[0] : function(e) {
			return e[1];
		}(i);
	}
	function Cy(e, t, r) {
		return function(e) {
			if (2 === e.length) {
				let t = Xd(e[1]);
				return [t, t];
			}
			return [Xd(e[2]), Xd(e[3])];
		}(ky(e, t, r));
	}
	function By(e, t, r) {
		return function(e) {
			if (2 === e.length) {
				let t = Yd(e[1]);
				return [t, t];
			}
			return [Yd(e[2]), Yd(e[3])];
		}(Ud(e, t, r.numValues));
	}
	function My(e, t, r, i) {
		return Ly(Iy(e, t, r), r, i);
	}
	function Py(e, t, r, i) {
		return Vy(Iy(e, t, r), r, i);
	}
	function zy(e, t, r) {
		let i = Iy(e, t, r);
		return 1 === i.length ? r.logicalLevelTechnique1 === Dd.DELTA ? Yd(i[0]) : i[0] : function(e) {
			return e[1];
		}(i);
	}
	function Ly(e, t, r) {
		let i;
		switch (t.logicalLevelTechnique1) {
			case Dd.DELTA:
				if (t.logicalLevelTechnique2 === Dd.RLE) {
					let n = t;
					if (!r) return function(e, t, r) {
						let i = new BigInt64Array(r), n = 0, a = 0n;
						for (let s = 0; s < t; s++) {
							let r = Number(e[s]), o = Yd(e[s + t]);
							for (let e = 0; e < r; e++) a += o, i[n++] = a;
						}
						return i;
					}(e, n.runs, n.numRleValues);
					i = Qd(e = Hd(e, n.runs, n.numRleValues));
				} else i = Qd(e);
				break;
			case Dd.RLE:
				i = function(e, t, r) {
					if (void 0 === r) {
						r = 0;
						for (let i = 0; i < t; i++) r += Number(e[i]);
					}
					let i = new BigInt64Array(r), n = 0;
					for (let a = 0; a < t; a++) {
						let r = Number(e[a]), s = e[a + t];
						s = Yd(s), i.fill(s, n, n + r), n += r;
					}
					return i;
				}(e, t.runs, t.numRleValues);
				break;
			case Dd.NONE:
				i = function(e) {
					let t = new BigInt64Array(e.length);
					for (let r = 0; r < e.length; r++) t[r] = Yd(e[r]);
					return t;
				}(e);
				break;
			default: throw Error(`The specified Logical level technique is not supported: ${t.logicalLevelTechnique1}`);
		}
		return r ? xy(i, r, 0n) : i;
	}
	function Vy(e, t, r) {
		let i;
		switch (t.logicalLevelTechnique1) {
			case Dd.DELTA:
				if (t.logicalLevelTechnique2 === Dd.RLE) {
					let r = t;
					i = ny(Hd(e, r.runs, r.numRleValues));
				} else i = ny(e);
				break;
			case Dd.RLE:
				i = Hd(e, t.runs, t.numRleValues);
				break;
			case Dd.NONE:
				i = e;
				break;
			default: throw Error(`The specified Logical level technique is not supported: ${t.logicalLevelTechnique1}`);
		}
		return r ? xy(i, r, 0n) : i;
	}
	function Oy(e, t, r, i, n = "int32") {
		let a = e.logicalLevelTechnique1;
		if (a === Dd.RLE) return 1 === e.runs ? my.CONST : my.FLAT;
		if (a !== Dd.DELTA || e.logicalLevelTechnique2 !== Dd.RLE) return 1 === e.numValues ? my.CONST : my.FLAT;
		let s = t instanceof gy ? t.size() : t, o = e;
		if (o.numRleValues !== s) return my.FLAT;
		if (1 === o.runs) return my.SEQUENCE;
		if (2 !== o.runs) return 1 === e.numValues ? my.CONST : my.FLAT;
		let l = i.get();
		if (e.physicalLevelTechnique === Sd.VARINT) return function(e, t, r) {
			let i = new Ad(t.get());
			if ("int64" === r) {
				let t = Ud(e, i, 4);
				return 2n === t[2] && 2n === t[3];
			}
			let n = Nd(e, i, 4);
			return 2 === n[2] && 2 === n[3];
		}(r, i, n) ? my.SEQUENCE : 1 === e.numValues ? my.CONST : my.FLAT;
		let u = i.get(), h = new Int32Array(r.buffer, r.byteOffset + u, 4);
		return i.set(l), 2 === h[2] && 2 === h[3] ? my.SEQUENCE : 1 === e.numValues ? my.CONST : my.FLAT;
	}
	var Ry, $y, Ny, Uy = class extends md {
		getValueFromBuffer(e) {
			return this.dataBuffer[e];
		}
	}, jy = class extends vd {
		constructor(e, t, r, i, n) {
			super(e, n ? BigInt64Array.of(t) : BigUint64Array.of(t), r, i);
		}
		getValueFromBuffer(e) {
			return this.dataBuffer[0] + BigInt(e) * this.delta;
		}
	};
	function qy(e, t, r) {
		return {
			x: Gy(e, t) - r,
			y: Gy(e >> 1, t) - r
		};
	}
	function Gy(e, t) {
		let r = 0;
		for (let i = 0; i < t; i++) r |= (e & 1 << 2 * i) >> i;
		return r;
	}
	function Xy(e, t, r, i, n, a, s) {
		return e === Ny.MORTON ? function(e, t, r, i, n, a) {
			let s = Array(n ? i + 1 : i);
			for (let o = 0; o < i; o++) {
				let i = qy(e[t[r + o]], a.numBits, a.coordinateShift);
				s[o] = new f(i.x, i.y);
			}
			return n && (s[s.length - 1] = s[0]), s;
		}(t, r, i, n, a, s) : function(e, t, r, i, n) {
			let a = Array(n ? i + 1 : i);
			for (let s = 0; s < 2 * i; s += 2) {
				let i = 2 * t[r + s / 2], n = e[i], o = e[i + 1];
				a[s / 2] = new f(n, o);
			}
			return n && (a[a.length - 1] = a[0]), a;
		}(t, r, i, n, a);
	}
	function Yy(e, t, r, i) {
		let n = Array(i ? r + 1 : r);
		for (let a = 0; a < 2 * r; a += 2) {
			let r = e[t + a], i = e[t + a + 1];
			n[a / 2] = new f(r, i);
		}
		return i && (n[n.length - 1] = n[0]), n;
	}
	(function(e) {
		e[e.POINT = 0] = "POINT", e[e.LINESTRING = 1] = "LINESTRING", e[e.POLYGON = 2] = "POLYGON", e[e.MULTIPOINT = 3] = "MULTIPOINT", e[e.MULTILINESTRING = 4] = "MULTILINESTRING", e[e.MULTIPOLYGON = 5] = "MULTIPOLYGON";
	})(Ry || (Ry = {})), function(e) {
		e[e.POINT = 0] = "POINT", e[e.LINESTRING = 1] = "LINESTRING", e[e.POLYGON = 2] = "POLYGON";
	}($y || ($y = {})), function(e) {
		e[e.MORTON = 0] = "MORTON", e[e.VEC_2 = 1] = "VEC_2", e[e.VEC_3 = 2] = "VEC_3";
	}(Ny || (Ny = {}));
	var Wy = class {
		constructor(e, t, r, i, n) {
			this._vertexBufferType = e, this._topologyVector = t, this._vertexOffsets = r, this._vertexBuffer = i, this._mortonSettings = n;
		}
		get vertexBufferType() {
			return this._vertexBufferType;
		}
		get topologyVector() {
			return this._topologyVector;
		}
		get vertexOffsets() {
			return this._vertexOffsets;
		}
		get vertexBuffer() {
			return this._vertexBuffer;
		}
		getSimpleEncodedVertex(e) {
			let t = this.vertexOffsets ? 2 * this.vertexOffsets[e] : 2 * e;
			return [this.vertexBuffer[t], this.vertexBuffer[t + 1]];
		}
		getVertex(e) {
			if (this.vertexOffsets && this.mortonSettings) {
				let t = this.vertexOffsets[e], r = qy(this.vertexBuffer[t], this.mortonSettings.numBits, this.mortonSettings.coordinateShift);
				return [r.x, r.y];
			}
			let t = this.vertexOffsets ? 2 * this.vertexOffsets[e] : 2 * e;
			return [this.vertexBuffer[t], this.vertexBuffer[t + 1]];
		}
		getGeometries() {
			return function(e) {
				let t = Array(e.numGeometries), r = 1, i = 1, n = 1, a = 0, s = 0, o = 0, l = e.mortonSettings, u = e.topologyVector, h = u.geometryOffsets, c = u.partOffsets, p = u.ringOffsets, d = e.vertexOffsets, y = !d || 0 === d.length, m = e.containsPolygonGeometry(), g = e.vertexBuffer;
				for (let x = 0; x < e.numGeometries; x++) {
					let u = e.geometryType(x);
					switch (u) {
						case Ry.POINT:
							{
								let u, m;
								if (y) u = g[s++], m = g[s++];
								else if (e.vertexBufferType === Ny.MORTON) {
									let e = qy(g[d[o++]], l.numBits, l.coordinateShift);
									u = e.x, m = e.y;
								} else {
									let e = 2 * d[o++];
									u = g[e], m = g[e + 1];
								}
								t[a++] = [[new f(u, m)]], h && n++, c && r++, p && i++;
							}
							break;
						case Ry.MULTIPOINT:
							{
								let u, c = h[n] - h[n - 1];
								if (n++, y) {
									u = Array(c);
									for (let e = 0; e < c; e++) {
										let t = g[s++], r = g[s++];
										u[e] = new f(t, r);
									}
								} else u = Xy(e.vertexBufferType, g, d, o, c, !1, l), o += c;
								t[a++] = u.map((e) => [e]), r += c, i += c;
							}
							break;
						case Ry.LINESTRING:
							{
								let u, f;
								m ? (u = p[i] - p[i - 1], i++) : u = c[r] - c[r - 1], r++, y ? (f = Yy(g, s, u, !1), s += 2 * u) : (f = Xy(e.vertexBufferType, g, d, o, u, !1, l), o += u), t[a++] = [f], h && n++;
							}
							break;
						case Ry.POLYGON:
							{
								let u = c[r] - c[r - 1];
								r++;
								let f, m = Array(u - 1), x = p[i] - p[i - 1];
								if (i++, y) {
									f = Yy(g, s, x, !0), s += 2 * x;
									for (let e = 0; e < m.length; e++) x = p[i] - p[i - 1], i++, m[e] = Yy(g, s, x, !0), s += 2 * x;
								} else {
									f = Xy(e.vertexBufferType, g, d, o, x, !0, l), o += x;
									for (let t = 0; t < m.length; t++) x = p[i] - p[i - 1], i++, m[t] = Xy(e.vertexBufferType, g, d, o, x, !0, l), o += x;
								}
								t[a++] = [f].concat(m), h && n++;
							}
							break;
						case Ry.MULTILINESTRING:
							{
								let u = h[n] - h[n - 1];
								n++;
								let f = Array(u);
								for (let t = 0; t < u; t++) {
									let n;
									m ? (n = p[i] - p[i - 1], i++) : n = c[r] - c[r - 1], r++, y ? (f[t] = Yy(g, s, n, !1), s += 2 * n) : (f[t] = Xy(e.vertexBufferType, g, d, o, n, !1, l), o += n);
								}
								t[a++] = f;
							}
							break;
						case Ry.MULTIPOLYGON:
							{
								let u = h[n] - h[n - 1];
								n++;
								let f = Array(u);
								for (let t = 0; t < u; t++) {
									let n = c[r] - c[r - 1];
									r++;
									let a, u = Array(n - 1), h = p[i] - p[i - 1];
									i++, y ? (a = Yy(g, s, h, !0), s += 2 * h) : (a = Xy(e.vertexBufferType, g, d, o, h, !0, l), o += h);
									for (let t = 0; t < u.length; t++) {
										let r = p[i] - p[i - 1];
										i++, y ? (u[t] = Yy(g, s, r, !0), s += 2 * r) : (u[t] = Xy(e.vertexBufferType, g, d, o, r, !0, l), o += r);
									}
									f[t] = [a].concat(u);
								}
								t[a++] = f.flat();
							}
							break;
						default: throw Error(`The specified geometry type (${u}) is currently not supported.`);
					}
				}
				return t;
			}(this);
		}
		get mortonSettings() {
			return this._mortonSettings;
		}
	}, Zy = class extends Wy {
		constructor(e, t, r, i, n, a, s) {
			super(r, i, n, a, s), this._numGeometries = e, this._geometryType = t;
		}
		geometryType(e) {
			return this._geometryType;
		}
		get numGeometries() {
			return this._numGeometries;
		}
		containsPolygonGeometry() {
			return this._geometryType === Ry.POLYGON || this._geometryType === Ry.MULTIPOLYGON;
		}
		containsSingleGeometryType() {
			return !0;
		}
	};
	function Hy(e, t, r, i) {
		return new Ky(Ny.VEC_2, e, t, r, i);
	}
	var Ky = class extends Wy {
		constructor(e, t, r, i, n, a) {
			super(e, r, i, n, a), this._geometryTypes = t;
		}
		geometryType(e) {
			return this._geometryTypes[e];
		}
		get numGeometries() {
			return this._geometryTypes.length;
		}
		containsPolygonGeometry() {
			for (let e = 0; e < this.numGeometries; e++) if (this.geometryType(e) === Ry.POLYGON || this.geometryType(e) === Ry.MULTIPOLYGON) return !0;
			return !1;
		}
		containsSingleGeometryType() {
			return !1;
		}
	}, Jy = class {
		constructor(e, t, r, i) {
			this._triangleOffsets = e, this._indexBuffer = t, this._vertexBuffer = r, this._topologyVector = i;
		}
		get triangleOffsets() {
			return this._triangleOffsets;
		}
		get indexBuffer() {
			return this._indexBuffer;
		}
		get vertexBuffer() {
			return this._vertexBuffer;
		}
		get topologyVector() {
			return this._topologyVector;
		}
		getGeometries() {
			if (!this._topologyVector) throw Error("Cannot convert GpuVector to coordinates without topology information");
			let e = new Uint32Array(this.numGeometries);
			for (let t = 0; t < this.numGeometries; t++) e[t] = this.geometryType(t);
			return Hy(e, this._topologyVector, void 0, this._vertexBuffer).getGeometries();
		}
		[Symbol.iterator]() {
			return null;
		}
	};
	function Qy(e, t, r, i, n, a) {
		return new em(e, t, r, i, n, a);
	}
	var em = class extends Jy {
		constructor(e, t, r, i, n, a) {
			super(r, i, n, a), this._numGeometries = e, this._geometryType = t;
		}
		geometryType(e) {
			return this._geometryType;
		}
		get numGeometries() {
			return this._numGeometries;
		}
		containsSingleGeometryType() {
			return !0;
		}
	};
	function tm(e, t, r, i, n) {
		return new rm(e, t, r, i, n);
	}
	var rm = class extends Jy {
		constructor(e, t, r, i, n) {
			super(t, r, i, n), this._geometryTypes = e;
		}
		geometryType(e) {
			return this._geometryTypes[e];
		}
		get numGeometries() {
			return this._geometryTypes.length;
		}
		containsSingleGeometryType() {
			return !1;
		}
	};
	function im(e, t, r, i, n) {
		let a, s, o, l, u = yy(e, r);
		if (Oy(u, i, e, r) === my.CONST) {
			let h, c, p, f, d = Ty(e, r, u);
			for (let i = 0; i < t - 1; i++) {
				let t = yy(e, r);
				switch (t.physicalStreamType) {
					case ay.LENGTH:
						switch (t.logicalStreamType.lengthType) {
							case ly.GEOMETRIES:
								h = Fy(e, r, t);
								break;
							case ly.PARTS:
								c = Fy(e, r, t);
								break;
							case ly.RINGS:
								p = Fy(e, r, t);
								break;
							case ly.TRIANGLES: f = Fy(e, r, t);
						}
						break;
					case ay.OFFSET:
						switch (t.logicalStreamType.offsetType) {
							case oy.VERTEX:
								a = Ey(e, r, t);
								break;
							case oy.INDEX: l = Ey(e, r, t);
						}
						break;
					case ay.DATA: if (sy.VERTEX === t.logicalStreamType.dictionaryType) s = Ay(e, r, t, n);
					else {
						let i = t;
						o = {
							numBits: i.numBits,
							coordinateShift: i.coordinateShift
						}, s = Ey(e, r, t, n);
					}
				}
			}
			return l ? void 0 !== h || void 0 !== c ? Qy(i, d, f, l, s, {
				geometryOffsets: h,
				partOffsets: c,
				ringOffsets: p
			}) : Qy(i, d, f, l, s) : void 0 === o ? function(e, t, r, i, n) {
				return new Zy(e, t, Ny.VEC_2, r, i, n);
			}(i, d, {
				geometryOffsets: h,
				partOffsets: c,
				ringOffsets: p
			}, a, s) : function(e, t, r, i, n, a) {
				return new Zy(e, t, Ny.MORTON, r, i, n, a);
			}(i, d, {
				geometryOffsets: h,
				partOffsets: c,
				ringOffsets: p
			}, a, s, o);
		}
		let h, c, p, f, d, y, m, g = Ey(e, r, u);
		for (let x = 0; x < t - 1; x++) {
			let t = yy(e, r);
			switch (t.physicalStreamType) {
				case ay.LENGTH:
					switch (t.logicalStreamType.lengthType) {
						case ly.GEOMETRIES:
							h = Ey(e, r, t);
							break;
						case ly.PARTS:
							c = Ey(e, r, t);
							break;
						case ly.RINGS:
							p = Ey(e, r, t);
							break;
						case ly.TRIANGLES: f = Fy(e, r, t);
					}
					break;
				case ay.OFFSET:
					switch (t.logicalStreamType.offsetType) {
						case oy.VERTEX:
							a = Ey(e, r, t);
							break;
						case oy.INDEX: l = Ey(e, r, t);
					}
					break;
				case ay.DATA: if (sy.VERTEX === t.logicalStreamType.dictionaryType) s = Ay(e, r, t, n);
				else {
					let i = t;
					o = {
						numBits: i.numBits,
						coordinateShift: i.coordinateShift
					}, s = Ey(e, r, t, n);
				}
			}
		}
		return h ? (d = nm(g, h, 2), c && p ? (y = am(g, d, c, !1), m = function(e, t, r, i) {
			let n = new Uint32Array(r[r.length - 1] + 1), a = 0;
			n[0] = a;
			let s = 1, o = 1, l = 0;
			for (let u = 0; u < e.length; u++) {
				let h = e[u], c = t[u + 1] - t[u];
				if (0 !== h && 3 !== h) for (let e = 0; e < c; e++) {
					let e = r[s] - r[s - 1];
					s++;
					for (let t = 0; t < e; t++) a = n[o++] = a + i[l++];
				}
				else for (let e = 0; e < c; e++) n[o++] = ++a, s++;
			}
			return n;
		}(g, d, y, p)) : c && (y = function(e, t, r) {
			let i = new Uint32Array(t[t.length - 1] + 1), n = 0;
			i[0] = n;
			let a = 1, s = 0;
			for (let o = 0; o < e.length; o++) {
				let l = e[o], u = t[o + 1] - t[o];
				if (4 === l || 1 === l) for (let e = 0; e < u; e++) n = i[a++] = n + r[s++];
				else for (let e = 0; e < u; e++) i[a++] = ++n;
			}
			return i;
		}(g, d, c))) : c && p ? (y = nm(g, c, 1), m = am(g, y, p, !0)) : c && (y = nm(g, c, 0)), l && !y ? tm(g, f, l, s) : l ? tm(g, f, l, s, {
			geometryOffsets: d,
			partOffsets: y,
			ringOffsets: m
		}) : void 0 === o ? Hy(g, {
			geometryOffsets: d,
			partOffsets: y,
			ringOffsets: m
		}, a, s) : function(e, t, r, i, n) {
			return new Ky(Ny.MORTON, e, t, r, i, n);
		}(g, {
			geometryOffsets: d,
			partOffsets: y,
			ringOffsets: m
		}, a, s, o);
	}
	function nm(e, t, r) {
		let i = new Uint32Array(e.length + 1), n = 0;
		i[0] = n;
		let a = 0;
		for (let s = 0; s < e.length; s++) n = i[s + 1] = n + (e[s] > r ? t[a++] : 1);
		return i;
	}
	function am(e, t, r, i) {
		let n = new Uint32Array(t[t.length - 1] + 1), a = 0;
		n[0] = a;
		let s = 1, o = 0;
		for (let l = 0; l < e.length; l++) {
			let u = e[l], h = t[l + 1] - t[l];
			if (5 === u || 2 === u || i && (4 === u || 1 === u)) for (let e = 0; e < h; e++) a = n[s++] = a + r[o++];
			else for (let e = 0; e < h; e++) n[s++] = ++a;
		}
		return n;
	}
	var sm = class extends yd {
		constructor(e, t, r) {
			super(e, t.getBuffer(), r), this.dataVector = t;
		}
		getValueFromBuffer(e) {
			return this.dataVector.get(e);
		}
	}, om = class extends md {
		getValueFromBuffer(e) {
			return this.dataBuffer[e];
		}
	}, lm = class extends yd {
		constructor(e, t, r, i) {
			super(e, i ? BigInt64Array.of(t) : BigUint64Array.of(t), r);
		}
		getValueFromBuffer(e) {
			return this.dataBuffer[0];
		}
	}, um = class extends yd {
		constructor(e, t, r, i) {
			super(e, r, i), this.offsetBuffer = t;
		}
	}, hm = class extends um {
		constructor(e, t, r, i) {
			super(e, t, r, i ?? t.length - 1);
		}
		getValueFromBuffer(e) {
			let t = this.offsetBuffer[e], r = this.offsetBuffer[e + 1];
			return Sy(this.dataBuffer, t, r);
		}
	}, cm = class extends um {
		constructor(e, t, r, i, n) {
			super(e, r, i, n ?? t.length), this.indexBuffer = t, this.indexBuffer = t;
		}
		getValueFromBuffer(e) {
			let t = this.indexBuffer[e], r = this.offsetBuffer[t], i = this.offsetBuffer[t + 1];
			return Sy(this.dataBuffer, r, i);
		}
	}, pm = class extends um {
		constructor(e, t, r, i, n, a, s, o) {
			super(e, r, i, s ?? t.length), this.indexBuffer = t, this.symbolOffsetBuffer = n, this.symbolTableBuffer = a, this.sharedDictionaryCache = o;
		}
		getValueFromBuffer(e) {
			this.decodedDictionary ?? (this.decodedDictionary = this.sharedDictionaryCache?.decodedDictionary, this.decodedDictionary ?? (this.decodedDictionary = this.decodeDictionary(), this.sharedDictionaryCache && (this.sharedDictionaryCache.decodedDictionary = this.decodedDictionary)));
			let t = this.indexBuffer[e], r = this.offsetBuffer[t], i = this.offsetBuffer[t + 1];
			return Sy(this.decodedDictionary, r, i);
		}
		decodeDictionary() {
			return this.symbolLengthBuffer ?? (this.symbolLengthBuffer = this.offsetToLengthBuffer(this.symbolOffsetBuffer)), function(e, t, r) {
				let i = new Uint32Array(t.length);
				for (let s = 1; s < t.length; s++) i[s] = i[s - 1] + t[s - 1];
				let n = new Uint8Array(function(e, t) {
					let r = 0;
					for (let i = 0; i < t.length; i++) {
						let n = t[i];
						255 === n ? (r++, i++) : r += e[n];
					}
					return r;
				}(t, r)), a = 0;
				for (let s = 0; s < r.length; s++) {
					let o = r[s];
					if (255 === o) s++, n[a++] = r[s];
					else {
						let r = t[o], s = i[o];
						for (; r-- > 0;) n[a++] = e[s++];
					}
				}
				return n;
			}(this.symbolTableBuffer, this.symbolLengthBuffer, this.dataBuffer);
		}
		offsetToLengthBuffer(e) {
			let t = new Uint32Array(e.length - 1), r = e[0];
			for (let i = 1; i < e.length; i++) {
				let n = e[i];
				t[i - 1] = n - r, r = n;
			}
			return t;
		}
	};
	function fm(e, t, r, i, n) {
		let a, s, o, l, u, h, c, p = n;
		for (let f = 0; f < i; f++) {
			let e = yy(t, r);
			switch (e.physicalStreamType) {
				case ay.PRESENT: {
					let i = new gy(by(t, e.numValues, e.byteLength, r), e.numValues);
					p = n ?? i;
					break;
				}
				case ay.OFFSET:
					s = Ey(t, r, e, void 0, p);
					break;
				case ay.LENGTH: {
					let i = Fy(t, r, e);
					ly.DICTIONARY === e.logicalStreamType.lengthType ? a = i : ly.SYMBOL === e.logicalStreamType.lengthType ? l = i : h = i;
					break;
				}
				case ay.DATA: {
					let i = t.subarray(r.get(), r.get() + e.byteLength);
					r.add(e.byteLength);
					let n = e.logicalStreamType.dictionaryType;
					sy.FSST === n ? u = i : sy.SINGLE === n || sy.SHARED === n ? o = i : sy.NONE === n && (c = i);
					break;
				}
			}
		}
		return function(e, t, r, i, n, a, s) {
			if (t) {
				if (!(r && i && n && a)) throw Error(`Incomplete FSST dictionary string column "${e}"`);
				return new pm(e, r, i, n, a, t, s);
			}
		}(e, u, s, a, o, l, p) ?? function(e, t, r, i, n) {
			if (t) {
				if (!r || !i) throw Error(`Incomplete dictionary string column "${e}"`);
				return n ? new cm(e, r, i, t, n) : new cm(e, r, i, t);
			}
		}(e, o, s, a, p) ?? function(e, t, r, i, n) {
			if (t && r) {
				if (i) return n ? new cm(e, i, t, r, n) : new cm(e, i, t, r);
				if (n && n.size() !== t.length - 1) {
					let i = new Uint32Array(n.size()), a = 0;
					for (let e = 0; e < n.size(); e++) n.get(e) ? i[e] = a++ : i[e] = 0;
					return new cm(e, i, t, r, n);
				}
				return n ? new hm(e, t, r, n) : new hm(e, t, r);
			}
		}(e, h, c, s, p);
	}
	var dm, ym, mm = class extends yd {
		constructor(e, t, r) {
			super(e, /* @__PURE__ */ new Uint8Array(), r ?? t.length), this.values = t;
		}
		getValueFromBuffer(e) {
			return this.values[e];
		}
	};
	function gm(e, t, r, i, n) {
		let a, { lengthStream: s, flattenedValues: o, presentStream: l, dictionary: u } = e, h = t * r, c = r;
		if (l) {
			a = new gy(new Uint8Array(Math.ceil(r / 8)), r), c = 0;
			for (let e = 0; e < r; e++) l.get(h + e) && (a.set(e, !0), c++);
		}
		let p = i + c;
		if (p > s.length) throw Error("Merged map counts underflow while decoding child streams");
		let f = Array(r), d = i, y = n;
		for (let x = 0; x < r; x++) {
			if (l && !l.get(h + x)) {
				f[x] = null;
				continue;
			}
			let e = y + s[d++];
			if (e > o.length) throw Error("Map value stream underflow while decoding feature payload");
			let t = xm(o, y, e, u);
			f[x] = t.value, y = t.nextIndex;
		}
		let m = 0;
		for (let x = i; x < p; x++) m += s[x];
		let g = n + m;
		if (y !== g) throw Error("Unused flattened map values remain after decode");
		return {
			value: f,
			nullabilityBuffer: a,
			countsEnd: p,
			valuesEnd: g
		};
	}
	function xm(e, t, r, i) {
		return r - t === 1 || e[t] === ym.START_LIST ? bm(e, t, r, i) : vm(e, t, r, i);
	}
	function vm(e, t, r, i) {
		let n = Object.create(null), a = t;
		for (; a < r;) {
			let t = _m(e[a++], i);
			if ("string" != typeof t) throw Error(`Map key dictionary index does not resolve to a string: ${t}`);
			let s = bm(e, a, r, i);
			n[t] = s.value, a = s.nextIndex;
		}
		return {
			value: n,
			nextIndex: a
		};
	}
	function bm(e, t, r, i) {
		if (t >= r) throw Error("Unexpected end of map value stream");
		let n = e[t];
		if (n === ym.FALSE) return {
			value: !1,
			nextIndex: t + 1
		};
		if (n === ym.TRUE) return {
			value: !0,
			nextIndex: t + 1
		};
		if (n === ym.START_MAP) {
			let n = wm(e, t, r);
			return {
				value: vm(e, t + 2, n, i).value,
				nextIndex: n
			};
		}
		if (n === ym.START_LIST) {
			let n = wm(e, t, r), a = [], s = t + 2;
			for (; s < n;) {
				let t = bm(e, s, n, i);
				a.push(t.value), s = t.nextIndex;
			}
			return {
				value: a,
				nextIndex: n
			};
		}
		return {
			value: _m(n, i),
			nextIndex: t + 1
		};
	}
	function wm(e, t, r) {
		if (t + 1 >= r) throw Error("Missing length for nested map/list payload");
		let i = e[t + 1];
		if (i < 2) throw Error(`Invalid nested payload length: ${i}`);
		let n = t + i;
		if (n > r) throw Error("Nested payload exceeds containing payload bounds");
		return n;
	}
	function _m(e, t) {
		let r = e - ym.COUNT;
		if (r < 0 || r >= t.length) throw Error(`Scalar dictionary index out of range: ${e}`);
		return t[r];
	}
	function Dm(e, t) {
		for (let r of t) e.push(r);
	}
	function Sm(e, t, r, i, n, a) {
		return "scalarType" === r.type ? a && !a.has(r.name) ? (vy(i, e, t), null) : function(e, t, r, i, n, a) {
			let s;
			if (0 === e) return null;
			if (a.nullable) {
				let e = yy(t, r), i = e.numValues, n = r.get(), a = by(t, i, e.byteLength, r);
				r.set(n + e.byteLength), s = new gy(a, e.numValues);
			}
			let o = s ?? i;
			switch (n.physicalType) {
				case 4:
				case 3: return function(e, t, r, i, n) {
					let a = yy(e, t), s = Oy(a, n, e, t), o = 3 === i.physicalType;
					if (s === my.FLAT) {
						let i = Am(n) ? n : void 0, s = o ? Ay(e, t, a, void 0, i) : Ey(e, t, a, void 0, i);
						return new gd(r.name, s, n);
					}
					if (s === my.SEQUENCE) {
						let i = Cy(e, t, a);
						return new bd(r.name, i[0], i[1], a.numRleValues, o);
					}
					let l = o ? function(e, t, r) {
						let i = ky(e, t, r);
						return 1 === i.length ? Xd(i[0]) : function(e) {
							return Xd(e[1]);
						}(i);
					}(e, t, a) : Ty(e, t, a);
					return new wd(r.name, l, n, o);
				}(t, r, a, n, o);
				case 9: {
					let i = a.nullable ? e - 1 : e;
					return fm(a.name, t, r, i, s) ?? null;
				}
				case 0: return function(e, t, r, i, n) {
					let a = yy(e, t), s = a.numValues, o = t.get(), l = Am(n) ? n : void 0, u = by(e, s, a.byteLength, t, l);
					t.set(o + a.byteLength);
					let h = new gy(u, s);
					return new sm(r.name, h, n);
				}(t, r, a, 0, o);
				case 6:
				case 5: return function(e, t, r, i, n) {
					let a = yy(e, t), s = Oy(a, i, e, t, "int64"), o = 5 === n.physicalType;
					if (s === my.FLAT) {
						let n = Am(i) ? i : void 0, s = o ? My(e, t, a, n) : Py(e, t, a, n);
						return new Uy(r.name, s, i);
					}
					if (s === my.SEQUENCE) {
						let i = By(e, t, a);
						return new jy(r.name, i[0], i[1], a.numRleValues, o);
					}
					let l = o ? function(e, t, r) {
						let i = Iy(e, t, r);
						return 1 === i.length ? Yd(i[0]) : function(e) {
							return Yd(e[1]);
						}(i);
					}(e, t, a) : zy(e, t, a);
					return new lm(r.name, l, i, o);
				}(t, r, a, o, n);
				case 7: return function(e, t, r, i) {
					let n = yy(e, t), a = Am(i) ? i : void 0, s = wy(e, t, n.numValues, a);
					return new om(r.name, s, i);
				}(t, r, a, o);
				case 8: return function(e, t, r, i) {
					let n = yy(e, t), a = Am(i) ? i : void 0, s = _y(e, t, n.numValues, a);
					return new xd(r.name, s, i);
				}(t, r, a, o);
				default: throw Error(`The specified data type for the field is currently not supported: ${n}`);
			}
		}(i, e, t, n, r.scalarType, r) : 2 === r.complexType?.physicalType ? function(e, t, r, i) {
			let n = function(e) {
				let t = "complexType" === e.type ? e.complexType.children : void 0;
				return t && 0 !== t.length ? t.map((t) => e.name + (t.name ?? "")) : [e.name];
			}(r);
			if (0 === i) return n.map((e) => new mm(e, []));
			let a = function(e, t, r) {
				let i = e[t.get()];
				t.add(1);
				let n = Ey(e, t, yy(e, t)), a = r - 1, s = [];
				i & dm.STRING && (a -= function(e, t, r) {
					let i = e[t.get()];
					t.add(1);
					let n = fm("", e, t, i);
					if (n) for (let a = 0; a < n.size; a++) r.push(n.getValue(a));
					return i;
				}(e, t, s)), a -= function(e, t, r, i) {
					let n = 0;
					return r & dm.INT32 ? (Dm(i, Ay(e, t, yy(e, t))), n++) : r & dm.INT64 && (Dm(i, My(e, t, yy(e, t))), n++), r & dm.UINT32 ? (Dm(i, Ey(e, t, yy(e, t))), n++) : r & dm.UINT64 && (Dm(i, Py(e, t, yy(e, t))), n++), n;
				}(e, t, i, s), a -= function(e, t, r, i) {
					let n = 0;
					return r & dm.FLOAT && (Dm(i, wy(e, t, yy(e, t).numValues)), n++), r & dm.DOUBLE && (Dm(i, _y(e, t, yy(e, t).numValues)), n++), n;
				}(e, t, i, s);
				let o, l = 0;
				if (i & dm.PRESENCE) {
					let r = function(e, t) {
						let r = yy(e, t);
						if (r.physicalStreamType !== ay.PRESENT) throw Error(`Expected PRESENT stream for map column but found: ${r.physicalStreamType}`);
						let i = r.numValues, n = t.get(), a = new gy(by(e, i, r.byteLength, t), i);
						return t.set(n + r.byteLength), {
							value: a,
							count: i
						};
					}(e, t);
					o = r.value, l = r.count, a--;
				}
				let u = /* @__PURE__ */ new Uint32Array();
				if (a > 0 && (u = Ey(e, t, yy(e, t)), a--), 0 !== a) throw Error(`Unexpected number of remaining streams while decoding map column: ${a}`);
				return {
					lengthStream: n,
					dictionary: s,
					presentStream: o,
					presentCount: l,
					flattenedValues: u
				};
			}(e, t, i), s = (a.presentStream ? a.presentCount : a.lengthStream.length) / n.length, o = [], l = 0, u = 0;
			for (let h = 0; h < n.length; h++) {
				let e = gm(a, h, s, l, u);
				o.push(new mm(n[h], e.value, e.nullabilityBuffer)), l = e.countsEnd, u = e.valuesEnd;
			}
			return o;
		}(e, t, r, i) : 0 === i ? null : function(e, t, r, i) {
			let n, a, s, o, l = !1;
			for (; !l;) {
				let r = yy(e, t);
				switch (r.physicalStreamType) {
					case ay.LENGTH:
						ly.DICTIONARY === r.logicalStreamType.lengthType ? n = Fy(e, t, r) : s = Fy(e, t, r);
						break;
					case ay.DATA: sy.SINGLE === r.logicalStreamType.dictionaryType || sy.SHARED === r.logicalStreamType.dictionaryType ? (a = e.subarray(t.get(), t.get() + r.byteLength), l = !0) : o = e.subarray(t.get(), t.get() + r.byteLength), t.add(r.byteLength);
				}
			}
			if ("complexType" !== r.type) throw Error(`Shared dictionary column ${r.name} must be a complex (struct) column.`);
			if (!n || !a) throw Error(`Incomplete shared dictionary for column "${r.name}"`);
			let u = r.complexType.children, h = [], c = o ? {} : void 0, p = 0;
			for (let f of u) {
				let l = Nd(e, t, 1)[0];
				if (0 === l) continue;
				let u, d = f.name ? `${r.name}${f.name}` : r.name;
				if (i && !i.has(d)) {
					vy(l, e, t);
					continue;
				}
				if ("scalarField" !== f.type || 9 !== f.scalarField.physicalType) throw Error("Currently only scalar string fields are implemented for a struct.");
				if (l > 1 && !f.nullable || 1 === l && f.nullable) throw Error(`The number of streams for the child field ${f.name} does not match its nullability. nullibilty: ${f.nullable}, numStreams: ${l}`);
				if (f.nullable) {
					let r = yy(e, t);
					u = new gy(by(e, r.numValues, r.byteLength, t), r.numValues);
				}
				let y = Ey(e, t, yy(e, t), void 0, u);
				if (o) {
					if (!s) throw Error(`Incomplete shared FSST dictionary for column "${d}"`);
					h[p++] = new pm(d, y, n, a, s, o, u, c);
				} else h[p++] = new cm(d, y, n, a, u);
			}
			return h;
		}(e, t, r, a);
	}
	function Am(e) {
		return e instanceof gy;
	}
	(function(e) {
		e[e.STRING = 1] = "STRING", e[e.INT32 = 2] = "INT32", e[e.UINT32 = 4] = "UINT32", e[e.INT64 = 8] = "INT64", e[e.UINT64 = 16] = "UINT64", e[e.FLOAT = 32] = "FLOAT", e[e.DOUBLE = 64] = "DOUBLE", e[e.PRESENCE = 128] = "PRESENCE";
	})(dm || (dm = {})), function(e) {
		e[e.FALSE = 0] = "FALSE", e[e.TRUE = 1] = "TRUE", e[e.START_MAP = 2] = "START_MAP", e[e.START_LIST = 3] = "START_LIST", e[e.COUNT = 4] = "COUNT";
	}(ym || (ym = {}));
	function Em(e) {
		switch (e) {
			case 0:
			case 1:
			case 2:
			case 3: return {
				nullable: !!(1 & e),
				columnScope: 0,
				type: "scalarType",
				scalarType: {
					longID: !!(2 & e),
					type: "logicalType",
					logicalType: 0
				}
			};
			case 4: return {
				nullable: !1,
				columnScope: 0,
				type: "complexType",
				complexType: {
					type: "physicalType",
					physicalType: 0,
					children: []
				}
			};
			case 30: return {
				nullable: !1,
				columnScope: 0,
				type: "complexType",
				complexType: {
					type: "physicalType",
					physicalType: 1,
					children: []
				}
			};
			case 31: return {
				nullable: !0,
				columnScope: 0,
				type: "complexType",
				complexType: {
					type: "physicalType",
					physicalType: 2,
					children: []
				}
			};
			default: return function(e) {
				let t;
				switch (e) {
					case 10:
					case 11:
						t = 0;
						break;
					case 12:
					case 13:
						t = 1;
						break;
					case 14:
					case 15:
						t = 2;
						break;
					case 16:
					case 17:
						t = 3;
						break;
					case 18:
					case 19:
						t = 4;
						break;
					case 20:
					case 21:
						t = 5;
						break;
					case 22:
					case 23:
						t = 6;
						break;
					case 24:
					case 25:
						t = 7;
						break;
					case 26:
					case 27:
						t = 8;
						break;
					case 28:
					case 29:
						t = 9;
						break;
					default: return null;
				}
				return {
					nullable: !!(1 & e),
					columnScope: 0,
					type: "scalarType",
					scalarType: {
						longID: !1,
						type: "physicalType",
						physicalType: t
					}
				};
			}(e);
		}
	}
	function Fm(e) {
		return 30 === e || 31 === e;
	}
	function km(e) {
		if ("scalarType" === e.type) {
			let t = e.scalarType;
			if ("physicalType" === t.type) switch (t.physicalType) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				default: return !1;
				case 9: return !0;
			}
			if ("logicalType" === t.type) return !1;
		} else if ("complexType" === e.type) {
			let t = e.complexType;
			if ("physicalType" === t.type) switch (t.physicalType) {
				case 0:
				case 1:
				case 2: return !0;
				default: return !1;
			}
		}
		return console.warn("Unexpected column type in hasStreamCount", e), !1;
	}
	function Im(e) {
		return "scalarType" === e.type && "logicalType" === e.scalarType?.type && 0 === e.scalarType.logicalType;
	}
	function Tm(e) {
		return "complexType" === e.type && "physicalType" === e.complexType?.type && 0 === e.complexType.physicalType;
	}
	const Cm = new TextDecoder(), Bm = "0-3(ID), 4(GEOMETRY), 10-29(scalars), 30(STRUCT), 31(MAP)";
	function Mm(e, t) {
		let r = Nd(e, t, 1)[0];
		if (0 === r) return "";
		let i = t.get(), n = i + r, a = e.subarray(i, n);
		return t.add(r), Cm.decode(a);
	}
	function Pm(e, t) {
		let r = Nd(e, t, 1)[0] >>> 0, i = r >= 10 ? Em(r) : null;
		if (!i) throw Error(`Unsupported field type code ${r}. Supported: 10-29(scalars), 30(STRUCT), 31(MAP)`);
		let n = {
			...i,
			name: Mm(e, t)
		};
		if ("complexType" === n.type && Fm(r)) {
			let r = n.complexType, i = Nd(e, t, 1)[0] >>> 0;
			r.children = Array(i);
			for (let n = 0; n < i; n++) r.children[n] = Pm(e, t);
		}
		return function(e) {
			let t = e.name, r = e.nullable;
			return "scalarType" === e.type ? {
				type: "scalarField",
				scalarField: e.scalarType,
				name: t,
				nullable: r
			} : {
				type: "complexField",
				complexField: e.complexType,
				name: t,
				nullable: r
			};
		}(n);
	}
	function zm(e, t) {
		let r, i = Nd(e, t, 1)[0] >>> 0, n = Em(i);
		if (!n) throw Error(`Unsupported column type code ${i}. Supported: ${Bm}`);
		if (function(e) {
			return e >= 10;
		}(i)) r = Mm(e, t);
		else if (i < 4) r = "id";
		else {
			if (4 !== i) throw Error(`Unsupported column type code ${i}. Supported: ${Bm}`);
			r = "geometry";
		}
		let a = {
			...n,
			name: r
		};
		if ("complexType" === a.type && Fm(i)) {
			let r = Nd(e, t, 1)[0] >>> 0, i = a.complexType;
			i.children = Array(r);
			for (let n = 0; n < r; n++) i.children[n] = Pm(e, t);
		}
		return a;
	}
	function Lm(e, t) {
		let r = { featureTables: [] }, i = {};
		if (i.name = Mm(e, t), 0 === i.name.length) throw Error("Missing layer name");
		let n = Nd(e, t, 1)[0] >>> 0, a = Nd(e, t, 1)[0] >>> 0;
		i.columns = Array(a);
		for (let s = 0; s < a; s++) i.columns[s] = zm(e, t);
		return r.featureTables.push(i), [r, n];
	}
	function Vm(e, t, r, i, n, a, s = !1) {
		let o = t.scalarType?.longID ? 6 : 4, l = "number" == typeof a ? void 0 : a, u = Oy(n, a, e, r, 6 === o ? "int64" : "int32");
		if (4 === o) switch (u) {
			case my.FLAT: return new gd(i, Ey(e, r, n, void 0, l), a);
			case my.SEQUENCE: {
				let t = Cy(e, r, n);
				return new bd(i, t[0], t[1], n.numRleValues, !1);
			}
			case my.CONST: return new wd(i, Ty(e, r, n), a, !1);
		}
		switch (u) {
			case my.FLAT: return s ? new xd(i, function(e, t, r, i) {
				let n = function(e, t, r) {
					if (r.physicalLevelTechnique === Sd.VARINT) return function(e, t) {
						switch (t.logicalLevelTechnique1) {
							case Dd.DELTA:
								if (t.logicalLevelTechnique2 === Dd.RLE) {
									let r = t;
									e = Kd(e, r.runs, r.numRleValues);
								}
								return function(e) {
									e[0] = Wd(e[0]);
									let t = e.length / 4 * 4, r = 1;
									if (t >= 4) for (; r < t - 4; r += 4) {
										let t = e[r], i = e[r + 1], n = e[r + 2], a = e[r + 3];
										e[r] = Wd(t) + e[r - 1], e[r + 1] = Wd(i) + e[r], e[r + 2] = Wd(n) + e[r + 1], e[r + 3] = Wd(a) + e[r + 2];
									}
									for (; r !== e.length; ++r) e[r] = Wd(e[r]) + e[r - 1];
								}(e), e;
							case Dd.RLE: return function(e, t) {
								return Kd(e, t.runs, t.numRleValues);
							}(e, t);
							case Dd.NONE: return e;
							default: throw Error(`The specified Logical level technique is not supported: ${t.logicalLevelTechnique1}`);
						}
					}(function(e, t, r) {
						let i = new Float64Array(r);
						for (let n = 0; n < r; n++) i[n] = qd(e, t);
						return i;
					}(e, t, r.numValues), r);
					let i = Vy(Iy(e, t, r), r);
					return Float64Array.from(i, Number);
				}(e, t, r);
				return i ? xy(n, i, 0) : n;
			}(e, r, n, l), a) : new Uy(i, Py(e, r, n, l), a);
			case my.SEQUENCE: {
				let t = By(e, r, n);
				return new jy(i, t[0], t[1], n.numRleValues, !1);
			}
			case my.CONST: return new lm(i, zy(e, r, n), a, !1);
		}
		throw Error("Vector type not supported for id column.");
	}
	Cd(kd);
	var Om = class {
		constructor(e, t) {
			switch (this._featureData = e, this.properties = this._featureData.properties || {}, this._featureData.geometry?.type) {
				case Ry.POINT:
				case Ry.MULTIPOINT:
					this.type = 1;
					break;
				case Ry.LINESTRING:
				case Ry.MULTILINESTRING:
					this.type = 2;
					break;
				case Ry.POLYGON:
				case Ry.MULTIPOLYGON:
					this.type = 3;
					break;
				default: this.type = 0;
			}
			this.extent = t, this.id = Number(this._featureData.id);
		}
		loadGeometry() {
			let e = [];
			for (let t of this._featureData.geometry.coordinates) {
				let r = [];
				for (let e of t) r.push(new f(e.x, e.y));
				e.push(r);
			}
			return e;
		}
	}, Rm = class {
		constructor(e) {
			this.features = [], this.featureTable = e, this.name = e.name, this.extent = e.extent, this.version = 2, this.features = e.getFeatures(), this.length = this.features.length;
		}
		feature(e) {
			return new Om(this.features[e], this.extent);
		}
	}, $m = class {
		constructor(e) {
			this.layers = {};
			let t = function(e, t, r = !0) {
				let i = new Ad(0), n = [];
				for (; i.get() < e.length;) {
					let a = Nd(e, i, 1)[0] >>> 0, s = i.get() + a;
					if (s > e.length) throw Error(`Block overruns tile: ${s} > ${e.length}`);
					let o = Nd(e, i, 1)[0] >>> 0;
					if (1 !== o && 2 !== o) {
						i.set(s);
						continue;
					}
					let [l, u] = Lm(e, i), h = l.featureTables[0], c = null, p = null, f = [], d = 0;
					for (let n of h.columns) {
						let a = n.name;
						if (Im(n)) {
							let t = null;
							if (n.nullable) {
								let r = yy(e, i), n = i.get(), a = by(e, r.numValues, r.byteLength, i);
								i.set(n + r.byteLength), t = new gy(a, r.numValues);
							}
							let s = yy(e, i);
							d = t ? t.size() : s.decompressedCount, c = Vm(e, n, i, a, s, t ?? d, r);
						} else if (Tm(n)) {
							let r = Nd(e, i, 1)[0];
							if (0 === d) {
								let t = i.get();
								d = yy(e, i).decompressedCount, i.set(t);
							}
							t && (t.scale = t.extent / u), p = im(e, r, i, d, t);
						} else {
							let t = km(n) ? Nd(e, i, 1)[0] : 1;
							if (0 === t) continue;
							let r = Sm(e, i, n, t, d, void 0);
							if (r) if (Array.isArray(r)) for (let e of r) f.push(e);
							else f.push(r);
						}
					}
					let y = new _d(h.name, p, c, f, u);
					n.push(y), i.set(s);
				}
				return n;
			}(new Uint8Array(e));
			this.layers = t.reduce((e, t) => ({
				...e,
				[t.name]: new Rm(t)
			}), {});
		}
	}, Nm = class {
		constructor(e, t) {
			this.tileID = e, this.x = e.canonical.x, this.y = e.canonical.y, this.z = e.canonical.z, this.grid = new O(x, 16, 0), this.grid3D = new O(x, 16, 0), this.featureIndexArray = new Ga(), this.promoteId = t;
		}
		insert(e, t, r, i, n, a) {
			let s = this.featureIndexArray.length;
			this.featureIndexArray.emplaceBack(r, i, n);
			let o = a ? this.grid3D : this.grid;
			for (let l of t) {
				let e = [
					Infinity,
					Infinity,
					-Infinity,
					-Infinity
				];
				for (let t of l) e[0] = Math.min(e[0], t.x), e[1] = Math.min(e[1], t.y), e[2] = Math.max(e[2], t.x), e[3] = Math.max(e[3], t.y);
				e[0] < 8192 && e[1] < 8192 && e[2] >= 0 && e[3] >= 0 && o.insert(s, e[0], e[1], e[2], e[3]);
			}
		}
		loadVTLayers() {
			return this.vtLayers || ("mlt" === this.encoding ? this.vtLayers = new $m(this.rawTileData).layers : this.vtLayers = new Ql(new pp(this.rawTileData)).layers, this.sourceLayerCoder = new fd(this.vtLayers ? Object.keys(this.vtLayers).sort() : [id])), this.vtLayers;
		}
		query(e, t, r, i) {
			this.loadVTLayers();
			let n = e.params, a = x / e.tileSize / e.scale, s = xi(n.filter, "queryRenderedFeatures filter", n.globalState), o = e.queryGeometry, l = e.queryPadding * a, u = $s.fromPoints(o), h = this.grid.query(u.minX - l, u.minY - l, u.maxX + l, u.maxY + l), c = $s.fromPoints(e.cameraQueryGeometry).expandBy(l), p = this.grid3D.query(c.minX, c.minY, c.maxX, c.maxY, (t, r, i, n) => io(e.cameraQueryGeometry, t - l, r - l, i + l, n + l));
			for (let y of p) h.push(y);
			h.sort(jm);
			let f, d = {};
			for (let y of h) {
				if (y === f) continue;
				f = y;
				let l = this.featureIndexArray.get(y), u = null;
				this.loadMatchingFeature(d, l.bucketIndex, l.sourceLayerIndex, l.featureIndex, s, n.layers, n.availableImages, t, r, e.transform.worldCoordinateHelper, i, (t, r, i) => (u || (u = Os(t)), r.queryIntersectsFeature({
					queryGeometry: o,
					feature: t,
					featureState: i,
					geometry: u,
					zoom: this.z,
					transform: e.transform,
					pixelsToTileUnits: a,
					pixelPosMatrix: e.pixelPosMatrix,
					unwrappedTileID: this.tileID.toUnwrapped(),
					getElevation: e.getElevation
				})));
			}
			return d;
		}
		loadMatchingFeature(e, t, r, i, n, a, s, o, l, u, h, c) {
			let p = this.bucketLayerIDs[t];
			if (a && !p.some((e) => a.has(e))) return;
			let f = this.sourceLayerCoder.decode(r), d = this.vtLayers[f].feature(i);
			if (n.needGeometry) {
				let e = Rs(d, !0);
				if (!n.filter(new Rn(this.tileID.overscaledZ), e, this.tileID.canonical)) return;
			} else if (!n.filter(new Rn(this.tileID.overscaledZ), d)) return;
			let y = this.getId(d, f);
			for (let m of p) {
				if (a && !a.has(m)) continue;
				let t = o[m];
				if (!t) continue;
				let r = {};
				y && h && (r = h.getState(t.sourceLayer || "_geojsonTileLayer", y));
				let n = w({}, l[m]);
				n.paint = Um(n.paint, t.paint, d, r, s), n.layout = Um(n.layout, t.layout, d, r, s);
				let p = !c || c(d, t, r);
				if (!p) continue;
				let f = new dd(d, this.z, this.x, this.y, y, u);
				f.layer = n;
				let g = e[m];
				void 0 === g && (g = e[m] = []), g.push({
					featureIndex: i,
					feature: f,
					intersectionZ: p
				});
			}
		}
		lookupSymbolFeatures(e, t, r, i, n, a, s, o) {
			let l = {};
			this.loadVTLayers();
			let u = xi(n.filterSpec, "queryRenderedFeatures symbol filter", n.globalState);
			for (let h of e) this.loadMatchingFeature(l, r, i, h, u, a, s, o, t, n.worldCoordinateHelper);
			return l;
		}
		hasLayer(e) {
			for (let t of this.bucketLayerIDs) for (let r of t) if (e === r) return !0;
			return !1;
		}
		getId(e, t) {
			let r = e.id;
			if (this.promoteId) {
				let i = "string" == typeof this.promoteId ? this.promoteId : this.promoteId[t];
				r = e.properties[i], "boolean" == typeof r && (r = Number(r)), void 0 === r && e.properties?.cluster && this.promoteId && (r = Number(e.properties.cluster_id));
			}
			return r;
		}
	};
	function Um(e, t, r, i, n) {
		return _(e, (e, a) => {
			let s = t instanceof Yn ? t.get(a) : null;
			return function(e) {
				return "object" == typeof e && !!e && "evaluate" in e;
			}(s) ? s.evaluate(r, i, void 0, n) : s;
		});
	}
	function jm(e, t) {
		return t - e;
	}
	Dn("FeatureIndex", Nm, { omit: ["rawTileData", "sourceLayerCoder"] });
	var qm = class {
		constructor(e, t) {
			this.keyCache = {}, e && this.replace(e, t);
		}
		replace(e, t) {
			this._layerConfigs = {}, this._layers = {}, this.update(e, [], t);
		}
		update(e, t, r) {
			for (let n of e) {
				this._layerConfigs[n.id] = n;
				let e = this._layers[n.id] = td(n, r);
				e._featureFilter = xi(e.filter, `layers[${n.id}].filter`, r), this.keyCache[n.id] && delete this.keyCache[n.id];
			}
			for (let n of t) delete this.keyCache[n], delete this._layerConfigs[n], delete this._layers[n];
			this.familiesBySource = {};
			let i = function(e, t) {
				let r = {};
				for (let n = 0; n < e.length; n++) {
					let i = t && t[e[n].id] || Fi(e[n]);
					t && (t[e[n].id] = i);
					let a = r[i];
					a || (a = r[i] = []), a.push(e[n]);
				}
				let i = [];
				for (let n in r) i.push(r[n]);
				return i;
			}(Object.values(this._layerConfigs), this.keyCache);
			for (let n of i) {
				let e = n.map((e) => this._layers[e.id]), t = e[0];
				if (t.isHidden()) continue;
				let r = t.source || "", i = this.familiesBySource[r];
				i || (i = this.familiesBySource[r] = {});
				let a = t.sourceLayer || "_geojsonTileLayer", s = i[a];
				s || (s = i[a] = []), s.push(e);
			}
		}
	}, Gm = class {
		constructor(e) {
			let t = {}, r = [];
			for (let s in e) {
				let i = t[s] = {};
				for (let t in e[s]) {
					let n = e[s][t];
					i[t] = {};
					for (let e in n) {
						let a = n[e];
						if (!a || 0 === a.bitmap.width || 0 === a.bitmap.height) continue;
						let s = {
							x: 0,
							y: 0,
							w: a.bitmap.width + 2,
							h: a.bitmap.height + 2
						};
						r.push(s), i[t][e] = {
							rect: s,
							metrics: a.metrics
						};
					}
				}
			}
			let { w: i, h: n } = Sp(r), a = new Eo({
				width: i || 1,
				height: n || 1
			});
			for (let s in e) for (let r in e[s]) {
				let i = e[s][r];
				for (let e in i) {
					let n = i[e];
					if (!n || 0 === n.bitmap.width || 0 === n.bitmap.height) continue;
					let o = t[s][r][e].rect;
					Eo.copy(n.bitmap, a, {
						x: 0,
						y: 0
					}, {
						x: o.x + 1,
						y: o.y + 1
					}, n.bitmap);
				}
			}
			this.image = a, this.positions = t;
		}
	};
	Dn("GlyphAtlas", Gm);
	var Xm = class {
		constructor(e, t, r) {
			if (!function(e, t, r) {
				return !(e < 0 || e > 25 || r < 0 || r >= 2 ** e || t < 0 || t >= 2 ** e);
			}(e, t, r)) throw Error(`x=${t}, y=${r}, z=${e} outside of bounds. 0<=x<${2 ** e}, 0<=y<${2 ** e} 0<=z<=25 `);
			this.z = e, this.x = t, this.y = r, this.key = Zm(0, e, e, t, r);
		}
		equals(e) {
			return this.z === e.z && this.x === e.x && this.y === e.y;
		}
		url(e, t, r, i = iu) {
			let n = function(e, t, r) {
				let i = "";
				for (let n = e; n > 0; n--) {
					let e = 1 << n - 1;
					i += (t & e ? 1 : 0) + (r & e ? 2 : 0);
				}
				return i;
			}(this.z, this.x, this.y);
			return e[(this.x + this.y) % e.length].replace(/{prefix}/g, (this.x % 16).toString(16) + (this.y % 16).toString(16)).replace(/{z}/g, String(this.z)).replace(/{x}/g, String(this.x)).replace(/{y}/g, String("tms" === r ? 2 ** this.z - this.y - 1 : this.y)).replace(/{ratio}/g, t > 1 ? "@2x" : "").replace(/{quadkey}/g, n).replace(/{bbox-epsg-3857}/g, () => Hm(this.x, this.y, this.z, iu)).replace(/{bbox}/g, () => Hm(this.x, this.y, this.z, i));
		}
		isChildOf(e) {
			let t = this.z - e.z;
			return t > 0 && e.x === this.x >> t && e.y === this.y >> t;
		}
		getTilePoint(e) {
			let t = 2 ** this.z;
			return new f((e.x * t - this.x) * x, (e.y * t - this.y) * x);
		}
		toString() {
			return `${this.z}/${this.x}/${this.y}`;
		}
	}, Ym = class {
		constructor(e, t) {
			this.wrap = e, this.canonical = t, this.key = Zm(e, t.z, t.z, t.x, t.y);
		}
	}, Wm = class e {
		constructor(e, t, r, i, n) {
			if (this.terrainRttPosMatrix32f = null, e < r) throw Error(`overscaledZ should be >= z; overscaledZ = ${e}; z = ${r}`);
			this.overscaledZ = e, this.wrap = t, this.canonical = new Xm(r, +i, +n), this.key = Zm(t, e, r, i, n);
		}
		clone() {
			return new e(this.overscaledZ, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y);
		}
		equals(e) {
			return this.overscaledZ === e.overscaledZ && this.wrap === e.wrap && this.canonical.equals(e.canonical);
		}
		scaledTo(t) {
			if (t > this.overscaledZ) throw Error(`targetZ > this.overscaledZ; targetZ = ${t}; overscaledZ = ${this.overscaledZ}`);
			let r = this.canonical.z - t;
			return t > this.canonical.z ? new e(t, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y) : new e(t, this.wrap, t, this.canonical.x >> r, this.canonical.y >> r);
		}
		isOverscaled() {
			return this.overscaledZ > this.canonical.z;
		}
		calculateScaledKey(e, t) {
			if (e > this.overscaledZ) throw Error(`targetZ > this.overscaledZ; targetZ = ${e}; overscaledZ = ${this.overscaledZ}`);
			let r = this.canonical.z - e;
			return e > this.canonical.z ? Zm(this.wrap * +t, e, this.canonical.z, this.canonical.x, this.canonical.y) : Zm(this.wrap * +t, e, e, this.canonical.x >> r, this.canonical.y >> r);
		}
		isChildOf(e) {
			if (e.wrap !== this.wrap || this.overscaledZ - e.overscaledZ <= 0) return !1;
			if (0 === e.overscaledZ) return this.overscaledZ > 0;
			let t = this.canonical.z - e.canonical.z;
			return !(t < 0) && e.canonical.x === this.canonical.x >> t && e.canonical.y === this.canonical.y >> t;
		}
		children(t) {
			if (this.overscaledZ >= t) return [new e(this.overscaledZ + 1, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y)];
			let r = this.canonical.z + 1, i = 2 * this.canonical.x, n = 2 * this.canonical.y;
			return [
				new e(r, this.wrap, r, i, n),
				new e(r, this.wrap, r, i + 1, n),
				new e(r, this.wrap, r, i, n + 1),
				new e(r, this.wrap, r, i + 1, n + 1)
			];
		}
		isLessThan(e) {
			return this.wrap < e.wrap || !(this.wrap > e.wrap) && (this.overscaledZ < e.overscaledZ || !(this.overscaledZ > e.overscaledZ) && (this.canonical.x < e.canonical.x || !(this.canonical.x > e.canonical.x) && this.canonical.y < e.canonical.y));
		}
		wrapped() {
			return new e(this.overscaledZ, 0, this.canonical.z, this.canonical.x, this.canonical.y);
		}
		unwrapTo(t) {
			return new e(this.overscaledZ, t, this.canonical.z, this.canonical.x, this.canonical.y);
		}
		overscaleFactor() {
			return 2 ** (this.overscaledZ - this.canonical.z);
		}
		toUnwrapped() {
			return new Ym(this.wrap, this.canonical);
		}
		toString() {
			return `${this.overscaledZ}/${this.canonical.x}/${this.canonical.y}`;
		}
		getTilePoint(e) {
			return this.canonical.getTilePoint(new pu(e.x - this.wrap, e.y));
		}
		normalizeCoordinates(t, r, i = x) {
			if (t >= 0 && t < i && r >= 0 && r < i) return {
				tileID: this,
				x: t,
				y: r
			};
			let n = Math.floor(t / i), a = Math.floor(r / i), s = t - n * i, o = r - a * i, l = this.canonical.z, u = 1 << l, h = this.canonical.y + a;
			if (h < 0 || h >= u) return null;
			let c = this.canonical.x + n, p = this.wrap;
			return c < 0 ? (p -= Math.ceil(-c / u), c = (c % u + u) % u) : c >= u && (p += Math.floor(c / u), c %= u), {
				tileID: new e(this.overscaledZ, p, l, c, h),
				x: s,
				y: o
			};
		}
	};
	function Zm(e, t, r, i, n) {
		(e *= 2) < 0 && (e = -1 * e - 1);
		let a = 1 << r;
		return (a * a * e + a * n + i).toString(36) + r.toString(36) + t.toString(36);
	}
	function Hm(e, t, r, i) {
		let n = 2 ** r, a = i.extentAtZoom0 / n, [s, o] = i.origin, l = o - i.extentAtZoom0, u = n - t - 1;
		return `${s + e * a},${l + u * a},${s + (e + 1) * a},${l + (u + 1) * a}`;
	}
	Dn("CanonicalTileID", Xm), Dn("OverscaledTileID", Wm, { omit: ["terrainRttPosMatrix32f"] });
	var Km = class {
		constructor(e) {
			this.tileID = new Wm(e.tileID.overscaledZ, e.tileID.wrap, e.tileID.canonical.z, e.tileID.canonical.x, e.tileID.canonical.y), this.uid = e.uid, this.zoom = e.zoom, this.pixelRatio = e.pixelRatio, this.tileSize = e.tileSize, this.source = e.source, this.overscaling = this.tileID.overscaleFactor(), this.showCollisionBoxes = e.showCollisionBoxes, this.collectResourceTiming = !!e.collectResourceTiming, this.returnDependencies = !!e.returnDependencies, this.promoteId = e.promoteId, this.inFlightDependencies = [];
		}
		async parse(e, t, r, i, n) {
			this.data = e, this.collisionBoxArray = new za();
			let a = new fd(Object.keys(e.layers).sort()), s = new Nm(this.tileID, this.promoteId);
			s.bucketLayerIDs = [];
			let o = {}, l = {
				featureIndex: s,
				iconDependencies: {},
				patternDependencies: {},
				glyphDependencies: {},
				dashDependencies: {},
				availableImages: r,
				subdivisionGranularity: n
			}, u = t.familiesBySource[this.source];
			for (let _ in u) {
				let t = e.layers[_];
				if (!t) continue;
				1 === t.version && E(`Vector tile source "${this.source}" layer "${_}" does not use vector tile spec v2 and therefore may have some rendering errors.`);
				let i = a.encode(_), n = [];
				for (let e = 0; e < t.length; e++) {
					let r = t.feature(e), a = s.getId(r, _);
					n.push({
						feature: r,
						id: a,
						index: e,
						sourceLayerIndex: i
					});
				}
				for (let e of u[_]) {
					let t = e[0];
					t.source !== this.source && E(`layer.source = ${t.source} does not equal this.source = ${this.source}`), !t.isHidden(this.zoom, !0) && (Jm(e, this.zoom, r), (o[t.id] = t.createBucket({
						index: s.bucketLayerIDs.length,
						layers: e,
						zoom: this.zoom,
						pixelRatio: this.pixelRatio,
						overscaling: this.overscaling,
						collisionBoxArray: this.collisionBoxArray,
						sourceLayerIndex: i,
						sourceID: this.source
					})).populate(n, l, this.tileID.canonical), s.bucketLayerIDs.push(e.map((e) => e.id)));
				}
			}
			let h = _(l.glyphDependencies, (e) => _(e, (e) => Object.keys(e)));
			for (let _ of this.inFlightDependencies) _?.abort();
			this.inFlightDependencies = [];
			let c = Promise.resolve({});
			if (Object.keys(h).length) {
				let e = new AbortController();
				this.inFlightDependencies.push(e), c = i.sendAsync({
					type: "GG",
					data: {
						stacks: h,
						source: this.source,
						tileID: this.tileID,
						type: "glyphs"
					}
				}, e);
			}
			let p = Object.keys(l.iconDependencies), f = Promise.resolve({});
			if (p.length) {
				let e = new AbortController();
				this.inFlightDependencies.push(e), f = i.sendAsync({
					type: "GI",
					data: {
						icons: p,
						source: this.source,
						tileID: this.tileID,
						type: "icons"
					}
				}, e);
			}
			let d = Object.keys(l.patternDependencies), y = Promise.resolve({});
			if (d.length) {
				let e = new AbortController();
				this.inFlightDependencies.push(e), y = i.sendAsync({
					type: "GI",
					data: {
						icons: d,
						source: this.source,
						tileID: this.tileID,
						type: "patterns"
					}
				}, e);
			}
			let m = l.dashDependencies, g = Promise.resolve({});
			if (Object.keys(m).length) {
				let e = new AbortController();
				this.inFlightDependencies.push(e), g = i.sendAsync({
					type: "GDA",
					data: { dashes: m }
				}, e);
			}
			let [x, v, b, w] = await Promise.all([
				c,
				f,
				y,
				g
			]), D = new Gm(x), S = new Ep(v, b);
			for (let _ in o) {
				let e = o[_];
				e.hasDependencies && (Jm(e.layers, this.zoom, r), e.addFeatures({
					options: l,
					canonical: this.tileID.canonical,
					glyphMap: x,
					glyphPositions: D.positions,
					iconMap: v,
					iconPositions: S.iconPositions,
					patternMap: b,
					patternPositions: S.patternPositions,
					dashPositions: w,
					showCollisionBoxes: this.showCollisionBoxes
				}));
			}
			return {
				buckets: Object.values(o).filter((e) => !e.isEmpty()),
				featureIndex: s,
				collisionBoxArray: this.collisionBoxArray,
				glyphAtlasImage: D.image,
				imageAtlas: S,
				dashPositions: w,
				glyphMap: this.returnDependencies ? x : null,
				iconMap: this.returnDependencies ? v : null,
				glyphPositions: this.returnDependencies ? D.positions : null
			};
		}
	};
	function Jm(e, t, r) {
		let i = new Rn(t);
		for (let n of e) n.recalculate(i, r);
	}
	var Qm = class {
		constructor() {
			this.loading = {}, this.loaded = {}, this.parsing = {};
		}
		startLoading(e, t) {
			this.loading[e] = t;
		}
		finishLoading(e) {
			delete this.loading[e];
		}
		abort(e) {
			let t = this.loading[e];
			t?.abort && (t.abort.abort(), delete this.loading[e]);
		}
		getParsing(e) {
			return this.parsing[e];
		}
		setParsing(e, t) {
			this.parsing[e] = t;
		}
		removeParsing(e) {
			delete this.parsing[e];
		}
		markLoaded(e, t) {
			this.loaded[e] = t;
		}
		getLoaded(e) {
			let t = this.loaded[e];
			if (t) return t;
		}
		removeLoaded(e) {
			delete this.loaded[e];
		}
		clearLoaded() {
			this.loaded = {};
		}
	}, eg = class {
		constructor(e) {
			this.maxEntries = e, this.map = /* @__PURE__ */ new Map();
		}
		get(e) {
			let t = this.map.get(e);
			return void 0 !== t && (this.map.delete(e), this.map.set(e, t)), t;
		}
		set(e, t) {
			if (this.map.has(e)) this.map.delete(e);
			else if (this.map.size >= this.maxEntries) {
				let e = this.map.keys().next().value;
				this.map.delete(e);
			}
			this.map.set(e, t);
		}
		clear() {
			this.map.clear();
		}
	}, tg = class {
		constructor(e) {
			this.start = `${e}#start`, this.end = `${e}#end`, this.measure = e, performance.mark(this.start);
		}
		finish() {
			performance.mark(this.end);
			let e = performance.getEntriesByName(this.measure);
			return 0 === e.length && (performance.measure(this.measure, this.start, this.end), e = performance.getEntriesByName(this.measure), performance.clearMarks(this.start), performance.clearMarks(this.end), performance.clearMeasures(this.measure)), e;
		}
	}, rg = class {
		constructor(e, t, r, i, n) {
			this.type = e, this.properties = r || {}, this.extent = n, this.pointsArray = t, this.id = i;
		}
		loadGeometry() {
			return this.pointsArray.map((e) => e.map((e) => new f(e.x, e.y)));
		}
	}, ig = class {
		constructor(e, t, r) {
			this.version = 2, this._myFeatures = e, this.name = t, this.length = e.length, this.extent = r;
		}
		feature(e) {
			return this._myFeatures[e];
		}
	}, ng = class {
		constructor() {
			this.layers = {};
		}
		addLayer(e) {
			this.layers[e.name] = e;
		}
	};
	function ag(e, t, r) {
		let { extent: i } = e, n = 2 ** (r.z - t.z), a = (r.x - t.x * n) * i, s = (r.y - t.y * n) * i, o = [];
		for (let l = 0; l < e.length; l++) {
			let t = e.feature(l), r = t.loadGeometry();
			for (let e of r) for (let t of e) t.x = t.x * n - a, t.y = t.y * n - s;
			let u = Math.max(128, Math.round(128 * i / 4096));
			r = of(r, t.type, -u, -u, i + u, i + u), 0 !== r.length && o.push(new rg(t.type, r, t.properties, t.id, i));
		}
		return new ig(o, e.name, i);
	}
	var sg = class {
		constructor(e, t, r) {
			this.actor = e, this.layerIndex = t, this.availableImages = r, this.tileState = new Qm(), this.overzoomedTileResultCache = new eg(1e3);
		}
		loadVectorTile(e, t) {
			try {
				return {
					vectorTile: "mlt" === e.encoding ? new $m(t) : new Ql(new pp(t)),
					rawData: t
				};
			} catch (s) {
				let i = new Uint8Array(t), n = 31 === i[0] && 139 === i[1], a = `Unable to parse the tile at ${e.request.url}, `;
				throw a += n ? "please make sure the data is not gzipped and that you have configured the relevant header in the server" : `got error: ${v(s).message}`, Error(a);
			}
		}
		async loadTile(e) {
			let { uid: t, overzoomParameters: r } = e;
			r && (e.request = r.overzoomRequest);
			let i = this._startRequestTiming(e), n = new Km(e);
			this.tileState.startLoading(t, n);
			let a = new AbortController();
			n.abort = a;
			try {
				let s = await ((e, t) => wn(w(e, { type: "arrayBuffer" }), t))(e.request, a);
				if (e.etag && e.etag === s.etag) return this.tileState.finishLoading(t), this._getEtagUnmodifiedResult(s, i);
				let o = this.loadVectorTile(e, s.data);
				if (this.tileState.finishLoading(t), !o) return null;
				let { vectorTile: l, rawData: u } = o;
				r && ({vectorTile: l, rawData: u} = this._getOverzoomTile(e, l));
				let h = this._getExpiryData(s), c = this._finishRequestTiming(i);
				n.vectorTile = l, n.etag = s.etag, this.tileState.markLoaded(t, n);
				let p = {
					rawData: u,
					cacheControl: h,
					resourceTiming: c
				};
				return this.tileState.setParsing(t, p), await this._parseWorkerTile(n, e);
			} catch (e) {
				throw this.tileState.finishLoading(t), this.tileState.markLoaded(t, n), e;
			}
		}
		_getEtagUnmodifiedResult(e, t) {
			return w({ etagUnmodified: !0 }, this._getExpiryData(e), this._finishRequestTiming(t));
		}
		async _parseWorkerTile(e, t) {
			let r = this.tileState.getParsing(e.uid), i = await e.parse(e.vectorTile, this.layerIndex, this.availableImages, this.actor, t.subdivisionGranularity);
			if (r) {
				let { rawData: n, cacheControl: a, resourceTiming: s } = r, o = t.overzoomParameters ? "mvt" : t.encoding;
				i = w({
					rawTileData: n.slice(0),
					encoding: o
				}, i, a, s), this.tileState.removeParsing(e.uid);
			} else e.etag && (i = w(i, { etag: e.etag }));
			return i;
		}
		_getExpiryData({ expires: e, cacheControl: t, etag: r }) {
			let i = {};
			return e && (i.expires = e), t && (i.cacheControl = t), r && (i.etag = r), i;
		}
		_startRequestTiming(e) {
			if (e.request?.collectResourceTiming) return new tg(e.request.url);
		}
		_finishRequestTiming(e) {
			let t = e?.finish();
			return t ? { resourceTiming: JSON.parse(JSON.stringify(t)) } : {};
		}
		_getOverzoomTile(e, t) {
			let { tileID: r, source: i, overzoomParameters: n } = e, { maxZoomTileID: a } = n, s = `${a.key}_${r.key}_${e.request?.url}`, o = this.overzoomedTileResultCache.get(s);
			if (o) return o;
			let l = new ng(), u = this.layerIndex.familiesBySource[i];
			for (let c in u) {
				let e = t.layers[c];
				if (!e) continue;
				let i = ag(e, a, r.canonical);
				i.length > 0 && l.addLayer(i);
			}
			let h = {
				vectorTile: l,
				rawData: ad(l).buffer
			};
			return this.overzoomedTileResultCache.set(s, h), h;
		}
		async reloadTile(e) {
			let t = e.uid, r = this.tileState.getLoaded(t);
			if (!r) throw Error("Should not be trying to reload a tile that was never loaded or has been removed");
			if (r.vectorTile) return r.showCollisionBoxes = e.showCollisionBoxes, await this._parseWorkerTile(r, e);
		}
		async abortTile(e) {
			this.tileState.abort(e.uid);
		}
		async removeTile(e) {
			this.tileState.removeLoaded(e.uid);
		}
	}, og = class {
		constructor() {
			this.loaded = {};
		}
		async loadTile(e) {
			let { uid: t, encoding: r, rawImageData: i, redFactor: n, greenFactor: a, blueFactor: s, baseShift: o } = e, l = i.width + 4, u = i.height + 4, h = new Vo(t, I(i) ? new Fo({
				width: l,
				height: u
			}, await B(i, -2, -2, l, u)) : i, r, n, a, s, o);
			return this.loaded || (this.loaded = {}), this.loaded[t] = h, h;
		}
		removeTile(e) {
			let t = this.loaded, r = e.uid;
			t?.[r] && delete t[r];
		}
	}, lg = class {
		constructor(e) {
			this.wraps = !1, this._crs = e, this._originX = e.tileMatrixSet.origin[0], this._originY = e.tileMatrixSet.origin[1], this._extent = e.tileMatrixSet.extentAtZoom0;
		}
		get name() {
			return this._crs.name;
		}
		get tileMatrixSet() {
			return this._crs.tileMatrixSet;
		}
		worldFromLngLat(e, t, r) {
			let [i, n] = this._crs.projection.forward([e, t]);
			return new pu((i - this._originX) / this._extent, (this._originY - n) / this._extent, void 0 === r ? 0 : r / this._extent);
		}
		lngLatFromWorld(e, t) {
			let r = b(e, 0, 1), i = b(t, 0, 1), n = this._inverse(e, t) ?? this._inverse(r, i) ?? this._inverseTowardCenter(r, i) ?? this._finiteInverse(r, i);
			if (!n) throw Error(`The inverse of the projection "${this._crs.name}" has no answer inside its tile matrix set.`);
			return new tu(n[0], b(n[1], -90, 90));
		}
		hasLngLat(e, t) {
			return null !== this._inverse(e, t);
		}
		_inverse(e, t) {
			let r = this._finiteInverse(e, t);
			if (!r) return null;
			let i = this._originX + e * this._extent, n = this._originY - t * this._extent, [a, s] = this._crs.projection.forward(r);
			return Math.hypot(a - i, s - n) <= .001 * this._extent ? r : null;
		}
		_finiteInverse(e, t) {
			let r;
			try {
				r = this._crs.projection.inverse([this._originX + e * this._extent, this._originY - t * this._extent]);
			} catch {
				return null;
			}
			return r && Number.isFinite(r[0]) && Number.isFinite(r[1]) ? r : null;
		}
		_inverseTowardCenter(e, t) {
			let r = 0, i = 1;
			for (let n = 0; n < 30; n++) {
				let n = (r + i) / 2;
				this._inverse(.5 + (e - .5) * n, .5 + (t - .5) * n) ? r = n : i = n;
			}
			return this._inverse(.5 + (e - .5) * r, .5 + (t - .5) * r);
		}
		metersPerWorldUnit(e, t) {
			return this._extent;
		}
		worldZFromAltitude(e, t) {
			return e / this._extent;
		}
		get latitudeRange() {
			return this._latitudeRange ?? (this._latitudeRange = [this._findLatitudeLimit(-90), this._findLatitudeLimit(90)]), this._latitudeRange;
		}
		_findLatitudeLimit(e) {
			let t = this.lngLatFromWorld(.5, .5), r = 10 * this._meridianStretch(t.lng, t.lat);
			if (!(r > 0)) return e;
			let i = Math.sign(e - t.lat);
			for (let n = t.lat; Math.abs(e - n) > 1; n += i) if (!(this._meridianStretch(t.lng, n + i) <= r)) return n;
			return e;
		}
		_meridianStretch(e, t) {
			let [r, i] = this._crs.projection.forward([e, t]), [n, a] = this._crs.projection.forward([e, t >= 0 ? t - .01 : t + .01]);
			return Math.hypot(n - r, a - i);
		}
	}, ug = class {
		forward(e) {
			return [e[0], e[1]];
		}
		inverse(e) {
			return [e[0], e[1]];
		}
	};
	const hg = new class {
		constructor() {
			this.name = "identity", this.projection = new ug(), this.tileMatrixSet = {
				origin: [-90, 90],
				extentAtZoom0: 180
			};
		}
	}();
	let cg = null;
	const pg = /* @__PURE__ */ new Map();
	function fg(e) {
		cg = e, pg.clear();
	}
	function dg(e, t) {
		let r = ([e, r, ...i]) => {
			let { x: n, y: a } = t.worldFromLngLat(e, r);
			return [
				n,
				a,
				...i
			];
		}, [i, n] = t.latitudeRange;
		if (-90 === i && 90 === n) return yg(e, r);
		let a = (e) => e === i && i > -90 || e === n && n < 90;
		return yg(e, r, (e) => {
			let t = !1, s = e.map((e) => e[1] >= i && e[1] <= n ? r(e) : (t = !0, e));
			if (!t) return s;
			let o = [], l = 0, u = NaN;
			for (let h = 0; h < e.length; h++) {
				let [t, c, ...p] = e[h], f = b(c, i, n);
				if (f === u && a(f)) {
					let e = Math.ceil(Math.abs(t - l) / 10);
					for (let i = 1; i < e; i++) o.push(r([l + (t - l) * i / e, f]));
				}
				o.push(f === c ? s[h] : r([
					t,
					f,
					...p
				])), l = t, u = f;
			}
			return o;
		});
	}
	function yg(e, t, r = (e) => e.map(t)) {
		if (!e || "object" != typeof e) return e;
		switch (e.type) {
			case "FeatureCollection": return {
				...e,
				features: e.features.map((e) => yg(e, t, r))
			};
			case "Feature": return {
				...e,
				geometry: e.geometry ? yg(e.geometry, t, r) : e.geometry
			};
			case "GeometryCollection": return {
				...e,
				geometries: e.geometries.map((e) => yg(e, t, r))
			};
			case "Point": return {
				...e,
				coordinates: t(e.coordinates)
			};
			case "MultiPoint": return {
				...e,
				coordinates: e.coordinates.map(t)
			};
			case "LineString": return {
				...e,
				coordinates: r(e.coordinates)
			};
			case "MultiLineString":
			case "Polygon": return {
				...e,
				coordinates: e.coordinates.map((e) => r(e))
			};
			case "MultiPolygon": return {
				...e,
				coordinates: e.coordinates.map((e) => e.map((e) => r(e)))
			};
			default: return e;
		}
	}
	var mg = class {
		constructor(e, t, r, i = gg) {
			this.actor = e, this.layerIndex = t, this.availableImages = r, this.tileState = new Qm(), this._createGeoJSONIndex = i;
		}
		loadVectorTile(e) {
			if (!this._geoJSONIndex) throw Error("Unable to parse the data into a cluster or geojson");
			let { z: t, x: r, y: i } = e.tileID.canonical, n = this._geoJSONIndex.getTile(t, r, i);
			if (!n) return null;
			let a = new nd(n.features, {
				version: 2,
				extent: x
			});
			return {
				vectorTile: a,
				rawData: ad(a, "__$json__:").buffer
			};
		}
		async loadTile(e) {
			let { uid: t } = e, r = new Km(e);
			r.abort = new AbortController();
			try {
				let i = this.loadVectorTile(e);
				if (!i) return null;
				let { vectorTile: n, rawData: a } = i;
				r.vectorTile = n, this.tileState.markLoaded(t, r);
				let s = { rawData: a };
				return this.tileState.setParsing(t, s), await this._parseWorkerTile(r, e);
			} catch (e) {
				throw this.tileState.markLoaded(t, r), e;
			}
		}
		async _parseWorkerTile(e, t) {
			let r = this.tileState.getParsing(e.uid), i = await e.parse(e.vectorTile, this.layerIndex, this.availableImages, this.actor, t.subdivisionGranularity);
			if (r) {
				let { rawData: t } = r;
				i = w({
					rawTileData: t.slice(0),
					encoding: "mvt"
				}, i), this.tileState.removeParsing(e.uid);
			}
			return i;
		}
		async abortTile(e) {
			this.tileState.abort(e.uid);
		}
		async removeTile(e) {
			this.tileState.removeLoaded(e.uid);
		}
		async loadData(e) {
			this._pendingRequest?.abort();
			let t = this._startRequestTiming(e);
			this._pendingRequest = new AbortController();
			try {
				await this.loadAndProcessGeoJSON(e, this._pendingRequest), delete this._pendingRequest, this.tileState.clearLoaded();
				let r = {};
				return e.request && (r.data = e.data), this._finishRequestTiming(t, e, r), r;
			} catch (e) {
				if (delete this._pendingRequest, !V(e)) throw e;
				return { abandoned: !0 };
			}
		}
		_startRequestTiming(e) {
			if (e.request?.collectResourceTiming) return new tg(e.request.url);
		}
		_finishRequestTiming(e, t, r) {
			let i = e?.finish();
			i && (r.resourceTiming = { [t.source]: JSON.parse(JSON.stringify(i)) });
		}
		async reloadTile(e) {
			let t = e.uid, r = this.tileState.getLoaded(t);
			return r ? r.vectorTile ? (r.showCollisionBoxes = e.showCollisionBoxes, await this._parseWorkerTile(r, e)) : void 0 : await this.loadTile(e);
		}
		async loadAndProcessGeoJSON(e, t) {
			if (e.request && (e.data = (await ((e, t) => wn(w(e, { type: "json" }), t))(e.request, t)).data), this._crsHelper = e.crs ? function(e) {
				return e.definition ? cg ? (pg.has(e.definition) || pg.set(e.definition, cg(e.definition)), new lg({
					name: e.name,
					definition: e.definition,
					projection: pg.get(e.definition),
					tileMatrixSet: e.tileMatrixSet
				})) : void E("GeoJSON sources are drawn in the wrong place: no projection handler is set in the workers, see `setProjectionHandler` in the custom CRS guide.") : new lg(hg);
			}(e.crs) : void 0, e.data) {
				e.data = this._filterGeoJSON(e.data, e.filter, e.source);
				let t = this._crsHelper ? dg(e.data, this._crsHelper) : e.data;
				this._geoJSONIndex = this._createGeoJSONIndex(t, e, void 0 !== this._crsHelper);
			} else {
				if (e.dataDiff) {
					this._geoJSONIndex ?? (this._geoJSONIndex = this._createGeoJSONIndex({
						type: "FeatureCollection",
						features: []
					}, e, void 0 !== this._crsHelper));
					let t = this._crsHelper ? function(e, t) {
						let r = { ...e };
						return e.add && (r.add = e.add.map((e) => dg(e, t))), e.update && (r.update = e.update.map((e) => e.newGeometry ? {
							...e,
							newGeometry: dg(e.newGeometry, t)
						} : e)), r;
					}(e.dataDiff, this._crsHelper) : e.dataDiff;
					this._geoJSONIndex.updateData(t, this._getFilterPredicate(e.filter, e.source));
				}
				if (e.updateCluster && this._geoJSONIndex.updateClusterOptions(e.geojsonVtOptions.cluster, xg(e)), null == this._geoJSONIndex) throw Error(`Input data given to '${e.source}' is not a valid GeoJSON object.`);
			}
		}
		_filterGeoJSON(e, t, r) {
			if ("FeatureCollection" !== e.type) return e;
			let i = this._getFilterPredicate(t, r);
			return i ? {
				type: "FeatureCollection",
				features: e.features.filter((e) => i(e))
			} : e;
		}
		_getFilterPredicate(e, t) {
			if ("boolean" != typeof e && !e?.length) return;
			let r = ri(e, `sources.${t}.filter`, {
				type: "boolean",
				"property-type": "data-driven",
				overridable: !1,
				transition: !1
			});
			if ("error" === r.result) throw Error(r.value.map((e) => `${e.key}: ${e.message}`).join(", "));
			return (e) => r.value.evaluate({ zoom: 0 }, e);
		}
		async removeSource(e) {
			this._pendingRequest?.abort();
		}
		getClusterExpansionZoom(e) {
			return this._geoJSONIndex.getClusterExpansionZoom(e.clusterId);
		}
		getClusterChildren(e) {
			return this._toLngLat(this._geoJSONIndex.getClusterChildren(e.clusterId));
		}
		getClusterLeaves(e) {
			return this._toLngLat(this._geoJSONIndex.getClusterLeaves(e.clusterId, e.limit, e.offset));
		}
		_toLngLat(e) {
			return this._crsHelper ? e.map((e) => function(e, t) {
				return yg(e, ([e, r, ...i]) => {
					let n = t.lngLatFromWorld(e, r);
					return [
						n.lng,
						n.lat,
						...i
					];
				});
			}(e, this._crsHelper)) : e;
		}
	};
	function gg(e, t, r) {
		return new Xh(e, w(t.geojsonVtOptions || {}, {
			updateable: !0,
			clusterOptions: xg(t),
			coordinates: r ? "unitSquare" : "lngLat",
			wrap: !r
		}));
	}
	function xg({ geojsonVtOptions: e, clusterProperties: t, source: r }) {
		if (!t || !e.clusterOptions) return e.clusterOptions;
		let i = {}, n = {}, a = {
			accumulated: null,
			zoom: 0
		}, s = { properties: null }, o = Object.keys(t);
		for (let l of o) {
			let [e, a] = t[l], s = ri(a, `sources.${r}.clusterProperties.${l}[1]`), o = ri("string" == typeof e ? [
				e,
				["accumulated"],
				["get", l]
			] : e, `sources.${r}.clusterProperties.${l}[0]`);
			i[l] = s.value, n[l] = o.value;
		}
		return e.clusterOptions.map = (e) => {
			s.properties = e;
			let t = {};
			for (let r of o) t[r] = i[r].evaluate(a, s);
			return t;
		}, e.clusterOptions.reduce = (e, t) => {
			s.properties = t;
			for (let r of o) a.accumulated = e[r], e[r] = n[r].evaluate(a, s);
		}, e.clusterOptions;
	}
	async function vg(e) {
		if (e.endsWith(".mjs")) return void await import(e);
		let t = await fetch(e, { credentials: "same-origin" });
		if (!t.ok) throw Error(`Failed to load ${e}: ${t.status}`);
		let r = await t.text();
		if (/^[ \t]*(import|export)\s/m.test(r)) {
			let e = URL.createObjectURL(new Blob([r], { type: "text/javascript" }));
			try {
				await import(e);
			} finally {
				URL.revokeObjectURL(e);
			}
		} else globalThis.eval(r);
	}
	k(self) && (self.worker = new class {
		constructor(e) {
			this.self = e, this.actor = new Cn(e), this.layerIndexes = {}, this.availableImages = {}, this.workerSources = {}, this.demWorkerSources = {}, this.externalWorkerSourceTypes = {}, this.globalStates = /* @__PURE__ */ new Map(), this.self.registerWorkerSource = (e, t) => {
				if (this.externalWorkerSourceTypes[e]) throw Error(`Worker source with name "${e}" already registered.`);
				this.externalWorkerSourceTypes[e] = t;
			}, this.self.addProtocol = mn, this.self.removeProtocol = gn, this.self.registerRTLTextPlugin = (e) => {
				hc.setMethods(e);
			}, this.self.makeRequest = wn, this.self.setProjectionHandler = fg, this.actor.registerMessageHandler("LDT", (e, t) => this._getDEMWorkerSource(e, t.source).loadTile(t)), this.actor.registerMessageHandler("RDT", async (e, t) => {
				this._getDEMWorkerSource(e, t.source).removeTile(t);
			}), this.actor.registerMessageHandler("GCEZ", async (e, t) => this._getWorkerSource(e, t.type, t.source).getClusterExpansionZoom(t)), this.actor.registerMessageHandler("GCC", async (e, t) => this._getWorkerSource(e, t.type, t.source).getClusterChildren(t)), this.actor.registerMessageHandler("GCL", async (e, t) => this._getWorkerSource(e, t.type, t.source).getClusterLeaves(t)), this.actor.registerMessageHandler("LD", (e, t) => this._getWorkerSource(e, t.type, t.source).loadData(t)), this.actor.registerMessageHandler("LT", (e, t) => this._getWorkerSource(e, t.type, t.source).loadTile(t)), this.actor.registerMessageHandler("RT", (e, t) => this._getWorkerSource(e, t.type, t.source).reloadTile(t)), this.actor.registerMessageHandler("AT", (e, t) => this._getWorkerSource(e, t.type, t.source).abortTile(t)), this.actor.registerMessageHandler("RMT", (e, t) => this._getWorkerSource(e, t.type, t.source).removeTile(t)), this.actor.registerMessageHandler("RS", async (e, t) => {
				if (!this.workerSources[e]?.[t.type]?.[t.source]) return;
				let r = this.workerSources[e][t.type][t.source];
				delete this.workerSources[e][t.type][t.source], void 0 !== r.removeSource && r.removeSource(t);
			}), this.actor.registerMessageHandler("RM", async (e) => {
				delete this.layerIndexes[e], delete this.availableImages[e], delete this.workerSources[e], delete this.demWorkerSources[e], this.globalStates.delete(e);
			}), this.actor.registerMessageHandler("SR", async (e, t) => {
				this.referrer = t;
			}), this.actor.registerMessageHandler("SRPS", (e, t) => this._syncRTLPluginState(e, t)), this.actor.registerMessageHandler("IS", async (e, t) => {
				await vg(t);
			}), this.actor.registerMessageHandler("SI", (e, t) => this._setImages(e, t)), this.actor.registerMessageHandler("UL", async (e, t) => {
				this._getLayerIndex(e).update(t.layers, t.removedIds, this._getGlobalState(e));
			}), this.actor.registerMessageHandler("UGS", async (e, t) => {
				let r = this._getGlobalState(e);
				for (let i in t) r[i] = t[i];
			}), this.actor.registerMessageHandler("SL", async (e, t) => {
				this._getLayerIndex(e).replace(t, this._getGlobalState(e));
			});
		}
		_getGlobalState(e) {
			let t = this.globalStates.get(e);
			return t || (t = {}, this.globalStates.set(e, t)), t;
		}
		async _setImages(e, t) {
			this.availableImages[e] = t;
			for (let r in this.workerSources[e]) {
				let i = this.workerSources[e][r];
				for (let e in i) i[e].availableImages = t;
			}
		}
		async _syncRTLPluginState(e, t) {
			return await hc.syncState(t, vg);
		}
		_getAvailableImages(e) {
			let t = this.availableImages[e];
			return t || (t = []), t;
		}
		_getLayerIndex(e) {
			let t = this.layerIndexes[e];
			return t || (t = this.layerIndexes[e] = new qm()), t;
		}
		_getWorkerSource(e, t, r) {
			var i, n;
			if ((i = this.workerSources)[e] || (i[e] = {}), (n = this.workerSources[e])[t] || (n[t] = {}), !this.workerSources[e][t][r]) {
				let i = { sendAsync: (t, r) => (t.targetMapId = e, this.actor.sendAsync(t, r)) };
				switch (t) {
					case "vector":
						this.workerSources[e][t][r] = new sg(i, this._getLayerIndex(e), this._getAvailableImages(e));
						break;
					case "geojson":
						this.workerSources[e][t][r] = new mg(i, this._getLayerIndex(e), this._getAvailableImages(e));
						break;
					default: this.workerSources[e][t][r] = new this.externalWorkerSourceTypes[t](i, this._getLayerIndex(e), this._getAvailableImages(e));
				}
			}
			return this.workerSources[e][t][r];
		}
		_getDEMWorkerSource(e, t) {
			var r, i;
			return (r = this.demWorkerSources)[e] || (r[e] = {}), (i = this.demWorkerSources[e])[t] || (i[t] = new og()), this.demWorkerSources[e][t];
		}
	}(self));
})();
