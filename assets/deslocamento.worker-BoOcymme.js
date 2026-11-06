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
	const t = (t) => 255 === t ? "_" : String.fromCharCode(65 + t), e = (t) => 8 === t ? 1 : t << 1, o = (t) => 1 === t ? 8 : t >> 1;
	function r(t, r, n) {
		const s = r + 1, i = new Uint8Array(s * (n + 1)), a = (e, o) => e >= 0 && o >= 0 && e < r && o < n && 1 === t[o * r + e];
		for (let e = 0; e < n; e++) for (let o = 0; o < r; o++) t[e * r + o] && (a(o, e - 1) || (i[e * s + o] |= 1), a(o + 1, e) || (i[e * s + o + 1] |= 2), a(o, e + 1) || (i[(e + 1) * s + o + 1] |= 4), a(o - 1, e) || (i[(e + 1) * s + o] |= 8));
		const u = (t) => 1 === t ? 1 : 4 === t ? -1 : 2 === t ? s : -s, c = (t, e) => {
			const o = t % s, n = (t - o) / s;
			return 1 === e ? n * r + o : 2 === e ? n * r + o - 1 : 4 === e ? (n - 1) * r + o - 1 : (n - 1) * r + o;
		}, h = function(t, e, o) {
			const r = new Int32Array(e * o).fill(-1), n = (t) => {
				for (; r[t] !== t;) r[t] = r[r[t]], t = r[t];
				return t;
			};
			for (let s = 0; s < o; s++) for (let o = 0; o < e; o++) {
				const i = s * e + o;
				if (t[i] && (r[i] = i, o > 0 && t[i - 1] && (r[n(i)] = n(i - 1)), s > 0 && t[i - e])) {
					const t = n(i), o = n(i - e);
					t !== o && (r[t] = o);
				}
			}
			return n;
		}(t, r, n), l = /* @__PURE__ */ new Map();
		for (let p = 0; p < i.length; p++) for (; i[p];) {
			const t = i[p] & -i[p], r = [p];
			let n = p, a = t, d = 0;
			for (;;) {
				i[n] &= ~a;
				const c = n + u(a), h = n % s, l = c % s;
				d += h * ((c - l) / s) - l * ((n - h) / s);
				let f = 0, m = !1;
				for (const r of [
					e(a),
					a,
					o(a)
				]) {
					if (c === p && r === t) {
						m = !0;
						break;
					}
					if (i[c] & r) {
						f = r;
						break;
					}
				}
				if (m) {
					r.push(p);
					break;
				}
				if (!f) throw new Error("anel aberto na poligonização");
				f !== a && r.push(c), n = c, a = f;
			}
			const f = h(c(p, t));
			let m = l.get(f);
			m || (m = {
				externo: null,
				furos: []
			}, l.set(f, m)), d > 0 ? m.externo = r : m.furos.push(r);
		}
		const d = (t) => t.map((t) => {
			const e = t % s;
			return [e, (t - e) / s];
		}), f = [];
		for (const e of l.values()) {
			if (!e.externo) throw new Error("componente sem anel externo");
			f.push([d(e.externo), ...e.furos.map(d)]);
		}
		return f;
	}
	function n(t) {
		try {
			return function(t) {
				let e = 1, o = 0;
				for (const { coordinates: a } of t) {
					e += 2;
					for (const t of a) {
						e += 1 + t.length;
						for (const e of t) o += 2 * e.length;
					}
				}
				const r = new Uint32Array(e), n = new Float64Array(o);
				let s = 0, i = 0;
				r[s++] = t.length;
				for (const { classe: a, coordinates: u } of t) {
					r[s++] = a, r[s++] = u.length;
					for (const t of u) {
						r[s++] = t.length;
						for (const e of t) {
							r[s++] = e.length;
							for (const [t, o] of e) n[i++] = t, n[i++] = o;
						}
					}
				}
				return {
					estrutura: r,
					xy: n
				};
			}(t());
		} catch (e) {
			return null;
		}
	}
	function s(e, o) {
		for (let t = 0; t < o.length; t++) if (o[t] > 16) throw new Error(`faixa ${o[t]} acima de 16`);
		return function(e, o) {
			const { w: r, h: n } = e, s = new Array(n);
			for (let i = 0; i < n; i++) {
				const e = i * r;
				if (i > 0) {
					let t = !0;
					for (let n = 0; n < r; n++) if (o[e + n] !== o[e - r + n]) {
						t = !1;
						break;
					}
					if (t) {
						s[i] = "";
						continue;
					}
				}
				let n = "", a = 0;
				for (; a < r;) {
					const s = o[e + a];
					let i = 1;
					for (; a + i < r && o[e + a + i] === s;) i++;
					n += (i > 1 ? i.toString(36) : "") + t(s), a += i;
				}
				s[i] = n;
			}
			return {
				origem: [e.lonW, e.latN],
				passoGraus: [e.dLon, e.dLat],
				largura: r,
				altura: n,
				celulaM: e.passo,
				rle: s.join("/")
			};
		}(e, o);
	}
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
	const i = Object.freeze([
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
	]), a = Object.freeze([Object.freeze({
		id: "massa_dagua",
		rotulo: "Massa d'água (polígono)"
	}), Object.freeze({
		id: "curso_dagua",
		rotulo: "Curso d'água (linha)"
	})]), u = Object.freeze({
		massa_dagua: "impeditivo",
		curso_dagua: "adequado"
	}), c = Object.freeze([
		"adequado",
		"restritivo",
		"impeditivo"
	]), h = Object.freeze(["dia", "noite"]), l = Object.freeze(["tobler", "linear"]), d = Object.freeze({
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
	}), f = Object.freeze({
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
	function p(t, e) {
		const o = t?.hidrografia?.[e];
		return c.includes(o) ? o : u[e];
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
			cobertura: d
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
			cobertura: f
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
			cobertura: f
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
			cobertura: f
		}
	});
	const m = (t) => "number" == typeof t && Number.isFinite(t) && t > 0, y = (t) => null === t || "number" == typeof t && Number.isFinite(t) && t >= 0;
	function g(t, e) {
		this.x = t, this.y = e;
	}
	g.prototype = {
		clone() {
			return new g(this.x, this.y);
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
			const e = t.x - this.x, o = t.y - this.y;
			return e * e + o * o;
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
			const e = t[0] * this.x + t[1] * this.y, o = t[2] * this.x + t[3] * this.y;
			return this.x = e, this.y = o, this;
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
			const e = Math.cos(t), o = Math.sin(t), r = e * this.x - o * this.y, n = o * this.x + e * this.y;
			return this.x = r, this.y = n, this;
		},
		_rotateAround(t, e) {
			const o = Math.cos(t), r = Math.sin(t), n = e.x + o * (this.x - e.x) - r * (this.y - e.y), s = e.y + r * (this.x - e.x) + o * (this.y - e.y);
			return this.x = n, this.y = s, this;
		},
		_round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
		},
		constructor: g
	}, g.convert = function(t) {
		if (t instanceof g) return t;
		if (Array.isArray(t)) return new g(+t[0], +t[1]);
		if (void 0 !== t.x && void 0 !== t.y) return new g(+t.x, +t.y);
		throw new Error("Expected [x, y] or {x, y} point format");
	};
	var v = class {
		constructor(t, e, o, r, n) {
			for (this.properties = Object.create(null), this.extent = o, this.type = 0, this.id = void 0, this._pbf = t, this._geometry = -1, this._keys = r, this._values = n; t.pos < e;) {
				const e = t.readVarint();
				if (8 === e) this.id = t.readVarint();
				else if (18 === e) {
					const e = t.readVarint() + t.pos;
					for (; t.pos < e;) {
						const e = r[t.readVarint()], o = n[t.readVarint()];
						this.properties[e] = o;
					}
				} else 24 === e ? this.type = t.readVarint() : 34 === e ? (this._geometry = t.pos, t.skip(e)) : t.skip(e);
			}
		}
		loadGeometry() {
			if (this._geometry < 0) throw new Error("feature has no geometry");
			const t = this._pbf;
			t.pos = this._geometry;
			const e = t.readVarint() + t.pos, o = [];
			let r, n = 1, s = 0, i = 0, a = 0;
			for (; t.pos < e;) {
				if (s <= 0) {
					const e = t.readVarint();
					if (n = 7 & e, s = e >> 3, 0 === s) continue;
				}
				if (s--, 1 === n) i += t.readSVarint(), a += t.readSVarint(), r && o.push(r), r = [new g(i, a)];
				else if (2 === n) i += t.readSVarint(), a += t.readSVarint(), r && r.push(new g(i, a));
				else {
					if (7 !== n) throw new Error(`unknown command ${n}`);
					r && r.push(r[0].clone());
				}
			}
			return r && o.push(r), o;
		}
		bbox() {
			if (this._geometry < 0) throw new Error("feature has no geometry");
			const t = this._pbf;
			t.pos = this._geometry;
			const e = t.readVarint() + t.pos;
			let o = 1, r = 0, n = 0, s = 0, i = 1 / 0, a = -1 / 0, u = 1 / 0, c = -1 / 0;
			for (; t.pos < e;) {
				if (r <= 0) {
					const e = t.readVarint();
					if (o = 7 & e, r = e >> 3, 0 === r) continue;
				}
				if (r--, 1 === o || 2 === o) n += t.readSVarint(), s += t.readSVarint(), n < i && (i = n), n > a && (a = n), s < u && (u = s), s > c && (c = s);
				else if (7 !== o) throw new Error(`unknown command ${o}`);
			}
			return [
				i,
				u,
				a,
				c
			];
		}
		toGeoJSON(t, e, o) {
			const r = this.extent * Math.pow(2, o), n = this.extent * t, s = this.extent * e, i = this.loadGeometry();
			function a(t) {
				return [360 * (t.x + n) / r - 180, 360 / Math.PI * Math.atan(Math.exp((1 - 2 * (t.y + s) / r) * Math.PI)) - 90];
			}
			function u(t) {
				return t.map(a);
			}
			let c;
			if (1 === this.type) {
				const t = [];
				for (const o of i) t.push(o[0]);
				const e = u(t);
				c = 1 === t.length ? {
					type: "Point",
					coordinates: e[0]
				} : {
					type: "MultiPoint",
					coordinates: e
				};
			} else if (2 === this.type) {
				const t = i.map(u);
				c = 1 === t.length ? {
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
						const o = [];
						let r, n;
						for (let s = 0; s < e; s++) {
							const e = w(t[s]);
							0 !== e && (void 0 === n && (n = e < 0), n === e < 0 ? (r && o.push(r), r = [t[s]]) : r && r.push(t[s]));
						}
						return r && o.push(r), o;
					}(i), e = [];
					for (const o of t) e.push(o.map(u));
					c = 1 === e.length ? {
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
				geometry: c,
				properties: this.properties
			};
			return null != this.id && (h.id = this.id), h;
		}
	};
	function w(t) {
		let e = 0;
		for (let o, r, n = 0, s = t.length, i = s - 1; n < s; i = n++) o = t[n], r = t[i], e += (r.x - o.x) * (o.y + r.y);
		return e;
	}
	v.types = [
		"Unknown",
		"Point",
		"LineString",
		"Polygon"
	];
	var b = class {
		constructor(t, e) {
			for (this.version = 1, this.name = "", this.extent = 4096, this.length = 0, this._pbf = t, this._keys = [], this._values = [], this._features = [], void 0 === e && (e = t.length); t.pos < e;) {
				const e = t.readVarint();
				10 === e ? this.name = t.readString() : 18 === e ? (this._features.push(t.pos), t.skip(e)) : 26 === e ? this._keys.push(t.readString()) : 34 === e ? this._values.push(x(t)) : 40 === e ? this.extent = t.readVarint() : 120 === e ? this.version = t.readVarint() : t.skip(e);
			}
			this.length = this._features.length;
		}
		feature(t) {
			if (t < 0 || t >= this._features.length) throw new Error("feature index out of bounds");
			this._pbf.pos = this._features[t];
			const e = this._pbf.readVarint() + this._pbf.pos;
			return new v(this._pbf, e, this.extent, this._keys, this._values);
		}
	};
	function x(t) {
		let e = null;
		const o = t.readVarint() + t.pos;
		for (; t.pos < o;) {
			const o = t.readVarint();
			e = 10 === o ? t.readString() : 21 === o ? t.readFloat() : 25 === o ? t.readDouble() : 32 === o ? t.readVarint(!0) : 40 === o ? t.readVarint() : 48 === o ? t.readSVarint() : 56 === o ? t.readBoolean() : (t.skip(o), null);
		}
		if (null == e) throw new Error("unknown feature value");
		return e;
	}
	var M = class {
		constructor(t, e = t.length) {
			const o = Object.create(null);
			for (; t.pos < e;) {
				const e = t.readVarint();
				if (26 === e) {
					const e = new b(t, t.readVarint() + t.pos);
					e.length && (o[e.name] = e);
				} else t.skip(e);
			}
			this.layers = o;
		}
	};
	const _ = 4294967296, P = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf-8");
	var A = class {
		constructor(t) {
			this.buf = ArrayBuffer.isView(t) ? t : new Uint8Array(t), this.dataView = new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.pos = 0, this.type = 0, this._valueStart = -1, this.length = this.buf.length;
		}
		readFields(t, e, o = this.length) {
			let r;
			for (; r = this.nextField(o);) t(r, e, this);
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
			const t = this.dataView.getUint32(this.pos, !0) + this.dataView.getUint32(this.pos + 4, !0) * _;
			return this.pos += 8, t;
		}
		readSFixed64() {
			const t = this.dataView.getUint32(this.pos, !0) + this.dataView.getInt32(this.pos + 4, !0) * _;
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
			const e = this.buf, o = e[this.pos++];
			if (o < 128) return o;
			let r, n = 127 & o;
			return r = e[this.pos++], n |= (127 & r) << 7, r < 128 ? n : (r = e[this.pos++], n |= (127 & r) << 14, r < 128 ? n : (r = e[this.pos++], n |= (127 & r) << 21, r < 128 ? n : (r = e[this.pos], n |= (15 & r) << 28, function(t, e, o) {
				const r = o.buf;
				let n, s;
				if (s = r[o.pos++], n = (112 & s) >> 4, s < 128) return k(t, n, e);
				if (s = r[o.pos++], n |= (127 & s) << 3, s < 128) return k(t, n, e);
				if (s = r[o.pos++], n |= (127 & s) << 10, s < 128) return k(t, n, e);
				if (s = r[o.pos++], n |= (127 & s) << 17, s < 128) return k(t, n, e);
				if (s = r[o.pos++], n |= (127 & s) << 24, s < 128) return k(t, n, e);
				if (s = r[o.pos++], n |= (1 & s) << 31, s < 128) return k(t, n, e);
				throw new Error("Expected varint not more than 10 bytes");
			}(n, t, this))));
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
			return this.pos = t, t - e >= 12 && P ? P.decode(this.buf.subarray(e, t)) : function(t, e, o) {
				let r = "", n = e;
				for (; n < o;) {
					const e = t[n];
					let s, i, a, u = null, c = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
					if (n + c > o) break;
					1 === c ? e < 128 && (u = e) : 2 === c ? (s = t[n + 1], 128 == (192 & s) && (u = (31 & e) << 6 | 63 & s, u <= 127 && (u = null))) : 3 === c ? (s = t[n + 1], i = t[n + 2], 128 == (192 & s) && 128 == (192 & i) && (u = (15 & e) << 12 | (63 & s) << 6 | 63 & i, (u <= 2047 || u >= 55296 && u <= 57343) && (u = null))) : 4 === c && (s = t[n + 1], i = t[n + 2], a = t[n + 3], 128 == (192 & s) && 128 == (192 & i) && 128 == (192 & a) && (u = (15 & e) << 18 | (63 & s) << 12 | (63 & i) << 6 | 63 & a, (u <= 65535 || u >= 1114112) && (u = null))), null === u ? (u = 65533, c = 1) : u > 65535 && (u -= 65536, r += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r += String.fromCharCode(u), n += c;
				}
				return r;
			}(this.buf, e, t);
		}
		readBytes() {
			const t = this.readVarint() + this.pos, e = this.buf.subarray(this.pos, t);
			return this.pos = t, e;
		}
		readPackedVarint(t = [], e) {
			const o = this.readPackedEnd();
			for (; this.pos < o;) t.push(this.readVarint(e));
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
	function k(t, e, o) {
		return o ? 4294967296 * e + (t >>> 0) : 4294967296 * (e >>> 0) + (t >>> 0);
	}
	const V = (t) => 255 === t ? 255 : 127 & t, F = new Map(i.map((t, e) => [t.overture, e + 1])), z = [
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
	], S = (() => {
		const t = /* @__PURE__ */ new Uint8Array(256);
		return z.forEach((e, o) => {
			t[i.findIndex((t) => t.id === e) + 1] = o + 1;
		}), t[255] = 255, t;
	})(), E = Math.PI / 180, q = (t, e) => (t + 180) / 360 * e;
	function j(t, e) {
		const o = Math.sin(Math.max(-85.051129, Math.min(85.051129, t)) * E);
		return (.5 - Math.log((1 + o) / (1 - o)) / (4 * Math.PI)) * e;
	}
	function O(t) {
		const e = t instanceof Uint8Array ? t : new Uint8Array(t);
		return e.length >= 2 && 31 === e[0] && 139 === e[1];
	}
	function N(t, e, o) {
		const { classes: r, w: n, r0: s, r1: i, c0: a, c1: u, yNoTile: c, x0Tile: h, kTile: l, cruzamentos: d } = o, f = S[e];
		let p = 1 / 0, m = -1 / 0, y = 0;
		for (const v of t) {
			y += v.length;
			for (const t of v) t.y < p && (p = t.y), t.y > m && (m = t.y);
		}
		d.length < y && (o.cruzamentos = new Float64Array(2 * y));
		const g = o.cruzamentos;
		for (let v = s; v <= i; v++) {
			const o = c[v];
			if (o < p || o > m) continue;
			let s = 0;
			for (const e of t) for (let t = 0, r = e.length - 1; t < e.length; r = t++) {
				const n = e[t], i = e[r];
				n.y > o != i.y > o && (g[s++] = n.x + (o - n.y) * (i.x - n.x) / (i.y - n.y));
			}
			if (s < 2) continue;
			const i = g.subarray(0, s).sort(), d = v * n;
			for (let t = 0; t + 1 < s; t += 2) {
				let o = Math.ceil((i[t] - h) / l), n = Math.ceil((i[t + 1] - h) / l) - 1;
				o < a && (o = a), n > u && (n = u);
				for (let t = o; t <= n; t++) {
					const o = d + t, n = r[o];
					f >= S[V(n)] && (r[o] = 255 === e ? 255 : e | 128 & n);
				}
			}
		}
	}
	function C(t, e) {
		const { classes: o, w: r, r0: n, r1: s, c0: i, c1: a, yNoTile: u, x0Tile: c, kTile: h } = e, l = s > n ? (u[s] - u[n]) / (s - n) : e.kLinhaTile;
		if (!(l > 0)) return;
		const d = (t, e) => {
			if (t < n || t > s || e < i || e > a) return;
			const u = t * r + e;
			255 !== o[u] && (o[u] |= 128);
		};
		for (const f of t) {
			let t = null, e = null;
			for (let o = 0; o + 1 < f.length; o++) {
				const r = f[o], s = f[o + 1], i = (r.x - c) / h, a = n + (r.y - u[n]) / l, p = (s.x - c) / h, m = n + (s.y - u[n]) / l, y = Math.max(1, Math.ceil(4 * Math.max(Math.abs(p - i), Math.abs(m - a))));
				for (let o = 0; o <= y; o++) {
					const r = o / y, n = Math.round(a + (m - a) * r), s = Math.round(i + (p - i) * r);
					n === t && s === e || (null !== t && n !== t && s !== e && d(t, s), d(n, s), t = n, e = s);
				}
			}
		}
	}
	const L = 6371e3, I = Math.PI / 180, U = 180 / Math.PI, T = Math.exp(3.5 * .05), B = Int8Array.of(-1, -1, 0, 1, 1, 1, 0, -1), D = Int8Array.of(0, 1, 1, 1, 0, -1, -1, -1);
	var $ = class extends Error {
		constructor(t, e) {
			super(t), this.name = "ErroPontoDeDeslocamento", this.ponto = e;
		}
	};
	function R(t, e) {
		const o = "tobler" === t.curva, r = Number.isFinite(t.fimAdequadoPct) ? t.fimAdequadoPct / 100 : null, n = Number.isFinite(t.impeditivoPct) ? t.impeditivoPct / 100 : null, s = Number.isFinite(t.restritivoAcimaPct) ? t.restritivoAcimaPct / 100 : 1 / 0, i = null !== r && null !== n ? n - r : 0;
		return (t) => {
			const a = t < 0 ? -t : t;
			if (null !== n && a >= n) return 0;
			let u;
			if (o) {
				const e = t + .05;
				u = Math.exp(-3.5 * ((e < 0 ? -e : e) - .05));
			} else u = null === r || a <= r ? 1 : (n - a) / i;
			return a > s ? u * e : u;
		};
	}
	function G(t) {
		return "tobler" === t.curva ? T : 1;
	}
	function W(t) {
		const e = [...new Set((t ?? []).filter((t) => "number" == typeof t && Number.isFinite(t) && t > 0))].sort((t, e) => t - e);
		if (!e.length) throw new Error("Informe ao menos um tempo maior que zero.");
		if (e.length > 16) throw new Error("No máximo 16 tempos.");
		return e;
	}
	function K(t, e, o) {
		const r = Math.floor((e - t.lonW) / t.dLon), n = Math.floor((t.latN - o) / t.dLat);
		return r < 0 || n < 0 || r >= t.w || n >= t.h ? -1 : n * t.w + r;
	}
	function H(t, e) {
		const o = e % t.w, r = (e - o) / t.w;
		return [t.lonW + (o + .5) * t.dLon, t.latN - (r + .5) * t.dLat];
	}
	var J = class {
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
			const o = this.chaves, r = this.ids;
			let n = this.tamanho++;
			for (; n > 0;) {
				const e = n - 1 >> 1;
				if (o[e] <= t) break;
				o[n] = o[e], r[n] = r[e], n = e;
			}
			o[n] = t, r[n] = e;
		}
		extrair() {
			const t = this.chaves, e = this.ids, o = e[0];
			this.ultimaChave = t[0];
			const r = --this.tamanho;
			if (r > 0) {
				const o = t[r], n = e[r];
				let s = 0;
				for (;;) {
					let n = 2 * s + 1;
					if (n >= r) break;
					if (n + 1 < r && t[n + 1] < t[n] && n++, t[n] >= o) break;
					t[s] = t[n], e[s] = e[n], s = n;
				}
				t[s] = o, e[s] = n;
			}
			return o;
		}
	};
	function Q(t, e, { tMaxS: o = 1 / 0, alvo: r = -1, aoProgredir: n = null } = {}) {
		const { w: s, h: i, cotas: a, codigoCelula: u, fatorDoCodigo: c, passoH: h, deslocamentoIndice: l, vBase: d, vMax: f, fatorDaRampa: p, dxMin: m, dy: y } = t, g = s * i, v = new Float64Array(g).fill(1 / 0), w = new Uint8Array(g).fill(255), b = r >= 0, x = b ? r % s : 0, M = b ? (r - x) / s : 0, _ = (t) => {
			if (!b) return 0;
			const e = t % s, o = (e - x) * m, r = ((t - e) / s - M) * y;
			return Math.sqrt(o * o + r * r) / f;
		}, P = new J(Math.min(g, 65536));
		v[e] = 0, P.empurrar(_(e), e);
		let A = 0, k = 1;
		for (; P.tamanho > 0;) {
			const t = P.extrair(), e = P.ultimaChave, f = v[t];
			if (e > f + _(t)) continue;
			if (!b && e > o) break;
			if (A++, t === r) break;
			!n || 65535 & A || n(b ? 0 : Math.min(1, e / o));
			const m = c[u[t]];
			if (0 === m) continue;
			const y = t % s, g = (t - y) / s, x = a[t], M = 8 * g;
			for (let o = 0; o < 8; o++) {
				const e = g + B[o], r = y + D[o];
				if (e < 0 || e >= i || r < 0 || r >= s) continue;
				const n = t + l[o], b = c[u[n]];
				if (0 === b) continue;
				if (1 & o && 0 === c[u[g * s + r]] && 0 === c[u[e * s + y]]) continue;
				const A = h[M + o], V = a[n] - x, F = p(V / A);
				if (0 === F) continue;
				const z = f + Math.sqrt(A * A + V * V) / (d * F * .5 * (m + b));
				z < v[n] && (v[n] = z, w[n] = o, P.empurrar(z + _(n), n), k++);
			}
		}
		if (!b && Number.isFinite(o)) for (let V = 0; V < g; V++) v[V] > o && (v[V] = 1 / 0);
		return n && n(1), {
			tempo: v,
			veio: w,
			extraidos: A,
			empurrados: k
		};
	}
	function X(t, e, o, r) {
		if (r !== o && 255 === e[r]) return null;
		const n = t.deslocamentoIndice, s = [];
		let i = r;
		for (; i !== o;) {
			if (s.push(i), s.length > t.w * t.h) throw new Error("caminho sem fim");
			i -= n[e[i]];
		}
		return s.push(o), Int32Array.from(s.reverse());
	}
	function Y(t, e) {
		const { w: o, cotas: r, passoH: n } = t;
		let s = 0, i = 0, a = 0;
		for (let u = 1; u < e.length; u++) {
			const t = e[u - 1], c = e[u], h = t % o, l = (t - h) / o, d = c % o, f = (c - d) / o;
			let p = 0;
			for (; p < 8 && (B[p] !== f - l || D[p] !== d - h);) p++;
			if (8 === p) throw new Error("caminho com células não vizinhas");
			const m = n[8 * l + p], y = r[c] - r[t];
			s += Math.sqrt(m * m + y * y), y > 0 ? i += y : a -= y;
		}
		return {
			distanciaM: s,
			subidaM: i,
			descidaM: a
		};
	}
	function Z(t, e, o) {
		const { w: r, codigoCelula: n, fatorDoCodigo: s } = t, i = (t) => 0 === s[n[t]];
		let a = e % r, u = (e - a) / r;
		const c = o % r, h = (o - c) / r, l = Math.sign(c - a), d = Math.sign(h - u), f = Math.abs(c - a), p = Math.abs(h - u);
		let m = 0, y = 0;
		for (; a !== c || u !== h;) {
			const t = f ? (2 * m + 1) * p : 1 / 0, e = p ? (2 * y + 1) * f : 1 / 0;
			if (t === e) {
				if (i(u * r + a + l) && i((u + d) * r + a)) return !1;
				a += l, u += d, m++, y++;
			} else t < e ? (a += l, m++) : (u += d, y++);
			if (i(u * r + a)) return !1;
		}
		return !0;
	}
	function tt(t, e) {
		const o = e.length;
		if (o <= 2) return Int32Array.from(e);
		const { w: r, dy: n } = t, s = t.grade.passo, i = t.grade.passo / 2, a = new Float64Array(o), u = new Float64Array(o);
		for (let d = 0; d < o; d++) {
			const t = e[d] % r;
			a[d] = t * s, u[d] = (e[d] - t) / r * n;
		}
		const c = new Uint8Array(o);
		c[0] = 1, c[o - 1] = 1;
		const h = [0, o - 1];
		for (; h.length;) {
			const o = h.pop(), r = h.pop();
			if (o <= r + 1) continue;
			const n = a[r], s = u[r], l = a[o] - n, d = u[o] - s, f = l * l + d * d;
			let p = -1, m = r + 1;
			for (let t = r + 1; t < o; t++) {
				const e = a[t] - n, o = u[t] - s;
				let r = f > 0 ? (e * l + o * d) / f : 0;
				r = r < 0 ? 0 : r > 1 ? 1 : r;
				const i = e - r * l, c = o - r * d, h = i * i + c * c;
				h > p && (p = h, m = t);
			}
			(p > i * i || !Z(t, e[r], e[o])) && (c[m] = 1, h.push(r, m, m, o));
		}
		const l = [];
		for (let d = 0; d < o; d++) c[d] && l.push(e[d]);
		return Int32Array.from(l);
	}
	function et(t, e) {
		const o = new Uint8Array(t.length), r = e.length;
		for (let n = 0; n < t.length; n++) {
			const s = t[n];
			if (!(s <= e[r - 1])) continue;
			let i = 0;
			for (; s > e[i];) i++;
			o[n] = i + 1;
		}
		return o;
	}
	function ot(t, e) {
		return e < 0 ? "fora da área de cálculo" : Number.isFinite(t.cotas[e]) ? 255 === t.codigoCelula[e] && 0 === t.fatorDoCodigo[255] ? "na água" : null : "fora do relevo disponível";
	}
	function rt(t, e) {
		if (e < 0) return !1;
		const o = t.codigoCelula[e];
		return 255 !== o && 253 !== o && 0 !== o && 0 === t.fatorDoCodigo[o] && (t.codigoCelula[e] = 0, !0);
	}
	function nt(t, e = () => {}) {
		const { modo: o, pontos: u, periodo: d, parametros: f, zoom: g, tiles: v, coberturaTiles: w, passo: b } = t;
		if ("alcance" !== o && "trajeto" !== o) throw new Error(`Modo desconhecido: ${o}`);
		if (!h.includes(d)) throw new Error(`Período desconhecido: ${d}`);
		const x = function(t) {
			const e = [];
			if (!t || "object" != typeof t) return ["Parâmetros ausentes."];
			const o = t.velocidadeKmh ?? {};
			m(o.dia) || e.push("A velocidade de dia precisa ser um número maior que zero."), m(o.noite) || e.push("A velocidade de noite precisa ser um número maior que zero.");
			const r = t.rampa ?? {};
			l.includes(r.curva) || e.push("A curva de declividade precisa ser \"tobler\" ou \"linear\".");
			for (const [s, i] of [
				["fimAdequadoPct", "fim do adequado"],
				["impeditivoPct", "início do impeditivo"],
				["restritivoAcimaPct", "restritivo acima de"]
			]) y(r[s] ?? null) || e.push(`A declividade "${i}" precisa ser vazia ou um número maior ou igual a zero.`);
			"linear" === r.curva && ("number" != typeof r.fimAdequadoPct || "number" != typeof r.impeditivoPct ? e.push("A queda linear precisa do fim do adequado e do início do impeditivo.") : r.fimAdequadoPct < r.impeditivoPct || e.push("O fim do adequado precisa ser menor que o início do impeditivo.")), "number" == typeof t.fatorRestritivo && t.fatorRestritivo > 0 && t.fatorRestritivo <= 1 || e.push("O fator do restritivo precisa estar entre 0 (exclusive) e 1.");
			const n = t.cobertura ?? {};
			for (const { id: s, rotulo: a } of i) c.includes(n[s]) || e.push(`A cobertura "${a}" precisa ser adequado, restritivo ou impeditivo.`);
			for (const { id: s, rotulo: i } of a) {
				const o = t.hidrografia?.[s];
				void 0 === o || c.includes(o) || e.push(`A hidrografia "${i}" precisa ser adequado, restritivo ou impeditivo.`);
			}
			return e;
		}(f);
		if (x.length) throw new Error(x.join(" "));
		if (!Array.isArray(u) || u.length < ("trajeto" === o ? 2 : 1)) throw new Error("trajeto" === o ? "O trajeto precisa de ao menos dois pontos." : "O alcance precisa de um ponto.");
		const _ = "alcance" === o ? W(t.temposH) : null, P = function(t, e, o = 4e6) {
			if (!(e > 0)) throw new Error("passo precisa ser positivo");
			const { oeste: r, sul: n, leste: s, norte: i } = function(t) {
				const { modo: e, pontos: o } = t;
				if (!Array.isArray(o) || !o.length) throw new Error("O deslocamento precisa de ao menos um ponto.");
				if ("alcance" === e) {
					const { lon: e, lat: r } = o[0], n = 3600 * Math.max(...W(t.temposH)) * function(t) {
						return t.parametros.velocidadeKmh[t.periodo] / 3.6 * G(t.parametros.rampa);
					}(t) * 1.01 / L * U, s = n / Math.cos(r * I);
					return {
						oeste: e - s,
						sul: r - n,
						leste: e + s,
						norte: r + n
					};
				}
				let r = 180, n = -180, s = 90, i = -90;
				for (const { lon: d, lat: f } of o) r = Math.min(r, d), n = Math.max(n, d), s = Math.min(s, f), i = Math.max(i, f);
				const a = Math.cos((i + s) / 2 * I), u = L * I, c = Math.max((i - s) * u, (n - r) * u * a), h = Math.max(2e3, .25 * c) / u, l = h / a;
				return {
					oeste: r - l,
					sul: s - h,
					leste: n + l,
					norte: i + h
				};
			}(t), a = Math.cos((i + n) / 2 * I), u = (t) => {
				const e = t / L * U, o = e / a;
				return {
					dLat: e,
					dLon: o,
					w: Math.max(1, Math.ceil((s - r) / o)),
					h: Math.max(1, Math.ceil((i - n) / e))
				};
			};
			let c = e, h = u(c), l = !1;
			return h.w * h.h > o && (c *= 1.001 * Math.sqrt(h.w * h.h / o), h = u(c), l = !0), {
				lonW: r,
				latN: i,
				dLon: h.dLon,
				dLat: h.dLat,
				w: h.w,
				h: h.h,
				passo: c,
				engrossou: l
			};
		}("alcance" === o ? {
			...t,
			temposH: _
		} : t, b);
		e("relevo", 0);
		const k = function(t, e, o = null) {
			const { lonW: r, latN: n, dLon: s, dLat: i, w: a, h: u } = t, c = new Float32Array(a * u);
			for (let h = 0; h < u; h++) {
				const t = n - (h + .5) * i, l = h * a;
				for (let o = 0; o < a; o++) c[l + o] = e(t, r + (o + .5) * s);
				!o || 63 & ~h || o(h / u);
			}
			return o && o(1), c;
		}(P, function(t, e) {
			if (!e.length) return () => NaN;
			let o = 1 / 0, r = 1 / 0, n = -1 / 0, s = -1 / 0;
			for (const c of e) o = Math.min(o, c.x), r = Math.min(r, c.y), n = Math.max(n, c.x), s = Math.max(s, c.y);
			const i = n - o + 1, a = new Array(i * (s - r + 1)).fill(null);
			for (const c of e) a[(c.y - r) * i + (c.x - o)] = c;
			const u = e[0].largura;
			return (e, c) => {
				const h = function(t, e, o, r) {
					const n = 2 ** o, s = Math.max(-85.051129, Math.min(85.051129, e)), i = (((t + 180) % 360 + 360) % 360 - 180 + 180) / 360 * n, a = Math.sin(s * Math.PI / 180), u = (.5 - Math.log((1 + a) / (1 - a)) / (4 * Math.PI)) * n, c = Math.min(n - 1, Math.max(0, Math.floor(i))), h = Math.min(n - 1, Math.max(0, Math.floor(u))), l = (t) => Math.min(r, Math.max(0, t * r));
					return {
						z: o,
						x: c,
						y: h,
						px: l(i - c),
						py: l(u - h)
					};
				}(c, e, t, u);
				if (h.x < o || h.x > n || h.y < r || h.y > s) return NaN;
				const l = a[(h.y - r) * i + (h.x - o)];
				return l ? function(t, e, o) {
					const { largura: r, altura: n, cotas: s } = t, i = Math.max(0, Math.min(r - 1, e - .5)), a = Math.max(0, Math.min(n - 1, o - .5)), u = Math.floor(i), c = Math.floor(a), h = Math.min(r - 1, u + 1), l = Math.min(n - 1, c + 1), d = i - u, f = a - c;
					return (s[c * r + u] * (1 - d) + s[c * r + h] * d) * (1 - f) + (s[l * r + u] * (1 - d) + s[l * r + h] * d) * f;
				}(l, h.px, h.py) : NaN;
			};
		}(g, v ?? []), (t) => e("relevo", t));
		e("cobertura", 0);
		const z = function(t, e, o = null) {
			const { lonW: r, latN: n, dLon: s, dLat: i, w: a, h: u } = t, c = new Uint8Array(a * u), h = e ?? [], l = /* @__PURE__ */ new Map(), d = {
				classes: c,
				w: a,
				cruzamentos: /* @__PURE__ */ new Float64Array(4096)
			};
			return h.forEach((t, e) => {
				if (!t?.buffer || 0 === t.buffer.byteLength) return;
				if (O(t.buffer)) throw new Error(`tile de cobertura ${t.z}/${t.x}/${t.y} ainda comprimido`);
				const { yG: c, xG0: f, kG: p } = ((t) => {
					let e = l.get(t);
					if (e) return e;
					const o = 2 ** t, a = new Float64Array(u);
					for (let r = 0; r < u; r++) a[r] = j(n - (r + .5) * i, o);
					return e = {
						n: o,
						yG: a,
						xG0: q(r + .5 * s, o),
						kG: s / 360 * o
					}, l.set(t, e), e;
				})(t.z);
				let m = 0;
				for (; m < u && c[m] < t.y;) m++;
				let y = m - 1;
				for (; y + 1 < u && c[y + 1] < t.y + 1;) y++;
				if (y < m) return;
				const g = Math.max(0, Math.ceil((t.x - f) / p)), v = Math.min(a - 1, Math.ceil((t.x + 1 - f) / p) - 1);
				if (v < g) return;
				const w = new M(new A(new Uint8Array(t.buffer)));
				for (const [o, r] of [["land_cover", !1], ["water", !0]]) {
					const e = w.layers[o];
					if (!e) continue;
					const n = e.extent || 4096, s = new Float64Array(u);
					for (let o = m; o <= y; o++) s[o] = (c[o] - t.y) * n;
					const i = m + 1 < u ? (c[m + 1] - c[m]) * n : 0;
					Object.assign(d, {
						r0: m,
						r1: y,
						c0: g,
						c1: v,
						yNoTile: s,
						x0Tile: (f - t.x) * n,
						kTile: p * n,
						kLinhaTile: i
					});
					for (let t = 0; t < e.length; t++) {
						const o = e.feature(t);
						if (r && 2 === o.type) {
							C(o.loadGeometry(), d);
							continue;
						}
						if (3 !== o.type) continue;
						const n = r ? 255 : F.get(o.properties.subtype);
						n && N(o.loadGeometry(), n, d);
					}
				}
				o && o((e + 1) / h.length);
			}), c;
		}(P, w ?? [], (t) => e("cobertura", t)), S = function(t) {
			const e = /* @__PURE__ */ new Float64Array(256);
			let o = 0;
			for (let i = 0; i < t.length; i++) e[V(t[i])]++, 255 !== t[i] && 128 & t[i] && o++;
			const r = t.length || 1, n = (t) => 100 * t / r, s = {};
			return i.forEach((t, o) => {
				s[t.id] = n(e[o + 1]);
			}), {
				semClassePct: n(e[0]),
				aguaPct: n(e[255]),
				cursoDaguaPct: n(o),
				porClasse: s
			};
		}(z), E = function(t, e, o, r, n) {
			const { w: s, h: a, latN: u, dLat: c, dLon: h } = t, l = r.velocidadeKmh[n];
			if (!(l > 0)) throw new Error(`Velocidade inválida para o período ${n}.`);
			const d = (/* @__PURE__ */ new Float64Array(256)).fill(1);
			i.forEach(({ id: t }, e) => {
				const o = r.cobertura[t];
				d[e + 1] = "impeditivo" === o ? 0 : "restritivo" === o ? r.fatorRestritivo : 1;
			});
			const f = (t) => "impeditivo" === t ? 0 : "restritivo" === t ? r.fatorRestritivo : 1;
			d[255] = f(p(r, "massa_dagua"));
			const m = f(p(r, "curso_dagua"));
			for (let p = 0; p <= i.length; p++) d[128 | p] = d[p] * m;
			d[253] = 0;
			const y = s * a, g = new Uint8Array(y);
			for (let i = 0; i < y; i++) g[i] = Number.isFinite(e[i]) ? o[i] : 253;
			const v = c * I * L, w = (t) => h * I * L * Math.cos(t * I), b = new Float64Array(8 * a);
			let x = 1 / 0;
			for (let i = 0; i < a; i++) {
				const t = w(u - (i + .5) * c), e = w(u - i * c), o = w(u - (i + 1) * c);
				x = Math.min(x, t, e, o);
				const r = Math.hypot(v, e), n = Math.hypot(v, o);
				b.set([
					v,
					r,
					t,
					n,
					v,
					n,
					t,
					r
				], 8 * i);
			}
			const M = /* @__PURE__ */ new Int32Array(8);
			for (let i = 0; i < 8; i++) M[i] = B[i] * s + D[i];
			const _ = l / 3.6;
			return {
				grade: t,
				w: s,
				h: a,
				cotas: e,
				codigoCelula: g,
				fatorDoCodigo: d,
				passoH: b,
				deslocamentoIndice: M,
				vBase: _,
				vMax: _ * G(r.rampa),
				fatorDaRampa: R(r.rampa, r.fatorRestritivo),
				dxMin: x,
				dy: v
			};
		}(P, k, z, f, d), T = {
			celulaM: P.passo,
			engrossou: P.engrossou,
			semCoberturaPct: S.semClassePct
		};
		if ("alcance" === o) {
			e("propagacao", 0);
			const { faixas: t } = function(t, e, o, r = null) {
				const n = K(t.grade, e.lon, e.lat), s = ot(t, n);
				if (s) throw new $(`O ponto de partida está ${s}.`, 0);
				rt(t, n);
				const i = o.map((t) => 3600 * t), { tempo: a } = Q(t, n, {
					tMaxS: i[i.length - 1],
					aoProgredir: r
				});
				return {
					tempo: a,
					faixas: et(a, i)
				};
			}(E, u[0], _, (t) => e("propagacao", t)), i = function(t, e, o) {
				const r = new Array(o).fill(0);
				for (let n = 0; n < t.h; n++) {
					const s = (t.latN - n * t.dLat) * I, i = (t.latN - (n + 1) * t.dLat) * I, a = 40589641 * t.dLon * I * (Math.sin(s) - Math.sin(i)), u = n * t.w;
					for (let n = 0; n < t.w; n++) {
						const t = e[u + n];
						t >= 1 && t <= o && (r[t - 1] += a);
					}
				}
				return r;
			}(P, t, _.length);
			return {
				modo: o,
				grade: s(P, t),
				resumo: {
					...T,
					temposH: _,
					areaKm2PorFaixa: i
				},
				poligonos: n(() => function(t, e, o = 16) {
					const { w: n, h: s, lonW: i, latN: a, dLon: u, dLat: c } = t, h = new Uint8Array(n * s), l = (t) => Math.round(1e6 * t) / 1e6, d = [];
					for (const f of function(t) {
						const e = /* @__PURE__ */ new Uint8Array(17);
						for (let r = 0; r < t.length; r++) {
							const o = t[r];
							o >= 1 && o <= 16 && (e[o] = 1);
						}
						const o = [];
						for (let r = 1; r <= 16; r++) e[r] && o.push(r);
						return o;
					}(e)) {
						if (f > o) break;
						for (let t = 0; t < e.length; t++) h[t] = e[t] === f ? 1 : 0;
						d.push({
							faixa: f,
							coordinates: r(h, n, s).map((t) => t.map((t) => t.map(([t, e]) => [l(i + t * u), l(a - e * c)])))
						});
					}
					return d;
				}(P, t, _.length).map(({ faixa: t, coordinates: e }) => ({
					classe: t,
					coordinates: e
				})))
			};
		}
		e("trajeto", 0);
		const J = function(t, e, o = null) {
			const r = (t) => Math.round(1e6 * t) / 1e6, n = e.map((e) => K(t.grade, e.lon, e.lat)), s = n.map((e) => ot(t, e));
			n.forEach((e, o) => {
				s[o] || rt(t, e);
			});
			const i = [];
			for (let a = 0; a + 1 < e.length; a++) {
				const u = n[a], c = n[a + 1];
				if (s[a] || s[a + 1]) {
					const t = s[a] ? a : a + 1;
					i.push({
						semCaminho: !0,
						motivo: `O ponto ${t + 1} está ${s[t]}.`
					});
				} else {
					const { tempo: o, veio: n } = Q(t, u, { alvo: c }), s = Number.isFinite(o[c]) ? X(t, n, u, c) : null;
					if (s) {
						const n = tt(t, s), u = [[e[a].lon, e[a].lat]];
						for (let e = 1; e + 1 < n.length; e++) {
							const [o, s] = H(t.grade, n[e]);
							u.push([r(o), r(s)]);
						}
						u.push([e[a + 1].lon, e[a + 1].lat]), i.push({
							coordinates: u,
							tempoS: o[c],
							...Y(t, s)
						});
					} else i.push({
						semCaminho: !0,
						motivo: `Não há caminho transitável do ponto ${a + 1} ao ponto ${a + 2}.`
					});
				}
				o && o((a + 1) / (e.length - 1));
			}
			return i;
		}(E, u, (t) => e("trajeto", t)), Z = [];
		let nt = 0, st = 0;
		J.forEach((t, e) => {
			t.semCaminho ? Z.push(e) : (nt += t.tempoS, st += t.distanciaM);
		});
		const it = 0 === Z.length;
		return {
			modo: o,
			pernas: J,
			resumo: {
				...T,
				tempoTotalS: it ? nt : null,
				distanciaTotalM: it ? st : null,
				pernasSemCaminho: Z
			}
		};
	}
	"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = async ({ data: t }) => {
		try {
			const o = await async function(t) {
				return Promise.all((t ?? []).map(async (t) => {
					if (!t?.buffer || !O(t.buffer)) return t;
					const e = new Blob([t.buffer]).stream().pipeThrough(new DecompressionStream("gzip"));
					return {
						...t,
						buffer: await new Response(e).arrayBuffer()
					};
				}));
			}(t?.coberturaTiles ?? []), r = nt({
				...t,
				coberturaTiles: o
			}, (t, e) => self.postMessage({
				tipo: "progresso",
				etapa: t,
				fracao: e
			}));
			self.postMessage({
				tipo: "pronto",
				...r
			}, r.poligonos ? [(e = r.poligonos).estrutura.buffer, e.xy.buffer] : []);
		} catch (o) {
			self.postMessage({
				tipo: "erro",
				mensagem: o?.message ?? String(o),
				ponto: o?.ponto ?? null
			});
		}
		var e;
	});
})();
