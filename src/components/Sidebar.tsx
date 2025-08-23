import { UserButton } from "@clerk/clerk-react"
import { Home, Plus, Settings } from "lucide-react"

const Sidebar = () => {
    return (
        <div className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center justify-between py-6 bg-white shadow-lg">
            {/* Top icons */}
            <div className="flex flex-col items-center gap-6">
                <Home className="w-6 h-6 text-gray-700 hover:text-red-500 transition-colors cursor-pointer" />
                <Plus className="w-6 h-6 text-gray-700 hover:text-red-500 transition-colors cursor-pointer" />
            </div>

            {/* Bottom icons */}
            <div className="flex flex-col items-center gap-6">
                <Settings className="w-6 h-6 text-gray-700 hover:text-red-500 transition-colors cursor-pointer" />
                <UserButton
                    appearance={{
                        elements: {
                            avatarBox: "w-8 h-8",
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default Sidebar