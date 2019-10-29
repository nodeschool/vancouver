import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PeopleHexagons from '../people-hexagons';

export const Mentors = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
        }
      }
      allMentorsYaml {
        edges {
          node {
            id
            github
            name
            twitter
          }
        }
      }
    }
  `);
  return (
    <>
      <h2 id="mentors">Mentors</h2>
      {/* mentors */}
      <PeopleHexagons people={data.allMentorsYaml.edges.map(edge => edge.node)} />
      <p>
        If you want to help teach or contribute in anyway, make a <strong><a href={`https://github.com/${data.site.siteMetadata.github}/pulls`}>Pull Request</a></strong> and add your name to the list of available mentors. We also ask that you please read the <a href="https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices#on-being-a-mentor">&quot;On Being a Mentor&quot;</a> tips for <strong>NodeSchool Organizers</strong> before attending as a mentor.  </p>
        {/*
        <p>
          Mentors are currently <strong>contacted and confirmed</strong> before each event in our
          <a href="https://nodeschool-toronto-slackin.herokuapp.com/">Slack Channel</a>.
        </p>
        */}
    </>
  );
};
export default Mentors;

