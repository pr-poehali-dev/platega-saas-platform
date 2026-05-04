import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { transactions, type Section } from './types';

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

export default HomeSection;
