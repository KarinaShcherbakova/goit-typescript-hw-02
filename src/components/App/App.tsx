import { useState, useEffect } from 'react';
import { fetchImages, ImageData } from '../../services/api';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import styles from './App.module.css';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [noResults, setNoResults] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setNoResults(false);

      try {
        const data = await fetchImages(query, page);
        if (data.results.length === 0 && page === 1) {
          setNoResults(true);
        }

        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
        }
      } catch (error: any) {
        setError(`Failed to fetch images. Please try again later: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (query: string) => {
    setQuery(query);
    setPage(1);
    setNoResults(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {noResults && !loading && <ErrorMessage message="No results found for your search." />}
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <div className={styles.loadMoreBtnWrapper}>
          <LoadMoreBtn onClick={handleLoadMore} />
        </div>
      )}
      <ImageModal image={selectedImage} onClose={handleCloseModal} />
      <Toaster />
    </div>
  );
};

export default App;