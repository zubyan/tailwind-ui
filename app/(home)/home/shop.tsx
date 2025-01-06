import Image from 'next/image';
import subway from '@/app/images/subway.png';

type ShopProps = {
  variant: string;
  shopName: string;
  token: number;
};

export function Shop({ variant = 'small', shopName, token }: ShopProps) {
  return (
    <div
      className={`rounded-lg relative ${
        variant == 'small'
          ? 'max-w-[182px] h-[120px]'
          : 'max-w-[380px] h-[160px]'
      }`}
    >
      <Image alt="subway" src={subway} className="absolute inset-0" />
      <div
        className={`bg-card rounded-sm ${
          variant == 'small'
            ? 'grid gap-1 pt-[70px] pl-3 pb-3'
            : 'flex gap-[174px] pt-[128px] pl-3 pb-3'
        }`}
      >
        <div className="text-xl leading-5 tracking-[-0.24px] text-white">
          {shopName}
        </div>
        <div
          className={`tracking-[-0.24px] text-white ${
            variant == 'small'
              ? 'text-[14px] leading-[14px]'
              : 'text-[16px] leading-[16px]'
          }`}
        >
          CP Token: {token}
        </div>
      </div>
    </div>
  );
}
