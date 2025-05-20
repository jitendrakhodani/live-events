
import { useEvents } from '../hooks/useEvents'

function Page() {
  const { events } = useEvents()

  return (
    <div>
      {events.map((event: any) => (
        <li key={event.id}>{event.title}</li>
      ))}
    </div>
  )
}
export default Page
