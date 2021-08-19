import Image from "next/image";

function MediumCard2({ item }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300">
      <div className="relative h-96 w-[374px]">
        <Image src={item.img} layout="fill" className="rounded-xl" />
      </div>
      <h1 className="text-2xl font-semibold mt-3">{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default MediumCard2;
