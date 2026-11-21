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
	function o(o, e) {
		const { w: a, h: n } = o, r = new Array(n);
		for (let s = 0; s < n; s++) {
			const o = s * a;
			if (s > 0) {
				let t = !0;
				for (let n = 0; n < a; n++) if (e[o + n] !== e[o - a + n]) {
					t = !1;
					break;
				}
				if (t) {
					r[s] = "";
					continue;
				}
			}
			let n = "", i = 0;
			for (; i < a;) {
				const r = e[o + i];
				let s = 1;
				for (; i + s < a && e[o + i + s] === r;) s++;
				n += (s > 1 ? s.toString(36) : "") + t(r), i += s;
			}
			r[s] = n;
		}
		return {
			origem: [o.lonW, o.latN],
			passoGraus: [o.dLon, o.dLat],
			largura: a,
			altura: n,
			celulaM: o.passo,
			rle: r.join("/")
		};
	}
	const e = (t) => 8 === t ? 1 : t << 1, a = (t) => 1 === t ? 8 : t >> 1;
	function n(t, o, n) {
		const r = o + 1, s = new Uint8Array(r * (n + 1)), i = (e, a) => e >= 0 && a >= 0 && e < o && a < n && 1 === t[a * o + e];
		for (let e = 0; e < n; e++) for (let a = 0; a < o; a++) t[e * o + a] && (i(a, e - 1) || (s[e * r + a] |= 1), i(a + 1, e) || (s[e * r + a + 1] |= 2), i(a, e + 1) || (s[(e + 1) * r + a + 1] |= 4), i(a - 1, e) || (s[(e + 1) * r + a] |= 8));
		const l = (t) => 1 === t ? 1 : 4 === t ? -1 : 2 === t ? r : -r, c = (t, e) => {
			const a = t % r, n = (t - a) / r;
			return 1 === e ? n * o + a : 2 === e ? n * o + a - 1 : 4 === e ? (n - 1) * o + a - 1 : (n - 1) * o + a;
		}, M = function(t, o, e) {
			const a = new Int32Array(o * e).fill(-1), n = (t) => {
				for (; a[t] !== t;) a[t] = a[a[t]], t = a[t];
				return t;
			};
			for (let r = 0; r < e; r++) for (let e = 0; e < o; e++) {
				const s = r * o + e;
				if (t[s] && (a[s] = s, e > 0 && t[s - 1] && (a[n(s)] = n(s - 1)), r > 0 && t[s - o])) {
					const t = n(s), e = n(s - o);
					t !== e && (a[t] = e);
				}
			}
			return n;
		}(t, o, n), h = /* @__PURE__ */ new Map();
		for (let u = 0; u < s.length; u++) for (; s[u];) {
			const t = s[u] & -s[u], o = [u];
			let n = u, i = t, A = 0;
			for (;;) {
				s[n] &= ~i;
				const c = n + l(i), M = n % r, h = c % r;
				A += M * ((c - h) / r) - h * ((n - M) / r);
				let f = 0, E = !1;
				for (const o of [
					e(i),
					i,
					a(i)
				]) {
					if (c === u && o === t) {
						E = !0;
						break;
					}
					if (s[c] & o) {
						f = o;
						break;
					}
				}
				if (E) {
					o.push(u);
					break;
				}
				if (!f) throw new Error("anel aberto na poligonização");
				f !== i && o.push(c), n = c, i = f;
			}
			const f = M(c(u, t));
			let E = h.get(f);
			E || (E = {
				externo: null,
				furos: []
			}, h.set(f, E)), A > 0 ? E.externo = o : E.furos.push(o);
		}
		const A = (t) => t.map((t) => {
			const o = t % r;
			return [o, (t - o) / r];
		}), f = [];
		for (const e of h.values()) {
			if (!e.externo) throw new Error("componente sem anel externo");
			f.push([A(e.externo), ...e.furos.map(A)]);
		}
		return f;
	}
	function r(t) {
		try {
			return function(t) {
				let o = 1, e = 0;
				for (const { coordinates: i } of t) {
					o += 2;
					for (const t of i) {
						o += 1 + t.length;
						for (const o of t) e += 2 * o.length;
					}
				}
				const a = new Uint32Array(o), n = new Float64Array(e);
				let r = 0, s = 0;
				a[r++] = t.length;
				for (const { classe: i, coordinates: l } of t) {
					a[r++] = i, a[r++] = l.length;
					for (const t of l) {
						a[r++] = t.length;
						for (const o of t) {
							a[r++] = o.length;
							for (const [t, e] of o) n[s++] = t, n[s++] = e;
						}
					}
				}
				return {
					estrutura: a,
					xy: n
				};
			}(t());
		} catch (o) {
			return null;
		}
	}
	Object.freeze([
		"Marginal (0 a 10 dB)",
		"Bom (10 a 20 dB)",
		"Forte (20 dB ou mais)"
	]), Object.freeze([
		"#fdae61",
		"#a6d96a",
		"#1a9641"
	]);
	const s = Math.PI, i = Math.sqrt(2), l = 1 / 3, c = Object.freeze({
		NAO_DEFINIDO: 0,
		VISADA: 1,
		DIFRACAO: 2,
		TROPODIFUSAO: 3
	}), M = Object.freeze({
		EQUATORIAL: 1,
		CONTINENTAL_SUBTROPICAL: 2,
		MARITIMO_SUBTROPICAL: 3,
		DESERTO: 4,
		CONTINENTAL_TEMPERADO: 5,
		MARITIMO_TEMPERADO_TERRA: 6,
		MARITIMO_TEMPERADO_MAR: 7
	}), h = Object.freeze({
		MENSAGEM_UNICA: 0,
		ACIDENTAL: 1,
		MOVEL: 2,
		DIFUSAO: 3
	}), A = Object.freeze({
		SUCESSO: 0,
		SUCESSO_COM_AVISOS: 1,
		ALTURA_TX: 1e3,
		ALTURA_RX: 1001,
		CLIMA: 1002,
		TEMPO: 1003,
		LOCAL: 1004,
		SITUACAO: 1005,
		REFRATIVIDADE: 1008,
		FREQUENCIA: 1009,
		POLARIZACAO: 1010,
		EPSILON: 1011,
		SIGMA: 1012,
		IMPEDANCIA_DO_SOLO: 1013,
		MDVAR: 1014,
		TERRA_EFETIVA: 1016,
		REFRATIVIDADE_DE_SUPERFICIE_PEQUENA: 1021,
		REFRATIVIDADE_DE_SUPERFICIE_GRANDE: 1022
	}), f = Object.freeze({
		ALTURA_TX: 1,
		ALTURA_RX: 2,
		FREQUENCIA: 4,
		DISTANCIA_GRANDE_1: 8,
		DISTANCIA_GRANDE_2: 16,
		DISTANCIA_PEQUENA_1: 32,
		DISTANCIA_PEQUENA_2: 64,
		ANGULO_HORIZONTE_TX: 128,
		ANGULO_HORIZONTE_RX: 256,
		DISTANCIA_HORIZONTE_TX_1: 512,
		DISTANCIA_HORIZONTE_RX_1: 1024,
		DISTANCIA_HORIZONTE_TX_2: 2048,
		DISTANCIA_HORIZONTE_RX_2: 4096,
		VARIABILIDADE_EXTREMA: 8192,
		REFRATIVIDADE_DE_SUPERFICIE: 16384
	}), u = (t, o) => t > o ? t : o, E = (t, o) => t < o ? t : o, I = (t, o) => t > o ? t - o : 0, p = (t, o) => t > o ? t - o : 0, d = (t) => Math.trunc(t), m = (t, o) => ({
		re: t,
		im: o
	}), N = (t, o) => m(t.re - o.re, t.im - o.im), O = (t, o) => m(t.re + o.re, t.im + o.im), R = (t, o) => m(t.re * o, t.im * o), T = (t) => Math.hypot(t.re, t.im);
	function _(t, o) {
		const e = o.re * o.re + o.im * o.im;
		return m((t.re * o.re + t.im * o.im) / e, (t.im * o.re - t.re * o.im) / e);
	}
	function w(t, o, e) {
		const a = d(t[0]);
		let n = d(p(o / t[1], 0)), r = a - d(p(a, e / t[1]));
		r <= n && (n = d(p(n, 1)), r = a - d(p(a, r + 1)));
		const s = r - n;
		let i = -.5 * s;
		const l = r + i;
		let c = .5 * (t[n + 2] + t[r + 2]), M = .5 * (t[n + 2] - t[r + 2]) * i;
		for (let h = 2; h <= s; h++) n++, i++, c += t[n + 2], M += t[n + 2] * i;
		return c /= s, M = 12 * M / ((s * s + 2) * s), {
			y1: c - M * l,
			y2: c + M * (a - l)
		};
	}
	function D(t) {
		return t < 5.76 ? 6.02 + 9.11 * Math.sqrt(t) - 1.27 * t : 12.953 + 10 * Math.log10(t);
	}
	function g(t, o) {
		return 10 * Math.log10(1 + [
			25,
			80,
			177,
			395,
			705
		][t] * Math.pow(1 / o, 4) + [
			24,
			45,
			68,
			80,
			105
		][t] * Math.pow(1 / o, 2));
	}
	function S(t, o) {
		o = E(u(o, 1), 5);
		const e = d(o), a = o - e;
		let n = g(e - 1, t);
		return 0 !== a && (n = (1 - a) * n + a * g(e, t)), n;
	}
	function C(t, o) {
		return o * (1 - .8 * Math.exp(-t / 5e4));
	}
	function b(t) {
		return .78 * t * Math.exp(-.5 * Math.pow(t, .25));
	}
	function L(t, o) {
		let e;
		if (t < 200) {
			const a = -Math.log(o);
			o < 1e-5 || t * Math.pow(a, 3) > 5495 ? (e = -117, t > 1 && (e = 17.372 * Math.log(t) + e)) : e = 25e-6 * Math.pow(t, 2) / o - 8.686 * a - 15;
		} else if (e = .05751 * t - 4.343 * Math.log(t), t < 2e3) {
			const o = .0134 * t * Math.exp(-.005 * t);
			e = (1 - o) * e + o * (17.372 * Math.log(t) - 117);
		}
		return e;
	}
	function U(t, o, e, a, n, r, s, i, c, M, h) {
		const A = function(t, o, e, a, n) {
			const r = t / e - a, s = t - (n[0] + n[1]), i = o / 47.7 * .0795775 * Math.pow(r, 2) * n[0] * s / (s + n[0]), l = o / 47.7 * .0795775 * Math.pow(r, 2) * n[1] * s / (s + n[1]);
			return D(i) + D(l);
		}(t, h, n, c, o), f = function(t, o, e, a, n, r, s) {
			const i = [
				0,
				0,
				0
			], c = [
				0,
				0,
				0
			], M = [
				0,
				0,
				0
			], h = [
				0,
				0,
				0
			], A = [
				0,
				0,
				0
			], f = [
				0,
				0,
				0
			], u = t / e - a;
			i[0] = (t - (n[0] + n[1])) / (t / e - a), i[1] = .5 * Math.pow(n[0], 2) / r[0], i[2] = .5 * Math.pow(n[1], 2) / r[1], c[0] = i[0] * u / 1e3, c[1] = n[0] / 1e3, c[2] = n[1] / 1e3;
			const E = T(s);
			for (let d = 0; d < 3; d++) f[d] = Math.pow(4 / 3 * 637e4 / i[d], l), M[d] = .017778 * f[d] * Math.pow(o, -.3333333333333333) / E, h[d] = 1.607 - M[d];
			A[1] = h[1] * Math.pow(f[1], 2) * Math.pow(o, l) * c[1], A[2] = h[2] * Math.pow(f[2], 2) * Math.pow(o, l) * c[2], A[0] = h[0] * Math.pow(f[0], 2) * Math.pow(o, l) * c[0] + A[1] + A[2];
			const I = L(A[1], M[1]), p = L(A[2], M[2]);
			return .05751 * A[0] - 10 * Math.log10(A[0]) - I - p - 20;
		}(t, h, n, c, o, e, a), u = b(C(M, r)), I = E(15, 5 * Math.log10(1 + 1e-5 * s[0] * s[1] * h * u)), p = C(t, r);
		let d = s[0] * s[1];
		const m = e[0] * e[1] - d;
		0 === i && (d += 10), d = (Math.sqrt(1 + m / d) + (-c * n + (o[0] + o[1])) / t) * E(p * h / 47.7, 6283.2);
		const N = 25.1 / (25.1 + Math.sqrt(d));
		return N * f + (1 - N) * A + I;
	}
	function v(t, o, e, a, n, r, i, l) {
		const c = b(C(t, a)), M = l / 47.7, h = (o[0] + o[1]) / Math.sqrt(Math.pow(t, 2) + Math.pow(o[0] + o[1], 2)), A = m(h, 0);
		let f = R(_(N(A, e), O(A, e)), Math.exp(-E(10, M * c * h)));
		const I = Math.pow(f.re, 2) + Math.pow(f.im, 2);
		(I < .25 || I < h) && (f = R(f, Math.sqrt(h / I)));
		let p = 2 * M * o[0] * o[1] / t;
		p > s / 2 && (p = s - Math.pow(s / 2, 2) / p);
		const d = O(m(Math.cos(p), -Math.sin(p)), f), T = -10 * Math.log10(Math.pow(d.re, 2) + Math.pow(d.im, 2)), w = n * t + r, D = 1 / (1 + l * a / u(1e4, i));
		return D * T + (1 - D) * w;
	}
	function F(t, o, e, a, n, r, s, l, c) {
		let M;
		const h = s / 47.7;
		if (c.h0 > 15) M = c.h0;
		else {
			let s = e[0] - e[1], l = a[1] / a[0];
			s < 0 && (s = -s, l = 1 / l);
			const A = o[0] + o[1] + t / n, f = 2 * h * A * a[0], I = 2 * h * A * a[1];
			if (f < .2 && I < .2) return 1001;
			let p = (t - s) / (t + s);
			const d = E(u(.1, l / p), 10);
			p = u(.1, p);
			const m = (t - s) * (t + s) * A * .25 / t, N = m / 1755.6 * (1 + (.031 - .00232 * r + 567e-8 * Math.pow(r, 2)) * Math.exp(-Math.pow(E(1.7, m / 8e3), 6))), O = (S(f, N) + S(I, N)) / 2;
			M = O + E(O, 6 * (.6 - Math.log10(u(N, 1))) * Math.log10(p) * Math.log10(d)), M = u(M, 0), N < 1 && (M = N * M + 10 * (1 - N) * Math.log10(Math.pow((1 + i / f) * (1 + i / I), 2) * (f + I) / (f + I + 2 * i))), M > 15 && c.h0 >= 0 && (M = c.h0);
		}
		c.h0 = M;
		const A = t / n - l;
		return function(t) {
			let o;
			return o = t <= 1e4 ? 0 : t <= 7e4 ? 1 : 2, [
				133.4,
				104.6,
				71.8
			][o] + [
				332e-6,
				212e-6,
				157e-6
			][o] * t + [
				-10,
				-2.5,
				5
			][o] * Math.log10(t);
		}(A * t) + 10 * Math.log10(47.7 * h * Math.pow(A, 4)) - .1 * (r - 301) * Math.exp(-A * t / 4e4) + M;
	}
	function x(t) {
		let o = t;
		t > .5 && (o = 1 - o);
		const e = Math.sqrt(-2 * Math.log(o));
		let a = e - ((.010328 * e + .802853) * e + 2.515516) / (((.001308 * e + .189269) * e + 1.432788) * e + 1);
		return t > .5 && (a = -a), a;
	}
	function P(t, o, e, a, n, r) {
		return (t + o / (1 + Math.pow((r - a) / n, 2))) * Math.pow(r / e, 2) / (1 + Math.pow(r / e, 2));
	}
	const y = [
		[
			-9.67,
			-.62,
			1.26,
			-9.21,
			-.62,
			-.39,
			3.15
		],
		[
			12.7,
			9.19,
			15.5,
			9.05,
			9.19,
			2.86,
			857.9
		],
		[
			144900,
			228900,
			262600,
			84100,
			228900,
			141700,
			2222e3
		],
		[
			190300,
			205200,
			185200,
			101100,
			205200,
			315900,
			164800
		],
		[
			133800,
			143600,
			99800,
			98600,
			143600,
			167400,
			116300
		]
	], z = [
		2.13,
		2.66,
		6.11,
		1.98,
		2.68,
		6.86,
		8.51
	], q = [
		159.5,
		7.67,
		6.65,
		13.11,
		7.16,
		10.38,
		169.8
	], H = [
		762200,
		100400,
		138200,
		139100,
		93700,
		187800,
		609800
	], V = [
		123600,
		172500,
		242200,
		132700,
		186800,
		169600,
		119900
	], X = [
		94500,
		136400,
		178600,
		193500,
		133500,
		108900,
		106600
	], j = [
		2.11,
		6.87,
		10.08,
		3.68,
		4.75,
		8.58,
		8.43
	], G = [
		102.3,
		15.53,
		9.6,
		159.3,
		8.12,
		13.97,
		8.19
	], B = [
		636900,
		138700,
		165300,
		464400,
		93200,
		216e3,
		136200
	], Z = [
		134800,
		143700,
		225700,
		93100,
		135900,
		152e3,
		188500
	], Q = [
		95600,
		98600,
		129700,
		94200,
		113400,
		122700,
		122900
	], W = [
		1.224,
		.801,
		1.38,
		1,
		1.224,
		1.518,
		1.518
	], k = [
		1.282,
		2.161,
		1.282,
		20,
		1.282,
		1.282,
		1.282
	], K = [
		1,
		1,
		1,
		1,
		.92,
		1,
		1
	], $ = [
		0,
		0,
		0,
		0,
		.25,
		0,
		0
	], J = [
		0,
		0,
		0,
		0,
		1.77,
		0,
		0
	], Y = [
		1,
		.93,
		1,
		.93,
		.93,
		1,
		1
	], tt = [
		0,
		.31,
		0,
		.19,
		.31,
		0,
		0
	], ot = [
		0,
		2,
		0,
		1.79,
		2,
		0,
		0
	];
	function et(t) {
		const { hTx: o, hRx: e, pfl: a, clima: n, N0: r, fMhz: s, pol: i, epsilon: M, sigma: O, mdvar: R, tempo: D, local: g, situacao: S } = t, b = { warnings: 0 }, L = (t) => ({
			erro: t,
			perdaDb: NaN,
			avisos: b.warnings,
			modo: c.NAO_DEFINIDO,
			perdaReferenciaDb: NaN,
			perdaEspacoLivreDb: NaN,
			deltaH: NaN,
			alturasEfetivas: [NaN, NaN],
			distanciasHorizonte: [NaN, NaN],
			angulosHorizonte: [NaN, NaN],
			Ns: NaN,
			distanciaKm: a[0] * a[1] / 1e3
		});
		let et = function(t, o, e, a, n, r, s, i, l, c, M, h, u) {
			return (t < 1 || t > 1e3) && (u.warnings |= f.ALTURA_TX), t < .5 || t > 3e3 ? A.ALTURA_TX : ((o < 1 || o > 1e3) && (u.warnings |= f.ALTURA_RX), o < .5 || o > 3e3 ? A.ALTURA_RX : e >= 1 && e <= 7 && Number.isInteger(e) ? s < 250 || s > 400 ? A.REFRATIVIDADE : ((i < 40 || i > 1e4) && (u.warnings |= f.FREQUENCIA), i < 20 || i > 2e4 ? A.FREQUENCIA : 0 !== l && 1 !== l ? A.POLARIZACAO : c < 1 ? A.EPSILON : M <= 0 ? A.SIGMA : h < 0 || h > 3 && h < 10 || h > 13 && h < 20 || h > 23 && h < 30 || h > 33 ? A.MDVAR : r <= 0 || r >= 100 ? A.SITUACAO : a <= 0 || a >= 100 ? A.TEMPO : n <= 0 || n >= 100 ? A.LOCAL : A.SUCESSO) : A.CLIMA);
		}(o, e, n, D, g, S, r, s, i, M, O, R, b);
		if (et !== A.SUCESSO) return L(et);
		const at = d(a[0]), nt = d(.1 * at);
		let rt = 0;
		for (let l = nt; l <= at - nt; l++) rt += a[l + 2];
		rt /= at - 2 * nt + 1;
		const { Zg: st, gammaE: it, Ns: lt } = function(t, o, e, a, n, r) {
			const s = 0 === o ? e : e * Math.exp(-o / 9460), i = 157e-9 * (1 - .04665 * Math.exp(s / 179.3)), l = m(n, 18e3 * r / t);
			let c = function(t) {
				const o = T(t);
				if (0 === o) return m(0, 0);
				const e = Math.sqrt((o + t.re) / 2), a = Math.sqrt((o - t.re) / 2);
				return m(e, t.im < 0 ? -a : a);
			}(N(l, m(1, 0)));
			return 1 === a && (c = _(c, l)), {
				Zg: c,
				gammaE: i,
				Ns: s
			};
		}(s, rt, r, i, M, O), ct = [o, e], { thetaHzn: Mt, dHznMeter: ht, hEMeter: At, deltaHMeter: ft, dMeter: ut } = function(t, o, e) {
			const a = t[0] * t[1], n = d(t[0]), r = 1 / o, { thetaHzn: s, dHznMeter: i } = function(t, o, e) {
				const a = d(t[0]), n = t[1], r = t[0] * t[1], s = t[2] + e[0], i = t[a + 2] + e[1], l = [(i - s) / r - r / (2 * o), -(i - s) / r - r / (2 * o)], c = [r, r];
				let M = 0, h = r;
				for (let A = 1; A < a; A++) {
					M += n, h -= n;
					const e = (t[A + 2] - s) / M - M / (2 * o), a = -(i - t[A + 2]) / h - h / (2 * o);
					e > l[0] && (l[0] = e, c[0] = M), a > l[1] && (l[1] = a, c[1] = h);
				}
				return {
					thetaHzn: l,
					dHznMeter: c
				};
			}(t, r, e), l = [0, 0], c = E(15 * e[0], .1 * i[0]), M = a - E(15 * e[1], .1 * i[1]), h = function(t, o, e) {
				const a = /* @__PURE__ */ new Float64Array(247), n = d(t[0]);
				let r = o / t[1], s = e / t[1];
				if (s - r < 2) return 0;
				let i = d(.1 * (s - r + 8));
				i = E(u(4, i), 25);
				const l = 10 * i - 5, c = l - i, M = l - 1;
				a[0] = M, a[1] = 1, s = (s - r) / M;
				let h = d(r);
				r -= Math.fround(h + 1);
				for (let u = 0; u < l; u++) {
					for (; r > 0 && h + 1 < n;) r--, h++;
					a[u + 2] = t[h + 3] + (t[h + 3] - t[h + 2]) * r, r += s;
				}
				const A = w(a, 0, M);
				let f = A.y1;
				const I = (A.y2 - f) / M, p = new Float64Array(l);
				for (let u = 0; u < l; u++) p[u] = a[u + 2] - f, f += I;
				return p.sort(), (p[l - i] - p[l - 1 - c]) / (1 - .8 * Math.exp(-(e - o) / 5e4));
			}(t, c, M);
			if (i[0] + i[1] > 1.5 * a) {
				const o = w(t, c, M);
				l[0] = e[0] + p(t[2], o.y1), l[1] = e[1] + p(t[n + 2], o.y2);
				for (let t = 0; t < 2; t++) i[t] = Math.sqrt(2 * l[t] * r) * Math.exp(-.07 * Math.sqrt(h / u(l[t], 5)));
				const A = i[0] + i[1];
				if (A <= a) {
					const t = Math.pow(a / A, 2);
					for (let o = 0; o < 2; o++) l[o] = l[o] * t, i[o] = Math.sqrt(2 * l[o] * r) * Math.exp(-.07 * Math.sqrt(h / u(l[o], 5)));
				}
				for (let t = 0; t < 2; t++) {
					const o = Math.sqrt(2 * l[t] * r);
					s[t] = (.65 * h * (o / i[t] - 1) - 2 * l[t]) / o;
				}
			} else {
				const o = w(t, c, .9 * i[0]);
				l[0] = e[0] + p(t[2], o.y1);
				const r = w(t, a - .9 * i[1], M);
				l[1] = e[1] + p(t[n + 2], r.y2);
			}
			return {
				thetaHzn: s,
				dHznMeter: i,
				hEMeter: l,
				deltaHMeter: h,
				dMeter: a
			};
		}(a, it, ct), Et = function(t, o, e, a, n, r, s, i, l, M, h, p) {
			const d = 1 / r, m = [Math.sqrt(2 * n[0] * d), Math.sqrt(2 * n[1] * d)], N = m[0] + m[1], O = a[0] + a[1], R = -u(t[0] + t[1], -O / d);
			Math.abs(t[0]) > .2 && (p.warnings |= f.ANGULO_HORIZONTE_TX), Math.abs(t[1]) > .2 && (p.warnings |= f.ANGULO_HORIZONTE_RX), a[0] < .1 * m[0] && (p.warnings |= f.DISTANCIA_HORIZONTE_TX_1), a[1] < .1 * m[1] && (p.warnings |= f.DISTANCIA_HORIZONTE_RX_1), a[0] > 3 * m[0] && (p.warnings |= f.DISTANCIA_HORIZONTE_TX_2), a[1] > 3 * m[1] && (p.warnings |= f.DISTANCIA_HORIZONTE_RX_2);
			const T = (t) => ({
				erro: t,
				ArefDb: NaN,
				modo: c.NAO_DEFINIDO
			});
			if (s < 150) return T(A.REFRATIVIDADE_DE_SUPERFICIE_PEQUENA);
			if (s > 400) return T(A.REFRATIVIDADE_DE_SUPERFICIE_GRANDE);
			if (s < 250 && (p.warnings |= f.REFRATIVIDADE_DE_SUPERFICIE), d < 4e6 || d > 13333333) return T(A.TERRA_EFETIVA);
			if (e.re <= Math.abs(e.im)) return T(A.IMPEDANCIA_DO_SOLO);
			const _ = u(N, O + 5 * Math.pow(Math.pow(d, 2) / o, 1 / 3)), w = _ + 10 * Math.pow(Math.pow(d, 2) / o, 1 / 3), D = U(_, a, n, e, d, i, l, 0, R, N, o), g = (U(w, a, n, e, d, i, l, 0, R, N, o) - D) / (w - _), S = D - g * _;
			let C, b;
			if (M < Math.abs(n[0] - n[1]) / .2 && (p.warnings |= f.DISTANCIA_PEQUENA_1), M < 1e3 && (p.warnings |= f.DISTANCIA_PEQUENA_2), M > 1e6 && (p.warnings |= f.DISTANCIA_GRANDE_1), M > 2e6 && (p.warnings |= f.DISTANCIA_GRANDE_2), M < N) {
				const t = N * g + S;
				let a, r = .04 * o * n[0] * n[1];
				S >= 0 ? (r = E(r, .5 * O), a = r + .25 * (O - r)) : a = u(-S / g, .25 * O);
				const s = v(a, n, e, i, g, S, N, o);
				let l = !1, h = 0, A = 0;
				if (r < a) {
					const c = v(r, n, e, i, g, S, N, o), M = Math.log(N / r);
					A = u(0, ((N - r) * (s - c) - (a - r) * (t - c)) / ((N - r) * Math.log(a / r) - (a - r) * M)), l = S > 0 || A > 0, l && (h = (t - c - A * M) / (N - r), h < 0 && (h = 0, A = I(t, c) / M, 0 === A && (h = g)));
				}
				l || (h = I(t, s) / (N - a), A = 0, 0 === h && (h = g)), C = t - h * N - A * Math.log(N) + h * M + A * Math.log(M), b = c.VISADA;
			} else {
				const e = O + 2e5, r = { h0: -1 }, i = F(O + 4e5, t, a, n, d, s, o, R, r), l = F(e, t, a, n, d, s, o, R, r);
				let h, A, f;
				l < 1e3 ? (h = (i - l) / 2e5, f = u(u(N, O + 1.088 * Math.pow(Math.pow(d, 2) / o, 1 / 3) * Math.log(o)), (l - S - h * e) / (g - h)), A = (g - h) * f + S) : (h = g, A = S, f = 1e7), M > f ? (C = h * M + A, b = c.TROPODIFUSAO) : (C = g * M + S, b = c.DIFRACAO);
			}
			return C = u(C, 0), {
				erro: A.SUCESSO,
				ArefDb: C,
				modo: b
			};
		}(Mt, s, st, ht, At, it, lt, ft, ct, ut, 0, b);
		if (Et.erro !== A.SUCESSO) return L(Et.erro);
		const It = function(t, o) {
			return 32.45 + 20 * Math.log10(o) + 20 * Math.log10(t / 1e3);
		}(ut, s), pt = function(t, o, e, a, n, r, s, i, c, M, A) {
			let u = x(t / 100), E = x(o / 100);
			const I = x(e / 100), p = c - 1, d = r / 47.7, m = Math.sqrt(18e6 * a[0]) + Math.sqrt(18e6 * a[1]) + Math.pow(5757e11 / d, l), N = s < m ? 13e4 * s / m : 13e4 + s - m;
			let O = M;
			const R = O >= 20;
			R && (O -= 20);
			const T = R ? 0 : 5 + 3 * Math.exp(-N / 1e5), _ = O >= 10;
			_ && (O -= 10);
			const w = P(y[0][p], y[1][p], y[2][p], y[3][p], y[4][p], N);
			let D;
			if (O === h.MENSAGEM_UNICA ? (u = I, E = I) : O === h.ACIDENTAL ? E = I : O === h.MOVEL && (E = u), (Math.abs(u) > 3.1 || Math.abs(E) > 3.1 || Math.abs(I) > 3.1) && (A.warnings |= f.VARIABILIDADE_EXTREMA), _) D = 0;
			else {
				const t = C(s, n);
				D = 10 * d * t / (d * t + 13);
			}
			const g = D * E, S = Math.log(.133 * d), b = K[p] + $[p] / (Math.pow(J[p] * S, 2) + 1), L = Y[p] + tt[p] / (Math.pow(ot[p] * S, 2) + 1), U = P(z[p], q[p], H[p], V[p], X[p], N) * b, v = P(j[p], G[p], B[p], Z[p], Q[p], N) * L, F = W[p] * v;
			let et;
			et = u < 0 ? U : u <= k[p] ? v : F + (v - F) * k[p] / u;
			const at = et * u, nt = Math.pow(T, 2) + Math.pow(at, 2) / (7.8 + Math.pow(I, 2)) + Math.pow(g, 2) / (24 + Math.pow(I, 2));
			let rt, st;
			O === h.MENSAGEM_UNICA ? (rt = 0, st = Math.sqrt(Math.pow(et, 2) + Math.pow(D, 2) + nt) * I) : O === h.ACIDENTAL ? (rt = at, st = Math.sqrt(Math.pow(D, 2) + nt) * I) : O === h.MOVEL ? (rt = Math.sqrt(Math.pow(et, 2) + Math.pow(D, 2)) * u, st = Math.sqrt(nt) * I) : (rt = at + g, st = Math.sqrt(nt) * I);
			let it = i - w - rt - st;
			return it < 0 && (it = it * (29 - it) / (29 - 10 * it)), it;
		}(D, g, S, At, ft, s, ut, Et.ArefDb, n, R, b) + It;
		return et = 0 !== b.warnings ? A.SUCESSO_COM_AVISOS : A.SUCESSO, {
			erro: et,
			perdaDb: pt,
			avisos: b.warnings,
			modo: Et.modo,
			perdaReferenciaDb: Et.ArefDb,
			perdaEspacoLivreDb: It,
			deltaH: ft,
			alturasEfetivas: At,
			distanciasHorizonte: ht,
			angulosHorizonte: Mt,
			Ns: lt,
			distanciaKm: a[0] * a[1] / 1e3
		};
	}
	const at = 6371e3, nt = Math.PI / 180, rt = 180 / Math.PI;
	const st = Object.freeze([
		0,
		10,
		20
	]), it = Object.freeze({
		SEM_ENLACE: 0,
		MARGINAL: 1,
		BOM: 2,
		FORTE: 3
	}), lt = (Object.freeze([
		"Marginal (0 a 10 dB)",
		"Bom (10 a 20 dB)",
		"Forte (20 dB ou mais)"
	]), Object.freeze([
		"#fdae61",
		"#a6d96a",
		"#1a9641"
	]), Object.freeze([
		{
			valor: "medio",
			rotulo: "Médio",
			permissividade: 15,
			condutividade: .005
		},
		{
			valor: "pobre",
			rotulo: "Pobre (seco, arenoso)",
			permissividade: 4,
			condutividade: .001
		},
		{
			valor: "bom",
			rotulo: "Bom (úmido, fértil)",
			permissividade: 25,
			condutividade: .02
		},
		{
			valor: "agua-doce",
			rotulo: "Água doce",
			permissividade: 81,
			condutividade: .01
		},
		{
			valor: "mar",
			rotulo: "Água do mar",
			permissividade: 81,
			condutividade: 5
		}
	])), ct = (Object.freeze([
		{
			valor: M.EQUATORIAL,
			rotulo: "Equatorial"
		},
		{
			valor: M.CONTINENTAL_SUBTROPICAL,
			rotulo: "Continental subtropical"
		},
		{
			valor: M.MARITIMO_SUBTROPICAL,
			rotulo: "Marítimo subtropical"
		},
		{
			valor: M.DESERTO,
			rotulo: "Desértico"
		},
		{
			valor: M.CONTINENTAL_TEMPERADO,
			rotulo: "Continental temperado"
		},
		{
			valor: M.MARITIMO_TEMPERADO_TERRA,
			rotulo: "Marítimo temperado (terra)"
		},
		{
			valor: M.MARITIMO_TEMPERADO_MAR,
			rotulo: "Marítimo temperado (mar)"
		}
	]), Object.freeze([
		{
			valor: "movel",
			mdvar: h.MOVEL,
			rotulo: "Móvel"
		},
		{
			valor: "acidental",
			mdvar: h.ACIDENTAL,
			rotulo: "Acidental"
		},
		{
			valor: "difusao",
			mdvar: h.DIFUSAO,
			rotulo: "Difusão (broadcast)"
		},
		{
			valor: "mensagem-unica",
			mdvar: h.MENSAGEM_UNICA,
			rotulo: "Mensagem única"
		}
	]));
	function Mt(t) {
		return t >= st[0] ? t < st[1] ? it.MARGINAL : t < st[2] ? it.BOM : it.FORTE : it.SEM_ENLACE;
	}
	function ht(t) {
		const o = lt.find((o) => o.valor === t.solo) ?? lt[0], e = ct.find((o) => o.valor === t.variabilidade) ?? ct[0];
		return {
			fMhz: t.frequenciaMhz,
			pol: "horizontal" === t.polarizacao ? 0 : 1,
			clima: t.clima,
			N0: t.refratividade,
			epsilon: o.permissividade,
			sigma: o.condutividade,
			mdvar: e.mdvar,
			tempo: t.tempo,
			local: t.locais,
			situacao: t.situacoes
		};
	}
	Object.freeze({
		frequenciaMhz: 60,
		polarizacao: "vertical",
		clima: M.CONTINENTAL_SUBTROPICAL,
		refratividade: 301,
		solo: "medio",
		variabilidade: "movel",
		tempo: 50,
		locais: 50,
		situacoes: 50
	}), Object.freeze({
		alturaAntena: 3,
		potenciaW: 10,
		ganhoDbi: 2.15,
		perdasDb: 1
	}), Object.freeze({
		alturaAntena: 2,
		ganhoDbi: 2.15,
		perdasDb: 1,
		sensibilidadeDbm: -107
	}), Object.freeze({
		[c.NAO_DEFINIDO]: "não calculado",
		[c.VISADA]: "visada",
		[c.DIFRACAO]: "difração",
		[c.TROPODIFUSAO]: "tropodifusão"
	});
	const At = Math.PI / 180, ft = 180 / Math.PI, ut = 2 * Math.PI;
	var Et = class extends Error {
		constructor(t) {
			super(`A estação ${t} está fora do relevo disponível.`), this.name = "ErroEstacaoSemTerreno", this.estacao = t;
		}
	};
	function It(t, o, { passo: e, radio: a, receptor: n, aoProgredir: r = null }) {
		if (!(e > 0 && t.alcance > 0)) throw new Error("passo e alcance precisam ser positivos");
		const s = o(t.lat, t.lon);
		if (!Number.isFinite(s)) throw new Et(t.nome);
		const { nAmostras: i, passoRaio: l, nRaios: c } = function(t, o) {
			const e = Math.max(1, Math.min(400, Math.ceil(t / o))), a = t / e;
			return {
				nAmostras: e,
				passoRaio: a,
				nRaios: Math.min(1440, Math.max(360, Math.ceil(ut * t / a)))
			};
		}(t.alcance, e), M = ut / c, h = i + 1, f = new Float32Array(c * h), u = (N = n, O = (m = t).potenciaW, 10 * Math.log10(1e3 * O) + m.ganhoDbi - m.perdasDb + N.ganhoDbi - N.perdasDb), E = n.sensibilidadeDbm, I = {
			...ht(a),
			hTx: t.alturaAntena,
			hRx: n.alturaAntena,
			pfl: null
		}, p = new Float64Array(h), d = new Float64Array(h);
		var m, N, O;
		for (let A = 1; A <= i; A++) {
			const t = A * l / at;
			p[A] = Math.sin(t), d[A] = Math.cos(t);
		}
		const R = t.lat * At, T = Math.sin(R), _ = Math.cos(R), w = new Float64Array(i + 3);
		w[1] = l, w[2] = s, I.pfl = w;
		const D = new Uint8Array(h);
		let g = 0;
		for (let S = 0; S < c; S++) {
			const e = S * M, a = Math.sin(e), n = Math.cos(e), l = S * h;
			f[l] = 1 / 0;
			let m = s;
			for (let r = 1; r <= i; r++) {
				const e = T * d[r] + _ * p[r] * n, s = o(Math.asin(e) * ft, t.lon + Math.atan2(a * p[r] * _, d[r] - T * e) * ft);
				D[r] = Number.isFinite(s) ? 1 : 0, D[r] && (m = s), w[r + 2] = m;
			}
			for (let t = 1; t <= i; t++) {
				if (!D[t]) {
					f[l + t] = NaN;
					continue;
				}
				w[0] = t;
				const o = et(I);
				o.erro === A.SUCESSO || o.erro === A.SUCESSO_COM_AVISOS ? f[l + t] = u - o.perdaDb - E : (g++, f[l + t] = NaN);
			}
			!r || 31 & ~S || r(S / c);
		}
		return r && r(1), {
			lat: t.lat,
			lon: t.lon,
			alcance: t.alcance,
			passo: l,
			nRaios: c,
			nAmostras: i,
			dTheta: M,
			margem: f,
			falhasItm: g
		};
	}
	function pt(t, o) {
		const e = [
			0,
			0,
			0,
			0
		];
		let a = 0, n = 0;
		for (let r = 0; r < t.h; r++) {
			const s = (t.latN - r * t.dLat) * At, i = (t.latN - (r + 1) * t.dLat) * At, l = 40589641 * t.dLon * At * (Math.sin(s) - Math.sin(i));
			for (let c = 0; c < t.w; c++) {
				const s = o[r * t.w + c];
				255 !== s ? s > 0 && (a += l, e[s] += l) : n++;
			}
		}
		return {
			areaCobertaKm2: a,
			areaPorClasse: e,
			semTerreno: n,
			celulaM: t.passo
		};
	}
	function dt(t, e = () => {}) {
		const { estacoes: a, radio: s, receptor: i, zoom: l, tiles: c, passo: M } = t, h = function(t, o) {
			if (!o.length) return () => NaN;
			let e = 1 / 0, a = 1 / 0, n = -1 / 0, r = -1 / 0;
			for (const c of o) e = Math.min(e, c.x), a = Math.min(a, c.y), n = Math.max(n, c.x), r = Math.max(r, c.y);
			const s = n - e + 1, i = new Array(s * (r - a + 1)).fill(null);
			for (const c of o) i[(c.y - a) * s + (c.x - e)] = c;
			const l = o[0].largura;
			return (o, c) => {
				const M = function(t, o, e, a) {
					const n = 2 ** e, r = Math.max(-85.051129, Math.min(85.051129, o)), s = (((t + 180) % 360 + 360) % 360 - 180 + 180) / 360 * n, i = Math.sin(r * Math.PI / 180), l = (.5 - Math.log((1 + i) / (1 - i)) / (4 * Math.PI)) * n, c = Math.min(n - 1, Math.max(0, Math.floor(s))), M = Math.min(n - 1, Math.max(0, Math.floor(l))), h = (t) => Math.min(a, Math.max(0, t * a));
					return {
						z: e,
						x: c,
						y: M,
						px: h(s - c),
						py: h(l - M)
					};
				}(c, o, t, l);
				if (M.x < e || M.x > n || M.y < a || M.y > r) return NaN;
				const h = i[(M.y - a) * s + (M.x - e)];
				return h ? function(t, o, e) {
					const { largura: a, altura: n, cotas: r } = t, s = Math.max(0, Math.min(a - 1, o - .5)), i = Math.max(0, Math.min(n - 1, e - .5)), l = Math.floor(s), c = Math.floor(i), M = Math.min(a - 1, l + 1), h = Math.min(n - 1, c + 1), A = s - l, f = i - c;
					return (r[c * a + l] * (1 - A) + r[c * a + M] * A) * (1 - f) + (r[h * a + l] * (1 - A) + r[h * a + M] * A) * f;
				}(h, M.px, M.py) : NaN;
			};
		}(l, c), A = function(t, o, e = 4e6) {
			const { oeste: a, sul: n, leste: r, norte: s } = function(t) {
				let o = -90, e = 90, a = 180, n = -180;
				for (const r of t) {
					const t = r.alcance / at * rt, s = t / Math.cos(r.lat * nt);
					o = Math.max(o, r.lat + t), e = Math.min(e, r.lat - t), a = Math.min(a, r.lon - s), n = Math.max(n, r.lon + s);
				}
				return {
					oeste: a,
					sul: e,
					leste: n,
					norte: o
				};
			}(t), i = Math.cos((s + n) / 2 * nt), l = (t) => {
				const o = t / at * rt, e = o / i;
				return {
					dLat: o,
					dLon: e,
					w: Math.ceil((r - a) / e),
					h: Math.ceil((s - n) / o)
				};
			};
			let c = o, M = l(c), h = !1;
			return M.w * M.h > e && (c *= 1.001 * Math.sqrt(M.w * M.h / e), M = l(c), h = !0), {
				lonW: a,
				latN: s,
				dLon: M.dLon,
				dLat: M.dLat,
				w: M.w,
				h: M.h,
				passo: c,
				engrossou: h
			};
		}(a, M), f = a.map((t, o) => It(t, h, {
			passo: A.passo,
			radio: s,
			receptor: i,
			aoProgredir: (t) => e("estacoes", (o + t) / a.length)
		}));
		e("classes", 0);
		const { classes: u } = function(t, o, e, a = null) {
			const { lonW: n, latN: r, dLon: s, dLat: i, w: l, h: c } = t, M = new Uint8Array(l * c), h = new Float32Array(l * c).fill(-1 / 0);
			for (let A = 0; A < c; A++) {
				const t = r - (A + .5) * i;
				for (let o = 0; o < l; o++) Number.isFinite(e(t, n + (o + .5) * s)) || (M[A * l + o] = 255);
			}
			o.forEach((t, e) => {
				const A = t.lat * At, f = Math.sin(A), u = Math.cos(A), E = Math.sin(t.alcance / 12742e3) ** 2, I = t.alcance / at * ft, p = I / Math.cos(A), d = Math.max(0, Math.floor((r - (t.lat + I)) / i)), m = Math.min(c - 1, Math.ceil((r - (t.lat - I)) / i)), N = Math.max(0, Math.floor((t.lon - p - n) / s)), O = Math.min(l - 1, Math.ceil((t.lon + p - n) / s)), R = O - N + 1, T = new Float64Array(R), _ = new Float64Array(R), w = new Float64Array(R);
				for (let o = N; o <= O; o++) {
					const e = (n + (o + .5) * s - t.lon) * At;
					T[o - N] = Math.sin(e / 2) ** 2, _[o - N] = Math.sin(e), w[o - N] = Math.cos(e);
				}
				const D = t.nAmostras + 1;
				for (let o = d; o <= m; o++) {
					const e = (r - (o + .5) * i) * At, a = Math.sin(e), n = Math.cos(e), s = Math.sin((e - A) / 2) ** 2, c = u * n;
					for (let r = N; r <= O; r++) {
						const e = o * l + r;
						if (255 === M[e]) continue;
						const i = r - N, A = s + c * T[i];
						if (A > E) continue;
						const I = 12742e3 * Math.asin(Math.sqrt(A)), p = Math.round(I / t.passo);
						if (p > t.nAmostras) continue;
						let d = Math.atan2(_[i] * n, u * a - f * n * w[i]);
						d < 0 && (d += ut);
						let m = Math.round(d / t.dTheta);
						m >= t.nRaios && (m -= t.nRaios);
						const O = t.margem[m * D + p];
						O > h[e] && (h[e] = O);
					}
				}
				a && a((e + 1) / o.length);
			});
			for (let A = 0; A < M.length; A++) 255 !== M[A] && (M[A] = Mt(h[A]));
			return {
				classes: M,
				melhorMargem: h
			};
		}(A, f, h, (t) => e("classes", t));
		return {
			grade: o(A, u),
			resumo: pt(A, u),
			engrossou: A.engrossou,
			falhasItm: f.reduce((t, o) => t + o.falhasItm, 0),
			poligonos: r(() => function(t, o) {
				const { w: e, h: a, lonW: r, latN: s, dLon: i, dLat: l } = t, c = new Uint8Array(e * a), M = (t) => Math.round(1e6 * t) / 1e6, h = [];
				for (const A of function(t) {
					const o = /* @__PURE__ */ new Uint8Array(4);
					for (let a = 0; a < t.length; a++) {
						const e = t[a];
						e >= 1 && e <= 3 && (o[e] = 1);
					}
					const e = [];
					for (let a = 1; a <= 3; a++) o[a] && e.push(a);
					return e;
				}(o)) {
					for (let t = 0; t < o.length; t++) c[t] = o[t] === A ? 1 : 0;
					h.push({
						classe: A,
						coordinates: n(c, e, a).map((t) => t.map((t) => t.map(([t, o]) => [M(r + t * i), M(s - o * l)])))
					});
				}
				return h;
			}(A, u))
		};
	}
	"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = ({ data: t }) => {
		try {
			const e = dt(t, (t, o) => self.postMessage({
				tipo: "progresso",
				etapa: t,
				fracao: o
			}));
			self.postMessage({
				tipo: "pronto",
				...e
			}, e.poligonos ? [(o = e.poligonos).estrutura.buffer, o.xy.buffer] : []);
		} catch (e) {
			self.postMessage({
				tipo: "erro",
				mensagem: e?.message ?? String(e),
				estacao: e?.estacao ?? null
			});
		}
		var o;
	});
})();
