import styles from "./Header.module.css";
import StatsIcon from "../../icons/StatsIcon";
import { useState } from "react";
import Alert from "../Alert/Alert";
import useBearStore from "../../state/state";

const Header = () => {
  const [showAlert, setShowAlert] = useState(false);
  const setIsUserValid = useBearStore((state) => state.setIsUserValid);

  const yes = () => {
    setIsUserValid(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
      </div>
      <div className={styles.headerItem}>
        <h1 className={styles.heading}>PURPLE</h1>
        <div className={styles.headerBtnDiv}>
          <button
            onClick={() => setShowAlert(true)}
            className={styles.logOutBtn}
          >
            Logout
          </button>
        </div>
      </div>
      {showAlert && (
        <Alert
          message={"Do you want to log out?"}
          yes={yes}
          setShowAlert={setShowAlert}
        />
      )}
    </header>
  );
};

export default Header;
