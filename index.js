
let board = Array(10).fill("0").map(x => Array(10).fill("0"));
let ships = [];
const generateShips =(ships) => {
    const carrier = new Ship(5)
    const battleShip = new Ship(4)
    const destroyer = new Ship(3)
    const submarine = new Ship(3)
    const patrol = new Ship(2)

    ships.push(carrier)
    ships.push(battleShip)
    ships.push(destroyer)
    ships.push(submarine)
    ships.push(patrol)

    return ships

}
const resetShips = (ships) =>{
    ships.length = 0
}
class Ship {
            constructor(length){
                this.length = length;
                this.health = length;
                
            }
            hit(coordinates){
                let coor = coordinates.split("/")
                let x  = coor[0]
                let y = coor[1]
                hits.push(coor)
                return {x, y, hits}   
            }
            gotHit(){
                if(this.health < 1){
                    return this.isSunk()
                }
                this.health = this.health - 1 
                return this.health
            } 
            isSunk(){
                if(this.health === 0){
                    return "is Sunk Rip"
                }else{
                    return "not ded"
                }     
            }
            getPosition(coordinates, axis){
                let position = Array(this.length).fill("SHIP")
                let coor = coordinates.split("/")
                let y  = coor[0]
                let x = coor[1]


                if(axis === "ver"){
                    position.forEach(coordinate => {
                        board[y][x] = coordinate
                        y++
                    });
                }
                
                if(axis === "hor")
                position.forEach(coordinate => {
                    board[y][x] = coordinate
                    x++
                });

                return {position,board}
            }
            
}


let hits = []


//coordinates[0] = x axis
//coordinates[1] = y axis



  




console.log(board)
class Gameboard {
        constructor(board, ships){
                    this.board = board;
                    this.ships = ships
                    
                }
        
        receiveAttack(x, y){
            let status = "miss";

            if(board[x][y] == "hit" ||
               board[x][y] == "miss"){
                console.log(`already hit at ${x},${y}` )
                return;
            }
            if(board[x][y] == "0"){
                board[x][y] == "miss"
            }else{
                status = "hit"
            }
            if(board[x][y] == "SHIP"){
                ships
            }
            board[x][y] = status
        
            return board
        }
}

const testGame = new Gameboard(board, ships)



const __placeBoat = () => {
    ships[0].getPosition("1/1", "ver")
    ships[1].getPosition("1/3", "ver")
    ships[2].getPosition("1/5", "ver")
    ships[3].getPosition("1/7", "ver")
    ships[4].getPosition("2/9", "ver")
    
}




const ResetBoard =() => {
    board = Array(10).fill("0").map(x => Array(10).fill("0"))
    return board
}


generateShips(ships)
__placeBoat()

module.exports = Ship;
module.exports = Gameboard;