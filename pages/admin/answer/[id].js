import AdminLayout from "@/components/admin/admin-layout";
import CreateForm from "@/components/admin/create-form";
import TextField from "@/components/admin/text-field";
import TextareaField from "@/components/admin/textarea-field";

export async function getStaticProps({ params }) {
  const questionID = params.id;

  return {
    props: {
      question_id: questionID,
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {id: '1'}},
      {params: {id: '6404d37c6f0aeac046c4903d'}},
    ],
    fallback: false
  }
}

export default function AnswerQuestion({ question_id }) {
  return (
    <AdminLayout>
      <CreateForm title="Answer" action="/api/answer/new">
        <TextField label="Expert" name="expert" placeholder="ObjectID" />
        <TextareaField label="Answer" name="answer" placeholder="Write your answer" />
        <input type="hidden" name="question_id" value={question_id} />
      </CreateForm>
    </AdminLayout>
  );
}