async function commonFetcher<T>(url: string): Promise<T> {
    const res = await fetch(url, {
        headers: new Headers({
            apikey: process.env.NEXT_PUBLIC_API_KEY as string
        })
    });

    if (!res.ok) {
        throw new Error('Something went wrong');
    }

    return await res.json();
}

export default commonFetcher;