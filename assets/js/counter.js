// counter run only once when visible in screen

  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        let endValue = counter.textContent;
        let startValue = 0;
        let updating = setInterval(() => {
          startValue += endValue / 200;
          counter.textContent = startValue.toFixed(0);
          if (startValue > endValue) {
            counter.textContent = endValue;
            clearInterval(updating);
            observer.unobserve(counter);
          }
        }, 10);
      }
    });
  },
  { threshold: 1 }
  );
  document
  .querySelectorAll(".counter")
  .forEach((counter) => observer.observe(counter));
