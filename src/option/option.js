limitDom = document.getElementById('limit')
submitDom = document.getElementById('send')

chrome.storage.sync.get('limit',function(countdown){
    limitDom.value = countdown.limit;
});

submitDom.addEventListener("click",function(){
    var limitVal = limitDom.value;
    chrome.storage.sync.set({'limit':limitVal},function(){
        alert('儲存成功')
    });
});