import Image from 'next/image';
import home from '../app/images/home.svg';
import favourites from '../app/images/favourites.svg';
import purchased from '../app/images/purchased.svg';
import profile from '../app/images/profile.svg';

export function Footer() {
  return (
    <footer className="max-w-[412px] h-[60px] rounded-t-3xl bg-gray-100 fixed bottom-0">
      <div className="flex pl-3 pr-3 pt-[14px]">
        <div className="min-w-[97px] min-h-[46] grid justify-items-center">
          <Image alt="home" src={home} className="w-6 h-6 mb-1.5" />
          <div className="text-xs">Home</div>
        </div>
        <div className="min-w-[97px] min-h-[46] grid justify-items-center">
          <Image alt="favourites" src={favourites} className="w-6 h-6 mb-1.5" />
          <div className="text-xs">Favourites</div>
        </div>
        <div className="min-w-[97px] min-h-[46] grid justify-items-center">
          <Image alt="purchased" src={purchased} className="w-6 h-6 mb-1.5" />
          <div className="text-xs">Purchased</div>
        </div>
        <div className="min-w-[97px] min-h-[46] grid justify-items-center">
          <Image alt="profile" src={profile} className="w-6 h-6 mb-1.5" />
          <div className="text-xs">Profile</div>
        </div>
      </div>
    </footer>
  );
}
