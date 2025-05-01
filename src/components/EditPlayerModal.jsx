import React, { useState } from 'react';

const EditPlayerModal = ({ player, onClose, onUpdate }) => {
  const [updatedPlayer, setUpdatedPlayer] = useState({ ...player });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPlayer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://sheetdb.io/api/v1/67gtzy6jhdt9p/${player.id}`, {
        method: 'PUT',
        body: JSON.stringify({ data: updatedPlayer }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        onUpdate(updatedPlayer);
        onClose();
      }
    } catch (error) {
      console.error('Error updating player:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
        <h2 className="text-2xl mb-4 text-dark">Edit Player</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='text-dark'>Name</label>
            <input
              type="text"
              name="name"
              value={updatedPlayer.name}
              onChange={handleChange}
              className="w-full p-2 border rounded text-dark"
            />
          </div>
          <div className="mt-3">
            <label className='text-dark'>Age</label>
            <input
              type="number"
              name="age"
              value={updatedPlayer.age}
              onChange={handleChange}
              className="w-full p-2 border rounded text-dark"
            />
          </div>
          <div className="mt-3">
            <label className='text-dark'>Position</label>
            <input
              type="text"
              name="position"
              value={updatedPlayer.position}
              onChange={handleChange}
              className="w-full p-2 border rounded text-dark"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPlayerModal;
