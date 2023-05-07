export default function Suggestion(props){
    return(
        <div class="sugestao">
            <div class="usuario">
              <img src={props.uimg} alt={props.uimgalt}/>
              <div class="texto">
                <div class="nome">{props.uname}</div>
                <div class="razao">{props.razao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

    );
}