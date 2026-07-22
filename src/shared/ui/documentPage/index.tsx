import type { FC } from 'react';

import {
  DocBullet,
  DocBulletList,
  DocHeading,
  DocLink,
  DocLogosRow,
  DocLogo,
  DocMeta,
  DocParagraph,
  DocSectionTitle,
  DocTitle,
  Page,
} from './styles';

interface IDocumentPageProps {
  className?: string;
}

/**
 * Realistic miniature of the visitor's processed document (the
 * production funnel renders the real file preview here). Content is
 * generic placeholder text laid out like a typical PDF page.
 */
export const DocumentPage: FC<IDocumentPageProps> = ({ className }) => {
  return (
    <Page className={className} aria-hidden="true">
      <DocLogosRow>
        <DocLogo $tone="grey" />
        <DocLogo $tone="blue" />
        <DocLogo $tone="navy" />
        <DocLogo $tone="gold" />
      </DocLogosRow>
      <DocTitle>Questions &amp; Answers</DocTitle>
      <DocMeta>Version: October, 2026</DocMeta>
      <DocParagraph>
        This document provides answers to frequently asked questions. It is updated on a regular
        basis.
      </DocParagraph>
      <DocLink>Pre-registration, full registration, transportation, procedural issues</DocLink>
      <DocSectionTitle>General information</DocSectionTitle>
      <DocParagraph>
        The appointments are scheduled for everyone who has pre-registered. All persons who have
        pre-registered will be summoned to an appointment at the service, depending on the place
        of residence at the moment of pre-registration, as well as the type of procedure. This
        appointment is the next step for your application.
      </DocParagraph>
      <DocParagraph>
        The schedule for the appointments is available at the website of the service. The printed
        version is also available at all of the official sites. Please approach the staff to
        consult it. Reminders are sent for the appointments scheduled for the next two weeks.
      </DocParagraph>
      <DocParagraph>
        Along with your registration number, you will find the date, time and location of your
        appointment. When it is time for your appointment, you must come to the indicated office
        together with all your family members. Make sure to bring all your documents with you,
        including your card.
      </DocParagraph>
      <DocHeading>Registration, processing, notifications, documents</DocHeading>
      <DocParagraph>
        <b>Q1. Where do full registrations take place?</b>
      </DocParagraph>
      <DocParagraph>
        <b>A1.</b> The offices around the country, receiving pre-registered applicants for their
        full registration are:
      </DocParagraph>
      <DocBulletList>
        <DocBullet>
          The unit which will fully register relocation or family reunification cases of eligible
          applicants from the region starting from 26/9.
        </DocBullet>
        <DocBullet>
          The regional office, that fully registers relocation or family reunification cases of
          eligible applicants from some of the camps in the area.
        </DocBullet>
        <DocBullet>
          The regional office, that fully registers relocation or family reunification cases from
          some of the camps in the region.
        </DocBullet>
      </DocBulletList>
    </Page>
  );
};
