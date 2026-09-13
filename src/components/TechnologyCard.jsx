export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}) {
  return (
    <div className="flex min-h-[270px] flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

      {/* Top */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-[10px] font-semibold text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-base font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-xs leading-5 text-gray-500">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-[10px] text-gray-500">
        <span className="rounded bg-gray-50 px-2 py-1">
          {technology.category}
        </span>

        <span>{technology.difficulty}</span>

        <span className="font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-md py-2.5 text-xs font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-green-50 text-green-600"
            : "bg-gray-950 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}