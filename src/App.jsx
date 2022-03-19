import { Global } from '@emotion/react';

import Form from './components/Form';
import Header from './components/Header';
import globalStyle from './styles/base/Minireset';

import './styles/main.scss';

function App() {
  return (
    <div className='app'>
      <Global styles={globalStyle} />
      <Header />
      <Form />
    </div>
  );
}

export default App;
