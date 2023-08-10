import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    () => new Promise((resolve) => {
        setTimeout(
            // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
            // @ts-ignore
              () => resolve(import('./ArticlesPage')),
              1500,
          );
      }),
);
