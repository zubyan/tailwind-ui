import { Input } from '@/components/ui/input';
import logo from '../images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import line from '../images/line.svg';
import { Label } from '@/components/ui/label';

export default function Page() {
  return (
    <div className="max-w-[412px]">
      <form>
        <div className="ml-4 mr-4 mt-10">
          <div className="mb-10 flex justify-center">
            <Image alt="logo" src={logo} width={118.98} height={132.07} />
          </div>
          <div className="space-y-5">
            <div>
              <div className="text-2xl font-bold">Sign In</div>
              <div className="text-gray-400 mt-4">
                Get started to play and win
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input placeholder="Input Here" type="email" id="email" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input placeholder="Input Here" type="password" id="password" />
            </div>
            <div>
              <Link
                href="https://www.example.com"
                className="text-gray-400 flex justify-end"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <div className="ml-4 mr-4 mb-4 mt-36 grid gap-3">
          <Button variant="default" className="text-white">
            Sign In
          </Button>
          <Button variant="outline">
            Sign In with <Image alt="line" src={line} width={24} />
          </Button>
          <div className="text-center">
            <Link href="/sign-up" className="text-base text-gray-400">
              Don&apos;t have an account?
              <span className="text-blue-600"> Sign Up</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
