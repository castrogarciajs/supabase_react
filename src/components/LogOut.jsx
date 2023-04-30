export function LogOut({ handleLogOut }) {
  return (
    <header>
      <h2>Home Page</h2>
      <button onClick={handleLogOut}>LogOut</button>
    </header>
  );
}
