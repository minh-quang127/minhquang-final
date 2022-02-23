const adresssbtn = document.querySelector('#adress-form')
const adresssclose = document.querySelector('#adress-close')



adresssbtn.addEventListener("click", function()
{
    document.querySelector('.adress-form').style.display = "flex"
})
adresssclose.addEventListener("click", function()
{
    document.querySelector('.adress-close').style.display = "none"
})
// slider------------------------------------
const rightbtn = document.querySelector('.fa-chevron-circle-right')
const leftbtn = document.querySelector('.fa-chevron-circle-left')
const imgNuber = document.querySelectorAll('.slider-content-left-top img')

let index = 0
rightbtn.addEventListener("click", function()
{
 index=index+1
    if(index>imgNuber.length-1)
    {
        index=0
    }
 document.querySelector(".slider-content-left-top") .style.right = index *100+"%" 
})
leftbtn.addEventListener("click", function()
{
    index=index-1
    if(index<=0)
    {
        index=imgNuber.length-1
    }
 document.querySelector(".slider-content-left-top") .style.right =index *100+"%" 
})
// ============================================slider 1 =============================================
const imgNuberli = document.querySelectorAll('.slider-content-left-bottom li')
imgNuberli.forEach(function(image,index)
{
    image.addEventListener("click",function()
    {
        removeacviti ()
        document.querySelector(".slider-content-left-top") .style.right =index *100+"%" 
        image.classList.add("acviti")
    })
})
function removeacviti ()
{
    let imgactive = document.querySelector('.acviti')
    imgactive.classList.remove("acviti")
    
}
// ==========================================================
function imgauto()
{
    index = index + 1
    if(index>imgNuber.length-1)
    {
        index=0
    }
    removeacviti ()
    document.querySelector(".slider-content-left-top") .style.right =index *100+"%" 
    imgNuberli[index].classList.add("acviti")
    

}
setInterval(imgauto,3000)