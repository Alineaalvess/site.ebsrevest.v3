import { ABOUT_FEATURES, ASSETS, COMPANY_NAME } from '../data/site';

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        <div className="lg:w-5/12">
          <div className="relative">
            <img
              src={ASSETS.aboutImage}
              alt="Rolos de impressão offset em processo industrial"
              className="relative z-0 mx-auto w-full max-w-lg -translate-x-4 rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-16 -right-6 z-10 hidden h-40 w-40 flex-col items-center justify-center rounded-full bg-[#003865] text-center text-white shadow-2xl md:flex">
              <span className="block text-4xl font-bold leading-none">10+</span>
              <span className="mt-2 max-w-28 text-sm uppercase leading-tight tracking-wider">Anos de Experiência</span>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Quem Somos</h2>
          <h3 className="text-xl lg:text-2xl xl:text-2xl font-bold text-slate-900 mb-6 leading-tight xl:whitespace-nowrap">
            Especialistas em Revestimento de Cilindros offset e industriais
          </h3>

          <p className="text-slate-600 text-lg mb-8 leading-relaxed text-justify">
            Somos a <span className="font-bold text-[#003865]">{COMPANY_NAME}</span>, atuando há anos no mercado
            nacional, especializada em revestimentos de cilindros para máquinas offset, equipamentos de acabamento gráfico e aplicações industriais. Com anos de experiência no mercado e com uma equipe altamente capacitada, oferecemos soluções que atendem às necessidades de diferentes segmentos, priorizando qualidade, precisão e desempenho.
            Realizamos serviços de revestimento de cilindros e peças industriais, contribuindo para a recuperação dimensional, o aumento da durabilidade e a proteção contra o desgaste, de acordo com as características e exigências de cada aplicação. Atuamos na manutenção corretiva e preventiva de equipamentos, buscando proporcionar maior confiabilidade e eficiência operacional.
            Desenvolvemos soluções para cilindros gráficos e industriais, considerando as necessidades técnicas de cada cliente e as condições de utilização dos equipamentos.
            Nosso maior compromisso é oferecer um atendimento responsável, prazos rigorosos, qualidade técnica e preços justos, construindo relações de confiança e parcerias duradouras.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABOUT_FEATURES.map(({ title, description }) => (
              <div key={title} className="flex items-start space-x-3">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg shrink-0">
                  <i className="fa-solid fa-check text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{title}</h4>
                  <p className="text-slate-500 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
