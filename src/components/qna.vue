<template>
  <div>
    <asd></asd>
    <div class="container" style="margin-top: 20px; margin-left: 300px">
      <div class="row">
        <div class="col-sm">
          <h1>자주하는 질문</h1>
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

      <div class="container-fluid" style="margin: 0px; padding: 0px; margin-top: 40px">
        <ol>
          <li><a data-toggle="collapse" href="#Q1" role="button"><div>Q. 회원가입은 어떻게 하나요?</div> </a></li>
          <div class="collapse" id="Q1">
            <div class="card card-body">
              <img src="../assets/img/login.png" style="width:300px; height: 220px;"><br><br>
              <a>A. 로그인 화면에서 회원가입을 클릭하고 간단한 정보 입력 후 가입</a>
            </div>
          </div>

          <li><a data-toggle="collapse" href="#Q2" role="button"><div>Q. 캘린더는 어떻게 사용하나요?</div> </a></li>
          <div class="collapse" id="Q2">
            <div class="card card-body">
              <img src="../assets/img/cal.png" style="width:300px; height: 220px;"><br>
              <a>&nbsp;A. 원하는 날짜위에 마우스를 올리면 Add Event가 뜬다.<br>
                <img src="../assets/img/cal2.png" style="width:300px; height: 250px;"><br><br>
              &nbsp;클릭시 상단에 작은 창이 생기고 기입할 정보와 컬러를 선택하고 추가버튼을 누른다.</a>
            </div>
          </div>

          <li><a data-toggle="collapse" href="#Q3" role="button"><div>Q. 프로젝트는 어떻게 만드나요?</div> </a></li>
          <div class="collapse" id="Q3">
            <div class="card card-body">
              <img src="../assets/img/newpro.png" style="width:300px; height: 450px;"><br><br>
              <a>A. 왼쪽에서 프로젝트 버튼을 누르면 프로젝트 목록이 뜬다.<br>
                그곳에서 프로젝트 추가를 누르면 프로젝트 이름, 프로젝트 팀원이름,<br>
                날짜등을 기입할수 있다. 기입 완료 후 완료 버튼을 클릭한다.
                </a>
            </div>
          </div>

          <li><a data-toggle="collapse" href="#Q4" role="button"><div>Q. 간트차트는 어떻게 사용하나요?</div> </a></li>
          <div class="collapse" id="Q4">
            <div class="card card-body">
              <img src="../assets/img/gan1.png" style="width:300px; height: 220px;"><br>
              <a>
                A. 간트차트는 사용자가 진행중인 프로젝트의 진행계힉과 정도를 파악하기 위해 사용됩니다.<br>
                간트차트는 하위 항목으로 추가할 수 도 있고 새 단락으로 추가할 수도 있습니다.<br>
                <img src="../assets/img/gan2.png" style="width:500px; height: 300px;"><br><br>
                간트차트 단위는 월 단위이며 차트와 차트를 연결해 진행 순서를 파악하기 용이합니다.<br>
                간트차트 작성을 위해 왼쪽에 + 버튼을 클릭하면 간트차트 추가를 위한 창이 나타나고<br><br>
                <img src="../assets/img/gan3.png" style="width:400px; height: 220px;"><br>
                이름과 날짜와 같은 간단한 정보를 입력하면 완료됩니다.
              </a>
            </div>
          </div>

          <li><a data-toggle="collapse" href="#Q5" role="button"><div>Q. 게시판은 어떻게 관리하나요?</div> </a></li>
          <div class="collapse" id="Q5">
            <div class="card card-body">
              <a>
                A. 게시판 관리는 게시판을 추가로 생성하고 관리할 수 있는 기능입니다.<br>
                <img src="../assets/img/board1.png" style="width:200px; height: 80px;"><br><br>
                생성 버튼을 누르면 아래와 같은 프로젝트 생성창을 통해서 프로젝트를 생성가능 합니다.<br>
                <img src="../assets/img/board2.png" style="width:500px; height: 200px;"><br><br>
                삭제 버튼을 누르면 아래와 같은 프로젝트 삭제창을 통해서 프로젝트를 삭제가능 합니다.<br>
                <img src="../assets/img/board3.png" style="width:400px; height: 150px;"><br><br>
              </a>
            </div>
          </div>

          <li><a data-toggle="collapse" href="#Q6" role="button"><div>Q. 오류제보 및 건의사항은 어디에서 하나요?</div> </a></li>
          <div class="collapse" id="Q6">
            <div class="card card-body">
              <a>
                A. hyuntae5243@gamil.com으로 건의사항 및 오류제보를 받고 있습니다.
              </a>
            </div>
          </div>

          <li><a data-toggle="collapse" href="#Q7" role="button"><div>Q. 로그아웃은 어떻게 하나요?</div> </a></li>
          <div class="collapse" id="Q7">
            <div class="card card-body">
              <a>
                A. 우측 상단의 로그아웃 버튼을 누르면 간단하게 로그아웃이 가능합니다.<br>
                <img src="../assets/img/out1.png" style="width:800px; height: 400px;"><br><br>
              </a>
            </div>
          </div>
        </ol>

      </div>
    </div>
  </div>
</template>

<script>
  import asd from './asd.vue'
  export default {
    components: {asd},
    name: "qna"
  }
</script>

<style scoped>
  a{
    color: black;
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
