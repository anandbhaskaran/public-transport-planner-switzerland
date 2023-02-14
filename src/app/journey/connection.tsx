import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Connection } from "@/interfaces/connections";

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
  setSelectedConnection,
}: {
  connection: Connection;
  setSelectedConnection: (connection: Connection) => void;
}) {
  return (
    <div
      className="bg-white shadow sm:rounded-lg hover:shadow-lg hover:bg-indigo-50"
      onClick={() => setSelectedConnection(connection)}
    >
      <div className="mb-4 py-5 sm:p-6 flex flex-row justify-between">
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
    </div>
  );
}
