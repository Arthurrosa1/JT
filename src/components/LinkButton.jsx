export default function LinkButton({ href, children }) {
  return (
    <a href={href} className="linkButton" target="_blank" rel="noopener noreferrer">
      <span className="icon">
        <span className="PlayIcon">&nbsp;</span>
      </span>
      <span className="label">{children}</span>
    </a>
  );
}
