import { Link } from "react-router-dom";

export default function Header () {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="index.html">Gustavo Matias dos Santos</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/home">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/post">Sample Post</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
