import { useState } from 'react'
import search from './assets/icon/search_24px.svg'
import searchDark from './assets/icon/search_dark.svg'
import lightning from './assets/icon/cloud-lightning.svg'
import task from './assets/icon/chrome_reader_mode_24px.svg'
import inbox from './assets/icon/question_answer_24px.svg'
import taskHover from './assets/icon/chrome_reader_mode_white.svg'
import inboxHover from './assets/icon/question_answer_white.svg'

function App() {
  const [count, setCount] = useState(0)
  const inboxData = [
    {
      id: 1,
      topic: '109220-Naturalization',
      participants: ['You', 'Cameron Phillips'],
      messages: [
        {
          sender: 'Cameron Phillips',
          timestamp: Date('01/01/2021 19:10'),
          message: 'Please check this out!',
          isRead: true
        },
      ]
    },
    {
      id: 2,
      topic: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
      participants: ['You', 'Ellen'],
      messages: [
        {
          sender: 'Ellen',
          timestamp: Date('02/06/2021 10:45'),
          message: 'Hey, please read.',
          isRead: true
        },
      ]
    },
    {
      id: 3,
      topic: '8405-Diana SALAZAR MUNGUIA',
      participants: ['You', 'Cameron Phillips'],
      messages: [
        {
          sender: 'Cameron Phillips',
          timestamp: Date('01/06/2021 12:19'),
          message: 'I understand your initial concerns and thats very valid, Elizabeth. But you ...',
          isRead: true
        },
      ]
    },
    {
      id: 4,
      topic: 'FastVisa Support',
      participants: ['You', 'FastVisa Support'],
      messages: [
        {
          sender: 'FastVisa Support',
          timestamp: Date('01/06/2021 12:19'),
          message: 'Hey there. Welcome to your inbox! Contact us for more information and help about anything! We’ll send you a response as soon as possible.',
          isRead: true
        },
      ]
    },
    {
      id: 5,
      topic: 'I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]',
      participants: ['Mary Hilda', 'You', 'Obaidullah Amarkhil'],
      messages: [
        {
          sender: 'Mary Hilda',
          timestamp: Date('09/06/2021 19:32:01'),
          message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi obcaecati, reiciendis suscipit voluptate quod sunt.',
          isRead: true
        }
      ]
    },
  ]

  return (
    <>
      <aside className='w-[15%] h-full border-r border-gray-6'></aside>
      <main className='relative flex flex-col w-[85%] h-full'>
        <div className='w-full py-4 px-6 bg-gray-2'>
          <img src={search} alt='icon'></img>
        </div>

        <div className='absolute bottom-6 right-6' >
          <div className='aspect-square w-[70vmin] py-5 px-6 bg-gray-6 rounded overflow-y-auto'>
            <div className='flex justify-between items-center px-8 border border-gray-3 rounded text-gray-1'>
              <input type='search' id='search-inbox' placeholder='Search' className='bg-gray-6 focus:outline-none'/>
              <img src={searchDark} alt="icon" />
            </div>
            <div>
              {inboxData.map(item => {return(
                <div key={item.id}>
                  <div>
                    <h4 className='text-blue-1'>{item.topic}</h4>
                    <p className='text-gray-3 text-sm'>{item.messages[0].timestamp.toString()}</p>
                  </div>
                </div>
              )})}
            </div>
          </div>
          <div className='flex flex-row-reverse gap-6 items-end'>
            <button className='bg-blue-1 rounded-full aspect-square w-14 flex place-items-center'>
              <img src={lightning} alt="icon" />
            </button>
            <div className='flex flex-col items-center'>
              <span className='capitalize'>inbox</span>
              <button className='group bg-gray-6 rounded-full aspect-square w-12 flex justify-center items-center hover:bg-purple'>
                <img src={inbox} alt="icon" className='group-hover:hidden'/>
                <img src={inboxHover} alt="icon" className='hidden group-hover:block'/>
              </button>
            </div>
            <div className='flex flex-col items-center'>
              <span className='capitalize'>task</span>
              <button className='group bg-gray-6 rounded-full aspect-square w-12 flex justify-center items-center hover:bg-orange'>
                <img src={task} alt="icon" className='group-hover:hidden'/>
                <img src={taskHover} alt="icon" className='hidden group-hover:block'/>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
