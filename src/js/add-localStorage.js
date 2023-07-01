const saveLocalStorage = (key, value, sessionType) => {
  try {
    if (sessionType === 'localStorage') {
      localStorage.setItem(key, JSON.stringify(value));
    } else if (sessionType === 'sessionStorage') {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const takeLocalStorage = (key, sessionType) => {
  try {
    let takeDatesInStorage = '';
    if (sessionType === 'localStorage') {
      takeDatesInStorage = localStorage.getItem(key);
    } else if (sessionType === 'sessionStorage') {
      takeDatesInStorage = sessionStorage.getItem(key);
    }
    return takeDatesInStorage === null
      ? undefined
      : JSON.parse(takeDatesInStorage);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export { saveLocalStorage, takeLocalStorage };
