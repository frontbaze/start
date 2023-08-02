import {
  Mods,
  classNames,
} from 'shared/lib/classNames/classNames';
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
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [dashPosition, setDashPosition] = useState(0);
  const dashRef = useRef<HTMLInputElement>(null);

  const isDashVisible = isFocused && !readonly;

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

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    onChange?.(e.target.value);
    setDashPosition(e.target.value.length);
  };
  return (
    <div
      className={classNames(cls.InputWrapper, {}, [
        className!,
      ])}
    >
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
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
          readOnly={readonly}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
        {isDashVisible && (
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
