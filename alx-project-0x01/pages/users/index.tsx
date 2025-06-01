import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
const Users: React.FC = ( {posts} ) => {
  return (
    <div className="flex flex-col h-screen">
        <Header />
        <main>
          <h1 className="text-2xl font-semibold">Add User</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">New User</button>
          <div className="flex flex-col gap-4">
            {posts?.map(({name, username, id, phone, website, address, email, company}: UserProps, key: number)=>(
              <UserCard name={name} username={username} id={id} phone={phone} website={website} address={address} email={email} company={company} key={key} />
            ))}
          </div>
        </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();

  return {
    props: { posts }
  }
}

export default Users;
