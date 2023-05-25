const handleScrool = handle => {
  handle.forEach(element => {
    const getPosition = element.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    if (getPosition.top < windowHeight) {
      element.style.opacity = '1';
    }
  });
};

export default handleScrool;
