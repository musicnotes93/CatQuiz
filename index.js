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
    if ($("input[name='blue']").is(":checked")) {
        answers.push("1");
     } if ($("input[name='pink']").is(":checked")) {
         answers.push("2");
      } if (($("input[name='yellow']").is(":checked"))) {
         answers.push("3");
      }
      console.log(answers);
});
$("#submit2").on("click", function() {
    $(".question2").hide();
    $(".question3").show();
    if ($("input[name='sweet']").is(":checked")) {
        answers.push("1");
     } if ($("input[name='sassy']").is(":checked")) {
         answers.push("2");
      } if ($("input[name='playful']").is(":checked")){
         answers.push("3");
      }
      console.log(answers);
})
$("#submit3").on("click", function() {
    $(".question3").hide();
    $(".question4").show();
    if ($("input[name='anything']").is(":checked")) {
        answers.push("1");
     } if ($("input[name='salmon']").is(":checked")) {
         answers.push("2");
      } if ($("input[name='tuna']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit4").on("click", function() {
    $(".question4").hide();
    $(".question5").show();
    if ($("input[name='inside']").is(":checked")) {
        answers.push("1");
     } if ($("input[name='outside']").is(":checked")) {
         answers.push("2");
      } if ($("input[name='scary']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit5").on("click", function() {
    $(".question5").hide();
    $(".question6").show();
    if ($("input[name='grass']").is(":checked")) {
        answers.push("1");
     } if ($("input[name='fire']").is(":checked")) {
         answers.push("2");
      } if ($("input[name='water']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit6").on("click", function() {
    $(".question6").hide();
    $(".question7").show();
    if ($("input[name='whatever']").is(":checked")) {
        answers.push("1");
     } if ($("input[name='girly']").is(":checked")) {
         answers.push("2");
      } if ($("input[name='swift']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit7").on("click", function() {
    $(".question7").hide();
    $(".question8").show();
    if ($("input[name='english']").is(":checked")) {
        answers.push("1");
     } if ($("input[name='drama']").is(":checked")) {
         answers.push("2");
      } if ($("input[name='recess']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit8").on("click", function() {
    $(".question8").hide();
    $(".question9").show();
    if ($("input[name='pardon']").is(":checked")) {
        answers.push("1");
     } if ($("input[name='goAway']").is(":checked")) {
         answers.push("2");
      } if ($("input[name='duh']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit9").on("click", function() {
    $(".question9").hide();
    $(".question10").show();
    if ($("input[name='crime']").is(":checked")) {
        answers.push("1");
     } if ($("input[name='murder']").is(":checked")) {
         answers.push("2");
      } if ($("input[name='fish']").is(":checked")) {
         answers.push("3");
      }
      console.log(answers);
})
$("#submit10").on("click", function() {
    $(".question10").hide();
    $("#results").show();
    if ($("input[name='family']").is(":checked")) {
        answers.push("1");
     } if ($("input[name='woods']").is(":checked")) {
         answers.push("2");
      } if ($("input[name='beach']").is(":checked")) {
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



 

