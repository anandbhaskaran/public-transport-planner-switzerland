import { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Combobox } from "@headlessui/react";
import { Station } from "@/interfaces/location";

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function LocationComboBox({
  initialStationName,
  onSelectedStationChange,
  label,
}: {
  initialStationName: string | undefined | null;
  onSelectedStationChange: (station: Station) => void;
  label: string;
}) {
  const [stations, setStations] = useState<Station[]>([]);
  const [query, setQuery] = useState("");
  const placeholderStation: Station = {
    name: "",
  };

  const [selectedStation, setSelectedStation] =
    useState<Station>(placeholderStation);
  const onSelectedValueChange = (station: Station) => {
    onSelectedStationChange(station);
    setSelectedStation(station);
  };

  const fetchStations = async (
    queryParameter: string
  ): Promise<{ stations: Station[] }> => {
    const response = await fetch(`/api/locations?query=${queryParameter}`);
    return response.json();
  };

  useEffect(() => {
    if (initialStationName !== undefined && initialStationName !== null) {
      fetchStations(initialStationName).then((fetchedStations) => {
        setStations(fetchedStations.stations);
        onSelectedValueChange(fetchedStations.stations[0]);
      });
    }
  }, []);

  useEffect(() => {
    if (query !== "") {
      fetchStations(query).then((fetchedStations) => {
        setStations(fetchedStations.stations);
      });
    } else {
      setStations([]);
    }
  }, [query]);

  const filteredStations = stations;

  return (
    <Combobox as="div" value={selectedStation} onChange={onSelectedValueChange}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        {label}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          name={label.toLowerCase()}
          required
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(station: Station) => station?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredStations.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredStations.map((station) => (
              <Combobox.Option
                key={station.name}
                value={station}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {station.name}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
