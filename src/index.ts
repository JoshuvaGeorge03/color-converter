export function RGBtoHEX(rgb: string) {
  const rgbRegex = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i;
  if (!rgbRegex.test(rgb)) {
    throw new Error('Not a valid RGB value');
  } else {
    const rgbArr: any = rgb.match(/\d/g);
    const hexArr = rgbArr.map((r: string) => {
      const hexString: any = parseInt(r, 10).toString(16);
      return hexString.padStart(2, '0');
    });

    return hexArr.join('').toUpperCase();
  }
}

export function HEXtoRGB(hex: string) {
  let modifyHex: string = hex;
  const rgbArr = [];
  const hexRegex = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
  if (!hexRegex.test(hex)) {
    throw new Error('Not a valid hex value');
  } else {
    if (hex.length === 4) {
      modifyHex = hex.replace('#', '');
    }
    if (hex.length === 3) {
      modifyHex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    rgbArr.push(parseInt(modifyHex.slice(0, 2), 16));
    rgbArr.push(parseInt(modifyHex.slice(2, 4), 16));
    rgbArr.push(parseInt(modifyHex.slice(4, 6), 16));

    return `rgb("${rgbArr.toString()}")`;
  }
}
