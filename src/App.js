import { useState } from "react";
import "./App.css";
import MainScreen from "./components/mainScreen";
import MainCatalog from "./components/catalog/mainCatalog";
import "./style.css";
import "./global.css";

function App() {
    const [showCatalog, setShowCatalog] = useState(false);

    const handleScreenClick = () => {
        setShowCatalog(true);
    };

    return (
        <div className="App">
            {!showCatalog ? (
                <MainScreen onClick={handleScreenClick} />
            ) : (
                <MainCatalog />
            )}
        </div>
    );
}

export default App;
