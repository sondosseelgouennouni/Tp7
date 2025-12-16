export default function SearchEvent({ setFilter, trie }) {
  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">Tous</option>
        <option value="atelier">Atelier</option>
        <option value="conférence">Conférence</option>
        <option value="personnel">Personnel</option>
        <option value="autre">Autre</option>
      </select>

      <button onClick={trie}>Trier par date</button>
    </div>
  );
}
