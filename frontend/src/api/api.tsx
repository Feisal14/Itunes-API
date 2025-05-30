export async function fetchPodcasts(
  term: string,
  page: number = 1,
  limit: number = 20
) {
  const offset = (page - 1) * limit;
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    term
  )}&media=podcast&limit=${limit}&offset=${offset}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
