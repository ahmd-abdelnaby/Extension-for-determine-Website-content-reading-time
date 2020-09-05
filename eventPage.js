var menuItem={
    "id" : "wiki",
    "title": "Time For Reading",
    "contexts" :["selection"]
};
chrome.contextMenus.create(menuItem);
chrome.contextMenus.onClicked.addListener(function(clickdata)
{
    if(clickdata.menuItemId=="wiki" && clickdata.selectionText){
        document.getElementsByTagName('body')[0];
        var words=document.getElementsByTagName('body')[0].innerHTML;
        
        let msg = {
            txt: "",
            status: "in"
        }
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, msg);
            });
    }
});
