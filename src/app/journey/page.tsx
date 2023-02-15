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
  const [fetchingConnection, setFetchingConnection] = useState<boolean>(true);

  // Check if from and to exist on monunt
  useEffect(() => {
    if (!queriedFrom || !queriedTo) {
      router.push("/");
    }
  }, []);

  const [fromStationName, setFromStationName] = useState<
    string | null | undefined
  >(queriedFrom);
  const [toStationName, setToStationName] = useState<string | null | undefined>(
    queriedTo
  );

  const [connections, setConnections] = useState<Connection[]>([]);
  const [connectionPage, setConnectionPage] = useState<number>(0);
  const updateConnections = (
    from: Station | undefined,
    to: Station | undefined
  ) => {
    setFromStationName(from?.name);
    setToStationName(to?.name);
  };

  const requestMoreConnections = () => {
    setConnectionPage(connectionPage + 1);
  };

  const fetchConnections = async (
    from: string,
    to: string,
    page: number
  ): Promise<{ connections: Connection[] }> => {
    setFetchingConnection(true);
    const response = await fetch(
      `/api/connections?from=${from}&to=${to}&page=${page}`
    );
    setFetchingConnection(false);
    return response.json();
  };

  useEffect(() => {
    if (fromStationName === null || fromStationName === undefined) {
      console.error("invalid from station name");
    } else if (toStationName === null || toStationName === undefined) {
      console.error("Invalid to station name");
    } else {
      fetchConnections(fromStationName, toStationName, connectionPage).then(
        (fetchedConnections) => {
          setConnections(fetchedConnections.connections);
        }
      );
    }
  }, [fromStationName, toStationName]);

  useEffect(() => {
    if (fromStationName === null || fromStationName === undefined) {
      console.error("invalid from station name");
    } else if (toStationName === null || toStationName === undefined) {
      console.error("Invalid to station name");
    } else {
      fetchConnections(fromStationName, toStationName, connectionPage).then(
        (fetchedConnections) => {
          setConnections([...connections, ...fetchedConnections.connections]);
        }
      );
    }
  }, [connectionPage]);

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
        <div className="w-3/4 flex pl-7 self-start flex-col">
          <JourneyOptions connections={connections} />
          {!fetchingConnection && (
            <button
              type="button"
              name="loadMore"
              id="loadMore"
              className="nline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={requestMoreConnections}
            >
              More connections
            </button>
          )}
          {fetchingConnection && (
            <div className="w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Fetching connections...
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
