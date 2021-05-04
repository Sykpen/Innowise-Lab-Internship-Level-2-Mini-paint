import { RootState } from "../../index";
import Canvas from "../Canvas";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { logoutCurrentUser } from "../../actions/authorization";
import styles from './styles.module.css'

const MainAppComponent = () => {
  const userEmail = useSelector(
    (state: RootState) => state.authorization.currentUserEmail
  );

  const dispatch = useDispatch();

  const logoutUser = (e: React.MouseEvent) => {
    dispatch(logoutCurrentUser());
  };
  return (
    <div>
      <p>Hello - {userEmail}</p>
      <div className={styles.logout_button_container}>
        <Button variant="contained" color="primary" onClick={logoutUser}>
          Logout
        </Button>
      </div>
      <Canvas />
    </div>
  );
};

export default MainAppComponent;
