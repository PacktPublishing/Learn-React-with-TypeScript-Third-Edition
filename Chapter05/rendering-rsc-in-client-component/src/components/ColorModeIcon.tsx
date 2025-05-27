import Image from 'next/image';
import colorModeSvg from './colorModeIcon.svg';

export function ColorModeIcon() {
  console.log('Is ColorModeIcon an RSC?');
  return <Image src={colorModeSvg} alt="Color mode icon" className="mr-2 h-6 w-6" />;
}
