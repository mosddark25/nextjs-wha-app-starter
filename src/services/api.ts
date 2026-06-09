const BASE_URL = 'https://api.codingthailand.com/api';

export async function getCourses() {
  const response = await fetch(`${BASE_URL}/course`);
  const data = await response.json();
  return data.data;
}

export async function getApiVersion() {
  const response = await fetch(`${BASE_URL}/version`);
  const data = await response.json();
  return data.data;
}
