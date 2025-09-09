import { Button } from "../components/ui/button"
import "./styles/globals.css"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black space-y-4">
      <h1 className="text-white text-4xl font-bold">Boilerplate</h1>
      <Button>Clique aqui</Button>
    </div>
  )
}
