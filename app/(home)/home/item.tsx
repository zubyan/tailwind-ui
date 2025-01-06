import Image, { StaticImageData } from 'next/image';
type ItemProps = {
  itemName: string;
  image: StaticImageData;
  token: number;
  expiry: string;
  shop: string;
};
export function Item({ itemName, image, token, expiry, shop }: ItemProps) {
  return (
    <div>
      <div className="max-w-[182px] h-[287px] bg-[#ededed] rounded-lg p-3 grid gap-4 text-[#403D58]">
        <div className="w-[158px] h-[158px]">
          <Image alt="card" src={image} className="h-[120px] rounded-sm" />
          <div className="mt-3 pt-1.5 pb-1.5 pl-2 pr-2 w-fit h-[26px] bg-[#0081A7] rounded-[8px]">
            <div className="text-sm leading-[14px] font-gilroy text-white tracking-[-0.24px]">
              CP Token: {token}
            </div>
          </div>
        </div>
        <div className="text-xl leading-5 font-bold">{itemName}</div>
        <div className="grid gap-3">
          <div className="text-base leading-4 tracking-[-0.24px]">
            Expiry: {expiry}
          </div>
          <div className="text-base leading-4 tracking-[-0.24px]">
            Shop: {shop}
          </div>
        </div>
      </div>
    </div>
  );
}
