import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Homepage from "./Pages/Homepage/homepage";

function App() {
    return (
        <Router>
            <div className="main_div">
                <h1 className="App">CS565 project</h1>
                <main>
                    <Route path="/" exact component={Homepage}/>
                </main>
            </div>
        </Router>
    );
}

export default App;
