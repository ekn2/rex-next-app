export default function LeadRow() {
  return (
    <div className="border-b border-solid border-gray-200 mb-8 pb-8">
      <div className="flex justify-between flex-grow">
        <div className="flex gap-2.5">
          <div>
            <figure className="w-20 h-20 bg-gray-200 rounded-lg"></figure>
          </div>
          <div>
            <h1 className="text-gray-600 mb-1 font-semibold">Angela Noelle Schrute</h1>
            <p className="mb-1">Certified Public Accountant</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="mb-2 text-gray-900 text-xl font-semibold">#1</p>
            <p className="text-gray-400">posición</p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-gray-900 text-xl">1,549</p>
            <p className="text-gray-400">puntuación</p>
          </div>
        </div>
      </div>
    </div>
  );
}