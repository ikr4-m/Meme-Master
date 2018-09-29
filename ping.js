/**
 * P P P P P P P P P P P P P P P P P P P P P P
 * @author github/skymunn (Ikramullah)
 * @description PINGING YOUR FRIEND
 * @version v2.0P
 * @description node ping.js
 */
function spamPing(loopNumber) {
    // Pemisah
    if (isNaN(loopNumber) === true) console.log("Is it number?");
    else if (loopNumber === 0) console.log("I know this is number, but please insert a real number...");
    else {
        let number = loopNumber;
        
        /**
         * LigaDev 2018 ECMA Timestamp Modified
         */
        function setTimeStamp() {
            let
                c  = new Date(),
                h  = c.getHours().toString().padStart(2, 0);
                mm = c.getMinutes().toString().padStart(2, 0);
                s  = c.getSeconds().toString().padStart(2, 0);
            ;
            return `${h}:${mm}:${s}`;
        }

        setTimeout(function() {
            for (let i=1 ; i <= number ; i++){
                console.log(`\nP [Send at ${setTimeStamp()}]`);
            }
            let time = (number < 2) ? "time" : "times";
            console.log(`\nOkay, that's enough. You're pinging about ${number} ${time}.`);
        },2000);
    }
}

// Eksekusi
// Registering NodeJS.Readline
const readline = require('readline');
const rl = new readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Registering Questions
rl.question("Berapa kali huruf \"P\" yang akan kamu tembakkan? = ", (a) => {
    // Code begin
    spamPing(a);
    // Close Question
    rl.close();
});