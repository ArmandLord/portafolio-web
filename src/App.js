import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar, Footer } from './components'
import GlobalStyles from './globalStyles'
import { Home, Contact, Projects, Portafolio } from './pages'
import { Theme } from './Theme'
import { useState } from 'react'


function App() {

  const [theme, setTheme] = useState(true)

  return (
    <Theme propTheme={theme ? 'original' : 'diaDeMuertos'}>
      <Router>
        <GlobalStyles />
          <Navbar setTheme={setTheme} theme={theme}/>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Projects} path="/projects" />
            <Route component={Contact} path="/contact" />
            <Route component={Portafolio} path="/portafolio"/>
          </Switch>
          <Footer/>
      </Router>
    </Theme>
  );
}

export default App;
