
function checkTriangle(){
	var answer = document.getElementById("triangleResult");
        var edge1 = Number(document.getElementById("edge1").value);
	var edge2 = Number(document.getElementById("edge2").value);
	var edge3 = Number(document.getElementById("edge3").value);
	var x ;
	
	if (edge1 + edge2 > edge3 && edge2 + edge3 > edge1 && edge1 + edge3 > edge2) {
		if (pow(edge1,2) == pow(edge2,2) + pow(edge3,2) || pow(edge2,2) == pow(edge1,2) + pow(edge3,2) ||pow(edge3,2) == pow(edge2,2) + pow(edge1,2)) {
			x = "是，直角三角形";
		}
		else{
			
		}
	}
	else{
		x = "否";
	}
	answer.innerHTML = edge1 + edge2;
}
