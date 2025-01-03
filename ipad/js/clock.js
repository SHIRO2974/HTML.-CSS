function clockRun() {
    const padClock = document.querySelector(".pad-clock");

    setInterval(() => {
        const now = new Date();

        // 'ko-KR' 로케일을 사용하여 24시간 형식 시간과 요일 표시
        const formatter = new Intl.DateTimeFormat('ko-KR', {
            hour: '2-digit',        // 2자리 시간 (01, 02, ...)
            minute: '2-digit',      // 2자리 분 (01, 02, ...)
            weekday: 'short',       // 요일을 짧은 형식으로 표시 (예: '월', '화', '수')
            hour12: false           // 24시간 형식으로 표시
        });

        // 날짜 및 시간 포맷팅
        const formattedTime = formatter.format(now);

        // 시계에 시간과 요일 텍스트 출력
        padClock.innerHTML = formattedTime;
    }, 1000);
}

clockRun();