var total = 0;
var time = Math.floor(Math.random() * 2400);
const commentVault = [", great choice. ", ", I like it a lot. ", ", eh? You'll love it. ", ", remember to eat is slowly. ", ", perfect. ", ", okay then. ", ", gotcha. ", ", good. It'll be here in no time. ", ", of course. ", ", the chef's favourite, great! ", ", hm, got it. ", ", okay. "];
const bfCommentVault = [" Have a great day.", " Have a nice morning.", " Enjoy it.", " I'll bring it right now.", " Perfect, tell me if you need anything else.", " Here, a little chocolate on the house if you want it."];

var bfComment;
var comment;
commentRandom = () => {
  comment = commentVault[Math.floor(Math.random() * commentVault.length)];
  bfComment = bfCommentVault[Math.floor(Math.random() * bfCommentVault.length)];
}
if (total == 0){
  
  if (time > 2200 || time < 900) {
    alert("We are closed right now. We open from 9 AM to 10 PM");
  }
  else if (time >= 900 && time <= 1200) {
    alert("Thank you for choosing Bottega Diner! \n Morning menu \n Toast and coffee - 2\u20AC \n Toast and tea - 2\u20AC \n ColaCao and biscuits - 3\u20AC \n Coffee and eggs with beacon - 6\u20AC");
    
    let breakfast = prompt("Good morning, what will you have? \n Toast and coffee \n Toast and tea \n ColaCao and biscuits \n Coffee and eggs with beacon");
    
    function breakfastPrice() {
      if (breakfast != null) {
        if (breakfast == 'Toast and coffee') {
          total += 2;
          commentRandom();
          alert("Toast and coffee then, that'll be 2\u20AC." + bfComment);
        } 
        else if (breakfast == 'Toast and tea') {
          total += 2;
          commentRandom();
          alert("Toast and tea, that's 2\u20AC." + bfComment);
        }
        else if (breakfast == "ColaCao and biscuits") {
          total += 3;
          commentRandom();
          alert("ColaCao and some biscuits, 3\u20AC." + bfComment);
        }
        else if (breakfast == "Coffee and eggs with beacon") {
          total += 6;
          commentRandom();
          alert("Okay, coffee and eggs with beacon, that's 6\u20AC." + bfComment);
        }
      }
    }
    breakfastPrice();
    }
  else if (time >= 1201 && time <= 1900) {
    alert("Thank you for choosing Bottega Diner! \n Afternoon menu \n Main Entrees \n Chicken - 7\u20AC \n Beefsteak - 10\u20AC \n Sides \n Salad - 3\u20AC \n Potato gratin - 4\u20AC \n Fattoush - 4\u20AC");

    let mainDish = prompt('Good afternoon, please choose the main entree: \n Chicken \n Beefsteak');

    function mainEntreePrice() {
      if (mainDish != null) {
        if (mainDish == 'Chicken') {
          total += 7;
          commentRandom();
          alert("Chicken" + comment + "That's 7\u20AC.");
          
          let extraChicken = prompt("Do you want it with an extra sauce or seasoning? \n Tomato sauce - 0,50\u20AC \n Alioli - 0,50\u20AC \n Mayonnaise - 0,60\u20AC \n Common seasoning - 1\u20AC \n Special seasoning - 2\u20AC");
          
          function extraChickenPrice() {
            if (extraChicken != null) {
              if (extraChicken == 'Tomato sauce') {
                total += 0.5;
                alert("Got it.");
              }
              else if (extraChicken == 'Alioli') {
                total += 0.5;
                alert("Okay.");
              }
              else if (extraChicken == 'Mayonnaise') {
                total += 0.6;
                alert("Gotcha.");
              }
              else if (extraChicken == 'Common seasoning') {
                total += 1;
                alert("Ah, yes, the local favorite");
              }
              else if (extraChicken == 'Special seasoning') {
                total += 2;
                alert("Great choice, it's pretty good.");
              }
              else {
                alert("Nothing extra then, perfect.")
              }
            }
          }
          extraChickenPrice();
        } 
        else if (mainDish == 'Beefsteak') {
          total += 10;
          commentRandom();
          alert('Beefsteak' + comment + "That'll be 10\u20AC.");
          
          let extraBeefsteak = prompt("Do you want it with an extra sauce or seasoning? \n Tomato sauce - 0,50\u20AC \n Alioli - 0,50\u20AC \n Mayonnaise - 0,60\u20AC \n Common seasoning - 1\u20AC \n Special seasoning - 2\u20AC");
          
          function extraBeefsteakPrice() {
            if (extraBeefsteak != null) {
              if (extraBeefsteak == 'Tomato sauce') {
                total += 0.5;
                alert("Got it.");
              }
              else if (extraBeefsteak == 'Alioli') {
                total += 0.5;
                alert("Okay.");
              }
              else if (extraBeefsteak == 'Mayonnaise') {
                total += 0.6;
                alert("Gotcha.");
              }
              else if (extraBeefsteak == 'Common seasoning') {
                total += 1;
                alert("Ah, yes, the local favorite");
              }
              else if (extraBeefsteak == 'Special seasoning') {
                total += 2;
                alert("Great choice, it's pretty good.");
              }
              else {
                alert("Nothing extra then, perfect.")
              }
            }
          }
          extraBeefsteakPrice();
        }
      }
    }
    mainEntreePrice();

    let sideDish1 = prompt('Choose a side dish: \n Salad \n Potato gratin \n Fattoush');

    function side1Price() {
      if (sideDish1 != null) {
        if (sideDish1 == 'Salad') {
          total += 3;
          commentRandom();
          alert('Salad' + comment + "That adds 3\u20AC.");
        }
        else if (sideDish1 == 'Potato gratin') {
          total += 4;
          commentRandom();
          alert('Potato gratin' + comment + "Plus 4\u20AC.");
        }
        else if (sideDish1 == 'Fattoush') {
          total += 4;
          commentRandom();
          alert('Fattoush' + comment + "Another 4\u20AC.");
        }
      }
    }
    side1Price();

    let sideDish2 = prompt("That's " + total.toString() + "\u20AC for now." + "You can choose another side dish if you want: \n Salad \n Potato gratin \n Fattoush");

    function side2Price() {
      if (sideDish2 != null) {
        if (sideDish2 == 'Salad') {
          total += 3;
          commentRandom();
          alert('Salad' + comment + "That adds 3\u20AC.");
        }
        else if (sideDish2 == 'Potato gratin') {
          total += 4;
          commentRandom();
          alert('Potato gratin' + comment + "Plus 4\u20AC.");
        }
        else if (sideDish2 == 'Fattoush') {
          total += 4;
          commentRandom();
          alert('Fattoush' + comment + "Another 4\u20AC.");
        }
      }
    }
    side2Price();
  }
  else if (time >= 1901 && time < 2200) {
    alert("Thank you for choosing Bottega Diner! \n Night menu \n Main Entrees \n Chicken - 6\u20AC \n Beefsteak - 9\u20AC \n Sides \n Salad - 2\u20AC \n Potato gratin - 5\u20AC \n Fattoush - 5\u20AC");

    let mainDish = prompt('Good evening, please choose the main entree: \n Chicken \n Beefsteak');

    function mainEntreePrice() {
      if (mainDish != null) {
        if (mainDish == 'Chicken') {
          total += 6;
          commentRandom();
          alert("Chicken" + comment + "That's 6\u20AC.");
          
          let extraChicken = prompt("Do you want it with an extra sauce or seasoning? \n Tomato sauce - 0,50\u20AC \n Alioli - 0,50\u20AC \n Mayonnaise - 0,60\u20AC \n Common seasoning - 1,30€\u20AC \n Special seasoning - 2,50\u20AC");
          
          function extraChickenPrice() {
            if (extraChicken != null) {
              if (extraChicken == 'Tomato sauce') {
                total += 0.5;
                alert("Got it.");
              }
              else if (extraChicken == 'Alioli') {
                total += 0.5;
                alert("Okay.");
              }
              else if (extraChicken == 'Mayonnaise') {
                total += 0.6;
                alert("Gotcha.");
              }
              else if (extraChicken == 'Common seasoning') {
                total += 1.3;
                alert("Ah, yes, the local favorite");
              }
              else if (extraChicken == 'Special seasoning') {
                total += 2.5;
                alert("Great choice, it's pretty good.");
              }
              else {
                alert("Nothing extra then, perfect.")
              }
            }
          }
          extraChickenPrice();
        } 
        else if (mainDish == 'Beefsteak') {
          total += 9;
          commentRandom();
          alert('Beefsteak' + comment + "That'll be 9\u20AC.");
          
          let extraBeefsteak = prompt("Do you want it with an extra sauce or seasoning? \n Tomato sauce - 0,50\u20AC \n Alioli - 0,50\u20AC \n Mayonnaise - 0,60\u20AC \n Common seasoning - 1,30\u20AC \n Special seasoning - 2,50\u20AC");
          
          function extraBeefsteakPrice() {
            if (extraBeefsteak != null) {
              if (extraBeefsteak == 'Tomato sauce') {
                total += 0.5;
                alert("Got it.");
              }
              else if (extraBeefsteak == 'Alioli') {
                total += 0.5;
                alert("Okay.");
              }
              else if (extraBeefsteak == 'Mayonnaise') {
                total += 0.6;
                alert("Gotcha.");
              }
              else if (extraBeefsteak == 'Common seasoning') {
                total += 1.3;
                alert("Ah, yes, the local favorite");
              }
              else if (extraBeefsteak == 'Special seasoning') {
                total += 2.5;
                alert("Great choice, it's pretty good.");
              }
              else {
                alert("Nothing extra then, perfect.")
              }
            }
          }
          extraBeefsteakPrice();
        }
      }
    }
    mainEntreePrice();

    let sideDish1 = prompt('Choose a side dish: \n Salad \n Potato gratin \n Fattoush');

    function side1Price() {
      if (sideDish1 != null) {
        if (sideDish1 == 'Salad') {
          total += 2;
          commentRandom();
          alert('Salad' + comment + "That adds 2\u20AC.");
        }
        else if (sideDish1 == 'Potato gratin') {
          total += 5;
          commentRandom();
          alert('Potato gratin' + comment + "Plus 5\u20AC.");
        }
        else if (sideDish1 == 'Fattoush') {
          total += 5;
          commentRandom();
          alert('Fattoush' + comment + "Another 5\u20AC.");
        }
      }
    }
    side1Price();

    let sideDish2 = prompt("That's " + total.toString() + "\u20AC for now." + "You can choose another side dish if you want: \n Salad \n Potato gratin \n Fattoush");

    function side2Price() {
      if (sideDish2 != null) {
        if (sideDish2 == 'Salad') {
          total += 2;
          commentRandom();
          alert('Salad' + comment + "That adds 2\u20AC.");
        }
        else if (sideDish2 == 'Potato gratin') {
          total += 5;
          commentRandom();
          alert('Potato gratin' + comment + "Plus 5\u20AC.");
        }
        else if (sideDish2 == 'Fattoush') {
          total += 5;
          commentRandom();
          alert('Fattoush' + comment + "Another 5\u20AC.");
        }
      }
    }
    side2Price();
  }
  if (total == 0) {
    alert("See you soon.");
  }
  else {
    alert("Perfect, here is your order. The total price is " + total + "\u20AC. Enjoy your meal!");
  }
}
