
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-guarani-green text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Povo Guarani</h3>
            <p className="text-white/80">
              Este site foi criado com o objetivo de divulgar informações sobre o povo Guarani 
              e sua importância na sociedade brasileira.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Referências</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="https://pib.socioambiental.org/pt/Povo:Guarani" className="hover:underline" target="_blank" rel="noopener noreferrer">Instituto Socioambiental</a></li>
              <li><a href="https://www.funai.gov.br/" className="hover:underline" target="_blank" rel="noopener noreferrer">FUNAI</a></li>
              <li><a href="https://www.museudoindio.gov.br/" className="hover:underline" target="_blank" rel="noopener noreferrer">Museu do Índio</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-white/80">
              Para mais informações, sugestões ou correções, entre em contato conosco.
            </p>
            <p className="text-white/80 mt-2">
              Email: info@povoguarani.org
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Povo Guarani Brasil - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
