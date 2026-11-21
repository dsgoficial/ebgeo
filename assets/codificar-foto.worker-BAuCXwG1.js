"undefined" != typeof self && "function" == typeof self.postMessage && "undefined" == typeof window && (self.onmessage = async ({ data: e }) => {
	try {
		const t = await async function({ bitmap: e, tipo: t, qualidade: s }) {
			try {
				const a = new OffscreenCanvas(e.width, e.height);
				return a.getContext("2d").drawImage(e, 0, 0), await a.convertToBlob(void 0 === s ? { type: t } : {
					type: t,
					quality: s
				});
			} finally {
				e.close?.();
			}
		}(e);
		self.postMessage({
			id: e.id,
			blob: t
		});
	} catch (t) {
		self.postMessage({
			id: e?.id,
			erro: String(t?.message || t)
		});
	}
});
