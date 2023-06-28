function PrivacyPolicyDetail() {
  return (
    <div className="lg:px-60 font-oswald-light font-medium tracking-wide xs:px-10 flex flex-col gap-6 pt-24">
      <div className="flex flex-col gap-3">
        <div className="text-gray-400">Effective from 01 May 2023</div>
        <div>
          Thank you for using TokSot, a social network that respects your
          privacy. This Privacy Policy outlines how we collect, use, and protect
          your personal information.
        </div>
      </div>
      <div className="font-oswald">Types of data collected:</div>
      <ul className="list-disc pl-10 flex flex-col gap-6">
        <li>We collect the following types of data from our users:</li>
        <ul className="list-disc pl-6">
          <li>Personal Information:</li>
          <ol className="list-decimal pl-6">
            <li>Name</li>
            <li>Email</li>
            <li>Profile picture (optional)</li>
            <li>Date of birth (optional)</li>
            <li>Gender (optional)</li>
          </ol>
          <li>
            Usage Information: activity logs, device information, and browsing
            history.
          </li>
          <li>Location Information: GPS, Wi-Fi, and IP address.</li>
        </ul>
      </ul>
      <div className="font-oswald">How data is collected:</div>
      <ul className="list-disc pl-10 flex flex-col gap-6">
        <li>We collect data through the following means:</li>
        <ol className="list-decimal pl-6">
          <li>
            Directly from users during registration and through their use of our
            app.
          </li>
          <li>Indirectly through analytics providers.</li>
          <li>From cookies and similar tracking technologies.</li>
        </ol>
      </ul>
      <div className="font-oswald">Legal basis for collection:</div>
      <ul className="list-disc pl-6">
        <li>
          We collect your personal information with your consent or where it is
          necessary for the performance of a contract, to comply with legal
          obligations, or for our legitimate interests.
        </li>
      </ul>
      <div className="font-oswald">Specific purpose for data collection:</div>
      <ul className="list-disc pl-10">
        <li>We collect data for the following purposes:</li>
        <ul className="list-disc pl-10">
          <li>
            To provide and improve our services and personalize your experience.
          </li>
          <li>
            To communicate with you regarding our services, promotions, and
            other relevant information.
          </li>
          <li>
            To comply with legal obligations and prevent fraudulent activities
          </li>
        </ul>
      </ul>
      <div className="font-oswald">Type of personal information:</div>
      <ul className="list-disc pl-10">
        <li>
          We collect personal information such as name, email, phone number,
          profile picture, date of birth, and gender. We may also collect
          sensitive personal information, such as ethnicity or religious
          beliefs, with your explicit consent.
        </li>
      </ul>
      <div className="font-oswald">Cookies:</div>
      <ul className="list-disc pl-10">
        <li>
          We use cookies and similar tracking technologies to collect usage
          information and improve our services. Cookies are small files stored
          on your device that help us recognize your device and remember your
          preferences. You can manage your cookie preferences through your
          device settings.
        </li>
      </ul>
      <div className="font-oswald">No tracking in other apps and websites:</div>
      <ul className="list-disc pl-10">
        <li>
          We do not track your activity on other apps or websites. Our tracking
          and data collection are limited to the use of our app only.
        </li>
      </ul>
      <div className="font-oswald">
        Compliance with Indian IT act, GDPR, CCPA, and COPPA:
      </div>
      <ul className="list-disc pl-10">
        <li>
          We comply with Indian IT act, GDPR, CCPA, and COPPA. We respect your
          rights to access, rectify, delete, or restrict the processing of your
          personal information. You may also request a copy of your personal
          information or object to the processing of your data.
        </li>
      </ul>
      <div className="font-oswald">Data retention:</div>
      <ul className="list-disc pl-10">
        <li>
          We retain your personal information for as long as necessary to
          provide our services and comply with legal obligations. We may retain
          some information after you delete your account, such as logs and
          backups, for a limited period of time.
        </li>
      </ul>
      <div className="font-oswald">Data security:</div>
      <ul className="list-disc pl-10">
        <li>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. We use secure servers and
          encryption to protect your data. However, no security measures are
          100% foolproof, and we cannot guarantee the security of your data.
        </li>
      </ul>
      <div className="font-oswald">Third-party disclosure:</div>
      <ul className="list-disc pl-10">
        <li>
          We do not sell, rent, or share your personal information with third
          parties for their marketing purposes. We may share your data with
          third-party service providers who assist us in providing our services
          or with law enforcement agencies to comply with legal obligations.
        </li>
      </ul>
      <div className="font-oswald">Children's privacy:</div>
      <ul className="list-disc pl-10">
        <li>
          We do not knowingly collect personal information from children under
          the age of 13. If you are a parent or guardian and believe your child
          has provided us with personal information, please contact us
          immediately.
        </li>
      </ul>
      <div className="font-oswald">Cross-border data transfer:</div>
      <ul className="list-disc pl-10">
        <li>
          We may transfer your personal information to countries outside of your
          jurisdiction for processing and storage. We ensure that such transfers
          comply with applicable laws and regulations.
        </li>
      </ul>
      <div className="font-oswald">Opt-out:</div>
      <ul className="list-disc pl-10">
        <li>
          You may opt-out of receiving promotional emails or notifications from
          us by following the instructions in the email or notification.
        </li>
      </ul>
      <div className="font-oswald">Third-party links:</div>
      <ul className="list-disc pl-10">
        <li>
          Our services may contain links to third-party websites or services
          that are not owned or controlled by us. We are not responsible for the
          privacy practices or content of such third-party sites. We recommend
          that you review their privacy policies before providing them with any
          personal information.
        </li>
      </ul>
      <div className="font-oswald">Your rights:</div>
      <ul className="list-disc pl-10">
        <li>
          You have the right to access, rectify, delete, or restrict the
          processing of your personal information. You may also object to the
          processing of your data, or request a copy of your personal
          information. To exercise your rights, please contact us at
          <a href="mailto:contact@toksot.com">
            <span className="text-sky-500 hover:underline cursor-pointer">
              {" "}
              “contact@toksot.com”
            </span>
          </a>
          .
        </li>
      </ul>
      <div className="font-oswald">Complaints:</div>
      <ul className="list-disc pl-10">
        <li>
          If you believe that we have violated your privacy rights, you have the
          right to lodge a complaint with the relevant data protection
          authority.
        </li>
      </ul>
      <div className="font-oswald">Consent:</div>
      <ul className="list-disc pl-10">
        <li>
          By using our services, you consent to the collection, use, and
          disclosure of your personal information as described in this Privacy
          Policy.
        </li>
      </ul>
      <div className="font-oswald">Severability:</div>
      <ul className="list-disc pl-10">
        <li>
          If any provision of this Privacy Policy is found to be invalid,
          illegal, or unenforceable, the remaining provisions will remain in
          full force and effect.
        </li>
      </ul>
      <div className="font-oswald">Governing law:</div>
      <ul className="list-disc pl-10">
        <li>
          This Privacy Policy is governed by and construed in accordance with
          the laws of India. Any disputes arising under or in connection with
          this Privacy Policy shall be resolved through arbitration in
          accordance with the Indian Arbitration and Conciliation Act, 1996.
        </li>
      </ul>
      <div className="font-oswald">Entire agreement:</div>
      <ul className="list-disc pl-10">
        <li>
          This Privacy Policy constitutes the entire agreement between you and
          TokSot with respect to the collection, use, and disclosure of your
          personal information.
        </li>
      </ul>
      <div className="font-oswald">Changes to the privacy policy:</div>
      <ul className="list-disc pl-10">
        <li>
          We reserve the right to update or modify this Privacy Policy at any
          time. We will notify you of any material changes by posting a notice
          on our website or sending you an email. Your continued use of our
          services after such changes will constitute your acceptance of the new
          Privacy Policy.
        </li>
      </ul>
      <div className="font-oswald">Contact us:</div>
      <ul className="list-disc pl-10">
        <li>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please contact us at{" "}
          <a href="mailto:contact@toksot.com">
            <span className="text-sky-500 hover:underline cursor-pointer">
              “contact@toksot.com”
            </span>
            .
          </a>{" "}
          We will respond to your requests within a reasonable time frame.
        </li>
      </ul>
    </div>
  );
}

export default PrivacyPolicyDetail;
