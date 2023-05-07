import { useState } from "react";

export default function User(){
    let [nome, setNome] = useState("catanacomics")
    let [img , setImg] = useState("assets/img/catanacomics.svg")
    function trocanome(){
        let novonome = prompt("Coloque seu nome:");
        if(!novonome){
            return
        }
        setNome(novonome);
    }
    function trocaimg(){
        let novaimg = prompt("Coloque o endereço da imagem:")
        if(!novaimg){
            return
        }
        setImg(novaimg);
    }
    return(
        <div class="usuario">
          <img src={img} alt="imagem de perfil" onClick={trocaimg}/>
          <div class="texto">
            <span>
              <strong>{nome}</strong>
              <ion-icon name="pencil" onClick={trocanome}></ion-icon>
            </span>
          </div>
        </div>
    );
}