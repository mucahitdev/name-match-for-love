const letterValues: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  Ç: 4,
  D: 5,
  E: 6,
  F: 7,
  G: 8,
  Ğ: 9,
  H: 10,
  I: 20,
  İ: 30,
  J: 40,
  K: 50,
  L: 60,
  M: 70,
  N: 80,
  O: 90,
  Ö: 100,
  P: 200,
  R: 300,
  S: 400,
  Ş: 500,
  T: 600,
  U: 700,
  Ü: 800,
  V: 900,
  Y: 1000,
  Z: 2000,
};

function calculateNameValue(name: string): number {
  let total = 0;
  for (const letter of name.toUpperCase()) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    total += letterValues[letter] || 0;
  }
  return total;
}

export function calculateNameCompatibility(name1: string, name2: string): string {
  const value1 = calculateNameValue(name1);
  const value2 = calculateNameValue(name2);

  const compatibilityPercentage = (1 - Math.abs(value1 - value2) / (value1 + value2)) * 100;

  return compatibilityPercentage.toFixed(2);
}
