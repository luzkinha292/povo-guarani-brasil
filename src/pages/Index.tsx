import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import TimelineItem from '@/components/TimelineItem';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { 
  Globe, 
  Languages, 
  Book, 
  Landmark, 
  Leaf, 
  Heart, 
  Flag, 
  Stethoscope,
  SproutIcon
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection />
      
      <main className="flex-grow" id="content">
        {/* Geografia */}
        <section id="geografia" className="py-20 bg-white section-content">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Território Guarani" 
              subtitle="A vasta extensão territorial onde vivem os povos Guarani"
              icon={<Globe className="w-8 h-8" />}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4 text-lg">
                  O território tradicional Guarani se estende por uma ampla região da América do Sul, abrangendo partes do Brasil, 
                  Paraguai, Argentina e Bolívia. No Brasil, os Guarani estão presentes principalmente nos estados do Rio Grande do Sul, 
                  Santa Catarina, Paraná, São Paulo, Rio de Janeiro, Espírito Santo e Mato Grosso do Sul.
                </p>
                <p className="mb-4 text-lg">
                  Historicamente, o território Guarani era consideravelmente maior, estendendo-se por vastas áreas de mata atlântica 
                  e florestas subtropicais. Ao longo dos séculos, devido à colonização e expansão das fronteiras agrícolas, 
                  este território foi drasticamente reduzido.
                </p>
                <p className="text-lg">
                  Existem atualmente três subgrupos principais de Guarani no Brasil:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-2 text-lg">
                  <li>Guarani Mbyá - Presentes principalmente nas regiões litorâneas do sul e sudeste</li>
                  <li>Guarani Kaiowá - Concentrados no Mato Grosso do Sul</li>
                  <li>Guarani Ñandeva (ou Avá-Guarani) - Habitam principalmente o Mato Grosso do Sul, Paraná e São Paulo</li>
                </ul>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/forest-bg.jpg" 
                  alt="Território Guarani" 
                  className="w-full h-auto rounded-lg"
                />
                <p className="bg-guarani-light p-3 text-sm text-guarani-dark/70 text-center">
                  O bioma Mata Atlântica é parte essencial do território tradicional Guarani
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Língua */}
        <section id="lingua" className="py-20 bg-guarani-light section-content">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Língua Guarani" 
              subtitle="Um dos idiomas indígenas mais falados na América do Sul"
              icon={<Languages className="w-8 h-8" />}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-guarani-green">Características</h3>
                  <p className="mb-4">
                    O Guarani pertence à família linguística Tupi-Guarani e é falado por aproximadamente 
                    6 milhões de pessoas na América do Sul. No Paraguai, é uma das línguas oficiais 
                    ao lado do espanhol.
                  </p>
                  <p>
                    A língua Guarani é rica em expressões relacionadas à natureza, espiritualidade 
                    e vida comunitária, refletindo a profunda conexão do povo com o ambiente natural.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-guarani-green">Dialetos</h3>
                  <p className="mb-4">
                    Existem variações dialetais entre os diferentes grupos Guarani:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Mbyá</li>
                    <li>Kaiowá (Pai Tavyterã)</li>
                    <li>Ñandeva (Avá)</li>
                    <li>Guarani Paraguaio</li>
                  </ul>
                  <p className="mt-4">
                    Apesar das diferenças, há compreensão mútua entre falantes dos diferentes dialetos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-guarani-green">Importância</h3>
                  <p className="mb-4">
                    A preservação da língua Guarani é essencial para a manutenção da identidade cultural e dos 
                    conhecimentos tradicionais do povo.
                  </p>
                  <p>
                    Atualmente, existem esforços de revitalização linguística com a criação de escolas 
                    bilíngues, materiais didáticos e inclusão do ensino da língua Guarani em algumas 
                    comunidades e instituições educacionais.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center text-guarani-green">Expressões em Guarani</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-3 border border-guarani-gold/30 rounded-md">
                  <p className="font-bold">Aguyjevete</p>
                  <p>Significa "obrigado" ou "gratidão"</p>
                </div>
                <div className="p-3 border border-guarani-gold/30 rounded-md">
                  <p className="font-bold">Yvypora</p>
                  <p>Significa "povo da terra"</p>
                </div>
                <div className="p-3 border border-guarani-gold/30 rounded-md">
                  <p className="font-bold">Tekoa</p>
                  <p>Local de vida e cultura Guarani</p>
                </div>
                <div className="p-3 border border-guarani-gold/30 rounded-md">
                  <p className="font-bold">Nhanderú</p>
                  <p>Nosso pai, referência à divindade</p>
                </div>
                <div className="p-3 border border-guarani-gold/30 rounded-md">
                  <p className="font-bold">Ka'aguy</p>
                  <p>Floresta, mata</p>
                </div>
                <div className="p-3 border border-guarani-gold/30 rounded-md">
                  <p className="font-bold">Yvy Marãe'ỹ</p>
                  <p>Terra sem males (paraíso mítico)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* História e Cultura */}
        <section id="historia" className="py-20 bg-white section-content">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="História e Cultura" 
              subtitle="A trajetória milenar do povo Guarani"
              icon={<Book className="w-8 h-8" />}
            />
            
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold mb-6 text-guarani-green">Linha do Tempo</h3>
                <div className="space-y-6">
                  <TimelineItem 
                    year="Pré-1500"
                    title="Ocupação Tradicional"
                    description="Os povos Guarani já ocupavam vastos territórios na América do Sul, desenvolvendo agricultura, cerâmica e organização social complexa."
                  />
                  <TimelineItem 
                    year="Séc. XVI-XVII"
                    title="Contato e Missões"
                    description="Período de contato com europeus e estabelecimento das missões jesuíticas, que reuniram milhares de indígenas Guarani."
                  />
                  <TimelineItem 
                    year="1750-1756"
                    title="Guerra Guaranítica"
                    description="Conflito decorrente do Tratado de Madrid, que determinou a transferência de territórios entre Portugal e Espanha, afetando as missões jesuíticas."
                  />
                  <TimelineItem 
                    year="Séc. XIX-XX"
                    title="Expropriação de Terras"
                    description="Perda massiva de territórios tradicionais devido à expansão agrícola, construção de ferrovias e crescimento urbano."
                  />
                  <TimelineItem 
                    year="1988"
                    title="Constituição Federal"
                    description="Reconhecimento dos direitos territoriais e culturais dos povos indígenas na Constituição Brasileira."
                  />
                  <TimelineItem 
                    year="Séc. XXI"
                    title="Luta por Reconhecimento"
                    description="Movimentos pela demarcação de terras indígenas, preservação cultural e ambiental, e implementação de políticas públicas específicas."
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-6 text-guarani-green">Aspectos Culturais</h3>
                
                <div className="grid grid-cols-1 gap-8">
                  <Card className="bg-guarani-light">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-3">Religiosidade e Espiritualidade</h4>
                      <p className="mb-4">
                        A espiritualidade Guarani é baseada na crença em diversos seres sobrenaturais e na busca pela 
                        "Terra sem Males" (Yvy Marãe'ỹ), um lugar sagrado de abundância e imortalidade.
                      </p>
                      <p>
                        O xamanismo é central na cultura Guarani, com líderes espirituais (pajés ou karaí) conduzindo 
                        rituais de cura, orientação e conexão com o mundo espiritual. A Casa de Reza (Opy) é o local 
                        sagrado onde se realizam cerimônias religiosas e encontros comunitários.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-guarani-light">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-3">Organização Social</h4>
                        <p>
                          A família extensa (grupo de parentesco) é a base da organização social Guarani. 
                          A liderança tradicional é exercida pelos chefes de família extensa e pelos líderes 
                          religiosos, que orientam a comunidade em decisões importantes.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-guarani-light">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-3">Arte e Artesanato</h4>
                        <p>
                          O artesanato Guarani inclui cestaria, esculturas em madeira (principalmente animais), 
                          instrumentos musicais como o mbaraka (chocalho) e o takuapu (bastão de ritmo), além 
                          de arcos e flechas ornamentais.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card className="bg-guarani-light">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-3">Atividades Tradicionais e Subsistência</h4>
                      <p className="mb-4">
                        A agricultura tradicional Guarani é baseada no cultivo de variedades de milho, mandioca, 
                        batata-doce, amendoim e várias frutas. O sistema de roça é praticado com períodos de descanso 
                        da terra (coivara).
                      </p>
                      <p>
                        Outras atividades importantes incluem a caça, pesca, coleta de plantas medicinais, mel e 
                        frutos silvestres. Com a redução dos territórios, muitas comunidades enfrentam dificuldades 
                        para manter essas práticas tradicionais.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contribuições */}
        <section id="contribuicoes" className="py-20 bg-guarani-light section-content">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Contribuições à Sociedade Brasileira" 
              subtitle="O legado Guarani na formação da identidade e desenvolvimento do Brasil"
              icon={<Landmark className="w-8 h-8" />}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <FeatureCard 
                icon={<SproutIcon className="w-6 h-6" />}
                title="Agricultura e Alimentação"
                description="Os Guarani contribuíram com o conhecimento de diversas plantas cultiváveis, técnicas de plantio e preparo de alimentos que hoje fazem parte da culinária brasileira, como a mandioca e seus derivados, o milho e o mate (erva-mate)."
              />
              
              <FeatureCard 
                icon={<Stethoscope className="w-6 h-6" />}
                title="Medicina Tradicional"
                description="O vasto conhecimento sobre plantas medicinais acumulado pelos Guarani influenciou a medicina popular brasileira. Muitas plantas utilizadas tradicionalmente pelos Guarani foram incorporadas à farmacologia moderna."
              />
              
              <FeatureCard 
                icon={<Leaf className="w-6 h-6" />}
                title="Preservação Ambiental"
                description="O modo de vida sustentável dos Guarani, baseado na harmonia com a natureza, serve como modelo para práticas de conservação ambiental. Territórios indígenas demarcados têm demonstrado ser barreiras efetivas contra o desmatamento."
              />
            </div>
            
            <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center text-guarani-green">Influência Cultural</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-guarani-brown">Linguística</h4>
                  <p className="mb-6">
                    Centenas de palavras de origem Guarani foram incorporadas ao português brasileiro, 
                    especialmente nomes de lugares, plantas e animais. Exemplos incluem capivara, 
                    mandioca, abacaxi, jaguar, Paraná, Iguaçu, entre outros.
                  </p>
                  
                  <h4 className="text-lg font-bold mb-3 text-guarani-brown">Patrimônio Cultural</h4>
                  <p>
                    Lendas, mitos e narrativas Guarani enriqueceram o folclore e a cultura popular 
                    brasileira. Figuras como o curupira e a iara têm raízes nas tradições indígenas 
                    e Guarani. A música e dança Guarani também influenciaram manifestações culturais regionais.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-3 text-guarani-brown">Conhecimento Ecológico</h4>
                  <p className="mb-6">
                    Os Guarani desenvolveram um profundo conhecimento sobre os ecossistemas da 
                    Mata Atlântica e outras regiões que habitaram, identificando ciclos naturais, 
                    comportamento animal e propriedades de plantas que têm contribuído para estudos 
                    científicos contemporâneos.
                  </p>
                  
                  <h4 className="text-lg font-bold mb-3 text-guarani-brown">Práticas Sustentáveis</h4>
                  <p>
                    Técnicas tradicionais de manejo florestal, sistemas agroflorestais e métodos 
                    de cultivo em harmonia com o meio ambiente desenvolvidos pelos Guarani têm 
                    inspirado práticas agrícolas sustentáveis modernas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desafios e Direitos */}
        <section id="direitos" className="py-20 bg-white section-content">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Desafios Atuais e Direitos" 
              subtitle="A luta contemporânea do povo Guarani pelo reconhecimento e dignidade"
              icon={<Flag className="w-8 h-8" />}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-guarani-green">Principais Desafios</h3>
                
                <div className="space-y-6">
                  <div className="p-4 border-l-4 border-guarani-brown bg-guarani-light">
                    <h4 className="text-lg font-bold mb-2">Questão Fundiária</h4>
                    <p>
                      A demarcação de terras indígenas é um dos desafios mais urgentes. Muitas comunidades 
                      Guarani vivem em pequenas áreas ou acampamentos à beira de estradas, aguardando a 
                      regularização de seus territórios tradicionais.
                    </p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-guarani-brown bg-guarani-light">
                    <h4 className="text-lg font-bold mb-2">Segurança Alimentar</h4>
                    <p>
                      A perda de territórios tradicionais compromete as práticas de subsistência, gerando 
                      problemas de segurança alimentar e dependência de assistência externa.
                    </p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-guarani-brown bg-guarani-light">
                    <h4 className="text-lg font-bold mb-2">Preconceito e Discriminação</h4>
                    <p>
                      Os Guarani enfrentam preconceito e discriminação em diversos contextos sociais, o que 
                      dificulta o acesso a direitos básicos e serviços públicos.
                    </p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-guarani-brown bg-guarani-light">
                    <h4 className="text-lg font-bold mb-2">Ameaças Ambientais</h4>
                    <p>
                      Desmatamento, poluição de rios e expansão do agronegócio ameaçam os territórios Guarani 
                      e comprometem sua sustentabilidade.
                    </p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-guarani-brown bg-guarani-light">
                    <h4 className="text-lg font-bold mb-2">Acesso à Saúde e Educação</h4>
                    <p>
                      Apesar dos avanços nas políticas públicas, muitas comunidades ainda enfrentam dificuldades 
                      no acesso a serviços de saúde e educação culturalmente adequados.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-guarani-green">Direitos na Legislação Brasileira</h3>
                
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4 text-guarani-brown">Constituição Federal de 1988</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold">Artigo 231</p>
                        <p>
                          "São reconhecidos aos índios sua organização social, costumes, línguas, crenças e tradições, 
                          e os direitos originários sobre as terras que tradicionalmente ocupam, competindo à União 
                          demarcá-las, proteger e fazer respeitar todos os seus bens."
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-bold">Artigo 232</p>
                        <p>
                          "Os índios, suas comunidades e organizações são partes legítimas para ingressar em juízo em 
                          defesa de seus direitos e interesses, intervindo o Ministério Público em todos os atos do processo."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <div className="p-4 border border-guarani-gold/30 rounded-lg">
                    <h4 className="text-lg font-bold mb-2">Convenção 169 da OIT</h4>
                    <p>
                      Ratificada pelo Brasil em 2002, garante o direito à consulta prévia, livre e informada sobre 
                      medidas legislativas ou administrativas que afetem povos indígenas.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-guarani-gold/30 rounded-lg">
                    <h4 className="text-lg font-bold mb-2">Estatuto do Índio (Lei 6.001/1973)</h4>
                    <p>
                      Embora anterior à Constituição e com disposições controversas, ainda regula aspectos da 
                      relação entre o Estado e os povos indígenas.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-guarani-gold/30 rounded-lg">
                    <h4 className="text-lg font-bold mb-2">Declaração da ONU sobre Direitos dos Povos Indígenas</h4>
                    <p>
                      Adotada pelo Brasil em 2007, estabelece padrões mínimos para o reconhecimento, proteção 
                      e promoção dos direitos dos povos indígenas.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-guarani-gold/30 rounded-lg">
                    <h4 className="text-lg font-bold mb-2">Legislação Educacional</h4>
                    <p>
                      A Lei de Diretrizes e Bases da Educação (LDB) garante educação escolar bilíngue e 
                      intercultural aos povos indígenas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Separator className="bg-guarani-gold/30" />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-guarani-dark">Saiba Mais e Ajude</h2>
            <p className="max-w-3xl mx-auto mb-8 text-lg">
              Conheça mais sobre os Guarani, suas comunidades e suas lutas. Apoie organizações 
              que trabalham pela proteção dos direitos indígenas e preservação cultural.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <Book className="w-12 h-12 text-guarani-green mb-4" />
                  <h3 className="text-xl font-bold mb-2">Educação</h3>
                  <p>
                    Apoie projetos educacionais nas comunidades Guarani e iniciativas de preservação linguística.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <Leaf className="w-12 h-12 text-guarani-green mb-4" />
                  <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
                  <p>
                    Colabore com projetos de recuperação ambiental e práticas sustentáveis em territórios Guarani.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <Heart className="w-12 h-12 text-guarani-green mb-4" />
                  <h3 className="text-xl font-bold mb-2">Solidariedade</h3>
                  <p>
                    Apoie campanhas pela garantia dos direitos territoriais e dignidade do povo Guarani.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
