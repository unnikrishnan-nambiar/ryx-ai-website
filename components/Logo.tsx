import Image from 'next/image';
import logoWhite from '@/public/brand/ryxai-white.svg';
import logoBlack from '@/public/brand/ryxai-black.svg';

type LogoProps = {
  className?: string;
  tone?: 'white' | 'black';
};

// The "ryx ai" wordmark from the logo package (public/brand/). White for the
// dark site chrome, black for light surfaces. Imported statically so
// next/image applies the GitHub Pages basePath.
export default function Logo({ className = '', tone = 'white' }: LogoProps) {
  return (
    <Image
      src={tone === 'white' ? logoWhite : logoBlack}
      alt="ryx ai"
      className={className}
      priority
    />
  );
}
