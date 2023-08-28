import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Menus from "./Menus";
import Map from "./Map";
import FooterComp from "./Footer";
import Links from "./Links";

function App() {
    return (
        <div>
            <NavBar />
            <Header />
            <Links />
            {/* <Slider /> */}
            <Menus />
            <Map />
            <FooterComp />
        </div>
    );
}

export default App;
