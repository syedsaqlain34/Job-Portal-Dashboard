import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import { fetchJobs } from "../services/api";

const Stat = ({ label, value }) => (
  <div className="bg-white border rounded-lg p-4 shadow-sm">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-2xl font-bold mt-1">{value}</div>
  </div>
);

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchJobs()
      .then((data) => {
        if (!mounted) return;
        const mapped = (data || []).slice(0, 6).map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          company: p.brand || "Company",
          location: p.category || "Remote",
          tags: [p.category],
          applyUrl: p.url || "#",
        }));
        setJobs(mapped);
      })
      .catch(() => setJobs([]))
      .finally(() => setLoading(false));
    return () => (mounted = false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex mt-4">
        <Sidebar className="ml-4" />

        <main className="flex-1 p-6 container-centered">
          <section className="mb-6">
            <div className="bg-gradient-to-r from-primary to-secondary text-accent rounded-lg p-6 flex items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold">Welcome back</h1>
                <p className="mt-1 text-accent/90">Here's an overview of your hiring dashboard and recommended jobs.</p>
                <div className="mt-4 flex gap-3">
                  <a href="/jobs" className="px-4 py-2 bg-secondary text-primary rounded-md font-semibold">Browse Jobs</a>
                  <a href="/profile" className="px-4 py-2 border border-accent/30 rounded-md text-accent">View Profile</a>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm text-white/80">Saved</div>
                  <div className="text-xl font-bold">--</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/80">Applied</div>
                  <div className="text-xl font-bold">--</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Stat label="Open Roles" value={jobs.length || 0} />
            <Stat label="Companies" value={5} />
            <Stat label="New This Week" value={12} />
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recommended Jobs</h2>
              <a href="/jobs" className="text-secondary">See all</a>
            </div>

            {loading ? (
              <div className="text-center text-gray-500 py-8">Loading jobs...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
