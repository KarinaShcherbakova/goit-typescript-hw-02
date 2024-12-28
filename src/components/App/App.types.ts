import { ImageData } from '../../services/api';

export interface AppState {
  images: ImageData[];
  loading: boolean;
  error: string | null;
  query: string;
  page: number;
  selectedImage: ImageData | null;
  noResults: boolean;
}

export interface AppProps {}

export interface HandleSearchProps {
  query: string;
}

export interface HandleImageClickProps {
  image: ImageData;
}

export interface HandleCloseModalProps {
  onClose: () => void;
}

export interface FetchDataProps {
  query: string;
  page: number;
}

export interface FetchDataResponse {
  results: ImageData[];
}