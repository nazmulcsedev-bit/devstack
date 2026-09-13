export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      
      <h2 className="text-base font-bold text-gray-900">
        Your Stack
      </h2>

      <p className="mt-1 text-xs text-gray-400">
        {stack.length} Technology
        {stack.length !== 1 ? "s" : ""} Selected
      </p>

      {stack.length === 0 ? (
        <div className="flex min-h-48 items-center justify-center text-center">
          <p className="text-sm text-gray-400">
            Your stack is empty.
            <br />
            Add technologies to get started.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-4 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-gray-100 p-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-xs font-semibold text-gray-800">
                    {technology.name}
                  </h3>

                  <p className="text-[10px] text-gray-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-gray-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-md border border-red-200 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}