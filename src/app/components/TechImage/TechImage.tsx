type TechImageProps = {
    image: string;
    width: number;
    alt: string;
};

export default function TechImage({ image, width, alt }: TechImageProps) {
    return (
        <img
            style={{ width: `${width}px`, height: "auto" }}
            src={image}
            alt={alt}
        />
    );
}
