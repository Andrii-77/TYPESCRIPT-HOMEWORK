// day = 1 - 31

let dayOfMon: number;
if (1 <= dayOfMon && dayOfMon < 11) {
    console.log("Перша декада.")
} else if (11 <= dayOfMon && dayOfMon < 21) {
    console.log("Друга декада.")
} else {
    console.log("Третя декада.")
}