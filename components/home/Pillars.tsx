import { SunHorizon, Bus, Lightning } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { PlaceholderVisual } from "../ui/PlaceholderVisual";

export function Pillars() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            What We Do
          </h2>
          <p className="mt-3 max-w-lg text-base text-ink/70">
            Three systems, one solar installation, integrated by a single smart energy
            platform.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal className="group relative overflow-hidden rounded-3xl lg:col-span-2">
            {/* TODO: replace with real photography: bright classroom, solar-powered lighting */}
            <PlaceholderVisual
              tone="navy"
              icon={<SunHorizon weight="thin" className="size-72 transition-transform duration-700 group-hover:scale-110" />}
              className="aspect-[16/8] w-full"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent p-8 pt-24 md:p-10 md:pt-28">
              <SunHorizon weight="fill" className="size-9 text-teal-400" />
              <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">
                Solar Energy for Schools
              </h3>
              <p className="mt-2 max-w-xl text-sm text-white/75 md:text-base">
                Rooftop solar photovoltaic and battery storage systems eliminate
                fossil-fuel generator dependence and recover thousands of teaching hours
                lost annually to energy outages. Solar electricity goes to the school
                first, always and unconditionally.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-navy/10 bg-surface p-8">
            <Bus weight="fill" className="size-9 text-teal" />
            <h3 className="mt-4 text-xl font-semibold text-navy">Electric School Buses</h3>
            <p className="mt-2 text-sm text-ink/70">
              Solar-charged electric buses, newly procured or circularly remanufactured
              from end-of-life petrol buses, cut transport fuel costs by over 200%
              against Nigeria&apos;s post-subsidy baseline and reduce bus fees for
              low-income families.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="rounded-3xl bg-navy-tint p-8">
            <Lightning weight="fill" className="size-9 text-teal" />
            <h3 className="mt-4 text-xl font-semibold text-navy">Community EV Charging</h3>
            <p className="mt-2 text-sm text-ink/70">
              Surplus solar electricity powers public EV charging at school perimeters,
              accessible via app or USSD for unbanked users, generating revenue for the
              programme and income for the school.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
