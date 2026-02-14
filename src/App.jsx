import { useState } from 'react';

// import { useNavigate } from 'react-router-dom';

import './App.css';
import AppRoutes from './routes';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';

function App() {
  //   const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  //   const goToLanding = () => {
  //     navigate('/');
  //   };

  const goToLanding2 = () => {
    setStart(true);
  };
  if (start) {
    return <AppRoutes />;
  }
  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((cc) => cc + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      {/* <button onClick={goToLanding}>페이지 시작하기!</button> */}
      <button onClick={goToLanding2}>페이지 시작하기!2</button>
    </>
  );
}

export default App;
