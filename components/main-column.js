export default function MainColumn({ children }) {
  return (
    <main class="w-7/12">
      <div class="mx-10 pt-10">
        {children}
      </div>
    </main>
  );
}