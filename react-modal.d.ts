declare module 'react-modal' {
    import { ReactNode } from 'react';
  
    interface ModalProps {
      isOpen: boolean;
      onRequestClose?: () => void;
      className?: string | { base: string; afterOpen: string; beforeClose: string };
      overlayClassName?: string | { base: string; afterOpen: string; beforeClose: string };
      closeTimeoutMS?: number;
      appElement?: HTMLElement | null;
      children?: ReactNode;
      style?: {
        content?: React.CSSProperties;
        overlay?: React.CSSProperties;
      };
      portalClassName?: string;
      bodyOpenClassName?: string;
      htmlOpenClassName?: string;
      ariaHideApp?: boolean;
    }
  
    export default class Modal extends React.Component<ModalProps> {
      static setAppElement(element: string | HTMLElement): void;
    }
  }