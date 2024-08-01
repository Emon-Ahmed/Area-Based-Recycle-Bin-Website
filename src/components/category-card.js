import { BedIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CategoryCard = () => {
  return (
    <div className="body">
      <div>
        <Link href="/" className="card education">
          <div className="overlay"></div>
          <div className="circle">
            <BedIcon className="w-6 h-8"/>
          </div>
          <p>Education</p>
        </Link>
      </div>

    </div>
  );
};

export default CategoryCard;
