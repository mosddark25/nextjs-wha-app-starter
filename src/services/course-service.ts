const BASE_URL = 'https://api.codingthailand.com/api';

export async function getCourses() {
  const response = await fetch(`${BASE_URL}/course`);
  const data = await response.json();
  return data.data;
}
