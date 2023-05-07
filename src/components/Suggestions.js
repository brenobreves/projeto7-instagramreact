import Suggestion from "./Suggestion";
export default function Suggestions(){
    const sugestoes = [
        {uimg: "assets/img/bad.vibes.memes.svg" , uimgalt: "bad.vibes.memes.svg" , uname: "bad.vibes.memes" , razao: "Segue você"},
        {uimg: "assets/img/chibirdart.svg" , uimgalt: "chibirdart.svg" , uname: "chibirdart" , razao: "Segue você"},
        {uimg: "assets/img/razoesparaacreditar.svg" , uimgalt: "razoesparaacreditar" , uname: "razoesparaacreditar" , razao: "Novo no Instagram"},
        {uimg: "assets/img/adorable_animals.svg" , uimgalt: "adorable_animals" , uname: "adorable_animals" , razao: "Segue você"},
        {uimg: "assets/img/smallcutecats.svg" , uimgalt: "smallcutecats" , uname: "smallcutecats" , razao: "Segue você"}
    ]
    return(
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {sugestoes.map(sugestao => <Suggestion uimg={sugestao.uimg} uimgalt={sugestao.uimgalt} uname={sugestao.uname} razao={sugestao.razao} />)}  
        </div>
    );
}