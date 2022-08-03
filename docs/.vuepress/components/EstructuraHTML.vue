<template>
    <div class="estructura">

        <div class="estructura-imagen">
            <img src="/Estructura-HTML.png" alt="Estructura Base de HTML">
        </div>

        <div class="estructura-base">

            <p class="doctype"> <span> DOCTYPE →</span> Indica al navegador como debe interpretar el documento.</p>
            <p> <span> HTML →</span> Envuelve todo el contenido de la página, es el elemento raíz y la etiqueta
                principal.</p>
            <p> <router-link to="#head"><span> HEAD</span></router-link> <span>→</span> Aquí va la información para el navegador, es decir los <span>metadatos</span>.</p>
            <p> <span> BODY →</span> Aquí va el contenido para mostrar al usuario.</p>

        </div>

    </div>
</template>

<script>
export default {
    name: 'component-estructuraHTML',
    // props: {},
    data: function () {
        return {}
    },
    // computed: {},
    methods: {
        // -- UI Modification
        // -- Data fetching
        // -- Data handling and transformations
        // -- Validations and Error handling
        // -- Other functions
        // -- Vuex mappings
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
span {
    font-weight: bold;
    color: #83749b;
}

p {
    text-align: justify;
}

.estructura {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    margin-top: 20px;
    grid-gap: 10px;
}

.estructura-imagen img {
    border-radius: 5%;
}

.estructura-base {
    display: grid;
    align-content: center;
}

@media (max-width: 1150px) {

    .estructura {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 1fr 0.5fr;
        margin-top: 20px;
        grid-gap: 10px;
    }

    .estructura-imagen {
        display: grid;
        justify-content: center;
    }

    .estructura-base {
        display: grid;
        align-content: start;
        justify-content: center;
    }

    p {
    margin: 5px 0px;
}
}
</style>