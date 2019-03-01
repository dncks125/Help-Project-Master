<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="wrap-banner">
      <div class="main-title">
        <h2>
          Project Helper
        </h2>
        <p class="subtitle">
          Welcom to Project Helper
        </p>
        <br>
        <!--<a class="gh-button" target="_blank" href="https://github.com/creotip/vue-particles"><span class="gh-button__icon"></span>Download</a>-->
       <button type="button" class="btn btn-secondary" data-toggle="modal"  data-target="#login">Let's Go!!</button>
      </div>


      <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
          </div>
        </div>
      </div>

      <div class="modal fade" id="signup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel2">회원가입</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h3>아이디</h3>
              <input type="text" class="form-control" placeholder="ID" v-model="client.id">
              <br>
              <h3>비밀번호</h3>
              <input type="password" class="form-control"  v-model="client.password">
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
      <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        linesColor="#ffffff"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="5"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>

    <foot></foot>
  </div>
</template>

<script>
  import Foot from '../components/Foot.vue'
    export default {
      components: {
        Foot
      },
      name: "intro",
      data() {
        return {
          client: [{
            id: '',
            password: '',
            name: ''
          }],
          user: [{
            id: '',
            password: '',
            name: ''
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
        signin: function (id, pwd) {
          for (var i = 0; i < this.user.length; i++) {
            if (this.user.some(({id: identity, password}) => id === identity && pwd === password)) {
              this.$router.push({path: '/newproject'})
            } else {
              alert("id, password 를 확인해주세요");
            }
          }
        },


        },
      created() {
        this.$http.get('http://localhost:8080/shincom/users').then((res) => {
          this.user = res.data
        });
      }
    }
</script>

<style lang="scss">
  *, :after, :before {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    background: #34393f;
  }

  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  code[class*="language-"],
  pre[class*="language-"],
  pre,
  code {
    font-family: Menlo, Monaco, Andale Mono, Ubuntu Mono, monospace !important;
    font-size: .95em;
    @media (max-width: 767px) {
      font-size: .85em;
    }
  }

  pre.language-js, pre.language-html {
    max-width: 650px;
    margin: 1rem auto !important;
    background: #292929;
    border-radius: 3px;
    box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
  }

  .npm-code {
    background: #292929;
    border-radius: 3px;
    box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  h3 {
    font-weight: 100;
    font-size: 2rem;
  }

  .white {
    color: #ffffff;
  }

  .teko {
    font-family: 'Teko', sans-serif;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .particles-js {
    background-image: url("../assets/image.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .wrap-banner {
    position: relative;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  .main-section {
    max-width: 650px;
    margin: auto;
    padding: 0 1rem;
  }

  .main-title {
    color: #fff;
    z-index: 999;

    h2 {
      font-size: 7rem;
      font-family: 'Teko', sans-serif;
      text-shadow: 8px 8px #000000;
      text-transform: uppercase;
      margin: 0;
      @media (max-width: 767px) {
        font-size: 3rem;
      }
    }
    p.subtitle {
      font-size: 1.7rem;
      margin: 0;
      @media (max-width: 767px) {
        font-size: 1rem;
      }
    }
  }

  .section-title {
    margin: 2rem 0 0 0;
  }

  .footer {
    margin: 1rem 0;
  }

  /*  Github button */

  .gh-button {
    display: inline-block;
  }

  .gh-button {
    box-sizing: border-box;
    height: 24px;
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    padding: 2px 5px 2px 4px;
    color: #333;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    border-radius: 3px;
    padding: 3px 10px 3px 8px;
    font-size: 13px;
    line-height: 16px;
    border-radius: 4px;
    background-color: #eee;
    background-image: linear-gradient(#fcfcfc, #eee);
    border: 1px solid #d5d5d5;
  }

  .gh-button:hover,
  .gh-button:focus {
    text-decoration: none;
    background-color: #ddd;
    background-image: linear-gradient(#eee, #ddd);
    border-color: #ccc;
    color: black;
  }

  .gh-button:active {
    background: #dcdcdc;
    border-color: #b5b5b5;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, .15);
  }

  .gh-button__icon {
    display: inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIxMiAxMiA0MCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAxMiAxMiA0MCA0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSIjMzMzMzMzIiBkPSJNMzIsMTMuNGMtMTAuNSwwLTE5LDguNS0xOSwxOWMwLDguNCw1LjUsMTUuNSwxMywxOGMxLDAuMiwxLjMtMC40LDEuMy0wLjljMC0wLjUsMC0xLjcsMC0zLjINCgljLTUuMywxLjEtNi40LTIuNi02LjQtMi42QzIwLDQxLjYsMTguOCw0MSwxOC44LDQxYy0xLjctMS4yLDAuMS0xLjEsMC4xLTEuMWMxLjksMC4xLDIuOSwyLDIuOSwyYzEuNywyLjksNC41LDIuMSw1LjUsMS42DQoJYzAuMi0xLjIsMC43LTIuMSwxLjItMi42Yy00LjItMC41LTguNy0yLjEtOC43LTkuNGMwLTIuMSwwLjctMy43LDItNS4xYy0wLjItMC41LTAuOC0yLjQsMC4yLTVjMCwwLDEuNi0wLjUsNS4yLDINCgljMS41LTAuNCwzLjEtMC43LDQuOC0wLjdjMS42LDAsMy4zLDAuMiw0LjcsMC43YzMuNi0yLjQsNS4yLTIsNS4yLTJjMSwyLjYsMC40LDQuNiwwLjIsNWMxLjIsMS4zLDIsMywyLDUuMWMwLDcuMy00LjUsOC45LTguNyw5LjQNCgljMC43LDAuNiwxLjMsMS43LDEuMywzLjVjMCwyLjYsMCw0LjYsMCw1LjJjMCwwLjUsMC40LDEuMSwxLjMsMC45YzcuNS0yLjYsMTMtOS43LDEzLTE4LjFDNTEsMjEuOSw0Mi41LDEzLjQsMzIsMTMuNHoiLz4NCjwvc3ZnPg0K);
    background-size: contain;
  }

</style>
