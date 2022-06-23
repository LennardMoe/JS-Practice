const hoursEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');
const datumEl = document.getElementById('datum')

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let today = new Date().toLocaleDateString();
    let ampm = "PM"

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
      }

    h = h<10 ? '0' + h : h;
    m = m<10 ? '0' + m : m;
    s = s<10 ? '0' + s : s;
    
    hoursEl.innerText = h;
    minuteEl.innerText = m;
    secondsEl.innerText = s;
    datumEl.innerText = today;
    ampmEl.innerText = ampm;
    setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();