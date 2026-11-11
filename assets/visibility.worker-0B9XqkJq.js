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
	function o(o, n) {
		const { w: e, h: r } = o, a = new Array(r);
		for (let s = 0; s < r; s++) {
			const o = s * e;
			if (s > 0) {
				let t = !0;
				for (let r = 0; r < e; r++) if (n[o + r] !== n[o - e + r]) {
					t = !1;
					break;
				}
				if (t) {
					a[s] = "";
					continue;
				}
			}
			let r = "", l = 0;
			for (; l < e;) {
				const a = n[o + l];
				let s = 1;
				for (; l + s < e && n[o + l + s] === a;) s++;
				r += (s > 1 ? s.toString(36) : "") + t(a), l += s;
			}
			a[s] = r;
		}
		return {
			origem: [o.lonW, o.latN],
			passoGraus: [o.dLon, o.dLat],
			largura: e,
			altura: r,
			celulaM: o.passo,
			rle: a.join("/")
		};
	}
	const n = (t) => 8 === t ? 1 : t << 1, e = (t) => 1 === t ? 8 : t >> 1;
	function r(t, o, r) {
		const a = o + 1, s = new Uint8Array(a * (r + 1)), l = (n, e) => n >= 0 && e >= 0 && n < o && e < r && 1 === t[e * o + n];
		for (let n = 0; n < r; n++) for (let e = 0; e < o; e++) t[n * o + e] && (l(e, n - 1) || (s[n * a + e] |= 1), l(e + 1, n) || (s[n * a + e + 1] |= 2), l(e, n + 1) || (s[(n + 1) * a + e + 1] |= 4), l(e - 1, n) || (s[(n + 1) * a + e] |= 8));
		const c = (t) => 1 === t ? 1 : 4 === t ? -1 : 2 === t ? a : -a, i = (t, n) => {
			const e = t % a, r = (t - e) / a;
			return 1 === n ? r * o + e : 2 === n ? r * o + e - 1 : 4 === n ? (r - 1) * o + e - 1 : (r - 1) * o + e;
		}, f = function(t, o, n) {
			const e = new Int32Array(o * n).fill(-1), r = (t) => {
				for (; e[t] !== t;) e[t] = e[e[t]], t = e[t];
				return t;
			};
			for (let a = 0; a < n; a++) for (let n = 0; n < o; n++) {
				const s = a * o + n;
				if (t[s] && (e[s] = s, n > 0 && t[s - 1] && (e[r(s)] = r(s - 1)), a > 0 && t[s - o])) {
					const t = r(s), n = r(s - o);
					t !== n && (e[t] = n);
				}
			}
			return r;
		}(t, o, r), u = /* @__PURE__ */ new Map();
		for (let m = 0; m < s.length; m++) for (; s[m];) {
			const t = s[m] & -s[m], o = [m];
			let r = m, l = t, h = 0;
			for (;;) {
				s[r] &= ~l;
				const i = r + c(l), f = r % a, u = i % a;
				h += f * ((i - u) / a) - u * ((r - f) / a);
				let M = 0, d = !1;
				for (const o of [
					n(l),
					l,
					e(l)
				]) {
					if (i === m && o === t) {
						d = !0;
						break;
					}
					if (s[i] & o) {
						M = o;
						break;
					}
				}
				if (d) {
					o.push(m);
					break;
				}
				if (!M) throw new Error("anel aberto na poligonização");
				M !== l && o.push(i), r = i, l = M;
			}
			const M = f(i(m, t));
			let d = u.get(M);
			d || (d = {
				externo: null,
				furos: []
			}, u.set(M, d)), h > 0 ? d.externo = o : d.furos.push(o);
		}
		const h = (t) => t.map((t) => {
			const o = t % a;
			return [o, (t - o) / a];
		}), M = [];
		for (const n of u.values()) {
			if (!n.externo) throw new Error("componente sem anel externo");
			M.push([h(n.externo), ...n.furos.map(h)]);
		}
		return M;
	}
	const a = Object.freeze([
		0,
		25,
		50,
		100,
		200,
		500
	]), s = Object.freeze([
		"visivel",
		"morto",
		"altura"
	]);
	function l(t) {
		let o = 0;
		for (; o < a.length && t > a[o];) o++;
		return o;
	}
	function c(t, o) {
		return 1 + 7 * Math.min(t, 3) + o;
	}
	function i(t) {
		return s.includes(t) ? t : "visivel";
	}
	function f(t, o) {
		const n = function(t) {
			return 0 === t || 255 === t ? -1 : Math.floor((t - 1) / 7);
		}(t);
		return n < 0 ? 0 : "altura" === o ? 5 + function(t) {
			return 0 === t || 255 === t ? -1 : (t - 1) % 7;
		}(t) : 0 === n ? 4 : "morto" === o ? 0 : n;
	}
	Object.freeze({
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
		...Array.from({ length: 7 }, (t, o) => ({
			n: 5 + o,
			modos: ["altura"]
		}))
	]);
	const u = 6371e3;
	function h(t, o = .14285714285714285) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * t * (1 - o) / 12742e3;
	}
	const M = Math.PI / 180, m = 180 / Math.PI, d = 2 * Math.PI;
	function p(t, o) {
		if ("setor" !== t.forma) return !0;
		let n = o * m - t.rumo;
		return n = (n % 360 + 540) % 360 - 180, Math.abs(n) <= t.abertura / 2;
	}
	function g(t, o, { alturaAlvo: n, passo: e, k: r = .14285714285714285, teto: a = 4e6, aoProgredir: s = null }) {
		const i = function(t, o, n = 4e6) {
			const { oeste: e, sul: r, leste: a, norte: s } = function(t) {
				let o = -90, n = 90, e = 180, r = -180;
				for (const a of t) {
					const t = a.alcance / u * m, s = t / Math.cos(a.lat * M);
					o = Math.max(o, a.lat + t), n = Math.min(n, a.lat - t), e = Math.min(e, a.lng - s), r = Math.max(r, a.lng + s);
				}
				return {
					oeste: e,
					sul: n,
					leste: r,
					norte: o
				};
			}(t), l = Math.cos((s + r) / 2 * M), c = (t) => {
				const o = t / u * m, n = o / l;
				return {
					dLat: o,
					dLon: n,
					w: Math.max(1, Math.ceil((a - e) / n)),
					h: Math.max(1, Math.ceil((s - r) / o))
				};
			};
			let i = o, f = c(i), h = !1;
			return f.w * f.h > n && (i *= 1.001 * Math.sqrt(f.w * f.h / n), f = c(i), h = !0), {
				lonW: e,
				latN: s,
				dLon: f.dLon,
				dLat: f.dLat,
				w: f.w,
				h: f.h,
				passo: i,
				engrossou: h
			};
		}(t, e, a), { lonW: f, latN: g, dLon: w, dLat: y, w: v, h: b } = i, x = v * b, A = new Uint8Array(x), N = new Float32Array(x).fill(1 / 0), z = [], O = [];
		t.forEach((e, a) => {
			const l = function(t, o, { passo: n, k: e = .14285714285714285 }) {
				if (!(n > 0 && t.alcance > 0)) throw new Error("passo e alcance precisam ser positivos");
				const r = o(t.lat, t.lng);
				if (!Number.isFinite(r)) return null;
				const a = r + t.alturaOlho, s = t.alcance, l = Math.max(1, Math.floor(s / n)), c = Math.max(360, Math.ceil(d / (n / s))), i = d / c, f = l + 1, p = new Float32Array(c * f).fill(NaN), g = new Float64Array(f), w = new Float64Array(f), y = new Float64Array(f);
				for (let M = 1; M <= l; M++) {
					const t = M * n / u;
					g[M] = Math.sin(t), w[M] = Math.cos(t), y[M] = h(M * n, e);
				}
				const v = t.lat * M, b = Math.sin(v), x = Math.cos(v);
				let A = 0, N = c - 1;
				if ("setor" === t.forma) {
					const o = (t.rumo - t.abertura / 2) * M, n = (t.rumo + t.abertura / 2) * M;
					A = Math.floor(o / i) - 1, N = Math.ceil(n / i) + 1;
				}
				for (let u = A; u <= N; u++) {
					const e = (u % c + c) % c, r = e * i, s = Math.sin(r), h = Math.cos(r), M = e * f;
					p[M] = 0;
					let d = -1 / 0;
					for (let c = 1; c <= l; c++) {
						const e = b * w[c] + x * g[c] * h, r = o(Math.asin(e) * m, t.lng + Math.atan2(s * g[c] * x, w[c] - b * e) * m);
						if (!Number.isFinite(r)) continue;
						const l = c * n, i = r - y[c], f = a + l * d - i;
						p[M + c] = f > 0 ? f : 0;
						const u = (i - a) / l;
						u > d && (d = u);
					}
				}
				return {
					lat: t.lat,
					lon: t.lng,
					zo: a,
					passo: n,
					alcance: s,
					nRaios: c,
					nAmostras: l,
					dTheta: i,
					hMin: p
				};
			}(e, o, {
				passo: i.passo,
				k: r
			});
			if (!l) return O.push(a), z.push(null), void (s && s((a + 1) / t.length));
			const c = l.lat * M, x = Math.sin(c), F = Math.cos(c), L = Math.sin(l.alcance / 12742e3) ** 2, j = l.alcance / u * m, P = j / Math.cos(c), k = Math.max(0, Math.floor((g - (l.lat + j)) / y)), I = Math.min(b - 1, Math.ceil((g - (l.lat - j)) / y)), U = Math.max(0, Math.floor((l.lon - P - f) / w)), T = Math.min(v - 1, Math.ceil((l.lon + P - f) / w)), E = T - U + 1, W = new Float64Array(E), R = new Float64Array(E), S = new Float64Array(E);
			for (let t = U; t <= T; t++) {
				const o = (f + (t + .5) * w - l.lon) * M;
				W[t - U] = Math.sin(o / 2) ** 2, R[t - U] = Math.sin(o), S[t - U] = Math.cos(o);
			}
			const $ = l.nAmostras + 1;
			let q = 0, C = 0;
			for (let t = k; t <= I; t++) {
				const o = (g - (t + .5) * y) * M, r = Math.sin(o), a = Math.cos(o), s = Math.sin((o - c) / 2) ** 2, i = F * a;
				for (let c = U; c <= T; c++) {
					const o = c - U, f = s + i * W[o];
					if (f > L) continue;
					let u = Math.atan2(R[o] * a, F * r - x * a * S[o]);
					if (u < 0 && (u += d), !p(e, u)) continue;
					const h = 12742e3 * Math.asin(Math.sqrt(f)), M = Math.min(l.nAmostras, Math.round(h / l.passo));
					let m = Math.round(u / l.dTheta);
					m >= l.nRaios && (m -= l.nRaios);
					const g = t * v + c, w = l.hMin[m * $ + M];
					w >= 0 ? (q++, N[g] <= w || (N[g] = w), n >= w && (C++, A[g] < 255 && A[g]++)) : N[g] === 1 / 0 && (N[g] = NaN);
				}
			}
			z.push(q > 0 ? Math.round(1e3 * C / q) / 10 : null), s && s((a + 1) / t.length);
		});
		const F = new Uint8Array(x);
		let L = 0, j = 0, P = 0;
		for (let u = 0; u < x; u++) {
			const t = N[u];
			t !== 1 / 0 ? Number.isNaN(t) ? (F[u] = 255, P++) : (L++, A[u] > 0 && j++, F[u] = c(A[u], l(t))) : F[u] = 0;
		}
		return {
			grade: i,
			valores: F,
			resumo: {
				vistoPct: L > 0 ? Math.round(1e3 * j / L) / 10 : 0,
				vistoPorObservador: z,
				celulaM: Math.round(10 * i.passo) / 10,
				semTerreno: P > 0,
				engrossou: i.engrossou
			},
			semTerrenoNoObservador: O
		};
	}
	const w = (t) => `${t.z}/${t.x}/${t.y}`;
	function y(t, n = () => {}) {
		const { observadores: e, alturaAlvo: a, zoom: s, passo: l, tiles: c } = t, u = i(t.modo), { grade: M, valores: m, resumo: d, semTerrenoNoObservador: p } = g(e, function(t, o) {
			if (!o.length) return () => NaN;
			let n = 1 / 0, e = 1 / 0, r = -1 / 0, a = -1 / 0;
			for (const i of o) n = Math.min(n, i.x), e = Math.min(e, i.y), r = Math.max(r, i.x), a = Math.max(a, i.y);
			const s = r - n + 1, l = new Array(s * (a - e + 1)).fill(null);
			for (const i of o) l[(i.y - e) * s + (i.x - n)] = i;
			const c = o[0].largura;
			return (o, i) => {
				const f = function(t, o, n, e) {
					const r = 2 ** n, a = Math.max(-85.051129, Math.min(85.051129, o)), s = (((t + 180) % 360 + 360) % 360 - 180 + 180) / 360 * r, l = Math.sin(a * Math.PI / 180), c = (.5 - Math.log((1 + l) / (1 - l)) / (4 * Math.PI)) * r, i = Math.min(r - 1, Math.max(0, Math.floor(s))), f = Math.min(r - 1, Math.max(0, Math.floor(c))), u = (t) => Math.min(e, Math.max(0, t * e));
					return {
						z: n,
						x: i,
						y: f,
						px: u(s - i),
						py: u(c - f)
					};
				}(i, o, t, c);
				if (f.x < n || f.x > r || f.y < e || f.y > a) return NaN;
				const u = l[(f.y - e) * s + (f.x - n)];
				return u ? function(t, o, n) {
					const { largura: e, altura: r, cotas: a } = t, s = Math.max(0, Math.min(e - 1, o - .5)), l = Math.max(0, Math.min(r - 1, n - .5)), c = Math.floor(s), i = Math.floor(l), f = Math.min(e - 1, c + 1), u = Math.min(r - 1, i + 1), h = s - c, M = l - i;
					return (a[i * e + c] * (1 - h) + a[i * e + f] * h) * (1 - M) + (a[u * e + c] * (1 - h) + a[u * e + f] * h) * M;
				}(u, f.px, f.py) : NaN;
			};
		}(s, c), {
			alturaAlvo: a,
			passo: l,
			aoProgredir: n
		});
		let w = null;
		try {
			w = function(t) {
				let o = 1, n = 0;
				for (const { coordinates: l } of t) {
					o += 2;
					for (const t of l) {
						o += 1 + t.length;
						for (const o of t) n += 2 * o.length;
					}
				}
				const e = new Uint32Array(o), r = new Float64Array(n);
				let a = 0, s = 0;
				e[a++] = t.length;
				for (const { classe: l, coordinates: c } of t) {
					e[a++] = l, e[a++] = c.length;
					for (const t of c) {
						e[a++] = t.length;
						for (const o of t) {
							e[a++] = o.length;
							for (const [t, n] of o) r[s++] = t, r[s++] = n;
						}
					}
				}
				return {
					estrutura: e,
					xy: r
				};
			}(function(t, o, n) {
				const e = i(n), { w: a, h: s, lonW: l, latN: c, dLon: u, dLat: h } = t, M = /* @__PURE__ */ new Uint8Array(256);
				for (let r = 0; r < 256; r++) M[r] = f(r, e);
				const m = new Uint8Array(a * s), d = (t) => Math.round(1e6 * t) / 1e6, p = [];
				for (const g of function(t, o) {
					const n = i(o), e = /* @__PURE__ */ new Uint8Array(12), r = (/* @__PURE__ */ new Int8Array(256)).fill(-1);
					for (let s = 0; s < t.length; s++) {
						const o = t[s];
						let a = r[o];
						a < 0 && (a = f(o, n), r[o] = a), a > 0 && (e[a] = 1);
					}
					const a = [];
					for (let s = 1; s <= 11; s++) e[s] && a.push(s);
					return a;
				}(o, e)) {
					for (let t = 0; t < o.length; t++) m[t] = M[o[t]] === g ? 1 : 0;
					p.push({
						classe: g,
						coordinates: r(m, a, s).map((t) => t.map((t) => t.map(([t, o]) => [d(l + t * u), d(c - o * h)])))
					});
				}
				return p;
			}(M, m, u));
		} catch (y) {}
		return {
			grade: o(M, m),
			resumo: d,
			modo: u,
			semTerrenoNoObservador: p,
			poligonos: w
		};
	}
	if ("undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window) {
		const t = /* @__PURE__ */ new Map();
		self.onmessage = ({ data: o }) => {
			const n = o?.id ?? null;
			try {
				for (const n of o.tiles ?? []) t.set(w(n), n);
				const r = (o.chaves ?? []).map((o) => t.get(o)).filter(Boolean), a = y({
					...o,
					tiles: r
				}, (t) => self.postMessage({
					tipo: "progresso",
					id: n,
					fracao: t
				}));
				self.postMessage({
					tipo: "pronto",
					id: n,
					...a
				}, a.poligonos ? [(e = a.poligonos).estrutura.buffer, e.xy.buffer] : []);
			} catch (r) {
				self.postMessage({
					tipo: "erro",
					id: n,
					mensagem: r?.message ?? String(r)
				});
			}
			var e;
		};
	}
})();
