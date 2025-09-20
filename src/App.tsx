import React from 'react';
import { CheckCircle, Clock, BookOpen, Target, Smartphone, Star, Shield, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-800">ENEM Pro</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block mb-6 font-semibold text-sm">
            🚀 ÚLTIMA CHANCE ANTES DO ENEM!
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Acelere sua preparação<br />
            <span className="text-blue-600">para o ENEM!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Revise os principais conteúdos em tempo recorde e<br />
            <strong>aumente suas chances de aprovação.</strong>
          </p>

          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-2 border-blue-200">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <span className="text-gray-500 text-lg line-through block">De R$ 79,90</span>
                <span className="text-5xl font-black text-green-600">R$ 34,90</span>
                <span className="text-gray-600 text-sm block">Oferta limitada</span>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto">
                👉 QUERO MINHA APOSTILA AGORA!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Presentation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A apostila que vai <span className="text-blue-600">turbinar</span> seus estudos
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chega de perder tempo com conteúdo extenso e confuso! Nossa apostila digital traz 
                <strong> resumos rápidos, claros e objetivos</strong> de todos os assuntos que mais caem no ENEM.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Linguagem jovem, prática e direta ao ponto. Perfeita para quem precisa revisar tudo 
                de forma inteligente, mesmo com pouco tempo até a prova!
              </p>

              <div className="flex items-center gap-4 mb-6">
                <Zap className="h-6 w-6 text-yellow-500" />
                <span className="font-semibold text-gray-800">Download instantâneo após o pagamento</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6">
                  <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                    Apostila Digital
                  </h3>
                  <h4 className="text-xl font-semibold text-blue-600 text-center mb-4">
                    Aceleração ENEM
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Guia rápido e objetivo para revisar antes da prova</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Todas as matérias do ENEM</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Dicas de redação</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Por que escolher nossa <span className="text-blue-600">Apostila Digital?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Economia de Tempo</h3>
              <p className="text-gray-600">Resumos prontos que economizam horas de estudo. Foque no que realmente importa!</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conteúdo Atualizado</h3>
              <p className="text-gray-600">Temas que mais caem no ENEM, baseados nas últimas provas e tendências.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Revisão Objetiva</h3>
              <p className="text-gray-600">Direto ao ponto! Sem enrolação, apenas o essencial para sua aprovação.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Smartphone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dicas Práticas</h3>
              <p className="text-gray-600">Estratégias para a prova e redação que fazem a diferença na hora H.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            O que nossos estudantes estão falando
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Consegui revisar tudo em 2 semanas! A linguagem é super clara e os resumos são perfeitos."
              </p>
              <div className="font-semibold text-gray-900">Maria Silva, 17 anos</div>
              <div className="text-sm text-gray-600">Aprovada em Medicina</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "As dicas de redação foram fundamentais! Tirei 920 na redação seguindo o método da apostila."
              </p>
              <div className="font-semibold text-gray-900">João Pedro, 18 anos</div>
              <div className="text-sm text-gray-600">Aprovado em Engenharia</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Melhor investimento que fiz! Por R$ 34,90 consegui todo o conteúdo organizado e prático."
              </p>
              <div className="font-semibold text-gray-900">Ana Beatriz, 17 anos</div>
              <div className="text-sm text-gray-600">Aprovada em Direito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estude agora, mesmo com pouco tempo até a prova!
            </h2>
            
            <p className="text-xl text-gray-700 mb-6">
              Material acessível, simples e direto ao ponto.<br />
              <strong>Sua aprovação está a um clique de distância!</strong>
            </p>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 text-left">
              <p className="text-gray-800">
                <strong>✅ Garantia de 7 dias:</strong> Se não ficar satisfeito, devolvemos 100% do seu dinheiro!
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <span className="text-4xl font-black text-green-600">R$ 34,90</span>
                <span className="block text-gray-600">Pagamento único</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-800">+</span>
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-gray-800">Download Instantâneo</span>
                <span className="block text-gray-600">Acesso imediato</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto mb-4">
              👉 QUERO MINHA APOSTILA POR APENAS R$ 34,90
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              <span>Compra 100% segura e protegida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">ENEM Pro</span>
          </div>
          <p className="text-gray-400">
            © 2025 ENEM Pro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;