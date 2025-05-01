import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EditPlayerModal from './EditPlayerModal';

const AdminPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const fetchPlayers = async () => {
    try {
      const res = await fetch('https://sheetdb.io/api/v1/67gtzy6jhdt9p');
      const data = await res.json();
      setPlayers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://sheetdb.io/api/v1/67gtzy6jhdt9p/${id}`, { method: 'DELETE' });
      setPlayers(players.filter((player) => player.id !== id));
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  const handleEdit = (player) => {
    setCurrentPlayer(player);
    setShowModal(true);
  };

  // Pagination logic
  const indexOfLastPlayer = page * 10;
  const indexOfFirstPlayer = indexOfLastPlayer - 10;
  const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-5 text-dark">Players List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-dark">Name</th>
                <th className="border px-4 py-2 text-dark">Age</th>
                <th className="border px-4 py-2 text-dark">Position</th>
                <th className="border px-4 py-2 text-dark">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPlayers.map((player) => (
                <tr key={player.id}>
                  <td className="border px-4 py-2 text-dark">{player.name}</td>
                  <td className="border px-4 py-2 text-dark">{player.age}</td>
                  <td className="border px-4 py-2 text-dark">{player.position}</td>
                  <td className="border px-4 py-2 text-dark">
                    <button
                      onClick={() => handleEdit(player)}
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(player.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-5">
            <button
              onClick={() => paginate(page - 1)}
              disabled={page === 1}
              className="mr-3 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(page + 1)}
              disabled={page * 10 >= players.length}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <EditPlayerModal
          player={currentPlayer}
          onClose={() => setShowModal(false)}
          onUpdate={(updatedPlayer) => {
            setPlayers(
              players.map((player) =>
                player.id === updatedPlayer.id ? updatedPlayer : player
              )
            );
            setShowModal(false);
          }}
        />
      )}
    </motion.div>
  );
};

export default AdminPlayers;
