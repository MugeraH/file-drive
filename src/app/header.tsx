import { UserButton, UserProfile } from "@clerk/nextjs";
type Props = {};

function Header({}: Props) {
  return (
    <div className="border-b py-4 bg-gray-50">
      <div className="container mx-auto justify-between items-center flex">
        Hughes Drive
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
