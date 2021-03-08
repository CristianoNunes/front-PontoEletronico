import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'fontsource-roboto';
import { Login, Home } from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
    <div className="App">
      
    </div>
    </BrowserRouter>
  );
}

export default App;
