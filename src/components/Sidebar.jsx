import { Link } from "react-router-dom";

const Sidebar = ({ className = "" }) => {
  const base = "hidden md:block w-64 bg-accent text-primary p-5 shadow-sm mt-4 rounded-lg border border-primary/80 sticky top-24";
  return (
    <aside className={`${base} ${className}`.trim()}>
      <div className="flex items-center justify-between mb-6 px-1">
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
      <nav className="flex flex-col gap-2 px-1">
        <Link to="/" className="py-3 px-3 rounded-md text-primary hover:bg-background">Home</Link>
        <Link to="/jobs" className="py-3 px-3 rounded-md text-primary hover:bg-background">Jobs</Link>
        <Link to="/profile" className="py-3 px-3 rounded-md text-primary hover:bg-background">Profile</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
