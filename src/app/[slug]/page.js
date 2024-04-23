import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Culpa esse pariatur aliqua consectetur nisi sit ullamco.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>Rahulfordev</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Ad eiusmod anim ad do. Eu ipsum velit aliquip et nostrud fugiat
              velit qui cupidatat exercitation ex deserunt occaecat. Officia
              cupidatat excepteur aliqua proident fugiat ad Lorem exercitation
              ex aute. Proident incididunt occaecat amet irure ad. In culpa
              voluptate magna anim adipisicing culpa proident minim excepteur
              consectetur commodo excepteur culpa amet. Id mollit Lorem dolore
              incididunt eu consequat consequat qui est amet deserunt fugiat
              aute. Ex labore veniam amet culpa ullamco velit est excepteur
              anim.
            </p>
            <p>
              Ad eiusmod anim ad do. Eu ipsum velit aliquip et nostrud fugiat
              velit qui cupidatat exercitation ex deserunt occaecat. Officia
              cupidatat excepteur aliqua proident fugiat ad Lorem exercitation
              ex aute. Proident incididunt occaecat amet irure ad. In culpa
              voluptate magna anim adipisicing culpa proident minim excepteur
              consectetur commodo excepteur culpa amet. Id mollit Lorem dolore
              incididunt eu consequat consequat qui est amet deserunt fugiat
              aute. Ex labore veniam amet culpa ullamco velit est excepteur
              anim.
            </p>
            <p>
              Ad eiusmod anim ad do. Eu ipsum velit aliquip et nostrud fugiat
              velit qui cupidatat exercitation ex deserunt occaecat. Officia
              cupidatat excepteur aliqua proident fugiat ad Lorem exercitation
              ex aute. Proident incididunt occaecat amet irure ad. In culpa
              voluptate magna anim adipisicing culpa proident minim excepteur
              consectetur commodo excepteur culpa amet. Id mollit Lorem dolore
              incididunt eu consequat consequat qui est amet deserunt fugiat
              aute. Ex labore veniam amet culpa ullamco velit est excepteur
              anim.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
