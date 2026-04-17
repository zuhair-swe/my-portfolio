import { useEffect, useState } from "react";
import API from "../services/api";
import { 
  FaTachometerAlt, 
  FaProjectDiagram, 
  FaEnvelope, 
  FaSignOutAlt 
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Admin() {
  const [messages, setMessages] = useState([]);
  const [skill,setSkill] = useState("");
  const [resume,setResume] = useState(null);
  const [projects,setProjects] = useState([]);

  useEffect(() => {
    API.get("/api/contact")
      .then(res => setMessages(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(()=>{
    API.get("/api/projects")
    .then(res=>setProjects(res.data));
  },[]);

  const deleteMessage = async (id) => {
    await API.delete(`/api/contact/${id}`);
    setMessages(messages.filter(msg => msg._id !== id));
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  const [project,setProject] = useState({
    name:"",
    description:"",
    github:""
  });

  const deleteSkill = async(id)=>{
    await API.delete(`/api/skills/${id}`);
  };

  const deleteProject = async (id)=>{
    await API.delete(`/api/projects/${id}`);
    alert("Project deleted");
  };

  const uploadResume = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", resume);
    await API.post("/api/resume", formData);
    alert("Resume Uploaded");
  };

  const addSkill = async (e)=>{
    e.preventDefault();
    await API.post("/api/skills",{name:skill});
    setSkill("");
  };

  const addProject = async (e)=>{
    e.preventDefault();
    await API.post("/api/projects",project);
    alert("Project Added");
    setProject({
      name:"",
      description:"",
      github:""
    });
  };

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
     <aside className="admin-sidebar">
  <div>
    <div className="admin-logo">Admin Panel</div>

    <nav className="admin-menu">

      <NavLink 
        to="/admin" 
        end
        className={({isActive}) => isActive ? "active" : ""}
      >
        <FaTachometerAlt /> Dashboard
      </NavLink>

      <NavLink 
        to="/#projects"
        className={({isActive}) => isActive ? "active" : ""}
      >
        <FaProjectDiagram /> Projects
      </NavLink>

      <NavLink 
        to="/admin/messages"
        className={({isActive}) => isActive ? "active" : ""}
      >
        <FaEnvelope /> Messages
      </NavLink>

    </nav>
  </div>

  <div className="admin-logout">
    <button onClick={logout}>
      <FaSignOutAlt /> Logout
    </button>
  </div>
</aside>

      {/* CONTENT */}
      <main className="admin-content">

        {/* <div className="admin-topbar">
          <h1>Admin Dashboard</h1>
        </div> */}

        <div className="admin-grid">

          {/* Upload Resume */}
          <div className="admin-card">
            <h2>Upload Resume</h2>
            <form onSubmit={uploadResume}>
              <input 
                type="file"
                accept="application/pdf"
                onChange={(e)=>setResume(e.target.files[0])}
              />
              <button className="btn">Upload Resume</button>
            </form>
          </div>

          {/* Add Project */}
          <div className="admin-card">
            <h2>Add Project</h2>
            <form onSubmit={addProject}>
              <input 
                placeholder="Project Name"
                value={project.name}
                onChange={(e)=>setProject({...project,name:e.target.value})}
              />

              <input 
                placeholder="Description"
                value={project.description}
                onChange={(e)=>setProject({...project,description:e.target.value})}
              />

              <input 
                placeholder="Github Link"
                value={project.github}
                onChange={(e)=>setProject({...project,github:e.target.value})}
              />

              <button className="btn">Add Project</button>
            </form>
          </div>

          {/* Add Skill */}
          <div className="admin-card">
            <h2>Add Skill</h2>
            <form onSubmit={addSkill}>
              <input 
                placeholder="Skill"
                value={skill}
                onChange={(e)=>setSkill(e.target.value)}
              />
              <button className="btn">Add Skill</button>
            </form>
          </div>

          {/* Projects */}
          <div className="admin-card full">
            <h2>Projects</h2>

            {projects.map(p=>(
              <div className="admin-list" key={p._id}>
                <span>{p.name}</span>
                <button 
                  className="btn"
                  onClick={()=>deleteProject(p._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Messages */}
          <div className="admin-card full messages">
            <h2>Messages</h2>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {messages.map((msg) => (
                  <tr key={msg._id}>
                    <td>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td title={msg.message}>{msg.message}</td>
                    <td>{new Date(msg.createdAt).toLocaleString()}</td>
                    <td>
                      <button 
                        className="btn"
                        onClick={() => deleteMessage(msg._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </main>

    </div>
  );
}

export default Admin;