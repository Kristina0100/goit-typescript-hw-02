export type Props = {
    selectedImage: {
        regular: string;
        likes: number;
        alt: string;
        name: string;
    };
    isOpen: boolean;
    onRequestClose:() => void;
};