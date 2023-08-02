import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';
import SidebarItem from './SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = async () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () => SidebarItemsList.map((item) => (
      <SidebarItem
        key={item.path}
        item={item}
        collapsed={collapsed}
      />
    )),
    [collapsed],
  );

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className as string,
      ])}
    >
      <Button
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        data-testid="toggle-sidebar"
        onClick={onToggle}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {itemsList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});

export default Sidebar;
