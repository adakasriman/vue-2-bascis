var vueOne = new Vue({ // vueOne is reference of vue-one-app.
    el: "#vue-one-app",
    data: {
        title: "VUE One"
    },
    methods: {

    },
    computed: {

    }
});

var VueTwo = new Vue({
    el: "#vue-two-app",
    data: {
        title: "VUE Two"
    },
    methods: {
        titlechange: function () {
            vueOne.title = "Title Changed"
        }
    },
    computed: {

    }
})

// You can accecss and modify the vue app with vue references.