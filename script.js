/* RANDOM ACTIVITY */
var activityBtn = $(`.activityBtn`);
activityBtn.on("click",randomActivity);

var resultBox=$(`.resultBox`);
resultBox.addClass('activityPosition');

var activities = ["Take a nap!","Listen to music!","Go on a walk/jog!","Journal!","Make yourself a healthy snack!", "Meditate for 15 mins!", "Spend some time with your pet!", "Read a book!", "Color, draw, or paint!", "Do some yoga!", "Get  some exercise in!", "Spend quality time with a loved one!", "Update your bucket list!", "Take a bath!", "Listen to a podcast (p.s. check out our website's podcast section, under resources, for suggestions)!", "Spend some time outdoors!", "Practice positive self-talk!", "Try a new recipe!", "Listen to an audiobook!", "Reflect on your day!", "Watch a movie/TV show!", "Try a new hobby - crocheting, puzzles, gardening...", "Write/update your gratitude list!", "Make yourself a fancy dinner!", "Curate your social media!", "Declutter your phone!", "Tidy your room!", "Set your daily/weekly/monthly goals!","Go to a local park or coffee shop!", "Watch a movie/tv show", "Go drink a glass of water. Then, fill a water bottle to carry along with you for the rest of the day!","practice your favorite sport!", "Take some personality quizzes!","Text your friends right now, maybe even make plans to hang out!","Go shopping (online or at the mall)!","Plan/do some local volunteer work!", "Learn something — fun facts, TED talks, anything you're curious about!"];

function randomActivity(){
  resultBox.text("");
  var random = Math.random()*(activities.length);
  var rounded = Math.floor(random);
  resultBox.append(`<center>${activities[rounded]}</center>`);
}



/*CHECKLIST */
var suggestedBtn = $(`.suggestedBtn`);
var customBtn = $(`.customBtn`);
var suggestedCheck = $(`.suggestedCheck`);
var customCheck = $(`.customCheck`);

suggestedBtn.on("click", showSuggested);

function showSuggested(){
  suggestedCheck.addClass(`showChecklist`);
  customCheck.removeClass(`showChecklist`);
}

customBtn.on("click", showCustom);

function showCustom(){
  customCheck.addClass(`showChecklist`);
  suggestedCheck.removeClass(`showChecklist`);
}



var textBox = $(".textBox");
var submitBtn = $(".submitBtn");
var notepad = $(".customList");

submitBtn.on("click", addItem);

function addItem(event){
  event.preventDefault();
  notepad.append(`<div class="item"><input type="checkbox">
      <label>${textBox.val()}</label>  <button class="delete">x</button><br></div>`);
  textBox.val("");
  
  var deleteBtn = $(".delete");
  deleteBtn.on("click", deleteItem)

}

function deleteItem(){
  event.target.parentNode.remove();
}
