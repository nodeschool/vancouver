import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

export const EventFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);
  return (
    <p className="additional">
      <strong>NodeSchool</strong> strives to be a welcoming and safe event for all attendees.
      Attendees should follow the <a href="#codeofconduct">code of conduct</a>.
      If you need further information about an event, please contact the organizers at 
      <a
        style={{fontWeight: `bold`}}
        href={`mailto:${data.site.siteMetadata.email}`} l
        rel="noopener noreferrer"
        target="_blank"
      >
        {` ` + data.site.siteMetadata.email}
      </a>
    </p>
  );
};

export default EventFooter;
