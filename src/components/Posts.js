import Post from "./Post";
export default function Posts(){
    const posts = [
        {uimg: "assets/img/meowed.svg" , uname: "meowed" , pimg: "assets/img/gato-telefone.svg" , likeimg: "assets/img/respondeai.svg" , likename: "respondeai" , 
        likes: "101.523" , pimgalt: "gato-telefone"},
        {uimg: "assets/img/barked.svg" , uname: "barked" , pimg: "assets/img/dog.svg" , likeimg: "assets/img/adorable_animals.svg" , likename: "adorable_animals" , 
        likes: "99.159" , pimgalt: "dog"},
        {uimg: "assets/img/meowed.svg" , uname: "meowed" , pimg: "assets/img/gato-telefone.svg" , likeimg: "assets/img/respondeai.svg" , likename: "respondeai" , 
        likes: "101.523" , pimgalt: "gato-telefone"}
    ]
    return(
        <div class="posts">
            {posts.map(post => <Post uimg={post.uimg} uname={post.uname} pimg={post.pimg} likeimg={post.likeimg} likename={post.likename} likes={post.likes} pimgalt={post.pimgalt} />)}
        </div>
    );
}