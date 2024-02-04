/* eslint-disable react/prop-types */
import "./component.css";

function Myfunction(props) {
  return (
    <div>
      <h2 className="column">{props.name}</h2>
      <table className="hello">
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>subject</th>
          <th>place</th>
        </tr>
        <tr>
          <td>Shakshyam</td>
          <td>11</td>
          <td>nepali</td>
          <td>kathmandu</td>
        </tr>
        <tr>
          <td>Hari</td>
          <td>13</td>
          <td>Maths</td>
          <td>Sanga</td>
        </tr>
        <tr>
          <td>Shyam</td>
          <td>12</td>
          <td>Computer</td>
          <td>Shyambhu</td>
        </tr>
        <tr>
          <td>Ram</td>
          <td>12</td>
          <td>English</td>
          <td>Bhaktapur</td>
        </tr>
      </table>
      <div>{props.like}</div>
      <div>{props.link}</div>
    </div>
  );
}

export default Myfunction;
