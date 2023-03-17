import ColumnsLayout from "./columns-layout";
import FirstColumn from "./first-column";
import MainColumn from "./main-column";
import LastColumn from "./last-column";
import SideNavigation from "./side-navigation";
import TopExperts from "./top-experts";
import DirectoryListing from "./directory-listing";

export default function DirectoryLayout({ topics, experts }) {
  return (
    <ColumnsLayout>
      <FirstColumn>
        <SideNavigation topics={topics} />
      </FirstColumn>
      <MainColumn>
        <div>
          <div className="border-b border-solid border-gray-300">
            <h2 className="text-2xl font-bold text-center">Directorio</h2>
            <form className="my-10">
              <input className="w-full border-2 border-solid border-gray-500 rounded-xl bg-gray-50" placeholder="Ciudad, Estado, ó Código Postal" type="text" />
            </form>
            <h3 className="my-5"><span className="font-semibold">100</span> Contadores en Scranton, PA</h3>
          </div>
          <div className="mt-10">
            {["1", "2", "3"].map((entry) => (
              <DirectoryListing/>
            ))}
          </div>
        </div>
      </MainColumn>
      <LastColumn>
        <TopExperts experts={experts} />
      </LastColumn>
    </ColumnsLayout>
  );
}