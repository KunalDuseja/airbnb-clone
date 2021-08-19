import Image from "next/image";

function Footer() {
  return (
    <div className="px-32 py-14 bg-gray-100 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 py-10">
        <div className="space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Airbnb 2021</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
          <p>Hotel Tonight</p>
          <p>Airbnb for Work</p>
          <p>Made possible by Hosts</p>
          <p>Carrers</p>
          <p>Founders'Letter</p>
        </div>

        <div className="space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Diversity & Belonging</p>
          <p>Accessibility</p>
          <p>Airbnb Associates</p>
          <p>Frontline Stays</p>
          <p>Guest Referrals</p>
          <p>Airbnb.org</p>
        </div>

        <div className="space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Host your home</p>
          <p>Host an Online Experience</p>
          <p>Host an Experience</p>
          <p>Responsible hosting</p>
          <p>Resource Centre</p>
          <p>Community Centre</p>
        </div>

        <div className="space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Our COVID-19 Response</p>
          <p>Help Centre</p>
          <p>Cancellation options</p>
          <p>Neighbourhood Support</p>
          <p>Trust & Safety</p>
        </div>
      </div>
      <div className="border-t-2 w-[1300px]" />
      <div className="relative flex justify-between m-4">
        <div>
          © 2021 Airbnb <br />
          Made with ❤ by Kunal Duseja
        </div>
        <div className="flex cursor-pointer h-8 space-x-4 mt-2">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png" />
          <img src="https://img.icons8.com/ios-glyphs/36/000000/twitter.png" />
          <img src="https://img.icons8.com/windows/36/000000/instagram.png" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
