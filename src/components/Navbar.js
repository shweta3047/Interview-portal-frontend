import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav>
        <Link to={"/"}>
          <img
            src="https://golangexample.com/content/images/2019/06/scheduler.jpg"
            alt=""
            className={styles.image}
          />
        </Link>

        <div className={styles.name}>Jhon Doe</div>
      </nav>
    </div>
  );
}

export default Navbar;
