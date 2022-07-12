import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helper/post-util";
import Head from "next/head";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content="props.post.excerpt" />
      </Head>
      <PostContent post={props.post} />;
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;

  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  const pathParams = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: pathParams,
    fallback: "blocking",
  };
};

export default PostDetailPage;
