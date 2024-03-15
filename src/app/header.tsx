import { OrganizationSwitcher, UserButton, UserProfile } from "@clerk/nextjs";
type Props = {};

function Header({}: Props) {
  return (
    <div className="border-b py-4 bg-gray-50">
      <div className="container mx-auto justify-between items-center flex">
        Hughes Drive
        <div className="flex gap-2">
          <OrganizationSwitcher /> <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
