export default function QnAAnswer() {
  return (
    <div className="border-t border-solid border-t-gray-500 pt-5">
      <p className="text-xs mb-5 text-black uppercase tracking-widest">Respuesta <span>&#x25aa;</span> <span>publicada el <time>February 9, 2023</time></span></p>
      <div className="flex gap-2.5 items-start">
        <div>
          <figure className="w-12 h-12 bg-gray-200 rounded-md"></figure>
        </div>
        <div>
          <p><span className="font-bold text-gray-800">Firstname M. Lastname</span> <span className="text-sm font-semibold text-gray-500">1.5K puntos</span></p>
          <p><time className="text-sm text-gray-500">Certified Public Accountant</time></p>
        </div>
      </div>
      <div className="my-5 text-base">
        <p className="mb-5">They get both the chili and cheese from Gehl Foods in Germantown, WI. (Likely through a distributor) They come in 1 gal plastic bags, and the cheese also comes in #10 cans. I doubt you'd be able to buy one wholesale.</p>
        <p>I know they also sell the cheese in individual cups, similar to pudding cups or Gerber baby food, but I don't remember the brand name they use.</p>
      </div>
      <div className="flex justify-between items-center border-b border-t-0 border-solid border-b-gray-500 pb-5">
        <dl className="flex items-baseline gap-4">
          <div className="flex items-baseline flex-row-reverse">
            <dt className="text-gray-600">Recomendaciones</dt>
            <dd className="after:content-['\00a0'] after:text-base font-bold">5</dd>
          </div>
        </dl>
        <div className="flex items-center gap-2.5">
          <label for="interested-q" className="bg-transparent cursor-pointer py-1 px-2 text-black rounded-full border border-solid border-gray-500 text-sm"><input type="checkbox" id="interested-q" className=" inline-block mr-2 bg-transparent w-5 h-5 border-solid border border-gray-500 rounded-full text-gray-700"/>Respuesta Genial | <span className="font-bold">17</span></label>
        </div>
      </div>
    </div>
  );
}