import btc from "./images/bitcoin.png";
import eth from "./images/ethereum.png";
import tether from "./images/tether.png";
import bnb from "./images/bnb.png";
import Link from "next/link";
import CoinList from "./components/CoinList";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className="container mx-auto ">
        <div className=" relative w-11/12 mx-auto py-8 text-center">
          <img
            src={btc.src}
            alt=""
            className="absolute hidden md:block md:top-7 lg:top-36   lg:left-7 xl:top-9 w-14 lg:w-20 animate-bounce"
          />
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-extrabold text-white">
            TRACK AND TRADE <br />
            <span className="gradiant">CRYPTO CURRENCIES</span>
          </h1>
          <img
            src={eth.src}
            alt=""
            className="absolute hidden md:block md:top-7 lg:top-36 right-2  lg:right-7 xl:top-9  w-14 lg:w-20  animate-bounce"
          />
        </div>
      </div>
      <div className="my-5">
        <div className="grid grid-cols-12 text-white w-[60%] mx-auto text-center">
          <div className="col-span-12 sm:col-span-6 md:col-span-3 my-3">
            <Link href={"/bitcoin"}>
              <img src={btc.src} alt="" className="w-20 mx-auto" />
              <p className="text-xl font-semibold mt-5">Bitcoin</p>
            </Link>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 my-3">
            <Link href={"/ethereum"}>
              <img src={eth.src} alt="" className="w-20 mx-auto" />
              <p className="text-xl font-semibold mt-5">Ethereum</p>
            </Link>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 my-3">
            <Link href={"/tether"}>
              <img src={tether.src} alt="" className="w-20 mx-auto" />
              <p className="text-xl font-semibold mt-5">Tether</p>
            </Link>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 my-3">
            <Link href={"/binancecoin"}>
              {" "}
              <img src={bnb.src} alt="" className="w-20 mx-auto" />
              <p className="text-xl font-semibold mt-5">BNB</p>
            </Link>
          </div>
        </div>
      </div>
      <CoinList btc={btc} eth={eth} tether={tether} bnb={bnb} />
      <Footer />
    </>
  );
}
