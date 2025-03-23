import Image from "next/image";

type ImageProps = {
  image?: {
    medium?: string;
  } | null;
  name: string;
  height?: number;
  width?: number;
};

export const ShowImage = ({ image, name, height, width }: ImageProps) => {
  return (
    <div>
      {image?.medium ? (
        <Image alt={name} width={width} height={height} src={image?.medium} />
      ) : (
        <div
          style={{ width: `${width}px`, height: `${height}px` }}
          className="bg-gray-200"
        >
          <p>No image found for {name}</p>
        </div>
      )}
    </div>
  );
};
