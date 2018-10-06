import * as React from 'react';
import { Component, CSSProperties } from 'react';

export interface CircleProps {
  progress: number;
  animate?: boolean;
  animationDuration?: string;
  showPercentage?: boolean;
  showPercentageSymbol?: boolean;
  progressColor?: string;
  bgColor?: string;
  textColor?: string;
  size?: string;
  lineWidth?: string;
  percentSpacing?: number;
  textStyle?: CSSProperties;
  roundedStroke?: boolean;
  responsive?: boolean;
  onAnimationEnd?(): void;
  children?: (<T>(parts:any) => React.ReactElement<T>)|React.ReactNode;
}

export interface CircleState {

}

const radius = 175;
const diameter = Math.round(Math.PI * radius * 2);
const getOffset = (val = 0) => Math.round((100 - val) / 100 * diameter);

export class Circle extends Component<CircleProps, CircleState> {
  static defaultProps: CircleProps = {
    progress: 0,
    animate: true,
    animationDuration: '1s',
    showPercentage: true,
    showPercentageSymbol: true,
    progressColor: 'rgb(76, 154, 255)',
    bgColor: '#ecedf0',
    textColor: '#6b778c',
    size: '100',
    lineWidth: '25',
    percentSpacing: 10,
    textStyle: { font: 'bold 4rem Helvetica, Arial, sans-serif' }
  }

  get progressText() {
    const { progress, showPercentage, textColor, textStyle, percentSpacing, showPercentageSymbol } = this.props;
    if (!showPercentage) return;

    return (
      <text style={textStyle} fill={textColor} x={radius} y={radius} textAnchor="middle" dominantBaseline="central">
        {progress}{showPercentageSymbol && <tspan dx={percentSpacing}>%</tspan>}
      </text>
    );
  }

  get circle() {
    const { bgColor, lineWidth } = this.props;
    return <circle stroke={bgColor} cx="175" cy="175" r="175" strokeWidth={lineWidth} fill="none"/>
  }

  get progressCircle() {
    const { progress, progressColor, lineWidth, animate, animationDuration, roundedStroke, onAnimationEnd } = this.props;
    const strokeDashoffset = getOffset(progress);
    const transition = animate ? `stroke-dashoffset ${animationDuration} ease-out` : undefined;
    const strokeLinecap = roundedStroke ? 'round' : 'butt';
    return <circle stroke={progressColor} transform="rotate(-90 175 175)" cx="175" cy="175" r="175" strokeDasharray="1100" strokeWidth={lineWidth} strokeDashoffset="1100" strokeLinecap={strokeLinecap} fill="none" style={{ strokeDashoffset, transition }} onTransitionEnd={onAnimationEnd}/>
  }

  render() {
    const { progressText, circle, progressCircle } = this;
    const { size, responsive } = this.props
    const svgSize = responsive ? '100%' : size;
    const renderPropMode = typeof(this.props.children)==='function';

    return renderPropMode
          ? (this.props.children as Function)({circle,progressCircle,progressText})
          : <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
              {circle}
              {progressCircle}
              {progressText}
              {this.props.children}
            </svg>;
  }
}
