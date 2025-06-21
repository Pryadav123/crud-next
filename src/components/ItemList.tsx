'use client';

import { useEffect, useState } from 'react';

export default function ItemList() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch('/api/items');
    const data = await res.json();
    setItems(data);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/items/${id}`, { method: 'DELETE' });
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-4 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Your Items</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No items added yet.</p>
      ) : (
        items.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
          >
            <div className="mb-2 md:mb-0">
              <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="mt-2 md:mt-0 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-md transition"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
