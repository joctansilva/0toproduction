import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/ddcda35a-8510-4796-9479-f0ce3ff124fd-7i8z7s.jpg",
  "https://utfs.io/f/6f42d743-9f27-4ed7-9b30-3ca61bf2be9e-p8kwq9.jpg",
  "https://utfs.io/f/148e6e11-416d-43a5-b20d-937c70ffda65-mn4sql.jpg",
  "https://utfs.io/f/c8a7c2c1-9d9e-4da4-924a-4e23afc53f90-14ju6.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 ">
        {[
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
        ].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>

    </main>
  );
}
