// ===================================================
// ====1. Testing Data =========================

// ********** 1.1 Display Elements *********************
let startTimeLabel = document.getElementById('start-time')
let stopTimeLabel = document.getElementById('stop-time')
let minutesPassedLabel = document.getElementById('minutes-passed')
let amountOwedLabel = document.getElementById('amount-owed')

const minutes = 1000 * 60;
const hours = minutes * 60;
const days = hours * 24;
const years = days * 365;

// ===================================================
// ====2. MAIN =========================
let liveTime = setInterval(()=>{

    document.getElementById('action-btn')
        .onclick = start()    
    
},1000)


// ===================================================
// ==== 3. EVENT MANAGER =========================




// ===================================================
// ==== 4. BUTTON FUNCTIONS =========================

let start = function(){
    let startTime = new Date("2000-01-01 3:00:00")
    let stopTime = new Date("2000-01-02 7:36:00")

    internetUsage = createInternetUsage(startTime, stopTime)    
    displayAllDataToUser(internetUsage)

    console.log("\n");
}

function createInternetUsage(start, stop){

    // let printableTime = start.toLocaleTimeString().split(":")

    let total = stop.getTime() - start.getTime()
    let totalMinutes = Math.floor(total / 60_000)

    console.log("start = " + start.getTime());
    console.log("stop = " + stop.getTime());

    return {
        startTime: start.getTime(),
        stopTime: stop.getTime(),
        totalTime: total,
        amountOwed: calculateAmountOwed(totalMinutes)
    }    
}

function calculateAmountOwed(total){
    if (total <= 0) return 0
        
    let hours = Math.floor(total/60)
    let remainMinutes = total - (60*hours)  
            
    totalAmount = (remainMinutes >= 30) ? 1500 : (remainMinutes > 15) ? 1000: 500    
    totalAmount += hours * 1500
    
    console.log("remaining=" + remainMinutes);
    console.log("totalAmount=" + totalAmount);
    console.log("Hours = " + hours);
    console.log("TotalMinutes = " + total);
    return totalAmount
}


// ===================================================
// ==== 5. DISPLAY FUNCTIONS =========================

let displayAllDataToUser = function(internetUsage){
    displayItem(startTimeLabel, internetUsage.startValue)
    displayItem(stopTimeLabel, internetUsage.stopValue)
    displayItem(minutesPassedLabel, internetUsage.minutesPassed)
    displayItem(amountOwedLabel, internetUsage.amountOwed)
}

let displayItem = function(element, value){
    element.innerHTML = value;
}



// let clear = document.getElementById('action-btn').onclick = () => {
//     clearInterval(liveTime)
// }