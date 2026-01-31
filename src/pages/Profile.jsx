import { useEffect, useState } from "react";

const defaultProfile = {
  name: "Your Name",
  title: "Product Designer",
  location: "Location",
  bio: "Short bio about you...",
  skills: "UI Design, React, Tailwind",
  resume: "",
}

const Profile = () => {
  const key = "userProfile"
  const [editing, setEditing] = useState(false)
  const [profile, setProfile] = useState(defaultProfile)

  useEffect(() => {
    try {
      const p = JSON.parse(localStorage.getItem(key) || "null")
      if (p) setProfile(p)
    } catch {}
  }, [])

  function save(e) {
    e.preventDefault()
    localStorage.setItem(key, JSON.stringify(profile))
    setEditing(false)
  }

  return (
    <div className="p-6 container-centered">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside data-aos="fade-right" data-aos-duration="700" className="md:col-span-1 bg-accent border rounded-lg p-0 shadow-sm overflow-hidden">
          <div className="bg-primary text-accent p-4 text-center">
            <div className="text-sm">Profile</div>
            <h2 className="text-xl font-semibold mt-1">{profile.name}</h2>
            <div className="text-xs mt-1 text-accent/85">{profile.title}</div>
          </div>

          <div className="p-4 flex flex-col items-center text-center gap-3">
            <div className="w-28 h-28 rounded-full bg-background ring-2 ring-secondary flex items-center justify-center text-3xl font-bold text-primary transform transition-shadow hover:shadow-lg">{profile.name?.slice(0,1)}</div>
            <div className="text-sm text-gray-600">{profile.location}</div>

            <div className="mt-3 w-full">
              <h4 className="text-sm font-semibold text-gray-600">Skills</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {(profile.skills || '').split(',').map((s) => s.trim()).filter(Boolean).map((s) => (
                  <span key={s} className="text-xs bg-background text-primary px-2 py-1 rounded transform transition-transform hover:scale-105">{s}</span>
                ))}
              </div>
            </div>

            {profile.resume && (
              <a href={profile.resume} target="_blank" rel="noreferrer" className="mt-3 inline-block px-4 py-2 border rounded-md text-sm bg-secondary text-primary">View Resume</a>
            )}
          </div>
        </aside>

        <section data-aos="fade-left" data-aos-duration="700" className="md:col-span-2 bg-accent border rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary">Profile</h3>
            <button onClick={() => setEditing(!editing)} className="px-3 py-2 bg-secondary text-primary rounded-md">{editing ? 'Cancel' : 'Edit'}</button>
          </div>

          {!editing ? (
            <div className="mt-4 text-gray-700">
              <p>{profile.bio}</p>
            </div>
          ) : (
            <form onSubmit={save} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-gray-600">Name</label>
                  <input value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Title</label>
                  <input value={profile.title} onChange={(e) => setProfile({...profile, title: e.target.value})} className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">Location</label>
                <input value={profile.location} onChange={(e) => setProfile({...profile, location: e.target.value})} className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" />
              </div>

              <div>
                <label className="text-sm text-gray-600">Bio</label>
                <textarea value={profile.bio} onChange={(e) => setProfile({...profile, bio: e.target.value})} className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" rows={4} />
              </div>

              <div>
                <label className="text-sm text-gray-600">Skills (comma separated)</label>
                <input value={profile.skills} onChange={(e) => setProfile({...profile, skills: e.target.value})} className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" />
              </div>

              <div>
                <label className="text-sm text-gray-600">Resume URL</label>
                <input value={profile.resume} onChange={(e) => setProfile({...profile, resume: e.target.value})} className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" />
              </div>

              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 bg-secondary text-primary rounded-md hover:shadow-lg transition-shadow">Save</button>
                <button type="button" onClick={() => { localStorage.removeItem(key); setProfile(defaultProfile); setEditing(false)}} className="px-4 py-2 border border-gray-200 rounded-md">Reset</button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  )
}

export default Profile
