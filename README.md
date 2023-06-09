![header](https://capsule-render.vercel.app/api?type=soft&color=002053&height=150&section=header&text=EDIYA%20STORE&fontSize=50&fontColor=fff&animation=fadeIn)
## 📌 EDIYA STORE (개인프로젝트)

>  적응형웹인 이디야커피 스토어를 반응형웹으로 제작한 사이트입니다.  
> 모바일해상도부터 만들기시작하여 PC해상도까지 제작을하였습니다.  
> 제작후 netlify로 배포를 하였습니다. 
>
>[이디야스토어](https://ediya-portfolio.netlify.app/) <<클릭
>
> 개발 기간
> 2023.03.28 ~ 2023.5.1
>
> 사용한 기술 스택  
<a href="#!"><img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"/></a>
<a href="#!"><img src="https://img.shields.io/badge/css3-1572B6?style=flat&logo=css3&logoColor=white"/></a>
<a href="#!"><img src="https://img.shields.io/badge/jquery-0769AD?style=flat&logo=jquery&logoColor=white"/></a> 
>
> Tools  
> <a href="#!"><img src="https://img.shields.io/badge/visual studio code-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/></a>
> <a href="#!"><img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"/></a>  

## 📌 이미지
### PC버전  
  <img src="https://github.com/Tae-Hyun98/EDIYA-Project/assets/119056869/5642993e-5463-44fb-9118-a65e30c58c08" height="450"/>  
  
  
### 모바일/태블릿버전  
  <img src="https://github.com/Tae-Hyun98/EDIYA-Project/assets/119056869/bb73171a-50a3-4194-8e0f-96c71c430cdd" width="400" height="800" margin-right="30"/>
  <img src="https://github.com/Tae-Hyun98/EDIYA-Project/assets/119056869/51e2c737-b358-4977-a5f8-e7438424c362" width="400" height="800"/> 
  
## 주요코드  
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

## 📌 느낀점
> css 미디어쿼리를 이용하여 반응형으로 제작하며 여러 해상도에 적합한 웹을 만들수 있는 능력을 기를수 있었으며,
> 또한, 반응형웹을 제작하기 위해서는 미리 각 해상도에 맞는 배치들을 미리 구상을하고 코드를 짜는것이 좋다는것을 느끼게 되었습니다.
