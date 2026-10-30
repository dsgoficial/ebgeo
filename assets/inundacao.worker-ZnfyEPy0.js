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
	const t = (t) => 255 === t ? "_" : String.fromCharCode(65 + t);
	function e(e, n) {
		const { w: o, h: r } = e, a = new Array(r);
		for (let s = 0; s < r; s++) {
			const e = s * o;
			if (s > 0) {
				let t = !0;
				for (let r = 0; r < o; r++) if (n[e + r] !== n[e - o + r]) {
					t = !1;
					break;
				}
				if (t) {
					a[s] = "";
					continue;
				}
			}
			let r = "", l = 0;
			for (; l < o;) {
				const a = n[e + l];
				let s = 1;
				for (; l + s < o && n[e + l + s] === a;) s++;
				r += (s > 1 ? s.toString(36) : "") + t(a), l += s;
			}
			a[s] = r;
		}
		return {
			origem: [e.lonW, e.latN],
			passoGraus: [e.dLon, e.dLat],
			largura: o,
			altura: r,
			celulaM: e.passo,
			rle: a.join("/")
		};
	}
	const n = (t) => 8 === t ? 1 : t << 1, o = (t) => 1 === t ? 8 : t >> 1;
	function r(t, e, r) {
		const a = e + 1, s = new Uint8Array(a * (r + 1)), l = (n, o) => n >= 0 && o >= 0 && n < e && o < r && 1 === t[o * e + n];
		for (let n = 0; n < r; n++) for (let o = 0; o < e; o++) t[n * e + o] && (l(o, n - 1) || (s[n * a + o] |= 1), l(o + 1, n) || (s[n * a + o + 1] |= 2), l(o, n + 1) || (s[(n + 1) * a + o + 1] |= 4), l(o - 1, n) || (s[(n + 1) * a + o] |= 8));
		const i = (t) => 1 === t ? 1 : 4 === t ? -1 : 2 === t ? a : -a, c = (t, n) => {
			const o = t % a, r = (t - o) / a;
			return 1 === n ? r * e + o : 2 === n ? r * e + o - 1 : 4 === n ? (r - 1) * e + o - 1 : (r - 1) * e + o;
		}, f = function(t, e, n) {
			const o = new Int32Array(e * n).fill(-1), r = (t) => {
				for (; o[t] !== t;) o[t] = o[o[t]], t = o[t];
				return t;
			};
			for (let a = 0; a < n; a++) for (let n = 0; n < e; n++) {
				const s = a * e + n;
				if (t[s] && (o[s] = s, n > 0 && t[s - 1] && (o[r(s)] = r(s - 1)), a > 0 && t[s - e])) {
					const t = r(s), n = r(s - e);
					t !== n && (o[t] = n);
				}
			}
			return r;
		}(t, e, r), u = /* @__PURE__ */ new Map();
		for (let d = 0; d < s.length; d++) for (; s[d];) {
			const t = s[d] & -s[d], e = [d];
			let r = d, l = t, h = 0;
			for (;;) {
				s[r] &= ~l;
				const c = r + i(l), f = r % a, u = c % a;
				h += f * ((c - u) / a) - u * ((r - f) / a);
				let m = 0, M = !1;
				for (const e of [
					n(l),
					l,
					o(l)
				]) {
					if (c === d && e === t) {
						M = !0;
						break;
					}
					if (s[c] & e) {
						m = e;
						break;
					}
				}
				if (M) {
					e.push(d);
					break;
				}
				if (!m) throw new Error("anel aberto na poligonização");
				m !== l && e.push(c), r = c, l = m;
			}
			const m = f(c(d, t));
			let M = u.get(m);
			M || (M = {
				externo: null,
				furos: []
			}, u.set(m, M)), h > 0 ? M.externo = e : M.furos.push(e);
		}
		const h = (t) => t.map((t) => {
			const e = t % a;
			return [e, (t - e) / a];
		}), m = [];
		for (const n of u.values()) {
			if (!n.externo) throw new Error("componente sem anel externo");
			m.push([h(n.externo), ...n.furos.map(h)]);
		}
		return m;
	}
	function a(t) {
		try {
			return function(t) {
				let e = 1, n = 0;
				for (const { coordinates: l } of t) {
					e += 2;
					for (const t of l) {
						e += 1 + t.length;
						for (const e of t) n += 2 * e.length;
					}
				}
				const o = new Uint32Array(e), r = new Float64Array(n);
				let a = 0, s = 0;
				o[a++] = t.length;
				for (const { classe: l, coordinates: i } of t) {
					o[a++] = l, o[a++] = i.length;
					for (const t of i) {
						o[a++] = t.length;
						for (const e of t) {
							o[a++] = e.length;
							for (const [t, n] of e) r[s++] = t, r[s++] = n;
						}
					}
				}
				return {
					estrutura: o,
					xy: r
				};
			}(t());
		} catch (e) {
			return null;
		}
	}
	const s = Object.freeze([
		"#c6dbef",
		"#6baed6",
		"#2171b5",
		"#08306b",
		"#f28e2b"
	]);
	Object.freeze([
		.5,
		1,
		2
	]);
	const l = (Object.freeze({
		COTA: "cota",
		SOBE: "sobe"
	}), Object.freeze([
		.5,
		1,
		2
	])), i = Math.PI / 180, c = 180 / Math.PI;
	var f = class extends Error {
		constructor() {
			super("O ponto clicado não está no rio nem abaixo do nível. Clique no rio ou suba o nível."), this.name = "ErroSemSemente", this.estado = "semente";
		}
	}, u = class extends Error {
		constructor(t) {
			super("Mais da metade da área não tem dado de relevo. Clique numa área coberta pelo relevo ou diminua o raio."), this.name = "ErroSemDado", this.estado = "sem-dado", this.fracao = t;
		}
	};
	function h(t, e) {
		return t <= e[0] ? 1 : t <= e[1] ? 2 : t <= e[2] ? 3 : 4;
	}
	function m(t, e, n) {
		return {
			c: Math.floor((e - t.lonW) / t.dLon),
			r: Math.floor((t.latN - n) / t.dLat)
		};
	}
	function d(t, e) {
		const { w: n, h: o, lonW: r, latN: a, dLon: s, dLat: l } = t, i = new Float32Array(n * o);
		if (!Array.isArray(e)) return i;
		const c = (t, e, r) => {
			if (t < 0 || e < 0 || t >= n || e >= o) return;
			const a = e * n + t;
			r > i[a] && (i[a] = r);
		};
		for (const f of e) {
			const t = Number(f?.altura), e = Array.isArray(f?.coordinates) ? f.coordinates : [];
			if (t > 0 && !(e.length < 2)) for (let n = 1; n < e.length; n++) {
				const [o, i] = e[n - 1], [f, u] = e[n];
				[
					o,
					i,
					f,
					u
				].every(Number.isFinite) && M((o - r) / s, (a - i) / l, (f - r) / s, (a - u) / l, (e, n) => c(e, n, t));
			}
		}
		return i;
	}
	function M(t, e, n, o, r) {
		let a = Math.floor(t), s = Math.floor(e);
		const l = Math.floor(n), i = Math.floor(o), c = n - t, f = o - e, u = c > 0 ? 1 : c < 0 ? -1 : 0, h = f > 0 ? 1 : f < 0 ? -1 : 0, m = 0 !== u ? Math.abs(1 / c) : 1 / 0, d = 0 !== h ? Math.abs(1 / f) : 1 / 0;
		let M = u > 0 ? (a + 1 - t) / c : u < 0 ? (t - a) / -c : 1 / 0, p = h > 0 ? (s + 1 - e) / f : h < 0 ? (e - s) / -f : 1 / 0;
		r(a, s);
		let g = Math.abs(l - a) + Math.abs(i - s);
		for (; g-- > 0;) M <= p ? (a += u, M += m) : (s += h, p += d), r(a, s);
	}
	function p({ valor: t, dique: e = null, w: n, h: o, nivel: r, semente: a, raioSementeCel: s, faixas: i = l }) {
		const c = n * o, u = function(t) {
			if (!Array.isArray(t) || 3 !== t.length) return [...l];
			const e = t.map(Number);
			return e.every((t) => Number.isFinite(t) && t > 0) ? e.sort((t, e) => t - e) : [...l];
		}(i), m = new Uint8Array(c);
		let d = 0;
		for (let l = 0; l < c; l++) {
			const n = t[l];
			Number.isNaN(n) ? d++ : (e ? n + e[l] : n) < r && (m[l] = 1);
		}
		const M = function(t, e, n, o, r, a) {
			if (o >= 0 && r >= 0 && o < e && r < n && t[r * e + o]) return r * e + o;
			let s = -1, l = 1 / 0;
			const i = a * a, c = Math.max(0, r - a), f = Math.min(n - 1, r + a), u = Math.max(0, o - a), h = Math.min(e - 1, o + a);
			for (let m = c; m <= f; m++) for (let n = u; n <= h; n++) {
				const a = m * e + n;
				if (!t[a]) continue;
				const c = (n - o) ** 2 + (m - r) ** 2;
				c > i || c < l && (l = c, s = a);
			}
			return s;
		}(m, n, o, a.c, a.r, s);
		if (M < 0) throw new f();
		const p = new Uint8Array(c), w = new Int32Array(c);
		let x = 0, y = 0;
		for (p[M] = 1, w[y++] = M; x < y;) {
			const t = w[x++], e = t % n;
			e > 0 && m[t - 1] && !p[t - 1] && (p[t - 1] = 1, w[y++] = t - 1), e < n - 1 && m[t + 1] && !p[t + 1] && (p[t + 1] = 1, w[y++] = t + 1), t >= n && m[t - n] && !p[t - n] && (p[t - n] = 1, w[y++] = t - n), t + n < c && m[t + n] && !p[t + n] && (p[t + n] = 1, w[y++] = t + n);
		}
		const b = y;
		let N = 0;
		for (let l = 0; l < y; l++) {
			const n = w[l], o = r - (e ? t[n] + e[n] : t[n]);
			o > N && (N = o), p[n] = h(o, u);
		}
		for (let l = 0; l < c; l++) Number.isNaN(t[l]) && (p[l] = 255);
		return {
			classes: p,
			semente: M,
			celulasAlagadas: b,
			celulasIlhadas: g(p, n, o),
			celulasSemDado: d,
			profundidadeMaxima: N
		};
	}
	function g(t, e, n) {
		const o = e * n, r = new Uint8Array(o), a = new Int32Array(o);
		let s = 0;
		for (let l = 0; l < o; l++) {
			if (0 !== t[l] || r[l]) continue;
			let o = 0, i = 0, c = !1;
			for (r[l] = 1, a[i++] = l; o < i;) {
				const s = a[o++], l = s % e, f = (s - l) / e;
				0 !== l && 0 !== f && l !== e - 1 && f !== n - 1 || (c = !0);
				for (let o = -1; o <= 1; o++) {
					const s = f + o;
					if (!(s < 0 || s >= n)) for (let n = -1; n <= 1; n++) {
						if (0 === o && 0 === n) continue;
						const f = l + n;
						if (f < 0 || f >= e) continue;
						const u = s * e + f, h = t[u];
						255 !== h ? 0 !== h || r[u] || (r[u] = 1, a[i++] = u) : c = !0;
					}
				}
			}
			if (!c) {
				for (let e = 0; e < i; e++) t[a[e]] = 5;
				s += i;
			}
		}
		return s;
	}
	function w(t, e) {
		const n = (t.latN - e * t.dLat) * i, o = (t.latN - (e + 1) * t.dLat) * i;
		return 40589641e6 * t.dLon * i * Math.abs(Math.sin(n) - Math.sin(o)) / 1e6;
	}
	function x(t, e) {
		const { w: n, h: o } = t, r = new Array(6).fill(0);
		for (let a = 0; a < o; a++) {
			const o = w(t, a), s = a * n;
			for (let t = 0; t < n; t++) {
				const n = e[s + t];
				n >= 1 && n <= 5 && (r[n] += o);
			}
		}
		return {
			areaPorClasse: r,
			areaAlagadaKm2: r[1] + r[2] + r[3] + r[4],
			areaIlhadaKm2: r[5]
		};
	}
	const y = Math.PI / 180, b = 180 / Math.PI, N = (t) => Math.log(Math.tan(Math.PI / 4 + t * y / 2)), v = (t) => (2 * Math.atan(Math.exp(t)) - Math.PI / 2) * b;
	function A(t) {
		const e = function(t, e, n = 4e6) {
			const { oeste: o, sul: r, leste: a, norte: s } = t, l = Math.cos((s + r) / 2 * i), f = (t) => {
				const e = t / 6371e3 * c, n = e / l;
				return {
					dLat: e,
					dLon: n,
					w: Math.max(1, Math.ceil((a - o) / n)),
					h: Math.max(1, Math.ceil((s - r) / e))
				};
			};
			let u = e, h = f(u), m = !1;
			return h.w * h.h > n && (u *= 1.001 * Math.sqrt(h.w * h.h / n), h = f(u), m = !0), {
				lonW: o,
				latN: s,
				dLon: h.dLon,
				dLat: h.dLat,
				w: h.w,
				h: h.h,
				passo: u,
				engrossou: m
			};
		}(t.caixa, t.passo, t.teto), n = function(t, e) {
			const { lonW: n, latN: o, dLon: r, dLat: a, w: s, h: l } = t, i = new Float32Array(s * l);
			for (let c = 0; c < l; c++) {
				const t = o - (c + .5) * a;
				for (let o = 0; o < s; o++) i[c * s + o] = e(t, n + (o + .5) * r);
			}
			return i;
		}(e, function(t, e) {
			if (!e.length) return () => NaN;
			let n = 1 / 0, o = 1 / 0, r = -1 / 0, a = -1 / 0;
			for (const c of e) n = Math.min(n, c.x), o = Math.min(o, c.y), r = Math.max(r, c.x), a = Math.max(a, c.y);
			const s = r - n + 1, l = new Array(s * (a - o + 1)).fill(null);
			for (const c of e) l[(c.y - o) * s + (c.x - n)] = c;
			const i = e[0].largura;
			return (e, c) => {
				const f = function(t, e, n, o) {
					const r = 2 ** n, a = Math.max(-85.051129, Math.min(85.051129, e)), s = (((t + 180) % 360 + 360) % 360 - 180 + 180) / 360 * r, l = Math.sin(a * Math.PI / 180), i = (.5 - Math.log((1 + l) / (1 - l)) / (4 * Math.PI)) * r, c = Math.min(r - 1, Math.max(0, Math.floor(s))), f = Math.min(r - 1, Math.max(0, Math.floor(i))), u = (t) => Math.min(o, Math.max(0, t * o));
					return {
						z: n,
						x: c,
						y: f,
						px: u(s - c),
						py: u(i - f)
					};
				}(c, e, t, i);
				if (f.x < n || f.x > r || f.y < o || f.y > a) return NaN;
				const u = l[(f.y - o) * s + (f.x - n)];
				return u ? function(t, e, n) {
					const { largura: o, altura: r, cotas: a } = t, s = Math.max(0, Math.min(o - 1, e - .5)), l = Math.max(0, Math.min(r - 1, n - .5)), i = Math.floor(s), c = Math.floor(l), f = Math.min(o - 1, i + 1), u = Math.min(r - 1, c + 1), h = s - i, m = l - c;
					return (a[c * o + i] * (1 - h) + a[c * o + f] * h) * (1 - m) + (a[u * o + i] * (1 - h) + a[u * o + f] * h) * m;
				}(u, f.px, f.py) : NaN;
			};
		}(t.zoom, t.tiles)), o = function(t) {
			if (!t.length) return 1;
			let e = 0;
			for (let n = 0; n < t.length; n++) Number.isNaN(t[n]) && e++;
			return e / t.length;
		}(n);
		if (o > .5) throw new u(o);
		return {
			grade: e,
			valor: n,
			dique: d(e, t.diques)
		};
	}
	function L(t, e, n) {
		return {
			celula: m(t, e[0], e[1]),
			raioCel: Math.max(1, Math.ceil(n / t.passo))
		};
	}
	function I(t, n = A(t)) {
		const { grade: o, valor: s, dique: l } = n, { celula: i, raioCel: c } = L(o, t.semente, t.raioDaSementeM), f = function(t, e, n, o, r, a) {
			let s = 1 / 0;
			const l = a * a;
			for (let i = Math.max(0, r - a); i <= Math.min(n - 1, r + a); i++) for (let n = Math.max(0, o - a); n <= Math.min(e - 1, o + a); n++) {
				if ((n - o) ** 2 + (i - r) ** 2 > l) continue;
				const a = t[i * e + n];
				a < s && (s = a);
			}
			return Number.isFinite(s) ? s : NaN;
		}(s, o.w, o.h, i.c, i.r, c), u = Number.isFinite(t.nivel) ? t.nivel : Math.round(10 * ((Number.isFinite(f) ? f : 0) + t.nivelAcimaDoRio)) / 10, h = p({
			valor: s,
			dique: l,
			w: o.w,
			h: o.h,
			nivel: u,
			semente: i,
			raioSementeCel: c,
			faixas: t.faixas
		}), m = h.semente % o.w, d = (h.semente - m) / o.w;
		return {
			grade: e(o, h.classes),
			resumo: x(o, h.classes),
			poligonos: a(() => function(t, e) {
				const { w: n, h: o, lonW: a, latN: s, dLon: l, dLat: i } = t, c = new Uint8Array(n * o), f = (t) => Math.round(1e6 * t) / 1e6, u = [];
				for (const h of function(t) {
					const e = /* @__PURE__ */ new Uint8Array(6);
					for (let o = 0; o < t.length; o++) {
						const n = t[o];
						n >= 1 && n <= 5 && (e[n] = 1);
					}
					const n = [];
					for (let o = 1; o <= 5; o++) e[o] && n.push(o);
					return n;
				}(e)) {
					for (let t = 0; t < e.length; t++) c[t] = e[t] === h ? 1 : 0;
					u.push({
						classe: h,
						coordinates: r(c, n, o).map((t) => t.map((t) => t.map(([t, e]) => [f(a + t * l), f(s - e * i)])))
					});
				}
				return u;
			}(o, h.classes)),
			nivel: u,
			valorDoRio: f,
			sementeUsada: [o.lonW + (m + .5) * o.dLon, o.latN - (d + .5) * o.dLat],
			profundidadeMaxima: h.profundidadeMaxima,
			semDado: h.celulasSemDado > 0,
			engrossou: o.engrossou,
			celulaM: o.passo
		};
	}
	if ("undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window) {
		let t = null, e = null;
		self.onmessage = ({ data: n }) => {
			try {
				if ("previa" === n?.tipo) {
					if (!t) throw new Error("prévia sem grade preparada");
					const o = function(t, e, n, o) {
						const { grade: r, valor: a, dique: l } = t, { celula: i, raioCel: c } = L(r, e.semente, e.raioDaSementeM);
						return function(t, e, n) {
							const { lonW: o, latN: r, dLon: a, dLat: s, w: l, h: i } = t, c = r - i * s, f = o + l * a, u = /* @__PURE__ */ new Uint8Array(1024);
							n.forEach((t, e) => {
								const [n, o, r] = (a = t, [
									1,
									3,
									5
								].map((t) => parseInt(a.slice(t, t + 2), 16)));
								var a;
								u.set([
									n,
									o,
									r,
									255
								], 4 * (e + 1));
							});
							const h = new Uint8ClampedArray(l * i * 4), m = N(r), d = N(c);
							for (let M = 0; M < i; M++) {
								const t = v(m + (M + .5) / i * (d - m)), n = Math.min(i - 1, Math.max(0, Math.floor((r - t) / s))) * l, o = M * l * 4;
								for (let r = 0; r < l; r++) {
									const t = 4 * e[n + r], a = o + 4 * r;
									h[a] = u[t], h[a + 1] = u[t + 1], h[a + 2] = u[t + 2], h[a + 3] = u[t + 3];
								}
							}
							return {
								imagem: h,
								largura: l,
								altura: i,
								coordenadas: [
									[o, r],
									[f, r],
									[f, c],
									[o, c]
								]
							};
						}(r, p({
							valor: a,
							dique: l,
							w: r.w,
							h: r.h,
							nivel: n,
							semente: i,
							raioSementeCel: c,
							faixas: o
						}).classes, s);
					}(t, e, n.nivel, n.faixas);
					self.postMessage({
						tipo: "previa",
						pedidoId: n.pedidoId,
						...o
					}, [o.imagem.buffer]);
					return;
				}
				t = A(n), e = {
					semente: n.semente,
					raioDaSementeM: n.raioDaSementeM
				};
				const r = I(n, t);
				self.postMessage({
					tipo: "pronto",
					...r
				}, r.poligonos ? [(o = r.poligonos).estrutura.buffer, o.xy.buffer] : []);
			} catch (r) {
				self.postMessage({
					tipo: "erro",
					mensagem: r?.message ?? String(r),
					estado: r?.estado ?? null,
					pedidoId: n?.pedidoId ?? null
				});
			}
			var o;
		};
	}
})();
