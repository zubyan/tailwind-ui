import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LabelInput } from '@/components/labelInput';

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
          <LabelInput label="Name" htmlFor="name" inputId="name" />
          <LabelInput
            label="Email"
            htmlFor="email"
            inputId="email"
            type="email"
          />
          <LabelInput
            label="Mobile Number"
            htmlFor="mobile"
            inputId="mobile"
            type="number"
          />
          <LabelInput
            label="Referral Code (Optional)"
            htmlFor="refferal"
            inputId="refferal"
          />
          <LabelInput
            label="Password"
            htmlFor="password"
            inputId="password"
            type="password"
          />
          <LabelInput
            label="Confirm Password"
            htmlFor="cpassword"
            inputId="cpassword"
            type="password"
          />
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
