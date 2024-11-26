import { useState, useEffect } from 'react';
import { fetchImagesWithQuery } from '../../utils/unsplash-api';
import { ApiImage, ApiResponse } from '../../utils/unsplash-api.types';
import Modal from 'react-modal';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

Modal.setAppElement('#root'); 

function App() {

  const [images, setImages] = useState<ApiImage[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ApiImage | null>(null);

    const onSubmit = (query: string) => {
      setQuery(query);
      setPage(1);
      setImages([]); 
  };

  useEffect(() => {
    if (!query) return;

    const fetchImagesByQuery = async () => {
      try {
        setLoading(true);
        const data: ApiResponse = await fetchImagesWithQuery(query, page); 
        setImages((prevImages) =>
          page === 1 ? data.results : [...(prevImages || []), ...data.results]
        );
        setTotalPages(data.total_pages);
      } catch (error: unknown) {
          if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Unknown error');
          }
        } finally {
          setLoading(false);
        }
      };
    fetchImagesByQuery ();
  }, [query, page]);

const loadMore = () => {
  if (page < totalPages) {
    setPage((prevPage) => prevPage + 1);
  }
  };
  
const openModal = (image: ApiImage) => {
  if (!isModalOpen) { 
    setSelectedImage(image);
    setIsModalOpen(true);
  }
};

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {images !== null && <ImageGallery images={images}
     onImageClick={openModal}/>}
      {loading && <Loader />}
      {error && <ErrorMessage error={error}/>}
      {images !== null && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onLoad={loadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          selectedImage={selectedImage}
        />
      )}
    </>
  )
};

export default App;


