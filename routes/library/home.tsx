import NavbarIsland from "../../islands/NavbarIsland.tsx";

export default function Library() {
    return (
        <div class="bg-gray-50 min-h-screen">
            <NavbarIsland />
            <div class="p-6">
                {/* Search Bar */}
                <section class="py-12 bg-gray-200">
                    <div class="max-w-screen-xl mx-auto text-center">
                        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Find Your Next Favorite Book</h2>
                        <input
                            type="text"
                            placeholder="Search for books..."
                            class="w-full max-w-lg p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </section>

                {/* Filter and Sort Options */}
                <section class="py-6">
                    <div class="max-w-screen-xl mx-auto flex justify-between items-center">
                        {/* Sorting Dropdown */}
                        <div class="flex items-center space-x-4">
                            <label htmlFor="sort" class="text-lg text-gray-700">Sort By:</label>
                            <select id="sort" class="p-2 rounded-lg border border-gray-300 shadow-md">
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="date">Publication Date</option>
                            </select>
                        </div>

                        {/* Filter Categories */}
                        <div class="flex items-center space-x-4">
                            <label htmlFor="category" class="text-lg text-gray-700">Filter By:</label>
                            <select id="category" class="p-2 rounded-lg border border-gray-300 shadow-md">
                                <option value="all">All Categories</option>
                                <option value="fiction">Fiction</option>
                                <option value="non-fiction">Non-Fiction</option>
                                <option value="biography">Biography</option>
                                <option value="mystery">Mystery</option>
                                <option value="fantasy">Fantasy</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Book Grid */}
                <section class="py-12">
                    <div class="max-w-screen-xl mx-auto">
                        <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">Browse Books</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {/* Book Card 1 */}
                            <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                <img src="https://via.placeholder.com/150" alt="Book 1" class="w-full h-40 object-cover rounded-lg"></img>
                                <h3 class="mt-4 text-lg font-semibold text-gray-800">Book Title 1</h3>
                                <p class="text-gray-600 mt-2">by Author Name</p>
                                <div class="mt-4">
                                    <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">View Details</button>
                                </div>
                            </div>

                            {/* Book Card 2 */}
                            <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                <img src="https://via.placeholder.com/150" alt="Book 2" class="w-full h-40 object-cover rounded-lg"></img>
                                <h3 class="mt-4 text-lg font-semibold text-gray-800">Book Title 2</h3>
                                <p class="text-gray-600 mt-2">by Author Name</p>
                                <div class="mt-4">
                                    <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">View Details</button>
                                </div>
                            </div>

                            {/* Book Card 3 */}
                            <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                <img src="https://via.placeholder.com/150" alt="Book 3" class="w-full h-40 object-cover rounded-lg"></img>
                                <h3 class="mt-4 text-lg font-semibold text-gray-800">Book Title 3</h3>
                                <p class="text-gray-600 mt-2">by Author Name</p>
                                <div class="mt-4">
                                    <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">View Details</button>
                                </div>
                            </div>

                            {/* Book Card 4 */}
                            <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                <img src="https://via.placeholder.com/150" alt="Book 4" class="w-full h-40 object-cover rounded-lg"></img>
                                <h3 class="mt-4 text-lg font-semibold text-gray-800">Book Title 4</h3>
                                <p class="text-gray-600 mt-2">by Author Name</p>
                                <div class="mt-4">
                                    <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
