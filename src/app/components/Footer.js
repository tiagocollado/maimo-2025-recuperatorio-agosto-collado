export default function Footer() {
  return (
    <div className="flex justify-between items-center h-10 px-12 py-10 bg-slate-500 md:bg-slate-900 lg:bg-red-800">
      <div className="text-white font-semibold">© 2025 Copiright</div>
      <div className="flex justify-center items-center gap-4 md:gap-8">
        <div className="hover:text-gray-300 cursor-pointer">Tiktok</div>
        <div className="hover:text-gray-300 cursor-pointer">Instagram</div>
        <div className="hover:text-gray-300 cursor-pointer">Youtube</div>
      </div>
    </div>
  )
}
