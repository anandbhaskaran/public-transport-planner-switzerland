"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import JourneyForm from "./components/journey-form";
import { Station } from "@/interfaces/location";

export default function Home() {
  const router = useRouter();
  const onSearchConnection = (
    fromStation: Station | undefined,
    toStation: Station | undefined
  ) => {
    if (fromStation === undefined || toStation === undefined) {
      // this should not happen as the input fields are required
      console.error("Invalid from or to station");
    }

    router.push(`/journey?from=${fromStation?.name}&to=${toStation?.name}`);
  };
  return (
    <main className="grid place-items-center bg-white py-20 px-6 sm:py-16 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Swiss Travel planner
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
              width={30}
              height={30}
              priority
            />
            Anand Creations
          </a>
        </div>
      </div>

      <div className="w-4/5 flex justify-evenly mt-8">
        <Image
          className="flex w-1/3"
          src="/location_search.svg"
          alt="location search icon"
          width={100}
          height={100}
        />
        <div className="w-1/3 flex flex-col mt-11 ">
          <JourneyForm
            onSearchConnection={onSearchConnection}
            from={undefined}
            to={undefined}
          />
        </div>
      </div>

      <div className={styles.center} />
    </main>
  );
}
