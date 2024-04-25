import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // forçar a atualização da página sempre que algo no banco é atualizado

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy:(model, { desc }) => desc(model.id)
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4 ">
        {images.map((image)=> (
          <div key={image.id}>{image.name}</div>
        ))}
        {[
          ...images, ...images, ...images,
        ].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 p-4">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>

    </main>
  );
}
