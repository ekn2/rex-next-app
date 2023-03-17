export default function QuestionsIndexNav() {
  return (
    <nav className="flex items-center justify-between gap-5 border-y border-solid border-gray-500">
      <ul className="flex items-center gap-10 [&>*]:py-2">
        <li className="italic">Ordenar por:</li>
        <li className="bg-gray-200 px-3"><a className="inline-block font-semibold text-black" href="#">Buena Pregunta</a></li>
        <li><a className="inline-block text-gray-700" href="#">+ Recientes</a></li>
        <li><a className="inline-block text-gray-700" href="#">+ Leídas</a></li>
      </ul>
    </nav>
  );
}