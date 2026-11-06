(function() {
	function t(t, a, e, n) {
		const r = new Float32Array(a * e);
		for (let o = 0, s = 0; o < r.length; o++, s += 4) r[o] = 0 === t[s + 3] ? NaN : t[s] * n.fr + t[s + 1] * n.fg + t[s + 2] * n.fb - n.deslocamento;
		return {
			largura: a,
			altura: e,
			cotas: r
		};
	}
	function a(t, a, e) {
		return 40075016.686 * Math.cos(a * Math.PI / 180) / (e * 2 ** t);
	}
	function e(t, a, e, n, [r, o, s, i]) {
		const { largura: c, altura: l, cotas: u } = t, f = 2 ** a, h = Array.from({ length: c }, (t, a) => {
			const n = (e + (a + .5) / c) / f * 360 - 180;
			return n >= r && n <= s;
		}), m = Array.from({ length: l }, (t, a) => {
			const e = 180 * Math.atan(Math.sinh(Math.PI * (1 - 2 * (n + (a + .5) / l) / f))) / Math.PI;
			return e >= o && e <= i;
		});
		if (h.every(Boolean) && m.every(Boolean)) return t;
		const M = Float32Array.from(u);
		for (let d = 0, g = 0; d < l; d++) for (let t = 0; t < c; t++, g++) m[d] && h[t] || (M[g] = NaN);
		return {
			largura: c,
			altura: l,
			cotas: M
		};
	}
	const n = 1 / 7, r = 6371e3, o = [
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
	function c(t, a, e, n) {
		const r = (n - a) * s, o = (e - t) * s, i = Math.sin(r / 2) ** 2 + Math.cos(a * s) * Math.cos(n * s) * Math.sin(o / 2) ** 2;
		return 12742e3 * Math.asin(Math.min(1, Math.sqrt(i)));
	}
	function l(t, e, n, r = 3e3) {
		const o = t.map(({ zoom: t, ate: r }) => ({
			ate: r,
			passo: .5 * a(t, e, n)
		})), s = o[o.length - 1];
		return (t) => {
			if (!(t < r)) return 1 / 0;
			for (const a of o) if (t <= a.ate) return a.passo;
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
		const r = e * a, o = n * a;
		return Math.floor(r) !== t.x || Math.floor(o) !== t.y ? NaN : function(t, a, e) {
			const { largura: n, altura: r, cotas: o } = t, s = Math.max(0, Math.min(n - 1, a - .5)), i = Math.max(0, Math.min(r - 1, e - .5)), c = Math.floor(s), l = Math.floor(i), u = Math.min(n - 1, c + 1), f = Math.min(r - 1, l + 1), h = s - c, m = i - l;
			return (o[l * n + c] * (1 - h) + o[l * n + u] * h) * (1 - m) + (o[f * n + c] * (1 - h) + o[f * n + u] * h) * m;
		}(t, (r - t.x) * t.largura, (o - t.y) * t.altura);
	}
	function d(t, a, e, n, r) {
		const o = r * h, s = (n - e) * h;
		return (Math.atan2(Math.sin(s) * Math.cos(o), a * Math.sin(o) - t * Math.cos(o) * Math.cos(s)) / h % 360 + 360) % 360;
	}
	function g({ centro: t, distancias: a }) {
		if (!Array.isArray(t) || !Number.isFinite(t[0]) || !Number.isFinite(t[1])) throw new Error("montarGrade: centro inválido");
		if (!(a instanceof Float32Array) || a.length < 2) throw new Error("montarGrade: distancias deve ser um Float32Array com ao menos 2 valores");
		const e = a.length, n = new Float32Array(f * e).fill(NaN), o = {
			nAz: f,
			nDist: e,
			passoAzGraus: u,
			centro: [t[0], t[1]],
			distancias: a,
			cotaCentro: NaN,
			altura: n
		}, l = new Float64Array(f), g = new Float64Array(f);
		for (let r = 0; r < f; r++) l[r] = Math.sin(r * u * h), g[r] = Math.cos(r * u * h);
		const p = Math.sin(t[1] * h), w = Math.cos(t[1] * h), N = new Float64Array(e), b = new Float64Array(e);
		for (let s = 0; s < e; s++) N[s] = Math.sin(a[s] / r), b[s] = Math.cos(a[s] / r);
		let x = 1 / 0;
		const F = (a, e, n) => [t[0] + Math.atan2(l[a] * N[e] * w, b[e] - p * n) / h, Math.asin(n) / h], z = (t, a) => Math.max(-1, Math.min(1, p * b[a] + w * N[a] * g[t])), A = (t) => {
			let n = 0, r = e;
			for (; n < r;) {
				const e = n + r >> 1;
				a[e] < t ? n = e + 1 : r = e;
			}
			return n;
		};
		return {
			grade: o,
			amostrarFuncao(r) {
				const s = r(t[0], t[1], 0);
				o.cotaCentro = Number.isFinite(s) ? s : NaN;
				for (let t = 0; t < f; t++) {
					const o = t * e;
					for (let s = 0; s < e; s++) {
						const [e, i] = F(t, s, z(t, s)), c = r(e, i, a[s]);
						n[o + s] = Number.isFinite(c) ? c : NaN;
					}
				}
			},
			amostrarTile(a) {
				if (!(a?.z <= x)) throw new Error(`montarGrade: tiles fora de ordem (z${a?.z} depois de z${x}); o mais detalhado vem primeiro`);
				x = a.z;
				const r = 2 ** a.z, y = function(t, a, e) {
					const n = 2 ** t, r = (t) => Math.atan(Math.sinh(Math.PI * (1 - 2 * t / n))) / s;
					return {
						oeste: a / n * 360 - 180,
						leste: (a + 1) / n * 360 - 180,
						norte: r(e),
						sul: r(e + 1)
					};
				}(a.z, a.x, a.y), { perto: F, longe: z } = function(t, a) {
					const [e, n] = t, r = Math.max(a.oeste, Math.min(a.leste, e)), o = Math.max(a.sul, Math.min(a.norte, n));
					return {
						perto: r === e && o === n ? 0 : c(e, n, r, o),
						longe: Math.max(c(e, n, a.oeste, a.norte), c(e, n, a.leste, a.norte), c(e, n, a.oeste, a.sul), c(e, n, a.leste, a.sul))
					};
				}(t, y);
				if (0 === F && Number.isNaN(o.cotaCentro)) {
					const { u: e, v: n } = m(t[0], t[1]), s = M(a, r, e, n);
					Number.isFinite(s) && (o.cotaCentro = s);
				}
				const v = A(F - i(F)), I = A(z + i(z) + 1e-9) - 1;
				if (I < v) return {
					examinados: 0,
					gravados: 0
				};
				const [P, B] = function(a, e) {
					if (e < (a.norte - a.sul) * h * 6371e3) return null;
					const n = d(p, w, t[0], (a.oeste + a.leste) / 2, (a.norte + a.sul) / 2);
					let r = 1 / 0, o = -1 / 0;
					for (let c = 0; c <= 16; c++) {
						const e = c / 16, s = a.oeste + e * (a.leste - a.oeste), i = a.sul + e * (a.norte - a.sul);
						for (const [c, l] of [
							[s, a.norte],
							[s, a.sul],
							[a.oeste, i],
							[a.leste, i]
						]) {
							const a = (d(p, w, t[0], c, l) - n + 540) % 360 - 180;
							a < r && (r = a), a > o && (o = a);
						}
					}
					if (o - r > 170) return null;
					const s = Math.floor((n + r) / u) - 2, i = Math.ceil((n + o) / u) + 2;
					return [(s % f + f) % f, Math.min(f, i - s + 1)];
				}(y, F) ?? [0, f], C = 1e-9, G = Math.sin(y.sul * h) - C, D = Math.sin(y.norte * h) + C, E = Math.tan((y.oeste - t[0]) * h), L = Math.tan((y.leste - t[0]) * h);
				let T = 0, $ = 0;
				for (let o = 0; o < B; o++) {
					const s = (P + o) % f, i = s * e, c = l[s], u = g[s];
					for (let e = v; e <= I; e++) {
						if (!Number.isNaN(n[i + e])) continue;
						T++;
						const o = Math.max(-1, Math.min(1, p * b[e] + w * N[e] * u));
						if (o < G || o > D) continue;
						const s = c * N[e] * w, l = b[e] - p * o;
						if (s < l * E - C * l || s > l * L + C * l) continue;
						const { u: f, v: d } = m(t[0] + Math.atan2(s, l) / h, Math.asin(o) / h), g = M(a, r, f, d);
						Number.isNaN(g) || (n[i + e] = g, $++);
					}
				}
				return {
					examinados: T,
					gravados: $
				};
			},
			concluir(t) {
				const r = function(t, a, e, n) {
					const r = a.length, o = new Float32Array(f * r * 3), s = u * h, i = new Int32Array(r), c = new Int32Array(r), l = new Int32Array(r);
					for (let u = 0; u < r; u++) {
						let t = 1;
						for (; a[Math.min(r - 1, u + t)] - a[Math.max(0, u - t)] < 1 && (u - t > 0 || u + t < r - 1);) t++;
						i[u] = Math.max(0, u - t), c[u] = Math.min(r - 1, u + t);
						const e = (a[c[u]] - a[i[u]]) / 2;
						l[u] = Math.max(1, Math.min(f / 8, Math.ceil(e / (a[u] * s))));
					}
					const m = (a, e) => t[(a % f + f) % f * r + e];
					for (let u = 0; u < f; u++) for (let f = 0; f < r; f++) {
						const h = 3 * (u * r + f), M = t[u * r + f];
						if (Number.isNaN(M)) {
							o[h] = 0, o[h + 1] = 0, o[h + 2] = 1;
							continue;
						}
						const d = i[f], g = c[f], p = y(d < f ? m(u, d) : NaN, M, g > f ? m(u, g) : NaN, a[f] - a[d], a[g] - a[f]), w = l[f], N = a[f] * Math.sin(w * s), b = y(m(u - w, f), M, m(u + w, f), N, N), x = p * e[u] + b * n[u], F = p * n[u] - b * e[u], z = 1 / Math.sqrt(x * x + F * F + 1);
						o[h] = -x * z, o[h + 1] = -F * z, o[h + 2] = z;
					}
					return o;
				}(n, a, l, g), s = new Float64Array(e);
				for (let n = 0; n < e; n++) s[n] = t(a[n]);
				for (let a = 0; a < f; a++) {
					const t = a * e;
					for (let a = 0; a < e; a++) n[t + a] -= s[a];
				}
				return {
					...o,
					normal: r
				};
			}
		};
	}
	function y(t, a, e, n, r) {
		const o = !Number.isNaN(t), s = !Number.isNaN(e);
		return o && s ? (e - t) / (n + r) : s ? (e - a) / r : o ? (a - t) / n : 0;
	}
	function p({ centro: t, alcance: a, aneis: e = o, larguraPx: n }) {
		return function({ inicio: t = 2, fim: a = 1e5, razao: e = 1.01, passoMaximo: n } = {}) {
			if (!(Number.isFinite(t) && t > 0)) throw new Error(`distanciasDaGrade: inicio inválido (${t})`);
			if (!(Number.isFinite(a) && a > t)) throw new Error(`distanciasDaGrade: fim inválido (${a})`);
			if (!(Number.isFinite(e) && e > 1)) throw new Error(`distanciasDaGrade: razao inválida (${e})`);
			const r = "function" == typeof n ? n : () => n ?? 1 / 0, o = [];
			for (let s = t; s < a;) {
				o.push(s);
				const t = r(s);
				s += t > 0 ? Math.min(s * (e - 1), t) : s * (e - 1);
			}
			if (o.length > 1) {
				const t = o[o.length - 1];
				a - t < .01 * (t - o[o.length - 2]) && o.pop();
			}
			return o.push(a), Float32Array.from(o);
		}({
			fim: a,
			razao: 1.01,
			passoMaximo: l(e, t[1], n)
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
			const r = await n.blob();
			return r.size ? r : null;
		} catch (r) {
			return null;
		} finally {
			clearTimeout(n);
		}
	}
	"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = async ({ data: a }) => {
		try {
			const n = await async function(a, n) {
				const { centro: r, alcance: s, aneis: i = o, limites: c = null } = a, l = a.fatores ?? function(t = {}) {
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
						}), { width: r, height: o } = n;
						return t && t.width === r && t.height === o || (t = new OffscreenCanvas(r, o), a = t.getContext("2d", { willReadFrequently: !0 })), a.clearRect(0, 0, r, o), a.drawImage(n, 0, 0), n.close(), {
							rgba: a.getImageData(0, 0, r, o).data,
							largura: r,
							altura: o
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
				const F = [], z = () => {
					for (; F.length && F[0].i < M + 12;) F.shift().continuar();
				}, A = (t) => t < M + 12 ? null : new Promise((a) => {
					F.push({
						i: t,
						continuar: a
					});
				}), v = performance.now();
				let I = v, P = 0;
				const B = Promise.all(Array.from({ length: Math.min(6, f) }, async () => {
					for (; P < f;) {
						const t = P++;
						await A(t);
						const a = await N(u[t]);
						d++, a && (y += a.size, b += a.size, x = Math.max(x, b)), I = performance.now(), n({
							tipo: "progresso",
							baixados: d,
							total: f,
							bytes: y
						}), m[t].resolver(a);
					}
				}));
				let C = null, G = 0, D = 0, E = 0, L = 0, T = 0;
				for (let o = 0; o < f; o++) {
					let a = await m[o].promessa;
					if (m[o].promessa = null, M++, z(), !a) continue;
					const n = a.size;
					let f = null;
					const d = performance.now();
					try {
						const n = await h(a), r = t(n.rgba, n.largura, n.altura, l);
						L = Math.max(L, n.rgba.byteLength + r.cotas.byteLength), T += r.cotas.byteLength;
						const { z: s, x: i, y: m } = u[o];
						f = {
							z: s,
							x: i,
							y: m,
							...c ? e(r, s, i, m, c) : r
						};
					} catch (k) {
						f = null;
					}
					a = null, b -= n;
					const y = performance.now();
					D += y - d, f && (G++, C || (C = g({
						centro: r,
						distancias: p({
							centro: r,
							alcance: s,
							aneis: i,
							larguraPx: f.largura
						})
					})), C.amostrarTile(f), f = null, E += performance.now() - y);
				}
				await B;
				const $ = performance.now();
				C || (C = g({
					centro: r,
					distancias: p({
						centro: r,
						alcance: s,
						aneis: i,
						larguraPx: 512
					})
				}));
				const q = C.concluir(w), S = performance.now();
				E += S - $;
				const R = q.altura.byteLength + q.normal.byteLength + q.distancias.byteLength;
				return {
					tipo: "pronto",
					grade: q,
					tempos: {
						downloadMs: I - v,
						decodeMs: D,
						gradeMs: E,
						totalMs: S - v
					},
					bytes: y,
					tiles: {
						pedidos: f,
						recebidos: G,
						falhas: f - G
					},
					memoria: {
						gradeBytes: R,
						picoTilesBytes: L,
						picoBlobsBytes: x,
						tilesDecodificadosBytes: T
					}
				};
			}(a, (t) => self.postMessage(t)), { grade: r } = n;
			self.postMessage(n, [
				r.altura.buffer,
				r.normal.buffer,
				r.distancias.buffer
			]);
		} catch (n) {
			self.postMessage({
				tipo: "erro",
				mensagem: n?.message ?? String(n)
			});
		}
	});
})();
