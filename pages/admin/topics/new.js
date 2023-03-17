import NewTopicLayout from "@/components/layouts/newTopicLayout";

export default function NewTopic() {
  return(
    <NewTopicLayout>
      <div class="mt-10">
        <h1 class="text-3xl mb-10">New Topic</h1>
        <form action="/api/topic/new" method="post">
          <div class="mb-5">
            <input type="text" name="name" placeholder="Name" class="form-input rounded-lg w-full border-gray-300 text-xl" />
          </div>
          <div class="mb-5">
            <textarea rows="4" name="description" placeholder="Write a short description aboutn this Topic" class="rounded-lg w-full border-gray-300 resize-none text-lg" ></textarea>
          </div>
          <div class="mb-5">
            <input type="text" name="udc_code" placeholder="UDC Code e.g. 500.001" class="form-input rounded-lg w-full border-gray-300 text-base placeholder:italic" />
          </div>
          <button type="submit" class="block w-full py-2 px-3 bg-gray-300 text-black font-semibold rounded-lg">Submit</button>
        </form>
      </div>
    </NewTopicLayout>
  );
}