import GameCard from './game-card';

export default function GameList() {
  return (
    <div className="ml-4 mt-6 grid gap-4 grid-cols-2 max-w-[380px] mb-16">
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
}
