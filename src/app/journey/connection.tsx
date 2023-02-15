import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Connection } from "@/interfaces/connections";
import ConnectionDetails from "@/app/journey/connection-details";

function padTo2Digits(number_: number) {
  return number_.toString().padStart(2, "0");
}
function formatTime(arrival: string) {
  const date = new Date(arrival);
  return `${padTo2Digits(date.getHours())}:${padTo2Digits(date.getMinutes())}`;
}

function parseDurationString(timeString: string) {
  const timeRegex = /(\d+)d(\d+):(\d+):(\d+)/;
  const matches = timeRegex.exec(timeString);
  if (matches) {
    const [, daysString, hoursString, minutesString, secondsString] = matches;
    const days = Number.parseInt(daysString, 10);
    const hours = Number.parseInt(hoursString, 10);
    const minutes = Number.parseInt(minutesString, 10);
    const seconds = Number.parseInt(secondsString, 10);
    if (days > 0) {
      return `${days}d ${hours}s`;
    }
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m ${seconds}s`;
  }
  return "Invalid time string";
}

export default function ConnectionPanel({
  connection,
}: {
  connection: Connection;
}) {
  const [showConnectionDetails, setShowConnectionDetails] = useState(false);
  return (
    <div
      id="connection"
      className="bg-white border-r-2 border-gray-100 border-2 shadow sm:rounded-lg hover:shadow-lg mb-4"
    >
      <div className=" sm:p-6 flex flex-row justify-between">
        <div className="flex flex-col mr-2">
          <div className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            {formatTime(connection.from.departure)}
          </div>
          <div>{connection.from.station.name}</div>
        </div>
        <div className="mr-2">
          <div>
            <ArrowLongRightIcon
              className="w-7 text-indigo-700"
              aria-hidden="true"
            />{" "}
            {parseDurationString(connection.duration)}
          </div>
          <div>{connection.transfers} Transfers</div>
        </div>
        <div className="flex flex-col mr-2">
          <div className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            {formatTime(connection.to.arrival)}
          </div>
          <div>{connection.to.station.name}</div>
        </div>
      </div>
      <div className="bg-indigo-50 py-1 flex hover:italic hover:text-indigo-900">
        <button
          type="button"
          className="flex w-full text-center justify-center"
          onClick={() => setShowConnectionDetails(!showConnectionDetails)}
        >
          <span className="align-middle pr-2">Connection Details</span>
          <ArrowDownCircleIcon className="align-middle" width={20} />
        </button>
      </div>
      <Transition
        show={showConnectionDetails}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ConnectionDetails connection={connection} />
      </Transition>
    </div>
  );
}
