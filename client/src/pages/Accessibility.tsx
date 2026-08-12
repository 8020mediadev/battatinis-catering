import LegalPage from "@/components/LegalPage";

const CONTACT_EMAIL = "battatiniscatering@yahoo.com";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif font-bold text-[#444444] pt-6">{children}</h2>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default function Accessibility() {
  return (
    <LegalPage
      title="Website Accessibility Policy"
      updated="Last updated: August 2026"
    >
      <p>
        This is an accessibility statement from Battatini's Family Style
        Catering. We are committed to making our website usable by as many
        people as possible, including visitors who rely on assistive technology.
      </p>

      <H2>Measures to Support Accessibility</H2>
      <p>
        Battatini's Catering takes the following measures to ensure the
        accessibility of our website:
      </p>
      <Bullets
        items={[
          "Assign clear accessibility goals and responsibilities within our website management team.",
          "Review accessibility as part of any significant website update.",
          "Provide an accessible point of contact for reporting barriers.",
        ]}
      />

      <H2>Conformance Status</H2>
      <p>
        The{" "}
        <a
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#850100] font-semibold hover:underline"
        >
          Web Content Accessibility Guidelines (WCAG)
        </a>{" "}
        define requirements for designers and developers to improve
        accessibility for people with disabilities. It defines three levels of
        conformance: Level A, Level AA, and Level AAA. This website is{" "}
        <strong>partially conformant with WCAG 2.1 Level AA</strong>. Partially
        conformant means that some parts of the content do not fully conform to
        the accessibility standard.
      </p>

      <H2>Feedback</H2>
      <p>
        We welcome your feedback on the accessibility of this website. If you
        encounter an accessibility barrier, please let us know:
      </p>
      <Bullets
        items={[
          `Email: ${CONTACT_EMAIL}`,
          "Phone: 585-544-FOOD (3663)",
          "Mail: 2305 Portland Ave, Rochester, NY 14617",
          "Facebook: facebook.com/battatiniscatering",
          "Instagram: instagram.com/battatiniscatering",
        ]}
      />
      <p>We try to respond to accessibility feedback within 30 business days.</p>

      <H2>Compatibility With Browsers and Assistive Technology</H2>
      <p>This website is designed to be compatible with current versions of:</p>
      <Bullets
        items={[
          "Google Chrome, Firefox, Safari, Edge, and Opera",
          "Windows and macOS screen readers",
          "iOS and Android mobile browsers and screen readers",
        ]}
      />
      <p>This website is not fully compatible with:</p>
      <Bullets
        items={[
          "Browsers older than three major versions",
          "Mobile operating systems older than five years",
        ]}
      />

      <H2>Technical Specifications</H2>
      <p>
        Accessibility of this website relies on the following technologies to
        work with the particular combination of web browser and any assistive
        technologies or plugins installed on your computer:
      </p>
      <Bullets items={["HTML", "CSS", "JavaScript"]} />
      <p>
        These technologies are relied upon for conformance with the
        accessibility standards used.
      </p>

      <H2>Limitations and Alternatives</H2>
      <p>
        Despite our best efforts to ensure accessibility of this website, there
        may be some limitations. Below is a description of known limitations.
        Please contact us if you observe an issue not listed here:
      </p>
      <Bullets
        items={[
          "Some uploaded images may not have complete text alternatives. We add and improve alternative text on an ongoing basis.",
          "Third-party embedded content, such as our Google Reviews and Instagram feeds, is controlled by the provider and may not fully conform.",
          "Documents and menus provided as images or PDFs may not be available in a fully accessible text format. Call us and we will read menu details to you directly.",
        ]}
      />

      <H2>Assessment Approach</H2>
      <p>
        Battatini's Catering assessed the accessibility of this website by the
        following approaches:
      </p>
      <Bullets
        items={[
          "Self-evaluation against WCAG 2.1 Level AA criteria",
          "Ongoing review during website updates",
          "Responding to visitor feedback as it is received",
        ]}
      />

      <H2>Formal Complaints</H2>
      <p>
        If you wish to submit a formal complaint regarding website
        accessibility, please email{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-[#850100] font-semibold hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        . Please allow 30–60 business days for a reply.
      </p>

      <H2>Formal Approval of This Accessibility Statement</H2>
      <p>
        This accessibility statement is approved by Battatini's Family Style
        Catering, Website Management Team.
      </p>
    </LegalPage>
  );
}
