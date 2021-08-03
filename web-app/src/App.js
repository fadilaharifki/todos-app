import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import DoctorList from './pages/DoctorList';
import Detail from './pages/Detail'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/doctorlist/detail/:id">
          <Detail />
        </Route>
        <Route path="/doctorlist">
          <DoctorList />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
