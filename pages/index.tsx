import type { NextPage } from "next";

import Layout from "../components/Layout";
import HomeLayout from "../components/HomeLayout";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeLayout />
    </Layout>
  );
};

export default Home;
