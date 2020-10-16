<template>
  <header>
    <div class="container">
      <router-link
        :to="{ name: 'main' }"
        class="logo"
      >
        Главный
      </router-link>
      <div class="links">
        <!-- <router-link
          :to="{ name: 'lessons' }"
        >
          Фильмы
        </router-link> -->
        <div class="dropdown">
            <button class="dropbtn">примеры</button>
            <div class="dropdown-content">
                <router-link
                    :to="{name: 'lessons'}">
                    Информация
                </router-link>
                <router-link
                    :to="{name: 'paginat'}">
                    Пагинация
                </router-link>
                <router-link
                    :to="{name: 'search'}">
                    Поиск
                </router-link>
                <router-link
                    :to="{name: 'product-list'}">
                    Список продукты
                </router-link>
                <router-link
                    :to="{name: 'text-editor'}">
                    Текстовый редактор
                </router-link>
                <router-link
                    :to="{name: 'modal-page'}">
                    Модальное окно
                </router-link>
                <router-link
                    :to="{name: 'form-vuelidate'}">
                    Форма валидация
                </router-link>
                <router-link
                    :to="{name: 'films'}">
                    фильмы
                </router-link>
                <router-link
                    :to="{name: 'vuex-example'}">
                    Vuex / Что такое глобальное хранилище
                </router-link>
                <!-- <router-link
                    :to="{name: 'fetch-axios'}">
                    fetch и axios
                </router-link> -->
            </div>
        </div>
        <button
          type="button"
          class="btn btn-outline-light btn-lg"
          @click="onAuthBtnClick"
        >
          {{ getUser ? 'Выйти' : 'Войти' }}
        </button>
      </div>
    </div>
    <auth-modal
      v-if="isAuthModalOpen"
      @close="isAuthModalOpen = false"></auth-modal>
  </header>
</template>

<script>
import AuthModal from '../auth/AuthModal'
import { mapGetters, mapActions } from 'vuex'


export default {
  data() {
    return {
      auth: false,
      isAuthorized: false,
      isAuthModalOpen: false
    }
  },
  components:{
    AuthModal
  },
  computed:{
    ...mapGetters({
      getUser: 'user/getUser'
    })
  },
  created() {
    this.setUser(JSON.parse(localStorage.getItem('user')))
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
      deleteUser: 'user/deleteUser'
    }),
    onAuthBtnClick() {
      if (this.getUser) {
        this.$api.auth.logout()
        localStorage.removeItem('user')
        this.deleteUser()
        this.$router.push({ name: 'main' })
      } else {
        this.isAuthModalOpen = true
      }
    }

  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: #0c0c0c;
  .container {
    margin-top: 0;
    display: flex;
    align-items: baseline;
  }
  padding: 20px 0;
  a {
    text-decoration: none;
    font-weight: 700;
    color: #ffffff;
    font-size: 25px;
  }
  .logo {
    color: #EB5804;
    font-size: 30px;
  }
  .links {
    margin-left: 75px;
    display: flex;
    flex-grow: 1;
  }

  .dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-left: auto;
  margin-right: 22px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  .router-link-exact-active{
      color: #001aff;
  }
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 14px;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
}
</style>
