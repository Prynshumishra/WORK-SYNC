import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((c) => c.id !== deleteClient.id),
        },
      });
    },
    onError(error) {
      console.error("Failed to delete client:", error);
      alert("An error occurred while deleting the client. Please try again.");
    },
  });

  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete client "${client.name}"? This action cannot be undone.`
      )
    ) {
      deleteClient();
    }
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
