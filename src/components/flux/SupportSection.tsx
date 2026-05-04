import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

export default SupportSection;
