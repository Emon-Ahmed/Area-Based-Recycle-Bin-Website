import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="bg-[url('/cover.jpg')]">
      <div className="flex flex-col items-center justify-center py-20 layer">
        <div className="w-full p-20 text-center rounded-lg shadow-lg max-w-8xl ">
          <div class="text-8xl font-extrabold">
            <span className="text-white">
              Area Based <br />
              Recycle Bin Website
            </span>
            {/* <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Area Based <br />Recycle  Bin Website
            </span> */}
          </div>
          {/* <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input
                className="w-full"
                placeholder="Search for anything..."
                type="text"
              />
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Barishal">Barishal</SelectItem>
                <SelectItem value="Chattogram">Chattogram</SelectItem>
                <SelectItem value="Khulna">Khulna</SelectItem>
                <SelectItem value="Dhaka">Dhaka</SelectItem>
                <SelectItem value="Rajshahi">Rajshahi</SelectItem>
                <SelectItem value="Rangpur">Rangpur</SelectItem>
                <SelectItem value="Mymensingh">Mymensingh</SelectItem>
                <SelectItem value="Sylhet">Sylhet</SelectItem>
              </SelectContent>
              <Button>Search</Button>
            </Select>
          </div> */}
        </div>
      </div>
    </div>
  );
}
