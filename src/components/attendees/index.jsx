import React from "react";

export const Attendees = () => {
  return (
    <>
      {/* attendees */}
      {/*
            <h2 id="attendees">Attendees</h2>

            <div className="list-attendees cf">
              {% for value in site.data.attendees %} {% for attendee in value[1]
              %} {% cycle '
              <div className="row">
                ', '', '', '', '', '', '', '' %}
                <div className="image-wrapper">
                  <div className="badge">
                    <span>{{ attendee[2] }}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 250 300"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon
                      className="hex"
                      points="250,75 250,225 125,300 0,225 0,75 125,0"
                      fill="url('#attendee-{{ attendee[0] }}')"
                    ></polygon>
                  </svg>
                </div>
                {% cycle '', '', '', '', '', '', '', '
              </div>
              ' %} {% endfor %} {% endfor %}
            </div>
      */}
    </>
  );
};
export default Attendees;

