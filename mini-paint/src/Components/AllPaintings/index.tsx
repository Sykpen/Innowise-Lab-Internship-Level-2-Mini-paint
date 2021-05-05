import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";

import { RootState } from "../../index";
import { useEffect } from "react";

import { getCurrentUserData } from "../../actions/dataActions";
import OnePainting from "./OnePainting";

const AllPaintings = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state: RootState) => state.authorization.userId);

  useEffect(() => {
    dispatch(getCurrentUserData(userId));
  }, []);

  const currentUserData = useSelector(
    (state: RootState) => state.data.userDataFromFirebase
  );

  const list = [];

  for (const [key, value] of Object.entries(currentUserData)) {
    const val = value as Ivalue;
    list.push({ key, data: val.data as string });
  }

  interface OnePaintingInterface {
    key: string;
    data: string;
  }

  interface Ivalue {
    data: string;
  }

  return (
    <div className={styles.user_paintings_container}>
      {list.map((element: OnePaintingInterface) => (
        <OnePainting src={element.data} />
      ))}
    </div>
  );
};

export default AllPaintings;
