export const useLocalStorage = () => {
  const getStorageItem = (key: string) => {
    const isClientSide = typeof window === 'object';
    if (!isClientSide) return;

    return window.localStorage.getItem(key)!;
  };

  const setStorageItem = (key: string, value: string) => {
    const isClientSide = typeof window === 'object';
    if (!isClientSide) return;

    return window.localStorage.setItem(key, value);
  };

  const removeStorageItem = (key: string) => {
    const isClientSide = typeof window === 'object';
    if (!isClientSide) return;

    return window.localStorage.removeItem(key);
  };

  const clearStorage = () => {
    const isClientSide = typeof window === 'object';
    if (!isClientSide) return;

    return window.localStorage.clear();
  };

  return { getStorageItem, setStorageItem, removeStorageItem, clearStorage };
};
