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
	const t = (t) => 255 === t ? "_" : String.fromCharCode(65 + t), e = (t) => "_" === t ? 255 : t.charCodeAt(0) - 65;
	function o(t) {
		const { origem: o, passoGraus: r, largura: n, altura: s, celulaM: a, rle: i } = t ?? {};
		if (!Number.isInteger(n) || !Number.isInteger(s) || n <= 0 || s <= 0 || "string" != typeof i || !Array.isArray(o) || !Array.isArray(r)) throw new Error("grade de cobertura sem forma");
		const c = new Uint8Array(n * s), u = i.split("/");
		if (u.length !== s) throw new Error(`grade compactada com ${u.length} linhas, esperava ${s}`);
		for (let l = 0; l < s; l++) {
			const t = l * n, o = u[l];
			if ("" === o) {
				if (0 === l) throw new Error("a primeira linha não pode repetir a anterior");
				c.copyWithin(t, t - n, t);
				continue;
			}
			let r = 0, s = "";
			for (let a = 0; a < o.length; a++) {
				const i = o[a];
				if (i >= "0" && i <= "9" || i >= "a" && i <= "z") {
					s += i;
					continue;
				}
				const u = s ? parseInt(s, 36) : 1;
				if (r + u > n) throw new Error(`linha ${l} passa da largura`);
				c.fill(e(i), t + r, t + r + u), r += u, s = "";
			}
			if (r !== n) throw new Error(`linha ${l} com ${r} células, esperava ${n}`);
		}
		return {
			grade: {
				lonW: o[0],
				latN: o[1],
				dLon: r[0],
				dLat: r[1],
				w: n,
				h: s,
				passo: a
			},
			contagem: c
		};
	}
	const r = (t) => 8 === t ? 1 : t << 1, n = (t) => 1 === t ? 8 : t >> 1;
	function s(t, e, o) {
		const s = e + 1, a = new Uint8Array(s * (o + 1)), i = (r, n) => r >= 0 && n >= 0 && r < e && n < o && 1 === t[n * e + r];
		for (let r = 0; r < o; r++) for (let o = 0; o < e; o++) t[r * e + o] && (i(o, r - 1) || (a[r * s + o] |= 1), i(o + 1, r) || (a[r * s + o + 1] |= 2), i(o, r + 1) || (a[(r + 1) * s + o + 1] |= 4), i(o - 1, r) || (a[(r + 1) * s + o] |= 8));
		const c = (t) => 1 === t ? 1 : 4 === t ? -1 : 2 === t ? s : -s, u = (t, o) => {
			const r = t % s, n = (t - r) / s;
			return 1 === o ? n * e + r : 2 === o ? n * e + r - 1 : 4 === o ? (n - 1) * e + r - 1 : (n - 1) * e + r;
		}, l = function(t, e, o) {
			const r = new Int32Array(e * o).fill(-1), n = (t) => {
				for (; r[t] !== t;) r[t] = r[r[t]], t = r[t];
				return t;
			};
			for (let s = 0; s < o; s++) for (let o = 0; o < e; o++) {
				const a = s * e + o;
				if (t[a] && (r[a] = a, o > 0 && t[a - 1] && (r[n(a)] = n(a - 1)), s > 0 && t[a - e])) {
					const t = n(a), o = n(a - e);
					t !== o && (r[t] = o);
				}
			}
			return n;
		}(t, e, o), h = /* @__PURE__ */ new Map();
		for (let p = 0; p < a.length; p++) for (; a[p];) {
			const t = a[p] & -a[p], e = [p];
			let o = p, i = t, d = 0;
			for (;;) {
				a[o] &= ~i;
				const u = o + c(i), l = o % s, h = u % s;
				d += l * ((u - h) / s) - h * ((o - l) / s);
				let f = 0, m = !1;
				for (const e of [
					r(i),
					i,
					n(i)
				]) {
					if (u === p && e === t) {
						m = !0;
						break;
					}
					if (a[u] & e) {
						f = e;
						break;
					}
				}
				if (m) {
					e.push(p);
					break;
				}
				if (!f) throw new Error("anel aberto na poligonização");
				f !== i && e.push(u), o = u, i = f;
			}
			const f = l(u(p, t));
			let m = h.get(f);
			m || (m = {
				externo: null,
				furos: []
			}, h.set(f, m)), d > 0 ? m.externo = e : m.furos.push(e);
		}
		const d = (t) => t.map((t) => {
			const e = t % s;
			return [e, (t - e) / s];
		}), f = [];
		for (const r of h.values()) {
			if (!r.externo) throw new Error("componente sem anel externo");
			f.push([d(r.externo), ...r.furos.map(d)]);
		}
		return f;
	}
	function a(t) {
		try {
			return function(t) {
				let e = 1, o = 0;
				for (const { coordinates: i } of t) {
					e += 2;
					for (const t of i) {
						e += 1 + t.length;
						for (const e of t) o += 2 * e.length;
					}
				}
				const r = new Uint32Array(e), n = new Float64Array(o);
				let s = 0, a = 0;
				r[s++] = t.length;
				for (const { classe: i, coordinates: c } of t) {
					r[s++] = i, r[s++] = c.length;
					for (const t of c) {
						r[s++] = t.length;
						for (const e of t) {
							r[s++] = e.length;
							for (const [t, o] of e) n[a++] = t, n[a++] = o;
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
	function i(e, o) {
		for (let t = 0; t < o.length; t++) if (o[t] > 16) throw new Error(`faixa ${o[t]} acima de 16`);
		return function(e, o) {
			const { w: r, h: n } = e, s = new Array(n);
			for (let a = 0; a < n; a++) {
				const e = a * r;
				if (a > 0) {
					let t = !0;
					for (let n = 0; n < r; n++) if (o[e + n] !== o[e - r + n]) {
						t = !1;
						break;
					}
					if (t) {
						s[a] = "";
						continue;
					}
				}
				let n = "", i = 0;
				for (; i < r;) {
					const s = o[e + i];
					let a = 1;
					for (; i + a < r && o[e + i + a] === s;) a++;
					n += (a > 1 ? a.toString(36) : "") + t(s), i += a;
				}
				s[a] = n;
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
	const c = Object.freeze([
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
	]), u = Object.freeze([Object.freeze({
		id: "massa_dagua",
		rotulo: "Massa d'água (polígono)"
	}), Object.freeze({
		id: "curso_dagua",
		rotulo: "Curso d'água (linha)"
	})]), l = Object.freeze({
		massa_dagua: "impeditivo",
		curso_dagua: "adequado"
	}), h = Object.freeze([
		"adequado",
		"restritivo",
		"impeditivo"
	]), d = Object.freeze(["dia", "noite"]), f = Object.freeze(["tobler", "linear"]), p = Object.freeze({
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
	}), m = Object.freeze({
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
	function y(t, e) {
		const o = t?.hidrografia?.[e];
		return h.includes(o) ? o : l[e];
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
			cobertura: p
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
			cobertura: m
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
			cobertura: m
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
			cobertura: m
		}
	});
	const g = (t) => "number" == typeof t && Number.isFinite(t) && t > 0, v = (t) => null === t || "number" == typeof t && Number.isFinite(t) && t >= 0;
	function b(t, e) {
		this.x = t, this.y = e;
	}
	b.prototype = {
		clone() {
			return new b(this.x, this.y);
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
		constructor: b
	}, b.convert = function(t) {
		if (t instanceof b) return t;
		if (Array.isArray(t)) return new b(+t[0], +t[1]);
		if (void 0 !== t.x && void 0 !== t.y) return new b(+t.x, +t.y);
		throw new Error("Expected [x, y] or {x, y} point format");
	};
	var w = class {
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
			let r, n = 1, s = 0, a = 0, i = 0;
			for (; t.pos < e;) {
				if (s <= 0) {
					const e = t.readVarint();
					if (n = 7 & e, s = e >> 3, 0 === s) continue;
				}
				if (s--, 1 === n) a += t.readSVarint(), i += t.readSVarint(), r && o.push(r), r = [new b(a, i)];
				else if (2 === n) a += t.readSVarint(), i += t.readSVarint(), r && r.push(new b(a, i));
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
			let o = 1, r = 0, n = 0, s = 0, a = 1 / 0, i = -1 / 0, c = 1 / 0, u = -1 / 0;
			for (; t.pos < e;) {
				if (r <= 0) {
					const e = t.readVarint();
					if (o = 7 & e, r = e >> 3, 0 === r) continue;
				}
				if (r--, 1 === o || 2 === o) n += t.readSVarint(), s += t.readSVarint(), n < a && (a = n), n > i && (i = n), s < c && (c = s), s > u && (u = s);
				else if (7 !== o) throw new Error(`unknown command ${o}`);
			}
			return [
				a,
				c,
				i,
				u
			];
		}
		toGeoJSON(t, e, o) {
			const r = this.extent * Math.pow(2, o), n = this.extent * t, s = this.extent * e, a = this.loadGeometry();
			function i(t) {
				return [360 * (t.x + n) / r - 180, 360 / Math.PI * Math.atan(Math.exp((1 - 2 * (t.y + s) / r) * Math.PI)) - 90];
			}
			function c(t) {
				return t.map(i);
			}
			let u;
			if (1 === this.type) {
				const t = [];
				for (const o of a) t.push(o[0]);
				const e = c(t);
				u = 1 === t.length ? {
					type: "Point",
					coordinates: e[0]
				} : {
					type: "MultiPoint",
					coordinates: e
				};
			} else if (2 === this.type) {
				const t = a.map(c);
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
						const o = [];
						let r, n;
						for (let s = 0; s < e; s++) {
							const e = M(t[s]);
							0 !== e && (void 0 === n && (n = e < 0), n === e < 0 ? (r && o.push(r), r = [t[s]]) : r && r.push(t[s]));
						}
						return r && o.push(r), o;
					}(a), e = [];
					for (const o of t) e.push(o.map(c));
					u = 1 === e.length ? {
						type: "Polygon",
						coordinates: e[0]
					} : {
						type: "MultiPolygon",
						coordinates: e
					};
				}
			}
			const l = {
				type: "Feature",
				geometry: u,
				properties: this.properties
			};
			return null != this.id && (l.id = this.id), l;
		}
	};
	function M(t) {
		let e = 0;
		for (let o, r, n = 0, s = t.length, a = s - 1; n < s; a = n++) o = t[n], r = t[a], e += (r.x - o.x) * (o.y + r.y);
		return e;
	}
	w.types = [
		"Unknown",
		"Point",
		"LineString",
		"Polygon"
	];
	var x = class {
		constructor(t, e) {
			for (this.version = 1, this.name = "", this.extent = 4096, this.length = 0, this._pbf = t, this._keys = [], this._values = [], this._features = [], void 0 === e && (e = t.length); t.pos < e;) {
				const e = t.readVarint();
				10 === e ? this.name = t.readString() : 18 === e ? (this._features.push(t.pos), t.skip(e)) : 26 === e ? this._keys.push(t.readString()) : 34 === e ? this._values.push(A(t)) : 40 === e ? this.extent = t.readVarint() : 120 === e ? this.version = t.readVarint() : t.skip(e);
			}
			this.length = this._features.length;
		}
		feature(t) {
			if (t < 0 || t >= this._features.length) throw new Error("feature index out of bounds");
			this._pbf.pos = this._features[t];
			const e = this._pbf.readVarint() + this._pbf.pos;
			return new w(this._pbf, e, this.extent, this._keys, this._values);
		}
	};
	function A(t) {
		let e = null;
		const o = t.readVarint() + t.pos;
		for (; t.pos < o;) {
			const o = t.readVarint();
			e = 10 === o ? t.readString() : 21 === o ? t.readFloat() : 25 === o ? t.readDouble() : 32 === o ? t.readVarint(!0) : 40 === o ? t.readVarint() : 48 === o ? t.readSVarint() : 56 === o ? t.readBoolean() : (t.skip(o), null);
		}
		if (null == e) throw new Error("unknown feature value");
		return e;
	}
	var P = class {
		constructor(t, e = t.length) {
			const o = Object.create(null);
			for (; t.pos < e;) {
				const e = t.readVarint();
				if (26 === e) {
					const e = new x(t, t.readVarint() + t.pos);
					e.length && (o[e.name] = e);
				} else t.skip(e);
			}
			this.layers = o;
		}
	};
	const _ = 4294967296, V = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf-8");
	var z = class {
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
			return this.pos = t, t - e >= 12 && V ? V.decode(this.buf.subarray(e, t)) : function(t, e, o) {
				let r = "", n = e;
				for (; n < o;) {
					const e = t[n];
					let s, a, i, c = null, u = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
					if (n + u > o) break;
					1 === u ? e < 128 && (c = e) : 2 === u ? (s = t[n + 1], 128 == (192 & s) && (c = (31 & e) << 6 | 63 & s, c <= 127 && (c = null))) : 3 === u ? (s = t[n + 1], a = t[n + 2], 128 == (192 & s) && 128 == (192 & a) && (c = (15 & e) << 12 | (63 & s) << 6 | 63 & a, (c <= 2047 || c >= 55296 && c <= 57343) && (c = null))) : 4 === u && (s = t[n + 1], a = t[n + 2], i = t[n + 3], 128 == (192 & s) && 128 == (192 & a) && 128 == (192 & i) && (c = (15 & e) << 18 | (63 & s) << 12 | (63 & a) << 6 | 63 & i, (c <= 65535 || c >= 1114112) && (c = null))), null === c ? (c = 65533, u = 1) : c > 65535 && (c -= 65536, r += String.fromCharCode(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r += String.fromCharCode(c), n += u;
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
	const E = (t) => 255 === t ? 255 : 127 & t, F = new Map(c.map((t, e) => [t.overture, e + 1])), j = [
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
	], O = (() => {
		const t = /* @__PURE__ */ new Uint8Array(256);
		return j.forEach((e, o) => {
			t[c.findIndex((t) => t.id === e) + 1] = o + 1;
		}), t[255] = 255, t;
	})(), S = Math.PI / 180, q = (t, e) => (t + 180) / 360 * e;
	function N(t, e) {
		const o = Math.sin(Math.max(-85.051129, Math.min(85.051129, t)) * S);
		return (.5 - Math.log((1 + o) / (1 - o)) / (4 * Math.PI)) * e;
	}
	function L(t) {
		const e = t instanceof Uint8Array ? t : new Uint8Array(t);
		return e.length >= 2 && 31 === e[0] && 139 === e[1];
	}
	function C(t, e, o) {
		const { classes: r, w: n, r0: s, r1: a, c0: i, c1: c, yNoTile: u, x0Tile: l, kTile: h, cruzamentos: d } = o, f = O[e];
		let p = 1 / 0, m = -1 / 0, y = 0;
		for (const v of t) {
			y += v.length;
			for (const t of v) t.y < p && (p = t.y), t.y > m && (m = t.y);
		}
		d.length < y && (o.cruzamentos = new Float64Array(2 * y));
		const g = o.cruzamentos;
		for (let v = s; v <= a; v++) {
			const o = u[v];
			if (o < p || o > m) continue;
			let s = 0;
			for (const e of t) for (let t = 0, r = e.length - 1; t < e.length; r = t++) {
				const n = e[t], a = e[r];
				n.y > o != a.y > o && (g[s++] = n.x + (o - n.y) * (a.x - n.x) / (a.y - n.y));
			}
			if (s < 2) continue;
			const a = g.subarray(0, s).sort(), d = v * n;
			for (let t = 0; t + 1 < s; t += 2) {
				let o = Math.ceil((a[t] - l) / h), n = Math.ceil((a[t + 1] - l) / h) - 1;
				o < i && (o = i), n > c && (n = c);
				for (let t = o; t <= n; t++) {
					const o = d + t, n = r[o];
					f >= O[E(n)] && (r[o] = 255 === e ? 255 : e | 128 & n);
				}
			}
		}
	}
	function I(t, e) {
		const { classes: o, w: r, r0: n, r1: s, c0: a, c1: i, yNoTile: c, x0Tile: u, kTile: l } = e, h = s > n ? (c[s] - c[n]) / (s - n) : e.kLinhaTile;
		if (!(h > 0)) return;
		const d = (t, e) => {
			if (t < n || t > s || e < a || e > i) return;
			const c = t * r + e;
			255 !== o[c] && (o[c] |= 128);
		};
		for (const f of t) {
			let t = null, e = null;
			for (let o = 0; o + 1 < f.length; o++) {
				const r = f[o], s = f[o + 1], a = (r.x - u) / l, i = n + (r.y - c[n]) / h, p = (s.x - u) / l, m = n + (s.y - c[n]) / h, y = Math.max(1, Math.ceil(4 * Math.max(Math.abs(p - a), Math.abs(m - i))));
				for (let o = 0; o <= y; o++) {
					const r = o / y, n = Math.round(i + (m - i) * r), s = Math.round(a + (p - a) * r);
					n === t && s === e || (null !== t && n !== t && s !== e && d(t, s), d(n, s), t = n, e = s);
				}
			}
		}
	}
	const $ = 6371e3, D = Math.PI / 180, U = 180 / Math.PI, T = Math.exp(3.5 * .05), B = Int8Array.of(-1, -1, 0, 1, 1, 1, 0, -1), W = Int8Array.of(0, 1, 1, 1, 0, -1, -1, -1);
	var G = class extends Error {
		constructor(t, e) {
			super(t), this.name = "ErroPontoDeDeslocamento", this.ponto = e;
		}
	};
	function R(t, e) {
		const o = "tobler" === t.curva, r = Number.isFinite(t.fimAdequadoPct) ? t.fimAdequadoPct / 100 : null, n = Number.isFinite(t.impeditivoPct) ? t.impeditivoPct / 100 : null, s = Number.isFinite(t.restritivoAcimaPct) ? t.restritivoAcimaPct / 100 : 1 / 0, a = null !== r && null !== n ? n - r : 0;
		return (t) => {
			const i = t < 0 ? -t : t;
			if (null !== n && i >= n) return 0;
			let c;
			if (o) {
				const e = t + .05;
				c = Math.exp(-3.5 * ((e < 0 ? -e : e) - .05));
			} else c = null === r || i <= r ? 1 : (n - i) / a;
			return i > s ? c * e : c;
		};
	}
	function K(t) {
		return "tobler" === t.curva ? T : 1;
	}
	function H(t) {
		const e = [...new Set((t ?? []).filter((t) => "number" == typeof t && Number.isFinite(t) && t > 0))].sort((t, e) => t - e);
		if (!e.length) throw new Error("Informe ao menos um tempo maior que zero.");
		if (e.length > 16) throw new Error("No máximo 16 tempos.");
		return e;
	}
	function J(t, e, o) {
		const r = Math.floor((e - t.lonW) / t.dLon), n = Math.floor((t.latN - o) / t.dLat);
		return r < 0 || n < 0 || r >= t.w || n >= t.h ? -1 : n * t.w + r;
	}
	function Q(t, e) {
		const o = e % t.w, r = (e - o) / t.w;
		return [t.lonW + (o + .5) * t.dLon, t.latN - (r + .5) * t.dLat];
	}
	var X = class {
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
	function Y(t, e, { tMaxS: o = 1 / 0, alvo: r = -1, aoProgredir: n = null } = {}) {
		const { w: s, h: a, cotas: i, codigoCelula: c, fatorDoCodigo: u, passoH: l, deslocamentoIndice: h, vBase: d, vMax: f, fatorDaRampa: p, dxMin: m, dy: y } = t, g = t.fatorDaVista, v = g ? (t) => u[c[t]] * g[t] : (t) => u[c[t]], b = s * a, w = new Float64Array(b).fill(1 / 0), M = new Uint8Array(b).fill(255), x = r >= 0, A = x ? r % s : 0, P = x ? (r - A) / s : 0, _ = (t) => {
			if (!x) return 0;
			const e = t % s, o = (e - A) * m, r = ((t - e) / s - P) * y;
			return Math.sqrt(o * o + r * r) / f;
		}, V = new X(Math.min(b, 65536));
		w[e] = 0, V.empurrar(_(e), e);
		let z = 0, k = 1;
		for (; V.tamanho > 0;) {
			const t = V.extrair(), e = V.ultimaChave, c = w[t];
			if (e > c + _(t)) continue;
			if (!x && e > o) break;
			if (z++, t === r) break;
			!n || 65535 & z || n(x ? 0 : Math.min(1, e / o));
			const u = v(t);
			if (0 === u) continue;
			const f = t % s, m = (t - f) / s, y = i[t], g = 8 * m;
			for (let o = 0; o < 8; o++) {
				const e = m + B[o], r = f + W[o];
				if (e < 0 || e >= a || r < 0 || r >= s) continue;
				const n = t + h[o], b = v(n);
				if (0 === b) continue;
				if (1 & o && 0 === v(m * s + r) && 0 === v(e * s + f)) continue;
				const x = l[g + o], A = i[n] - y, P = p(A / x);
				if (0 === P) continue;
				const z = c + Math.sqrt(x * x + A * A) / (d * P * .5 * (u + b));
				z < w[n] && (w[n] = z, M[n] = o, V.empurrar(z + _(n), n), k++);
			}
		}
		if (!x && Number.isFinite(o)) for (let E = 0; E < b; E++) w[E] > o && (w[E] = 1 / 0);
		return n && n(1), {
			tempo: w,
			veio: M,
			extraidos: z,
			empurrados: k
		};
	}
	function Z(t, e, o, r) {
		if (r !== o && 255 === e[r]) return null;
		const n = t.deslocamentoIndice, s = [];
		let a = r;
		for (; a !== o;) {
			if (s.push(a), s.length > t.w * t.h) throw new Error("caminho sem fim");
			a -= n[e[a]];
		}
		return s.push(o), Int32Array.from(s.reverse());
	}
	function tt(t, e) {
		const { w: o, cotas: r, passoH: n } = t;
		let s = 0, a = 0, i = 0;
		for (let c = 1; c < e.length; c++) {
			const t = e[c - 1], u = e[c], l = t % o, h = (t - l) / o, d = u % o, f = (u - d) / o;
			let p = 0;
			for (; p < 8 && (B[p] !== f - h || W[p] !== d - l);) p++;
			if (8 === p) throw new Error("caminho com células não vizinhas");
			const m = n[8 * h + p], y = r[u] - r[t];
			s += Math.sqrt(m * m + y * y), y > 0 ? a += y : i -= y;
		}
		return {
			distanciaM: s,
			subidaM: a,
			descidaM: i
		};
	}
	function et(t, e, o) {
		const { w: r, codigoCelula: n, fatorDoCodigo: s } = t, a = t.fatorDaVista, i = a ? (t) => 0 === s[n[t]] || a[t] < 1 : (t) => 0 === s[n[t]];
		let c = e % r, u = (e - c) / r;
		const l = o % r, h = (o - l) / r, d = Math.sign(l - c), f = Math.sign(h - u), p = Math.abs(l - c), m = Math.abs(h - u);
		let y = 0, g = 0;
		for (; c !== l || u !== h;) {
			const t = p ? (2 * y + 1) * m : 1 / 0, e = m ? (2 * g + 1) * p : 1 / 0;
			if (t === e) {
				if (i(u * r + c + d) && i((u + f) * r + c)) return !1;
				c += d, u += f, y++, g++;
			} else t < e ? (c += d, y++) : (u += f, g++);
			if (i(u * r + c)) return !1;
		}
		return !0;
	}
	function ot(t, e) {
		const o = e.length;
		if (o <= 2) return Int32Array.from(e);
		const { w: r, dy: n } = t, s = t.grade.passo, a = t.grade.passo / 2, i = new Float64Array(o), c = new Float64Array(o);
		for (let d = 0; d < o; d++) {
			const t = e[d] % r;
			i[d] = t * s, c[d] = (e[d] - t) / r * n;
		}
		const u = new Uint8Array(o);
		u[0] = 1, u[o - 1] = 1;
		const l = [0, o - 1];
		for (; l.length;) {
			const o = l.pop(), r = l.pop();
			if (o <= r + 1) continue;
			const n = i[r], s = c[r], h = i[o] - n, d = c[o] - s, f = h * h + d * d;
			let p = -1, m = r + 1;
			for (let t = r + 1; t < o; t++) {
				const e = i[t] - n, o = c[t] - s;
				let r = f > 0 ? (e * h + o * d) / f : 0;
				r = r < 0 ? 0 : r > 1 ? 1 : r;
				const a = e - r * h, u = o - r * d, l = a * a + u * u;
				l > p && (p = l, m = t);
			}
			(p > a * a || !et(t, e[r], e[o])) && (u[m] = 1, l.push(r, m, m, o));
		}
		const h = [];
		for (let d = 0; d < o; d++) u[d] && h.push(e[d]);
		return Int32Array.from(h);
	}
	function rt(t, e) {
		const o = new Uint8Array(t.length), r = e.length;
		for (let n = 0; n < t.length; n++) {
			const s = t[n];
			if (!(s <= e[r - 1])) continue;
			let a = 0;
			for (; s > e[a];) a++;
			o[n] = a + 1;
		}
		return o;
	}
	function nt(t, e) {
		return e < 0 ? "fora da área de cálculo" : Number.isFinite(t.cotas[e]) ? 255 === t.codigoCelula[e] && 0 === t.fatorDoCodigo[255] ? "na água" : null : "fora do relevo disponível";
	}
	function st(t, e) {
		if (e < 0) return !1;
		const o = t.codigoCelula[e];
		return 255 !== o && 253 !== o && 0 !== o && 0 === t.fatorDoCodigo[o] && (t.codigoCelula[e] = 0, !0);
	}
	function at(t, e, o = null) {
		const r = (t) => Math.round(1e6 * t) / 1e6, n = e.map((e) => J(t.grade, e.lon, e.lat)), s = n.map((e) => nt(t, e));
		n.forEach((e, o) => {
			s[o] || st(t, e);
		});
		const a = [];
		for (let i = 0; i + 1 < e.length; i++) {
			const c = n[i], u = n[i + 1];
			if (s[i] || s[i + 1]) {
				const t = s[i] ? i : i + 1;
				a.push({
					semCaminho: !0,
					motivo: `O ponto ${t + 1} está ${s[t]}.`
				});
			} else {
				const { tempo: o, veio: n } = Y(t, c, { alvo: u }), s = Number.isFinite(o[u]) ? Z(t, n, c, u) : null;
				if (s) {
					const n = ot(t, s), c = [[e[i].lon, e[i].lat]];
					for (let e = 1; e + 1 < n.length; e++) {
						const [o, s] = Q(t.grade, n[e]);
						c.push([r(o), r(s)]);
					}
					c.push([e[i + 1].lon, e[i + 1].lat]), a.push({
						coordinates: c,
						tempoS: o[u],
						...tt(t, s)
					});
				} else a.push({
					semCaminho: !0,
					motivo: t.vistaProibe ? `Não há caminho fora da vista do inimigo do ponto ${i + 1} ao ponto ${i + 2}. Use Penalizar para ver o menos exposto.` : `Não há caminho transitável do ponto ${i + 1} ao ponto ${i + 2}.`
				});
			}
			o && o((i + 1) / (e.length - 1));
		}
		return a;
	}
	function it(t) {
		return 0 === t || 255 === t ? -1 : Math.floor((t - 1) / 7);
	}
	function ct(t, e, o, r) {
		const { lonW: n, latN: s, dLon: a, dLat: i, w: c, h: u } = e, l = (t, e) => {
			const o = Math.floor((t - n) / a), r = Math.floor((s - e) / i);
			return o < 0 || o >= c || r < 0 || r >= u ? -1 : r * c + o;
		}, h = [];
		let d = null, f = 0;
		for (let p = 1; p < (t?.length ?? 0); p++) {
			const e = t[p - 1], n = t[p], s = l((e[0] + n[0]) / 2, (e[1] + n[1]) / 2);
			s >= 0 && o[s] > 0 ? (f += r(e, n), d || (d = [e], h.push(d)), d.push(n)) : d = null;
		}
		return {
			trechos: h,
			vistoM: f
		};
	}
	Object.freeze([
		0,
		25,
		50,
		100,
		200,
		500
	]), Object.freeze([
		"visivel",
		"morto",
		"altura"
	]), Object.freeze({
		visivel: "Visível",
		morto: "Ângulo morto",
		altura: "Altura para ser visto"
	}), Object.freeze([
		"#5fd35f",
		"#1f9e3a",
		"#0b5d22"
	]), Object.freeze([
		"#1a9850",
		"#91cf60",
		"#d9ef8b",
		"#fee08b",
		"#fc8d59",
		"#d73027",
		"#7f0000"
	]), Object.freeze([
		"Visível no chão",
		"Até 25 m",
		"25 a 50 m",
		"50 a 100 m",
		"100 a 200 m",
		"200 a 500 m",
		"Acima de 500 m"
	]), Object.freeze([
		{
			n: 1,
			modos: ["visivel"]
		},
		{
			n: 2,
			modos: ["visivel"]
		},
		{
			n: 3,
			modos: ["visivel"]
		},
		{
			n: 4,
			modos: ["visivel", "morto"]
		},
		...Array.from({ length: 7 }, (t, e) => ({
			n: 5 + e,
			modos: ["altura"]
		}))
	]), Object.freeze(["proibir", "penalizar"]);
	const ut = Math.PI / 180;
	function lt(t, e) {
		const o = t[1] * ut, r = e[1] * ut, n = Math.sin((r - o) / 2) ** 2 + Math.cos(o) * Math.cos(r) * Math.sin((e[0] - t[0]) * ut / 2) ** 2;
		return 12742e3 * Math.asin(Math.sqrt(Math.min(1, n)));
	}
	function ht(t, e = () => {}) {
		const { modo: r, pontos: n, periodo: l, parametros: p, zoom: m, tiles: b, coberturaTiles: w, passo: M } = t;
		if ("alcance" !== r && "trajeto" !== r) throw new Error(`Modo desconhecido: ${r}`);
		if (!d.includes(l)) throw new Error(`Período desconhecido: ${l}`);
		const x = function(t) {
			const e = [];
			if (!t || "object" != typeof t) return ["Parâmetros ausentes."];
			const o = t.velocidadeKmh ?? {};
			g(o.dia) || e.push("A velocidade de dia precisa ser um número maior que zero."), g(o.noite) || e.push("A velocidade de noite precisa ser um número maior que zero.");
			const r = t.rampa ?? {};
			f.includes(r.curva) || e.push("A curva de declividade precisa ser \"tobler\" ou \"linear\".");
			for (const [s, a] of [
				["fimAdequadoPct", "fim do adequado"],
				["impeditivoPct", "início do impeditivo"],
				["restritivoAcimaPct", "restritivo acima de"]
			]) v(r[s] ?? null) || e.push(`A declividade "${a}" precisa ser vazia ou um número maior ou igual a zero.`);
			"linear" === r.curva && ("number" != typeof r.fimAdequadoPct || "number" != typeof r.impeditivoPct ? e.push("A queda linear precisa do fim do adequado e do início do impeditivo.") : r.fimAdequadoPct < r.impeditivoPct || e.push("O fim do adequado precisa ser menor que o início do impeditivo.")), "number" == typeof t.fatorRestritivo && t.fatorRestritivo > 0 && t.fatorRestritivo <= 1 || e.push("O fator do restritivo precisa estar entre 0 (exclusive) e 1.");
			const n = t.cobertura ?? {};
			for (const { id: s, rotulo: a } of c) h.includes(n[s]) || e.push(`A cobertura "${a}" precisa ser adequado, restritivo ou impeditivo.`);
			for (const { id: s, rotulo: a } of u) {
				const o = t.hidrografia?.[s];
				void 0 === o || h.includes(o) || e.push(`A hidrografia "${a}" precisa ser adequado, restritivo ou impeditivo.`);
			}
			return e;
		}(p);
		if (x.length) throw new Error(x.join(" "));
		if (!Array.isArray(n) || n.length < ("trajeto" === r ? 2 : 1)) throw new Error("trajeto" === r ? "O trajeto precisa de ao menos dois pontos." : "O alcance precisa de um ponto.");
		const A = "alcance" === r ? H(t.temposH) : null, _ = function(t, e, o = 4e6) {
			if (!(e > 0)) throw new Error("passo precisa ser positivo");
			const { oeste: r, sul: n, leste: s, norte: a } = function(t) {
				const { modo: e, pontos: o } = t;
				if (!Array.isArray(o) || !o.length) throw new Error("O deslocamento precisa de ao menos um ponto.");
				if ("alcance" === e) {
					const { lon: e, lat: r } = o[0], n = 3600 * Math.max(...H(t.temposH)) * function(t) {
						return t.parametros.velocidadeKmh[t.periodo] / 3.6 * K(t.parametros.rampa);
					}(t) * 1.01 / $ * U, s = n / Math.cos(r * D);
					return {
						oeste: e - s,
						sul: r - n,
						leste: e + s,
						norte: r + n
					};
				}
				let r = 180, n = -180, s = 90, a = -90;
				for (const { lon: d, lat: f } of o) r = Math.min(r, d), n = Math.max(n, d), s = Math.min(s, f), a = Math.max(a, f);
				const i = Math.cos((a + s) / 2 * D), c = $ * D, u = Math.max((a - s) * c, (n - r) * c * i), l = Math.max(2e3, .25 * u) / c, h = l / i;
				return {
					oeste: r - h,
					sul: s - l,
					leste: n + h,
					norte: a + l
				};
			}(t), i = Math.cos((a + n) / 2 * D), c = (t) => {
				const e = t / $ * U, o = e / i;
				return {
					dLat: e,
					dLon: o,
					w: Math.max(1, Math.ceil((s - r) / o)),
					h: Math.max(1, Math.ceil((a - n) / e))
				};
			};
			let u = e, l = c(u), h = !1;
			return l.w * l.h > o && (u *= 1.001 * Math.sqrt(l.w * l.h / o), l = c(u), h = !0), {
				lonW: r,
				latN: a,
				dLon: l.dLon,
				dLat: l.dLat,
				w: l.w,
				h: l.h,
				passo: u,
				engrossou: h
			};
		}("alcance" === r ? {
			...t,
			temposH: A
		} : t, M);
		e("relevo", 0);
		const V = function(t, e, o = null) {
			const { lonW: r, latN: n, dLon: s, dLat: a, w: i, h: c } = t, u = new Float32Array(i * c);
			for (let l = 0; l < c; l++) {
				const t = n - (l + .5) * a, h = l * i;
				for (let o = 0; o < i; o++) u[h + o] = e(t, r + (o + .5) * s);
				!o || 63 & ~l || o(l / c);
			}
			return o && o(1), u;
		}(_, function(t, e) {
			if (!e.length) return () => NaN;
			let o = 1 / 0, r = 1 / 0, n = -1 / 0, s = -1 / 0;
			for (const u of e) o = Math.min(o, u.x), r = Math.min(r, u.y), n = Math.max(n, u.x), s = Math.max(s, u.y);
			const a = n - o + 1, i = new Array(a * (s - r + 1)).fill(null);
			for (const u of e) i[(u.y - r) * a + (u.x - o)] = u;
			const c = e[0].largura;
			return (e, u) => {
				const l = function(t, e, o, r) {
					const n = 2 ** o, s = Math.max(-85.051129, Math.min(85.051129, e)), a = (((t + 180) % 360 + 360) % 360 - 180 + 180) / 360 * n, i = Math.sin(s * Math.PI / 180), c = (.5 - Math.log((1 + i) / (1 - i)) / (4 * Math.PI)) * n, u = Math.min(n - 1, Math.max(0, Math.floor(a))), l = Math.min(n - 1, Math.max(0, Math.floor(c))), h = (t) => Math.min(r, Math.max(0, t * r));
					return {
						z: o,
						x: u,
						y: l,
						px: h(a - u),
						py: h(c - l)
					};
				}(u, e, t, c);
				if (l.x < o || l.x > n || l.y < r || l.y > s) return NaN;
				const h = i[(l.y - r) * a + (l.x - o)];
				return h ? function(t, e, o) {
					const { largura: r, altura: n, cotas: s } = t, a = Math.max(0, Math.min(r - 1, e - .5)), i = Math.max(0, Math.min(n - 1, o - .5)), c = Math.floor(a), u = Math.floor(i), l = Math.min(r - 1, c + 1), h = Math.min(n - 1, u + 1), d = a - c, f = i - u;
					return (s[u * r + c] * (1 - d) + s[u * r + l] * d) * (1 - f) + (s[h * r + c] * (1 - d) + s[h * r + l] * d) * f;
				}(h, l.px, l.py) : NaN;
			};
		}(m, b ?? []), (t) => e("relevo", t));
		e("cobertura", 0);
		const k = function(t, e, o = null) {
			const { lonW: r, latN: n, dLon: s, dLat: a, w: i, h: c } = t, u = new Uint8Array(i * c), l = e ?? [], h = /* @__PURE__ */ new Map(), d = {
				classes: u,
				w: i,
				cruzamentos: /* @__PURE__ */ new Float64Array(4096)
			};
			return l.forEach((t, e) => {
				if (!t?.buffer || 0 === t.buffer.byteLength) return;
				if (L(t.buffer)) throw new Error(`tile de cobertura ${t.z}/${t.x}/${t.y} ainda comprimido`);
				const { yG: u, xG0: f, kG: p } = ((t) => {
					let e = h.get(t);
					if (e) return e;
					const o = 2 ** t, i = new Float64Array(c);
					for (let r = 0; r < c; r++) i[r] = N(n - (r + .5) * a, o);
					return e = {
						n: o,
						yG: i,
						xG0: q(r + .5 * s, o),
						kG: s / 360 * o
					}, h.set(t, e), e;
				})(t.z);
				let m = 0;
				for (; m < c && u[m] < t.y;) m++;
				let y = m - 1;
				for (; y + 1 < c && u[y + 1] < t.y + 1;) y++;
				if (y < m) return;
				const g = Math.max(0, Math.ceil((t.x - f) / p)), v = Math.min(i - 1, Math.ceil((t.x + 1 - f) / p) - 1);
				if (v < g) return;
				const b = new P(new z(new Uint8Array(t.buffer)));
				for (const [o, r] of [["land_cover", !1], ["water", !0]]) {
					const e = b.layers[o];
					if (!e) continue;
					const n = e.extent || 4096, s = new Float64Array(c);
					for (let o = m; o <= y; o++) s[o] = (u[o] - t.y) * n;
					const a = m + 1 < c ? (u[m + 1] - u[m]) * n : 0;
					Object.assign(d, {
						r0: m,
						r1: y,
						c0: g,
						c1: v,
						yNoTile: s,
						x0Tile: (f - t.x) * n,
						kTile: p * n,
						kLinhaTile: a
					});
					for (let t = 0; t < e.length; t++) {
						const o = e.feature(t);
						if (r && 2 === o.type) {
							I(o.loadGeometry(), d);
							continue;
						}
						if (3 !== o.type) continue;
						const n = r ? 255 : F.get(o.properties.subtype);
						n && C(o.loadGeometry(), n, d);
					}
				}
				o && o((e + 1) / l.length);
			}), u;
		}(_, w ?? [], (t) => e("cobertura", t)), j = function(t) {
			const e = /* @__PURE__ */ new Float64Array(256);
			let o = 0;
			for (let a = 0; a < t.length; a++) e[E(t[a])]++, 255 !== t[a] && 128 & t[a] && o++;
			const r = t.length || 1, n = (t) => 100 * t / r, s = {};
			return c.forEach((t, o) => {
				s[t.id] = n(e[o + 1]);
			}), {
				semClassePct: n(e[0]),
				aguaPct: n(e[255]),
				cursoDaguaPct: n(o),
				porClasse: s
			};
		}(k), O = function(t, e, o, r, n) {
			const { w: s, h: a, latN: i, dLat: u, dLon: l } = t, h = r.velocidadeKmh[n];
			if (!(h > 0)) throw new Error(`Velocidade inválida para o período ${n}.`);
			const d = (/* @__PURE__ */ new Float64Array(256)).fill(1);
			c.forEach(({ id: t }, e) => {
				const o = r.cobertura[t];
				d[e + 1] = "impeditivo" === o ? 0 : "restritivo" === o ? r.fatorRestritivo : 1;
			});
			const f = (t) => "impeditivo" === t ? 0 : "restritivo" === t ? r.fatorRestritivo : 1;
			d[255] = f(y(r, "massa_dagua"));
			const p = f(y(r, "curso_dagua"));
			for (let y = 0; y <= c.length; y++) d[128 | y] = d[y] * p;
			d[253] = 0;
			const m = s * a, g = new Uint8Array(m);
			for (let c = 0; c < m; c++) g[c] = Number.isFinite(e[c]) ? o[c] : 253;
			const v = u * D * $, b = (t) => l * D * $ * Math.cos(t * D), w = new Float64Array(8 * a);
			let M = 1 / 0;
			for (let c = 0; c < a; c++) {
				const t = b(i - (c + .5) * u), e = b(i - c * u), o = b(i - (c + 1) * u);
				M = Math.min(M, t, e, o);
				const r = Math.hypot(v, e), n = Math.hypot(v, o);
				w.set([
					v,
					r,
					t,
					n,
					v,
					n,
					t,
					r
				], 8 * c);
			}
			const x = /* @__PURE__ */ new Int32Array(8);
			for (let c = 0; c < 8; c++) x[c] = B[c] * s + W[c];
			const A = h / 3.6;
			return {
				grade: t,
				w: s,
				h: a,
				cotas: e,
				codigoCelula: g,
				fatorDoCodigo: d,
				passoH: w,
				deslocamentoIndice: x,
				vBase: A,
				vMax: A * K(r.rampa),
				fatorDaRampa: R(r.rampa, r.fatorRestritivo),
				dxMin: M,
				dy: v,
				fatorDaVista: null,
				vistaProibe: !1
			};
		}(_, V, k, p, l), S = function(t, e, r, n) {
			if (!n || !Array.isArray(n.grades) || 0 === n.grades.length) return null;
			const s = function(t, e) {
				const { lonW: r, latN: n, dLon: s, dLat: a, w: i, h: c } = t, u = new Uint8Array(i * c);
				let l = 0;
				for (const d of Array.isArray(e) ? e : []) {
					let t;
					try {
						t = o(d);
					} catch {
						continue;
					}
					l++;
					const e = t.grade, h = t.contagem;
					for (let o = 0; o < c; o++) {
						const t = n - (o + .5) * a, c = Math.floor((e.latN - t) / e.dLat);
						if (!(c < 0 || c >= e.h)) for (let n = 0; n < i; n++) {
							const t = r + (n + .5) * s, a = Math.floor((t - e.lonW) / e.dLon);
							if (a < 0 || a >= e.w) continue;
							const l = it(h[c * e.w + a]);
							if (l > 0) {
								const t = o * i + n;
								u[t] = Math.min(255, u[t] + l);
							}
						}
					}
				}
				let h = 0;
				for (let o = 0; o < u.length; o++) u[o] > 0 && h++;
				return {
					vistos: u,
					usadas: l,
					celulasVistas: h
				};
			}(e, n.grades);
			if (0 === s.usadas) return null;
			const a = r.map((t) => J(e, t.lon, t.lat));
			return t.fatorDaVista = function(t, { modo: e, peso: o }, r = []) {
				const n = new Float32Array(t.length);
				for (let s = 0; s < t.length; s++) {
					const r = t[s];
					n[s] = 0 === r ? 1 : "penalizar" === e ? 1 / (1 + o * r) : 0;
				}
				for (const s of r) s >= 0 && s < n.length && (n[s] = 1);
				return n;
			}(s.vistos, n, a), t.vistaProibe = "penalizar" !== n.modo, s;
		}(O, _, n, t.vista), T = {
			celulaM: _.passo,
			engrossou: _.engrossou,
			semCoberturaPct: j.semClassePct
		};
		if (S && (T.vista = {
			analises: S.usadas,
			modo: O.vistaProibe ? "proibir" : "penalizar",
			peso: t.vista.peso,
			celulasVistas: S.celulasVistas
		}), "alcance" === r) {
			e("propagacao", 0);
			const { faixas: t } = function(t, e, o, r = null) {
				const n = J(t.grade, e.lon, e.lat), s = nt(t, n);
				if (s) throw new G(`O ponto de partida está ${s}.`, 0);
				st(t, n);
				const a = o.map((t) => 3600 * t), { tempo: i } = Y(t, n, {
					tMaxS: a[a.length - 1],
					aoProgredir: r
				});
				return {
					tempo: i,
					faixas: rt(i, a)
				};
			}(O, n[0], A, (t) => e("propagacao", t)), o = function(t, e, o) {
				const r = new Array(o).fill(0);
				for (let n = 0; n < t.h; n++) {
					const s = (t.latN - n * t.dLat) * D, a = (t.latN - (n + 1) * t.dLat) * D, i = 40589641 * t.dLon * D * (Math.sin(s) - Math.sin(a)), c = n * t.w;
					for (let n = 0; n < t.w; n++) {
						const t = e[c + n];
						t >= 1 && t <= o && (r[t - 1] += i);
					}
				}
				return r;
			}(_, t, A.length);
			return {
				modo: r,
				grade: i(_, t),
				resumo: {
					...T,
					temposH: A,
					areaKm2PorFaixa: o
				},
				poligonos: a(() => function(t, e, o = 16) {
					const { w: r, h: n, lonW: a, latN: i, dLon: c, dLat: u } = t, l = new Uint8Array(r * n), h = (t) => Math.round(1e6 * t) / 1e6, d = [];
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
						for (let t = 0; t < e.length; t++) l[t] = e[t] === f ? 1 : 0;
						d.push({
							faixa: f,
							coordinates: s(l, r, n).map((t) => t.map((t) => t.map(([t, e]) => [h(a + t * c), h(i - e * u)])))
						});
					}
					return d;
				}(_, t, A.length).map(({ faixa: t, coordinates: e }) => ({
					classe: t,
					coordinates: e
				})))
			};
		}
		e("trajeto", 0);
		const Q = at(O, n, (t) => e("trajeto", t * (S ? .5 : 1)));
		if (S) {
			let t = 0;
			for (const e of Q) {
				if (e.semCaminho) continue;
				const o = ct(e.coordinates, _, S.vistos, lt);
				e.vistoM = o.vistoM, e.trechosVistos = o.trechos, t += o.vistoM;
			}
			O.fatorDaVista = null, O.vistaProibe = !1;
			const o = at(O, n, (t) => e("trajeto", .5 + .5 * t));
			let r = 0, s = 0, a = 0, i = !0;
			o.forEach((t, e) => {
				t.semCaminho ? i = !1 : (r += t.tempoS, s += t.distanciaM, a += ct(t.coordinates, _, S.vistos, lt).vistoM, Q[e] && !Q[e].semCaminho && (Q[e].rapido = t.coordinates));
			}), T.vista.vistoTotalM = t, T.vista.semDesenfiar = i ? {
				tempoTotalS: r,
				distanciaTotalM: s,
				vistoM: a
			} : null;
		}
		const X = [];
		let Z = 0, tt = 0;
		Q.forEach((t, e) => {
			t.semCaminho ? X.push(e) : (Z += t.tempoS, tt += t.distanciaM);
		});
		const et = 0 === X.length;
		return {
			modo: r,
			pernas: Q,
			resumo: {
				...T,
				tempoTotalS: et ? Z : null,
				distanciaTotalM: et ? tt : null,
				pernasSemCaminho: X
			}
		};
	}
	"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = async ({ data: t }) => {
		try {
			const o = await async function(t) {
				return Promise.all((t ?? []).map(async (t) => {
					if (!t?.buffer || !L(t.buffer)) return t;
					const e = new Blob([t.buffer]).stream().pipeThrough(new DecompressionStream("gzip"));
					return {
						...t,
						buffer: await new Response(e).arrayBuffer()
					};
				}));
			}(t?.coberturaTiles ?? []), r = ht({
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
