import { DateTime } from "luxon";

export default function QnAQuestion({ question }) {
  const dt = DateTime.fromMillis(question.timestamp);
  const dt_format = { month: 'long', day: 'numeric', year: 'numeric' };

  return(
    <div>
      <span className="block text-xs tracking-widest max-w-max uppercase mb-3 text-black">Pregunta <span>&#x25aa;</span> <span>publicada el <time>{dt.setLocale('es-MX').toLocaleString(dt_format)}</time></span></span>
      <h1 className="text-2xl mb-5 font-bold">{question.title}</h1>
      <div className="mt-5">
        <p>{question.body}</p>
      </div>
      <div className="flex justify-between items-center border-b border-solid border-b-gray-300 pb-5 mt-5">
      <div>
        <div className="flex gap-2.5 items-center">
          <span className="font-semibold">Publicada por:</span>
            <div>
              <p><span className="text-black">{question.author}</span></p>
            </div>
            <div>
              <figure className="w-6 h-6 bg-gray-200"></figure>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <label for="interested-q" className="bg-transparent cursor-pointer py-1 pl-2 pr-3.5 text-black rounded-full border border-solid border-gray-500 text-sm"><input type="checkbox" id="interested-q" className=" inline-block mr-2 bg-transparent w-5 h-5 border-solid border border-gray-500 rounded-full text-gray-700"/>¡Buena pregunta! | <span className="font-bold">{question.interested_count}</span></label>
        </div>
      </div>
    </div>
  );
}