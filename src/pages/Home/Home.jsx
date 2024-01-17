import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { PostsLists } from "../../components/PostsList/PostsList";

export const Home = () => {
  return (
    <>
      <Header />
      <PostsLists />
      <Footer />
    </>
  );
};
