import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import './App.css';

function App() {
    return(
        <div className="body">
            <Header />
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}

export default App;