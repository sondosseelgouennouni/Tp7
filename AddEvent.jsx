import { useState, useEffect } from "react";

export default function AddEvent({ onAdd, onUpdate, onClose, editEv}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [lieu, setLieu] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("atelier");

 
  const handleSubmit = (e) => { e.preventDefault();
    const snd = {title,date,lieu,description,type,};

    if (editEv) {
      onUpdate({ ...snd, id: editEv.id, favorite: editEv.favorite });
    } else {
      onAdd({ ...snd, id: Date.now(), favorite: false });
    }

    setTitle("");
    setDate("");
    setLieu("");
    setDescription("");
    setType("Conference");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input placeholder="Lieu" value={lieu} onChange={(e) => setLieu(e.target.value)}/>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>atelier</option>
        <option>conférence</option>
        <option>personnel</option>
        <option>autre</option>
      </select>
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>{editEv ? "Modifier" : "Enregistrer"}</button>
    </form>
  );
}
