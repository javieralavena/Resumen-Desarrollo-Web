<template>
    <div class="card" >
        <img 
            class="img" width="160" height="160"
            src="/1647356939400.jpg"></img>
        <div class="text-center">
            <h1 class="pt-5 px-5">Javiera Troncoso</h1>
            <h3 class="py-5 px-5">DESARROLLADORA WEB FRONT-END TRAINEE / INGENIERA CIVIL INDUSTRIAL</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'component-img',
    // props: {},
    data: function () {
        return {}
    },
    methods: {
    },
}
</script>

<style scoped>
.card {
    background: radial-gradient(circle at top left, #af9dcc, #ffb5a6);
}

.img {
    border-radius: 5%;
}

h1 {
    font-size: 2.5rem;
    line-height: normal;
}

h3 {
    font-size: 1.17rem;
    line-height: normal;
}

@media (min-width: 600px) {

    .card {
        margin-left: 120px !important;
    }

    h1 {
        font-size: 3rem;
        line-height: normal;
    }

}

@media (min-width: 760px) {

    .card {
        margin-left: 120px !important;
    }

    h1 {
        font-size: 4rem;
        line-height: normal;
    }
}

@media (min-width: 960px) {

    .card {
        margin-left: 64px !important;
    }
}

@media (min-width: 1264px) {

    .card {
        margin-left: 120px !important;
    }

    h3 {
    font-size: 1.3rem;
    line-height: normal;
}
}
</style>