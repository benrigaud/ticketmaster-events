/* eslint-disable react/prop-types */
import EventItem from "./components/EventItem"
import eventsJSON from '../../data/events.json'

const events = eventsJSON._embedded.events
// const { _embedded: { events } } = eventsJSON
const handleEventClick = (id) => {
  console.log(`Evento con id ${id} clickeado`)
}

const Events = ({ searchTerm }) => {
  
  const renderEvents = () => {
    let eventsFiltered = events

    if (searchTerm.length > 0) {
      eventsFiltered = events.filter((eventItem) => {
        return eventItem.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem 
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        date={eventItem.dates.start.dateTime}
        image={eventItem.images[10].url}
        onEventClick={handleEventClick}
        id={eventItem.id}
        venue={eventItem._embedded.venues[0].name}
      />
    ))
  }

  console.log(events)
  
  return (
    <div className="events">
      {renderEvents()}
    </div>
  )

}

export default Events