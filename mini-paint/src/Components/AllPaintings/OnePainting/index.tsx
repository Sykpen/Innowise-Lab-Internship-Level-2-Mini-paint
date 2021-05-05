import styles from "./styles.module.css";

interface IOnePainting {
  src: string;
}
const OnePainting = ({ src }: IOnePainting) => {
  return (
    <div className={styles.onePainting_container}>
      <img src={src} width="300" height="300" alt="test"></img>
    </div>
  );
};

export default OnePainting;
