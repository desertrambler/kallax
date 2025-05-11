export function Navbar() {
    return (
        <nav class="bg-red-800 shadow-md px-4 py-3 flex items-center justify-between">
            <div class="text-xl font-semibold text-white">
                Kallax
            </div>

            <div class="hidden md:flex space-x-6 text-white">
                <a href="/dashboard" class="hover:text-gray-600">Dashboard</a>
                <a href="/wishlist" class="hover:text-gray-600">Wishlist</a>
                <a href="/tags" class="hover:text-gray-600">Tags & XP</a>
                <a href="/import" class="hover:text-gray-600">Import</a>
            </div>
        </nav>
    );
}
