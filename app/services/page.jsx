import Image from 'next/image'
import { work } from './data.jsx'

function ListSection({ title, work }) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {work.map(person => (
          <li key={person.id} className="bg-white rounded-lg shadow p-4">
            <Image
              src={person.localImage}
              alt={person.name}
              width={300}
              height={200}
              className="rounded-md"
            />
            <p className="mt-2">
              <b>{person.name}:</b> {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function List() {
  // Simulação de categorização simples
  const principais = work.slice(0, 2)
  const outros = work.slice(2)

  return (
    <article className="p-8 max-w-6xl mx-auto">
      
      <h1 className="text-4xl font-bold text-blue-700">Nossos Serviços</h1>
      <p className="mt-4 text-gray-700">
        Detalhes sobre os serviços oferecidos...
      </p>

      <ListSection title="Detalhes sobre os serviços oferecidos" work={principais} />
      <div className="my-10" />
      <ListSection title="Outros Serviços" work={outros} />
    </article>
  )
}