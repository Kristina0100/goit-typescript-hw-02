import { Props } from './LoadMoreBtn.types';
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoad }: Props) => {
  return (
    <div className={styles.btn_wrap}>
      <button className={styles.btn} type="button" onClick={onLoad}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;