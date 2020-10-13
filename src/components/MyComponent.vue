<template>
    <div class="root">
        <label>
            Введите email:
            <input 
                type="email" 
                :value="email"
                @input="emailInput($event.target.value)" />
        </label>
        <label>
            Введите пароль:
            <input 
                type="password" 
                :value="password"
                @input="passInput($event.target.value)" />
        </label>
        <hr>
        email: {{email}}
        <hr>
        password: {{password}}

       <span>Выберите кол-во продуктов</span>
       <div>
           <button @click="decriment">-</button>
           <input type="number" 
                :min="minVal"
                :max="maxVal"
                :value="count" />
           <button @click="incriment">+</button>
       </div>
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    data(){
        return{
            email:'example@mail.ru',
            password: '123456',
            count: 1,
            minVal:1,
            maxVal: 10
        }
    },
    methods:{
        emailInput(value){
            this.email = value;
        },
        passInput(value){
            this.password = value;
        },
        decriment(){
            if(this.count != this.minVal){
                this.count--;
            }
        },
        incriment(){
            if(this.count < this.maxVal){
                this.count++;
            }
        }
    }
}
</script>

<style scoped>
    .root{
        display: flex;
        flex-direction: column;
    }
</style>