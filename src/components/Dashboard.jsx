export function Dashboard({ setDone, done }) {
  return (
    <header className="p-5 flex justify-center gap-20 items-center">
      <span className="font-bold text-zinc-800">
        {done ? "Post to do" : "Post done: "}
      </span>
      <button
        onClick={() => setDone(!done)}
        className="bg-transparent p-2 rounded-md hover:underline transition-colors hover:font-bold"
      >
        {done ? "Post to do" : "Post done"}
      </button>
    </header>
  );
}
