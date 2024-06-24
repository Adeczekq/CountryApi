import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

function Navbar({ theme, setTheme }) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Where in the world?
        </Link>
      </div>
      <div className="flex-none">
        <DarkMode theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default Navbar;
