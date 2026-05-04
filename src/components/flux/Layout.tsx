import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import type { Section } from './types';

interface LayoutProps {
  section: Section;
  setSection: (s: Section) => void;
  children: React.ReactNode;
}

const Layout = ({ section, setSection, children }: LayoutProps) => {
  return (
    <div className="min-h-screen text-foreground relative">
      {/* floating blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-neon opacity-30 blur-3xl animate-float-blob" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_hsl(195_95%_60%/0.4),_transparent_60%)] blur-3xl animate-float-blob" style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_hsl(320_95%_60%/0.35),_transparent_60%)] blur-3xl animate-float-blob" style={{ animationDelay: '-9s' }} />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-neon animate-gradient flex items-center justify-center font-display font-black text-background">F</div>
              <div className="absolute inset-0 rounded-xl bg-gradient-neon blur-md opacity-60 -z-10" />
            </div>
            <div className="font-display font-extrabold text-xl tracking-tight">FLUX<span className="text-gradient">/PAY</span></div>
          </div>

          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full glass">
            {([
              { id: 'home', label: 'Главная', icon: 'Sparkles' },
              { id: 'cabinet', label: 'Кабинет', icon: 'LayoutDashboard' },
              { id: 'support', label: 'Поддержка', icon: 'LifeBuoy' }
            ] as { id: Section; label: string; icon: string }[]).map((item) => (
              <button
                key={item.id}
                onClick={() => setSection(item.id)}
                className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  section === item.id
                    ? 'text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section === item.id && (
                  <span className="absolute inset-0 rounded-full bg-gradient-neon animate-gradient" />
                )}
                <span className="relative flex items-center gap-2">
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <Button className="bg-gradient-neon animate-gradient text-background font-semibold hover:opacity-90 hover:scale-105 transition-all rounded-full px-6">
            Войти
          </Button>
        </div>
      </header>

      <main className="container mx-auto py-12 md:py-20">
        {children}
      </main>

      <footer className="container mx-auto py-10 mt-10 border-t border-border/40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2026 FLUX/PAY · Финансы будущего</div>
          <div className="flex gap-6">
            <span className="hover:text-foreground transition-colors cursor-pointer">Документы</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">API</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Telegram</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
