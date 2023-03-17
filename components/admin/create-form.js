export default function CreateForm({ title, action, children }) {
  return (
    <div>
      <h1 class="text-3xl mb-10">{title}</h1>
      <form action={action} method="post">
        {children}
        <button type="submit" class="block w-full mb-16 py-2 px-3 bg-gray-300 text-black font-semibold rounded-lg">Submit</button>
      </form>
    </div>
  );
}