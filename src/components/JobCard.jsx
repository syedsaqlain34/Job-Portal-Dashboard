import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const JobCard = ({ job }) => {
  const key = "savedJobs"
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem(key) || "[]")
      setSaved(list.includes(job.id))
    } catch {
      setSaved(false)
    }
  }, [job.id])

  function toggleSave(e) {
    e.preventDefault()
    try {
      const list = JSON.parse(localStorage.getItem(key) || "[]")
      const next = list.includes(job.id) ? list.filter((id) => id !== job.id) : [...list, job.id]
      localStorage.setItem(key, JSON.stringify(next))
      setSaved(!saved)
    } catch {
      localStorage.setItem(key, JSON.stringify([job.id]))
      setSaved(true)
    }
  }

  return (
    <article data-aos="fade-up" className="bg-accent border rounded-lg shadow-card hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-4 flex flex-col sm:flex-row items-start gap-4">
        <div className="flex-shrink-0 w-full sm:w-20 h-20 sm:h-20 rounded-md bg-background flex items-center justify-center text-primary font-bold text-xl">
          {job.company?.slice(0,1) || 'J'}
        </div>

        <div className="flex-1 w-full min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-primary truncate">{job.title}</h3>
              <p className="text-sm text-gray-600 truncate">{job.company} • {job.location}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-sm font-medium text-gray-600">{job.type || 'Full-time'}</div>
              {job.salary && <div className="text-sm text-primary font-semibold">{job.salary}</div>}
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-700 break-words">{job.description?.slice(0,140)}{job.description && job.description.length > 140 ? '...' : ''}</p>

          <div className="mt-3 flex items-center gap-2 flex-wrap">
            {(job.tags || []).slice(0,4).map((t) => (
              <span key={t} className="text-xs bg-background text-primary px-2 py-1 rounded break-keep">{t}</span>
            ))}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex gap-3 w-full sm:w-auto">
              <Link to={`/jobs/${job.id}`} className="inline-flex justify-center w-full sm:w-auto items-center px-3 py-2 bg-secondary text-primary rounded-md text-sm hover:brightness-90">View</Link>
              <a href={job.applyUrl || '#'} target="_blank" rel="noreferrer" className="inline-flex justify-center w-full sm:w-auto items-center px-3 py-2 border border-gray-200 rounded-md text-sm hover:bg-accent">Apply</a>
            </div>

            <div className="w-full sm:w-auto sm:ml-auto">
              <button onClick={toggleSave} className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-200" aria-pressed={saved}>
                {saved ? (
                  <span className="text-secondary">Saved</span>
                ) : (
                  <span className="text-primary">Save</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default JobCard
