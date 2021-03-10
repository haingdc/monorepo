export type AnyType = Record<string, any>;

function getRandomInt(max: number, min?: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

function clamp(val: number, min: number, max: number) : number {
  return Math.max(Math.min(val, max), min);
}

function getRandomFloat(min: number, max: number) : number {
  return Number( (Math.random() * (max - min) + min).toFixed(2) );
}

export { getRandomInt, clamp, getRandomFloat };