export default function TextareaField({ label, name, placeholder }) {
  return (
    <div class="mb-10 flex gap-2.5 items-start">
      <label class="w-1/5 font-semibold">{label}: </label>
      <textarea rows="4" name={name} placeholder={placeholder} class="rounded-lg border-gray-300 resize-none flex-grow" ></textarea>
    </div>
  );
}