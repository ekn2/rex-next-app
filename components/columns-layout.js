import GlobalHeader from "./global-header";

export default function ColumnsLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <GlobalHeader />
      <div className="mx-5 my-3 flex-grow">
        <div className="max-w-screen-xl mx-auto min-h-full flex flex-col">
          <div className="divide-x divide-black flex flex-grow">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}