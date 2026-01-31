import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-primary text-accent min-h-screen p-6">
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/" className="py-2 px-3 rounded-md text-accent hover:bg-primary/90">Home</Link>
        <Link to="/jobs" className="py-2 px-3 rounded-md text-accent hover:bg-primary/90">Jobs</Link>
        <Link to="/profile" className="py-2 px-3 rounded-md text-accent hover:bg-primary/90">Profile</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
