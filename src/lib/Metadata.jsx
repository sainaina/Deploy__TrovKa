import React from "react";
import { Helmet } from "react-helmet";

export const Metadata = (props) => {
  const defaultValues = {
    title: "Your Project's Name",
    description: "Add default description here",
    author: "Default Author",
    keywords: "Add default keywords here",
    thumbnail: "Add default thumbnail here",
  };

  const metadata = { ...defaultValues, ...props };

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />
      <meta name="author" content={metadata.author} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="thumbnail" content={metadata.thumbnail} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.thumbnail} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.thumbnail} />
    </Helmet>
  );
};
