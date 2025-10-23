export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <div
            key={card}
            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-700 mb-2">Card {card}</h3>
            <p className="text-gray-500 text-sm">
              Sample content for dashboard card {card}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
