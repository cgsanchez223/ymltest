const { add, average, multiply, subtract } = require("./operations");

describe("#add", function() {
    it("adds numbers", function() {
        expect(add(2, 2)).toEqual(4);
    });
    it("handles empty inputs", function() {
        expect(add()).toEqual(0);
    });
});

describe("#subtract", function() {
    it("subtracts numbers", function() {
        expect(subtract(2, 2)).toEqual(0);
    });
    it("handles empty inputs", function() {
        expect(subtract()).toEqual(0);
    });
});

describe("multiply", function() {
    it("multiplies two numbers", function() {
        expect(multiply(2, 3)).toEqual(6);
        expect(multiply(-4, 5)).toEqual(-20);
    });
});

describe("#average", function() {
    it("calculates the average", function() {
        expect(average(2, 2)).toEqual(2);
        expect(average(2, -2)).toEqual(0);
    });
    it("handles empty inputs", function() {
        expect(average()).toEqual(0);
    });
});