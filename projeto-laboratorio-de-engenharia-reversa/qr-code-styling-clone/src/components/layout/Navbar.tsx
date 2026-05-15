export function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 rounded-none shadow-none">
      <div className="max-w-5xl mx-auto flex justify-between items-center w-full">
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-3xl tracking-wider">QR</span>
          <span className="font-normal text-xl tracking-wide">Code Styling</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-sm text-neutral-300">npm v1.8.3</span>
          <a href="#" className="hover:underline">Github</a>
        </div>
      </div>
    </nav>
  );
}
