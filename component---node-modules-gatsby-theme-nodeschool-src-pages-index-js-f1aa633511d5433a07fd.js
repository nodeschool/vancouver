(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2e7i":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"email":"organizers@nodeschoolyvr.com"}}}}')},"3dvn":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=s(a("q1tI")),r=a("17x9"),i=s(a("Xlix"));function s(e){return e&&e.__esModule?e:{default:e}}var c=2*Math.PI/6,l=0;function d(e){return Number(e.toFixed(3))}function b(e,t){for(var a,n=e.diagonal/2,o=.868217054*e.diagonal/2,r=(a=90,Math.PI*a/180),i=n,s=[],l=0;l<6;l++){var b=r+l*c;s.push([t/2+o+i*Math.cos(b),t/1.5+n-i*Math.sin(b)])}return s.map((function(e){return e.map(d)}))}function u(e){var t=e.backgroundImage&&"bg-"+ ++l,a=function(e,t){var a={};for(var n in t)t.hasOwnProperty(n)&&(a[n]=t[n]);for(var o in e)void 0===a[o]&&e.hasOwnProperty(o)&&(a[o]=e[o]);return a}({fill:e.backgroundImage?"url(#"+t+")":"none",stroke:"#42873f",strokeWidth:.02*e.diagonal,cursor:e.onClick&&"pointer"},e.style),r={maxX:-1/0,maxY:-1/0,minX:1/0,minY:1/0},s=a.strokeWidth,c=Math.ceil(s/2),u=e.flatTop?function(e,t){var a=e.diagonal/2,n=.868217054*e.diagonal/2,o=n+(a-n),r=.866*a,i=.5*a;return[[o-i,a-r],[o+i,a-r],[o+a,a],[o+i,a+r],[o-i,a+r],[o-a,a]].map((function(e){return e.map(d)}))}(e):b(e,s),m=function(e){return{maxX:e.maxX-e.minX,maxY:e.maxY-e.minY,minX:e.minX,minY:e.minY}}(u.reduce((function(e,t){return{maxX:Math.ceil(Math.max(e.maxX,t[0]+c)),maxY:Math.ceil(Math.max(e.maxY,t[1]+c)),minX:Math.floor(Math.min(e.minX,t[0]-c)),minY:Math.floor(Math.min(e.minY,t[1]-c))}}),r)),p=[m.minX,m.minY,m.maxX+(m.minX<0?Math.abs(m.minX):0),m.maxY+(m.minY<0?Math.abs(m.minY):0)].join(" "),h=o.default.createElement("polygon",n({},e.hexProps,{onClick:e.onClick,style:a,points:u.map((function(e){return e.join(",")})).join(" ")})),g=e.href&&o.default.createElement("a",{xlinkHref:e.href,target:e.target},h);return o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:e.className,viewBox:p},e.backgroundImage&&o.default.createElement(i.default,n({id:t},e)),g||h,e.children)}u.propTypes={diagonal:r.number,className:r.string,onClick:r.func,href:r.string,target:r.string,flatTop:r.bool,backgroundImage:r.string,backgroundWidth:r.number,backgroundHeight:r.number,backgroundScale:r.number,backgroundSize:r.number,hexProps:r.object,style:r.object,children:r.node},u.defaultProps={diagonal:500,flatTop:!1,style:{}},t.default=u},"9Cqz":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"NodeSchool Vancouver","twitter":"NodeSchoolYVR","github":"nodeschool/vancouver","meetupGroup":"nodeschool-vancouver","mailchimpSubscribeUrl":"https://nodeschoolyvr.us20.list-manage.com/subscribe/post?u=703e823487e1f52bfbe0cc32d&amp;id=34f1146956","credits":{"logo":{"name":"Kenneth Ormandy","url":"https://kennethormandy.com/"}}}},"schoolhouseImage":{"extension":"svg","publicURL":"/vancouver/static/274d82f567d8ef2c4563572b3aa2e85b/schoolhouse-beige.svg"}}}')},DisG:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"twitter":"NodeSchoolYVR","slack":""}}}}')},FHa1:function(e){e.exports=JSON.parse('{"data":{"allMeetupEvent":{"edges":[]}}}')},L7EA:function(e){e.exports=JSON.parse('{"data":{"allFile":{"edges":[{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/191dcdb0507e8c0115b6ce99d07f96c9/bae4e/20200208-nodeschool-1.jpg"},"original":{"src":"/vancouver/static/20200208-nodeschool-1-191dcdb0507e8c0115b6ce99d07f96c9.jpg"}},"id":"25beac16-5eb7-5cfe-bd0d-03ffcfef6602","relativeDirectory":"photos","relativePath":"photos/20200208-nodeschool-1.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/7233f64e6fc780bc63043755e9b42e55/bae4e/20200111-nodeschool-1.jpg"},"original":{"src":"/vancouver/static/20200111-nodeschool-1-7233f64e6fc780bc63043755e9b42e55.jpg"}},"id":"d485cb75-9a60-5224-85c7-d15324bdd344","relativeDirectory":"photos","relativePath":"photos/20200111-nodeschool-1.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/cdcaa9122a493b88d4d9f6adb3841200/bae4e/20190914-nodeschool-1.jpg"},"original":{"src":"/vancouver/static/20190914-nodeschool-1-cdcaa9122a493b88d4d9f6adb3841200.jpg"}},"id":"7d7a40be-3ba7-5834-a969-2f6114c7dc42","relativeDirectory":"photos","relativePath":"photos/20190914-nodeschool-1.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/5e528e1a3e6c3ca6fc48d96bbc7d9865/bae4e/20190810.jpg"},"original":{"src":"/vancouver/static/20190810-5e528e1a3e6c3ca6fc48d96bbc7d9865.jpg"}},"id":"e783322f-0c11-54c9-a858-9fef67d4fee0","relativeDirectory":"photos","relativePath":"photos/20190810.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/f5e962a21766c45752e56a45fc6cc60d/bae4e/20190413-SpringIsHere.jpg"},"original":{"src":"/vancouver/static/20190413-SpringIsHere-f5e962a21766c45752e56a45fc6cc60d.jpg"}},"id":"399044ff-56c0-5123-a219-da1b34c3fd28","relativeDirectory":"photos","relativePath":"photos/20190413-SpringIsHere.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/c25a42e9460cc72e9a9fc8213350282e/bae4e/20190316-GettingStarted-OpenSource.jpg"},"original":{"src":"/vancouver/static/20190316-GettingStarted-OpenSource-c25a42e9460cc72e9a9fc8213350282e.jpg"}},"id":"c6c616fb-b4ec-5371-badc-4032995b4f7a","relativeDirectory":"photos","relativePath":"photos/20190316-GettingStarted-OpenSource.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/d79bcf1855a2489294fb9fbdd86aebb0/bae4e/20190209-SpringIsHereSeries-2.jpg"},"original":{"src":"/vancouver/static/20190209-SpringIsHereSeries-2-d79bcf1855a2489294fb9fbdd86aebb0.jpg"}},"id":"6ad7f5b4-9a61-5639-a309-0e60e00a3c8a","relativeDirectory":"photos","relativePath":"photos/20190209-SpringIsHereSeries-2.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/d38459e934826133e01b9577aaa5f013/bae4e/20190209-SpringIsHereSeries-1.jpg"},"original":{"src":"/vancouver/static/20190209-SpringIsHereSeries-1-d38459e934826133e01b9577aaa5f013.jpg"}},"id":"9c577e95-fcd3-57cf-a2a9-2d7b20398ffc","relativeDirectory":"photos","relativePath":"photos/20190209-SpringIsHereSeries-1.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/8d716adf2cc40d7dc1ed2817da521eaf/bae4e/20181013-FallIsHere.jpg"},"original":{"src":"/vancouver/static/20181013-FallIsHere-8d716adf2cc40d7dc1ed2817da521eaf.jpg"}},"id":"c7b55970-4dc1-5ed7-b504-da08ded57891","relativeDirectory":"photos","relativePath":"photos/20181013-FallIsHere.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/05fd7a52d0f94a68552f580b849b72d7/f11e0/20180915-OpenSource-2.jpg"},"original":{"src":"/vancouver/static/20180915-OpenSource-2-05fd7a52d0f94a68552f580b849b72d7.jpg"}},"id":"825df2ce-6d79-59e7-92de-e6888847266d","relativeDirectory":"photos","relativePath":"photos/20180915-OpenSource-2.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/05fd7a52d0f94a68552f580b849b72d7/f11e0/20180915-OpenSource-1.jpg"},"original":{"src":"/vancouver/static/20180915-OpenSource-1-05fd7a52d0f94a68552f580b849b72d7.jpg"}},"id":"ef5e4334-f494-5926-983f-50d8dd6a4f34","relativeDirectory":"photos","relativePath":"photos/20180915-OpenSource-1.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/15b7fe6882108631a056f11b5ed2017b/bae4e/20180908-SummerIsHere.jpg"},"original":{"src":"/vancouver/static/20180908-SummerIsHere-15b7fe6882108631a056f11b5ed2017b.jpg"}},"id":"57f457a1-111c-5106-a42e-d4f9592cf00e","relativeDirectory":"photos","relativePath":"photos/20180908-SummerIsHere.jpg"}},{"node":{"childImageSharp":{"fixed":{"src":"/vancouver/static/865c2c327cb6d299c167b6f079664897/bae4e/20180519-SummerIsHere.jpg"},"original":{"src":"/vancouver/static/20180519-SummerIsHere-865c2c327cb6d299c167b6f079664897.jpg"}},"id":"c12a56e9-403d-5f33-911b-3888db2677fd","relativeDirectory":"photos","relativePath":"photos/20180519-SummerIsHere.jpg"}}]}}}')},LC5o:function(e,t,a){"use strict";a.r(t);var n=a("9Cqz"),o=a("q1tI"),r=a.n(o),i=a("9kay"),s=a("RLLa"),c=a("2Xs+"),l=a("wx14"),d=a("ci24"),b=a("qKvR"),u=function(e){var t=e.description,a=e.name,n=e.venue;e.time,e.utc_offset,e.updated;return Object(b.b)("div",null,Object(b.b)("h1",null,a),Object(b.b)("div",{dangerouslySetInnerHTML:{__html:t}}),n&&Object(b.b)("div",null,n.name,n.repinned,n.address_1,n.address_2,n.city,n.state,n.zip,n.country,n.lat,",",n.lon,n.localized_country_name))},m=function(){return d.data.allMeetupEvent.edges.map((function(e){return Object(b.b)(u,Object(l.a)({key:e.node.id},e.node))}))},p=a("FHa1"),h=a("ubkq"),g=a.n(h),f={en:"m/d/yyyy",pt:"dd/mm/yyyy","pt-br":"dd/mm/yyyy"},v=function(e,t){var a=f[t.toLowerCase()]||f.en;return g()(e,a)},y=function(){var e=Object(i.useTranslation)(),t=e.t,a=e.i18n;return p.data.allMeetupEvent.edges.map((function(e){var n=e.node.venue?[e.node.venue.name,e.node.venue.address_1,e.node.venue.address_2,[e.node.venue.city,e.node.venue.state].filter(Boolean).join(", "),e.node.venue.zip,e.node.venue.localized_country_name].filter(Boolean):[];return Object(b.b)("div",{key:e.node.id},Object(b.b)("p",{className:"register"},Object(b.b)("strong",null,Object(b.b)("a",{href:e.node.link,title:"Registration Link"},t("Register")))," ",t("for our event on")," ",Object(b.b)("strong",null,v(new Date(e.node.time),a.language))),e.node.venue&&Object(b.b)(r.a.Fragment,null,Object(b.b)("div",{className:"location"},Object(b.b)("p",null,Object(b.b)("strong",null,t("Location"),":")),Object(b.b)("address",null,n.map((function(e){return Object(b.b)("span",{key:e},e,Object(b.b)("br",null))}))),e.node.how_to_find_us),Object(b.b)("div",{className:"map"},Object(b.b)("iframe",{title:"google maps",src:"https://maps.google.com/maps?q="+encodeURIComponent(n.join("\n"))+"&t=&z=13&ie=UTF8&iwloc=&output=embed",width:"600",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:!0}))))}))},j=function(){return Object(b.b)(r.a.Fragment,null,Object(b.b)(m,null),Object(b.b)("hr",null),Object(b.b)(y,null))},O=a("yC7u"),w=function(){var e=Object(i.useTranslation)().t,t=O.data;return Object(b.b)("p",null,Object(b.b)("a",{href:"https://twitter.com/"+t.site.siteMetadata.twitter,className:"twitter-follow-button","data-show-count":"false"},e("Follow")," @",t.site.siteMetadata.twitter))},M=a("DisG"),S=function(){var e=Object(i.useTranslation)().t,t=M.data;return Object(b.b)(r.a.Fragment,null,Object(b.b)("h2",{id:"community"},e("Community")),Object(b.b)("p",null,e("The NodeSchool community is")," ",Object(b.b)("strong",null,e("open to anyone")),"."," ",e("Whether you're able to attend an event or not, you can join the discussion around learning Node")," ",[t.site.siteMetadata.slack?e("in our Slack channel"):null,t.site.siteMetadata.twitter?e("by following us on Twitter"):null].filter(Boolean).join(" "+e("or")+" ")))},k=function(){var e=Object(i.useTranslation)().t;return Object(b.b)(r.a.Fragment,null,Object(b.b)("h2",{id:"sponsors"},e("Sponsors")))},N=function(){return Object(b.b)(r.a.Fragment,null)},x=a("rbv5"),T=a("wTIg"),I=a("3dvn"),H=a.n(I),D=Object(T.a)("div",{target:"ehcuf7z0"})({name:"8m2wph",styles:"display:grid;grid-gap:0px;grid-template-columns:repeat(auto-fit,minmax(120px,0.25fr));width:100%;z-index:900;transform:translate3d(-5%,0,0);position:relative;&:hover{svg{transition:opacity 0.3s,transform 0.2s;opacity:0.25;&:hover{opacity:1 !important;transform:scale(1.5);z-index:9999;}}}svg{padding:0;margin:0;polygon{stroke:transparent !important;stroke-width:0 !important;}}"}),P=function(e){var t=e.people;return Object(b.b)(D,null,t.map((function(e){return Object(b.b)(H.a,{key:e.id,href:e.twitter?"https://twitter.com/"+e.twitter:"https://github.com/"+e.github,backgroundImage:"https://avatars3.githubusercontent.com/"+e.github+"?v=3&amp;s=120",rel:"noopener noreferrer",target:"_blank"})})))},z=function(){var e=Object(i.useTranslation)().t,t=x.data;return Object(b.b)(r.a.Fragment,null,Object(b.b)("h2",{id:"mentors"},e("Mentors")),Object(b.b)(P,{people:t.allMentorsYaml.edges.map((function(e){return e.node}))}),Object(b.b)("p",null,e("If you want to help teach or contribute in anyway, make a")," ",Object(b.b)("strong",null,Object(b.b)("a",{href:"https://github.com/"+t.site.siteMetadata.github+"/pulls"},"Pull Request"))," ",e("and add your name to the list of available mentors"),"."," ",e("We also ask that you please read the")," ",Object(b.b)("a",{href:"https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices#on-being-a-mentor"},'"',e("On Being a Mentor"),'"')," ",e("tips for")," ",Object(b.b)("strong",null,e("NodeSchool Organizers"))," ",e("before attending as a mentor"),"."))},F=a("L7EA"),C=Object(T.a)("div",{target:"ebiwkhp0"})({name:"8m2wph",styles:"display:grid;grid-gap:0px;grid-template-columns:repeat(auto-fit,minmax(120px,0.25fr));width:100%;z-index:900;transform:translate3d(-5%,0,0);position:relative;&:hover{svg{transition:opacity 0.3s,transform 0.2s;opacity:0.25;&:hover{opacity:1 !important;transform:scale(1.5);z-index:9999;}}}svg{padding:0;margin:0;polygon{stroke:transparent !important;stroke-width:0 !important;}}"}),_=function(){var e=Object(i.useTranslation)().t,t=F.data;return Object(b.b)(r.a.Fragment,null,Object(b.b)("h2",{id:"photos"},e("Photos")),Object(b.b)(C,null,t.allFile.edges.map((function(e){return Object(b.b)(H.a,{key:e.node.id,href:e.node.childImageSharp.original.src,backgroundImage:e.node.childImageSharp.fixed.src,rel:"noopener noreferrer",target:"_blank"})}))))},W=a("db9V"),E=function(){var e=Object(i.useTranslation)().t,t=W.data;return Object(b.b)("div",{style:{margin:"auto"}},Object(b.b)("div",{style:{width:"100%",height:"100%"}},Object(b.b)("img",{src:t.placeholderImage.publicURL,alt:t.site.siteMetadata.title,style:{marginLeft:"auto",marginRight:"auto",display:"block",width:"250px",maxWidth:"250px"}})),Object(b.b)("h1",{style:{fontSize:"50px",lineHeight:"140%",textAlign:"center",fontWeight:"300",margin:"0 auto 60px",letterSpacing:"-1px",color:"#C0493D"}},e("Welcome to"),Object(b.b)("br",null),t.site.siteMetadata.title))},L=a("2e7i"),Y=function(){var e=Object(i.useTranslation)().t,t=L.data;return Object(b.b)("p",{className:"additional"},Object(b.b)("strong",null,"NodeSchool")," ",e("strives to be a welcoming and safe event for all attendees"),"."," ",e("Attendees should follow the"),"."," ",Object(b.b)("a",{href:"#codeofconduct"},e("Code of Conduct").toLowerCase()),"."," ",e("If you need further information about an event, please contact the organizers at"),"."," ",Object(b.b)("a",{style:{fontWeight:"bold"},href:"mailto:"+t.site.siteMetadata.email,rel:"noopener noreferrer",target:"_blank"}," "+t.site.siteMetadata.email))};t.default=function(){var e=Object(i.useTranslation)().t,t=n.data;return Object(b.b)(s.a,{noWrapper:!0},Object(b.b)(c.a,{title:"Home"}),Object(b.b)("main",{className:"main cf"},Object(b.b)("section",{className:"panel text"},Object(b.b)("div",{className:"container"},Object(b.b)(E,null),Object(b.b)(S,null),Object(b.b)(w,null),Object(b.b)("div",{className:"mailinglist"},Object(b.b)("h3",null,e("Get Notified")),Object(b.b)("p",null,e("Make sure you know what's going on within the community and whenever we're having an event by signing up to our mailing list below"),":"),Object(b.b)("form",{action:t.site.siteMetadata.mailchimpSubscribeUrl,method:"post",target:"_blank"},Object(b.b)("label",{className:"firstname"},Object(b.b)("span",null,e("First Name")),Object(b.b)("input",{type:"text",name:"FNAME",className:""})),Object(b.b)("label",{className:"lastname"},Object(b.b)("span",null,e("Last Name")),Object(b.b)("input",{type:"text",name:"LNAME",className:""})),Object(b.b)("label",{className:"email"},Object(b.b)("span",null,e("Email Address")),Object(b.b)("input",{type:"email",name:"EMAIL",className:"required email"})),Object(b.b)("input",{type:"submit",value:e("Subscribe"),name:"subscribe"}))),Object(b.b)("h2",{id:"events"},e("Events")),Object(b.b)("p",null,Object(b.b)("strong",null,t.site.siteMetadata.title)," ",e("events are run by an enthusiastic group of volunteers"),"."," ",e("The workshops will be held monthly and will always be free"),"."),Object(b.b)("p",null,e("The events offer a low-key environment to learn or practice Node and are generally three hours long"),"."),Object(b.b)("h2",{id:"faq"},e("Frequently Asked Questions")),Object(b.b)("h3",null,'"',e("What should I expect?"),'"'),Object(b.b)("p",null,e("NodeSchool is a self-directed learning environment, where you bring your own laptop to learn"),"."," ",e("The intention is for attendees to work on the Node workshops from")," ",Object(b.b)("a",{rel:"noopener noreferrer",target:"_blank",href:"http://nodeschool.io/#workshopper-list"},"nodeschool.io"),"."," ",e("But if you have a personal project you are working on, do it!")," ",e("The goal of NodeSchool is to help people explore and learn Node"),"."," ",e("There will be mentors on hand at the events to help you when you hit any road blocks"),"."),Object(b.b)("h3",null,'"',e("How do I install Node?"),' "'),Object(b.b)("p",null,e("Our recommended way to install Node is through something called"),'"Homebrew".'),Object(b.b)("p",{className:"indent"},Object(b.b)("strong",null,"1.")," ",e("Install Homebrew by copying the following command into a terminal/bash prompt"),":"),Object(b.b)("code",{className:"terminal"},Object(b.b)("pre",null,'$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')),Object(b.b)("p",{className:"indent"},Object(b.b)("strong",null,"2.")," ",e("Once installed, run"),Object(b.b)("code",null,"brew install node"),e("which should install the latest version of Node"),"."),Object(b.b)("p",null,e("If you have any issues installing either Homebrew or Node no worries"),"."," ",e("We'll do our best to help you get set up once you arrive at an event"),"."),Object(b.b)("h3",null,'"',e("What is a Workshopper?"),'"'),Object(b.b)("p",null,e("Workshopper is the name used for the open source lesson modules associated with NodeSchool"),"."," ",e("All are self guided (you don't need to attend a workshop to do one) and most work offline"),"."),Object(b.b)("h3",null,'"',e("How do I run a Workshopper?"),'"'),Object(b.b)("p",null,e("To get started with a Workshopper tutorial you'll have to install and then run that program in terminal/bash"),"."," ",e("Here's an example of how to install and run the Beginner Node Workshopper"),":"),Object(b.b)("code",{className:"terminal"},Object(b.b)("pre",null,"$ npm install -g learnyounode"),Object(b.b)("pre",null,"$ learnyounode")),Object(b.b)(_,null),Object(b.b)("h2",{id:"codeofconduct"},e("Code of Conduct")),Object(b.b)("p",null,e("We, the organizers of")," ",Object(b.b)("strong",null,t.site.siteMetadata.title),","," ",e("are dedicated to providing a harassment-free community for everyone, regardless of sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs"),"."," ",e("We do not tolerate harassment of community members in any form"),"."," ",e("Participants violating these rules may be sanctioned or expelled from the community at the discretion of the organizers of")," ",Object(b.b)("strong",null,t.site.siteMetadata.title),"."),Object(b.b)("p",null,e("Harassment includes offensive verbal or written comments related to sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs, deliberate intimidation, threats, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention"),"."," ",e("Sexual language and imagery is not appropriate for any events at")," ",Object(b.b)("strong",null,t.site.siteMetadata.title)," ",e("meetups or in any related communication channels"),"."," ",e("Community members asked to stop any harassing behavior are expected to comply immediately"),"."," ",e("Sponsors and presenters are also subject to the anti-harassment policy"),"."),Object(b.b)("p",null,e("If a community member engages in harassing behavior, the organizers of")," ",Object(b.b)("strong",null,t.site.siteMetadata.title)," ",e("may take any action they deem appropriate, including warning the offender or expulsion from the community"),"."," ",e("If you are being harassed, notice that someone else is being harassed, or have any concerns, please contact an organizer immediately"),"."),Object(b.b)("div",{className:"footer"},Object(b.b)("h2",{id:"credit"},e("Credits")),Object(b.b)("p",{className:"credit"},e("credit-The")," ",t.site.siteMetadata.title," ",e("Hex Logo was kindly designed by")," ",Object(b.b)("a",{href:t.site.siteMetadata.credits.logo.url,rel:"noopener noreferrer",target:"_blank"},t.site.siteMetadata.credits.logo.name),"."),Object(b.b)("p",{className:"links"},t.site.siteMetadata.meetupGroup&&Object(b.b)(r.a.Fragment,null,Object(b.b)("a",{href:"https://www.meetup.com/"+t.site.siteMetadata.meetupGroup,title:t.site.siteMetadata.title+" "+e("Event")},e("Events")),Object(b.b)("span",{className:"divider"},"|")),Object(b.b)("a",{href:"https://twitter.com/"+t.site.siteMetadata.twitter,title:t.site.siteMetadata.title+" Twitter"},"Twitter"),Object(b.b)("span",{className:"divider"},"|"),Object(b.b)("a",{href:"https://github.com/"+t.site.siteMetadata.github,title:t.site.siteMetadata.title+" GitHub"},"GitHub"),Object(b.b)("span",{className:"divider"},"|"),Object(b.b)("a",{href:"http://nodeschool.io/",title:"NodeSchool"},"NodeSchool.io"))))),Object(b.b)("aside",{className:"panel side"},Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"inner"},Object(b.b)("a",{className:"logo",href:"http://nodeschool.io"},Object(b.b)("img",{src:t.schoolhouseImage.publicURL,alt:t.site.siteMetadata.title}),Object(b.b)("p",{className:"about"},Object(b.b)("strong",null,"NodeSchool")," ",e("is a selection of open source workshops that teach web software skills"),"."," ",e("You can do them on your own or at one of the monthly")," ",Object(b.b)("strong",null,t.site.siteMetadata.title)," ",e("events"),".")),Object(b.b)("div",{className:"event"},Object(b.b)(j,null),Object(b.b)(Y,null)),Object(b.b)(z,null),Object(b.b)(N,null),Object(b.b)(k,null))))))}},Xlix:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=a("q1tI"),r=(n=o)&&n.__esModule?n:{default:n},i=a("17x9");function s(e){var t=e.diagonal,a=function(e){var t=e.diagonal,a=e.diagonal;return e.flatTop&&(t*=1.05,a*=1.05),e.backgroundScale?a=t*=e.backgroundScale:e.backgroundWidth?(t=e.backgroundWidth,a=e.backgroundHeight):e.backgroundSize&&(t=e.backgroundSize,a=e.backgroundSize),{width:t,height:a}}(e),n=a.width,o=a.height,i=n!==t,s=i?n:"100%",c=i?o:"100%",l=e.yOffset||0,d=void 0===e.xOffset&&e.flatTop?0-.065*s:0;return r.default.createElement("defs",null,r.default.createElement("pattern",{id:e.id,width:n,height:o,patternUnits:"userSpaceOnUse"},r.default.createElement("image",{x:d,y:l,width:s,height:c,xlinkHref:e.backgroundImage})))}s.propTypes={id:i.string.isRequired,flatTop:i.bool,backgroundImage:i.string.isRequired,backgroundScale:i.number,backgroundWidth:i.number,backgroundHeight:i.number,backgroundSize:i.number,xOffset:i.number,yOffset:i.number,diagonal:i.number},t.default=s},ci24:function(e){e.exports=JSON.parse('{"data":{"allMeetupEvent":{"edges":[]}}}')},db9V:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"NodeSchool Vancouver"}},"placeholderImage":{"extension":"svg","publicURL":"/vancouver/static/2fd150dea7f3412d3e94f27e2a91cd57/nodeschool-chapter-logo.svg"}}}')},rbv5:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"github":"nodeschool/vancouver"}},"allMentorsYaml":{"edges":[{"node":{"id":"2892ab36-3141-5b49-a078-0c017302f94e","github":"ayliao","name":"Albert Liao","twitter":null}},{"node":{"id":"4e97750d-23f1-5b05-855a-bb36f015a3ae","github":"vrunoa","name":"Bruno","twitter":"vrunoa"}},{"node":{"id":"6036b012-d036-55aa-8835-5195cf570f99","github":"halkeye","name":"Gavin Mogan","twitter":"halkeye"}},{"node":{"id":"9e742048-e6be-5f61-8acc-2cc12d88fc2e","github":"keywordnew","name":"Manil","twitter":"keywordnew"}},{"node":{"id":"6df6e886-e723-57f3-937a-b439bf4391e7","github":"nfg","name":"Nigel","twitter":"thaeus"}},{"node":{"id":"b21952d2-3ced-5995-a275-84f868970fbc","github":"qard","name":"Stephen Belanger","twitter":"stephenbelanger"}}]}}}')},ubkq:function(e,t,a){var n;!function(o){"use strict";var r,i,s,c=(r=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==u(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var o=(t=String(c.masks[t]||t||c.masks.default)).slice(0,4);"UTC:"!==o&&"GMT:"!==o||(t=t.slice(4),a=!0,"GMT:"===o&&(n=!0));var m=a?"getUTC":"get",p=e[m+"Date"](),h=e[m+"Day"](),g=e[m+"Month"](),f=e[m+"FullYear"](),v=e[m+"Hours"](),y=e[m+"Minutes"](),j=e[m+"Seconds"](),O=e[m+"Milliseconds"](),w=a?0:e.getTimezoneOffset(),M=d(e),S=b(e),k={d:p,dd:l(p),ddd:c.i18n.dayNames[h],dddd:c.i18n.dayNames[h+7],m:g+1,mm:l(g+1),mmm:c.i18n.monthNames[g],mmmm:c.i18n.monthNames[g+12],yy:String(f).slice(2),yyyy:f,h:v%12||12,hh:l(v%12||12),H:v,HH:l(v),M:y,MM:l(y),s:j,ss:l(j),l:l(O,3),L:l(Math.round(O/10)),t:v<12?c.i18n.timeNames[0]:c.i18n.timeNames[1],tt:v<12?c.i18n.timeNames[2]:c.i18n.timeNames[3],T:v<12?c.i18n.timeNames[4]:c.i18n.timeNames[5],TT:v<12?c.i18n.timeNames[6]:c.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(i)||[""]).pop().replace(s,""),o:(w>0?"-":"+")+l(100*Math.floor(Math.abs(w)/60)+Math.abs(w)%60,4),S:["th","st","nd","rd"][p%10>3?0:(p%100-p%10!=10)*p%10],W:M,N:S};return t.replace(r,(function(e){return e in k?k[e]:e.slice(1,e.length-1)}))});function l(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function d(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var o=(t-a)/6048e5;return 1+Math.floor(o)}function b(e){var t=e.getDay();return 0===t&&(t=7),t}function u(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return c}.call(t,a,t,e))||(e.exports=n)}()},yC7u:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"twitter":"NodeSchoolYVR"}}}}')}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-nodeschool-src-pages-index-js-f1aa633511d5433a07fd.js.map