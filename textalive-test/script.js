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
        player.createFromSongUrl("https://piapro.jp/t/9u8J", {
            video: {
                beatId: 3953909,
                chordId: 3953908,
                repetitiveSegmentId: 3953907,
                lyricId: 3953906,
                lyricDiffId: 3953905
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