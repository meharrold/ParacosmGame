var PlayButton;
var cursor;


var MainMenu=function(game){
	console.log("Loading My Main Menu");
};

MainMenu.prototype.preload=function(){
	console.log("Loading Main Menu Assets. Yum");
}


MainMenu.prototype.create=function(){
 
	// PlayButton= game.add.button(game.world.centerX - 95, 400, 'PlayButton', actionOnClick, this, 2, 1, 0);
	var PlayButton = game.add.sprite(game.world.centerX, game.world.centerY, 'PlayButton');
	// PlayButton.onInputOver.add(over, this);
	PlayButton.inputEnabled=true;
	PlayButton.events.onInputDown.add(actionOnClick, this);

	cursor= game.add.sprite(0,0,"cursor");
	cursor.scale.setTo(15,15);

	cursor.smoothed=false;
	console.log("HELP ME");
}

//bugged code
MainMenu.prototype.update=function(){
	
	cursor.x=game.input.x;
	cursor.y=game.input.y;
}

MainMenu.prototype.render=function(){

}


function actionOnClick () {

    game.state.start("main");

}

function over(){
	console.log("WTF22222");
	///this.game.canvas.style.cursor = "none";
=======

var PlayButton;
var PlayButtonText;


var QuitButton;
var QuitButtonText;

var OptionsButton;
var OptionsButtonText;
var cursor;

var password;

var MainMenu=function(game){
console.log("Loading My Main Menu");
};

MainMenu.prototype.preload=function(){
console.log("Loading Main Menu Assets. Yum");
}


MainMenu.prototype.create=function(){
 
  // PlayButton= game.add.button(game.world.centerX - 95, 400, 'PlayButton', actionOnClick, this, 2, 1, 0);
    PlayButton = game.add.sprite(game.world.centerX, game.world.centerY, 'BlankButton');

    var PlayButtonStyle = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: PlayButton.width, align: "center" };
    PlayButtonText = game.add.text(PlayButton.centerX*.95, PlayButton.centerY*.95, "Play", PlayButtonStyle);
  


    QuitButton = game.add.sprite(game.world.centerX, game.world.centerY*1.5, 'BlankButton');


    var QuitButtonStyle = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: QuitButton.width, align: "center" };
    QuitButtonText = game.add.text(QuitButton.centerX*.95, QuitButton.centerY*.95, "Quit", QuitButtonStyle);

    var QuitButtonStyle = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: PlayButton.width, align: "center" };
    QuitButtonText = game.add.text(QuitButton.centerX*.95, QuitButton.centerY*.95, "Quit", QuitButtonStyle);

    OptionsButton = game.add.sprite(game.world.centerX, game.world.centerY*1.25, 'BlankButton');

    var OptionsButtonStyle = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: OptionsButton.width, align: "center" };
    OptionsButtonText = game.add.text(OptionsButton.centerX*.925, OptionsButton.centerY*.95, "Options", OptionsButtonStyle);


  PlayButton.inputEnabled=true;
  PlayButton.events.onInputDown.add(actionOnClick, this);
  QuitButton.inputEnabled=true;
  QuitButton.events.onInputDown.add(quitFunction,this);


  

cursor= game.add.sprite(0,0,"cursor");
cursor.scale.setTo(5,5);
//cursor.anchor(0.5,0.5);
cursor.smoothed=false;


console.log("RAWR");



}


MainMenu.prototype.update=function(){
	
	cursor.x=game.input.x;
	cursor.y=game.input.y;
}

MainMenu.prototype.render=function(){

}


function actionOnClick () {
    //console.log(password.value.toString());
    game.state.start("nameSelectionMenu");

}


function quitFunction(){
	game.destroy();
}

function over(){
console.log("WTF22222");
	///this.game.canvas.style.cursor = "none";
}