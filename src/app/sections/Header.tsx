import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import ActionButton from "@/components/ActionButton";

const navigationOptions = [
  {
    id: "1",
    name: "Features",
  },
  {
    id: "2",
    name: "Developers",
  },
  {
    id: "3",
    name: "Pricing",
  },
  {
    id: "4",
    name: "Changelog",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-white/15 py-4 backdrop-blur md:border-none">
      <div className="container">
        <div className="mx-auto flex max-w-2xl items-center justify-between rounded-xl border-white/15 md:border md:p-2.5">
          <div>
            <div className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15">
              <LogoIcon className="size-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {navigationOptions.map((option) => (
                <a
                  href="#"
                  key={option.id}
                  className="text-white/70 transition hover:text-white"
                >
                  {option.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ActionButton>Join waitlist</ActionButton>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
