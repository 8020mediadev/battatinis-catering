import LegalPage from "@/components/LegalPage";

const CONTACT_EMAIL = "battatiniscatering@yahoo.com";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif font-bold text-[#444444] pt-6">{children}</h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-serif font-bold text-[#444444] pt-2">{children}</h3>;
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

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="Last updated: January 29, 2023">
      <p>
        This privacy notice for Battatini's Catering ("Company," "we," "us," or
        "our") describes how and why we might collect, store, use, and/or share
        ("process") your information when you use our services ("Services"),
        such as when you visit our website, or engage with us in other related
        ways including any sales, marketing, or events.
      </p>
      <p>
        <strong>Questions or concerns?</strong> Reading this privacy notice will
        help you understand your privacy rights and choices. If you do not agree
        with our policies and practices, please do not use our Services. If you
        still have any questions or concerns, please contact us at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-[#850100] font-semibold hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <H2>Summary of Key Points</H2>
      <p>
        <strong>What personal information do we process?</strong> When you
        visit, use, or navigate our Services, we may process personal
        information depending on how you interact with Battatini's Catering and
        the Services, the choices you make, and the products and features you
        use.
      </p>
      <p>
        <strong>Do we process any sensitive personal information?</strong> We do
        not process sensitive personal information.
      </p>
      <p>
        <strong>Do we receive any information from third parties?</strong> We may
        receive information from public databases, marketing partners, social
        media platforms, and other outside sources.
      </p>
      <p>
        <strong>How do we process your information?</strong> We process your
        information to provide, improve, and administer our Services,
        communicate with you, for security and fraud prevention, and to comply
        with law. We process your information only when we have a valid legal
        reason to do so.
      </p>
      <p>
        <strong>How do we keep your information safe?</strong> We have
        organizational and technical processes and procedures in place to
        protect your personal information. However, no electronic transmission
        over the internet or information storage technology can be guaranteed to
        be 100% secure.
      </p>

      <H2>1. What Information Do We Collect?</H2>
      <H3>Personal information you disclose to us</H3>
      <p>
        We collect personal information that you voluntarily provide to us when
        you express an interest in obtaining information about us or our products
        and Services, when you participate in activities on the Services, or
        otherwise when you contact us. The personal information we collect may
        include the following:
      </p>
      <Bullets
        items={[
          "Names",
          "Phone numbers",
          "Email addresses",
          "Contact or authentication data",
          "Contact preferences",
        ]}
      />
      <p>
        <strong>Sensitive Information.</strong> We do not process sensitive
        information. All personal information that you provide to us must be
        true, complete, and accurate, and you must notify us of any changes to
        such personal information.
      </p>

      <H3>Information automatically collected</H3>
      <p>
        Some information — such as your Internet Protocol (IP) address and/or
        browser and device characteristics — is collected automatically when you
        visit our Services. This information does not reveal your specific
        identity but may include device and usage information, such as your IP
        address, browser and device characteristics, operating system, language
        preferences, referring URLs, device name, country, location, and
        information about how and when you use our Services. This information is
        primarily needed to maintain the security and operation of our Services,
        and for our internal analytics and reporting purposes.
      </p>
      <Bullets
        items={[
          "Log and Usage Data — service-related, diagnostic, usage, and performance information our servers automatically collect.",
          "Device Data — information about the computer, phone, tablet, or other device you use to access the Services.",
          "Location Data — information about your device's location, which can be either precise or imprecise. You can opt out by disabling your Location setting on your device.",
        ]}
      />

      <H3>Information collected from other sources</H3>
      <p>
        In order to enhance our ability to provide relevant marketing, offers,
        and services to you and update our records, we may obtain information
        about you from other sources, such as public databases, joint marketing
        partners, affiliate programs, data providers, and from other third
        parties.
      </p>

      <H2>2. How Do We Process Your Information?</H2>
      <p>
        We process your personal information for a variety of reasons, depending
        on how you interact with our Services, including:
      </p>
      <Bullets
        items={[
          "To deliver and facilitate delivery of services to the user.",
          "To respond to user inquiries and offer support to users.",
          "To send administrative information to you.",
          "To fulfill and manage your orders.",
          "To request feedback.",
          "To send you marketing and promotional communications, in accordance with your marketing preferences.",
          "To post testimonials, which may contain personal information.",
          "To evaluate and improve our Services, products, marketing, and your experience.",
          "To identify usage trends.",
          "To determine the effectiveness of our marketing and promotional campaigns.",
        ]}
      />

      <H2>3. When and With Whom Do We Share Your Personal Information?</H2>
      <p>
        We may share your data with third-party vendors, service providers,
        contractors, or agents who perform services for us or on our behalf and
        require access to such information to do that work. The categories of
        third parties we may share personal information with are as follows:
      </p>
      <Bullets
        items={[
          "Ad Networks",
          "Website Hosting Service Providers",
          "Social Networks",
          "Data Analytics Services",
          "Communication & Collaboration Tools",
        ]}
      />
      <p>We also may need to share your personal information in the following situations:</p>
      <Bullets
        items={[
          "Business Transfers — in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",
          "Google Maps Platform APIs — we may share your information with certain Google Maps Platform APIs.",
        ]}
      />

      <H2>4. Do We Use Cookies and Other Tracking Technologies?</H2>
      <p>
        We may use cookies and similar tracking technologies to collect and
        store your information. Most web browsers are set to accept cookies by
        default. If you prefer, you can usually choose to set your browser to
        remove or reject cookies. If you choose to remove or reject cookies,
        this could affect certain features or services of our Services.
      </p>

      <H2>5. How Long Do We Keep Your Information?</H2>
      <p>
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this privacy notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). When we have no ongoing
        legitimate business need to process your personal information, we will
        either delete or anonymize such information.
      </p>

      <H2>6. How Do We Keep Your Information Safe?</H2>
      <p>
        We have implemented appropriate and reasonable technical and
        organizational security measures designed to protect the security of any
        personal information we process. However, despite our safeguards, no
        electronic transmission over the Internet or information storage
        technology can be guaranteed to be 100% secure. Although we will do our
        best to protect your personal information, transmission of personal
        information to and from our Services is at your own risk.
      </p>

      <H2>7. Do We Collect Information From Minors?</H2>
      <p>
        We do not knowingly solicit data from or market to children under 18
        years of age. By using the Services, you represent that you are at least
        18 or that you are the parent or guardian of such a minor and consent to
        such minor dependent's use of the Services. If you become aware of any
        data we may have collected from children under age 18, please contact us
        at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-[#850100] font-semibold hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <H2>8. What Are Your Privacy Rights?</H2>
      <p>
        Depending on where you are located geographically, the applicable
        privacy law may mean you have certain rights regarding your personal
        information. You may review, change, or terminate your account at any
        time.
      </p>
      <p>
        <strong>Withdrawing your consent:</strong> If we are relying on your
        consent to process your personal information, you have the right to
        withdraw your consent at any time by contacting us using the details
        provided below. However, this will not affect the lawfulness of the
        processing before its withdrawal.
      </p>
      <p>
        <strong>Opting out of marketing communications:</strong> You can
        unsubscribe from our marketing and promotional communications at any
        time by clicking the unsubscribe link in the emails we send, replying
        "STOP" or "UNSUBSCRIBE" to SMS messages, or by contacting us. We may
        still communicate with you regarding service-related messages.
      </p>

      <H2>9. Controls for Do-Not-Track Features</H2>
      <p>
        Most web browsers and some mobile operating systems include a
        Do-Not-Track ("DNT") feature you can activate to signal your privacy
        preference not to have data about your online browsing activities
        monitored and collected. At this stage, no uniform technology standard
        for recognizing and implementing DNT signals has been finalized. As
        such, we do not currently respond to DNT browser signals.
      </p>

      <H2>10. Do We Make Updates to This Notice?</H2>
      <p>
        Yes, we will update this notice as necessary to stay compliant with
        relevant laws. The updated version will be indicated by an updated
        "Last updated" date and will be effective as soon as it is accessible.
        We encourage you to review this privacy notice frequently.
      </p>

      <H2>11. How Can You Contact Us About This Notice?</H2>
      <p>
        If you have questions or comments about this notice, you may email us at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-[#850100] font-semibold hover:underline"
        >
          {CONTACT_EMAIL}
        </a>{" "}
        or call us at{" "}
        <a
          href="tel:5855443663"
          className="text-[#850100] font-semibold hover:underline"
        >
          585-544-FOOD (3663)
        </a>
        . You can also reach us by mail at 2305 Portland Ave, Rochester, NY
        14617. Please allow 30–90 days for a response.
      </p>

      <H2>12. How Can You Review, Update, or Delete Your Data?</H2>
      <p>
        Based on the applicable laws of your country, you may have the right to
        request access to the personal information we collect from you, change
        that information, or delete it. To request to review, update, or delete
        your personal information, please contact us at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-[#850100] font-semibold hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalPage>
  );
}
