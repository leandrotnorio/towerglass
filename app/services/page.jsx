import Image from 'next/image'
import { work } from './data.jsx'

function ListSection({ title, description, work }) {
  return (
    <>
      <h2 className="text-4xl font-bold text-blue-700">{title}</h2>
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
    <article className="p-8 pt-20 max-w-6xl mx-auto">
      
      <ListSection title="Nossos Serviços" description="Detalhes sobre os serviços oferecidos" work={principais} />
      <ListSection title="mais sobre" work={principais} />
      <div className="my-10" />
      <ListSection title="Outros Serviços" work={outros} />
    </article>
  )
}