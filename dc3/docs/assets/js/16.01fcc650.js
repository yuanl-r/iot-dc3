(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{708:function(t,e,r){"use strict";r.r(e);var a=r(62),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"快速启动"}},[t._v("快速启动 "),e("a",{staticClass:"header-anchor",attrs:{href:"#快速启动"}},[t._v("#")])]),t._v(" "),e("h2",{attrs:{id:"一、前提"}},[t._v("一、前提 "),e("a",{staticClass:"header-anchor",attrs:{href:"#一、前提"}},[t._v("#")])]),t._v(" "),e("ul",[e("li",[t._v("确保机器有 16G 运行内存")]),t._v(" "),e("li",[t._v("推荐安装 Chrome，"),e("a",{attrs:{href:"#chrome%E5%AE%89%E8%A3%85"}},[t._v("Chrome 安装")])]),t._v(" "),e("li",[t._v("确保安装了 Git，"),e("a",{attrs:{href:"#git%E5%AE%89%E8%A3%85"}},[t._v("Git 安装")])]),t._v(" "),e("li",[t._v("确保安装了 Docker，"),e("a",{attrs:{href:"#docker%E5%AE%89%E8%A3%85"}},[t._v("Docker 安装")])])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("必读")]),t._v(" "),e("p",[t._v("务必先查看驱动使用说明中的 "),e("RouterLink",{attrs:{to:"/docs/driver/0-driver.html"}},[e("strong",[t._v("前置概念")])]),t._v(" ，了解驱动的基本概念，否则可能会造成使用上的困惑。")],1)]),t._v(" "),e("h2",{attrs:{id:"二、启动"}},[t._v("二、启动 "),e("a",{staticClass:"header-anchor",attrs:{href:"#二、启动"}},[t._v("#")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 下载iot-dc3源码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/pnoker/iot-dc3.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" iot-dc3/dc3\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.1 启动后端容器")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" docker-compose-demo.yml up "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 下载iot-dc3-web源码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/pnoker/iot-dc3-web.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" iot-dc3-web/dc3\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2.1 启动前端容器")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" docker-compose-demo.yml up "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"三、访问"}},[t._v("三、访问 "),e("a",{staticClass:"header-anchor",attrs:{href:"#三、访问"}},[t._v("#")])]),t._v(" "),e("blockquote",[e("p",[t._v("网页打不打，需要检查 docker 的服务是否都启动正常，一般经验是多等它一会就可以了。")])]),t._v(" "),e("p",[t._v("待以上服务全部正常启动，访问 "),e("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),e("OutboundLink")],1),t._v(" 即可进入登陆页面！")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"安装指南"}},[t._v("安装指南 "),e("a",{staticClass:"header-anchor",attrs:{href:"#安装指南"}},[t._v("#")])]),t._v(" "),e("h3",{attrs:{id:"chrome-安装"}},[t._v("Chrome 安装 "),e("a",{staticClass:"header-anchor",attrs:{href:"#chrome-安装"}},[t._v("#")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.google.com/chrome/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome"),e("OutboundLink")],1),t._v(" ，不一样的浏览器体验")]),t._v(" "),e("h3",{attrs:{id:"git-安装"}},[t._v("Git 安装 "),e("a",{staticClass:"header-anchor",attrs:{href:"#git-安装"}},[t._v("#")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("操作系统")]),t._v(" "),e("th",[t._v("链接")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Mac")]),t._v(" "),e("td",[t._v("https://git-scm.com/download/mac")])]),t._v(" "),e("tr",[e("td",[t._v("Windows")]),t._v(" "),e("td",[t._v("https://git-scm.com/download/win")])]),t._v(" "),e("tr",[e("td",[t._v("Linux")]),t._v(" "),e("td",[t._v("https://git-scm.com/download/linux")])])])]),t._v(" "),e("h3",{attrs:{id:"docker-安装"}},[t._v("Docker 安装 "),e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[t._v("#")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("操作系统")]),t._v(" "),e("th",[t._v("链接")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Mac")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://download.docker.com/mac/edge/Docker.dmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Desktop For Mac"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("Windows")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://download.docker.com/win/edge/Docker%20Desktop%20Installer.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Desktop For Windows"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("Centos")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Docker Engine on CentOS"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("Ubuntu")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Docker Engine on Ubuntu"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("Debian")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.docker.com/engine/install/debian/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Docker Engine on Debian"),e("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);