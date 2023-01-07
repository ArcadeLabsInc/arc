import { Database } from 'app/lib/Database'
import { useStore } from 'app/stores'
import { useEffect, useMemo } from 'react'

export const useDatabase = () => {
  const database = useStore((state) => state.database)
  const setDatabase = useStore((state) => state.databaseActions.setDatabase)

  const checkRows = async (newDatabase: Database) => {
    const notes = await newDatabase.getNumberOfRows()
    console.log(`There are ${notes} of such rows in the database.`)
  }

  const initializedDatabase = useMemo(() => {
    if (database) return database
    const newDatabase = new Database()
    setDatabase(newDatabase)
    console.log('Initialized database.')
    setTimeout(() => {
      checkRows(newDatabase)
    }, 500)

    return newDatabase
  }, [database, setDatabase])

  useEffect(() => {
    return () => {
      initializedDatabase.close()
    }
  }, [initializedDatabase])

  return initializedDatabase
}
