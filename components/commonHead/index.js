import React from "react";
import Head from "next/head";

const CommonHead = ({ pageTitle = "", description = "" }) => {
  const defaultTitle =
    "Rehan Akram - Full-Stack Developer (Laravel, ASP.NET, React)";
  const defaultDescription =
    "Portfolio of Rehan Akram, Full-Stack Web Developer specializing in Laravel, ASP.NET Core, and ReactJS. Explore my projects, skills, and work experience.";
  const defaultKeywords =
    "Rehan Akram, Full-Stack Developer, Laravel Developer, ASP.NET Developer, ReactJS Developer, Web Development, Portfolio, Bangladesh";
  const defaultImage = "/images/portfolio-preview.jpg";

  return (
    <Head>
      <title>
        {pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle}
      </title>
      {/* Bootstrap CSS */}
      <link
        href="../../styles/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      ></link>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="../../styles/googleapis.css2.css" rel="stylesheet"></link>

      {/* Meta Tags */}
      <meta
        name="description"
        content={description ? description : defaultDescription}
      />
      <meta name="keywords" content={defaultKeywords} />
      <meta name="author" content="Rehan Akram" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <html lang="en" />
      <link rel="icon" href="/images/logo.jpeg" />

      {/* Open Graph for Social Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content="/images/portfolio-preview.jpg" />
      <meta property="og:url" content="https://your-portfolio-link.com" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={pageTitle ? pageTitle : defaultTitle}
      />
      <meta
        name="twitter:description"
        content={description ? description : defaultDescription}
      />
      <meta name="twitter:image" content={defaultImage} />
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rehan Akram",
            url: "https://your-portfolio-link.com",
            image: defaultImage,
            jobTitle: "Full-Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance & Hamko Corporation Ltd",
            },
            sameAs: [
              "https://www.linkedin.com/in/rehanakram0",
              "https://github.com/RehanAkram331",
              "https://gooddeal.com.bd",
            ],
            knowsAbout: [
              "Laravel",
              "ASP.NET Core",
              "ReactJS",
              "MySQL",
              "MSSQL",
              "JavaScript",
              "API Development",
            ],
          }),
        }}
      />
    </Head>
  );
};

export default CommonHead;
