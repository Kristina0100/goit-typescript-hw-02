import styles from "./ErrorMessage.module.css";
import { Props } from "./ErrorMessage.types";

const ErrorMessage = ({ error }: Props) => {
  return (
    <div className={styles.error_wrap}>
      <p className={styles.error}>
        Oops...an error occurred while fetching images ({error}). Please try again later.
      </p>
    </div>
  )
};

export default ErrorMessage;