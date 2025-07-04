
import AddClientModel from '../components/AddClientModal';
import Clients from '../components/Clients';

export default function ClientsPage() {
  return (
    <div className="container mx-auto p-2 pt-5 ">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Clients</h1>
        <p className="lead mb-4">Keep track of your client information and build better relationships.</p>

        <AddClientModel />
      </div>
      <Clients />
    </div>
  );
}
