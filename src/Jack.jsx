import "./jack.css";
function hello() {
  return (
    <div className="navbar">
      <div className="url">
        <img src="logo.jpg" className="jin" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="search"
            />
          </li>
        </ul>
      </div>
      <div className="high">
        <img src="image.jpg" height="500px" width="100%" />
        <div className="text">
          <h1 className="font">
            THIS IS A<br /> HEADING
          </h1>
          <p>
            It is a long established fact that a reader will
            <br /> be distracted by the readable content of a page
            <br /> when looking at its layout.
          </p>
        </div>
      </div>
      <div className="board">
        <div className="name">
          <h1>
            This is a<br /> heading
          </h1>
          <p>
            It is a long established fact
            <br /> that a reader will be distracted by
          </p>
          <div className="main">
            <button className="btn">click me</button>
          </div>
        </div>
      </div>
      {/* hereis the foorter */}
      <div className="wide">
        <h3>
          We have developed many of web and mobile application till date and
          clients are highly satisfied with our work.
        </h3>
        <p>
          IT-Bridge Nepal is a privately held company, consisting of a creative
          and multi-talented team comprised of web designers, web developers and
          graphic designers. We provide a wide range of services including web
          design, web development, and mobile application development, web
          hosting, and consulting. IT-Bridge Nepal offers customer-oriented
          services and delivers creative and effective results.
        </p>
      </div>
      <div className="image5">
        <img src="img2.jpg" height="300px" width="510px" className="pokemon" />
        <img src="sun.jpg" height="300px" width="510px" className="pokemon" />
      </div>

      {/*From here this is a foter */}
      <footer className="foot">
        <h1>Want to work together ?</h1>

        <p>We are the perfect partner for your business.</p>
      </footer>
      <footer>
        <ul>
          <li>
            <li>
              <a href="#">
                <h1>Information</h1>
              </a>
            </li>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Our works</a>
          </li>
          <li>
            <a href="#">Our works</a>
          </li>
        </ul>
        <ul>
          <li>
            <li>
              <a href="#">
                <h1>Information</h1>
              </a>
            </li>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Our works</a>
          </li>
          <li>
            <a href="#">Our works</a>
          </li>
        </ul>
        <ul>
          <li>
            <li>
              <a href="#">
                <h1>Information</h1>
              </a>
            </li>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Our works</a>
          </li>
          <li>
            <a href="#">Our works</a>
          </li>
        </ul>
        <ul>
          <li>
            <li>
              <a href="#">
                <h1>Information</h1>
              </a>
            </li>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Our works</a>
          </li>
          <li>
            <a href="#">Our works</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default hello;
