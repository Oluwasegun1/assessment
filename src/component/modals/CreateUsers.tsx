import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import user from "../../assets/createIcon.svg";
import cancel from "../../assets/X.svg";

type Props = {
  handleCreate: () => void;
};

const CreateUser: React.FC<Props> = ({ handleCreate }) => {
  return (
    <Dialog open={true} onOpenChange={handleCreate}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center relative">
            <img src={user} alt="icon" width={60} height={60} />
            <h2>New User</h2>
            <img
              src={cancel}
              alt="cancel"
              width={30}
              height={30}
              className="absolute right-0 top-0 cursor-pointer"
              onClick={handleCreate}
            />
          </DialogTitle>
        </DialogHeader>
        <form className="min-h-[100px] space-y-4 md:space-y-6 mb-4">
          <div>
            <Label htmlFor="email" className="block mb-2 text-xs">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="New User’s Email Address"
              required
            />
          </div>

          <div>
            <Label htmlFor="fullname" className="block mb-2 text-xs">
              Full Name
            </Label>
            <Input
              type="text"
              id="fullname"
              placeholder="New User’s Full Name"
              required
            />
          </div>

          <div>
            <Label htmlFor="role" className="block mb-2 text-xs">
              Role
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="sales-manager">Sales Manager</SelectItem>
                <SelectItem value="sales-rep">Sales Representative</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="password" className="block mb-2 text-xs">
              Create Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Create Password for New User"
              required
            />
          </div>

          <DialogFooter>
            <Button
              className="w-full bg-[#0D6EFD] text-white"
              onClick={handleCreate}
            >
              Add User
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUser;
