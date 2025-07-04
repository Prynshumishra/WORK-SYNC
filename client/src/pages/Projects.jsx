
import AddProjectModal from '../components/AddProjectModal';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-2 pt-5">

      <div className="row align-items-center mt-mb-4 gy-4">
    
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Projects</h1>
        <p className="lead mb-4">Manage, track, and collaborate on your ongoing projects seamlessly.</p>

        <AddProjectModal />
      </div>
      <Projects />
    </div>
    </div>
  );
}
