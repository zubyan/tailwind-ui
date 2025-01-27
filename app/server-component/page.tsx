async function getPhotos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (!res.ok) throw new Error("failed to fetch posts");
  return res.json();
}

export default async function postsPage() {
  const photos = await getPhotos();

  return (
    <div>
      <h1>Photos</h1>
      {photos.map((photo: any) => (
        <div key={photo.id}>
          <h1>{photo.title}</h1>
          <div>{photo.url}</div>
        </div>
      ))}
    </div>
  );
}
