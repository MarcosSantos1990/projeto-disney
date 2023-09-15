import { Container } from "./style";
import Image from "./logo.png";
import SearchInput from "../../components/SearchInput";
import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  console.log(text);


const HandleEnter = (e => {
  if (e.keyCode === 13) {
    console.log('aqui')
    window.location.href=(`/details?=${text}`)
   
  }
})

  return (
    <Container>
      <div className="box">
        <div className="box1">
          <img src={Image} alt="" />
        </div>
        <div className="box2">
          <SearchInput value={text} onChange={(search) => setText(search)} onKeyDown={HandleEnter} />
        </div>
      </div>
    </Container>
  );
}

export default Home;


