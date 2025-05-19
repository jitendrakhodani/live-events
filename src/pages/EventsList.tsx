
import { useState, useEffect } from 'react'
import supabase from '../utils/index'

function Page() {
  const [todos, setTodos] = useState<any[]>([])

  useEffect(() => {
    async function getTodos() {
      try {
        console.log('Starting Supabase query...')
        console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL)
        console.log('Supabase Key:', import.meta.env.VITE_SUPABASE_ANON_KEY?.substring(0, 10) + '...')
        
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .then(response => {
            console.log('Response:', response)
            return response
          })

        if (error) {
          console.error('Supabase error:', {
            error,
            message: error.message,
            details: error.details,
            hint: error.hint
          })
          return
        }

        console.log('Received data:', data)
        setTodos(data || [])
      } catch (err) {
        console.error('Unexpected error:', err)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  )
}
export default Page
