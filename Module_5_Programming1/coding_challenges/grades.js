// Project 1, Assignment 2
// https://codepen.io/leesel/pen/KKzNROg?editors=0011

const grade = 91;

switch(true) {
    case grade > 95:
      console.log("A+");
      break;
    case grade > 88 && grade <= 95: //putting 90 leaves out 91, 92, 93, 94
      console.log("A");
    break;
    case grade > 84 && grade <= 88:
      console.log("B+");
    break;
    case grade > 76 && grade <= 84:
      console.log("C+");
    break;
    case grade > 70 && grade <= 76:
      console.log("C");
    break;
    case grade > 67 && grade <= 70:
      console.log("D+");
    break;
    case grade > 64 && grade <= 67:
      console.log("D");
    break;
    default:
      console.log("F");
  }