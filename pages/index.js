import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import HostCard from "../components/HostCard";
import MediumCard2 from "../components/MediumCard2";

export default function Home({ exploreData, cardsData, cardsData2 }) {
  console.log(cardsData2);
  return (
    <div className="">
      <Head>
        <title>
          Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes &
          Experiences
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard key={item.img} item={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item) => (
              <MediumCard key={item.img} item={item} />
            ))}
          </div>
        </section>

        <HostCard />

        <section className="pt-2">
          <div className="py-8">
            <h2 className="text-4xl font-semibold">Discover Experiences</h2>
            <p className="text-xl">
              Unique activities with local experts – in person or online.
            </p>
          </div>
          <div className="flex space-x-3">
            {cardsData2.map((item) => (
              <MediumCard2 key={item.img} item={item} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  const cardsData2 = await fetch("https://jsonkeeper.com/b/W77S").then((res) =>
    res.json()
  );

  return { props: { exploreData, cardsData, cardsData2 } };
}
