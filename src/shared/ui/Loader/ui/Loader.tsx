import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('lds-ring', {}, [className as string])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
