import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PeopleHexagons from '../components/people-hexagons';
import styled from "@emotion/styled";
import Hexagon from 'react-hexagon';

const MentorContainer = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 0.25fr));

  width: 100%;
  z-index: 900;
  transform: translate3d(-5%, 0, 0);
  position: relative;

  &:hover {
    svg {
      transition: opacity 0.3s, transform 0.2s;
      opacity: 0.25;
      &:hover {
        opacity: 1 !important;
        transform: scale(1.5);
        z-index: 9999;
      }
    }
  }
  svg {
    padding: 0;
    margin: 0;
    polygon {
      stroke: transparent !important;
      stroke-width: 0 !important;
    }
  }
`;

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
    <PeopleHexagons people={data.allPeopleYaml.edges.map(edge => edge.node)} />
      <MentorContainer>
        {data.allMentorsYaml.edges.map(edge => (
          <Hexagon
            key={edge.node.id}
            href={edge.node.twitter ? `https://twitter.com/${edge.node.twitter}` : `https://github.com/${edge.node.github}`}
            backgroundImage={`https://avatars3.githubusercontent.com/${ edge.node.github }?v=3&amp;s=120`}
            rel="noopener noreferrer"
            target="_blank"
          />
        ))}
      </MentorContainer>
      <p>
        If you want to help teach or contribute in anyway, make a
        <strong>
          <a href={`https://github.com/${data.site.siteMetadata.github}/pulls`}>
          Pull Request
          </a>
        </strong>
        and add your name to the list of available mentors. We also ask
        that you please read the
        <a href="https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices#on-being-a-mentor">
          &quot;On Being a Mentor&quot;
        </a>
        tips for <strong>NodeSchool Organizers</strong> before attending as a mentor.
      </p>

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

