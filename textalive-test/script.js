console.log("script.js loaded");

// ★ ここにあなたの TextAlive トークンを入れる
const TOKEN = "ewld6nYLU4hAIKGi";

// ★ Player をグローバルスコープで new（最重要）
const player = new TextAliveApp.Player({
    app: { token: TOKEN }
});

console.log("Player created:", player);

// ★ listener をその場で定義（未定義関数を渡すと壊れる）
player.addListener({
    onAppReady(app) {
        console.log("AppReady:", app);
        // 動画を読み込む（VideoReady を発火させるため）
        player.createFromSongUrl("https://piapro.jp/t/ULcJ/20250205120202", {
            video: {
                beatId: 4694275,
                chordId: 2830730,
                repetitiveSegmentId: 2946478,
                lyricId: 67810,
                lyricDiffId: 20654
            }
        });
    },

    onVideoReady(video) {
        console.log("VideoReady:", video);
    },

    onTimerReady(timer) {
        console.log("TimerReady:", timer);
    },

    onPlay() {
        console.log("Play");
    },

    onPause() {
        console.log("Pause");
    },

    onStop() {
        console.log("Stop");
    }
});