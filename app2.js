

let template = '';

var posts = [];

const renderPosts = async ()=> {
    let uri = 'http://localhost:3000/posts';

    const respon = await fetch(uri);
    posts = await respon.json();
    console.log(posts);

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date + ' ' + time;

    for (let i = 0; i < 16; i++) {
        post = posts[i];
        template += `
        <div id = "news">
            <div class = "title"><button>${post.title}</button></div>
            <div id = "special" class = "inline"><button>${post.category}</button></div>
            <div class = "inline"><button>${post.source_root}</button></div>
            <span>${dateTime}</span>
        </div>
        `
    }

    const container = document.querySelector('#center');
    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderPosts());

var counter = 0;

window.onscroll = function() {

    var totalPageHeight = document.body.scrollHeight; 
    var scrollPoint = window.scrollY + window.innerHeight;

    if(scrollPoint >= totalPageHeight && counter < 1) {
        alert("you are now at the bottom, I will start loading some new contents");
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date + ' ' + time;

        for (let i = 15; i < posts.length; i++) {
            
            post = posts[i];
            template += `
            <div id = "news">
                <div class = "title"><button>${post.title}</button></div>
                <div id = "special" class = "inline"><button>${post.category}</button></div>
                <div class = "inline"><button>${post.source_root}</button></div>
                <span>${dateTime}</span>
            </div>
            `
        }
        counter++;
    }
    const container = document.querySelector('#center');
    container.innerHTML = template;
}