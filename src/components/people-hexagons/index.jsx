import React from "react";
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import Hexagon from 'react-hexagon';

const PeopleContainer = styled.div`
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

export const PeopleHexagons = ({ people }) => (
  <PeopleContainer>
    {people.map(person => (
      <Hexagon
        key={person.id}
        href={person.twitter ? `https://twitter.com/${person.twitter}` : `https://github.com/${person.github}`}
        backgroundImage={`https://avatars3.githubusercontent.com/${ person.github }?v=3&amp;s=120`}
        rel="noopener noreferrer"
        target="_blank"
      />
    ))}
  </PeopleContainer>
);

PeopleHexagons.propTypes = {
  people:  PropTypes.arrayOf(
    PropTypes.shape({
      github: PropTypes.string.isRequired,
      twitter: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default PeopleHexagons;
