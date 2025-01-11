"use client";
import { useState } from "react";
import Head from "next/head";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Metadata for SEO and Social Sharing */}
      <Head>
        <title>GitHub Profile Image</title>
        <meta name="description" content="Check out this GitHub avatar!" />
        <meta property="og:title" content="Mohammad Ali Nayeem's GitHub Avatar" />
        <meta
          property="og:description"
          content="My dynamic GitHub profile image with Next.js!"
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/85398213?v=4"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kazinayeem.vercel.app/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohammad Ali Nayeem" />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/85398213?v=4"
        />
        <meta name="twitter:description" content="Mohammad Ali Nayeem" />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-500">NX</h1>
          <div className="hidden md:flex space-x-8">
            <button className="hover:text-blue-500" onClick={() => handleScroll("about")}>
              About Me
            </button>
            <button className="hover:text-blue-500" onClick={() => handleScroll("skills")}>
              Skills
            </button>
            <button className="hover:text-blue-500" onClick={() => handleScroll("projects")}>
              Projects
            </button>
            <button className="hover:text-blue-500" onClick={() => handleScroll("contact")}>
              Contact
            </button>
          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white p-4">
            <button className="block w-full py-2" onClick={() => handleScroll("about")}>
              About Me
            </button>
            <button className="block w-full py-2" onClick={() => handleScroll("skills")}>
              Skills
            </button>
            <button className="block w-full py-2" onClick={() => handleScroll("projects")}>
              Projects
            </button>
            <button className="block w-full py-2" onClick={() => handleScroll("contact")}>
              Contact
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
