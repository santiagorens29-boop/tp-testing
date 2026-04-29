import { add,subtract } from './calculator.js';

test('Alfa: add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBeCloseTo(3); 
});
// ==========================================
// PRUEBAS ESCRITAS POR GAMMA para subtract()
// ==========================================

test('Gamma: subtract(5, 2) should return 3', () => {
expect(subtract(5, 2)).toBeCloseTo(3); // Esto va a FALLAR (da 3.0001)
});

test('Gamma: subtract(10, 5) should return 5', () => {
expect(subtract(10, 5)).toBeCloseTo(5);
});

test('Gamma: subtract(0, 5) should return -5', () => {
expect(subtract(0, 5)).toBeCloseTo(-5);
});

test('Gamma: subtract(-5, -3) should return -2', () => {
expect(subtract(-5, -3)).toBeCloseTo(-2);
});

test('Gamma: subtract(1.5, 0.5) should return 1.0', () => {
expect(subtract(1.5, 0.5)).toBeCloseTo(1.0);
});