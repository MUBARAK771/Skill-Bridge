"use client";

// import LandingPageLayout from "@/components/landing-page/landing-page-layout";
import {
  ShieldCheck,
  Database,
  FileText,
  UserCheck,
  Lock,
  Mail,
  Globe,
  Scale,
  Clock,
  Baby,
  RefreshCw,
  Share2,
} from "lucide-react";
import { useEffect, useState } from "react";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

const SECTIONS = [
  { id: "overview", label: "Overview", icon: ShieldCheck },
  { id: "what-we-collect", label: "What We Collect", icon: Database },
  { id: "how-we-use-data", label: "How We Use Data", icon: FileText },
  { id: "sharing-data", label: "Sharing Your Data", icon: Share2 },
  { id: "cross-border-transfer", label: "Cross-Border Transfer", icon: Globe },
  { id: "rights", label: "Your Rights", icon: Scale },
  { id: "data-retention", label: "Data Retention", icon: Clock },
  { id: "data-security", label: "Data Security", icon: Lock },
  { id: "children-data", label: "Children's Data", icon: Baby },
  { id: "dpo", label: "Data Protection Officer", icon: UserCheck },
  { id: "policy-updates", label: "Policy Updates", icon: RefreshCw },
  { id: "contact-us", label: "Contact Us", icon: Mail },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      },
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // <LandingPageLayout>
    <div className="m-2">
      <div
        className="max-w-7xl mx-auto h-[260px] sm:h-[320px] md:h-[400px] rounded-2xl w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("/assets/images/privacy.jpg")',
        }}
      >
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center px-4">
          Privacy & Compliance Policy
        </h1>
      </div>

      <div
        className="flex min-h-screen mx-4 md:mx-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Sidebar */}
        <aside className="hidden lg:block w-[310px] px-4 py-6 sticky top-10 h-screen overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {SECTIONS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`
                        flex items-center gap-3 px-3 py-2 rounded-md transition
                        ${
                          isActive
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        }
                    `}
                >
                  <Icon
                    size={18}
                    className={isActive ? "text-blue-600" : "text-gray-400"}
                  />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 md:px-8 lg:px-10 py-8 space-y-14 scroll-smooth">
          <Section id="overview" title="Introduction and Acceptance of Terms">
            <p>
              These Terms of Use ("Terms") constitute a legally binding
              agreement between you ("User", "you", or "your") and Tal Tech Nova
              Limited, a company registered under the laws of Nigeria, operating
              the Complier compliance technology platform ("Complier", "the
              Platform", "we", "us", or "our").{" "}
            </p>
            <p>
              Our registered office and principal place of business details are
              available upon request at hello@usecomplier.com.
            </p>
            <p>
              By accessing, registering on, subscribing to, or using the
              Complier platform in any capacity, you acknowledge that you have
              read, understood, and agree to be bound by these Terms in their
              entirety. If you do not agree to these Terms, you must immediately
              discontinue your use of the Platform
            </p>
            <div>
              <p>
                These Terms apply to all users of the Platform, including free
                trial users, individual subscribers, and corporate account
                holders.
              </p>
            </div>
          </Section>

          <Section
            id="what-we-collect"
            title="Nature of the Platform and Services"
          >
            <p>
              Complier is a technology platform owned and operated by Tal Tech
              Nova Limited. The Platform provides compliance management tools,
              task tracking, document management, regulatory checklists, and
              access to qualified compliance professionals ("Admin
              Professionals" or "Admins"). Complier is NOT any of the following:
            </p>
            <ul className="list-disc pl-5 space-y-1 mx-6">
              <li>A law firm or legal services provider;</li>
              <li>A professional services firm or accountancy practice;</li>
              <li>A regulatory body or government agency;</li>
              <li>A guarantor of regulatory compliance outcomes.</li>
            </ul>

            <p>
              Complier operates as a technology intermediary that facilitates
              the delivery of compliance-related services by recruiting,
              onboarding, and deploying qualified professionals to carry out
              compliance tasks on behalf of users through the Platform. The
              professional relationship in respect of any task is between the
              user and the assigned Admin Professional, facilitated through our
              Platform infrastructure.
            </p>
            <p>
              Nothing on the Platform constitutes legal advice, regulatory
              advice, financial advice, or any other form of professional advice
              unless expressly delivered by a verified qualified professional
              engaged through the Platform under their own professional
              obligations.
            </p>

            <div>
              <h1 className="font-bold text-black text-lg">
                {" "}
                Account Registration and User Obligations
              </h1>
              <p className="mb-8 mt-5">
                To access the full features of the Platform, you must create an
                account and provide accurate, current, and complete information.
                You agree to:
              </p>
              <ul className="list-disc pl-5 space-y-1 mx-6">
                <li>
                  {" "}
                  Provide truthful and accurate registration details at all
                  times;
                </li>
                <li>Promptly update your information if any details change;</li>
                <li>
                  Keep your login credentials confidential and not share them
                  with third parties;
                </li>
                <li>
                  Notify us immediately at hello@usecomplier.com if you suspect
                  unauthorised access to your account;
                </li>
                <li>
                  {" "}
                  Accept full responsibility for all activity that occurs under
                  your account.
                </li>
              </ul>
              <p>
                Tal Tech Nova Limited reserves the right to suspend or terminate
                any account where we reasonably suspect that registration
                information is false, incomplete, or misleading, or where
                account activity violates these Terms.
              </p>
            </div>
          </Section>

          <Section
            id="how-we-use-data"
            title="Subscriptions, Fees, and Payment"
          >
            <h1 className="font-bold text-black text-lg">
              {" "}
              Subscription Fees and Auto-Renewal
            </h1>
            <p>
              Access to the Platform is offered on a subscription basis.
              Subscription fees are due and payable in advance in accordance
              with the pricing plan selected at the time of registration or
              renewal.
            </p>
            <p>
              By subscribing, you authorise Tal Tech Nova Limited and our
              authorised payment processors to charge the applicable fees to
              your designated payment method. Payments are processed securely
              through our authorised third-party payment processors.
            </p>
            <p>
              Unless cancelled before the applicable renewal date, subscriptions
              may automatically renew for successive subscription periods, and
              the applicable renewal fees will be charged to your designated
              payment method.{" "}
            </p>

            <div>
              <h1 className="font-bold text-black text-lg">
                Non-Refundability of Subscription Fees
              </h1>
              <p>
                All subscription fees paid to Tal Tech Nova Limited are
                non-refundable, except as expressly provided in these Terms or
                as required by applicable consumer protection law.
              </p>
              <p className="mt-6">
                By subscribing to the Platform, you acknowledge and agree that
                subscription fees are charged in consideration of access to the
                Platform, its infrastructure and ongoing compliance management
                features, and that value is provided from the commencement of
                the subscription period.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-black text-lg">
                Refund Policy for Specific Compliance Tasks
              </h1>
              <p>
                Notwithstanding Clause on non-refundability of subscription
                fees, Tal Tech Nova Limited may, subject to these terms,
                consider a refund of fees paid in respect of a specific
                compliance task, subject to all of the following conditions
                being satisfied: <br />
                No action whatsoever has been taken by any Admin Professional
                assigned to the task, including but not limited to review,
                preparation, correspondence, filing, or any preliminary work;
              </p>
              <p className="mt-6">
                The refund request is submitted in writing to
                hello@usecomplier.com within fourteen (14) calendar days of
                payment confirmation;
              </p>
              <p className="mt-6">
                The request is accompanied by the relevant transaction reference
                and the basis of the refund request; The task has not been
                marked as "In Progress" or "Completed" on your platform.
              </p>
              <p className="mt-6">
                Refund requests submitted after the 14-day window, or in respect
                of tasks where any action has been taken, shall not be
                entertained. Tal Tech Nova Limited's determination on all refund
                requests shall me made in accordance with these Terms.
              </p>
              <h1 className="font-bold text-black text-lg mt-6">
                Price Changes
              </h1>
              <p className="mt-2">
                Tal Tech Nova Limited reserves the right to modify subscription pricing at any time. Where we intend to increase fees applicable to an existing subscription, we will provide no less than thirty (30) days' written notice to the email address associated with your account. Continued use of the Platform after the effective date of a price change constitutes acceptance of the revised fees.
              </p>
              <h1 className="font-bold text-black text-lg mt-6">
                Taxes
              </h1>
              <p>All fees are exclusive of applicable taxes, levies, or duties imposed by taxing authorities. You are solely responsible for the payment of all such taxes arising from your subscription or use of the Platform.
</p>
            </div>
          </Section>
          <Section id="sharing-data" title="Processing Times and Regulatory Timelines">
            <p>
              All processing times communicated on the Platform, in any correspondence, or through any Admin Professional are estimates only and do not constitute guarantees or representations of time of completion.
            </p>
            <p>
                Compliance tasks are often subject to the processing timelines, procedures, and discretion of relevant regulatory authorities, government agencies, and third-party bodies. Tal Tech Nova Limited and its Admin Professionals have no control over the timelines of such external bodies. Accordingly:
            </p>
            <div>
              <ul className="list-disc pl-5 space-y-1 mx-6">
                <li>
                  Estimated timelines may be extended due to regulatory backlog, changes in government policy, requests for additional information, or other factors outside our control;
                </li>
                <li>
                  Tal Tech Nova Limited shall not be liable for any loss, damage, cost, or consequence arising from delays attributable to a regulator or external authority;
                </li>
                <li>
                  Users are advised to plan ahead and not rely on estimated timelines for critical business deadlines without appropriate contingency.
                </li>
              </ul>
              <p className="mt-8">Where a regulatory authority returns a compliance task for correction, supplementary information, or re-submission, additional fees may apply.</p>
            </div>
          </Section>

          <Section
            id="cross-border-transfer"
            title="Admin Professionals and Professional Vetting"
          >
            <p>
              Tal Tech Nova Limited recruits and onboards qualified professionals to serve as Admin Professionals on the Platform. These individuals carry out compliance tasks assigned by users through the Platform. 
            </p>

            <p>
              Users who wish to verify the credentials, qualifications, or profile of an assigned Admin Professional may submit a vetting request by emailing hello@usecomplier.com. Vetting requests will be responded to within a reasonable time. Availability of profile information may be subject to privacy and data protection obligations.
            </p>
            <p>
                Tal Tech Nova Limited reserves the right to reassign Admin Professionals to tasks at its discretion, including in cases of unavailability, or quality concerns.
            </p>
          </Section>

          <Section id="rights" title="Compliance Dashboard, Checklist Limitations, and Professional Advice">
            <p>
The compliance checklist and dashboard items presented to users on the Platform are generated based on information provided by the user, the nature of their business, applicable regulations, and the knowledge base maintained by Tal Tech Nova Limited. While we endeavour to provide as comprehensive and detailed a compliance checklist as possible, you expressly acknowledge and agree that:            </p>

            <ul className="list-disc pl-5 space-y-1 mx-6">
              <li>
                The compliance items displayed on your dashboard do not constitute an exhaustive or definitive list of all regulatory or legal obligations applicable to your business;
              </li>
              <li>
                Regulations change frequently and may not be immediately reflected on the Platform;
              </li>
              <li>
                The Platform's checklist is a facilitative tool and not a substitute for bespoke professional or legal advice tailored to your specific circumstances;
              </li>
              <li>
                Industry-specific, jurisdictional, or niche compliance requirements may not be fully captured by the Platform.
              </li>
            </ul>
            <p>
                Tal Tech Nova Limited strongly encourages all users to engage a qualified legal or compliance professional as a secondary check for any compliance requirements applicable to their business beyond those shown on the Platform. 
            </p>
            <p>
                To assist with this, users may access the "Speak to a Lawyer" function available on the dashboard, which facilitates a connection with an independent legal professional. Advice provided through this channel is subject to separate terms and conditions applicable to that engagement.
            </p>
            <p>
                Tal Tech Nova Limited accepts no liability for compliance failures arising from items not captured on a user's dashboard, regardless of whether such items would reasonably have been expected to appear.
            </p>
          </Section>

          <Section id="data-retention" title="Limitation of Liability and Indemnity">
            <h1 className="font-bold text-black text-lg" >No Indemnity by Tal Tech Nova Limited</h1>
            <p>
             Tal Tech Nova Limited does not assume responsibility for and shall not be liable for any user for any loss, damage, penalty, fine, regulatory sanction, or adverse consequence of any nature, whether direct, indirect, consequential, or otherwise, arising from:
            </p>

            <ul className="list-disc pl-5 space-y-1 mx-6">
              <li>
                A user's failure or refusal to take action as recommended, communicated, or facilitated by the Platform or an Admin Professional;
              </li>
              <li>
                A compliance item or obligation that is not captured on, or is omitted from, the user's compliance dashboard;
              </li>
              <li>
                Regulatory changes or updates that are not yet reflected on the Platform;
              </li>
              <li>
                Decisions made or not made by the user in reliance on, or in disregard of, information provided on the Platform;
              </li>
              <li>
                Business losses arising from compliance failures, regulatory enforcement, or third-party claims.
              </li>
            </ul>
          </Section>
                <div>
                    <h1 className="font-bold text-black text-lg" >General Limitation of Liability</h1>
            <p className="text-gray-600">
             To the fullest extent permitted by applicable law, Tal Tech Nova Limited's total aggregate liability to any user in respect of any claim arising out of or in connection with these Terms or the use of the Platform shall not exceed the total subscription fees paid by the affected user in the twelve (12) months immediately preceding the event giving rise to the claim.
            </p>
            <p className="text-gray-600 mt-8">
                Tal Tech Nova Limited shall not be liable for any indirect, incidental, special, punitive, exemplary or consequential damages, including loss of profits, loss of revenue, loss of business opportunities, loss of data, business interruption, reputational damage, or any regulatory penalties, regardless of whether such damages were foreseeable or Tal Tech Nova Limited was advised of the possibility of such damages.
            </p>
                </div>
                <div>
                    <h1 className="font-bold text-black text-lg" >User Indemnity</h1>
            <p className="text-gray-600">
You agree to indemnify, defend, and hold harmless Tal Tech Nova Limited, its directors, officers, employees, Admin Professionals, agents, contractors, and successors from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising from:
            </p>
                    <ul className="list-disc pl-5 space-y-1 mx-6">
              <li>
               Your breach of these Terms;
              </li>
              <li>
                Your unlawful use or misuse of the Platform;
              </li>
              <li>
                Any content or information you submit to the Platform that is false, inaccurate, misleading or unlawful;
              </li>
              <li>
                Any third-party claim arising from your business operations, regulatory non-compliance or violation of applicable laws.    
              </li>
            </ul>
                </div>
          <Section id="data-security" title="Disclaimer of Warranties">
            <p>
              The Platform and all services provided through it are offered on an "as is" and "as available" basis without any express or implied warranties of any kind, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, completeness, reliability, availability, title, or non-infringement. Tal Tech Nova Limited does not warrant that:
            </p>

            <ul className="list-disc pl-5 space-y-1 mx-6">
              <li>
                The Platform will operate uninterrupted, error-free, or free from viruses or other harmful components;
              </li>
              <li>Any compliance checklist or dashboard output will be accurate, complete, or up to date at the time of access;</li>
              <li>
                The Platform will meet your specific compliance, regulatory, legal or business requirements;
              </li>
              <li>Any particular regulatory approval, filing outcome, legal compliance status or other specific result will be achieved through use of the Platform.
              </li>
            </ul>
          </Section>

          <Section id="children-data" title="Data Retention, Document Storage, and Privacy">
            <div>
                    <h1 className="font-bold text-black text-lg" >Document Retention Period</h1>
            <p className="text-gray-600 ">
Documents, records, correspondence, and other materials uploaded to or generated on the Platform in connection with a compliance task are stored on the Platform for a period of one (1) year from the date the relevant action or task is completed or closed on the Platform.
            </p>
            <p className="text-gray-600 mt-8">
Upon expiry of this one year  retention window, all associated documents and materials are permanently and irreversibly deleted from our systems in accordance with Tal Tech Nova Limited's Data Retention Policy. Users are strongly advised to download and retain copies of all documents and records prior to the expiry of this period. Tal Tech Nova Limited shall not be held responsible for any loss arising from the deletion of documents in accordance with this policy.            </p>
                </div>
               <h1 className="font-bold text-black text-lg" >Privacy</h1> 
            <p>
              Tal Tech Nova Limited processes personal data in accordance with its Privacy Policy, which is incorporated into these Terms by reference and available on the Platform and at hello@usecomplier.com. By using the Platform, you consent to the collection, processing, and storage of your personal data as described in the Privacy Policy.
            </p>
            <p>
                We implement industry-standard security measures to protect your data; however, no electronic system is entirely secure, and Tal Tech Nova Limited cannot guarantee absolute security of data transmitted to or from the Platform.
            </p>
             <h1 className="font-bold text-black text-lg" >Confidentiality of Platform Communications</h1>
             <p>
                All communications, documents, and information shared on the Platform in connection with a compliance task are treated as confidential by Tal Tech Nova Limited and its Admin Professionals. Such information will not be disclosed to third parties except where required by law, regulatory obligation, or with your express consent.
             </p>
          </Section>

          <Section id="dpo" title="Intellectual Property Rights">
            <p>
              All content on the Platform, including but not limited to the Complier brand, logo, name, trade marks, software, databases, compliance frameworks, templates, checklists, user interface design, and all underlying technology, are the exclusive intellectual property of Tal Tech Nova Limited and are protected under applicable intellectual property laws.
            </p>
            <p className="mb-8">
Users are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the <br /> Platform solely for their internal compliance management purposes in accordance with these Terms. No user may:            </p>
            <ul className="list-disc pl-5 space-y-1 mx-6">
                <li>
                 Copy, reproduce, reverse-engineer, decompile, or create derivative works from any part of the Platform;
                </li>

                <li>
                  Use the Complier brand, name, logos, or trade marks without prior written consent from Tal Tech Nova Limited;
                </li>
                <li>
                    Redistribute, sell, sublicence, or commercially exploit any content or functionality of the Platform;
                </li>
                <li>
                    Remove, alter, or obscure any proprietary notices or intellectual property markings on the Platform. 
                </li>
                <li>
                    Use any automated means, bots, scrapers or similar technology to acces or extract data from the Platform.
                </li>
              </ul>
              <p>
                Any content submitted by users to the Platform ("User Content") remains the intellectual property of the user; however, by submitting such content, you grant Tal Tech Nova Limited a non-exclusive, royalty-free licence to use such content to the extent necessary to deliver the services under these Terms.
              </p>
          </Section>

          <Section id="policy-updates" title="Acceptable Use Policy">
            <p>
              You agree to use the Platform only for lawful purposes and in accordance with these Terms. You must not use the Platform to:
            </p>
             <ul className="list-disc pl-5 space-y-1 mx-6">
                <li>
                 Submit false, misleading, or fraudulent information in connection with any compliance task;
                </li>

                <li>
                  Engage in any activity that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable;
                </li>
                <li>
                   Attempt to gain unauthorised access to any part of the Platform, its systems, or the accounts of other users;
                </li>
                <li>
                   Interfere with or disrupt the integrity, performance, or security of the Platform;
                </li>
                <li>
                    Engage in any conduct that could bring Tal Tech Nova Limited or the Complier brand into disrepute.
                </li>
              </ul>
              <p>
                Tal Tech Nova Limited reserves the right to suspend or permanently terminate access to the Platform for any user who breaches this Acceptable Use Policy, without notice and without refund of any subscription fees.
              </p>
          </Section>
         <Section id="policy-updates" title="Suspension, Termination, and Account Closure">
            <p>
              Tal Tech Nova Limited reserves the right, at its sole discretion, to suspend, restrict, or terminate any user account or access to the Platform, with or without notice, in the following circumstances:
            </p>
             <ul className="list-disc pl-5 space-y-1 mx-6">
                <li>
                 Breach of any provision of these Terms;
                </li>

                <li>
                  Non-payment of subscription fees;
                </li>
                <li>
                   Fraudulent, abusive, or unlawful use of the Platform;
                </li>
                <li>
                   Provision of false or misleading information during registration or in connection with a compliance task;
                </li>
                <li>
                    Any conduct that Tal Tech Nova Limited reasonably determines to be harmful to the Platform, other users, or third parties.
                </li>
                <li>
                    suspension or termination is necessary to comply with applicable law, regulatory obligations, or lawful governmental requests .
                </li>
    
              </ul>
              <p>
Upon termination or expiry of a subscription, your access and use of the Platform will cease immediately. You are advised to download all documents and records prior to account closure. Tal Tech Nova Limited is not obligated to retain any user data following account termination beyond what is required by law.  </p>
<p>Users who wish to voluntarily close their account may do so by contacting hello@usecomplier.com. Voluntary account closure does not entitle the user to a refund of any subscription fees already paid.</p>
          </Section>
          <Section id="contact-us" title="Third-Party Services and Links">
            <p>The Platform may contain links to third-party websites, services, or resources, including the "Speak to a Lawyer" feature which connects users with independent legal practitioners. Tal Tech Nova Limited has no control over such third-party services and is not responsible for their content, accuracy, availability, or compliance with applicable law.</p>
            <p>Any engagement with a third-party service provider through or in connection with the Platform, including any legal professional accessed via the dashboard, is governed by the terms and conditions of that third party. Tal Tech Nova Limited makes no representations or warranties in relation to any third-party service and shall not be liable for any loss or damage arising from your use of such services.</p>
          </Section>
          <Section id="contact-us" title="Modifications to the Platform and These Terms">
            <p>
              Tal Tech Nova Limited reserves the right to modify, update, suspend or discontinue any feature, functionality, or part of the Platform from time to time for operational, security, legal, technical or business reasons. Where reasonably practicable, we will endeavour to provide prior notice of material changes that may significantly affect the availability or functionality of the Platform. We will endeavour to minimise disruption to users; however, we accept no liability for any impact arising from such changes.
            </p>
            <p>
                These Terms of Use may be updated from time to time at Tal Tech Nova Limited's sole discretion. Where changes are material, we will provide reasonable notice to users by email to the address associated with your account or by a prominent notice on the Platform. Continued use of the Platform following the effective date of any amendment constitutes your acceptance of the revised Terms. Users are to review these Terms periodically to remain informed of any updates.
            </p>
          </Section>
          <Section id="contact-us" title="Governing Law and Dispute Resolution">
            <p>
            These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.
            </p>
            <p>
                In the event of any dispute arising out of or in connection with these Terms or the use of the Platform, the parties shall first attempt to resolve the matter amicably through good-faith negotiation. If the dispute cannot be resolved within thirty (30) days of written notice, he dispute shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Mediation Act 2023. The seat of arbitration shall be Lagos, Nigeria. 
            </p>
            <p>
                The arbitration shall be conducted by a sole arbitrator appointed by agreement of the parties or, failing such agreement, in accordance with the Arbitration and Mediation Act 2023. The language of the arbitration shall be English. The arbitral award shall be final and binding on the parties. <br />  
Nothing in this clause shall prevent either party from approaching a court of competent jurisdiction in Nigeria for the following purposes: 
            </p>
            <ul>
                <li className="list-disc pl-5 space-y-1 mx-6">
                    either party may refer the matter to the courts of competent jurisdiction in Tal Tech Nova Limited's jurisdiction of incorporation.
                </li>
            </ul>
            <p>
                Nothing in this clause prevents either party from seeking urgent or interim injunctive relief from a court of competent jurisdiction.
            </p>
          </Section>
          <Section id="contact-us" title="Force Majeure">
            <p>
              Tal Tech Nova Limited shall not be liable for any failure or delay in the performance of its obligations under these Terms to the extent such failure or delay is caused by circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemic, governmental action, regulatory changes, power outages, internet service disruptions, or cyberattacks.
            </p>
          </Section>
           <Section id="contact-us" title="Severability and Entire Agreement">
            <p>
If any provision of these Terms is found to be invalid, unenforceable, or contrary to applicable law by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions of these Terms shall continue in full force and effect.            </p>
<p>
    These Terms, together with the Privacy Policy and any applicable Order Form or Subscription Agreement, constitute the entire agreement between you and Tal Tech Nova Limited with respect to the Platform and supersede all prior agreements, representations, and understandings.
</p>
          </Section>
          <Section id="contact-us" title="Contact Us">
            <p>
              For all enquiries, complaints, refund requests, vetting requests, or notices under these Terms, please <br /> contact:
              <br />
              <br />
              Tal Tech Nova Limited
              <br />
              Operating as: Complier
              <br />
              Email:
              <a href="mailto:hello@usecomplier.com">hello@usecomplier.com</a>
              <br />
              Website:
              <a
                href="https://www.usecomplier.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.usecomplier.com
              </a>
              <br />
              Tal Tech Nova Limited aims to respond to all written enquiries within five (5) business days.
            </p>
          </Section>
        </main>
      </div>
    </div>
    // </LandingPageLayout>
  );
}
