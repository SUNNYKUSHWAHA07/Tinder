let users = [
    {
        profilePic:"https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww",
        displayPic:"https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        pendingmessage: 4,
        location:"Delhi ,India",
        name:"harshita",
        age:23,
        intersts:[
           { interest:"music",
            icon:` <i class="ri-music-2-fill"></i>`
        },
        {
            interest:"writting",
            icon:`<i class="ri-quill-pen-fill"></i>`  
        }
        ],
        bio:"Lorem ipsum dolor sit consectetur adipisicing elit. Possimus explicabo distinctio sunt quis quis voluptatibus.",
        isFriends: null,
    },
    
    {
        profilePic:"https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzfGVufDB8fDB8fHww",
        displayPic:"https://images.unsplash.com/photo-1551024739-78e9d60c45ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzfGVufDB8fDB8fHww",
        pendingmessage: 4,
        location:"Delhi ,India",
        name:"shivangi",
        age:26,
        intersts:[
            { interest:"music",
             icon:` <i class="ri-music-2-fill"></i>`
         },
         {
             interest:"writting",
             icon:`<i class="ri-quill-pen-fill"></i>`  
         }
         ],
        bio:"Lorem ipsum dolor sit consectetur adipisicing elit. Possimus explicabo distinctio sunt quis quis voluptatibus.",
        isFriends: null,
    },


    {
        profilePic:"https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww",
        displayPic:"https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fHww",
        pendingmessage: 4,
        location:"Delhi ,India",
        name:"nishi",
        age:26,
        intersts:[
            { interest:"music",
             icon:` <i class="ri-music-2-fill"></i>`
         },
         {
             interest:"writting",
             icon:`<i class="ri-quill-pen-fill"></i>`  
         }
         ],
        bio:"Lorem ipsum dolor sit consectetur adipisicing elit. Possimus explicabo distinctio sunt quis quis voluptatibus.",
        isFriends: null,
    },

    {
        profilePic:"https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww",
        displayPic:"https://plus.unsplash.com/premium_photo-1687186954188-76f7f4a3d829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        pendingmessage: 4,
        location:"Delhi ,India",
        name:"avanya",
        age:7,
        intersts:[
            { interest:"music",
             icon:` <i class="ri-music-2-fill"></i>`
         },
         {
             interest:"writting",
             icon:`<i class="ri-quill-pen-fill"></i>`  
         }
         ],
        bio:"Lorem ipsum dolor sit consectetur adipisicing elit. Possimus explicabo distinctio sunt quis quis voluptatibus.",
        isFriends: null,
    },
]



// let curr =  0;
// var animating = false

// function select(elem){
//   return document.querySelector(elem);
// }

// function setData(index){
         
//     select(".location").textContent = users[index].location
//     select(".username").textContent = users[index].name
//     select(".age").textContent = users[index].age
//     select(".bio").textContent = users[index].bio
//     select(".noti h5").textContent = users[index].pendingmessage

//     var clutter = ""
//     users[index].intersts.forEach(function(elem){
//           clutter += `<div class="flex gap-2 text-zinc-100 bg-zinc-500/50 w-fit px-2 py-1 rounded-full">
//           ${elem.icon}
//           <h4>${elem.interest}</h4>
//       </div>`
//     })

//     document.querySelector(".skills").innerHTML = clutter
// }

// (function setInitial(){
//     document.querySelector(".maincard img").src = users[curr].displayPic
//     document.querySelector(".incoming img").src = users[curr+1].displayPic
//     setData(curr)
//     curr = 2;
// })();




// function imagechange(){



// if(!animating){
//     animating = true
//         var tl = gsap.timeline({
//             onComplete: function(){
//                 animating = false
//                 let main = select(".maincard")
//                 let incoming = select(".incoming")

//                 incoming.classList.remove("z-[2]")
//                 incoming.classList.add("z-[3]")
//                incoming.classList.remove("incoming")
               
               

//                main.classList.remove("z-[3]")
//                main.classList.add("z-[2]")
               
//                gsap.set(main, {
//                 scale:1,
//                 opacity:1
//                })
//                if(curr === users.length) curr = 0
//                select(".maincard img").src = users[curr].displayPic;
//                select(".prfimg img").src = users[curr].profilePic;
//                curr++
//                main.classList.remove("maincard");
//                incoming.classList.add("maincard")
//                main.classList.add("incoming")

               
               
//             }
//         })
//        tl.to(".maincard",{
//         opacity:0,
//         scale:1.1,
//         ease:Circ,
//         duration:0.9,
        
//        },"a")
    
//        tl.from(".incoming",{
//          opacity:1,
//          duration:0.9,
//         ease:Circ,

//          scale:0.9,
    
//        },"a")
    

//     // accepted.addEventListener("click",function(){
//     //     var tl = gsap.timeline({
//     //         onComplete: function(){

//     //             let main = select(".maincard")
//     //             let incoming = select(".incoming")

//     //             incoming.classList.remove("z-[2]")
//     //             incoming.classList.add("z-[3]")
//     //            incoming.classList.remove("incoming")
               
               

//     //            main.classList.remove("z-[3]")
//     //            main.classList.add("z-[2]")
               
//     //            gsap.set(main, {
//     //             scale:1,
//     //             opacity:1
//     //            })

//     //            main.classList.remove("maincard");
//     //            incoming.classList.add("maincard")
//     //            main.classList.add("incoming")

//     //         }
//     //     })
//     //    tl.to(".maincard",{
//     //     opacity:0,
//     //     scale:1.1,
//     //     duration:1,
        
//     //    },"a")
    
//     //    tl.from(".incoming",{
//     //      opacity:1,
//     //      duration:0.9,
//     //      scale:0.9,
    
//     //    },"a")
//     // })
// }

    

// }

// let cancel = document.querySelector(".cancel")
// let accepted = document.querySelector(".accepted")

// cancel.addEventListener("click",function(){
//     imagechange()
//     setData(curr-1);
//     gsap.from(".datails .element",{
//         y:"100%",
//         opacity:0,
//         ease:Power4.easeInOut,
//         stagger:0.06,
//         duration:1,
//     })
// })

// accepted.addEventListener("click",function(){
//     imagechange()
//     setData(curr-1);
//     gsap.from(".datails .element",{
//         y:"100%",
//         opacity:0,
//         ease:Power4.easeInOut,
//         stagger:0.06,
//         duration:1,
//     })
// })

// function createcontainer(){
//     document.querySelectorAll(".element").forEach(function(elem){
//         let div = document.createElement("div")
//          div.classList.add(`${elem.classList[1]}contianer`,'overflow-hidden')
//          div.appendChild(elem)
//          select(".datails").appendChild(div);
//     })
// }

// createcontainer()

let curr = 0

var isAnimating = false

function select(elem){
  return  document.querySelector(elem)
}

function setData(index){
    select(".location").textContent = users[index].location
    select(".bio").textContent = users[index].bio
    select(".username").textContent = users[index].name
    select(".age").textContent = users[index].age
    select(".prfimg").src = users[index].profilePic

    var clutter = ""
    users[index].intersts.forEach(function(elem){
     clutter +=` <div class="flex gap-2 text-zinc-100 bg-zinc-500/50 w-fit px-2 py-1 rounded-full">
        ${elem.icon}
        <h4>${elem.interest}</h4>
    </div> `
    })

    document.querySelector(".skills").innerHTML = clutter
}
 
function setInitial(){
   select(".maincard img").src = users[curr].displayPic
   select(".incoming img").src = users[curr+1].displayPic
   setData(curr)
   curr = 2
}
setInitial()

function imagechange(){

    if(!isAnimating){
        isAnimating = true
        var tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false
              let main =  select(".maincard")
              let incoming =  select(".incoming")
    
              incoming.classList.remove("z-[2]")
              incoming.classList.add("z-[3]")
              incoming.classList.remove("incoming")
    
              main.classList.remove("z-[3]")
              main.classList.add("z-[2]")
              gsap.set( main,{
                opacity:1,
                scale:1,
              })
              if(curr === users.length) curr = 0
              select(".maincard img").src = users[curr].displayPic
              select(".prfimg img").src = users[curr].profilePic
              curr++

              main.classList.remove("maincard")
              main.classList.add("incoming")
              incoming.classList.add("maincard")
            }
        })
    }

    tl.to(".maincard",{
        opacity: 0,
        duration:0.9,
        scale:1.1,
    },"a")

    tl.from(".incoming",{
        opacity:0,
        duration:0.8,
        scale:0.9
    },"a")
   
}

var cancel = document.querySelector(".cancel")
cancel.addEventListener("click", function(){

  imagechange()
 setData(curr-1)
  gsap.from(".datails .element",{
    y:"100%",
    opacity:0,
    stagger:0.06,
    duration:0.8,
  
  })
})

function createcontainer(){
    document.querySelectorAll(".element").forEach(function(elem){
        let div = document.createElement("div")
        div.appendChild(elem)

        div.classList.add(`${elem.classList[1]}container`,'overflow-hidden')
        document.querySelector(".datails").appendChild(div)
    })
}
createcontainer()

