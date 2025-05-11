import { signal } from "@preact/signals";

export default function RegisterForm() {
  const email = signal("");
  const password = signal("");
  const confirmation = signal("");

  return (
    <form method="POST" action="/api/register_user" className="space-y-4">
      <div>
        <label for="email" className="block text-sm text-gray-600 mb-1">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="you@example.com"
          value={email} // Display the signal's value
          onInput={(e) => email.value = (e.target as HTMLInputElement).value} // Update the signal on input
          required
        />
      </div>
      <div>
        <label for="password" className="block text-sm text-gray-600 mb-1">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="••••••••"
          value={password}
          onInput={(e) => password.value = (e.target as HTMLInputElement).value}
          required
        />
      </div>
      <div>
        <label for="confirmation" className="block text-sm text-gray-600 mb-1">Confirmation</label>
        <input
          type="password"
          name="confirmation"
          id="confirmation"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="••••••••"
          value={confirmation}
          onInput={(e) => confirmation.value = (e.target as HTMLInputElement).value}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Register
      </button>

      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirmation: {confirmation}</p>
    </form>
  );
}
