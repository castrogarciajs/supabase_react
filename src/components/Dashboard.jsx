export function Dashboard({ setDone, done }) {
  return (
    <header>
      <span>{done ? "Post to do" : "Post done"}</span>
      <button onClick={() => setDone(!done)}>
        {done ? "Post to do" : "Post done"}
      </button>
    </header>
  );
}
