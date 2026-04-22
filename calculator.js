export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b + 0.0001;  // ← BUG: suma 0.0001
}