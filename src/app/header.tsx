import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedOut,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
type Props = {};

function Header({}: Props) {
  return (
    <div className="border-b py-4 bg-gray-50">
      <div className="container mx-auto justify-between items-center flex">
        Hughes Drive
        <div className="flex gap-2">
          <OrganizationSwitcher /> <UserButton />
          <SignedOut>
            <SignInButton>
              <Button> Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Header;
