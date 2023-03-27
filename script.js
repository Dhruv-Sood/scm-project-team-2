const memes = [
  "https://remote-tools-images.s3.amazonaws.com/programmer-memes/10.jpg",
  "https://i.redd.it/a0v87gwzoge61.jpg",
  "https://i.redd.it/q29egav34ee61.jpg",
  "https://i.redd.it/iij16swxjie61.jpg",
  "https://i.redd.it/vek7dm2hrge61.jpg",
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
  "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
  "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
  "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
  "https://imgs.search.brave.com/Y3N6V4GEt-XoIp6OXFPG_0-4-w3bC6nCT_GYhbylql4/rs:fit:1058:959:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY2xldXMu/Y28vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDMvbWVtZWNv/ZGVycy5qcGc_cmVz/aXplPTEwNTglMkM5/NTkmc3NsPTE",
  "https://imgs.search.brave.com/NZbcUcGHkKwwmyThQCxMhyd1qhx88LpH7CbnX-AmibE/rs:fit:600:600:1/g:ce/aHR0cDovL2N1cGhl/YWRtZW1lcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDgvQmVzdC1Qcm9n/cmFtbWluZy1NZW1l/cy0yNC5qcGc",
  "https://static.demilked.com/wp-content/uploads/2021/08/6124975b26f24-5-61234f8615279__700.jpg",
  "https://i.ytimg.com/vi/BKMmLqv0IXA/maxresdefault.jpg"
];

const reset = () => {
  const memeContainer = document.querySelector(".meme-img");
  memeContainer.innerHTML = "";
};

const showImg = () => {
  let meme = memes[Math.floor(Math.random() * memes.length)];
  const memeContainer = document.querySelector(".meme-img");

  const imgContainer = document.createElement("img");
  imgContainer.setAttribute("src", meme);

  memeContainer.appendChild(imgContainer);
};

console.log("Script working!!");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  reset();
  showImg();
});
