const {strictEqual, notStrictEqual} = require("assert");
const {sparseZip} = require("../src/index");

describe("Sparse Zip", function () {
    describe("Arrays", function () {
        it("should handle a normal zip operation", function () {
            const a = Array(5).fill(1);
            const b = Array(5).fill(1);

            strictEqual(
                sparseZip(a, b, () => true)
                    .reduce((sum, [a, b]) => sum + a + b, 0),
                10
            )
        });
        it("should handle a single dependency predicate", function () {
            const a = [1, 2, 3, null, null, 4, 5];
            const b = [1, 2, 3, 4, 5];

            strictEqual(
                sparseZip(a, b, (a) => a)
                    .reduce((sum, [a, b]) => {
                        if (a !== null) {
                            notStrictEqual(b, null);
                            return sum + a + b;
                        } else {
                            strictEqual(b, null);
                            return sum;
                        }
                    }, 0),
                30
            )
        });
    });
});

