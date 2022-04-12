import React, { useEffect } from 'react';
import { useColorMode } from 'theme-ui';
import styled from '@emotion/styled';
import { Theme } from '@styles/theme/theme';
import translations from '@translations/main.json';
import mediaQueries from '@styles/media';

const IconWrapper = styled.button<{ isDark: boolean }>`
  opacity: 0.5;
  position: relative;
  border-radius: 5px;
  transform: scale(0.8);
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
  ${mediaQueries.md} {
    transform: scale(1);
  }
`;

// This is based off a codepen! Much appreciated to: https://codepen.io/aaroniker/pen/KGpXZo
const MoonOrSun = styled.div<{ isDark: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${(p) => (p.isDark ? '4px' : '2px')} solid
    ${(p) => p.theme.colors.primary};
  background: ${(p) => p.theme.colors.primary};
  transform: scale(${(p) => (p.isDark ? 0.55 : 1)});
  transition: all 0.45s ease;
  overflow: ${(p) => (p.isDark ? 'visible' : 'hidden')};

  &::before {
    content: '';
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: 2px solid ${(p) => p.theme.colors.primary};
    border-radius: 50%;
    transform: translate(${(p) => (p.isDark ? '14px, -14px' : '0, 0')});
    opacity: ${(p) => (p.isDark ? 0 : 1)};
    transition: transform 0.45s ease;
  }

  &::after {
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
    transform: scale(${(p) => (p.isDark ? 1 : 0)});
    transition: all 0.35s ease;
  }
`;

const MoonMask = styled.div<{ isDark: boolean }>`
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: ${(p) => p.theme.colors.background};
  transform: translate(${(p) => (p.isDark ? '14px, -14px' : '0, 0')});
  opacity: ${(p) => (p.isDark ? 0 : 1)};
  transition: ${(p) => p.theme.colorModeTransition}, transform 0.45s ease;
`;

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
      <MoonOrSun isDark={isDark} />
      <MoonMask isDark={isDark} />
    </IconWrapper>
  );
};

export default DarkModeToggle;
