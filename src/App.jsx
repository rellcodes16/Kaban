import AppLayout from "./ui/AppLayout"
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { BoardsProvider } from "./context/BoardsContext"
import { ModeProvider } from "./context/ColorModeToggle"

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      }
    }
  })

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ModeProvider>
        <BoardsProvider>
        <div>
            <AppLayout />
        </div>
        </BoardsProvider>
        </ModeProvider>
    </QueryClientProvider>
  )
}

export default App