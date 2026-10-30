import { C, Card, Check, Pill, Show, Txt } from './kit';

// Assess the team → hands-on training → tools for each team → AI-ready team.
const team = [
  { cx: 78, label: 'Sales', color: '#7C5CFF' },
  { cx: 186, label: 'Marketing', color: '#F08A24' },
  { cx: 294, label: 'Operations', color: '#0EA5A4' },
  { cx: 402, label: 'HR', color: '#E2557B' },
];

const tools = [
  { x: 30, title: 'Prompt library', sub: 'for every team' },
  { x: 176, title: 'Custom assistants', sub: 'for your workflows' },
  { x: 322, title: 'AI-use policy', sub: 'safe and simple' },
];

function Person({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={26} fill={color} opacity={0.14} />
      <circle cx={cx} cy={cy - 6} r={8} fill={color} />
      <path d={`M${cx - 14} ${cy + 16} a14 12 0 0 1 28 0`} fill={color} />
    </g>
  );
}

export default function TrainingAnimation({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="A team being assessed, trained and equipped with AI tools until they are AI-ready">
      <Show on={step === 0} dy={-6}>
        <Pill x={150} y={10} w={180} h={22} size={9.5} label="Where does your team’s time go?" />
      </Show>
      <Show on={step >= 1 && step < 3} dy={-6}>
        <Pill x={170} y={10} w={140} h={22} size={9.5} label="Hands-on workshop" fill={C.ink} color="#fff" />
      </Show>
      <Show on={step >= 3} dy={-6}>
        <Pill x={160} y={10} w={160} h={22} size={9.5} label="Your team is AI-ready" fill={C.green} color="#fff" />
      </Show>

      {team.map((p, i) => (
        <g key={p.label}>
          <circle
            cx={p.cx}
            cy={72}
            r={31}
            fill="none"
            stroke={C.blue}
            strokeWidth={3}
            style={{ opacity: step >= 3 ? 1 : 0, transition: `opacity 500ms ease ${i * 0.15}s` }}
          />
          <Person cx={p.cx} cy={72} color={p.color} />

          <Show on={step === 0} delay={i * 0.1} dy={4}>
            <circle cx={p.cx + 22} cy={50} r={9} fill={C.amberLight} />
            <Txt x={p.cx + 22} y={54} size={11} weight={700} fill={C.amber} anchor="middle">
              ?
            </Txt>
          </Show>
          <Show on={step >= 3} delay={0.2 + i * 0.15} dy={4}>
            <circle cx={p.cx + 22} cy={94} r={10} fill={C.blue} />
            <Txt x={p.cx + 22} y={97.5} size={8.5} weight={700} fill="#fff" anchor="middle">
              AI
            </Txt>
          </Show>

          <Txt x={p.cx} y={122} size={10.5} weight={700} anchor="middle">
            {p.label}
          </Txt>

          {/* Training progress */}
          <rect x={p.cx - 42} y={134} width={84} height={7} rx={3.5} fill={C.soft} />
          <rect
            x={p.cx - 42}
            y={134}
            height={7}
            rx={3.5}
            fill={step >= 3 ? C.green : C.blue}
            style={{
              width: step >= 1 ? '84px' : '0px',
              transition: `width 1.4s cubic-bezier(0.22,1,0.36,1) ${step >= 1 ? 0.2 + i * 0.2 : 0}s, fill 400ms ease`,
            }}
          />
        </g>
      ))}

      {/* Toolkit */}
      {tools.map((t, i) => (
        <Show key={t.title} on={step >= 2} delay={i * 0.18}>
          <Card x={t.x} y={170} w={128} h={64} />
          <rect x={t.x + 12} y={184} width={24} height={24} rx={6} fill={C.blueLight} />
          {i === 0 && (
            <>
              <rect x={t.x + 18} y={190} width={12} height={2.5} rx={1} fill={C.blue} />
              <rect x={t.x + 18} y={195} width={9} height={2.5} rx={1} fill={C.blue} />
              <rect x={t.x + 18} y={200} width={12} height={2.5} rx={1} fill={C.blue} />
            </>
          )}
          {i === 1 && (
            <>
              <rect x={t.x + 17} y={191} width={14} height={11} rx={3} fill="none" stroke={C.blue} strokeWidth={1.6} />
              <circle cx={t.x + 21.5} cy={196.5} r={1.4} fill={C.blue} />
              <circle cx={t.x + 26.5} cy={196.5} r={1.4} fill={C.blue} />
            </>
          )}
          {i === 2 && (
            <path
              d={`M${t.x + 24} ${189} l6 2.5 v4.5 c0 4 -3 6.5 -6 7.5 c-3 -1 -6 -3.5 -6 -7.5 v-4.5 Z`}
              fill="none"
              stroke={C.blue}
              strokeWidth={1.6}
              strokeLinejoin="round"
            />
          )}
          <Txt x={t.x + 44} y={196} size={9.5} weight={700}>
            {t.title}
          </Txt>
          <Txt x={t.x + 44} y={210} size={8.5} fill={C.muted}>
            {t.sub}
          </Txt>
        </Show>
      ))}

      <Show on={step >= 3} delay={0.8}>
        <Check x={128} y={256} />
        <Txt x={148} y={267} size={10.5} weight={700}>
          AI used every day, in real work
        </Txt>
      </Show>
    </svg>
  );
}
