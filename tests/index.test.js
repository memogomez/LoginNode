const print = require("../src/index");

    describe("index", () => {
        test("should print string message if they receive the message", () => {
            const expected = "Hola soy un test";
            const result = print();
            expect(expected).toBe(result);
        });
    });