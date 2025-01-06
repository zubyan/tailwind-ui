import Image from 'next/image';
import item from '@/app/images/item.png';
import { Button } from '@/components/ui/button';
export default function GameCard() {
  return (
    <div className="max-w-[182px] h-[284px] bg-[#ededed] rounded-lg p-3 grid gap-4">
      <Image
        alt="card-image"
        src={item}
        className="w-[158px] h-[120px] rounded-sm"
      />
      <div className="text-xl leading-[26px] tracking-[-0.24px] text-center text-[#403D58] font-semibold">
        Played 20 times on 1 coupon
      </div>
      <Button className="h-14 text-white bg-[#0081A7]">Buy Now</Button>
    </div>
  );
}
