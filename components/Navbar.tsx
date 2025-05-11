export function Navbar() {
    return (
        <nav class="bg-red-800 shadow-md px-4 py-3 flex items-center justify-between">
            <div class="text-xl font-semibold text-white">
                <a href="/home/dashboard" class="hover:text-gray-600">Kallax</a>
            </div>

            <div class="hidden md:flex space-x-6 text-white">
                <a href="/wishlist" class="hover:text-gray-600">Library</a>
                <a href="/tags" class="hover:text-gray-600">Discover</a>
                <a href="/import" class="hover:text-gray-600">Profile</a>
            </div>
        </nav>
    );
}
