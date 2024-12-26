import Image from 'next/image';
import arrow from '../images/arrow-left.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Page() {
  return (
    <div className="w-[412px]">
      <div className="ml-4 mr-4 mt-4 inline-flex">
        <Image alt="arrow" src={arrow} width={24}></Image>
        <span className="font-gilroy text-2xl ml-3 font-bold">Profile</span>
      </div>
      <div className="ml-4 mr-4 mt-6">
        <div className="flex justify-center">
          <Input type="file" className="w-[130.4px] h-[130.4px] rounded-full" />
        </div>
        <div className="space-y-5 mt-10">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input placeholder="Input Here" id="name" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input placeholder="Input Here" id="mobile" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Input Here" type="email" id="email" />
          </div>
        </div>
      </div>
      <div className="ml-4 mr-4 mt-[164px] mb-6 space-y-3">
        <div>
          <Button variant="default" className="w-[380px] h-14 text-white">
            Update
          </Button>
        </div>
        <div>
          <Button
            variant="outline"
            className="w-[380px] h-14 text-red-600 border-red-600"
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}
