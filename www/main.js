$(document).ready(function(){

recognition = new webkitSpeechRecognition();
recognition.lang = "ja-JP";
recognition.continuous = true;
recognition.start();

  $('#start').on('click' , function(){
    document.querySelector('#sound1').play() ;
    var x = Math.floor( Math.random() * 9 ) + 1;
    var y = Math.floor( Math.random() * 9 ) + 1;
    document.querySelector('#area').textContent =  + x + '+' + y + '= ?';
    document.querySelector('#area').className = "question";
    var q = new SpeechSynthesisUtterance();
    q.text = + x + 'たす' + y + 'わ?';
    q.lang = 'ja-JP';
    speechSynthesis.speak(q);

    recognition.onresult = function (e) {
        var results = e.results;
        for (var i = e.resultIndex; i<results.length; i++){
        var value = e.results[i][0].transcript;

        if (value == x + y ){
        document.querySelector('#area').textContent = "あたり!";
        document.querySelector('#sound2').play() ;
        var c_speech = "当たり!　正解は" + (x + y) + "だよ。"
        document.querySelector('#area').className = "answer";
        var c_a = new SpeechSynthesisUtterance();
        c_a.text = c_speech;
        c_a.lang = 'ja-JP';
        speechSynthesis.speak(c_a);
        }else{
        document.querySelector('#area').textContent = "はずれ!";
        document.querySelector('#sound3').play() ;
        var i_speech = "はずれ!　正解は" + (x + y) + "だよ。";
        document.querySelector('#area').className = "answer";
        var i_a = new SpeechSynthesisUtterance();
        i_a.text = i_speech;
        i_a.lang = 'ja-JP';
        speechSynthesis.speak(i_a);
        }
        }

    };

  });
});
