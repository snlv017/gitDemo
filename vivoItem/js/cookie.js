function getCookieByName(ckName){
    var ck=document.cookie;
    if(!ck){
        return "";
    }
    var ckArr=ck.split("; ");
    var arr=[];
    for(var i=0;i<ckArr.length;i++){
        if(ckArr[i].split("=")[0]==ckName){
            return ckArr[i].split("=")[1];
        }
    }
    return "";
}
function setCookie(name,val,date,path){
    if(!!date&&!(date instanceof Date)){
        path=date;
        date=undefined;
    }
    document.cookie=name+"="+val+";expires="+date+";path="+path;
}
function removeCookie(name,path){
    document.cookie=name+"=;expires="+new Date(0)+";path="+path;
}