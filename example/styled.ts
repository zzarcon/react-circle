import styled, {css} from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  margin:3em 10em;
  max-height:90vh;
  box-shadow: 1px 5px 5px 1px rgba(0,0,0,.3);
  background:white;
`;

export const OptionsWrapper = styled.div`
  ${props => props.disabled && css`
  opacity:.4;
  pointer-events: none;
  `
}
`;

export const CircleWrapper = styled.div`
  width: 70%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:6em;
`;

export const OptionsSidebar = styled.div`
  width:30%;
  display:flex;
  flex-direction:column;
  padding:3em;
  border-right: 1px solid #e2e2e2;
`;

export const TextFieldsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  display:flex;
  flex-direction:column;
`;

export const CheckBoxWrapper = styled.div`
  padding-top:20px;
`;

export const DefaultButton = styled.button`
margin-top:20px;
font-size:20px;
padding:10px 20px;
background:#0052CC;
color:white;
border-radius:4px;
outline:none;
border: 1px solid #e2e2e2;
&:hover{
  cursor: pointer;
  opacity:.8;
}
${props => props.default && css`
background:white;
color:#333;
&:hover{
  background:#e2e2e2;
}
`
}
`
