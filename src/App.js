import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar, Footer } from './components'
import GlobalStyles from './globalStyles'
import { Home, Contact, Projects } from './pages'

// const Home = () => <h1 style={{color: 'red'}}>hola putita lorem sfsdfdcfsd</h1>

function App() {
  return (
    <Router>
      <GlobalStyles />
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Projects} path="/projects" />
          <Route component={Contact} path="/contact" />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
