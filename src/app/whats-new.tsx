import SidePanel from "@/app/components/side-panel";

const messages = [
  {
    id: 4,
    subject: "Implemented pagination",
    sender: "Anand Bhaskaran",
    time: "15-Feb",
    datetime: "2023-02-15T00:58",
  },
  {
    id: 3,
    subject: "Implemented the connections details",
    sender: "Anand Bhaskaran",
    time: "15-Feb",
    datetime: "2023-02-14T23:33",
  },
  {
    id: 3,
    subject: "Implemented the connections page",
    sender: "Anand Bhaskaran",
    time: "14-Feb",
    datetime: "2023-02-14T01:11",
  },
  {
    id: 2,
    subject: "Proxy API calls for autocompletion",
    sender: "Anand Bhaskaran",
    time: "11-Feb",
    datetime: "2023-02-11T23:48",
  },
  {
    id: 1,
    subject: "Added whats new section",
    sender: "Anand Bhaskaran",
    time: "11-Feb",
    datetime: "2023-02-11T22:22",
  },
  // More messages...
];

export default function WhatsNew({
  showWhatsNew,
  setWhatsNew,
}: {
  showWhatsNew: boolean;
  setWhatsNew: (state: boolean) => void;
}) {
  return (
    <SidePanel
      showPanel={showWhatsNew}
      setShowPanel={setWhatsNew}
      title="What's New"
    >
      <div className="absolute inset-0 px-4 sm:px-6">
        <ul className="divide-y divide-gray-200">
          {messages.map((message) => (
            <li
              key={message.id}
              className="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <span className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="truncate text-sm font-medium text-gray-900">
                      {message.sender}
                    </p>
                    <p className="truncate text-sm text-gray-500">
                      {message.subject}
                    </p>
                  </span>
                </div>
                <time
                  dateTime={message.datetime}
                  className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >
                  {message.time}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SidePanel>
  );
}
