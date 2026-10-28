import { useEffect } from 'react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageLightbox = ({ src, alt, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Fechar imagem ampliada"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-white/25"
        onClick={onClose}
      >
        &times;
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[95vw] object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
};

export default ImageLightbox;
