import React from "react"
export const SingleEvent = ({description, name, venue, time, utc_offset, updated, }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div dangerouslySetInnerHTML={{ __html:  description }} />
      <div>
        {venue.name}
        {venue.repinned}
        {venue.address_1}
        {venue.address_2}
        {venue.city}
        {venue.state}
        {venue.zip}
        {venue.country}
        {venue.lat},{venue.lon}
        {venue.localized_country_name}
      </div>
    </div>
  )
};


export default SingleEvent
