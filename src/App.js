import './App.css'
import _ from 'lodash'
import { useState, useEffect } from 'react'
import { BarChart, Bar, ResponsiveContainer } from 'recharts'

const App = () => {
  const dataone = [
    { id: 1, name: 'jan', level: 8, clazz_id: '1A' },
    { id: 2, name: 'feb', level: 6, clazz_id: '1A' },
    { id: 3, name: 'jan', level: 2, clazz_id: '2B' },
    { id: 4, name: 'feb', level: 3, clazz_id: '2B' },
    { id: 5, name: 'mar', level: 5, clazz_id: '2B' },
    { id: 6, name: 'mar', level: 7, clazz_id: '2C' },
    { id: 7, name: 'jan', level: 3, clazz_id: '2C' },
  ]

  const [entries, setEntries] = useState([])

  const data = _.groupBy(dataone, 'clazz_id')
  // entries = Object.entries(data)

  entries.map((e) => {
    console.log(e[0])
    console.log(e[1])
    console.log(e[1][0].name)
  })

  useEffect(() => {
    setEntries(Object.entries(data))
  }, [])

  return (
    <div className='App'>
      {entries.map((item, index) => (
        <div>
          <h2>{item[0]}</h2>
          <div>
            {item[1].map((e) => (
              <div>
                {e.name}
                {'--'}
                {e.level}
              </div>
            ))}
          </div>
          <ResponsiveContainer width='100%' aspect={3}>
            <BarChart width={150} height={40} data={item[1]}>
              <Bar dataKey='level' fill='#8884d8' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  )
}

export default App
