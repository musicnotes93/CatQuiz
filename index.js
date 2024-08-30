$(".question2").hide();
$(".question3").hide();
$(".question4").hide();
$(".question5").hide();
$(".question6").hide();
$(".question7").hide();
$(".question8").hide();
$(".question9").hide();
$(".question10").hide();
$("#results").hide();
$(".results").hide();


var answers = [];



$("#submit1").on("click", function() {
    $(".question").hide();
    $(".question2").show();
    if ($("input[id='blue']").is(":checked")) {
        answers.push("1");
     } if ($("input[id='pink']").is(":checked")) {
         answers.push("2");
      } if (($("input[id='yellow']").is(":checked"))) {
         answers.push("3");
      }
      console.log(answers);
});
$("#submit2").on("click", function() {
    $(".question2").hide();
    $(".question3").show();
    if ($("input[id='sweet']").is(":checked")) {
        answers.push("1");
     } if ($("input[id='sassy']").is(":checked")) {
         answers.push("2");
      } if ($("input[id='playful']").is(":checked")){
         answers.push("3");
      }
      console.log(answers);
})
$("#submit3").on("click", function() {
    $(".question3").hide();
    $(".question4").show();
    if ($("input[id='anything']").is(":checked")) {
        answers.push("1");
     } if ($("input[id='salmon']").is(":checked")) {
         answers.push("2");
      } if ($("input[id='tuna']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit4").on("click", function() {
    $(".question4").hide();
    $(".question5").show();
    if ($("input[id='inside']").is(":checked")) {
        answers.push("1");
     } if ($("input[id='outside']").is(":checked")) {
         answers.push("2");
      } if ($("input[id='scary']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit5").on("click", function() {
    $(".question5").hide();
    $(".question6").show();
    if ($("input[id='grass']").is(":checked")) {
        answers.push("1");
     } if ($("input[id='fire']").is(":checked")) {
         answers.push("2");
      } if ($("input[id='water']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit6").on("click", function() {
    $(".question6").hide();
    $(".question7").show();
    if ($("input[id='whatever']").is(":checked")) {
        answers.push("1");
     } if ($("input[id='girly']").is(":checked")) {
         answers.push("2");
      } if ($("input[id='swift']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit7").on("click", function() {
    $(".question7").hide();
    $(".question8").show();
    if ($("input[id='english']").is(":checked")) {
        answers.push("1");
     } if ($("input[id='drama']").is(":checked")) {
         answers.push("2");
      } if ($("input[id='recess']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit8").on("click", function() {
    $(".question8").hide();
    $(".question9").show();
    if ($("input[id='pardon']").is(":checked")) {
        answers.push("1");
     } if ($("input[id='goAway']").is(":checked")) {
         answers.push("2");
      } if ($("input[id='duh']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit9").on("click", function() {
    $(".question9").hide();
    $(".question10").show();
    if ($("input[id='crime']").is(":checked")) {
        answers.push("1");
     } if ($("input[id='murder']").is(":checked")) {
         answers.push("2");
      } if ($("input[id='fish']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit10").on("click", function() {
    $(".question10").hide();
    $("#results").show();
    if ($("input[id='family']").is(":checked")) {
        answers.push("1");
     } if ($("input[id='woods']").is(":checked")) {
         answers.push("2");
      } if ($("input[id='beach']").is(":checked")) {
         answers.push("3");
      }
})

$("#drum").on("click", function() {
    var audio = new Audio("DrumRoll.mp3");
    audio.play()
    setTimeout(showResults, 4000);
})


function mostFrequent(arr, n) { 
 
    let maxcount = 0; 
    let element_having_max_freq; 
    for (let i = 0; i < n; i++) { 
        let count = 0; 
        for (let j = 0; j < n; j++) { 
            if (arr[i] == arr[j]) 
                count++; 
        } 
 
        if (count > maxcount) { 
            maxcount = count; 
            element_having_max_freq = arr[i]; 
        } 
    } 
 
    return element_having_max_freq; 
} 
 

function showResults() {
    $("#results").hide();
    $("#hide").hide();
    if (mostFrequent(answers, answers.length) === "1") {
        $(".resultsBanjo").show();
    } if (mostFrequent(answers, answers.length) === "2") {
        $(".resultsFiona").show();
    } if (mostFrequent(answers, answers.length) === "3") {
        $(".resultsYoshi").show();
    }

    console.log(mostFrequent(answers, answers.length));
}



 

