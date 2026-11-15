import { C, Card, Check, Flow, Line, Pill, Show, Txt } from './kit';

// Brief → AI creates ad variations → ads go live → results, winner scaled.
const ads = [
  { x: 206, headline: 'Glow in 7 days', from: '#5B6CFF', to: '#9B7BFF', platform: 'Instagram', result: 22 },
  { x: 296, headline: '20% off today', from: '#F59E0B', to: '#EF5DA8', platform: 'Facebook', result: 66 },
  { x: 386, headline: 'Meet your serum', from: '#14B8A6', to: '#3D9BFE', platform: 'Google', result: 34 },
];
const WINNER = 1;

export default function AdsAnimation({ step }: { step: number }) {
  const brief = [
    ['Product', 'Glow Serum'],
    ['Offer', '20% off this week'],
    ['Audience', 'Women, 25–40'],
    ['Goal', 'Online orders'],
  ];

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="AI creating ad variations from a brief, launching them and scaling the best one">
      <defs>
        {ads.map((ad, i) => (
          <linearGradient key={i} id={`ad-grad-${i}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={ad.from} />
            <stop offset="1" stopColor={ad.to} />
          </linearGradient>
        ))}
      </defs>

      {/* Brief */}
      <Card x={16} y={30} w={128} h={176} />
      <Txt x={30} y={52} size={12} weight={700}>
        Your brief
      </Txt>
      {brief.map(([label, value], i) => (
        <g key={label}>
          <Txt x={30} y={74 + i * 34} size={8.5} fill={C.muted}>
            {label}
          </Txt>
          <Txt x={30} y={87 + i * 34} size={10.5} weight={600}>
            {value}
          </Txt>
        </g>
      ))}

      {/* AI */}
      <Flow d="M146 118 H158" on />
      <circle cx="174" cy="118" r="15" fill={C.blue} />
      <circle
        cx="174"
        cy="118"
        r="21"
        fill="none"
        stroke={C.blue}
        strokeOpacity="0.35"
        className={step === 1 ? 'animate-blink' : ''}
      />
      <Txt x={174} y={122} size={10} weight={700} fill="#fff" anchor="middle">
        AI
      </Txt>
      <Flow d="M190 118 H204" on={step >= 1} />

      {/* Ad variations */}
      {ads.map((ad, i) => {
        const isWinner = i === WINNER;
        const dim = step >= 3 && !isWinner;
        return (
          <g key={ad.headline} style={{ opacity: dim ? 0.45 : 1, transition: 'opacity 500ms ease' }}>
            <Show on={step >= 1} delay={i * 0.18} dx={-12} dy={0}>
              <Card
                x={ad.x}
                y={30}
                w={82}
                h={150}
                stroke={step >= 3 && isWinner ? C.blue : C.line}
                strokeWidth={step >= 3 && isWinner ? 2 : 1}
              />
              <rect x={ad.x + 6} y={36} width={70} height={74} rx={7} fill={`url(#ad-grad-${i})`} />
              <rect x={ad.x + 33} y={52} width={16} height={36} rx={4} fill="rgba(255,255,255,0.88)" />
              <rect x={ad.x + 36} y={46} width={10} height={8} rx={2} fill="rgba(255,255,255,0.7)" />
              <Txt x={ad.x + 8} y={126} size={8.5} weight={700}>
                {ad.headline}
              </Txt>
              <Line x={ad.x + 8} y={133} w={58} h={4} />
              <Pill x={ad.x + 8} y={150} w={52} h={17} size={8.5} label="Shop now" fill={C.ink} color="#fff" />
            </Show>

            {/* Live on platforms */}
            <Show on={step >= 2} delay={0.15 + i * 0.15}>
              <circle cx={ad.x + 8} cy={196} r={3.5} fill={C.green} />
              <Txt x={ad.x + 16} y={199.5} size={8.5} fill={C.text}>
                Live · {ad.platform}
              </Txt>
            </Show>

            {/* Results */}
            <Show on={step >= 3} delay={0.1}>
              <Txt x={ad.x} y={226} size={8} fill={C.muted}>
                Orders
              </Txt>
              <rect x={ad.x} y={232} width={82} height={8} rx={4} fill={C.soft} />
              <rect
                x={ad.x}
                y={232}
                height={8}
                rx={4}
                fill={isWinner ? C.blue : C.muted}
                style={{
                  width: step >= 3 ? ad.result + 'px' : '0px',
                  transition: 'width 1.1s cubic-bezier(0.22,1,0.36,1) 0.3s',
                }}
              />
            </Show>
          </g>
        );
      })}

      <Show on={step >= 3} delay={0.6}>
        <Pill x={ads[WINNER].x + 12} y={20} w={58} label="Winner" fill={C.blue} color="#fff" />
        <Check x={ads[WINNER].x - 2} y={252} />
        <Txt x={ads[WINNER].x + 18} y={263} size={9.5} weight={600}>
          Budget moved to the winner
        </Txt>
      </Show>

      <Show on={step >= 3} delay={0.3}>
        <Txt x={16} y={234} size={9.5} weight={600}>
          AI keeps testing:
        </Txt>
        <Txt x={16} y={250} size={9} fill={C.text}>
          pause what doesn’t sell,
        </Txt>
        <Txt x={16} y={264} size={9} fill={C.text}>
          scale what does.
        </Txt>
      </Show>
    </svg>
  );
}
