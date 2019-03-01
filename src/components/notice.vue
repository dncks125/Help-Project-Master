<template>
  <div>
    <asd></asd>
  <div class="container" style="margin-top: 20px; margin-left: 250px">
    <div class="row">
      <div class="col-sm">
        <h1>공지사항</h1>
      </div>
      <div class="col-sm">

      </div>
      <div class="col-sm">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="검색...">
          <div class="input-group-append">
            <button class="btn btn-outline-info" type="button"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="margin: 0px; padding: 0px;">

     <!-- <table style="width: 100%;" class="table table-hover table-sm custab">
        <thead class="thead-light">
        <tr>
          <th scope="col" class="no" style="width: 5%;">#</th>
          <th scope="col" class="title" >제목</th>
          <th scope="col" class="id" style="width: 18%;">작성자</th>
          <th scope="col" class="date" style="width: 10%;">작성일</th>
          <th scope="col" class="view" style="width: 10%;">조회수</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row" class="no">#</th>
          <td class="title"><a href="#/read_post"><strong>제목</strong></a></td>
          <td class="">
            <a id="btnGroupDrop1" class="dropdown-toggle" data-toggle="dropdown" href="#">
              <img src="../assets/logo.png" class="rounded-circle" style="height: 22px;width: 22px; background-color: azure">
              여기 작성자</a>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">메시지 보내기</a>
              <a class="dropdown-item" href="#">프로필 보기</a>
            </div>
          </td>
          <td class="date">여기 작성일</td>
          <td class="view">여기 조회수</td>
        </tr>
        </tbody>
      </table>-->
      <div class="container-fluid" style="margin: 0px; padding: 0px; margin-top: 40px">
        <ol>
          <li><a data-toggle="collapse" href="#Q1" role="button"><div>공지 - 버전 릴리즈 3.1.2</div> </a></li>
          <div class="collapse" id="Q1">
            <div class="card card-body">
              <a>
                - Version release 3.1.2<br>
                - 공지사항 디자인 수정<br>
                - 건의 사항 전송 추가<br></a>
            </div>
          </div>

          <li><a data-toggle="collapse" href="#Q2" role="button"><div>공지 - 버전 릴리즈 3.2.1</div> </a></li>
          <div class="collapse" id="Q2">
            <div class="card card-body">
              <a>
                - Version release 3.2.1<br>
                - 부트스트랩 CSS 수정<br>
                - CSS 디자인 위치 조정
              </a>
            </div>
          </div>

          <li><a data-toggle="collapse" href="#Q3" role="button"><div>공지 - 버전 릴리즈 3.1.2</div> </a></li>
          <div class="collapse" id="Q3">
            <div class="card card-body">
              <a>
                  - Version release 3.1.2<br>
                  - 프로젝트 생성창 수정<br>
                  - 게시판 관리 창 수정<br>
                  - 로그인 모달창을 수정
                </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q4" role="button"><div>공지 - 버전 릴리즈 3.1.1</div> </a></li>
          <div class="collapse" id="Q4">
            <div class="card card-body">
              <a>
                - Version release 3.1.1<br>
                - 캘린더 CSS 오류 수정<br>
                - 로그인 추가
              </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q5" role="button"><div>공지 - 버전 릴리즈 2.2.4</div> </a></li>
          <div class="collapse" id="Q5">
            <div class="card card-body">
              <a>
                - Version release 2.2.4<br>
                - 전체적인 디자인 수정<br>

              </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q6" role="button"><div>공지 - 버전 릴리즈 2.2.3</div> </a></li>
          <div class="collapse" id="Q6">
            <div class="card card-body">
              <a>
                - Version release 2.2.3<br>
                - DB수정<br>

              </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q7" role="button"><div>공지 - 버전 릴리즈 2.2.2</div> </a></li>
          <div class="collapse" id="Q7">
            <div class="card card-body">
              <a>
                - Version release 2.2.2<br>
                - 간트차트 수정
              </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q8" role="button"><div>공지 - 버전 릴리즈 2.2.1</div> </a></li>
          <div class="collapse" id="Q8">
            <div class="card card-body">
              <a>
                - Version release 2.2.1<br>
                - 데이터 추가
              </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q9" role="button"><div>공지 - 버전 릴리즈 2.1.1</div> </a></li>
          <div class="collapse" id="Q9">
            <div class="card card-body">
              <a>
                - Version release 2.2.1<br>
                - 캘린더 색상 추가<br>
                - 메인 화면 추가
              </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q10" role="button"><div>공지 - 버전 릴리즈 1.2.2</div> </a></li>
          <div class="collapse" id="Q10">
            <div class="card card-body">
              <a>
                - Version release 1.2.2<br>
                - CSS 미세 위치 조정<br>
                - 프로필 화면 수정
              </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q11" role="button"><div>공지 - 버전 릴리즈 1.2.1</div> </a></li>
          <div class="collapse" id="Q11">
            <div class="card card-body">
              <a>
                - Version release 1.2.1<br>
                - 프로젝트 생성창 수정
              </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q12" role="button"><div>공지 - 버전 릴리즈 1.1.3</div> </a></li>
          <div class="collapse" id="Q12">
            <div class="card card-body">
              <a>
                - Version release 1.1.3<br>
                - QNA 디자인 수정
              </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q13" role="button"><div>공지 - 버전 릴리즈 1.1.2</div> </a></li>
          <div class="collapse" id="Q13">
            <div class="card card-body">
              <a>
                - Version release 1.1.2<br>
                - 하부 항목 수정
              </a>
            </div>
          </div>
          <li><a data-toggle="collapse" href="#Q14" role="button"><div>공지 - 버전 릴리즈 1.1.1</div> </a></li>
          <div class="collapse" id="Q14">
            <div class="card card-body">
              <a>
                - Version release 1.1.1<br>
                - 기본 컴포넌트 디자인 적용<br>
                - 개발 기능 추가<br>
                - Backend 연동
              </a>
            </div>
          </div>

        </ol>

      </div>
    </div>
    <hr>

  </div>
  </div>
</template>

<script>
  import asd from './asd.vue'
    export default {
    components: {asd},
        name: "notice",


    }
</script>

<style scoped>
  .custab{
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5% 0;
    box-shadow: 3px 3px 2px #ccc;
    transition: 0.5s;
  }
  .custab:hover{
    box-shadow: 3px 3px 0px transparent;
    transition: 0.5s;
  }
  a{
    color: black;
  }
  .dropdown-toggle::after {
    display:none;
  }

  li{
    border: 1px solid #ccc;
    padding: 5px;
    /*margin: 0.2% 0;*/
    /*box-shadow: 3px 3px 2px #ccc;*/
    transition: 0.5s;}

  ol, ul {
    list-style: none;
    margin:0px; padding:0px;
  }
  .card{
    /*background-color: #d1ecf1;*/
  }
  li:hover {
    background-color: rgb(236,236,236);
  }

</style>
