const API_URL = "https://localhost:9000";

export async function getData() {
  const res = await fetch(`${API_URL}/boards`);

  if (!res.ok) throw Error("Failed getting data");

  const { data } = await res.json();
  console.log(data)
  return data;
}