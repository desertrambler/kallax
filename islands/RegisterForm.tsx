import { useState } from "preact/hooks";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (password !== confirmation) {
      alert("Password and Confirmation must match");
      return;
    }

    if (email || password || confirmation) {
        alert("Please fill in all fields");
        return;
    }

    // Submit the form manually if passwords match
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  return (
    <form method="POST" action="/api/register_user" onSubmit={handleSubmit} class="space-y-4">
      <div>
        <label for="email" class="block text-sm text-gray-600 mb-1">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="you@example.com"
          value={email}
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          required
        />
      </div>
      <div>
        <label for="password" class="block text-sm text-gray-600 mb-1">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="••••••••"
          value={password}
          onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
          required
        />
      </div>
      <div>
        <label for="confirmation" class="block text-sm text-gray-600 mb-1">Confirmation</label>
        <input
          type="password"
          name="confirmation"
          id="confirmation"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="••••••••"
          value={confirmation}
          onInput={(e) => setConfirmation((e.target as HTMLInputElement).value)}
          required
        />
      </div>
      <button
        type="submit"
        class="w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Register
      </button>
    </form>
  );
}
