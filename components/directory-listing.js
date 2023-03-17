export default function DirectoryListing() {
  return(
    <div className="mb-10 border-b border-solid border-gray-400 pb-10">
      <div  className="flex gap-5">
        <div>
          <figure className="w-24 h-24 bg-gray-200 rounded-lg"></figure>
        </div>
        <div>
          <h1 className="text-base mb-2 font-semibold">Angela Noelle Schrute</h1>
          <p className="mb-2 text-sm"><span className="italic">Certified Public Accountant</span> en Scranton, PA</p>
          <p className="mb-2 text-black text-sm"><span className="font-bold">1,549</span> puntos</p>
          <p className="text-base text-black mt-5 italic">I am passionate about accuracy and efficiency in financial reporting. My expertise includes accounts payable, accounts receivable, payroll, and budgeting, and I have a proven track record of delivering timely and accurate financial statements.</p>
          <div className="flex mt-5 text-sm justify-start">
            <p className="font-semibold text-center py-2 px-5 rounded border border-solid border-gray-400 mr-2">Llamar (855) 451-0034</p>
            <p className="font-semibold text-center py-2 px-5 rounded border border-solid border-gray-400 ml-2"><a className="font-semibold" href="3">Visitar Sitio Web</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}