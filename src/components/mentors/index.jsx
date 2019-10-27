import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
      <svg
        className="svgs"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          {data.allMentorsYaml.edges.map(edge => (
            <pattern
              id={`mentor-${edge.node.id}`}
              key={edge.node.id}
              width="300"
              height="300"
              patternUnits="userSpaceOnUse"
            >
              <image
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref={`https://avatars3.githubusercontent.com/${ edge.node.github }?v=3&amp;s=250`}
                width="250"
                height="300"
                preserveAspectRatio="xMidYMid slice"
              ></image>
            </pattern>
          ))}
        </defs>
      </svg>
      <div className="list-mentors cf">
        {data.allMentorsYaml.edges.map(edge => (
            <a
              key={edge.node.id}
              href={edge.node.twitter ? `https://twitter.com/${edge.node.twitter}` : `https://github.com/${edge.node.github}`}
              rel="noopener noreferrer"
              target="_blank"
              className="image-wrapper"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 300" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
                <polygon className="hex" points="250,75 250,225 125,300 0,225 0,75 125,0" fill={`url('#mentor-${edge.node.id}')`}></polygon>
              </svg>
            </a>
        ))}
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
      </div>
      {/*
            <div className="list-mentors cf">
              {% for mentor in site.mentors %} {% cycle '
              <div className="row">
                ', '', '', '', '' %}
                <a
                  href="https://twitter.com/{{ mentor.twitter }}"
                  target="_blank"
                  className="image-wrapper"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 250 300"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon
                      className="hex"
                      points="250,75 250,225 125,300 0,225 0,75 125,0"
                      fill="url('#mentor-{{ forloop.index }}')"
                    ></polygon>
                  </svg>
                </a>
                {% cycle '', '', '', '', '
              </div>
              ' %} {% endfor %}
            </div>
            */}
    </>
  );
};
export default Mentors;

