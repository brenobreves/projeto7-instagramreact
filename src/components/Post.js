import { useState } from "react";

export default function Post(props){
  let [mark , setMark] = useState("bookmark-outline");
  let [liked , setLiked] = useState("heart-outline");
  let [likecolor , setLikecolor] = useState();
  let [totalikes, setTotalikes] = useState(props.likes);
  function troca(){
    if(mark === "bookmark-outline"){
      setMark("bookmark");
    }
    else{
      setMark("bookmark-outline");
    }
  }
  function like(){
    if(likecolor === "vermelho" ){
      return
    }
    setLiked("heart");
    setLikecolor("vermelho");
    let aux = totalikes.replace('.','');
    aux = `${parseInt(aux) + 1}`
    let pos = aux.length - 3;
    let output = [aux.slice(0,pos), "." , aux.slice(pos)].join('');
    setTotalikes(output);
  }
  function likebut(){
    if(likecolor === "vermelho" ){
      setLiked("heart-outline");
      setLikecolor();
      setTotalikes(props.likes);
      return
    }
    setLiked("heart");
    setLikecolor("vermelho");
    let aux = totalikes.replace('.','');
    aux = `${parseInt(aux) + 1}`
    let pos = aux.length - 3;
    let output = [aux.slice(0,pos), "." , aux.slice(pos)].join('');
    setTotalikes(output);
  }  
  return(
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.uimg} alt={props.uname}/>
                {props.uname}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.pimg} alt={props.pimgalt} onClick={like}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name={liked} onClick={likebut} class={likecolor}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={mark} onClick={troca}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.likeimg} alt={props.likename}/>
                <div class="texto">
                  Curtido por <strong>{props.likename}</strong> e <strong>outras {totalikes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    );
}