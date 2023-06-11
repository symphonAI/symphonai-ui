import { useState, useEffect } from "react";

const getStorageData = (keyName, defaultValue) => {
  const savedItem = localStorage.getItem(keyName);
  const parsedItem = JSON.parse(savedItem);
  return parsedItem || defaultValue;
};

const useLocalStorage = (keyName, initialValue) => {
  const [value, setValue] = useState(() =>
    getStorageData(keyName, initialValue)
  );

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [keyName, value]);

  return [value, setValue];
};

export default useLocalStorage;