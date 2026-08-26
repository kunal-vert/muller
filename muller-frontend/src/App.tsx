import { Button } from "./components/Button"
import { PlusIcon } from "./Icons/PlusIcon"
import ShareIcon from "./Icons/ShareIcon"

const App = () => {
  return (
    <div className="flex items-center justify-center gap-3 bg-neutral-900  ">
      <Button variant="secondary" text="share" size="sm" onClick={() => { }} />
      <Button startIcon={<ShareIcon size="md" />} variant="secondary" text="Share muller" size="md" onClick={() => { }} />
      <Button startIcon={<PlusIcon size="lg" />} variant="primary" text="Add Content" size="lg" onClick={() => { }} />
    </div>
  )
}

export default App
