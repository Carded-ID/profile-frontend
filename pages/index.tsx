import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LinkItem from "../components/LinkItem";
import UserInfo from "../components/UserInfo";
import UserNotFound from "../components/UserNotFound";
import styles from "../styles/UserPage.module.css";
import { LinkData, UserData } from "../types/UserData";

interface UserPageProps {
  user?: UserData;
}
const UserPage: NextPage<UserPageProps> = ({ user }) => {
  return (
    <>
      <Head>
        <title>{user?.name || "User Not Found"} | Carded.Id</title>
        <meta name="description" content="Carded.Id" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? (
        <main className={styles.main}>
          <Image
            className={styles.profilePicture}
            src={user.profilePicture}
            width={120}
            height={120}
            alt="User Profile Picture"
          />
          <UserInfo />
          <div className={styles.linksContainer}>
            {user.links.map((linkData) => (
              <LinkItem linkData={linkData} />
            ))}
          </div>
          <footer className={styles.footer}>
            Powered by{" "}
            <a
              className={styles.footerLink}
              href="https://carded.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carded.Id
            </a>
          </footer>
        </main>
      ) : (
        <UserNotFound />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  context
) => {
  const username = context.req.headers.host?.split(".")[0];
  if (!username || username === "carded") {
    return {
      props: {},
    };
  }
  const name = "William Ma";
  const bio = "Student | Full Stack Web Developer";
  const profilePicture = "https://placekitten.com/120/120";
  const links: LinkData[] = [
    {
      title: "Latest Project",
      url: "https://willma.me/projects/final-grade-calculator",
    },
    { title: "Website", url: "https://willma.me" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/willmadev/" },
    { title: "Github", url: "https://github.com/willmadev" },
  ];
  return { props: { user: { name, bio, profilePicture, links } } };
};

export default UserPage;
