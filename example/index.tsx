import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLocalStorage } from '../src/useLocalStorage';

const App = () => {
  const { setStorageItem } = useLocalStorage();

  return (
    <div>
      <button onClick={() => setStorageItem('click', 'me')}>
        Click`me to set a value on LocalStorage
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
