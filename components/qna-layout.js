import ColumnsLayout from "./columns-layout";
import FirstColumn from "./first-column";
import MainColumn from "./main-column";
import LastColumn from "./last-column";
import SideNavigation from "./side-navigation";
import TopExperts from "./top-experts";
import QnAQuestion from "./qna-question";
import QnAAnswers from "./qna-answers";
import QnAAnswer from "./qna-answer";

export default function QnALayout({ topics, question, experts }) {
  return (
    <ColumnsLayout>
      <FirstColumn>
        <SideNavigation topics={topics} />
      </FirstColumn>
      <MainColumn>
        <QnAQuestion question={question} />
        <QnAAnswers>
          <QnAAnswer />
        </QnAAnswers>
      </MainColumn>
      <LastColumn>
        <TopExperts experts={experts} />
      </LastColumn>
    </ColumnsLayout>
  );
}