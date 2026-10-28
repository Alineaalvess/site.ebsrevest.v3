import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { CONTACT } from '../data/site';
import FormField from './FormField';

type FormData = {
  nomeEmpresa: string;
  email: string;
  telefone: string;
  maquina: string;
  revestimento: string;
  quantidade: string;
  medidas: string;
};

const INITIAL_FORM_DATA: FormData = {
  nomeEmpresa: '',
  email: '',
  telefone: '',
  maquina: '',
  revestimento: '',
  quantidade: '',
  medidas: '',
};

const CONTACT_ITEMS = [
  { label: 'WhatsApp', value: CONTACT.phone, icon: 'fa-brands fa-whatsapp' },
  { label: 'E-mail', value: CONTACT.email, icon: 'fa-solid fa-envelope' },
  { label: 'Localização', value: CONTACT.address, icon: 'fa-solid fa-location-dot' },
];

/** Monta o corpo do e-mail enviado pelo formulário. */
const buildMailBody = (data: FormData): string =>
  [
    `Nome ou Empresa: ${data.nomeEmpresa}`,
    `E-mail: ${data.email}`,
    `Telefone: ${data.telefone}`,
    `Máquina/Modelo: ${data.maquina}`,
    `Tipo de Revestimento: ${data.revestimento}`,
    `Quantidade: ${data.quantidade}`,
    `Medidas: ${data.medidas}`,
  ].join('\n');

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Orçamento/Contato - ${formData.nomeEmpresa}`);
    const body = encodeURIComponent(buildMailBody(formData));

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const fieldProps = (name: keyof FormData) => ({
    name,
    value: formData[name],
    onChange: handleChange,
  });

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Entre em Contato</h2>
              <p className="text-slate-600 mb-10">
                Estamos prontos para atender sua solicitação. Seja para um orçamento rápido ou uma consultoria técnica
                detalhada.
              </p>

              <div className="space-y-6">
                {CONTACT_ITEMS.map(({ label, value, icon }) => (
                  <div key={label} className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <i className={`${icon} text-2xl`} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">{label}</h4>
                      <p className="text-lg font-bold text-slate-900">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <FormField
                  label="Nome ou Empresa"
                  type="text"
                  placeholder="Seu nome ou empresa"
                  autoComplete="organization"
                  {...fieldProps('nomeEmpresa')}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="E-mail"
                    type="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    {...fieldProps('email')}
                  />
                  <FormField
                    label="Telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    autoComplete="tel"
                    {...fieldProps('telefone')}
                  />
                </div>

                <FormField
                  label="Máquina | Modelo"
                  type="text"
                  placeholder="Modelo ou tipo da máquina"
                  {...fieldProps('maquina')}
                />

                <div>
                  <label htmlFor="revestimento" className="block text-sm font-semibold text-slate-700 mb-2">
                    Tipo de Revestimento
                  </label>
                  <select
                    id="revestimento"
                    name="revestimento"
                    value={formData.revestimento}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="" disabled>Selecione o revestimento</option>
                    <option value="Borracha">Borracha</option>
                    <option value="Rilsan">Rilsan</option>
                    <option value="Cromo Liso/Espelhado">Cromo Liso – Espelhado</option>
                    <option value="Cromo Jateado/Fosco">Cromo Jateado – Fosco</option>
                    <option value="P.U. – Poliuretano">P.U. – Poliuretano</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Quantidade"
                    type="number"
                    min={1}
                    placeholder="Quantidade"
                    {...fieldProps('quantidade')}
                  />
                  <FormField
                    label="Medidas"
                    type="text"
                    placeholder="Ex.: comprimento × diâmetro"
                    inputClassName="text-xs"
                    {...fieldProps('medidas')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#003865] hover:bg-blue-900 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-100"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
