import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Home Page
      <Link href="/sign-in">Sign In</Link>
    </div>
  );
}
