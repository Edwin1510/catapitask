const apiUrl = "https://api.thecatapi.com/v1/images/search?api_key=live_c660lWljceASEfAcLoQmFchc2cFnBq1CHfmD32XfKMurzBEGa1FseqKxWznfqkhh";

const imageArea = document.getElementById("cat-image");
const overlay = document.getElementById("overlay");



const loadcatImage = ({ url }) => {
  imageArea.innerHTML = "";
   const imgElement = document.createElement("img");
   imgElement.src = url;
   imageArea.appendChild(imgElement);
   overlay.style.display = "none";
 
};



const getRandomcat = async () => {
 overlay.style.display = "flex";
  const response = await fetch(apiUrl);
  const data = await response.json();

  loadcatImage(data[0]);
  
};

getRandomcat();