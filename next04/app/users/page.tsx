import { User } from '@/types/user';
import type { Metadata } from "next";
import Link from "next/link";
import getAllUsers from "../../lib/getAllUsers";

export const metadata : Metadata = {
    title: 'Users' ,
}

export default async function UsersPage(){
    // This data is fetched at build time
    const users = await getAllUsers()

    console.log("hello")

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br/>
            {users.map((user: User) => {
                return (
                    <div key={user.id}>
                      <p>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                      </p>
                      <br/>
                    </div>
                )
            })}
        </section>
    )

    return content
}