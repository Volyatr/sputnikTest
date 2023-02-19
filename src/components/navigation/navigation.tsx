import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Weather</Link>
        </li>
        <li>
          <Link to={`/gallery`}>Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
