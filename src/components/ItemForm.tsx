'use client';

import { useState } from 'react';

export default function ItemForm({ onAdd }: { onAdd: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    if (!name || !description) return;

    await fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    setName('');
    setDescription('');
    onAdd();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Item</h2>
      
      <div className="flex flex-col md:flex-row gap-4">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter item name"
          className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter description"
          rows={1}
          className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
        >
          Add
        </button>
      </div>
    </div>
  );
}
