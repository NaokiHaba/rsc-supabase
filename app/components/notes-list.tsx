"use client";

import { Database } from "@/database.types"
import useSWR from "swr"
import { format } from 'date-fns'
import commonFetcher from "@/app/utils/fetcher"

type Note = Database['public']['Tables']['notes']['Row']

export default function NotesList() {
    const {data, error, isLoading} = useSWR<Note[]>(`${process.env.NEXT_PUBLIC_URL}/rest/v1/notes?select=*`, commonFetcher);

    if (error) {
        return "An error has occurred.";
    }
    if (isLoading) {
        return "Loading...";
    }

    return (
        <div>
            <p className={"my-4 text-xl font-medium underline underline-offset-4"}>Notes</p>

            <ul className={"m-3"}>
                {data?.map((note: Note) => (
                    <li key={note.id}>
                        <p>{note.title}</p>
                        <p>
                            <strong className={"mr-3"}>
                                Created at
                            </strong>
                            {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
