function enterNumberFst(){
var n = document.getElementById("enterNumber").value
//----以下兩行為變數名稱設定-------------------------------------------------------------------------
var num = n;
var sum = 0;  
//-----題目：計算從1到輸入數字的總和(用for的方法)-----------------------------------------------------  
for(var i = 1; i <= num; i = i + 1)
{
  sum = sum  + i ;
}
//-------------------------------------------------------------------------------------------------
var c = document.getElementById("Number");
c.innerHTML = "Result: <br> The sum from 1 to "+Number(n)+" is "+Number(sum)
}