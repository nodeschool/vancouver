import React from "react";

export const Photos = () => {
  return (
    <>
      <h2 id="photos">Photos</h2>
      {/* 

          <div className="list-photos cf">
            {% for i in (1..30) %} {% cycle '
            <div className="row">
              ', '', '', '', '' %}
              <a
                href="i/photos/{{ i }}.jpg"
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
                    fill="url('#photo-{{ i }}')"
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
export default Photos;
