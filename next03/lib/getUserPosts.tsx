export default async function getUser(userId : string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId = ${userId}`)

    if(!res.ok) throw new Error('failed to fetch user')

        return res.json()
}