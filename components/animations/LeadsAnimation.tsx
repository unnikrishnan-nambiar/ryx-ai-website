import { C, Card, Check, Flow, Pill, Show, Txt } from './kit';

// Find prospects → enrich contacts → personal outreach → qualified leads in the CRM.
const sources = ['LinkedIn', 'Google Maps', 'Company sites'];
const prospects = [
  { name: 'Anil K.', role: 'Ops Head · Apex Metals', color: '#7C5CFF', tag: 'Hot', fill: C.greenLight, text: C.green },
  { name: 'Sara M.', role: 'COO · Nova Plastics', color: '#0EA5A4', tag: 'Warm', fill: C.amberLight, text: C.amber },
  { name: 'Vikram R.', role: 'Plant Mgr · Kerala Tools', color: '#F08A24', tag: 'Later', fill: C.soft, text: C.muted },
];
const CARD_Y = [26, 96, 166];

export default function LeadsAnimation({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="AI finding prospects, writing to them and passing qualified leads into the CRM">
      {/* Sources */}
      <Txt x={16} y={38} size={9} weight={600} fill={C.muted}>
        AI searches
      </Txt>
      {sources.map((s, i) => (
        <g key={s}>
          <rect x={16} y={52 + i * 46} width={92} height={28} rx={14} fill={C.soft} stroke={C.line} />
          <Txt x={62} y={70 + i * 46} size={9.5} weight={600} anchor="middle">
            {s}
          </Txt>
          <Flow d={`M108 ${66 + i * 46} C 116 ${66 + i * 46}, 116 ${CARD_Y[i] + 28}, 124 ${CARD_Y[i] + 28}`} on delay={i * 0.15} />
        </g>
      ))}

      {/* Prospects */}
      {prospects.map((p, i) => {
        const y = CARD_Y[i];
        return (
          <Show key={p.name} on delay={0.2 + i * 0.18} dx={-10} dy={0}>
            <Card x={126} y={y} w={150} h={58} />
            <circle cx={146} cy={y + 22} r={11} fill={p.color} />
            <Txt x={164} y={y + 20} size={10} weight={700}>
              {p.name}
            </Txt>
            <Txt x={164} y={y + 32} size={7.8} fill={C.muted}>
              {p.role}
            </Txt>
            <Show on={step >= 1} delay={0.15 + i * 0.18} dy={4}>
              <Pill x={136} y={y + 39} w={50} h={14} size={7.5} label="email ✓" fill={C.blueLight} color={C.blue} />
              <Pill x={190} y={y + 39} w={52} h={14} size={7.5} label="phone ✓" fill={C.blueLight} color={C.blue} />
            </Show>

            {/* Outreach */}
            <Show on={step >= 2} delay={i * 0.25} dx={-10} dy={0}>
              <rect x={286} y={y + 14} width={54} height={30} rx={8} fill={C.ink} />
              <rect x={293} y={y + 22} width={12} height={9} rx={1.5} fill="none" stroke="#fff" strokeWidth={1.1} />
              <path d={`M293 ${y + 23} l6 4.5 l6 -4.5`} fill="none" stroke="#fff" strokeWidth={1.1} />
              <Txt x={310} y={y + 30} size={8} weight={600} fill="#fff">
                Sent
              </Txt>
              <Txt x={313} y={y + 54} size={7} fill={C.muted} anchor="middle">
                + follow-up
              </Txt>
            </Show>
          </Show>
        );
      })}

      {/* CRM */}
      <Card x={352} y={18} w={112} h={264} fill={C.soft} />
      <Txt x={364} y={38} size={10.5} weight={700}>
        Your CRM
      </Txt>
      {prospects.map((p, i) => (
        <Show key={p.name} on={step >= 3} delay={i * 0.25} dx={-10} dy={0}>
          <rect x={360} y={50 + i * 38} width={96} height={30} rx={7} fill="#fff" stroke={C.line} />
          <Txt x={368} y={69 + i * 38} size={9} weight={600}>
            {p.name}
          </Txt>
          <Pill x={410} y={57 + i * 38} w={40} h={15} size={7.5} label={p.tag} fill={p.fill} color={p.text} />
        </Show>
      ))}
      <Show on={step >= 3} delay={0.85}>
        <rect x={360} y={170} width={96} height={64} rx={8} fill={C.blue} />
        <rect x={370} y={180} width={18} height={16} rx={3} fill="none" stroke="#fff" strokeWidth={1.4} />
        <line x1={370} x2={388} y1={185} y2={185} stroke="#fff" strokeWidth={1.4} />
        <Txt x={370} y={211} size={9.5} weight={700} fill="#fff">
          Meeting booked
        </Txt>
        <Txt x={370} y={224} size={8.5} fill="rgba(255,255,255,0.8)">
          Anil K. · Thu 11:00
        </Txt>
      </Show>
      <Show on={step >= 3} delay={1.1}>
        <Check x={126} y={246} />
        <Txt x={146} y={257} size={10.5} weight={700}>
          Your team only talks to
        </Txt>
        <Txt x={146} y={271} size={10.5} weight={700}>
          interested buyers
        </Txt>
      </Show>
    </svg>
  );
}
