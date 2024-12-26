import { Input } from '@/components/ui/input';
import logo from '../images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import line from '../images/line.svg';

export default function Page() {
  return (
    <div className="w-[412px]">
      <div className="ml-4 mr-4 mt-10">
        <div className="mb-10 flex justify-center">
          <Image alt="logo" src={logo} width={118.98} height={132.07} />
        </div>
        <div className="space-y-5">
          <div>
            <div className="text-2xl">Sign In</div>
            <div className="text-gray-400 mt-4">
              Get started to play and win
            </div>
          </div>
          <div>
            <div className="text-sm">Email</div>
            <Input placeholder="Input Here" type="email" />
          </div>
          <div>
            <div className="text-sm">Password</div>
            <Input placeholder="Input Here" type="password" />
          </div>
          <div>
            <Link
              href="https://www.example.com"
              className="text-gray-400 pl-56"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
      <div className="ml-4 mr-4 mb-4 mt-36 space-y-4">
        <div>
          <Button variant="default" className="w-[380px] h-14 text-white">
            Sign In
          </Button>
        </div>
        <div>
          <Button variant="outline" className="w-[380px] h-14">
            Sign In with <Image alt="line" src={line} width={24} />
          </Button>
        </div>
        <div className="text-center">
          <Link href="/sign-up" className="text-base text-gray-400">
            Don&apos;t have an account?
            <span className="text-blue-600"> Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
