export const getGifs = async (cats) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${cats}&limit=10&api_key=pwBRbSUYO9GIJUC7HcgyaAobMPQNmlsL`
  );
  const { data } = await response.json();
  console.log(data);
  const dataGifs = data.map((item) => ({
    id: item.id,
    images: item.images.downsized_medium.url,
    name: item.title,
  }));
  return dataGifs;
};
