function myScore() {
    var score=0;
    var first=document.myForm.optionQOne.value;
    var second=document.myForm.optionQTwo.value;
    var third=document.myForm.optionQThree.value;
    var fourth=document.myForm.optionQFour.value;
    var fifth=document.myForm.optionQFive.value;
    var sixth=document.myForm.optionQSix.value;
    var seventh=document.myForm.optionQSeven.value;
    var eigth=document.myForm.optionQEight.value;
    var nineth=document.myForm.optionQNine.value;
    var tenth=document.myForm.optionQTen.value;
    var total=document.getElementById('total')
    var myForm=document.getElementById('myBoard')
    switch (score) {
        case 0:
        if (first=='Math.sign()'){score++};
        case 1:
        if (second=='Defines the document type'){score++};
        case 2:
        if (third=='Header'){score++};
        case 3:
        if (fourth=='SRC'){score++};
        case 4:
        if (fifth=='Logic'){score++};
        case 5:
        if (sixth=='Id selector'){score++};
        case 6:
        if (seventh=='6'){score++};
        case 7:
        if (eigth=='ALT'){score++};
        case 8:
        if (nineth=='Using a number'){score++};
        case 9:
        if (tenth=='Standard Input and Output'){score++};
    }  
    myForm.style.display='none';
    if (score<=10) {
        total.textContent=`Your score is ${score}`;
    }
}