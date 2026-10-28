import type { ContactInfo, Feature, NavLink, Product, SocialLink } from '../types';

export const COMPANY_NAME = 'EBS REVEST';

export const CONTACT: ContactInfo = {
  phone: '(11) 94715-9836 / 98304-5061',
  whatsapp: '5511947159836',
  email: 'comercial@ebsrevest.com.br',
  address: 'São Paulo, SP | Atendemos todo o Brasil',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#home' },
  { label: 'Quem Somos', href: '#about' },
  { label: 'Produtos', href: '#products' },
  { label: 'Contato', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ebsrevest/',
    icon: 'fa-brands fa-instagram',
    hoverClass: 'hover:bg-pink-600',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/EBSREVEST',
    icon: 'fa-brands fa-facebook-f',
    hoverClass: 'hover:bg-[#1877f2]',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ebs-revestimentos/',
    icon: 'fa-brands fa-linkedin-in',
    hoverClass: 'hover:bg-[#0077b5]',
  },
];

export const ABOUT_FEATURES: Feature[] = [
  { title: 'Qualidade Garantida', description: 'Matéria-prima especializada e processos rigorosos.' },
  { title: 'Entrega Ágil', description: 'Logística otimizada e eficaz.' },
  { title: 'Tecnologia', description: 'Fórmulas exclusivas para cada aplicação.' },
  { title: 'Suporte Técnico', description: 'Equipe especializada para consultoria.' },
];

/** Produtos na ordem em que são exibidos na página. */
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Revestimento em Borracha',
    description:
      'Ideal para sistemas de tintagem, oferecendo alta resistência e fabricado em variados tipos: Nitrílica (NBR), EPDM (para tintas UV) ou Silicone.',
    image: '/assets/images/rolo-borracha.webp',
    tag: 'Alta Resistência',
  },
  {
    id: 2,
    name: 'Cromo Duro Jateado ou Fosco',
    description:
      'Revestimento essencial na impressão offset no sistema de entintagem e molha. Projetado para oferecer alta resistência mecânica, combinada com uma superfície que facilita o controle de fluidos.',
    image: '/assets/images/cromo-jateado.webp',
    tag: 'Performance',
  },
  {
    id: 3,
    name: 'Cromo Duro Espelhado',
    description:
      'Máxima durabilidade e resistência à abrasão para processos de alta velocidade e compressão constante, trazendo qualidade e nitidez para a imagem impressa.',
    image: '/assets/images/cromo-duro-espelhado.webp',
    imageFit: 'contain',
    tag: 'Precisão',
  },
  {
    id: 4,
    name: 'Revestimento em Rilsan®',
    description:
      'Matéria-prima especial à base de poliamida, geralmente utilizada em sistemas de distribuição, intermediários e dosadores, com alta resistência ao desgaste e a produtos químicos.',
    image: '/assets/images/rolo-rilsan.webp',
    tag: 'Especialidades',
  },
  {
    id: 5,
    name: 'Revestimento em P.U. – Poliuretano',
    description:
      'Rolos para máquinas de dobra de acabamento gráfico, com revestimento em poliuretano de alta resistência ao desgaste, proporcionando durabilidade, desempenho e precisão nos processos gráficos.',
    image: '/assets/images/rolo-dobradeira-pu.webp',
    imageFit: 'contain',
    tag: 'Durabilidade',
  },
  {
    id: 6,
    name: 'Roldanas em P.U. – Poliuretano',
    description:
      'Roldanas em poliuretano de alta performance, ideais para máquinas de acabamento gráfico. Oferecem excelente resistência ao desgaste e precisão, garantindo eficiência e ótimo desempenho nos processos industriais em diversos segmentos.',
    image: '/assets/images/roldanas-pu.webp',
    imageFit: 'contain',
    tag: 'Estabilidade',
  },
];

export const ASSETS = {
  heroVideo: '/assets/hero-video.mp4',
  heroPoster: '/assets/images/hero-poster.webp',
  aboutImage: '/assets/images/sobre-rolos-offset.jpeg',
  backgroundTrack: '/assets/background-track.mp3',
} as const;
