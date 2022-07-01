
let board = Array(10).fill("0").map(x => Array(10).fill("0"))

class Ship {
            constructor(length, axis){
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
        constructor(board, x, y){
                    this.board = board;
                    this.x = x;
                    this.y = y;
                }
        
       placeBoat(){

           
        }
        receiveAttack(x, y){

        }
}

const ResetBoard =() => {
    board = Array(10).fill("0").map(x => Array(10).fill("0"))
    return board
}




module.exports = Ship;
module.exports = Gameboard;