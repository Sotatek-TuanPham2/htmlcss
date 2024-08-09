function countdown(endDate) {
  const end = new Date(endDate).getTime();
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = end - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").children[0].textContent = days;
    document.getElementById("hours").children[0].textContent = hours;
    document.getElementById("minutes").children[0].textContent = minutes;
    document.getElementById("seconds").children[0].textContent = seconds;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}
countdown("2024-09-08T00:00:00");
