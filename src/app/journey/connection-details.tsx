import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { Connection } from "@/interfaces/connections";

function padTo2Digits(number_: number) {
  return number_.toString().padStart(2, "0");
}
function formatTime(arrival: string) {
  const date = new Date(arrival);
  return `${padTo2Digits(date.getHours())}:${padTo2Digits(date.getMinutes())}`;
}

export default function ConnectionDetails({
  connection,
}: {
  connection: Connection;
}) {
  return (
    <div className="px-7 py-3">
      <div className="flow-root">
        {connection.sections.map((section, eventIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <ul
            className={
              eventIndex !== connection.sections.length - 1 ? "mb-12" : ""
            }
            // eslint-disable-next-line react/no-array-index-key
            key={`${eventIndex}`}
          >
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-4 left-16 ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
                <div className="relative flex space-x-4">
                  <div>{formatTime(section.departure.departure)}</div>
                  <div>
                    <span className="bg-indigo-500 h-4 w-4 mt-1 rounded-full flex items-center justify-center ring-8 ring-white">
                      <ArrowDownCircleIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4">
                    <div>
                      <div>
                        <div className="font-semibold">
                          {section.departure.station.name}
                        </div>
                        {section.departure.platform !== null && (
                          <div className="text-sm text-gray-500">{`Platform ${section.departure.platform}`}</div>
                        )}
                      </div>
                    </div>
                    <div className="whitespace-nowrap text-right text-xl text-gray-500">
                      {section.journey !== null &&
                        `${section.journey?.category} ${section.journey?.number}`}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative">
                <div className="relative flex  space-x-4">
                  <div>{formatTime(section.arrival.arrival)}</div>
                  <div>
                    <span className="bg-indigo-500 h-4 w-4 mt-1 rounded-full flex items-center justify-center ring-8 ring-white">
                      <ArrowUpCircleIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between">
                    <div>
                      <div>
                        <div className="font-semibold">
                          {section.arrival.station.name}
                        </div>
                        {section.arrival.platform !== null && (
                          <div className="text-sm text-gray-500">{`Platform ${section.arrival.platform}`}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
