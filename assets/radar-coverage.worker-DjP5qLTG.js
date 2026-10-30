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
		const { w: a, h: e } = o, r = new Array(e);
		for (let s = 0; s < e; s++) {
			const o = s * a;
			if (s > 0) {
				let t = !0;
				for (let e = 0; e < a; e++) if (n[o + e] !== n[o - a + e]) {
					t = !1;
					break;
				}
				if (t) {
					r[s] = "";
					continue;
				}
			}
			let e = "", l = 0;
			for (; l < a;) {
				const r = n[o + l];
				let s = 1;
				for (; l + s < a && n[o + l + s] === r;) s++;
				e += (s > 1 ? s.toString(36) : "") + t(r), l += s;
			}
			r[s] = e;
		}
		return {
			origem: [o.lonW, o.latN],
			passoGraus: [o.dLon, o.dLat],
			largura: a,
			altura: e,
			celulaM: o.passo,
			rle: r.join("/")
		};
	}
	const n = (t) => 8 === t ? 1 : t << 1, a = (t) => 1 === t ? 8 : t >> 1;
	function e(t, o, e) {
		const r = o + 1, s = new Uint8Array(r * (e + 1)), l = (n, a) => n >= 0 && a >= 0 && n < o && a < e && 1 === t[a * o + n];
		for (let n = 0; n < e; n++) for (let a = 0; a < o; a++) t[n * o + a] && (l(a, n - 1) || (s[n * r + a] |= 1), l(a + 1, n) || (s[n * r + a + 1] |= 2), l(a, n + 1) || (s[(n + 1) * r + a + 1] |= 4), l(a - 1, n) || (s[(n + 1) * r + a] |= 8));
		const c = (t) => 1 === t ? 1 : 4 === t ? -1 : 2 === t ? r : -r, i = (t, n) => {
			const a = t % r, e = (t - a) / r;
			return 1 === n ? e * o + a : 2 === n ? e * o + a - 1 : 4 === n ? (e - 1) * o + a - 1 : (e - 1) * o + a;
		}, f = function(t, o, n) {
			const a = new Int32Array(o * n).fill(-1), e = (t) => {
				for (; a[t] !== t;) a[t] = a[a[t]], t = a[t];
				return t;
			};
			for (let r = 0; r < n; r++) for (let n = 0; n < o; n++) {
				const s = r * o + n;
				if (t[s] && (a[s] = s, n > 0 && t[s - 1] && (a[e(s)] = e(s - 1)), r > 0 && t[s - o])) {
					const t = e(s), n = e(s - o);
					t !== n && (a[t] = n);
				}
			}
			return e;
		}(t, o, e), h = /* @__PURE__ */ new Map();
		for (let m = 0; m < s.length; m++) for (; s[m];) {
			const t = s[m] & -s[m], o = [m];
			let e = m, l = t, u = 0;
			for (;;) {
				s[e] &= ~l;
				const i = e + c(l), f = e % r, h = i % r;
				u += f * ((i - h) / r) - h * ((e - f) / r);
				let M = 0, p = !1;
				for (const o of [
					n(l),
					l,
					a(l)
				]) {
					if (i === m && o === t) {
						p = !0;
						break;
					}
					if (s[i] & o) {
						M = o;
						break;
					}
				}
				if (p) {
					o.push(m);
					break;
				}
				if (!M) throw new Error("anel aberto na poligonização");
				M !== l && o.push(i), e = i, l = M;
			}
			const M = f(i(m, t));
			let p = h.get(M);
			p || (p = {
				externo: null,
				furos: []
			}, h.set(M, p)), u > 0 ? p.externo = o : p.furos.push(o);
		}
		const u = (t) => t.map((t) => {
			const o = t % r;
			return [o, (t - o) / r];
		}), M = [];
		for (const n of h.values()) {
			if (!n.externo) throw new Error("componente sem anel externo");
			M.push([u(n.externo), ...n.furos.map(u)]);
		}
		return M;
	}
	function r(t) {
		try {
			return function(t) {
				let o = 1, n = 0;
				for (const { coordinates: l } of t) {
					o += 2;
					for (const t of l) {
						o += 1 + t.length;
						for (const o of t) n += 2 * o.length;
					}
				}
				const a = new Uint32Array(o), e = new Float64Array(n);
				let r = 0, s = 0;
				a[r++] = t.length;
				for (const { classe: l, coordinates: c } of t) {
					a[r++] = l, a[r++] = c.length;
					for (const t of c) {
						a[r++] = t.length;
						for (const o of t) {
							a[r++] = o.length;
							for (const [t, n] of o) e[s++] = t, e[s++] = n;
						}
					}
				}
				return {
					estrutura: a,
					xy: e
				};
			}(t());
		} catch (o) {
			return null;
		}
	}
	const s = 6371e3;
	function l(t, o = .14285714285714285) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * t * (1 - o) / 12742e3;
	}
	const c = Math.PI / 180, i = 180 / Math.PI, f = 2 * Math.PI;
	var h = class extends Error {
		constructor(t) {
			super(`O sensor ${t} está fora do relevo disponível.`), this.name = "ErroSensorSemTerreno", this.sensor = t;
		}
	};
	function u(t, o) {
		const n = new Array(5).fill(0);
		let a = 0, e = 0, r = 0;
		for (let s = 0; s < t.h; s++) {
			const l = (t.latN - s * t.dLat) * c, i = (t.latN - (s + 1) * t.dLat) * c, f = 40589641 * t.dLon * c * (Math.sin(l) - Math.sin(i));
			for (let c = 0; c < t.w; c++) {
				const l = o[s * t.w + c];
				255 !== l ? (l > 0 && (a += f, n[Math.min(l, 4)] += f), l > e && (e = l)) : r++;
			}
		}
		return {
			areaCobertaKm2: a,
			maiorContagem: e,
			semTerreno: r,
			areaPorClasse: n,
			celulaM: t.passo
		};
	}
	function M(t, n = () => {}) {
		const { sensores: a, alvo: M, zoom: m, tiles: p, passo: g } = t, w = function(t, o) {
			if (!o.length) return () => NaN;
			let n = 1 / 0, a = 1 / 0, e = -1 / 0, r = -1 / 0;
			for (const i of o) n = Math.min(n, i.x), a = Math.min(a, i.y), e = Math.max(e, i.x), r = Math.max(r, i.y);
			const s = e - n + 1, l = new Array(s * (r - a + 1)).fill(null);
			for (const i of o) l[(i.y - a) * s + (i.x - n)] = i;
			const c = o[0].largura;
			return (o, i) => {
				const f = function(t, o, n, a) {
					const e = 2 ** n, r = Math.max(-85.051129, Math.min(85.051129, o)), s = (((t + 180) % 360 + 360) % 360 - 180 + 180) / 360 * e, l = Math.sin(r * Math.PI / 180), c = (.5 - Math.log((1 + l) / (1 - l)) / (4 * Math.PI)) * e, i = Math.min(e - 1, Math.max(0, Math.floor(s))), f = Math.min(e - 1, Math.max(0, Math.floor(c))), h = (t) => Math.min(a, Math.max(0, t * a));
					return {
						z: n,
						x: i,
						y: f,
						px: h(s - i),
						py: h(c - f)
					};
				}(i, o, t, c);
				if (f.x < n || f.x > e || f.y < a || f.y > r) return NaN;
				const h = l[(f.y - a) * s + (f.x - n)];
				return h ? function(t, o, n) {
					const { largura: a, altura: e, cotas: r } = t, s = Math.max(0, Math.min(a - 1, o - .5)), l = Math.max(0, Math.min(e - 1, n - .5)), c = Math.floor(s), i = Math.floor(l), f = Math.min(a - 1, c + 1), h = Math.min(e - 1, i + 1), u = s - c, M = l - i;
					return (r[i * a + c] * (1 - u) + r[i * a + f] * u) * (1 - M) + (r[h * a + c] * (1 - u) + r[h * a + f] * u) * M;
				}(h, f.px, f.py) : NaN;
			};
		}(m, p), d = function(t, o, n = 4e6) {
			const { oeste: a, sul: e, leste: r, norte: l } = function(t) {
				let o = -90, n = 90, a = 180, e = -180;
				for (const r of t) {
					const t = r.alcance / s * i, l = t / Math.cos(r.lat * c);
					o = Math.max(o, r.lat + t), n = Math.min(n, r.lat - t), a = Math.min(a, r.lon - l), e = Math.max(e, r.lon + l);
				}
				return {
					oeste: a,
					sul: n,
					leste: e,
					norte: o
				};
			}(t), f = Math.cos((l + e) / 2 * c), h = (t) => {
				const o = t / s * i, n = o / f;
				return {
					dLat: o,
					dLon: n,
					w: Math.ceil((r - a) / n),
					h: Math.ceil((l - e) / o)
				};
			};
			let u = o, M = h(u), m = !1;
			return M.w * M.h > n && (u *= 1.001 * Math.sqrt(M.w * M.h / n), M = h(u), m = !0), {
				lonW: a,
				latN: l,
				dLon: M.dLon,
				dLat: M.dLat,
				w: M.w,
				h: M.h,
				passo: u,
				engrossou: m
			};
		}(a, g), y = a.map((t, o) => function(t, o, { passo: n, k: a = .25, aoProgredir: e = null }) {
			if (!(n > 0 && t.alcance > 0)) throw new Error("passo e alcance precisam ser positivos");
			const r = o(t.lat, t.lon);
			if (!Number.isFinite(r)) throw new h(t.nome);
			const u = r + t.alturaAntena, M = t.alcance, m = Math.max(1, Math.floor(M / n)), p = Math.max(360, Math.ceil(f / (n / M))), g = f / p, w = m + 1, d = new Float32Array(p * w), y = new Float64Array(w), x = new Float64Array(w), A = new Float64Array(w);
			for (let c = 1; c <= m; c++) {
				const t = c * n / s;
				y[c] = Math.sin(t), x[c] = Math.cos(t), A[c] = l(c * n, a);
			}
			const N = t.lat * c, b = Math.sin(N), L = Math.cos(N);
			for (let s = 0; s < p; s++) {
				const a = s * g, r = Math.sin(a), l = Math.cos(a), c = s * w;
				d[c] = 0;
				let f = -1 / 0;
				for (let e = 1; e <= m; e++) {
					const a = b * x[e] + L * y[e] * l, s = o(Math.asin(a) * i, t.lon + Math.atan2(r * y[e] * L, x[e] - b * a) * i);
					if (!Number.isFinite(s)) {
						d[c + e] = NaN;
						continue;
					}
					const h = e * n, M = s - A[e], m = u + h * f - M;
					d[c + e] = m > 0 ? m : 0;
					const p = (M - u) / h;
					p > f && (f = p);
				}
				!e || 255 & ~s || e(s / p);
			}
			return e && e(1), {
				lat: t.lat,
				lon: t.lon,
				zo: u,
				passo: n,
				alcance: M,
				nRaios: p,
				nAmostras: m,
				dTheta: g,
				hMin: d
			};
		}(t, w, {
			passo: d.passo,
			aoProgredir: (t) => n("sensores", (o + t) / a.length)
		}));
		n("contagem", 0);
		const x = function(t, o, n, a, e = null) {
			const { lonW: r, latN: l, dLon: h, dLat: u, w: M, h: m } = t, p = new Uint8Array(M * m), g = new Float32Array(M * m);
			for (let s = 0; s < m; s++) {
				const t = l - (s + .5) * u;
				for (let o = 0; o < M; o++) {
					const a = n(t, r + (o + .5) * h);
					g[s * M + o] = a, Number.isFinite(a) || (p[s * M + o] = 255);
				}
			}
			const w = "mar" === a.referencia;
			return o.forEach((t, n) => {
				const d = t.lat * c, y = Math.sin(d), x = Math.cos(d), A = Math.sin(t.alcance / 12742e3) ** 2, N = t.alcance / s * i, b = N / Math.cos(d), L = Math.max(0, Math.floor((l - (t.lat + N)) / u)), F = Math.min(m - 1, Math.ceil((l - (t.lat - N)) / u)), P = Math.max(0, Math.floor((t.lon - b - r) / h)), v = Math.min(M - 1, Math.ceil((t.lon + b - r) / h)), z = v - P + 1, E = new Float64Array(z), I = new Float64Array(z), k = new Float64Array(z);
				for (let o = P; o <= v; o++) {
					const n = (r + (o + .5) * h - t.lon) * c;
					E[o - P] = Math.sin(n / 2) ** 2, I[o - P] = Math.sin(n), k[o - P] = Math.cos(n);
				}
				const C = t.nAmostras + 1;
				for (let o = L; o <= F; o++) {
					const n = (l - (o + .5) * u) * c, e = Math.sin(n), r = Math.cos(n), s = Math.sin((n - d) / 2) ** 2, i = x * r;
					for (let l = P; l <= v; l++) {
						const n = o * M + l;
						if (255 === p[n]) continue;
						const c = l - P, h = s + i * E[c];
						if (h > A) continue;
						const u = 12742e3 * Math.asin(Math.sqrt(h)), m = Math.round(u / t.passo);
						if (m > t.nAmostras) continue;
						let d = Math.atan2(I[c] * r, x * e - y * r * k[c]);
						d < 0 && (d += f);
						let N = Math.round(d / t.dTheta);
						N >= t.nRaios && (N -= t.nRaios);
						const b = t.hMin[N * C + m];
						b >= 0 && (w ? a.altitude - g[n] : a.altitude) >= b && p[n] < 254 && p[n]++;
					}
				}
				e && e((n + 1) / o.length);
			}), p;
		}(d, y, w, M, (t) => n("contagem", t));
		return {
			grade: o(d, x),
			resumo: u(d, x),
			engrossou: d.engrossou,
			poligonos: r(() => function(t, o) {
				const { w: n, h: a, lonW: r, latN: s, dLon: l, dLat: c } = t, i = new Uint8Array(n * a), f = (t) => Math.round(1e6 * t) / 1e6, h = [];
				for (const u of function(t) {
					const o = /* @__PURE__ */ new Uint8Array(5);
					for (let a = 0; a < t.length; a++) {
						const n = t[a];
						0 !== n && 255 !== n && (o[Math.min(n, 4)] = 1);
					}
					const n = [];
					for (let a = 1; a <= 4; a++) o[a] && n.push(a);
					return n;
				}(o)) {
					for (let t = 0; t < o.length; t++) {
						const n = o[t];
						i[t] = 255 !== n && (4 === u ? n >= u : n === u) ? 1 : 0;
					}
					h.push({
						classe: u,
						coordinates: e(i, n, a).map((t) => t.map((t) => t.map(([t, o]) => [f(r + t * l), f(s - o * c)])))
					});
				}
				return h;
			}(d, x))
		};
	}
	"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = ({ data: t }) => {
		try {
			const n = M(t, (t, o) => self.postMessage({
				tipo: "progresso",
				etapa: t,
				fracao: o
			}));
			self.postMessage({
				tipo: "pronto",
				...n
			}, n.poligonos ? [(o = n.poligonos).estrutura.buffer, o.xy.buffer] : []);
		} catch (n) {
			self.postMessage({
				tipo: "erro",
				mensagem: n?.message ?? String(n),
				sensor: n?.sensor ?? null
			});
		}
		var o;
	});
})();
