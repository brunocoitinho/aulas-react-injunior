import Card from "./components/Card/Card"
import CounterButton from "./components/CounterButton/CounterButton"

export default function App() {

  const albuns = [
    {
        id: 1,
        cover: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
        coverAlt: "Capa do álbum Thriller de Michael Jackson, mostrando ele de terno branco.",
        title: "Thriller",
        year: "1982",
        artist: "Michael Jackson",
        genre: "Pop, R&B",
        description: "O álbum mais vendido de todos os tempos, incluindo hits como 'Billie Jean' e 'Beat It'."
    },
    {
        id: 2,
        cover: "https://upload.wikimedia.org/wikipedia/pt/b/b6/Back_in_Black.jpg",
        coverAlt: "Capa do álbum Back in Black do AC/DC, totalmente preta com o nome da banda e do álbum.",
        title: "Back in Black",
        year: "1980",
        artist: "AC/DC",
        genre: "Rock",
        description: "Um dos álbuns mais icônicos do rock, marcando a estreia de Brian Johnson nos vocais."
    },
    {
        id: 3,
        cover: "https://upload.wikimedia.org/wikipedia/pt/d/da/Purple_Rain_Album.jpeg",
        coverAlt: "Capa do álbum Purple Rain de Prince, com ele em uma moto roxa.",
        title: "Purple Rain",
        year: "1984",
        artist: "Prince and The Revolution",
        genre: "Pop, Rock, R&B",
        description: "Álbum que consolidou Prince como um ícone da música, incluindo a faixa-título 'Purple Rain'."
    },
    {
        id: 4,
        cover: "https://upload.wikimedia.org/wikipedia/pt/6/60/Capa_do_%C3%A1lbum_Like_a_Virgin.jpg",
        coverAlt: "Capa do álbum Like a Virgin de Madonna, com ela vestida de noiva.",
        title: "Like a Virgin",
        year: "1984",
        artist: "Madonna",
        genre: "Pop",
        description: "Um marco na carreira de Madonna, com sucessos como 'Like a Virgin' e 'Material Girl'."
    },
    {
        id: 5,
        cover: "https://upload.wikimedia.org/wikipedia/pt/6/6e/U2_-_War.jpg",
        coverAlt: "Capa do álbum War do U2, com o rosto de um menino sério.",
        title: "War",
        year: "1983",
        artist: "U2",
        genre: "Rock",
        description: "Álbum politicamente engajado do U2, com faixas como 'Sunday Bloody Sunday' e 'New Year's Day'."
    },
    {
        id: 6,
        cover: "https://upload.wikimedia.org/wikipedia/pt/a/a3/Slippery_When_Wet.jpg",
        coverAlt: "Capa do álbum Slippery When Wet do Bon Jovi, com fundo preto e letras prateadas.",
        title: "Slippery When Wet",
        year: "1986",
        artist: "Bon Jovi",
        genre: "Rock",
        description: "Inclui alguns dos maiores sucessos da banda, como 'Livin' on a Prayer' e 'You Give Love a Bad Name'."
    },
    {
        id: 7,
        cover: "https://upload.wikimedia.org/wikipedia/pt/3/34/Whitney_%C3%A1lbum.jpg",
        coverAlt: "Capa do álbum Whitney de Whitney Houston, com ela sorrindo vestida de branco.",
        title: "Whitney",
        year: "1987",
        artist: "Whitney Houston",
        genre: "Pop, R&B",
        description: "Inclui o hit 'I Wanna Dance with Somebody' e solidificou Whitney Houston como uma estrela global."
    },
    {
        id: 8,
        cover: "https://upload.wikimedia.org/wikipedia/pt/7/7f/Duran_Duran_rio_album.jpg",
        coverAlt: "Capa do álbum Rio do Duran Duran, com uma ilustração estilizada de um rosto feminino.",
        title: "Rio",
        year: "1982",
        artist: "Duran Duran",
        genre: "New Wave, Pop Rock",
        description: "Álbum que levou o Duran Duran ao estrelato, com músicas como 'Rio' e 'Hungry Like the Wolf'."
    },
    {
        id: 9,
        cover: "https://upload.wikimedia.org/wikipedia/pt/0/06/Appetite_for_Destruction.jpg",
        coverAlt: "Capa do álbum Appetite for Destruction do Guns N' Roses, com uma cruz e crânios representando os membros da banda.",
        title: "Appetite for Destruction",
        year: "1987",
        artist: "Guns N' Roses",
        genre: "Hard Rock",
        description: "Álbum de estreia do Guns N' Roses, incluindo clássicos como 'Sweet Child o' Mine' e 'Welcome to the Jungle'."
    },
    {
        id: 10,
        cover: "https://upload.wikimedia.org/wikipedia/en/9/92/Depeche_Mode_-_Violator.png",
        coverAlt: "Capa do álbum Violator do Depeche Mode, com uma rosa vermelha em fundo preto.",
        title: "Violator",
        year: "1989",
        artist: "Depeche Mode",
        genre: "Synthpop, New Wave",
        description: "Um dos álbuns mais influentes do Depeche Mode, com hits como 'Enjoy the Silence' e 'Personal Jesus'."
    }
];


  return (
    <>
      {
        albuns.map((album)=>(
          <Card 
          cover={album.cover}  
          coverAlt={album.coverAlt}  
          title={album.title}  
          year={album.year}  
          artist={album.artist}  
          genre={album.genre}  
          description={album.description}
          key={album.id} />
        ))
      }

      
      <CounterButton/>
    </>
  )
}
