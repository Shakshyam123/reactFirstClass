/* eslint-disable react/prop-types */
import "./blank.css";
function Head(props) {
  return (
    <div className="op">
      <img src="link.jpg" className="image" />
      <div className="item1">{props.names}</div>
      <div className="item1">{props.surname}</div>
      <div className="item1">{props.class}</div>
      <div className="item1">item1</div>
      <div className="item1">item1</div>
      <div className="item1">item1</div>
      <div className="item1">item1</div>
    </div>
  );
}
export default Head;
