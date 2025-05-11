import { signal } from "@preact/signals";

export default function RegisterForm() {
  const email = signal("");
  const password = signal("");
  const confirmation = signal("");

  return (
    <form method="POST" action="/api/register_user" className="space-y-4 p-4 border border-black bg-white text-black font-mono">
      <div>
        <label htmlFor="email" className="block text-sm mb-1 uppercase tracking-wide text-red-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full px-2 py-1 border border-black bg-white text-black focus:outline-none focus:border-red-700"
          placeholder="you@example.com"
          value={email}
          onInput={(e) => email.value = (e.target as HTMLInputElement).value}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm mb-1 uppercase tracking-wide text-red-700">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full px-2 py-1 border border-black bg-white text-black focus:outline-none focus:border-red-700"
          placeholder="••••••••"
          value={password}
          onInput={(e) => password.value = (e.target as HTMLInputElement).value}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmation" className="block text-sm mb-1 uppercase tracking-wide text-red-700">Confirmation</label>
        <input
          type="password"
          name="confirmation"
          id="confirmation"
          className="w-full px-2 py-1 border border-black bg-white text-black focus:outline-none focus:border-red-700"
          placeholder="••••••••"
          value={confirmation}
          onInput={(e) => confirmation.value = (e.target as HTMLInputElement).value}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border-2 border-black bg-red-700 text-white uppercase font-bold hover:bg-white hover:text-red-700 transition-colors"
      >
        Register
      </button>

      <p className="text-xs mt-4">Email: {email}</p>
      <p className="text-xs">Password: {password}</p>
      <p className="text-xs">Confirmation: {confirmation}</p>
    </form>
  );
}
