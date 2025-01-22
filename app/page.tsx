import Link from "next/link";

export default function Home() {
  return (
    <div>
      Home Page
      <div>
        <Link href="/sign-in">Sign In</Link>
      </div>
      <div>
        <Link href="/sign-up">Sign Up</Link>
      </div>
      <div>
        <Link href="/profile">Profile</Link>
      </div>
      <div>
        <Link href="/home">Home</Link>
      </div>
      <div>
        <Link href="/game-list">Game List</Link>
      </div>
      <div>
        <Link href="/query">Use Query</Link>
      </div>
    </div>
  );
}
