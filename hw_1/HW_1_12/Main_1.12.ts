// day = 1 - 31

let day: number;
if (1 <= day && day < 11) {
    console.log("Перша декада.")
} else if (11 <= day && day < 21) {
    console.log("Друга декада.")
} else {
    console.log("Третя декада.")
}