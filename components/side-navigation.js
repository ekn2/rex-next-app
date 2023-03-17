import Link from "next/link";

export default function SideNavigation({ topics }) {
  return (
    <div>
      <h3 className="text-sm font-bold mb-5 uppercase">Explorar Preguntas</h3>
      <p className="text-base mb-5"><Link href="/questions">Todas las Preguntas</Link></p>
      <h3 className="text-base font-semibold mb-5">Por Tema:</h3>
      <ul className="text-base">
        {topics.data.map((topic) => (
          <li><Link href={`/topic/${topic._id}`}>{topic.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}