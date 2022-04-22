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
