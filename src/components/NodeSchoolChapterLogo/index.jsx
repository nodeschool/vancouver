import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const NodeSchoolChapterLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "nodeschool-chapter-logo.svg" }) {
        extension
        publicURL
      }
    }
  `);
  return (
    <div style={{
      margin: `auto`,
    }}>
      <div style={{ width: `100%`, height: `100%` }}>
        <img
          src={data.placeholderImage.publicURL}
          alt={data.site.siteMetadata.title}
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            display: `block`,
            width: `250px`,
            maxWidth: `250px`,
          }}
        />
      </div>

      <h1 style={{
        fontSize: `50px`,
        lineHeight: `140%`,
        textAlign: `center`,
        fontWeight: `300`,
        margin: `0 auto 60px`,
        letterSpacing: `-1px`,
        color: `#C0493D`, // FIXME - siteMeta color
      }}>
        Welcome to
        <br />
        {data.site.siteMetadata.title}
      </h1>
    </div>
  );
};

export default NodeSchoolChapterLogo;

