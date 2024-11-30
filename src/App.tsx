import Collapse from './Collapse';

import './App.css'

function App() {
  return (
    <Collapse collapsedLabel={"Показать"} expandedLabel={"Скрыть"}>
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </Collapse>
  )
}

export default App
