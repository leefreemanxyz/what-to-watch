import Image from "next/image";

type ImageProps = {
  image?: {
    medium?: string;
  } | null;
  name: string;
  height?: number;
  width?: number;
};

export const ShowImage = ({
  image,
  name,
  height = 280,
  width = 280,
}: ImageProps) => {
  return (
    <div>
      {image?.medium ? (
        <Image alt={name} width={width} height={height} src={image?.medium} />
      ) : (
        <div className={`w-[${width}px] h-[${height}px] bg-gray-200`}>
          <p>No image found for {name}</p>
        </div>
      )}
    </div>
  );
};
