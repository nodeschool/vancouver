import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const Community = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter
          slack
        }
      }
    }
  `);
  return (
    <>
    <h2 id="community">Community</h2>

    <p>
      The NodeSchool community is <strong>open to anyone</strong>. Whether
      you're able to attend an event or not, you can join the discussion
      around learning Node {
        [
          data.site.siteMetadata.slack ? 'in our Slack channel' : null,
          data.site.siteMetadata.slack ? 'by following us on Twitter' : null
        ].filter(Boolean).join(' or ')
      }
    </p>
    </>
  );
};
export default Community;

