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
	function a(a, o) {
		const { w: n, h: e } = a, s = new Array(e);
		for (let r = 0; r < e; r++) {
			const a = r * n;
			if (r > 0) {
				let t = !0;
				for (let e = 0; e < n; e++) if (o[a + e] !== o[a - n + e]) {
					t = !1;
					break;
				}
				if (t) {
					s[r] = "";
					continue;
				}
			}
			let e = "", l = 0;
			for (; l < n;) {
				const s = o[a + l];
				let r = 1;
				for (; l + r < n && o[a + l + r] === s;) r++;
				e += (r > 1 ? r.toString(36) : "") + t(s), l += r;
			}
			s[r] = e;
		}
		return {
			origem: [a.lonW, a.latN],
			passoGraus: [a.dLon, a.dLat],
			largura: n,
			altura: e,
			celulaM: a.passo,
			rle: s.join("/")
		};
	}
	const o = 6371e3;
	function n(t, a = .14285714285714285) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * t * (1 - a) / 12742e3;
	}
	const e = Math.PI / 180, s = 180 / Math.PI, r = 2 * Math.PI;
	var l = class extends Error {
		constructor(t) {
			super(`O sensor ${t} está fora do relevo disponível.`), this.name = "ErroSensorSemTerreno", this.sensor = t;
		}
	};
	function c(t, a) {
		const o = new Array(5).fill(0);
		let n = 0, s = 0, r = 0;
		for (let l = 0; l < t.h; l++) {
			const c = (t.latN - l * t.dLat) * e, i = (t.latN - (l + 1) * t.dLat) * e, h = 40589641 * t.dLon * e * (Math.sin(c) - Math.sin(i));
			for (let e = 0; e < t.w; e++) {
				const c = a[l * t.w + e];
				255 !== c ? (c > 0 && (n += h, o[Math.min(c, 4)] += h), c > s && (s = c)) : r++;
			}
		}
		return {
			areaCobertaKm2: n,
			maiorContagem: s,
			semTerreno: r,
			areaPorClasse: o,
			celulaM: t.passo
		};
	}
	function i(t, i = () => {}) {
		const { sensores: h, alvo: M, zoom: f, tiles: u, passo: m } = t, p = function(t, a) {
			if (!a.length) return () => NaN;
			let o = Infinity, n = Infinity, e = -Infinity, s = -Infinity;
			for (const i of a) o = Math.min(o, i.x), n = Math.min(n, i.y), e = Math.max(e, i.x), s = Math.max(s, i.y);
			const r = e - o + 1, l = new Array(r * (s - n + 1)).fill(null);
			for (const i of a) l[(i.y - n) * r + (i.x - o)] = i;
			const c = a[0].largura;
			return (a, i) => {
				const h = function(t, a, o, n) {
					const e = 2 ** o, s = Math.max(-85.051129, Math.min(85.051129, a)), r = (((t + 180) % 360 + 360) % 360 - 180 + 180) / 360 * e, l = Math.sin(s * Math.PI / 180), c = (.5 - Math.log((1 + l) / (1 - l)) / (4 * Math.PI)) * e, i = Math.min(e - 1, Math.max(0, Math.floor(r))), h = Math.min(e - 1, Math.max(0, Math.floor(c))), M = (t) => Math.min(n, Math.max(0, t * n));
					return {
						z: o,
						x: i,
						y: h,
						px: M(r - i),
						py: M(c - h)
					};
				}(i, a, t, c);
				if (h.x < o || h.x > e || h.y < n || h.y > s) return NaN;
				const M = l[(h.y - n) * r + (h.x - o)];
				return M ? function(t, a, o) {
					const { largura: n, altura: e, cotas: s } = t, r = Math.max(0, Math.min(n - 1, a - .5)), l = Math.max(0, Math.min(e - 1, o - .5)), c = Math.floor(r), i = Math.floor(l), h = Math.min(n - 1, c + 1), M = Math.min(e - 1, i + 1), f = r - c, u = l - i;
					return (s[i * n + c] * (1 - f) + s[i * n + h] * f) * (1 - u) + (s[M * n + c] * (1 - f) + s[M * n + h] * f) * u;
				}(M, h.px, h.py) : NaN;
			};
		}(f, u), d = function(t, a, n = 4e6) {
			const { oeste: r, sul: l, leste: c, norte: i } = function(t) {
				let a = -90, n = 90, r = 180, l = -180;
				for (const c of t) {
					const t = c.alcance / o * s, i = t / Math.cos(c.lat * e);
					a = Math.max(a, c.lat + t), n = Math.min(n, c.lat - t), r = Math.min(r, c.lon - i), l = Math.max(l, c.lon + i);
				}
				return {
					oeste: r,
					sul: n,
					leste: l,
					norte: a
				};
			}(t), h = Math.cos((i + l) / 2 * e), M = (t) => {
				const a = t / o * s, n = a / h;
				return {
					dLat: a,
					dLon: n,
					w: Math.ceil((c - r) / n),
					h: Math.ceil((i - l) / a)
				};
			};
			let f = a, u = M(f), m = !1;
			return u.w * u.h > n && (f *= 1.001 * Math.sqrt(u.w * u.h / n), u = M(f), m = !0), {
				lonW: r,
				latN: i,
				dLon: u.dLon,
				dLat: u.dLat,
				w: u.w,
				h: u.h,
				passo: f,
				engrossou: m
			};
		}(h, m), g = h.map((t, a) => function(t, a, { passo: c, k: i = .25, aoProgredir: h = null }) {
			if (!(c > 0 && t.alcance > 0)) throw new Error("passo e alcance precisam ser positivos");
			const M = a(t.lat, t.lon);
			if (!Number.isFinite(M)) throw new l(t.nome);
			const f = M + t.alturaAntena, u = t.alcance, m = Math.max(1, Math.floor(u / c)), p = Math.max(360, Math.ceil(r / (c / u))), d = r / p, g = m + 1, w = new Float32Array(p * g), y = new Float64Array(g), x = new Float64Array(g), N = new Float64Array(g);
			for (let e = 1; e <= m; e++) {
				const t = e * c / o;
				y[e] = Math.sin(t), x[e] = Math.cos(t), N[e] = n(e * c, i);
			}
			const A = t.lat * e, L = Math.sin(A), F = Math.cos(A);
			for (let o = 0; o < p; o++) {
				const n = o * d, e = Math.sin(n), r = Math.cos(n), l = o * g;
				w[l] = 0;
				let i = -Infinity;
				for (let o = 1; o <= m; o++) {
					const n = L * x[o] + F * y[o] * r, h = a(Math.asin(n) * s, t.lon + Math.atan2(e * y[o] * F, x[o] - L * n) * s);
					if (!Number.isFinite(h)) {
						w[l + o] = NaN;
						continue;
					}
					const M = o * c, u = h - N[o], m = f + M * i - u;
					w[l + o] = m > 0 ? m : 0;
					const p = (u - f) / M;
					p > i && (i = p);
				}
				!h || 255 & ~o || h(o / p);
			}
			return h && h(1), {
				lat: t.lat,
				lon: t.lon,
				zo: f,
				passo: c,
				alcance: u,
				nRaios: p,
				nAmostras: m,
				dTheta: d,
				hMin: w
			};
		}(t, p, {
			passo: d.passo,
			aoProgredir: (t) => i("sensores", (a + t) / h.length)
		}));
		i("contagem", 0);
		const w = function(t, a, n, l, c = null) {
			const { lonW: i, latN: h, dLon: M, dLat: f, w: u, h: m } = t, p = new Uint8Array(u * m), d = new Float32Array(u * m);
			for (let o = 0; o < m; o++) {
				const t = h - (o + .5) * f;
				for (let a = 0; a < u; a++) {
					const e = n(t, i + (a + .5) * M);
					d[o * u + a] = e, Number.isFinite(e) || (p[o * u + a] = 255);
				}
			}
			const g = "mar" === l.referencia;
			return a.forEach((t, n) => {
				const w = t.lat * e, y = Math.sin(w), x = Math.cos(w), N = Math.sin(t.alcance / 12742e3) ** 2, A = t.alcance / o * s, L = A / Math.cos(w), F = Math.max(0, Math.floor((h - (t.lat + A)) / f)), b = Math.min(m - 1, Math.ceil((h - (t.lat - A)) / f)), P = Math.max(0, Math.floor((t.lon - L - i) / M)), v = Math.min(u - 1, Math.ceil((t.lon + L - i) / M)), z = v - P + 1, C = new Float64Array(z), I = new Float64Array(z), S = new Float64Array(z);
				for (let a = P; a <= v; a++) {
					const o = (i + (a + .5) * M - t.lon) * e;
					C[a - P] = Math.sin(o / 2) ** 2, I[a - P] = Math.sin(o), S[a - P] = Math.cos(o);
				}
				const E = t.nAmostras + 1;
				for (let a = F; a <= b; a++) {
					const o = (h - (a + .5) * f) * e, n = Math.sin(o), s = Math.cos(o), c = Math.sin((o - w) / 2) ** 2, i = x * s;
					for (let e = P; e <= v; e++) {
						const o = a * u + e;
						if (255 === p[o]) continue;
						const h = e - P, M = c + i * C[h];
						if (M > N) continue;
						const f = 12742e3 * Math.asin(Math.sqrt(M)), m = Math.round(f / t.passo);
						if (m > t.nAmostras) continue;
						let w = Math.atan2(I[h] * s, x * n - y * s * S[h]);
						w < 0 && (w += r);
						let A = Math.round(w / t.dTheta);
						A >= t.nRaios && (A -= t.nRaios);
						const L = t.hMin[A * E + m];
						L >= 0 && (g ? l.altitude - d[o] : l.altitude) >= L && p[o] < 254 && p[o]++;
					}
				}
				c && c((n + 1) / a.length);
			}), p;
		}(d, g, p, M, (t) => i("contagem", t));
		return {
			grade: a(d, w),
			resumo: c(d, w),
			engrossou: d.engrossou
		};
	}
	"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = ({ data: t }) => {
		try {
			const a = i(t, (t, a) => self.postMessage({
				tipo: "progresso",
				etapa: t,
				fracao: a
			}));
			self.postMessage({
				tipo: "pronto",
				...a
			});
		} catch (a) {
			self.postMessage({
				tipo: "erro",
				mensagem: a?.message ?? String(a),
				sensor: a?.sensor ?? null
			});
		}
	});
})();
