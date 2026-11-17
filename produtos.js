/* =============================================================
   CABIDE RARO: configuração da loja e lista de produtos
   Edite este arquivo para mudar preços, estoque e o WhatsApp.
   ============================================================= */

window.CR_CONFIG = {
  // Número do WhatsApp com DDI e DDD, só números. Ex.: '5573991234567'
  // Vazio: o botão abre o WhatsApp para a pessoa escolher o contato.
  whatsapp: '5573998200456',

  // Desconto padrão sobre o preço original da marca (0.40 = 40% off).
  // Para um preço específico, preencha "preco" no produto.
  desconto: 0.30,

  // Parcelamento no cartão: máximo de parcelas e até quantas são sem juros.
  // As parcelas sem juros também precisam ser ligadas na conta do Mercado Pago.
  parcelas: 10,
  semJuros: 3,

  // Endereço do servidor de pagamento (Cloudflare Worker). Vazio: a sacola
  // finaliza pelo WhatsApp, como antes.
  api: 'https://cabide-raro-pagamentos.cabide-raro-pagamentos.workers.dev',

  // Último dia da liquidação (aparece na capa com a contagem de dias).
  fimDaPromo: '2026-12-31T23:59:59',

  // Peça que aparece com etiqueta de preço na foto da capa.
  destaque: 'vix-01',

  cidade: 'Teixeira de Freitas, BA'
};

/* Campos de cada produto:
   id, marca, nome, categoria, departamento ('Feminino' | 'Masculino'),
   praia (true para moda praia), tamanhos [[tamanho, quantidade]],
   original (preço da marca), preco (opcional: seu preço de venda), img */
window.CR_PRODUTOS = [
  // FARM
  { id: 'farm-01', marca: 'FARM', nome: 'Calça Ciana Preta', categoria: 'Calças e shorts', departamento: 'Feminino', tamanhos: [['P', 1]], original: 398.00 },
  { id: 'farm-02', marca: 'FARM', nome: 'Blusa Cropped Nadadoras Preta', categoria: 'Blusas e tops', departamento: 'Feminino', tamanhos: [['P', 1], ['G', 1]], original: 249.00 },
  { id: 'farm-03', marca: 'FARM', nome: 'Legging Cós Dobrado Laços', categoria: 'Calças e shorts', departamento: 'Feminino', tamanhos: [['14', 1]], original: 189.00 },
  { id: 'farm-04', marca: 'FARM', nome: 'Macacão Pantalona Flor de Outono', categoria: 'Macacões', departamento: 'Feminino', tamanhos: [['M', 2], ['G', 1]], original: 529.00 },
  { id: 'farm-05', marca: 'FARM', nome: 'Macacão Tule Riviera Off White', categoria: 'Macacões', departamento: 'Feminino', tamanhos: [['P', 1], ['M', 1], ['G', 1]], original: 549.00 },
  { id: 'farm-06', marca: 'FARM', nome: 'Macaquinho Lenço Bandana Jardim', categoria: 'Macacões', departamento: 'Feminino', tamanhos: [['P', 1]], original: 439.90 },
  { id: 'farm-07', marca: 'FARM', nome: 'Short Evasê Jeans', categoria: 'Calças e shorts', departamento: 'Feminino', tamanhos: [['14', 1]], original: 298.00 },
  { id: 'farm-08', marca: 'FARM', nome: 'Top Amarração Vermelho', categoria: 'Blusas e tops', departamento: 'Feminino', tamanhos: [['G', 2]], original: 198.00 },
  { id: 'farm-09', marca: 'FARM', nome: 'Top Caminho das Flores', categoria: 'Blusas e tops', departamento: 'Feminino', tamanhos: [['10', 1]], original: 198.00 },
  { id: 'farm-10', marca: 'FARM', nome: 'Vestido Caminho das Flores Amarelo', categoria: 'Vestidos', departamento: 'Feminino', tamanhos: [['6', 1]], original: 249.00 },
  { id: 'farm-11', marca: 'FARM', nome: 'Vestido Curto Flor de Pássaro Verde', categoria: 'Vestidos', departamento: 'Feminino', tamanhos: [['P', 2], ['M', 4], ['G', 1]], original: 398.00 },
  { id: 'farm-12', marca: 'FARM', nome: 'Vestido Curto Praia Poesia', categoria: 'Vestidos', departamento: 'Feminino', tamanhos: [['M', 1]], original: 298.00 },

  // VIX PAULA HERMANNY
  { id: 'vix-01', marca: 'Vix Paula Hermanny', nome: 'Calça Hazel Off White', categoria: 'Calças e shorts', departamento: 'Feminino', tamanhos: [['38', 2]], original: 1598.00 },
  { id: 'vix-02', marca: 'Vix Paula Hermanny', nome: 'Colete Hazel Off White', categoria: 'Jaquetas e coletes', departamento: 'Feminino', tamanhos: [['M', 1]], original: 998.00 },
  { id: 'vix-03', marca: 'Vix Paula Hermanny', nome: 'Saída Curta Cindy Sizzle', categoria: 'Saídas de praia', departamento: 'Feminino', praia: true, tamanhos: [['P', 1]], original: 479.00 },
  { id: 'vix-04', marca: 'Vix Paula Hermanny', nome: 'Saída Curta Lilou Harvest', categoria: 'Saídas de praia', departamento: 'Feminino', praia: true, tamanhos: [['G', 1]], original: 1198.00 },
  { id: 'vix-05', marca: 'Vix Paula Hermanny', nome: 'Saída Longa Amina Off White', categoria: 'Saídas de praia', departamento: 'Feminino', praia: true, tamanhos: [['P', 1], ['M', 2]], original: 1198.00 },
  { id: 'vix-06', marca: 'Vix Paula Hermanny', nome: 'Saída Longa Lais Black', categoria: 'Saídas de praia', departamento: 'Feminino', praia: true, tamanhos: [['P', 2]], original: 998.00 },
  { id: 'vix-07', marca: 'Vix Paula Hermanny', nome: 'Saída Longa Yumi Seafern', categoria: 'Saídas de praia', departamento: 'Feminino', praia: true, tamanhos: [['P', 1]], original: 909.00 },
  { id: 'vix-08', marca: 'Vix Paula Hermanny', nome: 'Top Cleo Detalhe Clay', categoria: 'Biquínis e tops', departamento: 'Feminino', praia: true, tamanhos: [['G', 1]], original: 1398.00 },
  { id: 'vix-09', marca: 'Vix Paula Hermanny', nome: 'Top Tri Costas Leanne Solstice', categoria: 'Biquínis e tops', departamento: 'Feminino', praia: true, tamanhos: [['G', 1]], original: 449.00 },
  { id: 'vix-10', marca: 'Vix Paula Hermanny', nome: 'Top Tubo Bia Sunset', categoria: 'Biquínis e tops', departamento: 'Feminino', praia: true, tamanhos: [['P', 1]], original: 349.00 },
  { id: 'vix-11', marca: 'Vix Paula Hermanny', nome: 'Vestido Curto Hazel Off White', categoria: 'Vestidos', departamento: 'Feminino', tamanhos: [['40', 1]], original: 1698.00 },
  { id: 'vix-12', marca: 'Vix Paula Hermanny', nome: 'Vestido Manga Longa Etta Detalhe Black', categoria: 'Vestidos', departamento: 'Feminino', tamanhos: [['M', 1]], original: 1798.00 },
  { id: 'vix-13', marca: 'Vix Paula Hermanny', nome: 'Vestido Midi Hazel Blackberry', categoria: 'Vestidos', departamento: 'Feminino', tamanhos: [['38', 1]], original: 1998.00 },

  // DRESS TO
  { id: 'dt-14', marca: 'Dress To', nome: 'Calça Cargo Estampa Xadrez', categoria: 'Calças e shorts', departamento: 'Feminino', tamanhos: [['G', 1]], original: 559.00 },
  { id: 'dt-15', marca: 'Dress To', nome: 'Calça Jeans Barra Ondas', categoria: 'Calças e shorts', departamento: 'Feminino', tamanhos: [['38', 1], ['40', 1], ['42', 1]], original: 559.00 },
  { id: 'dt-16', marca: 'Dress To', nome: 'Calça Jeans Intense Blue', categoria: 'Calças e shorts', departamento: 'Feminino', tamanhos: [['38', 1], ['42', 1]], original: 399.00 },

  // ANIMALE
  { id: 'ani-17', marca: 'Animale', nome: 'Jaqueta de Sarja Chocolate Ecru', categoria: 'Jaquetas e coletes', departamento: 'Feminino', tamanhos: [['M', 1]], original: 1298.00 },
  { id: 'ani-18', marca: 'Animale', nome: 'Saia Jeans Midi Lucidez', categoria: 'Saias', departamento: 'Feminino', tamanhos: [['38', 1]], original: 698.00 },

  // RESERVA (calçados masculinos)
  { id: 'res-01', marca: 'Reserva', nome: 'Mocassim Goatskin Café', categoria: 'Sapatos e mocassins', departamento: 'Masculino', tamanhos: [['44', 1]], original: 1299.00 },
  { id: 'res-02', marca: 'Reserva', nome: 'Mocassim Tratorado Preto', categoria: 'Sapatos e mocassins', departamento: 'Masculino', tamanhos: [['43', 1]], original: 1299.00 },
  { id: 'res-03', marca: 'Reserva', nome: 'Mocassim Pierre Café', categoria: 'Sapatos e mocassins', departamento: 'Masculino', tamanhos: [['39', 1], ['42', 1]], original: 1299.00 },
  { id: 'res-04', marca: 'Reserva', nome: 'Tênis Refine Slip Camurça Rattan', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['42', 1]], original: 799.00 },
  { id: 'res-05', marca: 'Reserva', nome: 'Tênis RSV Astral Off White', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['40', 1]], original: 549.00 },
  { id: 'res-06', marca: 'Reserva', nome: 'Tênis RSV Neo All U Preto e Areia', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['44', 1]], original: 499.00 },
  { id: 'res-07', marca: 'Reserva', nome: 'Tênis RSV R-Osaka Dadshoes Prata', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['38', 1], ['39', 1], ['41', 1]], original: 999.00 },
  { id: 'res-08', marca: 'Reserva', nome: 'Tênis RSV Rover V Preto', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['41', 1]], original: 769.00 },
  { id: 'res-09', marca: 'Reserva', nome: 'Tênis RSV Rover V Gelo', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['43', 1]], original: 769.00 },
  { id: 'res-10', marca: 'Reserva', nome: 'Tênis RSV Type-R Neo Ocre e Preto', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['44', 1]], original: 599.00 },
  { id: 'res-11', marca: 'Reserva', nome: 'Tênis RSV Type-R Neo Preto', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['41', 1]], original: 599.00 },
  { id: 'res-12', marca: 'Reserva', nome: 'Sandália Santorini Camurça Rattan', categoria: 'Sandálias', departamento: 'Masculino', tamanhos: [['42', 1], ['43', 1], ['44', 1]], original: 699.00 },
  { id: 'res-13', marca: 'Reserva', nome: 'Sapato Sider Couro Preto', categoria: 'Sapatos e mocassins', departamento: 'Masculino', tamanhos: [['42', 1]], original: 899.00 },
  { id: 'res-14', marca: 'Reserva', nome: 'Tênis Vila Camurça Off White', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['43', 1]], original: 899.00 },
  { id: 'res-15', marca: 'Reserva', nome: 'Tênis Vila Camurça Rattan', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['43', 1]], original: 899.00 },
  { id: 'res-16', marca: 'Reserva', nome: 'Tênis Vila Knit Preto', categoria: 'Tênis', departamento: 'Masculino', tamanhos: [['41', 1], ['44', 1]], original: 799.00 },
];

/* Quantas fotos cada peça tem em img/produtos (id.jpg, id-2.jpg, id-3.jpg...).
   Para adicionar uma foto, salve como id-3.jpg e aumente o número aqui. */
window.CR_FOTOS = {
  'farm-03': 2, 'farm-09': 2, 'farm-10': 2,
  'res-05': 2, 'res-07': 2, 'res-08': 2, 'res-09': 2, 'res-10': 2, 'res-11': 2, 'res-16': 2,
  'vix-01': 2, 'vix-02': 2, 'vix-03': 2, 'vix-04': 2, 'vix-05': 2, 'vix-06': 2, 'vix-07': 2,
  'vix-08': 2, 'vix-09': 2, 'vix-10': 2, 'vix-11': 2, 'vix-12': 2, 'vix-13': 2
};
