var arr=[
    {
        dp:"d1.jpeg",s:"p1.jpeg"
    },
    {
        dp:"d2.jpeg",s:"p2.jpeg"
    },
    {
        dp:"d3.jpeg",s:"p3.jpeg"
    },
    {
        dp:"d4.jpeg",s:"p4.jpeg"
    },
    {
        dp:"d5.jpeg",s:"p5.jpeg"
    }
]

var clutter=""

arr.forEach(function(elem,idx){
    clutter+=`<div class="box">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

var story=document.querySelector("#story-box")
story.innerHTML=clutter

story.addEventListener("click",function(dets){
    // console.log(arr[dets.target.id].s);
    document.querySelector("#view").style.display="block";
    document.querySelector("#view").style.backgroundImage=`url(${arr[dets.target.id].s})`;

    setTimeout(function(){
        document.querySelector("#view").style.display="none";
    },2000)
});