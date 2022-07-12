import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from "../helper/post-util";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Max Blog</title>
        <meta
          name="description"
          content="I post aboit programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
