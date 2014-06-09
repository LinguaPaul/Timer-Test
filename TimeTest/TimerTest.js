var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, updateTimer: updateTimer});

function preload() {
    cursors = game.input.keyboard.createCursorKeys();
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}
    var timer;
    counter=0;
    pause=true;

function create() {
    timer = game.add.text(250, 150, '00:00:00', { font: "64px Arial", fill: "#ffffff", align: "left" });
    Phaser.inputEnabled = true;
    this.currentTimer = this.game.time.events.loop(Phaser.Timer.SECOND, this.updateTimer, this);
    this.currentTimer.timer.start();
    pauseButton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    resumeButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function update() {    
    if(pauseButton.isDown){
    timer.setText('Pause');
    this.currentTimer.timer.pause();
    }
    if(resumeButton.isDown){
    this.currentTimer.timer.resume();
    this.currentTimer = this.game.time.events.loop(Phaser.Timer.SECOND, this.updateTimer, this);
    }

}

function updateTimer() {
    counter++;
    timer.setText(counter+'');
    console.log(counter);
}