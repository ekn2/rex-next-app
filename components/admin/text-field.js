export default function TextField({ label, name, placeholder }) {
  return (
    <div class="mb-10 flex gap-2.5 items-center">
      <label class="w-1/5 font-semibold">{label}: </label>
      <input type="text" name={name} placeholder={placeholder} class="form-input rounded-lg flex-grow border-gray-300 text-base" />
    </div>
  );
}