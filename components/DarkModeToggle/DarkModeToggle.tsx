import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styled from '@emotion/styled';
import { Theme } from '@styles/theme/theme';
import translations from '@translations/main.json';
import mediaQueries from '@styles/media';
import { css, Theme as ThemeType } from '@emotion/react';
import { gTagEvent } from '@utils/gtag';

export const DarkModeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === Theme.DARK;

  const toggleColorMode = (event: React.MouseEvent) => {
    event.preventDefault();
    const newTheme = isDark ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);

    gTagEvent({
      action: 'Dark mode toggle change',
      category: 'Theme Change',
      label: newTheme,
    });
  };

  const accessibilityInfo = isDark
    ? translations.accessibility.darkModeToggle.dark
    : translations.accessibility.darkModeToggle.light;

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <IconWrapper
      isDark={isDark}
      onClick={toggleColorMode}
      aria-label={accessibilityInfo}
      title={accessibilityInfo}
    >
      <input type="checkbox" checked={isDark} readOnly />
      <SunMoon isDark={isDark} />
    </IconWrapper>
  );
};

// Many thanks to: https://codepen.io/aaroniker/pen/KGpXZo
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

const IconWrapper = styled.label<{ isDark: boolean }>`
  padding: 2px;
  opacity: 0.5;
  transform: scale(0.7);
  cursor: pointer;
  &:hover {
    opacity: 1;
  }

  input {
    display: none;
    &:checked + div {
      ${MoonMusk}
    }
  }

  ${mediaQueries.md} {
    transform: scale(0.8);
    display: flex;
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
`;

export default DarkModeToggle;
