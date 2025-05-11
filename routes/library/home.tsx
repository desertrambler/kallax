import NavbarIsland from "../../islands/NavbarIsland.tsx";

export default function Library() {
    return (
        <div class="bg-white text-black min-h-screen font-mono">
            <NavbarIsland />
            <div class="p-4">
                {/* Search Bar */}
                <section class="py-8 border-t border-b border-black text-center">
                    <h2 class="text-4xl font-bold uppercase mb-4">Find Your Next Favorite Book</h2>
                    <input
                        type="text"
                        placeholder="Search for books..."
                        class="w-full max-w-lg p-3 border border-black bg-white text-black"
                    />
                </section>

                {/* Filter and Sort Options */}
                <section class="py-4 border-b border-black">
                    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                        {/* Sorting Dropdown */}
                        <div class="flex items-center gap-2">
                            <label htmlFor="sort" class="text-base uppercase font-bold">Sort:</label>
                            <select id="sort" class="border border-black bg-white p-2 text-black">
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="date">Publication Date</option>
                            </select>
                        </div>

                        {/* Filter Categories */}
                        <div class="flex items-center gap-2">
                            <label htmlFor="category" class="text-base uppercase font-bold">Filter:</label>
                            <select id="category" class="border border-black bg-white p-2 text-black">
                                <option value="all">All</option>
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
                <section class="py-8">
                    <h2 class="text-4xl font-bold text-center uppercase mb-8 border-b border-black pb-2">Browse Books</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* Brutalist Book Card */}
                        {[1, 2, 3, 4].map((i) => (
                            <div class="border border-black p-4">
                                <div class="w-full h-40 bg-black mb-4"></div>
                                <h3 class="text-lg font-bold uppercase">Book Title {i}</h3>
                                <p class="text-sm mb-4">by Author Name</p>
                                <button class="w-full border border-black py-2 font-bold uppercase hover:bg-black hover:text-white transition-none">
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
