import './App.scss'
import People from './People'
import data from './data'

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="title">
          <h2>{24} birthdays today</h2>
        </div>
        <div className="list">
          {data.map((e) => {
            return <People name={e.name} age={e.age} image={e.image} key={e.key} />
          })}
        </div>
        <div className="button">
          View all
        </div>
      </div>
    </div>
  );
}

export default App;
