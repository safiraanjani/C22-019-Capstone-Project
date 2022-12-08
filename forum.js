var defaultThreads = [
    {
        id: 1,
        title: "Topik 1",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Zeus",
                date: Date.now(),
                content: "Wow, ini sangat menarik!"
            },
            {
                author: "Athena",
                date: Date.now(),
                content: "Aku setuju."
            }
        ]
    },
    {
        id: 2,
        title: "Topik 2",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Poseidon",
                date: Date.now(),
                content: "Keren sekali saudaraku."
            },
            {
                author: "Artemis",
                date: Date.now(),
                content: "Ini akan menjadi topik yang hangat."
            }
        ]
    },
    {
        id: 3,
        title: "Topik 3",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Ares",
                date: Date.now(),
                content: "Apakah tidak terlalu berlebihan?"
            },
            {
                author: "Aphrodite",
                date: Date.now(),
                content: "Menurutku ini tidak lebih buruk dari yang sebelumnya."
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}