import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function App() {
  return (
  <Router>
    <Header/>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <Footer/>
  </Router>
  )
}
