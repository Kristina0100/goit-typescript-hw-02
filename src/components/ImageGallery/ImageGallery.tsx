import ImageCard from "../ImageCard/ImageCard";
import { Props } from "./ImageGallery.types";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }: Props) => {
	return (
		<div>
			<ul className={styles.gallery}>
				{images.map((image) => (
					<li key={image.id}>
						<ImageCard
							urls={image.urls}
							alt_description={image.alt_description}
							onClick={() => onImageClick(image)}/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ImageGallery;