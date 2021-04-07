import {Application, Loader} from 'pixi.js'
import Pong from './stages/pong';
import Winner from './stages/winner';
import HumanController from './controllers/humanController';
import Countdown from './stages/countdown';

export default class Game {

    constructor(canvas, width, height, game) {
        this.app = new Application({
            view: canvas,
            width,
            height
        });
        this.loader = Loader.shared;
        this.width = width;
        this.height = height;
        this.game = game;
        this.pong = new Pong(this.app, this.width, this.height, this.game, this.win);
        this.winner = new Winner(this.app, this.finishWinScreen);
        this.countdown = new Countdown(this.app, this.reset);
        this.stage = 1;
    }

    init() {
        this.loader
            .add('bar', 'images/bar.png')
            .add('ball', 'images/ball.png')
            .add('wall', 'images/wall.png')
            .add('pitch', 'images/pitch.png')
            .load(this.setupPong);
    }

    win = (winner) => {

        if(this.pong.controller instanceof HumanController) {
            console.log(JSON.stringify(this.pong.controller.getGameConfig()));
        }
        this.app.stage.addChild(this.winner.getStage());
        this.stage = 2;
        this.winner.setWinner(winner);
        this.winner.setup();
    }

    finishWinScreen = () => {
        this.app.stage.removeChild(this.winner.getStage());
        this.stage = 3;
        this.countdown.setCount(5);
        this.countdown.setup();
        this.app.stage.addChild(this.countdown.getStage());
    }

    setupPong = () => {
        const stage = this.pong.getStage();
        this.pong.setup();

        this.app.stage.addChild(stage);

        this.app.ticker.add(delta => this.loop(delta));
    }

    reset = () => {
        this.app.stage.removeChild(this.countdown.getStage());
        this.pong.reset();
        this.stage = 1;
    }

    loop(delta) {
        delta = 0.85;
        if ( this.stage === 1) {
            this.pong.loop(delta);
        } else if (this.stage === 2) {
            this.winner.loop(delta);
        } else if (this.stage === 3) {
            this.countdown.loop(delta);
        }
    }
}