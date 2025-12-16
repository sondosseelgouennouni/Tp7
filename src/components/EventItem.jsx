export default function EventItem({ event, onDelete, onFavorite, onEdit }) {
  const isPast = new Date(event.date) < new Date();

  return (
    <div className="event-item" style={isPast ? { background: "#111", color: "#fff" } : {}}>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.description}</p>
      <p>Type : {event.type}</p>

      <button onClick={() => onFavorite(event.id)}>
        {event.favorite ? "Retirer Favori" : "Favori"}
      </button>
      <button onClick={() => onEdit(event)}>Modifier</button>
      <button onClick={() => onDelete(event.id)}>Supprimer</button>
    </div>
  );
}
