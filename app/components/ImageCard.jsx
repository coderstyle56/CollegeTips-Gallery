import Image from "next/image";

export default function ImageCard({ src }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <Image
        src={src}
        alt="Gallery Image"
        width={400}
        height={300}
        className="w-full h-64 object-cover"
        priority
      />
    </div>
  );
}