import { Item } from './item';
import item from '@/app/images/item.png';
import { Shop } from './shop';
export default function Page() {
  return (
    <div className="max-w-[380px] grid gap-4 mt-6 ml-4 mb-16">
      <div>
        <Shop variant="large" shopName="Mcdonalds" token={1} />
      </div>
      <div className="max-w-[380px] grid gap-4 grid-cols-2">
        <Shop variant="small" shopName="Subway" token={1} />
        <Shop variant="small" shopName="KFC" token={1} />
      </div>
      <div className="max-w-[380px] grid gap-4 grid-cols-2">
        <Item
          itemName="Burger"
          image={item}
          token={1}
          expiry="05/31/2024"
          shop="KFC"
        />
        <Item
          itemName="Pizza"
          image={item}
          token={2}
          expiry="06/31/2024"
          shop="Domino's"
        />
        <Item
          itemName="Pizza"
          image={item}
          token={2}
          expiry="06/31/2024"
          shop="Domino's"
        />
        <Item
          itemName="Pizza"
          image={item}
          token={2}
          expiry="06/31/2024"
          shop="Domino's"
        />
      </div>
    </div>
  );
}
