import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="w-[412px]">
      <div>
        <div className="font-bold text-center text-[32px] mt-10">Sign Up</div>
        <div className="text-gray-400 mt-4 text-center">
          Get started to play and win
        </div>
      </div>
      <div className="space-y-4 ml-4 mr-4 mt-6 mb-6">
        <div>
          <div className="text-sm">Name</div>
          <Input placeholder="Input Here" />
        </div>
        <div>
          <div className="text-sm">Email</div>
          <Input placeholder="Input Here" type="email" />
        </div>
        <div>
          <div className="text-sm">Mobile Number</div>
          <Input placeholder="Input Here" />
        </div>
        <div>
          <div className="text-sm">Referral Code (Optional)</div>
          <Input placeholder="Input Here" />
        </div>
        <div>
          <div className="text-sm">Password</div>
          <Input placeholder="Input Here" type="password" />
        </div>
        <div>
          <div className="text-sm">Confirm Password</div>
          <Input placeholder="Input Here" type="password" />
        </div>
      </div>
      <div className="ml-4 mr-4 mb-4 space-y-4">
        <div>
          <Button variant="default" className="w-[380px] h-14 text-white">
            Sign In
          </Button>
        </div>
        <div className="text-center">
          <Link href="/sign-in" className="text-base text-gray-400">
            Already have an account?
            <span className="text-blue-600"> Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
