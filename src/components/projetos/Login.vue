<template>
    <div>
        <div class="div-container">
            
            <form action="">
                <h3>Insira seu login</h3>
                <input type="email" placeholder="Login" id="login">
                <input type="password" placeholder="Senha" id="senha">
                <input type="submit" value="Entrar" @click="logar()" return false>
            </form>
        </div>
    </div>

</template>
<script>
/* eslint-disable */
export default{
    name: 'Login',
    methods: {
        logar(){
            var login = document.getElementById('login').value;
            var senha = document.getElementById('senha').value;

            if(login == "admin" && senha=="admin"){
                alert('Sucesso!')
            } else{
                alert('Acesso negado!')
            }
        },
    }
}
</script>
<style>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .div-container{
        width: 100%;
        height: 100vh;
        font-family: Arial, Helvetica, sans-serif;
        background-image: url('https://img.freepik.com/vetores-gratis/design-de-banner-de-fundo-profissional-de-negocios-abstrato-multiuso_1340-16858.jpg');
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    form{
        width: 300px;
        padding: 20px;
        background-color: rgba(20, 20, 110, 0.833);
        border-radius: 5px;
        box-shadow: 0 0 10px #8bc0e181;
    }
    h3{
        font-size: 24px;
        margin-bottom: 20px;
        color: rgba(255, 255, 255, 0.826);
    }
    input{
        display: block;
        margin: 10px auto;
        width: 100%;
        height: 30px;
        padding: 5px;
        border: 1px solid rgba(20, 20, 110, 0.833);
        border-radius: 3px;
    }
    input[type="submit"] {
        background-color: #4caf50;
        color: white;
        font-weight: bold;
        cursor: pointer;
        line-height: 100%;
        transition: 0.3s;
    }
    input[type="submit"]:hover {
        background-color: #45a049;
    }
    @media screen and (max-width: 600px){
        form{
            width: 90%;
            padding: 15px;
        }
        h3{
            font-size: 20px;
        }
        input{
            height: 25px;
        }
    }
</style>