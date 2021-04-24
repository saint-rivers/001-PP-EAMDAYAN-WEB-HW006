// ===================================================
// ====1. Testing Data =========================

// ********** 1.1 Display Elements *********************
let startTimeLabel = document.getElementById('start-time')
let stopTimeLabel = document.getElementById('stop-time')
let minutesPassedLabel = document.getElementById('minutes-passed')
let amountOwedLabel = document.getElementById('amount-owed')

const MINUTES_PER_HOUR = 60

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
    let stopTime = new Date("2000-01-01 7:16:00")

    internetUsage = createInternetUsage(startTime, stopTime)    
    displayAllDataToUser(internetUsage)

}

function createInternetUsage(start, stop){

    // let printableTime = start.toLocaleTimeString().split(":")

    let total = stop.getTime() - start.getTime()
    let totalMinutes = Math.floor(total / 60_000)

    return {
        startTime: start.getTime(),
        stopTime: stop.getTime(),
        totalTime: totalMinutes,
        amountOwed: calculateAmountOwed(totalMinutes)
    }    
}

function calculateAmountOwed(total){
    if (total <= 0) return 0
        
    let totalAmount = 0

    let hoursUsed = Math.floor(total / MINUTES_PER_HOUR)
    let remainMinutes = total - (MINUTES_PER_HOUR * hoursUsed)  
            
    totalAmount = (remainMinutes >= 30) ? 1500 : (remainMinutes > 15) ? 1000: 500    
    totalAmount += hoursUsed * 1500
    
    return totalAmount
}


// ===================================================
// ==== 5. DISPLAY FUNCTIONS =========================

let displayAllDataToUser = function(internetUsage){
    displayItem(startTimeLabel, internetUsage.startValue)
    displayItem(stopTimeLabel, internetUsage.stopValue)
    displayItem(minutesPassedLabel, internetUsage.totalTime)
    displayItem(amountOwedLabel, internetUsage.amountOwed)
}

let displayItem = function(element, value){
    element.innerHTML = value;
}



// let clear = document.getElementById('action-btn').onclick = () => {
//     clearInterval(liveTime)
// }