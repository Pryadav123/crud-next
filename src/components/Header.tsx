// ✅ src/components/Header.tsx
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-extrabold tracking-wide">CRUD App</h1>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#add" className="hover:underline">Add Item</a>
          <a href="#list" className="hover:underline">View Items</a>
        </nav>
      </div>
    </header>
  );
}