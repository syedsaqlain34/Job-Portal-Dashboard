import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(setJob);
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{job.title}</h2>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
