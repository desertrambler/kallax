import NavbarIsland from "../../islands/NavbarIsland.tsx";

export default function Dashboard() {
    return (
        <div class="bg-white text-black min-h-screen font-mono">
            <NavbarIsland />
            <div class="p-4">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Top Left Quadrant */}
                    <section class="border border-black p-4">
                        <h2 class="text-2xl font-bold uppercase mb-4">Continue Reading</h2>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 border border-black p-2">
                                <div class="w-16 h-24 bg-black"></div>
                                <div>
                                    <h3 class="font-bold">Book Title</h3>
                                    <p class="text-sm">by Author Name</p>
                                    <div class="mt-1 text-xs underline">Progress: 45%</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Top Right Quadrant */}
                    <section class="border border-black p-4">
                        <h2 class="text-2xl font-bold uppercase mb-4">Your Library</h2>
                        <ul class="space-y-2 text-sm">
                            <li class="flex justify-between border-t border-black pt-1">
                                <span>📘 The Alchemist</span>
                                <span>Finished</span>
                            </li>
                            <li class="flex justify-between border-t border-black pt-1">
                                <span>📙 Atomic Habits</span>
                                <span>In Progress</span>
                            </li>
                        </ul>
                        <a href="#" class="block mt-4 text-sm underline">View full library →</a>
                    </section>

                    {/* Bottom Left Quadrant */}
                    <section class="border border-black p-4">
                        <h2 class="text-2xl font-bold uppercase mb-4">Recommended</h2>
                        <div class="space-y-4">
                            <div class="border border-black p-2">
                                <div class="w-full h-32 bg-black mb-2"></div>
                                <h3 class="font-bold">Book Title</h3>
                                <p class="text-sm">Author Name</p>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Right Quadrant */}
                    <section class="border border-black p-4">
                        <h2 class="text-2xl font-bold uppercase mb-4">Friend Activity</h2>
                        <div class="space-y-4">
                            {/* Friend's Activity 1 */}
                            <div class="flex items-start gap-4 border border-black p-2">
                                <div class="w-12 h-12 bg-black"></div>
                                <div>
                                    <p class="font-bold">John Doe</p>
                                    <p class="text-sm">Finished reading</p>
                                    <p class="text-sm font-bold">"The Alchemist"</p>
                                    <div class="text-xs underline">5 hours ago</div>
                                </div>
                            </div>

                            {/* Friend's Activity 2 */}
                            <div class="flex items-start gap-4 border border-black p-2">
                                <div class="w-12 h-12 bg-black"></div>
                                <div>
                                    <p class="font-bold">Jane Smith</p>
                                    <p class="text-sm">Started reading</p>
                                    <p class="text-sm font-bold">"Atomic Habits"</p>
                                    <div class="text-xs underline">2 days ago</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
