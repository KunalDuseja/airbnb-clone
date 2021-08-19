import Image from "next/image";

function HostCard() {
  return (
    <section className="relative pt-16 cursor-pointer">
      <div className="relative h-[450px] min-w-[300px]">
        <Image
          className="rounded-2xl"
          src="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=720"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-44 left-20">
        <h3 className="text-5xl mb-3 text-white font-semibold">Try hosting</h3>
        <p className="text-xl text-white w-96">
          Earn extra income and unlock new opportunities by sharing your space.
        </p>
        <button className=" text-lg bg-white text-black py-2 px-5 rounded-lg mt-9">
          Learn more
        </button>
      </div>
    </section>
  );
}

export default HostCard;
