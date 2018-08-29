limitDateDom = document.getElementById('limitDate')
limitNameDom = document.getElementById('limitName')
submitDom = document.getElementById('send')


chrome.storage.sync.get('limitName',function(countdown){
    limitNameDom.value = countdown.limitName;
});

chrome.storage.sync.get('limitDate',function(countdown){
    limitDateDom.value = countdown.limitDate;
});

submitDom.addEventListener("click",function(){
    var limitDateval = limitDateDom.value
    var limitNameval = limitNameDom.value;
    chrome.storage.sync.set({'limitName':limitNameval,'limitDate':limitDateval},function(){
        alert('儲存成功')
    });
});
