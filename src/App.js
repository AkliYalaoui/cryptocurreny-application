import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Landing,
  Home,
  CryptoDetails,
  Exchanges,
  Cryptocurrencies,
  News,
} from "./pages";
import { NavBar,Footer } from "./components";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/exchanges" exact>
              <Exchanges />
            </Route>
            <Route path="/cryptocurrencies" exact>
              <Cryptocurrencies />
            </Route>
            <Route path="/crypto/:coinId" exact>
              <CryptoDetails />
            </Route>
            <Route path="/news" exact>
              <News />
            </Route>
          </Switch>
        </main>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
