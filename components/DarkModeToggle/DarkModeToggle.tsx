import React, { useEffect } from 'react';
import { useColorMode } from 'theme-ui';
import styled from '@emotion/styled';
import { Theme } from '@styles/theme/theme';
import translations from '@translations/main.json';
import mediaQueries from '@styles/media';
import { css, Theme as ThemeType } from '@emotion/react';

export const DarkModeToggle: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === Theme.DARK;

  const toggleColorMode = (event: React.MouseEvent) => {
    event.preventDefault();
    setColorMode(isDark ? Theme.LIGHT : Theme.DARK);
  };

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, '*');
  }, [colorMode]);

  const accessibilityInfo = isDark
    ? translations.accessibility.darkModeToggle.dark
    : translations.accessibility.darkModeToggle.light;

  return (
    <IconWrapper
      isDark={isDark}
      onClick={toggleColorMode}
      aria-label={accessibilityInfo}
      title={accessibilityInfo}
    >
      <SunMoon isDark={isDark} />
    </IconWrapper>
  );
};

// Many thanks to: https://codepen.io/aaroniker/pen/KGpXZo
const IconWrapper = styled.button<{ isDark: boolean }>`
  padding: 2px;
  opacity: 0.5;
  transform: scale(0.7);
  &:hover {
    opacity: 1;
  }
  ${mediaQueries.md} {
    transform: scale(0.8);
    display: flex;
  }
`;

const MoonMusk = (p: { theme: ThemeType }) => css`
  box-shadow: inset 32px -32px 0 0 ${p.theme.colors.primary};
  transform: scale(0.5) rotate(0deg);
  transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
  &:before {
    background: ${p.theme.colors.primary};
    transition: background 0.3s ease 0.1s;
  }
  &:after {
    transform: scale(1.5);
    transition: transform 0.5s ease 0.15s;
  }
`;

const SunMoon = styled.div<{ isDark: boolean }>`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  position: relative;
  box-shadow: inset 16px -16px 0 0 ${(p) => p.theme.colors.primary};
  transform: scale(1) rotate(-2deg);
  transition: box-shadow 0.5s ease 0s, transform 0.4s;
  &:before {
    content: '';
    width: inherit;
    height: inherit;
    border-radius: inherit;
    position: absolute;
    left: 0;
    top: 0;
    transition: ${(p) => p.theme.colorModeTransition};
  }
  &:after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 ${(p) => p.theme.colors.primary},
      0 23px 0 ${(p) => p.theme.colors.primary},
      23px 0 0 ${(p) => p.theme.colors.primary},
      -23px 0 0 ${(p) => p.theme.colors.primary},
      15px 15px 0 ${(p) => p.theme.colors.primary},
      -15px 15px 0 ${(p) => p.theme.colors.primary},
      15px -15px 0 ${(p) => p.theme.colors.primary},
      -15px -15px 0 ${(p) => p.theme.colors.primary};
    transform: scale(0);
    transition: all 0.3s ease;
  }

  ${(p) => (p.isDark ? MoonMusk : '')}
`;

export default DarkModeToggle;
