/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4PmxK6p1T8g
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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
          <h1 className="text-3xl font-bold text-gray-900">
            Find What You Need
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
