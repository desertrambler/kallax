import NavbarIsland from "../../islands/NavbarIsland.tsx";

export default function Library() {
    return (
        <div className="bg-white text-black min-h-screen font-mono">
            <NavbarIsland />
            <div className="p-4">
                {/* Search Bar */}
                <section className="py-8 border-t border-b border-black text-center">
                    <h2 className="text-4xl font-bold uppercase mb-4">Find Your Next Favorite Book</h2>
                    <input
                        type="text"
                        placeholder="Search for books..."
                        className="w-full max-w-lg p-3 border border-black bg-white text-black"
                    />
                </section>

                {/* Filter and Sort Options */}
                <section className="py-4 border-b border-black">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                        {/* Sorting Dropdown */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="sort" className="text-base uppercase font-bold">Sort:</label>
                            <select id="sort" className="border border-black bg-white p-2 text-black">
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="date">Publication Date</option>
                            </select>
                        </div>

                        {/* Filter Categories */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="category" className="text-base uppercase font-bold">Filter:</label>
                            <select id="category" className="border border-black bg-white p-2 text-black">
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
                <section className="py-8">
                    <h2 className="text-4xl font-bold text-center uppercase mb-8 border-b border-black pb-2">Browse Books</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* Brutalist Book Card */}
                        {[1, 2, 3, 4].map((i) => (
                            <div className="border border-black p-4">
                                <div className="w-full h-40 bg-black mb-4"></div>
                                <h3 className="text-lg font-bold uppercase">Book Title {i}</h3>
                                <p className="text-sm mb-4">by Author Name</p>
                                <button className="w-full border border-black py-2 font-bold uppercase hover:bg-black hover:text-white transition-none">
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
