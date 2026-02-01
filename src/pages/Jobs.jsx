import { useEffect, useState } from "react";
import { fetchJobs } from "../services/api";
import JobCard from "../components/JobCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex mt-4">
        <Sidebar className="ml-4" />

        <main className="flex-1 p-6 container-centered">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Jobs</h1>
            <div className="text-sm text-gray-600">{jobs.length} results</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Jobs;
