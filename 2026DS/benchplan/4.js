const debounce = (func, delay) => {
  let timerId;

  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delay);
  }

}

const logMessage = debounce((message) => console.log(message), 1000);


logMessage("Hel");
logMessage("Hell");
logMessage("Hello");
logMessage("Hello W");
