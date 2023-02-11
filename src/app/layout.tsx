"use client";

import "./globals.css";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import WhatsNew from "@/app/whats-new";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showWhatsNew, setWhatsNew] = useState(false);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>Public Transport Planer Switzerland</title>
      </head>
      <body>
        <WhatsNew showWhatsNew={showWhatsNew} setWhatsNew={setWhatsNew} />
        <div className="max-h-full">
          <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>

                <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                    onClick={() => setWhatsNew(true)}
                  >
                    What&apos;s new?
                  </a>
                </div>
              </div>
            </div>
          </Popover>
          {children}
        </div>
      </body>
    </html>
  );
}
