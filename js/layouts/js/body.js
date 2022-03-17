// Search part
const serchBar = document.querySelector(".user .search input"),
	  serchBtn = document.querySelector(".user .search button"),
	  userList = document.querySelector(".user .user-list");

serchBtn.onclick = ()=>{
	serchBar.classList.toggle("active");
	serchBar.focus();
	serchBtn.classList.toggle("active");
	serchBar.value = "";
}