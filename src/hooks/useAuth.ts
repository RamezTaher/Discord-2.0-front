import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { IUser } from "../utils/@types"
import { getAuth } from "../utils/api-interceptor"

export function useAuth() {
  const { user, updateAuthUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const controller = new AbortController()
  useEffect(() => {
    getAuth()
      .then(({ data }) => {
        updateAuthUser(data)
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
