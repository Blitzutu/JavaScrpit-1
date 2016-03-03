var enter = confirm("You are outside of a Forest Cabin. Press OK to enter.");

if(enter){
    var bowls = prompt("You see three bowls of porridge. Eat 1,2, or 3?");
/*    if(bowls == 1){
      alert("The porridge is too cold. The end.");
    }else if (bowls == 2) {
        alert("The porridge is too hot. The end.");
      }else if (bowls == 3) {
        alert("It was delicious!"); */

        switch (bowls) {
          case "1":
            alert("The porridge is too cold.");
            break;
          case "2":
            alert("The porridge is too hot.");
             break;
          case "3":
            alert("It was delicious!");
            var hours = "The porridge made you sleepy. Sleep for how many hours?";
            var sleep =prompt(hours);
            sleep = parseInt(sleep);
            if (sleep < 2){
              alert("You wake up just in time, and scamper away.");
            } else {
              alert("You sleep too late. The hungry bears eat you.");
            }
        }
          alert("The End!")
      } else {
        console.log("And that's the world's shortest story. The End!");
    }
