export default function Header({ total, favorites }) {
  return (
    <header className="header">
      <h1>Event Planner</h1>
      <p>Total événements : {total}</p>
      <p>Favoris : {favorites}</p>
    </header>
  );
}
