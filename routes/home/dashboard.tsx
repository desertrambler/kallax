import NavbarIsland from "../../islands/NavbarIsland.tsx";

export default function Dashboard() {
    return (
        <div class="bg-gray-50 min-h-screen">
            <NavbarIsland />
            <div class="p-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Left Quadrant */}
                    <section class="bg-white p-6 rounded-2xl shadow h-full">
                        <h2 class="text-xl font-semibold mb-4">Continue Reading</h2>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
                                <div class="w-16 h-24 bg-gray-300 rounded-md"></div>
                                <div>
                                    <h3 class="font-medium">Book Title</h3>
                                    <p class="text-sm text-gray-600">by Author Name</p>
                                    <div class="mt-2 text-xs text-indigo-600">Progress: 45%</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Top Right Quadrant */}
                    <section class="bg-white p-6 rounded-2xl shadow h-full">
                        <h2 class="text-xl font-semibold mb-4">Your Library</h2>
                        <ul class="space-y-3 text-sm">
                            <li class="flex justify-between">
                                <span>📘 The Alchemist</span>
                                <span class="text-gray-500">Finished</span>
                            </li>
                            <li class="flex justify-between">
                                <span>📙 Atomic Habits</span>
                                <span class="text-gray-500">In Progress</span>
                            </li>
                        </ul>
                        <a href="#" class="block mt-4 text-sm text-indigo-600 hover:underline">View full library →</a>
                    </section>

                    {/* Bottom Left Quadrant */}
                    <section class="bg-white p-6 rounded-2xl shadow h-full">
                        <h2 class="text-xl font-semibold mb-4">Recommended</h2>
                        <div class="space-y-4">
                            <div class="bg-gray-100 p-4 rounded-lg">
                                <div class="w-full h-32 bg-gray-300 rounded"></div>
                                <h3 class="mt-2 font-medium">Book Title</h3>
                                <p class="text-sm text-gray-500">Author Name</p>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Right Quadrant */}
                    <section class="bg-white p-6 rounded-2xl shadow h-full">
                        <h2 class="text-xl font-semibold mb-4">Friend Activity Feed</h2>
                        <div class="space-y-4">
                            {/* Friend's Activity 1 */}
                            <div class="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg">
                                <div class="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Friend's Avatar */}
                                <div>
                                    <p class="font-semibold text-gray-700">John Doe</p>
                                    <p class="text-sm text-gray-500">Finished reading</p>
                                    <p class="text-sm font-medium text-gray-800">"The Alchemist" by Paulo Coelho</p>
                                    <div class="mt-2 text-xs text-indigo-600">5 hours ago</div>
                                </div>
                            </div>

                            {/* Friend's Activity 2 */}
                            <div class="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg">
                                <div class="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Friend's Avatar */}
                                <div>
                                    <p class="font-semibold text-gray-700">Jane Smith</p>
                                    <p class="text-sm text-gray-500">Started reading</p>
                                    <p class="text-sm font-medium text-gray-800">"Atomic Habits" by James Clear</p>
                                    <div class="mt-2 text-xs text-indigo-600">2 days ago</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
