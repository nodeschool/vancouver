import React from "react";

export const Mentors = () => {
  return (
    <>
      {/* mentors */}
      {/*

            <h2 id="mentors">Mentors</h2>

            <p>
              If you want to help teach or contribute in anyway, make a
              <strong
                ><a href="https://github.com/nodeschool/vancouver/pulls"
                  >Pull Request</a
                ></strong
              >
              and add your name to the list of available mentors. We also ask
              that you please read the
              <a
                href="https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices#on-being-a-mentor"
                >"On Being a Mentor"</a
              >
              tips for <strong>NodeSchool Organizers</strong> before attending
              as a mentor.
            </p>

            <p>
              Mentors are currently
              <strong>contacted and confirmed</strong> before each event in our
              <a href="https://nodeschool-toronto-slackin.herokuapp.com/"
                >Slack Channel</a
              >.
            </p>

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

