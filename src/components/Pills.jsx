export default function Pills({ className, label, stats }) {
  return (
    <div className={`pills ${className}`}>
      <ul>
        <li>{label}</li>
        <li>Points: {stats.points}</li>
        <li>Assist: {stats.assists}</li>
        <li>Rebounds: {stats.rebounds}</li>
        <li>Steals: {stats.steals}</li>
        <li>Blocks: {stats.blocks}</li>
      </ul>
    </div>
  );
}
