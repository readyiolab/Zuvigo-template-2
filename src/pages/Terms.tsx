import { useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { FooterCTA } from "@/components/landing/FooterCTA";
import { Link } from "react-router-dom";

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-wide py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
           
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Zuvigo website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                2. Use License
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Zuvigo's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                3. Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zuvigo provides digital agency services including but not limited to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                <li>Website design and development</li>
                <li>Digital marketing and growth strategies</li>
                <li>Automation and system integration</li>
                <li>Analytics and performance optimization</li>
                <li>Content creation and social media management</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All services are provided subject to separate service agreements that will be executed between Zuvigo and the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                4. Intellectual Property Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The website and its original content, features, and functionality are owned by Zuvigo and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. All work created by Zuvigo for clients remains the property of the client upon full payment, unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                5. User Accounts
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                6. Payment Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms for services will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                <li>Payment schedules will be agreed upon before work commences</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are non-refundable unless otherwise stated in the service agreement</li>
                <li>We reserve the right to suspend services for non-payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                7. Prohibited Uses
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may not use our website or services:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                8. Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Zuvigo's website are provided on an 'as is' basis. Zuvigo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                9. Limitations of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Zuvigo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zuvigo's website, even if Zuvigo or a Zuvigo authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                10. Revisions and Errata
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Zuvigo's website could include technical, typographical, or photographic errors. Zuvigo does not warrant that any of the materials on its website are accurate, complete, or current. Zuvigo may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                11. Links to Third-Party Websites
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites or services that are not owned or controlled by Zuvigo. Zuvigo has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Zuvigo shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such content, goods, or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                12. Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                13. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which Zuvigo operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                14. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                15. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground font-medium">Zuvigo</p>
                <p className="text-muted-foreground">Email: <a href="mailto:hello@zuvigo.com" className="text-primary hover:underline">hello@zuvigo.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Terms;

