const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    const startingCountNumber = Number(counter.innerText);
    const increment = targetCount / 100;

    if (startingCountNumber < targetCount) {
      counter.innerText = `${Math.round(startingCountNumber + increment)}`;
      setTimeout(updateCounter, 15);
    }
  };
  updateCounter();
});