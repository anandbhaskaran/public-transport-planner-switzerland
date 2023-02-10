import React from "react";
import Autosuggest from "react-autosuggest";
import { Station } from "@/interfaces/location";

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: "C",
    year: 1972,
  },
  {
    name: "Elm",
    year: 2012,
  },
];

const stations: Station[] = [
  {
    id: "8500218",
    name: "Olten",
    score: undefined,
    coordinate: {
      type: "WGS84",
      x: 47.351_936,
      y: 7.907_707,
    },
    distance: undefined,
    icon: "train",
  },
  {
    id: "8572352",
    name: "Olten, Bahnhof",
    score: undefined,
    coordinate: {
      type: "WGS84",
      x: 47.351_93,
      y: 7.906_926,
    },
    distance: undefined,
    icon: "bus",
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : stations.filter(
        (station) =>
          station.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion: Station) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion: Station) => <div>{suggestion.name}</div>;

const handleSubmit = (event: any) => {
  event.preventDefault();

  const data = {
    from: event.target.from.value,
    to: event.target.to.value,
  };

  console.log(data);
};

export default function Form() {
  const [from, setFrom] = React.useState("");
  const [suggestions, setsuggestions] = React.useState([]);

  const onChange = (event, { newValue }) => {
    setFrom(newValue);
  };

  const fromInputProperties = {
    value: from,
    onChange,
    className:
      "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    setsuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setsuggestions([]);
  };

  return (
    <form
      name="journey"
      onSubmit={handleSubmit}
      className="w-1/3 flex flex-col mt-11 "
    >
      <div className="">
        <label
          htmlFor="from"
          className="block text-sm font-medium text-gray-70"
        >
          From
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="from"
            id="from"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Starting point"
            aria-describedby="from-description"
            required
          />
        </div>
        <p className="mt-2 text-sm text-gray-500" id="from-description">
          Starting point of your amazing journey
        </p>
      </div>

      <div className="w-auto my-5">
        <label htmlFor="to" className="block text-sm font-medium text-gray-70">
          To
        </label>
        <div className="mt-1">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={fromInputProperties}
          />
          <input
            type="text"
            name="to"
            id="to"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Destination"
            aria-describedby="to-description"
            required
          />
        </div>
        <p className="mt-2 text-sm text-gray-500" id="to-description">
          Destination of your amazing journey
        </p>
      </div>
      <button
        type="submit"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Search connections
      </button>
    </form>
  );
}
