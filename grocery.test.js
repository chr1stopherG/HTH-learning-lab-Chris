const {checkQuantity} = require('./grocery');

test('Low stock', () => {
    expect(checkQuantity(1, 3)).toBe(1);
})
test('Empty Cart', () => {
    expect(checkQuantity(70, 0)).toBe(0);
})
test('Stock = Cart', () => {
    expect(checkQuantity(12, 12)).toBe(12);
})