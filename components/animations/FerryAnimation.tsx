import { C, Card, Check, Line, Pill, Show, Txt } from './kit';

// A visitor lands → Ferry starts the chat → qualifies them → purchase or demo booked.
export default function FerryAnimation({ step }: { step: number }) {
  const cursor = [
    { x: 120, y: 110 },
    { x: 200, y: 150 },
    { x: 214, y: 236 },
    { x: 204, y: 252 },
  ][step];

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="Ferry chatting with a website visitor and turning them into a purchase or demo booking">
      {/* Browser */}
      <Card x={16} y={16} w={300} h={268} r={12} />
      <path d="M16 28a12 12 0 0 1 12-12h276a12 12 0 0 1 12 12v12H16Z" fill={C.soft} />
      <circle cx={30} cy={28} r={3} fill="#F87171" />
      <circle cx={40} cy={28} r={3} fill="#FBBF24" />
      <circle cx={50} cy={28} r={3} fill="#34D399" />
      <rect x={110} y={21} width={112} height={14} rx={7} fill="#fff" />
      <Txt x={166} y={31} size={8} fill={C.muted} anchor="middle">
        yourbrand.com
      </Txt>

      {/* Page content */}
      <Line x={32} y={58} w={60} h={6} fill={C.ink} />
      <Line x={32} y={78} w={150} h={10} fill={C.line} />
      <Line x={32} y={94} w={120} h={10} fill={C.line} />
      <rect x={32} y={112} width={64} height={18} rx={9} fill={C.blue} />
      <rect x={210} y={58} width={92} height={74} rx={8} fill={C.blueLight} />
      {[0, 1, 2].map((k) => (
        <g key={k}>
          <rect x={32 + k * 92} y={150} width={84} height={58} rx={8} fill={C.soft} />
          <Line x={40 + k * 92} y={218} w={60} h={5} />
          <Line x={40 + k * 92} y={228} w={40} h={5} />
        </g>
      ))}

      {/* Chat widget */}
      <Show on={step >= 1} dy={16}>
        <Card x={150} y={88} w={158} h={188} r={12} stroke={C.line} />
        <path d="M150 100a12 12 0 0 1 12-12h134a12 12 0 0 1 12 12v12H150Z" fill={C.night} />
        <rect x={150} y={106} width={158} height={14} fill={C.night} />
        <circle cx={166} cy={104} r={8} fill={C.gold} />
        <Txt x={166} y={107.5} size={8.5} weight={700} fill={C.night} anchor="middle">
          F
        </Txt>
        <Txt x={180} y={108} size={9.5} weight={700} fill="#fff">
          Ferry
        </Txt>

        <rect x={196} y={128} width={104} height={30} rx={8} fill={C.blue} />
        <Txt x={204} y={140} size={7.8} fill="#fff">
          Which plan fits a
        </Txt>
        <Txt x={204} y={151} size={7.8} fill="#fff">
          10-person team?
        </Txt>

        <Show on={step >= 1} delay={0.6} dy={6}>
          <rect x={158} y={164} width={116} height={30} rx={8} fill={C.soft} />
          <Txt x={166} y={176} size={7.8}>
            The Team plan. Want a
          </Txt>
          <Txt x={166} y={187} size={7.8}>
            quick demo or to buy now?
          </Txt>
        </Show>

        <Show on={step >= 2} dy={6}>
          <rect x={158} y={200} width={142} height={22} rx={6} fill="#fff" stroke={C.line} />
          <Txt x={166} y={214} size={7.8} fill={C.text}>
            Ravi · ravi@company.com
          </Txt>
          <Check x={281} y={204} size={13} />
        </Show>

        <Show on={step >= 2} delay={0.35} dy={6}>
          <rect
            x={158}
            y={230}
            width={66}
            height={20}
            rx={10}
            fill={step >= 3 ? C.blue : '#fff'}
            stroke={C.blue}
            style={{ transition: 'fill 300ms ease' }}
          />
          <Txt x={191} y={243.5} size={8} weight={700} fill={step >= 3 ? '#fff' : C.blue} anchor="middle">
            Book demo
          </Txt>
          <rect x={230} y={230} width={62} height={20} rx={10} fill="#fff" stroke={C.blue} />
          <Txt x={261} y={243.5} size={8} weight={700} fill={C.blue} anchor="middle">
            Buy now
          </Txt>
        </Show>
      </Show>

      {/* Cursor */}
      <g
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`,
          transition: 'transform 900ms cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <path d="M0 0 L0 15 L4 11 L7 18 L10 17 L7 10 L12 10 Z" fill={C.ink} stroke="#fff" strokeWidth={1} />
      </g>

      {/* Outcomes */}
      <Show on={step >= 3} delay={0.3} dx={-12} dy={0}>
        <Card x={330} y={40} w={134} h={78} stroke={C.green} strokeWidth={1.5} />
        <rect x={342} y={52} width={22} height={20} rx={4} fill={C.greenLight} />
        <rect x={347} y={58} width={12} height={10} rx={1.5} fill="none" stroke={C.green} strokeWidth={1.3} />
        <Txt x={342} y={90} size={11} weight={700}>
          Demo booked
        </Txt>
        <Txt x={342} y={104} size={8.5} fill={C.text}>
          Thu, 11:00 AM
        </Txt>
      </Show>
      <Show on={step >= 3} delay={0.6} dx={-12} dy={0}>
        <Card x={330} y={130} w={134} h={78} />
        <rect x={342} y={142} width={22} height={20} rx={4} fill={C.blueLight} />
        <path d="M346 147 h3 l2.5 9 h8 l2 -6 h-11" fill="none" stroke={C.blue} strokeWidth={1.3} strokeLinejoin="round" />
        <Txt x={342} y={180} size={11} weight={700}>
          Or: order placed
        </Txt>
        <Txt x={342} y={194} size={8.5} fill={C.text}>
          Team plan · paid online
        </Txt>
      </Show>
      <Show on={step >= 3} delay={0.9}>
        <Check x={330} y={226} />
        <Txt x={350} y={237} size={9.5} weight={700}>
          Lead saved to your
        </Txt>
        <Txt x={350} y={250} size={9.5} weight={700}>
          dashboard
        </Txt>
      </Show>
      <Show on={step === 0} delay={0.2}>
        <Pill x={330} y={130} w={134} h={24} size={9} label="Visitor browsing quietly…" fill={C.soft} color={C.text} />
      </Show>
    </svg>
  );
}
