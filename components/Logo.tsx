import Image from 'next/image';
import wordmark from '@/public/brand/ryxai-white.svg';

type LogoProps = {
  className?: string;
};

// The "ryx ai" wordmark from the official logo pack (white, for the dark site).
export default function Logo({ className = '' }: LogoProps) {
  return <Image src={wordmark} alt="ryx ai" className={className} priority />;
}
