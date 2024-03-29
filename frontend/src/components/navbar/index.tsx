import { ReactComponent as GithubIcon } from "assets/img/Github.svg";
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-contant">
          <h1>DSMovie</h1>
          <a href="https://github.com/abraao-pereira/Dsmovie">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/Github-Repository</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
