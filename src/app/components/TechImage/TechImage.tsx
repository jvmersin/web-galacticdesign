import Image from "next/image";

type TechImageProps = {
  image: string;
  width: number;
  alt: string;
};

export default function TechImage({ image, width, alt }: TechImageProps) {
  return (
    <Image
      width={50}
      height={50}
      style={{
        width: `${width}px`,
        height: "auto",
      }}
      priority={false}
      placeholder="blur"
      blurDataURL={image}
      src={image}
      alt={alt}
    />
  );
}
