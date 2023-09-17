'use client'

export default function Error({error}: { error: Error }) {
    return (
        <>
            <p className={"mt-6 text-center text-red-500"}>
                Data fetching failed
            </p>
        </>
    )
}