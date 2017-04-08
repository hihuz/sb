const loadState = () => {
  try {
    const visited = localStorage.getItem("visited");
    if (visited === null) {
      return 0;
    }
    return JSON.parse(visited);
  } catch (err) {
    return 0;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("visited", serializedState);
  } catch (err) {
    // err
  }
};

export { loadState, saveState };
