import * as React from 'react';
import { shallow, render, mount } from 'enzyme';
import Circle, {CircleProps} from '../src';

describe('ReactCircle', () => {
  const setup = (props?: Partial<CircleProps>) => {
    const initialOptions = {
      progress: 25
    }
  
    const circle = shallow(
      <Circle {...initialOptions} {...props} />
    );
    
    return {
      circle
    };
  };

  it('Should render a <Circle/> with a 10px line', () => {
    const {circle} = setup({lineWidth: '10'});
    expect(circle.find('circle').first().prop('strokeWidth')).toBe('10')
  })

  it('Should render inside circle of same with as outside one', () => {
    const {circle} = setup({lineWidth: '10'});
    const innerWidth = circle.find('circle').first().prop('strokeWidth');
    const outerWidth = circle.find('circle').last().prop('strokeWidth');
    expect(innerWidth).toBe(outerWidth)
  })

  it('Should render a <Circle/> with no text', () => {
    const {circle} = setup({showPercentage: false});
    expect(circle.find('text').exists()).toBeFalsy();
  })

  it('Should render a text with 25%', () => {
    const {circle} = setup();
    expect(circle.find('text').text()).toEqual('25%');
  });
});
