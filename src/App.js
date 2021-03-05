
// import { Switch, Route } from 'react-router-dom'
//import Home from './components/Home'
import Header from './components/Header'
//import TodosContainer from './containers/TodosContainer'
import routes from './config/routes'

function App() {
  return (
    <div className="container">
      <Header />
      {routes}
    </div>
  );
}

export default App;
