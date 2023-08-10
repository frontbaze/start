import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
    () => new Promise((resolve) => {
      setTimeout(
          // @ts-ignore
          // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
            () => resolve(import('./ArticleDetailsPage')),
            1500,
        );
    }),
);
