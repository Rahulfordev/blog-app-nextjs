import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";

const BlogPage = ({ searchParams }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Styles Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
