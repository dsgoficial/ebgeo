(function() {
	function t(t, e, a, n) {
		const o = new Float32Array(e * a);
		for (let r = 0, s = 0; r < o.length; r++, s += 4) o[r] = 0 === t[s + 3] ? NaN : t[s] * n.fr + t[s + 1] * n.fg + t[s + 2] * n.fb - n.deslocamento;
		return {
			largura: e,
			altura: a,
			cotas: o
		};
	}
	function e(t, e, a) {
		return 40075016.686 * Math.cos(e * Math.PI / 180) / (a * 2 ** t);
	}
	const a = 1 / 7, n = 6371e3, o = [
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
	], r = Math.PI / 180;
	function s(t) {
		return Math.max(50, .002 * t);
	}
	function i(t, e, a, n) {
		const o = (n - e) * r, s = (a - t) * r, i = Math.sin(o / 2) ** 2 + Math.cos(e * r) * Math.cos(n * r) * Math.sin(s / 2) ** 2;
		return 12742e3 * Math.asin(Math.min(1, Math.sqrt(i)));
	}
	function c(t, a, n, o = 3e3) {
		const r = t.map(({ zoom: t, ate: o }) => ({
			ate: o,
			passo: .5 * e(t, a, n)
		})), s = r[r.length - 1];
		return (t) => {
			if (!(t < o)) return Infinity;
			for (const e of r) if (t <= e.ate) return e.passo;
			return s.passo;
		};
	}
	const l = .1, u = Math.round(3600), f = Math.PI / 180;
	function h(t, e) {
		const a = Math.sin(Math.max(-85.051129, Math.min(85.051129, e)) * Math.PI / 180);
		return {
			u: ((t + 180) % 360 + 360) % 360 / 360,
			v: .5 - Math.log((1 + a) / (1 - a)) / (4 * Math.PI)
		};
	}
	function m(t, e, a, n) {
		const o = a * e, r = n * e;
		return Math.floor(o) !== t.x || Math.floor(r) !== t.y ? NaN : function(t, e, a) {
			const { largura: n, altura: o, cotas: r } = t, s = Math.max(0, Math.min(n - 1, e - .5)), i = Math.max(0, Math.min(o - 1, a - .5)), c = Math.floor(s), l = Math.floor(i), u = Math.min(n - 1, c + 1), f = Math.min(o - 1, l + 1), h = s - c, m = i - l;
			return (r[l * n + c] * (1 - h) + r[l * n + u] * h) * (1 - m) + (r[f * n + c] * (1 - h) + r[f * n + u] * h) * m;
		}(t, (o - t.x) * t.largura, (r - t.y) * t.altura);
	}
	function M(t, e, a, n, o) {
		const r = o * f, s = (n - a) * f;
		return (Math.atan2(Math.sin(s) * Math.cos(r), e * Math.sin(r) - t * Math.cos(r) * Math.cos(s)) / f % 360 + 360) % 360;
	}
	function d({ centro: t, distancias: e }) {
		if (!Array.isArray(t) || !Number.isFinite(t[0]) || !Number.isFinite(t[1])) throw new Error("montarGrade: centro inválido");
		if (!(e instanceof Float32Array) || e.length < 2) throw new Error("montarGrade: distancias deve ser um Float32Array com ao menos 2 valores");
		const a = e.length, o = new Float32Array(u * a).fill(NaN), c = {
			nAz: u,
			nDist: a,
			passoAzGraus: l,
			centro: [t[0], t[1]],
			distancias: e,
			cotaCentro: NaN,
			altura: o
		}, d = new Float64Array(u), p = new Float64Array(u);
		for (let n = 0; n < u; n++) d[n] = Math.sin(n * l * f), p[n] = Math.cos(n * l * f);
		const w = Math.sin(t[1] * f), y = Math.cos(t[1] * f), b = new Float64Array(a), N = new Float64Array(a);
		for (let r = 0; r < a; r++) b[r] = Math.sin(e[r] / n), N[r] = Math.cos(e[r] / n);
		let x = Infinity;
		const F = (e, a, n) => [t[0] + Math.atan2(d[e] * b[a] * y, N[a] - w * n) / f, Math.asin(n) / f], z = (t, e) => Math.max(-1, Math.min(1, w * N[e] + y * b[e] * p[t])), A = (t) => {
			let n = 0, o = a;
			for (; n < o;) {
				const a = n + o >> 1;
				e[a] < t ? n = a + 1 : o = a;
			}
			return n;
		};
		return {
			grade: c,
			amostrarFuncao(n) {
				const r = n(t[0], t[1], 0);
				c.cotaCentro = Number.isFinite(r) ? r : NaN;
				for (let t = 0; t < u; t++) {
					const r = t * a;
					for (let s = 0; s < a; s++) {
						const [a, i] = F(t, s, z(t, s)), c = n(a, i, e[s]);
						o[r + s] = Number.isFinite(c) ? c : NaN;
					}
				}
			},
			amostrarTile(e) {
				if (!(e?.z <= x)) throw new Error(`montarGrade: tiles fora de ordem (z${e?.z} depois de z${x}); o mais detalhado vem primeiro`);
				x = e.z;
				const n = 2 ** e.z, g = function(t, e, a) {
					const n = 2 ** t, o = (t) => Math.atan(Math.sinh(Math.PI * (1 - 2 * t / n))) / r;
					return {
						oeste: e / n * 360 - 180,
						leste: (e + 1) / n * 360 - 180,
						norte: o(a),
						sul: o(a + 1)
					};
				}(e.z, e.x, e.y), { perto: F, longe: z } = function(t, e) {
					const [a, n] = t, o = Math.max(e.oeste, Math.min(e.leste, a)), r = Math.max(e.sul, Math.min(e.norte, n));
					return {
						perto: o === a && r === n ? 0 : i(a, n, o, r),
						longe: Math.max(i(a, n, e.oeste, e.norte), i(a, n, e.leste, e.norte), i(a, n, e.oeste, e.sul), i(a, n, e.leste, e.sul))
					};
				}(t, g);
				if (0 === F && Number.isNaN(c.cotaCentro)) {
					const { u: a, v: o } = h(t[0], t[1]), r = m(e, n, a, o);
					Number.isFinite(r) && (c.cotaCentro = r);
				}
				const v = A(F - s(F)), I = A(z + s(z) + 1e-9) - 1;
				if (I < v) return {
					examinados: 0,
					gravados: 0
				};
				const [P, C] = function(e, a) {
					if (a < (e.norte - e.sul) * f * 6371e3) return null;
					const n = M(w, y, t[0], (e.oeste + e.leste) / 2, (e.norte + e.sul) / 2);
					let o = Infinity, r = -Infinity;
					for (let c = 0; c <= 16; c++) {
						const a = c / 16, s = e.oeste + a * (e.leste - e.oeste), i = e.sul + a * (e.norte - e.sul);
						for (const [c, l] of [
							[s, e.norte],
							[s, e.sul],
							[e.oeste, i],
							[e.leste, i]
						]) {
							const e = (M(w, y, t[0], c, l) - n + 540) % 360 - 180;
							e < o && (o = e), e > r && (r = e);
						}
					}
					if (r - o > 170) return null;
					const s = Math.floor((n + o) / l) - 2, i = Math.ceil((n + r) / l) + 2;
					return [(s % u + u) % u, Math.min(u, i - s + 1)];
				}(g, F) ?? [0, u], G = 1e-9, B = Math.sin(g.sul * f) - G, D = Math.sin(g.norte * f) + G, E = Math.tan((g.oeste - t[0]) * f), L = Math.tan((g.leste - t[0]) * f);
				let T = 0, $ = 0;
				for (let r = 0; r < C; r++) {
					const s = (P + r) % u, i = s * a, c = d[s], l = p[s];
					for (let a = v; a <= I; a++) {
						if (!Number.isNaN(o[i + a])) continue;
						T++;
						const r = Math.max(-1, Math.min(1, w * N[a] + y * b[a] * l));
						if (r < B || r > D) continue;
						const s = c * b[a] * y, u = N[a] - w * r;
						if (s < u * E - G * u || s > u * L + G * u) continue;
						const { u: M, v: d } = h(t[0] + Math.atan2(s, u) / f, Math.asin(r) / f), g = m(e, n, M, d);
						Number.isNaN(g) || (o[i + a] = g, $++);
					}
				}
				return {
					examinados: T,
					gravados: $
				};
			},
			concluir(t) {
				const n = function(t, e, a, n) {
					const o = e.length, r = new Float32Array(u * o * 3), s = l * f, i = new Int32Array(o), c = new Int32Array(o), h = new Int32Array(o);
					for (let l = 0; l < o; l++) {
						let t = 1;
						for (; e[Math.min(o - 1, l + t)] - e[Math.max(0, l - t)] < 1 && (l - t > 0 || l + t < o - 1);) t++;
						i[l] = Math.max(0, l - t), c[l] = Math.min(o - 1, l + t);
						const a = (e[c[l]] - e[i[l]]) / 2;
						h[l] = Math.max(1, Math.min(u / 8, Math.ceil(a / (e[l] * s))));
					}
					const m = (e, a) => t[(e % u + u) % u * o + a];
					for (let l = 0; l < u; l++) for (let u = 0; u < o; u++) {
						const f = 3 * (l * o + u), M = t[l * o + u];
						if (Number.isNaN(M)) {
							r[f] = 0, r[f + 1] = 0, r[f + 2] = 1;
							continue;
						}
						const d = i[u], p = c[u], w = g(d < u ? m(l, d) : NaN, M, p > u ? m(l, p) : NaN, e[u] - e[d], e[p] - e[u]), y = h[u], b = e[u] * Math.sin(y * s), N = g(m(l - y, u), M, m(l + y, u), b, b), x = w * a[l] + N * n[l], F = w * n[l] - N * a[l], z = 1 / Math.sqrt(x * x + F * F + 1);
						r[f] = -x * z, r[f + 1] = -F * z, r[f + 2] = z;
					}
					return r;
				}(o, e, d, p), r = new Float64Array(a);
				for (let o = 0; o < a; o++) r[o] = t(e[o]);
				for (let e = 0; e < u; e++) {
					const t = e * a;
					for (let e = 0; e < a; e++) o[t + e] -= r[e];
				}
				return {
					...c,
					normal: n
				};
			}
		};
	}
	function g(t, e, a, n, o) {
		const r = !Number.isNaN(t), s = !Number.isNaN(a);
		return r && s ? (a - t) / (n + o) : s ? (a - e) / o : r ? (e - t) / n : 0;
	}
	function p({ centro: t, alcance: e, aneis: a = o, larguraPx: n }) {
		return function({ inicio: t = 2, fim: e = 1e5, razao: a = 1.01, passoMaximo: n } = {}) {
			if (!(Number.isFinite(t) && t > 0)) throw new Error(`distanciasDaGrade: inicio inválido (${t})`);
			if (!(Number.isFinite(e) && e > t)) throw new Error(`distanciasDaGrade: fim inválido (${e})`);
			if (!(Number.isFinite(a) && a > 1)) throw new Error(`distanciasDaGrade: razao inválida (${a})`);
			const o = "function" == typeof n ? n : () => n ?? Infinity, r = [];
			for (let s = t; s < e;) {
				r.push(s);
				const t = o(s);
				s += t > 0 ? Math.min(s * (a - 1), t) : s * (a - 1);
			}
			if (r.length > 1) {
				const t = r[r.length - 1];
				e - t < .01 * (t - r[r.length - 2]) && r.pop();
			}
			return r.push(e), Float32Array.from(r);
		}({
			fim: e,
			razao: 1.01,
			passoMaximo: c(a, t[1], n)
		});
	}
	const w = (t) => function(t, e = .14285714285714285) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * t * (1 - e) / 12742e3;
	}(t, a);
	async function y({ url: t, headers: e }) {
		const a = new AbortController(), n = setTimeout(() => a.abort(), 3e4);
		try {
			const n = await fetch(t, {
				headers: e,
				signal: a.signal
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
	"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = async ({ data: e }) => {
		try {
			const a = await async function(e, a) {
				const { centro: n, alcance: r, aneis: s = o } = e, i = e.fatores ?? function(t = {}) {
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
				}({ encoding: "mapbox" }), c = e.tiles.map((t, e) => ({
					...t,
					i: e
				})).sort((t, e) => e.z - t.z || t.i - e.i), l = c.length, u = function() {
					let t = null, e = null;
					return async (a) => {
						const n = await createImageBitmap(a, {
							premultiplyAlpha: "none",
							colorSpaceConversion: "none"
						}), { width: o, height: r } = n;
						return t && t.width === o && t.height === r || (t = new OffscreenCanvas(o, r), e = t.getContext("2d", { willReadFrequently: !0 })), e.clearRect(0, 0, o, r), e.drawImage(n, 0, 0), n.close(), {
							rgba: e.getImageData(0, 0, o, r).data,
							largura: o,
							altura: r
						};
					};
				}(), f = c.map(() => {
					let t;
					return {
						promessa: new Promise((e) => {
							t = e;
						}),
						resolver: t
					};
				});
				let h = 0, m = 0, M = 0, g = 0, b = 0;
				const N = [], x = () => {
					for (; N.length && N[0].i < h + 12;) N.shift().continuar();
				}, F = (t) => t < h + 12 ? null : new Promise((e) => {
					N.push({
						i: t,
						continuar: e
					});
				}), z = performance.now();
				let A = z, v = 0;
				const I = Promise.all(Array.from({ length: Math.min(6, l) }, async () => {
					for (; v < l;) {
						const t = v++;
						await F(t);
						const e = await y(c[t]);
						m++, e && (M += e.size, g += e.size, b = Math.max(b, g)), A = performance.now(), a({
							tipo: "progresso",
							baixados: m,
							total: l,
							bytes: M
						}), f[t].resolver(e);
					}
				}));
				let P = null, C = 0, G = 0, B = 0, D = 0, E = 0;
				for (let o = 0; o < l; o++) {
					let e = await f[o].promessa;
					if (f[o].promessa = null, h++, x(), !e) continue;
					const a = e.size;
					let l = null;
					const m = performance.now();
					try {
						const a = await u(e), n = t(a.rgba, a.largura, a.altura, i);
						D = Math.max(D, a.rgba.byteLength + n.cotas.byteLength), E += n.cotas.byteLength, l = {
							z: c[o].z,
							x: c[o].x,
							y: c[o].y,
							...n
						};
					} catch (S) {
						l = null;
					}
					e = null, g -= a;
					const M = performance.now();
					G += M - m, l && (C++, P || (P = d({
						centro: n,
						distancias: p({
							centro: n,
							alcance: r,
							aneis: s,
							larguraPx: l.largura
						})
					})), P.amostrarTile(l), l = null, B += performance.now() - M);
				}
				await I;
				const L = performance.now();
				P || (P = d({
					centro: n,
					distancias: p({
						centro: n,
						alcance: r,
						aneis: s,
						larguraPx: 512
					})
				}));
				const T = P.concluir(w), $ = performance.now();
				B += $ - L;
				const q = T.altura.byteLength + T.normal.byteLength + T.distancias.byteLength;
				return {
					tipo: "pronto",
					grade: T,
					tempos: {
						downloadMs: A - z,
						decodeMs: G,
						gradeMs: B,
						totalMs: $ - z
					},
					bytes: M,
					tiles: {
						pedidos: l,
						recebidos: C,
						falhas: l - C
					},
					memoria: {
						gradeBytes: q,
						picoTilesBytes: D,
						picoBlobsBytes: b,
						tilesDecodificadosBytes: E
					}
				};
			}(e, (t) => self.postMessage(t)), { grade: n } = a;
			self.postMessage(a, [
				n.altura.buffer,
				n.normal.buffer,
				n.distancias.buffer
			]);
		} catch (a) {
			self.postMessage({
				tipo: "erro",
				mensagem: a?.message ?? String(a)
			});
		}
	});
})();
