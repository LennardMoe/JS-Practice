let data =[
    {
        name: "Leo",
        age: "30",
    },
    {
        name: "Pete",
        age: "10",
    },
    {
        name: "Joe",
        age: "40",
    },
    {
        name: "Moe",
        age: "32",
    },
    {
        name: "Hello",
        age: "20",
    },
    {
        name: "Noone",
        age: "21",
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item){
    return(
        '<div>' + item.name +  ' ' + item.age  + '</div>'
        
    )
})

info.innerHTML = details.join('\n')
