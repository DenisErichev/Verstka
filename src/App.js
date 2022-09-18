import './App.css';
import FirstPage from './firstPage/FirstPage.jsx';
import SecondPage from './secondPage/SecondPage';
import ThirdPage from  './thirdPage/ThirdPage'
import FourPage from './fourPage/FourPage';
const App=()=> {
  return (
    <div className='page__wrapper'>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourPage />
    </div>
  );
}

export default App;
