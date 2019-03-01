<template>

  <div class="container">
    <div class="mx-auto" style="width: 500px; margin-top: 200px">
    <form class="form-signin">
      <img class="mb-4" src="" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">로그인 하세요</h1>
      <label for="inputid" class="sr-only">ID</label>
      <input type="text" id="inputid" class="form-control" placeholder="ID" required autofocus v-model="client.id">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="client.password">
      <div class="checkbox mb-3">

      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="signin(client.id,client.password)">Sign in</button>
      <button class="btn btn-lg btn-primary btn-block" type="submit" data-toggle="modal"
              data-target="#signup">회원가입</button>

    </form>
    </div>

    <!-- 회원가입 모달 -->
    <div class="modal fade" id="signup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">회원가입</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3>아이디</h3>
            <input type="text" class="form-control" placeholder="ID" v-model="client.id">
            <br>
            <h3>비밀번호</h3>
            <input type="password" class="form-control" placeholder="password" v-model="client.password">
            <br>
            <h3>이름</h3>
            <input type="text" class="form-control" placeholder="이름" v-model="client.name">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="signup" data-dismiss="modal">회원가입</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {

    data() {
      return {
        client:[{
          id: '',
          password: '',
          name:''
        }],
        user:[{
          id: '',
          password: '',
          name:''
        }]


      }
    },

    methods: {
      signup: function () {
        this.$http.post('http://localhost:8080/shincom/user', {
          id: this.client.id,
          password: this.client.password,
          name: this.client.name
        }).then(function (res) {
          console.log(res);
        });
      },
      signin: function (id,pwd) {
        for(var i=0; i<this.user.length; i++){
          if(this.user.some( ({ id: identity, password }) => id === identity && pwd === password )) {
          this.$router.push({path: '/newproject'})
          } else{
            alert("id, password 를 확인해주세요");
          }
        }




      }




    },


    created() {
      this.$http.get('http://localhost:8080/shincom/users').then((res) => {
        this.user = res.data
      });

    },
    mounted() {


    }
  }

</script>

<style scoped>

</style>
