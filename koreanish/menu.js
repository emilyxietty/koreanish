// Inspired by MAKA by Tom Royal

function DeMakaMenuClick(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "undoMAKA"
        });
    });
}

var setMAKAmenu1 = chrome.contextMenus.create({"title": "KVocab(", "contexts":["page"], "onclick": DeMakaMenuClick});
