import { invitation } from "@/lib/invitation-data";
import { Reveal } from "./Reveal";
import { TIMELINE_ICONS, type TimelineIconName } from "./TimelineIcons";

export function TheDay() {
  return (
    <section className="bg-[#3d171d] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(2.2rem,8vw,4.2rem)] font-normal tracking-[0.1em] text-[#f7ecd9]">
            {invitation.theDayTitle}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 space-y-1 text-[0.68rem] tracking-[0.28em] text-[#e0c9a8] uppercase sm:text-[0.76rem]">
            <p>{invitation.theDayVenue}</p>
            <p>{invitation.theDayCity}</p>
            <p className="pt-1 tracking-[0.34em]">{invitation.theDayDate}</p>
          </div>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-4">
          {invitation.timeline.map((item, i) => {
            const Icon = TIMELINE_ICONS[item.icon as TimelineIconName] ?? TIMELINE_ICONS.heart;

            return (
              <Reveal as="li" key={item.time + item.label} delay={0.08 * i}>
                <div className="flex flex-col items-center gap-4">
                  <Icon className="h-16 w-16 text-[#e8d3b4] sm:h-20 sm:w-20" aria-hidden />
                  <div className="space-y-1">
                    <p className="text-[0.9rem] tracking-[0.16em] text-[#f7ecd9]">
                      {item.time}
                    </p>
                    <p className="font-script text-[1.35rem] leading-tight text-[#e0c9a8]">
                      {item.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
