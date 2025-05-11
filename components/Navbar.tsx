export function Navbar() {
    return (
        <nav className="bg-red-900 shadow-md px-4 py-3 flex items-center justify-between">
            <div className="text-xl font-semibold text-white">
                <a href="/home/dashboard" className="hover:text-gray-600">
                    <img src="/navbar_logo.png" alt="Logo" width="50px" height="50px"/>
                </a>
            </div>

            <div className="hidden md:flex space-x-6 text-white">
                <a href="/library/home" className="hover:text-gray-600">Library</a>
                <a href="/tags" className="hover:text-gray-600">Discover</a>
                <a href="/import" className="hover:text-gray-600">Profile</a>
            </div>
        </nav>
    );
}
