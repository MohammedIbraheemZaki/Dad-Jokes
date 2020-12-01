import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import Joke from "./components/Joke"
import About from './components/pages/About';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <Route path='/' exact component={Joke}/>
              <Route path='/about' exact component={About}/>
              {/* <Joke/> */}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
