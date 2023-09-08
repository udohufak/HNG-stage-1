const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayIndex = currentDate.getDay();
const currentDayOfWeek = daysOfWeek[dayIndex];
document.getElementById('day').textContent = currentDayOfWeek;

function updateUTCTime() {
    const currentDate = new Date();
    const utcTimeString = currentDate.toISOString().split('T')[1].slice(0, 8);
    document.getElementById('utcTime').textContent = utcTimeString;
  }
  updateUTCTime();
  setInterval(updateUTCTime, 1000);