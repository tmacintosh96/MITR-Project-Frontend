function returnCSelect(){
    document.getElementById("cluster-specs").style.display = "none";
    document.getElementById("select-page").style.display = "block";
}
function returnGSelect(){
    document.getElementById("gpu-specs").style.display = "none";
    document.getElementById("select-page").style.display = "block";
}
function returnGSpecs(){
    document.getElementById("gpu-specs-cont").style.display = "none";
    document.getElementById("gpu-specs").style.display = "block";
}
function clusterSpecs(){
    document.getElementById("select-page").style.display = "none";
    document.getElementById("cluster-specs").style.display = "block";
}
function gpuSpecs(){
    document.getElementById("select-page").style.display = "none";
    document.getElementById("gpu-specs").style.display = "block";
}
function gpuSpecsCont(){
    document.getElementById("gpu-specs").style.display = "none";
    document.getElementById("gpu-specs-cont").style.display = "block";
}