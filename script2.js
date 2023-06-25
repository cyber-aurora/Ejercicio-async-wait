const data = {
    "results": [
        {
            "title": "Estudiar Js",
            "priority": "alta",
            "isDone": false
        },
        {
            "title": "Estudiar CSS",
            "priority": "alta",
            "isDone": true
        },
        {
            "title": "Estudiar OOP",
            "priority": "media",
            "isDone": false
        },
        {
            "title": "Estudiar IA",
            "priority": "baja",
            "isDone": false
        }
    ]
};

data.results.forEach(result => {
    console.log("Title: " + result.title);
    console.log("Priority: " + result.priority);
    console.log("Is Done: " + result.isDone);
    console.log("-------------");
});
