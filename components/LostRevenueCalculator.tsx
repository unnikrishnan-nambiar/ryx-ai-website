'use client';

import { useState } from 'react';

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
const num = new Intl.NumberFormat('en-IN');

type SliderProps = {
  id: string;
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
};

function Slider({ id, label, value, display, min, max, step, onChange }: SliderProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-ink-2">
          {label}
        </label>
        <output htmlFor={id} className="tnum font-display text-xl font-bold text-ink">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-6 w-full cursor-pointer accent-signal"
      />
    </div>
  );
}

// Plain arithmetic on the visitor's own numbers:
// enquiries × share missed × share that would buy × value of a customer.
export default function LostRevenueCalculator() {
  const [enquiries, setEnquiries] = useState(200);
  const [missed, setMissed] = useState(30);
  const [convert, setConvert] = useState(10);
  const [value, setValue] = useState(15000);

  const missedCount = Math.round((enquiries * missed) / 100);
  const customers = (missedCount * convert) / 100;
  const monthly = customers * value;

  return (
    <div className="grid overflow-hidden rounded-[28px] bg-card shadow-[0_24px_70px_-40px_rgba(12,16,36,0.5)] lg:grid-cols-[1.15fr_1fr]">
      <div className="space-y-7 p-6 sm:p-10">
        <Slider
          id="calc-enquiries"
          label="Enquiries you get in a month"
          value={enquiries}
          display={num.format(enquiries)}
          min={10}
          max={2000}
          step={10}
          onChange={setEnquiries}
        />
        <Slider
          id="calc-missed"
          label="Share that get a late reply, or none"
          value={missed}
          display={`${missed}%`}
          min={0}
          max={100}
          step={1}
          onChange={setMissed}
        />
        <Slider
          id="calc-convert"
          label="Share of enquiries that become customers"
          value={convert}
          display={`${convert}%`}
          min={1}
          max={60}
          step={1}
          onChange={setConvert}
        />
        <Slider
          id="calc-value"
          label="What one customer is worth to you"
          value={value}
          display={inr.format(value)}
          min={500}
          max={500000}
          step={500}
          onChange={setValue}
        />
      </div>

      <div className="flex flex-col justify-between bg-night p-6 text-white sm:p-10" aria-live="polite">
        <div>
          <p className="text-white/75">Slow replies could be costing you about</p>
          <p className="tnum mt-3 break-words font-display text-[44px] font-bold leading-none tracking-tight text-dawn sm:text-[60px]">
            {inr.format(monthly)}
          </p>
          <p className="mt-2 text-white/75">a month, or {inr.format(monthly * 12)} a year.</p>
        </div>
        <p className="mt-10 border-t border-rule-night pt-5 leading-relaxed text-white/75">
          That is {num.format(missedCount)} enquiries a month nobody answered in time, and roughly{' '}
          {num.format(Math.round(customers))} customers who went elsewhere. Your numbers, simple multiplication, no
          industry averages.
        </p>
      </div>
    </div>
  );
}
