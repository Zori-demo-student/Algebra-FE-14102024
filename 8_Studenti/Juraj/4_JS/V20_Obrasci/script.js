import ispisiPozdrav from "./utility/mylib.js";
import { 
    zbrojiDvaBroja as f, 
    pomnoziDvaBroja, 
    mojNiz, 
    mojObj, 
    Exercise } from "./utility/mylib.js";

window.addEventListener("load", main);

function main() {

    ispisiPozdrav();
    var zbroj = f (3,5);
    console.log("Zbroj: " + zbroj);
    
    var umnozak = pomnoziDvaBroja(3,5);
    console.log("Umnozak: " + umnozak);

    console.log(mojNiz);
    console.log(mojObj);

    console.log(Exercise.getTotalSteps());
    Exercise.walk();
    Exercise.walk();
    console.log(Exercise.getTotalSteps());
}
