import MyFooter from './components/MyFooter';
import Myheader from './components/Myheader';
import WelcomeComponent from './components/WelcomeComponent';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Myheader></Myheader>
      {/* <Counter></Counter> */}
      {/* <LoginButton></LoginButton> */}
      <HomePage></HomePage>
      {/* <Counter2></Counter2> */}
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
