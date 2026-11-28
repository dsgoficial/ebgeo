(function() {
	function t(t, a, e, n) {
		const o = new Float32Array(a * e);
		for (let r = 0, s = 0; r < o.length; r++, s += 4) o[r] = 0 === t[s + 3] ? NaN : t[s] * n.fr + t[s + 1] * n.fg + t[s + 2] * n.fb - n.deslocamento;
		return {
			largura: a,
			altura: e,
			cotas: o
		};
	}
	function a(t, a, e) {
		return 40075016.686 * Math.cos(a * Math.PI / 180) / (e * 2 ** t);
	}
	function e(t, a, e, n, [o, r, s, i]) {
		const { largura: l, altura: c, cotas: u } = t, f = 2 ** a, h = Array.from({ length: l }, (t, a) => {
			const n = (e + (a + .5) / l) / f * 360 - 180;
			return n >= o && n <= s;
		}), m = Array.from({ length: c }, (t, a) => {
			const e = 180 * Math.atan(Math.sinh(Math.PI * (1 - 2 * (n + (a + .5) / c) / f))) / Math.PI;
			return e >= r && e <= i;
		});
		if (h.every(Boolean) && m.every(Boolean)) return t;
		const M = Float32Array.from(u);
		for (let d = 0, g = 0; d < c; d++) for (let t = 0; t < l; t++, g++) m[d] && h[t] || (M[g] = NaN);
		return {
			largura: l,
			altura: c,
			cotas: M
		};
	}
	const n = 1 / 7, o = 6371e3, r = [
		{
			zoom: 12,
			ate: 15e3
		},
		{
			zoom: 11,
			ate: 4e4
		},
		{
			zoom: 10,
			ate: 1e5
		}
	], s = Math.PI / 180;
	function i(t) {
		return Math.max(50, .002 * t);
	}
	function l(t, a, e, n) {
		const o = (n - a) * s, r = (e - t) * s, i = Math.sin(o / 2) ** 2 + Math.cos(a * s) * Math.cos(n * s) * Math.sin(r / 2) ** 2;
		return 12742e3 * Math.asin(Math.min(1, Math.sqrt(i)));
	}
	function c(t, e, n, o = 3e3) {
		const r = t.map(({ zoom: t, ate: o }) => ({
			ate: o,
			passo: .5 * a(t, e, n)
		})), s = r[r.length - 1];
		return (t) => {
			if (!(t < o)) return 1 / 0;
			for (const a of r) if (t <= a.ate) return a.passo;
			return s.passo;
		};
	}
	const u = .1, f = Math.round(3600), h = Math.PI / 180;
	function m(t, a) {
		const e = Math.sin(Math.max(-85.051129, Math.min(85.051129, a)) * Math.PI / 180);
		return {
			u: ((t + 180) % 360 + 360) % 360 / 360,
			v: .5 - Math.log((1 + e) / (1 - e)) / (4 * Math.PI)
		};
	}
	function M(t, a, e, n) {
		const o = e * a, r = n * a;
		return Math.floor(o) !== t.x || Math.floor(r) !== t.y ? NaN : function(t, a, e) {
			const { largura: n, altura: o, cotas: r } = t, s = Math.max(0, Math.min(n - 1, a - .5)), i = Math.max(0, Math.min(o - 1, e - .5)), l = Math.floor(s), c = Math.floor(i), u = Math.min(n - 1, l + 1), f = Math.min(o - 1, c + 1), h = s - l, m = i - c;
			return (r[c * n + l] * (1 - h) + r[c * n + u] * h) * (1 - m) + (r[f * n + l] * (1 - h) + r[f * n + u] * h) * m;
		}(t, (o - t.x) * t.largura, (r - t.y) * t.altura);
	}
	function d(t, a, e, n, o) {
		const r = o * h, s = (n - e) * h;
		return (Math.atan2(Math.sin(s) * Math.cos(r), a * Math.sin(r) - t * Math.cos(r) * Math.cos(s)) / h % 360 + 360) % 360;
	}
	function g({ centro: t, distancias: a, normaisEmBytes: e = !1 }) {
		if (!Array.isArray(t) || !Number.isFinite(t[0]) || !Number.isFinite(t[1])) throw new Error("montarGrade: centro inválido");
		if (!(a instanceof Float32Array) || a.length < 2) throw new Error("montarGrade: distancias deve ser um Float32Array com ao menos 2 valores");
		const n = a.length, r = new Float32Array(f * n).fill(NaN), c = {
			nAz: f,
			nDist: n,
			passoAzGraus: u,
			centro: [t[0], t[1]],
			distancias: a,
			cotaCentro: NaN,
			altura: r
		}, g = new Float64Array(f), p = new Float64Array(f);
		for (let o = 0; o < f; o++) g[o] = Math.sin(o * u * h), p[o] = Math.cos(o * u * h);
		const w = Math.sin(t[1] * h), N = Math.cos(t[1] * h), b = new Float64Array(n), x = new Float64Array(n);
		for (let s = 0; s < n; s++) b[s] = Math.sin(a[s] / o), x[s] = Math.cos(a[s] / o);
		let F = 1 / 0;
		const A = (a, e, n) => [t[0] + Math.atan2(g[a] * b[e] * N, x[e] - w * n) / h, Math.asin(n) / h], z = (t, a) => Math.max(-1, Math.min(1, w * x[a] + N * b[a] * p[t])), v = (t) => {
			let e = 0, o = n;
			for (; e < o;) {
				const n = e + o >> 1;
				a[n] < t ? e = n + 1 : o = n;
			}
			return e;
		};
		return {
			grade: c,
			amostrarFuncao(e) {
				const o = e(t[0], t[1], 0);
				c.cotaCentro = Number.isFinite(o) ? o : NaN;
				for (let t = 0; t < f; t++) {
					const o = t * n;
					for (let s = 0; s < n; s++) {
						const [n, i] = A(t, s, z(t, s)), l = e(n, i, a[s]);
						r[o + s] = Number.isFinite(l) ? l : NaN;
					}
				}
			},
			amostrarTile(a) {
				if (!(a?.z <= F)) throw new Error(`montarGrade: tiles fora de ordem (z${a?.z} depois de z${F}); o mais detalhado vem primeiro`);
				F = a.z;
				const e = 2 ** a.z, o = function(t, a, e) {
					const n = 2 ** t, o = (t) => Math.atan(Math.sinh(Math.PI * (1 - 2 * t / n))) / s;
					return {
						oeste: a / n * 360 - 180,
						leste: (a + 1) / n * 360 - 180,
						norte: o(e),
						sul: o(e + 1)
					};
				}(a.z, a.x, a.y), { perto: y, longe: A } = function(t, a) {
					const [e, n] = t, o = Math.max(a.oeste, Math.min(a.leste, e)), r = Math.max(a.sul, Math.min(a.norte, n));
					return {
						perto: o === e && r === n ? 0 : l(e, n, o, r),
						longe: Math.max(l(e, n, a.oeste, a.norte), l(e, n, a.leste, a.norte), l(e, n, a.oeste, a.sul), l(e, n, a.leste, a.sul))
					};
				}(t, o);
				if (0 === y && Number.isNaN(c.cotaCentro)) {
					const { u: n, v: o } = m(t[0], t[1]), r = M(a, e, n, o);
					Number.isFinite(r) && (c.cotaCentro = r);
				}
				const z = v(y - i(y)), I = v(A + i(A) + 1e-9) - 1;
				if (I < z) return {
					examinados: 0,
					gravados: 0
				};
				const [P, B] = function(a, e) {
					if (e < (a.norte - a.sul) * h * 6371e3) return null;
					const n = d(w, N, t[0], (a.oeste + a.leste) / 2, (a.norte + a.sul) / 2);
					let o = 1 / 0, r = -1 / 0;
					for (let l = 0; l <= 16; l++) {
						const e = l / 16, s = a.oeste + e * (a.leste - a.oeste), i = a.sul + e * (a.norte - a.sul);
						for (const [l, c] of [
							[s, a.norte],
							[s, a.sul],
							[a.oeste, i],
							[a.leste, i]
						]) {
							const a = (d(w, N, t[0], l, c) - n + 540) % 360 - 180;
							a < o && (o = a), a > r && (r = a);
						}
					}
					if (r - o > 170) return null;
					const s = Math.floor((n + o) / u) - 2, i = Math.ceil((n + r) / u) + 2;
					return [(s % f + f) % f, Math.min(f, i - s + 1)];
				}(o, y) ?? [0, f], E = 1e-9, C = Math.sin(o.sul * h) - E, G = Math.sin(o.norte * h) + E, D = Math.tan((o.oeste - t[0]) * h), L = Math.tan((o.leste - t[0]) * h);
				let T = 0, $ = 0;
				for (let s = 0; s < B; s++) {
					const o = (P + s) % f, i = o * n, l = g[o], c = p[o];
					for (let n = z; n <= I; n++) {
						if (!Number.isNaN(r[i + n])) continue;
						T++;
						const o = Math.max(-1, Math.min(1, w * x[n] + N * b[n] * c));
						if (o < C || o > G) continue;
						const s = l * b[n] * N, u = x[n] - w * o;
						if (s < u * D - E * u || s > u * L + E * u) continue;
						const { u: f, v: d } = m(t[0] + Math.atan2(s, u) / h, Math.asin(o) / h), g = M(a, e, f, d);
						Number.isNaN(g) || (r[i + n] = g, $++);
					}
				}
				return {
					examinados: T,
					gravados: $
				};
			},
			concluir(t) {
				const o = function(t, a, e, n, o = !1) {
					const r = a.length, s = o ? new Int8Array(f * r * 3) : new Float32Array(f * r * 3), i = o ? 127 : 1, l = u * h, c = new Int32Array(r), m = new Int32Array(r), M = new Int32Array(r);
					for (let u = 0; u < r; u++) {
						let t = 1;
						for (; a[Math.min(r - 1, u + t)] - a[Math.max(0, u - t)] < 1 && (u - t > 0 || u + t < r - 1);) t++;
						c[u] = Math.max(0, u - t), m[u] = Math.min(r - 1, u + t);
						const e = (a[m[u]] - a[c[u]]) / 2;
						M[u] = Math.max(1, Math.min(f / 8, Math.ceil(e / (a[u] * l))));
					}
					const d = (a, e) => t[(a % f + f) % f * r + e];
					for (let u = 0; u < f; u++) for (let f = 0; f < r; f++) {
						const h = 3 * (u * r + f), g = t[u * r + f];
						if (Number.isNaN(g)) {
							s[h] = 0, s[h + 1] = 0, s[h + 2] = i;
							continue;
						}
						const p = c[f], w = m[f], N = y(p < f ? d(u, p) : NaN, g, w > f ? d(u, w) : NaN, a[f] - a[p], a[w] - a[f]), b = M[f], x = a[f] * Math.sin(b * l), F = y(d(u - b, f), g, d(u + b, f), x, x), A = N * e[u] + F * n[u], z = N * n[u] - F * e[u], v = 1 / Math.sqrt(A * A + z * z + 1);
						o ? (s[h] = Math.floor(127 * Math.fround(-A * v) + .5), s[h + 1] = Math.floor(127 * Math.fround(-z * v) + .5), s[h + 2] = Math.floor(127 * Math.fround(v) + .5)) : (s[h] = -A * v, s[h + 1] = -z * v, s[h + 2] = v);
					}
					return s;
				}(r, a, g, p, e), s = new Float64Array(n);
				for (let e = 0; e < n; e++) s[e] = t(a[e]);
				for (let a = 0; a < f; a++) {
					const t = a * n;
					for (let a = 0; a < n; a++) r[t + a] -= s[a];
				}
				return {
					...c,
					normal: o
				};
			}
		};
	}
	function y(t, a, e, n, o) {
		const r = !Number.isNaN(t), s = !Number.isNaN(e);
		return r && s ? (e - t) / (n + o) : s ? (e - a) / o : r ? (a - t) / n : 0;
	}
	function p({ centro: t, alcance: a, aneis: e = r, larguraPx: n }) {
		return function({ inicio: t = 2, fim: a = 1e5, razao: e = 1.01, passoMaximo: n } = {}) {
			if (!(Number.isFinite(t) && t > 0)) throw new Error(`distanciasDaGrade: inicio inválido (${t})`);
			if (!(Number.isFinite(a) && a > t)) throw new Error(`distanciasDaGrade: fim inválido (${a})`);
			if (!(Number.isFinite(e) && e > 1)) throw new Error(`distanciasDaGrade: razao inválida (${e})`);
			const o = "function" == typeof n ? n : () => n ?? 1 / 0, r = [];
			for (let s = t; s < a;) {
				r.push(s);
				const t = o(s);
				s += t > 0 ? Math.min(s * (e - 1), t) : s * (e - 1);
			}
			if (r.length > 1) {
				const t = r[r.length - 1];
				a - t < .01 * (t - r[r.length - 2]) && r.pop();
			}
			return r.push(a), Float32Array.from(r);
		}({
			fim: a,
			razao: 1.01,
			passoMaximo: c(e, t[1], n)
		});
	}
	const w = (t) => function(t, a = .14285714285714285) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * t * (1 - a) / 12742e3;
	}(t, n);
	async function N({ url: t, headers: a }) {
		const e = new AbortController(), n = setTimeout(() => e.abort(), 3e4);
		try {
			const n = await fetch(t, {
				headers: a,
				signal: e.signal
			});
			if (!n.ok || 204 === n.status) return null;
			const o = await n.blob();
			return o.size ? o : null;
		} catch (o) {
			return null;
		} finally {
			clearTimeout(n);
		}
	}
	"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = async ({ data: a }) => {
		try {
			const n = await async function(a, n) {
				const { centro: o, alcance: s, aneis: i = r, limites: l = null } = a, c = a.fatores ?? function(t = {}) {
					return "terrarium" === t.encoding ? {
						fr: 256,
						fg: 1,
						fb: 1 / 256,
						deslocamento: 32768
					} : "custom" === t.encoding ? {
						fr: Number(t.redFactor) || 0,
						fg: Number(t.greenFactor) || 0,
						fb: Number(t.blueFactor) || 0,
						deslocamento: Number(t.baseShift) || 0
					} : {
						fr: 6553.6,
						fg: 25.6,
						fb: .1,
						deslocamento: 1e4
					};
				}({ encoding: "mapbox" }), u = a.tiles.map((t, a) => ({
					...t,
					i: a
				})).sort((t, a) => a.z - t.z || t.i - a.i), f = u.length, h = function() {
					let t = null, a = null;
					return async (e) => {
						const n = await createImageBitmap(e, {
							premultiplyAlpha: "none",
							colorSpaceConversion: "none"
						}), { width: o, height: r } = n;
						return t && t.width === o && t.height === r || (t = new OffscreenCanvas(o, r), a = t.getContext("2d", { willReadFrequently: !0 })), a.clearRect(0, 0, o, r), a.drawImage(n, 0, 0), n.close(), {
							rgba: a.getImageData(0, 0, o, r).data,
							largura: o,
							altura: r
						};
					};
				}(), m = u.map(() => {
					let t;
					return {
						promessa: new Promise((a) => {
							t = a;
						}),
						resolver: t
					};
				});
				let M = 0, d = 0, y = 0, b = 0, x = 0;
				const F = [], A = () => {
					for (; F.length && F[0].i < M + 12;) F.shift().continuar();
				}, z = (t) => t < M + 12 ? null : new Promise((a) => {
					F.push({
						i: t,
						continuar: a
					});
				}), v = performance.now();
				let I = v, P = 0;
				const B = Promise.all(Array.from({ length: Math.min(6, f) }, async () => {
					for (; P < f;) {
						const t = P++;
						await z(t);
						const a = await N(u[t]);
						d++, a && (y += a.size, b += a.size, x = Math.max(x, b)), I = performance.now(), n({
							tipo: "progresso",
							baixados: d,
							total: f,
							bytes: y
						}), m[t].resolver(a);
					}
				}));
				let E = null, C = 0, G = 0, D = 0, L = 0, T = 0;
				for (let r = 0; r < f; r++) {
					let a = await m[r].promessa;
					if (m[r].promessa = null, M++, A(), !a) continue;
					const n = a.size;
					let f = null;
					const d = performance.now();
					try {
						const n = await h(a), o = t(n.rgba, n.largura, n.altura, c);
						L = Math.max(L, n.rgba.byteLength + o.cotas.byteLength), T += o.cotas.byteLength;
						const { z: s, x: i, y: m } = u[r];
						f = {
							z: s,
							x: i,
							y: m,
							...l ? e(o, s, i, m, l) : o
						};
					} catch (k) {
						f = null;
					}
					a = null, b -= n;
					const y = performance.now();
					G += y - d, f && (C++, E || (E = g({
						centro: o,
						distancias: p({
							centro: o,
							alcance: s,
							aneis: i,
							larguraPx: f.largura
						}),
						normaisEmBytes: !0
					})), E.amostrarTile(f), f = null, D += performance.now() - y);
				}
				await B;
				const $ = performance.now();
				E || (E = g({
					centro: o,
					distancias: p({
						centro: o,
						alcance: s,
						aneis: i,
						larguraPx: 512
					}),
					normaisEmBytes: !0
				}));
				const q = E.concluir(w), S = performance.now();
				D += S - $;
				const R = q.altura.byteLength + q.normal.byteLength + q.distancias.byteLength;
				return {
					tipo: "pronto",
					grade: q,
					tempos: {
						downloadMs: I - v,
						decodeMs: G,
						gradeMs: D,
						totalMs: S - v
					},
					bytes: y,
					tiles: {
						pedidos: f,
						recebidos: C,
						falhas: f - C
					},
					memoria: {
						gradeBytes: R,
						picoTilesBytes: L,
						picoBlobsBytes: x,
						tilesDecodificadosBytes: T
					}
				};
			}(a, (t) => self.postMessage(t)), { grade: o } = n;
			self.postMessage(n, [
				o.altura.buffer,
				o.normal.buffer,
				o.distancias.buffer
			]);
		} catch (n) {
			self.postMessage({
				tipo: "erro",
				mensagem: n?.message ?? String(n)
			});
		}
	});
})();
