export function Switch({ checked, onCheckedChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheckedChange}
        className="sr-only peer"
      />
      <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 peer transition">
        <div className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transform transition-all ${checked ? "translate-x-5" : ""}`}></div>
      </div>
    </label>
  );
}
