import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Usertable from './Usertable'

const Tab = () => {
  return (
    <div>
      <Tabs defaultValue="account" className=" flex flex-col w-[400px] ">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
        <Usertable />
        </TabsContent>
        <TabsContent value="roles">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Tab;
