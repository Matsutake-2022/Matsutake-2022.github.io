console.log("script.js loaded");

const player = new TextAliveApp.Player({
    app: { token: "ewld6nYLU4hAIKGi" }
});

console.log("Player created:", player);

const playBtn = document.getElementById("playBtn").textContent="●";

player.addListener({

    onAppReady,
    onVideoReady(video) {
        console.log("VideoReady:", video);
    },

    onTimerReady(timer) {
        console.log("TimerReady:", timer);
    },

    onPlay() {
        console.log("Play");
        document.getElementById("playBtn").textContent="■";
    },

    onPause() {
        console.log("Pause");
        document.getElementById("playBtn").textContent="▶";
    },

    onStop() {
        console.log("Stop");
    }
});

function onAppReady(app) {
    
    console.log("AppReady:", app);
    if(!app.songUrl){
        player.createFromSongUrl("https://piapro.jp/t/ULcJ/20250205120202", {
            video: {
                beatId: 4694275,
                chordId: 2830730,
                repetitiveSegmentId: 2946478,
                lyricId: 67810,
                lyricDiffId: 20654
            }
        });
    }
    if(!app.managed){
        playBtn.addEventListener("click", () => {
            player.video&&player.requestPlay();
        })
    }
}