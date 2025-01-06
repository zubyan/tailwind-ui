'use client';
import Image from 'next/image';
import hamburger from '../app/images/hamburger.svg';
import cp from '../app/images/cp.svg';
import pt from '../app/images/pt.svg';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  console.log(pathname);
  const title: any = { '/home': 'Home', '/game-list': 'Game List' };
  return (
    <header className="max-w-[380px] h-6 mt-4 ml-4 flex justify-between">
      <div className="inline-flex">
        <Image alt="hamb" src={hamburger} className="w-6 h-6"></Image>
        <div className="text-2xl leading-6 font-bold ml-3">
          {title[pathname]}
        </div>
      </div>
      <div>
        <div className="inline-flex">
          <Image alt="cp" src={cp} className="h-6 w-6"></Image>
          <div className="ml-1">20</div>
        </div>
        <div className="inline-flex ml-3">
          <Image alt="cp" src={pt} className="h-6 w-6"></Image>
          <div className="ml-1">8</div>
        </div>
      </div>
    </header>
  );
}
