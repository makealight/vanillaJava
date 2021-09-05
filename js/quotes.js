const quotes = [
    {
        quote: "악에게 지지 말고 선으로 악을 이기라.",
        author: "롬12:21",
    },
    {
        quote: "우리 주 예수 그리스도로 말미암아 우리에게 이김을 주시는 하나님께 감사하노니.",
        author: "고전15:57",
    },
    {
        quote: "구하는 이마다 얻을 것이요 찾는 이가 찾을 것이요 두드리는 이에게 열릴 것이니라.",
        author: "마7:8",
    },
    {
        quote: "그러므로 우리가 낙심하지 아니하노니 겉사람은 후패하나 우리의 속은 날로 새롭도다.",
        author: "고후4:16",
    },
    {
        quote: "그러므로 이제 그리스도 예수 안에 있는 자에게는 결코 정죄함이 없나니 이는 그리스도 예수 안에 있는 생명의 성령의 법이 죄와 사망의 법에서 너를 해방하였음이라.",
        author: "롬8:1~2",
    },
    {
        quote: "여호와를 경외하는 것이 지식의 근본이어늘 미련한 자는 지혜와 훈계를 멸시하느니라.",
        author: "잠1:7",
    },
    {
        quote: "누가 뉘게 혐의가 있거든 서로 용납하여 피차 용서하되 주께서 너희를 용서하신 것과 같이 너희도 그리하고.",
        author: "골3:13",
    },
    {
        quote: "이것을 너희에게 이름은 허의로 내 안에서 평안을 누리게 하려함이라 세상에서는 너희가 환난을 당하나 담대하라 내가 세상을 이기었노라 하시니라.",
        author: "요16:33",
    },
    {
        quote: "너희는 여호와를 영원히 의뢰하라 주 여호와는 영원한 반석이심이로다.",
        author: "사26:4",
    },
    {
        quote: "날마다 우리 짐을 지시는 주 곧 우리의 구원이신 하나님을 찬송할찌로다.",
        author: "시68:19",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

