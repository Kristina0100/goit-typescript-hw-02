import { ApiImage } from '../../utils/unsplash-api.types';

export type Props = {
    images: ApiImage[];
    onImageClick: (image: ApiImage) => void;
};