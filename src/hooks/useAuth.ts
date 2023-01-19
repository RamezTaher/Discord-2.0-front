import { useEffect, useState } from "react"
import { IUser } from "../utils/@types"
import { getAuth } from "../utils/api-interceptor"

export function useAuth() {
  const [user, setUser] = useState<IUser | undefined>()
  const [loading, setLoading] = useState(true)
  const controller = new AbortController()
  useEffect(() => {
    getAuth()
      .then(({ data }) => {
        setUser(data)
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(false)
        }, 1500)
        console.log(error)
      })

    return () => {
      controller.abort()
    }
  }, [])

  return { user, loading }
}
