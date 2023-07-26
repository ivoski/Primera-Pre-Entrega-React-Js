import { Link, useNavigate } from "react-router-dom";
import s from "./NavBar.module.css";


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className={s.NavBar}>
      <Link to="/">
        <img src="/weblogo.png" className="logo" alt="Hype logo" />
      </Link>

      <ul>
        <li className={s.items} onClick={() => navigate("/Accion")}>
          Accion
        </li>
        <li className={s.items} onClick={() => navigate("/Deportes")}>
          Deportes
        </li>
        <li className={s.items} onClick={() => navigate("/Aventura")}>
          Aventura
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
