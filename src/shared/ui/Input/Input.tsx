import { classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [dashPosition, setDashPosition] = useState(0);
  const dashRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      dashRef.current?.focus();
    }
  }, [autofocus]);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setDashPosition(e?.target?.selectionStart || 0);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setDashPosition(e.target.value.length);
  };
  return (
    <div className={classNames(cls.InputWrapper, {}, [className!])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.dashWrapper}>
        <input
          ref={dashRef}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
        {isFocused && (
          <span
            style={{ left: `${dashPosition * 9}px` }}
            className={cls.dash}
          />
        )}
      </div>
    </div>
  );
});

export default Input;
