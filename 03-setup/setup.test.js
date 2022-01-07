let animals = ['elephant', 'zebra', 'bear', 'tiger']

beforeEach(() => {
    console.log("before each")
    animals = ['elephant', 'zebra', 'bear', 'tiger']
})
// beforeAll / afterAll also possible

afterEach(() => {
    console.log('after each')
})

describe('animals array', () => {
    it('should add animal to end of array', () => {
        animals.push("aligator");
        expect(animals[animals.length-1]).toBe('aligator')
    })
    it('should add animal to beginning of array', () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe('monkey')
    })
    it('should have initial length of 4', () => {
        expect(animals.length).toBe(4)
    })
})