import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ShopBanner() {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-[#4776E6] to-[#8E54E9]">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
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
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="london">London</SelectItem>
              <SelectItem value="tokyo">Tokyo</SelectItem>
            </SelectContent>
            <Button>Search</Button>
          </Select>
        </div>
      </div>
    </div>
  );
}
