import Link from 'next/link';
import { DateTime } from 'luxon';

// Question Component
export default function Question({question}) {
  const dt = DateTime.fromMillis(question.timestamp);
  const dt_format = { month: 'long', day: 'numeric', year: 'numeric' };

  return (
    <article class="border-t border-gray-300 border-solid overflow-hidden mb-0 first-of-type:border-t-0">
      <div class="pt-7 pb-14 px-2">
        <header>
          <h2 class="text-xl font-bold text-gray-700"><Link href={`/qna/${question._id}`}>{question.title}</Link></h2>
          <div class="my-4 flex gap-2.5 items-center">
            <div>
              <figure class="w-8 h-8 bg-gray-200 rounded-md"></figure>
            </div>
            <div class="flex items-center">
              <p class="text-gray-700 mb-0.5 text-sm">{question.author}</p>
              <time class="text-gray-500 text-sm inline-block before:text-sm before:text-gray-500 before:content-['\00a0\25aa\00a0']">{dt.setLocale('es-MX').toLocaleString(dt_format)}</time>
            </div>
          </div>
        </header>
        <p class="my-4">{question.body}</p>
        <div class="mt-4 text-sm text-gray-700 flex items-baseline justify-between gap-5">
          <dl class="flex items-baseline gap-2">
            <div class="flex items-baseline flex-row-reverse">
              <dt>¡Buena pregunta!</dt>
              <dd class="after:content-['\00a0'] after:text-base font-bold">{question.interested_count}</dd>
            </div>
            <div class="flex items-baseline flex-row-reverse">
              <dt>respuestas</dt>
              <dd class="after:content-['\00a0'] after:text-base before:font-normal before:text-base before:text-gray-700 before:content-['\25aa\00a0'] font-bold">{question.answers_count}</dd>
            </div>
            <div class="flex items-baseline flex-row-reverse">
              <dt>lectores</dt>
              <dd class="after:content-['\00a0'] after:text-base before:font-normal before:text-base before:text-gray-700 before:content-['\25aa\00a0'] font-bold">{question.views_count}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}