import Image from "next/image";
import Link from "next/link";

export default function HomeImages(props: {
  srcImage: string;
  imgAlt: string;
  imgTitle: string;
  imageUrl: string;
}) {
  return (
    <div className="flex h-[295px] w-[200px] flex-col items-center justify-center gap-1 bg-white">
      <Link href={`/img/${props.imageUrl}`} passHref>
        <Image
          className="-mb-2 mt-2 flex h-[233px] w-[190px] object-cover object-bottom"
          src={props.srcImage}
          alt={props.imgAlt}
          width={192}
          height={192}
        />
      </Link>
      <div>
        <h1 className="text-black">{props.imgTitle}</h1>
      </div>
    </div>
  );
}
