export interface StockTemplate {
  id: number;
  title: string;
  category: string;
  price: string;
  liveUrl: string;
}

export const stockTemplates: StockTemplate[] = [
  { id: 1, title: "Clínica Odontológica", category: "Saúde / Odonto", price: "R$ 39,90", liveUrl: "https://consultorio-odontologico-ayv9.vercel.app/" },
  { id: 2, title: "Infoprodutor / Consultor", category: "Infoprodutos", price: "R$ 44,90", liveUrl: "https://consultorio-odontologico-6o6y.vercel.app/" },
  { id: 3, title: "Oficina Mecânica", category: "Serviços Locais", price: "R$ 39,90", liveUrl: "https://oficina-mecanica-theta.vercel.app/" },
  { id: 4, title: "Restaurante Premium", category: "Alimentação", price: "R$ 49,90", liveUrl: "https://restaurante-zeta-ebon.vercel.app/" },
  { id: 5, title: "Salão de Beleza", category: "Beleza e Estética", price: "R$ 34,90", liveUrl: "https://salao-beleza-g9so.vercel.app/" },
  { id: 6, title: "Petshop e Veterinária", category: "Pets", price: "R$ 39,90", liveUrl: "https://petshop-lyart-ten.vercel.app/" },
  { id: 7, title: "Loja de Roupas", category: "E-Commerce", price: "R$ 49,90", liveUrl: "https://loja-roupa-pi.vercel.app/" },
  { id: 8, title: "Escola de Idiomas", category: "Educação", price: "R$ 44,90", liveUrl: "https://escola-idiomas-orcin.vercel.app/" },
  { id: 9, title: "Clínica de Estética", category: "Beleza e Estética", price: "R$ 39,90", liveUrl: "https://clinica-estetica-xi.vercel.app/" },
  { id: 10, title: "Nutricionista / Médica", category: "Saúde Integrativa", price: "R$ 39,90", liveUrl: "https://clinica-medica-beige.vercel.app/" },
  { id: 11, title: "Escritório de Advocacia", category: "Serviços Jurídicos", price: "R$ 49,90", liveUrl: "https://advocacia-theta.vercel.app/" },
  { id: 12, title: "Doceria / Confeitaria", category: "Alimentação", price: "R$ 34,90", liveUrl: "https://doceria-six.vercel.app/" },
  { id: 13, title: "Academia / CrossFit", category: "Fitness", price: "R$ 44,90", liveUrl: "https://academia-psi-lake.vercel.app/" },
  { id: 14, title: "Imobiliária", category: "Imóveis", price: "R$ 49,90", liveUrl: "https://imobiliaria-seven-kappa.vercel.app/" },
];
