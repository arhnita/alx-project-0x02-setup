import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces"

export async function getStaticProps(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()

        return{
            props: {
                users: users.slice(0,12)
            },
            revalidate: 60
        }
    }catch(error){
        console.error(error)
        return{
            props: {
                users: []
            }
        }
    }
}


const Users: React.FC<{users: UserProps[]}> = ({ users }) => {
return (
    <div>
      <Header/>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Users