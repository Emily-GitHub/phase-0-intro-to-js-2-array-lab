const cats = ["Milo", "Otis", "Garfield"];

// Write your solution here!

// This function should append a cat to the end of the array, destructively.
function destructivelyAppendCat(name) {
    return cats.push("Name")
}

// this function should prepend a cat to the beginning of the cats array, destructively.
function destructivelyPrependCat(name) {
    return cats.unshift("Name");
}

// this function should remove the last cat from the cats array, destructively.
function destructivelyRemoveLastCat() {
    return cats.pop();
}

// this function should remove the first cat from the cats array, destructively.
function destructivelyRemoveFirstCat() {
    return cats.shift();
}

// this function should append a cat to the cats array and return a new array, leaving the cats array unchanged
function appendCat(name) {
    return [...cats, "name"];
}

// this function should prepend a cat to the cats array and return a new array, leaving the cats array unchanged
function prependCat(name) {
    return ["name", ...cats];
}

// this function should remove the last cat in the cats array and return a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0,-1);
}

// this function should remove the first cat from the cats array and return a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}