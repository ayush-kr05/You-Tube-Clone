let API_key = "AIzaSyD7v1w_pbXSgvMZ-QX1MLu_o7fLE8t1Kbg";

async function SearchResult(){
    try {
        let videoQry = document.getElementById("VideoQuerry").value;
        url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${videoQry}&type=video&key=${API_key}`
        let res = await fetch(url);
        let videoData = await res.json();
        DisplayResults(videoData.items);
        
    } catch (error) {
        console.log(error);
    }
    //document.getElementById("VideoQuerry").value=""; 
}

function DisplayResults(Data){
     console.log(Data);
    document.getElementById("SearchResult").innerHTML="";

    Data.map((video)=>{
        let thumbnail = video.snippet.thumbnails.medium.url;
        let VideoTitle = video.snippet.title;
        const videoData = `<img src="${thumbnail}" alt="">
                            <div class="videoDet">
                                <h3>${VideoTitle.slice(0,75)}...</h3>
                                <p>${video.snippet.channelTitle}</p>
                                <p>${video.snippet.publishTime}</p>
                            </div>`;
        let div = document.createElement("div");
        div.setAttribute("onclick", `displayMyVideo('${video.id.videoId}')`);
        div.innerHTML = videoData;
        document.getElementById("SearchResult").append(div);
    })
}

function displayMyVideo(videoId){
    localStorage.setItem("Id",videoId);
    window.open("./playVideo.html","_self");
}


async function TrendingVideo(){
    try {
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=Doremon&type=video&key=${API_key}`;
        let res = await fetch(url);
        let data = await res.json();
        DisplayResults(data.items);

    } catch (error) {
       console.log(Error); 
    }
}
TrendingVideo();

