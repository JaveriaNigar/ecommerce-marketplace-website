import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import pic from "../../../public/assets/fearturedpic.png";

const Featuredpage = () => {
  return (
    <section className="w-full flex items-center mt-6 justify-center px-4 sm:px-6 lg:px-12">
      <div className="w-full flex flex-col gap-6">
        {/*Header Section */}
        <header className="w-full flex items-center">
          <p className="text-2xl sm:text-3xl font-semibold">Featured</p>
        </header>

        {/* Content Section */}
        <div className="w-full flex flex-col items-center gap-6">
          {/*Featured Image (Optimized for Better Performance) */}
          <div className="w-full max-w-[1400px] h-auto flex justify-center">
            <Image
              src={pic}
              width={1400}
              height={600}
              alt="Featured Image - Step into what feels good"
              priority
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/*Text and Button Section */}
          <div className="w-full max-w-[800px] text-center flex items-center flex-col gap-4">
            <h1 className="text-[30px] sm:text-[30px] lg:text-[50px] font-semibold leading-tight">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Cause everyone should know the feeling of running in that perfect pair
            </p>
            <Link href={"/DynamicRoutes/allproducts"}>
              <Button className="rounded-full px-6 py-2 w-[150px] bg-black text-white hover:bg-gray-800 transition duration-300">
                Find Your Shoe
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featuredpage;
