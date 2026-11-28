(function() {
	const t = Math.PI / 180, a = (1 - 1 / 7) / 12742e3;
	function n(n, e, o) {
		const r = function(a, n, e) {
			const { nAz: o, nDist: r, passoAzGraus: s, distancias: i } = a, c = Math.max(i[0], Math.hypot(n, e));
			if (!(c <= i[r - 1])) return null;
			const l = (Math.atan2(n, e) / t % 360 + 360) % 360 / s, u = Math.floor(l), f = function(t, a) {
				let n = 0, e = t.length - 1;
				if (a <= t[0]) return 0;
				if (a >= t[e]) return e;
				for (; e - n > 1;) {
					const o = n + e >> 1;
					t[o] <= a ? n = o : e = o;
				}
				return n;
			}(i, c), h = Math.min(f + 1, r - 1);
			return {
				i0: (u % o + o) % o,
				i1: ((u + 1) % o + o) % o,
				j0: f,
				j1: h,
				ta: l - u,
				td: h > f ? (c - i[f]) / (i[h] - i[f]) : 0
			};
		}(n, e, o);
		if (!r) return NaN;
		const { nDist: s, distancias: i, altura: c } = n, l = (t, n) => c[t * s + n] + a * i[n] * i[n], u = l(r.i0, r.j0), f = l(r.i1, r.j0), h = l(r.i0, r.j1), d = l(r.i1, r.j1), M = u + (f - u) * r.ta;
		return M + (h + (d - h) * r.ta - M) * r.td;
	}
	const e = Object.freeze({
		VISIVEL: "visivel",
		PARCIAL: "parcial",
		ESCONDIDO: "escondido"
	}), o = (Object.freeze({
		[e.VISIVEL]: "Visível",
		[e.PARCIAL]: "Parcialmente visível",
		[e.ESCONDIDO]: "Escondido pelo relevo"
	}), Math.PI / 180);
	let r = null;
	self.onmessage = ({ data: t }) => {
		if (t.grade && (r = t.grade), !t.olho || !r) return;
		const e = performance.now(), s = function(t, e, r, { razao: s = 1.02, d0: i = 5 } = {}) {
			const c = t.distancias[t.nDist - 1], l = Math.hypot(e.e, e.n) + c, u = Math.max(1, Math.ceil(Math.log(l / i) / Math.log(s)) + 1), { az0: f, nAz: h, passoGraus: d, volta: M } = r, v = new Float32Array(h * u), m = {
				e: e.e,
				n: e.n,
				cota: e.cota,
				az0: f,
				nAz: h,
				passoGraus: d,
				volta: M,
				d0: i,
				razao: s,
				nD: u,
				mascara: v
			};
			let p = 0;
			function z(r) {
				const l = (f + r * d) * o, h = Math.sin(l), M = Math.cos(l), m = r * u;
				let p = -1 / 0, z = i;
				for (let o = 0; o < u; o++, z *= s) {
					const r = e.e + z * h, s = e.n + z * M, i = n(t, r, s);
					if (Number.isNaN(i)) {
						if (r * r + s * s > c * c && r * h + s * M > 0) return void v.fill(p, m + o, m + u);
					} else {
						const t = (i - a * z * z - e.cota) / z;
						t > p && (p = t);
					}
					v[m + o] = p;
				}
			}
			return {
				avancar(t = 1 / 0, a = () => performance.now()) {
					const n = t === 1 / 0 ? 0 : a();
					for (; p < h && (z(p++), !(t !== 1 / 0 && a() - n >= t)););
					return p >= h;
				},
				get pronta() {
					return p >= h;
				},
				get tabela() {
					return m;
				}
			};
		}(r, t.olho, t.janela);
		s.avancar();
		const i = s.tabela;
		self.postMessage({
			vez: t.vez,
			tabela: i,
			ms: performance.now() - e
		}, [i.mascara.buffer]);
	};
})();
