// ===================================================
// ====1. Testing Data =========================

// ********** 1.1 Display Elements *********************
let startTimeLabel = document.getElementById('start-time')
let stopTimeLabel = document.getElementById('stop-time')
let minutesPassedLabel = document.getElementById('minutes-passed')
let amountOwedLabel = document.getElementById('amount-owed')


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
    let startTime = new Date("2000-01-01 1:00:00")
    let stopTime = new Date("2000-01-01 3:00:00")

    internetUsage = createInternetUsage(startTime, stopTime)
    console.log(internetUsage.amountOwed);
    displayAllDataToUser(internetUsage)
}

function createInternetUsage(start, stop){

    // let printableTime = start.toLocaleTimeString().split(":")

    let total = stop.getTime() - start.getTime()
    let totalMinutes = Math.floor(total / 6000)

    return {
        startTime: start.getTime(),
        stopTime: stop.getTime(),
        totalTime: total,
        amountOwed: calculateAmountOwed(totalMinutes)
    }    
}

function calculateAmountOwed(total){
    // if (total > 0 && total <= 15) return 500;
    // if (total > 16 && total <= 30) return 1000;
    // if (total > 31 && total <= 60) return 1500;
    total = 13
    console.log(total);

    return (total * total/15 * 500)
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