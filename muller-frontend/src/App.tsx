import { Button } from "./components/Button"
import { PlusIcon } from "./Icons/PlusIcon"

const App = () => {
  return (
    <div className="flex items-center justify-center gap-3 ">
      <Button variant="secondary" text="share" size="sm" onClick={() => { }} />
      <Button startIcon={<PlusIcon size="md" />} variant="secondary" text="Add content" size="md" onClick={() => { }} />
      <Button startIcon={<PlusIcon size="lg" />} variant="primary" text="Add content" size="lg" onClick={() => { }} />
    </div>
    )
}

export default App
