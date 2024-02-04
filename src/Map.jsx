import "./Map.css";

function Export() {
  return (
    <div className="form">
      <div className="hell">
        <form>
          <label>Name:</label>
          <input type="text" placeholder="name" />
          <br />
          <label>Email:</label>
          <input type="email" placeholder="Email" />
          <br />
          <label>Password:</label>
          <input type="password" placeholder="password" />
          <br />
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm password" />
          <br />
          <label>Message:</label>
          <textarea rows="4" cols="32" name="comment" form="usrform">
            Enter text here...
          </textarea>
          <br />
          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}

export default Export;
