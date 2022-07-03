const Ship = require("./index");


let ships = []
const generateShips =(ships) => {
    const carrier = new Ship(5)
    const battleShip = new Ship(4)
    const destroyer = new Ship(3)
    const submarine = new Ship(3)
    const patrol = new Ship(2)
    return ships[carrier, battleShip, destroyer, submarine, patrol]
}



module.exports = generateShips(ships);

// carrier size 5
// battleShip size 4
// Destroyer size 3
// Submarine size 3
// PatrolBoat size 2


