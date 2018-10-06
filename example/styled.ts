import styled, {css, injectGlobal} from 'styled-components';

export interface OptionsWrapperProps {
  disabled: boolean;
}

injectGlobal`
  body {
    background: linear-gradient(90deg, #69b7eb, #b3dbd3, #f4d6db);
  }

  .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}

  .github-corner svg {
    fill:#64CEAA; color:#fff; position: absolute; top: 0; border: 0; right: 0;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  max-height: 80vh;
  max-width: 90vw;
  box-shadow: 1px 5px 5px 1px rgba(0,0,0,.3);
  background: white;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const OptionsWrapper = styled.div`
  ${css`
    ${(props:OptionsWrapperProps)=>props.disabled?`
      > div {
        opacity:.4;
        pointer-events: none;
      }
    `:''}
      > button {
        margin-bottom: 2em;        
      }
      >:last-child {
        margin-bottom: 2em;
      }
    `}
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
  border-right: 1px solid #e2e2e2;
  padding: 2em;
  overflow: auto;
`;

export const TextFieldsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction:column;
`;

export const CheckBoxWrapper = styled.div`
  padding-top:20px;
`;
