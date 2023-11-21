/* eslint-disable react/prop-types */

const EventItem = ({ venue, date, id, name, image, onEventClick }) => {
  
  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onEventClick(id)
  }

  const formatedDate = new Date(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="event">
      <img src={image} alt="{name}" />
      <div className="info">
        <h4>{name}</h4>
        <div className="wrapper">
          <p className="venue"><span>Venue: </span>{venue}</p>
          <p className="date"><span>Date: </span>{formatedDate}</p>
        </div>
        <button onClick={handleSeeMoreClick}>More</button>
      </div>
    </div>
  )

}

export default EventItem