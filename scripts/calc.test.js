import { Calculator } from "./calc.js"

//Declare the 'calc' variable in the global scope
let calc;

//Before any test runs initiate our 'calc' object
//so it can be referenced in all the tests
beforeAll(() => {
  calc = new Calculator();
});

//Clean up after all our tests have run
afterAll(() => {
  calc = null;
});

test("can add 1 + 2?", () => {
    let calc = new Calculator();
    expect(calc.add(1,2)).toBe(3);
});

test("can't add nulls", () => {
  let calc = new Calculator();
  expect(calc.add(null, null)).toBe(0);
})

test("can subtract 10 from 20?", () => {
    let calc = new Calculator();
  expect(calc.subtract(20,10)).toBe(10);
});

test("can multiply 5 by 2?", () => {
    let calc = new Calculator();
  expect(calc.multiply(5,2)).toBe(10);
});

test("can divide 20 by 2", () => {
    let calc = new Calculator();
  expect(calc.divide(20,2)).toBe(10);
});


