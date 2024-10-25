import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex p-2">
      <h3>Welcome Home! We&apos;re</h3>
      <Button>Hello World</Button>
    </div>
  )
}

