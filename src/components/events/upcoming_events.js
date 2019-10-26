import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SingleEvent from './single_event';

export const UpcomingEvents = () => {
  const data = useStaticQuery(graphql`
    query {
      allMeetupEvent(filter: {status: {eq: "upcoming"}}) {
        edges {
          node {
            id
            description
            name
            venue {
              address_1
              address_2
              city
              country
              lat
              localized_country_name
              lon
              name
              repinned
              state
              zip
            }
            time
            utc_offset
            updated
            rsvp_limit
            member_pay_fee
            local_time
            link
            how_to_find_us
            duration
            date_in_series_pattern
          }
        }
      }
    }
  `);
  return data.allMeetupEvent.edges.map(edge => <SingleEvent {...edge.node} />);
};

export default UpcomingEvents;



