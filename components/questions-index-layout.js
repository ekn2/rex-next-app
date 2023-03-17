import ColumnsLayout from "./columns-layout";
import FirstColumn from "./first-column";
import MainColumn from "./main-column";
import LastColumn from "./last-column";
import SideNavigation from "./side-navigation";
import QuestionsIndexNav from "./questions-index-nav";
import Question from "./question";
import TopExperts from "./top-experts";

export default function QuestionsIndexLayout({ topic = {}, topics, isTopic = true, questions, experts }) {
  if (!('name' in topic)) {
    topic.name = 'Todas las Preguntas';
    isTopic = false;
  }

  return (
    <ColumnsLayout>
      <FirstColumn>
        <SideNavigation topics={topics} />
      </FirstColumn>
      <MainColumn>
        <div>
          <h1 className="text-4xl mb-5">
            { isTopic && <span className="block text-xs tracking-widest max-w-max uppercase mb-3 text-black">Preguntas sobre</span>
            }<span>{topic.name}</span>
          </h1>
          <QuestionsIndexNav />
          <div>
            {questions.data.map((question) => (
              <Question question={question} />
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