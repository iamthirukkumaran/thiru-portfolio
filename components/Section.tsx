import Reveal from "./Reveal";

type Props = {
  id?: string;
  label: string;
  children: React.ReactNode;
  /** First section after the intro skips the divider rule. */
  divider?: boolean;
};

export default function Section({ id, label, children, divider = true }: Props) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className={divider ? "border-t border-line pt-10 sm:pt-12" : ""}>
        <Reveal>
          <h2 className="label">{label}</h2>
          <div className="mt-6 sm:mt-8">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
