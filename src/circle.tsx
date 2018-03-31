import * as React from 'react';
import {Component} from 'react';

export interface CircleProps {
  progress: number;
  showPercentage?: boolean;
  progressColor?: string;
  bgColor?: string;
  textColor?: string;
  size?: string;
  lineWidth?: string;
}

export interface CircleState {

}

const radius = 175;
const diameter = Math.round(Math.PI * radius * 2);
const getOffset = (val = 0) => Math.round((100 - val) / 100 * diameter);

export class Circle extends Component<CircleProps, CircleState> {
  static defaultProps: CircleProps = {
    progress: 0,
    showPercentage: true,
    progressColor: 'rgb(76, 154, 255)',
    bgColor: '#ecedf0',
    textColor: '#6b778c',
    size: '100',
    lineWidth: '25'
  }

  get text() {
    const {progress, showPercentage, textColor} = this.props;
    if (!showPercentage) return;

    return (
      <text style={{font: 'bold 4rem Helvetica, Arial, sans-serif'}} fill={textColor} x="50%" y="50%" dx="-25" textAnchor="middle">
        {progress} %
      </text>
    );
  }

  render() {
    const {text} = this;
    const {progress, size, bgColor, progressColor, lineWidth} = this.props;
    const strokeDashoffset = getOffset(progress);

    return (
      <svg width={size} height={size} viewBox="-25 -25 400 400">
        <circle stroke={bgColor} cx="175" cy="175" r="175" strokeWidth={lineWidth} fill="none" />
        <circle stroke={progressColor} transform="rotate(-90 175 175)" cx="175" cy="175" r="175" strokeDasharray="1100" strokeWidth={lineWidth} strokeDashoffset="1100" fill="none" style={{strokeDashoffset, transition: 'stroke-dashoffset 1s ease-out'}} />
        {text}
      </svg>
    );
  }
}
