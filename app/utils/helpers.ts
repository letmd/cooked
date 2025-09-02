// common
export function minMax(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function cloneObject(object: object): object {
  return JSON.parse(JSON.stringify(object));
}

export function isObjectsSame(firstObject: object, secondObject: object): boolean {
  return JSON.stringify(firstObject) === JSON.stringify(secondObject);
}

export function generateArray(length: number, fillValue = undefined) {
  return Array.from({ length }).fill(fillValue);
}

// preload fonts
type FontPreloadItem = {
  rel: 'preload';
  href: string;
  as: 'font';
  type: 'font/woff2';
  crossorigin: boolean;
};

export function getFontPreloadList(
  { path, weights }: { path: string; weights: string[] },
  baseUrl = '/'
): FontPreloadItem[] {
  return weights.map((weight) => ({
    rel: 'preload',
    href: `${baseUrl}fonts/${path}${weight}.woff2`,
    as: 'font',
    type: 'font/woff2',
    crossorigin: true,
  }));
}

export function getFontsPreloadList(
  fontsList: { path: string; weights: string[] }[]
): FontPreloadItem[] {
  return fontsList.flatMap(({ path, weights }) => getFontPreloadList({ path, weights }));
}
