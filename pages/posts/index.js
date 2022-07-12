import { getAllPosts } from "../../helper/post-util";
import AllPosts from "../../components/posts/all-posts";
import Head from "next/head";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All my posts</title>
        <meta
          name="description"
          content="A list of all programming relted tutorials"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 300,
  };
};

export default AllPostsPage;
