
import Card from "./components/Card/Card"
import { UserContext } from "./stores/UserContext"

export default function App() {



const user = {
  name: 'Fulano',
  age: 99,
  email: 'exemplo@umemeio.com'
}


  return (
    <UserContext.Provider value={user}>
      <Card artist="Michael Jackson" title="Thriller" cover="https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png" coverAlt="Capa do álbum Thriller de Michael Jackson, mostrando ele de terno branco." description="O álbum mais vendido de todos os tempos, incluindo hits como 'Billie Jean' e 'Beat It'." genre="Pop, R&B" year="1982"></Card>
    </UserContext.Provider>
  )
}
