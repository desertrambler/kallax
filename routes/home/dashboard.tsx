import NavbarIsland from "../../islands/NavbarIsland.tsx";

export default function Dashboard() {
    return (
        <div className="bg-white text-black min-h-screen font-mono">
            <NavbarIsland />
            <div className="p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Top Left Quadrant */}
                    <section className="border border-black p-4">
                        <h2 className="text-2xl font-bold uppercase mb-4">Continue Reading</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 border border-black p-2">
                                <div className="w-16 h-24 bg-black"></div>
                                <div>
                                    <h3 className="font-bold">Book Title</h3>
                                    <p className="text-sm">by Author Name</p>
                                    <div className="mt-1 text-xs underline">Progress: 45%</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Top Right Quadrant */}
                    <section className="border border-black p-4">
                        <h2 className="text-2xl font-bold uppercase mb-4">Your Library</h2>
                        <ul className="space-y-2 text-sm">
                            <li className="flex justify-between border-t border-black pt-1">
                                <span>📘 The Alchemist</span>
                                <span>Finished</span>
                            </li>
                            <li className="flex justify-between border-t border-black pt-1">
                                <span>📙 Atomic Habits</span>
                                <span>In Progress</span>
                            </li>
                        </ul>
                        <a href="#" className="block mt-4 text-sm underline">View full library →</a>
                    </section>

                    {/* Bottom Left Quadrant */}
                    <section className="border border-black p-4">
                        <h2 className="text-2xl font-bold uppercase mb-4">Recommended</h2>
                        <div className="space-y-4">
                            <div className="border border-black p-2">
                                <div className="w-full h-32 bg-black mb-2"></div>
                                <h3 className="font-bold">Book Title</h3>
                                <p className="text-sm">Author Name</p>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Right Quadrant */}
                    <section className="border border-black p-4">
                        <h2 className="text-2xl font-bold uppercase mb-4">Friend Activity</h2>
                        <div className="space-y-4">
                            {/* Friend's Activity 1 */}
                            <div className="flex items-start gap-4 border border-black p-2">
                                <div className="w-12 h-12 bg-black"></div>
                                <div>
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-sm">Finished reading</p>
                                    <p className="text-sm font-bold">"The Alchemist"</p>
                                    <div className="text-xs underline">5 hours ago</div>
                                </div>
                            </div>

                            {/* Friend's Activity 2 */}
                            <div className="flex items-start gap-4 border border-black p-2">
                                <div className="w-12 h-12 bg-black"></div>
                                <div>
                                    <p className="font-bold">Jane Smith</p>
                                    <p className="text-sm">Started reading</p>
                                    <p className="text-sm font-bold">"Atomic Habits"</p>
                                    <div className="text-xs underline">2 days ago</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
