import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SingleEvent from './single_event'

export const PastEvents = () => {
  const data = useStaticQuery(graphql`
    query {
      allMeetupEvent(filter: {status: {eq: "post"}}) {
        edges {
          node {
            id
            description
            name
            status
            visibility
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
            created
          }
        }
      }
    }
  `)
  return data.allMeetupEvent.edges.map(edge => <SingleEvent {...edge.node} />);
}

export default PastEvents
