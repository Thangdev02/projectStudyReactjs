import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import LoginButton from './components/LoginButton';
import MyFooter from './components/MyFooter';
import Myheader from './components/Myheader';

function App() {
  return (
    <div className="App">
      <Myheader></Myheader>
      {/* <Counter></Counter> */}
      <LoginButton></LoginButton>
      {/* <Counter2></Counter2> */}
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
