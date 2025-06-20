import 'bootstrap/dist/css/bootstrap.min.css';

import FormulariosTareas from './components/FormularioTareas'

function App() {
  return (
    <>
      <main className='container my-5'>
        <h1 className='text-center'>Lista de Tareas</h1>
        <FormulariosTareas></FormulariosTareas>
      </main>
      <footer className='bg-dark text-light text-center py-3' >
        <p>Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
