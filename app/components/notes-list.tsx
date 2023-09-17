import { Database } from "@/database.types"
import { format } from "util"

type Note = Database['public']['Tables']['notes']['Row']

async function fetchNotes() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const res=await fetch(`${process.env.API_URL}/rest/v1/notes?select=*`, {
        headers: new Headers({
            apikey: process.env.API_KEY as string
        }),


        // force-cache: キャッシュがある場合でも、リクエストを送信せずにキャッシュからレスポンスを取得します(default)
        // no-cache: キャッシュを使用しないで、常にサーバーからレスポンスを取得します。
        // no-store: レスポンスをキャッシュしないで、常にサーバーからレスポンスを取得します。
        // only-if-cached: キャッシュがある場合にのみ、キャッシュからレスポンスを取得します。
        // 応答がキャッシュされていない場合、504 Unsatisfiable Request 応答が返されます
        // reload: キャッシュを使用せずに、常にサーバーからレスポンスを取得します。
        cache: 'no-cache'
    })

    if(!res.ok) throw new Error(res.statusText)

    const notes: Note[] = await res.json()
    return notes
}

export default async function NotesList() {
    const data = await fetchNotes()

    return (
        <>
            <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">Notes</p>
            <ul className="m-3">
                {data?.map(note => (
                    <li key={note.id} className="mb-2">
                        <p className="text-lg font-medium">{note.title}</p>
                        <p>
                            <strong className="mr-3">
                                Created at:
                            </strong>
                            {note && format(new Date(note.created_at), 'yyyy-mm-dd')}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}