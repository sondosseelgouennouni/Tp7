import { useState, useEffect } from "react";

export default function AddEvent({ onAdd, onUpdate, onClose, editEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [lieu, setLieu] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("atelier");

  useEffect(() => {
    if (editEvent) {
      setTitle(editEvent.title || "");
      setDate(editEvent.date || "");
      setLieu(editEvent.lieu || "");
      setDescription(editEvent.description || "");
      setType(editEvent.type || "atelier");
    }
  }, [editEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      title,
      date,
      lieu,
      description,
      type,
    };

    if (editEvent) {
      onUpdate({ ...eventData, id: editEvent.id, favorite: editEvent.favorite });
    } else {
      onAdd({ ...eventData, id: Date.now(), favorite: false });
    }

    setTitle("");
    setDate("");
    setLieu("");
    setDescription("");
    setType("atelier");

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Lieu"
        value={lieu}
        onChange={(e) => setLieu(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>atelier</option>
        <option>conférence</option>
        <option>personnel</option>
        <option>autre</option>
      </select>

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>{editEvent ? "Modifier" : "Enregistrer"}</button>
    </form>
  );
}
