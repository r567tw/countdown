var countdownDom = document.getElementById('countdown')
var limit = 0;

chrome.storage.sync.get('limit',function(countdown){
    limit = countdown.limit;
    var now = new Date().getTime();
    var special = Date.parse(limit);
    countdownNumber=Math.ceil((now-special)/(24*60*60*1000));
    if (countdownNumber < 0)
    {
        countdownDom.innerHTML = '距離'+limit+'倒數'+Math.abs(countdownNumber)+'天';
    }
    else
    {
        countdownDom.innerHTML = '距離'+limit+'已過了'+countdownNumber+'天';
    }
});
