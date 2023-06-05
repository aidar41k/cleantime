import React from 'react'
import Headline from './Headline'

const items = [
  {
    id: 0,
    question:
      'Можно ли заказать уборку в выборочных местах квартиры? Если, например, у меня «двушка», но одна комната закрыта ?',
    answer: `Можно. Стоимость уборки будет рассчитана исходя из фактического количество комнат, в которых будем убираться.`
  },
  {
    id: 1,
    question: 'Клинер приедет со своими средствами или «моющие» должны быть у меня дома? ',
    answer:
      'Наши клинеры приезжают со своими моющими средствами. Если по какой-либо причине есть необходимость провести уборку вашими средствами – такое тоже возможно.'
  },
  {
    id: 2,
    question: 'Сколько времени требуется на уборку? ',
    answer:
      'Обычно на уборку требуется от 2-х до 6-ти часов, в зависимости от размера квартиры и конкретных задач.'
  },

  {
    id: 3,
    question: 'Если ваш сотрудник сломал что-нибудь, кто несет ответственность? ',
    answer:
      'В нашей компании работают профессионалы с многолетним стажем. Можем уверить вас, что подобных ситуаций не возникнет. Если же такое все-таки случится – мы гарантируем возмещение ущерба, причиненного нашим сотрудником.'
  },
  {
    id: 4,
    question: 'Нужно ли мне быть дома во время уборки?  ',
    answer:
      'Многие клиенты остаются дома, когда впервые заказывают уборку. Но в следующий раз они предпочитают оставить менеджера и клинеров дома. А в освободившееся время предпочитают заниматься более приятными делами.'
  },
  {
    id: 5,
    question: 'Как заказать уборку ?',
    answer: 'Закажите обратный звонок или же позвоните нам.'
  },
  {
    id: 6,
    question: 'Сколько времени требуется на уборку? ',
    answer:
      'Обычно на уборку требуется от 2-х до 6-ти часов, в зависимости от размера квартиры и конкретных задач.'
  }
]

const Fag = () => {
  return (
    <section id="fag" className="mx-auto px-4 py-10 bg-slate-100">
      <Headline title={"Частые Вопросы"} />
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen rounded-lg">
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div className="py-8">
            {items.map((el) => (
              <div key={el.id}>
                <details
                  className="group hover:bg-slate-200 p-2 rounded-md"
                >
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> {el.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {el.answer}
                  </p>
                </details>
                <div className="h-1 w-full mx-auto border-b my-5"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fag
