import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Routine 25",
  description: "Privacy Policy for Routine 25",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto mt-20 max-w-3xl px-4 pb-20">
      <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        Last updated: February 14, 2026
      </p>

      <div className="mt-12 space-y-8 leading-7 tracking-tight">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="text-muted-foreground mt-2">
            Routine 25 (&quot;the App&quot;) is developed by Jason Ellington (&quot;I,&quot;
            &quot;me,&quot; or &quot;my&quot;). This is currently a hackathon project and is not a
            production application. This Privacy Policy explains how your information is handled when
            you use the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Data Collection</h2>
          <p className="text-muted-foreground mt-2">
            Routine 25 is in early development and distributed via Apple TestFlight for evaluation
            purposes only. I do not intentionally collect, store, sell, or distribute your personal
            data. The App interacts with third-party services (Anthropic&apos;s Claude and
            ElevenLabs) to provide coaching and voice features. User data sent to these services is
            governed by their respective privacy policies and is not used to train AI models.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Third-Party Services</h2>
          <p className="text-muted-foreground mt-2">
            The App may use the following third-party services:
          </p>
          <ul className="text-muted-foreground mt-2 list-inside list-disc space-y-1">
            <li>Apple TestFlight (for app distribution)</li>
            <li>Anthropic API (for AI coaching via Claude)</li>
            <li>ElevenLabs (for text-to-speech and voice conversation processing)</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            These services have their own privacy policies. I encourage you to review them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Children&apos;s Privacy</h2>
          <p className="text-muted-foreground mt-2">
            The App is not intended for children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Changes to This Policy</h2>
          <p className="text-muted-foreground mt-2">
            This policy may be updated if the App moves to production. Any changes will be reflected
            by updating the date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Contact</h2>
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
