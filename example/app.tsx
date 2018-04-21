import * as React from 'react';
import { Component } from 'react';
import FieldRange from '@atlaskit/field-range';
import TextField from '@atlaskit/field-text';
import Checkbox from '@atlaskit/checkbox';
import Button from '@atlaskit/button';
import { AppWrapper, TextFieldsWrapper, OptionsWrapper, CircleWrapper, CheckBoxWrapper, OptionsSidebar } from './styled';
import Circle from '../src';

export interface AppState {
  progress: number;
  progressColor: string;
  bgColor: string;
  textColor: string;
  size: string;
  lineWidth: string;
  animated: boolean;
  roundedStroke: boolean;
  responsive: boolean;
  defaultMode: boolean;
}

export type StatePropName = keyof AppState;

export default class App extends Component<{}, AppState> {
  state: AppState = {
    progress: 13,
    progressColor: 'Maroon',
    bgColor: 'Moccasin',
    textColor: 'Maroon',
    size: '200',
    lineWidth: `30`,
    animated: true,
    roundedStroke: true,
    responsive: true,
    defaultMode: false,
  }

  onTextFieldChange = (propName: StatePropName) => (e: any) => {
    this.setState({ [propName]: e.target.value } as any);
  }

  onProgressChange = (progress: number) => {
    this.setState({ progress });
  }

  onCheckboxChange = (propName: StatePropName) => (e: any) => {
    const currentValue = this.state[propName];
    this.setState({ [propName]: !currentValue } as any);
  }

  render() {
    const { progress, progressColor, bgColor, textColor, size, lineWidth, animated, roundedStroke, responsive} = this.state;

    return (
      <AppWrapper>
        <OptionsSidebar>
        <OptionsWrapper disabled={this.state.defaultMode}>
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
            <CheckBoxWrapper>
              <Checkbox
                initiallyChecked={true} 
                label="Animation" 
                onChange={this.onCheckboxChange('animated')} 
              />
              <Checkbox
                initiallyChecked={true}
                label="Rounded stroke" 
                onChange={this.onCheckboxChange('roundedStroke')} 
              />
                <Checkbox
                  initiallyChecked={true}
                  label="Responsive"
                  onChange={this.onCheckboxChange('responsive')}
                />
            </CheckBoxWrapper>
          </TextFieldsWrapper>
          <Button
              appearance="primary"
              shouldFitContainer
              onClick={this.onCheckboxChange('defaultMode')} 
            >
              {this.state.defaultMode ? 'DEFAULT' : 'CUSTOM'}
            </Button>
        </OptionsWrapper>
          </OptionsSidebar>
        <CircleWrapper>
            {!this.state.defaultMode ? 
            <Circle
              responsive={responsive}
              animate={animated}
              roundedStroke={roundedStroke}
              size={size}
              progress={progress}
              progressColor={progressColor}
              bgColor={bgColor}
              textColor={textColor}
              lineWidth={lineWidth}
              textStyle={{ font: 'bold 5rem Helvetica, Arial, sans-serif' }}
            />
              : <Circle progress={35}/>
            }
        </CircleWrapper>
      </AppWrapper>
    )
  }
}
