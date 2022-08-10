let hello: string = 'Hello, world!';
console.log(hello);

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.86, 60));