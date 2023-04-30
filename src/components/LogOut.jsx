export function LogOut({ handleLogOut }) {
  return (
    <header className="bg-green-500">
      <h2>Home Page</h2>
      <button onClick={handleLogOut}>LogOut</button>
    </header>
  );
}
