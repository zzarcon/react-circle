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

  it('Should render with 10px line', () => {
    const {circle} = setup({lineWidth: '10'});
    expect(circle.find('circle').first().prop('strokeWidth')).toBe('10')
  })

  it('Should render inside circle of same width as outside one', () => {
    const {circle} = setup({lineWidth: '10'});
    const innerWidth = circle.find('circle').first().prop('strokeWidth');
    const outerWidth = circle.find('circle').last().prop('strokeWidth');
    expect(innerWidth).toBe(outerWidth)
  })

  it('Should render a with no text', () => {
    const {circle} = setup({showPercentage: false});
    expect(circle.find('text').exists()).toBeFalsy();
  })

  it('Should render a text with 25%', () => {
    const {circle} = setup();
    expect(circle.find('text').text()).toEqual('25%');
  });

  it('Should render in default with a square stroke', () => {
    const { circle } = setup();
    expect(circle.find('circle').last().prop('strokeLinecap')).toBe('butt');
});

  it('Should render with a rounded stroke', () => {
    const {circle} = setup({roundedStroke: true});
   expect(circle.find('circle').last().prop('strokeLinecap')).toBe('round');
  });


  it('Should default render with animation', () => {
    const { circle } = setup({ animate: false });
    const innerCircle = circle.find('circle').last()
    expect(innerCircle.prop('style')).toMatchSnapshot();
  })

  it('Should render without animation', () => {
    const { circle } = setup({animate:false});
    const innerCircle = circle.find('circle').last()
    expect(innerCircle.prop('style')).toMatchSnapshot();
  })
});
