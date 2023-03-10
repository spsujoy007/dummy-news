import Head from "next/head";
import AllNews from "./AllNews/AllNews";
import NewsBanner from "./AllNews/NewsBanner";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

const index = () => {
  return (
    <div>

    <Head>
      <title>Dummy News</title>
    </Head>

      <Header></Header>
      <NewsBanner></NewsBanner>
      <div className=" md:max-w-[1240px] mx-auto">
          <AllNews></AllNews>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default index;