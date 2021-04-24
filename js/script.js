// ===================================================
// ====1. Testing Data =========================

// ********** 1.1 Display Elements *********************
let startTimeLabel = document.getElementById('start-time')
let stopTimeLabel = document.getElementById('stop-time')
let minutesPassedLabel = document.getElementById('minutes-passed')
let amountOwedLabel = document.getElementById('amount-owed')

const MINUTES_PER_HOUR = 60


// ===================================================
// ==== BUTTON FUNCTIONS =========================

let start = function(){
    let startTime = new Date("2000-01-01 3:00:00")
    let stopTime = new Date("2000-01-01 7:16:00")

    console.log("clicked");

    internetUsage = createInternetUsage(startTime, stopTime)
    timeString = createTimeString(startTime, stopTime)
    displayAllDataToUser(timeString, internetUsage)
}


// ===================================================
// ==== DISPLAY FUNCTIONS =========================

let displayAllDataToUser = function(timeString, internetUsage){
    displayItem(startTimeLabel, timeString.startTime)
    displayItem(stopTimeLabel, timeString.stopTime)
    displayItem(minutesPassedLabel, internetUsage.totalTime)
    displayItem(amountOwedLabel, internetUsage.amountOwed)
}

let displayItem = function(element, value){
    element.innerHTML = value;
}


// ===================================================
// ==== CALCULATE FUNCTIONS =========================

function createTimeString(start, stop){
    return {
        startTime: convertToSimpleTime(start),
        stopTime: convertToSimpleTime(stop)
    }
}

function convertToSimpleTime(time){
    var fullTime = time.toLocaleTimeString().split(":")
    try{
        secondAndPeriod = fullTime[2].split(" ")
        fullTime[2] = secondAndPeriod[1]

        time = [fullTime[0], fullTime[1]]
        period = fullTime[2]
    
        fullTime = `${time.join(":")} ${period}`
    }
    catch (e){
        console.log("time string index out of range: " + e);
    }
    return fullTime
}

function createInternetUsage(start, stop){

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
// ==== CONTROLLER FUNCTIONS =========================

function initializeButtons(){
    document.getElementById('action-btn').onclick = start 
}



// ===================================================
// ==== MAIN =========================



initializeButtons()

let liveTime = setInterval(()=>{
    
},1000)

// let clear = document.getElementById('action-btn').onclick = () => {
//     clearInterval(liveTime)
// }