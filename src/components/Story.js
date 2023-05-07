export default function Story(props){
    return(
        <div class="story">
            <div class="imagem">
              <img src={props.uimg} alt="9gag"/>
            </div>
            <div class="usuario">
              {props.uname}
            </div>
          </div>
    );
}