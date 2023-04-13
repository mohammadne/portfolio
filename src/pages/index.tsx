import type { GetStaticProps, NextPage } from "next";

import AppHead from "src/components/AppHead";
import Loader from "src/components/Loader";
import SkipToMain from "src/components/SkipToMain";
import Header from "src/components/Header";
import SocialLinks from "src/components/SocialLinks";
import LandingSection from "src/sections/LandingSection";
import AboutSection from "src/sections/AboutSection";
import ProjectSection from "src/sections/ProjectSection";
import BlogSection from "src/sections/BlogSection";
import ContactSection from "src/sections/ContactSection";
import Footer from "src/components/Footer";

import { getAllPosts } from "src/utils/api";
import { MdxMeta } from "./blog/posts/[slug]";

type Props = {
  blogPosts: MdxMeta[];
};

export const meta = {
  description:
    "Sat Naing is a full-stack developer based in Yangon, Myanmar. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Sat Naing",
  type: "website",
  ogImage: "https://user-images.githubusercontent.com/51189292/230770030-7127f66a-44cd-4c3b-a59d-d0d87bc8b770.png",
  siteName: "Sat Naing",
  imageAlt: "Sat Naing portfolio website",
};

const Home: NextPage<Props> = ({ blogPosts }) => {
  return (
    <>
      <AppHead
        title="Sat Naing - A Full-stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>SatNaing.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <LandingSection />
            <AboutSection />
            <ProjectSection />
            <BlogSection posts={blogPosts} />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = getAllPosts([
    "coverImage",
    "coverImageAlt",
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
  ]);

  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
