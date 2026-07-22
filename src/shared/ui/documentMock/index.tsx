import type { FC } from 'react';

import { DocLine, DocLines, DocPage, DocTitleLine } from './styles';

interface IDocumentMockProps {
  className?: string;
}

/**
 * CSS-drawn stand-in for the visitor's uploaded document (the production
 * funnel renders the real file preview here).
 */
export const DocumentMock: FC<IDocumentMockProps> = ({ className }) => {
  return (
    <DocPage className={className}>
      <DocTitleLine />
      <DocLines>
        <DocLine $width="100%" />
        <DocLine $width="92%" />
        <DocLine $width="97%" />
        <DocLine $width="72%" />
      </DocLines>
      <DocLines>
        <DocLine $width="96%" />
        <DocLine $width="100%" />
        <DocLine $width="84%" />
      </DocLines>
    </DocPage>
  );
};
