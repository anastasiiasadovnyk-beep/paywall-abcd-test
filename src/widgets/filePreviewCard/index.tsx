import type { FC } from 'react';

import folderWithFile from '@/shared/ui/assets/folder-with-file.svg';

import {
  FileFormatBadge,
  FileName,
  Illustration,
  PageLine,
  PageLines,
  PagePreview,
  PreviewContainer,
  PreviewTitle,
} from './styles';

/**
 * Preview of the visitor's processed document. The real funnel renders the
 * uploaded file here; the design uses a document illustration from the
 * PDFLeader graphic set as a stand-in.
 */
export const FilePreviewCard: FC = () => {
  return (
    <PreviewContainer data-testid="file-preview">
      <PreviewTitle>
        <FileName>Document.pdf</FileName>
      </PreviewTitle>
      <PagePreview>
        <FileFormatBadge>PDF</FileFormatBadge>
        <PageLines>
          <PageLine $width="82%" />
          <PageLine $width="100%" />
          <PageLine $width="94%" />
          <PageLine $width="66%" />
        </PageLines>
        <Illustration src={folderWithFile} alt="" role="presentation" />
        <PageLines>
          <PageLine $width="100%" />
          <PageLine $width="88%" />
          <PageLine $width="72%" />
        </PageLines>
      </PagePreview>
    </PreviewContainer>
  );
};
