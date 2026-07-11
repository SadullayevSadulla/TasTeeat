import Header from "./components/Header/header";
import Main from "./components/Main/main";
import MainMenu from "./components/MainMenu/mainMenu";
import MainSwiper from "./components/MainSwiper/mainSwiper";
import MainOffer from "./components/MainOffer/mainOffer";
import MainDishes from "./components/MainDishes/mainDishes";
import MainServices from "./components/MainServices/mainServices";
import MainNews from "./components/MainNews/mainNews";
import MainReservation from "./components/MainReservation/mainReservation";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <>
      <Header />
      <Main />
      <MainMenu/>
      <MainSwiper/>
      <MainOffer/>
      <MainDishes/>
      <MainServices/>
      <MainNews/>
      <MainReservation/>
      <Footer/>
    </>
  );
}

export default App;