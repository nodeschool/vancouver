import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const FollowTwitter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter
        }
      }
    }
  `);
  return (
    <p>
      <a
        href={`https://twitter.com/${data.site.siteMetadata.twitter}`}
        className="twitter-follow-button"
        data-show-count="false"
      >Follow @{data.site.siteMetadata.twitter}</a
    >
    </p>
  );

};

export default FollowTwitter;
