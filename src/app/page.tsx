"use client";

import Image from "next/image";
// import { Inter } from "@next/font/google";
import React from "react";
import styles from "./page.module.css";

// const inter = Inter({ subsets: ["latin"] });

const handleSubmit = (event: any) => {
  event.preventDefault();

  const data = {
    from: event.target.from.value,
    to: event.target.to.value,
  };

  console.log(data);
};

export default function Home() {
  return (
    <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome to Swiss Travel planner
        </h1>
        <div className="">
          <a
            href="https://anand-creations.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-base leading-7 flex justify-center align-top text-indigo-600"
          >
            By
            <Image
              src="/anand-creations.png"
              alt="Anand Creations"
              className="invert"
              width={30}
              height={30}
              priority
            />
            Anand Creations
          </a>
        </div>
      </div>

      <div className="w-4/5 flex justify-evenly">
        <Image
          className="flex w-1/3"
          src="/location_search.svg"
          alt="location search icon"
          width={100}
          height={100}
        />
        <form
          name="journey"
          onSubmit={handleSubmit}
          className="w-1/3 flex flex-col mt-11"
        >
          <div className="w-auto my-5">
            <label
              htmlFor="from"
              className="block text-sm font-medium text-gray-70"
            >
              From
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="from"
                id="from"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Starting point"
                aria-describedby="from-description"
                required
              />
            </div>
            <p className="mt-2 text-sm text-gray-500" id="from-description">
              Starting point of your amazing journey
            </p>
          </div>

          <div className="max-w-md w-auto my-5">
            <label
              htmlFor="to"
              className="block text-sm font-medium text-gray-70"
            >
              To
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="to"
                id="to"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Destination"
                aria-describedby="to-description"
                required
              />
            </div>
            <p className="mt-2 text-sm text-gray-500" id="to-description">
              Destination of your amazing journey
            </p>
          </div>
          <button
            type="submit"
            className="w-full my-5 border rounded-md p-3 border-white-600 hover:bg-white hover:text-blue-600"
          >
            Search connections
          </button>
        </form>
      </div>

      <div className={styles.center} />
    </main>
  );
}
