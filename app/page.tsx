import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import MyProjects from "@/components/MyProjects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <AboutMe />
        <Skills />
        <MyProjects />
      </main>
      <Contact/>
      <Footer />
    </>
  );
}
