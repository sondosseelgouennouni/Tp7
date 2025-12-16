import { useState } from "react";
import Header from "./Header";
import EventItem from "./EventItem";
import AddEvent from "./AddEvent";
import SearchEvent from "./SearchEvent";

export default function EventList({ events, setEvents }) {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("");
  const [editEvent, setEditEvent] = useState(null);

  const deleteEvent = (id) => {setEvents(events.filter(e => e.id !== id));};
  const toggleFavorite = (id) => {setEvents(events.map(e => e.id === id ? { ...e, favorite: !e.favorite } : e))};
  const addEvent = (event) => {setEvents([event, ...events]);};
  const updateEvent = (updated) => {setEvents(events.map(e => e.id === updated.id ? updated : e));setEditEvent(null);};

  const sortByDate = () => {setEvents([...events].sort((a, b) => new Date(a.date) - new Date(b.date)));};

  const filteredEvents = filter? events.filter(e => e.type === filter): events;

  const handleEdit = (event) => {
    setEditEvent(event);
    setShowForm(true)};

  return (
    <div className="action-bar">
      <Header total={events.length} favorites={events.filter(e => e.favorite).length}/>
      <button onClick={() => { setShowForm(true); setEditEvent(null); }}>Ajouter un evenement</button>

      {showForm && (
        <AddEvent
          onAdd={addEvent}
          onUpdate={updateEvent}
          onClose={() => { setShowForm(false); setEditEvent(null); }}
          editEvent={editEvent}
        />
      )}

      <SearchEvent setFilter={setFilter} sortByDate={sortByDate} />
   {filteredEvents.map(event => ( 
    <EventItem key={event.id} event={event} 
    onDelete={deleteEvent} 
    onFavorite={toggleFavorite} 
    onEdit={handleEdit}/>))}
    </div>
  );
}
