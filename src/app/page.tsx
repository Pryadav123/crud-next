// ✅ src/app/page.tsx
'use client';

import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ItemForm onAdd={() => location.reload()} />
      <ItemList />
    </div>
  );
}
