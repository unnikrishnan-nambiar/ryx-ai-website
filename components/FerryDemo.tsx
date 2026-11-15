'use client';

import { useEffect, useRef, useState } from 'react';
import { demoScenarios, type DemoNode } from '@/data/demo';

type Message = { from: 'agent' | 'visitor'; text: string; show?: string };

const toMessages = (node: DemoNode): Message[] =>
  node.say.map((text, i) => ({
    from: 'agent',
    text,
    show: i === node.say.length - 1 ? node.show : undefined,
  }));

// A scripted Ferry conversation the visitor drives with suggested replies,
// the same way Ferry's visitors do. No backend: every path is in data/demo.ts.
export default function FerryDemo() {
  const [scenarioId, setScenarioId] = useState(demoScenarios[0].id);
  const scenario = demoScenarios.find((s) => s.id === scenarioId)!;
  const [messages, setMessages] = useState<Message[]>(() => toMessages(scenario.nodes.start));
  const [nodeId, setNodeId] = useState('start');
  const [typing, setTyping] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const node = scenario.nodes[nodeId];
  const finished = !typing && !node.options;

  useEffect(() => () => void (timer.current && clearTimeout(timer.current)), []);

  // Keep the newest message in view inside the chat, without moving the page.
  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, typing]);

  function reset(id: string) {
    if (timer.current) clearTimeout(timer.current);
    const next = demoScenarios.find((s) => s.id === id)!;
    setScenarioId(id);
    setNodeId('start');
    setTyping(false);
    setMessages(toMessages(next.nodes.start));
  }

  function choose(label: string, to: string) {
    setMessages((m) => [...m, { from: 'visitor', text: label }]);
    setTyping(true);
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, ...toMessages(scenario.nodes[to])]);
      setNodeId(to);
      setTyping(false);
    }, 650);
  }

  return (
    <div className="w-full max-w-[460px]">
      <div role="group" aria-label="Choose a sample business" className="mb-4 flex flex-wrap gap-2">
        {demoScenarios.map((s) => {
          const active = s.id === scenarioId;
          return (
            <button
              key={s.id}
              type="button"
              aria-pressed={active}
              onClick={() => reset(s.id)}
              className={`min-h-[40px] cursor-pointer rounded-full px-4 text-sm font-semibold transition-colors duration-200 ${
                active ? 'bg-white text-ink' : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-[24px] bg-card text-ink shadow-[0_30px_80px_-30px_rgba(5,8,30,0.7)]">
        <div className="flex items-center gap-3 border-b border-rule px-5 py-4">
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-full bg-night font-display text-sm font-bold text-white"
          >
            {scenario.business[0]}
          </span>
          <div>
            <p className="font-semibold leading-tight">{scenario.business}</p>
            <p className="text-sm text-ink-3">Ferry agent, answering from the website</p>
          </div>
        </div>

        <div
          ref={logRef}
          role="log"
          aria-live="polite"
          aria-label="Demo conversation"
          className="h-[340px] space-y-2.5 overflow-y-auto px-5 py-4 text-[15px] leading-relaxed"
        >
          {messages.map((m, i) =>
            m.from === 'visitor' ? (
              <p key={i} className="ml-auto w-fit max-w-[82%] rounded-2xl rounded-br-md bg-signal px-3.5 py-2 text-white">
                {m.text}
              </p>
            ) : (
              <div key={i} className="w-fit max-w-[88%] rounded-2xl rounded-bl-md bg-paper px-3.5 py-2">
                {m.text}
                {m.show && (
                  <span className="mt-2 flex h-24 items-end rounded-xl bg-gradient-to-br from-signal-soft to-signal/30 p-2.5 text-xs font-semibold text-signal-deep">
                    {m.show}
                  </span>
                )}
              </div>
            ),
          )}
          {typing && (
            <p className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-paper px-4 py-3.5">
              <span className="sr-only">Ferry is typing</span>
              {[0, 150, 300].map((d) => (
                <span
                  key={d}
                  aria-hidden
                  className="h-1.5 w-1.5 animate-typing rounded-full bg-ink-3"
                  style={{ animationDelay: `${d}ms` }}
                />
              ))}
            </p>
          )}
          {finished && (
            <div className="mt-3 rounded-2xl border border-signal/30 bg-signal-soft p-4 text-sm">
              <p className="font-semibold text-ink">What {scenario.business} sees in the dashboard</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-2">
                {scenario.lead.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex min-h-[112px] flex-wrap content-start gap-2 border-t border-rule px-5 py-4">
          {finished ? (
            <button
              type="button"
              onClick={() => reset(scenarioId)}
              className="min-h-[40px] cursor-pointer rounded-full border border-ink/25 px-4 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              Start again
            </button>
          ) : (
            node.options?.map((o) => (
              <button
                key={o.label}
                type="button"
                disabled={typing}
                onClick={() => choose(o.label, o.to)}
                className="min-h-[40px] cursor-pointer rounded-full border border-signal/40 px-4 text-sm font-semibold text-signal-deep transition-colors hover:bg-signal hover:text-white disabled:cursor-default disabled:opacity-40"
              >
                {o.label}
              </button>
            ))
          )}
        </div>
      </div>
      <p className="mt-3 text-sm text-white">
        A scripted demo with sample businesses. Tap a reply, the way your visitors would.
      </p>
    </div>
  );
}
