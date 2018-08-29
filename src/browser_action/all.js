var countdownDom = document.getElementById('countdown')
var limit = 0;

chrome.storage.sync.get('limitDate',function(countdown){
    limit = countdown.limitDate;
    var now = new Date().getTime();
    var special = Date.parse(limit);
    countdownNumber=Math.ceil((now-special)/(24*60*60*1000));
    chrome.storage.sync.get('limitName',function(countdown){
        var name = countdown.limitName
        if (countdownNumber < 0)
        {
            countdownDom.innerHTML = '距離'+name+'倒數'+Math.abs(countdownNumber)+'天';
        }
        else
        {
            countdownDom.innerHTML = '距離'+name+'已過了'+countdownNumber+'天';
        }
    })
});
