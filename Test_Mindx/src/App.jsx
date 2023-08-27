
import './App.css'
import ContextProvider from './assets/Components/Context/ContextProvider'
import FormContainer from './assets/Components/FormContainer'
import Search from './assets/Components/Search'

function App() {
  return (
    <>
      <ContextProvider>
        <FormContainer></FormContainer>
      </ContextProvider>
    </>
  )
}

export default App
