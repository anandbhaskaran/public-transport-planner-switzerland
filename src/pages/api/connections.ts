import type { NextApiRequest, NextApiResponse } from "next";
import { Connection } from "@/interfaces/connections";

const TRANSPORT_API_BASE_URL = "http://transport.opendata.ch/v1";
const TRANSPORT_API_CONNECTION_URL = `${TRANSPORT_API_BASE_URL}/connections`;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Connection[]>
) {
  const { from, to } = request.query;
  const proxyResponse = await fetch(
    `${TRANSPORT_API_CONNECTION_URL}?from=${from}&to=${to}`
  );
  await proxyResponse.json().then((stations) => {
    response.status(200).json(stations);
  });
}
