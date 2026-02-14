import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Routine 25",
  description: "Terms and Conditions for Routine 25",
};

export default function TermsAndConditions() {
  return (
    <div className="mx-auto mt-20 max-w-3xl px-4 pb-20">
      <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">
        Terms and Conditions
      </h1>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        Last updated: February 12, 2025
      </p>

      <div className="mt-12 space-y-8 leading-7 tracking-tight">
        <section>
          <h2 className="text-xl font-semibold">1. Overview</h2>
          <p className="text-muted-foreground mt-2">
            Routine 25 (&quot;the App&quot;) is developed by Jason Ellington. This is an open-source
            hackathon project submitted to the Build with Opus 4.6 hackathon. It is not a production
            application and is not currently intended for commercial sale or distribution.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Use of the App</h2>
          <p className="text-muted-foreground mt-2">
            The App is available for testing via Apple TestFlight. By using the App, you acknowledge
            that it is a work in progress — features may be incomplete, unstable, or change without
            notice. The App is provided &quot;as is&quot; with no warranties of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. AI-Generated Content</h2>
          <p className="text-muted-foreground mt-2">
            The App uses artificial intelligence (Anthropic&apos;s Claude) to provide coaching
            suggestions and routine recommendations, and ElevenLabs for text-to-speech and voice
            conversation processing. User data sent to these services is governed by their respective
            privacy policies and is not used to train AI models. This content is for informational
            and motivational purposes only and should not be relied upon as professional health,
            medical, or wellness advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. No Payments</h2>
          <p className="text-muted-foreground mt-2">
            The App is currently free. There are no subscriptions, in-app purchases, or payment
            processing. This may change if the App moves to production in the future.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p className="text-muted-foreground mt-2">
            To the fullest extent permitted by law, Jason Ellington shall not be liable for any
            damages resulting from your use of the App. You use the App at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Open Source</h2>
          <p className="text-muted-foreground mt-2">
            The source code for Routine 25 is publicly available. You are welcome to view, fork, and
            learn from the code. Please respect the license terms of the repository.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Changes</h2>
          <p className="text-muted-foreground mt-2">
            These terms may be updated if the App moves to production. Any changes will be reflected
            by updating the date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Contact</h2>
          <p className="text-muted-foreground mt-2">
            If you have any questions, you can reach me at:
          </p>
          <p className="text-muted-foreground mt-2">
            Jason Ellington
            <br />
            Email: jason.t.ellington@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}
