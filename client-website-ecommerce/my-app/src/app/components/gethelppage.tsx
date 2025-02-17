import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { LuMessageSquareQuote } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const Gethelppage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center px-3 sm:px-4 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-6 sm:gap-8 py-6 sm:py-8">
        {/* Header Section - Optimized for mobile */}
        <div className="w-full flex flex-col justify-center items-center gap-4 sm:gap-5">
          <h1 className="text-2xl sm:text-3xl font-bold">GET HELP</h1>
          <Input
            placeholder="How can we help you?"
            className="w-full max-w-lg border rounded-lg px-3 py-2 shadow-sm"
          />
        </div>

        {/* Main Content - Mobile-first layout */}
        <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-5 sm:gap-6">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h1>
              <p className="text-gray-700 text-sm sm:text-base">
                We want to make buying your favorite Nike shoes and gear online
                fast and easy. We accept the following payment options:
              </p>
              <ul className="ml-4 list-disc text-gray-600 text-sm sm:text-base space-y-2">
                <li>
                  Visa, Mastercard, Diners Club, Discover, American Express,
                  Visa Electron, Maestro
                </li>
                <li>
                  If you enter your PAN information at checkout, you can pay
                  with PayTM or a local credit or debit card.
                </li>
                <li>Apple Pay</li>
              </ul>
              <p className="text-gray-700 text-sm sm:text-base">
                <Link
                  href="/"
                  className="underline font-semibold text-blue-600"
                >
                  Nike Members
                </Link>{" "}
                can store multiple debit or credit cards in their profile for
                faster checkout. If you&#39;re not already a Member, join us
                today.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
                <Link href="/signup">
                  <Button className="rounded-xl px-4 py-2 bg-blue-600 text-white text-sm sm:text-base">
                    JOIN US
                  </Button>
                </Link>
                <Link href="/DynamicRoutes/allproducts">
                  <Button className="rounded-xl px-4 py-2 bg-blue-600 text-white text-sm sm:text-base">
                    SHOP NIKE
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h2 className="text-lg sm:text-xl font-semibold">FAQs</h2>
              <div className="text-gray-700 text-sm sm:text-base space-y-3">
                <p className="font-semibold">
                  Does my card need international purchases enabled?
                </p>
                <p>
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout if
                  international purchases need to be enabled.
                </p>
                <p>
                  Please note, some banks may charge a small transaction fee for
                  international orders.
                </p>
                <p className="font-semibold">
                  Can I pay for my order with multiple methods?
                </p>
                <p>
                  No, payment for Nike orders can&#39;t be split between
                  multiple payment methods.
                </p>
                <p className="font-semibold">
                  What payment method is accepted for SNKRS orders?
                </p>
                <p>
                  You can use any accepted credit card to pay for your SNKRS
                  order.
                </p>
                <p className="font-semibold">
                  Why don&#39;t I see Apple Pay as an option?
                </p>
                <p>
                  To see Apple Pay as an option in the Nike App or on Nike.com,
                  you&#39;ll need to use a compatible Apple device running the
                  latest OS, be signed in to your iCloud account and have a
                  supported card in your Wallet. Additionally, you&#39;ll need
                  to use Safari to use Apple Pay on Nike.com.
                </p>
              </div>
              <p className="font-semibold text-sm sm:text-base">Was this answer helpful?</p>
              <div className="flex items-center gap-3 text-xl sm:text-2xl text-gray-500">
                <FaThumbsDown className="cursor-pointer hover:text-red-500" />
                <FaThumbsUp className="cursor-pointer hover:text-green-500" />
              </div>
            </div>
          </div>

          {/* Right Section - Mobile optimized */}
          <div className="w-full lg:w-[30%] border-t-2 lg:border-t-0 lg:border-l-2 pt-4 lg:pt-0 lg:pl-6">
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Contact Us */}
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <h2 className="text-xl sm:text-2xl font-bold">CONTACT US</h2>
                <CiMobile3 className="text-[60px] sm:text-[80px] text-gray-500" />
                <p className="font-semibold text-base sm:text-lg">0008009190566</p>
                <p className="text-gray-700 text-sm sm:text-base text-center">
                  Products & Orders: 24 hours a day, 7 days a week
                </p>
                <p className="text-gray-700 text-sm sm:text-base text-center">
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
              </div>

              {/* Other Methods */}
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <LuMessageSquareQuote className="text-[60px] sm:text-[80px] text-gray-500" />
                <p className="font-semibold text-base sm:text-lg">24 hours a day</p>
                <p className="text-gray-700 text-sm sm:text-base">7 days a week</p>
              </div>

              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <IoMdMail className="text-[60px] sm:text-[80px] text-gray-500" />
                <p className="font-semibold text-base sm:text-lg text-center">
                  We&#39;ll reply within five business days
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <IoLocation className="text-[60px] sm:text-[80px] text-gray-500" />
                <p className="font-semibold text-base sm:text-lg">STORE LOCATOR</p>
                <p className="text-gray-700 text-sm sm:text-base text-center">
                  Find Nike retail stores near you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gethelppage;