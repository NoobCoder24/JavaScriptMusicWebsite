const checkBox = document.getElementById("checkboxId");
checkBox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

//APlayer js
const ap = new APlayer({
  container: document.getElementById("aplayer"),
  listFolded: true,
  listMaxHeight: 90,
  mini: false,
  lrcType: 3,
  audio: [
    {
      name: "Shape of You",
      artist: "Ed Sheeran",
      url: "./music/Ed Sheeran.mp3",
      cover:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_timewarner/music/1486404000/srch_timewarner_A10302B0003844207H.jpg",
      lrc: "./music/ShapeofYou.lrc",
    },
    {
      name: "Without Me",
      artist: "Hasley",
      url: "./music/Without Me.mp3",
      cover:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1538615234/srch_universalmusic_00602577065781-USUM71813499.jpg",
    },
    {
      name: "Bad Boy",
      artist: "Tugevaag & Raaban",
      url: "./music/BadBoy.mp3",
      cover:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_timewarner/music/srch_timewarner_190295563509_A10302B0004528074B.jpg",
    },
    {
      name: "Believer",
      artist: "Imagine Dragons",
      url: "./music/Believer.mp3",
      cover:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1519274953/srch_universalmusic_00602567410959-USUM71700626.jpg",
      lrc: "./music/Believer.lrc",
    },
    {
      name: "Khairiyat",
      artist: "Arijit Singh",
      url: "./music/Khairiyat.mp3",
      cover:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1567233066/49136601.jpg",
    },
    {
      name: "TKCLH",
      artist: "Arijt Singh",
      url: "./music/TKCLH.mp3",
      cover:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1559291625/48159593.jpg",
    },
    {
      name: "On My Way",
      artist: "Alan Walker",
      url: "./music/OMW.mp3",
      cover:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0008969041G.jpg",
    },
    {
      name: "HERE WITH ME",
      artist: "Marshmello ft. CHVRCHES",
      url: "./music/Marshmello.mp3",
      cover:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1551977748/srch_universalmusic_00602577587245-USUG11900610.jpg",
    },
    {
      name: "Girls Like YOU",
      artist: "Maroon 5 ft Cardi B.",
      url: "./music/Maroon5.mp3",
      cover:
        "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1527494479/srch_universalmusic_00602567683223-USUM71805272.jpg",
      lrc: "./music/Girlslikeyou.lrc",
    },
  ],
});

const nav = document.querySelectorAll(".song"),
  totalDiv = nav.length;

//Click on image to get ID of song
$(".song a").on("click", function (e) {
  let songId = $(this).attr("data-switch");

  $(this).addClass("active");

  //Switch songs by ID
  ap.list.switch(songId);

  //play song on click
  ap.play();
  $("#aplayer").addClass("showPlayer");
});

$(".songImg").on("dblclick", function (e) {
  let songId = $(this).attr("data-switch");

  //play song on click
  ap.pause();
});
