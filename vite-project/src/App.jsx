import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() { 

    const [page, setPage] = useState("home"); /*Hook para manejar el estado de la página actual*/
    return (
        <div className="app">
            <Header nav={setPage} cur={page}/>
            <hr className="app_divider"/>
            <main>
                
            </main>

        </div>
    );
}

export default App;