import { SignedIn, SignedOut } from "@clerk/nextjs";
import HomeImages from "~/common/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"; // forçar a atualização da página sempre que algo no banco é atualizado

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-start gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="mb-3 flex h-48 w-48 flex-col gap-2">
          <HomeImages
            srcImage={image.url}
            imgAlt={image.name}
            imgTitle={image.name}
            imageUrl={image.url}
          />
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
