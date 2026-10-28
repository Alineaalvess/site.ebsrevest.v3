import { useCallback, useState } from 'react';
import { PRODUCTS } from '../data/site';
import { buildWhatsAppLink } from '../utils/whatsapp';
import ImageLightbox from './ImageLightbox';
import ProductCard from './ProductCard';

interface SelectedImage {
  src: string;
  alt: string;
}

const Products = () => {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const closeImage = useCallback(() => setSelectedImage(null), []);

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Nossas Soluções</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Especialidades em Revestimentos</h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Conheça nossa linha completa de revestimentos técnicos para garantir a performance e durabilidade da sua
            máquina offset.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onImageClick={setSelectedImage} />
          ))}
        </div>

        {selectedImage && <ImageLightbox src={selectedImage.src} alt={selectedImage.alt} onClose={closeImage} />}

        <div className="mt-16 p-8 md:p-12 bg-[#003865] rounded-3xl text-white text-center relative overflow-hidden">
          <div
            className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Fornecemos soluções em revestimentos de cilindros com excelência, inovação e qualidade
            </h4>
            <p className="mb-8 text-blue-100 max-w-2xl mx-auto text-lg">
              Nossos revestimentos são desenvolvidos para alta performance mantendo a dureza estável por mais tempo.
            </p>
            <a
              href={buildWhatsAppLink('Olá! Gostaria de falar com um técnico comercial sobre os revestimentos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-[#003865] font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Falar com Técnico Comercial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
