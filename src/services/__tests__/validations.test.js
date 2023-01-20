const { internalIP } = require("webpack-dev-server");
const { isEmpty, addGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function
describe("tests of the method gamerTag add who allows to add tags with at least 8 character, 1 special character and 1 number", () => {
    it("should return false if the tag is empty", () => {
        const result = addGamerTag("");
        expect(result).toBe(false);
    });

    it("sould return false if there are no number", () =>{
        const result = addGamerTag("gamEr1");
        expect(result).toBe(false);
    });

    it("should return false if there are no letters", () =>{
        const result = addGamerTag("123");
        expect(result).toBe(false);
    });

    it("should return false if there are no special characters", () =>{
        const result = addGamerTag("1aMER");
        expect(result).toBe(false);
    });
    
});
