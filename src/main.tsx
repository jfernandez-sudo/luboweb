import React from 'react';
import ReactDOM from 'react-dom/client';
import { BookOpen, CalendarDays, ChevronRight, HeartHandshake, Users, Bell } from 'lucide-react';
import './styles.css';

const verse = {
  reference: 'Salmos 46:1',
  text: 'Dios es nuestro amparo y nuestra fuerza, nuestra ayuda segura en momentos de angustia.'
};

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">J</div>
          <div>
            <strong>JALubo</strong>
            <span>Tu clase, también durante la semana.</span>
          </div>
        </div>
        <button className="icon-button" aria-label="Notificaciones"><Bell size={20} /></button>
      </header>

      <main className="content">
        <section className="hero-card">
          <div className="eyebrow">VERSÍCULO DE LA SEMANA</div>
          <h1>“{verse.text}”</h1>
          <p>{verse.reference}</p>
          <div className="lesson-pill"><BookOpen size={16} /> Lección de esta semana</div>
        </section>

        <section className="welcome">
          <p className="eyebrow">BIENVENIDO A JALUBO</p>
          <h2>Un lugar para aprender, acompañarnos y orar juntos.</h2>
        </section>

        <section className="feature-grid">
          <FeatureCard icon={<BookOpen />} title="La lección" text="Leé la lección de esta semana y preparate para compartir." />
          <FeatureCard icon={<CalendarDays />} title="Calendario" text="Mirá las actividades y eventos de todo el año." />
          <FeatureCard icon={<HeartHandshake />} title="Cofre de oración" text="Dejá un pedido y permití que nuestra clase ore por vos." featured />
          <FeatureCard icon={<Users />} title="Mi clase" text="Conocé a tus maestros y compañeros y mantenete conectado." />
        </section>

        <section className="next-card">
          <div>
            <span className="eyebrow">PRÓXIMA ACTIVIDAD</span>
            <h3>Nos vemos en la próxima clase</h3>
            <p>Muy pronto los maestros podrán publicar aquí las actividades.</p>
          </div>
          <ChevronRight size={22} />
        </section>
      </main>

      <nav className="bottom-nav">
        <span className="active">Inicio</span>
        <span>Lección</span>
        <span>Cofre</span>
        <span>Clase</span>
      </nav>
    </div>
  );
}

function FeatureCard({ icon, title, text, featured = false }: { icon: React.ReactNode; title: string; text: string; featured?: boolean }) {
  return (
    <button className={`feature-card ${featured ? 'featured' : ''}`}>
      <div className="feature-icon">{icon}</div>
      <div className="feature-copy">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <ChevronRight className="arrow" size={18} />
    </button>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);
