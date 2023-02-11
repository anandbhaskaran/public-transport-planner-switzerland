import type { NextApiRequest, NextApiResponse } from "next";
import { Station } from "@/interfaces/location";

const TRANSPORT_API_BASE_URL = "http://transport.opendata.ch/v1";
const TRANSPORT_API_LOCATIONS_URL = `${TRANSPORT_API_BASE_URL}/locations`;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Station[]>
) {
  const { query } = request.query;
  const proxyResponse = await fetch(
    `${TRANSPORT_API_LOCATIONS_URL}?query=${query}`
  );
  await proxyResponse.json().then((stations) => {
    response.status(200).json(stations);
  });
}
