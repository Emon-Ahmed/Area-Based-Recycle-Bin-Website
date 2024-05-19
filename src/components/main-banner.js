import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "./ui/button";

export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-center py-36 bg-gradient-to-br from-[#4776E6] to-[#8E54E9]">
      <div className="w-full max-w-3xl p-20 bg-white rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Localized Recycle Bins Marketplace
          </h1>
          <p className="mt-2 text-gray-600">
            Search for anything and get the best results.
          </p>
        </div>
        <div className="flex items-center space-x-4">
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
        </div>
      </div>
    </div>
  );
}
