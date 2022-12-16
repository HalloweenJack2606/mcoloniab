import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteContainer from './RouteContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <RouteContainer/>
      </Router>
    </div>
  );
}

export default App;
