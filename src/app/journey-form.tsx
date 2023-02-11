import React, { useState } from "react";
import LocationComboBox from "./location-combo-box";
import { Station } from "@/interfaces/location";

export default function JourneyForm() {
  const [fromStation, setFromStation] = useState<Station | undefined>();
  const [toStation, setToStation] = useState<Station | undefined>();

  const handleSubmit = () => {
    const data = {
      from: fromStation,
      to: toStation,
    };
    console.log(data);
  };

  return (
    <form
      name="journey"
      onSubmit={handleSubmit}
      className="w-1/3 flex flex-col mt-11 "
    >
      <div className="mt-1">
        <LocationComboBox
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
