import { MessageCircle, Target, FileEdit, Youtube, TrendingUp, Briefcase, ShieldCheck, BadgeCheck, ChevronRight } from 'lucide-react';
import './index.css';

function App() {
  const links = [
    {
      id: 1,
      icon: <MessageCircle size={20} />,
      title: 'Fale Comigo no WhatsApp',
      subtitle: 'Tire dúvidas ou solicite um orçamento',
      url: '#'
    },
    {
      id: 2,
      icon: <Target size={20} />,
      title: 'Leads Qualificados para Advogados',
      subtitle: 'Descubra como gerar mais consultas todos os dias com tráfego pago',
      url: '#'
    },
    {
      id: 3,
      icon: <FileEdit size={20} />,
      title: 'Obter estratégia de tráfego personalizada',
      subtitle: 'Preencha o formulário e receba um plano personalizado para o seu negócio',
      url: '#'
    },
    {
      id: 4,
      icon: <Youtube size={20} />,
      title: 'YouTube',
      subtitle: 'Conteúdos e aulas gratuitas toda semana',
      url: '#'
    }
  ];

  return (
    <div className="app-container">
      <header className="profile-section">
        <div className="profile-image-container">
          <img src="/matheus.png" alt="Matheus Bueno" className="profile-image" />
        </div>
        <h1 className="profile-name">
          Matheus <span className="highlight">Bueno</span>
          <BadgeCheck className="verified-badge" size={24} fill="currentColor" color="var(--bg-color)" />
        </h1>
        <h2 className="profile-subtitle">Especialista em Tráfego Pago</h2>
        <p className="profile-bio">
          Ajudo empresas e profissionais a conquistarem mais clientes com anúncios que geram resultado.
        </p>
      </header>

      <main>
        <section className="links-section">
          {links.map((link) => (
            <a key={link.id} href={link.url} className="link-card" target="_blank" rel="noopener noreferrer">
              <div className="link-icon-wrapper">
                {link.icon}
              </div>
              <div className="link-content">
                <span className="link-title">{link.title}</span>
                <span className="link-subtitle">{link.subtitle}</span>
              </div>
              <ChevronRight className="link-arrow" size={20} />
            </a>
          ))}
        </section>

        <div className="results-divider">
          <div className="results-divider-line"></div>
          <span className="results-divider-text">Resultados que geram negócios</span>
          <div className="results-divider-line"></div>
        </div>

        <section className="results-container">
          <div className="result-item">
            <div className="result-value-container">
              <TrendingUp className="result-icon" size={24} />
              <span className="result-value">+ de R$ 1M</span>
            </div>
            <span className="result-label">gerenciados em anúncios</span>
          </div>
          <div className="result-item">
            <div className="result-value-container">
              <Briefcase className="result-icon" size={24} />
              <span className="result-value">+ de 150</span>
            </div>
            <span className="result-label">empresas gerenciadas</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <ShieldCheck className="footer-icon" size={16} />
        <span className="footer-text">
          Tráfego pago estratégico para quem busca <span className="highlight">crescimento real</span>.
        </span>
      </footer>
    </div>
  );
}

export default App;
