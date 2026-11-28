(function() {
	Object.freeze([
		"#9ecae1",
		"#4292c6",
		"#2166ac",
		"#08306b"
	]), Object.freeze([
		"1 sensor",
		"2 sensores",
		"3 sensores",
		"4 sensores ou mais"
	]);
	const t = (t) => 8 === t ? 1 : t << 1, e = (t) => 1 === t ? 8 : t >> 1;
	Object.freeze([
		Object.freeze({
			id: "a_pe",
			rotulo: "A pé"
		}),
		Object.freeze({
			id: "mtz_rodas",
			rotulo: "Motorizada sobre rodas"
		}),
		Object.freeze({
			id: "bld_rodas",
			rotulo: "Blindada sobre rodas"
		}),
		Object.freeze({
			id: "lagartas",
			rotulo: "Sobre lagartas"
		})
	]);
	const r = Object.freeze([
		Object.freeze({
			id: "floresta",
			rotulo: "Floresta",
			overture: "forest"
		}),
		Object.freeze({
			id: "arbusto",
			rotulo: "Arbusto (cerrado)",
			overture: "shrub"
		}),
		Object.freeze({
			id: "campo",
			rotulo: "Campo",
			overture: "grass"
		}),
		Object.freeze({
			id: "cultivo",
			rotulo: "Cultivo",
			overture: "crop"
		}),
		Object.freeze({
			id: "area_umida",
			rotulo: "Área úmida",
			overture: "wetland"
		}),
		Object.freeze({
			id: "mangue",
			rotulo: "Mangue",
			overture: "mangrove"
		}),
		Object.freeze({
			id: "solo_exposto",
			rotulo: "Solo exposto",
			overture: "barren"
		}),
		Object.freeze({
			id: "urbano",
			rotulo: "Urbano",
			overture: "urban"
		}),
		Object.freeze({
			id: "neve",
			rotulo: "Neve",
			overture: "snow"
		}),
		Object.freeze({
			id: "musgo",
			rotulo: "Musgo",
			overture: "moss"
		})
	]), o = Object.freeze([Object.freeze({
		id: "massa_dagua",
		rotulo: "Massa d'água (polígono)"
	}), Object.freeze({
		id: "curso_dagua",
		rotulo: "Curso d'água (linha)"
	})]), a = Object.freeze({
		massa_dagua: "impeditivo",
		curso_dagua: "adequado"
	}), i = Object.freeze([
		"adequado",
		"restritivo",
		"impeditivo"
	]), n = Object.freeze(["dia", "noite"]), s = Object.freeze(["tobler", "linear"]), c = Object.freeze({
		floresta: "restritivo",
		arbusto: "adequado",
		campo: "adequado",
		cultivo: "adequado",
		area_umida: "restritivo",
		mangue: "restritivo",
		solo_exposto: "adequado",
		urbano: "adequado",
		neve: "adequado",
		musgo: "adequado"
	}), u = Object.freeze({
		floresta: "impeditivo",
		arbusto: "restritivo",
		campo: "adequado",
		cultivo: "adequado",
		area_umida: "impeditivo",
		mangue: "impeditivo",
		solo_exposto: "adequado",
		urbano: "restritivo",
		neve: "adequado",
		musgo: "adequado"
	});
	function h(t, e) {
		const r = t?.hidrografia?.[e];
		return i.includes(r) ? r : a[e];
	}
	Object.freeze({
		a_pe: {
			velocidadeKmh: {
				dia: 2.5,
				noite: 1.5
			},
			rampa: {
				curva: "tobler",
				fimAdequadoPct: null,
				impeditivoPct: null,
				restritivoAcimaPct: 45
			},
			fatorRestritivo: .4,
			cobertura: c
		},
		mtz_rodas: {
			velocidadeKmh: {
				dia: 8,
				noite: 5
			},
			rampa: {
				curva: "linear",
				fimAdequadoPct: 10,
				impeditivoPct: 45,
				restritivoAcimaPct: null
			},
			fatorRestritivo: .5,
			cobertura: u
		},
		bld_rodas: {
			velocidadeKmh: {
				dia: 12,
				noite: 5
			},
			rampa: {
				curva: "linear",
				fimAdequadoPct: 10,
				impeditivoPct: 45,
				restritivoAcimaPct: null
			},
			fatorRestritivo: .5,
			cobertura: u
		},
		lagartas: {
			velocidadeKmh: {
				dia: 8,
				noite: 5
			},
			rampa: {
				curva: "linear",
				fimAdequadoPct: 30,
				impeditivoPct: 45,
				restritivoAcimaPct: null
			},
			fatorRestritivo: .5,
			cobertura: u
		}
	});
	const l = (t) => "number" == typeof t && Number.isFinite(t) && t > 0, d = (t) => null === t || "number" == typeof t && Number.isFinite(t) && t >= 0;
	function f(t, e) {
		this.x = t, this.y = e;
	}
	f.prototype = {
		clone() {
			return new f(this.x, this.y);
		},
		add(t) {
			return this.clone()._add(t);
		},
		sub(t) {
			return this.clone()._sub(t);
		},
		multByPoint(t) {
			return this.clone()._multByPoint(t);
		},
		divByPoint(t) {
			return this.clone()._divByPoint(t);
		},
		mult(t) {
			return this.clone()._mult(t);
		},
		div(t) {
			return this.clone()._div(t);
		},
		rotate(t) {
			return this.clone()._rotate(t);
		},
		rotateAround(t, e) {
			return this.clone()._rotateAround(t, e);
		},
		matMult(t) {
			return this.clone()._matMult(t);
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
		equals(t) {
			return this.x === t.x && this.y === t.y;
		},
		dist(t) {
			return Math.sqrt(this.distSqr(t));
		},
		distSqr(t) {
			const e = t.x - this.x, r = t.y - this.y;
			return e * e + r * r;
		},
		angle() {
			return Math.atan2(this.y, this.x);
		},
		angleTo(t) {
			return Math.atan2(this.y - t.y, this.x - t.x);
		},
		angleWith(t) {
			return this.angleWithSep(t.x, t.y);
		},
		angleWithSep(t, e) {
			return Math.atan2(this.x * e - this.y * t, this.x * t + this.y * e);
		},
		_matMult(t) {
			const e = t[0] * this.x + t[1] * this.y, r = t[2] * this.x + t[3] * this.y;
			return this.x = e, this.y = r, this;
		},
		_add(t) {
			return this.x += t.x, this.y += t.y, this;
		},
		_sub(t) {
			return this.x -= t.x, this.y -= t.y, this;
		},
		_mult(t) {
			return this.x *= t, this.y *= t, this;
		},
		_div(t) {
			return this.x /= t, this.y /= t, this;
		},
		_multByPoint(t) {
			return this.x *= t.x, this.y *= t.y, this;
		},
		_divByPoint(t) {
			return this.x /= t.x, this.y /= t.y, this;
		},
		_unit() {
			return this._div(this.mag()), this;
		},
		_perp() {
			const t = this.y;
			return this.y = this.x, this.x = -t, this;
		},
		_rotate(t) {
			const e = Math.cos(t), r = Math.sin(t), o = e * this.x - r * this.y, a = r * this.x + e * this.y;
			return this.x = o, this.y = a, this;
		},
		_rotateAround(t, e) {
			const r = Math.cos(t), o = Math.sin(t), a = e.x + r * (this.x - e.x) - o * (this.y - e.y), i = e.y + o * (this.x - e.x) + r * (this.y - e.y);
			return this.x = a, this.y = i, this;
		},
		_round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
		},
		constructor: f
	}, f.convert = function(t) {
		if (t instanceof f) return t;
		if (Array.isArray(t)) return new f(+t[0], +t[1]);
		if (void 0 !== t.x && void 0 !== t.y) return new f(+t.x, +t.y);
		throw new Error("Expected [x, y] or {x, y} point format");
	};
	var p = class {
		constructor(t, e, r, o, a) {
			for (this.properties = Object.create(null), this.extent = r, this.type = 0, this.id = void 0, this._pbf = t, this._geometry = -1, this._keys = o, this._values = a; t.pos < e;) {
				const e = t.readVarint();
				if (8 === e) this.id = t.readVarint();
				else if (18 === e) {
					const e = t.readVarint() + t.pos;
					for (; t.pos < e;) {
						const e = o[t.readVarint()], r = a[t.readVarint()];
						this.properties[e] = r;
					}
				} else 24 === e ? this.type = t.readVarint() : 34 === e ? (this._geometry = t.pos, t.skip(e)) : t.skip(e);
			}
		}
		loadGeometry() {
			if (this._geometry < 0) throw new Error("feature has no geometry");
			const t = this._pbf;
			t.pos = this._geometry;
			const e = t.readVarint() + t.pos, r = [];
			let o, a = 1, i = 0, n = 0, s = 0;
			for (; t.pos < e;) {
				if (i <= 0) {
					const e = t.readVarint();
					if (a = 7 & e, i = e >> 3, 0 === i) continue;
				}
				if (i--, 1 === a) n += t.readSVarint(), s += t.readSVarint(), o && r.push(o), o = [new f(n, s)];
				else if (2 === a) n += t.readSVarint(), s += t.readSVarint(), o && o.push(new f(n, s));
				else {
					if (7 !== a) throw new Error(`unknown command ${a}`);
					o && o.push(o[0].clone());
				}
			}
			return o && r.push(o), r;
		}
		bbox() {
			if (this._geometry < 0) throw new Error("feature has no geometry");
			const t = this._pbf;
			t.pos = this._geometry;
			const e = t.readVarint() + t.pos;
			let r = 1, o = 0, a = 0, i = 0, n = 1 / 0, s = -1 / 0, c = 1 / 0, u = -1 / 0;
			for (; t.pos < e;) {
				if (o <= 0) {
					const e = t.readVarint();
					if (r = 7 & e, o = e >> 3, 0 === o) continue;
				}
				if (o--, 1 === r || 2 === r) a += t.readSVarint(), i += t.readSVarint(), a < n && (n = a), a > s && (s = a), i < c && (c = i), i > u && (u = i);
				else if (7 !== r) throw new Error(`unknown command ${r}`);
			}
			return [
				n,
				c,
				s,
				u
			];
		}
		toGeoJSON(t, e, r) {
			const o = this.extent * Math.pow(2, r), a = this.extent * t, i = this.extent * e, n = this.loadGeometry();
			function s(t) {
				return [360 * (t.x + a) / o - 180, 360 / Math.PI * Math.atan(Math.exp((1 - 2 * (t.y + i) / o) * Math.PI)) - 90];
			}
			function c(t) {
				return t.map(s);
			}
			let u;
			if (1 === this.type) {
				const t = [];
				for (const r of n) t.push(r[0]);
				const e = c(t);
				u = 1 === t.length ? {
					type: "Point",
					coordinates: e[0]
				} : {
					type: "MultiPoint",
					coordinates: e
				};
			} else if (2 === this.type) {
				const t = n.map(c);
				u = 1 === t.length ? {
					type: "LineString",
					coordinates: t[0]
				} : {
					type: "MultiLineString",
					coordinates: t
				};
			} else {
				if (3 !== this.type) throw new Error("unknown feature type");
				{
					const t = function(t) {
						const e = t.length;
						if (e <= 1) return [t];
						const r = [];
						let o, a;
						for (let i = 0; i < e; i++) {
							const e = m(t[i]);
							0 !== e && (void 0 === a && (a = e < 0), a === e < 0 ? (o && r.push(o), o = [t[i]]) : o && o.push(t[i]));
						}
						return o && r.push(o), r;
					}(n), e = [];
					for (const r of t) e.push(r.map(c));
					u = 1 === e.length ? {
						type: "Polygon",
						coordinates: e[0]
					} : {
						type: "MultiPolygon",
						coordinates: e
					};
				}
			}
			const h = {
				type: "Feature",
				geometry: u,
				properties: this.properties
			};
			return null != this.id && (h.id = this.id), h;
		}
	};
	function m(t) {
		let e = 0;
		for (let r, o, a = 0, i = t.length, n = i - 1; a < i; n = a++) r = t[a], o = t[n], e += (o.x - r.x) * (r.y + o.y);
		return e;
	}
	p.types = [
		"Unknown",
		"Point",
		"LineString",
		"Polygon"
	];
	var y = class {
		constructor(t, e) {
			for (this.version = 1, this.name = "", this.extent = 4096, this.length = 0, this._pbf = t, this._keys = [], this._values = [], this._features = [], void 0 === e && (e = t.length); t.pos < e;) {
				const e = t.readVarint();
				10 === e ? this.name = t.readString() : 18 === e ? (this._features.push(t.pos), t.skip(e)) : 26 === e ? this._keys.push(t.readString()) : 34 === e ? this._values.push(M(t)) : 40 === e ? this.extent = t.readVarint() : 120 === e ? this.version = t.readVarint() : t.skip(e);
			}
			this.length = this._features.length;
		}
		feature(t) {
			if (t < 0 || t >= this._features.length) throw new Error("feature index out of bounds");
			this._pbf.pos = this._features[t];
			const e = this._pbf.readVarint() + this._pbf.pos;
			return new p(this._pbf, e, this.extent, this._keys, this._values);
		}
	};
	function M(t) {
		let e = null;
		const r = t.readVarint() + t.pos;
		for (; t.pos < r;) {
			const r = t.readVarint();
			e = 10 === r ? t.readString() : 21 === r ? t.readFloat() : 25 === r ? t.readDouble() : 32 === r ? t.readVarint(!0) : 40 === r ? t.readVarint() : 48 === r ? t.readSVarint() : 56 === r ? t.readBoolean() : (t.skip(r), null);
		}
		if (null == e) throw new Error("unknown feature value");
		return e;
	}
	var g = class {
		constructor(t, e = t.length) {
			const r = Object.create(null);
			for (; t.pos < e;) {
				const e = t.readVarint();
				if (26 === e) {
					const e = new y(t, t.readVarint() + t.pos);
					e.length && (r[e.name] = e);
				} else t.skip(e);
			}
			this.layers = r;
		}
	};
	const x = 4294967296, b = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf-8");
	var v = class {
		constructor(t) {
			this.buf = ArrayBuffer.isView(t) ? t : new Uint8Array(t), this.dataView = new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.pos = 0, this.type = 0, this._valueStart = -1, this.length = this.buf.length;
		}
		readFields(t, e, r = this.length) {
			let o;
			for (; o = this.nextField(r);) t(o, e, this);
			return e;
		}
		readMessage(t, e) {
			return this.readFields(t, e, this.readVarint() + this.pos);
		}
		readFixed32() {
			const t = this.dataView.getUint32(this.pos, !0);
			return this.pos += 4, t;
		}
		readSFixed32() {
			const t = this.dataView.getInt32(this.pos, !0);
			return this.pos += 4, t;
		}
		readFixed64() {
			const t = this.dataView.getUint32(this.pos, !0) + this.dataView.getUint32(this.pos + 4, !0) * x;
			return this.pos += 8, t;
		}
		readSFixed64() {
			const t = this.dataView.getUint32(this.pos, !0) + this.dataView.getInt32(this.pos + 4, !0) * x;
			return this.pos += 8, t;
		}
		readFloat() {
			const t = this.dataView.getFloat32(this.pos, !0);
			return this.pos += 4, t;
		}
		readDouble() {
			const t = this.dataView.getFloat64(this.pos, !0);
			return this.pos += 8, t;
		}
		readVarint(t) {
			const e = this.buf, r = e[this.pos++];
			if (r < 128) return r;
			let o, a = 127 & r;
			return o = e[this.pos++], a |= (127 & o) << 7, o < 128 ? a : (o = e[this.pos++], a |= (127 & o) << 14, o < 128 ? a : (o = e[this.pos++], a |= (127 & o) << 21, o < 128 ? a : (o = e[this.pos], a |= (15 & o) << 28, function(t, e, r) {
				const o = r.buf;
				let a, i;
				if (i = o[r.pos++], a = (112 & i) >> 4, i < 128) return w(t, a, e);
				if (i = o[r.pos++], a |= (127 & i) << 3, i < 128) return w(t, a, e);
				if (i = o[r.pos++], a |= (127 & i) << 10, i < 128) return w(t, a, e);
				if (i = o[r.pos++], a |= (127 & i) << 17, i < 128) return w(t, a, e);
				if (i = o[r.pos++], a |= (127 & i) << 24, i < 128) return w(t, a, e);
				if (i = o[r.pos++], a |= (1 & i) << 31, i < 128) return w(t, a, e);
				throw new Error("Expected varint not more than 10 bytes");
			}(a, t, this))));
		}
		readSVarint() {
			const t = this.readVarint();
			return t % 2 == 1 ? (t + 1) / -2 : t / 2;
		}
		readBoolean() {
			return Boolean(this.readVarint());
		}
		readString() {
			const t = this.readVarint() + this.pos, e = this.pos;
			return this.pos = t, t - e >= 12 && b ? b.decode(this.buf.subarray(e, t)) : function(t, e, r) {
				let o = "", a = e;
				for (; a < r;) {
					const e = t[a];
					let i, n, s, c = null, u = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
					if (a + u > r) break;
					1 === u ? e < 128 && (c = e) : 2 === u ? (i = t[a + 1], 128 == (192 & i) && (c = (31 & e) << 6 | 63 & i, c <= 127 && (c = null))) : 3 === u ? (i = t[a + 1], n = t[a + 2], 128 == (192 & i) && 128 == (192 & n) && (c = (15 & e) << 12 | (63 & i) << 6 | 63 & n, (c <= 2047 || c >= 55296 && c <= 57343) && (c = null))) : 4 === u && (i = t[a + 1], n = t[a + 2], s = t[a + 3], 128 == (192 & i) && 128 == (192 & n) && 128 == (192 & s) && (c = (15 & e) << 18 | (63 & i) << 12 | (63 & n) << 6 | 63 & s, (c <= 65535 || c >= 1114112) && (c = null))), null === c ? (c = 65533, u = 1) : c > 65535 && (c -= 65536, o += String.fromCharCode(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), o += String.fromCharCode(c), a += u;
				}
				return o;
			}(this.buf, e, t);
		}
		readBytes() {
			const t = this.readVarint() + this.pos, e = this.buf.subarray(this.pos, t);
			return this.pos = t, e;
		}
		readPackedVarint(t = [], e) {
			const r = this.readPackedEnd();
			for (; this.pos < r;) t.push(this.readVarint(e));
			return t;
		}
		readPackedSVarint(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e;) t.push(this.readSVarint());
			return t;
		}
		readPackedBoolean(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e;) t.push(this.readBoolean());
			return t;
		}
		readPackedFloat(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e;) t.push(this.readFloat());
			return t;
		}
		readPackedDouble(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e;) t.push(this.readDouble());
			return t;
		}
		readPackedFixed32(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e;) t.push(this.readFixed32());
			return t;
		}
		readPackedSFixed32(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e;) t.push(this.readSFixed32());
			return t;
		}
		readPackedFixed64(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e;) t.push(this.readFixed64());
			return t;
		}
		readPackedSFixed64(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e;) t.push(this.readSFixed64());
			return t;
		}
		readPackedEnd() {
			return 2 === this.type ? this.readVarint() + this.pos : this.pos + 1;
		}
		nextField(t = this.length) {
			if (this.pos === this._valueStart && this.skip(this.type), this.pos >= t) return 0;
			const e = this.readVarint();
			return this.type = 7 & e, this._valueStart = this.pos, e >>> 3;
		}
		skip(t) {
			const e = 7 & t;
			if (0 === e) for (; this.buf[this.pos++] > 127;);
			else if (2 === e) this.pos = this.readVarint() + this.pos;
			else if (5 === e) this.pos += 4;
			else {
				if (1 !== e) throw new Error(`Unimplemented type: ${e}`);
				this.pos += 8;
			}
		}
	};
	function w(t, e, r) {
		return r ? 4294967296 * e + (t >>> 0) : 4294967296 * (e >>> 0) + (t >>> 0);
	}
	const A = (t) => 255 === t ? 255 : 127 & t, P = new Map(r.map((t, e) => [t.overture, e + 1])), _ = [
		"musgo",
		"mangue",
		"arbusto",
		"campo",
		"cultivo",
		"area_umida",
		"solo_exposto",
		"neve",
		"floresta",
		"urbano"
	], z = (() => {
		const t = /* @__PURE__ */ new Uint8Array(256);
		return _.forEach((e, o) => {
			t[r.findIndex((t) => t.id === e) + 1] = o + 1;
		}), t[255] = 255, t;
	})(), F = Math.PI / 180, V = (t, e) => (t + 180) / 360 * e;
	function k(t, e) {
		const r = Math.sin(Math.max(-85.051129, Math.min(85.051129, t)) * F);
		return (.5 - Math.log((1 + r) / (1 - r)) / (4 * Math.PI)) * e;
	}
	function j(t) {
		const e = t instanceof Uint8Array ? t : new Uint8Array(t);
		return e.length >= 2 && 31 === e[0] && 139 === e[1];
	}
	function O(t, e, r) {
		const { classes: o, w: a, r0: i, r1: n, c0: s, c1: c, yNoTile: u, x0Tile: h, kTile: l, cruzamentos: d } = r, f = z[e];
		let p = 1 / 0, m = -1 / 0, y = 0;
		for (const g of t) {
			y += g.length;
			for (const t of g) t.y < p && (p = t.y), t.y > m && (m = t.y);
		}
		d.length < y && (r.cruzamentos = new Float64Array(2 * y));
		const M = r.cruzamentos;
		for (let g = i; g <= n; g++) {
			const r = u[g];
			if (r < p || r > m) continue;
			let i = 0;
			for (const e of t) for (let t = 0, o = e.length - 1; t < e.length; o = t++) {
				const a = e[t], n = e[o];
				a.y > r != n.y > r && (M[i++] = a.x + (r - a.y) * (n.x - a.x) / (n.y - a.y));
			}
			if (i < 2) continue;
			const n = M.subarray(0, i).sort(), d = g * a;
			for (let t = 0; t + 1 < i; t += 2) {
				let r = Math.ceil((n[t] - h) / l), a = Math.ceil((n[t + 1] - h) / l) - 1;
				r < s && (r = s), a > c && (a = c);
				for (let t = r; t <= a; t++) {
					const r = d + t, a = o[r];
					f >= z[A(a)] && (o[r] = 255 === e ? 255 : e | 128 & a);
				}
			}
		}
	}
	function q(t, e) {
		const { classes: r, w: o, r0: a, r1: i, c0: n, c1: s, yNoTile: c, x0Tile: u, kTile: h } = e, l = i > a ? (c[i] - c[a]) / (i - a) : e.kLinhaTile;
		if (!(l > 0)) return;
		const d = (t, e) => {
			if (t < a || t > i || e < n || e > s) return;
			const c = t * o + e;
			255 !== r[c] && (r[c] |= 128);
		};
		for (const f of t) {
			let t = null, e = null;
			for (let r = 0; r + 1 < f.length; r++) {
				const o = f[r], i = f[r + 1], n = (o.x - u) / h, s = a + (o.y - c[a]) / l, p = (i.x - u) / h, m = a + (i.y - c[a]) / l, y = Math.max(1, Math.ceil(4 * Math.max(Math.abs(p - n), Math.abs(m - s))));
				for (let r = 0; r <= y; r++) {
					const o = r / y, a = Math.round(s + (m - s) * o), i = Math.round(n + (p - n) * o);
					a === t && i === e || (null !== t && a !== t && i !== e && d(t, i), d(a, i), t = a, e = i);
				}
			}
		}
	}
	const E = 6371e3, S = Math.PI / 180, N = Math.exp(3.5 * .05), C = Int8Array.of(-1, -1, 0, 1, 1, 1, 0, -1), I = Int8Array.of(0, 1, 1, 1, 0, -1, -1, -1);
	function L(t, e) {
		const r = "tobler" === t.curva, o = Number.isFinite(t.fimAdequadoPct) ? t.fimAdequadoPct / 100 : null, a = Number.isFinite(t.impeditivoPct) ? t.impeditivoPct / 100 : null, i = Number.isFinite(t.restritivoAcimaPct) ? t.restritivoAcimaPct / 100 : 1 / 0, n = null !== o && null !== a ? a - o : 0;
		return (t) => {
			const s = t < 0 ? -t : t;
			if (null !== a && s >= a) return 0;
			let c;
			if (r) {
				const e = t + .05;
				c = Math.exp(-3.5 * ((e < 0 ? -e : e) - .05));
			} else c = null === o || s <= o ? 1 : (a - s) / n;
			return s > i ? c * e : c;
		};
	}
	function U(t, e, r) {
		const o = Math.floor((e - t.lonW) / t.dLon), a = Math.floor((t.latN - r) / t.dLat);
		return o < 0 || a < 0 || o >= t.w || a >= t.h ? -1 : a * t.w + o;
	}
	var B = class {
		constructor(t = 1024) {
			this.chaves = new Float64Array(t), this.ids = new Int32Array(t), this.tamanho = 0, this.ultimaChave = NaN;
		}
		empurrar(t, e) {
			if (this.tamanho === this.chaves.length) {
				const t = new Float64Array(2 * this.chaves.length);
				t.set(this.chaves);
				const e = new Int32Array(2 * this.ids.length);
				e.set(this.ids), this.chaves = t, this.ids = e;
			}
			const r = this.chaves, o = this.ids;
			let a = this.tamanho++;
			for (; a > 0;) {
				const e = a - 1 >> 1;
				if (r[e] <= t) break;
				r[a] = r[e], o[a] = o[e], a = e;
			}
			r[a] = t, o[a] = e;
		}
		extrair() {
			const t = this.chaves, e = this.ids, r = e[0];
			this.ultimaChave = t[0];
			const o = --this.tamanho;
			if (o > 0) {
				const r = t[o], a = e[o];
				let i = 0;
				for (;;) {
					let a = 2 * i + 1;
					if (a >= o) break;
					if (a + 1 < o && t[a + 1] < t[a] && a++, t[a] >= r) break;
					t[i] = t[a], e[i] = e[a], i = a;
				}
				t[i] = r, e[i] = a;
			}
			return r;
		}
	};
	const D = Math.PI / 180, T = 180 / Math.PI, R = Object.freeze([
		Object.freeze({
			id: "ex_cmp",
			rotulo: "Ex Cmp (Exército de Campanha)",
			via: Object.freeze({
				nome: "Divisão",
				sigla: "DE",
				escalao: "XX"
			}),
			corredor: Object.freeze({
				nome: "Brigada",
				sigla: "Bda",
				escalao: "X",
				larguraM: 3e3
			}),
			separacaoMaximaM: 1e4
		}),
		Object.freeze({
			id: "de",
			rotulo: "DE (Divisão de Exército)",
			via: Object.freeze({
				nome: "Brigada",
				sigla: "Bda",
				escalao: "X"
			}),
			corredor: Object.freeze({
				nome: "Unidade",
				sigla: "U",
				escalao: "II",
				larguraM: 1500
			}),
			separacaoMaximaM: 6e3
		}),
		Object.freeze({
			id: "bda",
			rotulo: "Bda (Brigada)",
			via: Object.freeze({
				nome: "Unidade",
				sigla: "U",
				escalao: "II"
			}),
			corredor: Object.freeze({
				nome: "Subunidade",
				sigla: "SU",
				escalao: "I",
				larguraM: 500
			}),
			separacaoMaximaM: 2e3
		})
	]);
	function $(t) {
		const e = R.find((e) => e.id === t);
		if (!e) throw new Error(`Escalão planejador desconhecido: ${t}`);
		return e;
	}
	const G = 0x56bc75e2d63100000;
	function W(t, e, r, o, a) {
		let i = 0;
		o[0] = 0, a[0] = -0x56bc75e2d63100000, a[1] = G;
		for (let n = 1; n < e; n++) {
			let e = (t[n] + n * n - (t[o[i]] + o[i] * o[i])) / (2 * n - 2 * o[i]);
			for (; e <= a[i];) i--, e = (t[n] + n * n - (t[o[i]] + o[i] * o[i])) / (2 * n - 2 * o[i]);
			i++, o[i] = n, a[i] = e, a[i + 1] = G;
		}
		i = 0;
		for (let n = 0; n < e; n++) {
			for (; a[i + 1] < n;) i++;
			const e = n - o[i];
			r[n] = e * e + t[o[i]];
		}
	}
	function K(t, e, r) {
		const o = Math.max(e, r), a = new Float64Array(o), i = new Float64Array(o), n = new Float64Array(o + 1), s = new Int32Array(o), c = new Float64Array(e * r);
		let u = !1;
		for (let l = 0; l < e; l++) {
			for (let o = 0; o < r; o++) {
				const r = 1 === t[o * e + l];
				r && (u = !0), a[o] = r ? 0 : G;
			}
			W(a, r, i, s, n);
			for (let t = 0; t < r; t++) c[t * e + l] = i[t];
		}
		const h = new Float32Array(e * r);
		if (!u) return h.fill(1 / 0);
		for (let l = 0; l < r; l++) {
			const t = l * e;
			for (let r = 0; r < e; r++) a[r] = c[t + r];
			W(a, e, i, s, n);
			for (let r = 0; r < e; r++) h[t + r] = i[r] >= G / 2 ? 1 / 0 : Math.sqrt(i[r]);
		}
		return h;
	}
	const X = (t, e) => Math.max(0, 2 * t - 1) * e, H = (t, e) => (t / e + 1) / 2, J = Int8Array.of(-1, -1, 0, 1, 1, 1, 0, -1), Q = Int8Array.of(0, 1, 1, 1, 0, -1, -1, -1), Y = Math.SQRT2;
	function Z(t, e, r, o, a) {
		if (o < 0) return -1;
		if (t[o]) return o;
		const i = o % e, n = (o - i) / e;
		let s = -1, c = 1 / 0;
		for (let u = 1; u <= a; u++) {
			for (let o = -u; o <= u; o++) for (let a = -u; a <= u; a++) {
				if (Math.max(Math.abs(o), Math.abs(a)) !== u) continue;
				const h = n + o, l = i + a;
				if (h < 0 || l < 0 || h >= r || l >= e) continue;
				const d = h * e + l;
				if (!t[d]) continue;
				const f = o * o + a * a;
				f < c && (c = f, s = d);
			}
			if (s >= 0) return s;
		}
		return -1;
	}
	function tt({ w: t, h: e, dist: r, permitida: o, raioPleno: a, origem: i, destino: n }) {
		if (i < 0 || n < 0 || !o[i] || !o[n]) return null;
		const s = t * e, c = new Float64Array(s).fill(1 / 0), u = new Int32Array(s).fill(-1), h = new Uint8Array(s), l = new B(4096), d = n % t, f = (n - d) / t, p = (e) => {
			const r = e % t, o = (e - r) / t, a = Math.abs(r - d), i = Math.abs(o - f);
			return Math.max(a, i) + (Y - 1) * Math.min(a, i);
		};
		for (c[i] = 0, l.empurrar(p(i), i); l.tamanho > 0;) {
			const i = l.extrair();
			if (h[i]) continue;
			if (h[i] = 1, i === n) break;
			const s = i % t, d = (i - s) / t;
			for (let n = 0; n < 8; n++) {
				const f = d + J[n], m = s + Q[n];
				if (f < 0 || m < 0 || f >= e || m >= t) continue;
				const y = f * t + m;
				if (!o[y] || h[y]) continue;
				if (!(1 & ~n || o[d * t + m] || o[f * t + s])) continue;
				const M = r[y], g = 1 + a / Math.max(M, .5) + (M < a ? 6 : 0), x = c[i] + (1 & ~n ? 1 : Y) * g;
				x < c[y] && (c[y] = x, u[y] = i, l.empurrar(x + p(y), y));
			}
		}
		if (!Number.isFinite(c[n])) return null;
		const m = [];
		for (let y = n; -1 !== y; y = u[y]) m.push(y);
		return Int32Array.from(m.reverse());
	}
	function et(t, e, r, o = 3) {
		const a = [];
		let i = null;
		for (let n = 0; n < t.length; n++) {
			const s = e[t[n]];
			s < r && (i && n - i.fim <= o ? (i.fim = n, s < i.menorDist && (i.menorDist = s, i.meio = n)) : (i = {
				inicio: n,
				fim: n,
				menorDist: s,
				meio: n
			}, a.push(i)));
		}
		return a;
	}
	function rt(t, e, r, o, a) {
		const i = new Uint8Array(r * o);
		for (const h of t) i[h] = 1;
		const n = K(i, r, o), s = new Uint8Array(r * o), c = Array.from(t);
		for (const h of t) s[h] = 1;
		const u = (t) => {
			s[t] || e[t] || n[t] > a || (s[t] = 1, c.push(t));
		};
		for (let h = 0; h < c.length; h++) {
			const t = c[h], e = t % r, a = (t - e) / r;
			a > 0 && u(t - r), a < o - 1 && u(t + r), e > 0 && u(t - 1), e < r - 1 && u(t + 1);
		}
		return s;
	}
	function ot(t, e) {
		if (1 === t.length) return t[0];
		let r = 0;
		const o = [];
		for (let i = 1; i < t.length; i++) {
			const e = Math.hypot(t[i][0] - t[i - 1][0], t[i][1] - t[i - 1][1]);
			o.push(e), r += e;
		}
		let a = Math.max(0, Math.min(1, e)) * r;
		for (let i = 0; i < o.length; i++) {
			if (a <= o[i] || i === o.length - 1) {
				const e = o[i] > 0 ? Math.min(1, a / o[i]) : 0;
				return [t[i][0] + e * (t[i + 1][0] - t[i][0]), t[i][1] + e * (t[i + 1][1] - t[i][1])];
			}
			a -= o[i];
		}
		return t[t.length - 1];
	}
	const at = Object.freeze([
		.25,
		.35,
		.45,
		.55,
		.65,
		.75
	]);
	function it(t, e = 24) {
		const r = [];
		for (let o = 0; o <= e; o++) {
			let a = 0, i = 0;
			for (const r of t) {
				const t = ot(r, o / e);
				a += t[0], i += t[1];
			}
			r.push([a / t.length, i / t.length]);
		}
		return r;
	}
	function nt(t, e) {
		const { w: r, cotas: o, codigoCelula: a, fatorDoCodigo: i, passoH: n, vBase: s, fatorDaRampa: c } = t;
		let u = 0;
		for (let h = 1; h < e.length; h++) {
			const t = e[h - 1], l = e[h], d = Math.floor(t / r), f = l % r - t % r, p = Math.floor(l / r) - d, m = n[8 * d + (p < 0 ? f < 0 ? 7 : f > 0 ? 1 : 0 : p > 0 ? f < 0 ? 5 : f > 0 ? 3 : 4 : f > 0 ? 2 : 6)], y = Number.isFinite(o[l]) && Number.isFinite(o[t]) ? o[l] - o[t] : 0, M = (i[a[t]] + i[a[l]]) / 2, g = Math.max(.05, c(y / m) * M);
			u += Math.hypot(m, y) / (s * g);
		}
		return u;
	}
	function st(a, c = () => {}) {
		const { aneis: u, partida: f, objetivo: p, periodo: m, parametros: y, zoom: M, tiles: x, coberturaTiles: b, passo: w } = a;
		if (!n.includes(m)) throw new Error(`Período desconhecido: ${m}`);
		const _ = function(t) {
			const e = [];
			if (!t || "object" != typeof t) return ["Parâmetros ausentes."];
			const a = t.velocidadeKmh ?? {};
			l(a.dia) || e.push("A velocidade de dia precisa ser um número maior que zero."), l(a.noite) || e.push("A velocidade de noite precisa ser um número maior que zero.");
			const n = t.rampa ?? {};
			s.includes(n.curva) || e.push("A curva de declividade precisa ser \"tobler\" ou \"linear\".");
			for (const [r, o] of [
				["fimAdequadoPct", "fim do adequado"],
				["impeditivoPct", "início do impeditivo"],
				["restritivoAcimaPct", "restritivo acima de"]
			]) d(n[r] ?? null) || e.push(`A declividade "${o}" precisa ser vazia ou um número maior ou igual a zero.`);
			"linear" === n.curva && ("number" != typeof n.fimAdequadoPct || "number" != typeof n.impeditivoPct ? e.push("A queda linear precisa do fim do adequado e do início do impeditivo.") : n.fimAdequadoPct < n.impeditivoPct || e.push("O fim do adequado precisa ser menor que o início do impeditivo.")), "number" == typeof t.fatorRestritivo && t.fatorRestritivo > 0 && t.fatorRestritivo <= 1 || e.push("O fator do restritivo precisa estar entre 0 (exclusive) e 1.");
			const c = t.cobertura ?? {};
			for (const { id: o, rotulo: s } of r) i.includes(c[o]) || e.push(`A cobertura "${s}" precisa ser adequado, restritivo ou impeditivo.`);
			for (const { id: r, rotulo: s } of o) {
				const o = t.hidrografia?.[r];
				void 0 === o || i.includes(o) || e.push(`A hidrografia "${s}" precisa ser adequado, restritivo ou impeditivo.`);
			}
			return e;
		}(y);
		if (_.length) throw new Error(_.join(" "));
		const z = $(a.planejador), F = z.corredor.larguraM, B = function(t) {
			const e = function(t) {
				const e = R.findIndex((e) => e.id === t);
				return e >= 0 && e + 1 < R.length ? R[e + 1] : null;
			}(t);
			return e ? e.corredor.larguraM : $(t).corredor.larguraM / 2;
		}(z.id), G = function(t, e, r = 4e6) {
			if (!(e > 0)) throw new Error("passo precisa ser positivo");
			const { oeste: o, sul: a, leste: i, norte: n } = t;
			if (!(i > o && n > a)) throw new Error("A área desenhada não tem extensão.");
			const s = Math.cos((n + a) / 2 * D), c = (t) => {
				const e = t / E * T, r = e / s;
				return {
					dLat: e,
					dLon: r,
					w: Math.max(1, Math.ceil((i - o) / r)),
					h: Math.max(1, Math.ceil((n - a) / e))
				};
			};
			let u = e, h = c(u), l = !1;
			return h.w * h.h > r && (u *= 1.001 * Math.sqrt(h.w * h.h / r), h = c(u), l = !0), {
				lonW: o,
				latN: n,
				dLon: h.dLon,
				dLat: h.dLat,
				w: h.w,
				h: h.h,
				passo: u,
				engrossou: l
			};
		}(function(t) {
			let e = 180, r = -180, o = 90, a = -90;
			for (const i of t) for (const [t, n] of i) t < e && (e = t), t > r && (r = t), n < o && (o = n), n > a && (a = n);
			return {
				oeste: e,
				sul: o,
				leste: r,
				norte: a
			};
		}(u), w);
		c("relevo", 0);
		const W = function(t, e, r = null) {
			const { lonW: o, latN: a, dLon: i, dLat: n, w: s, h: c } = t, u = new Float32Array(s * c);
			for (let h = 0; h < c; h++) {
				const t = a - (h + .5) * n, l = h * s;
				for (let r = 0; r < s; r++) u[l + r] = e(t, o + (r + .5) * i);
				!r || 63 & ~h || r(h / c);
			}
			return r && r(1), u;
		}(G, function(t, e) {
			if (!e.length) return () => NaN;
			let r = 1 / 0, o = 1 / 0, a = -1 / 0, i = -1 / 0;
			for (const u of e) r = Math.min(r, u.x), o = Math.min(o, u.y), a = Math.max(a, u.x), i = Math.max(i, u.y);
			const n = a - r + 1, s = new Array(n * (i - o + 1)).fill(null);
			for (const u of e) s[(u.y - o) * n + (u.x - r)] = u;
			const c = e[0].largura;
			return (e, u) => {
				const h = function(t, e, r, o) {
					const a = 2 ** r, i = Math.max(-85.051129, Math.min(85.051129, e)), n = (((t + 180) % 360 + 360) % 360 - 180 + 180) / 360 * a, s = Math.sin(i * Math.PI / 180), c = (.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * a, u = Math.min(a - 1, Math.max(0, Math.floor(n))), h = Math.min(a - 1, Math.max(0, Math.floor(c))), l = (t) => Math.min(o, Math.max(0, t * o));
					return {
						z: r,
						x: u,
						y: h,
						px: l(n - u),
						py: l(c - h)
					};
				}(u, e, t, c);
				if (h.x < r || h.x > a || h.y < o || h.y > i) return NaN;
				const l = s[(h.y - o) * n + (h.x - r)];
				return l ? function(t, e, r) {
					const { largura: o, altura: a, cotas: i } = t, n = Math.max(0, Math.min(o - 1, e - .5)), s = Math.max(0, Math.min(a - 1, r - .5)), c = Math.floor(n), u = Math.floor(s), h = Math.min(o - 1, c + 1), l = Math.min(a - 1, u + 1), d = n - c, f = s - u;
					return (i[u * o + c] * (1 - d) + i[u * o + h] * d) * (1 - f) + (i[l * o + c] * (1 - d) + i[l * o + h] * d) * f;
				}(l, h.px, h.py) : NaN;
			};
		}(M, x ?? []), (t) => c("relevo", t));
		c("cobertura", 0);
		const J = function(t, e, r = null) {
			const { lonW: o, latN: a, dLon: i, dLat: n, w: s, h: c } = t, u = new Uint8Array(s * c), h = e ?? [], l = /* @__PURE__ */ new Map(), d = {
				classes: u,
				w: s,
				cruzamentos: /* @__PURE__ */ new Float64Array(4096)
			};
			return h.forEach((t, e) => {
				if (!t?.buffer || 0 === t.buffer.byteLength) return;
				if (j(t.buffer)) throw new Error(`tile de cobertura ${t.z}/${t.x}/${t.y} ainda comprimido`);
				const { yG: u, xG0: f, kG: p } = ((t) => {
					let e = l.get(t);
					if (e) return e;
					const r = 2 ** t, s = new Float64Array(c);
					for (let o = 0; o < c; o++) s[o] = k(a - (o + .5) * n, r);
					return e = {
						n: r,
						yG: s,
						xG0: V(o + .5 * i, r),
						kG: i / 360 * r
					}, l.set(t, e), e;
				})(t.z);
				let m = 0;
				for (; m < c && u[m] < t.y;) m++;
				let y = m - 1;
				for (; y + 1 < c && u[y + 1] < t.y + 1;) y++;
				if (y < m) return;
				const M = Math.max(0, Math.ceil((t.x - f) / p)), x = Math.min(s - 1, Math.ceil((t.x + 1 - f) / p) - 1);
				if (x < M) return;
				const b = new g(new v(new Uint8Array(t.buffer)));
				for (const [r, o] of [["land_cover", !1], ["water", !0]]) {
					const e = b.layers[r];
					if (!e) continue;
					const a = e.extent || 4096, i = new Float64Array(c);
					for (let r = m; r <= y; r++) i[r] = (u[r] - t.y) * a;
					const n = m + 1 < c ? (u[m + 1] - u[m]) * a : 0;
					Object.assign(d, {
						r0: m,
						r1: y,
						c0: M,
						c1: x,
						yNoTile: i,
						x0Tile: (f - t.x) * a,
						kTile: p * a,
						kLinhaTile: n
					});
					for (let t = 0; t < e.length; t++) {
						const r = e.feature(t);
						if (o && 2 === r.type) {
							q(r.loadGeometry(), d);
							continue;
						}
						if (3 !== r.type) continue;
						const a = o ? 255 : P.get(r.properties.subtype);
						a && O(r.loadGeometry(), a, d);
					}
				}
				r && r((e + 1) / h.length);
			}), u;
		}(G, b ?? [], (t) => c("cobertura", t)), Q = function(t) {
			const e = /* @__PURE__ */ new Float64Array(256);
			let o = 0;
			for (let r = 0; r < t.length; r++) e[A(t[r])]++, 255 !== t[r] && 128 & t[r] && o++;
			const a = t.length || 1, i = (t) => 100 * t / a, n = {};
			return r.forEach((t, r) => {
				n[t.id] = i(e[r + 1]);
			}), {
				semClassePct: i(e[0]),
				aguaPct: i(e[255]),
				cursoDaguaPct: i(o),
				porClasse: n
			};
		}(J), st = function(t, e, o, a, i) {
			const { w: n, h: s, latN: c, dLat: u, dLon: l } = t, d = a.velocidadeKmh[i];
			if (!(d > 0)) throw new Error(`Velocidade inválida para o período ${i}.`);
			const f = (/* @__PURE__ */ new Float64Array(256)).fill(1);
			r.forEach(({ id: t }, e) => {
				const r = a.cobertura[t];
				f[e + 1] = "impeditivo" === r ? 0 : "restritivo" === r ? a.fatorRestritivo : 1;
			});
			const p = (t) => "impeditivo" === t ? 0 : "restritivo" === t ? a.fatorRestritivo : 1;
			f[255] = p(h(a, "massa_dagua"));
			const m = p(h(a, "curso_dagua"));
			for (let h = 0; h <= r.length; h++) f[128 | h] = f[h] * m;
			f[253] = 0;
			const y = n * s, M = new Uint8Array(y);
			for (let r = 0; r < y; r++) M[r] = Number.isFinite(e[r]) ? o[r] : 253;
			const g = u * S * E, x = (t) => l * S * E * Math.cos(t * S), b = new Float64Array(8 * s);
			let v = 1 / 0;
			for (let r = 0; r < s; r++) {
				const t = x(c - (r + .5) * u), e = x(c - r * u), o = x(c - (r + 1) * u);
				v = Math.min(v, t, e, o);
				const a = Math.hypot(g, e), i = Math.hypot(g, o);
				b.set([
					g,
					a,
					t,
					i,
					g,
					i,
					t,
					a
				], 8 * r);
			}
			const w = /* @__PURE__ */ new Int32Array(8);
			for (let r = 0; r < 8; r++) w[r] = C[r] * n + I[r];
			const A = d / 3.6;
			return {
				grade: t,
				w: n,
				h: s,
				cotas: e,
				codigoCelula: M,
				fatorDoCodigo: f,
				passoH: b,
				deslocamentoIndice: w,
				vBase: A,
				vMax: A * (P = a.rampa, "tobler" === P.curva ? N : 1),
				fatorDaRampa: L(a.rampa, a.fatorRestritivo),
				dxMin: v,
				dy: g,
				fatorDaVista: null,
				vistaProibe: !1
			};
			var P;
		}(G, W, J, y, m), ct = function(t, e) {
			const { lonW: r, latN: o, dLon: a, dLat: i, w: n, h: s } = t, c = new Uint8Array(n * s), u = [];
			for (let h = 0; h < s; h++) {
				const t = o - (h + .5) * i;
				u.length = 0;
				for (const r of e) for (let e = 0, o = r.length - 1; e < r.length; o = e++) {
					const [a, i] = r[o], [n, s] = r[e];
					i > t != s > t && u.push(a + (t - i) / (s - i) * (n - a));
				}
				u.sort((t, e) => t - e);
				for (let e = 0; e + 1 < u.length; e += 2) {
					const t = Math.max(0, Math.ceil((u[e] - r) / a - .5)), o = Math.min(n - 1, Math.floor((u[e + 1] - r) / a - .5));
					for (let e = t; e <= o; e++) c[h * n + e] = 1;
				}
			}
			return c;
		}(G, u), { barreira: ut, restritivas: ht, impeditivas: lt } = function(t, e, { dentro: r = null, restritivoComoBarreira: o = !1 } = {}) {
			const { w: a, h: i, cotas: n, codigoCelula: s, fatorDoCodigo: c, passoH: u, dy: h } = t, l = new Uint8Array(a * i), d = Number.isFinite(e?.impeditivoPct) ? e.impeditivoPct / 100 : 1 / 0, f = "linear" === e?.curva && Number.isFinite(e?.fimAdequadoPct) ? e.fimAdequadoPct / 100 : 1 / 0, p = Number.isFinite(e?.restritivoAcimaPct) ? e.restritivoAcimaPct / 100 : 1 / 0, m = Math.min(f, p);
			let y = 0, M = 0;
			for (let g = 0; g < i; g++) {
				const t = u[8 * g + 2];
				for (let e = 0; e < a; e++) {
					const u = g * a + e;
					if (0 === g || 0 === e || g === i - 1 || e === a - 1 || r && !r[u]) {
						l[u] = 1;
						continue;
					}
					const f = s[u], p = 253 === f ? 0 : c[f];
					let x = 0;
					const b = n[u + 1], v = n[u - 1], w = n[u - a], A = n[u + a];
					Number.isFinite(b) && Number.isFinite(v) && Number.isFinite(w) && Number.isFinite(A) && (x = Math.hypot((b - v) / (2 * t), (w - A) / (2 * h))), 0 === p || x >= d ? (l[u] = 1, M++) : (p < 1 || x > m) && (y++, o && (l[u] = 1));
				}
			}
			return {
				barreira: l,
				restritivas: y,
				impeditivas: M
			};
		}(st, y.rampa, {
			dentro: ct,
			restritivoComoBarreira: !0 === a.restritivoComoBarreira
		});
		c("corredores", .1);
		const { w: dt, h: ft } = G, pt = K(ut, dt, ft), mt = U(G, f.lon, f.lat), yt = U(G, p.lon, p.lat), Mt = function(t) {
			const { w: e, h: r, passo: o, barreira: a, origem: i, destino: n, larguraM: s, larguraAbaixoM: c } = t, u = Math.max(1, Math.min(6, t.maxCorredores ?? 4)), h = t.separacaoMinimaM ?? 200, l = t.dist ?? K(a, e, r), d = H(s, o), f = H(Math.min(c, s), o), p = e * r, m = new Uint8Array(p);
			for (let V = 0; V < p; V++) m[V] = !a[V] && l[V] >= f ? 1 : 0;
			const y = Math.ceil(Math.max(2 * d, 2e3 / o)), M = Z(m, e, r, i, y), g = Z(m, e, r, n, y);
			if (M < 0 || g < 0) return {
				corredores: [],
				naoCanaliza: !1,
				motivo: M < 0 ? "partida" : "objetivo"
			};
			const x = 2 * d + h / o, b = new Uint8Array(p), v = M % e, w = (M - v) / e, A = g % e, P = (g - A) / e;
			for (let V = 0; V < r; V++) for (let t = 0; t < e; t++) (Math.hypot(t - v, V - w) <= x || Math.hypot(t - A, V - P) <= x) && (b[V * e + t] = 1);
			const _ = [], z = m.slice();
			for (let V = 0; V < u; V++) {
				const t = tt({
					w: e,
					h: r,
					dist: l,
					permitida: z,
					raioPleno: d,
					origem: M,
					destino: g
				});
				if (!t) break;
				const i = rt(t, a, e, r, d), n = (t) => {
					const r = t % e, o = (t - r) / e;
					return Math.hypot(r - v, o - w) <= d || Math.hypot(r - A, o - P) <= d;
				};
				let c = 1 / 0, u = 0;
				const f = [];
				for (let r = 0; r < t.length; r++) {
					const a = l[t[r]];
					if (a < c && !n(t[r]) && (c = a), f.push(X(a, o)), r > 0) {
						const a = t[r - 1], i = t[r];
						u += (a % e !== i % e && Math.floor(a / e) !== Math.floor(i / e) ? Y : 1) * o;
					}
				}
				f.sort((t, e) => t - e), _.push({
					eixo: t,
					faixa: i,
					larguraMinM: X(Number.isFinite(c) ? c : l[t[0]], o),
					larguraMedianaM: f[Math.floor(f.length / 2)] ?? 0,
					extensaoM: u,
					estreitos: et(t, l, d).filter((e) => !n(t[e.meio])),
					canalizado: f.filter((t) => t <= 3 * s).length / Math.max(1, f.length)
				});
				const m = K(i, e, r), y = d + h / o;
				for (let e = 0; e < p; e++) z[e] && !b[e] && m[e] < y && (z[e] = 0);
				for (let e = 0; e < p; e++) i[e] && !b[e] && (z[e] = 0);
			}
			const F = _.length > 0 && _.every((t) => t.canalizado < .2);
			return {
				corredores: F ? [] : _,
				naoCanaliza: F,
				motivo: _.length ? null : "ligacao"
			};
		}({
			w: dt,
			h: ft,
			passo: G.passo,
			barreira: ut,
			dist: pt,
			origem: mt,
			destino: yt,
			larguraM: F,
			larguraAbaixoM: B,
			maxCorredores: a.maxCorredores,
			separacaoMinimaM: 200
		});
		c("corredores", .85);
		const gt = (t) => {
			const e = t % dt, r = (t - e) / dt;
			return [e * G.passo, -r * G.passo];
		}, xt = ([t, e]) => [G.lonW + (t / G.passo + .5) * G.dLon, G.latN - (-e / G.passo + .5) * G.dLat], bt = (t) => Math.round(1e6 * t) / 1e6, vt = Mt.corredores.map((r) => {
			const o = function(t, e) {
				if (t.length <= 2) return t.slice();
				const r = new Uint8Array(t.length);
				r[0] = 1, r[t.length - 1] = 1;
				const o = [[0, t.length - 1]];
				for (; o.length;) {
					const [a, i] = o.pop(), [n, s] = t[a], [c, u] = t[i], h = c - n, l = u - s, d = h * h + l * l;
					let f = -1, p = -1;
					for (let e = a + 1; e < i; e++) {
						const [r, o] = t[e];
						let a = d > 0 ? ((r - n) * h + (o - s) * l) / d : 0;
						a = Math.max(0, Math.min(1, a));
						const i = Math.hypot(r - (n + a * h), o - (s + a * l));
						i > f && (f = i, p = e);
					}
					f > e && (r[p] = 1, o.push([a, p], [p, i]));
				}
				return t.filter((t, e) => r[e]);
			}(Array.from(r.eixo, gt), 1.5 * G.passo), a = function(r, o, a) {
				const i = o + 1, n = new Uint8Array(i * (a + 1)), s = (t, e) => t >= 0 && e >= 0 && t < o && e < a && 1 === r[e * o + t];
				for (let t = 0; t < a; t++) for (let e = 0; e < o; e++) r[t * o + e] && (s(e, t - 1) || (n[t * i + e] |= 1), s(e + 1, t) || (n[t * i + e + 1] |= 2), s(e, t + 1) || (n[(t + 1) * i + e + 1] |= 4), s(e - 1, t) || (n[(t + 1) * i + e] |= 8));
				const c = (t) => 1 === t ? 1 : 4 === t ? -1 : 2 === t ? i : -i, u = (t, e) => {
					const r = t % i, a = (t - r) / i;
					return 1 === e ? a * o + r : 2 === e ? a * o + r - 1 : 4 === e ? (a - 1) * o + r - 1 : (a - 1) * o + r;
				}, h = function(t, e, r) {
					const o = new Int32Array(e * r).fill(-1), a = (t) => {
						for (; o[t] !== t;) o[t] = o[o[t]], t = o[t];
						return t;
					};
					for (let i = 0; i < r; i++) for (let r = 0; r < e; r++) {
						const n = i * e + r;
						if (t[n] && (o[n] = n, r > 0 && t[n - 1] && (o[a(n)] = a(n - 1)), i > 0 && t[n - e])) {
							const t = a(n), r = a(n - e);
							t !== r && (o[t] = r);
						}
					}
					return a;
				}(r, o, a), l = /* @__PURE__ */ new Map();
				for (let p = 0; p < n.length; p++) for (; n[p];) {
					const r = n[p] & -n[p], o = [p];
					let a = p, s = r, d = 0;
					for (;;) {
						n[a] &= ~s;
						const u = a + c(s), h = a % i, l = u % i;
						d += h * ((u - l) / i) - l * ((a - h) / i);
						let f = 0, m = !1;
						for (const o of [
							t(s),
							s,
							e(s)
						]) {
							if (u === p && o === r) {
								m = !0;
								break;
							}
							if (n[u] & o) {
								f = o;
								break;
							}
						}
						if (m) {
							o.push(p);
							break;
						}
						if (!f) throw new Error("anel aberto na poligonização");
						f !== s && o.push(u), a = u, s = f;
					}
					const f = h(u(p, r));
					let m = l.get(f);
					m || (m = {
						externo: null,
						furos: []
					}, l.set(f, m)), d > 0 ? m.externo = o : m.furos.push(o);
				}
				const d = (t) => t.map((t) => {
					const e = t % i;
					return [e, (t - e) / i];
				}), f = [];
				for (const t of l.values()) {
					if (!t.externo) throw new Error("componente sem anel externo");
					f.push([d(t.externo), ...t.furos.map(d)]);
				}
				return f;
			}(r.faixa, dt, ft).map((t) => t.map((t) => t.map(([t, e]) => [bt(G.lonW + t * G.dLon), bt(G.latN - e * G.dLat)])));
			return {
				eixo: o.map(xt).map(([t, e]) => [bt(t), bt(e)]),
				eixoM: o,
				poligonos: a,
				larguraMinM: Math.round(r.larguraMinM),
				larguraMedianaM: Math.round(r.larguraMedianaM),
				extensaoM: Math.round(r.extensaoM),
				tempoS: Math.round(nt(st, r.eixo)),
				estrangulamentos: r.estreitos.map((t) => {
					return {
						coordenadas: (e = r.eixo[t.meio], function(t, e) {
							const r = e % t.w, o = (e - r) / t.w;
							return [t.lonW + (r + .5) * t.dLon, t.latN - (o + .5) * t.dLat];
						}(G, e)).map(bt),
						larguraM: Math.round(X(t.menorDist, G.passo)),
						extensaoM: Math.round((t.fim - t.inicio + 1) * G.passo)
					};
					var e;
				})
			};
		});
		let wt = [], At = vt.map((t, e) => e);
		if (vt.length) {
			const t = gt(mt >= 0 ? mt : 0), e = gt(yt >= 0 ? yt : 0), r = function(t, e, r, o) {
				const a = r[0] - e[0], i = r[1] - e[1], n = Math.hypot(a, i) || 1, s = -i / n, c = a / n, u = t.map((t) => at.map((r) => {
					return ((o = ot(t, r))[0] - e[0]) * s + (o[1] - e[1]) * c;
					var o;
				})), h = u.map((t) => t.reduce((t, e) => t + e, 0) / t.length), l = t.map((t, e) => e).sort((t, e) => h[e] - h[t]), d = [];
				let f = l.length ? {
					corredores: [l[0]],
					separacaoMaximaM: 0
				} : null;
				for (let p = 1; p < l.length; p++) {
					const t = l[p - 1], e = l[p], r = Math.max(...u[t].map((t, r) => Math.abs(t - u[e][r])));
					r <= o ? (f.corredores.push(e), f.separacaoMaximaM = Math.max(f.separacaoMaximaM, r)) : (f.corredores.length >= 2 && d.push(f), f = {
						corredores: [e],
						separacaoMaximaM: 0
					});
				}
				return f && f.corredores.length >= 2 && d.push(f), {
					ordem: l,
					lateralM: h,
					vias: d
				};
			}(vt.map((t) => t.eixoM), t, e, z.separacaoMaximaM);
			At = r.ordem, wt = r.vias.map((t) => ({
				corredores: t.corredores,
				separacaoMaximaM: Math.round(t.separacaoMaximaM),
				linha: it(t.corredores.map((t) => vt[t].eixoM)).map(xt).map(([t, e]) => [bt(t), bt(e)])
			}));
		}
		for (const t of vt) delete t.eixoM;
		return c("corredores", 1), {
			planejador: z.id,
			larguraM: F,
			larguraAbaixoM: B,
			corredores: vt,
			ordem: At,
			vias: wt,
			naoCanaliza: Mt.naoCanaliza,
			motivo: Mt.motivo,
			resumo: {
				celulaM: Math.round(10 * G.passo) / 10,
				engrossou: G.engrossou,
				celulas: dt * ft,
				semCoberturaPct: Q.semClassePct,
				restritivas: ht,
				impeditivas: lt
			}
		};
	}
	"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = async ({ data: t }) => {
		try {
			const e = await async function(t) {
				return Promise.all((t ?? []).map(async (t) => {
					if (!t?.buffer || !j(t.buffer)) return t;
					const e = new Blob([t.buffer]).stream().pipeThrough(new DecompressionStream("gzip"));
					return {
						...t,
						buffer: await new Response(e).arrayBuffer()
					};
				}));
			}(t?.coberturaTiles ?? []), r = st({
				...t,
				coberturaTiles: e
			}, (t, e) => self.postMessage({
				tipo: "progresso",
				etapa: t,
				fracao: e
			}));
			self.postMessage({
				tipo: "pronto",
				...r
			});
		} catch (e) {
			self.postMessage({
				tipo: "erro",
				mensagem: e?.message ?? String(e)
			});
		}
	});
})();
