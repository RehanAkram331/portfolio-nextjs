import Image from "next/image";

export default function Img({ src, width = 1000, height = 1000, ...props }) {
  return (
    <Image
      src={src}
      blurDataURL={src}
      width={width}
      height={height}
      style={{ width: "100%", height: "100%" }}
      className="img-fluid"
      placeholder="blur"
      priority
      {...props}
    />
  );
}
