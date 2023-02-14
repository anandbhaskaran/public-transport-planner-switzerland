import React, { useState } from "react";
import LocationComboBox from "./location-combo-box";
import { Station } from "@/interfaces/location";

export default function JourneyForm({
  from,
  to,
  onSearchConnection,
}: {
  from: string | undefined | null;
  to: string | undefined | null;
  onSearchConnection: (
    from: Station | undefined,
    to: Station | undefined
  ) => void;
}) {
  const [fromStation, setFromStation] = useState<Station | undefined>();
  const [toStation, setToStation] = useState<Station | undefined>();
  const handleSubmit = () => {
    onSearchConnection(fromStation, toStation);
  };

  return (
    <form name="journey" onSubmit={handleSubmit} className="w-full">
      <div className="mt-1">
        <LocationComboBox
          initialStationName={from}
          onSelectedStationChange={(station: Station) =>
            setFromStation(station)
          }
          label="From"
        />

        <p className="mt-2 text-sm text-gray-500" id="from-description">
          Starting point of your amazing journey
        </p>
      </div>

      <div className="my-5">
        <LocationComboBox
          initialStationName={to}
          onSelectedStationChange={(station: Station) => setToStation(station)}
          label="To"
        />
        <p className="mt-2 text-sm text-gray-500" id="to-description">
          Destination of your amazing journey
        </p>
      </div>
      <button
        type="button"
        name="search"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleSubmit}
      >
        Search connections
      </button>
    </form>
  );
}
