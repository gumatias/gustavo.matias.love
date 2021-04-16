import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './clean-blog.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navigator from './Navigator';
import Home from './Home';
import About from './About';
import Post from './Post';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator/>

        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route path="/post/:id"><Post/></Route>
          <Route path="/"><Home/></Route>
        </Switch>

        <hr/>

        <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <ul class="list-inline text-center">
                  <li class="list-inline-item">
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                </ul>
                <p class="copyright text-muted">Copyright &copy; Gustavo Matias dos Santos {Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(Date.now())}</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
