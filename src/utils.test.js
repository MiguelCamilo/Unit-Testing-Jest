import { sayHello } from "./utils.js";

test("Say Hello Miguel", () => {
    expect(sayHello("Miguel")).toBe("Hello Miguel")
})

test("Say Hello 44", () => {
    expect(sayHello(44)).toBe("Hello 44")
})

test("Say Hello __", () => {
    expect(sayHello()).toBe("Hello undefined")
})