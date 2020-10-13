<template>
  <div class="container">
    <form
      v-if="!registrationPassed"
      class="sign-up container"
      @submit.prevent="checkForm"
    >
      <div class="form-group">
        <label for="login">Логин:</label>
        <input
          id="login"
          type="text"
          class="form-control"
          v-model.trim="form.login"
          :class="$v.form.login.$error ? 'is-invalid' : ''"
        />
        <p
          v-if="$v.form.login.$dirty && !$v.form.login.required"
          class="invalid-feedback"
        >
          Обязательное поле
        </p>
        <p
          v-if="$v.form.login.$dirty && !$v.form.login.minLength"
          class="invalid-feedback"
        >
          Здесь должно быть больше 5-и символов
        </p>
      </div>
      <div class="form-group">
        <label for="email">Почта:</label>
        <input
          id="email"
          type="email"
          class="form-control"
          v-model.trim="form.email"
          :class="$v.form.email.$error ? 'is-invalid' : ''"
        />
        <p
          v-if="$v.form.email.$dirty && !$v.form.email.required"
          class="invalid-feedback"
        >
          Обязательное поле
        </p>
        <p
          v-if="$v.form.email.$dirty && !$v.form.email.email"
          class="invalid-feedback"
        >
          Email некорректный
        </p>
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input
          id="password"
          type="password"
          class="form-control"
          v-model.trim="form.password"
          :class="$v.form.password.$error ? 'is-invalid' : ''"
        />
        <p
          v-if="$v.form.password.$dirty && !$v.form.password.required"
          class="invalid-feedback"
        >
          Обязательное поле
        </p>
      </div>
      <div class="form-group">
        <label for="country">Страна проживания:</label>
        <select id="country" class="form-control" v-model="form.country">
          <option
            v-for="(country, index) in countries"
            :key="index"
            :value="country.value"
          >
            {{ country.label }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="thems">Любимые темы:</label>
        <select
          id="thems"
          class="form-control"
          multiple
          v-model="form.favoriteThems"
          :class="$v.form.favoriteThems.$error ? 'is-invalid' : ''"
        >
          <option
            v-for="(them, index) in thems"
            :key="index"
            :value="them.value"
          >
            {{ them.label }}
          </option>
        </select>
        <p
          v-if="
            $v.form.favoriteThems.$dirty && !$v.form.favoriteThems.maxCount
          "
          class="invalid-feedback"
        >
          Не больше 3-х тем
        </p>
      </div>
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="agreeWithRules"
          v-model="form.agreeWithRules"
        />
        <label
          class="form-check-label"
          :class="$v.form.agreeWithRules.$error ? 'is-invalid' : ''"
          for="agreeWithRules"
          >Ознакомлен(а) с правилами</label
        >
        <p
          v-if="
            $v.form.agreeWithRules.$dirty && !$v.form.agreeWithRules.mustBeTrue
          "
          class="invalid-feedback"
        >
          Прочтите правила !
        </p>
      </div>
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="notification"
          v-model="form.agreeWithSendEmail"
        />
        <label class="form-check-label" for="notification"
          >Уведомлять меня о новых курсах</label
        >
      </div>
      <div class="flex">
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            name="exampleRadios"
            v-model="form.gender"
            value="male"
            id="male"
            checked
          />
          <label class="form-check-label" for="male"> Мужчина </label>
        </div>
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            name="exampleRadios"
            v-model="form.gender"
            value="female"
            id="female"
          />
          <label class="form-check-label" for="female"> Женщина </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
    <div v-else>
      <h1>
        {{ `${form.login}, поздравляем вы успешно зарегистрированы!` }}
      </h1>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "FormVuelidate",
  mixins: [validationMixin],
  data() {
    return {
      registrationPassed: false,
      form: {
        login: "",
        email: "",
        password: "",
        country: "kz",
        favoriteThems: ["IT"],
        agreeWithRules: false,
        agreeWithSendEmail: false,
        gender: "male",
      },
      name: "",
      countries: [
        {
          label: "Қазақстан",
          value: "kz",
        },
        {
          label: "США",
          value: "usa",
        },
        {
          label: "Аргентина",
          value: "ag",
        },
      ],
      thems: [
        {
          label: "Технологии",
          value: "IT",
        },
        {
          label: "Языки",
          value: "lang",
        },
        {
          label: "Математика",
          value: "math",
        },
      ],
    };
  },
  validations: {
    form: {
      login: {
        required,
        minLength: minLength(5),
      },
      email: { required, email },
      password: { required },
      agreeWithRules: {
        mustBeTrue(value) {
          return value;
        },
      },
      favoriteThems: {
        maxCount(value) {
          return value.length <= 3;
        },
      },
    },
  },
  methods: {
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        console.log("Валидация прошла успешно");
        this.registrationPassed = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  width: 400px;
  margin: 20px auto;
}
.form-control {
  width: 400px;
}
.form-check {
  margin-right: 10px;
}
button {
  margin-top: 15px;
}
</style>
