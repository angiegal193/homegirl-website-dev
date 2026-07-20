import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import ResponsivePage from "@/components/ResponsivePage/ResponsivePage";
import MobileHomepage from "@/components/MobileHomepage/MobileHomepage";

export default function Home() {
  return (
    <ResponsivePage desktop={<main className="homepage-shell">
      <Image
        src="/homepage/background.png"
        alt="Abstract blurred lights at night"
        fill
        priority
        sizes="100vw"
        className="homepage-background"
      />

      <div className="homepage-shade" aria-hidden="true" />

      <Nav active="home" />

      <div className="homepage-content">
        <Image
          src="/homepage/homegirl-title.png"
          alt="homegirl x"
          width={1406}
          height={554}
          priority
          className="homepage-title"
        />

        <article className="homepage-story">
          <p>The one person who knows everything about you.</p>
          <p>And I mean everything.</p>
          <p>
            Your last situationship. How it started. How long it took you to reply to that one
            ambiguous message because you both spent 45 minutes crafting the perfect response. The
            eight-hour voice note analysis. Your cycle. Your cravings. The kiwi you should not eat
            because it made you feel sick once in 2019.
          </p>
          <p>
            They&apos;re the one you should never trust with directions, but somehow their confidence
            is so high you follow them anyway. Together, you can turn one random lyric into a full
            improvised ballad with harmonies. They ask why you haven&apos;t gone home yet, even though
            it&apos;s only been three weeks. They remember the friend who hurt you years ago, the one who
            made you feel weird for being yourself.
          </p>
          <p>Most of your best memories have them in them.</p>
          <p>
            The 50-minute walk in the middle of nowhere because your phone died and they refused to
            get an Uber. The night you both accidentally wore the same outfit and spent the evening
            pretending to be fraternal twins with different dads. The birthdays, festivals, house
            parties, brunches, bathroom pep talks, last-minute plans, post-date debriefs, dance floors,
            corner shop runs, and “how did we end up here?” nights.
          </p>
          <p>Because the function is just not the same without them.</p>
          <p>Your homegirl. Your ride or die.</p>
          <p>You know how it is.</p>
        </article>

        <Link href="/getting-ready" className="homepage-cta" aria-label="Continue to Getting Ready">
          <Image
            src="/homepage/getting-ready-cta.png"
            alt="Getting Ready"
            width={487}
            height={125}
            priority
          />
        </Link>
      </div>
    </main>} mobile={<MobileHomepage />} />
  );
}
