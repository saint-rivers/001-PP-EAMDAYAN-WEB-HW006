// let startTime = document.getElementById('start-time')
// let stopTime = document.getElementById('stop-time')
// let minutesPassed = document.getElementById('minutes-passed')
// let amountOwed = document.getElementById('amount-time')

// ===================================================
// ====1. Testing Data =========================

// ********** 1.1 Display Elements *********************
let startTimeLabel = document.getElementById('start-time')
let stopTimeLabel = document.getElementById('stop-time')
let minutesPassedLabel = document.getElementById('minutes-passed')
let amountOwedLabel = document.getElementById('amount-time')


// ===================================================
// ====2. MAIN =========================
let liveTime = setInterval(()=>{

    document.getElementById('action-btn')
        .onclick = () => start()
    
    
},1000)


// ===================================================
// ==== 3. EVENT MANAGER =========================




// ===================================================
// ==== 4. BUTTON FUNCTIONS =========================

let start = function(){
    let startTime = new Date("2000-01-01 1:00:00")
    let stopTime = new Date("2000-01-01 3:00:00")

    
}

function createInternetUsage(){
    let startTime = new Date("2000-01-01 1:00:00")
    let stopTime = new Date("2000-01-01 3:00:00")
    
    let total = stopTime - startTime
    let totalMinutes = Math.floor(totalTime / 6000)

    return {
        startTime: startTime,
        stopTime: stopTime,
        totalTime: total,
        amountOwed: calculateAmountOwed(totalMinutes)
    }    
}

function calculateAmountOwed(total){
    if (total > 0 && total <= 15) return 500;
    if (total > 16 && total <= 30) return 1000;
    if (total > 31 && total <= 60) return 1500;
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