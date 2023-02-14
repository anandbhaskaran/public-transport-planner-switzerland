"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import JourneyForm from "@/app/components/journey-form";
import JourneyOptions from "@/app/journey/journey-options";
import { Station } from "@/interfaces/location";
import { Connection } from "@/interfaces/connections";

export default function Journey() {
  const queriedFrom = useSearchParams().get("from");
  const queriedTo = useSearchParams().get("to");
  const router = useRouter();
  // Check if from and to exist on monunt
  useEffect(() => {
    if (!queriedFrom || !queriedTo) {
      router.push("/");
    }
  });

  const [fromStationName, setFromStationName] = useState<
    string | null | undefined
  >(queriedFrom);
  const [toStationName, setToStationName] = useState<string | null | undefined>(
    queriedTo
  );

  const [connections, setConnections] = useState<Connection[]>([]);

  const updateConnections = (
    from: Station | undefined,
    to: Station | undefined
  ) => {
    setFromStationName(from?.name);
    setToStationName(to?.name);
  };

  const fetchConnections = async (
    from: string,
    to: string
  ): Promise<{ connections: Connection[] }> => {
    const response = await fetch(`/api/connections?from=${from}&to=${to}`);
    return response.json();
  };

  useEffect(() => {
    if (fromStationName === null || fromStationName === undefined) {
      console.error("invalid from station name");
    } else if (toStationName === null || toStationName === undefined) {
      console.error("invalid to station name");
    } else {
      fetchConnections(fromStationName, toStationName).then(
        (fetchedConnections) => {
          setConnections(fetchedConnections.connections);
        }
      );
    }
  }, [fromStationName, toStationName]);

  return (
    <main className="bg-white mx-auto py-20 px-6 sm:py-4 lg:px-8 max-w-6xl">
      <div className="flex justify-between align-top">
        <div className="w-1/4 flex self-start">
          <JourneyForm
            from={fromStationName}
            to={toStationName}
            onSearchConnection={updateConnections}
          />
        </div>
        <div className="w-3/4 flex pl-7 self-start">
          <JourneyOptions connections={connections} />
        </div>
      </div>
    </main>
  );
}
