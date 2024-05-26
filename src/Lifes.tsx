import React, {Component} from "react";

enum Animations {
    NONE,
    LOOSE,
    WIN
  } 
  

interface LifesState
{
    count : number;
    animation : Animations;
}

class Lifes extends Component<{}, LifesState>
{
    constructor(props : {})
    {
        super(props);
        this.state = {count : 5, animation:  Animations.NONE};
    }

    restoreAnimation()
    {
        setTimeout(() => {
            this.setState( {animation: Animations.NONE}) },
            2000);
    }
          

    loose = () =>
    {
        this.setState( (prevState) => ({count : prevState.count - 1, animation: Animations.LOOSE}));
        this.restoreAnimation();
    }
    
    reset = () =>
    {
        this.setState({count : 5, animation: Animations.WIN});
        this.restoreAnimation();
    }

    getAnimation()
    {
        const selection = this.state.animation;
        if (selection == Animations.NONE)
        {
            return "lifes";
        }

        if (selection == Animations.LOOSE)
        {
            return "lifesLoose";
        }

        if (selection == Animations.WIN)
        {
            return "lifesWin";
        }
    }

    render(): React.ReactNode {
        return    (       
        <h2 className={`${this.getAnimation()}`}>
        Lifes: {this.state.count}
      </h2>);

    }
}

export default Lifes;