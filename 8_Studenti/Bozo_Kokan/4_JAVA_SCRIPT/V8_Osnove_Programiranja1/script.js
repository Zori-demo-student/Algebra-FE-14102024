//1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena. 
var FirstName = "Ivan";
var LastName = "Horvat";

var FullName = FirstName + " " + LastName;

console.log(FullName);
//2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
//var x = z === 2 ? y : 5;

var x = z === 2 ? y : 5;

var x;
var z = 2;
var y = 1;

if (z === 2)
{
    x = y;
}
else
{
    x = 5;
}

console.log(x);

//3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. 
// Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, 
// i console.log-ati rezultat (npr. "Broj 2 je paran").  

for (i=1; i < 20; i++)
{
    if (i % 2)
    {
        console.log("Broj: " + i + "je neparan broj")
    }
    else
    {
        console.log("Broj: " + i + "je paran broj")
    }
}