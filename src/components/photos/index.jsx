import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Hexagon from 'react-hexagon';
import styled from "@emotion/styled";

const Container = styled.div`
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

export const Photos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "photos"}, relativePath: {ne: "photos/.keep"}}, sort: {fields: relativePath, order: DESC}) {
        edges {
          node {
            childImageSharp {
              fixed(width: 500, height: 500) {
                src
              }
              original {
                src
              }
            }
            id
            relativeDirectory
            relativePath
          }
        }
      }
    }
  `);
  return (
    <>
      <h2 id="photos">Photos</h2>
    <Container>
      {data.allFile.edges.map(edge => {
        return (
          <Hexagon
            key={edge.node.id}
            href={edge.node.childImageSharp.original.src}
            backgroundImage={edge.node.childImageSharp.fixed.src}
            rel="noopener noreferrer"
            target="_blank"
          />
        );
      })}
      </Container>
    </>
  );
};
export default Photos;
