const save = ({ key, value }) => {
  try {
    const serializedState = JSON.stringify(value);

    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remove = (key) => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState) {
      localStorage.removeItem(key);
    } else {
      console.log('Key not Found');
    }
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export default { save, load, remove };
