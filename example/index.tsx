import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLocalStorage } from '../src/useLocalStorage';

const App = () => {
  const { getStorageItem, setStorageItem, removeStorageItem, clearStorage } =
    useLocalStorage();

  return (
    <div>
      <h1>Example:</h1>

      <button onClick={() => setStorageItem('username', 'Marcos Mendes')}>
        Register username
      </button>
      <br />
      <br />

      <button onClick={() => removeStorageItem('username')}>
        Remove username
      </button>

      <hr />

      <button onClick={() => clearStorage()}>
        Delete all items in localStorage
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
