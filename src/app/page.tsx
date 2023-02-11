"use client";

import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Form from "@/app/form";

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
        <Form />
      </div>

      <div className={styles.center} />
    </main>
  );
}
