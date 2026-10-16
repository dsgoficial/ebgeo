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
	function a(a, e) {
		const { w: o, h: r } = a, n = new Array(r);
		for (let s = 0; s < r; s++) {
			const a = s * o;
			if (s > 0) {
				let t = !0;
				for (let r = 0; r < o; r++) if (e[a + r] !== e[a - o + r]) {
					t = !1;
					break;
				}
				if (t) {
					n[s] = "";
					continue;
				}
			}
			let r = "", i = 0;
			for (; i < o;) {
				const n = e[a + i];
				let s = 1;
				for (; i + s < o && e[a + i + s] === n;) s++;
				r += (s > 1 ? s.toString(36) : "") + t(n), i += s;
			}
			n[s] = r;
		}
		return {
			origem: [a.lonW, a.latN],
			passoGraus: [a.dLon, a.dLat],
			largura: o,
			altura: r,
			celulaM: a.passo,
			rle: n.join("/")
		};
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
	const e = Math.PI, o = Math.sqrt(2), r = 1 / 3, n = Object.freeze({
		NAO_DEFINIDO: 0,
		VISADA: 1,
		DIFRACAO: 2,
		TROPODIFUSAO: 3
	}), s = Object.freeze({
		EQUATORIAL: 1,
		CONTINENTAL_SUBTROPICAL: 2,
		MARITIMO_SUBTROPICAL: 3,
		DESERTO: 4,
		CONTINENTAL_TEMPERADO: 5,
		MARITIMO_TEMPERADO_TERRA: 6,
		MARITIMO_TEMPERADO_MAR: 7
	}), i = Object.freeze({
		MENSAGEM_UNICA: 0,
		ACIDENTAL: 1,
		MOVEL: 2,
		DIFUSAO: 3
	}), l = Object.freeze({
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
	}), M = Object.freeze({
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
	}), c = (t, a) => t > a ? t : a, h = (t, a) => t < a ? t : a, A = (t, a) => t > a ? t - a : 0, u = (t, a) => t > a ? t - a : 0, f = (t) => Math.trunc(t), E = (t, a) => ({
		re: t,
		im: a
	}), I = (t, a) => E(t.re - a.re, t.im - a.im), d = (t, a) => E(t.re + a.re, t.im + a.im), p = (t, a) => E(t.re * a, t.im * a), m = (t) => Math.hypot(t.re, t.im);
	function N(t, a) {
		const e = a.re * a.re + a.im * a.im;
		return E((t.re * a.re + t.im * a.im) / e, (t.im * a.re - t.re * a.im) / e);
	}
	function O(t, a, e) {
		const o = f(t[0]);
		let r = f(u(a / t[1], 0)), n = o - f(u(o, e / t[1]));
		n <= r && (r = f(u(r, 1)), n = o - f(u(o, n + 1)));
		const s = n - r;
		let i = -.5 * s;
		const l = n + i;
		let M = .5 * (t[r + 2] + t[n + 2]), c = .5 * (t[r + 2] - t[n + 2]) * i;
		for (let h = 2; h <= s; h++) r++, i++, M += t[r + 2], c += t[r + 2] * i;
		return M /= s, c = 12 * c / ((s * s + 2) * s), {
			y1: M - c * l,
			y2: M + c * (o - l)
		};
	}
	function R(t) {
		return t < 5.76 ? 6.02 + 9.11 * Math.sqrt(t) - 1.27 * t : 12.953 + 10 * Math.log10(t);
	}
	function T(t, a) {
		return 10 * Math.log10(1 + [
			25,
			80,
			177,
			395,
			705
		][t] * Math.pow(1 / a, 4) + [
			24,
			45,
			68,
			80,
			105
		][t] * Math.pow(1 / a, 2));
	}
	function _(t, a) {
		a = h(c(a, 1), 5);
		const e = f(a), o = a - e;
		let r = T(e - 1, t);
		return 0 !== o && (r = (1 - o) * r + o * T(e, t)), r;
	}
	function D(t, a) {
		return a * (1 - .8 * Math.exp(-t / 5e4));
	}
	function w(t) {
		return .78 * t * Math.exp(-.5 * Math.pow(t, .25));
	}
	function g(t, a) {
		let e;
		if (t < 200) {
			const o = -Math.log(a);
			a < 1e-5 || t * Math.pow(o, 3) > 5495 ? (e = -117, t > 1 && (e = 17.372 * Math.log(t) + e)) : e = 25e-6 * Math.pow(t, 2) / a - 8.686 * o - 15;
		} else if (e = .05751 * t - 4.343 * Math.log(t), t < 2e3) {
			const a = .0134 * t * Math.exp(-.005 * t);
			e = (1 - a) * e + a * (17.372 * Math.log(t) - 117);
		}
		return e;
	}
	function S(t, a, e, o, n, s, i, l, M, c, A) {
		const u = function(t, a, e, o, r) {
			const n = t / e - o, s = t - (r[0] + r[1]), i = a / 47.7 * .0795775 * Math.pow(n, 2) * r[0] * s / (s + r[0]), l = a / 47.7 * .0795775 * Math.pow(n, 2) * r[1] * s / (s + r[1]);
			return R(i) + R(l);
		}(t, A, n, M, a), f = function(t, a, e, o, n, s, i) {
			const l = [
				0,
				0,
				0
			], M = [
				0,
				0,
				0
			], c = [
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
			], u = [
				0,
				0,
				0
			], f = t / e - o;
			l[0] = (t - (n[0] + n[1])) / (t / e - o), l[1] = .5 * Math.pow(n[0], 2) / s[0], l[2] = .5 * Math.pow(n[1], 2) / s[1], M[0] = l[0] * f / 1e3, M[1] = n[0] / 1e3, M[2] = n[1] / 1e3;
			const E = m(i);
			for (let p = 0; p < 3; p++) u[p] = Math.pow(4 / 3 * 637e4 / l[p], r), c[p] = .017778 * u[p] * Math.pow(a, -.3333333333333333) / E, h[p] = 1.607 - c[p];
			A[1] = h[1] * Math.pow(u[1], 2) * Math.pow(a, r) * M[1], A[2] = h[2] * Math.pow(u[2], 2) * Math.pow(a, r) * M[2], A[0] = h[0] * Math.pow(u[0], 2) * Math.pow(a, r) * M[0] + A[1] + A[2];
			const I = g(A[1], c[1]), d = g(A[2], c[2]);
			return .05751 * A[0] - 10 * Math.log10(A[0]) - I - d - 20;
		}(t, A, n, M, a, e, o), E = w(D(c, s)), I = h(15, 5 * Math.log10(1 + 1e-5 * i[0] * i[1] * A * E)), d = D(t, s);
		let p = i[0] * i[1];
		const N = e[0] * e[1] - p;
		0 === l && (p += 10), p = (Math.sqrt(1 + N / p) + (-M * n + (a[0] + a[1])) / t) * h(d * A / 47.7, 6283.2);
		const O = 25.1 / (25.1 + Math.sqrt(p));
		return O * f + (1 - O) * u + I;
	}
	function C(t, a, o, r, n, s, i, l) {
		const M = w(D(t, r)), A = l / 47.7, u = (a[0] + a[1]) / Math.sqrt(Math.pow(t, 2) + Math.pow(a[0] + a[1], 2)), f = E(u, 0);
		let m = p(N(I(f, o), d(f, o)), Math.exp(-h(10, A * M * u)));
		const O = Math.pow(m.re, 2) + Math.pow(m.im, 2);
		(O < .25 || O < u) && (m = p(m, Math.sqrt(u / O)));
		let R = 2 * A * a[0] * a[1] / t;
		R > e / 2 && (R = e - Math.pow(e / 2, 2) / R);
		const T = d(E(Math.cos(R), -Math.sin(R)), m), _ = -10 * Math.log10(Math.pow(T.re, 2) + Math.pow(T.im, 2)), g = n * t + s, S = 1 / (1 + l * r / c(1e4, i));
		return S * _ + (1 - S) * g;
	}
	function b(t, a, e, r, n, s, i, l, M) {
		let A;
		const u = i / 47.7;
		if (M.h0 > 15) A = M.h0;
		else {
			let i = e[0] - e[1], l = r[1] / r[0];
			i < 0 && (i = -i, l = 1 / l);
			const f = a[0] + a[1] + t / n, E = 2 * u * f * r[0], I = 2 * u * f * r[1];
			if (E < .2 && I < .2) return 1001;
			let d = (t - i) / (t + i);
			const p = h(c(.1, l / d), 10);
			d = c(.1, d);
			const m = (t - i) * (t + i) * f * .25 / t, N = m / 1755.6 * (1 + (.031 - .00232 * s + 567e-8 * Math.pow(s, 2)) * Math.exp(-Math.pow(h(1.7, m / 8e3), 6))), O = (_(E, N) + _(I, N)) / 2;
			A = O + h(O, 6 * (.6 - Math.log10(c(N, 1))) * Math.log10(d) * Math.log10(p)), A = c(A, 0), N < 1 && (A = N * A + 10 * (1 - N) * Math.log10(Math.pow((1 + o / E) * (1 + o / I), 2) * (E + I) / (E + I + 2 * o))), A > 15 && M.h0 >= 0 && (A = M.h0);
		}
		M.h0 = A;
		const f = t / n - l;
		return function(t) {
			let a;
			return a = t <= 1e4 ? 0 : t <= 7e4 ? 1 : 2, [
				133.4,
				104.6,
				71.8
			][a] + [
				332e-6,
				212e-6,
				157e-6
			][a] * t + [
				-10,
				-2.5,
				5
			][a] * Math.log10(t);
		}(f * t) + 10 * Math.log10(47.7 * u * Math.pow(f, 4)) - .1 * (s - 301) * Math.exp(-f * t / 4e4) + A;
	}
	function L(t) {
		let a = t;
		t > .5 && (a = 1 - a);
		const e = Math.sqrt(-2 * Math.log(a));
		let o = e - ((.010328 * e + .802853) * e + 2.515516) / (((.001308 * e + .189269) * e + 1.432788) * e + 1);
		return t > .5 && (o = -o), o;
	}
	function U(t, a, e, o, r, n) {
		return (t + a / (1 + Math.pow((n - o) / r, 2))) * Math.pow(n / e, 2) / (1 + Math.pow(n / e, 2));
	}
	const v = [
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
	], F = [
		2.13,
		2.66,
		6.11,
		1.98,
		2.68,
		6.86,
		8.51
	], P = [
		159.5,
		7.67,
		6.65,
		13.11,
		7.16,
		10.38,
		169.8
	], z = [
		762200,
		100400,
		138200,
		139100,
		93700,
		187800,
		609800
	], x = [
		123600,
		172500,
		242200,
		132700,
		186800,
		169600,
		119900
	], y = [
		94500,
		136400,
		178600,
		193500,
		133500,
		108900,
		106600
	], q = [
		2.11,
		6.87,
		10.08,
		3.68,
		4.75,
		8.58,
		8.43
	], H = [
		102.3,
		15.53,
		9.6,
		159.3,
		8.12,
		13.97,
		8.19
	], V = [
		636900,
		138700,
		165300,
		464400,
		93200,
		216e3,
		136200
	], X = [
		134800,
		143700,
		225700,
		93100,
		135900,
		152e3,
		188500
	], j = [
		95600,
		98600,
		129700,
		94200,
		113400,
		122700,
		122900
	], G = [
		1.224,
		.801,
		1.38,
		1,
		1.224,
		1.518,
		1.518
	], B = [
		1.282,
		2.161,
		1.282,
		20,
		1.282,
		1.282,
		1.282
	], Z = [
		1,
		1,
		1,
		1,
		.92,
		1,
		1
	], Q = [
		0,
		0,
		0,
		0,
		.25,
		0,
		0
	], W = [
		0,
		0,
		0,
		0,
		1.77,
		0,
		0
	], K = [
		1,
		.93,
		1,
		.93,
		.93,
		1,
		1
	], k = [
		0,
		.31,
		0,
		.19,
		.31,
		0,
		0
	], $ = [
		0,
		2,
		0,
		1.79,
		2,
		0,
		0
	];
	function J(t) {
		const { hTx: a, hRx: e, pfl: o, clima: s, N0: d, fMhz: p, pol: R, epsilon: T, sigma: _, mdvar: w, tempo: g, local: J, situacao: Y } = t, tt = { warnings: 0 }, at = (t) => ({
			erro: t,
			perdaDb: NaN,
			avisos: tt.warnings,
			modo: n.NAO_DEFINIDO,
			perdaReferenciaDb: NaN,
			perdaEspacoLivreDb: NaN,
			deltaH: NaN,
			alturasEfetivas: [NaN, NaN],
			distanciasHorizonte: [NaN, NaN],
			angulosHorizonte: [NaN, NaN],
			Ns: NaN,
			distanciaKm: o[0] * o[1] / 1e3
		});
		let et = function(t, a, e, o, r, n, s, i, c, h, A, u, f) {
			return (t < 1 || t > 1e3) && (f.warnings |= M.ALTURA_TX), t < .5 || t > 3e3 ? l.ALTURA_TX : ((a < 1 || a > 1e3) && (f.warnings |= M.ALTURA_RX), a < .5 || a > 3e3 ? l.ALTURA_RX : e >= 1 && e <= 7 && Number.isInteger(e) ? s < 250 || s > 400 ? l.REFRATIVIDADE : ((i < 40 || i > 1e4) && (f.warnings |= M.FREQUENCIA), i < 20 || i > 2e4 ? l.FREQUENCIA : 0 !== c && 1 !== c ? l.POLARIZACAO : h < 1 ? l.EPSILON : A <= 0 ? l.SIGMA : u < 0 || u > 3 && u < 10 || u > 13 && u < 20 || u > 23 && u < 30 || u > 33 ? l.MDVAR : n <= 0 || n >= 100 ? l.SITUACAO : o <= 0 || o >= 100 ? l.TEMPO : r <= 0 || r >= 100 ? l.LOCAL : l.SUCESSO) : l.CLIMA);
		}(a, e, s, g, J, Y, d, p, R, T, _, w, tt);
		if (et !== l.SUCESSO) return at(et);
		const ot = f(o[0]), rt = f(.1 * ot);
		let nt = 0;
		for (let r = rt; r <= ot - rt; r++) nt += o[r + 2];
		nt /= ot - 2 * rt + 1;
		const { Zg: st, gammaE: it, Ns: lt } = function(t, a, e, o, r, n) {
			const s = 0 === a ? e : e * Math.exp(-a / 9460), i = 157e-9 * (1 - .04665 * Math.exp(s / 179.3)), l = E(r, 18e3 * n / t);
			let M = function(t) {
				const a = m(t);
				if (0 === a) return E(0, 0);
				const e = Math.sqrt((a + t.re) / 2), o = Math.sqrt((a - t.re) / 2);
				return E(e, t.im < 0 ? -o : o);
			}(I(l, E(1, 0)));
			return 1 === o && (M = N(M, l)), {
				Zg: M,
				gammaE: i,
				Ns: s
			};
		}(p, nt, d, R, T, _), Mt = [a, e], { thetaHzn: ct, dHznMeter: ht, hEMeter: At, deltaHMeter: ut, dMeter: ft } = function(t, a, e) {
			const o = t[0] * t[1], r = f(t[0]), n = 1 / a, { thetaHzn: s, dHznMeter: i } = function(t, a, e) {
				const o = f(t[0]), r = t[1], n = t[0] * t[1], s = t[2] + e[0], i = t[o + 2] + e[1], l = [(i - s) / n - n / (2 * a), -(i - s) / n - n / (2 * a)], M = [n, n];
				let c = 0, h = n;
				for (let A = 1; A < o; A++) {
					c += r, h -= r;
					const e = (t[A + 2] - s) / c - c / (2 * a), o = -(i - t[A + 2]) / h - h / (2 * a);
					e > l[0] && (l[0] = e, M[0] = c), o > l[1] && (l[1] = o, M[1] = h);
				}
				return {
					thetaHzn: l,
					dHznMeter: M
				};
			}(t, n, e), l = [0, 0], M = h(15 * e[0], .1 * i[0]), A = o - h(15 * e[1], .1 * i[1]), E = function(t, a, e) {
				const o = /* @__PURE__ */ new Float64Array(247), r = f(t[0]);
				let n = a / t[1], s = e / t[1];
				if (s - n < 2) return 0;
				let i = f(.1 * (s - n + 8));
				i = h(c(4, i), 25);
				const l = 10 * i - 5, M = l - i, A = l - 1;
				o[0] = A, o[1] = 1, s = (s - n) / A;
				let u = f(n);
				n -= Math.fround(u + 1);
				for (let c = 0; c < l; c++) {
					for (; n > 0 && u + 1 < r;) n--, u++;
					o[c + 2] = t[u + 3] + (t[u + 3] - t[u + 2]) * n, n += s;
				}
				const E = O(o, 0, A);
				let I = E.y1;
				const d = (E.y2 - I) / A, p = new Float64Array(l);
				for (let c = 0; c < l; c++) p[c] = o[c + 2] - I, I += d;
				return p.sort(), (p[l - i] - p[l - 1 - M]) / (1 - .8 * Math.exp(-(e - a) / 5e4));
			}(t, M, A);
			if (i[0] + i[1] > 1.5 * o) {
				const a = O(t, M, A);
				l[0] = e[0] + u(t[2], a.y1), l[1] = e[1] + u(t[r + 2], a.y2);
				for (let t = 0; t < 2; t++) i[t] = Math.sqrt(2 * l[t] * n) * Math.exp(-.07 * Math.sqrt(E / c(l[t], 5)));
				const h = i[0] + i[1];
				if (h <= o) {
					const t = Math.pow(o / h, 2);
					for (let a = 0; a < 2; a++) l[a] = l[a] * t, i[a] = Math.sqrt(2 * l[a] * n) * Math.exp(-.07 * Math.sqrt(E / c(l[a], 5)));
				}
				for (let t = 0; t < 2; t++) {
					const a = Math.sqrt(2 * l[t] * n);
					s[t] = (.65 * E * (a / i[t] - 1) - 2 * l[t]) / a;
				}
			} else {
				const a = O(t, M, .9 * i[0]);
				l[0] = e[0] + u(t[2], a.y1);
				const n = O(t, o - .9 * i[1], A);
				l[1] = e[1] + u(t[r + 2], n.y2);
			}
			return {
				thetaHzn: s,
				dHznMeter: i,
				hEMeter: l,
				deltaHMeter: E,
				dMeter: o
			};
		}(o, it, Mt), Et = function(t, a, e, o, r, s, i, u, f, E, I, d) {
			const p = 1 / s, m = [Math.sqrt(2 * r[0] * p), Math.sqrt(2 * r[1] * p)], N = m[0] + m[1], O = o[0] + o[1], R = -c(t[0] + t[1], -O / p);
			Math.abs(t[0]) > .2 && (d.warnings |= M.ANGULO_HORIZONTE_TX), Math.abs(t[1]) > .2 && (d.warnings |= M.ANGULO_HORIZONTE_RX), o[0] < .1 * m[0] && (d.warnings |= M.DISTANCIA_HORIZONTE_TX_1), o[1] < .1 * m[1] && (d.warnings |= M.DISTANCIA_HORIZONTE_RX_1), o[0] > 3 * m[0] && (d.warnings |= M.DISTANCIA_HORIZONTE_TX_2), o[1] > 3 * m[1] && (d.warnings |= M.DISTANCIA_HORIZONTE_RX_2);
			const T = (t) => ({
				erro: t,
				ArefDb: NaN,
				modo: n.NAO_DEFINIDO
			});
			if (i < 150) return T(l.REFRATIVIDADE_DE_SUPERFICIE_PEQUENA);
			if (i > 400) return T(l.REFRATIVIDADE_DE_SUPERFICIE_GRANDE);
			if (i < 250 && (d.warnings |= M.REFRATIVIDADE_DE_SUPERFICIE), p < 4e6 || p > 13333333) return T(l.TERRA_EFETIVA);
			if (e.re <= Math.abs(e.im)) return T(l.IMPEDANCIA_DO_SOLO);
			const _ = c(N, O + 5 * Math.pow(Math.pow(p, 2) / a, 1 / 3)), D = _ + 10 * Math.pow(Math.pow(p, 2) / a, 1 / 3), w = S(_, o, r, e, p, u, f, 0, R, N, a), g = (S(D, o, r, e, p, u, f, 0, R, N, a) - w) / (D - _), L = w - g * _;
			let U, v;
			if (E < Math.abs(r[0] - r[1]) / .2 && (d.warnings |= M.DISTANCIA_PEQUENA_1), E < 1e3 && (d.warnings |= M.DISTANCIA_PEQUENA_2), E > 1e6 && (d.warnings |= M.DISTANCIA_GRANDE_1), E > 2e6 && (d.warnings |= M.DISTANCIA_GRANDE_2), E < N) {
				const t = N * g + L;
				let o, s = .04 * a * r[0] * r[1];
				L >= 0 ? (s = h(s, .5 * O), o = s + .25 * (O - s)) : o = c(-L / g, .25 * O);
				const i = C(o, r, e, u, g, L, N, a);
				let l = !1, M = 0, f = 0;
				if (s < o) {
					const n = C(s, r, e, u, g, L, N, a), h = Math.log(N / s);
					f = c(0, ((N - s) * (i - n) - (o - s) * (t - n)) / ((N - s) * Math.log(o / s) - (o - s) * h)), l = L > 0 || f > 0, l && (M = (t - n - f * h) / (N - s), M < 0 && (M = 0, f = A(t, n) / h, 0 === f && (M = g)));
				}
				l || (M = A(t, i) / (N - o), f = 0, 0 === M && (M = g)), U = t - M * N - f * Math.log(N) + M * E + f * Math.log(E), v = n.VISADA;
			} else {
				const e = O + 2e5, s = { h0: -1 }, l = b(O + 4e5, t, o, r, p, i, a, R, s), M = b(e, t, o, r, p, i, a, R, s);
				let h, A, u;
				M < 1e3 ? (h = (l - M) / 2e5, u = c(c(N, O + 1.088 * Math.pow(Math.pow(p, 2) / a, 1 / 3) * Math.log(a)), (M - L - h * e) / (g - h)), A = (g - h) * u + L) : (h = g, A = L, u = 1e7), E > u ? (U = h * E + A, v = n.TROPODIFUSAO) : (U = g * E + L, v = n.DIFRACAO);
			}
			return U = c(U, 0), {
				erro: l.SUCESSO,
				ArefDb: U,
				modo: v
			};
		}(ct, p, st, ht, At, it, lt, ut, Mt, ft, 0, tt);
		if (Et.erro !== l.SUCESSO) return at(Et.erro);
		const It = function(t, a) {
			return 32.45 + 20 * Math.log10(a) + 20 * Math.log10(t / 1e3);
		}(ft, p), dt = function(t, a, e, o, n, s, l, c, h, A, u) {
			let f = L(t / 100), E = L(a / 100);
			const I = L(e / 100), d = h - 1, p = s / 47.7, m = Math.sqrt(18e6 * o[0]) + Math.sqrt(18e6 * o[1]) + Math.pow(5757e11 / p, r), N = l < m ? 13e4 * l / m : 13e4 + l - m;
			let O = A;
			const R = O >= 20;
			R && (O -= 20);
			const T = R ? 0 : 5 + 3 * Math.exp(-N / 1e5), _ = O >= 10;
			_ && (O -= 10);
			const w = U(v[0][d], v[1][d], v[2][d], v[3][d], v[4][d], N);
			let g;
			if (O === i.MENSAGEM_UNICA ? (f = I, E = I) : O === i.ACIDENTAL ? E = I : O === i.MOVEL && (E = f), (Math.abs(f) > 3.1 || Math.abs(E) > 3.1 || Math.abs(I) > 3.1) && (u.warnings |= M.VARIABILIDADE_EXTREMA), _) g = 0;
			else {
				const t = D(l, n);
				g = 10 * p * t / (p * t + 13);
			}
			const S = g * E, C = Math.log(.133 * p), b = Z[d] + Q[d] / (Math.pow(W[d] * C, 2) + 1), J = K[d] + k[d] / (Math.pow($[d] * C, 2) + 1), Y = U(F[d], P[d], z[d], x[d], y[d], N) * b, tt = U(q[d], H[d], V[d], X[d], j[d], N) * J, at = G[d] * tt;
			let et;
			et = f < 0 ? Y : f <= B[d] ? tt : at + (tt - at) * B[d] / f;
			const ot = et * f, rt = Math.pow(T, 2) + Math.pow(ot, 2) / (7.8 + Math.pow(I, 2)) + Math.pow(S, 2) / (24 + Math.pow(I, 2));
			let nt, st;
			O === i.MENSAGEM_UNICA ? (nt = 0, st = Math.sqrt(Math.pow(et, 2) + Math.pow(g, 2) + rt) * I) : O === i.ACIDENTAL ? (nt = ot, st = Math.sqrt(Math.pow(g, 2) + rt) * I) : O === i.MOVEL ? (nt = Math.sqrt(Math.pow(et, 2) + Math.pow(g, 2)) * f, st = Math.sqrt(rt) * I) : (nt = ot + S, st = Math.sqrt(rt) * I);
			let it = c - w - nt - st;
			return it < 0 && (it = it * (29 - it) / (29 - 10 * it)), it;
		}(g, J, Y, At, ut, p, ft, Et.ArefDb, s, w, tt) + It;
		return et = 0 !== tt.warnings ? l.SUCESSO_COM_AVISOS : l.SUCESSO, {
			erro: et,
			perdaDb: dt,
			avisos: tt.warnings,
			modo: Et.modo,
			perdaReferenciaDb: Et.ArefDb,
			perdaEspacoLivreDb: It,
			deltaH: ut,
			alturasEfetivas: At,
			distanciasHorizonte: ht,
			angulosHorizonte: ct,
			Ns: lt,
			distanciaKm: o[0] * o[1] / 1e3
		};
	}
	const Y = 6371e3, tt = Math.PI / 180, at = 180 / Math.PI;
	const et = Object.freeze([
		0,
		10,
		20
	]), ot = Object.freeze({
		SEM_ENLACE: 0,
		MARGINAL: 1,
		BOM: 2,
		FORTE: 3
	}), rt = (Object.freeze([
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
	])), nt = (Object.freeze([
		{
			valor: s.EQUATORIAL,
			rotulo: "Equatorial"
		},
		{
			valor: s.CONTINENTAL_SUBTROPICAL,
			rotulo: "Continental subtropical"
		},
		{
			valor: s.MARITIMO_SUBTROPICAL,
			rotulo: "Marítimo subtropical"
		},
		{
			valor: s.DESERTO,
			rotulo: "Desértico"
		},
		{
			valor: s.CONTINENTAL_TEMPERADO,
			rotulo: "Continental temperado"
		},
		{
			valor: s.MARITIMO_TEMPERADO_TERRA,
			rotulo: "Marítimo temperado (terra)"
		},
		{
			valor: s.MARITIMO_TEMPERADO_MAR,
			rotulo: "Marítimo temperado (mar)"
		}
	]), Object.freeze([
		{
			valor: "movel",
			mdvar: i.MOVEL,
			rotulo: "Móvel"
		},
		{
			valor: "acidental",
			mdvar: i.ACIDENTAL,
			rotulo: "Acidental"
		},
		{
			valor: "difusao",
			mdvar: i.DIFUSAO,
			rotulo: "Difusão (broadcast)"
		},
		{
			valor: "mensagem-unica",
			mdvar: i.MENSAGEM_UNICA,
			rotulo: "Mensagem única"
		}
	]));
	function st(t) {
		return t >= et[0] ? t < et[1] ? ot.MARGINAL : t < et[2] ? ot.BOM : ot.FORTE : ot.SEM_ENLACE;
	}
	function it(t) {
		const a = rt.find((a) => a.valor === t.solo) ?? rt[0], e = nt.find((a) => a.valor === t.variabilidade) ?? nt[0];
		return {
			fMhz: t.frequenciaMhz,
			pol: "horizontal" === t.polarizacao ? 0 : 1,
			clima: t.clima,
			N0: t.refratividade,
			epsilon: a.permissividade,
			sigma: a.condutividade,
			mdvar: e.mdvar,
			tempo: t.tempo,
			local: t.locais,
			situacao: t.situacoes
		};
	}
	Object.freeze({
		frequenciaMhz: 60,
		polarizacao: "vertical",
		clima: s.CONTINENTAL_SUBTROPICAL,
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
		[n.NAO_DEFINIDO]: "não calculado",
		[n.VISADA]: "visada",
		[n.DIFRACAO]: "difração",
		[n.TROPODIFUSAO]: "tropodifusão"
	});
	const lt = Math.PI / 180, Mt = 180 / Math.PI, ct = 2 * Math.PI;
	var ht = class extends Error {
		constructor(t) {
			super(`A estação ${t} está fora do relevo disponível.`), this.name = "ErroEstacaoSemTerreno", this.estacao = t;
		}
	};
	function At(t, a, { passo: e, radio: o, receptor: r, aoProgredir: n = null }) {
		if (!(e > 0 && t.alcance > 0)) throw new Error("passo e alcance precisam ser positivos");
		const s = a(t.lat, t.lon);
		if (!Number.isFinite(s)) throw new ht(t.nome);
		const { nAmostras: i, passoRaio: M, nRaios: c } = function(t, a) {
			const e = Math.max(1, Math.min(400, Math.ceil(t / a))), o = t / e;
			return {
				nAmostras: e,
				passoRaio: o,
				nRaios: Math.min(1440, Math.max(360, Math.ceil(ct * t / o)))
			};
		}(t.alcance, e), h = ct / c, A = i + 1, u = new Float32Array(c * A), f = (N = r, O = (m = t).potenciaW, 10 * Math.log10(1e3 * O) + m.ganhoDbi - m.perdasDb + N.ganhoDbi - N.perdasDb), E = r.sensibilidadeDbm, I = {
			...it(o),
			hTx: t.alturaAntena,
			hRx: r.alturaAntena,
			pfl: null
		}, d = new Float64Array(A), p = new Float64Array(A);
		var m, N, O;
		for (let l = 1; l <= i; l++) {
			const t = l * M / Y;
			d[l] = Math.sin(t), p[l] = Math.cos(t);
		}
		const R = t.lat * lt, T = Math.sin(R), _ = Math.cos(R), D = new Float64Array(i + 3);
		D[1] = M, D[2] = s, I.pfl = D;
		const w = new Uint8Array(A);
		let g = 0;
		for (let S = 0; S < c; S++) {
			const e = S * h, o = Math.sin(e), r = Math.cos(e), M = S * A;
			u[M] = Infinity;
			let m = s;
			for (let n = 1; n <= i; n++) {
				const e = T * p[n] + _ * d[n] * r, s = a(Math.asin(e) * Mt, t.lon + Math.atan2(o * d[n] * _, p[n] - T * e) * Mt);
				w[n] = Number.isFinite(s) ? 1 : 0, w[n] && (m = s), D[n + 2] = m;
			}
			for (let t = 1; t <= i; t++) {
				if (!w[t]) {
					u[M + t] = NaN;
					continue;
				}
				D[0] = t;
				const a = J(I);
				a.erro === l.SUCESSO || a.erro === l.SUCESSO_COM_AVISOS ? u[M + t] = f - a.perdaDb - E : (g++, u[M + t] = NaN);
			}
			!n || 31 & ~S || n(S / c);
		}
		return n && n(1), {
			lat: t.lat,
			lon: t.lon,
			alcance: t.alcance,
			passo: M,
			nRaios: c,
			nAmostras: i,
			dTheta: h,
			margem: u,
			falhasItm: g
		};
	}
	function ut(t, a) {
		const e = [
			0,
			0,
			0,
			0
		];
		let o = 0, r = 0;
		for (let n = 0; n < t.h; n++) {
			const s = (t.latN - n * t.dLat) * lt, i = (t.latN - (n + 1) * t.dLat) * lt, l = 40589641 * t.dLon * lt * (Math.sin(s) - Math.sin(i));
			for (let M = 0; M < t.w; M++) {
				const s = a[n * t.w + M];
				255 !== s ? s > 0 && (o += l, e[s] += l) : r++;
			}
		}
		return {
			areaCobertaKm2: o,
			areaPorClasse: e,
			semTerreno: r,
			celulaM: t.passo
		};
	}
	function ft(t, e = () => {}) {
		const { estacoes: o, radio: r, receptor: n, zoom: s, tiles: i, passo: l } = t, M = function(t, a) {
			if (!a.length) return () => NaN;
			let e = Infinity, o = Infinity, r = -Infinity, n = -Infinity;
			for (const M of a) e = Math.min(e, M.x), o = Math.min(o, M.y), r = Math.max(r, M.x), n = Math.max(n, M.y);
			const s = r - e + 1, i = new Array(s * (n - o + 1)).fill(null);
			for (const M of a) i[(M.y - o) * s + (M.x - e)] = M;
			const l = a[0].largura;
			return (a, M) => {
				const c = function(t, a, e, o) {
					const r = 2 ** e, n = Math.max(-85.051129, Math.min(85.051129, a)), s = (((t + 180) % 360 + 360) % 360 - 180 + 180) / 360 * r, i = Math.sin(n * Math.PI / 180), l = (.5 - Math.log((1 + i) / (1 - i)) / (4 * Math.PI)) * r, M = Math.min(r - 1, Math.max(0, Math.floor(s))), c = Math.min(r - 1, Math.max(0, Math.floor(l))), h = (t) => Math.min(o, Math.max(0, t * o));
					return {
						z: e,
						x: M,
						y: c,
						px: h(s - M),
						py: h(l - c)
					};
				}(M, a, t, l);
				if (c.x < e || c.x > r || c.y < o || c.y > n) return NaN;
				const h = i[(c.y - o) * s + (c.x - e)];
				return h ? function(t, a, e) {
					const { largura: o, altura: r, cotas: n } = t, s = Math.max(0, Math.min(o - 1, a - .5)), i = Math.max(0, Math.min(r - 1, e - .5)), l = Math.floor(s), M = Math.floor(i), c = Math.min(o - 1, l + 1), h = Math.min(r - 1, M + 1), A = s - l, u = i - M;
					return (n[M * o + l] * (1 - A) + n[M * o + c] * A) * (1 - u) + (n[h * o + l] * (1 - A) + n[h * o + c] * A) * u;
				}(h, c.px, c.py) : NaN;
			};
		}(s, i), c = function(t, a, e = 4e6) {
			const { oeste: o, sul: r, leste: n, norte: s } = function(t) {
				let a = -90, e = 90, o = 180, r = -180;
				for (const n of t) {
					const t = n.alcance / Y * at, s = t / Math.cos(n.lat * tt);
					a = Math.max(a, n.lat + t), e = Math.min(e, n.lat - t), o = Math.min(o, n.lon - s), r = Math.max(r, n.lon + s);
				}
				return {
					oeste: o,
					sul: e,
					leste: r,
					norte: a
				};
			}(t), i = Math.cos((s + r) / 2 * tt), l = (t) => {
				const a = t / Y * at, e = a / i;
				return {
					dLat: a,
					dLon: e,
					w: Math.ceil((n - o) / e),
					h: Math.ceil((s - r) / a)
				};
			};
			let M = a, c = l(M), h = !1;
			return c.w * c.h > e && (M *= 1.001 * Math.sqrt(c.w * c.h / e), c = l(M), h = !0), {
				lonW: o,
				latN: s,
				dLon: c.dLon,
				dLat: c.dLat,
				w: c.w,
				h: c.h,
				passo: M,
				engrossou: h
			};
		}(o, l), h = o.map((t, a) => At(t, M, {
			passo: c.passo,
			radio: r,
			receptor: n,
			aoProgredir: (t) => e("estacoes", (a + t) / o.length)
		}));
		e("classes", 0);
		const { classes: A } = function(t, a, e, o = null) {
			const { lonW: r, latN: n, dLon: s, dLat: i, w: l, h: M } = t, c = new Uint8Array(l * M), h = new Float32Array(l * M).fill(-Infinity);
			for (let A = 0; A < M; A++) {
				const t = n - (A + .5) * i;
				for (let a = 0; a < l; a++) Number.isFinite(e(t, r + (a + .5) * s)) || (c[A * l + a] = 255);
			}
			a.forEach((t, e) => {
				const A = t.lat * lt, u = Math.sin(A), f = Math.cos(A), E = Math.sin(t.alcance / 12742e3) ** 2, I = t.alcance / Y * Mt, d = I / Math.cos(A), p = Math.max(0, Math.floor((n - (t.lat + I)) / i)), m = Math.min(M - 1, Math.ceil((n - (t.lat - I)) / i)), N = Math.max(0, Math.floor((t.lon - d - r) / s)), O = Math.min(l - 1, Math.ceil((t.lon + d - r) / s)), R = O - N + 1, T = new Float64Array(R), _ = new Float64Array(R), D = new Float64Array(R);
				for (let a = N; a <= O; a++) {
					const e = (r + (a + .5) * s - t.lon) * lt;
					T[a - N] = Math.sin(e / 2) ** 2, _[a - N] = Math.sin(e), D[a - N] = Math.cos(e);
				}
				const w = t.nAmostras + 1;
				for (let a = p; a <= m; a++) {
					const e = (n - (a + .5) * i) * lt, o = Math.sin(e), r = Math.cos(e), s = Math.sin((e - A) / 2) ** 2, M = f * r;
					for (let n = N; n <= O; n++) {
						const e = a * l + n;
						if (255 === c[e]) continue;
						const i = n - N, A = s + M * T[i];
						if (A > E) continue;
						const I = 12742e3 * Math.asin(Math.sqrt(A)), d = Math.round(I / t.passo);
						if (d > t.nAmostras) continue;
						let p = Math.atan2(_[i] * r, f * o - u * r * D[i]);
						p < 0 && (p += ct);
						let m = Math.round(p / t.dTheta);
						m >= t.nRaios && (m -= t.nRaios);
						const O = t.margem[m * w + d];
						O > h[e] && (h[e] = O);
					}
				}
				o && o((e + 1) / a.length);
			});
			for (let A = 0; A < c.length; A++) 255 !== c[A] && (c[A] = st(h[A]));
			return {
				classes: c,
				melhorMargem: h
			};
		}(c, h, M, (t) => e("classes", t));
		return {
			grade: a(c, A),
			resumo: ut(c, A),
			engrossou: c.engrossou,
			falhasItm: h.reduce((t, a) => t + a.falhasItm, 0)
		};
	}
	"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = ({ data: t }) => {
		try {
			const a = ft(t, (t, a) => self.postMessage({
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
				estacao: a?.estacao ?? null
			});
		}
	});
})();
