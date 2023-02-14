import { Connection } from "@/interfaces/connections";
import ConnectionPanel from "@/app/journey/connection";

export default function JourneyOptions({
  connections,
}: {
  connections: Connection[];
}) {
  return (
    <div className="w-full">
      {connections.map((connection: Connection, index: number) => (
        // There is no unique key in the connection object
        // eslint-disable-next-line react/no-array-index-key
        <ConnectionPanel connection={connection} key={index} />
      ))}
    </div>
  );
}
