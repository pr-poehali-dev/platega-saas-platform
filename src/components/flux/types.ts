export type Section = 'home' | 'cabinet' | 'support';

export const transactions = [
  { id: 'TX-8821', type: 'in', label: 'Пополнение · СБП', amount: 25000, date: '04 мая, 14:32', status: 'Завершено' },
  { id: 'TX-8820', type: 'out', label: 'Вывод на карту', amount: -12400, date: '03 мая, 09:11', status: 'Завершено' },
  { id: 'TX-8819', type: 'in', label: 'Возврат комиссии', amount: 320, date: '02 мая, 22:48', status: 'Завершено' },
  { id: 'TX-8818', type: 'out', label: 'Вывод USDT', amount: -54000, date: '01 мая, 18:02', status: 'В обработке' },
  { id: 'TX-8817', type: 'in', label: 'Партнёрский бонус', amount: 1750, date: '30 апр, 10:15', status: 'Завершено' }
];
