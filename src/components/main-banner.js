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
          </div>
        </div>
      </div>
    </div>
  );
}
