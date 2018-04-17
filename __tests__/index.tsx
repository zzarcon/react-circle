import * as React from 'react';
import { shallow, render, mount } from 'enzyme';
import Circle from '../src';

describe('ReactCircle', () => {
  const setup = () => {
    return {
      
    };
  };

  const initialOptions = {
    progress: 25,
    progressColor: '#F7DC1B',
    bgColor: '#54BAD8',
    textColor: 'hotpink',
    size: '200',
    lineWidth: `30`,
    showPercentage: true
  }

  it('Should render a <Circle/> with text percentage', () => {
    const CircleNode = shallow(
      <Circle {...initialOptions}/>
    )
    expect(CircleNode).toMatchSnapshot();
  })

  it('Should render a <Circle/> with a 10px line', () => {
    const CircleNode = shallow(
      <Circle {...initialOptions} lineWidth={'10'}/>
    )
    expect(CircleNode.find('circle').first().prop('strokeWidth')).toBe('10')
  })

  it('Should render inside circle of same with as outside one', () => {
    const CircleNode = shallow(
      <Circle {...initialOptions} lineWidth={'10'} />
    );
    const innerWidth = CircleNode.find('circle').first().prop('strokeWidth');
    const outerWidth = CircleNode.find('circle').last().prop('strokeWidth');
    expect(innerWidth).toBe(outerWidth)
  })

  it('Should render a <Circle/> with no text', () => {
    const CircleNode = shallow(
      <Circle {...initialOptions} showPercentage={false} />
    )
    expect(CircleNode.find('text').exists()).toBe(false);
  })

  xit('Should render a text with 25%', () => {
    const CircleNode = shallow(
      <Circle {...initialOptions} />
    )
    // FIXME: Can get the text element but don't know how to read value from <text>
    console.log(CircleNode.find('text').debug());
  })

});
