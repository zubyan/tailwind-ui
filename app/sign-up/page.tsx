import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Page() {
  return (
    <div className="max-w-[412px]">
      <form>
        <div>
          <div className="font-bold text-center text-[32px] mt-10">Sign Up</div>
          <div className="text-gray-400 mt-4 text-center">
            Get started to play and win
          </div>
        </div>
        <div className="space-y-4 ml-4 mr-4 mt-6 mb-6">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input placeholder="Input Here" id="name" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Input Here" type="email" id="email" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input placeholder="Input Here" id="mobile" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="referral">Referral Code (Optional)</Label>
            <Input placeholder="Input Here" id="referral" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input placeholder="Input Here" type="password" id="password" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="cpassword">Confirm Password</Label>
            <Input placeholder="Input Here" type="password" id="cpassword" />
          </div>
        </div>
        <div className="ml-4 mr-4 mb-4 grid gap-3">
          <Button variant="default" className="text-white">
            Sign Up
          </Button>
          <div className="text-center">
            <Link href="/sign-in" className="text-base text-gray-400">
              Already have an account?
              <span className="text-blue-600"> Sign In</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
