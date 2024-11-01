import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="pt-2">
      <div className="lg:hidden flex justify-center items-center p-[2rem] text-2xl">
        <RxHamburgerMenu />
      </div>
      <div className="hidden lg:block">
        <ul className="flex justify-between items-center gap-20 text-2xl">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
