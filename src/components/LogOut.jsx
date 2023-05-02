export function LogOut({ handleLogOut }) {
  return (
    <header className="bg-green-500 w-full max-w-screen-lg py-6 px-8 flex flex-cold md:flex-row gap-4">
      <div className="flex items-center flex-1">
        <div className="text-2xl ml-1 font-bold">
          <h2>HOME PAGE</h2>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={handleLogOut}
          className="underline font-mono font-bold"
        >
          SING OUT
        </button>
      </div>
    </header>
  );
}
