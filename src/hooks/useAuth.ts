import { useEffect, useState } from "react"
import { IUser } from "../utils/@types"
import { getAuth } from "../utils/api-interceptor"

export function useAuth() {
  const [user, setUser] = useState<IUser | undefined>()
  const [loading, setLoading] = useState(false)
  const controller = new AbortController()
  useEffect(() => {
    setLoading(true)
    getAuth()
      .then(({ data }) => {
        console.log(data)
        setUser(data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
    return () => {
      controller.abort()
    }
  }, [])

  return { user, loading }
}
