/* Inspired and supported by MAKA (Tom Royal) */
// selector.style.fontFamily = "sans-serif";
var elements = document.getElementsByTagName('*');
function replaceWord(original, newword) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var old =  new RegExp('\\b'+ original +'\\b', 'i');
                // var newer = new RegExp('\\b'+ newword +'\\b.');
                var replacedText = text.replace(old, newword);
                //var replacedText = text.toLowerCase().replace(original, newword);
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
chrome.storage.local.get({
    lvl1: false,
    lvl2: false,
    lvl3: false,
    lvl4: false,
    lvl5: false,
    lvl6: false,
}, function (items) {
      if(items.lvl1){
      		replaceWord("woman","여자");
      		replaceWord("women","여자들");
      		replaceWord("Man","남자");
      		replaceWord("or","또는");
      		replaceWord("Men","남자들")
      		replaceWord("Yes","네");
      		replaceWord("no","아니요");
      		replaceWord("Thing","물건");
      		replaceWord("People","사람들");
      		replaceWord("Food","음식");
      		replaceWord("place","장소");
      		replaceWord("cat","고양이");
      		replaceWord("Dog","개");
      		replaceWord("Animal","동물");
      		replaceWord("Girl","여자아이");
      		replaceWord("Girls","여자아이들");
      		replaceWord("Boy","남자아이");
      		replaceWord("Boys","남자아이들");
      		replaceWord("Pencil","연필");
      		replaceWord("Bread","빵");
      		replaceWord("Book","책");
      		replaceWord("Apple","사과");
      		replaceWord("school","학교");
      		replaceWord("house","집");
      		replaceWord("home","집");
      		replaceWord("Child","아이");
      		replaceWord("children","아이들");

      };
      if(items.lvl2){
      	replaceWord("park","공원");
      	replaceWord("room","방");
      	replaceWord("road","도로");
      	replaceWord("street","도로");
      	replaceWord("mountain","산");
      	replaceWord("ocean","바다");
      	replaceWord("sea","바다");
      	replaceWord("Seoul","서울");
      	replaceWord("Korea","한국");
      	replaceWord("friend","친구");
      	replaceWord("tea","차");
      	replaceWord("ball","공");
      	replaceWord("newspaper","신문");
      	replaceWord("message","메시지");
      	replaceWord("student","학생");
      	replaceWord("students","학생들");
      	replaceWord("family","가족");
      	replaceWord("movie","영화");
      	replaceWord("singer","가수");
      	replaceWord("meaning","의미");
      	replaceWord("popular","인기가");
      	replaceWord("is popular","인기가있습니다");
      	replaceWord("is unpopular","인기가없습니다");
      	replaceWord("is not popular","인기가없습니다");
      	replaceWord("is meaningful","의미가있습니다");
      	replaceWord("is not meaningful","의미가없습니다");
      	replaceWord("is meaningless","의미가없습니다");
      	replaceWord("is charming","매력이있습니다");
      	replaceWord("is attractive","매력이있습니다");
      	replaceWord("is unattractive","매력이없습니다");
      	replaceWord("is uncharming","매력이없습니다");
      	replaceWord("is not charming","매력이없습니다");
      	replaceWord("is delicious","맛있다");
      	replaceWord("is tasty","맛있다");
      	replaceWord("is not delicious","맛없습니다");
      	replaceWord("is not tasty","맛없습니다");
      	replaceWord("is cool","멋있다");
      	replaceWord("is not cool","멋없습니다");
      	replaceWord("is interesting","재미있다");
      	replaceWord("is not interesting","재미없습니다");
      	replaceWord("is uninteresting","재미없습니다");
      };
      if(items.lvl3){
      		replaceWord("fox","여우");
      		replaceWord("baby","아기");
      		replaceWord("wow","와");
      		replaceWord("ant","개미");
      		replaceWord("chicken","닭");
      		replaceWord("milk","우유");
      		replaceWord("cucumber","오이");
      		replaceWord("oh","어");
      		replaceWord("ah","아");
      		replaceWord("this","이");
      		replaceWord("song","노래");
      		replaceWord("doughnut","도넛");
      		replaceWord("flavor","맛");
      		replaceWord("flavour","맛");
      		replaceWord("entrance","맛");
      		replaceWord("key","열쇠");
      };
      if(items.lvl4){
      	replaceWord("hi","안녕");
      	replaceWord("hello","안녕하세요");
      	replaceWord("nice to meet you","만나서반갑습니다");
      	replaceWord("thanks","고마워");
      	replaceWord("thank you","고맙습니다");
      	replaceWord("welcome","환영합니다");
      	replaceWord("name","이름");
      	replaceWord("excuse me","실례합니다");
      	replaceWord("sorry","죄송합니다");
      	replaceWord("it is okay","괜찮습니다");
      	replaceWord("it's okay","괜찮습니다");
      	replaceWord("It's ok","괜찮습니다");
      };
      if(items.lvl5){
      	replaceWord("trash","쓰레기");
      	replaceWord("pants","바지");
      	replaceWord("samsung","삼성");
      	replaceWord("hyundai","현대");
      	replaceWord("camera","카메라");
      	replaceWord("London","런던");
      	replaceWord("Washington","워싱턴");
      	replaceWord("Busan","부산");
      	replaceWord("tape","테이프");
      	replaceWord("crow","까마귀");
      	replaceWord("tofu","두부");
      	replaceWord("New York","뉴욕");
        replaceWord("seed","씨");
        replaceWord("field","밭");
        replaceWord("flower","꽃");
        replaceWord("leaf","잎");
        replaceWord("mouth","입");
        replaceWord("egg","알");
        replaceWord("rice","밥");
        replaceWord("star","별");
        replaceWord("kiss","뽀뽀");
        replaceWord("daytime","낮");
      };
      if(items.lvl6){
      	replaceWord("Chicago","시카고");
      	replaceWord("Philadephia","필라델피아");
      	replaceWord("Boston","보스턴");
      	replaceWord("Pittsburgh","피츠버그");
      	replaceWord("Princeton","프린스턴");
      	replaceWord("Ice cream","아이스크림");
      	replaceWord("cola","콜라");
      	replaceWord("coffee","커피");
      	replaceWord("Duolingo","듀오링고");
      	replaceWord("Paris","파리");
      	replaceWord("Apartment","아파트");
      	replaceWord("ice","아이스");
        replaceWord("tea","티");
        replaceWord("americano","아메리카노");
        replaceWord("monitor","모니터");
        replaceWord("phone","폰");
        replaceWord("gold","골드");
        replaceWord("diamond","다이아몬드");
        replaceWord("hair","헤어");
        replaceWord("silver","실버");
        replaceWord("white","화이트");
        replaceWord("black","블랙");
        replaceWord("party","파티");
        replaceWord("television","텔레비전");
        replaceWord("berlin","베를린");
        replaceWord("Pennsylvania","펜실베이니아");
        replaceWord("Tokyo","도쿄");
        replaceWord("Starbucks","스타벅스");
      };

    document.addEventListener('DOMContentLoaded', meme(memeList), false);

});


// listener for context menu click invoking the above

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "undoMayMays") {
        undomeme();
    };
});
