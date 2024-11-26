import { RotatingLines } from 'react-loader-spinner';
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines
        visible={true}
        width='96'
        strokeWidth='5'
        strokeColor='crimson'
        animationDuration='0.75'
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;