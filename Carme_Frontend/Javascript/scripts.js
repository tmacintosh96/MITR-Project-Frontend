function setupForm(){
	document.getElementById("select-cluster").checked=false;
	document.getElementById("select-gpu").checked=false;
	clearCluster();
	clearGPU();
    /* Disables submit buttons on load, will reimplement when have way of checking that all fields are filled out
    document.getElementById("submit-cluster").disabled = true;
    document.getElementById("submit-gpu").disabled = true;
    */
}
function clearCluster(){
	document.getElementById("csubscrib").value='';
    document.getElementById("cgroup").value='';
    document.getElementById("cname").value='';
    document.getElementById("clocation").value='';
    document.getElementById("cdns").value='';
    document.getElementById("cmachine").value='';
    document.getElementById("ckub").value='';
    document.getElementById("cnode").value='';
    document.getElementById("cclass").value='';
    document.getElementById("cmax").value='';
}

function clearGPU(){
	document.getElementById("gazureimg").value='';
    document.getElementById("gemail").value='';
    document.getElementById("ggroup").value='';
    document.getElementById("gservname").value='';
    document.getElementById("gservimg").value='';
    document.getElementById("gservad").value='';
    document.getElementById("gservauth").value='';
    document.getElementById("gserversize").value='';
    document.getElementById("gstoracc").value='';
    document.getElementById("gcontname").value='';
    document.getElementById("gstorname").value='';
    document.getElementById("gstorsize").value='';
    document.getElementById("glocation").value='';
    document.getElementById("gip").value='';
}

function select(){
	var cluster = document.getElementById("select-cluster");
	var gpu = document.getElementById("select-gpu");
	if(cluster.checked){
		document.getElementById("slct").style.display = "block";
    	document.getElementById("clus-specs").style.display = "none";
    	document.getElementById("clus-specs-cont").style.display = "none";
    	document.getElementById("review-cluster").style.display = "none";
    } else if(gpu.checked){
    	document.getElementById("slct").style.display = "block";
    	document.getElementById("gpu-specs").style.display = "none";
    	document.getElementById("gpu-specs-cont").style.display = "none";
    	document.getElementById("review-gpu").style.display = "none";
    }
}
function specs(){
	var cluster = document.getElementById("select-cluster");
	var gpu = document.getElementById("select-gpu");
	if(cluster.checked){
		document.getElementById("slct").style.display = "none";
    	document.getElementById("clus-specs").style.display = "block";
    	document.getElementById("clus-specs-cont").style.display = "none";
    	document.getElementById("review-cluster").style.display = "none";
    } else if(gpu.checked){
    	document.getElementById("slct").style.display = "none";
    	document.getElementById("gpu-specs").style.display = "block";
    	document.getElementById("gpu-specs-cont").style.display = "none";
    	document.getElementById("review-gpu").style.display = "none";
    }
}
function specsCont(){
	var cluster = document.getElementById("select-cluster");
	var gpu = document.getElementById("select-gpu");
	if(cluster.checked){
		document.getElementById("slct").style.display = "none";
    	document.getElementById("clus-specs").style.display = "none";
    	document.getElementById("clus-specs-cont").style.display = "block";
    	document.getElementById("review-cluster").style.display = "none";
    } else if(gpu.checked){
    	document.getElementById("slct").style.display = "none";
    	document.getElementById("gpu-specs").style.display = "none";
    	document.getElementById("gpu-specs-cont").style.display = "block";
    	document.getElementById("review-gpu").style.display = "none";
    }
}
function review(){
	var cluster = document.getElementById("select-cluster");
	var gpu = document.getElementById("select-gpu");
	if(cluster.checked){
		document.getElementById("slct").style.display = "none";
    	document.getElementById("clus-specs").style.display = "none";
    	document.getElementById("clus-specs-cont").style.display = "none";
    	document.getElementById("review-cluster").style.display = "block";
    } else if(gpu.checked){
    	document.getElementById("slct").style.display = "none";
    	document.getElementById("gpu-specs").style.display = "none";
    	document.getElementById("gpu-specs-cont").style.display = "none";
    	document.getElementById("review-gpu").style.display = "block";
    }
}
/*
function clearClusterInputs(){
    document.getElementById("cprojname").value='';
    document.getElementById("cemail").value='';
    document.getElementById("cname").value='';
    document.getElementById("cregion").value='';
    document.getElementById("czone").value='';
    document.getElementById("cstand").checked=false;
    document.getElementById("chigh").checked=false;
    document.getElementById("cauth").value='';
    document.getElementById("cservacc").value='';
    document.getElementById("cfixed").value='';
    document.getElementById("cnode").value='';
    document.getElementById("cclass").value='';
    document.getElementById("cmax").value='';
}

function clearGPUInputs(){
    document.getElementById("gprojname").value='';
    document.getElementById("gservname").value='';
    document.getElementById("gregion").value='';
    document.getElementById("gzone").value='';
    document.getElementById("gstand").checked=false;
    document.getElementById("ghigh").checked=false;
    document.getElementById("gauth").value='';
    document.getElementById("gboot").value='';
    document.getElementById("gservacc").value='';
    document.getElementById("gfixed").value='';
    document.getElementById("gp100").checked=false;
    document.getElementById("gk80").checked=false;
    document.getElementById("gimgfam").value='';
    document.getElementById("gimgproj").value='';
    document.getElementById("gcount").value='';
    document.getElementById("gip").value='';
}

function showCluster() {
	clearClusterInputs();
    document.getElementById("cf").style.display = "block";
    document.getElementById("gf").style.display = "none";
}
function showGPU() {
	clearGPUInputs();
    document.getElementById("gf").style.display = "block";
    document.getElementById("cf").style.display = "none";

}*/