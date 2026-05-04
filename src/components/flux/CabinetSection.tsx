import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { transactions } from './types';

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

export default CabinetSection;
