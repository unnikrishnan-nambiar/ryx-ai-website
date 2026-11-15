import { C, Card, Check, Flow, Pill, Show, Txt } from './kit';

// Customers → AI spots each one's moment → personal WhatsApp messages → results.
const customers = [
  {
    initials: 'PS',
    name: 'Priya S.',
    since: 'Customer since 2023',
    moment: 'Cart left · 2 days',
    momentW: 92,
    momentFill: C.amberLight,
    momentColor: C.amber,
    color: '#7C5CFF',
    lines: ['Hi Priya, your cart is still', 'waiting. Free delivery today.'],
    result: 'Ordered',
    resultFill: C.greenLight,
    resultColor: C.green,
  },
  {
    initials: 'AK',
    name: 'Arjun K.',
    since: 'Monthly refill',
    moment: 'Refill due Friday',
    momentW: 92,
    momentFill: C.blueLight,
    momentColor: C.blue,
    color: '#0EA5A4',
    lines: ['Arjun, your refill is due', 'Friday. Re-order in one tap?'],
    result: 'Re-ordered',
    resultFill: C.greenLight,
    resultColor: C.green,
  },
  {
    initials: 'MN',
    name: 'Meera N.',
    since: 'Last order in July',
    moment: 'Quiet for 60 days',
    momentW: 96,
    momentFill: C.roseLight,
    momentColor: C.rose,
    color: '#F08A24',
    lines: ['Meera, we miss you! Here’s', '10% off your next order.'],
    result: 'Replied',
    resultFill: C.blueLight,
    resultColor: C.blue,
  },
];

const ROW_Y = [26, 92, 158];
const BUBBLE_Y = [72, 128, 184];

export default function NudgesAnimation({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="AI sending a personal WhatsApp message to each customer at the right moment">
      {/* Customers */}
      {customers.map((c, i) => {
        const y = ROW_Y[i];
        return (
          <g key={c.name}>
            <Card x={16} y={y} w={200} h={56} />
            <circle cx={42} cy={y + 28} r={14} fill={c.color} />
            <Txt x={42} y={y + 31.5} size={9.5} weight={700} fill="#fff" anchor="middle">
              {c.initials}
            </Txt>
            <Txt x={64} y={y + 23} size={11} weight={700}>
              {c.name}
            </Txt>
            <Show on={step < 1} dy={0}>
              <Txt x={64} y={y + 39} size={9} fill={C.muted}>
                {c.since}
              </Txt>
            </Show>
            <Show on={step >= 1} delay={i * 0.2} dx={-8} dy={0}>
              <Pill x={64} y={y + 29} w={c.momentW} label={c.moment} fill={c.momentFill} color={c.momentColor} size={8.5} h={16} />
            </Show>
            <Show on={step >= 3} delay={0.3 + i * 0.2} dy={0} dx={6}>
              <Pill x={162} y={y + 8} w={48} label={c.result} fill={c.resultFill} color={c.resultColor} size={8} h={15} />
            </Show>
            <Flow
              d={`M216 ${y + 28} C 250 ${y + 28}, 262 ${BUBBLE_Y[i] + 20}, 294 ${BUBBLE_Y[i] + 20}`}
              on={step >= 2}
              delay={i * 0.35}
            />
          </g>
        );
      })}

      {/* Phone */}
      <rect x={270} y={10} width={196} height={282} rx={26} fill={C.night} />
      <rect x={278} y={18} width={180} height={266} rx={20} fill="#ECE5DD" />
      <path d="M278 38a20 20 0 0 1 20-20h140a20 20 0 0 1 20 20v18H278Z" fill="#075E54" />
      <circle cx={298} cy={40} r={9} fill="rgba(255,255,255,0.9)" />
      <Txt x={314} y={38} size={10} weight={700} fill="#fff">
        Your Store
      </Txt>
      <Txt x={314} y={50} size={7.5} fill="rgba(255,255,255,0.75)">
        Business account
      </Txt>

      {customers.map((c, i) => (
        <Show key={c.name} on={step >= 2} delay={i * 0.35} dy={12}>
          <rect x={296} y={BUBBLE_Y[i]} width={154} height={44} rx={9} fill="#DCF8C6" />
          <Txt x={305} y={BUBBLE_Y[i] + 17} size={8.5} fill={C.ink}>
            {c.lines[0]}
          </Txt>
          <Txt x={305} y={BUBBLE_Y[i] + 30} size={8.5} fill={C.ink}>
            {c.lines[1]}
          </Txt>
          <Show on={step >= 3} delay={0.2 + i * 0.2} dy={0}>
            <Txt x={444} y={BUBBLE_Y[i] + 40} size={7.5} weight={600} fill="#34B7F1" anchor="end">
              ✓✓ Read
            </Txt>
          </Show>
        </Show>
      ))}

      <Show on={step >= 3} delay={0.9}>
        <Check x={16} y={232} />
        <Txt x={36} y={243} size={10.5} weight={700}>
          2 orders and 1 reply
        </Txt>
        <Txt x={36} y={258} size={9} fill={C.text}>
          from 3 personal messages, sent automatically
        </Txt>
      </Show>
    </svg>
  );
}
