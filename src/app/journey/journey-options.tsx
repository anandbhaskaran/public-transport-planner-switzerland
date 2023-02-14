import { Connection } from "@/interfaces/connections";
import ConnectionPanel from "@/app/journey/connection";

export default function JourneyOptions({
  connections,
  setSelectedConnection,
}: {
  connections: Connection[];
  setSelectedConnection: (connection: Connection) => void;
}) {
  return (
    <div className="w-full">
      {connections.map((connection: Connection, index: number) => (
        // There is no unique key in the connection object
        // eslint-disable-next-line react/no-array-index-key
        <ConnectionPanel
          key={index}
          connection={connection}
          setSelectedConnection={setSelectedConnection}
        />
      ))}
    </div>
  );
}
