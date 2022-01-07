const sum = require("./sum")

// Difference toBE and toEqual
describe ("example tests", () => {
    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1,2);
        expect(result).toBe(3);
    })

    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({})
    })
})

// Matchers for boolean
describe("truthy or falsey", () => {
    it("null", () => {
        const n = null;
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()
        // expect(n).toBeNull()
        // expect(n).not.toBeUndefined()
    })
})

// Matchers for numbers
describe("numbers", () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeLessThan(7)
        expect(value).toBeGreaterThanOrEqual(4)
    })
    it("adding floats", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.29999999)
    })
})

// Matchers for string
describe("string", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    })
})

// Matchers for arrays
describe("arrays", () => {
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'papers towels', 'milk'
    ]
    expect(shoppingLists).toContain('milk')
})

function compileAndroidCode() {
    throw new Error('You are using the wrong JDK')
}

describe("exceptions", () => {
    it("compiling android goes as expected", () => {
        expect(() => compileAndroidCode()).toThrow(Error)
    })
})