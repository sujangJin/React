import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPages';
import BluePage from './pages/BluePages';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  )
}

export default App;
