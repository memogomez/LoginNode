const print = require("../src/index");

    describe("index", () => {
        test("should print message server port", () => {
            const expected = "server on port 3000";
            const result = listen();
            expect(expected).toBe(result);
        });
    });