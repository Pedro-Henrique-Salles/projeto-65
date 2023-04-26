//Criar uma referência para tela

//Dê altura e largura específicas para a imagem do carro
var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext("2d")
var greencar_width=75;
var greencar_height=100;
var greencar_x=5;
var greencar_y=225;
var backgroundImage = "parkingLot.jpg";
var greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.

function add() {
	//carregar carro e imagens de fundo na tela.
	background_imgTag= new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src= backgroundImage;

	greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar.src=greencar_image;
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0,canvas.Width, canvas.height );

}

function uploadCarroVerde() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
	if(greencar_y >=0){
		greencar_y=greencar_y-10;
		uploadBackground();
		uploadCarroVerde();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(greencar_y <=500){
		greencar_y=greencar_y+10;
		uploadBackground();
		uploadCarroVerde();
	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencar_x >=0){
		greencar_x=greencar_x-10;
		uploadBackground();
		uploadCarroVerde();
	}
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(greencar_x <=700){
		greencar_x=greencar_x+10;
		uploadBackground();
		uploadCarroVerde();
	}
}
