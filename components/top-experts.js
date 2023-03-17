import Link from "next/link";
import Image from "next/image";

export default function TopExperts({ experts }) {
  return (
    <div>
      <h3 className="text-sm font-bold mb-5 uppercase">Contadores Destacados</h3>
      <div>
        {experts.data.map((expert) => (
          <div className="my-4 flex gap-2.5">
            <p className="text-sm font-semibold">#{expert.ranking}</p>
            <div>
              <figure className="w-10 h-10 bg-gray-200 rounded-full border border-solid border-black overflow-hidden">
                <img className="w-10 h-10" src={expert.img} />
              </figure>
            </div>
            <div>
              <p className="text-gray-700 text-sm font-semibold mb-1">{expert.name}</p>
              <p className="text-sm italic mb-1">{expert.profession}</p>
              <p className="text-xs mb-1 text-gray-700"><span className="text-indigo-800">●</span> <span className="font-bold">{expert.reputation}</span> ptos.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}