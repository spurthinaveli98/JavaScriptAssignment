
var obj = { "images": [{"Name": "Rocks", "url" : "img/index1.jpeg","info":"Rocks pic", "uploadedDate":"10-01-2019", "id":""} , {"Name": "Aeroplane", "url" : "img/index2.jpeg","info":"Aeroplane pic", "uploadedDate":"10-01-2019", "id":""} ,{"Name": "River", "url" : "img/index3.jpeg","info":"River pic", "uploadedDate":"10-01-2019","id":""} ,{"Name": "Sunlight", "url" : "img/index4.jpeg","info":"Sunlight pic", "uploadedDate":"10-01-2019","id":""} ,{"Name": "Boats", "url" : "img/index5.jpeg","info":"Boats pic", "uploadedDate":"10-01-2019", "id":""} ,{"Name": "Lake", "url" : "img/index6.jpeg","info":"Lake pic", "uploadedDate":"10-01-2019", "id":""} ,{"Name": "Wood", "url" : "img/index7.jpeg","info":"Wood pic", "uploadedDate":"10-01-2019", "id":""} ,{"Name": "Mountain", "url" : "img/index8.jpeg","info":"Mountain pic", "uploadedDate":"10-01-2019","id":""}, {"Name": "Valley", "url" : "img/index9.jpeg","info":"Valley pic", "uploadedDate":"10-01-2019","id":""}] };



function imageExists()
{
var url=document.getElementById('url').value;
var pattern = /([^\s]+(\/(*i))+(\.(?i)(jpg|png|gif|bmp|jpeg))$)/;
if (url.match(pattern))
            return true;
            return false;

}

function isValidName()
{
var name=document.getElementById('name').value;
var pattern ="^[_A-z0-9]*((-|\s)*[_A-z0-9])*$";
if (name.match(pattern))
            return true;
            return false;
}

function isFutureDate()
{
    var idate=document.getElementById('date').value;
    var today = new Date().getTime(),
    idate = idate.split("-");
    idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();
    return (today - idate) < 0;
}

function loadImages()
{
images = obj.images;
		for(var i =0;i<images.length;i++){
		var tableRef = document.getElementById('imageTable');
		var image = document.createElement("img");
                 image.addEventListener("click", retrieveData);
		image.index=i;
		var tr,td;
		if(i%3 === 0){
			tr = tableRef.insertRow();
                             }
		td  = tr.insertCell();
		image.src = images[i].url;
		td.appendChild(image);
}
}

function setImages(){
if(!imageExists())
alert("Url is not valid");
else if(!isValidName())
alert("Name is not valid");
else if (isFutureDate())
alert("Future date not allowed");
else{
	images = obj.images;
	var tr,td;
var tableRef = document.getElementById('imageTable');
tableRef.innerHTML = "";
		var c=0;
	for(var i in images){
		
		var image = document.createElement("img");
                image.addEventListener("click", retrieveData);
		image.index=i;
		if(c%3 === 0){
			tr = tableRef.insertRow();

		}
		td  = tr.insertCell();
		image.src = images[i].url;
		td.appendChild(image);
		c++;
	}

}
}
function retrieveData(e)
{
var i=e.target.index;
document.getElementById("url").value=obj.images[i].url;
document.getElementById("name").value=obj.images[i].Name;
document.getElementById("info").value=obj.images[i].info;
document.getElementById("date").value=obj.images[i].uploadedDate;
document.getElementById("index").value = i;
}

loadImages();
function add()
{
	var url=document.getElementById("url").value;
        var name=document.getElementById("name").value;
        var info=document.getElementById("info").value;
        var date=document.getElementById("date").value; 
	obj['images'].push({"name": name, "url" : url,"info":info, "uploadedDate":date, "id":""});
	setImages();	
}

function del()
{
var index=document.getElementById("index").value;
delete obj.images[index];
setImages();
}

function edit()
{
var i=document.getElementById("index").value;
obj.images[i].url=document.getElementById("url").value;
obj.images[i].Name=document.getElementById("name").value;
obj.images[i].info=document.getElementById("info").value;
obj.images[i].uploadedDate=document.getElementById("date").value;
	setImages();
}


