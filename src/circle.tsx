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

  /**
   * @desc Some browers (like IE/Edge) don't support dominant-baseLine.
   *       It detects whether in Chrome/Firefox/Safari which has been tested to support it,
   *       and takes all other circumstances as not supported and use the workaround instead.
   * @ref https://github.com/arasatasaygin/is.js/blob/master/is.js
   */
  get dominantBaselineSupported () {
    const W = window as any;
    if (W.dominantBaselineSupported === void 0) {
      const ua = navigator.userAgent.toLowerCase()
      const supportedPatterns = [
        /(?:chrome|crios)\/(\d+)/,
        /(?:firefox|fxios)\/(\d+)/,
        /version\/(\d+).+?safari/
      ];

      W.dominantBaselineSupported = supportedPatterns.some(p => !!ua.match(p));
    }

    return W.dominantBaselineSupported;
  }

  get text() {
    const { progress, showPercentage, textColor, textStyle, percentSpacing, showPercentageSymbol } = this.props;
    if (!showPercentage) return;

    if (!this.dominantBaselineSupported) return (
      <text style={textStyle} fill={textColor} x={radius} y={radius} dy="0.33em" textAnchor="middle">
        {progress}{showPercentageSymbol && <tspan dx={percentSpacing}>%</tspan>}
      </text>
    );

    return (
      <text style={textStyle} fill={textColor} x={radius} y={radius} textAnchor="middle" dominantBaseline="central">
        {progress}{showPercentageSymbol && <tspan dx={percentSpacing}>%</tspan>}
      </text>
    );
  }

  render() {
    const { text } = this;
    const { progress, size, bgColor, progressColor, lineWidth, animate, animationDuration, roundedStroke, responsive, onAnimationEnd } = this.props;
    const strokeDashoffset = getOffset(progress);
    const transition = animate ? `stroke-dashoffset ${animationDuration} ease-out` : null;
    const strokeLinecap = roundedStroke ? 'round' : 'butt';
    const svgSize = responsive ? '100%' : size;

    return (
      <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
        <circle stroke={bgColor} cx="175" cy="175" r="175" strokeWidth={lineWidth} fill="none"/>
        <circle stroke={progressColor} transform="rotate(-90 175 175)" cx="175" cy="175" r="175" strokeDasharray="1100" strokeWidth={lineWidth} strokeDashoffset="1100" strokeLinecap={strokeLinecap} fill="none" style={{ strokeDashoffset, transition }} onTransitionEnd={onAnimationEnd}/>
        {text}
      </svg>
    );
  }
}
