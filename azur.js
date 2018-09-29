/**
 * https://www.youtube.com/watch?v=PEEY57AAXZc (0:00-0:30)
 * @author github/skymunn (Ikramullah)
 * @description IKLAN AZUR LANE, TAPI INI NODE.JS
 * @version v3.0P
 * @description node azur.js
 */
function adsAzurLane() {
/**
 * First all, im sorry to make the description in Indonesian
 * Because, this code is destined to my friends in Indonesia.
 * So, im so sorry to make this in Indonesian.
 */
    const 
        gacha=["Nevada","Kent","Hood"],         // kapal dalam iklan
        cString=["one","two","three","four"],   // angka, tapi jadi kata
        r = []                                  // penampungan, untuk return
    ;                                 
    // aku benci pengulangan
    for(let i=0;i<cString.length;i++){
        let 
            str = "",                           // buat penampungan output
            count = cString[i].toUpperCase()    // angka dibuat huruf besar 
        ;
        // kenapa mesti 3-1/4-1?
        // cuma buat gampang dibaca sih
        // yang lubaca cuma 3 ama 4, gausah -1 nya
        if(i==(4-1)) str = `FREAKIN ${gacha[2].toUpperCase()} DUDE!`;
        else if(i==(3-1)) str = `Another ${gacha[0]}.`;
        else str = gacha[i]+".";
        // push semua elemen variabel kedalam array
        r.push(`NUMBER ${count}!\n${str}\n`);
    }
    // return dalam keadaaan array yang telah dijadikan string
    return r.join("\n");
}
// eksekusi
console.log(adsAzurLane());