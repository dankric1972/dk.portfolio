let theNumber = Number(prompt("Pick a number"));
let pickNumber = theNumber;
if (!Number.isNaN(theNumber)) {
console.log (pickNumber + " is the square root of " + theNumber * theNumber + ".");
}
else {
console.log ("Numbers only allowed.");
}