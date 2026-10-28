import type { Product } from '../types';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onImageClick: (image: { src: string; alt: string }) => void;
}

const ProductCard = ({ product, onImageClick }: ProductCardProps) => {
  const { name, description, image, tag, imageFit = 'cover', highlighted } = product;

  const openImage = () => onImageClick({ src: image, alt: name });

  const imageClass =
    imageFit === 'contain'
      ? 'object-contain'
      : 'object-cover object-center transition-transform duration-500 group-hover:scale-105';

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden bg-slate-100 md:h-64">
        <img
          src={image}
          alt={name}
          loading="lazy"
          role="button"
          tabIndex={0}
          onClick={openImage}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              openImage();
            }
          }}
          className={`h-full w-full cursor-zoom-in ${imageClass}`}
        />
        <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
          {tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h4
          className={`mb-3 ${product.id === 5 ? 'whitespace-nowrap text-base' : 'text-lg'} font-bold leading-tight transition-colors ${
            highlighted ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
          }`}
        >
          {name}
        </h4>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>
        <a
          href={buildWhatsAppLink(`Olá! Gostaria de saber mais sobre o ${name}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all underline decoration-blue-200 underline-offset-4"
        >
          Saiba Mais <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
