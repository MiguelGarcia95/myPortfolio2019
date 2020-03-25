(window.webpackJsonpmy_portfolio=window.webpackJsonpmy_portfolio||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(8),o=t.n(r),c=t(1),i=t(2),l=t(4),m=t(3),u=t(5);t(14);var p=function(e){var a=e.scrollTo,t=e.opened,s=e.toggle,r=function(e){s(),a(e)};return n.a.createElement("div",{className:"navbar"},n.a.createElement("div",{className:"page-container"},n.a.createElement("div",{className:"branding"},n.a.createElement("p",{className:"title"},"Miguel Garcia"),n.a.createElement("p",{className:"subtitle"},"Web Developer")),n.a.createElement("div",{className:"menu"},n.a.createElement("div",{className:"menu-ham",onClick:s},n.a.createElement("div",{className:"bar"}),n.a.createElement("div",{className:"bar"}),n.a.createElement("div",{className:"bar"})),n.a.createElement("div",{className:"menu-list ".concat(t&&"opened")},n.a.createElement("p",{className:"item",onClick:function(){return r("#projects")}},"Projects"),n.a.createElement("p",{className:"item",onClick:function(){return r("#about")}},"About"),n.a.createElement("p",{className:"item",onClick:function(){return r("#contact")}},"Contact")),n.a.createElement("p",{className:"menu-item",onClick:function(){return a("#contact")}},"Contact"),n.a.createElement("p",{className:"menu-item",onClick:function(){return a("#about")}},"About"),n.a.createElement("p",{className:"menu-item",onClick:function(){return a("#projects")}},"Projects"))))};var g=function(e){var a=e.project;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:a.images[0].url,alt:""})),n.a.createElement("h2",{className:"name"},a.name))};t(15);var d=function(e){var a=e.title,t=e.float;return n.a.createElement("div",{className:"title-content"},n.a.createElement("h1",{className:"background-title ".concat(t)},a),n.a.createElement("h1",{className:"title ".concat(t)},a))},h=(t(16),[{name:"Game View",description:"A game database website. It includes games, game reviews, game franchises and game characters. It contains over 15,000 games. All powered by the giant bomb API, and a NodeJS backend for api calls.",imageCount:4,images:[{id:1,url:"/assets/projects/game-view-01.png",class:"image-1"},{id:2,url:"/assets/projects/game-view-02.png",class:"image-2 image-startPos"},{id:3,url:"/assets/projects/game-view-03.png",class:"image-3 image-startPos"},{id:4,url:"/assets/projects/game-view-04.png",class:"image-4 image-startPos"}],used:["HTML/CSS","Javascript","NodeJS","Express","Heroku"],url:"https://young-thicket-81676.herokuapp.com"},{name:"Draggable Planner (Trello Clone)",description:"A Trello Clone made using ReactJS, NodeJS and Redux. The Planner App lets you drag and drop tasks across lists as well as reordering lists. App is hosted on Heroku. Try out with: email: admin@admin.com & password: password123",imageCount:3,images:[{id:1,url:"/assets/projects/planner_01.png",class:"image-1"},{id:2,url:"/assets/projects/planner_02.png",class:"image-2 image-startPos"},{id:3,url:"/assets/projects/planner_03.png",class:"image-3 image-startPos"}],used:["HTML/CSS","Javascript","ReactJS","Redux","Ajax","NodeJS","Express","Mongodb","Heroku"],url:"https://react-draggable-planner.herokuapp.com/#/"},{name:"Movie Search Base",description:"This project is a Movie Search App made using react, redux, and the TMDB API. It uses O-Auth to login using your TMDB account.",imageCount:4,images:[{id:1,url:"/assets/projects/movie_01.png",class:"image-1"},{id:2,url:"/assets/projects/movie_02.png",class:"image-2 image-startPos"},{id:3,url:"/assets/projects/movie_03.png",class:"image-3 image-startPos"},{id:4,url:"/assets/projects/movie_04.png",class:"image-4 image-startPos"}],used:["HTML/CSS","Javascript","ReactJS","Redux","firebase","O-Auth"],url:"https://movie-searchbase.firebaseapp.com"},{name:"Nike Shoe Display",description:"Animated Shoe Display Website made using Gsap. My main focus was the color transition on the shoe page.",imageCount:3,images:[{id:1,url:"/assets/projects/shoe_01.png",class:"image-1"},{id:2,url:"/assets/projects/shoe_02.png",class:"image-2 image-startPos"},{id:3,url:"/assets/projects/shoe_03.png",class:"image-3 image-startPos"}],used:["HTML/CSS","Javascript","Gsap/Animation","Photoshop"],url:"https://miguelgarcia95.github.io/Shoe-Page/"},{name:"Chamber of Nature - Book Promotion Site",description:"A Book Promotion website for a made up fantasy book.",imageCount:3,images:[{id:1,url:"/assets/projects/book_01.png",class:"image-1"},{id:2,url:"/assets/projects/book_02.png",class:"image-2 image-startPos"},{id:3,url:"/assets/projects/book_03.png",class:"image-3 image-startPos"}],used:["HTML/CSS","Javascript","Gsap/Animation","Scrollmagic","Photoshop"],url:"https://miguelgarcia95.github.io/Chamber-Of-Nature-/"},{name:"Kanz | Digital Agency",description:"Kanz, a digital agency site made using Gsap and Scrollmagic.",imageCount:3,images:[{id:1,url:"/assets/projects/kanz_01.png",class:"image-1"},{id:2,url:"/assets/projects/kanz_02.png",class:"image-2 image-startPos"},{id:3,url:"/assets/projects/kanz_03.png",class:"image-3 image-startPos"}],used:["HTML/CSS","Javascript","Scrollmagic","Photoshop"],url:"https://miguelgarcia95.github.io/Design-Site/"},{name:"Orbit-Chat",description:"This project is a Discord like app with similar functionality. It was made using React, Redux, and Firebase. Try out: Email: email@email.com | Password: password1234",imageCount:3,images:[{id:1,url:"/assets/projects/chat_01.png",class:"image-1"},{id:2,url:"/assets/projects/chat_02.png",class:"image-2 image-startPos"},{id:3,url:"/assets/projects/chat_03.png",class:"image-3 image-startPos"}],used:["HTML/CSS","Javascript","ReactJS","Redux","Firebase"],url:"https://orbit-chat-v2.firebaseapp.com/app"},{name:"Node CMS Blog",description:"A CMS blog. It was made using Nodejs, Express and Mongodb. It lets users create categories, posts, and edit/delete anything they have created. It also contains admin features.",imageCount:3,images:[{id:1,url:"/assets/projects/cms-01.png",class:"image-1"},{id:2,url:"/assets/projects/cms-02.png",class:"image-2 image-startPos"},{id:3,url:"/assets/projects/cms-03.png",class:"image-3 image-startPos"}],used:["HTML/CSS","Javascript","Node Js","Heroku","Express","Mongoose","Mongodb","Ajax"],url:"https://kai2b.herokuapp.com"}]);var v=function(){return n.a.createElement("div",{className:"section projects",id:"projects"},n.a.createElement("div",{className:"page-container"},n.a.createElement("div",{className:"content"},n.a.createElement(d,{title:"Projects",float:"left"}),n.a.createElement("div",{className:"projects-display"},h.map((function(e){return n.a.createElement(g,{id:e.id,project:e})}))))))};t(17);var E=function(e){var a=e.scrollTo;return n.a.createElement("div",{className:"section about",id:"about"},n.a.createElement("div",{className:"page-container"},n.a.createElement("div",{className:"content"},n.a.createElement(d,{title:"About",float:"right"}),n.a.createElement("div",{className:"description"},n.a.createElement("p",null,"I have worked with both the Front End & Back End development"),n.a.createElement("p",null,"HTML, CSS, JS, ReactJS, ReduxJS for Front End websites and applications."),n.a.createElement("p",null,"NodeJS, Express, PHP, Laravel, MongoDB, MySQL for the Back End"),n.a.createElement("p",null,"Also have some working knowledge of Photoshop, and Illustrator."),n.a.createElement("p",null,"I also have an interest in character design, story telling and game design/development."),n.a.createElement("p",null,"Visit my ",n.a.createElement("a",{className:"link",href:"https://github.com/MiguelGarcia95",target:"_blank"},"Github")," or ",n.a.createElement("span",{onClick:function(){return a("#contact")},className:"link"},"Contact")," me.")))))},b=t(6),j="user_QOkiOsmACE9D7d0WHN4cr",f=(t(18),window.emailjs),S=function(e){function a(){var e,t;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={name:"",email:"",subject:"",message:"",nameError:"",emailError:"",subjectError:"",messageError:"",messageSent:""},t.onChange=function(e){var a;return t.setState((a={},Object(b.a)(a,e.target.name,e.target.value),Object(b.a)(a,"".concat(e.target.name,"Error"),""),a))},t.validateForm=function(){var e=[];return t.state.email||(e.push({}),t.setState({emailError:"Enter an Email"})),t.state.name||(e.push({}),t.setState({nameError:"Enter an Name"})),t.state.subject||(e.push({}),t.setState({subjectError:"Enter an Subject"})),t.state.message||(e.push({}),t.setState({messageError:"Enter an Message"})),!(e.length>0)},t.sendEmail=function(e){if(e.preventDefault(),t.validateForm()){var a=t.state.name,s={from_name:"".concat(a," (").concat(t.state.email,")"),to_name:"miguel@miguel-garcia.co",subject:t.state.subject,message_html:t.state.message};f.send("sendgrid","template_MqjTWjc0",s,j).then((function(){t.setState({messageSent:"Message sent"})})).catch((function(e){return console.log(e)})),t.clearForm()}},t.clearForm=function(){t.setState({name:"",email:"",subject:"",message:"",errors:[]}),setInterval((function(){t.setState({messageSent:""})}),5e3)},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){f.init(j)}},{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,s=e.subject,r=e.message,o=e.nameError,c=e.emailError,i=e.subjectError,l=e.messageError,m=e.messageSent;e.opened;return n.a.createElement("div",{className:"section contact",id:"contact"},n.a.createElement("div",{className:"page-container"},n.a.createElement("div",{className:"content"},n.a.createElement(d,{title:"Contact",float:"left"}),n.a.createElement("div",{className:"contact-form"},m&&n.a.createElement("div",{className:"contact-message"},n.a.createElement("p",null,m)),n.a.createElement("form",{onSubmit:this.sendEmail},n.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:a,onChange:this.onChange,className:o?"error":""}),n.a.createElement("input",{type:"text",placeholder:"Subject",name:"subject",value:s,onChange:this.onChange,className:i?"error":""}),n.a.createElement("input",{type:"email",placeholder:"Email",name:"email",value:t,onChange:this.onChange,className:c?"error":""}),n.a.createElement("textarea",{placeholder:"What's up?",name:"message",value:r,onChange:this.onChange,className:l?"error":""}),n.a.createElement("button",null,"Send"))))))}}]),a}(n.a.Component),N=(t(19),function(e){function a(){var e,t;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={currentSection:"projects",projectModal:!1,project:"",navbar:!1},t.toggleNavbar=function(){return t.setState({navbar:!t.state.navbar})},t.scrollToTop=function(){window.TweenMax.to(window,.5,{scrollTo:{y:"#scrollToTop"}})},t.navScrollTo=function(e){window.TweenMax.to(window,.5,{scrollTo:{y:e,offsetY:80}})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.scrollToTop()}},{key:"render",value:function(){var e=this.state,a=(e.currentSection,e.projectModal,e.project,e.navbar);return n.a.createElement("div",{className:"body-wrapper"},n.a.createElement(p,{toggle:this.toggleNavbar,opened:a,scrollTo:this.navScrollTo}),n.a.createElement(v,null),n.a.createElement(E,{scrollTo:this.navScrollTo}),n.a.createElement(S,null))}}]),a}(n.a.Component));o.a.render(n.a.createElement(N,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a3b9585a.chunk.js.map