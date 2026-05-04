import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type Section = 'home' | 'cabinet' | 'support';

const transactions = [
  { id: 'TX-8821', type: 'in', label: 'Пополнение · СБП', amount: 25000, date: '04 мая, 14:32', status: 'Завершено' },
  { id: 'TX-8820', type: 'out', label: 'Вывод на карту', amount: -12400, date: '03 мая, 09:11', status: 'Завершено' },
  { id: 'TX-8819', type: 'in', label: 'Возврат комиссии', amount: 320, date: '02 мая, 22:48', status: 'Завершено' },
  { id: 'TX-8818', type: 'out', label: 'Вывод USDT', amount: -54000, date: '01 мая, 18:02', status: 'В обработке' },
  { id: 'TX-8817', type: 'in', label: 'Партнёрский бонус', amount: 1750, date: '30 апр, 10:15', status: 'Завершено' }
];

const Index = () => {
  const [section, setSection] = useState<Section>('home');
  const [topUp, setTopUp] = useState('5000');

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
        {section === 'home' && <HomeSection setSection={setSection} />}
        {section === 'cabinet' && <CabinetSection topUp={topUp} setTopUp={setTopUp} />}
        {section === 'support' && <SupportSection />}
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

const HomeSection = ({ setSection }: { setSection: (s: Section) => void }) => (
  <div className="space-y-24">
    {/* HERO */}
    <section className="relative animate-rise">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--neon-lime))] animate-pulse" />
            <span className="text-muted-foreground">Live · обработка платежей за 0.4 сек</span>
          </div>

          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Деньги,<br />
            <span className="text-gradient animate-gradient">которые движутся</span><br />
            быстрее тебя.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Пополняй, выводи и отслеживай транзакции в одном пространстве. Без банковских очередей, без скрытых комиссий, без скучных интерфейсов.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => setSection('cabinet')}
              size="lg"
              className="bg-gradient-neon animate-gradient text-background font-bold rounded-full px-8 h-14 text-base hover:scale-105 transition-transform glow-violet"
            >
              Открыть кабинет
              <Icon name="ArrowUpRight" size={18} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base border-border/60 bg-transparent hover:bg-muted/40">
              <Icon name="PlayCircle" size={18} className="mr-2" />
              Как это работает
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-4">
            {[
              { v: '₽ 4.2B', l: 'оборот' },
              { v: '128k', l: 'клиентов' },
              { v: '0.3%', l: 'комиссия' }
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-bold text-2xl text-gradient">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* HERO CARD */}
        <div className="lg:col-span-5">
          <div className="relative animate-rise" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-gradient-neon opacity-30 blur-2xl rounded-[2rem] animate-gradient" />
            <div className="relative glass rounded-[2rem] p-8 noise overflow-hidden">
              <div className="grid-bg absolute inset-0 opacity-40" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Баланс</div>
                  <div className="px-3 py-1 rounded-full bg-[hsl(var(--neon-lime)/0.15)] text-[hsl(var(--neon-lime))] text-xs font-mono-d">+12.4%</div>
                </div>
                <div className="font-display font-black text-5xl tracking-tight">
                  ₽ 184<span className="text-muted-foreground">,520</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { i: 'ArrowDownLeft', l: 'Пополнить', c: 'hsl(var(--neon-cyan))' },
                    { i: 'ArrowUpRight', l: 'Вывести', c: 'hsl(var(--neon-magenta))' },
                    { i: 'Repeat', l: 'Обмен', c: 'hsl(var(--neon-violet))' }
                  ].map((b) => (
                    <button key={b.l} className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/30 hover:bg-muted/60 transition-all hover:-translate-y-0.5">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: b.c, boxShadow: `0 0 24px -4px ${b.c}` }}>
                        <Icon name={b.i} size={18} className="text-background" />
                      </div>
                      <span className="text-xs">{b.l}</span>
                    </button>
                  ))}
                </div>
                <div className="space-y-2">
                  {transactions.slice(0, 2).map((t) => (
                    <div key={t.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${t.type === 'in' ? 'bg-[hsl(var(--neon-lime)/0.15)] text-[hsl(var(--neon-lime))]' : 'bg-[hsl(var(--neon-magenta)/0.15)] text-[hsl(var(--neon-magenta))]'}`}>
                          <Icon name={t.type === 'in' ? 'ArrowDownLeft' : 'ArrowUpRight'} size={14} />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{t.label}</div>
                          <div className="text-xs text-muted-foreground">{t.date}</div>
                        </div>
                      </div>
                      <div className={`font-mono-d text-sm ${t.type === 'in' ? 'text-[hsl(var(--neon-lime))]' : ''}`}>
                        {t.type === 'in' ? '+' : ''}{t.amount.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TICKER */}
    <section className="relative -mx-4 overflow-hidden py-6 border-y border-border/40">
      <div className="flex animate-ticker whitespace-nowrap font-display font-bold text-3xl md:text-5xl">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex items-center gap-12 pr-12">
            <span className="text-gradient">МГНОВЕННО</span>
            <Icon name="Zap" size={32} className="text-[hsl(var(--neon-cyan))]" />
            <span>БЕЗ КОМИССИЙ</span>
            <Icon name="Sparkles" size={32} className="text-[hsl(var(--neon-magenta))]" />
            <span className="text-gradient">24 / 7</span>
            <Icon name="Infinity" size={32} className="text-[hsl(var(--neon-violet))]" />
            <span>SECURE</span>
            <Icon name="ShieldCheck" size={32} className="text-[hsl(var(--neon-lime))]" />
          </div>
        ))}
      </div>
    </section>

    {/* FEATURES */}
    <section className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ возможности</div>
        <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">
          Три кнопки — <span className="text-gradient">бесконечный контроль</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: 'Wallet',
            title: 'Пополнение',
            desc: 'Карты, СБП, крипта. Деньги падают на счёт за секунды — без посредников.',
            color: 'hsl(var(--neon-cyan))'
          },
          {
            icon: 'Send',
            title: 'Вывод средств',
            desc: 'На любую карту или кошелёк. Один клик — и деньги в пути с минимальной комиссией.',
            color: 'hsl(var(--neon-magenta))'
          },
          {
            icon: 'LineChart',
            title: 'История транзакций',
            desc: 'Каждая операция видна, ищется и экспортируется. Полная финансовая прозрачность.',
            color: 'hsl(var(--neon-violet))'
          }
        ].map((f, i) => (
          <div
            key={f.title}
            className="group relative glass rounded-3xl p-8 noise overflow-hidden hover:-translate-y-2 transition-transform duration-500 animate-rise"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top, ${f.color}/0.15, transparent 70%)` }} />
            <div className="relative space-y-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: f.color, boxShadow: `0 0 40px -8px ${f.color}` }}>
                <Icon name={f.icon} size={26} className="text-background" />
              </div>
              <h3 className="font-display font-bold text-2xl">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="pt-2 flex items-center gap-2 text-sm font-medium text-foreground/80 group-hover:text-foreground">
                Подробнее <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="relative">
      <div className="relative glass rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-neon opacity-10 animate-gradient" />
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="relative space-y-6 max-w-2xl mx-auto">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">
            Готов <span className="text-gradient">взлететь?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Регистрация занимает 30 секунд. Первое пополнение — без комиссии.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setSection('cabinet')}
              size="lg"
              className="bg-gradient-neon animate-gradient text-background font-bold rounded-full px-10 h-14 hover:scale-105 transition-transform animate-pulse-ring"
            >
              Создать кошелёк
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const CabinetSection = ({ topUp, setTopUp }: { topUp: string; setTopUp: (v: string) => void }) => (
  <div className="space-y-10 animate-rise">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">/ личный кабинет</div>
        <h1 className="font-display font-black text-5xl md:text-6xl tracking-tight">
          Привет, <span className="text-gradient">Алекс</span>
        </h1>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
          <Icon name="Shield" size={14} className="text-[hsl(var(--neon-lime))]" />
          Верифицирован
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
          <Icon name="Crown" size={14} className="text-[hsl(var(--neon-magenta))]" />
          PRO
        </div>
      </div>
    </div>

    {/* TOP CARDS */}
    <div className="grid lg:grid-cols-3 gap-6">
      {/* BALANCE */}
      <div className="lg:col-span-2 relative">
        <div className="absolute -inset-2 bg-gradient-neon opacity-20 blur-2xl rounded-[2rem] animate-gradient" />
        <div className="relative glass rounded-[2rem] p-8 noise overflow-hidden h-full">
          <div className="grid-bg absolute inset-0 opacity-30" />
          <div className="relative flex flex-col h-full justify-between gap-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Текущий баланс</div>
                <div className="font-display font-black text-6xl md:text-7xl tracking-tight">
                  ₽ 184<span className="text-muted-foreground/60">,520</span>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-[hsl(var(--neon-lime))] font-mono-d text-sm">+ 12 480 ₽</span>
                  <span className="text-muted-foreground text-sm">за 30 дней</span>
                </div>
              </div>
              <div className="hidden md:flex w-16 h-16 rounded-2xl bg-gradient-neon animate-gradient items-center justify-center">
                <Icon name="Wallet" size={28} className="text-background" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-gradient-neon animate-gradient text-background font-semibold rounded-full px-6 h-12 hover:scale-105 transition-transform">
                <Icon name="ArrowDownLeft" size={16} className="mr-2" />
                Пополнить
              </Button>
              <Button variant="outline" className="rounded-full px-6 h-12 border-border/60 bg-transparent hover:bg-muted/40">
                <Icon name="ArrowUpRight" size={16} className="mr-2" />
                Вывести
              </Button>
              <Button variant="outline" className="rounded-full px-6 h-12 border-border/60 bg-transparent hover:bg-muted/40">
                <Icon name="Repeat" size={16} className="mr-2" />
                Обмен
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK TOPUP */}
      <div className="glass rounded-[2rem] p-8 noise space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-bold text-xl">Быстрое пополнение</h3>
          <Icon name="Zap" size={20} className="text-[hsl(var(--neon-cyan))]" />
        </div>
        <div className="space-y-3">
          <div className="relative">
            <Input
              value={topUp}
              onChange={(e) => setTopUp(e.target.value)}
              className="h-14 text-2xl font-display font-bold bg-muted/30 border-border/60 rounded-2xl pl-5 pr-12"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground font-mono-d">₽</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['1000', '5000', '10000'].map((v) => (
              <button
                key={v}
                onClick={() => setTopUp(v)}
                className={`py-2 rounded-xl text-sm font-mono-d transition-all ${
                  topUp === v
                    ? 'bg-gradient-neon text-background'
                    : 'bg-muted/30 hover:bg-muted/60'
                }`}
              >
                +{v}
              </button>
            ))}
          </div>
          <Button className="w-full h-12 bg-gradient-neon animate-gradient text-background font-semibold rounded-2xl hover:scale-[1.02] transition-transform">
            Пополнить через СБП
          </Button>
        </div>
      </div>
    </div>

    {/* STATS */}
    <div className="grid md:grid-cols-4 gap-4">
      {[
        { l: 'Поступления', v: '+ 47 800 ₽', i: 'TrendingUp', c: 'hsl(var(--neon-lime))' },
        { l: 'Расходы', v: '- 22 320 ₽', i: 'TrendingDown', c: 'hsl(var(--neon-magenta))' },
        { l: 'Транзакций', v: '128', i: 'Activity', c: 'hsl(var(--neon-cyan))' },
        { l: 'Средняя', v: '4 280 ₽', i: 'BarChart3', c: 'hsl(var(--neon-violet))' }
      ].map((s) => (
        <div key={s.l} className="glass rounded-2xl p-5 hover:-translate-y-1 transition-transform">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</span>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${s.c}` }}>
              <Icon name={s.i} size={14} className="text-background" />
            </div>
          </div>
          <div className="font-display font-bold text-2xl">{s.v}</div>
        </div>
      ))}
    </div>

    {/* TRANSACTIONS */}
    <div className="glass rounded-[2rem] p-8 noise">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-bold text-2xl">История транзакций</h3>
          <p className="text-sm text-muted-foreground">Все операции по счёту</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full bg-transparent border-border/60">
            <Icon name="Filter" size={14} className="mr-2" /> Фильтры
          </Button>
          <Button variant="outline" size="sm" className="rounded-full bg-transparent border-border/60">
            <Icon name="Download" size={14} className="mr-2" /> Экспорт
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {transactions.map((t, i) => (
          <div
            key={t.id}
            className="group flex items-center justify-between p-4 rounded-2xl hover:bg-muted/30 transition-all animate-rise"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                t.type === 'in'
                  ? 'bg-[hsl(var(--neon-lime)/0.15)] text-[hsl(var(--neon-lime))]'
                  : 'bg-[hsl(var(--neon-magenta)/0.15)] text-[hsl(var(--neon-magenta))]'
              }`}>
                <Icon name={t.type === 'in' ? 'ArrowDownLeft' : 'ArrowUpRight'} size={20} />
              </div>
              <div>
                <div className="font-medium">{t.label}</div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-mono-d">{t.id}</span>
                  <span>·</span>
                  <span>{t.date}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className={`hidden md:inline-block text-xs px-3 py-1 rounded-full ${
                t.status === 'Завершено'
                  ? 'bg-[hsl(var(--neon-lime)/0.15)] text-[hsl(var(--neon-lime))]'
                  : 'bg-muted/40 text-muted-foreground'
              }`}>
                {t.status}
              </span>
              <div className={`font-display font-bold text-lg ${t.type === 'in' ? 'text-[hsl(var(--neon-lime))]' : ''}`}>
                {t.type === 'in' ? '+' : ''}{t.amount.toLocaleString('ru-RU')} ₽
              </div>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SupportSection = () => (
  <div className="space-y-10 animate-rise">
    <div className="text-center max-w-2xl mx-auto space-y-4">
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ поддержка</div>
      <h1 className="font-display font-black text-5xl md:text-6xl tracking-tight">
        Мы <span className="text-gradient">на связи 24/7</span>
      </h1>
      <p className="text-lg text-muted-foreground">
        Среднее время ответа — 47 секунд. Команда людей, а не ботов.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        { i: 'MessageCircle', t: 'Telegram', d: 'Самый быстрый канал', a: '@fluxpay_help', c: 'hsl(var(--neon-cyan))' },
        { i: 'Mail', t: 'Email', d: 'Для подробных вопросов', a: 'help@fluxpay.io', c: 'hsl(var(--neon-violet))' },
        { i: 'Phone', t: 'Телефон', d: 'Круглосуточно', a: '8 800 555-35-35', c: 'hsl(var(--neon-magenta))' }
      ].map((c) => (
        <div key={c.t} className="glass rounded-3xl p-7 noise hover:-translate-y-2 transition-transform group cursor-pointer">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: c.c, boxShadow: `0 0 40px -8px ${c.c}` }}>
            <Icon name={c.i} size={24} className="text-background" />
          </div>
          <div className="font-display font-bold text-xl mb-1">{c.t}</div>
          <div className="text-sm text-muted-foreground mb-4">{c.d}</div>
          <div className="font-mono-d text-foreground/90 group-hover:text-gradient transition-all">{c.a}</div>
        </div>
      ))}
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      {/* FORM */}
      <div className="glass rounded-3xl p-8 noise space-y-5">
        <div>
          <h3 className="font-display font-bold text-2xl mb-1">Написать нам</h3>
          <p className="text-sm text-muted-foreground">Опишите ситуацию — ответим в течение часа</p>
        </div>
        <div className="space-y-4">
          <Input placeholder="Ваше имя" className="h-12 bg-muted/30 border-border/60 rounded-xl" />
          <Input placeholder="Email или Telegram" className="h-12 bg-muted/30 border-border/60 rounded-xl" />
          <Textarea placeholder="Что случилось?" className="min-h-32 bg-muted/30 border-border/60 rounded-xl" />
          <Button className="w-full h-12 bg-gradient-neon animate-gradient text-background font-semibold rounded-xl hover:scale-[1.02] transition-transform">
            Отправить запрос
            <Icon name="Send" size={16} className="ml-2" />
          </Button>
        </div>
      </div>

      {/* FAQ */}
      <div className="space-y-3">
        <h3 className="font-display font-bold text-2xl mb-4">Частые вопросы</h3>
        {[
          { q: 'Какая комиссия за пополнение?', a: 'Через СБП — 0%. Карта — 1%. Криптовалюта — сетевой gas.' },
          { q: 'Сколько идёт вывод средств?', a: 'СБП и карты РФ — мгновенно. Крипта — 5-15 минут.' },
          { q: 'Есть ли лимиты на операции?', a: 'Дневной лимит для PRO — 5 000 000 ₽. Месячный — без ограничений.' },
          { q: 'Как защищены мои деньги?', a: 'Холодное хранение, страховой фонд, двухфакторная защита.' }
        ].map((f, i) => (
          <details
            key={i}
            className="group glass rounded-2xl p-5 cursor-pointer hover:bg-muted/20 transition-all"
          >
            <summary className="flex items-center justify-between font-medium list-none">
              <span>{f.q}</span>
              <Icon name="Plus" size={18} className="group-open:rotate-45 transition-transform text-[hsl(var(--neon-cyan))]" />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </div>
);

export default Index;
