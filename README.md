![header](https://capsule-render.vercel.app/api?type=soft&color=002053&height=150&section=header&text=EDIYA%20STORE&fontSize=50&fontColor=fff&animation=fadeIn)
## 📌 EDIYA STORE (개인프로젝트)  
> 적응형웹인 이디야커피 스토어를 반응형웹으로 제작한 사이트입니다.  


## 목차
  ### 1. [프로젝트 소개](#1-프로젝트-소개)
  ### 2. [제작기간](#2-제작-기간--20230621--20230630)
  ### 3. [사용한 기술스택](#3-사용한-skills)
  ### 4. [페이지 구성](#4-페이지-구성-1)
  ### 5. [주요기능(코드)](#5-주요기능)   
   - #### [](#)  
   - #### [](#)
   - #### [](#)  
  ### 6. [느낀점](#6-느낀점-1)

<br/> 

## 1. 프로젝트 소개
- 적응형웹인 이디야커피 스토어를 반응형웹으로 제작한 사이트입니다.  

- 퍼블리싱 및 기능구현은 **개인 100%** 작업입니다.

- 이디야프로젝트는 마크업과 스타일은 순수 HTML5와 CSS3를 이용하여 제작하였으며, 화면제어 및 애니메이션은 jQuery를 사용하여 제작하였습니다.

- 모바일해상도부터 만들기시작하여 PC해상도까지 제작을하였습니다.
  
- breakpoint는 모바일버전은 601px, 태블릿버전은 601 ~ 769px, 저해상도 PC는 769 ~ 1070px, 1070px ~ 1274px, 고해상도 PC는 1274px ~ 으로 나누었으며, 각 breakpoint에 도달할 시 새로고침이 되도록 구현하였습니다.

- 프로젝트는 제작후 netlify로 배포를 하였습니다. 


<br/>

## 2. 제작 기간 : 2023.03.28 ~ 2023.05.01

<br/>

## 3. 사용한 Skills  
<a href="#!"><img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"/></a>
<a href="#!"><img src="https://img.shields.io/badge/css3-1572B6?style=flat&logo=css3&logoColor=white"/></a>
<a href="#!"><img src="https://img.shields.io/badge/jquery-0769AD?style=flat&logo=jquery&logoColor=white"/></a> 
<a href="#!"><img src="https://img.shields.io/badge/visual studio code-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/></a>
<a href="#!"><img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"/></a>

<br/>

## 4. 페이지 구성  
페이지는 **메인페이지, 서브페이지**로 구성되어있습니다.

<br/>

## 📌 이미지
### PC버전  
  <img src="https://github.com/Tae-Hyun98/EDIYA-Project/assets/119056869/5642993e-5463-44fb-9118-a65e30c58c08" height="450"/>  
  
  
### 모바일/태블릿버전  
  <img src="https://github.com/Tae-Hyun98/EDIYA-Project/assets/119056869/bb73171a-50a3-4194-8e0f-96c71c430cdd" width="400" height="800" margin-right="30"/>
  <img src="https://github.com/Tae-Hyun98/EDIYA-Project/assets/119056869/51e2c737-b358-4977-a5f8-e7438424c362" width="400" height="800"/> 
  
## 5. 주요코드  
### 각 구간별 미디어쿼리 적용
```css
@media (min-width:601px) {
  .popup {
    position: fixed;
    width: 390px;
    left: -800px;
    top: 70px;
    bottom: auto;
    animation: none;
  }
  
  @media(min-width:1070px) {
  .header .menu label {
    display: none;
  }
```
### jQuery를 이용하여 스크롤이 되었을때 클래스 추가 및 삭제
```JavaScript
$(window).scroll(function () {
        if (window.innerWidth > 1070) {
          $(function () {
            if ($(window).scrollTop() >= 135) {
              $('.lnb_pc').addClass('fix');
            } else {
              $('.lnb_pc').removeClass('fix');
            };
          });
        } else {
          $('.lnb_pc').removeClass('fix');
          if ($(window).scrollTop() >= 115) {
            $('.header .fix_box').addClass('fixed');
          } else {
            $('.header .fix_box').removeClass('fixed');
          };
        };
      });
```

### jQuery를 이용한 퀵메뉴  
#### 퀵메뉴를 현재 높이의 중간에 오도록 하고, 각 해상도 별로 높이가 다르기때문에 구간별로 설정을 하였습니다.
```JavaScript
$(window).resize(function () {
        if (window.innerWidth > 1274) {
          $(function () {
            $('.quick').css('top', $(window).height() / 2 - $('.quick').height() / 2);
            $(window).scroll(function () {
              let point = $(this).scrollTop() + ($(window).height() / 2 - $('.quick').height() / 2);
              $('.quick').stop().animate({
                top: point
              }, 200);
            });
          });
          let delay = 500;
          let timer = null;
          $(window).on('resize', function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
              document.location.reload();
            }, delay);
          });
        } else if (window.innerWidth > 769) {
          $(function () {
            $('.quick').css('top', $(window).height() / 1.01 - $('.quick').height() * 1.01);
            $(window).scroll(function () {
              let point = $(this).scrollTop() + ($(window).height() / 1.03 - $('.quick').height() *
                1.03);
              $('.quick').stop().animate({
                top: point
              }, 200);
            });
          });
```

## 6. 느낀점
> 첫 반응형 프로젝트로써 html으로 마크업을 할수 있는 능력과, 순수 css 미디어쿼리를 이용하여 반응형으로 스타일을 입히며 여러 해상도에 적합한 웹을 만들수 있는 능력을 기를수 있었으며,
> 또한, 반응형웹을 제작하기 위해서는 미리 각 해상도에 맞는 배치들을 미리 구상을하고 코드를 짜는것이 좋다는것을 느끼게 되었습니다.
> 프로젝트를 통해 jQuery의 문법을 활용할 수 있는 계기가 되었습니다.
