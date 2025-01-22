import logo from '../images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import line from '../images/line.svg';
import { LabelInput } from '@/components/labelInput';

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
            <LabelInput
              label="Email"
              htmlFor="email"
              inputId="email"
              type="email"
            />
            <LabelInput
              label="Password"
              htmlFor="password"
              inputId="password"
              type="password"
            />
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
