import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import Code from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((
    props: ArticleCodeBlockComponentProps,
) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
        <div
            className={classNames(cls.ArticleCodeBlockComponent, {}, [
                className,
            ])}
        // eslint-disable-next-line i18next/no-literal-string
        >
            <Code text={block.code} />
        </div>
    );
});

export default ArticleCodeBlockComponent;
