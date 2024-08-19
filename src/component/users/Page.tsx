import { useState, useEffect } from "react";
import { User, columns } from "./Colums";
import { DataTable } from "../../components/ui/Datatable";

async function getUsers(): Promise<User[]> {
  const res = await fetch(" https://beeceptor.com/crud-api/ ");
  const data = await res.json();
  return data;
}

export default function Page() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const users = await getUsers();
      setData(users);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">All Users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
