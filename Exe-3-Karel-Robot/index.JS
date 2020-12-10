/* the karel robot walk through the world in size of 5*5 and put the beeper in chess board pattern */

/* solution*/

function main(){

   firstPath();
    secPath();
     firstPath();
     secPath();
     firstPath();

}
function firstPath(){
     putBeeper();
     move();
     move();
      putBeeper();
     move();
     move();
     putBeeper();
      turnLeft();
}
function secPath(){
   move();
      turnLeft();
     move();
     putBeeper();
      move();
     move();
     putBeeper();
      move();
      turnRight();
      move();
      turnRight();
}
