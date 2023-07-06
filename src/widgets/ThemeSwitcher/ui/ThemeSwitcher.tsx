import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/light.svg';
import DarkIcon from 'shared/assets/icons/dark.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleThemeHandler } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleThemeHandler}
    >
      {theme === Theme.LIGHT ? (
        <DarkIcon width={20} height={20} fill="#D8D8D8" />
      ) : (
        <LightIcon width={20} height={20} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
