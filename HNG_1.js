 const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
        const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

        function updateDateTime() {
            const currentDate = new Date();
            const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
            const currentTime = currentDate.getTime();

            dayElement.textContent = currentDay;
            timeElement.textContent = currentTime.toString();
        }

        updateDateTime();
  
    setInterval(updateDateTime, 1000);
    