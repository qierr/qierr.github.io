function Random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}


var lyrics=new Array(
    {
  "a": "sqjsn",
  "m": "程艾影",
  "s": "赵雷",
  "l": "永远都像初次见你那样 使我心荡漾",
  "le": "02:16",
  "r": "05:00"
 },
 {
  "a": "sqjsn",
  "m": "少女",
  "s": "赵雷",
  "l": "偶尔化一化妆吧 我们从来就不会老",
  "le": "00:30",
  "r": "04:09"
 }
    );
var number=Random(0,lyrics.length-1)
document.getElementById("music").innerHTML = lyrics[number].m;
document.getElementById("singer").innerHTML = lyrics[number].s;
document.getElementById("lyric").innerHTML = lyrics[number].l;
document.getElementById("time-m").value = lyrics[number].le;
document.getElementById("time-m").max = lyrics[number].r;
document.getElementById("time").innerHTML = lyrics[number].le+' / '+lyrics[number].r;