import { API_BASE_URL } from "./config";

export async function getApiVersion() {
  const response = await fetch(`${API_BASE_URL}/version`);
  const data = await response.json();
  return data.data;
}
