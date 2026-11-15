import { C, Card, Check, Flow, Line, Pill, Show, Txt } from './kit';

// RFQ and quotes arrive → AI reads them → compares vendors → report ready to approve.
const emails = [
  { subject: 'RFQ · Steel pipes', meta: 'Customer · PDF' },
  { subject: 'Quote · Vendor A', meta: 'Vendor · PDF' },
  { subject: 'Quote · Vendor B', meta: 'Vendor · Excel' },
];

const rows = [
  { item: 'Pipe 2 in', a: '₹420', b: '₹395', best: 'b' },
  { item: 'Pipe 4 in', a: '₹780', b: '₹810', best: 'a' },
  { item: 'Elbow', a: '₹65', b: '₹58', best: 'b' },
];

export default function WorkflowAnimation({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="AI reading RFQs and quotes from email, comparing vendors and producing a report">
      <style>{`
        @keyframes rx-scan { 0% { transform: translateY(0); } 100% { transform: translateY(104px); } }
        .rx-scan { animation: rx-scan 1.3s ease-in-out infinite alternate; }
      `}</style>

      {/* Inbox */}
      <Card x={16} y={24} w={142} h={164} />
      <Txt x={30} y={46} size={12} weight={700}>
        Inbox
      </Txt>
      <Pill x={112} y={34} w={34} label="3 new" size={8} h={16} />
      {emails.map((e, i) => (
        <Show key={e.subject} on delay={i * 0.12}>
          <rect
            x={24}
            y={58 + i * 42}
            width={126}
            height={36}
            rx={7}
            fill={step >= 1 && i === 1 ? C.blueLight : C.soft}
            style={{ transition: 'fill 400ms ease' }}
          />
          <rect x={31} y={67 + i * 42} width={16} height={12} rx={2} fill="none" stroke={C.muted} strokeWidth="1.2" />
          <path d={`M31 ${68 + i * 42} l8 6 l8 -6`} fill="none" stroke={C.muted} strokeWidth="1.2" />
          <Txt x={54} y={74 + i * 42} size={9} weight={700}>
            {e.subject}
          </Txt>
          <Txt x={54} y={86 + i * 42} size={8} fill={C.muted}>
            {e.meta}
          </Txt>
        </Show>
      ))}

      <Flow d="M158 106 H174" on={step >= 1} />

      {/* Document being read */}
      <Show on={step >= 1} dx={-10} dy={0}>
        <Card x={176} y={24} w={102} h={164} />
        <Txt x={186} y={44} size={8.5} weight={700}>
          quote_vendor_a.pdf
        </Txt>
        {[0, 1, 2, 3, 4, 5, 6].map((k) => (
          <g key={k}>
            <Line x={186} y={58 + k * 15} w={k % 3 === 0 ? 50 : 34} h={5} />
            <rect
              x={k % 3 === 0 ? 242 : 226}
              y={56 + k * 15}
              width={k % 3 === 0 ? 26 : 42}
              height={9}
              rx={3}
              fill={C.blue}
              style={{
                opacity: step >= 1 ? 0.18 : 0,
                transition: `opacity 400ms ease ${0.3 + k * 0.12}s`,
              }}
            />
          </g>
        ))}
        {step === 1 && <rect className="rx-scan" x={180} y={52} width={94} height={2} rx={1} fill={C.blue} opacity={0.8} />}
        <Pill x={186} y={164} w={82} label="Items · Qty · Price" size={8} h={16} />
      </Show>

      <Flow d="M278 106 H292" on={step >= 2} />

      {/* Comparison table */}
      <Show on={step >= 2} dx={-10} dy={0}>
        <Card x={294} y={24} w={170} h={164} />
        <Txt x={304} y={44} size={10} weight={700}>
          Vendor comparison
        </Txt>
        <Txt x={304} y={64} size={8} weight={600} fill={C.muted}>
          Item
        </Txt>
        <Txt x={384} y={64} size={8} weight={600} fill={C.muted} anchor="middle">
          Vendor A
        </Txt>
        <Txt x={434} y={64} size={8} weight={600} fill={C.muted} anchor="middle">
          Vendor B
        </Txt>
        <line x1={302} x2={456} y1={70} y2={70} stroke={C.line} />
        {rows.map((r, i) => {
          const y = 88 + i * 24;
          return (
            <Show key={r.item} on={step >= 2} delay={0.25 + i * 0.18} dy={4}>
              <Txt x={304} y={y} size={9} weight={600}>
                {r.item}
              </Txt>
              {(['a', 'b'] as const).map((v) => (
                <g key={v}>
                  {r.best === v && (
                    <rect x={(v === 'a' ? 384 : 434) - 20} y={y - 11} width={40} height={15} rx={4} fill={C.greenLight} />
                  )}
                  <Txt
                    x={v === 'a' ? 384 : 434}
                    y={y}
                    size={9}
                    weight={r.best === v ? 700 : 500}
                    fill={r.best === v ? C.green : C.text}
                    anchor="middle"
                  >
                    {r[v]}
                  </Txt>
                </g>
              ))}
            </Show>
          );
        })}
        <Show on={step >= 2} delay={0.9} dy={4}>
          <rect x={302} y={160} width={154} height={18} rx={5} fill={C.roseLight} />
          <Txt x={310} y={172} size={8} weight={600} fill={C.rose}>
            Flag: Vendor B has no delivery date
          </Txt>
        </Show>
      </Show>

      {/* Report */}
      <Show on={step >= 3} dy={14}>
        <Card x={176} y={206} w={288} h={70} stroke={C.blue} strokeWidth={1.5} />
        <rect x={190} y={220} width={30} height={40} rx={4} fill={C.blueLight} />
        <Line x={196} y={230} w={18} h={3} fill={C.blue} />
        <Line x={196} y={238} w={14} h={3} fill={C.blue} />
        <Line x={196} y={246} w={18} h={3} fill={C.blue} />
        <Txt x={232} y={234} size={11} weight={700}>
          Quote comparison report
        </Txt>
        <Txt x={232} y={250} size={9} fill={C.text}>
          Ready for approval · saved to ERP
        </Txt>
        <Pill x={398} y={228} w={56} h={22} size={9} label="Approve" fill={C.blue} color="#fff" />
      </Show>

      <Show on={step >= 3} delay={0.4}>
        <Check x={16} y={212} />
        <Txt x={36} y={223} size={10.5} weight={700}>
          Done in minutes
        </Txt>
        <Txt x={36} y={238} size={9} fill={C.text}>
          not hours of copying
        </Txt>
        <Txt x={36} y={252} size={9} fill={C.text}>
          and retyping
        </Txt>
      </Show>
    </svg>
  );
}
