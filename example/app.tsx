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

const ghLink = (
  <a href="https://github.com/zzarcon/react-circle" className="github-corner" aria-label="View source on Github">
    <svg width="180" height="180" viewBox="0 0 250 250" aria-hidden="true">
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: '130px 106px'}} className="octo-arm"></path>
      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
    </svg>
  </a>
);

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
    const { progress, progressColor, bgColor, textColor, size, lineWidth, animated, roundedStroke, responsive, defaultMode} = this.state;

    return (
      <AppWrapper>
        {ghLink}
        <OptionsSidebar>
        <OptionsWrapper disabled={defaultMode}>
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
              {defaultMode ? 'DEFAULT' : 'CUSTOM'}
            </Button>
        </OptionsWrapper>
          </OptionsSidebar>
        <CircleWrapper>
            {!defaultMode ? 
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
