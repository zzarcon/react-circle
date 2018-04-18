import * as React from 'react';
import { Component } from 'react';
import FieldRange from '@atlaskit/field-range';
import TextField from '@atlaskit/field-text';
import Checkbox from '@atlaskit/checkbox';
import { AppWrapper, TextFieldsWrapper, OptionsWrapper, CircleWrapper } from './styled';
import Circle from '../src';

export interface AppState {
  progress: number;
  progressColor: string;
  bgColor: string;
  textColor: string;
  size: string;
  lineWidth: string;
  animated: boolean;
}

export type StatePropName = 'progressColor' | 'bgColor' | 'textColor' | 'size' | 'lineWidth';

export default class App extends Component<{}, AppState> {
  state: AppState = {
    progress: 25,
    progressColor: '#F7DC1B',
    bgColor: '#54BAD8',
    textColor: 'hotpink',
    size: '200',
    lineWidth: `30`,
    animated: true,
  }

  onTextFieldChange = (propName: StatePropName) => (e: any) => {
    this.setState({ [propName]: e.target.value } as any);
  }

  onProgressChange = (progress: number) => {
    this.setState({ progress });
  }

  onAnimationChange = (animated: boolean) => {
    this.setState({ animated: !this.state.animated });
  }

  render() {
    const { progress, progressColor, bgColor, textColor, size, lineWidth, animated } = this.state;

    return (
      <AppWrapper>
        <OptionsWrapper>
          <div>
            Percentage
            <FieldRange
              value={progress}
              min={0}
              max={100}
              step={1}
              onChange={this.onProgressChange}
            />
          </div>
          <TextFieldsWrapper>
            <TextField value={size} label="width" onChange={this.onTextFieldChange('size')} />
            <TextField value={lineWidth} label="line width" onChange={this.onTextFieldChange('lineWidth')} />
            <TextField value={progressColor} label="progress color" onChange={this.onTextFieldChange('progressColor')} />
            <TextField value={bgColor} label="background color" onChange={this.onTextFieldChange('bgColor')} />
            <TextField value={textColor} label="text color" onChange={this.onTextFieldChange('textColor')} />
            <Checkbox 
              initiallyChecked={true} 
              label="Animation" 
              onChange={this.onAnimationChange}></Checkbox>
          </TextFieldsWrapper>
        </OptionsWrapper>
        <CircleWrapper>
          <div>
            <h1>Custom</h1>
            <Circle
              animate={animated}
              size={size}
              progress={progress}
              progressColor={progressColor}
              bgColor={bgColor}
              textColor={textColor}
              lineWidth={lineWidth}
              textStyle={{ font: 'bold 5rem Helvetica, Arial, sans-serif' }}
            />
          </div>
          <div>
            <h1>Default</h1>
            <Circle
              progress={35}
            />
          </div>
        </CircleWrapper>
      </AppWrapper>
    )
  }
}
