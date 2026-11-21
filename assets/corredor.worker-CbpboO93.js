(function() {
	function t(t = {}) {
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
	}
	function e(t, e, a, n) {
		const o = new Float32Array(e * a);
		for (let r = 0, s = 0; r < o.length; r++, s += 4) o[r] = 0 === t[s + 3] ? NaN : t[s] * n.fr + t[s + 1] * n.fg + t[s + 2] * n.fb - n.deslocamento;
		return {
			largura: e,
			altura: a,
			cotas: o
		};
	}
	function a(t, e, a, n) {
		const o = 2 ** a, r = Math.max(-85.051129, Math.min(85.051129, e)), s = (((t + 180) % 360 + 360) % 360 - 180 + 180) / 360 * o, i = Math.sin(r * Math.PI / 180), l = (.5 - Math.log((1 + i) / (1 - i)) / (4 * Math.PI)) * o, c = Math.min(o - 1, Math.max(0, Math.floor(s))), u = Math.min(o - 1, Math.max(0, Math.floor(l))), f = (t) => Math.min(n, Math.max(0, t * n));
		return {
			z: a,
			x: c,
			y: u,
			px: f(s - c),
			py: f(l - u)
		};
	}
	function n(t, e, a) {
		return `${t}/${e}/${a}`;
	}
	function o(t, e, a) {
		return 40075016.686 * Math.cos(e * Math.PI / 180) / (a * 2 ** t);
	}
	function r(t, e, a, n, [o, r, s, i]) {
		const { largura: l, altura: c, cotas: u } = t, f = 2 ** e, h = Array.from({ length: l }, (t, e) => {
			const n = (a + (e + .5) / l) / f * 360 - 180;
			return n >= o && n <= s;
		}), m = Array.from({ length: c }, (t, e) => {
			const a = 180 * Math.atan(Math.sinh(Math.PI * (1 - 2 * (n + (e + .5) / c) / f))) / Math.PI;
			return a >= r && a <= i;
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
	const s = 1 / 7, i = 6371e3, l = [
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
	], c = Math.PI / 180;
	function u(t) {
		return Math.max(50, .002 * t);
	}
	function f(t, e, a, n) {
		const o = (n - e) * c, r = (a - t) * c, s = Math.sin(o / 2) ** 2 + Math.cos(e * c) * Math.cos(n * c) * Math.sin(r / 2) ** 2;
		return 12742e3 * Math.asin(Math.min(1, Math.sqrt(s)));
	}
	function h(t, e, a) {
		const n = 2 ** t, o = (t) => Math.atan(Math.sinh(Math.PI * (1 - 2 * t / n))) / c;
		return {
			oeste: e / n * 360 - 180,
			leste: (e + 1) / n * 360 - 180,
			norte: o(a),
			sul: o(a + 1)
		};
	}
	function m(t, e) {
		const [a, n] = t, o = Math.max(e.oeste, Math.min(e.leste, a)), r = Math.max(e.sul, Math.min(e.norte, n));
		return {
			perto: o === a && r === n ? 0 : f(a, n, o, r),
			longe: Math.max(f(a, n, e.oeste, e.norte), f(a, n, e.leste, e.norte), f(a, n, e.oeste, e.sul), f(a, n, e.leste, e.sul))
		};
	}
	function M(t, e, a, n = 3e3) {
		const r = t.map(({ zoom: t, ate: n }) => ({
			ate: n,
			passo: .5 * o(t, e, a)
		})), s = r[r.length - 1];
		return (t) => {
			if (!(t < n)) return 1 / 0;
			for (const e of r) if (t <= e.ate) return e.passo;
			return s.passo;
		};
	}
	const d = .1, g = Math.round(3600), y = Math.PI / 180;
	function p(t, e) {
		const a = Math.sin(Math.max(-85.051129, Math.min(85.051129, e)) * Math.PI / 180);
		return {
			u: ((t + 180) % 360 + 360) % 360 / 360,
			v: .5 - Math.log((1 + a) / (1 - a)) / (4 * Math.PI)
		};
	}
	function b(t, e, a, n) {
		const o = a * e, r = n * e;
		return Math.floor(o) !== t.x || Math.floor(r) !== t.y ? NaN : function(t, e, a) {
			const { largura: n, altura: o, cotas: r } = t, s = Math.max(0, Math.min(n - 1, e - .5)), i = Math.max(0, Math.min(o - 1, a - .5)), l = Math.floor(s), c = Math.floor(i), u = Math.min(n - 1, l + 1), f = Math.min(o - 1, c + 1), h = s - l, m = i - c;
			return (r[c * n + l] * (1 - h) + r[c * n + u] * h) * (1 - m) + (r[f * n + l] * (1 - h) + r[f * n + u] * h) * m;
		}(t, (o - t.x) * t.largura, (r - t.y) * t.altura);
	}
	function w(t, e, a, n, o) {
		const r = o * y, s = (n - a) * y;
		return (Math.atan2(Math.sin(s) * Math.cos(r), e * Math.sin(r) - t * Math.cos(r) * Math.cos(s)) / y % 360 + 360) % 360;
	}
	function N({ centro: t, distancias: e, normaisEmBytes: a = !1 }) {
		if (!Array.isArray(t) || !Number.isFinite(t[0]) || !Number.isFinite(t[1])) throw new Error("montarGrade: centro inválido");
		if (!(e instanceof Float32Array) || e.length < 2) throw new Error("montarGrade: distancias deve ser um Float32Array com ao menos 2 valores");
		const n = e.length, o = new Float32Array(g * n).fill(NaN), r = {
			nAz: g,
			nDist: n,
			passoAzGraus: d,
			centro: [t[0], t[1]],
			distancias: e,
			cotaCentro: NaN,
			altura: o
		}, s = new Float64Array(g), l = new Float64Array(g);
		for (let i = 0; i < g; i++) s[i] = Math.sin(i * d * y), l[i] = Math.cos(i * d * y);
		const c = Math.sin(t[1] * y), f = Math.cos(t[1] * y), M = new Float64Array(n), N = new Float64Array(n);
		for (let u = 0; u < n; u++) M[u] = Math.sin(e[u] / i), N[u] = Math.cos(e[u] / i);
		let z = 1 / 0;
		const A = (e, a, n) => [t[0] + Math.atan2(s[e] * M[a] * f, N[a] - c * n) / y, Math.asin(n) / y], F = (t, e) => Math.max(-1, Math.min(1, c * N[e] + f * M[e] * l[t])), v = (t) => {
			let a = 0, o = n;
			for (; a < o;) {
				const n = a + o >> 1;
				e[n] < t ? a = n + 1 : o = n;
			}
			return a;
		};
		return {
			grade: r,
			amostrarFuncao(a) {
				const s = a(t[0], t[1], 0);
				r.cotaCentro = Number.isFinite(s) ? s : NaN;
				for (let t = 0; t < g; t++) {
					const r = t * n;
					for (let s = 0; s < n; s++) {
						const [n, i] = A(t, s, F(t, s)), l = a(n, i, e[s]);
						o[r + s] = Number.isFinite(l) ? l : NaN;
					}
				}
			},
			amostrarTile(e) {
				if (!(e?.z <= z)) throw new Error(`montarGrade: tiles fora de ordem (z${e?.z} depois de z${z}); o mais detalhado vem primeiro`);
				z = e.z;
				const a = 2 ** e.z, i = h(e.z, e.x, e.y), { perto: x, longe: A } = m(t, i);
				if (0 === x && Number.isNaN(r.cotaCentro)) {
					const { u: n, v: o } = p(t[0], t[1]), s = b(e, a, n, o);
					Number.isFinite(s) && (r.cotaCentro = s);
				}
				const F = v(x - u(x)), D = v(A + u(A) + 1e-9) - 1;
				if (D < F) return {
					examinados: 0,
					gravados: 0
				};
				const [I, P] = function(e, a) {
					if (a < (e.norte - e.sul) * y * 6371e3) return null;
					const n = w(c, f, t[0], (e.oeste + e.leste) / 2, (e.norte + e.sul) / 2);
					let o = 1 / 0, r = -1 / 0;
					for (let l = 0; l <= 16; l++) {
						const a = l / 16, s = e.oeste + a * (e.leste - e.oeste), i = e.sul + a * (e.norte - e.sul);
						for (const [l, u] of [
							[s, e.norte],
							[s, e.sul],
							[e.oeste, i],
							[e.leste, i]
						]) {
							const e = (w(c, f, t[0], l, u) - n + 540) % 360 - 180;
							e < o && (o = e), e > r && (r = e);
						}
					}
					if (r - o > 170) return null;
					const s = Math.floor((n + o) / d) - 2, i = Math.ceil((n + r) / d) + 2;
					return [(s % g + g) % g, Math.min(g, i - s + 1)];
				}(i, x) ?? [0, g], C = 1e-9, E = Math.sin(i.sul * y) - C, B = Math.sin(i.norte * y) + C, T = Math.tan((i.oeste - t[0]) * y), $ = Math.tan((i.leste - t[0]) * y);
				let O = 0, L = 0;
				for (let r = 0; r < P; r++) {
					const i = (I + r) % g, u = i * n, h = s[i], m = l[i];
					for (let n = F; n <= D; n++) {
						if (!Number.isNaN(o[u + n])) continue;
						O++;
						const r = Math.max(-1, Math.min(1, c * N[n] + f * M[n] * m));
						if (r < E || r > B) continue;
						const s = h * M[n] * f, i = N[n] - c * r;
						if (s < i * T - C * i || s > i * $ + C * i) continue;
						const { u: l, v: d } = p(t[0] + Math.atan2(s, i) / y, Math.asin(r) / y), g = b(e, a, l, d);
						Number.isNaN(g) || (o[u + n] = g, L++);
					}
				}
				return {
					examinados: O,
					gravados: L
				};
			},
			concluir(t) {
				const i = function(t, e, a, n, o = !1) {
					const r = e.length, s = o ? new Int8Array(g * r * 3) : new Float32Array(g * r * 3), i = o ? 127 : 1, l = d * y, c = new Int32Array(r), u = new Int32Array(r), f = new Int32Array(r);
					for (let m = 0; m < r; m++) {
						let t = 1;
						for (; e[Math.min(r - 1, m + t)] - e[Math.max(0, m - t)] < 1 && (m - t > 0 || m + t < r - 1);) t++;
						c[m] = Math.max(0, m - t), u[m] = Math.min(r - 1, m + t);
						const a = (e[u[m]] - e[c[m]]) / 2;
						f[m] = Math.max(1, Math.min(g / 8, Math.ceil(a / (e[m] * l))));
					}
					const h = (e, a) => t[(e % g + g) % g * r + a];
					for (let m = 0; m < g; m++) for (let M = 0; M < r; M++) {
						const d = 3 * (m * r + M), g = t[m * r + M];
						if (Number.isNaN(g)) {
							s[d] = 0, s[d + 1] = 0, s[d + 2] = i;
							continue;
						}
						const y = c[M], p = u[M], b = x(y < M ? h(m, y) : NaN, g, p > M ? h(m, p) : NaN, e[M] - e[y], e[p] - e[M]), w = f[M], N = e[M] * Math.sin(w * l), z = x(h(m - w, M), g, h(m + w, M), N, N), A = b * a[m] + z * n[m], F = b * n[m] - z * a[m], v = 1 / Math.sqrt(A * A + F * F + 1);
						o ? (s[d] = Math.floor(127 * Math.fround(-A * v) + .5), s[d + 1] = Math.floor(127 * Math.fround(-F * v) + .5), s[d + 2] = Math.floor(127 * Math.fround(v) + .5)) : (s[d] = -A * v, s[d + 1] = -F * v, s[d + 2] = v);
					}
					return s;
				}(o, e, s, l, a), c = new Float64Array(n);
				for (let a = 0; a < n; a++) c[a] = t(e[a]);
				for (let e = 0; e < g; e++) {
					const t = e * n;
					for (let e = 0; e < n; e++) o[t + e] -= c[e];
				}
				return {
					...r,
					normal: i
				};
			}
		};
	}
	function x(t, e, a, n, o) {
		const r = !Number.isNaN(t), s = !Number.isNaN(a);
		return r && s ? (a - t) / (n + o) : s ? (a - e) / o : r ? (e - t) / n : 0;
	}
	function z(t, e) {
		const { nAz: a, nDist: n, distancias: o, cotaCentro: r, altura: s } = t, i = new Float32Array(a).fill(-1 / 0), l = new Int32Array(a).fill(-1), c = r + (Number.isFinite(e) ? e : 0);
		if (!Number.isFinite(c)) return {
			tan: i,
			iDist: l
		};
		const u = new Float64Array(n);
		for (let f = 0; f < n; f++) u[f] = 1 / o[f];
		for (let f = 0; f < a; f++) {
			const t = f * n;
			let e = -1 / 0, a = -1;
			for (let o = 0; o < n; o++) {
				const n = (s[t + o] - c) * u[o];
				n > e && (e = n, a = o);
			}
			i[f] = e, l[f] = a;
		}
		return {
			tan: i,
			iDist: l
		};
	}
	function A({ centro: t, alcance: e, aneis: a = l, larguraPx: n }) {
		return function({ inicio: t = 2, fim: e = 1e5, razao: a = 1.01, passoMaximo: n } = {}) {
			if (!(Number.isFinite(t) && t > 0)) throw new Error(`distanciasDaGrade: inicio inválido (${t})`);
			if (!(Number.isFinite(e) && e > t)) throw new Error(`distanciasDaGrade: fim inválido (${e})`);
			if (!(Number.isFinite(a) && a > 1)) throw new Error(`distanciasDaGrade: razao inválida (${a})`);
			const o = "function" == typeof n ? n : () => n ?? 1 / 0, r = [];
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
			passoMaximo: M(a, t[1], n)
		});
	}
	const F = (t) => function(t, e = .14285714285714285) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * t * (1 - e) / 12742e3;
	}(t, s);
	async function v({ url: t, headers: e }) {
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
	function D() {
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
	}
	if ("undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = async ({ data: a }) => {
		try {
			const n = await async function(a, n) {
				const { centro: o, alcance: s, aneis: i = l, limites: c = null } = a, u = a.fatores ?? t({ encoding: "mapbox" }), f = a.tiles.map((t, e) => ({
					...t,
					i: e
				})).sort((t, e) => e.z - t.z || t.i - e.i), h = f.length, m = D(), M = f.map(() => {
					let t;
					return {
						promessa: new Promise((e) => {
							t = e;
						}),
						resolver: t
					};
				});
				let d = 0, g = 0, y = 0, p = 0, b = 0;
				const w = [], x = () => {
					for (; w.length && w[0].i < d + 12;) w.shift().continuar();
				}, z = (t) => t < d + 12 ? null : new Promise((e) => {
					w.push({
						i: t,
						continuar: e
					});
				}), I = performance.now();
				let P = I, C = 0;
				const E = Promise.all(Array.from({ length: Math.min(6, h) }, async () => {
					for (; C < h;) {
						const t = C++;
						await z(t);
						const e = await v(f[t]);
						g++, e && (y += e.size, p += e.size, b = Math.max(b, p)), P = performance.now(), n({
							tipo: "progresso",
							baixados: g,
							total: h,
							bytes: y
						}), M[t].resolver(e);
					}
				}));
				let B = null, T = 0, $ = 0, O = 0, L = 0, R = 0;
				for (let t = 0; t < h; t++) {
					let a = await M[t].promessa;
					if (M[t].promessa = null, d++, x(), !a) continue;
					const n = a.size;
					let l = null;
					const h = performance.now();
					try {
						const n = await m(a), o = e(n.rgba, n.largura, n.altura, u);
						L = Math.max(L, n.rgba.byteLength + o.cotas.byteLength), R += o.cotas.byteLength;
						const { z: s, x: i, y: h } = f[t];
						l = {
							z: s,
							x: i,
							y: h,
							...c ? r(o, s, i, h, c) : o
						};
					} catch (j) {
						l = null;
					}
					a = null, p -= n;
					const g = performance.now();
					$ += g - h, l && (T++, B || (B = N({
						centro: o,
						distancias: A({
							centro: o,
							alcance: s,
							aneis: i,
							larguraPx: l.largura
						}),
						normaisEmBytes: !0
					})), B.amostrarTile(l), l = null, O += performance.now() - g);
				}
				await E;
				const G = performance.now();
				B || (B = N({
					centro: o,
					distancias: A({
						centro: o,
						alcance: s,
						aneis: i,
						larguraPx: 512
					}),
					normaisEmBytes: !0
				}));
				const S = B.concluir(F), q = performance.now();
				O += q - G;
				const k = S.altura.byteLength + S.normal.byteLength + S.distancias.byteLength;
				return {
					tipo: "pronto",
					grade: S,
					tempos: {
						downloadMs: P - I,
						decodeMs: $,
						gradeMs: O,
						totalMs: q - I
					},
					bytes: y,
					tiles: {
						pedidos: h,
						recebidos: T,
						falhas: h - T
					},
					memoria: {
						gradeBytes: k,
						picoTilesBytes: L,
						picoBlobsBytes: b,
						tilesDecodificadosBytes: R
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
	}), "undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window) {
		const o = function({ obterTile: o } = {}) {
			const s = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set();
			let M = l, d = 1e5, g = null, y = null, w = null, x = 0, v = !1;
			function I() {
				s.clear(), f.clear(), y = null, w = null, x = 0;
			}
			return {
				carregar: async function(a, i = () => {}) {
					I(), M = a.aneis ?? l, d = a.alcance ?? M[M.length - 1].ate, g = a.limites ?? null, v = !0 === a.normaisEmFloat;
					const c = a.fatores ?? t({ encoding: "mapbox" }), u = o ?? function(t, a) {
						const n = D();
						return async ({ z: o, x: s, y: i, url: l, headers: c }) => {
							const u = await async function({ url: t, headers: e }) {
								const a = new AbortController(), n = setTimeout(() => a.abort(), 3e4);
								try {
									const n = await fetch(t, {
										headers: e,
										signal: a.signal
									});
									if (204 === n.status || 404 === n.status) return { ausente: !0 };
									if (!n.ok) return { falha: !0 };
									const o = await n.blob();
									return o.size ? { blob: o } : { ausente: !0 };
								} catch (o) {
									return { falha: !0 };
								} finally {
									clearTimeout(n);
								}
							}({
								url: l,
								headers: c
							});
							if (!u.blob) return u;
							try {
								const l = await n(u.blob), c = e(l.rgba, l.largura, l.altura, t);
								return {
									tile: {
										z: o,
										x: s,
										y: i,
										...a ? r(c, o, s, i, a) : c
									},
									bytes: u.blob.size
								};
							} catch (f) {
								return { falha: !0 };
							}
						};
					}(c, g), h = a.tiles, m = h.length, N = performance.now();
					let z = 0, F = 0, P = 0, C = 0;
					if (await Promise.all(Array.from({ length: Math.min(6, m) }, async () => {
						for (; C < m;) {
							const t = h[C++];
							let e = { falha: !0 };
							for (let n = 0; n < 2 && e.falha; n++) e = await u(t);
							const a = n(t.z, t.x, t.y);
							e.tile ? (s.set(a, e.tile), x += e.tile.cotas.byteLength, F += e.bytes ?? 0) : e.ausente ? f.add(a) : P++, z++, i({
								tipo: "progresso",
								feitos: z,
								total: m,
								bytes: F
							});
						}
					})), P > 0 || 0 === s.size) throw I(), Object.assign(/* @__PURE__ */ new Error("Não foi possível carregar o relevo da rota. Verifique a conexão e abra o sobrevoo de novo."), {
						codigo: "CORREDOR_INCOMPLETO",
						falhas: P,
						total: m
					});
					const E = s.values().next().value?.largura ?? 512;
					return y = A({
						centro: [0, Number.isFinite(a.latitudeDeReferencia) ? a.latitudeDeReferencia : 0],
						alcance: d,
						aneis: M,
						larguraPx: E
					}), w = function(t) {
						const e = /* @__PURE__ */ new Map();
						for (const n of t) e.has(n.z) || e.set(n.z, []), e.get(n.z).push(n);
						const a = [...e.entries()].sort((t, e) => e[0] - t[0]).map(([t, e]) => {
							let a = 1 / 0, n = 1 / 0, o = -1 / 0, r = -1 / 0;
							for (const l of e) a = Math.min(a, l.x), n = Math.min(n, l.y), o = Math.max(o, l.x), r = Math.max(r, l.y);
							const s = o - a + 1, i = new Array(s * (r - n + 1)).fill(null);
							for (const l of e) i[(l.y - n) * s + (l.x - a)] = l;
							return {
								n: 2 ** t,
								x0: a,
								y0: n,
								x1: o,
								y1: r,
								nx: s,
								indice: i
							};
						});
						return a.length ? (t, e) => {
							const { u: n, v: o } = p(t, e);
							for (const r of a) {
								const t = Math.floor(n * r.n), e = Math.floor(o * r.n);
								if (t < r.x0 || t > r.x1 || e < r.y0 || e > r.y1) continue;
								const a = r.indice[(e - r.y0) * r.nx + (t - r.x0)];
								if (!a) continue;
								const s = b(a, r.n, n, o);
								if (!Number.isNaN(s)) return s;
							}
							return NaN;
						} : () => NaN;
					}([...s.values()]), {
						tipo: "carregado",
						tiles: {
							pedidos: m,
							recebidos: s.size,
							ausentes: f.size
						},
						bytes: F,
						memoria: {
							tilesBytes: x,
							gradeBytes: Math.round(3600) * y.length * (v ? 16 : 7)
						},
						tempos: { totalMs: performance.now() - N },
						nDist: y.length
					};
				},
				montar: function({ centro: t, setores: e = null, cotaDoOlho: o, copiaDaAltura: r = !1 }) {
					if (!y) throw new Error("O corredor da rota não está carregado.");
					const d = performance.now(), p = function(t, e = l) {
						if (!Array.isArray(t) || !Number.isFinite(t[0]) || !Number.isFinite(t[1])) throw new Error("tilesDosAneis: centro inválido");
						const o = /* @__PURE__ */ new Set(), r = [];
						let s = 0;
						return e.forEach(({ zoom: e, ate: l }, f) => {
							if (!Number.isInteger(e) || e < 0 || !(l > s)) throw new Error(`tilesDosAneis: anel ${f} inválido (zoom ${e}, até ${l})`);
							const M = l + u(l), d = Math.max(0, s - u(s)), g = M / i / c, y = g / Math.max(1e-6, Math.cos(Math.min(89, Math.abs(t[1]) + g) * c)), p = a(t[0] - y, t[1] + g, e, 1), b = a(t[0] + y, t[1] - g, e, 1), w = [];
							for (let a = p.y; a <= b.y; a++) for (let r = p.x; r <= b.x; r++) {
								const { perto: s, longe: i } = m(t, h(e, r, a));
								if (s > M || i < d) continue;
								const l = n(e, r, a);
								o.has(l) || (o.add(l), w.push({
									z: e,
									x: r,
									y: a,
									anel: f,
									p: s
								}));
							}
							w.sort((t, e) => t.p - e.p);
							for (const { z: t, x: a, y: n } of w) r.push({
								z: t,
								x: a,
								y: n,
								anel: f
							});
							s = l;
						}), r;
					}(t, M).filter(({ z: t, x: e, y: a }) => !g || function(t, e, a, [n, o, r, s]) {
						const i = 2 ** t, l = (t) => 180 * Math.atan(Math.sinh(Math.PI * (1 - 2 * t / i))) / Math.PI;
						return (e + 1) / i * 360 - 180 >= n && e / i * 360 - 180 <= r && l(a) >= o && l(a + 1) <= s;
					}(t, e, a, g)), b = [];
					let w = 0, x = 0;
					for (const { z: a, x: i, y: l } of p) {
						const t = n(a, i, l), e = s.get(t);
						e ? b.push(e) : f.has(t) ? w++ : x++;
					}
					b.sort((t, e) => e.z - t.z);
					const A = N({
						centro: t,
						distancias: Float32Array.from(y),
						normaisEmBytes: !v
					});
					for (const a of b) A.amostrarTile(a);
					const D = performance.now(), I = A.concluir(F), P = performance.now(), C = e ? function(t, e) {
						const a = t.nDist + 1, n = new Int32Array(e.length);
						let o = 0;
						e.forEach((t, e) => {
							n[e] = o, o += t.nCols * a;
						});
						const r = new Float32Array(o), s = new Int8Array(3 * o);
						return e.forEach((e, a) => function(t, e, a, n, o, r = 0) {
							const { nAz: s, nDist: i, cotaCentro: l, altura: c, normal: u } = t, f = u instanceof Int8Array;
							for (let h = 0; h < a; h++) {
								const t = (e + h) % s * i, m = c[t], M = r + h;
								n[M] = Number.isNaN(m) ? l : Math.min(l, m), o[3 * M] = 0, o[3 * M + 1] = 0, o[3 * M + 2] = 127;
								for (let e = 0; e < i; e++) {
									const r = M + (e + 1) * a, s = c[t + e];
									n[r] = Number.isNaN(s) ? -1e6 : s;
									const i = 3 * (t + e);
									f ? (o[3 * r] = u[i], o[3 * r + 1] = u[i + 1], o[3 * r + 2] = u[i + 2]) : (o[3 * r] = Math.round(127 * u[i]), o[3 * r + 1] = Math.round(127 * u[i + 1]), o[3 * r + 2] = Math.round(127 * u[i + 2]));
								}
							}
						}(t, e.i0, e.nCols, r, s, n[a])), {
							alt: r,
							nor: s,
							inicios: n,
							nLinhas: a
						};
					}(I, e) : null, E = performance.now();
					if (Number.isFinite(o) && Number.isFinite(I.cotaCentro)) {
						const t = o - I.cotaCentro;
						I.horizonteDoCentro = {
							alturaDoOlho: t,
							perfil: z(I, t)
						};
					}
					const B = performance.now();
					return r && (I.alturaParaTransferir = I.altura.slice()), {
						tipo: "grade",
						grade: I,
						malha: C,
						tempos: {
							amostragemMs: D - d,
							normaisMs: P - D,
							malhaMs: E - P,
							totalMs: E - d,
							horizonteMs: B - E,
							copiaMs: performance.now() - B
						},
						tiles: {
							pedidos: p.length,
							usados: b.length,
							ausentes: w,
							foraDoCorredor: x
						}
					};
				},
				amostrarRelevo: function(t) {
					if (!w) throw new Error("O corredor da rota não está carregado.");
					const e = t.length >> 1, a = new Float32Array(e);
					for (let n = 0; n < e; n++) a[n] = w(t[2 * n], t[2 * n + 1]);
					return a;
				},
				descartar: I,
				get memoria() {
					return {
						tiles: s.size,
						tilesBytes: x
					};
				}
			};
		}();
		self.onmessage = async ({ data: t }) => {
			const { tipo: e, id: a } = t;
			try {
				if ("carregar" === e) {
					const e = await o.carregar(t, (t) => self.postMessage({
						...t,
						id: a
					}));
					self.postMessage({
						...e,
						id: a
					});
				} else if ("montar" === e) {
					const e = o.montar(t), { grade: n, malha: r } = e, s = [
						n.altura.buffer,
						n.normal.buffer,
						n.distancias.buffer
					];
					r && s.push(r.alt.buffer, r.nor.buffer, r.inicios.buffer), n.horizonteDoCentro && s.push(n.horizonteDoCentro.perfil.tan.buffer, n.horizonteDoCentro.perfil.iDist.buffer), n.alturaParaTransferir && s.push(n.alturaParaTransferir.buffer), self.postMessage({
						...e,
						id: a
					}, s);
				} else if ("amostrar" === e) {
					const e = o.amostrarRelevo(t.pontos);
					self.postMessage({
						tipo: "relevo",
						id: a,
						cotas: e
					}, [e.buffer]);
				} else "descartar" === e && (o.descartar(), self.postMessage({
					tipo: "descartado",
					id: a
				}));
			} catch (n) {
				self.postMessage({
					tipo: "erro",
					id: a,
					codigo: n?.codigo ?? null,
					mensagem: n?.message ?? String(n),
					falhas: n?.falhas,
					total: n?.total
				});
			}
		};
	}
})();
