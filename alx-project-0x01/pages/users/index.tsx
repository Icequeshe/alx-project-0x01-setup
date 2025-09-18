import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold">Users Page</h1>
      </main>
    </div>
  );
};

export default Users;

