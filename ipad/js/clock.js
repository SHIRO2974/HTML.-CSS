function clockRun() {

    const padClock = document.querySelector(".pad-clock")
    setInterval(() => {
        
        const now = new Date();
        const nowHours = now.getHours();
        const nowMinutes = now.getMinutes();
        const formattedMinutes = nowMinutes < 10 ? `0${nowMinutes}` : nowMinutes;
        const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
        const nowDay = daysOfWeek[now.getDay()];
        const nowClockText = `${nowHours}:${formattedMinutes} ${nowDay}`;

        padClock.innerHTML = nowClockText;
    }, 1000);
}
clockRun();