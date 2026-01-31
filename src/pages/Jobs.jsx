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
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
