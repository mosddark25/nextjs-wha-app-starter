export async function getApiVersion() {
  const response = await fetch(`${BASE_URL}/version`);
  const data = await response.json();
  return data.data;
}
