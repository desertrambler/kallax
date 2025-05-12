import NavbarIsland from "../../islands/NavbarIsland.tsx";

export default function AddBook() {
    return (
        <div className="bg-white text-black min-h-screen font-mono">
            <NavbarIsland />
            <div className="p-4">
                <h1 class="text-4xl font-bold uppercase border-b-4 border-black pb-2 mb-6">Add Book</h1>
                <form class="w-full max-w-lg space-y-6">
                    <div>
                    <label class="block text-lg font-bold uppercase mb-1" for="title">Title</label>
                    <input class="w-full border-2 border-black bg-transparent p-2 focus:outline-none focus:bg-black focus:text-white" type="text" id="title" name="title" required />
                    </div>

                    <div>
                    <label class="block text-lg font-bold uppercase mb-1" for="author">Author</label>
                    <input class="w-full border-2 border-black bg-transparent p-2 focus:outline-none focus:bg-black focus:text-white" type="text" id="author" name="author" required />
                    </div>

                    <div>
                    <label class="block text-lg font-bold uppercase mb-1" for="isbn">ISBN</label>
                    <input class="w-full border-2 border-black bg-transparent p-2 focus:outline-none focus:bg-black focus:text-white" type="text" id="isbn" name="isbn" />
                    </div>

                    <div>
                    <label class="block text-lg font-bold uppercase mb-1" for="description">Description</label>
                    <textarea class="w-full border-2 border-black bg-transparent p-2 h-32 focus:outline-none focus:bg-black focus:text-white" id="description" name="description"></textarea>
                    </div>

                    <button class="w-full border-4 border-black bg-white text-black font-bold uppercase p-4 hover:bg-black hover:text-white transition-none" type="submit">
                    Add Book
                    </button>
                </form>
            </div>
        </div>
    );
}