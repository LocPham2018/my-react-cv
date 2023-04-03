import About from "./components/About";
import Banner from "./components/Banner";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
	return (
        <>
            <Banner />
            <Navbar />
            <About />
            <Info />
            <Certificates />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
