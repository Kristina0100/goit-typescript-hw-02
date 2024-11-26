import { UnsplashImage } from '../../utils/unsplash-api';

export type Props = {
    images: UnsplashImage[];
    onImageClick: (image: UnsplashImage) => void;
};