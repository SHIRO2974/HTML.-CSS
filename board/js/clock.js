function clockRun() {
    
    const phoneClock = document.querySelector(".phone-clock");
    setInterval(() => {
        const now = new Date();
        const nowHours = now.getHours();
        const nowMinutes = now.getMinutes();
        const nowClockText = `${nowHours}:${nowMinutes}`;
        phoneClock.innerHTML = nowClockText;        
    }, 1000);   // 1초마다 동작
}

clockRun();
