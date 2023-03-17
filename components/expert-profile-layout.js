import ColumnsLayout from "./columns-layout";
import FirstColumn from "./first-column";
import MainColumn from "./main-column";
import LastColumn from "./last-column";
import SideNavigation from "./side-navigation";
import TopExperts from "./top-experts";
import ExpertProfile from "./expert-profile";

export default function ExpertProfileLayout({ topics }) {
  return (
    <ColumnsLayout>
      <FirstColumn>
        <SideNavigation topics={topics} />
      </FirstColumn>
      <MainColumn>
        <ExpertProfile />
      </MainColumn>
      <LastColumn>
      </LastColumn>
    </ColumnsLayout>
  );
}