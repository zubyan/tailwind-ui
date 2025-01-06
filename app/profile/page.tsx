import Image from 'next/image';
import arrow from '../images/arrow-left.svg';
import image_uploader from '../images/image-uploader.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Page() {
  return (
    <div className="max-w-[412px]">
      <div className="ml-4 mr-4 mt-4 inline-flex">
        <Image alt="arrow" src={arrow} width={24}></Image>
        <span className="font-gilroy text-2xl ml-3 font-bold">Profile</span>
      </div>
      <form>
        <div className="ml-4 mr-4 mt-6">
          <div className="flex justify-center">
            <div className="relative w-[130.4px] h-[130.4px]">
              <Image
                alt="uploader"
                src={image_uploader}
                className="w-full h-full absolute inset-0 object-cover"
              />

              <Input
                type="file"
                className="w-full h-full rounded-full absolute inset-0 focus:outline-none border-hidden text-transparent"
              />
            </div>
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
        <div className="ml-4 mr-4 mt-[164px] mb-6 grid gap-3">
          <Button variant="default" className="text-white">
            Update
          </Button>
          <Button variant="outline" className="text-red-600 border-red-600">
            Delete Account
          </Button>
        </div>
      </form>
    </div>
  );
}
