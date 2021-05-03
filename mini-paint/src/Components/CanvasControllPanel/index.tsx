import { useDispatch } from "react-redux";
import styles from "./styles.module.css";

import { setNewTool } from "../../actions/tools";

const CanvasControllPanel = () => {
  const dispatch = useDispatch();

  const toolSelectHandler = (e: { nativeEvent: any }) => {
    const nativeEvent = e.nativeEvent;
    const choosenTool = nativeEvent?.target.dataset.name;
    dispatch(setNewTool(choosenTool || "pencil"));
  };

  return (
    <div
      className={styles.canvas_controll_container}
      onClick={toolSelectHandler}
    >
      <div className={styles.canvas_controll_flex_container}>
        <div className={styles.canvas_contoll_item} data-name="pencil">
          pencil
        </div>
        <div className={styles.canvas_contoll_item} data-name="line">
          line
        </div>
        <div className={styles.canvas_contoll_item} data-name="rectangle">
          rectangle
        </div>
        <div className={styles.canvas_contoll_item} data-name="filledRectangle">
          filled rectangle
        </div>
        <div className={styles.canvas_contoll_item} data-name="circle">
          circle
        </div>
        <div className={styles.canvas_contoll_item} data-name="filledCircle">
          filled circle
        </div>
      </div>
    </div>
  );
};

export default CanvasControllPanel;
