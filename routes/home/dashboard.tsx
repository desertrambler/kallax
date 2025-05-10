export default function Dashboard() {
  return (
    <main>
        <nav class="bg-gray-800 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <span class="text-xl font-semibold">Kallax</span>
                </div>
                <div class="hidden md:flex space-x-6">
                    <a href="#" class="hover:text-gray-300">Home</a>
                    <a href="#" class="hover:text-gray-300">Features</a>
                    <a href="#" class="hover:text-gray-300">Contact</a>
                </div>
                <div class="md:hidden">
                    <button type="button" class="text-gray-300 hover:text-white focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    </button>
                </div>
                </div>
            </div>
        </nav>
    </main>
  );
}