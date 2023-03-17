export default function QnAAnswers({ children }) {
  return (
    <div>
      <h2 className="text-base py-5"><span className="font-bold">3</span> Respuestas</h2>
      <div>{ children }</div>
    </div>
  );
}