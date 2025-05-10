export default function LoginPage() {
  return (
    <main>
        <div class="min-h-screen flex items-center justify-center bg-gray-100">
            <div class="w-full max-w-sm p-8 bg-white shadow-md rounded-2xl">
                <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6">Kallax</h1>
                <form class="space-y-4" method="POST" action="/api/login">
                    <div>
                        <label class="block text-sm text-gray-600 mb-1" for="email">Email</label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label class="block text-sm text-gray-600 mb-1" for="password">Password</label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="••••••••"
                        />
                    </div>
                    <div>
                        <label class="block text-sm text-gray-600 mb-1" for="confirmation">confirmation</label>
                        <input
                        type="password"
                        name="confirmation"
                        id="confirmation"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        class="w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>

    </main>
  );
}
