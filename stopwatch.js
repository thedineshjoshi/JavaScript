let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let display = document.querySelector(".display");

let hour=0;
let minute=0;
let seconds=0;
let timings;
let clockRunning = false;

start.addEventListener("click",()=>{
    if(!clockRunning)
    {
        clockRunning=true;
    timings = setInterval(() => {   //setInterval is used to tick the clock in regular interval of time
        seconds++;
        if(seconds==60)
        {
            seconds = 0;
            minute++;
            if(minute==60)
            {
                minute = 0;
                hour++;
            }
        }
        display.innerText = `${hour}:${minute}:${seconds}`;
    },1000)
}
    start.disabled = true;
});

stop.addEventListener("click",()=>{
    clearInterval(timings);
    clockRunning = false;
    start.disabled =false;
    start.style.backgroundColor = "Purple";
    start.innerText = "Resume";
    start.style.color = "white";
})

reset.addEventListener("click",()=>{
    clearInterval(timings);
    clockRunning = false;
    seconds = 0;
    minute = 0;
    hour = 0;
    display.innerText = `${hour}:${minute}:${seconds}`;
    start.disabled =false;
    start.style.backgroundColor = "#e0e0e0";
    start.innerText = "Start";
    start.style.color = "black";
})
