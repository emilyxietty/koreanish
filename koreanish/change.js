/* Inspired and supported by MAKA (Tom Royal) */

var elements = document.getElementsByTagName('*');
function replaceWord(word1, word2) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;

                var replacedText = text.replace(word1, word2);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
var change = [""];

chrome.storage.local.get({
    lvl1: false,
    lvl2: false,
    lvl3: false,
    lvl4: false,
}, function (items) {
    if (items.lvl1) {
        replaceWord("woman","여자");
        replaceWord("Woman","여자");
        replaceWord("women","여자들");
        replaceWord("Women","여자들");
        replaceWord(" man ", " 남자 ");
        replaceWord("Man ", " 남자 ");
        replaceWord(" or ", " 또는 ");
        replaceWord(" men ", " 남자들 ");
        replaceWord("Men ", " 남자들 ")
        replaceWord(" yes ", "네 ");
        replaceWord("Yes ","네 ");
        replaceWord("No ", "아니요 ");
        replaceWord(" no ", " 아니요 ");
        replaceWord(" thing ", " 물건 ");
        replaceWord("Thing ", "물건 ");
        replaceWord("person ", "사람 ");
        replaceWord("Person ", "사람 ");
        replaceWord("people", "사람들");
        replaceWord("People","사람들");
        replaceWord(" food ", " 음식 ");
        replaceWord("Food ","음식 ");
        replaceWord(" Place "," 장소 ");
        replaceWord(" place "," 장소 ");
        replaceWord("Cat ", "고양이 ");
        replaceWord(" cat ", " 고양이 ");
        replaceWord("Dog ", "개 ");
        replaceWord(" animal ", " 동물  ");
        replaceWord("Animal ", "동물  ");
        replaceWord(" girl ", " 여자아이 ");
        replaceWord("Girl", "여자아이");
        replaceWord(" girls ", " 여자아이들 ");
        replaceWord("Girls", "여자아이들");
        replaceWord(" boy ", " 남자아이 ");
        replaceWord("Boy ", "남자아이 ");
        replaceWord(" boys ", " 남자아이들 ");
        replaceWord("Boys", "남자아이들");
        replaceWord("pencil ", "연필 ");
        replaceWord("Pencil ", "연필");
        replaceWord("bread", "빵");
        replaceWord("Bread", "빵");
        replaceWord("book ", "책 ");
        replaceWord("Book ", "책 ");
        replaceWord("apple", "사과");
        replaceWord("Apple", "사과");
        replaceWord("School ", "학교 ");
        replaceWord("school ", "학교 ");
        replaceWord("House ", "집 ");
        replaceWord(" house ", " 집 ");
        replaceWord("Home ", "집 ");
        replaceWord(" home ", " 집 ");
        replaceWord("Child ", "아이 ");
        replaceWord(" children ", " 아이들 ");
        replaceWord("Children", "아이들");

     };
    if (items.lvl2) {
      replaceWord(" park ", " 공원 ");
      replaceWord("Park ", "공원 ");
      replaceWord(" room ", " 방 ");
      replaceWord("Room ", "방 ");
      replaceWord(" road ", " 도로 ");
      replaceWord("Road ", "도로 ");
      replaceWord(" street ", " 도로 ");
      replaceWord("Street ", "도로 ");
      replaceWord(" mountain ", " 산 ");
      replaceWord("Mountain ", "산 ");
      replaceWord(" ocean ", " 바다 ");
      replaceWord("Ocean ", "바다 ");
      replaceWord(" sea ", " 바다 ");
      replaceWord("Sea ", "바다 ");
      replaceWord(" Seoul ", " 서울 ");
      replaceWord("Korea ", "한국 ");
      replaceWord(" friend ", " 친구 ");
      replaceWord("Friend ", "친구 ");
      replaceWord(" tea ", " 차 ");
      replaceWord("Tea ", "차 ");
      replaceWord(" ball ", " 공 ");
      replaceWord("Ball ", "공 ");
      replaceWord(" newspaper ", " 신문 ");
      replaceWord("Newspaper", "신문");
      replaceWord(" message ", " 메시지 ");
      replaceWord("Message ", "메시지 ");
      replaceWord("student", "학생");
      replaceWord("Student", "학생");
      replaceWord("students", "학생들");
      replaceWord("Students", "학생들");
      replaceWord(" family ", " 가족 ");
      replaceWord("Family", "가족");
      replaceWord(" movie ", " 영화 ");
      replaceWord("Movie ", "영화 ");
      replaceWord(" singer ", " 가수 ");
      replaceWord("Singer ", "가수 ");
      replaceWord("meaning ", "의미 ");
      replaceWord("Meaning ", "의미 ");
      replaceWord(" popular ", " 인기가 ");
      replaceWord(" is popular", " 인기가 있습니다");
      replaceWord(" is unpopular", " 인기가 없습니다");
      replaceWord(" is not popular", " 인기가 없습니다");
      replaceWord(" is meaninful", " 의미가 있습니다");
      replaceWord(" is not meaninful", " 의미가 없습니다");
      replaceWord(" is meaningless", " 의미가 없습니다");
      replaceWord(" is charming", " 매력이 있습니다");
      replaceWord(" is attractive", " 매력이 있습니다");
      replaceWord(" is unattractive", " 매력이 없습니다");
      replaceWord(" is uncharming", " 매력이 없습니다");
      replaceWord(" is not charming", " 매력이 없습니다");
      replaceWord(" is delicious", " 맛있다");
      replaceWord(" is tasty", " 맛있다");
      replaceWord(" is not delicious", " 맛없습니다");
      replaceWord(" is not tasty", " 맛없습니다");
      replaceWord(" is cool", " 멋있다");
      replaceWord(" is not cool", " 멋없습니다");
      replaceWord(" is interesting", " 재미있다");
      replaceWord(" is not interesting", " 재미없습니다");
      replaceWord(" is uninteresting", " 재미없습니다");
    };
    if (items.lvl3) {
         replaceWord(" fox ", " 여우 ");
         replaceWord("Fox ", "여우 ");
         replaceWord(" baby ", " 아기 ");
         replaceWord("Baby ", "아기 ");
         replaceWord(" wow ", " 와 ");
         replaceWord("Wow ", "와 ");
         replaceWord(" ant ", " 개미 ");
         replaceWord("Ant", "개미 ");
         replaceWord(" chicken ", " 닭 ");
         replaceWord("Chicken", "닭 ");
         replaceWord(" milk ", " 우유 ");
         replaceWord("Milk ", "우유 ");
         replaceWord(" cucumber ", " 오이 ");
         replaceWord("Cucumber ", "오이");
         replaceWord(" oh ", " 어 ");
         replaceWord("Oh ", "어 ");
         replaceWord(" ah ", " 아 ");
         replaceWord("Ah ", "아 ");
         replaceWord(" this ", " 이 ");
         replaceWord("This ", "이 ");
         replaceWord(" song ", " 노래 ");
         replaceWord("Song", "노래 ");
         replaceWord(" doughnut ", " 도넛 ");
         replaceWord("Doughnut", "도넛");
         replaceWord(" flavor ", " 맛 ");
         replaceWord("Flavor ", "맛 ");
         replaceWord(" flavour ", " 맛 ");
         replaceWord("Flavour ", "맛 ");
         replaceWord(" entrance ", " 맛 ");
         replaceWord("Entrance ", "맛 ");
         replaceWord(" key ", " 열쇠 ");
         replaceWord("Key ", "열쇠 ");
    };
    if (items.lvl4) {
      replaceWord(" hi ", " 안녕 ");
      replaceWord("Hi ", "안녕 ");
      replaceWord("hello", " 안녕하세요 ");
      replaceWord("Hello", "안녕하세요 ");
      replaceWord(" nice to meet you ", " 만나서 반갑습니다 ");
      replaceWord("Nice to meet you ", "만나서 반갑습니다 ");
      replaceWord("thanks", "고마워");
      replaceWord("Thanks", "고마워");
      replaceWord("thank you", "고맙습니다");
      replaceWord("Thank you", "고맙습니다");
      replaceWord("welcome ", "환영합니다 ");
      replaceWord("Welcome ", "환영합니다 ");
      replaceWord(" name ", " 이름 ");
      replaceWord(" Name ", " 이름 ");
      replaceWord("excuse me", "실례합니다");
      replaceWord("Excuse me", "실례합니다");
      replaceWord("Sorry", "죄송합니다");
      replaceWord("sorry", "죄송합니다");
      replaceWord("Thank you", "고맙습니다");
      replaceWord("welcome ", "환영합니다 ");
      replaceWord("Welcome ", "환영합니다 ");
      replaceWord("it is okay", "괜찮습니다");
      replaceWord("It is okay", "괜찮습니다");
      replaceWord("It's okay", "괜찮습니다")
      replaceWord("it's okay", "괜찮습니다");
      replaceWord("It's ok ", "괜찮습니다");
      replaceWord("It's ok", "괜찮습니다");
    };

    document.addEventListener('DOMContentLoaded', meme(memeList), false);

});


// listener for context menu click invoking the above

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "undoMayMays") {
        undomeme();
    };
});
