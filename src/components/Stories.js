import Story from "./Story";
export default function Stories(){
    const stories = [
        { uname: "9gag" , uimg: "assets/img/9gag.svg" },
        { uname: "meowed" , uimg: "assets/img/meowed.svg" },
        { uname: "barked" , uimg: "assets/img/barked.svg" },
        { uname: "nathanwpylestrangeplanet" , uimg: "assets/img/nathanwpylestrangeplanet.svg" },
        { uname: "wawawicomics" , uimg: "assets/img/wawawicomics.svg" },
        { uname: "respondeai" , uimg: "assets/img/respondeai.svg" },
        { uname: "filomoderna" , uimg: "assets/img/filomoderna.svg" },
        { uname: "memeriagourmet" , uimg: "assets/img/memeriagourmet.svg" }   
    ]
    return(
        <div class="stories">
          {stories.map(story => <Story uname={story.uname} uimg={story.uimg} />)}
          
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    );
}