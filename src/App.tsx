import Hero from './components/hero';
import Base from './components/base';
import SecondBase from './components/secondBase';
import Menu from './components/MenuInterface';
import ContactUs from './components/contactUs';
import OnlineReservation from './components/onlineReservation';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <>
      <Hero />
      <Base />
      <SecondBase />
      <Menu />
      <ContactUs />
      <OnlineReservation />
      <Footer />
    </>
  );
};

export default App;
