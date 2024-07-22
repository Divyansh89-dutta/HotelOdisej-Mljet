function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  }
  init();
  
  
  
  
  
  
  
  gsap.to(".main-logo", {
    top: "20%",
    width: "200px",
    // backgroundColor:`transparent`,
    scrollTrigger: {
      trigger: "#nav",
      scroller: "#main",
      // markers: true,
      start: "top -1%",
      end: "top -2%",
      scrub: 2
    }
  })
  
  
  
  document.addEventListener("wheel", function (dt) {
    if(dt.offsetY > 300){
      if(dt.deltaY > 0){
        gsap.to("#nav", {
          top: `-15vh`,
          backgroundColor:`transparent`
        })
      }
  
    }
    if(dt.offsetY < 300){
      if(dt.deltaY < 0){
        gsap.to("#nav", {
          top: `0vh`,
          backgroundColor:"#F7F7EE"
        })
      }
    }
  
  })
  
  
  gsap.to("#nav",{
    // duration:0.2,
    backgroundColor:`transparent`,
    scrollTrigger:{
      trigger:"#nav",
      scroller:"#main",
      // markers:true,
      scrub:2,
      start:"top 20%"
  
    }
  })
  
  var tl = gsap.timeline();
  
  tl.from("#page1-img", {
    scale: 0.5,
    duration: 1,
    delay: 2,
    borderRadius: `20px`
  }, "first")
  
  tl.from("#page1-img img", {
    scale: 1.3,
    duration: 1,
    delay: 2
  }, "first")
  
  
  
  tl.from("#nav-logo", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 1,
  
  }, "first")
  tl.from("#hamburder, #nav-btn ", {
    y: -100,
    opacity: 0,
    stagger: 0.5
  })
  
  
  
  function clutterbaby1() {
    document.querySelectorAll("#text-container h2").forEach(function (elem) {
  
      var splitedText = elem.textContent.split("");
      var clutter = "";
      splitedText.forEach(function (e) {
        clutter += `<span>${e}</span>`;
      });
      elem.innerHTML = clutter;
    });
  
  
    gsap.to("#text-container h2 span", {
      color: "#e3e3c4",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#text-container h2 span",
        scroller: "#main",
        start: "top 55%",
        // markers:true,
        end: "top -20%",
        scrub: 2,
      },
    });
  
  }
  clutterbaby1();
  
  gsap.to("#page2 #svg2,#page2 #svg3", {
    left: '-100vw',
    scrollTrigger: {
      trigger: "#page2 #svg2",
      scroller: "#main",
      // markers:true,
      scrub: 2,
    }
  })
  
  
  
  function clutterbaby2() {
    document.querySelectorAll("#page3-text h1").forEach(function (dets) {
      var page3Clutter = "";
      dets.textContent.split("").forEach(function (elm) {
        page3Clutter += `<span>${elm}</span>`
      })
      dets.innerHTML = page3Clutter
    })
  
    gsap.to("#page3-text h1 span", {
      color: "#434B34",
      stagger: .3,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        //   markers:true,
        start: "top 55%",
        end: "top 20%",
        scrub: 2,
  
      }
    })
  }
  clutterbaby2();
  
  
  var page3_anim = gsap.timeline();
  
  
  gsap.from(".page3-anim", {
    y: 100,
    duration: 1,
    // delay:2,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page3-dis",
      scroller: "#main",
      // markers:true,
      start: "top 50%",
      end: "top 0%",
      scrub: 1
    }
  })
  gsap.from(".page4-div", {
    y: 100,
    duration: 1,
    // delay:2,
    opacity: 0,
  
    // opacity:0,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      // markers:true,
      start: "top 70%",
      end: "top -10%",
      scrub: 2
    }, stagger: 0.2,
  
  
  })
  
  
  
  
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  gsap.to(".page6-svg svg:nth-child(1)",{
    transform: `translateX(-100%)`,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      // start:"top 0%",
      // markers:true,
      scrub:2
    }
  })
  gsap.to(".page6-svg svg:nth-child(2)",{
    transform: `translateX(-50%)`,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start:"top 40%",
      // markers:true,
      scrub:2
    }
  })
  
  gsap.to(".page6-svg2 svg:nth-child(1)",{
    transform: `translateX(-25%)`,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start:"50% 50%",
      // markers:true,
      scrub:2
    }
  })
  gsap.to(".page6-svg2 svg:nth-child(2)",{
    transform: `translateX(-25%)`,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start:"50% 50%",
      // markers:true,
      scrub:2
    }
  })
  
  function clutterbaby4() {
    document.querySelectorAll("#page6-main h1").forEach(function (elem) {
  
      var splitedText = elem.textContent.split("");
      var clutter = "";
      splitedText.forEach(function (e) {
        clutter += `<span>${e}</span>`;
      });
      elem.innerHTML = clutter;
    });
  
  
    gsap.to("#page6-main h1 span", {
      opacity:1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#page6-main h1 span",
        scroller: "#main",
        start: "top 55%",
        // markers:true,
        end: "top 30%",
        scrub: 2,
      },
    });
  
  }
  clutterbaby4();
  
  gsap.from("#page6-main p",{
    y:100,
    opacity:0,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start: "0% 55%",
      end:"top 30%",
      // markers:true,
      scrub:2
    }
  })
  
  gsap.from("#page6>h3",{
    y:100,
    opacity:0,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      // markers:true,
      start:"50% 50%",
      end:"50% 40%",
      scrub:2
  
    }
  })
  gsap.from(".page6-sec",{
    y:100,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      // markers:true,
      start:"30% 50%",
      end:"30% 30%",
      scrub:3
    }
  })
  
  function babyclutter5(){
    document.querySelectorAll("#page7 h2").forEach((dets)=>{
      var clutter = "";
      dets.textContent.split("").forEach((elm)=>{
        clutter+=`<span>${elm}</span>`
      })
      dets.innerHTML = clutter;
    })
  
    gsap.to("#page7 h2 span",{
      opacity:1,
      stagger:0.1,
      color:"#434b34",
      scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        // markers:true,
        start:"top 30%",
        end:"top -30%",
        scrub:2
      }
    })
  }
  babyclutter5();
  
  gsap.to(".card:nth-child(1)",{
    transform: `translateX(-40%) rotate(-5deg)`,
    scrollTrigger:{
      trigger:"#page8",
      // markers:true,
      scroller:"#main",
      start:"top 50%",
      end:"top 0%",
      scrub:3
    }
  })
  gsap.to(".card:nth-last-child(1)",{
    transform: `translateX(40%) rotate(5deg)`,
    scrollTrigger:{
      trigger:"#page8",
      // markers:true,
      scroller:"#main",
      start:"top 50%",
      end:"top 0%",
  
      scrub:3
    }
  })
  gsap.from("#page8-main",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.4,
    scrollTrigger:{
      trigger:"#page8",
      // markers:true,
      scroller:"#main",
      start:"top 30%",
      end:"top 20%",
      scrub:2
    }
  })
  
  gsap.to("#page9-svg svg:nth-child(1)",{
    transform: `translateX(-25%)`,
    scrollTrigger:{
      trigger:"#page9",
      scroller:"#main",
      start:"0% 50%",
      // markers:true,
      scrub:2
    }
  })
  gsap.to("#page9-svg svg:nth-child(2)",{
    transform: `translateX(-25%)`,
    scrollTrigger:{
      trigger:"#page9",
      scroller:"#main",
      start:"0% 50%",
      // markers:true,
      scrub:2
    }
  })
  
  
  function page9clutter(){
    document.querySelectorAll("#page10 h1").forEach(function(dets){
      var clutter = ""
  
      dets.textContent.split("").forEach((elm)=>{
        clutter += `<span>${elm}</span>`
      })
      dets.innerHTML = clutter
    })
    gsap.to(`#page10 h1 span`,{
      opacity:1,
      stagger:0.1,
      scrollTrigger:{
        trigger:"#page10",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:2
      }
    })
  }
  page9clutter()
  
  gsap.from("#page10 p",{
    opacity:0,
    y:50,
    scrollTrigger:{
      trigger:"#page10",
      scroller:"#main",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
      scrub:2
    }
  })
  
  gsap.from(".page10-div",{
    opacity:0,
    y:50,
    stagger:0.1,
    scrollTrigger:{
      trigger:"#page10",
      scroller:"#main",
      // markers:true,
      start:"30% 50%",
      end:"top 20%",
      scrub:2
    }
  })