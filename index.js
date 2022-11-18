const url = "https://api.github.com/users/";
const inputEle = document.getElementById("inputId");
const buttonEle = document.getElementById("buttonId");
const profileContainerEle = document.getElementById("profileContainerId");
const loadingEle = document.getElementById("loadingId")


const generateCard = (profile) =>{
    return (
        `<div class="profileBox">
        <div class="topSection">
          <div class="leftSide">
            <div class="avatar">
              <img src="${profile.avatar_url}" alt="">
            </div>
            <div class="self">
              <h1>${profile.name}</h1>
              <h1>@${profile.login}</h1>
            </div>
          </div>
          <a href="${profile.html_url}" target="_blank">
            <button class="profileButton">Check Profile</button>
          </a>
        </div>
        <div class="aboutSection">
          <h2>About</h2>
          <p>${profile.bio}</p>
        </div>
        <div class="statusSection">
          <div class="statusItem">
            <h2>Follower</h2>
            <p>${profile.followers}</p>
          </div>
          <div class="statusItem">
            <h2>Following</h2>
            <p>${profile.following}</p>
          </div>
          <div class="statusItem">
            <h2>Repos</h2>
            <p>${profile.public_repos}</p>
          </div>
        </div>
      </div>`
        );
};




const fetchProfile = async ()=>{
    
    const userName = inputEle.value;

    loadingEle.innerText = "laoding.....";
    loadingEle.style.color = "green";

    try {
        const res = await fetch( url + userName );
        const data = await res.json();

        if(data.name){
            loadingEle.innerText = "";
            profileContainerEle.innerHTML = generateCard(data);
        }else{
            loadingEle.innerText = "Not Found";
            loadingEle.style.color = "red";
            profileContainerEle.innerText = "";
        }
    } catch (error) {
        console.log({error});   
    }

    inputEle.value = "";

};

buttonEle.addEventListener("click", fetchProfile);



