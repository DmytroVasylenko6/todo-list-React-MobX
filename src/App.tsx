import React from 'react';
import './normalize.css';
import GlobalStyle from './GlobalStyles';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoPage />
    </div>
  );
}

export default App;
