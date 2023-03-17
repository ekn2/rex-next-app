import ColumnsLayout from "./columns-layout";
import FirstColumn from "./first-column";
import MainColumn from "./main-column";
import LastColumn from "./last-column";
import SideNavigation from "./side-navigation";
import TopExperts from "./top-experts";
import LeadRow from "./lead-row";

export default function LeaderboardLayout({ experts, topics }) {
  return (
    <ColumnsLayout>
      <FirstColumn>
        <SideNavigation topics={topics} />
      </FirstColumn>
      <MainColumn>
        <h2 className="text-2xl font-bold text-center">Marcador de Puntajes</h2>
          <div className="mt-16 min-w-full">
            <div>
              <div>
                {["1", "2", "3"].map((row) => (
                  <LeadRow />
                ))}
              </div>
            </div>
          </div>
      </MainColumn>
      <LastColumn>
        <TopExperts experts={experts} />
      </LastColumn>
    </ColumnsLayout>
  );
}