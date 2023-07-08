import { useState } from "react";

interface Props<T> {
  initial: T;
  key: string;
}

const useLocalStorage = <T>({ initial, key }: Props<T>) => {
  const [storeData, setStoreData] = useState<T>(() => {
    if (!window) return;
    const data = window?.localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return initial;
  });
  const setData = (data: T) => {
    window?.localStorage.setItem(key, JSON.stringify(data));
    setStoreData(data);
  };

  return [storeData, setData];
};

export default useLocalStorage;
