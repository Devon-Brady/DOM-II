const funBusTitle = document.querySelector('.logo-heading');
const funBusImg = document.querySelector('header img');
const welcomeMessage = document.querySelector('header h2');
const letGoSection = document.querySelector('.content-section');
const letGoImg = document.querySelector('.content-section img');
const advenAwaitsSection = document.querySelector('.inverse-content');
const advenAwaitsImg = document.querySelector('.inverse-content img');
const pickYourAdven = document.querySelector('.content-destination');
const pickYourAdvenImg = document.querySelector('.content-destination img');
const signUpButton = document.querySelector('.btn');
console.log(signUpButton);

funBusTitle.addEventListener('mouseover', function(event){
 funBusTitle.style.color ='slategrey';
})
funBusTitle.addEventListener('mouseout', function(event){
    funBusTitle.style.color ='black';
   })
 funBusImg.addEventListener ('mouseover', function (event){
     funBusImg.src = 'https://thumbs.dreamstime.com/b/camper-van-tent-roof-beach-camper-van-tent-roof-camping-mediterranean-coast-palm-trees-spain-195822489.jpg';
     funBusImg.style.height = '250px';
     funBusImg.style.width ='1000px';
 })
 funBusImg.addEventListener('mouseout', function(event){
    funBusImg.src = "../img/fun-bus.jpg";
     funBusImg.classList.remove('height');
     funBusImg.classList.remove('width');

 })
 letGoSection.addEventListener('mouseover', function(event){
     letGoSection.style.background = 'lightblue';
     letGoSection.style.padding = '30px 0 0 0';
     letGoSection.style.margin = '0 0 0px 0'
 } )
 letGoSection.addEventListener('mouseout', function(event){
     letGoSection.style.background = 'white';
     letGoSection.style.padding = '0';
     letGoSection.style.margin ='30px 0 ';
 })
 advenAwaitsSection.addEventListener('mouseover', function(event){
    advenAwaitsSection.style.background = 'lightblue';
   
} )
advenAwaitsSection.addEventListener('mouseout', function(event){
    advenAwaitsSection.style.background = 'white';
    advenAwaitsSection.style.padding = '30px 0';
})
letGoImg.addEventListener('click', function (event){
    letGoImg.src = 'https://previews.123rf.com/images/irinabauer/irinabauer1908/irinabauer190800051/129367044-hand-of-the-child-writing-on-a-map-with-blue-pen-kids-hand-holding-felt-tip-pen-travel-and-vacation-.jpg';
});
letGoImg.addEventListener('dblclick', function (event){
    letGoImg.src = '../img/adventure.jpg';
});
advenAwaitsImg.addEventListener('click', function (event){
    advenAwaitsImg.src = 'https://i.pinimg.com/736x/e5/3a/45/e53a45ab8c3e16bb53f5a31606dbb463.jpg';
});
advenAwaitsImg.addEventListener('dblclick', function (event){
    advenAwaitsImg.src = 'adventure.jpg';
});


