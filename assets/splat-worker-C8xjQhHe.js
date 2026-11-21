var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../external/egs-core/node_modules/.pnpm/fflate@0.8.3/node_modules/fflate/esm/browser.js
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b[i2] = start += 1 << eb[i2 - 1];
  }
  var r = new i32(b[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j = b[i2]; j < b[i2 + 1]; ++j) {
      r[j] = j - b[i2] << 5 | i2;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = (function(cd, mb, r) {
  var s = cd.length;
  var i2 = 0;
  var l = new u16(mb);
  for (; i2 < s; ++i2) {
    if (cd[i2])
      ++l[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v = le[cd[i2] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
});
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i2 = 1; i2 < a.length; ++i2) {
    if (a[i2] > m)
      m = a[i2];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  // determined by compression function
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i2++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i2++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b = fleb[i2];
          add = bits(dat, pos, (1 << b) - 1) + fl[i2];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i2 = 0; ; ) {
    var c = d[i2++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i2 + eb > d.length)
      return { s: r, r: slc(d, i2 - 1) };
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i2++] & 63) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i2++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63);
  }
};
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), efl = b2(d, b + 30), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
  var _a2 = z64hs(d, es, efl, z, b4(d, b + 20), b4(d, b + 24), b4(d, b + 42)), sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + efl + b2(d, b + 32), off];
};
var z64hs = function(d, b, l, z, sc, su, off) {
  var nsc = sc == 4294967295, nsu = su == 4294967295, noff = off == 4294967295, e = b + l;
  var nf = nsc + nsu + noff;
  if (z && nf) {
    for (; b + 4 < e; b += 4 + b2(d, b + 2)) {
      if (b2(d, b) == 1) {
        return [
          nsc ? b8(d, b + 4 + 8 * nsu) : sc,
          nsu ? b8(d, b + 4) : su,
          noff ? b8(d, b + 4 + 8 * (nsu + nsc)) : off,
          1
        ];
      }
    }
    if (z < 2)
      err(13);
  }
  return [sc, su, off, 0];
};
function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      err(13);
  }
  ;
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = b4(data, e - 20) == 117853008;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792;
    if (z) {
      c = b4(data, ze + 32);
      o = b4(data, ze + 48);
    }
  }
  var fltr = opts && opts.filter;
  for (var i2 = 0; i2 < c; ++i2) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2)
        files[fn] = slc(data, b, b + sc);
      else if (c_2 == 8)
        files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
      else
        err(14, "unknown compression type " + c_2);
    }
  }
  return files;
}

// ../../external/egs-core/packages/loaders/splat-loader/utils.ts
function createSingleSplat() {
  return {
    x: 0,
    y: 0,
    z: 0,
    sx: 0,
    sy: 0,
    sz: 0,
    qx: 0,
    qy: 0,
    qz: 0,
    qw: 0,
    r: 0,
    g: 0,
    b: 0,
    a: 0
  };
}
var SH_C0 = 0.28209479177387814;
var SH_MAPS = {
  0: 0,
  1: 9,
  2: 24,
  3: 45
};
var NUM_F_REST_TO_SH_DEGREE = {
  0: 0,
  9: 1,
  24: 2,
  45: 3
};
function computeTextureSize(counts, maxTextureSize) {
  if (counts === 0) {
    return { w: 0, h: 0, d: 0 };
  }
  const width = Math.min(2 ** Math.ceil(Math.log2(Math.sqrt(counts))), maxTextureSize);
  const height = Math.min(Math.ceil(counts / width), maxTextureSize);
  const depth = Math.ceil(counts / (width * height));
  return { w: width, h: height, d: depth };
}
var canvas;
var context;
async function decodeImage(fileBytes) {
  if (!context) {
    canvas = new OffscreenCanvas(1, 1);
    context = canvas.getContext("2d", { willReadFrequently: true }) ?? void 0;
  }
  if (!context) {
    throw new Error("Failed to create context");
  }
  const imageBlob = new Blob([fileBytes]);
  const bitmap = await createImageBitmap(imageBlob, {
    premultiplyAlpha: "none"
  });
  const { width, height } = bitmap;
  canvas.width = width;
  canvas.height = height;
  context.drawImage(bitmap, 0, 0, width, height);
  const data = context.getImageData(0, 0, width, height);
  return {
    data: new Uint8Array(data.data.buffer, data.data.byteOffset, data.data.length),
    width,
    height
  };
}
var f32buffer = new Float32Array(1);
var u32buffer = new Uint32Array(f32buffer.buffer);
function toHalf(f) {
  f32buffer[0] = f;
  const bits2 = u32buffer[0];
  const sign = bits2 >> 31 & 1;
  const exp = bits2 >> 23 & 255;
  const frac = bits2 & 8388607;
  const halfSign = sign << 15;
  if (exp === 255) {
    if (frac !== 0) {
      return halfSign | 32767;
    }
    return halfSign | 31744;
  }
  const newExp = exp - 127 + 15;
  if (newExp >= 31) {
    return halfSign | 31744;
  }
  if (newExp <= 0) {
    if (newExp < -10) {
      return halfSign;
    }
    const subFrac = (frac | 8388608) >> 1 - newExp + 13;
    return halfSign | subFrac;
  }
  const halfFrac = frac >> 13;
  return halfSign | newExp << 10 | halfFrac;
}
function fromHalf(h) {
  const sign = h >> 15 & 1;
  const exp = h >> 10 & 31;
  const frac = h & 1023;
  let f32bits;
  if (exp === 0) {
    if (frac === 0) {
      f32bits = sign << 31;
    } else {
      let mant = frac;
      let e = -14;
      while ((mant & 1024) === 0) {
        mant <<= 1;
        e--;
      }
      mant &= 1023;
      const newExp = e + 127;
      const newFrac = mant << 13;
      f32bits = sign << 31 | newExp << 23 | newFrac;
    }
  } else if (exp === 31) {
    if (frac === 0) {
      f32bits = sign << 31 | 2139095040;
    } else {
      f32bits = sign << 31 | 2143289344;
    }
  } else {
    const newExp = exp - 15 + 127;
    const newFrac = frac << 13;
    f32bits = sign << 31 | newExp << 23 | newFrac;
  }
  u32buffer[0] = f32bits;
  return f32buffer[0];
}
function encode111011s(a, b, c) {
  return clamp((a * 0.5 + 0.5) * 2047 | 0, 0, 2047) << 21 | clamp((b * 0.5 + 0.5) * 1023 | 0, 0, 1023) << 11 | clamp((c * 0.5 + 0.5) * 2047 | 0, 0, 2047);
}
function decode111011s(decode, out, offset) {
  out[offset + 0] = (decode >>> 21 & 2047) / 2047 * 2 - 1;
  out[offset + 1] = (decode >>> 11 & 1023) / 1023 * 2 - 1;
  out[offset + 2] = (decode & 2047) / 2047 * 2 - 1;
}
function clamp(v, min, max2) {
  return Math.min(Math.max(v, min), max2);
}
function isUrl(str) {
  let url;
  try {
    url = new URL(str);
  } catch {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
function extractFromRootDir(entries) {
  let dir = "";
  for (const path in entries) {
    if (path.endsWith("/")) {
      dir = path;
      break;
    }
  }
  const result = {};
  for (const path in entries) {
    result[path.replace(dir, "")] = entries[path];
  }
  return result;
}
var Vector3 = class {
  constructor(x2, y, z) {
    this.x = x2;
    this.y = y;
    this.z = z;
  }
  set(x2, y, z) {
    this.x = x2;
    this.y = y;
    this.z = z;
    return this;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  divideScalar(scalar) {
    const invLength = 1 / scalar;
    this.x *= invLength;
    this.y *= invLength;
    this.z *= invLength;
    return this;
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
};
var Quaternion = class {
  constructor(x2, y, z, w) {
    this.x = x2;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  set(x2, y, z, w) {
    this.x = x2;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  normalize() {
    const length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    if (length === 0) {
      return this;
    }
    const invLength = 1 / length;
    this.x *= invLength;
    this.y *= invLength;
    this.z *= invLength;
    this.w *= invLength;
    return this;
  }
};
var tempArr = new Array(4);
var tempVec = new Vector3(0, 0, 0);
var tempQuat = new Quaternion(0, 0, 0, 1);
function encodeQuatOct(x2, y, z, w) {
  const q = tempQuat.set(x2, y, z, w).normalize();
  if (q.w < 0) {
    q.set(-q.x, -q.y, -q.z, -q.w);
  }
  const theta = 2 * Math.acos(q.w);
  const xyz_norm = Math.sqrt(q.x * q.x + q.y * q.y + q.z * q.z);
  const axis = xyz_norm < 1e-6 ? tempVec.set(1, 0, 0) : tempVec.set(q.x, q.y, q.z).divideScalar(xyz_norm);
  const sum = Math.abs(axis.x) + Math.abs(axis.y) + Math.abs(axis.z);
  let p_x = axis.x / sum;
  let p_y = axis.y / sum;
  if (axis.z < 0) {
    const tmp = p_x;
    p_x = (1 - Math.abs(p_y)) * (p_x >= 0 ? 1 : -1);
    p_y = (1 - Math.abs(tmp)) * (p_y >= 0 ? 1 : -1);
  }
  tempArr[0] = p_x;
  tempArr[1] = p_y;
  tempArr[2] = theta / Math.PI;
  return tempArr;
}
function decodeQuatOct(u, v, angle) {
  let f_x = u;
  let f_y = v;
  const f_z = 1 - (Math.abs(f_x) + Math.abs(f_y));
  const t = Math.max(-f_z, 0);
  f_x += f_x >= 0 ? -t : t;
  f_y += f_y >= 0 ? -t : t;
  const axis = tempVec.set(f_x, f_y, f_z).normalize();
  const theta = angle * Math.PI;
  const halfTheta = theta * 0.5;
  const s = Math.sin(halfTheta);
  tempArr[0] = axis.x * s;
  tempArr[1] = axis.y * s;
  tempArr[2] = axis.z * s;
  tempArr[3] = Math.cos(halfTheta);
  return tempArr;
}
var ByteStreamCursor = class {
  constructor(stream) {
    this.chunkOffset = 0;
    this.reader = stream.getReader();
  }
  cancel(reason) {
    this.chunk = void 0;
    this.chunkOffset = 0;
    return this.reader.cancel(reason);
  }
  async ensureChunk() {
    while (!this.chunk || this.chunkOffset >= this.chunk.byteLength) {
      const { done, value } = await this.reader.read();
      if (done || !value) {
        return false;
      }
      this.chunk = value;
      this.chunkOffset = 0;
    }
    return true;
  }
  advance(byteLength) {
    this.chunkOffset += byteLength;
    if (this.chunkOffset === this.chunk.byteLength) {
      this.chunk = void 0;
      this.chunkOffset = 0;
    }
  }
  async readInto(target, offset = 0, byteLength = target.byteLength - offset) {
    if (!Number.isSafeInteger(offset) || !Number.isSafeInteger(byteLength) || offset < 0 || byteLength < 0 || offset + byteLength > target.byteLength) {
      throw new RangeError("Invalid stream read range");
    }
    const end = offset + byteLength;
    while (offset < end) {
      if (!await this.ensureChunk()) {
        throw new Error("Stream ended unexpectedly");
      }
      const copyLength = Math.min(end - offset, this.chunk.byteLength - this.chunkOffset);
      target.set(this.chunk.subarray(this.chunkOffset, this.chunkOffset + copyLength), offset);
      this.advance(copyLength);
      offset += copyLength;
    }
  }
  async readChunks(byteLength, onChunk) {
    if (!Number.isSafeInteger(byteLength) || byteLength < 0) {
      throw new RangeError(`Invalid stream read length: ${byteLength}`);
    }
    let remaining = byteLength;
    while (remaining > 0) {
      if (!await this.ensureChunk()) {
        throw new Error("Stream ended unexpectedly");
      }
      const chunkLength = Math.min(remaining, this.chunk.byteLength - this.chunkOffset);
      const chunk = this.chunk.subarray(this.chunkOffset, this.chunkOffset + chunkLength);
      this.advance(chunkLength);
      remaining -= chunkLength;
      await onChunk(chunk);
    }
  }
  async skip(byteLength) {
    await this.readChunks(byteLength, () => {
    });
  }
  async readUntil(delimiter) {
    if (delimiter.byteLength === 0) {
      throw new RangeError("Stream delimiter must not be empty");
    }
    const prefix = new Uint32Array(delimiter.byteLength);
    for (let i2 = 1, matched2 = 0; i2 < delimiter.byteLength; i2++) {
      while (matched2 > 0 && delimiter[i2] !== delimiter[matched2]) {
        matched2 = prefix[matched2 - 1];
      }
      if (delimiter[i2] === delimiter[matched2]) {
        matched2++;
      }
      prefix[i2] = matched2;
    }
    const chunks = [];
    let byteLength = 0;
    let matched = 0;
    while (await this.ensureChunk()) {
      const source = this.chunk;
      const start = this.chunkOffset;
      let end = start;
      for (; end < source.byteLength; end++) {
        const value = source[end];
        while (matched > 0 && value !== delimiter[matched]) {
          matched = prefix[matched - 1];
        }
        if (value === delimiter[matched]) {
          matched++;
        }
        if (matched === delimiter.byteLength) {
          end++;
          const chunk2 = source.subarray(start, end);
          this.advance(chunk2.byteLength);
          if (chunks.length === 0) {
            return chunk2;
          }
          chunks.push(chunk2);
          byteLength += chunk2.byteLength;
          const result = new Uint8Array(byteLength);
          let offset = 0;
          for (const part of chunks) {
            result.set(part, offset);
            offset += part.byteLength;
          }
          return result;
        }
      }
      const chunk = source.subarray(start, end);
      chunks.push(chunk);
      byteLength += chunk.byteLength;
      this.advance(chunk.byteLength);
    }
    throw new Error("Stream ended unexpectedly");
  }
  async readExact(byteLength) {
    if (!Number.isSafeInteger(byteLength) || byteLength < 0) {
      throw new RangeError(`Invalid stream read length: ${byteLength}`);
    }
    if (byteLength === 0) {
      return new Uint8Array(0);
    }
    if (!await this.ensureChunk()) {
      throw new Error("Stream ended unexpectedly");
    }
    const available = this.chunk.byteLength - this.chunkOffset;
    if (byteLength <= available) {
      const result2 = this.chunk.subarray(this.chunkOffset, this.chunkOffset + byteLength);
      this.advance(byteLength);
      return result2;
    }
    const result = new Uint8Array(byteLength);
    await this.readInto(result);
    return result;
  }
  async readUint32(littleEndian = true) {
    const buffer2 = await this.readExact(4);
    return new DataView(buffer2.buffer, buffer2.byteOffset, buffer2.byteLength).getUint32(0, littleEndian);
  }
};
var StreamChunkDecoder = class {
  constructor(cursor) {
    this.cursor = cursor;
  }
  async decode(decoders) {
    for (const decoder of decoders) {
      const [totals, itemSize] = await decoder.init();
      if (totals === 0 || itemSize === 0) {
        continue;
      }
      const pending = new Uint8Array(itemSize);
      let pendingByteLength = 0;
      let decoded = 0;
      await this.cursor.readChunks(totals * itemSize, (chunk) => {
        let chunkOffset = 0;
        if (pendingByteLength > 0) {
          const copyLength = Math.min(itemSize - pendingByteLength, chunk.byteLength);
          pending.set(chunk.subarray(0, copyLength), pendingByteLength);
          pendingByteLength += copyLength;
          chunkOffset += copyLength;
          if (pendingByteLength === itemSize) {
            decoder.decode(decoded, 1, pending);
            decoded++;
            pendingByteLength = 0;
          }
        }
        const counts = Math.floor((chunk.byteLength - chunkOffset) / itemSize);
        if (counts > 0) {
          const batchByteLength = counts * itemSize;
          decoder.decode(decoded, counts, chunk.subarray(chunkOffset, chunkOffset + batchByteLength));
          decoded += counts;
          chunkOffset += batchByteLength;
        }
        if (chunkOffset < chunk.byteLength) {
          const remainder = chunk.subarray(chunkOffset);
          pending.set(remainder);
          pendingByteLength = remainder.byteLength;
        }
      });
      if (pendingByteLength !== 0 || decoded !== totals) {
        throw new Error(`Invalid stream data: expected ${totals} items, got ${decoded}`);
      }
    }
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/file/ksplat.ts
var KSPLAT_COMPRESSION = {
  0: {
    bytesPerCenter: 12,
    bytesPerScale: 12,
    bytesPerRotation: 16,
    bytesPerColor: 4,
    bytesPerSphericalHarmonicsComponent: 4,
    scaleOffsetBytes: 12,
    rotationOffsetBytes: 24,
    colorOffsetBytes: 40,
    sphericalHarmonicsOffsetBytes: 44,
    scaleRange: 1
  },
  1: {
    bytesPerCenter: 6,
    bytesPerScale: 6,
    bytesPerRotation: 8,
    bytesPerColor: 4,
    bytesPerSphericalHarmonicsComponent: 2,
    scaleOffsetBytes: 6,
    rotationOffsetBytes: 12,
    colorOffsetBytes: 20,
    sphericalHarmonicsOffsetBytes: 24,
    scaleRange: 32767
  },
  2: {
    bytesPerCenter: 6,
    bytesPerScale: 6,
    bytesPerRotation: 8,
    bytesPerColor: 4,
    bytesPerSphericalHarmonicsComponent: 1,
    scaleOffsetBytes: 6,
    rotationOffsetBytes: 12,
    colorOffsetBytes: 20,
    sphericalHarmonicsOffsetBytes: 24,
    scaleRange: 32767
  }
};
var SHIndex = [
  0,
  3,
  6,
  1,
  4,
  7,
  2,
  5,
  8,
  // sh1
  9,
  14,
  19,
  10,
  15,
  20,
  11,
  16,
  21,
  12,
  17,
  22,
  13,
  18,
  23,
  // sh2
  24,
  31,
  38,
  25,
  32,
  39,
  26,
  33,
  40,
  27,
  34,
  41,
  28,
  35,
  42,
  29,
  36,
  43,
  30,
  37,
  44
  // sh3
];
var HEADER_BYTES = 4096;
var SECTION_BYTES = 1024;
var KsplatFile = class {
  constructor() {
    this.counts = 0;
    this.shDegree = 0;
  }
  load(buffer2) {
    this.buffer = buffer2;
    const header = new DataView(buffer2.buffer, 0, HEADER_BYTES);
    const versionMajor = header.getUint8(0);
    const versionMinor = header.getUint8(1);
    if (versionMajor !== 0 || versionMinor < 1) {
      throw new Error(`Unsupported .ksplat version: ${versionMajor}.${versionMinor}`);
    }
    const maxSectionCount = header.getUint32(4, true);
    const sectionCount = header.getUint32(8, true);
    const maxSplatCount = header.getUint32(12, true);
    const splatCount = header.getUint32(16, true);
    const compressionLevel = header.getUint16(20, true);
    if (compressionLevel < 0 || compressionLevel > 2) {
      throw new Error(`Invalid .ksplat compression level: ${compressionLevel}`);
    }
    const sceneCenterX = header.getFloat32(24, true);
    const sceneCenterY = header.getFloat32(28, true);
    const sceneCenterZ = header.getFloat32(32, true);
    const minSH = header.getFloat32(36, true) || -1.5;
    const maxSH = header.getFloat32(40, true) || 1.5;
    let maxSHDegree = 0;
    const sections = [];
    for (let i2 = 0; i2 < maxSectionCount; i2++) {
      const section = new DataView(buffer2.buffer, HEADER_BYTES + i2 * SECTION_BYTES, SECTION_BYTES);
      const sectionSplatCount = section.getUint32(0, true);
      const sectionMaxSplatCount = section.getUint32(4, true);
      const bucketSize = section.getUint32(8, true);
      const bucketCount = section.getUint32(12, true);
      const bucketBlockSize = section.getFloat32(16, true);
      const bucketStorageSizeBytes = section.getUint16(20, true);
      const compressionScaleRange = section.getUint32(24, true);
      const fullBucketCount = section.getUint32(32, true);
      const partiallyFilledBucketCount = section.getUint32(36, true);
      const shDegree = section.getUint16(40, true);
      maxSHDegree = Math.max(maxSHDegree, shDegree);
      sections.push({
        sectionSplatCount,
        sectionMaxSplatCount,
        bucketSize,
        bucketCount,
        bucketBlockSize,
        bucketStorageSizeBytes,
        compressionScaleRange: compressionScaleRange || KSPLAT_COMPRESSION[compressionLevel].scaleRange,
        fullBucketCount,
        partiallyFilledBucketCount,
        shDegree
      });
    }
    this.header = {
      versionMajor,
      versionMinor,
      maxSectionCount,
      sectionCount,
      maxSplatCount,
      splatCount,
      compressionLevel,
      sceneCenter: [sceneCenterX, sceneCenterY, sceneCenterZ],
      shRange: [minSH, maxSH]
    };
    this.sections = sections;
    this.counts = splatCount;
    this.shDegree = maxSHDegree;
  }
  async read(stream, contentLength, data) {
    let BlockOffset = 0;
    {
      const buffer3 = new Uint8Array(contentLength);
      const reader = stream.getReader();
      let offset = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        buffer3.set(value, offset);
        offset += value.length;
      }
      this.load(buffer3);
      BlockOffset = await data.initBlock(this.counts, this.shDegree);
    }
    const setFn = data.set.bind(data);
    const setShFn = data.setShN.bind(data);
    const { buffer: buffer2, header, sections, shDegree: maxSHDegree } = this;
    const {
      maxSectionCount,
      compressionLevel,
      shRange: [minSH, maxSH]
    } = header;
    const isHighQualitySplatData = compressionLevel === 0;
    const single = {
      x: 0,
      y: 0,
      z: 0,
      sx: 0,
      sy: 0,
      sz: 0,
      qx: 0,
      qy: 0,
      qz: 0,
      qw: 0,
      r: 0,
      g: 0,
      b: 0,
      a: 0
    };
    const maxSHSize = SH_MAPS[maxSHDegree];
    const shData = new Array(maxSHSize);
    let sectionBase = HEADER_BYTES + maxSectionCount * SECTION_BYTES;
    for (let i2 = 0; i2 < maxSectionCount; i2++) {
      const {
        sectionSplatCount,
        sectionMaxSplatCount,
        bucketSize,
        bucketCount,
        bucketBlockSize,
        bucketStorageSizeBytes,
        fullBucketCount,
        partiallyFilledBucketCount,
        compressionScaleRange,
        shDegree
      } = sections[i2];
      const fullBucketSplats = fullBucketCount * bucketSize;
      const bucketsMetaDataSizeBytes = partiallyFilledBucketCount * 4;
      const bucketsStorageSizeBytes = bucketStorageSizeBytes * bucketCount + bucketsMetaDataSizeBytes;
      const shComponents = SH_MAPS[shDegree];
      const {
        bytesPerCenter,
        bytesPerScale,
        bytesPerRotation,
        bytesPerColor,
        bytesPerSphericalHarmonicsComponent,
        scaleOffsetBytes,
        rotationOffsetBytes,
        colorOffsetBytes,
        sphericalHarmonicsOffsetBytes
      } = KSPLAT_COMPRESSION[compressionLevel];
      const bytesPerSplat = bytesPerCenter + bytesPerScale + bytesPerRotation + bytesPerColor + shComponents * bytesPerSphericalHarmonicsComponent;
      const splatDataStorageSizeBytes = bytesPerSplat * sectionMaxSplatCount;
      const storageSizeBytes = splatDataStorageSizeBytes + bucketsStorageSizeBytes;
      const compressionScaleFactor = bucketBlockSize / 2 / compressionScaleRange;
      const bucketsBase = sectionBase + bucketsMetaDataSizeBytes;
      const dataBase = sectionBase + bucketsStorageSizeBytes;
      const data2 = new DataView(buffer2.buffer, dataBase, splatDataStorageSizeBytes);
      const bucketArray = new Float32Array(buffer2.buffer, bucketsBase, bucketCount * 3);
      const partiallyFilledBucketLengths = new Uint32Array(
        buffer2.buffer,
        sectionBase,
        partiallyFilledBucketCount
      );
      let partialBucketIndex = fullBucketCount;
      let partialBucketBase = fullBucketSplats;
      for (let j = 0; j < sectionSplatCount; j++) {
        const splatOffset = j * bytesPerSplat;
        let bucketIndex;
        if (j < fullBucketSplats) {
          bucketIndex = Math.floor(j / bucketSize);
        } else {
          const bucketLength = partiallyFilledBucketLengths[partialBucketIndex - fullBucketCount];
          if (j >= partialBucketBase + bucketLength) {
            partialBucketIndex += 1;
            partialBucketBase += bucketLength;
          }
          bucketIndex = partialBucketIndex;
        }
        if (isHighQualitySplatData) {
          single.x = data2.getFloat32(splatOffset + 0, true);
          single.y = data2.getFloat32(splatOffset + 4, true);
          single.z = data2.getFloat32(splatOffset + 8, true);
          single.sx = data2.getFloat32(splatOffset + scaleOffsetBytes + 0, true);
          single.sy = data2.getFloat32(splatOffset + scaleOffsetBytes + 4, true);
          single.sz = data2.getFloat32(splatOffset + scaleOffsetBytes + 8, true);
          single.qw = data2.getFloat32(splatOffset + rotationOffsetBytes + 0, true);
          single.qx = data2.getFloat32(splatOffset + rotationOffsetBytes + 4, true);
          single.qy = data2.getFloat32(splatOffset + rotationOffsetBytes + 8, true);
          single.qz = data2.getFloat32(splatOffset + rotationOffsetBytes + 12, true);
        } else {
          single.x = (data2.getUint16(splatOffset + 0, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 0];
          single.y = (data2.getUint16(splatOffset + 2, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 1];
          single.z = (data2.getUint16(splatOffset + 4, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 2];
          single.sx = fromHalf(data2.getUint16(splatOffset + scaleOffsetBytes + 0, true));
          single.sy = fromHalf(data2.getUint16(splatOffset + scaleOffsetBytes + 2, true));
          single.sz = fromHalf(data2.getUint16(splatOffset + scaleOffsetBytes + 4, true));
          single.qw = fromHalf(data2.getUint16(splatOffset + rotationOffsetBytes + 0, true));
          single.qx = fromHalf(data2.getUint16(splatOffset + rotationOffsetBytes + 2, true));
          single.qy = fromHalf(data2.getUint16(splatOffset + rotationOffsetBytes + 4, true));
          single.qz = fromHalf(data2.getUint16(splatOffset + rotationOffsetBytes + 6, true));
        }
        single.r = data2.getUint8(splatOffset + colorOffsetBytes + 0) / 255;
        single.g = data2.getUint8(splatOffset + colorOffsetBytes + 1) / 255;
        single.b = data2.getUint8(splatOffset + colorOffsetBytes + 2) / 255;
        single.a = data2.getUint8(splatOffset + colorOffsetBytes + 3) / 255;
        setFn(j + BlockOffset, single);
        const shOffsetBytes = splatOffset + sphericalHarmonicsOffsetBytes;
        for (let k = 0; k < shComponents; k++) {
          shData[k] = compressionLevel === 0 ? data2.getFloat32(shOffsetBytes + SHIndex[k] * 4, true) : compressionLevel === 1 ? fromHalf(data2.getUint16(shOffsetBytes + SHIndex[k] * 2, true)) : minSH + data2.getUint8(shOffsetBytes + SHIndex[k]) / 255 * (maxSH - minSH);
        }
        for (let k = maxSHSize - 1; k >= shComponents; k--) {
          shData[k] = 0;
        }
        setShFn(j + BlockOffset, shData);
      }
      sectionBase += storageSizeBytes;
    }
    data.finishBlock();
  }
  async write(_stream, _data) {
    throw new Error("Method not implemented.");
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/file/ply.ts
var F_REST_REGEX = /^f_rest_([0-9]{1,2})$/;
function createEmptyBlock(properties, shDegree) {
  const result = {
    f_rest: new Array(SH_MAPS[shDegree])
  };
  for (const name of Object.keys(properties)) {
    if (F_REST_REGEX.test(name)) {
      continue;
    }
    result[name] = 0;
  }
  return result;
}
var FIELD_BYTES = {
  char: 1,
  uchar: 1,
  short: 2,
  ushort: 2,
  int: 4,
  uint: 4,
  float: 4,
  double: 8
};
function createParseFn(properties, littleEndian, shDegree) {
  function createPropertyParse(type) {
    switch (type) {
      case "char":
        return "data.getInt8(offset)";
      case "uchar":
        return "data.getUint8(offset)";
      case "short":
        return `data.getInt16(offset, ${littleEndian})`;
      case "ushort":
        return `data.getUint16(offset, ${littleEndian})`;
      case "int":
        return `data.getInt32(offset, ${littleEndian})`;
      case "uint":
        return `data.getUint32(offset, ${littleEndian})`;
      case "float":
        return `data.getFloat32(offset, ${littleEndian})`;
      case "double":
        return `data.getFloat64(offset, ${littleEndian})`;
    }
  }
  let itemSize = 0;
  const parserSrc = [];
  const shLen = SH_MAPS[shDegree] / 3;
  for (const [propertyName, propertyType] of Object.entries(properties)) {
    const fRestMatch = propertyName.match(F_REST_REGEX);
    if (fRestMatch) {
      let fRestIndex = parseInt(fRestMatch[1], 10);
      fRestIndex = fRestIndex % shLen * 3 + Math.floor(fRestIndex / shLen);
      parserSrc.push(`item.f_rest[${fRestIndex}] = ${createPropertyParse(propertyType)};`);
    } else {
      parserSrc.push(`item.${propertyName} = ${createPropertyParse(propertyType)};`);
    }
    parserSrc.push(`offset += ${FIELD_BYTES[propertyType]};`);
    itemSize += FIELD_BYTES[propertyType];
  }
  return [itemSize, new Function("data", "offset", "item", parserSrc.join("\n"))];
}
var HEADER_TERMINATOR_BYTES = new TextEncoder().encode("end_header\n");
var PlyFile = class {
  constructor() {
    this.littleEndian = true;
    this.comments = [];
    this.elements = {};
    this.isSuperSplatCompressed = false;
    this.counts = 0;
    this.shDegree = 0;
  }
  initHeader(header) {
    let curElement;
    const lines = header.trim().split("\n").map((v) => v.trim()).filter((v) => !!v);
    for (let i2 = 0; i2 < lines.length; i2++) {
      const line = lines[i2];
      if (i2 === 0) {
        if (line !== "ply") {
          throw new Error("Invalid PLY header");
        }
        continue;
      }
      const fields = line.split(" ");
      switch (fields[0]) {
        case "format":
          if (fields[1] === "binary_little_endian") {
            this.littleEndian = true;
          } else if (fields[1] === "binary_big_endian") {
            this.littleEndian = false;
          } else {
            throw new Error(`Unsupported PLY format: ${fields[1]}`);
          }
          if (fields[2] !== "1.0") {
            throw new Error(`Unsupported PLY version: ${fields[2]}`);
          }
          break;
        case "comment":
          this.comments.push(line.slice("comment ".length));
          break;
        case "element": {
          const name = fields[1];
          curElement = this.elements[name] = {
            name,
            count: parseInt(fields[2], 10),
            properties: {}
          };
          break;
        }
        case "property":
          if (!curElement) {
            throw new Error("Property must be inside an element");
          }
          if (!FIELD_BYTES[fields[1]]) {
            throw new Error(`Unsupported property type '${fields[1]}'`);
          }
          curElement.properties[fields[2]] = fields[1];
          break;
        case "end_header":
          break;
        default:
          console.warn(`Skipping unsupported PLY keyword: ${fields[0]}`);
          break;
      }
    }
    const { elements } = this;
    const isSuperSplatCompressed = this.isSuperSplatCompressed = !!elements.chunk;
    this.counts = elements.vertex?.count ?? 0;
    const shElement = isSuperSplatCompressed ? elements.sh : elements.vertex;
    if (shElement) {
      const { properties } = shElement;
      let num_f_rest = 0;
      while (properties[`f_rest_${num_f_rest}`]) {
        num_f_rest += 1;
      }
      const shDegree = NUM_F_REST_TO_SH_DEGREE[num_f_rest];
      if (shDegree === void 0) {
        throw new Error(`Unsupported number of SH coefficients: ${num_f_rest}`);
      }
      this.shDegree = shDegree;
    }
    for (const name in elements) {
      const { properties } = elements[name];
      if (isSuperSplatCompressed) {
        if (name === "chunk") {
          const {
            min_x,
            min_y,
            min_z,
            max_x,
            max_y,
            max_z,
            min_scale_x,
            min_scale_y,
            min_scale_z,
            max_scale_x,
            max_scale_y,
            max_scale_z,
            min_r,
            min_g,
            min_b,
            max_r,
            max_g,
            max_b
          } = properties;
          if (!min_x || !min_y || !min_z || !max_x || !max_y || !max_z || !min_scale_x || !min_scale_y || !min_scale_z || !max_scale_x || !max_scale_y || !max_scale_z || !min_r || !min_g || !min_b || !max_r || !max_g || !max_b) {
            throw new Error("Missing Compressed PLY chunk properties");
          }
        } else if (name === "vertex") {
          const { packed_position, packed_rotation, packed_scale, packed_color } = properties;
          if (!packed_position || !packed_rotation || !packed_scale || !packed_color) {
            throw new Error("Missing Compressed PLY vertex properties");
          }
        }
      } else {
        if (name === "vertex") {
          const {
            x: x2,
            y,
            z,
            scale_0,
            scale_1,
            scale_2,
            rot_0,
            rot_1,
            rot_2,
            rot_3,
            f_dc_0,
            f_dc_1,
            f_dc_2,
            opacity
          } = properties;
          if (!x2 || !y || !z || !scale_0 || !scale_1 || !scale_2 || !rot_0 || !rot_1 || !rot_2 || !rot_3 || !f_dc_0 || !f_dc_1 || !f_dc_2 || !opacity) {
            throw new Error("Missing PLY vertex properties");
          }
        }
      }
    }
  }
  async read(stream, _contentLength, data) {
    const setFn = data.set.bind(data);
    const setShFn = data.setShN.bind(data);
    const cursor = new ByteStreamCursor(stream);
    const header = new TextDecoder().decode(await cursor.readUntil(HEADER_TERMINATOR_BYTES));
    this.initHeader(header);
    const { elements, littleEndian, isSuperSplatCompressed, shDegree } = this;
    const BlockOffset = await data.initBlock(this.counts, this.shDegree);
    const chunks = [];
    const single = createSingleSplat();
    const decoder = new StreamChunkDecoder(cursor);
    await decoder.decode(
      Object.keys(elements).map((name) => {
        const { count, properties } = elements[name];
        const block = createEmptyBlock(properties, shDegree);
        const [itemSize, parseFn] = createParseFn(properties, littleEndian, shDegree);
        let fn = () => {
        };
        if (isSuperSplatCompressed) {
          if (name === "chunk") {
            fn = (i2, item) => {
              chunks[i2 - BlockOffset] = { ...item };
            };
          } else if (name === "sh") {
            fn = (i2, item) => {
              setShFn(
                i2,
                item.f_rest.map((v) => v * 8 / 255 - 4)
              );
            };
          } else if (name === "vertex") {
            fn = (i2, item) => {
              const chunk = chunks[i2 - BlockOffset >>> 8];
              if (!chunk) {
                throw new Error("Missing PLY chunk");
              }
              const {
                min_x,
                min_y,
                min_z,
                max_x,
                max_y,
                max_z,
                min_scale_x,
                min_scale_y,
                min_scale_z,
                max_scale_x,
                max_scale_y,
                max_scale_z,
                min_r,
                min_g,
                min_b,
                max_r,
                max_g,
                max_b
              } = chunk;
              const { packed_position, packed_rotation, packed_scale, packed_color } = item;
              single.x = (packed_position >>> 21 & 2047) / 2047 * (max_x - min_x) + min_x;
              single.y = (packed_position >>> 11 & 1023) / 1023 * (max_y - min_y) + min_y;
              single.z = (packed_position & 2047) / 2047 * (max_z - min_z) + min_z;
              const r0 = ((packed_rotation >>> 20 & 1023) / 1023 - 0.5) * Math.SQRT2;
              const r1 = ((packed_rotation >>> 10 & 1023) / 1023 - 0.5) * Math.SQRT2;
              const r2 = ((packed_rotation & 1023) / 1023 - 0.5) * Math.SQRT2;
              const rr = Math.sqrt(Math.max(0, 1 - r0 * r0 - r1 * r1 - r2 * r2));
              const rOrder = packed_rotation >>> 30;
              single.qx = rOrder === 0 ? r0 : rOrder === 1 ? rr : r1;
              single.qy = rOrder <= 1 ? r1 : rOrder === 2 ? rr : r2;
              single.qz = rOrder <= 2 ? r2 : rr;
              single.qw = rOrder === 0 ? rr : r0;
              single.sx = Math.exp(
                (packed_scale >>> 21 & 2047) / 2047 * (max_scale_x - min_scale_x) + min_scale_x
              );
              single.sy = Math.exp(
                (packed_scale >>> 11 & 1023) / 1023 * (max_scale_y - min_scale_y) + min_scale_y
              );
              single.sz = Math.exp(
                (packed_scale & 2047) / 2047 * (max_scale_z - min_scale_z) + min_scale_z
              );
              single.r = (packed_color >>> 24 & 255) / 255 * (max_r - min_r) + min_r;
              single.g = (packed_color >>> 16 & 255) / 255 * (max_g - min_g) + min_g;
              single.b = (packed_color >>> 8 & 255) / 255 * (max_b - min_b) + min_b;
              single.a = (packed_color & 255) / 255;
              setFn(i2, single);
            };
          }
        } else if (name === "vertex") {
          fn = (i2, item) => {
            single.x = item.x;
            single.y = item.y;
            single.z = item.z;
            single.sx = Math.exp(item.scale_0);
            single.sy = Math.exp(item.scale_1);
            single.sz = Math.exp(item.scale_2);
            single.qx = item.rot_1;
            single.qy = item.rot_2;
            single.qz = item.rot_3;
            single.qw = item.rot_0;
            single.r = item.f_dc_0 * SH_C0 + 0.5;
            single.g = item.f_dc_1 * SH_C0 + 0.5;
            single.b = item.f_dc_2 * SH_C0 + 0.5;
            single.a = 1 / (1 + Math.exp(-item.opacity));
            setFn(i2, single);
            setShFn(i2, item.f_rest);
          };
        }
        return {
          init: () => [count, itemSize],
          decode: (offset, counts, buffer2) => {
            offset += BlockOffset;
            const dataview = new DataView(buffer2.buffer, buffer2.byteOffset, buffer2.byteLength);
            for (let i2 = 0; i2 < counts; i2++) {
              parseFn(dataview, i2 * itemSize, block);
              fn(offset + i2, block);
            }
          }
        };
      })
    );
    data.finishBlock();
  }
  async write(stream, data) {
    const writer2 = stream.getWriter();
    const counts = data.counts;
    const shDegree = data.shDegree;
    const shCounts = SH_MAPS[shDegree];
    const shCoeffs = shCounts / 3;
    const header = [
      "ply",
      "format binary_little_endian 1.0",
      `comment Generated by EGS`,
      `element vertex ${counts}`,
      "property float x",
      "property float y",
      "property float z",
      "property float scale_0",
      "property float scale_1",
      "property float scale_2",
      "property float rot_1",
      "property float rot_2",
      "property float rot_3",
      "property float rot_0",
      "property float f_dc_0",
      "property float f_dc_1",
      "property float f_dc_2",
      "property float opacity",
      new Array(shCounts).fill(0).map((_, i2) => `property float f_rest_${i2}`),
      "end_header",
      ""
    ].flat().join("\n");
    writer2.write(new TextEncoder().encode(header));
    const ItemSize = 14 + shCounts;
    const chunkSize = 1024;
    const chunkCounts = Math.ceil(counts / chunkSize);
    const single = createSingleSplat();
    const shN = new Array(shCounts);
    for (let i2 = 0; i2 < chunkCounts; i2++) {
      const currentChunkSize = Math.min(chunkSize, counts - i2 * chunkSize);
      const chunk = new Float32Array(currentChunkSize * ItemSize);
      const offset = i2 * chunkSize;
      for (let j = 0; j < currentChunkSize; j++) {
        data.get(offset + j, single);
        data.getShN(offset + j, shN);
        const o = j * ItemSize;
        chunk[o + 0] = single.x;
        chunk[o + 1] = single.y;
        chunk[o + 2] = single.z;
        chunk[o + 3] = Math.log(single.sx);
        chunk[o + 4] = Math.log(single.sy);
        chunk[o + 5] = Math.log(single.sz);
        chunk[o + 6] = single.qx;
        chunk[o + 7] = single.qy;
        chunk[o + 8] = single.qz;
        chunk[o + 9] = single.qw;
        chunk[o + 10] = (single.r - 0.5) / SH_C0;
        chunk[o + 11] = (single.g - 0.5) / SH_C0;
        chunk[o + 12] = (single.b - 0.5) / SH_C0;
        chunk[o + 13] = single.a === 0 ? -100 : -Math.log(1 / single.a - 1);
        for (let k = 0; k < shCounts; k++) {
          chunk[o + 14 + k] = shN[k % shCoeffs * 3 + (k / shCoeffs | 0)];
        }
      }
      writer2.write(new Uint8Array(chunk.buffer));
      if (writer2.desiredSize <= 0) {
        await writer2.ready;
      }
    }
    await writer2.close();
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/file/sog.ts
var ZIP_MAGIC = 67324752;
var PERM_TABLE = [
  // original quat idx ---> actual storage idx
  [0, 1, 2, 3],
  [3, 1, 2, 0],
  [1, 3, 2, 0],
  [1, 2, 3, 0]
];
var TEMP_ROT = new Float32Array(4);
var SogFile = class {
  constructor() {
    this.counts = 0;
    this.shDegree = 0;
    /**
     * @internal
     */
    this.refs = {};
  }
  async load(stream, contentLength) {
    const buffer2 = new Uint8Array(contentLength);
    const reader = stream.getReader();
    let offset = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      buffer2.set(value, offset);
      offset += value.length;
    }
    let metaBuffer = buffer2;
    const view = new DataView(buffer2.buffer);
    if (view.getUint32(0, true) === ZIP_MAGIC) {
      this.refs = extractFromRootDir(unzipSync(buffer2));
      metaBuffer = this.refs["meta.json"];
      if (!metaBuffer) {
        throw new Error("SOG meta.json not found in the zip archive.");
      }
    }
    this.meta = JSON.parse(new TextDecoder().decode(metaBuffer));
    if (this.meta.version === void 0) {
      const { means, quats, shN } = this.meta;
      if (quats.encoding !== "quaternion_packed") {
        throw new Error("Unsupported quaternion encoding");
      }
      this.counts = means.shape[0];
      this.shDegree = shN ? NUM_F_REST_TO_SH_DEGREE[shN.shape[1]] : 0;
      this.version = 1;
    } else {
      const { version, count, shN } = this.meta;
      if (version !== 2) {
        throw new Error(`Unsupported SOGS version: ${version}`);
      }
      this.counts = count;
      this.shDegree = shN?.bands ?? 0;
      this.version = version;
    }
  }
  parse_v1(data, offset) {
    const setFn = data.set.bind(data);
    const setShFn = data.setShN.bind(data);
    const { meta, counts, shDegree, cached } = this;
    const [mean0, mean1, scale0, quat0, color0, centroids, labels] = cached.map((v) => v.data);
    const {
      means: {
        mins: [centerMinX, centerMinY, centerMinZ],
        maxs: [centerMaxX, centerMaxY, centerMaxZ]
      },
      scales: {
        mins: [scaleMinX, scaleMinY, scaleMinZ],
        maxs: [scaleMaxX, scaleMaxY, scaleMaxZ]
      },
      sh0: {
        mins: [colorMinR, colorMinG, colorMinB, colorMinA],
        maxs: [colorMaxR, colorMaxG, colorMaxB, colorMaxA]
      },
      shN
    } = meta;
    const rangeX = (centerMaxX - centerMinX) / 65535;
    const rangeY = (centerMaxY - centerMinY) / 65535;
    const rangeZ = (centerMaxZ - centerMinZ) / 65535;
    const SX_LUT = new Float32Array(256);
    const SY_LUT = new Float32Array(256);
    const SZ_LUT = new Float32Array(256);
    const scaleRangeX = (scaleMaxX - scaleMinX) / 255;
    const scaleRangeY = (scaleMaxY - scaleMinY) / 255;
    const scaleRangeZ = (scaleMaxZ - scaleMinZ) / 255;
    for (let i2 = 0; i2 < 256; i2++) {
      SX_LUT[i2] = Math.exp(scaleMinX + scaleRangeX * i2);
      SY_LUT[i2] = Math.exp(scaleMinY + scaleRangeY * i2);
      SZ_LUT[i2] = Math.exp(scaleMinZ + scaleRangeZ * i2);
    }
    const A_LUT = new Float32Array(256);
    const colorRangeR = (colorMaxR - colorMinR) / 255;
    const colorRangeG = (colorMaxG - colorMinG) / 255;
    const colorRangeB = (colorMaxB - colorMinB) / 255;
    const colorRangeA = (colorMaxA - colorMinA) / 255;
    for (let i2 = 0; i2 < 256; i2++) {
      A_LUT[i2] = 1 / (1 + Math.exp(-(colorMinA + colorRangeA * i2)));
    }
    const single = {
      x: 0,
      y: 0,
      z: 0,
      sx: 0,
      sy: 0,
      sz: 0,
      qx: 0,
      qy: 0,
      qz: 0,
      qw: 0,
      r: 0,
      g: 0,
      b: 0,
      a: 0
    };
    for (let i2 = 0; i2 < counts; i2++) {
      const i4 = i2 * 4;
      const x2 = centerMinX + rangeX * (mean0[i4 + 0] + (mean1[i4 + 0] << 8));
      const y = centerMinY + rangeY * (mean0[i4 + 1] + (mean1[i4 + 1] << 8));
      const z = centerMinZ + rangeZ * (mean0[i4 + 2] + (mean1[i4 + 2] << 8));
      single.x = Math.sign(x2) * (Math.exp(Math.abs(x2)) - 1);
      single.y = Math.sign(y) * (Math.exp(Math.abs(y)) - 1);
      single.z = Math.sign(z) * (Math.exp(Math.abs(z)) - 1);
      single.sx = SX_LUT[scale0[i4 + 0]];
      single.sy = SY_LUT[scale0[i4 + 1]];
      single.sz = SZ_LUT[scale0[i4 + 2]];
      TEMP_ROT[0] = (quat0[i4 + 0] / 255 - 0.5) * Math.SQRT2;
      TEMP_ROT[1] = (quat0[i4 + 1] / 255 - 0.5) * Math.SQRT2;
      TEMP_ROT[2] = (quat0[i4 + 2] / 255 - 0.5) * Math.SQRT2;
      TEMP_ROT[3] = Math.sqrt(
        Math.max(0, 1 - TEMP_ROT[0] * TEMP_ROT[0] - TEMP_ROT[1] * TEMP_ROT[1] - TEMP_ROT[2] * TEMP_ROT[2])
      );
      const PERM = PERM_TABLE[quat0[i4 + 3] - 252];
      single.qx = TEMP_ROT[PERM[0]];
      single.qy = TEMP_ROT[PERM[1]];
      single.qz = TEMP_ROT[PERM[2]];
      single.qw = TEMP_ROT[PERM[3]];
      single.r = SH_C0 * (colorMinR + colorRangeR * color0[i4 + 0]) + 0.5;
      single.g = SH_C0 * (colorMinG + colorRangeG * color0[i4 + 1]) + 0.5;
      single.b = SH_C0 * (colorMinB + colorRangeB * color0[i4 + 2]) + 0.5;
      single.a = A_LUT[color0[i4 + 3]];
      setFn(offset + i2, single);
    }
    if (shN) {
      const centroidTexWidth = cached[5].width;
      const { mins: min, maxs: max2 } = shN;
      const range = (max2 - min) / 255;
      const shCounts = SH_MAPS[shDegree];
      const sh = new Array(shCounts);
      const shCoeffs = shCounts / 3;
      for (let i2 = 0; i2 < counts; i2++) {
        const i4 = i2 * 4;
        const label = labels[i4] + (labels[i4 + 1] << 8);
        const o = ((label >>> 6) * centroidTexWidth + (label & 63) * 15) * 4;
        for (let j = 0; j < shCoeffs; j++) {
          sh[j * 3 + 0] = min + range * centroids[o + j * 4 + 0];
          sh[j * 3 + 1] = min + range * centroids[o + j * 4 + 1];
          sh[j * 3 + 2] = min + range * centroids[o + j * 4 + 2];
        }
        setShFn(offset + i2, sh);
      }
    }
  }
  parse_v2(data, offset) {
    const setFn = data.set.bind(data);
    const setShFn = data.setShN.bind(data);
    const { meta, counts, shDegree, cached } = this;
    const { means, scales, sh0, shN } = meta;
    const {
      mins: [centerMinX, centerMinY, centerMinZ],
      maxs: [centerMaxX, centerMaxY, centerMaxZ]
    } = means;
    const { codebook: scaleCodebook } = scales;
    const { codebook: sh0Codebook } = sh0;
    const [mean0, mean1, scale0, quat0, color0, centroids, labels] = cached.map((img) => img.data);
    const rangeX = (centerMaxX - centerMinX) / 65535;
    const rangeY = (centerMaxY - centerMinY) / 65535;
    const rangeZ = (centerMaxZ - centerMinZ) / 65535;
    const SCALE_LUT3 = scaleCodebook.map((v) => Math.exp(v));
    const single = {
      x: 0,
      y: 0,
      z: 0,
      sx: 0,
      sy: 0,
      sz: 0,
      qx: 0,
      qy: 0,
      qz: 0,
      qw: 0,
      r: 0,
      g: 0,
      b: 0,
      a: 0
    };
    for (let i2 = 0; i2 < counts; i2++) {
      const i4 = i2 * 4;
      const x2 = centerMinX + rangeX * (mean0[i4 + 0] + (mean1[i4 + 0] << 8));
      const y = centerMinY + rangeY * (mean0[i4 + 1] + (mean1[i4 + 1] << 8));
      const z = centerMinZ + rangeZ * (mean0[i4 + 2] + (mean1[i4 + 2] << 8));
      single.x = Math.sign(x2) * (Math.exp(Math.abs(x2)) - 1);
      single.y = Math.sign(y) * (Math.exp(Math.abs(y)) - 1);
      single.z = Math.sign(z) * (Math.exp(Math.abs(z)) - 1);
      single.sx = SCALE_LUT3[scale0[i4 + 0]];
      single.sy = SCALE_LUT3[scale0[i4 + 1]];
      single.sz = SCALE_LUT3[scale0[i4 + 2]];
      TEMP_ROT[0] = (quat0[i4 + 0] / 255 - 0.5) * Math.SQRT2;
      TEMP_ROT[1] = (quat0[i4 + 1] / 255 - 0.5) * Math.SQRT2;
      TEMP_ROT[2] = (quat0[i4 + 2] / 255 - 0.5) * Math.SQRT2;
      TEMP_ROT[3] = Math.sqrt(
        Math.max(0, 1 - TEMP_ROT[0] * TEMP_ROT[0] - TEMP_ROT[1] * TEMP_ROT[1] - TEMP_ROT[2] * TEMP_ROT[2])
      );
      const PERM = PERM_TABLE[quat0[i4 + 3] - 252];
      single.qx = TEMP_ROT[PERM[0]];
      single.qy = TEMP_ROT[PERM[1]];
      single.qz = TEMP_ROT[PERM[2]];
      single.qw = TEMP_ROT[PERM[3]];
      single.r = SH_C0 * sh0Codebook[color0[i4 + 0]] + 0.5;
      single.g = SH_C0 * sh0Codebook[color0[i4 + 1]] + 0.5;
      single.b = SH_C0 * sh0Codebook[color0[i4 + 2]] + 0.5;
      single.a = color0[i4 + 3] / 255;
      setFn(offset + i2, single);
    }
    if (shN) {
      const { codebook } = shN;
      const shCounts = SH_MAPS[shDegree];
      const shCoeffs = shCounts / 3;
      const offsetItemSize = shCoeffs * 4;
      const sh = new Array(shCounts);
      for (let i2 = 0; i2 < counts; i2++) {
        const i4 = i2 * 4;
        const o = (labels[i4 + 0] + (labels[i4 + 1] << 8)) * offsetItemSize;
        for (let j = 0; j < shCoeffs; j++) {
          sh[j * 3] = codebook[centroids[o + j * 4 + 0]];
          sh[j * 3 + 1] = codebook[centroids[o + j * 4 + 1]];
          sh[j * 3 + 2] = codebook[centroids[o + j * 4 + 2]];
        }
        setShFn(offset + i2, sh);
      }
    }
  }
  async loadTexture(path) {
    let buffer2 = this.refs[path];
    if (!buffer2 && isUrl(path)) {
      buffer2 = await fetch(path).then((res) => res.arrayBuffer()).then((buf) => new Uint8Array(buf));
    }
    if (!buffer2) {
      throw new Error(`Cannot load texture: ${path}`);
    }
    return decodeImage(buffer2);
  }
  async read(stream, contentLength, data) {
    await this.load(stream, contentLength);
    const BlockOffset = await data.initBlock(this.counts, this.shDegree);
    const { means, scales, quats, sh0, shN } = this.meta;
    this.cached = await Promise.all(
      [
        means.files[0],
        means.files[1],
        scales.files[0],
        quats.files[0],
        sh0.files[0],
        shN?.files[0],
        shN?.files[1]
      ].filter((path) => !!path).map((path) => this.loadTexture(path))
    );
    if (this.version === 1) {
      this.parse_v1(data, BlockOffset);
    } else if (this.version === 2) {
      this.parse_v2(data, BlockOffset);
    } else {
      throw new Error(`Unsupported SOG version: ${this.version}`);
    }
    data.finishBlock();
  }
  async write(_stream, _data) {
    throw new Error("Method not implemented.");
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/file/splat.ts
var ITEM_SIZE = 32;
var STREAM_CHUNK_BYTE_LENGTH = 128 * 1024;
var STREAM_CHUNK_ITEM_COUNTS = Math.floor(STREAM_CHUNK_BYTE_LENGTH / ITEM_SIZE);
var SplatFile = class {
  async read(stream, contentLength, data) {
    const setFn = data.set.bind(data);
    const counts = Math.floor(contentLength / ITEM_SIZE);
    const BlockOffset = await data.initBlock(counts, 0);
    const single = createSingleSplat();
    const decoder = new StreamChunkDecoder(new ByteStreamCursor(stream));
    await decoder.decode([
      {
        init: () => [counts, ITEM_SIZE],
        decode: (offset, counts2, buffer2) => {
          offset += BlockOffset;
          const view = new DataView(buffer2.buffer, buffer2.byteOffset, buffer2.byteLength);
          for (let i2 = 0; i2 < counts2; i2++) {
            const o = i2 * ITEM_SIZE;
            single.x = view.getFloat32(o, true);
            single.y = view.getFloat32(o + 4, true);
            single.z = view.getFloat32(o + 8, true);
            single.sx = view.getFloat32(o + 12, true);
            single.sy = view.getFloat32(o + 16, true);
            single.sz = view.getFloat32(o + 20, true);
            single.r = buffer2[o + 24] / 255;
            single.g = buffer2[o + 25] / 255;
            single.b = buffer2[o + 26] / 255;
            single.a = buffer2[o + 27] / 255;
            single.qw = (buffer2[o + 28] - 128) / 128;
            single.qx = (buffer2[o + 29] - 128) / 128;
            single.qy = (buffer2[o + 30] - 128) / 128;
            single.qz = (buffer2[o + 31] - 128) / 128;
            setFn(offset + i2, single);
          }
        }
      }
    ]);
    data.finishBlock();
  }
  async write(stream, data) {
    const writer2 = stream.getWriter();
    const single = createSingleSplat();
    for (let i2 = 0; i2 < data.counts; i2 += STREAM_CHUNK_ITEM_COUNTS) {
      const currentChunkSize = Math.min(STREAM_CHUNK_ITEM_COUNTS, data.counts - i2);
      const chunk = new Uint8Array(currentChunkSize * ITEM_SIZE);
      const dataView = new DataView(chunk.buffer);
      for (let j = 0; j < currentChunkSize; j++) {
        data.get(i2 + j, single);
        const o = j * ITEM_SIZE;
        dataView.setFloat32(o, single.x, true);
        dataView.setFloat32(o + 4, single.y, true);
        dataView.setFloat32(o + 8, single.z, true);
        dataView.setFloat32(o + 12, single.sx, true);
        dataView.setFloat32(o + 16, single.sy, true);
        dataView.setFloat32(o + 20, single.sz, true);
        dataView.setUint8(o + 24, clamp(Math.round(single.r * 255), 0, 255));
        dataView.setUint8(o + 25, clamp(Math.round(single.g * 255), 0, 255));
        dataView.setUint8(o + 26, clamp(Math.round(single.b * 255), 0, 255));
        dataView.setUint8(o + 27, clamp(Math.round(single.a * 255), 0, 255));
        dataView.setUint8(o + 28, clamp(Math.round(single.qw * 128 + 128), 0, 255));
        dataView.setUint8(o + 29, clamp(Math.round(single.qx * 128 + 128), 0, 255));
        dataView.setUint8(o + 30, clamp(Math.round(single.qy * 128 + 128), 0, 255));
        dataView.setUint8(o + 31, clamp(Math.round(single.qz * 128 + 128), 0, 255));
      }
      writer2.write(chunk);
      if (writer2.desiredSize <= 0) {
        await writer2.ready;
      }
    }
    await writer2.close();
  }
};

// ../../external/egs-core/packages/egs-lib/src/env.ts
var isDebugEnable;
try {
  if (isDebugEnable == null && (CONFIG.IS_DEV || CONFIG.IS_TESTING || CONFIG.IS_DEV_OR_TESTING)) {
    isDebugEnable = true;
  }
} catch {
}
try {
  if (isDebugEnable == null && true) {
    isDebugEnable = true;
  }
} catch {
}
try {
  if (isDebugEnable == null) {
    const urlParam = new URLSearchParams(location.search);
    if (urlParam.has("__enable_debug__")) {
      isDebugEnable = true;
    } else if (urlParam.has("__disable_debug__")) {
      isDebugEnable = false;
    }
  }
} catch {
}
if (isDebugEnable == null) {
  isDebugEnable = false;
}
var ENV = {
  isDebugEnable
};

// ../../external/egs-core/packages/egs-lib/src/logger.ts
var _Logger = class _Logger {
  constructor() {
    this.exceptionCount = 0;
  }
  info(...param) {
    if (!ENV.isDebugEnable) {
      return;
    }
    console.log("EGS:", ...param);
  }
  warn(...param) {
    if (!ENV.isDebugEnable) {
      return;
    }
    console.warn("EGS:", ...param);
  }
  error(content, type = "Unreachable" /* Unreachable */) {
    if (!ENV.isDebugEnable && this.exceptionCount >= _Logger.MAX_EXCEPTION_SIZE) {
      return;
    }
    const error = typeof content === "string" ? new Error(`EGS Exception: <${type}> ${content}`) : content;
    console.error(error);
  }
  // logic error
  unreachable(content) {
    this.error(content, "Unreachable" /* Unreachable */);
  }
  // platform issue
  unsupported(content) {
    this.error(content, "Unsupported" /* Unsupported */);
  }
  // user input invalid
  invalidInput(content) {
    this.error(content, "InvalidInput" /* InvalidInput */);
  }
  // webgl error
  webglError(content) {
    this.error(content, "WebglError" /* WebglError */);
  }
  webGpuError(content) {
    this.error(content, "WebGpuError" /* WebGpuError */);
  }
};
_Logger.MAX_EXCEPTION_SIZE = 1024;
var Logger = _Logger;
var logger = new Logger();

// ../../external/egs-core/packages/egs-lib/src/promise.ts
function deferred() {
  let resolve = () => {
  };
  let reject = () => {
  };
  const promise = new Promise(function(resolveInner, rejectInner) {
    resolve = resolveInner;
    reject = rejectInner;
  });
  return {
    promise,
    resolve,
    reject
  };
}

// ../../external/egs-core/packages/egs-lib/src/worker.ts
var WorkerFlags = {
  BUSY: 1,
  ALIVE: 2,
  PERMANENT: 4,
  KEEP: 1 | 4
};

// ../../external/egs-core/packages/egs-lib/src/BVH.ts
var EXPAND_TABLE = new Uint32Array(1024);
for (let i2 = 0; i2 < 1024; i2++) {
  let x2 = i2;
  x2 = (x2 | x2 << 16) & 50331903;
  x2 = (x2 | x2 << 8) & 50393103;
  x2 = (x2 | x2 << 4) & 51130563;
  x2 = (x2 | x2 << 2) & 153391689;
  EXPAND_TABLE[i2] = x2 >>> 0;
}
var bucket = new Uint32Array(1 << 16);

// ../../external/egs-core/packages/loaders/splat-loader/zstd/wasm/zstd.js
var zstd_exports = {};
__export(zstd_exports, {
  ZstdDecompressor: () => ZstdDecompressor,
  __wbg___wbindgen_throw_1506f2235d1bdba0: () => __wbg___wbindgen_throw_1506f2235d1bdba0,
  __wbg_call_9c758de292015997: () => __wbg_call_9c758de292015997,
  __wbg_new_50bb5ebeecef71a8: () => __wbg_new_50bb5ebeecef71a8,
  __wbg_new_d90091b82fdf5b91: () => __wbg_new_d90091b82fdf5b91,
  __wbg_new_from_slice_18fa1f71286d66b8: () => __wbg_new_from_slice_18fa1f71286d66b8,
  __wbg_push_a6822215aa43e71c: () => __wbg_push_a6822215aa43e71c,
  __wbg_set_wasm: () => __wbg_set_wasm,
  __wbindgen_cast_0000000000000001: () => __wbindgen_cast_0000000000000001,
  __wbindgen_init_externref_table: () => __wbindgen_init_externref_table,
  setWasmModule: () => setWasmModule
});

// ../../external/egs-core/packages/loaders/splat-loader/zstd/wasm/zstd_bg.js
var ZstdDecompressor = class _ZstdDecompressor {
  static __wrap(ptr) {
    const obj = Object.create(_ZstdDecompressor.prototype);
    obj.__wbg_ptr = ptr;
    ZstdDecompressorFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ZstdDecompressorFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_zstddecompressor_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} input
   * @returns {Array<any>}
   */
  feed(input) {
    const ptr0 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.zstddecompressor_feed(this.__wbg_ptr, ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * @param {Uint8Array} input
   * @param {Function} callback
   */
  feedView(input, callback) {
    const ptr0 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.zstddecompressor_feedView(this.__wbg_ptr, ptr0, len0, callback);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @returns {Array<any>}
   */
  finish() {
    const ret = wasm.zstddecompressor_finish(this.__wbg_ptr);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * @param {Function} callback
   */
  finishView(callback) {
    const ret = wasm.zstddecompressor_finishView(this.__wbg_ptr, callback);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  constructor() {
    const ret = wasm.zstddecompressor_new();
    this.__wbg_ptr = ret;
    ZstdDecompressorFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {number} output_chunk_size
   * @returns {ZstdDecompressor}
   */
  static withOutputChunkSize(output_chunk_size) {
    const ret = wasm.zstddecompressor_withOutputChunkSize(output_chunk_size);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return _ZstdDecompressor.__wrap(ret[0]);
  }
};
if (Symbol.dispose) ZstdDecompressor.prototype[Symbol.dispose] = ZstdDecompressor.prototype.free;
function __wbg___wbindgen_throw_1506f2235d1bdba0(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
function __wbg_call_9c758de292015997() {
  return handleError(function(arg0, arg1, arg2) {
    const ret = arg0.call(arg1, arg2);
    return ret;
  }, arguments);
}
function __wbg_new_50bb5ebeecef71a8(arg0, arg1) {
  const ret = new Error(getStringFromWasm0(arg0, arg1));
  return ret;
}
function __wbg_new_d90091b82fdf5b91() {
  const ret = new Array();
  return ret;
}
function __wbg_new_from_slice_18fa1f71286d66b8(arg0, arg1) {
  const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
  return ret;
}
function __wbg_push_a6822215aa43e71c(arg0, arg1) {
  const ret = arg0.push(arg1);
  return ret;
}
function __wbindgen_cast_0000000000000001(arg0, arg1) {
  const ret = getArrayU8FromWasm0(arg0, arg1);
  return ret;
}
function __wbindgen_init_externref_table() {
  const table = wasm.__wbindgen_externrefs;
  const offset = table.grow(4);
  table.set(0, void 0);
  table.set(offset + 0, void 0);
  table.set(offset + 1, null);
  table.set(offset + 2, true);
  table.set(offset + 3, false);
}
var ZstdDecompressorFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_zstddecompressor_free(ptr, 1));
function addToExternrefTable0(obj) {
  const idx = wasm.__externref_table_alloc();
  wasm.__wbindgen_externrefs.set(idx, obj);
  return idx;
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
function getStringFromWasm0(ptr, len) {
  return decodeText(ptr >>> 0, len);
}
var cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0(e);
    wasm.__wbindgen_exn_store(idx);
  }
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function takeFromExternrefTable0(idx) {
  const value = wasm.__wbindgen_externrefs.get(idx);
  wasm.__externref_table_dealloc(idx);
  return value;
}
var cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var MAX_SAFARI_DECODE_BYTES = 2146435072;
var numBytesDecoded = 0;
function decodeText(ptr, len) {
  numBytesDecoded += len;
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    numBytesDecoded = len;
  }
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
var WASM_VECTOR_LEN = 0;
var wasm;
function __wbg_set_wasm(val) {
  wasm = val;
}
function setWasmModule(module) {
  __wbg_set_wasm(module);
  wasm.__wbindgen_start();
  cachedUint8ArrayMemory0 = null;
}

// ../../external/egs-core/packages/loaders/splat-loader/zstd/wasm/zstd_bg.wasm.js
var buffer = (function(base64Data) {
  const binary = globalThis.atob(base64Data);
  const bytes = new Uint8Array(binary.length);
  for (let i2 = 0; i2 < binary.length; i2 += 1) {
    bytes[i2] = binary.charCodeAt(i2);
  }
  return bytes.buffer;
})("AGFzbQEAAAABlgIkYAJ/fwF/YAN/f38Bf2ACf38AYAV/f39/fwF/YAN/f38AYAF/AGAFf39/f38AYAR/f39/AGAAA39/f2ABfwF/YAAAYAACf39gAn9/AW9gBH9/f38Bf2AAAX9gBn9/f39/fwF/YAd/f39/f39/AGAGf39/f39/AGABfwN/f39gA29vbwFvYAJvbwF/YAABb2AIf39/f39/f38Bf2AJf39/f39/f39/AX9gB39/f39/f38Bf2ABfwF+YA5/f39/f39/f39/f39/fwF/YAZ/f39+f38AYAZ/f399f38AYAZ/f398f38AYAN/f38Df39/YAR/f39vAn9/YAJ/bwJ/f2AFf399f38AYAV/f35/fwBgBX9/fH9/AAL2AggMLi96c3RkX2JnLmpzG19fd2JnX2NhbGxfOWM3NThkZTI5MjAxNTk5NwATDC4venN0ZF9iZy5qcxtfX3diZ19wdXNoX2E2ODIyMjE1YWE0M2U3MWMAFAwuL3pzdGRfYmcuanMaX193YmdfbmV3X2Q5MDA5MWI4MmZkZjViOTEAFQwuL3pzdGRfYmcuanMlX193YmdfbmV3X2Zyb21fc2xpY2VfMThmYTFmNzEyODZkNjZiOAAMDC4venN0ZF9iZy5qcxpfX3diZ19uZXdfNTBiYjVlYmVlY2VmNzFhOAAMDC4venN0ZF9iZy5qcydfX3diZ19fX3diaW5kZ2VuX3Rocm93XzE1MDZmMjIzNWQxYmRiYTAAAgwuL3pzdGRfYmcuanMfX193YmluZGdlbl9pbml0X2V4dGVybnJlZl90YWJsZQAKDC4venN0ZF9iZy5qcyBfX3diaW5kZ2VuX2Nhc3RfMDAwMDAwMDAwMDAwMDAwMQAMA5kBlwEPAwYGBgYDAwkNBhAHAwcAAwMWFwMNBRgEAQEBABEZBAIHAAECDgkaAgADAAIABAIDAgEEBAYOEAMDAwMDAhEGBAACBgAEBwcFAAIBBQICGxwdAAABBQEAAAAABAIHBAADAAoeBAIfABISIAUPACEDIiMNCQAAAAEBAAQCAgEBAAUBCQYADgUAAgAFAAoCCgUCAgAACQIFBAkCcAFHR28AgAgFAwEAEQYPAn8BQYCAwAALfwFBgAgLB8oEFgZtZW1vcnkCABtfX3diZ196c3RkZGVjb21wcmVzc29yX2ZyZWUAORV6c3RkZGVjb21wcmVzc29yX2ZlZWQAaxl6c3RkZGVjb21wcmVzc29yX2ZlZWRWaWV3AG4XenN0ZGRlY29tcHJlc3Nvcl9maW5pc2gAcRt6c3RkZGVjb21wcmVzc29yX2ZpbmlzaFZpZXcAchR6c3RkZGVjb21wcmVzc29yX25ldwA+JHpzdGRkZWNvbXByZXNzb3Jfd2l0aE91dHB1dENodW5rU2l6ZQBwGnJ1c3RfenN0ZF93YXNtX3NoaW1fY2FsbG9jAHUYcnVzdF96c3RkX3dhc21fc2hpbV9mcmVlAIgBGnJ1c3RfenN0ZF93YXNtX3NoaW1fbWFsbG9jAHsacnVzdF96c3RkX3dhc21fc2hpbV9tZW1jbXAAgAEacnVzdF96c3RkX3dhc21fc2hpbV9tZW1jcHkAhQEbcnVzdF96c3RkX3dhc21fc2hpbV9tZW1tb3ZlAIUBGnJ1c3RfenN0ZF93YXNtX3NoaW1fbWVtc2V0AIYBGXJ1c3RfenN0ZF93YXNtX3NoaW1fcXNvcnQAKRRfX3diaW5kZ2VuX2V4bl9zdG9yZQCOARdfX2V4dGVybnJlZl90YWJsZV9hbGxvYwAtFV9fd2JpbmRnZW5fZXh0ZXJucmVmcwEBEV9fd2JpbmRnZW5fbWFsbG9jAG8ZX19leHRlcm5yZWZfdGFibGVfZGVhbGxvYwBQEF9fd2JpbmRnZW5fc3RhcnQABglXAQBBAQtGfnNeNWGTAU1IbGxzUX0Hd0dGR0dYR05GRnZXeXhHR1lGTkd3dEZ/TnpHaVtnYlIxc1wzWo8BZJABmAFzTDdFnQGDAYQBkQEkSZsBjAEiYJoBDAEUCofaB5cB+MYBASt/IwBBkAJrIg4kAEG4fyEUAkAgACgClOsBBH8gACgC0OkBBUGAgAgLIARJDQACfyADIQkCQCAEQQJJDQAgAy0AACIHQQNxIRggACgClOsBBH8gACgC0OkBBUGAgAgLIQgCQAJAAkACQAJAIBhBAWsOAwMBAAILIAAoAojqAQ0AQWIMBQsgBEEFSQ0DQQMhFCAJKAAAIQMCfwJ/AkACQAJAIAdBAnZBA3EiB0ECaw4CAQIACyADQQ52Qf8HcSEPIANBBHZB/wdxIQMgB0EARwwDCyADQRJ2IQ9BBCEUIANBBHZB//8AcQwBCyAJLQAEQQp0IANBFnZyIQ9BBSEU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EQAAQQBIIgcbaikAACEXIAUgBUEIQTggBxtqKQAANwA4IAUgFzcACCAFQShBECAFQShqIgwgBUEQaiIHIAYoAgAoAgARAABBAEgiDxtqKQAAIRcgBSAFQRBBKCAPG2opAAA3ACggBSAXNwAQIAVBwABBICAFQUBrIhEgBUEgaiIPIAYoAgAoAgARAABBAEgiEBtqKQAAIRcgBSAFQSBBwAAgEBtqKQAANwBAIAUgFzcAICAJIAUgCSAFIAYoAgAoAgARAABBAEgiEBspAAAhFyAFIAUgCSAQGykAADcAOCAFIBc3AAAgBUEgQRAgDyAHIAYoAgAoAgARAABBAEgiEBtqKQAAIRcgBSAFQRBBICAQG2opAAA3ACAgBSAXNwAQIAVBwABBGCARIAIgBigCACgCABEAAEEASCIQG2opAAAhFyAFIAVBGEHAACAQG2opAAA3AEAgBSAXNwAYIAVBMEEoIAVBMGoiECAMIAYoAgAoAgARAABBAEgiCxtqKQAAIRcgBSAFQShBMCALG2opAAA3ADAgBSAXNwAoIAcgBSAHIAUgBigCACgCABEAAEEASCILGykAACEXIAUgBSAHIAsbKQAANwAQIAUgFzcAACAFQRhBCCACIAogBigCACgCABEAAEEASCILG2opAAAhFyAFIAVBCEEYIAsbaikAADcAGCAFIBc3AAggBUEoQSAgDCAPIAYoAgAoAgARAABBAEgiCxtqKQAAIRcgBSAFQSBBKCALG2opAAA3ACggBSAXNwAgIAVBwABBOCARIAkgBigCACgCABEAAEEASCILG2opAAAhFyAFIAVBOEHAACALG2opAAA3AEAgBSAXNwA4IAVBIEEIIA8gCiAGKAIAKAIAEQAAQQBIIgsbaikAACEXIAUgBUEIQSAgCxtqKQAANwAgIAUgFzcACCAFQTBBGCAQIAIgBigCACgCABEAAEEASCILG2opAAAhFyAFIAVBGEEwIAsbaikAADcAMCAFIBc3ABggBUE4QSggCSAMIAYoAgAoAgARAABBAEgiCxtqKQAAIRcgBSAFQShBOCALG2opAAA3ADggBSAXNwAoIAogBSAKIAUgBigCACgCABEAAEEASCILGykAACEXIAUgBSAKIAsbKQAANwAIIAUgFzcAACAFQSBBECAPIAcgBigCACgCABEAAEEASCILG2opAAAhFyAF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IAIgBSACIAUgBigCACgCABEAAEEASCINGykAACEXIAUgBSACIA0bKQAANwAoIAUgFzcAACAFQcAAQRggECAPIAYoAgAoAgARAABBAEgiDRtqKQAAIRcgBSAFQRhBwAAgDRtqKQAANwBAIAUgFzcAGCAFQThBICAUIAkgBigCACgCABEAAEEASCING2opAAAhFyAFIAVBIEE4IA0baikAADcAOCAFIBc3ACAgBUHYAEEwIBIgByAGKAIAKAIAEQAAQQBIIg0baikAACEXIAUgBUEwQdgAIA0baikAADcAWCAFIBc3ADAgBUHQAEHIACARIAwgBigCACgCABEAAEEASCING2opAAAhFyAFIAVByABB0AAgDRtqKQAANwBQIAUgFzcASCAKIAUgCiAFIAYoAgAoAgARAABBAEgiDRspAAAhFyAFIAUgCiANGykAADcACCAFIBc3AAAgBUEoQRAgAiALIAYoAgAoAgARAABBAEgiDRtqKQAAIRcgBSAFQRBBKCANG2opAAA3ACggBSAXNwAQIAVByABBMCAMIAcgBigCACgCABEAAEEASCING2opAAAhFyAFIAVBMEHIACANG2opAAA3AEggBSAXNwAwIAVBwABBOCAQIBQgBigCACgCABEAAEEASCING2opAAAhFyAFIAVBOEHAACANG2opAAA3AEAgBSAXNwA4IAVB2ABB0AAgEiARIAYoAgAoAgARAABBAEgiEhtqKQAAIRcgBSAFQdAAQdgAIBIbaikAADcAWCAFIBc3AFAgBUEYQQggDyAKIAYoAgAoAgARAABBAEgiEhtqKQAAIRcgBSAFQQhBGCASG2opAAA3ABggBSAXNwAIIAVBIEEQIAkgCyAGKAIAKAIAEQAAQQBIIhIbaikAACEXIAUgBUEQQSAgEhtqKQAANwAgIAUgFzcAECAFQTBBKCAHIAIgBigCACgCABEAAEEASCISG2opAAAhFyAFIAVBKEEwIBIbaikAADcAMCAFIBc3ACggBUHQAEHIACARIAwgBigCACgCABEAAEEASCIRG2opAAAhFyAFIAVByABB0AAgERtqKQAANwBQIAUgFzcASCAFQRBBCCALIAogBigCACgCABEAAEEASCIKG2opAAAhFyAFIAVBCEEQIAobaikAADcAECAFIBc3AAggBUEgQRggCSAPIAYoAgAoAgARAABB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ADsAECAFIAs7AAggCCAFIAggBSAGKAIAKAIAEQAAQQBIIhAbLwAAIQsgBSAFIAggEBsvAAA7AA4gBSALOwAAIAVBCEEEIBMgByAGKAIAKAIAEQAAQQBIIhAbai8AACELIAUgBUEEQQggEBtqLwAAOwAIIAUgCzsABCAFQRBBBiANIAIgBigCACgCABEAAEEASCIQG2ovAAAhCyAFIAVBBkEQIBAbai8AADsAECAFIAs7AAYgBUEMQQogBUEMaiIQIA8gBigCACgCABEAAEEASCILG2ovAAAhESAFIAVBCkEMIAsbai8AADsADCAFIBE7AAogByAFIAcgBSAGKAIAKAIAEQAAQQBIIgsbLwAAIREgBSAFIAcgCxsvAAA7AAQgBSAROwAAIAVBBkECIAIgDCAGKAIAKAIAEQAAQQBIIgsbai8AACERIAUgBUECQQYgCxtqLwAAOwAGIAUgETsAAiAFQQpBCCAPIBMgBigCACgCABEAAEEASCILG2ovAAAhESAFIAVBCEEKIAsbai8AADsACiAFIBE7AAggBUEQQQ4gDSAIIAYoAgAoAgARAABBAEgiCxtqLwAAIREgBSAFQQ5BECALG2ovAAA7ABAgBSAROwAOIAVBCEECIBMgDCAGKAIAKAIAEQAAQQBIIgsbai8AACERIAUgBUECQQggCxtqLwAAOwAIIAUgETsAAiAFQQxBBiAQIAIgBigCACgCABEAAEEASCILG2ovAAAhESAFIAVBBkEMIAsbai8AADsADCAFIBE7AAYgBUEOQQogCCAPIAYoAgAoAgARAABBAEgiCxtqLwAAIREgBSAFQQpBDiALG2ovAAA7AA4gBSAROwAKIAwgBSAMIAUgBigCACgCABEAAEEASCILGy8AACERIAUgBSAMIAsbLwAAOwACIAUgETsAACAFQQhBBCATIAcgBigCACgCABEAAEEASCILG2ovAAAhESAFIAVBBEEIIAsbai8AADsACCAFIBE7AAQgBUEKQQYgDyACIAYoAgAoAgARAABBAEgiCxtqLwAAIREgBSAFQQZBCiALG2ovAAA7AAogBSAROwAGIAVBEEEMIA0gECAGKAIAKAIAEQAAQQBIIg0bai8AACELIAUgBUEMQRAgDRtqLwAAOwAQIAUgCzsADCAFQQZBBCACIAcgBigCACgCABEAAEEASCING2ovAAAh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ACADakEoaiABIAL8CgAACyAAIAAoAkggAmo2AkgPCyABIAJqIQIgAwRAQSAgA2siBARAIABBKGogA2ogASAE/AoAAAsgACgCSCEDIABBADYCSCAAIAApAwggACkDKELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fjcDCCAAIAApAxAgACkDMELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fjcDECAAIAApAxggACkDOELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fjcDGCAAIAApAyAgACkDQELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fjcDICABIANrQSBqIQELIAIgAUEgak8EQCACQSBrIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgACABKQAAQs/W077Sx6vZQn4gCHxCH4lCh5Wvr5i23puef34iCDcDCCAAIAFBCGopAABCz9bTvtLHq9lCfiAHfEIfiUKHla+vmLbem55/fiIHNwMQIAAgAUEQaikAAELP1tO+0ser2UJ+IAZ8Qh+JQoeVr6+Ytt6bnn9+IgY3AxggACABQRhqKQAAQs/W077Sx6vZQn4gBXxCH4lCh5Wvr5i23puef34iBTcDICABQSBqIgEgA00NAAsLIAEgAk8NACACIAFrIgIEQCAAQShqIAEgAvwKAAALIAAgAjYCSAsLjQQBAn8gACABaiECAkACQCAAKAIEIgNBAXENACADQQJxRQ0BIAAoAgAiAyABaiEBIAAgA2siAEGk18AAKAIARgRAIAIoAgRBA3FBA0cNAUGc18AAIAE2AgAgAiACKAIEQX5xNgIEIAAgAUEBcjYCBCACIAE2AgAMAgsgACADECwLAkACQAJAIAIoAgQiA0ECcUUEQCACQajXwAAoAgBGDQIgAkGk18AAKAIARg0DIAIgA0F4cSICECwgACABIAJqIgFBAXI2AgQgACABaiABNgIAIABBpNfAACgCAEcNAUGc18AAIAE2AgAPCyACIANBfnE2AgQgACABQQFyNgIEIAAgAWogATYCAAsgAUGAAk8EQCAAIAEQMA8LAn9BlNfAACgCACICQQEgAUEDdnQiA3FFBEBBlNfAACACIANyNgIAIAFB+AFxQYzVwABqIgEMAQsgAUH4AXEiAkGM1cAAaiEBIAJBlNXAAGooAgALIQIgASAANgIIIAIgADYCDCAAIAE2AgwgACACNgIIDwtBqNfAACAANgIAQaDXwABBoNfAACgCACABaiIBNgIAIAAgAUEBcjYCBCAAQaTXwAAoAgBHDQFBnNfAAEEANgIAQaTXwABBADYCAA8LQaTXwAAgADYCAEGc18AAQZzXwAAoAgAgAWoiATYCACAAIAFBAXI2AgQgACABaiABNgIACwuiGgMGfwF+AXsjAEEQayIHJAACQAJAAkACQAJAAkACQCACQQFrDhABAgADAAAABAAAAAAAAAAFAAtBrJvAAEEbQcibwAAQZgALIAcgAzYCBCAHIAdBBGo2AgggByAHQQhqNgIMIAFBAkkiAg0EIAFBFU8EQCAHQQxqIQggAg0FAkACQAJAIABBAWogACAIKAIAIgQoAgAoAgARAAAiA0EATgRAQQIhCSABQQJGDQEDQCAAIAlqIgIgAkEBayAEKAIAKAIAEQAAQQBIDQIgASAJQQFqIglHDQALDAILQQIhCSABQQJGDQADQCAAIAlqIgIgAkEBayAEKAIAKAIAEQAAQQBODQEgASAJQQFqIglHDQALDAELIAEgCUcNAQtBACEJIANBAE4NBiAAIAFqIQYgAUEBdiICQQFHBEAgAUEBayEFIAJB/v///wdxIQQDQCAAIAVqIgMtAAAhAiADIAAgCWoiCC0AADoAACAIIAI6AAAgBiAJQX5zaiICLQAAIQMgAiAIQQFqIgItAAA6AAAgAiADOgAAIAVBAmshBSAEIAlBAmoiCUcNAAsLIAFBAnFFDQYgACAJaiIALQAAIQEgACAGIAlBf3NqIgAtAAA6AAAgACABOgAADAYLIAAgAUEAIAFBAXJnQQF0QT5zIAgQCgwFCyAAIQIgB0EIaiEIQQEhACMAQRBrIgYkAAJAIAEEQCABQQFHBEAgASACaiEDIAJBAWohBQNAIAUgBUEBayAIKAIAKAIAEQAAQQBIBEAgBiAFLQAAOgAPIAAhAQJ/A0AgASACaiIEIARBAWstAAA6AAAgAiABQQFGDQEaIAFBAWshASAGQQ9qIARBAmsgCCgCACgCABEAAEEASA0ACyABIAJqCyAGLQAPOgAACyAAQQFqIQAgBUEBaiIFIANHDQALCyAGQRBqJAAMAQsACwwECyAHIAM2AgQgByAHQQRqNgIIIAcgB0EIajYCDCABQQJJDQMgAUEVTwRAIAdBDGohBSABIgNBAkkNBAJAAkACQCAAQQJqIgEgACAFKAIAIgYoAgAoAgARAAAiCEEATgRAQQIhBCADQQJGDQEDQCABQQJqIgIgASAGKAIAKAIAEQAAQQBIDQIgAiEBIAMgBEEBaiIERw0ACwwCC0ECIQQgA0ECRg0AIABBAmohAQNAIAFBAmoiAiABIAYoAgAoAgARAABBAE4NASACIQEgAyAEQQFqIgRHDQALDAELIAMgBEcNAQsgCEEATg0FIAAgA0EBdGohBSADQQF2IgFBAUcEQCABQf7///8HcSEGIAVBAmshASAAIQQDQCABLwAAIQIgASAELwAAOwAAIAQgAjsAACAFIAlB/v///wdzQQF0aiICLwAAIQggAiAEQQJqIgIvAAA7AAAgAiAIOwAAIAFBBGshASAEQQRqIQQgBiAJQQJqIglHDQALCyADQQJxRQ0FIAAgCUEBdGoiAC8AACEBIAAgBSAJQX9zQQF0aiIALwAAOwAAIAAgATsAAAwFCyAAIANBACADQQFyZ0EBdEE+cyAFEAwMBAsgACECIAdBCGohCCMAQRBrIgYkAAJAIAEEQCABQQFHBEAgACABQQF0aiEDIAJBAiIAaiEFA0AgBSAFQQJrIAgoAgAoAgARAABBAEgEQCAGIAUvAAA7AQ4gACEBAn8DQCABIAJqIgQgBEECay8AADsAACACIAFBAkYNARogAUECayEBIAZBDmogBEEEayAIKAIAKAIAEQAAQQBIDQALIAEgAmoLIAYvAQ47AAALIABBAmohACAFQQJqIgUgA0cNAAsLIAZBEGokAAwBCwALDAMLIAcgAzYCBCAHIAdBBGo2AgggByAHQQhqNgIMIAFBAkkNAiABQRVPBEAgB0EMaiEFIAEiA0ECSQ0DAkACQAJAIABBBGoiASAAIAUoAgAiBigCACgCABEAACIIQQBOBEBBAiEEIANBAkYNAQNAIAFBBGoiAiABIAYoAgAoAgARAABBAEgNAiACIQEgAyAEQQFqIgRHDQALDAILQQIhBCADQQJGDQAgAEEEaiEBA0AgAUEEaiICIAEgBigCACgCABEAAEEATg0BIAIhASADIARBAWoiBEcNAAsMAQsgAyAERw0BCyAIQQBODQQgACADQQJ0aiEFIANBAXYiAUEBRwRAIAFB/v///wdxIQYgBUEEayEBIAAhBANAIAEoAAAhAiABIAQoAAA2AAAgBCACNgAAIAUgCUH+////A3NBAnRqIgIoAAAhCCACIARBBGoiAigAADYAACACIAg2AAAgAUEIayEBIARBCGohBCAGIAlBAmoiCUcNAAsLIANBAnFFDQQgACAJQQJ0aiIAKAAAIQEgACAFIAlBf3NBAnRqIgAoAAA2AAAgACABNgAADAQLIAAgA0EAIANBAXJnQQF0QT5zIAUQDQwDCyAAIQIgB0EIaiEIIwBBEGsiBiQAAkAgAQRAIAFBAUcEQCAAIAFBAnRqIQMgAkEEIgBqIQUDQCAFIAVBBGsgCCgCACgCABEAAEEASARAIAYgBSgAADYCDCAAIQECfwNAIAEgAmoiBCAEQQRrKAAANgAAIAIgAUEERg0BGiABQQRrIQEgBkEMaiAEQQhrIAgoAgAoAgARAABBAEgNAAsgASACagsgBigCDDYAAAsgAEEEaiEAIAVBBGoiBSADRw0ACwsgBkEQaiQADAELAAsMAgsgByADNgIEIAcgB0EEajYCCCAHIAdBCGo2AgwgAUECSQ0BIAFBFU8EQCAHQQxqIQUgASIDQQJJDQICQAJAAkAgAEEIaiIBIAAgBSgCACIGKAIAKAIAEQAAIghBAE4EQEECIQQgA0ECRg0BA0AgAUEIaiICIAEgBigCACgCABEAAEEASA0CIAIhASADIARBAWoiBEcNAAsMAgtBAiEEIANBAkYNACAAQQhqIQEDQCABQQhqIgIgASAGKAIAKAIAEQAAQQBODQEgAiEBIAMgBEEBaiIERw0ACwwBCyADIARHDQELQQAhBSAIQQBODQMgACADQQN0aiEGIANBAXYiAUEBRwRAIAFB/v///wdxIQggBkEIayEBIAAhBANAIAQpAAAhCiAEIAEpAAA3AAAgASAKNwAAIARBCGoiAikAACEKIAIgBiAFQf7///8Bc0EDdGoiAikAADcAACACIAo3AAAgAUEQayEBIARBEGohBCAIIAVBAmoiBUcNAAsLIANBAnFFDQMgACAFQQN0aiIAKQAAIQogACAGIAVBf3NBA3RqIgApAAA3AAAgACAKNwAADAMLIAAgA0EAIANBAXJnQQF0QT5zIAUQCwwCCyAAIQIgB0EIaiEIIwBBEGsiBiQAAkAgAQRAIAFBAUcEQCAAIAFBA3RqIQMgAkEIIgBqIQUDQCAFIAVBCGsgCCgCACgCABEAAEEASARAIAYgBSkAADcDCCAAIQECfwNAIAEgAmoiBCAEQQhrKQAANwAAIAIgAUEIRg0BGiABQQhrIQEgBkEIaiAEQRBrIAgoAgAoAgARAABBAEgNAAsgASACagsgBikDCDcAAAsgAEEIaiEAIAVBCGoiBSADRw0ACwsgBkEQaiQADAELAAsMAQsgByADNgIEIAcgB0EEajYCCCAHIAdBCGo2AgwgAUECSQ0AIAFBFU8EQCAHQQxqIQUgASIDQQJJDQECQAJAAkAgAEEQaiIBIAAgBSgCACIGKAIAKAIAEQAAIghBAE4EQEECIQQgA0ECRg0BA0AgAUEQaiICIAEgBigCACgCABEAAEEASA0CIAIhASADIARBAWoiBEcNAAsMAgtBAiEEIANBAkYNACAAQRBqIQEDQCABQRBqIgIgASAGKAIAKAIAEQAAQQBODQEgAiEBIAMgBEEBaiIERw0ACwwBCyADIARHDQELQQAhBSAIQQBODQIgACADQQR0aiEGIANBAXYiAUEBRwRAIAFB/v///wdxIQggBkEQayEBIAAhBANAIAH9AAAAIQsgASAE/QAAAP0LAAAgBCAL/QsAACAGIAVB/v///wBzQQR0aiIC/QAAACELIAIgBEEQaiIC/QAAAP0LAAAgAiAL/QsAACABQSBrIQEgBEEgaiEEIAggBUECaiIFRw0ACwsgA0ECcUUNAiAAIAVBBHRqIgD9AAAAIQsgACAGIAVBf3NBBHRqIgD9AAAA/QsAACAAIAv9CwAADAILIAAgA0EAIANBAXJnQQF0QT5zIAUQEgwBCyAHQQhqIQYjAEEQayIFJAAgACICQRBqIQMgACABQQR0aiEIIAAhAQNAIAMiACABIAYoAgAoAgARAABBAEgEQCAFIAD9AAAA/QsDACAEIQMCfwNAIAIgA2oiAUEQaiAB/QAAAP0LAAAgAiADRQ0BGiAFIANBEGsiAyACaiIBIAYoAgAoAgARAABBAEgNAAsgAUEQagsgBf0AAwD9CwAACyAEQRBqIQQgACIBQRBqIgMgCEcNAAsgBUEQaiQACyAHQRBqJAAL5wIBBX8CQCABQc3/e0EQIAAgAEEQTRsiAGtPDQAgAEEQIAFBC2pBeHEgAUELSRsiBGpBDGoQECICRQ0AIAJBCGshAQJAIABBAWsiAyACcUUEQCABIQAMAQsgAkEEayIFKAIAIgZBeHEgAiADakEAIABrcUEIayICIABBACACIAFrQRBNG2oiACABayICayEDIAZBA3EEQCAAIAMgACgCBEEBcXJBAnI2AgQgACADaiIDIAMoAgRBAXI2AgQgBSACIAUoAgBBAXFyQQJyNgIAIAEgAmoiAyADKAIEQQFyNgIEIAEgAhAoDAELIAEoAgAhASAAIAM2AgQgACABIAJqNgIACwJAIAAoAgQiAUEDcUUNACABQXhxIgIgBEEQak0NACAAIAQgAUEBcXJBAnI2AgQgACAEaiIBIAIgBGsiBEEDcjYCBCAAIAJqIgIgAigCBEEBcjYCBCABIAQQKAsgAEEIaiEDCyADC+EDAgF+BX8gAEHA6QFqIAEgAiAAKALs6gEQHSIBQYh/TQR/IAEEQEG4fw8LAkAgACgCsOsBQQFHDQAgACgCrOsBIgRFDQAgACgCnOsBRQ0AIARBBGooAgBBAWsiBSAAKALc6QEiBq1Ch5Wvr5i23puef35Cyc/ZsvHluuonhUIXiULP1tO+0ser2UJ+Qvnz3fGZ9pmrFnwiA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFp3EhAQNAIAYgBCgCACABIgdBAnRqKAIAEIoBIghHBEAgASAFcUEBaiEBIAgNAQsLIAQoAgAgB0ECdGooAgAiAUUNACAAKAKY6wEQVCAAQQA2ApjrASAAQX82AqjrASAAIAE2ApzrASAAIAAoAtzpATYCoOsBCwJAIAAoAtzpASIBRQ0AIAAoAqDrASABRg0AQWAPCwJAIAAoAuDpAQRAIAAgACgC8OoBIgFFNgL06gEgAQ0BIABBkOoBakEAQdgA/AsAIABC+erQ0OfJoeThADcDsOoBIABCz9bTvtLHq9lCNwOg6gEgAELW64Lu6v2J9eAANwOY6gEMAQsgAEEANgL06gELIAAgACkD8OkBIAKtfDcD8OkBQQAFIAELC4IDAQR/IAAoAgwhAgJAAkACQCABQYACTwRAIAAoAhghAwJAAkAgACACRgRAIABBFEEQIAAoAhQiAhtqKAIAIgENAUEAIQIMAgsgACgCCCIBIAI2AgwgAiABNgIIDAELIABBFGogAEEQaiACGyEEA0AgBCEFIAEiAkEUaiACQRBqIAIoAhQiARshBCACQRRBECABG2ooAgAiAQ0ACyAFQQA2AgALIANFDQICQCAAKAIcQQJ0QfzTwABqIgEoAgAgAEcEQCADKAIQIABGDQEgAyACNgIUIAINAwwECyABIAI2AgAgAkUNBAwCCyADIAI2AhAgAg0BDAILIAAoAggiACACRwRAIAAgAjYCDCACIAA2AggPC0GU18AAQZTXwAAoAgBBfiABQQN2d3E2AgAPCyACIAM2AhggACgCECIBBEAgAiABNgIQIAEgAjYCGAsgACgCFCIARQ0AIAIgADYCFCAAIAI2AhgPCw8LQZjXwABBmNfAACgCAEF+IAAoAhx3cTYCAAuXAwEFfyMAQSBrIgIkAAJAQejTwAAoAgBFBEBB6NPAAEF/NgIAAn8CQAJAAkBB9NPAACgCACIBQfDTwAAoAgAiAEYEQCABQezTwAAoAgAiAEcNAdBvQYABIAEgAUGAAU0bIgP8DwEiAEF/Rw0CDAYLIAAgAU0NBUHc08AAKAIAIAFBAnRqKAIAIQBBAAwDCyAAIAFNDQRB3NPAACgCACEADAELAkBB+NPAACgCACIERQRAQfjTwAAgADYCAAwBCyABIARqIABHDQQLIAEgA2oiA0H/////AUsNA0EAIQAgAiABBH8gAiABQQJ0NgIcIAJB3NPAACgCADYCFEEEBUEACzYCGCACQQhqQQQgA0ECdCACQRRqEE8gAigCCEEBRg0DQdzTwAAgAigCDCIANgIAQezTwAAgAzYCAAsgACABQQJ0aiABQQFqIgA2AgBB8NPAACAANgIAQejTwAAoAgBBAWoLIQNB9NPAACAANgIAQejTwAAgAzYCAEH408AAKAIAIAJBIGokACABag8LQfiYwAAQngEACwALnQMCBH8BbyMAQTBrIgEkACABQoCAgIAQNwIAIAFBADYCCAJ/AkACQAJAQQEgACgCACICQYCAgIB4cyACQQBOGyICQQFHBEACQCACQQFrDgIAAgQLAAsgASAANgIMIAEgAUEMaq1CgICAgBCENwMQIAFCATcCJCABQQE2AhwgAUHglcAANgIYIAEgAUEQajYCICABQYCAwAAgAUEYahAjDQEgASgCBCECIAEoAggMAwsgAUEAQRQQPCABKAIEIgIgASgCCCIDaiIEQeiVwAD9AAAA/QsAACAEQRBqQfiVwAAoAAA2AAAgA0EUagwCC0GogMAAQTcgAUEYakGYgMAAQYyTwAAQSwALIAFBAEEiEDwgASgCBCICIAEoAggiBGoiA0GplcAA/QAAAP0LAAAgA0EQakG5lcAA/QAAAP0LAAAgA0EgakHJlcAALwAAOwAAIARBImoLIQQgASgCACEDIAIgBBAEIQUQLSIEIAUmASADBEAgAiADEFYLIAAoAgAiAkEASCACRXJFBEAgACgCBCACEFYLIAFBMGokACAEC9ECAQF/IwBBgAFrIg4kACAOIAM2AnwCQAJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hAgwECyAFLQAAIgIgA0sEQEFsIQIMBAsgAiAIai0AACEDIABBADoACyAAIAM6AAogAEEAOwEIIAEgADYCACAHIAJBAnRqKAIAIQEgAEIANwIAIAAgATYCDEEBIQIMAwsgASAJNgIAQQAhAgwCCyAKRQRAQWwhAgwCC0EAIQIgC0UgDEEZSXINAUEIIAR0QQZ2IQMgASgCACECA0AgAkGABGohAiADQQhrIgMNAAtBACECQQAhAwNAIANBQGsiA0HAAEcNAAsMAQtBbCECIA4gDkH8AGogDkH4AGogBSAGEBkiA0GIf0sNACAEIA4oAngiBUkNACAAIA4gDigCfCAHIAggBSANEBMgASAANgIAIAMhAgsgDkGAAWokACACC8QCAQR/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEmIAFBCHZnIgNrdkEBcSADQQF0a0E+agsiAjYCHCACQQJ0QfzTwABqIQRBASACdCIDQZjXwAAoAgBxRQRAIAQgADYCACAAIAQ2AhggACAANgIMIAAgADYCCEGY18AAQZjXwAAoAgAgA3I2AgAPCwJAAkAgASAEKAIAIgMoAgRBeHFGBEAgAyECDAELIAFBGSACQQF2a0EAIAJBH0cbdCEFA0AgAyAFQR12QQRxaiIEKAIQIgJFDQIgBUEBdCEFIAIhAyACKAIEQXhxIAFHDQALCyACKAIIIgEgADYCDCACIAA2AgggAEEANgIYIAAgAjYCDCAAIAE2AggPCyAEQRBqIAA2AgAgACADNgIYIAAgADYCDCAAIAA2AggLlgIBB38jAEEQayIEJABBCiECIAAoAgAiBSEDIAVB6AdPBEAgBSEAA0AgBEEGaiACaiIGQQRrIAAgAEGQzgBuIgNBkM4AbGsiB0H//wNxQeQAbiIIQQF0LwCwvkA7AAAgBkECayAHIAhB5ABsa0H//wNxQQF0LwCwvkA7AAAgAkEEayECIABB/6ziBEsgAyEADQALCwJAIANBCU0EQCADIQAMAQsgAkECayICIARBBmpqIAMgA0H//wNxQeQAbiIAQeQAbGtB//8DcUEBdC8AsL5AOwAAC0EAIAUgABtFBEAgAkEBayICIARBBmpqIABBAXQtALG+QDoAAAsgAUEBQQAgBEEGaiACakEKIAJrEBwgBEEQaiQAC84CAQR/IwBBIGsiBSQAQQEhBwJAIAAtAAQNACAALQAFIQggACgCACIGLQAKQYABcUUEQCAGKAIAQZrAwABBvMDAACAIQQFxIggbQQJBAyAIGyAGKAIEKAIMEQEADQEgBigCACABIAIgBigCBCgCDBEBAA0BIAYoAgBBv8DAAEECIAYoAgQoAgwRAQANASADIAYgBCgCDBEAACEHDAELIAhBAXFFBEAgBigCAEHBwMAAQQMgBigCBCgCDBEBAA0BCyAFQQE6AA8gBUGkwMAANgIUIAUgBikCADcCACAFIAYpAgg3AhggBSAFQQ9qNgIIIAUgBTYCECAFIAEgAhAiDQAgBUG/wMAAQQIQIg0AIAMgBUEQaiAEKAIMEQAADQAgBSgCEEGcwMAAQQIgBSgCFCgCDBEBACEHCyAAQQE6AAUgACAHOgAEIAVBIGokACAAC4gCAQZ/IAAoAggiBCECAn9BASABQYABSQ0AGkECIAFBgBBJDQAaQQNBBCABQYCABEkbCyIGIAAoAgAgBGtLBH8gACAEIAYQNiAAKAIIBSACCyAAKAIEaiECAkAgAUGAAU8EQCABQT9xQYB/ciEFIAFBBnYhAyABQYAQSQRAIAIgBToAASACIANBwAFyOgAADAILIAFBDHYhByADQT9xQYB/ciEDIAFB//8DTQRAIAIgBToAAiACIAM6AAEgAiAHQeABcjoAAAwCCyACIAU6AAMgAiADOgACIAIgB0E/cUGAf3I6AAEgAiABQRJ2QXByOgAADAELIAIgAToAAAsgACAEIAZqNgIIQQALiwUBBX8jAEEgayIDJAACQCABRQRAIABCgICAgIiAgICAfzcCAAwBC0HA7AUQeyICBEAgAkEANgKc6wEgAkEANgKQ6wEgAkEANgKE6wEgAkIANwL86gEgAkEANgK87AUgAkEANgLU6wEgAkIANwPA6wEgAkIANwKk6wEgAkEANgK46QEgAkEANgKs6wEgAkIBNwKU6wEgAkIANwPo6wEgAkGBgIDAADYCzOsBIAJCADcC7OoBIAL9DAAAAAAAAAAAAAAAAAAAAAD9CwOw6wELIAJFBEAjAEEwayIAJAAgAEE0NgIMIABBrJrAADYCCCAAQQE2AhQgAEGoxMAANgIQIABCATcCHCAAIABBCGqtQoCAgIDwB4Q3AyggACAAQShqNgIYIABBEGpB4JrAABBtAAsgAyACNgIcIANBHGooAgAiAkEANgLo6wEgAkEANgK86wEgAkEBNgKU6wEgAigCmOsBEFQgAkEANgKo6wEgAkIANwOY6wFBAUEFIAIoAuzqARsiAhCcASEEIANBEGoiBiACNgIEIAYgBEEARzYCACADKAIQQQFxRQRAAkAgAUEASA0AIAMoAhwhAkEBIQUgAUEBEF8iBEUNACAAQQA6ABAgACACNgIMIAAgATYCCCAAIAQ2AgQgACABNgIADAILIAUgAUH8k8AAEIIBAAsgA0EIaiADKAIUEFUCQCADKAIMIgFBAEgNACADKAIIIQQCQCABRQRAQQEhAgwBC0EBIQUgAUEBEIEBIgJFDQELIAEEQCACIAQgAfwKAAALIAAgATYCDCAAIAI2AgggACABNgIEIABBgICAgHg2AgAgA0EcahCXAQwBCyAFIAFBvJbAABCCAQALIANBIGokAAuIAgEGfyAAKAIIIgQhAgJ/QQEgAUGAAUkNABpBAiABQYAQSQ0AGkEDQQQgAUGAgARJGwsiBiAAKAIAIARrSwR/IAAgBCAGEDwgACgCCAUgAgsgACgCBGohAgJAIAFBgAFPBEAgAUE/cUGAf3IhBSABQQZ2IQMgAUGAEEkEQCACIAU6AAEgAiADQcABcjoAAAwCCyABQQx2IQcgA0E/cUGAf3IhAyABQf//A00EQCACIAU6AAIgAiADOgABIAIgB0HgAXI6AAAMAgsgAiAFOgADIAIgAzoAAiACIAdBP3FBgH9yOgABIAIgAUESdkFwcjoAAAwBCyACIAE6AAALIAAgBCAGajYCCEEAC8oBAgR/AX4jAEEgayIDJAACQAJAIAIgASACaiIESwRAQQAhAQwBC0EAIQFBCCAEIAAoAgAiBUEBdCICIAIgBEkbIgIgAkEITRsiBK2nIgZB/////wdLDQAgAyAFBH8gAyAFNgIcIAMgACgCBDYCFEEBBUEACzYCGCADQQhqQQEgBiADQRRqEE8gAygCCEEBRw0BIAMoAhAhAiADKAIMIQELIAEgAkHUtsAAEIIBAAsgAygCDCEBIAAgBDYCACAAIAE2AgQgA0EgaiQAC5kCAgN/An4jAEFAaiICJAAgASgCAEGAgICAeEYEQCABKAIMIAJBJGoiBEEANgIAIAJCgICAgBA3AhwoAgAiAykCACEFIAMpAgghBiACIAMpAhA3AjggAiAGNwIwIAIgBTcCKCACQRxqQYS2wAAgAkEoahAjGiACQRhqIAQoAgAiAzYCACACIAIpAhwiBTcDECABQQhqIAM2AgAgASAFNwIACyABKQIAIQUgAUKAgICAEDcCACACQQhqIgMgAUEIaiIBKAIANgIAIAFBADYCACACIAU3AwBBDEEEEIEBIgFFBEBBBEEMEJkBAAsgASACKQMANwIAIAFBCGogAygCADYCACAAQfS3wAA2AgQgACABNgIAIAJBQGskAAuiAgEEfyMAQSBrIgUkAEEBIQYCQCAAKAIAIgcgASACIAAoAgQiCCgCDCIBEQEADQACQCAALQAKQYABcUUEQCAHQZ7AwABBASABEQEADQIgAyAAIAQoAgwRAABFDQEMAgsgB0GfwMAAQQIgAREBAA0BIAVBAToADyAFIAg2AgQgBSAHNgIAIAVBpMDAADYCFCAFIAApAgg3AhggBSAFQQ9qNgIIIAUgBTYCECADIAVBEGogBCgCDBEAAA0BIAUoAhBBnMDAAEECIAUoAhQoAgwRAQANAQsCQCACDQAgAC0ACkGAAXENACAAKAIAQaLAwABBASAAKAIEKAIMEQEADQELIAAoAgBBocDAAEEBIAAoAgQoAgwRAQAhBgsgBUEgaiQAIAYL/AECAn8BeyMAQTBrIgIkAAJAAkACQCABRQRAIABFDQEgAEEIayIBKAIAQQFHDQIgAkEoaiIDIABBFGooAgA2AgAgAP0AAgQhBCABQQA2AgAgAiAE/QsDGAJAIAFBf0YNACAAQQRrIgAgACgCAEEBayIANgIAIAANACABQSAQVgsgAkEQaiADKAIANgIAIAIgAv0AAxj9CwMAIAJBDGoQlwEgAigCACIARQ0DIAIoAgQgABBWDAMLIABFDQAgAEEIayIAIAAoAgBBAWsiATYCACACIAA2AhggAQ0CIAJBGGoQXQwCCxCUAQALQfyVwABBPxCVAQALIAJBMGokAAv/AQEBfyACRQRAIABBADYCECAA/QwAAAAAAAAAAAAAAAAAAAAA/QsCAEG4fw8LIAAgATYCDCAAIAFBBGo2AhAgAkEETwRAIAAgASACaiIBQQRrIgM2AgggACADKAAANgIAIAFBAWstAAAiAQRAIABBCCABZ0Efc2s2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAAkACQAJAIAJBAmsOAgEAAgsgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakEBay0AACIBRQRAIABBADYCBEFsDwsgACABZyACQQN0a0EJajYCBCACC80BAQN/IAEgAi8BACIEIAEoAgRqIgM2AgQgACAEQQJ0KALgm0AgASgCAEEAIANrdnE2AgACQCADQSFPBEAgAUHgnMAANgIIDAELIAEoAggiBCABKAIQTwRAIAEgA0EHcTYCBCABIAQgA0EDdmsiAzYCCCABIAMoAAA2AgAMAQsgBCABKAIMIgVGDQAgASADIAQgBWsgA0EDdiIDIAQgA2sgBUkbIgNBA3RrNgIEIAEgBCADayIDNgIIIAEgAygAADYCAAsgACACQQRqNgIEC7sBAQN/IwBBIGsiAyQAAkACf0EAIAIgASACaiIESw0AGkEAQQggBCAAKAIAIgJBAXQiASABIARJGyIEIARBCE0bIgRBAEgNABpBACEBIAMgAgR/IAMgAjYCHCADIAAoAgQ2AhRBAQVBAAs2AhggA0EIakEBIAQgA0EUahBPIAMoAghBAUcNASADKAIQIQUgAygCDAsgBUHclMAAEIIBAAsgAygCDCEBIAAgBDYCACAAIAE2AgQgA0EgaiQAC5QCAQJ/IwBBIGsiBSQAQczXwABBzNfAACgCACIGQQFqNgIAAkACf0EAIAZBAEgNABpBAUHI18AALQAADQAaQcjXwABBAToAAEHE18AAQcTXwAAoAgBBAWo2AgBBAgtB/wFxIgZBAkcEQCAGQQFxRQ0BIAVBCGogACABKAIYEQIADAELQdDXwAAoAgAiBkEASA0AQdDXwAAgBkEBajYCAEHU18AAKAIABEAgBSAAIAEoAhQRAgAgBSAEOgAdIAUgAzoAHCAFIAI2AhggBSAFKQMANwIQQdTXwAAoAgAgBUEQakHY18AAKAIAKAIUEQIAC0HQ18AAQdDXwAAoAgBBAWs2AgBByNfAAEEAOgAAIANFDQAACwALxwEBA38jAEFAaiIAJAAgAEEcakGAgAQQNAJAIAAoAhxBgICAgHhHBEAgAEEYaiICIABBLGooAgA2AgAgACAA/QACHP0LAwhBIEEEEIEBIgFFDQEgAUEANgIIIAFCgYCAgBA3AgAgASAA/QADCP0LAgwgAUEcaiACKAIANgIAIABBQGskACABQQhqDwsgAEE4aiAAQShqKAIANgIAIAAgACkCIDcDMEGclMAAQSUgAEEwakGMlMAAQcSUwAAQSwALQQRBIBCZAQALsgEBAX8gAAJ/IAQgAiAAKAKU6wEEfyAAKALQ6QEFQYCACAsiByADakFAa01yRQRAIAAgASAHakEgaiIBNgL86wEgASADaiEDQQEMAQsgA0GAgARNBEAgACAAQYjsAWoiATYC/OsBIAEgA2ohA0EADAELIAAgASAFaiIBIANrIgJB4P8DaiIEIAIgBhs2AvzrASADIARqQYCABGsgASAGGyEDQQILNgKE7AEgACADNgKA7AELpAEBAn8gA0EITwRAIAAgACADQQN2IgNBBHQiBWogACADQRxsIgZqIAMgBBBAIQAgASABIAVqIAEgBmogAyAEEEAhASACIAIgBWogAiAGaiADIAQQQCECCyAAIAEgBCgCACgCACgCABEAACIDIAAgAiAEKAIAKAIAKAIAEQAAc0EATgR/IAIgASABIAIgBCgCACgCACgCABEAACADc0EASBsFIAALC6QBAQJ/IANBCE8EQCAAIAAgA0EDdiIDQQJ0IgVqIAAgA0EHbCIGaiADIAQQQSEAIAEgASAFaiABIAZqIAMgBBBBIQEgAiACIAVqIAIgBmogAyAEEEEhAgsgACABIAQoAgAoAgAoAgARAAAiAyAAIAIgBCgCACgCACgCABEAAHNBAE4EfyACIAEgASACIAQoAgAoAgAoAgARAAAgA3NBAEgbBSAACwukAQECfyADQQhPBEAgACAAIANBA3YiA0EFdCIFaiAAIANBOGwiBmogAyAEEEIhACABIAEgBWogASAGaiADIAQQQiEBIAIgAiAFaiAC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AAYAAABhIERpc3BsYXkgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IgdW5leHBlY3RlZGx5T3BlcmF0aW9uIG1hZGUgbm8gcHJvZ3Jlc3Mgb3ZlciBtdWx0aXBsZSBjYWxscywgZHVlIHRvIGlucHV0IGJlaW5nIGVtcHR5AEFsbG9jYXRpb24gZXJyb3IgOiBub3QgZW5vdWdoIG1lbW9yeQBDb250ZXh0IHNob3VsZCBiZSBpbml0IGZpcnN0AFNyYyBzaXplIGlzIGluY29ycmVjdABVbnN1cHBvcnRlZCBjb21iaW5hdGlvbiBvZiBwYXJhbWV0ZXJzAGxpYnJhcnkvY29yZS9zcmMvc2xpY2Uvc29ydC9zaGFyZWQvc21hbGxzb3J0LnJzAEM6XFVzZXJzXGhlaW1laVwuY2FyZ29ccmVnaXN0cnlcc3JjXHJzcHJveHkuY24tZTNkZTAzOWIyNTU0YzgzN1x3YXNtLWJpbmRnZW4tMC4yLjEyMlxzcmNcY29udmVydFxzbGljZXMucnMAQzpcVXNlcnNcaGVpbWVpXC5jYXJnb1xyZWdpc3RyeVxzcmNccnNwcm94eS5jbi1lM2RlMDM5YjI1NTRjODM3XHpzdGQtc3lzLTIuMC4xNit6c3RkLjEuNS43XHNyY1x3YXNtX3NoaW0ucnMAQzpcVXNlcnNcaGVpbWVpXC5ydXN0dXBcdG9vbGNoYWluc1xzdGFibGUteDg2XzY0LXBjLXdpbmRvd3MtbXN2Y1xsaWIvcnVzdGxpYi9zcmMvcnVzdFxsaWJyYXJ5L2FsbG9jL3NyYy9zdHJpbmcucnMAQzpcVXNlcnNcaGVpbWVpXC5jYXJnb1xyZWdpc3RyeVxzcmNccnNwcm94eS5jbi1lM2RlMDM5YjI1NTRjODM3XHdhc20tYmluZGdlbi0wLjIuMTIyXHNyY1xleHRlcm5yZWYucnMAc3JjXGNvcmUucnMAbGlicmFyeS9jb3JlL3NyYy91bmljb2RlL3ByaW50YWJsZS5ycwBDOlxVc2Vyc1xoZWltZWlcLnJ1c3R1cFx0b29sY2hhaW5zXHN0YWJsZS14ODZfNjQtcGMtd2luZG93cy1tc3ZjXGxpYi9ydXN0bGliL3NyYy9ydXN0XGxpYnJhcnkvYWxsb2Mvc3JjL3NsaWNlLnJzAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycwBDOlxVc2Vyc1xoZWltZWlcLnJ1c3R1cFx0b29sY2hhaW5zXHN0YWJsZS14ODZfNjQtcGMtd2luZG93cy1tc3ZjXGxpYi9ydXN0bGliL3NyYy9ydXN0XGxpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMvbW9kLnJzAC9ydXN0Yy9lZDYxZTdkN2UyNDI0OTRmYjcwNTdmMjY1NzMwMGQ5ZTc3YmI0ZmNiL2xpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMvbW9kLnJzAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjEwL3NyYy9kbG1hbGxvYy5ycwBsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMAQzpcVXNlcnNcaGVpbWVpXC5jYXJnb1xyZWdpc3RyeVxzcmNccnNwcm94eS5jbi1lM2RlMDM5YjI1NTRjODM3XHpzdGQtc2FmZS03LjIuNFxzcmNcbGliLnJzAENhbm5vdCBjcmVhdGUgRGljdGlvbmFyeSBmcm9tIHByb3ZpZGVkIHNhbXBsZXMAVW5rbm93biBmcmFtZSBkZXNjcmlwdG9yAFVuc3VwcG9ydGVkIGZyYW1lIHBhcmFtZXRlcgBVbnN1cHBvcnRlZCBwYXJhbWV0ZXIAT3BlcmF0aW9uIG9uIE5VTEwgZGVzdGluYXRpb24gYnVmZmVyAEhlYWRlciBvZiBMaXRlcmFscycgYmxvY2sgZG9lc24ndCByZXNwZWN0IGZvcm1hdCBzcGVjaWZpY2F0aW9uAFJlc3RvcmVkIGRhdGEgZG9lc24ndCBtYXRjaCBjaGVja3N1bQBPcGVyYXRpb24gbWFkZSBubyBwcm9ncmVzcyBvdmVyIG11bHRpcGxlIGNhbGxzLCBkdWUgdG8gb3V0cHV0IGJ1ZmZlciBiZWluZyBmdWxsAERlc3RpbmF0aW9uIGJ1ZmZlciBpcyB0b28gc21hbGwAU3BlY2lmaWVkIG1heFN5bWJvbFZhbHVlIGlzIHRvbyBzbWFsbABUaGlzIG1vZGUgY2Fubm90IGdlbmVyYXRlIGFuIHVuY29tcHJlc3NlZCBibG9jawB3b3JrU3BhY2UgYnVmZmVyIGlzIG5vdCBsYXJnZSBlbm91Z2gARGljdGlvbmFyeSBtaXNtYXRjaABEZXN0aW5hdGlvbiBidWZmZXIgaXMgd3JvbmcAU291cmNlIGJ1ZmZlciBpcyB3cm9uZwBBbiBJL08gZXJyb3Igb2NjdXJyZWQgd2hlbiByZWFkaW5nL3NlZWtpbmcARnJhbWUgcmVxdWlyZXMgdG9vIG11Y2ggbWVtb3J5IGZvciBkZWNvZGluZwBGcmFtZSBpbmRleCBpcyB0b28gbGFyZ2UAVW5zdXBwb3J0ZWQgbWF4IFN5bWJvbCBWYWx1ZSA6IHRvbyBsYXJnZQBPcGVyYXRpb24gbm90IGF1dGhvcml6ZWQgYXQgY3VycmVudCBwcm9jZXNzaW5nIHN0YWdlAEJsb2NrLWxldmVsIGV4dGVybmFsIHNlcXVlbmNlIHByb2R1Y2VyIHJldHVybmVkIGFuIGVycm9yIGNvZGUAVW5zcGVjaWZpZWQgZXJyb3IgY29kZQBQYXJhbWV0ZXIgaXMgb3V0IG9mIGJvdW5kAEV4dGVybmFsIHNlcXVlbmNlcyBhcmUgbm90IHZhbGlkAHRhYmxlTG9nIHJlcXVpcmVzIHRvbyBtdWNoIG1lbW9yeSA6IHVuc3VwcG9ydGVkAFZlcnNpb24gbm90IHN1cHBvcnRlZABEaWN0aW9uYXJ5IGlzIGNvcnJ1cHRlZABObyBlcnJvciBkZXRlY3RlZABEYXRhIGNvcnJ1cHRpb24gZGV0ZWN0ZWQAcGxlZGdlZCBidWZmZXIgc3RhYmlsaXR5IGNvbmRpdGlvbiBpcyBub3QgcmVzcGVjdGVkAEVycm9yIChnZW5lcmljKQAALQIQAHEAAAAFCwAADgAAAAAAAAAIAAAABAAAAAcAAAAIAAAAAAAAAAgAAAAEAAAABwAAAAgAAAAAAAAABAAAAAQAAAAJAAAACgAAAAAAAAAEAAAABAAAAAkAAAAKAAAABQMQAAsAAABjAAAAIgAAAAUDEAALAAAAMQAAABUAAAALAAAADAAAAAQAAAAMAAAAZGVmYXVsdCBkZWNvbXByZXNzb3IgbGltaXRzIGFyZSB2YWxpZAAAAAUDEAALAAAAIgAAAA4AAABFcnJvcgAAAMQDEAB2AAAAKgIAABEAAABJbnZhbGlkT3V0cHV0Q2h1bmtTaXplAAAAAAAABAAAAAQAAAANAAAARGVjb2RlclRydW5jYXRlZElucHV0b3V0cHV0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");
var zstd_bg_wasm_default = buffer;

// ../../external/egs-core/packages/loaders/splat-loader/zstd/index.ts
var initdDeferred;
var WasmImportMap = {
  "./zstd_bg.js": zstd_exports
};
var WASM_INSTANCE;
var WASM_MODULE;
async function init() {
  if (initdDeferred) {
    return initdDeferred.promise;
  }
  initdDeferred = deferred();
  if (WASM_MODULE) {
    WASM_INSTANCE = await WebAssembly.instantiate(WASM_MODULE, WasmImportMap);
  } else {
    const { instance, module } = await WebAssembly.instantiate(zstd_bg_wasm_default, WasmImportMap);
    WASM_INSTANCE = instance;
    WASM_MODULE = module;
  }
  setWasmModule(WASM_INSTANCE.exports);
  initdDeferred.resolve();
}
async function createZstdDecompressor(outputChunkSize = 64 * 1024) {
  await init();
  return ZstdDecompressor.withOutputChunkSize(outputChunkSize);
}

// ../../external/egs-core/packages/loaders/splat-loader/file/spz.ts
var SPZ_MAGIC = 1347635022;
var SPZ_VERSION = 4;
var SPZ_LEGACY_VERSION = 3;
var FLAG_ANTIALIASED = 1;
var MAX_SAFE_STREAM_SIZE = BigInt(Number.MAX_SAFE_INTEGER);
var STREAM_CHUNK_BYTE_LENGTH2 = 128 * 1024;
var COLOR_SCALE = SH_C0 / 0.15;
var rotation = new Array(4);
var SH_SCALE1 = 1 << 3;
var SH_SCALE2 = 1 << 4;
var SCALE_LUT = new Float32Array(256);
var COLOR_LUT = new Float32Array(256);
for (let i2 = 0; i2 < 256; i2++) {
  SCALE_LUT[i2] = Math.exp(i2 / 16 - 10);
  COLOR_LUT[i2] = (i2 / 255 - 0.5) * COLOR_SCALE + 0.5;
}
async function decodeAttributes(cursor, data, blockOffset, version, counts, shCounts, fractionalBits) {
  const isF16 = version < 2;
  const useSmallestThreeQuat = version >= 3;
  const fractionInv = 1 / (1 << fractionalBits);
  const setCenter = data.setCenter.bind(data);
  const setAlpha = data.setAlpha.bind(data);
  const setColor = data.setColor.bind(data);
  const setScale = data.setScale.bind(data);
  const setQuat = data.setQuat.bind(data);
  const setShN = data.setShN.bind(data);
  const shN = new Array(shCounts).fill(0);
  const decoders = [
    {
      init: () => [counts, isF16 ? 6 : 9],
      decode: (offset, counts2, buf) => {
        offset += blockOffset;
        let x2, y, z;
        for (let i2 = 0; i2 < counts2; i2++) {
          if (isF16) {
            const o = i2 * 6;
            x2 = fromHalf(buf[o + 1] << 8 | buf[o]);
            y = fromHalf(buf[o + 3] << 8 | buf[o + 2]);
            z = fromHalf(buf[o + 5] << 8 | buf[o + 4]);
          } else {
            const o = i2 * 9;
            x2 = ((buf[o + 2] << 24 | buf[o + 1] << 16 | buf[o] << 8) >> 8) * fractionInv;
            y = ((buf[o + 5] << 24 | buf[o + 4] << 16 | buf[o + 3] << 8) >> 8) * fractionInv;
            z = ((buf[o + 8] << 24 | buf[o + 7] << 16 | buf[o + 6] << 8) >> 8) * fractionInv;
          }
          setCenter(offset + i2, x2, y, z);
        }
      }
    },
    {
      init: () => [counts, 1],
      decode: (offset, counts2, buf) => {
        offset += blockOffset;
        for (let i2 = 0; i2 < counts2; i2++) {
          setAlpha(offset + i2, buf[i2] / 255);
        }
      }
    },
    {
      init: () => [counts, 3],
      decode: (offset, counts2, buf) => {
        offset += blockOffset;
        for (let i2 = 0; i2 < counts2; i2++) {
          const o = i2 * 3;
          setColor(offset + i2, COLOR_LUT[buf[o]], COLOR_LUT[buf[o + 1]], COLOR_LUT[buf[o + 2]]);
        }
      }
    },
    {
      init: () => [counts, 3],
      decode: (offset, counts2, buf) => {
        offset += blockOffset;
        for (let i2 = 0; i2 < counts2; i2++) {
          const o = i2 * 3;
          setScale(offset + i2, SCALE_LUT[buf[o]], SCALE_LUT[buf[o + 1]], SCALE_LUT[buf[o + 2]]);
        }
      }
    },
    {
      init: () => [counts, useSmallestThreeQuat ? 4 : 3],
      decode: (offset, counts2, buf) => {
        offset += blockOffset;
        let qx, qy, qz, qw;
        for (let i2 = 0; i2 < counts2; i2++) {
          if (!useSmallestThreeQuat) {
            const o = i2 * 3;
            qx = buf[o] / 127.5 - 1;
            qy = buf[o + 1] / 127.5 - 1;
            qz = buf[o + 2] / 127.5 - 1;
            qw = Math.sqrt(Math.max(0, 1 - qx * qx - qy * qy - qz * qz));
          } else {
            const o = i2 * 4;
            const packed = buf[o] | buf[o + 1] << 8 | buf[o + 2] << 16 | buf[o + 3] << 24;
            const largest = packed >>> 30;
            let temp = packed;
            let sum = 0;
            for (let j = 3; j >= 0; j--) {
              if (j === largest) {
                continue;
              }
              const mag = temp & 511;
              const sign = temp >>> 9 & 1;
              temp >>>= 10;
              const v = Math.SQRT1_2 * (mag / 511) * (sign ? -1 : 1);
              rotation[j] = v;
              sum += v * v;
            }
            rotation[largest] = Math.sqrt(1 - sum);
            qx = rotation[0];
            qy = rotation[1];
            qz = rotation[2];
            qw = rotation[3];
          }
          setQuat(offset + i2, qx, qy, qz, qw);
        }
      }
    }
  ];
  if (shCounts > 0) {
    decoders.push({
      init: () => [counts, shCounts],
      decode: (offset, counts2, buf) => {
        offset += blockOffset;
        for (let i2 = 0; i2 < counts2; i2++) {
          const o = i2 * shCounts;
          for (let j = 0; j < shCounts; j++) {
            shN[j] = (buf[o + j] - 128) / 128;
          }
          setShN(offset + i2, shN);
        }
      }
    });
  }
  await new StreamChunkDecoder(cursor).decode(decoders);
}
async function pipeZstdStream(cursor, writer2, compressedSize, uncompressedSize, streamIndex) {
  const decompressor = await createZstdDecompressor(STREAM_CHUNK_BYTE_LENGTH2);
  let produced = 0;
  const writeOutputs = async (chunks) => {
    for (const chunk of chunks) {
      produced += chunk.byteLength;
      if (produced > uncompressedSize) {
        throw new Error(`Invalid SPZ v4 decompressed size at index ${streamIndex}`);
      }
      await writer2.write(chunk);
    }
  };
  try {
    await cursor.readChunks(compressedSize, async (chunk) => {
      await writeOutputs(decompressor.feed(chunk));
    });
    await writeOutputs(decompressor.finish());
  } finally {
    decompressor.free();
  }
  if (produced !== uncompressedSize) {
    throw new Error(`Invalid SPZ v4 decompressed size at index ${streamIndex}`);
  }
}
var SpzFile = class {
  async readStream(stream, data) {
    const cursor = new ByteStreamCursor(stream);
    const header = await cursor.readExact(32);
    const view = new DataView(header.buffer, header.byteOffset, header.byteLength);
    if (view.getUint32(0, true) !== SPZ_MAGIC) {
      throw new Error("Invalid SPZ file");
    }
    const version = view.getUint32(4, true);
    if (version !== SPZ_VERSION) {
      throw new Error(`Unsupported SPZ version: ${version}`);
    }
    const counts = view.getUint32(8, true);
    const shDegree = view.getUint8(12);
    const shCounts = SH_MAPS[shDegree];
    if (shCounts === void 0) {
      throw new Error(`Unsupported SPZ SH degree: ${shDegree}`);
    }
    const fractionalBits = view.getUint8(13);
    const numStreams = view.getUint8(15);
    const tocByteOffset = view.getUint32(16, true);
    const expectedSizes = [counts * 9, counts, counts * 3, counts * 3, counts * 4];
    if (shDegree > 0) {
      expectedSizes.push(counts * shCounts);
    }
    if (numStreams !== expectedSizes.length) {
      throw new Error(`Invalid SPZ v4 stream count: ${numStreams}`);
    }
    if (tocByteOffset < 32) {
      throw new Error(`Invalid SPZ v4 TOC offset: ${tocByteOffset}`);
    }
    if (tocByteOffset > 32) {
      await cursor.skip(tocByteOffset - 32);
    }
    const toc = await cursor.readExact(numStreams * 16);
    const tocView = new DataView(toc.buffer, toc.byteOffset, toc.byteLength);
    const blockOffset = await data.initBlock(counts, shDegree);
    const attributeStream = new TransformStream();
    const attributeCursor = new ByteStreamCursor(attributeStream.readable);
    const writer2 = attributeStream.writable.getWriter();
    const decodePromise = decodeAttributes(
      attributeCursor,
      data,
      blockOffset,
      version,
      counts,
      shCounts,
      fractionalBits
    );
    const feedPromise = (async () => {
      for (let i2 = 0; i2 < numStreams; i2++) {
        const entryOffset = i2 * 16;
        const compressedSize64 = tocView.getBigUint64(entryOffset, true);
        const uncompressedSize64 = tocView.getBigUint64(entryOffset + 8, true);
        if (compressedSize64 > MAX_SAFE_STREAM_SIZE || uncompressedSize64 > MAX_SAFE_STREAM_SIZE) {
          throw new Error(`SPZ stream size is too large at index ${i2}`);
        }
        const compressedSize = Number(compressedSize64);
        const uncompressedSize = Number(uncompressedSize64);
        if (uncompressedSize !== expectedSizes[i2]) {
          throw new Error(`Invalid SPZ v4 stream size at index ${i2}`);
        }
        await pipeZstdStream(cursor, writer2, compressedSize, uncompressedSize, i2);
      }
      await writer2.close();
    })();
    try {
      await Promise.all([feedPromise, decodePromise]);
    } catch (error) {
      await Promise.allSettled([writer2.abort(error), attributeCursor.cancel(error)]);
      await Promise.allSettled([feedPromise, decodePromise]);
      throw error;
    }
  }
  async readLegacyStream(stream, data) {
    const source = stream.pipeThrough(new self.DecompressionStream("gzip"));
    const cursor = new ByteStreamCursor(source);
    const header = await cursor.readExact(16);
    const view = new DataView(header.buffer, header.byteOffset, header.byteLength);
    if (view.getUint32(0, true) !== SPZ_MAGIC) {
      throw new Error("Invalid SPZ file");
    }
    const version = view.getUint32(4, true);
    if (version < 1 || version > SPZ_LEGACY_VERSION) {
      throw new Error(`Unsupported SPZ version: ${version}`);
    }
    const counts = view.getUint32(8, true);
    const shDegree = view.getUint8(12);
    const shCounts = SH_MAPS[shDegree];
    if (shCounts === void 0) {
      throw new Error(`Unsupported SPZ SH degree: ${shDegree}`);
    }
    const fractionalBits = view.getUint8(13);
    const blockOffset = await data.initBlock(counts, shDegree);
    await decodeAttributes(cursor, data, blockOffset, version, counts, shCounts, fractionalBits);
  }
  async read(stream, _contentLength, data) {
    const [probeStream, dataStream] = stream.tee();
    const cursor = new ByteStreamCursor(probeStream);
    let magicCode;
    try {
      magicCode = await cursor.readUint32(true);
    } catch (error) {
      dataStream.cancel(error).catch(() => {
      });
      throw error;
    } finally {
      cursor.cancel().catch(() => {
      });
    }
    if (magicCode === SPZ_MAGIC) {
      await this.readStream(dataStream, data);
    } else {
      await this.readLegacyStream(dataStream, data);
    }
    data.finishBlock();
  }
  async write(writeStream, data) {
    const compressStream = new self.CompressionStream("gzip");
    const pipePromise = compressStream.readable.pipeTo(writeStream);
    const writer2 = compressStream.writable.getWriter();
    const counts = data.counts;
    const shDegree = data.shDegree;
    const fractionalBits = 12;
    const fraction = 1 << fractionalBits;
    const shCounts = SH_MAPS[shDegree];
    {
      const buffer2 = new Uint8Array(16);
      const header = new DataView(buffer2.buffer);
      header.setUint32(0, SPZ_MAGIC, true);
      header.setUint32(4, SPZ_LEGACY_VERSION, true);
      header.setUint32(8, counts, true);
      header.setUint8(12, shDegree);
      header.setUint8(13, fractionalBits);
      header.setUint8(14, FLAG_ANTIALIASED);
      header.setUint8(15, 0);
      writer2.write(buffer2);
    }
    const single = {
      x: 0,
      y: 0,
      z: 0,
      sx: 0,
      sy: 0,
      sz: 0,
      qx: 0,
      qy: 0,
      qz: 0,
      qw: 0,
      r: 0,
      g: 0,
      b: 0,
      a: 0
    };
    {
      const ItemSize = 9;
      const chunkSize = 4096;
      const chunkCounts = Math.ceil(data.counts / chunkSize);
      for (let i2 = 0; i2 < chunkCounts; i2++) {
        if (writer2.desiredSize <= 0) {
          await writer2.ready;
        }
        const currentChunkSize = Math.min(chunkSize, data.counts - i2 * chunkSize);
        const chunk = new Uint8Array(currentChunkSize * ItemSize);
        const offset = i2 * chunkSize;
        for (let j = 0; j < currentChunkSize; j++) {
          data.getCenter(offset + j, single);
          const o = j * ItemSize;
          const ix = clamp(single.x * fraction, -8388607, 8388607);
          chunk[o + 0] = ix & 255;
          chunk[o + 1] = ix >> 8 & 255;
          chunk[o + 2] = ix >> 16 & 255;
          const iy = clamp(single.y * fraction, -8388607, 8388607);
          chunk[o + 3] = iy & 255;
          chunk[o + 4] = iy >> 8 & 255;
          chunk[o + 5] = iy >> 16 & 255;
          const iz = clamp(single.z * fraction, -8388607, 8388607);
          chunk[o + 6] = iz & 255;
          chunk[o + 7] = iz >> 8 & 255;
          chunk[o + 8] = iz >> 16 & 255;
        }
        writer2.write(chunk);
        await Promise.resolve();
      }
    }
    {
      const chunkSize = 65536;
      const chunkCounts = Math.ceil(data.counts / chunkSize);
      for (let i2 = 0; i2 < chunkCounts; i2++) {
        if (writer2.desiredSize <= 0) {
          await writer2.ready;
        }
        const currentChunkSize = Math.min(chunkSize, data.counts - i2 * chunkSize);
        const chunk = new Uint8Array(currentChunkSize);
        const offset = i2 * chunkSize;
        for (let j = 0; j < currentChunkSize; j++) {
          data.getAlpha(offset + j, single);
          chunk[j] = clamp(Math.round(single.a * 255), 0, 255);
        }
        writer2.write(chunk);
        await Promise.resolve();
      }
    }
    {
      const ItemSize = 3;
      const chunkSize = 16384;
      const chunkCounts = Math.ceil(data.counts / chunkSize);
      for (let i2 = 0; i2 < chunkCounts; i2++) {
        if (writer2.desiredSize <= 0) {
          await writer2.ready;
        }
        const currentChunkSize = Math.min(chunkSize, data.counts - i2 * chunkSize);
        const chunk = new Uint8Array(currentChunkSize * ItemSize);
        const offset = i2 * chunkSize;
        for (let j = 0; j < currentChunkSize; j++) {
          data.getColor(offset + j, single);
          const o = j * ItemSize;
          chunk[o + 0] = clamp(Math.round(((single.r - 0.5) / COLOR_SCALE + 0.5) * 255), 0, 255);
          chunk[o + 1] = clamp(Math.round(((single.g - 0.5) / COLOR_SCALE + 0.5) * 255), 0, 255);
          chunk[o + 2] = clamp(Math.round(((single.b - 0.5) / COLOR_SCALE + 0.5) * 255), 0, 255);
        }
        writer2.write(chunk);
        await Promise.resolve();
      }
    }
    {
      const ItemSize = 3;
      const chunkSize = 16384;
      const chunkCounts = Math.ceil(data.counts / chunkSize);
      for (let i2 = 0; i2 < chunkCounts; i2++) {
        if (writer2.desiredSize <= 0) {
          await writer2.ready;
        }
        const currentChunkSize = Math.min(chunkSize, data.counts - i2 * chunkSize);
        const chunk = new Uint8Array(currentChunkSize * ItemSize);
        const offset = i2 * chunkSize;
        for (let j = 0; j < currentChunkSize; j++) {
          data.getScale(offset + j, single);
          const o = j * ItemSize;
          chunk[o + 0] = clamp(Math.round((Math.log(single.sx) + 10) * 16), 0, 255);
          chunk[o + 1] = clamp(Math.round((Math.log(single.sy) + 10) * 16), 0, 255);
          chunk[o + 2] = clamp(Math.round((Math.log(single.sz) + 10) * 16), 0, 255);
        }
        writer2.write(chunk);
        await Promise.resolve();
      }
    }
    {
      const ItemSize = 4;
      const chunkSize = 16384;
      const chunkCounts = Math.ceil(data.counts / chunkSize);
      for (let i2 = 0; i2 < chunkCounts; i2++) {
        if (writer2.desiredSize <= 0) {
          await writer2.ready;
        }
        const currentChunkSize = Math.min(chunkSize, data.counts - i2 * chunkSize);
        const chunk = new Uint8Array(currentChunkSize * ItemSize);
        const offset = i2 * chunkSize;
        for (let j = 0; j < currentChunkSize; j++) {
          data.getQuat(offset + j, single);
          const o = j * ItemSize;
          rotation[0] = single.qx;
          rotation[1] = single.qy;
          rotation[2] = single.qz;
          rotation[3] = single.qw;
          let iLargest = 0;
          for (let i3 = 1; i3 < 4; ++i3) {
            if (Math.abs(rotation[i3]) > Math.abs(rotation[iLargest])) {
              iLargest = i3;
            }
          }
          const negate = rotation[iLargest] < 0 ? 1 : 0;
          let comp = iLargest;
          for (let i3 = 0; i3 < 4; ++i3) {
            if (i3 !== iLargest) {
              const negbit = (rotation[i3] < 0 ? 1 : 0) ^ negate;
              const mag = Math.floor(((1 << 9) - 1) * (Math.abs(rotation[i3]) / Math.SQRT1_2) + 0.5);
              comp = comp << 10 | negbit << 9 | mag;
            }
          }
          chunk[o + 0] = comp & 255;
          chunk[o + 1] = comp >> 8 & 255;
          chunk[o + 2] = comp >> 16 & 255;
          chunk[o + 3] = comp >> 24 & 255;
        }
        writer2.write(chunk);
        await Promise.resolve();
      }
    }
    if (shDegree > 0) {
      const shN = new Array(shCounts);
      const ItemSize = shCounts;
      const chunkSize = 1024;
      const chunkCounts = Math.ceil(data.counts / chunkSize);
      for (let i2 = 0; i2 < chunkCounts; i2++) {
        if (writer2.desiredSize <= 0) {
          await writer2.ready;
        }
        const currentChunkSize = Math.min(chunkSize, data.counts - i2 * chunkSize);
        const chunk = new Uint8Array(currentChunkSize * ItemSize);
        const offset = i2 * chunkSize;
        for (let j = 0; j < currentChunkSize; j++) {
          data.getShN(offset + j, shN);
          const o = j * ItemSize;
          for (let k = 0; k < ItemSize; k++) {
            if (k < 9) {
              chunk[o + k] = clamp(
                Math.floor((Math.round(shN[k] * 128) + 128 + SH_SCALE1 / 2) / SH_SCALE1) * SH_SCALE1,
                0,
                255
              );
              continue;
            }
            chunk[o + k] = clamp(
              Math.floor((Math.round(shN[k] * 128) + 128 + SH_SCALE2 / 2) / SH_SCALE2) * SH_SCALE2,
              0,
              255
            );
          }
        }
        writer2.write(chunk);
        await Promise.resolve();
      }
    }
    await writer2.close();
    await pipePromise;
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/file/lcc.ts
var ZIP_MAGIC2 = 67324752;
var SQRT_2 = 1.414213562373095;
var SQRT_2_INV = 0.7071067811865475;
function decodeRotation(v) {
  const d0 = (v & 1023) / 1023;
  const d1 = (v >> 10 & 1023) / 1023;
  const d2 = (v >> 20 & 1023) / 1023;
  const d3 = v >> 30 & 3;
  const qx = d0 * SQRT_2 - SQRT_2_INV;
  const qy = d1 * SQRT_2 - SQRT_2_INV;
  const qz = d2 * SQRT_2 - SQRT_2_INV;
  let sum = qx * qx + qy * qy + qz * qz;
  sum = Math.min(1, sum);
  const qw = Math.sqrt(1 - sum);
  if (d3 === 0) {
    return [qw, qx, qy, qz];
  } else if (d3 === 1) {
    return [qx, qw, qy, qz];
  } else if (d3 === 2) {
    return [qx, qy, qw, qz];
  }
  return [qx, qy, qz, qw];
}
function DecodePacked_11_10_11(enc) {
  return [(enc & 2047) / 2047, (enc >> 11 & 1023) / 1023, (enc >> 21 & 2047) / 2047];
}
function mix(min, max2, s) {
  return (1 - s) * min + s * max2;
}
var LccFile = class {
  constructor() {
    this.counts = 0;
    this.shDegree = 0;
    this.refs = {};
  }
  load(buffer2) {
    const view = new DataView(buffer2.buffer);
    if (view.getUint32(0, true) !== ZIP_MAGIC2) {
      throw new Error("LCC file is not a valid zip archive.");
    }
    this.refs = extractFromRootDir(unzipSync(buffer2));
    if (!["meta.lcc", "index.bin", "data.bin"].every((name) => !!this.refs[name])) {
      throw new Error("LCC file is missing required files.");
    }
    this.meta = JSON.parse(new TextDecoder().decode(this.refs["meta.lcc"]));
    this.counts = this.meta.splats[0];
    this.shDegree = !!this.refs["shcoef.bin"] ? 3 : 0;
  }
  async read(stream, contentLength, data) {
    let BlockOffset = 0;
    {
      const buffer2 = new Uint8Array(contentLength);
      const reader = stream.getReader();
      let offset = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        buffer2.set(value, offset);
        offset += value.length;
      }
      this.load(buffer2);
      BlockOffset = await data.initBlock(this.counts, this.shDegree);
    }
    const setFn = data.set.bind(data);
    const setShFn = data.setShN.bind(data);
    const { meta, refs } = this;
    const infos = [];
    {
      const index2 = new DataView(refs["index.bin"].buffer);
      const infoCounts = Math.floor(index2.byteLength / (4 + 16 * meta.totalLevel));
      let offset = 0;
      for (let i2 = 0; i2 < infoCounts; i2++) {
        const x2 = index2.getInt16(offset, true);
        offset += 2;
        const y = index2.getInt16(offset, true);
        offset += 2;
        const lods = [];
        for (let j = 0; j < meta.totalLevel; j++) {
          const points = index2.getInt32(offset, true);
          offset += 4;
          const ldOffset = Number(index2.getBigInt64(offset, true));
          offset += 8;
          const size = index2.getInt32(offset, true);
          offset += 4;
          lods.push({ points, offset: ldOffset, size });
        }
        infos.push({ x: x2, y, lods });
      }
    }
    const attributes = meta.attributes.reduce((p, c) => {
      p[c.name] = c;
      return p;
    }, {});
    const {
      scale: { min: scaleMin, max: scaleMax },
      shcoef: { min: shMin, max: shMax }
    } = attributes;
    const single = {
      x: 0,
      y: 0,
      z: 0,
      sx: 0,
      sy: 0,
      sz: 0,
      qx: 0,
      qy: 0,
      qz: 0,
      qw: 0,
      r: 0,
      g: 0,
      b: 0,
      a: 0
    };
    const shData = new Array(45);
    let index = BlockOffset;
    for (let i2 = 0; i2 < infos.length; i2++) {
      const info = infos[i2];
      const { points, offset, size } = info.lods[0];
      const dataview = new DataView(refs["data.bin"].buffer, offset, size);
      const shN = refs["shcoef.bin"] ? new DataView(refs["shcoef.bin"].buffer, offset * 2, size * 2) : void 0;
      for (let j = 0; j < points; j++) {
        const off = j * 32;
        single.x = dataview.getFloat32(off + 0, true);
        single.y = dataview.getFloat32(off + 4, true);
        single.z = dataview.getFloat32(off + 8, true);
        single.r = dataview.getUint8(off + 12) / 255;
        single.g = dataview.getUint8(off + 13) / 255;
        single.b = dataview.getUint8(off + 14) / 255;
        single.a = dataview.getUint8(off + 15) / 255;
        single.sx = mix(scaleMin[0], scaleMax[0], dataview.getUint16(off + 16, true) / 65535);
        single.sy = mix(scaleMin[1], scaleMax[1], dataview.getUint16(off + 18, true) / 65535);
        single.sz = mix(scaleMin[2], scaleMax[2], dataview.getUint16(off + 20, true) / 65535);
        const quat = decodeRotation(dataview.getUint32(off + 22, true));
        single.qx = quat[0];
        single.qy = quat[1];
        single.qz = quat[2];
        single.qw = quat[3];
        setFn(index, single);
        if (shN) {
          const shOff = off * 2;
          for (let k = 0; k < 15; k++) {
            const v = DecodePacked_11_10_11(shN.getUint32(shOff + k * 4, true));
            shData[k * 3] = mix(shMin[0], shMax[0], v[0]);
            shData[k * 3 + 1] = mix(shMin[1], shMax[1], v[1]);
            shData[k * 3 + 2] = mix(shMin[2], shMax[2], v[2]);
          }
          setShFn(index, shData);
        }
        index++;
      }
    }
    data.finishBlock();
  }
  async write(_stream, _data) {
    throw new Error("Method not implemented.");
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/splat/SplatData.ts
var SplatData = class {
  constructor(maxShDegree = 3, maxTextureSize = 16384, blockCounts = 1) {
    this.totalBlockCounts = 0;
    this.totalBlockShDegree = 3;
    this.blockOffsets = [];
    this.blockExecs = [];
    this.currentBlockIndex = 0;
    this.blockCounts = blockCounts;
    this.maxShDegree = maxShDegree;
    this.maxTextureSize = maxTextureSize;
  }
  initBlock(counts, shDegree) {
    this.blockOffsets.push(this.totalBlockCounts);
    this.totalBlockCounts += counts;
    this.totalBlockShDegree = Math.min(shDegree, this.totalBlockShDegree);
    const { promise, resolve } = deferred();
    this.blockExecs.push(resolve);
    if (this.blockOffsets.length === this.blockCounts) {
      this.init(this.totalBlockCounts, this.totalBlockShDegree);
      this.blockExecs[this.currentBlockIndex](this.blockOffsets[0]);
    }
    return promise;
  }
  finishBlock() {
    this.currentBlockIndex++;
    this.blockExecs[this.currentBlockIndex]?.(this.blockOffsets[this.currentBlockIndex]);
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/splat/RawSplatData.ts
var tempQuat2 = new Quaternion(0, 0, 0, 1);
var RawSplatData = class extends SplatData {
  constructor() {
    super(...arguments);
    this.counts = 0;
    this.shDegree = 0;
  }
  init(counts, shDegree) {
    this.counts = counts;
    this.shDegree = Math.min(shDegree, this.maxShDegree);
    const shCounts = this.shCounts = SH_MAPS[shDegree];
    this.table = new Array(14 + shCounts).fill(0).map(() => new Float32Array(counts));
  }
  set(i2, single) {
    const { table } = this;
    table[0 /* x */][i2] = single.x;
    table[1 /* y */][i2] = single.y;
    table[2 /* z */][i2] = single.z;
    table[3 /* sx */][i2] = single.sx;
    table[4 /* sy */][i2] = single.sy;
    table[5 /* sz */][i2] = single.sz;
    tempQuat2.set(single.qx, single.qy, single.qz, single.qw).normalize();
    table[6 /* qx */][i2] = tempQuat2.x;
    table[7 /* qy */][i2] = tempQuat2.y;
    table[8 /* qz */][i2] = tempQuat2.z;
    table[9 /* qw */][i2] = tempQuat2.w;
    table[10 /* r */][i2] = single.r;
    table[11 /* g */][i2] = single.g;
    table[12 /* b */][i2] = single.b;
    table[13 /* a */][i2] = single.a;
  }
  setCenter(i2, x2, y, z) {
    const { table } = this;
    table[0 /* x */][i2] = x2;
    table[1 /* y */][i2] = y;
    table[2 /* z */][i2] = z;
  }
  setScale(i2, sx, sy, sz) {
    const { table } = this;
    table[3 /* sx */][i2] = sx;
    table[4 /* sy */][i2] = sy;
    table[5 /* sz */][i2] = sz;
  }
  setQuat(i2, qx, qy, qz, qw) {
    const { table } = this;
    tempQuat2.set(qx, qy, qz, qw).normalize();
    table[6 /* qx */][i2] = tempQuat2.x;
    table[7 /* qy */][i2] = tempQuat2.y;
    table[8 /* qz */][i2] = tempQuat2.z;
    table[9 /* qw */][i2] = tempQuat2.w;
  }
  setColor(i2, r, g, b) {
    const { table } = this;
    table[10 /* r */][i2] = r;
    table[11 /* g */][i2] = g;
    table[12 /* b */][i2] = b;
  }
  setAlpha(i2, a) {
    const { table } = this;
    table[13 /* a */][i2] = a;
  }
  setShN(i2, shN) {
    const { table, shCounts } = this;
    const offset = 13 /* a */ + 1;
    for (let j = 0; j < shCounts; j++) {
      table[offset + j][i2] = shN[j];
    }
  }
  get(i2, single) {
    const { table } = this;
    single.x = table[0 /* x */][i2];
    single.y = table[1 /* y */][i2];
    single.z = table[2 /* z */][i2];
    single.sx = table[3 /* sx */][i2];
    single.sy = table[4 /* sy */][i2];
    single.sz = table[5 /* sz */][i2];
    single.qx = table[6 /* qx */][i2];
    single.qy = table[7 /* qy */][i2];
    single.qz = table[8 /* qz */][i2];
    single.qw = table[9 /* qw */][i2];
    single.r = table[10 /* r */][i2];
    single.g = table[11 /* g */][i2];
    single.b = table[12 /* b */][i2];
    single.a = table[13 /* a */][i2];
  }
  getCenter(i2, single) {
    const { table } = this;
    single.x = table[0 /* x */][i2];
    single.y = table[1 /* y */][i2];
    single.z = table[2 /* z */][i2];
  }
  getScale(i2, single) {
    const { table } = this;
    single.sx = table[3 /* sx */][i2];
    single.sy = table[4 /* sy */][i2];
    single.sz = table[5 /* sz */][i2];
  }
  getQuat(i2, single) {
    const { table } = this;
    single.qx = table[6 /* qx */][i2];
    single.qy = table[7 /* qy */][i2];
    single.qz = table[8 /* qz */][i2];
    single.qw = table[9 /* qw */][i2];
  }
  getColor(i2, single) {
    const { table } = this;
    single.r = table[10 /* r */][i2];
    single.g = table[11 /* g */][i2];
    single.b = table[12 /* b */][i2];
  }
  getAlpha(i2, single) {
    const { table } = this;
    single.a = table[13 /* a */][i2];
  }
  getShN(i2, shN) {
    const { shCounts, table } = this;
    const offset = 13 /* a */ + 1;
    for (let j = 0; j < shCounts; j++) {
      shN[j] = table[offset + j][i2];
    }
  }
  fillCenters(centers) {
    const { counts, table } = this;
    const xBuffer = table[0 /* x */];
    const yBuffer = table[1 /* y */];
    const zBuffer = table[2 /* z */];
    for (let i2 = 0; i2 < counts; i2++) {
      const i3 = i2 * 3;
      centers[i3 + 0] = xBuffer[i2];
      centers[i3 + 1] = yBuffer[i2];
      centers[i3 + 2] = zBuffer[i2];
    }
  }
  serialize() {
    return {
      counts: this.counts,
      shDegree: this.shDegree,
      samplers: this.table.map((buffer2) => ({
        width: this.counts,
        height: 1,
        depth: 1,
        format: 1 /* RGBA_UINT */,
        source: new Uint8Array(buffer2.buffer)
      }))
    };
  }
  deserialize(data) {
    const { counts, shDegree, samplers } = data;
    this.counts = counts;
    this.shDegree = shDegree;
    this.shCounts = SH_MAPS[shDegree];
    this.table = samplers.map((sampler) => new Float32Array(sampler.source.buffer));
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/splat/CompressedSplatData.ts
var CompressedSplatData = class extends SplatData {
  constructor() {
    super(...arguments);
    this.counts = 0;
    this.shDegree = 0;
  }
  init(counts, shDegree) {
    this.counts = counts;
    this.shDegree = Math.min(shDegree, this.maxShDegree);
    const { w: width, h: height, d: depth } = computeTextureSize(counts, this.maxTextureSize);
    const pixelCounts = width * height * depth;
    const splat1Sampler = this.splat1Sampler = {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array(16 * pixelCounts)
    };
    this.splat1Float32Buffer = new Float32Array(splat1Sampler.source.buffer);
    this.splat1Uint16Buffer = new Uint16Array(splat1Sampler.source.buffer);
    const splat2Sampler = this.splat2Sampler = {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array(16 * pixelCounts)
    };
    this.splat2Uint16Buffer = new Uint16Array(splat2Sampler.source.buffer);
    this.splat2Uint32Buffer = new Uint32Array(splat2Sampler.source.buffer);
    const sh1Sampler = this.sh1Sampler = {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array((this.shDegree >= 1 ? 16 : 0) * pixelCounts)
    };
    this.sh1Uint32Buffer = new Uint32Array(sh1Sampler.source.buffer);
    const sh2Sampler = this.sh2Sampler = {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array((this.shDegree >= 2 ? 16 : 0) * pixelCounts)
    };
    this.sh2Uint32Buffer = new Uint32Array(sh2Sampler.source.buffer);
    const sh3Sampler = this.sh3Sampler = {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array((this.shDegree >= 3 ? 16 : 0) * pixelCounts)
    };
    this.sh3Uint32Buffer = new Uint32Array(sh3Sampler.source.buffer);
    const sh4Sampler = this.sh4Sampler = {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array((this.shDegree >= 3 ? 16 : 0) * pixelCounts)
    };
    this.sh4Uint32Buffer = new Uint32Array(sh4Sampler.source.buffer);
  }
  set(i2, single) {
    const { splat1Float32Buffer, splat1Uint16Buffer, splat2Uint16Buffer, splat2Uint32Buffer } = this;
    const i4 = i2 * 4;
    const i8 = i2 * 8;
    splat1Float32Buffer[i4 + 0] = single.x;
    splat1Float32Buffer[i4 + 1] = single.y;
    splat1Float32Buffer[i4 + 2] = single.z;
    splat1Uint16Buffer[i8 + 6] = toHalf(single.a);
    splat2Uint16Buffer[i8 + 0] = toHalf(single.r);
    splat2Uint16Buffer[i8 + 1] = toHalf(single.g);
    splat2Uint16Buffer[i8 + 2] = toHalf(single.b);
    splat2Uint16Buffer[i8 + 3] = toHalf(Math.log(single.sx));
    splat2Uint16Buffer[i8 + 4] = toHalf(Math.log(single.sy));
    splat2Uint16Buffer[i8 + 5] = toHalf(Math.log(single.sz));
    const oct = encodeQuatOct(single.qx, single.qy, single.qz, single.qw);
    const quantU = clamp((oct[0] * 0.5 + 0.5) * 1023 | 0, 0, 1023);
    const quantV = clamp((oct[1] * 0.5 + 0.5) * 1023 | 0, 0, 1023);
    const angleInt = clamp(oct[2] * 4095 | 0, 0, 4095);
    splat2Uint32Buffer[i4 + 3] = angleInt << 20 | quantV << 10 | quantU;
  }
  setCenter(i2, x2, y, z) {
    const { splat1Float32Buffer } = this;
    const i4 = i2 * 4;
    splat1Float32Buffer[i4 + 0] = x2;
    splat1Float32Buffer[i4 + 1] = y;
    splat1Float32Buffer[i4 + 2] = z;
  }
  setScale(i2, sx, sy, sz) {
    const { splat2Uint16Buffer } = this;
    const i8 = i2 * 8;
    splat2Uint16Buffer[i8 + 3] = toHalf(Math.log(sx));
    splat2Uint16Buffer[i8 + 4] = toHalf(Math.log(sy));
    splat2Uint16Buffer[i8 + 5] = toHalf(Math.log(sz));
  }
  setQuat(i2, qx, qy, qz, qw) {
    const { splat2Uint32Buffer } = this;
    const i4 = i2 * 4;
    const oct = encodeQuatOct(qx, qy, qz, qw);
    const quantU = clamp((oct[0] * 0.5 + 0.5) * 1023 | 0, 0, 1023);
    const quantV = clamp((oct[1] * 0.5 + 0.5) * 1023 | 0, 0, 1023);
    const angleInt = clamp(oct[2] * 4095 | 0, 0, 4095);
    splat2Uint32Buffer[i4 + 3] = angleInt << 20 | quantV << 10 | quantU;
  }
  setColor(i2, r, g, b) {
    const { splat2Uint16Buffer } = this;
    const i8 = i2 * 8;
    splat2Uint16Buffer[i8 + 0] = toHalf(r);
    splat2Uint16Buffer[i8 + 1] = toHalf(g);
    splat2Uint16Buffer[i8 + 2] = toHalf(b);
  }
  setAlpha(i2, a) {
    const { splat1Uint16Buffer } = this;
    const i8 = i2 * 8;
    splat1Uint16Buffer[i8 + 6] = toHalf(a);
  }
  setShN(i2, shN) {
    const { shDegree, sh1Uint32Buffer, sh2Uint32Buffer } = this;
    const o = i2 * 4;
    if (shDegree >= 1) {
      sh1Uint32Buffer[o + 0] = encode111011s(shN[0], shN[1], shN[2]);
      sh1Uint32Buffer[o + 1] = encode111011s(shN[3], shN[4], shN[5]);
      sh1Uint32Buffer[o + 2] = encode111011s(shN[6], shN[7], shN[8]);
    }
    if (shDegree >= 2) {
      sh1Uint32Buffer[o + 3] = encode111011s(shN[9], shN[10], shN[11]);
      sh2Uint32Buffer[o + 0] = encode111011s(shN[12], shN[13], shN[14]);
      sh2Uint32Buffer[o + 1] = encode111011s(shN[15], shN[16], shN[17]);
      sh2Uint32Buffer[o + 2] = encode111011s(shN[18], shN[19], shN[20]);
      sh2Uint32Buffer[o + 3] = encode111011s(shN[21], shN[22], shN[23]);
    }
    if (shDegree >= 3) {
      const { sh3Uint32Buffer, sh4Uint32Buffer } = this;
      sh3Uint32Buffer[o + 0] = encode111011s(shN[24], shN[25], shN[26]);
      sh3Uint32Buffer[o + 1] = encode111011s(shN[27], shN[28], shN[29]);
      sh3Uint32Buffer[o + 2] = encode111011s(shN[30], shN[31], shN[32]);
      sh3Uint32Buffer[o + 3] = encode111011s(shN[33], shN[34], shN[35]);
      sh4Uint32Buffer[o + 0] = encode111011s(shN[36], shN[37], shN[38]);
      sh4Uint32Buffer[o + 1] = encode111011s(shN[39], shN[40], shN[41]);
      sh4Uint32Buffer[o + 2] = encode111011s(shN[42], shN[43], shN[44]);
    }
  }
  get(i2, single) {
    const { splat1Float32Buffer, splat1Uint16Buffer, splat2Uint16Buffer, splat2Uint32Buffer } = this;
    const i4 = i2 * 4;
    const i8 = i2 * 8;
    single.x = splat1Float32Buffer[i4 + 0];
    single.y = splat1Float32Buffer[i4 + 1];
    single.z = splat1Float32Buffer[i4 + 2];
    single.a = fromHalf(splat1Uint16Buffer[i8 + 6]);
    single.r = fromHalf(splat2Uint16Buffer[i8 + 0]);
    single.g = fromHalf(splat2Uint16Buffer[i8 + 1]);
    single.b = fromHalf(splat2Uint16Buffer[i8 + 2]);
    single.sx = Math.exp(fromHalf(splat2Uint16Buffer[i8 + 3]));
    single.sy = Math.exp(fromHalf(splat2Uint16Buffer[i8 + 4]));
    single.sz = Math.exp(fromHalf(splat2Uint16Buffer[i8 + 5]));
    const quatEncode = splat2Uint32Buffer[i4 + 3];
    const u = (quatEncode & 1023) / 1023 * 2 - 1;
    const v = (quatEncode >>> 10 & 1023) / 1023 * 2 - 1;
    const angle = (quatEncode >>> 20 & 4095) / 4095;
    const quat = decodeQuatOct(u, v, angle);
    single.qx = quat[0];
    single.qy = quat[1];
    single.qz = quat[2];
    single.qw = quat[3];
  }
  getCenter(i2, single) {
    const { splat1Float32Buffer } = this;
    const i4 = i2 * 4;
    single.x = splat1Float32Buffer[i4 + 0];
    single.y = splat1Float32Buffer[i4 + 1];
    single.z = splat1Float32Buffer[i4 + 2];
  }
  getScale(i2, single) {
    const { splat2Uint16Buffer } = this;
    const i8 = i2 * 8;
    single.sx = Math.exp(fromHalf(splat2Uint16Buffer[i8 + 3]));
    single.sy = Math.exp(fromHalf(splat2Uint16Buffer[i8 + 4]));
    single.sz = Math.exp(fromHalf(splat2Uint16Buffer[i8 + 5]));
  }
  getQuat(i2, single) {
    const { splat2Uint32Buffer } = this;
    const i4 = i2 * 4;
    const quatEncode = splat2Uint32Buffer[i4 + 3];
    const u = (quatEncode & 1023) / 1023 * 2 - 1;
    const v = (quatEncode >>> 10 & 1023) / 1023 * 2 - 1;
    const angle = (quatEncode >>> 20 & 4095) / 4095;
    const quat = decodeQuatOct(u, v, angle);
    single.qx = quat[0];
    single.qy = quat[1];
    single.qz = quat[2];
    single.qw = quat[3];
  }
  getColor(i2, single) {
    const { splat2Uint16Buffer } = this;
    const i8 = i2 * 8;
    single.r = fromHalf(splat2Uint16Buffer[i8 + 0]);
    single.g = fromHalf(splat2Uint16Buffer[i8 + 1]);
    single.b = fromHalf(splat2Uint16Buffer[i8 + 2]);
  }
  getAlpha(i2, single) {
    const { splat1Uint16Buffer } = this;
    const i8 = i2 * 8;
    single.a = fromHalf(splat1Uint16Buffer[i8 + 6]);
  }
  getShN(i2, shN) {
    const { shDegree, sh1Uint32Buffer, sh2Uint32Buffer } = this;
    const o = i2 * 4;
    if (shDegree >= 1) {
      decode111011s(sh1Uint32Buffer[o + 0], shN, 0);
      decode111011s(sh1Uint32Buffer[o + 1], shN, 3);
      decode111011s(sh1Uint32Buffer[o + 2], shN, 6);
    }
    if (shDegree >= 2) {
      decode111011s(sh1Uint32Buffer[o + 3], shN, 9);
      decode111011s(sh2Uint32Buffer[o + 0], shN, 12);
      decode111011s(sh2Uint32Buffer[o + 1], shN, 15);
      decode111011s(sh2Uint32Buffer[o + 2], shN, 18);
      decode111011s(sh2Uint32Buffer[o + 3], shN, 21);
    }
    if (shDegree >= 3) {
      const { sh3Uint32Buffer, sh4Uint32Buffer } = this;
      decode111011s(sh3Uint32Buffer[o + 0], shN, 24);
      decode111011s(sh3Uint32Buffer[o + 1], shN, 27);
      decode111011s(sh3Uint32Buffer[o + 2], shN, 30);
      decode111011s(sh3Uint32Buffer[o + 3], shN, 33);
      decode111011s(sh4Uint32Buffer[o + 0], shN, 36);
      decode111011s(sh4Uint32Buffer[o + 1], shN, 39);
      decode111011s(sh4Uint32Buffer[o + 2], shN, 42);
    }
  }
  fillCenters(centers) {
    const { counts, splat1Float32Buffer } = this;
    for (let i2 = 0; i2 < counts; i2++) {
      const i3 = i2 * 3;
      const i4 = i2 * 4;
      centers[i3 + 0] = splat1Float32Buffer[i4 + 0];
      centers[i3 + 1] = splat1Float32Buffer[i4 + 1];
      centers[i3 + 2] = splat1Float32Buffer[i4 + 2];
    }
  }
  serialize() {
    return {
      counts: this.counts,
      shDegree: this.shDegree,
      samplers: [
        this.splat1Sampler,
        this.splat2Sampler,
        this.sh1Sampler,
        this.sh2Sampler,
        this.sh3Sampler,
        this.sh4Sampler
      ]
    };
  }
  deserialize(data) {
    const { counts, shDegree, samplers } = data;
    this.counts = counts;
    this.shDegree = shDegree;
    const { w: width, h: height, d: depth } = computeTextureSize(counts, this.maxTextureSize);
    const pixelCounts = width * height * depth;
    const splat1Sampler = this.splat1Sampler = samplers[0] ?? {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array(16 * pixelCounts)
    };
    this.splat1Float32Buffer = new Float32Array(splat1Sampler.source.buffer);
    this.splat1Uint16Buffer = new Uint16Array(splat1Sampler.source.buffer);
    const splat2Sampler = this.splat2Sampler = samplers[1] ?? {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array(16 * pixelCounts)
    };
    this.splat2Uint16Buffer = new Uint16Array(splat2Sampler.source.buffer);
    this.splat2Uint32Buffer = new Uint32Array(splat2Sampler.source.buffer);
    const sh1Sampler = this.sh1Sampler = samplers[2] ?? {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array((shDegree >= 1 ? 16 : 0) * pixelCounts)
    };
    this.sh1Uint32Buffer = new Uint32Array(sh1Sampler.source.buffer);
    const sh2Sampler = this.sh2Sampler = samplers[3] ?? {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array((shDegree >= 2 ? 16 : 0) * pixelCounts)
    };
    this.sh2Uint32Buffer = new Uint32Array(sh2Sampler.source.buffer);
    const sh3Sampler = this.sh3Sampler = samplers[4] ?? {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array((shDegree >= 3 ? 16 : 0) * pixelCounts)
    };
    this.sh3Uint32Buffer = new Uint32Array(sh3Sampler.source.buffer);
    const sh4Sampler = this.sh4Sampler = samplers[5] ?? {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array((shDegree >= 3 ? 16 : 0) * pixelCounts)
    };
    this.sh4Uint32Buffer = new Uint32Array(sh4Sampler.source.buffer);
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/splat/SuperCompressedSplatData.ts
function packSint5x9ToUint32x2(data, out, offset) {
  const q0 = clamp(data[0] * 16 + 16.5 | 0, 0, 31);
  const q1 = clamp(data[1] * 16 + 16.5 | 0, 0, 31);
  const q2 = clamp(data[2] * 16 + 16.5 | 0, 0, 31);
  const q3 = clamp(data[3] * 16 + 16.5 | 0, 0, 31);
  const q4 = clamp(data[4] * 16 + 16.5 | 0, 0, 31);
  const q5 = clamp(data[5] * 16 + 16.5 | 0, 0, 31);
  const q6 = clamp(data[6] * 16 + 16.5 | 0, 0, 31);
  const q7 = clamp(data[7] * 16 + 16.5 | 0, 0, 31);
  const q8 = clamp(data[8] * 16 + 16.5 | 0, 0, 31);
  let low = 0;
  let high = 0;
  low |= q0 << 0;
  low |= q1 << 5;
  low |= q2 << 10;
  low |= q3 << 15;
  low |= q4 << 20;
  low |= q5 << 25;
  low |= (q6 & 3) << 30;
  high |= q6 >>> 2;
  high |= q7 << 3;
  high |= q8 << 8;
  out[offset] = low;
  out[offset + 1] = high;
}
function unpackSint5x9FromUint32x2(low, high, out, offset) {
  out[offset + 0] = ((low >>> 0 & 31) - 16) * 0.0625;
  out[offset + 1] = ((low >>> 5 & 31) - 16) * 0.0625;
  out[offset + 2] = ((low >>> 10 & 31) - 16) * 0.0625;
  out[offset + 3] = ((low >>> 15 & 31) - 16) * 0.0625;
  out[offset + 4] = ((low >>> 20 & 31) - 16) * 0.0625;
  out[offset + 5] = ((low >>> 25 & 31) - 16) * 0.0625;
  const lowBits = low >>> 30 & 3;
  const highBits = (high & 7) << 2;
  out[offset + 6] = ((lowBits | highBits) - 16) * 0.0625;
  out[offset + 7] = ((high >>> 3 & 31) - 16) * 0.0625;
  out[offset + 8] = ((high >>> 8 & 31) - 16) * 0.0625;
}
function packSint4ToUint8(v0, v1) {
  const l = clamp(v0 * 8 + 8.5 | 0, 0, 15);
  const h = clamp(v1 * 8 + 8.5 | 0, 0, 15);
  return h << 4 | l;
}
function unpackUint8ToSint4x2(value, out, offset) {
  out[offset] = (value & 15) * 0.125 - 1;
  out[offset + 1] = (value >> 4 & 15) * 0.125 - 1;
}
function toUnsignedChar(v) {
  return clamp(v * 128 + 128.5 | 0, 0, 255);
}
function fromUnsignedChar(v) {
  return (v - 128) / 128;
}
function toUnsignedCharV2(v) {
  return clamp(v * 255 + 0.5 | 0, 0, 255);
}
var LN_SCALE_MIN = -12;
var LN_SCALE_MAX = 9;
var LN_SCALE = 254 / (LN_SCALE_MAX - LN_SCALE_MIN);
var LN_SCALE_INV = 1 / LN_SCALE;
var SuperCompressedSplatData = class extends SplatData {
  constructor() {
    super(...arguments);
    this.counts = 0;
    this.shDegree = 0;
  }
  init(counts, shDegree) {
    this.counts = counts;
    this.shDegree = Math.min(shDegree, this.maxShDegree);
    const { w: width, h: height, d: depth } = computeTextureSize(counts, this.maxTextureSize);
    const pixelCounts = width * height * depth;
    const splatSampler = this.splatSampler = {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array(16 * pixelCounts)
    };
    this.splatUint8Buffer = splatSampler.source;
    this.splatUint16Buffer = new Uint16Array(splatSampler.source.buffer);
    const sh1Sampler = this.sh1Sampler = {
      width,
      height,
      depth,
      format: shDegree === 1 ? 0 /* RG_UINT */ : 1 /* RGBA_UINT */,
      source: new Uint8Array((shDegree >= 1 ? shDegree === 1 ? 8 : 16 : 0) * pixelCounts)
    };
    this.sh1Uint8Buffer = sh1Sampler.source;
    this.sh1Uint32Buffer = new Uint32Array(sh1Sampler.source.buffer);
    const sh2Sampler = this.sh2Sampler = {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array((shDegree >= 3 ? 16 : 0) * pixelCounts)
    };
    this.sh2Uint8Buffer = sh2Sampler.source;
  }
  set(i2, single) {
    const { splatUint16Buffer, splatUint8Buffer } = this;
    const i8 = i2 * 8;
    const i16 = i2 * 16;
    splatUint16Buffer[i8 + 0] = toHalf(single.x);
    splatUint16Buffer[i8 + 1] = toHalf(single.y);
    splatUint16Buffer[i8 + 2] = toHalf(single.z);
    splatUint8Buffer[i16 + 6] = clamp((Math.log(single.sx) - LN_SCALE_MIN) * LN_SCALE + 1.5 | 0, 0, 255);
    splatUint8Buffer[i16 + 7] = clamp((Math.log(single.sy) - LN_SCALE_MIN) * LN_SCALE + 1.5 | 0, 0, 255);
    splatUint8Buffer[i16 + 8] = clamp((Math.log(single.sz) - LN_SCALE_MIN) * LN_SCALE + 1.5 | 0, 0, 255);
    const oct = encodeQuatOct(single.qx, single.qy, single.qz, single.qw);
    splatUint8Buffer[i16 + 9] = toUnsignedChar(oct[0]);
    splatUint8Buffer[i16 + 10] = toUnsignedChar(oct[1]);
    splatUint8Buffer[i16 + 11] = toUnsignedCharV2(oct[2]);
    splatUint8Buffer[i16 + 12] = toUnsignedCharV2(single.r);
    splatUint8Buffer[i16 + 13] = toUnsignedCharV2(single.g);
    splatUint8Buffer[i16 + 14] = toUnsignedCharV2(single.b);
    splatUint8Buffer[i16 + 15] = toUnsignedCharV2(single.a);
  }
  setCenter(i2, x2, y, z) {
    const { splatUint16Buffer } = this;
    const offset = i2 * 8;
    splatUint16Buffer[offset + 0] = toHalf(x2);
    splatUint16Buffer[offset + 1] = toHalf(y);
    splatUint16Buffer[offset + 2] = toHalf(z);
  }
  setScale(i2, sx, sy, sz) {
    const { splatUint8Buffer } = this;
    const offset = i2 * 16;
    splatUint8Buffer[offset + 6] = clamp((Math.log(sx) - LN_SCALE_MIN) * LN_SCALE + 1.5 | 0, 0, 255);
    splatUint8Buffer[offset + 7] = clamp((Math.log(sy) - LN_SCALE_MIN) * LN_SCALE + 1.5 | 0, 0, 255);
    splatUint8Buffer[offset + 8] = clamp((Math.log(sz) - LN_SCALE_MIN) * LN_SCALE + 1.5 | 0, 0, 255);
  }
  setQuat(i2, qx, qy, qz, qw) {
    const { splatUint8Buffer } = this;
    const offset = i2 * 16;
    const oct = encodeQuatOct(qx, qy, qz, qw);
    splatUint8Buffer[offset + 9] = toUnsignedChar(oct[0]);
    splatUint8Buffer[offset + 10] = toUnsignedChar(oct[1]);
    splatUint8Buffer[offset + 11] = toUnsignedCharV2(oct[2]);
  }
  setColor(i2, r, g, b) {
    const { splatUint8Buffer } = this;
    const offset = i2 * 16;
    splatUint8Buffer[offset + 12] = toUnsignedCharV2(r);
    splatUint8Buffer[offset + 13] = toUnsignedCharV2(g);
    splatUint8Buffer[offset + 14] = toUnsignedCharV2(b);
  }
  setAlpha(i2, a) {
    const { splatUint8Buffer } = this;
    const offset = i2 * 16;
    splatUint8Buffer[offset + 15] = toUnsignedCharV2(a);
  }
  setShN(i2, shN) {
    const { shDegree, sh1Uint32Buffer, sh1Uint8Buffer, sh2Uint8Buffer } = this;
    if (shDegree >= 1) {
      const offset = (shDegree === 1 ? 2 : 4) * i2;
      packSint5x9ToUint32x2(shN, sh1Uint32Buffer, offset);
    }
    if (shDegree >= 2) {
      const offset = 16 * i2 + 8;
      sh1Uint8Buffer[offset + 0] = packSint4ToUint8(shN[9], shN[10]);
      sh1Uint8Buffer[offset + 1] = packSint4ToUint8(shN[11], shN[12]);
      sh1Uint8Buffer[offset + 2] = packSint4ToUint8(shN[13], shN[14]);
      sh1Uint8Buffer[offset + 3] = packSint4ToUint8(shN[15], shN[16]);
      sh1Uint8Buffer[offset + 4] = packSint4ToUint8(shN[17], shN[18]);
      sh1Uint8Buffer[offset + 5] = packSint4ToUint8(shN[19], shN[20]);
      sh1Uint8Buffer[offset + 6] = packSint4ToUint8(shN[21], shN[22]);
      sh1Uint8Buffer[offset + 7] = packSint4ToUint8(shN[23], 0);
    }
    if (shDegree >= 3) {
      const offset = 16 * i2;
      sh2Uint8Buffer[offset + 0] = packSint4ToUint8(shN[24], shN[25]);
      sh2Uint8Buffer[offset + 1] = packSint4ToUint8(shN[26], shN[27]);
      sh2Uint8Buffer[offset + 2] = packSint4ToUint8(shN[28], shN[29]);
      sh2Uint8Buffer[offset + 3] = packSint4ToUint8(shN[30], shN[31]);
      sh2Uint8Buffer[offset + 4] = packSint4ToUint8(shN[32], shN[33]);
      sh2Uint8Buffer[offset + 5] = packSint4ToUint8(shN[34], shN[35]);
      sh2Uint8Buffer[offset + 6] = packSint4ToUint8(shN[36], shN[37]);
      sh2Uint8Buffer[offset + 7] = packSint4ToUint8(shN[38], shN[39]);
      sh2Uint8Buffer[offset + 8] = packSint4ToUint8(shN[40], shN[41]);
      sh2Uint8Buffer[offset + 9] = packSint4ToUint8(shN[42], shN[43]);
      sh2Uint8Buffer[offset + 10] = packSint4ToUint8(shN[44], 0);
    }
  }
  get(i2, single) {
    const { splatUint16Buffer, splatUint8Buffer } = this;
    const i8 = i2 * 8;
    const i16 = i2 * 16;
    single.x = fromHalf(splatUint16Buffer[i8 + 0]);
    single.y = fromHalf(splatUint16Buffer[i8 + 1]);
    single.z = fromHalf(splatUint16Buffer[i8 + 2]);
    const uScaleX = splatUint8Buffer[i16 + 6];
    const uScaleY = splatUint8Buffer[i16 + 7];
    const uScaleZ = splatUint8Buffer[i16 + 8];
    single.sx = Math.exp(LN_SCALE_MIN + (uScaleX - 1) * LN_SCALE_INV);
    single.sy = Math.exp(LN_SCALE_MIN + (uScaleY - 1) * LN_SCALE_INV);
    single.sz = Math.exp(LN_SCALE_MIN + (uScaleZ - 1) * LN_SCALE_INV);
    const u = fromUnsignedChar(splatUint8Buffer[i16 + 9]);
    const v = fromUnsignedChar(splatUint8Buffer[i16 + 10]);
    const angle = splatUint8Buffer[i16 + 11] / 255;
    const quat = decodeQuatOct(u, v, angle);
    single.qx = quat[0];
    single.qy = quat[1];
    single.qz = quat[2];
    single.qw = quat[3];
    single.r = splatUint8Buffer[i16 + 12] / 255;
    single.g = splatUint8Buffer[i16 + 13] / 255;
    single.b = splatUint8Buffer[i16 + 14] / 255;
    single.a = splatUint8Buffer[i16 + 15] / 255;
  }
  getCenter(i2, single) {
    const { splatUint16Buffer } = this;
    const i8 = i2 * 8;
    single.x = fromHalf(splatUint16Buffer[i8 + 0]);
    single.y = fromHalf(splatUint16Buffer[i8 + 1]);
    single.z = fromHalf(splatUint16Buffer[i8 + 2]);
  }
  getScale(i2, single) {
    const { splatUint8Buffer } = this;
    const i16 = i2 * 16;
    const uScaleX = splatUint8Buffer[i16 + 6];
    const uScaleY = splatUint8Buffer[i16 + 7];
    const uScaleZ = splatUint8Buffer[i16 + 8];
    single.sx = Math.exp(LN_SCALE_MIN + (uScaleX - 1) * LN_SCALE_INV);
    single.sy = Math.exp(LN_SCALE_MIN + (uScaleY - 1) * LN_SCALE_INV);
    single.sz = Math.exp(LN_SCALE_MIN + (uScaleZ - 1) * LN_SCALE_INV);
  }
  getQuat(i2, single) {
    const { splatUint8Buffer } = this;
    const i16 = i2 * 16;
    const u = fromUnsignedChar(splatUint8Buffer[i16 + 9]);
    const v = fromUnsignedChar(splatUint8Buffer[i16 + 10]);
    const angle = splatUint8Buffer[i16 + 11] / 255;
    const quat = decodeQuatOct(u, v, angle);
    single.qx = quat[0];
    single.qy = quat[1];
    single.qz = quat[2];
    single.qw = quat[3];
  }
  getColor(i2, single) {
    const { splatUint8Buffer } = this;
    const i16 = i2 * 16;
    single.r = splatUint8Buffer[i16 + 12] / 255;
    single.g = splatUint8Buffer[i16 + 13] / 255;
    single.b = splatUint8Buffer[i16 + 14] / 255;
  }
  getAlpha(i2, single) {
    const { splatUint8Buffer } = this;
    const i16 = i2 * 16;
    single.a = splatUint8Buffer[i16 + 15] / 255;
  }
  getShN(i2, shN) {
    const { shDegree, sh1Uint32Buffer, sh1Uint8Buffer, sh2Uint8Buffer } = this;
    if (shDegree >= 1) {
      const offset = (shDegree === 1 ? 2 : 4) * i2;
      const low = sh1Uint32Buffer[offset];
      const high = sh1Uint32Buffer[offset + 1];
      unpackSint5x9FromUint32x2(low, high, shN, 0);
    }
    if (shDegree >= 2) {
      const offset = 16 * i2 + 8;
      unpackUint8ToSint4x2(sh1Uint8Buffer[offset + 0], shN, 9);
      unpackUint8ToSint4x2(sh1Uint8Buffer[offset + 1], shN, 11);
      unpackUint8ToSint4x2(sh1Uint8Buffer[offset + 2], shN, 13);
      unpackUint8ToSint4x2(sh1Uint8Buffer[offset + 3], shN, 15);
      unpackUint8ToSint4x2(sh1Uint8Buffer[offset + 4], shN, 17);
      unpackUint8ToSint4x2(sh1Uint8Buffer[offset + 5], shN, 19);
      unpackUint8ToSint4x2(sh1Uint8Buffer[offset + 6], shN, 21);
      shN[23] = (sh1Uint8Buffer[offset + 7] & 15) * 0.125 - 1;
    }
    if (shDegree >= 3) {
      const offset = 16 * i2;
      unpackUint8ToSint4x2(sh2Uint8Buffer[offset + 0], shN, 24);
      unpackUint8ToSint4x2(sh2Uint8Buffer[offset + 1], shN, 26);
      unpackUint8ToSint4x2(sh2Uint8Buffer[offset + 2], shN, 28);
      unpackUint8ToSint4x2(sh2Uint8Buffer[offset + 3], shN, 30);
      unpackUint8ToSint4x2(sh2Uint8Buffer[offset + 4], shN, 32);
      unpackUint8ToSint4x2(sh2Uint8Buffer[offset + 5], shN, 34);
      unpackUint8ToSint4x2(sh2Uint8Buffer[offset + 6], shN, 36);
      unpackUint8ToSint4x2(sh2Uint8Buffer[offset + 7], shN, 38);
      unpackUint8ToSint4x2(sh2Uint8Buffer[offset + 8], shN, 40);
      unpackUint8ToSint4x2(sh2Uint8Buffer[offset + 9], shN, 42);
      shN[44] = (sh2Uint8Buffer[offset + 10] & 15) * 0.125 - 1;
    }
  }
  fillCenters(centers) {
    const { counts, splatUint16Buffer } = this;
    for (let i2 = 0; i2 < counts; i2++) {
      const i3 = i2 * 3;
      const i8 = i2 * 8;
      centers[i3 + 0] = fromHalf(splatUint16Buffer[i8 + 0]);
      centers[i3 + 1] = fromHalf(splatUint16Buffer[i8 + 1]);
      centers[i3 + 2] = fromHalf(splatUint16Buffer[i8 + 2]);
    }
  }
  serialize() {
    return {
      counts: this.counts,
      shDegree: this.shDegree,
      samplers: [this.splatSampler, this.sh1Sampler, this.sh2Sampler]
    };
  }
  deserialize(data) {
    const { counts, shDegree, samplers } = data;
    this.counts = counts;
    this.shDegree = shDegree;
    const { w: width, h: height, d: depth } = computeTextureSize(counts, this.maxTextureSize);
    const pixelCounts = width * height * depth;
    const splatSampler = this.splatSampler = samplers[0] ?? {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array(16 * pixelCounts)
    };
    this.splatUint8Buffer = new Uint8Array(splatSampler.source.buffer);
    this.splatUint16Buffer = new Uint16Array(splatSampler.source.buffer);
    const sh1Sampler = this.sh1Sampler = samplers[1] ?? {
      width,
      height,
      depth,
      format: shDegree === 1 ? 0 /* RG_UINT */ : 1 /* RGBA_UINT */,
      source: new Uint8Array((shDegree >= 1 ? shDegree === 1 ? 8 : 16 : 0) * pixelCounts)
    };
    this.sh1Uint8Buffer = sh1Sampler.source;
    this.sh1Uint32Buffer = new Uint32Array(sh1Sampler.source.buffer);
    const sh2Sampler = this.sh2Sampler = samplers[2] ?? {
      width,
      height,
      depth,
      format: 1 /* RGBA_UINT */,
      source: new Uint8Array((shDegree >= 3 ? 16 : 0) * pixelCounts)
    };
    this.sh2Uint8Buffer = sh2Sampler.source;
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/splat/SogSplatData.ts
var SogSplatData = class extends SplatData {
  constructor() {
    super(...arguments);
    this.counts = 0;
    this.shDegree = 0;
  }
  init(_counts, _shDegree) {
    throw new Error("Method not implemented.");
  }
  load(meta, meansL, meansU, quats, scales, colors, shNLabels, shNCentroids) {
    this.meta = meta;
    this.meansL = meansL;
    this.meansU = meansU;
    this.quats = quats;
    this.scales = scales;
    this.colors = colors;
    this.shNLabels = shNLabels;
    this.shNCentroids = shNCentroids;
  }
  set(_i, _single) {
    throw new Error("Method not implemented.");
  }
  setCenter(_i, _x, _y, _z) {
    throw new Error("Method not implemented.");
  }
  setScale(_i, _sx, _sy, _sz) {
    throw new Error("Method not implemented.");
  }
  setQuat(_i, _qx, _qy, _qz, _qw) {
    throw new Error("Method not implemented.");
  }
  setColor(_i, _r, _g, _b2) {
    throw new Error("Method not implemented.");
  }
  setAlpha(_i, _a2) {
    throw new Error("Method not implemented.");
  }
  setShN(_i, _shN) {
    throw new Error("Method not implemented.");
  }
  get(_i, _single) {
    throw new Error("Method not implemented.");
  }
  getCenter(_i, _single) {
    throw new Error("Method not implemented.");
  }
  getScale(_i, _single) {
    throw new Error("Method not implemented.");
  }
  getQuat(_i, _single) {
    throw new Error("Method not implemented.");
  }
  getColor(_i, _single) {
    throw new Error("Method not implemented.");
  }
  getAlpha(_i, _single) {
    throw new Error("Method not implemented.");
  }
  getShN(_i, _shN) {
    throw new Error("Method not implemented.");
  }
  fillCenters(_centers) {
    throw new Error("Method not implemented.");
  }
  serialize() {
    return {
      counts: this.meta.counts,
      shDegree: this.meta.shDegree,
      samplers: [
        this.meansL,
        this.meansU,
        this.quats,
        this.scales,
        this.colors,
        this.shNLabels,
        this.shNCentroids
      ].filter((v) => !!v).map((v) => ({
        width: 1,
        height: 1,
        depth: 1,
        format: 1 /* RGBA_UINT */,
        source: v
      })),
      extras: [this.meta]
    };
  }
  deserialize(data) {
    const { samplers, extras = [] } = data;
    this.meta = extras[0];
    this.meansL = samplers[0].source;
    this.meansU = samplers[1].source;
    this.quats = samplers[2].source;
    this.scales = samplers[3].source;
    this.colors = samplers[4].source;
    if (samplers[5]) {
      this.shNLabels = samplers[5].source;
    }
    if (samplers[6]) {
      this.shNCentroids = samplers[6].source;
    }
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/file/esz.ts
var ESZ_MAGIC = 2500660;
var ESZ_VERSION = 2;
var HIGH_PRECISION_STRIDE = 16;
var TEMP_ROT2 = new Array(4);
var PERM_TABLE2 = [
  // original quat idx ---> actual storage idx
  [0, 1, 2, 3],
  [3, 1, 2, 0],
  [1, 3, 2, 0],
  [1, 2, 3, 0]
];
var COLOR_SCALE2 = SH_C0 / 0.15;
var SCALE_LUT2 = new Float32Array(256);
var COLOR_LUT2 = new Float32Array(256);
for (let i2 = 0; i2 < 256; i2++) {
  SCALE_LUT2[i2] = Math.exp(i2 / 16 - 10);
  COLOR_LUT2[i2] = (i2 / 255 - 0.5) * COLOR_SCALE2 + 0.5;
}
function logTransform(value) {
  return Math.sign(value) * Math.log(Math.abs(value) + 1);
}
var EszFile = class {
  async readLowPrecisionLayout(data, blockOffset, meta, cursor) {
    const {
      counts,
      shDegree,
      box: {
        min: [boxMinX, boxMinY, boxMinZ],
        max: [boxMaxX, boxMaxY, boxMaxZ]
      }
    } = meta;
    const readImage = async () => {
      const size = await cursor.readUint32();
      const buffer2 = await cursor.readExact(size);
      return (await decodeImage(buffer2)).data;
    };
    {
      const minX = logTransform(boxMinX);
      const minY = logTransform(boxMinY);
      const minZ = logTransform(boxMinZ);
      const maxX = logTransform(boxMaxX);
      const maxY = logTransform(boxMaxY);
      const maxZ = logTransform(boxMaxZ);
      const rangeX = (maxX - minX) / 65535;
      const rangeY = (maxY - minY) / 65535;
      const rangeZ = (maxZ - minZ) / 65535;
      const meansL = await readImage();
      const meansU = await readImage();
      for (let i2 = 0; i2 < counts; i2++) {
        const target = blockOffset + i2;
        const o = i2 * 4;
        const x2 = minX + rangeX * (meansL[o + 0] + (meansU[o + 0] << 8));
        const y = minY + rangeY * (meansL[o + 1] + (meansU[o + 1] << 8));
        const z = minZ + rangeZ * (meansL[o + 2] + (meansU[o + 2] << 8));
        data.setCenter(
          target,
          Math.sign(x2) * (Math.exp(Math.abs(x2)) - 1),
          Math.sign(y) * (Math.exp(Math.abs(y)) - 1),
          Math.sign(z) * (Math.exp(Math.abs(z)) - 1)
        );
      }
    }
    {
      const scales = await readImage();
      for (let i2 = 0; i2 < counts; i2++) {
        const o = i2 * 4;
        data.setScale(
          blockOffset + i2,
          SCALE_LUT2[scales[o + 0]],
          SCALE_LUT2[scales[o + 1]],
          SCALE_LUT2[scales[o + 2]]
        );
      }
    }
    {
      const quats = await readImage();
      for (let i2 = 0; i2 < counts; i2++) {
        const o = i2 * 4;
        TEMP_ROT2[0] = (quats[o + 0] / 255 - 0.5) * Math.SQRT2;
        TEMP_ROT2[1] = (quats[o + 1] / 255 - 0.5) * Math.SQRT2;
        TEMP_ROT2[2] = (quats[o + 2] / 255 - 0.5) * Math.SQRT2;
        TEMP_ROT2[3] = Math.sqrt(
          Math.max(
            0,
            1 - TEMP_ROT2[0] * TEMP_ROT2[0] - TEMP_ROT2[1] * TEMP_ROT2[1] - TEMP_ROT2[2] * TEMP_ROT2[2]
          )
        );
        const perm = PERM_TABLE2[quats[o + 3] - 252];
        data.setQuat(
          blockOffset + i2,
          TEMP_ROT2[perm[0]],
          TEMP_ROT2[perm[1]],
          TEMP_ROT2[perm[2]],
          TEMP_ROT2[perm[3]]
        );
      }
    }
    {
      const colors = await readImage();
      for (let i2 = 0; i2 < counts; i2++) {
        const target = blockOffset + i2;
        const o = i2 * 4;
        data.setColor(target, COLOR_LUT2[colors[o + 0]], COLOR_LUT2[colors[o + 1]], COLOR_LUT2[colors[o + 2]]);
        data.setAlpha(target, colors[o + 3] / 255);
      }
    }
    if (shDegree > 0) {
      const shCounts = SH_MAPS[shDegree];
      const shCoeffs = shCounts / 3;
      const shN = new Array(shCounts).fill(0);
      const buffer2 = await readImage();
      for (let i2 = 0; i2 < counts; i2++) {
        const o = i2 * shCoeffs * 4;
        for (let j = 0; j < shCoeffs; j++) {
          shN[j * 3 + 0] = (buffer2[o + j * 4 + 0] - 128) / 128;
          shN[j * 3 + 1] = (buffer2[o + j * 4 + 1] - 128) / 128;
          shN[j * 3 + 2] = (buffer2[o + j * 4 + 2] - 128) / 128;
        }
        data.setShN(blockOffset + i2, shN);
      }
    }
  }
  async readHighPrecisionLayout(data, blockOffset, meta, cursor) {
    const { counts, shDegree } = meta;
    const shGroups = SH_MAPS[shDegree] / 3;
    const segmentCount = 2 + Math.ceil(shGroups / 4);
    const expectedLength = counts * HIGH_PRECISION_STRIDE;
    if (data instanceof CompressedSplatData) {
      const samplers = data.serialize().samplers;
      for (let segmentIndex = 0; segmentIndex < segmentCount; segmentIndex++) {
        const length = await cursor.readUint32(true);
        if (length !== expectedLength) {
          throw new Error(`Invalid ESZ high segment size: expected ${expectedLength}, got ${length}`);
        }
        const target = samplers[segmentIndex].source;
        if (target.byteLength) {
          await cursor.readInto(target, blockOffset * HIGH_PRECISION_STRIDE, length);
        } else {
          await cursor.skip(length);
        }
      }
      return;
    }
    const decoder = new StreamChunkDecoder(cursor);
    await this.readHighPrecisionSegment(cursor, decoder, counts, (view, start, batchCounts) => {
      for (let i2 = 0; i2 < batchCounts; i2++) {
        const target = blockOffset + start + i2;
        const o = i2 * HIGH_PRECISION_STRIDE;
        data.setCenter(
          target,
          view.getFloat32(o + 0, true),
          view.getFloat32(o + 4, true),
          view.getFloat32(o + 8, true)
        );
        data.setAlpha(target, fromHalf(view.getUint16(o + 12, true)));
      }
    });
    await this.readHighPrecisionSegment(cursor, decoder, counts, (view, start, batchCounts) => {
      for (let i2 = 0; i2 < batchCounts; i2++) {
        const target = blockOffset + start + i2;
        const o = i2 * HIGH_PRECISION_STRIDE;
        data.setColor(
          target,
          fromHalf(view.getUint16(o + 0, true)),
          fromHalf(view.getUint16(o + 2, true)),
          fromHalf(view.getUint16(o + 4, true))
        );
        data.setScale(
          target,
          Math.exp(fromHalf(view.getUint16(o + 6, true))),
          Math.exp(fromHalf(view.getUint16(o + 8, true))),
          Math.exp(fromHalf(view.getUint16(o + 10, true)))
        );
        const packedQuat = view.getUint32(o + 12, true);
        const quat = decodeQuatOct(
          (packedQuat & 1023) / 1023 * 2 - 1,
          (packedQuat >>> 10 & 1023) / 1023 * 2 - 1,
          (packedQuat >>> 20 & 4095) / 4095
        );
        data.setQuat(target, quat[0], quat[1], quat[2], quat[3]);
      }
    });
    const shN = new Array(SH_MAPS[shDegree]).fill(0);
    for (let groupOffset = 0; groupOffset < shGroups; groupOffset += 4) {
      const groupCounts = Math.min(4, shGroups - groupOffset);
      await this.readHighPrecisionSegment(cursor, decoder, counts, (view, start, batchCounts) => {
        for (let i2 = 0; i2 < batchCounts; i2++) {
          const target = blockOffset + start + i2;
          if (groupOffset > 0) {
            data.getShN(target, shN);
          }
          const o = i2 * HIGH_PRECISION_STRIDE;
          for (let j = 0; j < groupCounts; j++) {
            decode111011s(view.getUint32(o + j * 4, true), shN, (groupOffset + j) * 3);
          }
          data.setShN(target, shN);
        }
      });
    }
  }
  async readHighPrecisionSegment(cursor, decoder, counts, decode) {
    const byteLength = await cursor.readUint32(true);
    const expectedByteLength = counts * HIGH_PRECISION_STRIDE;
    if (byteLength !== expectedByteLength) {
      throw new Error(`Invalid ESZ high segment size: expected ${expectedByteLength}, got ${byteLength}`);
    }
    await decoder.decode([
      {
        init: () => [counts, HIGH_PRECISION_STRIDE],
        decode: (start, batchCounts, buffer2) => decode(new DataView(buffer2.buffer, buffer2.byteOffset, buffer2.byteLength), start, batchCounts)
      }
    ]);
  }
  async read(stream, _contentLength, data) {
    const decompressor = await createZstdDecompressor(128 * 1024);
    const decompressed = stream.pipeThrough(
      new TransformStream({
        transform(chunk, controller) {
          for (const output of decompressor.feed(chunk)) {
            controller.enqueue(output);
          }
        },
        flush(controller) {
          for (const output of decompressor.finish()) {
            controller.enqueue(output);
          }
        }
      })
    );
    const cursor = new ByteStreamCursor(decompressed);
    try {
      if (await cursor.readUint32(true) !== ESZ_MAGIC) {
        throw new Error("Invalid ESZ file: missing EGS magic");
      }
      const metaLength = await cursor.readUint32(true);
      const metaBuffer = await cursor.readExact(metaLength);
      const meta = JSON.parse(new TextDecoder().decode(metaBuffer));
      if (meta.version !== ESZ_VERSION) {
        throw new Error(`Unsupported ESZ version: ${meta.version}`);
      }
      if (meta.layout !== "low" && meta.layout !== "high") {
        throw new Error(`Unsupported ESZ layout: ${meta.layout}`);
      }
      const offset = await data.initBlock(meta.counts, meta.shDegree);
      if (meta.layout === "high") {
        await this.readHighPrecisionLayout(data, offset, meta, cursor);
      } else {
        await this.readLowPrecisionLayout(data, offset, meta, cursor);
      }
      data.finishBlock();
    } finally {
      await cursor.cancel().catch(() => {
      });
      decompressor.free();
    }
  }
  async write(_stream, _data) {
    throw new Error("Method not implemented.");
  }
};

// ../../external/egs-core/packages/loaders/splat-loader/helper.ts
function createSplatFile(type) {
  switch (type) {
    case 0 /* PLY */: {
      return new PlyFile();
    }
    case 1 /* SPZ */: {
      return new SpzFile();
    }
    case 3 /* KSPLAT */: {
      return new KsplatFile();
    }
    case 2 /* SPLAT */: {
      return new SplatFile();
    }
    case 4 /* SOG */: {
      return new SogFile();
    }
    case 5 /* LCC */: {
      return new LccFile();
    }
    case 6 /* ESZ */: {
      return new EszFile();
    }
  }
}
function createSplatData(type, maxShDegree, maxTextureSize) {
  switch (type) {
    case 0 /* Raw */: {
      return new RawSplatData(maxShDegree, maxTextureSize);
    }
    case 1 /* Compressed */: {
      return new CompressedSplatData(maxShDegree, maxTextureSize);
    }
    case 2 /* SuperCompressed */: {
      return new SuperCompressedSplatData(maxShDegree, maxTextureSize);
    }
    case 3 /* Sog */: {
      return new SogSplatData(maxShDegree, maxTextureSize);
    }
  }
}

// ../../external/egs-core/packages/loaders/splat-loader/worker.ts
var writer;
self.onmessage = async (event) => {
  try {
    const message = event.data;
    switch (message.taskType) {
      case "ParseSplat" /* ParseSplat */: {
        const {
          type,
          packType,
          stream,
          contentLength,
          extras: { maxShDegree, maxTextureSize }
        } = event.data.payload;
        const splatData = createSplatData(packType, maxShDegree, maxTextureSize);
        const file = createSplatFile(type);
        let reader = stream;
        if (!reader) {
          const stream2 = new TransformStream();
          writer = stream2.writable.getWriter();
          reader = stream2.readable;
        }
        if (packType === 3 /* Sog */) {
          await file.load(reader, contentLength);
          const { meta, refs } = file;
          let splatMeta;
          if (meta.version === void 0) {
            const m = meta;
            splatMeta = {
              version: 1,
              counts: m.means.shape[0],
              shDegree: NUM_F_REST_TO_SH_DEGREE[m.shN?.shape?.[1] ?? 0],
              means: {
                mins: [m.means.mins[0], m.means.mins[1], m.means.mins[2]],
                maxs: [m.means.maxs[0], m.means.maxs[1], m.means.maxs[2]]
              },
              scales: {
                mins: [m.scales.mins[0], m.scales.mins[1], m.scales.mins[2]],
                maxs: [m.scales.maxs[0], m.scales.maxs[1], m.scales.maxs[2]]
              },
              sh0: {
                mins: [m.sh0.mins[0], m.sh0.mins[1], m.sh0.mins[2], m.sh0.mins[3]],
                maxs: [m.sh0.maxs[0], m.sh0.maxs[1], m.sh0.maxs[2], m.sh0.maxs[3]]
              },
              shN: m.shN ? {
                mins: m.shN.mins,
                maxs: m.shN.maxs
              } : void 0
            };
          } else {
            const m = meta;
            splatMeta = {
              version: 2,
              counts: m.count,
              shDegree: m.shN?.bands ?? 0,
              means: {
                mins: [m.means.mins[0], m.means.mins[1], m.means.mins[2]],
                maxs: [m.means.maxs[0], m.means.maxs[1], m.means.maxs[2]]
              },
              scales: {
                codebook: m.scales.codebook
              },
              sh0: {
                codebook: m.sh0.codebook
              },
              shN: m.shN ? {
                codebook: m.shN.codebook
              } : void 0
            };
          }
          splatData.load(
            splatMeta,
            refs[meta.means.files[0]],
            refs[meta.means.files[1]],
            refs[meta.scales.files[0]],
            refs[meta.quats.files[0]],
            refs[meta.sh0.files[0]],
            ...meta.shN ? [refs[meta.shN.files[0]], refs[meta.shN.files[1]]] : []
          );
        } else {
          await file.read(reader, contentLength, splatData);
        }
        writer = void 0;
        const splats = splatData.serialize();
        const payload = { status: 0 /* Success */, payload: splats };
        postMessage(
          payload,
          splats.samplers.map((v) => v.source.buffer)
        );
        return;
      }
      case "PostStreamChunk" /* PostStreamChunk */: {
        const { chunk } = event.data.payload;
        if (!writer) {
          return;
        }
        if (chunk) {
          writer.write(chunk);
        } else {
          writer.close();
        }
        return;
      }
      default: {
        const check = message.taskType;
        throw new Error(`Unsupported task type: ${check}.`);
      }
    }
  } catch (e) {
    console.error(e);
    postMessage({ status: 1 /* Fail */, payload: e.toString() });
  }
};
//# sourceMappingURL=splat-worker.js.map
