import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  const { getStorageItem, setStorageItem, removeStorageItem, clearStorage } =
    useLocalStorage();

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'users',
      JSON.stringify(['John Doe', 'Jane Doe'])
    );

    expect(getStorageItem('users')).toStrictEqual(['John Doe', 'Jane Doe']);
  });

  it('should add the item to localStorage', () => {
    setStorageItem('users', ['John Doe', 'Jane Doe']);

    expect(window.localStorage.getItem('users')).toStrictEqual(
      JSON.stringify(['John Doe', 'Jane Doe'])
    );
  });

  it('should remove the item from localStorage', () => {
    setStorageItem('users', ['John Doe', 'Jane Doe']);
    expect(getStorageItem('users')).toStrictEqual(['John Doe', 'Jane Doe']);

    removeStorageItem('users');
    expect(getStorageItem('users')).toStrictEqual(null);
  });

  it('should remove/clear all items on localStorage', () => {
    setStorageItem('Item1', '1');
    setStorageItem('Item2', '2');

    expect(getStorageItem('Item1')).toStrictEqual('1');
    expect(getStorageItem('Item2')).toStrictEqual('2');

    clearStorage();

    expect(getStorageItem('Item1')).toStrictEqual(null);
    expect(getStorageItem('Item2')).toStrictEqual(null);
  });
});
