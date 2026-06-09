import { API_BASE_URL } from "./config";

export async function getCourses() {
  const response = await fetch(`${API_BASE_URL}/course`);
  const data = await response.json();
  return data.data;
}
