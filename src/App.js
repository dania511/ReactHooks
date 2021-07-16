
import './App.css';
import React ,{useState} from "react";
import MovieList from './Component/MovieList';
import MovieAdd from './Component/MovieAdd';


function App() {
  const add=(newMovie)=>{
    setFilms([...films,newMovie])
     };
     
  const [films, setFilms] = useState([
    {
      title: "Luca",
      description: "Set in a seaside town on the Italian Riviera, Disney and Pixar’s “Luca” is a coming-of-age story about a young boy experiencing an unforgettable summer.",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810",
      rate: "3",
      brief:"https://youtu.be/RA4s_BgzFII",
    },
    {
      title: "Onward",
      description:
        "In Disney and Pixar’s ONWARD, two teenage elf brothers Ian and Barley Lightfoot (voices of Tom Holland and Chris Pratt) get an unexpected opportunity to spend one more day with their late dad and embark on an extraordinary quest aboard Barley’s epic van Guinevere. Like any good quest, their journey is filled with magic spells, cryptic maps, impossible obstacles, and unimaginable discoveries. ",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/91X-d7oq8jL.jpg",
      rate: "4",
      brief:"https://youtu.be/XRF6uuubGcI",
    },
    {
      title: "Frozen 2",
      description:
        "Why was Elsa born with magical powers? What truths about the past await Elsa as she ventures into the unknown to the enchanted forests and dark seas beyond Arendelle? The answers are calling her but also threatening her kingdom. Together with Anna, Kristoff, Olaf and Sven, she'll face a dangerous but remarkable journey. In Frozen, Elsa feared her powers were too much for the world. In Frozen 2, she must hope they are enough.",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_bf2c13ad.jpeg?region=0%2C0%2C540%2C810",
      rate: "5",
      brief:"https://youtu.be/Zi4LMpSDccc",
    },
    {
      title: "Toy Story 4",
      description:
        "Pixar Animation Studios proudly presents the adventure of a lifetime! When Woody, Buzz and the gang join Bonnie on a road trip with her new craft-project-turned-toy, Forky, the innocent little spork’s hilarious antics launch Woody on a wild quest filled with unexpected new characters—and one long-lost friend! Toy Story 4 is a soaring masterpiece stuffed with spectacular animation, humor and heart.",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_ffefe4c8.jpeg?region=0%2C0%2C540%2C810",
      rate: "4",
      
      brief:"https://youtu.be/wmiIUN-7qhE",
    },
  ]);
  return (
    <div className="App">
      
      <header className="App-header">
      <h1 style={{ margin: '40px ', color:'#00FFFF' }}>Disney Movies</h1>
          <MovieList  films={films}/>
          <MovieAdd  add={add}/>
       
      </header>
    </div>
  );
}

export default App;
