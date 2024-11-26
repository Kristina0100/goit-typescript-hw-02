import styles from "./ImageModal.module.css"
import Modal from 'react-modal';
import { Props } from './ImageModal.types';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
    overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
};

const ImageModal = ({selectedImage, isOpen, onRequestClose}: Props) => {

  return (
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <div>
          <img src={selectedImage.urls.regular} alt={selectedImage.alt_description || 'Without description'} onClick={onRequestClose} />
          <div className={styles.wrapper}>
          <p className={styles.info}>Likes: {selectedImage.likes}</p>
          <p className={styles.info}>Author: {selectedImage.user.name}</p>
        </div>
        </div>
      </Modal>
  );
};

export default ImageModal;