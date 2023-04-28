import { useLogin } from "../hooks/useLogin";

export function Login() {
  const { handleChange, handleSubmit } = useLogin();
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
      </p>
      <p>
        <button type="submit">Sing In</button>
      </p>
    </form>
  );
}
