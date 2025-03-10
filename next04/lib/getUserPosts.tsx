export default async function getUser(userId : string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId = ${userId}`, {next: {revalidate: 60}})

    if(!res.ok) return undefined
        return res.json()
}