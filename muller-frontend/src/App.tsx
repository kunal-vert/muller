import { Button } from "./components/UI/Button"
import { PlusIcon } from "./Icons/PlusIcon"

const App = () => {
  return (
    <>
      <Button variant="primary" text="share" size="sm" onClick={() => { }} />
      <Button startIcon={<PlusIcon size="lg" />} variant="secondary" text="Add content" size="md" onClick={() => { }} />
      <Button startIcon={<PlusIcon size="md" />} variant="secondary" text="Add content" size="lg" onClick={() => { }} />
    </>)
}

export default App