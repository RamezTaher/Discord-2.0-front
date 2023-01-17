import { useEffect, useState } from "react"
import { getAuth } from "../utils/api-interceptor"

export function useAuth() {
  const [user, setUser] = useState()
  useEffect(() => {
    getAuth()
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error))
  }, [])

  return user
}
