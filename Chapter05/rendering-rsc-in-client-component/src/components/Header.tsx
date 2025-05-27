import { ColorModeToggle } from './ColorModeToggle';
import { ColorModeIcon } from './ColorModeIcon';

export function Header() {
  console.log('Is Header an RSC?');
  const total = 99 + 99;
  return (
    <header className="flex w-full items-center justify-between">
      <span className="text-lg font-bold">My app</span>
      <span>{total}</span>
      <ColorModeToggle icon={<ColorModeIcon />} />
    </header>
  );
}
