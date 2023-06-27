function PausedDetail() {
  return (
    <div className="lg:px-96 font-oswald font-medium tracking-wide xs:px-10 flex flex-col gap-6 pt-12">
      <div>
        TokSot reserves the right to temporarily pause any account that violates
        our community guidelines.
      </div>
      <div>
        Although the suspension/pause period is of 30 days, TokSot retains the
        right to extend or permanently delete the account in case the profile
        breaks our community guidelines to a certain extent.
      </div>
      <div>
        Here are the scenarios in which we reserve the right to pause your
        account:
      </div>
      <ul className="list-disc pl-6">
        <li>
          Violation of Terms of Service: Any user account found to be in
          violation of our Terms of Service will be subject to suspension. This
          includes actions such as engaging in illegal activities, promoting
          hate speech or violence, distributing explicit or harmful content, or
          any behavior that poses a threat to the safety and well-being of other
          users.
        </li>
        <li>
          Breach of Community Guidelines: Our community guidelines exist to
          foster a respectful and inclusive environment for all users. Any
          account that breaches these guidelines, including engaging in
          harassment, bullying, or any form of discriminatory behavior, may be
          suspended.
        </li>
        <li>
          Spamming and Misuse: Accounts that engage in spamming activities, such
          as sending unsolicited commercial messages or posting irrelevant or
          misleading content, may be subject to suspension. Additionally, any
          account found to be exploiting the platform for personal gain,
          including fraudulent activities or attempts to manipulate our systems,
          will be suspended.
        </li>
        <li>
          Impersonation or Unauthorized Use: Accounts that impersonate other
          individuals, organizations, or entities, or engage in unauthorized use
          of copyrighted materials, trademarks, or intellectual property, may
          face suspension till the case is reviewed and if the account is found
          to violating the guidelines will face permanent account deletion. We
          take intellectual property rights seriously and expect our users to
          respect these rights as well.
        </li>
        <li>
          Security Concerns: In cases where an account is compromised or poses a
          security risk to our platform or other users, we may pause the account
          to conclude to protect the overall security and integrity of our
          community.
        </li>
        <li>
          Reports: Constant reports on the account or its post may lead us to
          pause the account.
        </li>
      </ul>
      <div>
        To gain a comprehensive understanding of our community guidelines, we
        recommend reading our detailed guidelines.
      </div>
      <div>
        If you believe we have paused your account by mistake or you haven’t
        violated our community guidelines, you may contact us on
        <span className="text-sky-500">contact@toksot.com</span>
      </div>
    </div>
  );
}

export default PausedDetail;
