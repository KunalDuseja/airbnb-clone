import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { GlobeAltIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [show, handleShow] = useState(false);
  const router = useRouter();

  const handleChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const transitionNavBar = () => {
    if (window.scrollY > 20) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <header className={`normal ${show && `scroll`}`}>
      {/* Left - Logo*/}
      <div
        onClick={() => router.push("/")}
        className="relative flex w-24 items-center h-10 cursor-pointer my-2 mx-8"
      >
        <Image
          className="w-auto h-auto"
          src={show ? "/airbnb-origlogo.png" : "/airbnb-whitelogo.png"}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle - Search*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={`placeholder ${show && `placeholder_scrolled`}`}
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-[#FF385C] text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end mx-5">
        <p className="hidden font-semibold md:inline cursor-pointer text-md p-2 hover:bg-gray-100 hover:rounded-full ">
          Become a host
        </p>
        <GlobeAltIcon className="h-5 cursor-pointer hover:bg-gray-100 hover:rounded-full" />
        <div className="flex items-center space-x-2 border-[1px] rounded-full p-1 cursor-pointer text-gray-600 bg-white hover:shadow-md">
          <MenuIcon className="h-5 pl-1" />
          <UserCircleIcon className="h-8 w-8 " />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto text-black">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleChange}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              type="number"
              className="w-12 pl-2 outline-none text-[#FD5B61] text-lg"
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
            />
          </div>

          <div className="flex">
            <button className="flex-grow text-gray-400" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-[#FD5B61]">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
