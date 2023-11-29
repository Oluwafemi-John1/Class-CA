// var drink = 'fanta'

// if(drink == 'sprite') {
//     show.innerHTML = "Buy fanta"
// } else {
//     show.innerHTML = "Sha buy anything for me"
// }

var food = "Amala"
var drink = "Reaktor Dark Power"

// if (food == "Amala") {
//     if (drink == "Fearless") {
//         show.innerHTML = "Buy abula"
//     } else {
//         show.innerHTML = "Buy anything"
//     }
// } else if(food == "Eba") {
//     show.innerHTML = "Buy ila/egusi"
// } else if(food == "Iyan") {
//     show.innerHTML = "Buy efo riro/egusi"
// } else {
//     show.innerHTML = "Buy me bread and beans with chilled fanta"
// }
var song = "audios/Kizz_Daniel_-_My_G.mp3"
var songToPlay = new Audio(song)


function checkValue() {
    if (num.value != "") {
        if (num.value >= 0 && num.value < 40) {
            console.log("F");
            show.innerHTML = "F"
            songToPlay.play()
        } else if (num.value >= 40 && num.value < 45) {
            console.log("E");
        }
    } else {
        alert("Please fill in the empty space")
    }
}
