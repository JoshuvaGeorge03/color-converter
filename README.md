# color-converter

color-converter, it is used to obtain color value with `.ts support`;

### Typescript Color Converter

```bash
npm install  typescript-color-converter --save
```

# Usage

index.ts

```ts
import {RGBtoHEX, HEXtoRGB, colors} from 'typescript-color-converter';

function convertHexToRgb(hexvalue: string) {
    const convertedRGB = HexToRGB(rgbvalue);
    return convertedRGB;
}

function convertRgbToHex(rgbvalue) {
    const convertedHex = RGBtoHEX(rgbvalue);
}

colors.red //[255,0,0]
```