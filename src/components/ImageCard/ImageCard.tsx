import { Props } from './ImageCard.types';

const ImageCard = ({ urls, alt_description, onClick }: Props) => {
  return (
    <div>
      <div>
        <img src={urls.small || ''}
          alt={alt_description || 'Without description'}
          onClick={onClick}/>
      </div>
    </div>
  );
};
  
export default ImageCard;