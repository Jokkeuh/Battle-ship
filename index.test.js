
const Ship = require("./index");
const Gameboard = require("./index");






test("ship is a proper object factory", () => {
    const y = new Ship(5)
    const x = new Ship(5)
    expect(x).toEqual(y)
});


test("generate empty field", () => {
    let board = Array(10).fill("").map(x => Array(10).fill(""))

    const Board1 = new Gameboard(board, 5, 10)
    expect(Board1.board).toEqual([
        ['', '', '','', '', '','', '', '',''],
        ['', '', '','', '', '','', '', '',''],
        ['', '', '', '', '', '','', '', '',''],
        ['', '', '','', '', '','', '', '',''],
        ['', '', '','', '', '','', '', '',''],
        ['', '', '','', '', '','', '', '',''],
        ['', '', '','', '', '','', '', '',''],
        ['', '', '','', '', '','', '', '',''],
        ['', '', '','', '', '','', '', '',''],
        ['', '', '','', '', '','', '', '','']
      ])
})

test("choose coordinates and hit", () => {
    let x = new Ship(5)
    expect(new Ship(5).hit("A/15").then()).toBe()
})


test("ship took damage", () => {
    let y = new Ship(5);
    expect(y.gotHit().then()).toBe(4)
})

test("ship got sunk function", () => {
    let y = new Ship(5);
    expect(y.isSunk()).toBe("not ded")
})







/*test("board proper measure")
test("hit got marked on board")
test("gameboards reveiceAttack working")
test("keep track of missed attacks")

test("all ships have been sunk")*/
