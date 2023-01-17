import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient } from "react-query"
import { QueryClientProvider } from "react-query/types/react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)
