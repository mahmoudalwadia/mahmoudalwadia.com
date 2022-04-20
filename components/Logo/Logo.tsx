import React from 'react';
import styled from '@emotion/styled';
import mediaQueries from '@styles/media';
import { css, keyframes } from '@emotion/react';

type Props = {
  width?: number;
  height?: number;
  crazyMode?: boolean;
};

const Logo: React.FC<Props> = (props) => {
  return (
    <LogoContainer {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.82 109.79">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ff08e8">
              <animate
                attributeName="stop-color"
                values="#ff08e8; #02ccff; #ff08e8"
                dur="6s"
                repeatCount="indefinite"
              ></animate>
            </stop>

            <stop offset="100%" stopColor="#02ccff">
              <animate
                attributeName="stop-color"
                values="#02ccff; #ff08e8; #02ccff"
                dur="6s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
        <g id="Layer_1" data-name="Layer 1">
          <g id="Layer_1-2" data-name="Layer 1">
            <SkinPath
              className="skin"
              d="M13.31,110H91.85A13.14,13.14,0,0,0,105,96.85V13.34A13.14,13.14,0,0,0,91.85.2H13.31A13.14,13.14,0,0,0,.17,13.34V96.85A13.14,13.14,0,0,0,13.31,110Z"
            />
          </g>
        </g>
        <g id="Layer_4" data-name="Layer 4" className="face-edge">
          <g id="Layer_4-2" data-name="Layer 4">
            <SkinFace d="M80.49,10.06Q80.37,24,80.24,37.93" />
          </g>
        </g>
        <g id="Layer_2" data-name="Layer 2" className="upper-jaw">
          <g id="Layer_2-2" data-name="Layer 2">
            <SkinFace d="M76.58,17.85l3.6-7.28-8.28,0,3.73,7.27A.53.53,0,0,0,76.58,17.85Z" />
            <SkinFace d="M68.84,17.84l3.51-7.26H64.13l3.76,7.28A.54.54,0,0,0,68.84,17.84Z" />
          </g>
          <SkinFace d="M61,17.9l3.6-7.28H56.36l3.72,7.28A.53.53,0,0,0,61,17.9Z" />
          <SkinFace d="M53.29,17.88l3.51-7.25H48.58l3.76,7.28A.54.54,0,0,0,53.29,17.88Z" />
          <SkinFace d="M45.45,17.92l3.6-7.28H40.77l3.73,7.28A.53.53,0,0,0,45.45,17.92Z" />
          <SkinFace d="M37.71,17.9l3.51-7.25H33l3.76,7.28A.53.53,0,0,0,37.71,17.9Z" />
        </g>

        <g className="right-eye" id="Layer_5" data-name="Layer 5">
          <g id="Layer_5-2" data-name="Layer 5">
            <SkinFace d="M79.74,37.44h.94A20.49,20.49,0,0,1,89,42.26c.78.75,8.37,8.28,6,18.18a18.6,18.6,0,0,1-8.52,11.27,19,19,0,0,1-19.89-.85c-4.21-2.94-6.55-7.55-6.85-9.75-.11-.8-.16-1.6-.17-1.9A19.27,19.27,0,0,1,61.4,50.5a15.24,15.24,0,0,1,15.31-7.29,13.68,13.68,0,0,1,8.9,5.21c.5.68,4.38,6.17,1.7,11.93-2.45,5.27-8.26,6.17-8.81,6.25-.89.12-6.88.85-10.23-3.69-2-2.73-2.85-7.07-.63-10.4,2.55-3.83,8.29-5,11.52-2.71,1.49,1.06,3.2,3.41,2.49,5.94a5.26,5.26,0,0,1-5.39,3.67c-1.57-.17-3.7-1.29-3.67-2.84a2.69,2.69,0,0,1,2.78-2.46,2.62,2.62,0,0,1,1.78,1.38,2.51,2.51,0,0,1,0,2,2.46,2.46,0,0,1-1.21,1,3.32,3.32,0,0,1-1.5.31" />
          </g>
        </g>
        <g id="Layer_6" data-name="Layer 6" className="face-edge">
          <SkinFace d="M59.1,59.07,43.28,59" />
        </g>
        <g id="Layer_8" data-name="Layer 8" className="face-edge">
          <g id="Layer_7" data-name="Layer 7">
            <SkinFace d="M25.39,56.73q.33,18.12.35,36.58,0,3.64,0,7.29" />
          </g>
        </g>
        <g id="Layer_7-2" data-name="Layer 7" className="left-eye">
          <g id="Layer_6-2" data-name="Layer 6">
            <SkinFace d="M43.75,59.48c0-.74,0-1.52-.09-2.36a28.53,28.53,0,0,0-.48-3.31s-.18-.74-.4-1.45a18.47,18.47,0,0,0-19.86-13c-.92.12-9.39,1.36-13.63,9.29a18.52,18.52,0,0,0-.76,15.15,17.33,17.33,0,0,0,8.14,8.9c.6.3,8.62,4.1,16-.57.93-.59,6.33-4.15,7.1-11a14.84,14.84,0,0,0-6.63-14c-1.38-.88-6.11-3.58-11.55-1.7a12.52,12.52,0,0,0-8.52,10.79,11.72,11.72,0,0,0,6.06,11.17c5.12,2.59,12.24.83,14.77-4.17a9.51,9.51,0,0,0-1.33-10.61,8.76,8.76,0,0,0-9.66-2.27c-2.86,1.24-5.41,4.37-4.92,8,.55,4,4.72,7.05,8.39,6.31,2.46-.5,5.34-2.83,5.06-5.74A5,5,0,0,0,27,54.49a4.23,4.23,0,0,0-4.08,2.13,3.28,3.28,0,0,0,2.33,4.73,2.37,2.37,0,0,0,2.72-2,2.19,2.19,0,0,0-1.48-2.1,1.55,1.55,0,0,0-.57-.07c-.43,0-.79,0-1,0" />
          </g>
        </g>
        <g id="Layer_9" data-name="Layer 9" className="lower-jaw">
          <g id="Layer_2-3" data-name="Layer 2">
            <SkinFace d="M29.63,92.84,26,100.12H34.3l-3.72-7.28A.53.53,0,0,0,29.63,92.84Z" />
            <SkinFace d="M37.37,92.86l-3.51,7.26h8.22l-3.76-7.28A.54.54,0,0,0,37.37,92.86Z" />
          </g>
          <SkinFace d="M45.17,92.8l-3.59,7.28,8.27,0-3.73-7.27A.53.53,0,0,0,45.17,92.8Z" />
          <SkinFace d="M52.91,92.81l-3.5,7.26h8.22L53.86,92.8A.54.54,0,0,0,52.91,92.81Z" />
          <SkinFace d="M60.76,92.78l-3.6,7.28,8.27,0-3.72-7.27A.53.53,0,0,0,60.76,92.78Z" />
          <SkinFace d="M68.5,92.79,65,100.05h8.22l-3.76-7.27A.54.54,0,0,0,68.5,92.79Z" />
        </g>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const rotating = keyframes`
  0%{
    transform:rotate(0deg);
  
  }
  100%{
    transform: rotate(360deg);
  }
`;

const crazyModeStyles = () => css`
  .skin {
    fill: url('#logo-gradient');
  }
  .right-eye {
    animation: ${rotating} 6s linear infinite;
    transform-origin: 74% 51%;
  }
  .left-eye {
    animation: ${rotating} 6s linear infinite;
    transform-origin: 24% 51%;
  }
  .face-edge {
    display: none;
  }
`;

const LogoContainer = styled.div<Props>`
  width: ${(p) => (p.width ? p.width : 55)}px;
  height: ${(p) => (p.height ? p.height : 57.5)}px;
  ${mediaQueries.md} {
    width: ${(p) => (p.width ? p.width : 78)}px;
    height: ${(p) => (p.height ? p.height : 81.77)}px;
  }
  &:hover {
    ${crazyModeStyles}
  }
  ${(p) => (p.crazyMode ? crazyModeStyles : '')}
`;

const SkinPath = styled.path`
  fill: ${(p) => p.theme.colors.primary};
`;

const SkinFace = styled.path`
  fill: none;
  stroke-miterlimit: 10;
  stroke: ${(p) => p.theme.colors.background};
`;
