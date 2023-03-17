import AdminLayout from "@/components/admin/admin-layout";
import CreateForm from "@/components/admin/create-form";
import TextField from "@/components/admin/text-field";
import TextareaField from "@/components/admin/textarea-field";

export default function Ask() {
  return (
    <AdminLayout>
      <CreateForm title="Ask a Question" action="/api/questions/ask">
        <TextField label="Author" name="author" placeholder="Asked by" />
        <TextField label="Title" name="title" placeholder="Title" />
        <TextareaField label="Body" name="body" placeholder="Write details about your question here..." />
        <TextField label='"Good question!" Count' name="interested_count" placeholder="0" />
        <TextField label="Answers Count" name="answers_count" placeholder="0" />
        <TextField label="Views Count" name="views_count" placeholder="0" />
      </CreateForm>
    </AdminLayout>
  );
}