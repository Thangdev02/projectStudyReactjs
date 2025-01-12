import MyFooter from './components/MyFooter';
import Myheader from './components/Myheader';

function App() {
  return (
    <div className="App">
      <Myheader></Myheader>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2114364847916!2d106.7195210755526!3d10.79511188935478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%2081!5e0!3m2!1svi!2s!4v1736691545519!5m2!1svi!2s" style={{width:"100%",height:'450px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
