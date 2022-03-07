import {useSession, signOut, signIn} from "next-auth/react";
import {useRouter} from "next/router";
import React, {Component} from "react";
import {number} from "prop-types";

type reviewNumberProps = {
  min: number,
  max: number,
  step: number,
  previousScore: number
}
type reviewNumberState = {
  localScore: number
}

class ReviewNumbers extends React.Component<reviewNumberProps, reviewNumberState> {
  constructor(props) {
    super(props);
    this.state = {
      localScore: -1
    }
  }

  updateCurrentScore(val) {
    if(this.state.localScore === val){
      this.setState({localScore: -1});
    } else {
      this.setState({localScore: val});
    }
    return true;
  }

  render() {
    let buttons = [];
    for (let i = this.props.min, local: number; i <= this.props.max; local = i + this.props.step, i = Number(local.toFixed(2))) {
      buttons.push(
        <div
          key={i}
          className={`reviewNumbers 
          ${(i === this.props.previousScore) ? 'previous-score' : ''} 
          ${i < this.state.localScore ? 'under-score' : ''}
          ${i === this.state.localScore ? 'current-score' : ''}
          `}
          data-value={i}
          onClick={() => {
            this.updateCurrentScore(i)
          }}
        >
          {i}
        </div>)
    }
    return (
      <>
        <div className='reviewButtonsContainer'>
          {buttons}
        </div>
      </>
    );
  }
}

export default ReviewNumbers;
