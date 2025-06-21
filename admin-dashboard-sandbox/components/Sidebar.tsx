export default function Sidebar() {
    return (
        <aside className="p-4 border-r h-screen w-60">
            <h2 className="text-x1 font-bold mb-4">Sidebar</h2>
            <ul className="space-y-2">
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </aside>
    );
}