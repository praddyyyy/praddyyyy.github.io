import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  
  const ProfileButton = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/31361146?v=4" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default ProfileButton;
  