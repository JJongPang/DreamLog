export const writePost = async ({ title, body, tags }) => {
    const res = await fetch(`http://0.0.0.0:5000/wrtie`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            body: body,
            tags: tags,
        }),
    });
    const data = await res.json();
};
