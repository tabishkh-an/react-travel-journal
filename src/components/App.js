import Header from "./Header";
import Card from "./Card";

import data from "./data"

function App() {

  const cardArray = data.map(item => {
    return <Card
      key={item.id}
      data={item}
    />
  })

  return (
    <div className="App">
      <Header />
      <div className='card-holder'>
        {cardArray}
      </div>
    </div>
  );
}

export default App;
