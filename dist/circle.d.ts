/// <reference types="react" />
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
}
export interface CircleState {
}
export declare class Circle extends Component<CircleProps, CircleState> {
    static defaultProps: CircleProps;
    readonly text: JSX.Element;
    render(): JSX.Element;
}
