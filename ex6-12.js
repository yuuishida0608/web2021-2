function mes() { alert("3秒経ちました！"); }
function hyoji() { //表示する文字varstr= "一文字ずつ表示します。"; //テキストボックスの文字数varcnt= document.timer.moji.value.length; //文字が全部表示されているか確認if ( cnt< 11 ) 
    { //現在より1文字多く切り出して表示document.timer.moji.value= str.substr(0,cnt+1); } else { //全て表示されたら、空文字に戻すdocument.timer.moji.value= ""; } //setTimeout()を含む関数を呼び出すsetTimeout("hyoji()",1000); } 