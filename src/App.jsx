import TodoAdd  from './components/TodoAdd';
import TodoList  from './components/TodoList';
import Header  from './components/Header';

import './App.scss'

const links = Array.from(new Array(5))

function App() {

  return (
    <>
      <Header />
      <main className="Main">
        <section className="Content">
          <TodoAdd />
          <TodoList />
        </section>
        <section className="Menu">
          <nav>
            {links.map((link, index) => (
              <a key={index} href="#">Link {index}</a>
            ))}
          </nav>
        </section>
      </main>
    </>
  )
}

export default App
