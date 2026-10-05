import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-info-content shadow-sm">
      <div className="flex-1">
        <Link className="btn btn-warning text-xl" to="/">
          Dev Tindar
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        {/* Menu Start */}
        <ul className="menu menu-horizontal">
          <li>
            <Link className="text-base-100 text-xl" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-base-100 text-xl" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-base-100 text-xl" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Menu End */}

        <input
          type="text"
          placeholder="Search"
          className="input w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-warning btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="justify-between" to="/profile">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
