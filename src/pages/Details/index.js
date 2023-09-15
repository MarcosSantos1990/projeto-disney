import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Image from "./logo2.png";
import SearchInput from "../../components/SearchInput";


// const api = 'https://api.disneyapi.dev/';
const api = "https://kitsu.io/api/edge/";

// const MOCK = [
//   {
//     "_id":308,
//     "films":["Tangled","Tangled: Before Ever After"],
//     "shortFilms":["Tangled Ever After","Hare Peace"],
//     "tvShows":["Once Upon a Time","Tangled: The Series"],
//     "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
//     "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
//     "allies":[],
//     "enemies":[],
//     "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
//     "name":"Queen Arianna",
//     "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
//     "createdAt":"2021-04-12T01:33:34.458Z",
//     "updatedAt":"2021-04-12T01:33:34.458Z",
//     "url":"https://api.disneyapi.dev/characters/308",
//     "__v":0
//   }, {
//     "_id":308,
//     "films":["Tangled","Tangled: Before Ever After"],
//     "shortFilms":["Tangled Ever After","Hare Peace"],
//     "tvShows":["Once Upon a Time","Tangled: The Series"],
//     "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
//     "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
//     "allies":[],
//     "enemies":[],
//     "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
//     "name":"Queen Arianna",
//     "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
//     "createdAt":"2021-04-12T01:33:34.458Z",
//     "updatedAt":"2021-04-12T01:33:34.458Z",
//     "url":"https://api.disneyapi.dev/characters/308",
//     "__v":0
//   }, {
//     "_id":308,
//     "films":["Tangled","Tangled: Before Ever After"],
//     "shortFilms":["Tangled Ever After","Hare Peace"],
//     "tvShows":["Once Upon a Time","Tangled: The Series"],
//     "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
//     "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
//     "allies":[],
//     "enemies":[],
//     "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
//     "name":"Queen Arianna",
//     "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
//     "createdAt":"2021-04-12T01:33:34.458Z",
//     "updatedAt":"2021-04-12T01:33:34.458Z",
//     "url":"https://api.disneyapi.dev/characters/308",
//     "__v":0
//   }, {
//     "_id":308,
//     "films":["Tangled","Tangled: Before Ever After"],
//     "shortFilms":["Tangled Ever After","Hare Peace"],
//     "tvShows":["Once Upon a Time","Tangled: The Series"],
//     "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
//     "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
//     "allies":[],
//     "enemies":[],
//     "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
//     "name":"Queen Arianna",
//     "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
//     "createdAt":"2021-04-12T01:33:34.458Z",
//     "updatedAt":"2021-04-12T01:33:34.458Z",
//     "url":"https://api.disneyapi.dev/characters/308",
//     "__v":0
//   },

// ]

function Details() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");
  //  const [data, setData] = useState(MOCK);
  //  console.log(data,'data');

  useEffect(() => {
    if (text) {
      // fetch(`${api}character?name=${text}`)
      fetch(`${api}anime?filter[text]=cowboy%20bebop${text}&page[limit]=14`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
          console.log(response, "ress");
          // setData(response.data)
        });
    }
  }, [text]);

  return (
    <Container>
      <div className="box">
        <div className="box1">
          <img src={Image} alt="" />
        </div>
        <div className="box2">
          <SearchInput value={text} onChange={(search) => setText(search)} />
        </div>
      </div>
      
      {info.data && (
        <ul className="avatar-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.small} />
            </li>
          ))}
        </ul>
      )}
    </Container>
    
  );
}
export default Details;
