function expandTxt(butn)
{
    var element = document.getElementById(butn.id)
    if(element.style.maxHeight!='none'){
      element.style.maxHeight='none';
    }else{
      element.style.maxHeight='3.5em';
    }
}