const sut = require("./index")

it("Should return 'Hello World'", ()=>{
    const actual = sut.hello()
    const expected = "Hello World"
    expect(actual).toBe(expected)
})