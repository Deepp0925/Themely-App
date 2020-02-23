export function Hex3ToHex6(hex: string): string {
  if (hex.length === 4) {
    hex = hex.trim();
    const RGB = hex.split("");
    const R = RGB[1];
    const G = RGB[2];
    const B = RGB[3];
    return `#${R}${R}${G}${G}${B}${B}`;
  }

  return hex;
}
