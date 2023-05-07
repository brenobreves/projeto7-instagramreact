export default function User(){
    let username = "catanacomics";
    function trocanome(){
        let novonome = prompt("Coloca seu nome");
        if(!novonome){
            return
        }
        username = novonome;
    }
    return(
        <div class="usuario">
          <img src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
          <div class="texto">
            <span>
              <strong>{username}</strong>
              <ion-icon name="pencil" onClick={trocanome}></ion-icon>
            </span>
          </div>
        </div>
    );
}