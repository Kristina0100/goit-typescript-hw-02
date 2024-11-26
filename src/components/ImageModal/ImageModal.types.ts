import { ApiImage } from "../../utils/unsplash-api.types";

export type Props = {
    selectedImage: ApiImage;
    isOpen: boolean;
    onRequestClose:() => void;
};