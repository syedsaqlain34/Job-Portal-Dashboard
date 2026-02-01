import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { logout } = useAuth();

  const [open, setOpen] = useState(false)

  return (
    <header className="bg-primary text-accent shadow-sm">
      <div className="container-centered flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-md hover:bg-primary/90" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
          <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center text-primary font-semibold">JP</div>
          <h1 className="font-semibold text-lg text-accent">Job Portal</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <button onClick={logout} className="px-3 py-2 bg-secondary text-primary rounded-md text-sm">Logout</button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute left-4 right-4 top-20 bg-accent border rounded-lg p-4 shadow-lg z-40">
          <nav className="flex flex-col gap-2">
            <a href="/" className="py-2 px-3 rounded-md text-primary hover:bg-primary/10">Home</a>
            <a href="/jobs" className="py-2 px-3 rounded-md text-primary hover:bg-primary/10">Jobs</a>
            <a href="/profile" className="py-2 px-3 rounded-md text-primary hover:bg-primary/10">Profile</a>
            <button onClick={logout} className="mt-2 px-3 py-2 bg-secondary text-primary rounded-md text-sm">Logout</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
